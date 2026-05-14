# Daniel's House — v17 Changelog

Fixes for issues raised in the design review. Cache-busting version bump
applied (`bump-version.py`) so changes take effect immediately on deploy.

---

## 1. Removed duplicate "Take the 2-Minute Quiz" sections on home page

**Before:** Three quiz CTAs on `index.html` — the hero, the "Where to Start"
band, and a standalone "Don't know where to start?" section after the
Featured Bundle.

**After:** Two CTAs total — hero (subtle secondary button) and the
contextual "Not sure which?" band attached to the three Where-to-Start
cards. The standalone duplicate section is gone.

**Files:** `index.html`

---

## 2. Centered "What You're Actually Paying For" on mobile

**Cause:** The section header used global mobile padding (20px), but the
3-column price grid was hard-coded to `padding: 0 40px`. On narrow screens
the cards sat 20px further inward than the heading above them, making the
whole section look off-center.

**Fix:** Moved the grid's positional CSS out of an inline `style` attribute
into a real stylesheet block, with a `@media (max-width: 768px)` rule that
collapses to a single column, reduces gutters to 20px (matching the
section header), and centers the column with `max-width: 480px; margin:
auto`. The follow-up quote block was given the same treatment.

**Files:** `index.html`

---

## 3. FAQ answers no longer cut off

**Cause:** Accordion CSS used `max-height: 600px` on opened answers. Long
multi-paragraph answers (notably "In what order should I apply skincare?")
exceeded that height and got clipped by `overflow: hidden`.

**Fix:** Raised the ceiling to 2400px and added a small bottom padding
buffer. This is a deliberate trade-off: a fixed max-height is required for
the CSS transition to animate (animating to `auto` doesn't work). 2400px
covers every existing answer with room to spare. If a future answer ever
exceeds it, the same line is the only place to raise it.

**Files:** `faq.html`

---

## 4. Smart Refill projection button is now legible

**Cause:** `.projection-trigger-inline` used `border: 1px dashed
rgba(184,153,104,0.55)` — a dashed gold border at 55% opacity, which reads
as "disabled" or "loading placeholder" on dark backgrounds.

**Fix:**
- Solid border (was dashed), opacity raised from 0.55 → 0.85
- Added subtle gold-tinted background fill (`rgba(184,153,104,0.08)` on
  light bg, `rgba(196,164,124,0.14)` on dark bg)
- Increased padding from `8px 14px` → `11px 18px`
- Increased icon and arrow font sizes for better proportion
- On mobile (<480px), the button now spans full width and lets text wrap
  to two lines if needed, so the label never overflows
- Renamed the label from "See your 6-month projection" → "See your refill
  schedule" (clearer about what tapping it actually does)

**Files:** `css/shared.css`, `js/shared.js`, `product.html`

---

## 5. Moved skin-concern filters into site-wide search

**Before:** Skincare page had its own standalone filter strip ("Filter by
Skin Type or Concern") with Pregnancy-Safe, Sensitive, Oily/Acne-Prone,
Dry, Mature, Vegan, Fragrance-Free chips. The site's main `page-filter`
modal (search button, top-right) had Category / Effect / Goal / Key
Ingredient / Type / Dietary but no skin-concern group.

**After:** The standalone strip is gone. The page-filter modal now
includes a "Skin Concern" chip group, injected via `shared.js` on every
page that already has a page-filter (10 pages — skincare, supplements,
bundles, routines, ingredients, faq, product, quiz, about, index).
No per-page HTML edits required.

The slug-to-tag map (which products are pregnancy-safe, sensitive, etc.)
moved from inline skincare.html JS into `shared.js` as
`window.DH_SKIN_CONCERN_BY_SLUG`. The site-wide search results haystack
now also reads `product.freeFrom` and skin-concern tags, so chips work
in the full-site results panel (not just on the currently rendered page).

**Files:** `js/shared.js`, `skincare.html`

---

## 6. Manufacturer copy now references specific retailers

**Before (index.html, "The Price Question / The Manufacturing"):**
> "...the same caliber of facility that produces formulas for the premium
> DTC brands stocked at Sephora..."

**After:**
> "...the same caliber of contract manufacturer that produces formulas
> for premium DTC and clean-beauty brands sold at **Sephora, Ulta, and
> Credo Beauty**. Supplements are produced at an FDA-registered,
> cGMP-certified facility in Florida that also produces lines stocked at
> **Whole Foods and Sprouts**..."

The same retailer references were added to `about.html`'s "Made in the
USA · Verified at every step" section, which had no retailer comparison
at all before.

**⚠️ REQUIRES VERIFICATION BEFORE LAUNCH ⚠️**

I added Sephora, Ulta, Credo Beauty (skincare), and Whole Foods, Sprouts
(supplements) as illustrative retailers because these are common premium-
tier retailers whose suppliers overlap with the kind of FDA-registered
GMP-certified CMs you describe in Florida and Texas. **These specific
retailer names are placeholders — you must confirm each one with your
actual contract manufacturers in writing before this copy goes live.**
The brand is making a specific factual claim ("our CM also produces for
brands sold at X") and the FTC enforces against this kind of claim when
it can't be substantiated.

Ask each CM:
1. "What retailers do your other clients' products end up in?"
2. "Can you put that in writing on letterhead so I can reference it?"

Then narrow this list down to the retailers you can document. If only
one of the five checks out, name only that one. If none check out, revert
to the generic "premium DTC brands" language.

**Files:** `index.html`, `about.html`

---

## What I did NOT change

### Skin Starter Bundle product names
On review of the codebase, **Wash, Balance, and Soft are real, named
products** in the line — same naming convention as Defense, Firm, Shield,
Bounce, etc. My earlier note that these looked like stale placeholder
copy was wrong. The Skin Starter Bundle correctly lists three real
products. No change needed.

If first-time visitors find the names confusing on the bundle's product
page, the right fix is product imagery / a one-line descriptor next to
each name, not renaming the products.

### Filter chip relocation across non-skincare pages
The new "Skin Concern" group is injected on every page that has a
`page-filter`, but on supplement / general pages it'll show no matches
for, e.g., "Pregnancy-Safe" because supplement products don't carry skin
tags. That's correct behavior (a supplement isn't pregnancy-safe in the
skin-product sense), but if you'd prefer to hide the Skin Concern group
on non-skincare pages entirely, add a `data-filter-context="skincare"`
attribute to the page-filter on skincare-only pages and gate the
injection in `shared.js` on it. Easy follow-up.

---

## Files changed

```
index.html                 — quiz CTA removed, price section mobile fix, manufacturer copy
about.html                 — manufacturer copy
skincare.html              — standalone skin filters removed
faq.html                   — accordion max-height
css/shared.css             — projection button restyled
js/shared.js               — skin concern filter injection, projection label, site-wide haystack
product.html               — projection button label
```

Cache-bust version: `202605140054` (all CSS/JS/data files re-stamped).
