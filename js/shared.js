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

  /* Computes pricing for a bundle id — used by banner decoration and reactive price updates. */
  function getBundlePricing(bundleId) {
    const bundle = window.getCuratedBundleById?.(bundleId);
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

    // .bundle-card style pricing (bundles.html main cards)
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

    // .hero-bundle style pricing (Ultimate on bundles.html)
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
          toggle.classList.toggle('subscribe-mode', btn.dataset.mode === 'subscribe');

          // Trigger reactive pricing refresh on the parent bundle container
          const container = toggle.closest('.bundle-card, .bundle-footnote, .hero-bundle');
          if (container) refreshBundleDisplay(container, btn.dataset.mode);
        });
      });
    });

    // Apply initial pricing pass to every bundle container
    document.querySelectorAll('.bundle-card, .bundle-footnote, .hero-bundle').forEach(container => {
      const activeBtn = container.querySelector('.bundle-subscribe-toggle button.active');
      refreshBundleDisplay(container, activeBtn?.dataset.mode || 'once');
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
          { name: "Wash",       note: "The protein-based cleanser that resets the skin without stripping it." },
          { name: "Balance",    note: "Witch hazel, aloe, and white tea prep the skin to receive actives — not a five-alarm astringent." },
          { name: "Boost",      note: "Vitamin C, niacinamide, and panthenol. The triple-vitamin serum that brightens and evens tone." },
          { name: "Hyaluronic", note: "Multi-weight hyaluronic acid pulls moisture deep; glycerin keeps it there." },
          { name: "Defense",    note: "The antioxidant heavy hitter. Stable vit C, soy protein, squalane, caffeine — protection layer for the day." },
          { name: "Soft",       note: "Multi-weight HA + aloe seals the AM stack with hydration." }
        ],
        pm: [
          { name: "Bounce",    note: "The PM cornerstone. Retinol, hydrolyzed collagen, and HA in one elegant step." },
          { name: "Renewal",   note: "2-3 nights/week only. Glycolic acid resurfaces overnight; retinyl palmitate supports collagen." },
          { name: "Firm",      note: "Peptides, cucumber, and chrysin for fine lines — concentrated where Bounce leaves off." },
          { name: "Hydration", note: "Glycerin mimics the skin's own moisture pathway; cassia obtusifolia adds antioxidant defense." },
          { name: "Eye",       note: "Peptide cream targets the orbital area both AM and PM." },
          { name: "Glow",      note: "The finishing oil. Rosehip, hemp, and grape seed in a six-oil blend — locks in the routine." }
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
          no: "You're new to skincare and supplements and want to test the waters first. Start with AM Bundle or Daniel's Daily and scale up. The Ultimate is for people who already know they want the full protocol."
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
        intro: "Six steps to start the day with a complete barrier and visible glow. <em>Cleanse, tone, brighten, hydrate, defend, moisturize.</em> Each product layers cleanly into the next — no balling, no pilling, no waiting between steps. Ten minutes the first week, four minutes once you have the order down.",
        am: [
          { name: "Wash",       note: "The protein-based cleanser. Resets the skin without stripping it — sets the canvas for everything that follows." },
          { name: "Balance",    note: "Witch hazel, aloe, white tea, and cucumber prep the skin to receive actives. Not a five-alarm astringent." },
          { name: "Boost",      note: "Vitamin C (stable derivative), niacinamide, and panthenol. The triple-vitamin serum — brightens, evens tone, strengthens the barrier." },
          { name: "Hyaluronic", note: "Multi-weight hyaluronic acid pulls moisture into deeper layers. Glycerin keeps it there. Six ingredients total — pure, layerable hydration." },
          { name: "Defense",    note: "The antioxidant heavy hitter. Stable vit C, hydrolyzed soy protein, squalane, caffeine — protects collagen from environmental damage." },
          { name: "Soft",       note: "Multi-weight HA + aloe + a silky non-greasy finish. The moisturizer that doesn't make you choose between hydration and texture." }
        ],
        whyItWorks: {
          lead: "Morning skincare has two jobs: protect what you have, and start visible results. This bundle delivers both with the highest-evidence daytime actives — antioxidants for protection, niacinamide and vitamin C for results.",
          mechanisms: [
            { problem: "Environmental damage", solution: "Boost + Defense layer two complementary antioxidants for full-spectrum protection" },
            { problem: "Dullness/uneven tone", solution: "Vitamin C derivatives + niacinamide brighten over 4-6 weeks" },
            { problem: "Dehydration",          solution: "Hyaluronic + Soft create a deep hydration layer that lasts through the day" },
            { problem: "Barrier weakness",     solution: "Wash + Balance + panthenol in Boost support and don't disrupt the barrier" }
          ]
        },
        whoItsFor: {
          yes: "You want a complete morning routine that takes under five minutes once you have it dialed. You believe in protection-first skincare and want visible brightness without a 12-step Korean routine.",
          no: "You only have time for a 2-step routine (just Wash + Soft works as a minimum). Or you want PM repair work too — the PM Bundle is the natural complement."
        }
      },
      pm: {
        intro: "Six steps to wake up better skin. <em>Retinol resurfaces, peptides firm, hyaluronic plumps, glycolic renews, oil seals.</em> The repair work happens while you sleep — this is what gives it material to work with. PM is where visible anti-aging actually compounds.",
        pm: [
          { name: "Bounce",    note: "The PM cornerstone. Retinol stimulates cell turnover and collagen production; hydrolyzed collagen plumps; HA hydrates. Three of the most clinically proven anti-aging actives in one bottle." },
          { name: "Renewal",   note: "2-3 nights/week only. Glycolic acid resurfaces overnight; retinyl palmitate supports collagen; squalane keeps you from waking up tight." },
          { name: "Firm",      note: "Peptides, cucumber, chrysin in an oil-free formula. Targets fine lines and the orbital area — concentrated where Bounce leaves off." },
          { name: "Hydration", note: "Glycerin mimics the skin's own moisture process; cassia obtusifolia adds antioxidant defense. Layers cleanly with the actives above and below." },
          { name: "Eye",       note: "Peptide cream with cucumber, aloe, safflower oil. Peptides do their best work overnight." },
          { name: "Glow",      note: "Rosehip, hemp seed, grape seed in a six-oil blend. The finishing layer that locks in everything underneath." }
        ],
        whyItWorks: {
          lead: "Sleep is when skin does its repair work — cell turnover peaks, growth hormone releases, collagen synthesis fires. This bundle gives that process the actives it needs: retinol for turnover, peptides for collagen signaling, hyaluronic for hydration, oil to seal.",
          mechanisms: [
            { problem: "Slowed cell turnover", solution: "Bounce's retinol + Renewal's glycolic acid (alternating nights) accelerate renewal" },
            { problem: "Collagen breakdown",   solution: "Peptides in Firm + Eye signal for fibroblast activity overnight" },
            { problem: "Loss of plumpness",    solution: "Hyaluronic acid in Bounce + Hydration restores volume" },
            { problem: "Barrier weakness",     solution: "Glow's six-oil blend seals everything and supports the lipid layer" }
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
      glow: {
        intro: "The brightness stack — <em>inside and out.</em> Vitamin C and niacinamide topically for tone correction, antioxidants and collagen internally for the compound effect, oil to seal, weekly mask for the deeper reset. Built to compound: each product reinforces what the others are doing.",
        am: [
          { name: "Boost",   note: "Morning. Vitamin C, niacinamide, panthenol — brightens dullness and evens tone over 4-6 weeks." },
          { name: "Defense", note: "Morning, after Boost. Antioxidant heavy hitter that protects the brightening work from being undone by UV and pollution." }
        ],
        pm: [
          { name: "Glow",   note: "Evening, as the final step. Six-oil blend — rosehip is the brightness ingredient (high in vitamin A precursors)." },
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
          no: "Your main concern is anti-aging fine lines (look at the PM Bundle or Mom's Bundle instead). Or you have very dry skin — Defense and Glow may feel rich; start with Boost + Radiance alone."
        }
      },
      weekly: {
        intro: "Two treatments. <em>One night a week, you mask. Another night, you polish.</em> Never both — these aren't daily steps. They're the deeper resets that give the daily routine more to work with. The clinical-grade weekly intervention the rest of the line is built around.",
        pm: [
          { name: "Mask",   note: "1 night/week. Charcoal + sodium bicarbonate + kaolin clay — activated by warm water for a spa-night detox. Five minutes, then gentle massage off." },
          { name: "Polish", note: "1 night/week (different night from Mask). Plant-cellulose physical exfoliant with a clean menthol cool. Removes dead surface layer so daily actives can actually do their job." }
        ],
        whyItWorks: {
          lead: "Daily skincare maintains. Weekly treatments reset. The skin barrier accumulates dead cells, pore congestion, and trapped sebum over the course of a week — the daily routine doesn't address that. These two products do, without disrupting the barrier.",
          mechanisms: [
            { problem: "Pore congestion",      solution: "Mask's charcoal + clay pull oil and impurities from deep in the pore" },
            { problem: "Dead cell buildup",    solution: "Polish's cellulose particles physically remove the dull surface layer" },
            { problem: "Stalled daily results", solution: "Both treatments clear the runway so daily actives can actually penetrate and work" }
          ]
        },
        whoItsFor: {
          yes: "You have a daily routine you trust and feel like results have plateaued. Or you live in a city / wear makeup / work out and your skin needs the deeper weekly reset.",
          no: "You have very sensitive or actively irritated skin. Both treatments are gentle, but introduce them one at a time and skip if your barrier is compromised."
        }
      },
      moms: {
        intro: "The bundle for moms who want visible anti-aging results <em>and</em> take the long view on aging. Five skincare layers built around the highest-evidence topical actives — retinol overnight, antioxidants by day, peptides around the eyes — paired with five longevity-grade supplements that work the cellular layer: <em>NAD+ for mitochondrial energy, collagen building blocks, antioxidant support, and the sleep aid that turns nights into real repair time.</em>",
        am: [
          { name: "Wash",    note: "Gentle cleanser that doesn't strip mature skin's natural oils — the daily reset before the actives." },
          { name: "Defense", note: "The daytime antioxidant heavy hitter. Stable vitamin C (tetrahexyldecyl ascorbate), hydrolyzed soy protein, squalane, and caffeine — protects existing collagen from breaking down throughout the day." },
          { name: "Eye",     note: "Peptide cream firms and brightens the orbital area before moisturizer locks it in. Cucumber and aloe depuff." },
          { name: "Soft",    note: "Multi-weight hyaluronic acid + aloe seals everything with deep hydration — a non-negotiable step for mature skin." }
        ],
        pm: [
          { name: "Wash",    note: "Gentle cleanser removes the day without compromising the barrier." },
          { name: "Bounce",  note: "The cornerstone. Retinol stimulates cell turnover and collagen production; hydrolyzed collagen plumps; hyaluronic acid hydrates. Three of the most clinically proven anti-aging actives in one bottle." },
          { name: "Eye",     note: "Peptides do their best work overnight — same product, second application." },
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
          no: "You want a 2-step set-it-and-forget-it routine without supplements — look at the AM Bundle instead. Or you're not yet ready to commit to a daily multi-supplement protocol."
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
          { name: "Renewal", note: "2-3 nights/week only. Glycolic acid resurfaces, retinyl palmitate supports collagen overnight, squalane keeps skin from feeling tight. This is where the real anti-aging work happens." },
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
