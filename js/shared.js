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
    items: [], // [{ slug, name, price, image, qty, subscribe, bundleName, bundleDiscount }]

    add(product, opts = {}) {
      const bundleName = opts.bundleName || null;
      const existing = this.items.find(i =>
        i.slug === product.slug &&
        i.subscribe === !!opts.subscribe &&
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
          bundleName: bundleName,
          bundleDiscount: opts.bundleDiscount || 0
        });
      }
      this.save();
      this.render();
      this.updateShippingBar();
      openCart();
    },

    addBundle(productSlugs, bundleName, discount = BUNDLE_DISCOUNT_DEFAULT, subscribe = false) {
      // Add all products in a bundle at the bundle discount, grouped by bundleName + subscribe state
      const products = productSlugs
        .map(s => window.getProductBySlug && window.getProductBySlug(s))
        .filter(Boolean);
      if (products.length === 0) return;
      products.forEach(p => {
        const existing = this.items.find(i =>
          i.slug === p.slug && i.bundleName === bundleName && i.subscribe === !!subscribe
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
            bundleDiscount: discount
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
      // In production this would push to Shopify cart API.
      // We use sessionStorage as a simple persistence layer for the session.
      try {
        sessionStorage.setItem('dh_cart', JSON.stringify(this.items));
      } catch (e) { /* ignore */ }
    },

    load() {
      try {
        const data = sessionStorage.getItem('dh_cart');
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
            <a href="bundles.html" style="color: var(--gold); text-decoration: underline; font-size: 12px; letter-spacing: 0.18em; text-transform: uppercase;">Browse Bundles →</a>
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
    const overlay = document.querySelector('.cart-overlay');
    const drawer = document.querySelector('.cart-drawer');
    if (!overlay || !drawer) return; // Drawer removed — no-op
    overlay.classList.add('open');
    drawer.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
  function closeCart() {
    document.querySelector('.cart-overlay')?.classList.remove('open');
    document.querySelector('.cart-drawer')?.classList.remove('open');
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
      results.innerHTML = '<div class="search-panel-hint">Type to search across all 33 products.</div>';
      return;
    }
    if (!window.PRODUCTS || !window.PRODUCTS.length) {
      results.innerHTML = '<div class="search-panel-empty">Product data unavailable.</div>';
      return;
    }
    const matches = window.PRODUCTS.filter(p => {
      const haystack = [p.name, p.tag, p.tagline, p.description, ...(p.bestFor || []), ...(p.ingredients || []).map(i => i.name || '')].join(' ').toLowerCase();
      return haystack.includes(q);
    }).slice(0, 12);
    if (!matches.length) {
      results.innerHTML = `<div class="search-panel-empty">No matches for "${query}".</div>`;
      return;
    }
    results.innerHTML = matches.map(p => `
      <a href="product.html?slug=${p.slug}" class="search-panel-result">
        <img src="${p.image}" alt="${p.name}" loading="lazy"/>
        <div class="search-panel-result-info">
          <div class="search-panel-result-name">The House <em>${p.name}</em></div>
          <div class="search-panel-result-tag">${(p.tag || '').split('·')[0].trim()}</div>
        </div>
        <div class="search-panel-result-price">$${p.price.toFixed(0)}</div>
      </a>
    `).join('');
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

    // Search
    document.querySelectorAll('.search-trigger').forEach(el => el.addEventListener('click', openSearch));
    document.querySelector('.search-panel-close')?.addEventListener('click', closeSearch);
    const searchInput = document.querySelector('.search-panel-input');
    if (searchInput) {
      searchInput.addEventListener('input', e => performSearch(e.target.value));
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
        const buttons = [
          `<button class="lightbox-btn primary" data-lb-action="add-product">Add to Cart →</button>`,
          this.bundleName
            ? `<button class="lightbox-btn primary" style="background: var(--gold);" data-lb-action="add-bundle">${this.bundleSubscribe ? 'Subscribe to Bundle' : 'Add Bundle'} →</button>`
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

  // ═══ GLOBAL BUNDLE SUBSCRIBE TOGGLE + ADD-BUNDLE WIRING ═══
  // Lets any page use .bundle-subscribe-toggle and [data-bundle-add] without
  // duplicating wiring code. (Bundles.html has its own scoped version too.)
  document.addEventListener('DOMContentLoaded', () => {
    // Toggle: One-Time / Monthly active state
    document.querySelectorAll('.bundle-subscribe-toggle').forEach(toggle => {
      toggle.querySelectorAll('button').forEach(btn => {
        btn.addEventListener('click', () => {
          toggle.querySelectorAll('button').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          toggle.classList.toggle('subscribe-mode', btn.dataset.mode === 'subscribe');
        });
      });
    });

    // Add Bundle to Cart — reads bundle by id, checks subscribe state, adds to cart
    document.querySelectorAll('[data-bundle-add]').forEach(btn => {
      // Skip if bundles.html scoped handler already wired it (it gets to run first)
      if (btn._dhBundleAddWired) return;
      btn._dhBundleAddWired = true;
      btn.addEventListener('click', () => {
        const bundleId = btn.dataset.bundleAdd;
        const bundle = window.getCuratedBundleById?.(bundleId);
        if (!bundle) return;
        const toggle = document.querySelector(`.bundle-subscribe-toggle[data-bundle-id="${bundleId}"]`);
        const subscribe = toggle?.querySelector('button.active')?.dataset.mode === 'subscribe';
        window.dhCart.addBundle(bundle.slugs, bundle.name, bundle.discount, subscribe);
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

    // Hook into dhCart's persist/render to keep badge fresh
    if (window.dhCart) {
      const origPersist = window.dhCart.persist.bind(window.dhCart);
      window.dhCart.persist = function() {
        origPersist();
        syncBadge();
        if (wrap.classList.contains('expanded')) render();
      };
      syncBadge();
    }

    function priceOf(item) {
      if (item.bundleName && item.bundleDiscount) {
        let p = item.price * (1 - item.bundleDiscount);
        if (item.subscribe) p *= (1 - 0.10); // bundle subscription bonus
        return p;
      }
      if (item.subscribe) return item.price * (1 - SUBSCRIBE_DISCOUNT);
      return item.price;
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
            <a href="bundles.html">Browse Bundles →</a>
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
                if (it.subscribe) labels.push(`<div class="cf-item-meta discount">↻ Bundle Subscription</div>`);
              }
              else if (it.subscribe) labels.push(`<div class="cf-item-meta discount">↻ Subscribe &amp; Save</div>`);
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

          <!-- Discount code -->
          <div class="cf-discount-row">
            <input type="text" class="cf-discount-input" placeholder="Discount code"/>
            <button class="cf-discount-btn" type="button">Apply</button>
          </div>

          <!-- Totals -->
          <div class="cf-totals">
            <div class="cf-totals-row"><span>Subtotal</span><span class="cf-totals-value cf-subtotal">$${subtotal.toFixed(2)}</span></div>
            ${savings > 0 ? `<div class="cf-totals-row savings"><span>Bundle / subscribe savings</span><span class="cf-totals-value">−$${savings.toFixed(2)}</span></div>` : ''}
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
  // For each .bundle-card on bundles.html, injects a "View Details ↓" link
  // and an expandable panel that reveals:
  //   • A bundle-level intro paragraph ("what makes this stack work")
  //   • Three benefit-tag pills (Built to layer / Tested together / Saves $X)
  //   • A grid of clickable product mini-cards (each links to product.html)
  // Mixes option-2 (bundle-level story) + option-1 (per-product mini-cards).
  document.addEventListener('DOMContentLoaded', function() {
    if (!window.PRODUCTS || !window.CURATED_BUNDLES) return;

    // Bundle-level "why this stack works" intros — keyed by bundle id.
    // Kept here (not in products.js) so they're easy to tune editorially.
    const BUNDLE_INTROS = {
      ultimate: "Daniel's complete protocol — inside and out. Every product he uses every day, layered in the order they work best. Skincare and supplements aren't separate problems; they're one system. This is that system.",
      'daniels-daily': "The supplement half of Daniel's daily routine. Five Foundation essentials cover the basics; five Longevity actives reach further — NAD+, creatine, cellular repair. For people who've already dialed in their skincare.",
      am: "Six steps to start the day with a complete barrier and visible glow. Cleanse, tone, brighten with vitamin C, hydrate with hyaluronic acid, defend with antioxidants, moisturize. Each product layers cleanly into the next.",
      pm: "Six steps to wake up better skin. Retinol resurfaces, peptides firm, hyaluronic acid plumps, glycolic renews, oil seals. The repair work happens while you sleep — this is what gives it material to work with.",
      workout: "Built around the gym window. Creatine and protein for performance, electrolytes for recovery, magnesium for sleep that night, ashwagandha to manage cortisol. A complete pre/intra/post stack.",
      longevity: "The actives most associated with healthy aging at clinical doses. NAD+ for cellular energy, resveratrol for sirtuin activation, CoQ10 for mitochondrial function, omega-3s, vitamin D3. The longevity literature in capsule form.",
      glow: "The brightness stack — inside and out. Vitamin C and niacinamide topically, collagen and antioxidants internally, oil to seal. Built to compound: each product reinforces what the others are doing.",
      weekly: "Two treatments. One night a week, you mask. Another night, you polish. Never both — these aren't daily steps. They're the deeper resets that give the daily routine more to work with.",
      moms: "Curated for the people who don't have time for a 12-step routine. The shortest path to visible results: clean barrier, deep hydration, retinol, antioxidants, omega-3s. The mom-test approved version.",
      arianas: "A complete inside-out routine for visible glow. Six skincare layers — cleanse, brighten, defend, renew, and protect the eyes — paired with the supplements that compound the result internally: a daily multi, antioxidant beauty support, and collagen. Built for week-over-week results."
    };

    function dollar(n) {
      const v = Math.round(n);
      return '$' + v;
    }

    function renderBundlePanel(bundle, products) {
      const intro = BUNDLE_INTROS[bundle.id] || `${products.length} products, curated to work together. ${(bundle.discount * 100).toFixed(0)}% off when bought as a bundle.`;
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

      return `
        <div class="bd-inner">
          <div class="bd-block">
            <div class="bd-label">What makes this work</div>
            <div class="bd-intro">${intro}</div>
            <div class="bd-tags">
              <span class="bd-tag">Built to layer</span>
              <span class="bd-tag">Tested together</span>
              <span class="bd-tag">Save ${dollar(savings)} as a bundle</span>
              <span class="bd-tag">+${dollar(subSavings)} off subscribed</span>
            </div>
          </div>
          <div class="bd-block">
            <div class="bd-label">Inside this bundle</div>
            <div class="bd-products">
              ${productCardsHtml}
            </div>
            <a href="bundles.html" class="bd-full-link">Browse all bundles →</a>
          </div>
        </div>
      `;
    }

    document.querySelectorAll('.bundle-card').forEach(card => {
      // Find the bundle id from the Add-to-cart button in this card
      const addBtn = card.querySelector('[data-bundle-add]');
      if (!addBtn) return;
      const bundleId = addBtn.dataset.bundleAdd;
      const bundle = window.CURATED_BUNDLES.find(b => b.id === bundleId);
      if (!bundle) return;
      const products = bundle.slugs
        .map(s => window.PRODUCTS.find(p => p.slug === s))
        .filter(Boolean);
      if (!products.length) return;

      // Find description element — link sits right after it via CSS order
      const body = card.querySelector('.bundle-body');
      if (!body) return;

      // Build the toggle link
      const link = document.createElement('button');
      link.type = 'button';
      link.className = 'bundle-view-link';
      link.innerHTML = 'View Details <span class="bvl-arrow">↓</span>';

      // Build the panel container (kept hidden until expanded)
      const panel = document.createElement('div');
      panel.className = 'bundle-details';
      panel.setAttribute('aria-hidden', 'true');

      body.appendChild(link);
      body.appendChild(panel);

      link.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const willOpen = !panel.classList.contains('open');
        if (willOpen && !panel.innerHTML) {
          panel.innerHTML = renderBundlePanel(bundle, products);
        }
        void panel.offsetHeight; // force reflow before transitioning
        panel.classList.toggle('open', willOpen);
        link.classList.toggle('expanded', willOpen);
        link.innerHTML = willOpen
          ? 'Hide Details <span class="bvl-arrow">↑</span>'
          : 'View Details <span class="bvl-arrow">↓</span>';
        panel.setAttribute('aria-hidden', String(!willOpen));
      });
    });
  });

})();
