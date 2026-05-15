═══════════════════════════════════════════════════════════
DANIEL'S HOUSE — FULL E-COMMERCE BUILD
═══════════════════════════════════════════════════════════

This is the expanded site with product detail pages, bundle
carousel, skincare step numbers, and the full set of
e-commerce features added in this iteration.

═══════════════════════════════════════════════════════════
WHAT'S NEW IN THIS BUILD
═══════════════════════════════════════════════════════════

CORE FEATURES ADDED:
─ Product detail pages — all 40 products, single template
  driven by JSON data in /data/products.js
─ Bundle product carousel — click any product image in any
  bundle to open a lightbox carousel of all bundle items
─ Skincare step numbers — Step 01 through 06 badges on
  every AM and PM product
─ Tina's Bundle (renamed from Mom's) and Ariana's Bundle
  are now the last two bundles in the grid

ECOMMERCE FEATURES ADDED:
─ Subscribe & Save — 15% off subscription option on every
  product detail page
─ Free shipping progress bar — sticky banner showing
  progress toward $75 free shipping
─ Frequently Bought Together — every product page suggests
  2 related products with 10% off "Add All 3" option
─ Sticky cart drawer — slides in from right on click; live
  totals; subscribe vs one-time tracked separately
─ Email capture popup — appears 8 seconds after page load,
  10% off WELCOME10 code on submit
─ Search modal — search products by name, ingredient,
  category, or concern
─ Routine quiz — 7-question interactive quiz with
  branching recommendations
─ Shop by Concern / Goal — filter products by skin concern
  or wellness goal
─ About Daniel page — founder story, philosophy, principles
─ FAQ page — 24 common questions across 5 categories
─ Ingredient glossary — 59 ingredients with evidence
  levels and product cross-references

═══════════════════════════════════════════════════════════
FILE STRUCTURE
═══════════════════════════════════════════════════════════

  index.html              — Homepage (your existing file)
  skincare.html           — Skincare page (now with step badges)
  supplements.html        — Supplements page
  bundles.html            — Bundles page (with carousel + reorder)
  product.html            — Single product detail template
  about.html              — Daniel's founder story
  faq.html                — Frequently asked questions
  ingredients.html        — Ingredient glossary
  quiz.html               — Routine builder quiz
  shop.html               — Shop by concern/goal

  styles.css              — Global nav + footer + base styles
  css/shared.css          — Cart drawer + popup + search + shipping bar
  js/shared.js            — Cart logic + popup + search + drawer
  data/products.js        — All 40 products' detail data

  images/                 — Skincare product photos (15)
  products/               — Supplement bottle placeholders (18)

═══════════════════════════════════════════════════════════
HOW TO TEST LOCALLY
═══════════════════════════════════════════════════════════

OPTION 1: Open files directly
  Most pages will work by opening any HTML file directly in
  your browser. Some features (cart state, search) use
  sessionStorage which works in modern browsers locally.

OPTION 2: Local server (recommended)
  cd to this directory and run:
  python3 -m http.server 8000
  Then visit http://localhost:8000/

═══════════════════════════════════════════════════════════
PRODUCT DETAIL PAGE URLS
═══════════════════════════════════════════════════════════

Each product is accessed via product.html?slug=X where X is:

SKINCARE:
  the-house-wash, the-house-balance, the-house-boost,
  the-house-hyaluronic, the-house-defense, the-house-soft,
  the-house-clear, the-house-bounce, the-house-firm,
  the-house-hydration, the-house-eye, the-house-renewal,
  the-house-glow, the-house-mask, the-house-polish

SUPPLEMENTS:
  the-house-multi, the-house-calm, the-house-sunshine,
  the-house-flow, the-house-biome, the-house-nad-plus,
  the-house-vitality, the-house-synapse, the-house-tranquil,
  the-house-restore, the-house-power, the-house-pump,
  the-house-seal, the-house-greens, the-house-burn,
  the-house-radiance, the-house-collagen, the-house-focus

═══════════════════════════════════════════════════════════
DEPLOYMENT TO SHOPIFY
═══════════════════════════════════════════════════════════

Currently the cart system is a front-end demo using
sessionStorage. To wire to actual Shopify:

1. Replace dhCart.add() in js/shared.js with calls to
   Shopify's /cart/add.js endpoint.
2. Sync product slugs to Shopify product handles.
3. Update product.html "Checkout" button to point to
   /checkout instead of placeholder.
4. The popup form should POST to Klaviyo or your email
   provider — currently shows a confirmation message but
   doesn't actually send the email.
5. Add real customer reviews via Yotpo, Stamped, or Judge.me
   integration. Current review counts are placeholders.

═══════════════════════════════════════════════════════════
EDITING PRODUCT DATA
═══════════════════════════════════════════════════════════

All product details (descriptions, ingredients, studies,
FAQ) live in data/products.js. To update any product:

1. Open data/products.js
2. Find the object matching the slug (e.g., 'the-house-multi')
3. Edit the description, ingredients[], howToUse, etc.
4. Save — the change shows on every page that uses that
   product (detail page, FBT, related, search, etc.)

═══════════════════════════════════════════════════════════
NOTES & KNOWN LIMITATIONS
═══════════════════════════════════════════════════════════

─ Customer review counts on product pages are placeholders
  (random but consistent per product). Real reviews need
  to come from a review platform integration.
─ The quiz recommendation logic is rules-based; could be
  replaced with a more sophisticated scoring algorithm.
─ Bundle "Add to Cart" buttons currently scroll to the
  Build Your Own section. To add full bundle pricing logic,
  you'd add a bundles.json data file similar to products.js.
─ Email popup form doesn't actually send to a service —
  shows confirmation only. Wire to Klaviyo/Mailchimp for
  production.
─ All 24 supplement images are PIL-generated placeholders.
  Replace with real product photography before launch.

═══════════════════════════════════════════════════════════
QUESTIONS / ITERATIONS
═══════════════════════════════════════════════════════════

Easy to expand from here:
─ Real reviews integration (Yotpo, Judge.me, Stamped)
─ Loyalty/referral program landing page
─ Blog/journal section for SEO
─ Daniel's actual routine page (visual walkthrough)
─ Wholesale/professional account application
─ More detailed bundle cart logic with discount math
─ Compare products tool
─ Recently viewed products tracking
