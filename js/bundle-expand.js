/* ═══════════════════════════════════════════════════════════════════
   BUNDLE EXPAND — inline "More Details" expansion for every bundle
   Auto-discovers all [data-bundle-add] CTAs on the page and injects:
     - A "More Details ▾" toggle button after the CTA
     - A hidden inline expansion section showing product rows
       (with View Details links to product.html) plus description,
       why-this-stack-works, timeline, and FAQ.

   Looks up bundle in window.CURATED_BUNDLES or window.CONCERN_BUNDLES
   based on body[data-bundle-category] (curated|concern). Merges with
   window.BUNDLE_DETAILS for the long-form content.

   Designed to work both for HTML-baked cards (bundles.html) and for
   JS-rendered cards (shop.html). MutationObserver picks up cards that
   appear after DOMContentLoaded.
   ═══════════════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  const wiredButtons = new WeakSet();

  function getCategoryForPage() {
    const cat = document.body && document.body.dataset && document.body.dataset.bundleCategory;
    return cat || 'curated'; // default
  }

  function lookupBundle(slug, category) {
    if (category === 'concern') {
      return (window.CONCERN_BUNDLES || []).find(b => b.id === slug);
    }
    return (window.CURATED_BUNDLES || []).find(b => b.id === slug);
  }

  function italicizeName(name) {
    if (!name) return '';
    const m1 = name.match(/^(The )([\w'+&-]+)( Bundle)$/);
    const m2 = name.match(/^([\w']+'s )([\w]+)( Bundle)$/);
    if (m1) return `${m1[1]}<em>${m1[2]}</em>${m1[3]}`;
    if (m2) return `${m2[1]}<em>${m2[2]}</em>${m2[3]}`;
    return name;
  }

  function buildExpansion(bundle, details) {
    const products = (bundle.slugs || [])
      .map(s => window.getProductBySlug ? window.getProductBySlug(s) : null)
      .filter(Boolean);

    const eyebrow = details?.eyebrow || (bundle.blurb ? 'Bundle Details' : 'Bundle');
    const displayName = italicizeName(bundle.name || 'Bundle');
    const description = details?.description || bundle.blurb || '';

    const rowsHtml = products.map(p => {
      const tag = (p.tag || '').split('·')[0].trim() || (p.category === 'skincare' ? 'Skincare' : 'Supplement');
      const desc = p.blurb || p.tag || '';
      const italicName = `The House <em>${p.name}</em>`;
      return `
        <div class="bundle-exp-row">
          <a class="bundle-exp-row-img" href="product.html?slug=${p.slug}" aria-label="${p.name} details">
            <img src="${p.image}" alt="${p.name}" loading="lazy"/>
          </a>
          <div class="bundle-exp-row-content">
            <div class="bundle-exp-row-tag">${tag}</div>
            <div class="bundle-exp-row-name">${italicName}</div>
            <div class="bundle-exp-row-desc">${desc}</div>
          </div>
          <div class="bundle-exp-row-shop">
            <div class="bundle-exp-row-price">$${p.price.toFixed(2)}</div>
            <a class="bundle-exp-row-link" href="product.html?slug=${p.slug}">View Details →</a>
            <button class="bundle-exp-row-add" data-add-slug="${p.slug}" type="button">Add to Cart →</button>
          </div>
        </div>
      `;
    }).join('');

    const whyHtml = details?.whyThis ? `
      <div class="bundle-exp-section">
        <div class="bundle-exp-h">Why This Stack Works</div>
        <div class="bundle-why-block">${details.whyThis}</div>
      </div>
    ` : '';

    const timelineHtml = (details?.timeline && details.timeline.length) ? `
      <div class="bundle-exp-section">
        <div class="bundle-exp-h">What to Expect</div>
        <div class="bundle-exp-timeline">
          ${details.timeline.map(t => `
            <div class="bundle-exp-timeline-item">
              <div class="bundle-exp-timeline-week">${t.week}</div>
              <div class="bundle-exp-timeline-text">${t.text}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    const faqHtml = (details?.faq && details.faq.length) ? `
      <div class="bundle-exp-section">
        <div class="bundle-exp-h">Common Questions</div>
        <div class="bundle-exp-faq">
          ${details.faq.map(f => `
            <div class="bundle-exp-faq-item">
              <div class="bundle-exp-faq-q">
                <span>${f.q}</span>
                <span class="bundle-exp-faq-toggle">+</span>
              </div>
              <div class="bundle-exp-faq-a">${f.a}</div>
            </div>
          `).join('')}
        </div>
      </div>
    ` : '';

    return `
      <div class="bundle-expansion">
        <div class="bundle-expansion-eyebrow">${eyebrow}</div>
        <h3 class="bundle-expansion-title">${displayName}</h3>
        <p class="bundle-expansion-desc">${description}</p>

        <div class="bundle-exp-section">
          <div class="bundle-exp-h">What's Inside · ${products.length} Products</div>
          <div class="bundle-exp-rows">${rowsHtml}</div>
        </div>

        ${whyHtml}
        ${timelineHtml}
        ${faqHtml}
      </div>
    `;
  }

  function wireToggle(button, expansion) {
    button.addEventListener('click', () => {
      const isOpen = expansion.classList.toggle('is-open');
      button.classList.toggle('is-open', isOpen);
      const label = button.querySelector('.toggle-label');
      if (label) {
        label.textContent = isOpen ? 'Hide Details' : 'More Details';
      }
    });
  }

  function wireFaqItems(expansion) {
    expansion.querySelectorAll('.bundle-exp-faq-item').forEach(item => {
      item.addEventListener('click', () => item.classList.toggle('is-open'));
    });
  }

  function wireAddRowButtons(expansion) {
    expansion.querySelectorAll('.bundle-exp-row-add').forEach(btn => {
      btn.addEventListener('click', e => {
        e.stopPropagation();
        const slug = btn.dataset.addSlug;
        if (window.dhCart && window.dhCart.add && slug) {
          window.dhCart.add(slug);
        }
      });
    });
  }

  function processCta(cta) {
    if (wiredButtons.has(cta)) return;
    const slug = cta.getAttribute('data-bundle-add');
    if (!slug) return;
    const category = getCategoryForPage();
    const bundle = lookupBundle(slug, category);
    if (!bundle) return;
    const details = window.getBundleDetails ? window.getBundleDetails(slug) : null;

    // Mark this CTA wired so we don't double-process
    wiredButtons.add(cta);

    // Build toggle button
    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'bundle-details-toggle';
    toggle.innerHTML = `<span class="toggle-label">More Details</span><span class="toggle-icon">▾</span>`;

    // Build expansion DOM
    const wrapper = document.createElement('div');
    wrapper.innerHTML = buildExpansion(bundle, details);
    const expansion = wrapper.firstElementChild;

    // Insertion strategy:
    //  - For .bundle-card (curated cards on bundles.html): insert toggle inside the same .bundle-body
    //    after the CTA, and place the expansion as the card's next-sibling so it spans full row
    //  - For .concern-card (concern cards on shop.html): same — toggle inside card, expansion as next-sibling
    //  - For .hero-bundle (Ultimate hero on bundles.html): toggle inside hero panel, expansion is full-width
    //    sibling that appears below the hero
    const card = cta.closest('.bundle-card, .concern-card, .hero-bundle');
    if (!card) {
      // Generic fallback: insert toggle after the CTA and expansion right after that
      cta.parentNode.insertBefore(toggle, cta.nextSibling);
      toggle.parentNode.insertBefore(expansion, toggle.nextSibling);
    } else {
      // Toggle goes right after CTA inside the card
      cta.parentNode.insertBefore(toggle, cta.nextSibling);

      // Expansion goes outside the card so it can span full width
      // (Especially important for grid-laid-out cards.)
      if (card.parentNode) {
        card.parentNode.insertBefore(expansion, card.nextSibling);
      }
    }

    // Mark dark context for Ultimate hero panel
    const heroPanel = cta.closest('.hero-bundle-panel');
    if (heroPanel) {
      // The toggle was already inside heroPanel; CSS handles it via context selector
    }

    wireToggle(toggle, expansion);
    wireFaqItems(expansion);
    wireAddRowButtons(expansion);
  }

  function processAll(root = document) {
    root.querySelectorAll('[data-bundle-add]').forEach(processCta);
  }

  // Initial pass — works for HTML-baked cards
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => processAll());
  } else {
    processAll();
  }

  // Re-scan when new cards are added (shop.html renders concern cards via JS)
  const obs = new MutationObserver(mutations => {
    mutations.forEach(m => {
      m.addedNodes.forEach(node => {
        if (node.nodeType !== 1) return;
        // If the added node is a CTA itself
        if (node.matches && node.matches('[data-bundle-add]')) processCta(node);
        // Or if it contains CTAs
        if (node.querySelectorAll) {
          node.querySelectorAll('[data-bundle-add]').forEach(processCta);
        }
      });
    });
  });
  obs.observe(document.body, { childList: true, subtree: true });
})();
