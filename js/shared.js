/**
 * Daniel's House — Shared UI Logic
 * Handles cart state, drawer, free shipping bar, email popup, search modal.
 * Uses in-memory cart state (resets on page reload — full Shopify cart integration would persist).
 */
(function() {
  const FREE_SHIPPING_THRESHOLD = 75;
  const SUBSCRIBE_DISCOUNT = 0.10; // all subscribe options apply 10% off
  const BUNDLE_SUBSCRIBE_BONUS = 0.10; // extra 10% on top of bundle discount when subscribed
  const BUNDLE_DISCOUNT_DEFAULT = 0.10;

  // ═══ CART STATE ═══
  // In-memory only. Production would sync to Shopify cart API.
  const cart = {
    items: [], // [{ slug, name, price, image, qty, subscribe, cadence, bundleName, bundleDiscount }]

    add(product, opts = {}) {
      const bundleName = opts.bundleName || null;
      // Cadence: 'monthly' for standard subscribe, 'smart' for Smart Refill, null when one-time.
      // We keep cart line items for the same product/subscribe state but DIFFERENT cadence
      // separate, so customers can see (and edit) the cadence per line item.
      const cadence = opts.subscribe ? (opts.cadence || 'monthly') : null;
      const existing = this.items.find(i =>
        i.slug === product.slug &&
        i.subscribe === !!opts.subscribe &&
        (i.cadence || null) === cadence &&
        i.bundleName === bundleName
      );
      if (existing) {
        existing.qty += opts.qty || 1;
      } else {
        this.items.push({
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image,
          qty: opts.qty || 1,
          subscribe: !!opts.subscribe,
          cadence: cadence,
          bundleName: bundleName,
          bundleDiscount: opts.bundleDiscount || 0
        });
      }
      this.save();
      this.render();
      this.updateShippingBar();
      openCart();
    },

    addBundle(productSlugs, bundleName, discount = BUNDLE_DISCOUNT_DEFAULT, subscribe = false, opts = {}) {
      // Add all products in a bundle at the bundle discount, grouped by bundleName + subscribe state.
      // The cadence (monthly / bimonthly / quarterly / smart) is stored on each line item
      // so the order can fulfill correctly. Cadence only applies when subscribe = true.
      const cadence = subscribe ? (opts.cadence || 'monthly') : null;
      const products = productSlugs
        .map(s => window.getProductBySlug && window.getProductBySlug(s))
        .filter(Boolean);
      if (products.length === 0) return;
      products.forEach(p => {
        const existing = this.items.find(i =>
          i.slug === p.slug && i.bundleName === bundleName &&
          i.subscribe === !!subscribe && (i.cadence || null) === cadence
        );
        if (existing) {
          existing.qty += 1;
        } else {
          this.items.push({
            slug: p.slug,
            name: p.name,
            price: p.price,
            image: p.image,
            qty: 1,
            subscribe: !!subscribe,
            bundleName: bundleName,
            bundleDiscount: discount,
            cadence: cadence
          });
        }
      });
      this.save();
      this.render();
      this.updateShippingBar();
      openCart();
    },

    remove(slug, subscribe, bundleName) {
      this.items = this.items.filter(i => !(
        i.slug === slug &&
        i.subscribe === subscribe &&
        i.bundleName === (bundleName || null)
      ));
      this.save();
      this.render();
      this.updateShippingBar();
    },

    updateQty(slug, subscribe, bundleName, delta) {
      const item = this.items.find(i =>
        i.slug === slug &&
        i.subscribe === subscribe &&
        i.bundleName === (bundleName || null)
      );
      if (!item) return;
      item.qty += delta;
      if (item.qty <= 0) {
        this.remove(slug, subscribe, bundleName);
        return;
      }
      this.save();
      this.render();
      this.updateShippingBar();
    },

    subtotal() {
      return this.items.reduce((sum, i) => {
        let price = i.price;
        // Bundle pricing — stacks an extra 10% off when subscribed
        if (i.bundleName && i.bundleDiscount) {
          price = i.price * (1 - i.bundleDiscount);
          if (i.subscribe) price *= (1 - BUNDLE_SUBSCRIBE_BONUS);
        } else if (i.subscribe) {
          price = i.price * (1 - SUBSCRIBE_DISCOUNT);
        }
        return sum + price * i.qty;
      }, 0);
    },

    count() {
      return this.items.reduce((sum, i) => sum + i.qty, 0);
    },

    save() {
      // Persist to localStorage so the cart survives page reloads AND tab/browser restarts.
      // In production this would also push to Shopify cart API.
      try {
        localStorage.setItem('dh_cart', JSON.stringify(this.items));
      } catch (e) { /* ignore quota / disabled storage */ }
      // Broadcast a change event so other UI (floating cart badge, etc.) can re-sync.
      try {
        window.dispatchEvent(new CustomEvent('dh:cart:change', { detail: { items: this.items } }));
      } catch (e) { /* ignore */ }
    },

    load() {
      try {
        let data = localStorage.getItem('dh_cart');
        // Migration: pick up an older sessionStorage cart on first load.
        if (!data) {
          const legacy = sessionStorage.getItem('dh_cart');
          if (legacy) {
            data = legacy;
            try { localStorage.setItem('dh_cart', legacy); } catch (e) { /* ignore */ }
            try { sessionStorage.removeItem('dh_cart'); } catch (e) { /* ignore */ }
          }
        }
        if (data) this.items = JSON.parse(data);
      } catch (e) { /* ignore */ }
    },

    render() {
      const body = document.querySelector('.cart-body');
      const trigger = document.querySelector('.cart-trigger-count');
      const subtotalEl = document.querySelector('.cart-totals .subtotal-amount');
      const totalEl = document.querySelector('.cart-totals .total-amount');
      const checkoutBtn = document.querySelector('.cart-checkout');
      const shipNote = document.querySelector('.cart-shipping-note');

      if (trigger) trigger.textContent = this.count();

      if (!body) return;

      if (this.items.length === 0) {
        body.innerHTML = `
          <div class="cart-empty">
            <div class="cart-empty-text">Your cart is empty.</div>
            <a href="routines.html" style="color: var(--gold); text-decoration: underline; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;">Browse Routines →</a>
          </div>
        `;
      } else {
        body.innerHTML = this.items.map(item => {
          let price = item.price;
          let labels = '';
          // Bundle pricing takes precedence
          if (item.bundleName && item.bundleDiscount) {
            price = item.price * (1 - item.bundleDiscount);
            if (item.subscribe) price *= (1 - BUNDLE_SUBSCRIBE_BONUS);
            labels += `<div class="cart-item-meta subscribe">${item.bundleName}</div>`;
            if (item.subscribe) {
              labels += `<div class="cart-item-meta subscribe">↻ Bundle Subscription · Ships every 30 days</div>`;
            }
          } else if (item.subscribe) {
            price = item.price * (1 - SUBSCRIBE_DISCOUNT);
            labels += `<div class="cart-item-meta subscribe">↻ Subscribe &amp; Save</div>`;
          }
          const bundleAttr = item.bundleName ? item.bundleName.replace(/"/g, '&quot;') : '';
          return `
            <div class="cart-item" data-slug="${item.slug}" data-subscribe="${item.subscribe}" data-bundle="${bundleAttr}">
              <a href="product.html?slug=${item.slug}" class="cart-item-img"><img src="${item.image}" alt="${item.name}"/></a>
              <div class="cart-item-info">
                <div class="cart-item-name">The House <em>${item.name}</em></div>
                <div class="cart-item-meta">$${price.toFixed(2)} each</div>
                ${labels}
                <div class="cart-item-controls">
                  <div class="cart-qty">
                    <button data-action="dec">−</button>
                    <span>${item.qty}</span>
                    <button data-action="inc">+</button>
                  </div>
                  <button class="cart-item-remove" data-action="remove">Remove</button>
                </div>
              </div>
              <div class="cart-item-price">$${(price * item.qty).toFixed(2)}</div>
            </div>
          `;
        }).join('');

        // Wire up item controls
        body.querySelectorAll('.cart-item').forEach(itemEl => {
          const slug = itemEl.dataset.slug;
          const subscribe = itemEl.dataset.subscribe === 'true';
          const bundleName = itemEl.dataset.bundle || null;
          itemEl.querySelector('[data-action="inc"]').addEventListener('click', () => this.updateQty(slug, subscribe, bundleName, 1));
          itemEl.querySelector('[data-action="dec"]').addEventListener('click', () => this.updateQty(slug, subscribe, bundleName, -1));
          itemEl.querySelector('[data-action="remove"]').addEventListener('click', () => this.remove(slug, subscribe, bundleName));
        });
      }

      const subtotal = this.subtotal();
      if (subtotalEl) subtotalEl.textContent = '$' + subtotal.toFixed(2);
      if (totalEl) totalEl.textContent = '$' + subtotal.toFixed(2);

      if (checkoutBtn) {
        if (this.items.length === 0) {
          checkoutBtn.style.display = 'none';
        } else {
          checkoutBtn.style.display = 'block';
        }
      }

      if (shipNote) {
        const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
        if (remaining <= 0 && subtotal > 0) {
          shipNote.textContent = "✓ You've unlocked free shipping.";
          shipNote.classList.add('unlocked');
        } else if (subtotal > 0) {
          shipNote.textContent = `Add $${remaining.toFixed(2)} more for free shipping.`;
          shipNote.classList.remove('unlocked');
        } else {
          shipNote.textContent = `Free shipping on orders over $${FREE_SHIPPING_THRESHOLD}.`;
          shipNote.classList.remove('unlocked');
        }
      }
    },

    updateShippingBar() {
      const bar = document.querySelector('.shipping-bar');
      if (!bar) return;
      const text = bar.querySelector('.shipping-bar-text');
      const fill = bar.querySelector('.shipping-bar-progress');
      const subtotal = this.subtotal();
      const remaining = FREE_SHIPPING_THRESHOLD - subtotal;
      if (remaining <= 0 && subtotal > 0) {
        text.innerHTML = `✓ <strong>Free shipping unlocked</strong>`;
        fill.style.width = '100%';
        bar.classList.add('complete');
      } else if (subtotal > 0) {
        const pct = (subtotal / FREE_SHIPPING_THRESHOLD) * 100;
        text.innerHTML = `Add <strong>$${remaining.toFixed(2)}</strong> more for free shipping`;
        fill.style.width = pct + '%';
        bar.classList.remove('complete');
      } else {
        text.innerHTML = `Free shipping on orders over <strong>$${FREE_SHIPPING_THRESHOLD}</strong>`;
        fill.style.width = '0%';
        bar.classList.remove('complete');
      }
    }
  };

  window.dhCart = cart;

  // ═══ CART DRAWER ═══
  function openCart() {
    // Preferred: open the floating cart panel (used everywhere on this site).
    const floating = document.querySelector('.cart-floating');
    if (floating) {
      // Trigger its own toggle to use its render() pipeline.
      const btn = floating.querySelector('.cart-floating-toggle');
      if (btn && !floating.classList.contains('expanded')) btn.click();
      return;
    }
    // Legacy fallback (if a page still has the old slide-out drawer)
    const overlay = document.querySelector('.cart-overlay');
    const drawer = document.querySelector('.cart-drawer');
    if (!overlay || !drawer) return;
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    document.querySelector('.cart-overlay')?.classList.remove('open');
    document.querySelector('.cart-drawer')?.classList.remove('open');
    // Floating cart has its own close path triggered by its overlay/close button.
    document.body.style.overflow = '';
  }
  window.dhOpenCart = openCart;

  // ═══ EMAIL POPUP ═══
  const POPUP_DELAY = 8000;
  const POPUP_DISMISSED_KEY = 'dh_popup_dismissed';
  let popupShown = false;
  function showPopup() {
    if (popupShown) return;
    if (!document.querySelector('.popup-overlay')) return; // Popup removed — no-op
    if (sessionStorage.getItem(POPUP_DISMISSED_KEY)) return;
    popupShown = true;
    document.querySelector('.popup-overlay')?.classList.add('open');
  }
  function hidePopup() {
    document.querySelector('.popup-overlay')?.classList.remove('open');
    sessionStorage.setItem(POPUP_DISMISSED_KEY, '1');
  }

  // ═══ EXPANDING SEARCH PANEL ═══
  function openSearch() {
    const panel = document.querySelector('.search-panel');
    if (!panel) return;
    panel.classList.add('open');
    document.querySelector('.search-trigger')?.classList.add('active');
    setTimeout(() => panel.querySelector('.search-panel-input')?.focus(), 100);
  }
  function closeSearch() {
    document.querySelector('.search-panel')?.classList.remove('open');
    document.querySelector('.search-trigger')?.classList.remove('active');
  }
  function performSearch(query) {
    const results = document.querySelector('.search-panel-results');
    if (!results) return;
    const q = query.trim().toLowerCase();
    if (!q) {
      results.innerHTML = '<div class="search-panel-hint">Type to search products, routines, and bundles.</div>';
      return;
    }
    if (!window.PRODUCTS || !window.PRODUCTS.length) {
      results.innerHTML = '<div class="search-panel-empty">Product data unavailable.</div>';
      return;
    }

    // ── Products ─────────────────────────────────────────────
    const productMatches = window.PRODUCTS.filter(p => {
      const haystack = [p.name, p.tag, p.tagline, p.description, ...(p.bestFor || []), ...(p.ingredients || []).map(i => i.name || '')].join(' ').toLowerCase();
      return haystack.includes(q);
    }).slice(0, 8);

    // Helper: pull rich content from BUNDLE_DETAILS for richer matching
    const detailHaystack = (bundleId, category) => {
      const d = (window.BUNDLE_DETAILS && window.BUNDLE_DETAILS[category] && window.BUNDLE_DETAILS[category][bundleId]) || null;
      if (!d) return '';
      return [d.eyebrow || '', d.description || '', d.whyThis || ''].join(' ');
    };

    // ── Curated routines (AM, PM, Ultimate, Daniel's Daily, Mom's, etc.) ──
    // Search name, blurb, descriptions, and the names + tags + ingredients
    // of the products inside each routine.
    const routineMatches = (window.CURATED_BUNDLES || []).filter(b => {
      const productInfo = (b.slugs || [])
        .map(s => window.getProductBySlug && window.getProductBySlug(s))
        .filter(Boolean)
        .map(p => `${p.name} ${p.tag || ''} ${(p.ingredients || []).map(i => i.name || '').join(' ')}`)
        .join(' ');
      const haystack = [b.name, b.id, b.blurb || '', productInfo, detailHaystack(b.id, 'curated')].join(' ').toLowerCase();
      return haystack.includes(q);
    }).slice(0, 6);

    // ── Concern bundles (Anti-Aging, Sleep, Hydration, etc.) ──
    const bundleMatches = (window.CONCERN_BUNDLES || []).filter(b => {
      const productInfo = (b.slugs || [])
        .map(s => window.getProductBySlug && window.getProductBySlug(s))
        .filter(Boolean)
        .map(p => `${p.name} ${p.tag || ''} ${(p.ingredients || []).map(i => i.name || '').join(' ')}`)
        .join(' ');
      const haystack = [b.name, b.id, b.blurb || '', productInfo, detailHaystack(b.id, 'concern')].join(' ').toLowerCase();
      return haystack.includes(q);
    }).slice(0, 6);

    if (!productMatches.length && !routineMatches.length && !bundleMatches.length) {
      results.innerHTML = `<div class="search-panel-empty">No matches for "${query}".</div>`;
      return;
    }

    // Build the results HTML — group by type, routines/bundles first
    // (they're higher-intent entry points), then products.
    const parts = [];

    if (routineMatches.length) {
      parts.push(`
        <div class="search-panel-group-label">Routines · ${routineMatches.length}</div>
        ${routineMatches.map(b => {
          const count = (b.slugs || []).length;
          const pct = Math.round((b.discount || 0.15) * 100);
          return `
            <a href="routine.html?slug=${encodeURIComponent(b.id)}" class="search-panel-result search-panel-result-bundle">
              <div class="search-panel-result-kind kind-routine">Routine</div>
              <div class="search-panel-result-info">
                <div class="search-panel-result-name">${b.name}</div>
                <div class="search-panel-result-tag">${count} products · ${pct}% off</div>
              </div>
              <div class="search-panel-result-arrow">→</div>
            </a>
          `;
        }).join('')}
      `);
    }

    if (bundleMatches.length) {
      parts.push(`
        <div class="search-panel-group-label">Bundles · ${bundleMatches.length}</div>
        ${bundleMatches.map(b => {
          const count = (b.slugs || []).length;
          const pct = Math.round((b.discount || 0.1) * 100);
          return `
            <a href="bundles.html#${encodeURIComponent(b.id)}" class="search-panel-result search-panel-result-bundle">
              <div class="search-panel-result-kind kind-bundle">Bundle</div>
              <div class="search-panel-result-info">
                <div class="search-panel-result-name">${b.name}</div>
                <div class="search-panel-result-tag">${count} products · ${pct}% off</div>
              </div>
              <div class="search-panel-result-arrow">→</div>
            </a>
          `;
        }).join('')}
      `);
    }

    if (productMatches.length) {
      parts.push(`
        <div class="search-panel-group-label">Products · ${productMatches.length}</div>
        ${productMatches.map(p => `
          <a href="product.html?slug=${p.slug}" class="search-panel-result">
            <img src="${p.image}" alt="${p.name}" loading="lazy"/>
            <div class="search-panel-result-info">
              <div class="search-panel-result-name">The House <em>${p.name}</em></div>
              <div class="search-panel-result-tag">${(p.tag || '').split('·')[0].trim()}</div>
            </div>
            <div class="search-panel-result-price">$${p.price.toFixed(0)}</div>
          </a>
        `).join('')}
      `);
    }

    results.innerHTML = parts.join('');
  }

  // ═══ INIT ═══
  document.addEventListener('DOMContentLoaded', () => {
    cart.load();
    cart.render();
    cart.updateShippingBar();

    // Sticky nav shadow — adds .scrolled class once user has moved past the shipping bar
    const navEl = document.querySelector('nav');
    if (navEl) {
      const onScroll = () => {
        if (window.scrollY > 8) navEl.classList.add('scrolled');
        else navEl.classList.remove('scrolled');
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    // Cart triggers
    document.querySelectorAll('.cart-trigger').forEach(el => el.addEventListener('click', openCart));
    document.querySelector('.cart-overlay')?.addEventListener('click', closeCart);
    document.querySelector('.cart-close')?.addEventListener('click', closeCart);

    // Popup
    setTimeout(showPopup, POPUP_DELAY);
    document.querySelector('.popup-overlay')?.addEventListener('click', e => {
      if (e.target === e.currentTarget) hidePopup();
    });
    document.querySelector('.popup-close')?.addEventListener('click', hidePopup);
    document.querySelector('.popup-skip')?.addEventListener('click', hidePopup);
    const popupForm = document.querySelector('.popup-form');
    if (popupForm) {
      popupForm.addEventListener('submit', e => {
        e.preventDefault();
        const popup = document.querySelector('.popup');
        const email = document.querySelector('.popup-input')?.value;
        if (!email) return;
        // In production this would POST to Klaviyo/Mailchimp/etc.
        popup.innerHTML = `
          <div class="popup-success">
            ✓ You're in. Check your inbox for code <strong style="color: var(--gold); font-size: 22px;">WELCOME10</strong>.
          </div>
        `;
        sessionStorage.setItem(POPUP_DISMISSED_KEY, '1');
        setTimeout(hidePopup, 3500);
      });
    }

    // Search trigger (the "Search" text button in the top nav) — always navigates
    // to the dedicated site-wide search page.
    document.querySelectorAll('.search-trigger').forEach(el => {
      el.addEventListener('click', () => {
        window.location.href = 'search.html';
      });
    });
    document.querySelector('.search-panel-close')?.addEventListener('click', closeSearch);
    const searchInput = document.querySelector('.search-panel-input');
    if (searchInput) {
      searchInput.addEventListener('input', e => performSearch(e.target.value));
      searchInput.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const q = (e.target.value || '').trim();
          window.location.href = 'search.html' + (q ? '?q=' + encodeURIComponent(q) : '');
        }
      });
    }
    // Click outside the search panel content closes it
    document.querySelector('.search-panel')?.addEventListener('click', e => {
      if (e.target.classList.contains('search-panel')) closeSearch();
    });

    // ═══ PAGE FILTER (floating button → centered modal with backdrop) ═══
    document.querySelectorAll('.page-filter').forEach(filterEl => {
      // Defensive inline-style positioning — guarantees the floating search is
      // always top-right of viewport regardless of any stylesheet conflict.
      const isMobile = window.matchMedia('(max-width: 600px)').matches;
      Object.assign(filterEl.style, {
        position: 'fixed',
        top: isMobile ? '12px' : '14px',
        right: isMobile ? '12px' : '16px',
        left: 'auto',
        bottom: 'auto',
        zIndex: '1100'
      });
      window.addEventListener('resize', () => {
        const m = window.matchMedia('(max-width: 600px)').matches;
        filterEl.style.top = m ? '12px' : '14px';
        filterEl.style.right = m ? '12px' : '16px';
      });

      const input = filterEl.querySelector('.page-filter-input');
      const count = filterEl.querySelector('.page-filter-count');
      const clearBtn = filterEl.querySelector('.page-filter-clear');
      const clearAllBtn = filterEl.querySelector('.page-filter-clear-all');
      const toggleBtn = filterEl.querySelector('.page-filter-toggle');
      const toggleBadge = filterEl.querySelector('.page-filter-toggle-badge');
      const closeBtn = filterEl.querySelector('.page-filter-close');
      const overlay = filterEl.querySelector('.page-filter-overlay');
      const resultsEl = filterEl.querySelector('.page-filter-results');
      const targetSel = filterEl.dataset.filterTarget;
      const noun = filterEl.dataset.filterNoun || 'items';
      if (!input) return;
      const items = targetSel ? Array.from(document.querySelectorAll(targetSel)) : [];
      const total = items.length;

      // Inject each filterable item's freeFrom tags as hidden text so the textContent-based
      // filter logic catches dietary chips like "Vegan", "Gluten-Free", etc.
      items.forEach(item => {
        if (item.querySelector('.filter-tags-hidden')) return;
        const slug = item.dataset.addSlug
          || item.querySelector('[data-add-slug]')?.dataset.addSlug
          || item.querySelector('[data-slug]')?.dataset.slug;
        if (!slug || !window.PRODUCTS) return;
        const product = window.PRODUCTS.find(p => p.slug === slug);
        if (!product || !product.freeFrom || !product.freeFrom.length) return;
        const tagSpan = document.createElement('span');
        tagSpan.className = 'filter-tags-hidden';
        tagSpan.setAttribute('aria-hidden', 'true');
        tagSpan.style.cssText = 'position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;';
        tagSpan.textContent = product.freeFrom.join(' ');
        item.appendChild(tagSpan);
      });

      function expandFilter() {
        filterEl.classList.add('expanded');
        filterEl.classList.remove('collapsed');
        document.body.classList.add('has-page-filter-modal');
        setTimeout(() => input.focus(), 120);
      }
      function collapseFilter() {
        filterEl.classList.remove('expanded');
        filterEl.classList.add('collapsed');
        document.body.classList.remove('has-page-filter-modal');
      }
      function toggleFilter() {
        if (filterEl.classList.contains('expanded')) collapseFilter();
        else expandFilter();
      }

      function renderSiteWideResults(q, activeChips) {
        if (!resultsEl) return;
        const showResults = q.length > 0 || activeChips.length > 0;
        if (!showResults || !window.PRODUCTS || !window.PRODUCTS.length) {
          resultsEl.classList.remove('show');
          resultsEl.innerHTML = '';
          return;
        }
        // Group active chips by their group
        const groupChips = {};
        filterEl.querySelectorAll('.filter-chip.active').forEach(chip => {
          const g = chip.dataset.group || '_';
          (groupChips[g] = groupChips[g] || []).push(chip.dataset.chip.toLowerCase());
        });
        const groups = Object.values(groupChips);
        const matches = window.PRODUCTS.filter(p => {
          const haystack = [
            p.name, p.tag, p.tagline, p.description, p.category, p.sub,
            ...(p.bestFor || []),
            ...(p.ingredients || []).map(i => i.name).filter(Boolean)
          ].join(' ').toLowerCase();
          const textMatch = !q || haystack.includes(q);
          const chipMatch = groups.every(chips => chips.every(c => haystack.includes(c)));
          return textMatch && chipMatch;
        }).slice(0, 12);
        if (matches.length === 0) {
          resultsEl.innerHTML = `<div class="page-filter-empty">No products match.</div>`;
        } else {
          resultsEl.innerHTML = `
            <div class="page-filter-results-title">Site-wide · ${matches.length} ${matches.length === 1 ? 'product' : 'products'}</div>
            <div class="page-filter-results-list">
              ${matches.map(p => `
                <a href="product.html?slug=${p.slug}" class="page-filter-result">
                  <img src="${p.image}" alt="${p.name}" loading="lazy"/>
                  <div class="page-filter-result-info">
                    <div class="page-filter-result-name">The House <em>${p.name}</em></div>
                    <div class="page-filter-result-meta">${p.category === 'skincare' ? 'Skincare' : 'Supplement'}</div>
                  </div>
                  <div class="page-filter-result-price">$${p.price.toFixed(0)}</div>
                </a>
              `).join('')}
            </div>`;
        }
        resultsEl.classList.add('show');
      }

      function runFilter() {
        const q = input.value.trim().toLowerCase();
        const activeChips = Array.from(filterEl.querySelectorAll('.filter-chip.active'));
        const groupChips = {};
        activeChips.forEach(chip => {
          const g = chip.dataset.group || '_';
          (groupChips[g] = groupChips[g] || []).push(chip.dataset.chip.toLowerCase());
        });
        const groups = Object.values(groupChips);

        // Filter current page items (if any)
        let visible = 0;
        items.forEach(item => {
          const text = (item.textContent || '').toLowerCase();
          const textMatch = !q || text.includes(q);
          const chipMatch = groups.every(chips => chips.every(c => text.includes(c)));
          const match = textMatch && chipMatch;
          item.style.display = match ? '' : 'none';
          if (match) visible++;
        });
        if (count) {
          count.textContent = total > 0 ? `${visible} of ${total} ${noun} on this page` : '';
        }

        const activeCount = activeChips.length;
        const hasAny = q.length > 0 || activeCount > 0;
        filterEl.classList.toggle('has-query', q.length > 0);
        filterEl.classList.toggle('has-active', hasAny);
        if (toggleBadge) toggleBadge.textContent = activeCount > 0 ? activeCount : (q ? '·' : '');

        renderSiteWideResults(q, activeChips);
      }

      // Toggle button (open/close modal)
      if (toggleBtn) toggleBtn.addEventListener('click', e => {
        e.stopPropagation();
        toggleFilter();
      });
      // Close button inside panel
      if (closeBtn) closeBtn.addEventListener('click', collapseFilter);
      // Overlay click closes
      if (overlay) overlay.addEventListener('click', collapseFilter);
      // ESC closes
      document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && filterEl.classList.contains('expanded')) collapseFilter();
      });

      // Input typing
      input.addEventListener('input', runFilter);
      // Enter → go to dedicated search page with full site-wide results
      input.addEventListener('keydown', e => {
        if (e.key === 'Enter') {
          e.preventDefault();
          const q = input.value.trim();
          // Collect active filter chips to forward as state
          const activeChips = Array.from(filterEl.querySelectorAll('.filter-chip.active'))
            .map(c => `${c.dataset.group || 'tag'}:${c.dataset.chip || c.dataset.value || c.textContent.trim()}`);
          const params = new URLSearchParams();
          if (q) params.set('q', q);
          if (activeChips.length) params.set('filters', activeChips.join(','));
          window.location.href = 'search.html' + (params.toString() ? '?' + params.toString() : '');
        }
      });
      // Clear text
      if (clearBtn) clearBtn.addEventListener('click', () => {
        input.value = '';
        runFilter();
        input.focus();
      });
      // Clear all
      if (clearAllBtn) clearAllBtn.addEventListener('click', () => {
        input.value = '';
        filterEl.querySelectorAll('.filter-chip.active').forEach(c => c.classList.remove('active'));
        runFilter();
      });
      // Chip toggles
      filterEl.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', () => {
          chip.classList.toggle('active');
          runFilter();
        });
      });

      runFilter();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        closeCart();
        closeSearch();
        hidePopup();
        lightbox.close();
      }
      if (lightbox.isOpen()) {
        if (e.key === 'ArrowRight') lightbox.next();
        if (e.key === 'ArrowLeft') lightbox.prev();
      }
    });

    // Lightbox controls
    document.querySelector('.lightbox-overlay')?.addEventListener('click', e => {
      if (e.target === e.currentTarget) lightbox.close();
    });
    document.querySelector('.lightbox-close')?.addEventListener('click', () => lightbox.close());
    document.querySelector('.lightbox-arrow.prev')?.addEventListener('click', () => lightbox.prev());
    document.querySelector('.lightbox-arrow.next')?.addEventListener('click', () => lightbox.next());
  });

  // ═══ LIGHTBOX / PRODUCT CAROUSEL ═══
  // Reusable popup carousel for browsing a list of products.
  // Open via dhLightbox.open(slugs, startIndex, opts)
  //   slugs: array of product slugs
  //   startIndex: which slug to show first (default 0)
  //   opts.title: optional bundle/context title shown in header
  //   opts.bundleName: if set, "Add Bundle" button appears (uses cart.addBundle)
  //   opts.bundleSlugs: required if bundleName set — full list of slugs in bundle
  //   opts.bundleDiscount: optional discount (default 0.10)
  const lightbox = {
    products: [],
    index: 0,
    title: '',
    bundleName: null,
    bundleSlugs: [],
    bundleDiscount: 0.10,
    bundleSubscribe: false,

    open(slugs, startIndex = 0, opts = {}) {
      if (!window.PRODUCTS) return;
      this.products = slugs.map(s => window.getProductBySlug(s)).filter(Boolean);
      if (this.products.length === 0) return;
      this.index = Math.max(0, Math.min(startIndex, this.products.length - 1));
      this.title = opts.title || '';
      this.bundleName = opts.bundleName || null;
      this.bundleSlugs = opts.bundleSlugs || slugs;
      this.bundleDiscount = opts.bundleDiscount != null ? opts.bundleDiscount : 0.10;
      this.bundleSubscribe = !!opts.bundleSubscribe;
      this.render();
      const overlay = document.querySelector('.lightbox-overlay');
      if (!overlay) return;
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    },
    close() {
      document.querySelector('.lightbox-overlay')?.classList.remove('open');
      document.body.style.overflow = '';
    },
    isOpen() {
      return document.querySelector('.lightbox-overlay')?.classList.contains('open');
    },
    next() {
      if (this.products.length === 0) return;
      this.index = (this.index + 1) % this.products.length;
      this.render();
    },
    prev() {
      if (this.products.length === 0) return;
      this.index = (this.index - 1 + this.products.length) % this.products.length;
      this.render();
    },
    goTo(i) {
      this.index = i;
      this.render();
    },
    render() {
      const p = this.products[this.index];
      if (!p) return;

      const setText = (sel, val) => {
        const el = document.querySelector(sel);
        if (el) el.textContent = val;
      };
      const setHTML = (sel, val) => {
        const el = document.querySelector(sel);
        if (el) el.innerHTML = val;
      };
      const setAttr = (sel, attr, val) => {
        const el = document.querySelector(sel);
        if (el) el[attr] = val;
      };

      // Title
      setHTML('.lightbox-title', this.title || `Browsing <strong>The House ${p.name}</strong>`);

      // Counter
      setText('.lightbox-counter', `${this.index + 1} of ${this.products.length}`);

      // Image
      setAttr('.lightbox-image', 'src', p.image);
      setAttr('.lightbox-image', 'alt', p.name);

      // Info
      setText('.lightbox-tag', p.tag || '');
      setHTML('.lightbox-name', `The House <em>${p.name}</em>`);
      setText('.lightbox-tagline', p.tagline || '');
      setText('.lightbox-desc', p.description || '');
      setText('.lightbox-price', '$' + p.price.toFixed(2));
      setText('.lightbox-size', p.size ? p.size : '');

      // Action buttons
      const actions = document.querySelector('.lightbox-actions');
      if (actions) {
        // Detect if bundleName looks like a "Routine" (curated) vs "Bundle" (targeted)
        const isRoutine = /Routine\b/i.test(this.bundleName || '');
        const ctaWord = isRoutine ? 'Routine' : 'Bundle';
        const buttons = [
          `<button class="lightbox-btn primary" data-lb-action="add-product">Add to Cart →</button>`,
          this.bundleName
            ? `<button class="lightbox-btn primary" style="background: var(--gold);" data-lb-action="add-bundle">${this.bundleSubscribe ? `Subscribe to ${ctaWord}` : `Add ${ctaWord}`} →</button>`
            : '',
          `<a class="lightbox-btn secondary" href="product.html?slug=${p.slug}">View Full Details</a>`
        ].filter(Boolean).join('');
        actions.innerHTML = buttons;

        actions.querySelector('[data-lb-action="add-product"]')?.addEventListener('click', () => {
          window.dhCart.add(p, { subscribe: false });
        });
        actions.querySelector('[data-lb-action="add-bundle"]')?.addEventListener('click', () => {
          window.dhCart.addBundle(this.bundleSlugs, this.bundleName, this.bundleDiscount, this.bundleSubscribe);
        });
      }

      // Dots
      const dotsEl = document.querySelector('.lightbox-dots');
      if (dotsEl) {
        dotsEl.innerHTML = this.products.map((_, i) =>
          `<button class="lightbox-dot ${i === this.index ? 'active' : ''}" data-idx="${i}" aria-label="Go to slide ${i + 1}"></button>`
        ).join('');
        dotsEl.querySelectorAll('.lightbox-dot').forEach(d => {
          d.addEventListener('click', () => this.goTo(parseInt(d.dataset.idx)));
        });
      }
    }
  };
  window.dhLightbox = lightbox;

  // ═══ SMART REFILL PROJECTION — popup UI + math + resolver ═══
  // Computes projected month-by-month payments under Smart Refill: month 1
  // ships the full bundle, then each subsequent month only ships products
  // whose runtime has elapsed. Used by the popup that opens from the
  // .cadence-projection-trigger button on any .bundle-cadence selector.

  // Resolve a bundle ID → array of full product objects. Handles curated
  // routines (CURATED_BUNDLES), concern bundles (CONCERN_BUNDLES), the live
  // quiz result (via window._quizState), and the BYO builder.
  function resolveBundleProducts(bundleId) {
    if (!bundleId) return [];
    // Single-product projection — id format: "product:slug"
    if (typeof bundleId === 'string' && bundleId.startsWith('product:')) {
      const slug = bundleId.slice('product:'.length);
      const p = window.getProductBySlug ? window.getProductBySlug(slug) : null;
      return p ? [p] : [];
    }
    // Quiz result — lives in window._quizState exposed by quiz.html
    if (bundleId === 'quiz-result' && window._quizState && window._quizState.getProducts) {
      return window._quizState.getProducts();
    }
    // BYO builder — lives in window.dhGetByoBundle exposed by routines.html
    if (bundleId === 'byo' && typeof window.dhGetByoBundle === 'function') {
      const byo = window.dhGetByoBundle();
      return (byo.slugs || [])
        .map(s => window.getProductBySlug ? window.getProductBySlug(s) : null)
        .filter(Boolean);
    }
    // Curated routine (Ultimate, Foundation, Glow, etc.)
    const curated = window.getCuratedBundleById && window.getCuratedBundleById(bundleId);
    if (curated && curated.slugs) {
      return curated.slugs
        .map(s => window.getProductBySlug ? window.getProductBySlug(s) : null)
        .filter(Boolean);
    }
    // Concern bundle (Anti-Aging, Sleep, Energy, etc.)
    const concern = (window.CONCERN_BUNDLES || []).find(b => b.id === bundleId);
    if (concern && concern.slugs) {
      return concern.slugs
        .map(s => window.getProductBySlug ? window.getProductBySlug(s) : null)
        .filter(Boolean);
    }
    return [];
  }
  window.dhResolveBundleProducts = resolveBundleProducts;

  // Build the 6-month projection given an array of products. Discount math
  // matches the bundle: 15% bundle + 10% subscribe by default, but the caller
  // can override (Ultimate is 25%, concern bundles vary 10-12%).
  function buildSmartProjectionData(products, bundleDiscount) {
    const SR_BUNDLE_DISC = (typeof bundleDiscount === 'number') ? bundleDiscount : 0.15;
    const SR_SUB_BONUS   = 0.10;
    const months = [0, 0, 0, 0, 0, 0];
    (products || []).forEach(p => {
      const rt = Math.max(1, p.runtime || 1);
      const net = (p.price || 0) * (1 - SR_BUNDLE_DISC) * (1 - SR_SUB_BONUS);
      for (let m = 1; m <= 6; m += rt) months[m - 1] += net;
    });
    const total = months.reduce((s, v) => s + v, 0);
    const fullBundleNet = (products || []).reduce((s, p) => s + (p.price || 0), 0) * (1 - SR_BUNDLE_DISC) * (1 - SR_SUB_BONUS);
    const compare = fullBundleNet * 6;
    return { months, total, compare, savings: Math.max(0, compare - total) };
  }
  window.dhBuildSmartProjection = buildSmartProjectionData;

  // Look up the bundle discount (so the projection is priced correctly).
  function bundleDiscountFor(bundleId) {
    // Single product — no bundle discount, just the subscribe stack (10%)
    if (typeof bundleId === 'string' && bundleId.startsWith('product:')) return 0;
    if (bundleId === 'quiz-result') return 0.15;
    if (bundleId === 'byo') {
      const b = (typeof window.dhGetByoBundle === 'function') ? window.dhGetByoBundle() : null;
      return (b && typeof b.discount === 'number') ? b.discount : 0.10;
    }
    const curated = window.getCuratedBundleById && window.getCuratedBundleById(bundleId);
    if (curated && typeof curated.discount === 'number') return curated.discount;
    const concern = (window.CONCERN_BUNDLES || []).find(b => b.id === bundleId);
    if (concern && typeof concern.discount === 'number') return concern.discount;
    return 0.15;
  }

  // Friendly bundle title for the popup
  function bundleTitleFor(bundleId, productCount) {
    // Single product — title with the product name
    if (typeof bundleId === 'string' && bundleId.startsWith('product:')) {
      const slug = bundleId.slice('product:'.length);
      const p = window.getProductBySlug ? window.getProductBySlug(slug) : null;
      const name = p?.name || 'Your product';
      return `The House <em>${name}</em> · projection.`;
    }
    if (bundleId === 'quiz-result') return 'Your personal <em>routine.</em>';
    if (bundleId === 'byo') return 'Your custom <em>routine.</em>';
    const curated = window.getCuratedBundleById && window.getCuratedBundleById(bundleId);
    if (curated && curated.name) {
      const name = curated.name.replace(/^The\s+/i, '').replace(/\s+(Routine|Stack|Bundle)$/i, '');
      return `${name} · <em>projection.</em>`;
    }
    const concern = (window.CONCERN_BUNDLES || []).find(b => b.id === bundleId);
    if (concern && concern.name) {
      const name = concern.name.replace(/^The\s+/i, '').replace(/\s+(Routine|Stack|Bundle)$/i, '');
      return `${name} · <em>projection.</em>`;
    }
    return 'Your <em>projection.</em>';
  }

  let _lastFocus = null;

  window.dhShowProjection = function(bundleId) {
    const popup = document.getElementById('smart-projection-popup');
    if (!popup) return;
    const products = resolveBundleProducts(bundleId);
    if (!products.length) return;
    const discount = bundleDiscountFor(bundleId);
    const { months, total, compare, savings } = buildSmartProjectionData(products, discount);

    // Fill content
    const grid = popup.querySelector('#spp-grid');
    const totalEl = popup.querySelector('#spp-total');
    const cmpEl = popup.querySelector('#spp-compare');
    const saveEl = popup.querySelector('#spp-savings');
    const titleEl = popup.querySelector('#smart-projection-popup-title');
    const subEl   = popup.querySelector('#smart-projection-popup-sub');

    const isProduct = typeof bundleId === 'string' && bundleId.startsWith('product:');

    if (grid) {
      grid.innerHTML = months.map((amt, i) => {
        const shipped = amt > 0.01;
        const tagText = i === 0
          ? (isProduct ? 'first shipment' : 'full bundle')
          : (shipped ? 'refill' : 'no shipment');
        return `
        <div class="proj-cell${i === 0 ? ' proj-cell-first' : ''}${!shipped ? ' proj-cell-empty' : ''}">
          <span class="proj-m">Month ${i + 1}</span>
          <span class="proj-amt">${shipped ? '$' + amt.toFixed(2) : '—'}</span>
          <span class="proj-tag">${tagText}</span>
        </div>`;
      }).join('');
    }
    if (totalEl) totalEl.textContent = '$' + total.toFixed(2);
    if (cmpEl) cmpEl.textContent = '$' + compare.toFixed(2);
    if (saveEl) {
      if (savings > 0.5) {
        const pct = Math.round((savings / compare) * 100);
        const comparator = isProduct
          ? 'buying the bottle every month on subscribe'
          : 'buying the full bundle every month';
        saveEl.innerHTML = `You save <strong>$${savings.toFixed(2)}</strong> over 6 months — <em>about ${pct}% less than ${comparator}.</em>`;
      } else if (isProduct) {
        saveEl.innerHTML = `<em>This product ships every month at its natural cadence — Smart Refill is the same as Subscribe Monthly for this one.</em>`;
      } else {
        saveEl.textContent = '';
      }
    }
    if (titleEl) titleEl.innerHTML = bundleTitleFor(bundleId, products.length);
    if (subEl) {
      if (isProduct) {
        const p = products[0];
        const rt = p?.runtime || 1;
        const shipments = months.filter(m => m > 0.01).length;
        const cadence = rt === 1 ? 'every month' : `every ${rt} months`;
        subEl.textContent = `${p?.name || 'Product'} ships ${cadence} — ${shipments} shipments over 6 months at its natural runtime.`;
      } else {
        const skin = products.filter(p => p.category === 'skincare').length;
        const supp = products.filter(p => p.category === 'supplement').length;
        const mix = [skin && `${skin} skincare`, supp && `${supp} supplement${supp>1?'s':''}`].filter(Boolean).join(' + ');
        subEl.textContent = `${products.length} products · ${mix} · only what you've actually run out of ships each month.`;
      }
    }

    _lastFocus = document.activeElement;
    popup.removeAttribute('hidden');
    popup.setAttribute('aria-hidden', 'false');
    document.body.classList.add('spp-open');
    const closeBtn = popup.querySelector('.smart-projection-close');
    if (closeBtn) setTimeout(() => closeBtn.focus(), 60);
  };

  window.dhHideProjection = function() {
    const popup = document.getElementById('smart-projection-popup');
    if (!popup) return;
    popup.setAttribute('hidden', '');
    popup.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('spp-open');
    if (_lastFocus && _lastFocus.focus) {
      try { _lastFocus.focus(); } catch (e) {}
    }
  };

  // If the projection popup is currently visible and the underlying bundle's
  // product list changes (e.g., the quiz add/remove flow), re-render in place.
  window.dhRefreshProjectionIfOpen = function(bundleId) {
    const popup = document.getElementById('smart-projection-popup');
    if (!popup || popup.hasAttribute('hidden')) return;
    if (window.dhShowProjection) window.dhShowProjection(bundleId);
  };

  // ═══ GLOBAL BUNDLE SUBSCRIBE TOGGLE + ADD-BUNDLE WIRING ═══
  // Lets any page use .bundle-subscribe-toggle and [data-bundle-add] without
  // duplicating wiring code. (Bundles.html has its own scoped version too.)

  /* Computes pricing for a bundle id — used by banner decoration and reactive price updates.
     Searches CURATED_BUNDLES first, then falls back to CONCERN_BUNDLES so concern bundles
     can use the shared .bundle-subscribe-toggle + [data-bundle-add] wiring too. */
  function getBundlePricing(bundleId) {
    const bundle = window.getCuratedBundleById?.(bundleId)
                || (window.CONCERN_BUNDLES || []).find(b => b.id === bundleId);
    if (!bundle) return null;
    const products = bundle.slugs
      .map(s => window.getProductBySlug?.(s))
      .filter(Boolean);
    if (!products.length) return null;
    const fullPrice    = products.reduce((s, p) => s + p.price, 0);
    const oneTimePrice = fullPrice * (1 - bundle.discount);
    const monthlyPrice = oneTimePrice * 0.90; // +10% subscribe stack
    const oncePct      = bundle.discount * 100;
    const monthlyPct   = (1 - monthlyPrice / fullPrice) * 100;
    return { bundle, products, fullPrice, oneTimePrice, monthlyPrice, oncePct, monthlyPct };
  }

  function fmtPct(n) {
    // 15 → "15", 23.5 → "23.5", 32.5 → "32.5"
    const rounded = Math.round(n * 10) / 10;
    return rounded % 1 === 0 ? rounded.toFixed(0) : rounded.toFixed(1);
  }

  /* Updates the price/savings display on the card to reflect the current toggle mode. */
  function refreshBundleDisplay(container, mode) {
    const toggle = container.querySelector('.bundle-subscribe-toggle');
    if (!toggle) return;
    const bundleId = toggle.dataset.bundleId;
    const p = getBundlePricing(bundleId);
    if (!p) return;

    const currentPrice = mode === 'subscribe' ? p.monthlyPrice : p.oneTimePrice;
    const savings      = p.fullPrice - currentPrice;
    const pct          = mode === 'subscribe' ? p.monthlyPct : p.oncePct;
    const roundedWas   = Math.round(p.fullPrice);
    const roundedNow   = Math.round(currentPrice);
    const roundedSave  = Math.round(savings);

    // .bundle-card style pricing (routines.html main cards)
    const bSave  = container.querySelector('.bundle-save');
    const bLabel = container.querySelector('.bundle-save-label');
    if (bSave)  bSave.textContent  = `Save $${roundedSave}`;
    if (bLabel) bLabel.textContent = `$${roundedWas} → $${roundedNow}`;

    // .bundle-footnote style pricing (inline mini-bundles on skincare/supplements)
    const fnWas     = container.querySelector('.bundle-footnote-was');
    const fnNow     = container.querySelector('.bundle-footnote-now');
    const fnSavings = container.querySelector('.bundle-footnote-savings');
    if (fnWas)     fnWas.textContent     = `$${roundedWas}`;
    if (fnNow)     fnNow.textContent     = `$${roundedNow}`;
    if (fnSavings) fnSavings.textContent = `Save $${roundedSave} · ${fmtPct(pct)}% off`;

    // .hero-bundle style pricing (Ultimate on routines.html)
    const hSave  = container.querySelector('.hero-savings-amount');
    const hLabel = container.querySelector('.hero-savings-label');
    if (hSave)  hSave.textContent  = `Save $${roundedSave}`;
    if (hLabel) hLabel.textContent = `$${roundedWas} → $${roundedNow} · ${fmtPct(pct)}% off`;
  }

  document.addEventListener('DOMContentLoaded', () => {
    // Toggle: One-Time / Monthly active state
    document.querySelectorAll('.bundle-subscribe-toggle').forEach(toggle => {
      toggle.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          toggle.querySelectorAll('button').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const subscribed = btn.dataset.mode === 'subscribe';
          toggle.classList.toggle('subscribe-mode', subscribed);

          // Reveal/hide a paired cadence selector (Monthly / Bimonthly / Quarterly / Smart Refill)
          // so any page that includes a `<div class="bundle-cadence" data-bundle-id="...">`
          // sibling will get the subscribe-time cadence picker for free.
          const bundleId = toggle.dataset.bundleId;
          if (bundleId) {
            const cadenceSel = document.querySelector(`.bundle-cadence[data-bundle-id="${bundleId}"]`);
            if (cadenceSel) {
              if (subscribed) cadenceSel.removeAttribute('hidden');
              else cadenceSel.setAttribute('hidden', '');
            }
          }

          // Trigger reactive pricing refresh on the parent bundle container
          const container = toggle.closest('.bundle-card, .bundle-footnote, .hero-bundle');
          if (container) refreshBundleDisplay(container, btn.dataset.mode);
        });
      });
    });

    // Global cadence-button click handler — works for any `.bundle-cadence` on any page.
    // Highlights the active cadence and toggles the Smart Refill explainer note.
    // The "See your 6-month projection" trigger now lives OUTSIDE the cadence selector
    // (injected by dhEnhanceBundleToggles or the dhInjectProjectionTrigger helper below)
    // so it's always visible — not gated behind the Subscribe → Smart Refill clicks.
    document.querySelectorAll('.bundle-cadence').forEach(cadenceSel => {
      cadenceSel.querySelectorAll('.cadence-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          cadenceSel.querySelectorAll('.cadence-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const note = cadenceSel.querySelector('[data-smart-note]');
          const isSmart = btn.dataset.cadence === 'smart';
          if (note) {
            if (isSmart) note.removeAttribute('hidden');
            else note.setAttribute('hidden', '');
          }
        });
      });
    });

    // ─── Always-Visible Projection Trigger Injector ──────────────────────
    //
    // For every bundle purchase area on the page (anywhere a
    // .bundle-subscribe-toggle lives), append a "See your 6-month projection"
    // trigger right next to or below it — always visible regardless of which
    // mode (One-Time, Subscribe, Smart Refill) is currently selected.
    // Clicking opens the shared smart-projection-popup for that bundle.
    window.dhInjectProjectionTrigger = function(root) {
      const scope = root || document;
      const toggles = scope.querySelectorAll('.bundle-subscribe-toggle[data-bundle-id]:not([data-projection-injected])');
      toggles.forEach(toggle => {
        toggle.setAttribute('data-projection-injected', '1');
        const bundleId = toggle.dataset.bundleId;
        if (!bundleId) return;
        // Idempotency: if a trigger already exists for this bundle ID anywhere in
        // the document (from a previous scan, before toggle was enhanced),
        // remove it so we don't end up with duplicates.
        document
          .querySelectorAll(`.projection-trigger-inline[data-bundle-id="${bundleId}"]`)
          .forEach(el => el.remove());
        // Build the trigger; styled as a subtle in-flow link.
        const trigger = document.createElement('button');
        trigger.type = 'button';
        trigger.className = 'projection-trigger-inline';
        trigger.setAttribute('data-projection-trigger', '');
        trigger.dataset.bundleId = bundleId;
        trigger.innerHTML = '<span class="ptl-icon" aria-hidden="true">📈</span><span class="ptl-text">See your 6-month projection</span><span class="ptl-arrow" aria-hidden="true">→</span>';
        trigger.addEventListener('click', (e) => {
          e.preventDefault();
          if (window.dhShowProjection) window.dhShowProjection(bundleId);
        });
        // Placement priority:
        //   1) Right after the .bundle-cadence selector if present
        //   2) Otherwise right after the .bundle-subscribe-toggle
        const cadence = document.querySelector(`.bundle-cadence[data-bundle-id="${bundleId}"]`);
        if (cadence && cadence.parentElement) {
          cadence.insertAdjacentElement('afterend', trigger);
        } else {
          toggle.insertAdjacentElement('afterend', trigger);
        }
      });
    };
    // Run on load and after a tick (to catch JS-rendered toggles)
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => window.dhInjectProjectionTrigger());
    } else {
      window.dhInjectProjectionTrigger();
    }
    setTimeout(() => window.dhInjectProjectionTrigger && window.dhInjectProjectionTrigger(), 300);

    // Build the Smart Refill projection popup once and append it to the body so it can
    // overlay any page. Reuses the same .proj-cell math used to live on quiz.html.
    if (!document.getElementById('smart-projection-popup')) {
      const popup = document.createElement('div');
      popup.id = 'smart-projection-popup';
      popup.className = 'smart-projection-popup';
      popup.setAttribute('hidden', '');
      popup.setAttribute('aria-hidden', 'true');
      popup.setAttribute('role', 'dialog');
      popup.setAttribute('aria-modal', 'true');
      popup.setAttribute('aria-labelledby', 'smart-projection-popup-title');
      popup.innerHTML = `
        <div class="smart-projection-backdrop" data-spp-close></div>
        <div class="smart-projection-card" role="document">
          <button type="button" class="smart-projection-close" data-spp-close aria-label="Close projection">×</button>
          <div class="smart-projection-eyebrow">Smart Refill · 6-Month Projection</div>
          <h2 class="smart-projection-title" id="smart-projection-popup-title">Your projected <em>payments.</em></h2>
          <p class="smart-projection-sub" id="smart-projection-popup-sub">Only the products you've actually run out of ship each month.</p>
          <div class="cadence-projection-grid" id="spp-grid"></div>
          <div class="smart-projection-summary">
            <div class="smart-projection-total-row">
              <span class="smart-projection-total-label">6-month total</span>
              <span class="smart-projection-total-amt" id="spp-total">$0.00</span>
            </div>
            <div class="smart-projection-compare-row">
              <span>vs. full bundle every month</span>
              <span class="spp-strike" id="spp-compare">$0.00</span>
            </div>
            <div class="smart-projection-savings" id="spp-savings"></div>
          </div>
          <div class="smart-projection-foot">
            <span>Supplements ship every 1–3 months depending on the bottle, most skincare every 2 months, oils &amp; eye cream every 3. Shipments under $30 fold into the next month.</span>
          </div>
        </div>
      `;
      document.body.appendChild(popup);
      // Close handlers
      popup.querySelectorAll('[data-spp-close]').forEach(el => {
        el.addEventListener('click', () => { window.dhHideProjection && window.dhHideProjection(); });
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !popup.hasAttribute('hidden')) {
          window.dhHideProjection && window.dhHideProjection();
        }
      });
    }

    // Apply initial pricing pass to every bundle container
    document.querySelectorAll('.bundle-card, .bundle-footnote, .hero-bundle').forEach(container => {
      const activeBtn = container.querySelector('.bundle-subscribe-toggle button.active');
      refreshBundleDisplay(container, activeBtn?.dataset.mode || 'once');
    });

    // ─ Trust badge: drop a 30-day guarantee reassurance under every bundle purchase CTA ─
    // Runs site-wide so newly-added bundles automatically inherit it.
    // Skips the BYO tracker preview CTA (`.builder-cta`) since that's not a purchase action.
    function injectTrust(btn) {
      if (!btn) return;
      // Find current insertion anchor — skip past any View Details toggle so trust lands BELOW it
      let anchor = btn;
      while (anchor.nextElementSibling?.classList.contains('bundle-details-toggle')) {
        anchor = anchor.nextElementSibling;
      }
      // Bail if a trust badge is already right after the anchor (avoid duplicates)
      if (anchor.nextElementSibling?.classList.contains('bundle-trust')) return;
      const trust = document.createElement('div');
      trust.className = 'bundle-trust';
      trust.innerHTML = '<span class="bundle-trust-icon">⏱</span><span>30-day money-back guarantee · Free returns · Even on opened products</span>';
      anchor.parentNode.insertBefore(trust, anchor.nextSibling);
    }
    const trustSelectors = ['.bundle-cta', '.bundle-footnote-cta', '.hero-cta'];
    trustSelectors.forEach(sel => {
      document.querySelectorAll(sel).forEach(btn => {
        if (!btn.matches('[data-bundle-add]')) return;
        injectTrust(btn);
      });
    });
    // BYO popup CTA — wired dynamically (no data-bundle-add), so attach by ID
    injectTrust(document.getElementById('byoAddBundle'));
    // Single product page — Add to Cart on product.html. Target by ID, not class,
    // since other elements on product.html (e.g. "Browse Bundles") reuse the class.
    injectTrust(document.getElementById('add-to-cart'));

    // Add Bundle to Cart — reads bundle by id, checks subscribe state, adds to cart
    // (and forwards the active cadence when a `.bundle-cadence` selector is present).
    // Resolves both curated routines AND concern bundles so any page can wire a CTA.
    document.querySelectorAll('[data-bundle-add]').forEach(btn => {
      // Skip if routines.html scoped handler already wired it (it gets to run first)
      if (btn._dhBundleAddWired) return;
      btn._dhBundleAddWired = true;
      btn.addEventListener('click', () => {
        const bundleId = btn.dataset.bundleAdd;
        const bundle = window.getCuratedBundleById?.(bundleId)
                    || (window.CONCERN_BUNDLES || []).find(b => b.id === bundleId);
        if (!bundle) return;
        const toggle = document.querySelector(`.bundle-subscribe-toggle[data-bundle-id="${bundleId}"]`);
        const subscribe = toggle?.querySelector('button.active')?.dataset.mode === 'subscribe';
        // Read the active cadence from a paired .bundle-cadence selector, if any.
        // Falls back to 'monthly' for legacy markup that doesn't include a selector.
        let cadence = null;
        if (subscribe) {
          const cadenceSel = document.querySelector(`.bundle-cadence[data-bundle-id="${bundleId}"]`);
          const activeCad = cadenceSel?.querySelector('.cadence-btn.active');
          cadence = (activeCad && activeCad.dataset.cadence) || 'monthly';
        }
        window.dhCart.addBundle(bundle.slugs, bundle.name, bundle.discount, subscribe, { cadence });
      });
    });
  });

  // ═══ PRE-LAUNCH COMING SOON BANNER ═══
  // Inject a translucent red banner at the top of every page.
  // Adjusts CSS variables so floating buttons and the shipping bar stack correctly below it.
  document.addEventListener('DOMContentLoaded', function() {
    if (document.querySelector('.coming-soon-banner')) return; // already injected

    const banner = document.createElement('div');
    banner.className = 'coming-soon-banner';
    banner.setAttribute('role', 'alert');
    banner.innerHTML = `
      <div class="coming-soon-headline">Coming <em>Soon</em></div>
      <div class="coming-soon-tagline">
        Daniel's House launches soon
        <span class="dot">·</span>
        This is a preview
      </div>
    `;
    document.body.prepend(banner);
    document.documentElement.classList.add('coming-soon-active');

    // Track banner height for any consumer that wants to know it, but don't touch
    // --shipping-bar-height anymore — headers are non-sticky and floating buttons
    // anchor directly to viewport top (top: 14px), independent of any banner.
    function syncHeights() {
      const h = banner.getBoundingClientRect().height;
      document.documentElement.style.setProperty('--coming-soon-height', h + 'px');
    }
    syncHeights();
    window.addEventListener('resize', syncHeights);
  });

  // ═══ FLOATING CART BUTTON + EXPANDING PAYMENT MODAL ═══
  // Mirrors the floating search button pattern. Injected on every page via JS
  // so we don't have to maintain HTML in 10 files.
  document.addEventListener('DOMContentLoaded', function() {
    // Don't inject if a cart-floating already exists
    if (document.querySelector('.cart-floating')) return;
    // Bail if the page doesn't have the search button either (probably an isolated page)
    // ... actually inject anyway, the cart should be everywhere.

    const FREE_SHIP = 65;
    const TAX_RATE  = 0.0825;

    const wrap = document.createElement('div');
    wrap.className = 'cart-floating collapsed';
    wrap.innerHTML = `
      <button class="cart-floating-toggle" type="button" aria-label="Open cart and checkout">
        <span class="cart-floating-toggle-icon"><span>🛒</span></span>
        <span class="cart-floating-toggle-badge">0</span>
      </button>
      <div class="cart-floating-overlay"></div>
      <div class="cart-floating-panel" role="dialog" aria-modal="true" aria-label="Checkout">
        <div class="cf-head">
          <div class="cf-head-title">Your <em>cart</em></div>
          <button class="cf-close" type="button" aria-label="Close">✕</button>
        </div>
        <div class="cf-body">
          <div class="cf-content"><!-- dynamic --></div>
        </div>
      </div>
    `;
    document.body.appendChild(wrap);

    // Defensive inline-style positioning — guarantees the floating cart is always
    // top-right (stacked below the search button), even if a stylesheet conflict
    // or media-query oddity tries to push it somewhere else.
    const isMobile = window.matchMedia('(max-width: 600px)').matches;
    Object.assign(wrap.style, {
      position: 'fixed',
      top: isMobile ? '64px' : '74px',
      right: isMobile ? '12px' : '16px',
      left: 'auto',
      bottom: 'auto',
      zIndex: '1100'
    });
    // Re-anchor on resize in case the viewport crosses the mobile breakpoint
    window.addEventListener('resize', () => {
      const m = window.matchMedia('(max-width: 600px)').matches;
      wrap.style.top = m ? '64px' : '74px';
      wrap.style.right = m ? '12px' : '16px';
    });

    const toggle = wrap.querySelector('.cart-floating-toggle');
    const overlay = wrap.querySelector('.cart-floating-overlay');
    const closeBtn = wrap.querySelector('.cf-close');
    const badge = wrap.querySelector('.cart-floating-toggle-badge');
    const content = wrap.querySelector('.cf-content');

    function open() {
      wrap.classList.add('expanded');
      render();
      document.body.style.overflow = 'hidden';
    }
    function close() {
      wrap.classList.remove('expanded');
      document.body.style.overflow = '';
    }
    toggle.addEventListener('click', () => wrap.classList.contains('expanded') ? close() : open());
    overlay.addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && wrap.classList.contains('expanded')) close();
    });

    // Sync badge with cart count
    function syncBadge() {
      const count = window.dhCart ? window.dhCart.count() : 0;
      badge.textContent = count;
      wrap.classList.toggle('has-items', count > 0);
    }

    // Listen for cart mutations from anywhere on the page (add-to-cart buttons,
    // quantity changes, etc.) and keep the badge + open panel in sync.
    window.addEventListener('dh:cart:change', () => {
      syncBadge();
      if (wrap.classList.contains('expanded')) render();
    });

    // Always sync the badge once on init
    if (window.dhCart) syncBadge();

    function priceOf(item) {
      if (item.bundleName && item.bundleDiscount) {
        let p = item.price * (1 - item.bundleDiscount);
        if (item.subscribe) p *= (1 - 0.10); // bundle subscription bonus
        return p;
      }
      if (item.subscribe) return item.price * (1 - SUBSCRIBE_DISCOUNT);
      return item.price;
    }

    // ─── Smart Refill checkout explainer ────────────────────────────────
    // Shown only when the cart contains at least one Smart Refill bundle item.
    // Explains what ships today vs. what ships in subsequent months and shows
    // the 12-month shipment schedule for the customer's actual cart contents.
    function renderSmartRefillExplainer(items) {
      // Group cart items by bundle name + collect bundles that have cadence='smart'
      const smartBundles = {};
      items.forEach(it => {
        if (it.subscribe && it.cadence === 'smart' && it.bundleName) {
          if (!smartBundles[it.bundleName]) smartBundles[it.bundleName] = { slugs: [], discount: it.bundleDiscount };
          smartBundles[it.bundleName].slugs.push(it.slug);
        }
      });
      const bundleNames = Object.keys(smartBundles);
      if (!bundleNames.length) return '';

      // Build a schedule preview for the first Smart Refill bundle in the cart.
      // Multiple Smart Refill bundles are summarized with the same explainer.
      const firstName = bundleNames[0];
      const data = smartBundles[firstName];
      const synthBundle = { slugs: data.slugs, discount: data.discount };
      let scheduleHTML = '';
      if (typeof window.getSmartRefillSchedule === 'function') {
        const schedule = window.getSmartRefillSchedule(synthBundle, 6);  // preview first 6 months
        const monthCells = schedule.map((m, i) => {
          const count = m.products.length;
          const isToday = i === 0;
          if (count === 0) {
            return `<div class="cf-sr-month empty"><div class="cf-sr-month-label">M${i + 1}</div><div class="cf-sr-month-count">—</div><div class="cf-sr-month-note">Skipped</div></div>`;
          }
          const price = m.products.reduce((s, slug) => {
            const p = (window.getProductBySlug && window.getProductBySlug(slug));
            return s + (p ? p.price : 0);
          }, 0) * (1 - data.discount) * (1 - 0.10);
          return `<div class="cf-sr-month${isToday ? ' today' : ''}">
            <div class="cf-sr-month-label">${isToday ? 'Today' : 'M' + (i + 1)}</div>
            <div class="cf-sr-month-count">${count}<span class="cf-sr-month-unit">item${count === 1 ? '' : 's'}</span></div>
            <div class="cf-sr-month-note">~$${price.toFixed(0)}</div>
          </div>`;
        }).join('');
        scheduleHTML = `<div class="cf-sr-schedule">${monthCells}</div>`;
      }

      return `
        <div class="cf-smart-explainer">
          <div class="cf-sr-head">
            <span class="cf-sr-icon">↻</span>
            <div>
              <div class="cf-sr-title">How Smart Refill works at checkout</div>
              <div class="cf-sr-sub">You're on Smart Refill for the ${firstName}.</div>
            </div>
          </div>
          <ol class="cf-sr-steps">
            <li><strong>Today</strong> — your first shipment is the full bundle at the discounted price you see above. Same products, same pricing, no surprises.</li>
            <li><strong>After today</strong> — each month we only ship the products that actually need replenishing based on each bottle's real runtime. A 1-month Multi ships monthly. A 2-month Wash ships every 60 days. A 3-month NAD+ ships every 90.</li>
            <li><strong>$30 minimum per shipment</strong> — if a month's refills come in under $30, we automatically roll them into the next month's box. Fewer small shipments, lower carbon footprint, same total products over the year.</li>
            <li><strong>Cancel or pause anytime</strong> — manage it all from your account. No retention calls.</li>
          </ol>
          ${scheduleHTML ? `<div class="cf-sr-schedule-label">Your next 6 months of shipments</div>${scheduleHTML}` : ''}
        </div>
      `;
    }

    function selectedShippingRate(subtotal) {
      const sel = content.querySelector('.cf-ship-option.selected');
      if (!sel) return subtotal >= FREE_SHIP ? 0 : 7.95;
      const r = parseFloat(sel.dataset.rate);
      if (r === 0) return 0;
      return subtotal >= FREE_SHIP && sel.dataset.method === 'standard' ? 0 : r;
    }

    function render() {
      const items = window.dhCart ? window.dhCart.items : [];

      if (!items.length) {
        content.innerHTML = `
          <div class="cf-empty">
            <div class="cf-empty-icon">— ◇ —</div>
            <div class="cf-empty-text">Your cart is empty</div>
            <a href="routines.html">Browse Routines →</a>
          </div>
        `;
        return;
      }

      const subtotal = items.reduce((sum, it) => sum + priceOf(it) * it.qty, 0);
      const fullPriceTotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
      const savings = fullPriceTotal - subtotal;

      content.innerHTML = `
        <!-- Cart items -->
        <div class="cf-section">
          <div class="cf-section-label"><span class="step-num">1</span>Your order · ${items.reduce((s,i)=>s+i.qty,0)} item${items.reduce((s,i)=>s+i.qty,0)===1?'':'s'}</div>
          <div class="cf-items">
            ${items.map(it => {
              const unit = priceOf(it);
              const labels = [];
              if (it.bundleName && it.bundleDiscount) {
                labels.push(`<div class="cf-item-meta discount">${it.bundleName}</div>`);
                if (it.subscribe) {
                  // Show cadence-specific labels so the user understands their shipment cycle
                  const cadenceLabel = {
                    'smart':     '↻ Smart Refill · only the products you need each month',
                    'bimonthly': '↻ Subscription · ships every 2 months',
                    'quarterly': '↻ Subscription · ships every 3 months',
                    'monthly':   '↻ Bundle Subscription · ships every 30 days'
                  }[it.cadence || 'monthly'] || '↻ Bundle Subscription · ships every 30 days';
                  labels.push(`<div class="cf-item-meta discount cf-cadence-${it.cadence || 'monthly'}">${cadenceLabel}</div>`);
                }
              }
              else if (it.subscribe) labels.push(`<div class="cf-item-meta discount">↻ Subscribe &amp; Save · ships every 30 days</div>`);
              const bundleAttr = it.bundleName ? it.bundleName.replace(/"/g,'&quot;') : '';
              return `
                <div class="cf-item" data-slug="${it.slug}" data-subscribe="${it.subscribe}" data-bundle="${bundleAttr}">
                  <div class="cf-item-img"><img src="${it.image}" alt="${it.name}"/></div>
                  <div>
                    <div class="cf-item-name">The House <em>${it.name}</em></div>
                    <div class="cf-item-meta">$${unit.toFixed(2)} each</div>
                    ${labels.join('')}
                    <div class="cf-item-qty-row">
                      <div class="cf-item-qty">
                        <button data-action="dec" type="button">−</button>
                        <span>${it.qty}</span>
                        <button data-action="inc" type="button">+</button>
                      </div>
                      <button class="cf-item-remove" data-action="remove" type="button">Remove</button>
                    </div>
                  </div>
                  <div class="cf-item-price">$${(unit * it.qty).toFixed(2)}</div>
                </div>
              `;
            }).join('')}
          </div>

          ${renderSmartRefillExplainer(items)}

          <!-- Discount code -->
          <div class="cf-discount-row">
            <input type="text" class="cf-discount-input" placeholder="Discount code"/>
            <button class="cf-discount-btn" type="button">Apply</button>
          </div>

          <!-- Totals — bundle/subscribe discounts apply AUTOMATICALLY.
               Subtotal is shown at full price; the savings line shows the auto-applied
               discount; after-discount line shows what you actually pay before
               shipping & tax. This makes the discount transparent at every step. -->
          <div class="cf-totals">
            <div class="cf-totals-row"><span>Subtotal <span class="cf-totals-sub-meta">(${items.reduce((s,i)=>s+i.qty,0)} item${items.reduce((s,i)=>s+i.qty,0)===1?'':'s'})</span></span><span class="cf-totals-value">$${fullPriceTotal.toFixed(2)}</span></div>
            ${savings > 0 ? `
              <div class="cf-totals-row savings"><span>Bundle &amp; subscribe discount <span class="cf-totals-auto">Applied automatically</span></span><span class="cf-totals-value">−$${savings.toFixed(2)}</span></div>
              <div class="cf-totals-row after-discount"><span>After discount</span><span class="cf-totals-value cf-subtotal">$${subtotal.toFixed(2)}</span></div>
            ` : ''}
            <div class="cf-totals-row"><span>Shipping</span><span class="cf-totals-value cf-shipping-line">${subtotal >= FREE_SHIP ? '<em style="font-family:Cormorant Garamond,serif;font-style:italic;color:var(--gold)">Free</em>' : '$7.95'}</span></div>
            <div class="cf-totals-row"><span>Estimated tax</span><span class="cf-totals-value cf-tax-line">$${(subtotal * TAX_RATE).toFixed(2)}</span></div>
            <div class="cf-totals-row total"><span>Total</span><span class="cf-totals-value cf-grand-total">$${(subtotal + (subtotal >= FREE_SHIP ? 0 : 7.95) + subtotal * TAX_RATE).toFixed(2)}</span></div>
          </div>
        </div>

        <!-- Express checkout -->
        <div class="cf-section">
          <div class="cf-section-label"><span class="step-num">2</span>Express checkout</div>
          <div class="cf-express">
            <button type="button" class="apple"> Pay</button>
            <button type="button" class="gpay"><strong>G</strong><strong>o</strong><strong>o</strong><strong>g</strong>le Pay</button>
          </div>
          <div class="cf-divider">or pay with card</div>
        </div>

        <!-- Contact -->
        <div class="cf-section">
          <div class="cf-section-label"><span class="step-num">3</span>Contact</div>
          <div class="cf-field">
            <label class="cf-label">Email</label>
            <input class="cf-input" type="email" placeholder="you@example.com" autocomplete="email"/>
          </div>
          <div class="cf-field">
            <label class="cf-label">Phone (for shipping updates)</label>
            <input class="cf-input" type="tel" placeholder="(555) 123-4567" autocomplete="tel"/>
          </div>
        </div>

        <!-- Shipping -->
        <div class="cf-section">
          <div class="cf-section-label"><span class="step-num">4</span>Shipping address</div>
          <div class="cf-field-row">
            <div>
              <label class="cf-label">First name</label>
              <input class="cf-input" type="text" placeholder="Daniel" autocomplete="given-name"/>
            </div>
            <div>
              <label class="cf-label">Last name</label>
              <input class="cf-input" type="text" placeholder="" autocomplete="family-name"/>
            </div>
          </div>
          <div class="cf-field">
            <label class="cf-label">Street address</label>
            <input class="cf-input" type="text" placeholder="123 Wellness Way" autocomplete="address-line1"/>
          </div>
          <div class="cf-field">
            <label class="cf-label">Apt, suite, etc. (optional)</label>
            <input class="cf-input" type="text" placeholder="" autocomplete="address-line2"/>
          </div>
          <div class="cf-field-row triple">
            <div>
              <label class="cf-label">City</label>
              <input class="cf-input" type="text" autocomplete="address-level2"/>
            </div>
            <div>
              <label class="cf-label">State</label>
              <select class="cf-select" autocomplete="address-level1">
                <option value="">—</option>
                <option>AL</option><option>AK</option><option>AZ</option><option>AR</option>
                <option>CA</option><option>CO</option><option>CT</option><option>DE</option>
                <option>FL</option><option>GA</option><option>HI</option><option>ID</option>
                <option>IL</option><option>IN</option><option>IA</option><option>KS</option>
                <option>KY</option><option>LA</option><option>ME</option><option>MD</option>
                <option>MA</option><option>MI</option><option>MN</option><option>MS</option>
                <option>MO</option><option>MT</option><option>NE</option><option>NV</option>
                <option>NH</option><option>NJ</option><option>NM</option><option>NY</option>
                <option>NC</option><option>ND</option><option>OH</option><option>OK</option>
                <option>OR</option><option>PA</option><option>RI</option><option>SC</option>
                <option>SD</option><option>TN</option><option>TX</option><option>UT</option>
                <option>VT</option><option>VA</option><option>WA</option><option>WV</option>
                <option>WI</option><option>WY</option>
              </select>
            </div>
            <div>
              <label class="cf-label">ZIP</label>
              <input class="cf-input" type="text" autocomplete="postal-code" maxlength="5"/>
            </div>
          </div>
        </div>

        <!-- Shipping method -->
        <div class="cf-section">
          <div class="cf-section-label"><span class="step-num">5</span>Shipping method</div>
          <div class="cf-shipping-options">
            <div class="cf-ship-option selected" data-method="standard" data-rate="7.95">
              <div class="cf-ship-radio"></div>
              <div class="cf-ship-name">
                <strong>Standard (3–5 days)</strong>
                <span>${subtotal >= FREE_SHIP ? "Free — you've unlocked free shipping" : `Free over $${FREE_SHIP}`}</span>
              </div>
              <div class="cf-ship-price">${subtotal >= FREE_SHIP ? 'Free' : '$7.95'}</div>
            </div>
            <div class="cf-ship-option" data-method="express" data-rate="18.95">
              <div class="cf-ship-radio"></div>
              <div class="cf-ship-name">
                <strong>Express (1–2 days)</strong>
                <span>FedEx / UPS priority</span>
              </div>
              <div class="cf-ship-price">$18.95</div>
            </div>
          </div>
        </div>

        <!-- Payment -->
        <div class="cf-section">
          <div class="cf-section-label">
            <span class="step-num">6</span>Card details
            <span class="cf-card-icons">
              <span class="cf-card-icon">VISA</span>
              <span class="cf-card-icon">MC</span>
              <span class="cf-card-icon">AMEX</span>
            </span>
          </div>
          <div class="cf-field">
            <label class="cf-label">Card number</label>
            <input class="cf-input" type="text" placeholder="1234 5678 9012 3456" inputmode="numeric" autocomplete="cc-number" maxlength="19"/>
          </div>
          <div class="cf-field-row">
            <div>
              <label class="cf-label">Expiry (MM / YY)</label>
              <input class="cf-input" type="text" placeholder="12 / 28" autocomplete="cc-exp" maxlength="7"/>
            </div>
            <div>
              <label class="cf-label">CVC</label>
              <input class="cf-input" type="text" placeholder="123" inputmode="numeric" autocomplete="cc-csc" maxlength="4"/>
            </div>
          </div>
          <div class="cf-field">
            <label class="cf-label">Name on card</label>
            <input class="cf-input" type="text" autocomplete="cc-name"/>
          </div>
        </div>

        <button class="cf-place-order" type="button">Place order · $<span class="cf-final-total">${(subtotal + (subtotal >= FREE_SHIP ? 0 : 7.95) + subtotal * TAX_RATE).toFixed(2)}</span></button>
        <div class="cf-trust-line"><span>●</span> Secure checkout · 256-bit encryption</div>
      `;

      // Wire up item controls
      content.querySelectorAll('.cf-item').forEach(itemEl => {
        const slug = itemEl.dataset.slug;
        const subscribe = itemEl.dataset.subscribe === 'true';
        const bundleName = itemEl.dataset.bundle || null;
        itemEl.querySelector('[data-action="inc"]').addEventListener('click', () => window.dhCart.updateQty(slug, subscribe, bundleName, 1));
        itemEl.querySelector('[data-action="dec"]').addEventListener('click', () => window.dhCart.updateQty(slug, subscribe, bundleName, -1));
        itemEl.querySelector('[data-action="remove"]').addEventListener('click', () => window.dhCart.remove(slug, subscribe, bundleName));
      });

      // Shipping option toggle
      content.querySelectorAll('.cf-ship-option').forEach(opt => {
        opt.addEventListener('click', () => {
          content.querySelectorAll('.cf-ship-option').forEach(o => o.classList.remove('selected'));
          opt.classList.add('selected');
          recalcTotals();
        });
      });

      // Discount code (placeholder — visual feedback only)
      const dcInput = content.querySelector('.cf-discount-input');
      const dcBtn = content.querySelector('.cf-discount-btn');
      dcBtn.addEventListener('click', () => {
        if (!dcInput.value.trim()) return;
        dcBtn.textContent = 'Invalid';
        dcBtn.style.borderColor = 'var(--rose)';
        dcBtn.style.color = 'var(--rose)';
        setTimeout(() => {
          dcBtn.textContent = 'Apply';
          dcBtn.style.borderColor = '';
          dcBtn.style.color = '';
        }, 2000);
      });

      // Place order — visual confirmation
      content.querySelector('.cf-place-order').addEventListener('click', e => {
        const btn = e.currentTarget;
        btn.textContent = 'Processing…';
        btn.disabled = true;
        setTimeout(() => {
          btn.innerHTML = '✓ Order placed';
          btn.style.background = 'var(--sage)';
          btn.style.borderColor = 'var(--sage)';
        }, 1200);
      });

      function recalcTotals() {
        const ship = selectedShippingRate(subtotal);
        const tax = subtotal * TAX_RATE;
        const total = subtotal + ship + tax;
        content.querySelector('.cf-shipping-line').innerHTML = ship === 0
          ? '<em style="font-family:Cormorant Garamond,serif;font-style:italic;color:var(--gold)">Free</em>'
          : '$' + ship.toFixed(2);
        content.querySelector('.cf-tax-line').textContent = '$' + tax.toFixed(2);
        content.querySelector('.cf-grand-total').textContent = '$' + total.toFixed(2);
        content.querySelector('.cf-final-total').textContent = total.toFixed(2);
      }
    }
  });

  // ═══ SITE-WIDE INLINE "VIEW DETAILS" DROPDOWN ═══
  // Converts every .row-view-link into an in-place expandable panel showing
  // ingredients, how to use, best-for tags, Daniel's tip, free-from badges,
  // and a fallback "Open full product page" link. Originally lived only on
  // skincare.html; now lives here so supplements + any other page with the
  // same .row + .row-view-link structure gets it for free.
  document.addEventListener('DOMContentLoaded', function() {
    if (!window.PRODUCTS) return;

    function renderDetailsPanel(product) {
      const ingredientsHtml = product.ingredients?.length ? `
        <div class="rd-block">
          <div class="rd-label">Key Ingredients</div>
          ${product.ingredients.slice(0, 6).map(ing => `
            <div class="rd-ingredient">
              ${ing.role ? `<div class="rd-ing-role">${ing.role}</div>` : ''}
              <div class="rd-ing-name">${ing.name}</div>
              ${ing.description ? `<div class="rd-ing-desc">${ing.description}</div>` : ''}
            </div>
          `).join('')}
        </div>
      ` : '';

      const howToHtml = product.howToUse ? `
        <div class="rd-block">
          <div class="rd-label">How to Use</div>
          <div class="rd-howto">${product.howToUse}</div>
        </div>
      ` : '';

      const bestForHtml = product.bestFor?.length ? `
        <div class="rd-block">
          <div class="rd-label">Best For</div>
          <div class="rd-tags">
            ${product.bestFor.map(t =>
              `<span class="rd-tag">${t.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}</span>`
            ).join('')}
          </div>
        </div>
      ` : '';

      const proTipHtml = product.proTip ? `
        <div class="rd-block">
          <div class="rd-protip">
            <div class="rd-protip-label">Daniel's Tip</div>
            <div class="rd-protip-text">"${product.proTip}"</div>
          </div>
        </div>
      ` : '';

      const freeFromHtml = product.freeFrom?.length ? `
        <div class="rd-block">
          <div class="rd-label">Free From</div>
          <div class="rd-freefrom">
            ${product.freeFrom.map(f => `<span class="rd-ff-badge">${f}</span>`).join('')}
          </div>
        </div>
      ` : '';

      return `
        <div class="row-details-inner">
          <div class="rd-col-main">${ingredientsHtml}</div>
          <div class="rd-col-side">
            ${howToHtml}
            ${bestForHtml}
            ${proTipHtml}
            ${freeFromHtml}
          </div>
        </div>
        <a href="product.html?slug=${product.slug}" class="rd-full-cta">
          <div class="rd-full-cta-text">
            <div class="rd-full-cta-label">See the full breakdown</div>
            <div class="rd-full-cta-sub">Studies, week-by-week timeline, FAQs, and Daniel's notes</div>
          </div>
          <div class="rd-full-cta-arrow">→</div>
        </a>
      `;
    }

    document.querySelectorAll('.row-view-link').forEach(link => {
      // Skip if this link has already been wired up by a page-local script
      // (skincare.html still has the inline handler — avoid double-binding)
      if (link.dataset.dhDropdownBound === '1') return;
      link.dataset.dhDropdownBound = '1';

      link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        let slug = null;
        try {
          const url = new URL(this.href);
          slug = url.searchParams.get('slug');
        } catch (_) { /* relative href edge case */ }
        const product = slug ? window.PRODUCTS.find(p => p.slug === slug) : null;
        if (!product) {
          // Fallback — navigate normally if data missing
          window.location.href = this.href;
          return;
        }

        const row = this.closest('.row');
        if (!row) {
          window.location.href = this.href;
          return;
        }
        let panel = row.nextElementSibling;
        const hasPanel = panel && panel.classList && panel.classList.contains('row-details');

        if (!hasPanel) {
          panel = document.createElement('div');
          panel.className = 'row-details';
          panel.innerHTML = renderDetailsPanel(product);
          row.parentNode.insertBefore(panel, row.nextSibling);
          void panel.offsetHeight; // force reflow so transition triggers
          panel.classList.add('open');
          link.classList.add('expanded');
          link.innerHTML = 'Hide Details ↑';
        } else {
          const willOpen = !panel.classList.contains('open');
          panel.classList.toggle('open');
          link.classList.toggle('expanded', willOpen);
          link.innerHTML = willOpen ? 'Hide Details ↑' : 'View Details →';
        }
      });
    });
  });

  // ═══ BUNDLE CARD DROPDOWN — INLINE EXPANDABLE DETAILS ═══════════════════
  // For each .bundle-card on routines.html, injects a "View Details ↓" link
  // and an expandable panel that reveals:
  //   • A bundle-level intro paragraph ("what makes this stack work")
  //   • Three benefit-tag pills (Built to layer / Tested together / Saves $X)
  //   • A grid of clickable product mini-cards (each links to product.html)
  // Mixes option-2 (bundle-level story) + option-1 (per-product mini-cards).
  document.addEventListener('DOMContentLoaded', function() {
    if (!window.PRODUCTS || !window.CURATED_BUNDLES) return;

    // Bundle-level rich detail content — keyed by bundle id.
    // Each entry has a required `intro` string, plus optional rich sections:
    //   am[]            → numbered AM routine steps {name, note}
    //   pm[]            → numbered PM routine steps {name, note}
    //   supplements[]   → daily supplement steps {name, note}
    //   whyItWorks      → { lead, mechanisms: [{problem, solution}, ...] }
    //   whoItsFor       → { yes, no }
    // Bundles that only define `intro` render the basic panel (backward compat).
    const BUNDLE_DETAILS = {
      ultimate: {
        intro: "Daniel's complete protocol — inside and out. Every product he uses every day, layered in the order they work best. <em>Skincare and supplements aren't separate problems; they're one system.</em> Twenty-two bottles, twelve daily steps, ten daily supplements, one box. The biggest discount on the site because this is what the line was built to do.",
        am: [
          { name: "Wash",       note: "The botanical cleanser — rose hip seed oil, geranium, and Irish moss in a silky, fragrance-free lather." },
          { name: "Balance",    note: "Tri-acid peeling pads (salicylic, lactic, mandelic) — the toner step upgraded to daily exfoliation." },
          { name: "Boost",      note: "Three stable forms of vitamin C for sustained brightening without the sting of L-ascorbic acid." },
          { name: "Hyaluronic", note: "Pure water + sodium hyaluronate. Minimalist hydration that layers cleanly with every product after it." },
          { name: "Defense",    note: "The CE Ferulic antioxidant shield. L-ascorbic acid + ferulic acid + niacinamide + B5 + vitamin E — the SkinCeuticals-tier architecture." },
          { name: "Soft",       note: "Advanced multi-weight HA moisturizing cream with niacinamide and barrier-supportive emollients." },
          { name: "Shield",     note: "Mineral SPF 30 — non-nano zinc oxide + titanium dioxide. The most important product in any anti-aging routine." }
        ],
        pm: [
          { name: "Bounce",    note: "The PM cornerstone. 0.05% retinol + 0.5% vitamin C + 0.1% hyaluronic acid + Matrixyl peptides + botanical skin-tightening trio. Alternating nights with Renewal." },
          { name: "Renewal",   note: "2-3 nights/week, alternating with Bounce. Multi-action peeling pads — glycolic, lactic, salicylic — for deep resurfacing." },
          { name: "Firm",      note: "Advanced peptide complex layered with hyaluronic acid and seaweed extract for collagen and elastin signaling." },
          { name: "Hydration", note: "Featherweight hyaluronic face and body mist — HA + rose centifolia water + glycerin + sodium lactate. Refreshes anytime, layers cleanly." },
          { name: "Eye",       note: "Triple-peptide complex with DCX complex (targeting under-eye pigmentation) and seaweed-derived minerals for the orbital area." },
          { name: "Glow",      note: "Hyaluronic spheres suspended in squalane — multi-weight HA delivery in a lipid carrier that absorbs cleanly without residue." }
        ],
        supplements: [
          { name: "Multi",     note: "Foundation nutrition, with breakfast." },
          { name: "Sunshine",  note: "Vitamin D3 + K2, with breakfast for fat absorption." },
          { name: "Flow",      note: "Omega-3s. Skin barrier, brain, cardiovascular — with a meal." },
          { name: "Biome",     note: "Probiotic + prebiotic. Gut health → skin health." },
          { name: "Calm",      note: "Magnesium glycinate — anytime, calms the nervous system." },
          { name: "NAD+",      note: "The longevity hero. Mitochondrial fuel that declines with age — morning, with food." },
          { name: "Vitality",  note: "Sirtuin activators + CoQ10. Morning or midday." },
          { name: "Synapse",   note: "Cognitive support. Morning, on an empty stomach for sharpest focus." },
          { name: "Restore",   note: "Joint mobility + recovery. Anytime, daily." },
          { name: "Tranquil",  note: "Sleep stack — magnesium, L-theanine, adaptogens. 30-60 min before bed." }
        ],
        whyItWorks: {
          lead: "Every other bundle is a slice of this one. The Ultimate is the protocol Daniel actually runs — and the only configuration where the science compounds across all four dimensions of aging simultaneously: surface, structural, systemic, and cellular.",
          mechanisms: [
            { problem: "Surface (texture/tone)", solution: "12-step skincare ritual — cleanse, treat, hydrate, protect, repair" },
            { problem: "Structural (collagen)",  solution: "Retinol + peptides topically · Collagen peptides internally" },
            { problem: "Systemic (whole body)",  solution: "Multi, Sunshine, Flow, Biome — the foundation that everything depends on" },
            { problem: "Cellular (longevity)",   solution: "NAD+, Vitality, Synapse, Tranquil, Restore — the actives the longevity literature points to" }
          ]
        },
        whoItsFor: {
          yes: "You're committed to a real routine. You believe results compound when topical and internal work together. You want the discount that comes with one decision instead of twenty-two — and you're not interested in piecing this together over months.",
          no: "You're new to skincare and supplements and want to test the waters first. Start with AM Routine or Daniel's Daily and scale up. The Ultimate is for people who already know they want the full protocol."
        }
      },
      'daniels-daily': {
        intro: "The supplement half of Daniel's daily routine — <em>without</em> the skincare. Five Foundation essentials cover the floor (multi, magnesium, vitamin D, omega-3s, probiotic); five Longevity actives reach further (NAD+, sirtuin support, cognitive, sleep, joint mobility). For people who've already dialed in their topical routine and want the inside half done right.",
        supplements: [
          { name: "Multi",     note: "Morning, with breakfast. The nutrient floor — covers gaps that show up in skin, energy, and immunity when ignored." },
          { name: "Sunshine",  note: "Morning, with food. Vitamin D3 + K2 — bone density, immunity, hormone production." },
          { name: "Flow",      note: "With a meal. Omega-3s feed skin barrier, brain, and cardiovascular system simultaneously." },
          { name: "Biome",     note: "Morning, on an empty stomach. Probiotic + prebiotic — gut health translates directly to skin health." },
          { name: "Calm",      note: "Anytime, with water. Magnesium glycinate calms the nervous system and supports muscle recovery." },
          { name: "NAD+",      note: "Morning, with food. The longevity hero — replenishes mitochondrial fuel that declines with age." },
          { name: "Vitality",  note: "Morning or midday. Sirtuin activators + CoQ10 — compounds with NAD+ on the same cellular pathway." },
          { name: "Synapse",   note: "Morning, on an empty stomach. Cognitive support — focus, memory, mental clarity throughout the day." },
          { name: "Restore",   note: "Anytime, daily. Joint mobility + recovery — the supplement that lets you train at 50 like you did at 30." },
          { name: "Tranquil",  note: "Evening, 30-60 min before bed. Sleep stack — when growth hormone and cellular repair peak." }
        ],
        whyItWorks: {
          lead: "Most supplement stacks treat each pill as an isolated job. This one is built around two layers that <em>compound</em>: the Foundation ensures nothing's running low, the Longevity stack targets the cellular machinery that ages.",
          mechanisms: [
            { problem: "Daily deficits",       solution: "Multi, Sunshine, Flow, Biome, Calm cover the nutritional floor" },
            { problem: "Mitochondrial decline", solution: "NAD+ + Vitality replenish cellular energy production" },
            { problem: "Cognitive fog",         solution: "Synapse + Flow support brain function morning to night" },
            { problem: "Recovery + sleep",      solution: "Tranquil for sleep quality · Restore for joints and movement" }
          ]
        },
        whoItsFor: {
          yes: "You already have a skincare routine you trust and want a complete supplement stack you don't have to think about. You take the long view on aging — what happens at the cellular level shows up in the mirror years later.",
          no: "You're new to supplements and don't want to commit to ten bottles. Start with the Multi alone and add as you learn what works for your body."
        }
      },
      am: {
        intro: "Seven steps to start the day with a complete barrier, visible glow, and full UV protection. <em>Cleanse, prep, brighten, hydrate, defend, moisturize, shield.</em> Each product layers cleanly into the next — no balling, no pilling, no waiting between steps. Ten minutes the first week, four minutes once you have the order down.",
        am: [
          { name: "Wash",       note: "The botanical cleanser — rose hip seed oil, geranium, Irish moss. Lifts oil without stripping the barrier." },
          { name: "Balance",    note: "Tri-acid peeling pads — salicylic, lactic, mandelic. Replaces a passive toner with daily gentle exfoliation." },
          { name: "Boost",      note: "Three stable forms of vitamin C — sodium ascorbyl phosphate, ascorbyl glucoside, magnesium ascorbyl phosphate. Sustained brightening without the sting." },
          { name: "Hyaluronic", note: "Pure water + sodium hyaluronate. Holds 1,000x its weight in water and layers cleanly with every other product." },
          { name: "Defense",    note: "The CE Ferulic shield. L-ascorbic acid + ferulic acid + niacinamide + B5 + vitamin E. Gold-standard antioxidant defense." },
          { name: "Soft",       note: "Advanced multi-weight HA moisturizing cream. The daily moisturizer for any skin type." },
          { name: "Shield",     note: "Mineral SPF 30 — non-nano zinc oxide + titanium dioxide with coffee fruit, ferulic acid, and niacinamide. The most important product in any anti-aging routine." }
        ],
        whyItWorks: {
          lead: "Morning skincare has two jobs: protect what you have, and start visible results. This bundle delivers both with the highest-evidence daytime actives — the CE Ferulic antioxidant architecture, bio-peptide growth factor serum, and broad-spectrum mineral SPF for non-negotiable UV defense.",
          mechanisms: [
            { problem: "Environmental damage", solution: "Boost + Defense + Shield layer three forms of photoprotection — antioxidants and physical UV block" },
            { problem: "Dullness/uneven tone", solution: "Multi-form vitamin C + niacinamide + ferulic acid brighten over 4-6 weeks" },
            { problem: "Dehydration",          solution: "Hyaluronic + Soft create a deep hydration layer that lasts through the day" },
            { problem: "Photoaging risk",      solution: "Daily SPF is the single most-evidenced anti-aging intervention in dermatology" }
          ]
        },
        whoItsFor: {
          yes: "You want a complete morning routine that takes under five minutes once you have it dialed. You believe in protection-first skincare and want visible brightness without a 12-step Korean routine.",
          no: "You only have time for a 2-step routine (just Wash + Soft works as a minimum, plus Shield). Or you want PM repair work too — the PM Routine is the natural complement."
        }
      },
      pm: {
        intro: "Six steps to wake up better skin. <em>Treatment alternates, peptides firm, hyaluronic plumps, eye repairs, oil seals.</em> The repair work happens while you sleep — this is what gives it material to work with. PM is where visible anti-aging actually compounds.",
        pm: [
          { name: "Bounce",    note: "The retinol cornerstone. Five actives layered: retinol + stable vitamin C + hyaluronic acid + Matrixyl peptides + botanical skin-tightening trio. Alternating nights with Renewal." },
          { name: "Renewal",   note: "2-3 nights/week, alternating with Bounce. Multi-action peeling pads — glycolic + lactic + salicylic — for deep resurfacing." },
          { name: "Firm",      note: "Advanced peptide complex layered with hyaluronic acid and seaweed extract. Collagen signaling from multiple angles." },
          { name: "Hydration", note: "Featherweight hyaluronic face and body mist — HA + rose centifolia water + glycerin + sodium lactate. Layers cleanly anytime in the routine." },
          { name: "Eye",       note: "Triple-peptide complex with DCX complex (targeting under-eye pigmentation). Works overnight on the thin under-eye area." },
          { name: "Glow",      note: "Hyaluronic spheres suspended in squalane. Multi-weight HA delivery in a lipid carrier — absorbs cleanly without residue." }
        ],
        whyItWorks: {
          lead: "Sleep is when skin does its repair work — cell turnover peaks, growth hormone releases, collagen synthesis fires. This bundle gives that process the actives it needs: retinol for turnover, an advanced peptide complex for collagen signaling, hyaluronic for hydration, lipids to seal.",
          mechanisms: [
            { problem: "Slowed cell turnover", solution: "Bounce's retinol + Renewal's triple-acid blend (alternating nights) accelerate renewal" },
            { problem: "Collagen breakdown",   solution: "Advanced peptide complex in Firm + triple-peptide complex in Eye signal for fibroblast activity overnight" },
            { problem: "Loss of plumpness",    solution: "Hyaluronic acid in Bounce + Hydration restores volume" },
            { problem: "Barrier weakness",     solution: "Glow's HA spheres in squalane finish reinforces the barrier overnight" }
          ]
        },
        whoItsFor: {
          yes: "You want visible anti-aging results and you understand PM is where they happen. You're willing to do a 5-minute evening routine (after the first two weeks it feels automatic).",
          no: "You already use a single PM product you love and don't want a stack. Or you're new to retinol — start with Bounce alone and add the others as your skin builds tolerance."
        }
      },
      workout: {
        intro: "Built around the gym window. <em>Creatine and protein for performance, electrolytes for recovery, magnesium for sleep, ashwagandha to manage cortisol.</em> A complete pre/intra/post stack — five supplements that do the work training alone can't.",
        supplements: [
          { name: "Greens",  note: "Morning or anytime, daily. Greens powder + adaptogens — nutrient density that food often misses." },
          { name: "Burn",    note: "Morning, with food. Thermogenic blend for those running a cut — focus, metabolism, mood." },
          { name: "Power",   note: "Pre-workout, 30-45 min before training. Creatine monohydrate at clinical dose — strength, output, lean mass." },
          { name: "Pump",    note: "Pre-workout, 20-30 min before. Citrulline + beetroot + caffeine — circulation, focus, the pump itself." },
          { name: "Seal",    note: "Post-workout, within 60 min. Whey isolate + glutamine + colostrum — protein synthesis and gut recovery." }
        ],
        whyItWorks: {
          lead: "Training is the stimulus. Nutrition + recovery are what actually drive adaptation. This stack covers the windows where supplementation has the most evidence: pre-workout for performance, post-workout for recovery, daily greens for nutrient density.",
          mechanisms: [
            { problem: "Strength + power plateau", solution: "Power (creatine) at clinical 5g dose, the most-studied performance supplement there is" },
            { problem: "Workout intensity",        solution: "Pump pre-training for circulation, focus, and the mind-muscle connection" },
            { problem: "Recovery + soreness",      solution: "Seal post-workout for protein synthesis and faster turnaround" },
            { problem: "Nutrient gaps",            solution: "Greens fills micronutrients that whole food often misses — especially on cutting phases" }
          ]
        },
        whoItsFor: {
          yes: "You train 3-5x/week and want the supplement stack that actually moves performance. You understand the role of each compound and won't waste the doses by being inconsistent.",
          no: "You train casually (1-2x/week) — Power alone is enough. Or you want a fat-loss focused stack — Burn is the relevant single product."
        }
      },
      longevity: {
        intro: "The actives most associated with healthy aging at clinical doses. <em>NAD+ for cellular energy, sirtuin activators, cognitive support, sleep, joint mobility.</em> The longevity literature in capsule form — five bottles that target what happens to your cells, your brain, your sleep, and your joints as the decades stack up.",
        supplements: [
          { name: "NAD+",      note: "Morning, with food. Replenishes mitochondrial fuel that declines with age. The most-cited longevity active in peer-reviewed research." },
          { name: "Vitality",  note: "Morning or midday. Sirtuin activators (resveratrol) + CoQ10. Supports the same cellular pathway NAD+ powers." },
          { name: "Synapse",   note: "Morning, on an empty stomach. Cognitive support — focus, memory, neuroplasticity. Brain longevity is its own pillar." },
          { name: "Restore",   note: "Anytime, daily. Joint mobility, collagen support, anti-inflammatory blend. The supplement that lets you stay active for decades." },
          { name: "Tranquil",  note: "Evening, 30-60 min before bed. Sleep is when growth hormone, glymphatic clearing, and cellular repair all peak. Quality matters more than duration." }
        ],
        whyItWorks: {
          lead: "Aging isn't one process — it's at least four: declining mitochondrial function, sirtuin/autophagy slowdown, cognitive decline, and the accumulated wear from poor sleep and inflammation. This bundle targets all four simultaneously with the actives most consistently cited in the longevity literature.",
          mechanisms: [
            { problem: "Mitochondrial decline", solution: "NAD+ + Vitality replenish and support cellular energy production" },
            { problem: "Cognitive slowdown",    solution: "Synapse delivers nootropics + neuroprotective compounds at clinical doses" },
            { problem: "Poor sleep quality",    solution: "Tranquil — sleep is when all repair systems do their best work" },
            { problem: "Joint + mobility loss", solution: "Restore — anti-inflammatory + collagen support for staying active" }
          ]
        },
        whoItsFor: {
          yes: "You're 35+ and take the long view. You understand that prevention now means a different decade thirty years from now. You want a complete cellular-aging stack without piecing it together yourself.",
          no: "You're 25 and the daily multi is enough for now. Or you have specific health conditions — talk to a doctor before stacking NAD+, resveratrol, and the rest."
        }
      },
      foundation: {
        intro: "The five supplements that cover the nutritional floor. <em>Without these, every other supplement underperforms.</em> With them, your skin, sleep, energy, and digestion all have what they need to do their jobs. The cheapest insurance you'll buy for your future health — and the daily baseline you build everything else on top of.",
        supplements: [
          { name: "Multi",    note: "Morning, with breakfast. The nutrient floor — covers vitamin and mineral gaps that quietly show up in skin, energy, and immunity when ignored." },
          { name: "Sunshine", note: "Morning, with food. Vitamin D3 cholecalciferol — bone density, immune balance, hormone production. Most people are deficient and don't know it." },
          { name: "Flow",     note: "With a meal. 1000mg omega-3 concentrate. Feeds the skin barrier, brain, joints, and cardiovascular system in parallel — multi-system insurance." },
          { name: "Biome",    note: "Morning, on an empty stomach. Multi-strain probiotic with enteric delivery. The gut-skin axis is real — clear skin follows a calm gut." },
          { name: "Calm",     note: "Anytime, with water (evening preferred). 275mg magnesium glycinate — calms the nervous system, supports recovery, the form your body actually absorbs." }
        ],
        whyItWorks: {
          lead: "Most people are quietly deficient in one or more of these five compounds without realizing it. Each addresses a foundational system: nutrition (Multi), hormone/immunity (Sunshine), inflammation (Flow), gut/skin axis (Biome), and stress/recovery (Calm). Cover the floor properly, and every other intervention — supplements, skincare, training — works better.",
          mechanisms: [
            { problem: "Nutrient gaps",         solution: "Multi covers vitamins, minerals, antioxidants the modern diet often misses" },
            { problem: "Hormone/immunity dips", solution: "Sunshine restores vitamin D — vital for both, frequently deficient indoors" },
            { problem: "Chronic inflammation",  solution: "Flow's omega-3s rebalance the inflammatory pathway from the inside out" },
            { problem: "Gut + skin imbalance",  solution: "Biome supports the gut-skin axis that drives clear skin and digestion" }
          ]
        },
        whoItsFor: {
          yes: "You take your health seriously but haven't built a foundational supplement routine yet — or you're inconsistent with food and want to make sure your nutritional floor is covered. This is the non-negotiable starting point.",
          no: "You already eat a perfectly varied whole-food diet, get 20+ minutes of daily sun, sleep 8 hours, and have ideal labs. (Almost nobody actually does — but if you genuinely do, you don't need this.)"
        }
      },
      glow: {
        intro: "The brightness stack — <em>inside and out.</em> Vitamin C and niacinamide topically for tone correction, antioxidants and collagen internally for the compound effect, oil to seal, weekly mask for the deeper reset. Built to compound: each product reinforces what the others are doing.",
        am: [
          { name: "Boost",   note: "Morning. Vitamin C, niacinamide, panthenol — brightens dullness and evens tone over 4-6 weeks." },
          { name: "Defense", note: "Morning, after Boost. Antioxidant heavy hitter that protects the brightening work from being undone by UV and pollution." }
        ],
        pm: [
          { name: "Glow",   note: "Evening, as the final step. Hyaluronic spheres suspended in squalane — multi-weight HA delivered in a lightweight lipid carrier." },
          { name: "Mask",   note: "1-2 nights/week. Charcoal + clay detox that reveals brighter skin underneath. Skip on nights you use Glow." }
        ],
        supplements: [
          { name: "Radiance", note: "Morning, with food. Beauty-targeted antioxidants — compounds with topical Boost + Defense for amplified brightening." },
          { name: "Collagen", note: "Morning, in coffee/smoothie. Hydrolyzed peptides feed skin the structural building blocks for sustained luminosity." }
        ],
        whyItWorks: {
          lead: "Dullness isn't one problem — it's three layered ones: melanin distribution (uneven tone), oxidative damage (sallow look), and surface texture (light scatters poorly). This bundle attacks all three from inside and out.",
          mechanisms: [
            { problem: "Uneven melanin",     solution: "Boost's niacinamide regulates melanin transfer · Radiance's antioxidants support the process internally" },
            { problem: "Oxidative damage",   solution: "Defense + Boost topically · Radiance + Collagen internally" },
            { problem: "Surface texture",    solution: "Mask 1-2x/week resurfaces · Glow oil locks light-reflecting moisture" }
          ]
        },
        whoItsFor: {
          yes: "You want brighter skin in a measurable way — not just 'feels nicer.' You understand brightness is a compound effect (topical + internal + weekly treatment), not a single product result.",
          no: "Your main concern is anti-aging fine lines (look at the PM Routine or Mom's Routine instead). Or you have very dry skin — Defense and Glow may feel rich; start with Boost + Radiance alone."
        }
      },
      weekly: {
        intro: "Two treatments. <em>One night a week, you mask. Another night, you polish.</em> Never both — these aren't daily steps. They're the deeper resets that give the daily routine more to work with. The clinical-grade weekly intervention the rest of the line is built around.",
        pm: [
          { name: "Mask",   note: "1 night/week. Bentonite clay + colloidal sulfur + salicylic acid + zinc oxide — the dermatologist-prescribed combination for detoxifying congested skin. Tightens pores as it dries." },
          { name: "Polish", note: "1 night/week (different night from Mask). Real strawberry seeds and biodegradable jojoba beads gently lift dead surface skin. Goji and ginseng nourish and support resilience." }
        ],
        whyItWorks: {
          lead: "Daily skincare maintains. Weekly treatments reset. The skin barrier accumulates dead cells, pore congestion, and trapped sebum over the course of a week — the daily routine doesn't address that. These two products do, without disrupting the barrier.",
          mechanisms: [
            { problem: "Pore congestion",      solution: "Mask's bentonite + sulfur + salicylic combination pulls oil and impurities from deep in the pore" },
            { problem: "Dead cell buildup",    solution: "Polish's strawberry seeds + jojoba beads physically remove the dull surface layer" },
            { problem: "Stalled daily results", solution: "Both treatments clear the runway so daily actives can actually penetrate and work" }
          ]
        },
        whoItsFor: {
          yes: "You have a daily routine you trust and feel like results have plateaued. Or you live in a city / wear makeup / work out and your skin needs the deeper weekly reset.",
          no: "You have very sensitive or actively irritated skin. Both treatments are gentle, but introduce them one at a time and skip if your barrier is compromised."
        }
      },
      moms: {
        intro: "The bundle for parents who want visible anti-aging results <em>and</em> take the long view on aging. Named for the season of life it supports — works just as well for dads. Five skincare layers built around the highest-evidence topical actives — retinol overnight, antioxidants by day, peptides around the eyes — paired with five longevity-grade supplements that work the cellular layer: <em>NAD+ for mitochondrial energy, collagen building blocks, antioxidant support, and the sleep aid that turns nights into real repair time.</em>",
        am: [
          { name: "Wash",    note: "Gentle cleanser that doesn't strip the skin's natural oils — the daily reset before the actives." },
          { name: "Defense", note: "The CE Ferulic antioxidant shield — L-ascorbic acid + ferulic acid + niacinamide + B5 + vitamin E. The gold-standard daytime architecture for protecting existing collagen from breaking down." },
          { name: "Eye",     note: "Bakuchiol + triple-peptide complex firms and brightens the orbital area. Cucumber and squalane depuff." },
          { name: "Soft",    note: "Advanced multi-weight HA moisturizing cream with niacinamide. Deep hydration with barrier support — a non-negotiable step for aging skin." }
        ],
        pm: [
          { name: "Wash",    note: "Gentle cleanser removes the day without compromising the barrier." },
          { name: "Bounce",  note: "The cornerstone. 0.05% retinol + stable vitamin C + hyaluronic acid + Matrixyl peptides + botanical skin-tightening trio. Multi-active retinol that compounds in your favor." },
          { name: "Eye",     note: "Bakuchiol does its best work overnight — same product, second application." },
          { name: "Soft",    note: "Locks in the actives while skin does its repair work overnight." }
        ],
        supplements: [
          { name: "Multi",    note: "Morning, with breakfast. Foundation nutrition — zinc, biotin, vitamins C, D, and B-complex. Skin renewal can't happen if any of these are running low at the cellular level." },
          { name: "Collagen", note: "Morning, blend into coffee, smoothie, or warm water. Hydrolyzed peptides feed skin the building blocks for what Bounce and Eye are signaling for topically." },
          { name: "NAD+",     note: "Morning, with food. The longevity hero — replenishes the cellular fuel that declines with age. Mitochondrial function powers cell renewal, including skin cell turnover. The most-studied longevity active there is." },
          { name: "Vitality", note: "Morning or midday, with food. Energy + antioxidant blend with sirtuin activators. Compounds the anti-aging effect from the inside — supports the same cellular pathways NAD+ targets." },
          { name: "Tranquil", note: "Evening, 30-60 minutes before bed. Sleep is the most underrated anti-aging tool — magnesium glycinate, L-theanine, and adaptogens deliver deep repair-quality sleep, which is when growth hormone, collagen synthesis, and cellular repair all peak." }
        ],
        whyItWorks: {
          lead: "Visible aging comes down to four things: collagen loss, oxidative damage, slowed cell turnover, and declining cellular energy. This bundle attacks all four with the most clinically validated actives — minimal steps, maximum efficacy, working from the surface and from inside the cell.",
          mechanisms: [
            { problem: "Collagen loss",      solution: "Bounce's retinol + Eye's peptides topically · Collagen peptides + Multi internally" },
            { problem: "Oxidative damage",   solution: "Defense + Bounce antioxidants topically · Multi + Vitality internally" },
            { problem: "Slowed turnover",    solution: "Bounce nightly · NAD+ powers cellular energy for renewal · Multi feeds new cell production" },
            { problem: "Cellular fatigue",   solution: "NAD+ replenishes mitochondrial fuel · Tranquil ensures deep repair-quality sleep when growth hormone peaks" }
          ]
        },
        whoItsFor: {
          yes: "You want noticeable smoothing, firming, and brightening in 6-12 weeks <em>and</em> you take the long view on aging — you understand what happens at the cellular level (mitochondrial energy, sleep quality, sirtuin activity) shows up on your face years later.",
          no: "You want a 2-step set-it-and-forget-it routine without supplements — look at the AM Routine instead. Or you're not yet ready to commit to a daily multi-supplement protocol."
        }
      },
      arianas: {
        intro: "The bundle for someone who knows skincare alone won't give them what they're chasing. The promise is <em>inside-out glow</em>: six topical layers handling the surface, plus three supplements feeding the result internally. It's the sweet spot between a minimum effective routine and Daniel's full protocol — comprehensive without being maximalist.",
        am: [
          { name: "Wash",    note: "Kale, carrot, and lemon proteins cleanse without stripping the barrier." },
          { name: "Boost",   note: "Vitamin C (stable derivative), niacinamide, and panthenol brighten and even tone." },
          { name: "Defense", note: "The heavy hitter — stable vitamin C, soy protein, squalane, caffeine. Layers of antioxidant protection that compound with Boost." },
          { name: "Eye",     note: "Peptide cream around the orbital area before moisturizer locks everything in." },
          { name: "Soft",    note: "Multi-weight hyaluronic acid + aloe seals it all with hydration." }
        ],
        pm: [
          { name: "Wash",    note: "Same gentle cleanser, removes the day." },
          { name: "Renewal", note: "2-3 nights/week only. Multi-action peeling pads (glycolic + lactic + salicylic) for deep resurfacing while you sleep. This is where the real anti-aging work happens." },
          { name: "Eye",     note: "Peptide cream — fine to use AM and PM." },
          { name: "Soft",    note: "Locks in the actives. On off-nights, just Wash → Eye → Soft." }
        ],
        supplements: [
          { name: "Multi",    note: "The nutrient floor. Everything the skin and body need that food may not consistently deliver." },
          { name: "Radiance", note: "Beauty-targeted antioxidants. Compounds with topical Boost + Defense for amplified brightening." },
          { name: "Collagen", note: "Hydrolyzed peptides. Skin gets the building blocks it needs to do what Renewal and Eye are signaling for." }
        ],
        whyItWorks: {
          lead: "The three vectors of visible aging are oxidative damage, collagen loss, and uneven turnover. This bundle hits all three from both sides — topically and internally — so you're attacking each problem from two angles simultaneously.",
          mechanisms: [
            { problem: "Oxidative damage", solution: "Defense + Boost topically · Radiance internally" },
            { problem: "Collagen loss",    solution: "Renewal + Eye peptides topically · Collagen + Multi internally" },
            { problem: "Uneven turnover",  solution: "Renewal's glycolic acid resurfaces · supplements feed cell production" }
          ]
        },
        whoItsFor: {
          yes: "You want visible results in 4-6 weeks, you're willing to do a 5-step morning + 3-4 step evening, and you believe what you put in your body matters as much as what you put on it.",
          no: "You want a 2-step set-it-and-forget-it routine (look at concern bundles instead), or you're already deep into actives and need something hyper-specific."
        }
      }
    };

    // Expose the rich routine/mechanism data so bundle-expand.js can render
    // these sections inside its single comprehensive expansion. (The OLD
    // bundle-card dropdown that previously rendered them inline has been removed.)
    window.CURATED_BUNDLE_RICH_DETAILS = BUNDLE_DETAILS;

    function dollar(n) {
      const v = Math.round(n);
      return '$' + v;
    }

    function renderRoutineSteps(steps) {
      return steps.map((s, i) => `
        <div class="bd-step">
          <div class="bd-step-num">${String(i + 1).padStart(2, '0')}</div>
          <div class="bd-step-body">
            <div class="bd-step-name">${s.name}</div>
            <div class="bd-step-note">${s.note}</div>
          </div>
        </div>
      `).join('');
    }

    function renderBundlePanel(bundle, products) {
      const detail = BUNDLE_DETAILS[bundle.id] || { intro: `${products.length} products, curated to work together. ${(bundle.discount * 100).toFixed(0)}% off when bought as a bundle.` };
      const fullPrice = products.reduce((s, p) => s + p.price, 0);
      const savings = fullPrice * bundle.discount;
      const subSavings = (fullPrice * (1 - bundle.discount)) * 0.10;

      const productCardsHtml = products.map(p => {
        const tag = (p.tag || p.eyebrow || '').split('·')[0].trim();
        const img = p.image || `images/${(p.slug || '').replace('the-house-', '')}.jpeg`;
        return `
          <a href="product.html?slug=${p.slug}" class="bd-product">
            <div class="bd-product-img"><img src="${img}" alt="${p.name}" loading="lazy"/></div>
            <div class="bd-product-body">
              <div class="bd-product-name">${p.name}</div>
              <div class="bd-product-meta">${tag ? tag + ' · ' : ''}<span class="bd-product-price">${dollar(p.price)}</span></div>
            </div>
          </a>
        `;
      }).join('');

      // Optional rich sections — only render if data is present
      const amHtml = detail.am ? `
        <div class="bd-block">
          <div class="bd-label">The AM routine · 3-4 minutes</div>
          <div class="bd-routine">${renderRoutineSteps(detail.am)}</div>
        </div>
      ` : '';

      const pmHtml = detail.pm ? `
        <div class="bd-block">
          <div class="bd-label">The PM routine · 3 minutes</div>
          <div class="bd-routine">${renderRoutineSteps(detail.pm)}</div>
        </div>
      ` : '';

      const suppHtml = detail.supplements ? `
        <div class="bd-block">
          <div class="bd-label">Daily supplements · with breakfast</div>
          <div class="bd-routine">${renderRoutineSteps(detail.supplements)}</div>
        </div>
      ` : '';

      const whyHtml = detail.whyItWorks ? `
        <div class="bd-block">
          <div class="bd-label">Why this stack works</div>
          <div class="bd-why-lead">${detail.whyItWorks.lead}</div>
          <div class="bd-mechanisms">
            ${detail.whyItWorks.mechanisms.map(m => `
              <div class="bd-mech">
                <div class="bd-mech-problem">${m.problem}</div>
                <div class="bd-mech-arrow">→</div>
                <div class="bd-mech-solution">${m.solution}</div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : '';

      const audienceHtml = detail.whoItsFor ? `
        <div class="bd-block">
          <div class="bd-label">Who this is for</div>
          <div class="bd-audience">
            <div class="bd-audience-card yes">
              <div class="bd-audience-tag">Yes if</div>
              <div class="bd-audience-text">${detail.whoItsFor.yes}</div>
            </div>
            <div class="bd-audience-card no">
              <div class="bd-audience-tag">Not for you if</div>
              <div class="bd-audience-text">${detail.whoItsFor.no}</div>
            </div>
          </div>
        </div>
      ` : '';

      return `
        <div class="bd-inner">
          <div class="bd-block">
            <div class="bd-label">What makes this work</div>
            <div class="bd-intro">${detail.intro}</div>
            <div class="bd-tags">
              <span class="bd-tag">Built to layer</span>
              <span class="bd-tag">Tested together</span>
              <span class="bd-tag">Save ${dollar(savings)} as a bundle</span>
              <span class="bd-tag">+${dollar(subSavings)} off subscribed</span>
            </div>
          </div>
          ${amHtml}
          ${pmHtml}
          ${suppHtml}
          ${whyHtml}
          ${audienceHtml}
          <div class="bd-block">
            <div class="bd-label">Inside this bundle</div>
            <div class="bd-products">
              ${productCardsHtml}
            </div>
            <a href="routines.html" class="bd-full-link">Browse all routines →</a>
          </div>
        </div>
      `;
    }

    // NOTE: The previous bundle-card "View Details ↓" injection has been removed.
    // bundle-expand.js now handles the single collapsible "View Details ▾" link
    // per bundle, and the rich routine/mechanism data above (BUNDLE_DETAILS) is
    // exposed via window.CURATED_BUNDLE_RICH_DETAILS for the new expansion to read.
  });

})();

  // ═══════════════════════════════════════════════════════════════
  // FLOATING MENU BUTTON (top-left) + SLIDE-OUT NAV PANEL
  // Mirrors the cart-floating pattern. Injected on every page via JS
  // so we don't have to maintain HTML in 18 files.
  // ═══════════════════════════════════════════════════════════════
  document.addEventListener('DOMContentLoaded', function() {
    // Don't inject twice
    if (document.querySelector('.dh-menu')) return;

    // Determine current page filename for "is-current" highlighting
    const currentPath = (window.location.pathname || '').split('/').pop() || 'index.html';

    // Site map — keep in sync with footer link structure
    const u = window.dhAuth ? window.dhAuth.getCurrentUser() : null;
    const accountLinks = u ? [
      { href: 'account.html#dashboard',     label: 'Dashboard' },
      { href: 'account.html#profile',       label: 'Profile' },
      { href: 'account.html#orders',        label: 'Orders' },
      { href: 'account.html#past-orders',   label: 'Past Orders' },
      { href: 'account.html#routine',       label: 'My Routine' },
      { href: 'account.html#subscriptions', label: 'Subscriptions' },
      { href: 'account.html#reviews',       label: 'My Reviews' },
      { href: 'account.html#settings',      label: 'Settings' }
    ] : [
      { href: 'signin.html',         label: 'Sign In' },
      { href: 'signin.html#signup',  label: 'Create Account' }
    ];
    const sections = [
      {
        eyebrow: u ? `Hi, ${u.firstName || 'there'}` : 'Account',
        links: accountLinks
      },
      {
        eyebrow: 'Shop',
        links: [
          { href: 'skincare.html',     label: 'Skincare' },
          { href: 'supplements.html',  label: 'Supplements' },
          { href: 'routines.html',      label: 'Routines' },
          { href: 'bundles.html',         label: 'Bundles' },
          { href: 'compare.html',      label: 'Compare' }
        ]
      },
      {
        eyebrow: 'The House',
        links: [
          { href: 'index.html',        label: 'Home' },
          { href: 'about.html',        label: "Daniel's Story" },
          { href: 'ingredients.html',  label: 'Ingredient Glossary' },
          { href: 'studies.html',      label: 'Research Library' },
          { href: 'blog.html',         label: 'Field Notes (Blog)' },
          { href: 'reviews.html',      label: 'Reviews' },
          { href: 'quiz.html',         label: 'Take the Quiz' },
          { href: 'faq.html',          label: 'FAQ' }
        ]
      },
      {
        eyebrow: 'Help',
        links: [
          { href: 'faq.html#shipping', label: 'Shipping' },
          { href: 'faq.html#returns',  label: 'Returns Policy' },
          { href: 'faq.html#returns',  label: '30-Day Guarantee' },
          { href: 'faq.html',          label: 'Contact' }
        ]
      },
      {
        eyebrow: 'Legal',
        links: [
          { href: 'privacy.html',       label: 'Privacy Policy' },
          { href: 'terms.html',         label: 'Terms of Service' },
          { href: 'accessibility.html', label: 'Accessibility' }
        ]
      }
    ];

    const isCurrent = (href) => {
      const target = (href.split('#')[0] || '').toLowerCase();
      return target === currentPath.toLowerCase();
    };

    const sectionHTML = sections.map(sec => `
      <div class="dh-menu-section">
        <div class="dh-menu-section-eyebrow">${sec.eyebrow}</div>
        <ul class="dh-menu-links">
          ${sec.links.map(l => `
            <li>
              <a href="${l.href}" class="dh-menu-link${isCurrent(l.href) ? ' is-current' : ''}">
                <span>${l.label}</span>
                <span class="dh-menu-link-arrow">→</span>
              </a>
            </li>
          `).join('')}
        </ul>
      </div>
    `).join('');

    const wrap = document.createElement('div');
    wrap.className = 'dh-menu';
    wrap.innerHTML = `
      <button class="dh-menu-toggle" type="button" aria-label="Open menu" aria-expanded="false">
        <span class="dh-menu-toggle-icon">
          <span></span><span></span><span></span>
        </span>
      </button>
      <div class="dh-menu-overlay"></div>
      <aside class="dh-menu-panel" role="dialog" aria-modal="true" aria-label="Site navigation">
        <div class="dh-menu-head">
          <div class="dh-menu-head-title">Daniel<em>'s</em> House</div>
          <button class="dh-menu-close" type="button" aria-label="Close menu">✕</button>
        </div>
        <div class="dh-menu-body">
          ${sectionHTML}
        </div>
        <div class="dh-menu-foot">
          <em>Built on real results.</em>
        </div>
      </aside>
    `;
    document.body.appendChild(wrap);

    const toggleBtn = wrap.querySelector('.dh-menu-toggle');
    const overlay = wrap.querySelector('.dh-menu-overlay');
    const closeBtn = wrap.querySelector('.dh-menu-close');

    function openMenu() {
      wrap.classList.add('is-open');
      toggleBtn.setAttribute('aria-expanded', 'true');
      document.body.classList.add('dh-menu-open');
    }
    function closeMenu() {
      wrap.classList.remove('is-open');
      toggleBtn.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('dh-menu-open');
    }
    function toggleMenu() {
      if (wrap.classList.contains('is-open')) closeMenu(); else openMenu();
    }

    toggleBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
    closeBtn.addEventListener('click', closeMenu);

    // Close on ESC
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && wrap.classList.contains('is-open')) {
        closeMenu();
      }
    });

    // Close when a link is clicked (so the destination page loads cleanly)
    wrap.querySelectorAll('.dh-menu-link').forEach(a => {
      a.addEventListener('click', () => {
        // Brief delay so the visual feedback is visible before nav
        setTimeout(closeMenu, 60);
      });
    });
  });


  // ═══════════════════════════════════════════════════════════════
  // SORT SYSTEM — used by search.html, routines.html, bundles.html, ingredients.html
  // Reusable: define sort options per content kind, expose sort fn + UI builder.
  // ═══════════════════════════════════════════════════════════════
  (function() {

    // Editorially-curated best-seller orderings.
    // First in list = most prominent. Items not listed are sorted to the end.
    // Daniel can re-order these manually as real sales data comes in.
    window.DH_BEST_SELLERS = {
      products: [
        'the-house-multi',     // foundational best-seller
        'the-house-bounce',    // hero retinol product
        'the-house-defense',   // antioxidant heavy hitter
        'the-house-nad-plus',  // longevity hero
        'the-house-tranquil',  // sleep-magnesium
        'the-house-wash',      // gateway skincare
        'the-house-collagen',  // top supplement
        'the-house-eye',       // peptides
        'the-house-soft',      // moisturizer
        'the-house-vitality',  // longevity
        'the-house-glow',      // face oil
        'the-house-hyaluronic',
        'the-house-boost',
        'the-house-flow',
        'the-house-radiance',
        'the-house-firm',
        'the-house-renewal',
        'the-house-hydration',
        'the-house-balance',
        'the-house-calm',
        'the-house-biome',
        'the-house-sunshine',
        'the-house-restore',
        'the-house-synapse',
        'the-house-mask',
        'the-house-polish',
        'the-house-focus',
        'the-house-power',
        'the-house-pump',
        'the-house-seal',
        'the-house-greens',
        'the-house-burn'
      ],
      bundles: [
        'daniels-daily',
        'daniels-skincare',
        'ultimate',
        'am',
        'glow',
        'pm',
        'workout',
        'longevity',
        'moms',
        'arianas'
      ],
      // For concern bundles: ordered roughly by demand
      concerns: [
        'aging', 'sleep', 'energy', 'stress', 'acne',
        'glow', 'starter', 'dullness', 'dryness', 'sensitivity',
        'hair-nails', 'cycle', 'travel', 'metabolic',
        'longevity', 'gut', 'focus',
        'pores', 'reset', 'joints'
      ],
      // Combined best-sellers ranking across BOTH routines and concern bundles —
      // composite keys disambiguate the 'longevity' id which exists in both lists.
      // Order = predicted sales volume (low-price + broad need rises to the top).
      bundleOrder: [
        'routine:daniels-daily',     // foundational supplement stack — universal gateway
        'routine:daniels-skincare',  // foundational skincare stack — paired counterpart
        'concern:sleep',             // small bundle, universal need, affordable entry
        'routine:am',                // skincare gateway
        'concern:dryness',           // Hydration — fundamental, small price
        'concern:aging',             // Anti-Aging — broad appeal
        'concern:starter',           // Skin Starter Bundle — entry-level skincare
        'concern:hair-nails',        // Hair & Nails — large search/beauty demand
        'concern:stress',            // Stress — trending, affordable
        'concern:energy',            // Energy — universal need
        'concern:cycle',             // Cycle — women's wellness segment
        'routine:pm',                // pairs with AM, repeat buy
        'concern:glow',              // The Glow Bundle — inside-out glow
        'concern:dullness',          // Brightening — vitamin C, broad appeal
        'concern:metabolic',         // Metabolic — foundation-first energy
        'routine:moms',              // focused persona conversion
        'routine:workout',           // active segment
        'concern:travel',            // Travel Stack — frequent flyer segment
        'routine:ultimate',          // premium statement, high AOV
        'concern:acne',              // Clear-Skin — concentrated demand
        'concern:longevity',         // Cellular Bundle — premium longevity
        'concern:sensitivity',       // Soothing — sensitive skin segment
        'concern:pores',             // Texture — surface refinement
        'concern:reset',             // Reset Bundle — weekly complement
        'concern:gut',               // trending gut health
        'concern:focus',             // niche cognitive
        'concern:joints',            // older demographic
        'routine:longevity',         // premium niche routine
        'routine:arianas'            // narrow persona
      ]
    };

    // Sort option menus, per content kind.
    window.DH_SORT_OPTIONS = {
      products: [
        { key: 'featured',   label: 'Featured' },
        { key: 'bestseller', label: 'Best Sellers' },
        { key: 'price-asc',  label: 'Price: Low → High' },
        { key: 'price-desc', label: 'Price: High → Low' },
        { key: 'name-asc',   label: 'Name: A → Z' },
        { key: 'name-desc',  label: 'Name: Z → A' }
      ],
      bundles: [
        { key: 'featured',       label: 'Featured' },
        { key: 'bestseller',     label: 'Best Sellers' },
        { key: 'price-asc',      label: 'Price: Low → High' },
        { key: 'price-desc',     label: 'Price: High → Low' },
        { key: 'products-desc',  label: 'Most Products' },
        { key: 'products-asc',   label: 'Fewest Products' },
        { key: 'discount-desc',  label: 'Biggest Discount' },
        { key: 'name-asc',       label: 'Name: A → Z' }
      ],
      ingredients: [
        { key: 'featured',   label: 'Most Used' },
        { key: 'name-asc',   label: 'Name: A → Z' },
        { key: 'name-desc',  label: 'Name: Z → A' },
        { key: 'category',   label: 'By Category' }
      ],
      studies: [
        { key: 'year-desc',   label: 'Most Recent' },
        { key: 'year-asc',    label: 'Oldest First' },
        { key: 'evidence',    label: 'Strongest Evidence' },
        { key: 'type-rank',   label: 'By Study Type' },
        { key: 'ingredient',  label: 'By Ingredient' }
      ],
      pages: [
        { key: 'relevance',  label: 'Relevance' },
        { key: 'name-asc',   label: 'Name: A → Z' }
      ]
    };

    // ─── helpers ───
    function rankIn(list, value) {
      const i = list.indexOf(value);
      return i === -1 ? 999 : i;
    }
    function bundleListPrice(b) {
      // Sum of regular product prices for the bundle, BEFORE bundle discount.
      const slugs = b.slugs || [];
      return slugs.reduce((sum, slug) => {
        const p = (window.getProductBySlug && window.getProductBySlug(slug)) || null;
        return sum + (p ? (p.price || 0) : 0);
      }, 0);
    }
    function bundleSalePrice(b) {
      return bundleListPrice(b) * (1 - (b.discount || 0));
    }

    // ─── main sort function ───
    window.dhSortItems = function(items, kind, sortKey) {
      const arr = (items || []).slice();
      if (!sortKey) return arr;

      switch (kind) {
        case 'products': {
          if (sortKey === 'featured')   return arr; // already in editorial order
          if (sortKey === 'bestseller') {
            const order = window.DH_BEST_SELLERS.products;
            return arr.sort((a, b) => rankIn(order, a.slug) - rankIn(order, b.slug));
          }
          if (sortKey === 'price-asc')  return arr.sort((a, b) => (a.price || 0) - (b.price || 0));
          if (sortKey === 'price-desc') return arr.sort((a, b) => (b.price || 0) - (a.price || 0));
          if (sortKey === 'name-asc')   return arr.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
          if (sortKey === 'name-desc')  return arr.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
          return arr;
        }
        case 'bundles': {
          if (sortKey === 'featured')   return arr;
          if (sortKey === 'bestseller') {
            // Use composite key (kind:id) to disambiguate when routine and concern
            // share an id (e.g., both have a 'longevity' bundle). Falls back to the
            // older per-collection lists for any bundle not in bundleOrder.
            const composite = window.DH_BEST_SELLERS.bundleOrder || [];
            const fallback  = [...(window.DH_BEST_SELLERS.bundles || []), ...(window.DH_BEST_SELLERS.concerns || [])];
            function bundleRank(b) {
              const kind = b._kind || (b.tab ? 'concern' : 'routine');
              const compositeRank = rankIn(composite, `${kind}:${b.id}`);
              if (compositeRank !== 999) return compositeRank;
              return 1000 + rankIn(fallback, b.id); // fallback to legacy list
            }
            return arr.sort((a, b) => bundleRank(a) - bundleRank(b));
          }
          if (sortKey === 'price-asc')      return arr.sort((a, b) => bundleSalePrice(a) - bundleSalePrice(b));
          if (sortKey === 'price-desc')     return arr.sort((a, b) => bundleSalePrice(b) - bundleSalePrice(a));
          if (sortKey === 'products-desc')  return arr.sort((a, b) => (b.slugs || []).length - (a.slugs || []).length);
          if (sortKey === 'products-asc')   return arr.sort((a, b) => (a.slugs || []).length - (b.slugs || []).length);
          if (sortKey === 'discount-desc')  return arr.sort((a, b) => (b.discount || 0) - (a.discount || 0));
          if (sortKey === 'name-asc')       return arr.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
          return arr;
        }
        case 'ingredients': {
          if (sortKey === 'featured') {
            // "Most used" — count how many products reference each ingredient.
            // Supports both data shapes: ing.usedIn (search context) and ing.products (glossary).
            const usage = ing => ((ing.usedIn || ing.products || []).length);
            return arr.sort((a, b) => usage(b) - usage(a));
          }
          if (sortKey === 'name-asc')  return arr.sort((a, b) => (a.name || '').localeCompare(b.name || ''));
          if (sortKey === 'name-desc') return arr.sort((a, b) => (b.name || '').localeCompare(a.name || ''));
          if (sortKey === 'category')  {
            const cat = ing => (ing.category || ing.cat || '');
            return arr.sort((a, b) => {
              const c = cat(a).localeCompare(cat(b));
              return c !== 0 ? c : (a.name || '').localeCompare(b.name || '');
            });
          }
          return arr;
        }
        case 'pages': {
          if (sortKey === 'relevance') return arr;
          if (sortKey === 'name-asc')  return arr.sort((a, b) => (a.title || '').localeCompare(b.title || ''));
          return arr;
        }
        case 'studies': {
          // Higher = stronger. RCTs/meta-analyses outrank reviews/mechanistic studies.
          const TYPE_RANK = {
            'Meta-Analysis': 100,
            'Systematic Review': 95,
            'Randomized Controlled Trial': 90,
            'Multicenter Trial': 85,
            'Long-term Trial': 82,
            'Clinical Trial': 80,
            'Clinical Study': 75,
            'Pharmacokinetic Study': 70,
            'Comparative Bioavailability Study': 68,
            'Mechanistic Study': 60,
            'Mechanistic Review': 58,
            'Review': 50,
            'Position Statement': 45,
            'Consensus Statement': 45,
            'Landmark Discovery': 40
          };
          const EV_RANK = { strong: 2, moderate: 1, emerging: 0 };
          if (sortKey === 'year-desc')  return arr.sort((a, b) => (b.year || 0) - (a.year || 0));
          if (sortKey === 'year-asc')   return arr.sort((a, b) => (a.year || 0) - (b.year || 0));
          if (sortKey === 'type-rank')  return arr.sort((a, b) => (TYPE_RANK[b.type] || 0) - (TYPE_RANK[a.type] || 0) || (b.year || 0) - (a.year || 0));
          if (sortKey === 'evidence')   return arr.sort((a, b) => (EV_RANK[b.evidence] || 0) - (EV_RANK[a.evidence] || 0) || (TYPE_RANK[b.type] || 0) - (TYPE_RANK[a.type] || 0));
          if (sortKey === 'ingredient') return arr.sort((a, b) => (a.ingredientName || '').localeCompare(b.ingredientName || '') || (b.year || 0) - (a.year || 0));
          return arr;
        }
        default:
          return arr;
      }
    };

    // ─── UI builder: returns a sort-bar DOM node ───
    // Pass a `countText` for "Showing 12 of 33", or null to hide the count side.
    window.dhBuildSortBar = function(kind, currentKey, countText, onChange) {
      const options = window.DH_SORT_OPTIONS[kind] || [];
      if (!options.length) return null;
      const bar = document.createElement('div');
      bar.className = 'dh-sort-bar';
      bar.innerHTML = `
        <div class="dh-sort-bar-count">${countText || ''}</div>
        <div class="dh-sort">
          <span class="dh-sort-label">Sort by</span>
          <div class="dh-sort-select-wrap">
            <select class="dh-sort-select" aria-label="Sort ${kind}">
              ${options.map(o => `<option value="${o.key}"${o.key === currentKey ? ' selected' : ''}>${o.label}</option>`).join('')}
            </select>
            <span class="dh-sort-caret">▾</span>
          </div>
        </div>
      `;
      const select = bar.querySelector('.dh-sort-select');
      select.addEventListener('change', () => {
        if (typeof onChange === 'function') onChange(select.value);
      });
      return bar;
    };

    // ─── Subscription cadence + smart-refill helpers ───────────────────
    //
    // The subscription system supports 4 cadences:
    //   • monthly        — full bundle ships every month (DEFAULT)
    //   • bimonthly      — full bundle ships every 2 months
    //   • quarterly      — full bundle ships every 3 months
    //   • smart          — ships every month, but only the products that need
    //                      replenishing that month based on each product's
    //                      `runtime` field (in months). Average monthly cost is
    //                      lower than flat monthly because skincare/oils ship
    //                      less often than supplements.
    //
    // Bundle/sub-bonus pricing always uses:
    //   final = list × (1 - bundle.discount) × (1 - 0.10 sub bonus)
    //
    // The "shipment" total is what the customer pays per delivery.
    // The "amortized monthly" is what they pay per month on average.

    window.formatCadence = function(cadence) {
      switch (cadence) {
        case 'bimonthly': return { name: 'Every 2 Months', short: '2 mo',    meta: 'Full bundle · ships every 2 months · cancel anytime' };
        case 'quarterly': return { name: 'Every 3 Months', short: '3 mo',    meta: 'Full bundle · ships every 3 months · cancel anytime' };
        case 'smart':     return { name: 'Smart Refill',   short: 'Smart',   meta: 'Ships monthly · only what you need · cancel anytime' };
        case 'monthly':
        default:          return { name: 'Monthly',        short: 'Monthly', meta: 'Full bundle · ships every month · cancel anytime' };
      }
    };

    // Months between shipments for a flat cadence. Used to amortize the
    // per-shipment price into a per-month equivalent for comparison.
    window.cadenceMonths = function(cadence) {
      return cadence === 'bimonthly' ? 2 : cadence === 'quarterly' ? 3 : 1;
    };

    // ─── Smart Refill scheduling ────────────────────────────────────────
    //
    // For a bundle, returns the list of products that ship in each month
    // of a 12-month cycle. A product with runtime=N ships on months
    // 1, 1+N, 1+2N, ... (always month 1 to seed the customer, then again
    // when their previous shipment runs out).
    //
    // A $30 minimum-shipment rule applies: any month whose subscribed total
    // would be under $30 gets ROLLED INTO the following month's shipment.
    // The customer's annual product volume is unchanged — just consolidated
    // into fewer, larger shipments. This protects margin on tiny refills.

    const SHIPMENT_MIN = 30;

    function productRuntime(slug) {
      const p = (window.PRODUCTS || []).find(x => x.slug === slug);
      return (p && p.runtime) || 1;
    }

    function priceForSlugs(slugs) {
      return slugs.reduce((s, slug) => {
        const p = (window.PRODUCTS || []).find(x => x.slug === slug);
        return s + ((p && p.price) || 0);
      }, 0);
    }

    window.getSmartRefillSchedule = function(bundle, totalMonths) {
      totalMonths = totalMonths || 12;
      const slugs = (bundle && bundle.slugs) || [];
      const discount = (bundle && bundle.discount) || 0;
      const subBonus = 0.10;
      // Step 1: build raw schedule based on each product's runtime
      const raw = [];
      for (let m = 1; m <= totalMonths; m++) {
        const products = slugs.filter(slug => ((m - 1) % productRuntime(slug)) === 0);
        raw.push(products);
      }
      // Step 2: apply $30 minimum — roll any under-min month INTO the next month.
      // Duplicates are intentional: if Tranquil rolls forward, the customer still
      // gets 12 bottles per year (just delivered in 11 shipments instead of 12).
      for (let i = 0; i < totalMonths; i++) {
        const items = raw[i];
        if (items.length === 0) continue;
        const list = priceForSlugs(items);
        const customerPrice = list * (1 - discount) * (1 - subBonus);
        if (customerPrice < SHIPMENT_MIN && i + 1 < totalMonths) {
          // Roll forward — append (allowing duplicates) so inventory math stays correct
          raw[i + 1] = [...raw[i + 1], ...items];
          raw[i] = [];
        }
      }
      return raw.map((products, i) => ({ monthIndex: i + 1, products }));
    };

    // Smart Refill is mostly useless on pure-supplement bundles (where every product
    // has runtime=1 anyway) and on weekly-use bundles (Reset Bundle) where the
    // small ship size erodes margin without retention upside. Disable it on those.
    // NOTE: Daniel's Daily IS enabled — its 10 supplements have mixed runtimes
    // (Multi/NAD+/Vitality/Synapse/Restore/Tranquil 1mo; Flow/Biome/Calm 2mo;
    // Sunshine 3mo), so Smart Refill genuinely saves ~$484/yr vs flat monthly.
    const SMART_REFILL_DISABLED = [
      'routine:workout',       // 5 supplements
      'routine:foundation',    // 5 supplements (subset of daniels-daily)
      'routine:longevity',     // 5 supplements (subset of daniels-daily)
      'concern:reset',         // 2 skincare, weekly-use
      'concern:starter'        // 3 skincare, all 2-month cycles
    ];

    window.bundleSmartRefillEligible = function(bundle) {
      if (!bundle) return false;
      // Concern bundles carry a `tab` field; routines do not. Use that to
      // disambiguate the 'longevity' id collision (routine vs Cellular concern).
      const kind = bundle.tab ? 'concern' : 'routine';
      return !SMART_REFILL_DISABLED.includes(`${kind}:${bundle.id}`);
    };

    // Average per-month price under smart refill, with bundle + sub discount applied.
    // = (sum of each product's annual cost) × discount stack / 12
    window.computeSmartRefillAvgMonthly = function(bundle) {
      if (!bundle) return 0;
      const discount = bundle.discount || 0;
      const subBonus = 0.10;
      const slugs = bundle.slugs || [];
      let annualList = 0;
      slugs.forEach(slug => {
        const p = (window.PRODUCTS || []).find(x => x.slug === slug);
        if (!p) return;
        const rt = p.runtime || 1;
        const shipmentsPerYear = Math.ceil(12 / rt);
        annualList += (p.price || 0) * shipmentsPerYear;
      });
      const annualNet = annualList * (1 - discount) * (1 - subBonus);
      return annualNet / 12;
    };

    // First-shipment price under smart refill — same as flat-monthly subscribed price,
    // because month 1 of a smart-refill plan is always the full bundle.
    window.computeSmartRefillFirstShipment = function(bundle) {
      if (!bundle) return 0;
      const discount = bundle.discount || 0;
      const subBonus = 0.10;
      const slugs = bundle.slugs || [];
      const list = slugs.reduce((s, slug) => {
        const p = (window.PRODUCTS || []).find(x => x.slug === slug);
        return s + ((p && p.price) || 0);
      }, 0);
      return list * (1 - discount) * (1 - subBonus);
    };

    // Per-shipment price for the flat cadences (monthly/bimonthly/quarterly).
    // Same number for all three — the customer just pays it on a different rhythm.
    window.computeBundleShipmentPrice = function(bundle, subscribed) {
      if (!bundle) return 0;
      const slugs = bundle.slugs || [];
      const list = slugs.reduce((s, slug) => {
        const p = (window.PRODUCTS || []).find(x => x.slug === slug);
        return s + ((p && p.price) || 0);
      }, 0);
      const afterBundle = list * (1 - (bundle.discount || 0));
      return subscribed ? afterBundle * 0.90 : afterBundle;
    };

    // Annual savings of Smart Refill vs. flat-monthly subscription. Used on every
    // card to show the customer the dollar value of the smart cadence at a glance.
    // Returns 0 (or a near-zero value) when all products in the bundle have
    // runtime=1 — there's literally no savings because flat-monthly = smart for that bundle.
    window.computeSmartRefillAnnualSavings = function(bundle) {
      if (!bundle) return 0;
      const flatMonthlyAnnual = window.computeBundleShipmentPrice(bundle, true) * 12;
      const smartAnnual = window.computeSmartRefillAvgMonthly(bundle) * 12;
      const diff = flatMonthlyAnnual - smartAnnual;
      return diff > 0 ? diff : 0;
    };

    // ─── Unified Subscribe + Cadence Toggle Markup ──────────────────────
    //
    // Returns the HTML for the two-tier subscribe UI: a binary One-Time/
    // Subscribe toggle on top, with a 2x2 cadence selector beneath that's
    // hidden until Subscribe mode is selected.
    //
    // The 4 cadences (Monthly / Every 2 Mo / Every 3 Mo / Smart Refill) are
    // ALL available for every bundle — the customer picks based on their
    // own usage rhythm. Monthly is the default selection.

    window.dhBuildSubscribeToggle = function(bundle) {
      const id = bundle.id;
      const smartEligible = window.bundleSmartRefillEligible(bundle);
      // Smart Refill button only shows on bundles where the cadence variation
      // actually helps the customer (mixed bundles, skincare-only bundles).
      const smartBtnHTML = smartEligible ? `
            <button type="button" class="cadence-btn cadence-btn-smart" data-cadence="smart">
              <div class="cadence-name">Smart Refill</div>
              <div class="cadence-meta">Only what you need</div>
            </button>` : '';
      const noSmartAttr = smartEligible ? '' : ' data-no-smart';
      const smartNoteHTML = smartEligible ? `
          <div class="cadence-note" data-smart-note hidden>
            <strong>How Smart Refill works:</strong> Your first shipment is the full bundle. After that, each month ships only the products you actually need to replenish — supplements every month, most skincare every 2 months, eye creams &amp; oils every 3. Any shipment under $30 is bundled with the next month's delivery. You only pay for what arrives.
          </div>` : '';
      return `
        <div class="bundle-subscribe-toggle" data-bundle-id="${id}" data-toggle>
          <button type="button" data-mode="once" class="active">
            <div class="toggle-row"><span class="toggle-mark"></span><span class="toggle-name">One-Time</span></div>
            <span class="toggle-meta">Single delivery</span>
          </button>
          <button type="button" data-mode="subscribe">
            <div class="toggle-row"><span class="toggle-mark"></span><span class="toggle-name">Subscribe</span></div>
            <span class="toggle-meta">Save 10% · cancel anytime</span>
          </button>
        </div>
        <div class="bundle-cadence" data-bundle-id="${id}" data-cadence-selector hidden${noSmartAttr}>
          <div class="cadence-eyebrow">Shipment Frequency</div>
          <div class="cadence-grid">
            <button type="button" class="cadence-btn active" data-cadence="monthly">
              <div class="cadence-name">Monthly</div>
              <div class="cadence-meta">Full bundle</div>
            </button>
            <button type="button" class="cadence-btn" data-cadence="bimonthly">
              <div class="cadence-name">Every 2 Months</div>
              <div class="cadence-meta">Full bundle</div>
            </button>
            <button type="button" class="cadence-btn" data-cadence="quarterly">
              <div class="cadence-name">Every 3 Months</div>
              <div class="cadence-meta">Full bundle</div>
            </button>${smartBtnHTML}
          </div>${smartNoteHTML}
        </div>
      `;
    };

    // ─── Auto-Enhance Static Bundle Toggles ──────────────────────────────
    //
    // Pages can include a static `<div class="bundle-subscribe-toggle"
    // data-bundle-id="...">` with just One-Time / Subscribe buttons.
    // On DOM ready, this scanner finds those toggles, looks up the
    // matching bundle, and (if smart-refill eligible) replaces the
    // markup with the full Subscribe + Cadence-selector UI from
    // dhBuildSubscribeToggle. Also wires the click handlers so the
    // toggles actually function. Idempotent — marks elements with
    // data-toggle-enhanced to prevent double-enhancement.
    //
    // This means every bundle purchase box on the site automatically
    // gains the Smart Refill option without per-page markup changes.
    window.dhEnhanceBundleToggles = function() {
      const toggles = document.querySelectorAll(
        '.bundle-subscribe-toggle[data-bundle-id]:not([data-toggle-enhanced])'
      );
      toggles.forEach(toggle => {
        const id = toggle.dataset.bundleId;
        if (!id) return;
        // Look up bundle from CURATED or CONCERN sets
        const bundle = (window.CURATED_BUNDLES || []).find(b => b.id === id) ||
                       (window.CONCERN_BUNDLES || []).find(b => b.id === id);
        if (!bundle) {
          // No bundle data — leave the static toggle as-is, but still wire
          // its click behavior so One-Time / Subscribe buttons toggle active.
          toggle.setAttribute('data-toggle-enhanced', '1');
          toggle.addEventListener('click', e => {
            const btn = e.target.closest('button');
            if (!btn) return;
            toggle.querySelectorAll('button').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
          });
          return;
        }
        // Replace with full smart-refill toggle markup
        const html = window.dhBuildSubscribeToggle(bundle);
        const wrapper = document.createElement('div');
        wrapper.innerHTML = html.trim();
        const newToggle = wrapper.querySelector('.bundle-subscribe-toggle');
        const newCadence = wrapper.querySelector('.bundle-cadence');
        if (!newToggle) return;
        newToggle.setAttribute('data-toggle-enhanced', '1');
        // Preserve any inline style or special classes from the original
        if (toggle.getAttribute('style')) newToggle.setAttribute('style', toggle.getAttribute('style'));
        toggle.replaceWith(newToggle);
        if (newCadence) newToggle.insertAdjacentElement('afterend', newCadence);
        // Wire toggle: One-Time / Subscribe
        newToggle.addEventListener('click', e => {
          const btn = e.target.closest('button');
          if (!btn) return;
          newToggle.querySelectorAll('button').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          const isSub = btn.dataset.mode === 'subscribe';
          newToggle.classList.toggle('subscribe-mode', isSub);
          if (newCadence) {
            if (isSub) newCadence.removeAttribute('hidden');
            else newCadence.setAttribute('hidden', '');
          }
          // Update sibling CTA label if present
          const card = newToggle.closest('.bundle-footnote-inner, .bundle-hero-meta, .featured-inner') || newToggle.parentElement;
          if (card) {
            const cta = card.querySelector('[data-bundle-add], .bundle-footnote-cta, .bundle-cta-add');
            if (cta) cta.textContent = isSub ? 'Subscribe to Routine →' : 'Add Routine to Cart →';
          }
        });
        // Wire cadence buttons
        if (newCadence) {
          newCadence.querySelectorAll('.cadence-btn').forEach(btn => {
            btn.addEventListener('click', () => {
              newCadence.querySelectorAll('.cadence-btn').forEach(b => b.classList.remove('active'));
              btn.classList.add('active');
              const note = newCadence.querySelector('[data-smart-note]');
              if (note) {
                if (btn.dataset.cadence === 'smart') note.removeAttribute('hidden');
                else note.setAttribute('hidden', '');
              }
            });
          });
        }
      });
    };
    // Run on DOMContentLoaded — and also after a tick in case CURATED_BUNDLES
    // is still loading.
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => window.dhEnhanceBundleToggles());
    } else {
      window.dhEnhanceBundleToggles();
    }
    // Re-scan after a short delay to catch any toggles inserted by other scripts
    setTimeout(() => window.dhEnhanceBundleToggles && window.dhEnhanceBundleToggles(), 250);

    // ─── Bundle Directions Generator ────────────────────────────────────
    //
    // Generates a collapsible "how to use" section organized into two
    // groups: SKINCARE (split into AM / PM / WEEKLY sub-routines) and
    // SUPPLEMENTS (split into Morning / Workout / Dinner / Evening
    // buckets). Each product is classified into the appropriate
    // sub-routine based on its slug.
    //
    // Returns HTML markup (or '' if the bundle has no products).
    window.generateBundleDirections = function(bundle, options) {
      options = options || {};
      if (!bundle || !Array.isArray(bundle.slugs)) return '';
      const products = bundle.slugs
        .map(s => window.getProductBySlug && window.getProductBySlug(s))
        .filter(Boolean);
      if (!products.length) return '';

      const skincare    = products.filter(p => p.category === 'skincare');
      const supplements = products.filter(p => p.category === 'supplement');

      // SKINCARE: Each product is classified as AM-only, PM-only, or BOTH.
      // Order numbers reflect application sequence (thinnest to thickest).
      // Products that work for both AM and PM (cleanser, treatments) appear
      // in whichever section the bundle composition makes appropriate.
      const SKIN_AM_ORDER = {
        'the-house-wash':       1, // cleanser — also PM
        'the-house-balance':    2, // toner — AM only
        'the-house-boost':      3, // vitamin C — AM only
        'the-house-clear':      3, // acne treatment — both
        'the-house-hyaluronic': 4, // HA serum — also PM
        'the-house-defense':    5, // antioxidant — AM only
        'the-house-soft':       6  // moisturizer
      };
      const SKIN_PM_ORDER = {
        'the-house-wash':       1, // cleanser — also AM
        'the-house-renewal':    2, // retinol — PM only
        'the-house-clear':      2, // acne treatment — both
        'the-house-bounce':     3, // peptide treatment — PM only
        'the-house-firm':       3, // peptide serum — PM only
        'the-house-hyaluronic': 4, // HA serum — also AM
        'the-house-eye':        5, // eye cream — PM only
        'the-house-hydration':  6, // PM moisturizer
        'the-house-glow':       7  // face oil seal — PM only
      };

      // ── Moisturizer logic ──
      // Soft and Hydration are interchangeable end-of-routine sealants.
      // Every routine — AM or PM — needs a moisturizer. When a bundle has
      // BOTH, Soft is the AM moisturizer and Hydration is the PM moisturizer
      // (each locked to its preferred time). When a bundle has only ONE,
      // that moisturizer fills both AM and PM slots so the user has a
      // sealing step in every routine.
      const hasSoft      = skincare.some(p => p.slug === 'the-house-soft');
      const hasHydration = skincare.some(p => p.slug === 'the-house-hydration');

      if (hasSoft && !hasHydration) {
        SKIN_PM_ORDER['the-house-soft'] = 6; // Soft serves PM too
      }
      if (hasHydration && !hasSoft) {
        SKIN_AM_ORDER['the-house-hydration'] = 6; // Hydration serves AM too
      }

      // Time-exclusive products determine whether a bundle warrants an
      // AM section, PM section, or both. A product appearing in this set
      // means it's locked to that time of day.
      const AM_EXCLUSIVE = new Set(['the-house-balance', 'the-house-boost', 'the-house-defense']);
      const PM_EXCLUSIVE = new Set(['the-house-renewal', 'the-house-bounce', 'the-house-firm', 'the-house-eye', 'the-house-glow']);
      // When both moisturizers are present, each becomes time-locked.
      if (hasSoft && hasHydration) {
        AM_EXCLUSIVE.add('the-house-soft');
        PM_EXCLUSIVE.add('the-house-hydration');
      }

      const SKIN_WEEKLY = new Set(['the-house-mask', 'the-house-polish']);

      // SUPPLEMENTS: bucketed by time-of-day based on each formula's purpose.
      const EVENING_SUPPS = new Set(['the-house-calm', 'the-house-tranquil']);
      const DINNER_SUPPS  = new Set(['the-house-restore', 'the-house-seal']);
      const WORKOUT_SUPPS = new Set(['the-house-power', 'the-house-pump', 'the-house-burn']);

      // ── Build skincare groups ──
      // Only show AM section if bundle has AM-exclusive products, and only show
      // PM section if it has PM-exclusive products. Shared products (Wash, HA,
      // Clear) appear in whichever section is shown.
      const hasAmExclusive = skincare.some(p => AM_EXCLUSIVE.has(p.slug));
      const hasPmExclusive = skincare.some(p => PM_EXCLUSIVE.has(p.slug));

      const amSkin = (hasAmExclusive || (!hasPmExclusive && skincare.some(p => SKIN_AM_ORDER[p.slug] !== undefined)))
        ? skincare
            .filter(p => SKIN_AM_ORDER[p.slug] !== undefined && !PM_EXCLUSIVE.has(p.slug))
            .sort((a, b) => SKIN_AM_ORDER[a.slug] - SKIN_AM_ORDER[b.slug])
        : [];

      const pmSkin = (hasPmExclusive || (!hasAmExclusive && skincare.some(p => SKIN_PM_ORDER[p.slug] !== undefined)))
        ? skincare
            .filter(p => SKIN_PM_ORDER[p.slug] !== undefined && !AM_EXCLUSIVE.has(p.slug))
            .sort((a, b) => SKIN_PM_ORDER[a.slug] - SKIN_PM_ORDER[b.slug])
        : [];

      const weeklySkin = skincare.filter(p => SKIN_WEEKLY.has(p.slug));

      const skincareSteps = [];
      if (amSkin.length) {
        skincareSteps.push({
          title: 'Morning Skincare',
          body: amSkin.map(p => `<strong>${p.name}</strong>`).join(' <span class="step-arrow">→</span> '),
          hint: 'Apply in order, thinnest to thickest · finish with SPF before leaving the house'
        });
      }
      if (pmSkin.length) {
        skincareSteps.push({
          title: 'Evening Skincare',
          body: pmSkin.map(p => `<strong>${p.name}</strong>`).join(' <span class="step-arrow">→</span> '),
          hint: 'Apply in order after cleansing · allow 1–2 minutes between active layers'
        });
      }
      if (weeklySkin.length) {
        skincareSteps.push({
          title: 'Weekly Reset',
          body: weeklySkin.map(p => `<strong>${p.name}</strong>`).join(' + '),
          hint: 'Use 1–2× per week, after cleansing and before serums'
        });
      }

      // ── Build supplement groups ──
      const morning = supplements.filter(p =>
        !EVENING_SUPPS.has(p.slug) && !DINNER_SUPPS.has(p.slug) && !WORKOUT_SUPPS.has(p.slug)
      );
      const workout = supplements.filter(p => WORKOUT_SUPPS.has(p.slug));
      const dinner  = supplements.filter(p => DINNER_SUPPS.has(p.slug));
      const evening = supplements.filter(p => EVENING_SUPPS.has(p.slug));

      const suppSteps = [];
      if (morning.length) suppSteps.push({
        title: 'Morning',
        body: morning.map(p => `<strong>${p.name}</strong>`).join(', '),
        hint: 'Take with breakfast or your first meal of the day'
      });
      if (workout.length) suppSteps.push({
        title: 'Pre / Post Workout',
        body: workout.map(p => `<strong>${p.name}</strong>`).join(', '),
        hint: 'Follow each bottle\u2019s label for pre vs post timing'
      });
      if (dinner.length) suppSteps.push({
        title: 'With Dinner',
        body: dinner.map(p => `<strong>${p.name}</strong>`).join(', '),
        hint: 'Take alongside your evening meal for best absorption'
      });
      if (evening.length) suppSteps.push({
        title: 'Evening',
        body: evening.map(p => `<strong>${p.name}</strong>`).join(', '),
        hint: 'Take 30–60 minutes before bed'
      });

      if (!skincareSteps.length && !suppSteps.length) return '';

      // Global step numbering runs continuously across both sections.
      let stepIdx = 0;
      function renderStep(s) {
        stepIdx++;
        return `
          <div class="bundle-direction-step">
            <span class="step-num">${stepIdx}</span>
            <div class="step-content">
              <span class="step-label">${s.title}</span>
              <span class="step-body">${s.body}${s.hint ? `<span class="step-hint">${s.hint}</span>` : ''}</span>
            </div>
          </div>
        `;
      }

      const skincareSection = skincareSteps.length ? `
        <div class="directions-section">
          <div class="directions-section-label">
            <span class="directions-section-icon">◐</span>
            <span class="directions-section-name">Skincare</span>
            <span class="directions-section-count">${skincare.length} ${skincare.length === 1 ? 'product' : 'products'}</span>
          </div>
          ${skincareSteps.map(renderStep).join('')}
        </div>
      ` : '';

      const suppSection = suppSteps.length ? `
        <div class="directions-section">
          <div class="directions-section-label">
            <span class="directions-section-icon">◍</span>
            <span class="directions-section-name">Supplements</span>
            <span class="directions-section-count">${supplements.length} ${supplements.length === 1 ? 'product' : 'products'}</span>
          </div>
          ${suppSteps.map(renderStep).join('')}
        </div>
      ` : '';

      // If caller is providing its own collapsible wrapper (e.g. quiz.html
      // wraps the whole Directions section in a <details>), skip the inner
      // collapse button and return the section contents directly.
      if (options.skipWrapper) {
        return `${skincareSection}${suppSection}`;
      }

      // Wrapper is collapsible — starts collapsed, tap header to expand.
      return `
        <div class="bundle-directions is-collapsed">
          <button type="button" class="bundle-directions-toggle" data-directions-toggle aria-expanded="false">
            <span class="bundle-directions-label">Routine Directions · How to Use</span>
            <span class="bundle-directions-chevron">▾</span>
          </button>
          <div class="bundle-directions-content">
            ${skincareSection}
            ${suppSection}
          </div>
        </div>
      `;
    };

  })();

