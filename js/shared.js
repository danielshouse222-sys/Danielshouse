/**
 * Daniel's House — Shared UI Logic
 * Handles cart state, drawer, free shipping bar, email popup, search modal.
 * Uses in-memory cart state (resets on page reload — full Shopify cart integration would persist).
 */
(function() {
  const FREE_SHIPPING_THRESHOLD = 75;
  const SUBSCRIBE_DISCOUNT = 0.15;
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
        // Bundle pricing takes precedence — subscribe does not add an extra 15% on top of bundle discount
        if (i.bundleName && i.bundleDiscount) {
          price = i.price * (1 - i.bundleDiscount);
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
            const pct = Math.round(item.bundleDiscount * 100);
            labels += `<div class="cart-item-meta subscribe">${item.bundleName} · ${pct}% off</div>`;
            if (item.subscribe) {
              labels += `<div class="cart-item-meta subscribe">↻ Ships every 30 days</div>`;
            }
          } else if (item.subscribe) {
            price = item.price * (1 - SUBSCRIBE_DISCOUNT);
            labels += `<div class="cart-item-meta subscribe">Subscribe & Save 15%</div>`;
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
          const chipMatch = groups.every(chips => chips.some(c => haystack.includes(c)));
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
          const chipMatch = groups.every(chips => chips.some(c => text.includes(c)));
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
            ? `<button class="lightbox-btn primary" style="background: var(--gold);" data-lb-action="add-bundle">${this.bundleSubscribe ? 'Subscribe to Bundle' : 'Add Bundle'} (${Math.round(this.bundleDiscount * 100)}% off) →</button>`
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
})();
