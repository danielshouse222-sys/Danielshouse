/* ═══════════════════════════════════════════════════════════════════
   BUNDLE EXPAND — inline "View Details" expansion for every bundle
   Auto-discovers all [data-bundle-add] CTAs on the page and injects:
     - A "View Details ▾" collapsible link after the CTA
     - A hidden inline expansion section showing product rows
       (with View Details links to product.html) plus description,
       why-this-stack-works, timeline, and FAQ.

   Looks up bundle in window.CURATED_BUNDLES or window.CONCERN_BUNDLES
   based on body[data-bundle-category] (curated|concern). Merges with
   window.BUNDLE_DETAILS for the long-form content.

   Designed to work both for HTML-baked cards (routines.html) and for
   JS-rendered cards (bundles.html). MutationObserver picks up cards that
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
    // First check the page's default category, then fall back to the other.
    // This lets routines render correctly on bundles.html (where the page category
    // is 'concern') and lets concern bundles appear correctly on any page that mixes
    // both types.
    const lists = category === 'concern'
      ? [window.CONCERN_BUNDLES || [], window.CURATED_BUNDLES || []]
      : [window.CURATED_BUNDLES || [], window.CONCERN_BUNDLES || []];
    for (const list of lists) {
      const hit = list.find(b => b.id === slug);
      if (hit) return hit;
    }
    return null;
  }

  function italicizeName(name) {
    if (!name) return '';
    // Match both "The X Routine" (curated) and "The X Bundle" (targeted concern)
    const m1 = name.match(/^(The )([\w'+&-]+)( (?:Bundle|Routine))$/);
    const m2 = name.match(/^([\w']+'s )([\w]+)( (?:Bundle|Routine))$/);
    if (m1) return `${m1[1]}<em>${m1[2]}</em>${m1[3]}`;
    if (m2) return `${m2[1]}<em>${m2[2]}</em>${m2[3]}`;
    return name;
  }

  // Aggregate peer-reviewed studies from the ingredients glossary based on
  // which ingredients appear in the bundle's products. Uses the same alias
  // matching as bundles.html — generic words ('vitamin','acid', etc.) are skipped
  // to avoid false-positive ingredient matches. Studies are sorted RCT first,
  // then by year descending, and deduplicated by title.
  function aggregateStudies(products, maxStudies = 6) {
    if (!window.INGREDIENTS || !window.INGREDIENTS.length) return [];

    const GENERIC = new Set([
      'vitamin','extract','acid','complex','blend','powder','marine','active',
      'natural','organic','derived','strain','capsule','chelate','monnieri'
    ]);
    const matchedSlugs = new Set();

    products.forEach(prod => {
      (prod.ingredients || []).forEach(ing => {
        const ingName = (ing.name || '').toLowerCase().replace(/[^a-z0-9'+-]+/g, ' ');
        window.INGREDIENTS.forEach(g => {
          const aliases = [g.name];
          if (g.alt) g.alt.split(',').forEach(a => aliases.push(a.trim()));
          [g.name, g.alt || ''].forEach(s => s.split(/[^A-Za-z0-9'+-]+/).forEach(w => {
            if (w.length >= 6 && !GENERIC.has(w.toLowerCase())) aliases.push(w);
          }));
          for (const alias of aliases) {
            const a = alias.toLowerCase().replace(/[^a-z0-9'+-]+/g, ' ').trim();
            if (a.length < 4) continue;
            if ((' ' + ingName + ' ').includes(' ' + a + ' ')) {
              matchedSlugs.add(g.slug);
              break;
            }
          }
        });
      });
    });

    // Collect all studies from matched ingredients
    const allStudies = [];
    matchedSlugs.forEach(slug => {
      const g = window.INGREDIENTS.find(x => x.slug === slug);
      if (g && Array.isArray(g.studies)) {
        g.studies.forEach(s => {
          allStudies.push(Object.assign({}, s, { ingredient: g.name, ingredientSlug: g.slug }));
        });
      }
    });

    // Deduplicate by title
    const seen = new Set();
    const unique = allStudies.filter(s => {
      if (!s.title || seen.has(s.title)) return false;
      seen.add(s.title);
      return true;
    });

    // Sort by study-type priority (RCTs first), then year descending
    const typePriority = {
      'Meta-Analysis': 1,
      'Systematic Review': 1,
      'Randomized Controlled Trial': 2,
      'Clinical Trial': 2,
      'Cohort Study': 3,
      'Mechanistic Study': 4
    };
    unique.sort((a, b) => {
      const pa = typePriority[a.type] || 5;
      const pb = typePriority[b.type] || 5;
      if (pa !== pb) return pa - pb;
      return (b.year || 0) - (a.year || 0);
    });

    return unique.slice(0, maxStudies);
  }

  function buildExpansion(bundle, details) {
    const products = (bundle.slugs || [])
      .map(s => window.getProductBySlug ? window.getProductBySlug(s) : null)
      .filter(Boolean);

    // Detect: is this a curated routine or a targeted bundle?
    // Curated routines come from CURATED_BUNDLES (window.getCuratedBundleById).
    const isCurated = !!(window.getCuratedBundleById && window.getCuratedBundleById(bundle.id));
    const fallbackEyebrow = isCurated ? 'Routine Details' : 'Bundle Details';
    const eyebrow = details?.eyebrow || (bundle.blurb ? fallbackEyebrow : (isCurated ? 'Routine' : 'Bundle'));
    const displayName = italicizeName(bundle.name || (isCurated ? 'Routine' : 'Bundle'));
    const description = details?.description || bundle.blurb || '';

    // Pull the rich routine/mechanism data exposed by shared.js (if available)
    const rich = (window.CURATED_BUNDLE_RICH_DETAILS && window.CURATED_BUNDLE_RICH_DETAILS[bundle.id]) || null;

    // Render numbered routine steps (AM/PM/supplements)
    function renderRoutineSteps(steps) {
      return steps.map((s, i) => `
        <div class="bundle-exp-step">
          <div class="bundle-exp-step-num">${String(i + 1).padStart(2, '0')}</div>
          <div class="bundle-exp-step-body">
            <div class="bundle-exp-step-name">${s.name}</div>
            <div class="bundle-exp-step-note">${s.note}</div>
          </div>
        </div>
      `).join('');
    }

    // Helper: build one collapsible section. Returns '' if there's no inner
    // content, so empty sections never render. Each section starts EXPANDED
    // (.is-open) so the View Details click behavior is unchanged — the button
    // lets users collapse sections they want to skip.
    function section(title, contentHtml, opts) {
      if (!contentHtml || !contentHtml.trim()) return '';
      opts = opts || {};
      const meta = opts.meta ? ` · ${opts.meta}` : '';
      return `
        <div class="bundle-exp-section is-collapsible">
          <button class="bundle-exp-h bundle-exp-toggle" type="button" aria-expanded="false">
            <span class="exp-h-label">${title}${meta}</span>
            <span class="exp-h-icon" aria-hidden="true"></span>
          </button>
          <div class="bundle-exp-content">
            ${contentHtml}
          </div>
        </div>
      `;
    }

    // ─── What's Inside ─────────────────────────────────────────────────────
    const rowsHtml = products.map(p => {
      const tag = (p.tag || '').split('·')[0].trim() || (p.category === 'skincare' ? 'Skincare' : 'Supplement');
      const desc = p.blurb || p.tag || '';
      const italicName = `The House <em>${p.name}</em>`;
      return `
        <div class="bundle-exp-row">
          <div class="bundle-exp-row-img">
            <img src="${p.image}" alt="${p.name}" loading="lazy"/>
          </div>
          <div class="bundle-exp-row-content">
            <div class="bundle-exp-row-tag">${tag}</div>
            <div class="bundle-exp-row-name">${italicName}</div>
            <div class="bundle-exp-row-desc">${desc}</div>
          </div>
          <div class="bundle-exp-row-shop">
            <div class="bundle-exp-row-price">$${p.price.toFixed(0)}</div>
            <a class="bundle-exp-row-link" href="product.html?slug=${p.slug}">View Details →</a>
            <button type="button" class="bundle-exp-row-add" data-product-slug="${p.slug}">Add to Cart</button>
          </div>
        </div>
      `;
    }).join('');
    const insideSection = section(
      "What's Inside",
      `<div class="bundle-exp-rows">${rowsHtml}</div>`,
      { meta: `${products.length} Products` }
    );

    // ─── Why This Stack Works (combined: text block + mechanisms) ──────────
    const whyTextHtml = details?.whyThis ? `<div class="bundle-why-block">${details.whyThis}</div>` : '';
    const mechanismsHtml = rich && rich.whyItWorks ? `
      <div class="bundle-exp-mech-lead">${rich.whyItWorks.lead || ''}</div>
      <div class="bundle-exp-mechanisms">
        ${(rich.whyItWorks.mechanisms || []).map(m => `
          <div class="bundle-exp-mech">
            <div class="bundle-exp-mech-problem">${m.problem}</div>
            <div class="bundle-exp-mech-arrow">→</div>
            <div class="bundle-exp-mech-solution">${m.solution}</div>
          </div>
        `).join('')}
      </div>
    ` : '';
    const whySection = section('Why This Stack Works', whyTextHtml + mechanismsHtml);

    // ─── Who This Is For ───────────────────────────────────────────────────
    const audienceContent = rich && rich.whoItsFor ? `
      <div class="bundle-exp-audience">
        <div class="bundle-exp-audience-card yes">
          <div class="bundle-exp-audience-tag">Yes if</div>
          <div class="bundle-exp-audience-text">${rich.whoItsFor.yes}</div>
        </div>
        <div class="bundle-exp-audience-card no">
          <div class="bundle-exp-audience-tag">Not for you if</div>
          <div class="bundle-exp-audience-text">${rich.whoItsFor.no}</div>
        </div>
      </div>
    ` : '';
    const audienceSection = section('Who This Is For', audienceContent);

    // ─── Daily Supplements ─────────────────────────────────────────────────
    const suppSection = section(
      'Daily Supplements',
      rich && rich.supplements ? `<div class="bundle-exp-routine">${renderRoutineSteps(rich.supplements)}</div>` : '',
      { meta: 'with breakfast' }
    );

    // ─── Skincare (combines AM + PM under a single header) ─────────────────
    const amBlock = rich && rich.am ? `
      <div class="bundle-exp-subroutine">
        <div class="bundle-exp-subroutine-h">The AM Routine · ${rich.am.length} Steps</div>
        <div class="bundle-exp-routine">${renderRoutineSteps(rich.am)}</div>
      </div>
    ` : '';
    const pmBlock = rich && rich.pm ? `
      <div class="bundle-exp-subroutine">
        <div class="bundle-exp-subroutine-h">The PM Routine · ${rich.pm.length} Steps</div>
        <div class="bundle-exp-routine">${renderRoutineSteps(rich.pm)}</div>
      </div>
    ` : '';
    const skincareSection = section('Skincare', amBlock + pmBlock);

    // ─── What to Expect (timeline) ─────────────────────────────────────────
    const timelineContent = (details?.timeline && details.timeline.length) ? `
      <div class="bundle-exp-timeline">
        ${details.timeline.map(t => `
          <div class="bundle-exp-timeline-item">
            <div class="bundle-exp-timeline-week">${t.week}</div>
            <div class="bundle-exp-timeline-text">${t.text}</div>
          </div>
        `).join('')}
      </div>
    ` : '';
    const timelineSection = section('What to Expect', timelineContent);

    // ─── Research (peer-reviewed studies) ──────────────────────────────────
    const studies = aggregateStudies(products, 6);
    const studiesContent = studies.length ? `
      <div class="bundle-exp-studies">
        ${studies.map(s => `
          <div class="bundle-exp-study">
            <div class="bundle-exp-study-meta">
              <span class="bundle-exp-study-type">${s.type || 'Study'}</span>
              <a class="bundle-exp-study-ing" href="ingredient.html?slug=${s.ingredientSlug}">${s.ingredient}</a>
            </div>
            <div class="bundle-exp-study-title">${s.title}</div>
            <div class="bundle-exp-study-cite">${s.authors || ''}${s.authors ? ' · ' : ''}<em>${s.journal || ''}</em>${s.journal && s.year ? ' · ' : ''}${s.year || ''}</div>
            <div class="bundle-exp-study-finding">${s.finding || ''}</div>
          </div>
        `).join('')}
      </div>
    ` : '';
    const studiesSection = section(
      'Research',
      studiesContent,
      studies.length ? { meta: `${studies.length} ${studies.length === 1 ? 'Study' : 'Studies'}` } : {}
    );

    // ─── Common Questions (FAQ — each item also collapses individually) ────
    const faqContent = (details?.faq && details.faq.length) ? `
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
    ` : '';
    const faqSection = section('Common Questions', faqContent);

    return `
      <div class="bundle-expansion">
        ${insideSection}
        ${whySection}
        ${audienceSection}
        ${suppSection}
        ${skincareSection}
        ${timelineSection}
        ${studiesSection}
        ${faqSection}
      </div>
    `;
  }
  function wireToggle(button, expansion) {
    button.addEventListener('click', () => {
      const isOpen = expansion.classList.toggle('is-open');
      button.classList.toggle('is-open', isOpen);
      const label = button.querySelector('.toggle-label');
      if (label) {
        label.textContent = isOpen ? 'Hide Details' : 'View Details';
      }
    });
  }

  function wireFaqItems(expansion) {
    expansion.querySelectorAll('.bundle-exp-faq-item').forEach(item => {
      item.addEventListener('click', () => item.classList.toggle('is-open'));
    });
  }

  // Each section header inside the expansion is a button that toggles whether
  // that section's content is visible. Default state is open (set in render);
  // clicking the header collapses the section, clicking again expands.
  function wireCollapsibleSections(expansion) {
    expansion.querySelectorAll('.bundle-exp-section.is-collapsible > .bundle-exp-toggle').forEach(toggle => {
      toggle.addEventListener('click', e => {
        e.stopPropagation();
        const section = toggle.parentElement;
        if (!section) return;
        const isOpen = section.classList.toggle('is-open');
        toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      });
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
    toggle.innerHTML = `<span class="toggle-label">View Details</span><span class="toggle-icon">▾</span>`;

    // Build expansion DOM
    const wrapper = document.createElement('div');
    wrapper.innerHTML = buildExpansion(bundle, details);
    const expansion = wrapper.firstElementChild;

    // Insertion strategy:
    //  - The toggle ("View Details ▾") stays right after the CTA inside the card body
    //  - The expansion goes to the END of the appropriate inner body container so it
    //    visually merges as part of the card (not a separate panel underneath)
    //  - Containers per card type:
    //      .bundle-card      → .bundle-body
    //      .concern-card     → the card itself (since concern-card has its own padding)
    //      .hero-bundle      → .hero-bundle-panel (the dark content side of the Ultimate hero)
    const bundleCard = cta.closest('.bundle-card');
    const concernCard = cta.closest('.concern-card');
    const heroBundle = cta.closest('.hero-bundle');

    let bodyContainer;
    if (bundleCard) {
      bodyContainer = bundleCard.querySelector('.bundle-body') || bundleCard;
    } else if (concernCard) {
      bodyContainer = concernCard;
    } else if (heroBundle) {
      bodyContainer = heroBundle.querySelector('.hero-bundle-panel') || heroBundle;
    } else {
      bodyContainer = cta.parentNode;
    }

    // Toggle: right after the CTA (stays inline next to it)
    cta.parentNode.insertBefore(toggle, cta.nextSibling);

    // Expansion: appended at the end of the body container so it merges as one window
    bodyContainer.appendChild(expansion);

    // Mark dark context for Ultimate hero panel
    const heroPanel = cta.closest('.hero-bundle-panel');
    if (heroPanel) {
      // The toggle was already inside heroPanel; CSS handles it via context selector
    }

    wireToggle(toggle, expansion);
    wireFaqItems(expansion);
    wireCollapsibleSections(expansion);
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

  // Re-scan when new cards are added (bundles.html renders concern cards via JS)
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
