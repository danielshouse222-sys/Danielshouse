/**
 * Daniel's House — Product Data
 * Single source of truth for all 34 products.
 * Used by product.html, bundles.html, search, related products, etc.
 */
window.PRODUCTS = [
  // ═══════════════════════════════════════════════════════════
  // SKINCARE — AM ROUTINE (steps 01–06)
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'the-house-wash',
    name: 'Wash',
    category: 'skincare',
    sub: 'am',
    step: 1,
    routine: 'AM',
    price: 28,
    runtime: 2,
    image: 'images/wash.jpeg',
    tag: 'Cleanse · Nourish · Botanical',
    tagline: 'The botanical cleanser that nourishes as it lifts.',
    description: 'A silky, lightweight cleanser that transforms with water into a soft, airy lather. Built around rose hip seed oil (a natural source of trans-retinoic acid and vitamin C), rose geranium flower oil (soothing and skin-rejuvenating), and Irish moss (mineral-rich seaweed extract) — it lifts dirt, oil, and impurities while delivering nourishing fatty acids. No added fragrances or colors. Use morning and night to start every routine on the right foundation.',
    size: '4 fl oz / 120 ml',
    ingredients: [
      { name: 'Rose hip seed oil', what: 'A natural source of trans-retinoic acid (vitamin A precursor) and vitamin C. Brightens the complexion and delivers gentle antioxidant defense in every cleanse.' },
      { name: 'Rose geranium flower oil', what: 'Calms and soothes irritated or inflamed skin; supports natural skin rejuvenation.' },
      { name: 'Irish moss extract (Chondrus crispus)', what: 'Mineral-rich seaweed that hydrates and conditions the skin as you cleanse.' },
      { name: 'Glycerin', what: 'Humectant that draws hydration into the skin to prevent post-cleanse tightness.' },
      { name: 'Coconut-derived surfactants', what: 'Plant-based cleansing agents that lift oil without harsh stripping.' }
    ],
    howToUse: 'Morning and night: Apply a quarter-sized amount to damp skin. Massage gently in circular motions for 30 seconds. Rinse with lukewarm water. Pat dry with a clean towel — do not rub.',
    bestFor: ['daily-cleanse', 'sensitive-skin', 'all-skin-types'],
    studies: [
      { actor: 'Rose Hip Seed Oil', finding: 'Rosa moschata (rose hip) seed oil contains naturally occurring trans-retinoic acid precursors and vitamin C, demonstrating measurable antioxidant capacity in topical cosmetic applications.', source: 'Journal of Cosmetic Science, 2022' },
      { actor: 'Mild Surfactant Cleansing', finding: 'Olefin sulfonate–based cleansers maintain stratum corneum integrity significantly better than traditional sulfate (SLS/SLES) cleansers in dermatological comparison studies.', source: 'International Journal of Cosmetic Science, 2023' }
        ],
    faq: [
      { q: 'Will this strip my skin?', a: 'No — this is a barrier-respecting cleanser built around plant oils and a mild surfactant base. It cleanses without the tightness or post-cleanse dryness common with traditional foaming washes.' },
      { q: 'Can I use it twice a day?', a: 'Yes. It\'s designed for morning and evening use as the foundational first step of both routines.' },
      { q: 'Is this safe for sensitive skin?', a: 'Yes — the formula is fragrance-free, color-free, and includes calming geranium and Irish moss. Spot-test on the inner forearm if you have very reactive skin.' },
      { q: 'Does it remove sunscreen and makeup?', a: 'It removes light SPF and natural-finish makeup well. For heavier makeup or chemical SPF, double-cleanse: an oil cleanser first, then The House Wash.' },
      { q: 'Is the rose hip oil enough to act as a retinol step?', a: 'No — rose hip seed oil contains very small amounts of natural vitamin A precursors, far below clinical retinol levels. Think of it as a gentle, supportive antioxidant in your cleanse, not a treatment step. The House Bounce is where the real retinol work happens.' }
        ],
    relatedSlugs: ['the-house-balance', 'the-house-soft', 'the-house-polish'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Clean skin without tightness or stripping; faint floral note from the geranium and rose hip.' },
      { week: 'Week 1', text: 'Barrier feels balanced; skin tolerates makeup and SPF better.' },
      { week: 'Week 4', text: 'Improved tolerance to active serums; less reactive skin.' },
      { week: 'Week 8', text: 'Stronger, more resilient barrier — actives that used to sting now feel comfortable.' }
        ],
    proTip: 'Use lukewarm water, never hot. Hot water strips your barrier and triggers oil rebound.',
    freeFrom: ['Paraben-Free', 'Phthalate-Free', 'Fragrance-Free', 'Color-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'I tried high-tech cleansers for years. The truth is the best cleanser is the gentlest one you\'ll actually use. Rose hip and Irish moss feel luxurious without trying to be — that\'s what kept this one in my routine.'
  },
  {
    slug: 'the-house-balance',
    name: 'Balance',
    category: 'skincare',
    sub: 'am',
    step: 2,
    routine: 'AM',
    price: 38,
    runtime: 2,
    image: 'images/balance.jpeg',
    tag: 'Exfoliate · Brighten · Clarify',
    tagline: 'A 3.5% glycolic acid daily exfoliating treatment.',
    description: 'A gentle 3.5% glycolic acid exfoliating treatment formulated for daily use. Glycolic is the smallest AHA molecule — water-soluble, deepest-penetrating, and the most-studied alpha hydroxy acid in dermatology. At 3.5%, it delivers measurable surface refinement without the redness and flaking of higher-percentage formulas. Soothing humectants buffer the acid action so skin stays balanced as the treatment works. The replacement for a traditional toner: this is the step that resets your skin every morning.',
    size: '4 fl oz / 120 ml',
    ingredients: [
      { name: 'Glycolic Acid (3.5%)', what: 'The smallest and most-studied AHA molecule. At 3.5%, it sloughs surface dead skin to reveal brighter, smoother skin underneath without the irritation of clinical-strength concentrations.' },
      { name: 'Soothing botanical complex', what: 'Calming plant extracts that buffer the acid action and keep redness in check during daily use.' },
      { name: 'Humectants', what: 'Light hydrating ingredients that prevent the post-acid tight feeling and keep moisture in the upper layers of skin.' }
    ],
    howToUse: 'Once daily, after cleansing: Apply with a cotton pad or fingertips, sweep across face and neck (avoid the eye area). Do not rinse. Wait 60 seconds before applying serums. If using at night, do not pair with Bounce (retinol) on the same evening.',
    bestFor: ['daily-exfoliate', 'pore-clarity', 'uneven-tone', 'brightness', 'all-skin-types'],
    studies: [
      { actor: 'Glycolic Acid Topical Use', finding: 'Topical glycolic acid demonstrates significant improvements in skin texture, tone uniformity, and fine line reduction across multiple clinical reviews spanning two decades of research.', source: 'Journal of the American Academy of Dermatology' },
      { actor: 'Daily-Use AHA Formulations', finding: 'Low-percentage AHA formulations (3-5%) demonstrate measurable improvements in skin clarity and texture with daily use, with safety profiles suitable for long-term routines.', source: 'Journal of Cosmetic Dermatology, 2023' }
        ],
    faq: [
      { q: 'Will this dry out my skin?', a: 'No — at 3.5%, glycolic is at a daily-use concentration. The humectants and soothing botanicals balance the acid so skin stays comfortable. If you\'re acid-sensitive, start every other day.' },
      { q: 'Can I use it every day?', a: 'Yes — this is formulated for daily use. Start every other day for the first week if you\'re new to acids, then move to daily.' },
      { q: 'Can I use this with Bounce (retinol)?', a: 'Not on the same night. Alternate: Balance on retinol-free nights. Stacking glycolic + retinol over-exfoliates and causes irritation.' },
      { q: 'AM or PM?', a: 'Either works. AM gives a brighter, smoother makeup base. PM resurfaces while you sleep. Pick one — daily, not both.' },
      { q: 'How is this different from Renewal?', a: 'Balance is daily-use at 3.5% glycolic. Renewal is a stronger weekly treatment with multiple acids. Use Balance every day; reserve Renewal for 2 nights a week as a deeper reset.' }
        ],
    relatedSlugs: ['the-house-wash', 'the-house-boost', 'the-house-defense', 'the-house-bounce'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Smoother skin texture after the first swipe; subtle tingle that fades in 30 seconds.' },
      { week: 'Week 1', text: 'Visibly clearer pores; makeup sits flatter.' },
      { week: 'Week 4', text: 'More even tone, refined surface texture, fewer congested patches.' },
      { week: 'Week 8', text: 'Sustained clarity and luminosity. Skin tolerates other actives more cleanly.' }
        ],
    proTip: 'On Bounce nights, skip Balance entirely. Don\'t try to stack glycolic and retinol — your skin will tell you it was too much.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Glycolic is the AHA that\'s been studied for forty years. At 3.5% you get the brightness and texture refinement without the burn. Replaced my old harsh toner with this and never looked back.'
  },
  {
    slug: 'the-house-boost',
    name: 'Boost',
    category: 'skincare',
    sub: 'am',
    step: 3,
    routine: 'AM',
    price: 50,
    runtime: 2,
    image: 'images/boost.jpeg',
    tag: 'Renew · Strengthen · Hydrate',
    tagline: 'A five-peptide growth factor serum.',
    description: 'A peptide-driven renewal serum built around five biomimetic peptides — sh-Oligopeptide-1, sh-Oligopeptide-2, sh-Polypeptide-1, sh-Polypeptide-9, and sh-Polypeptide-11 — that mimic the growth factor signals skin uses to repair and rebuild collagen. Layered with hydration boosters that keep the formula light and absorbable. Where most peptide serums use one or two peptides at marketing-friendly doses, this stacks five at clinical concentrations. The result: visibly firmer, smoother, more resilient skin over weeks of consistent use.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'sh-Oligopeptide-1 (EGF mimic)', what: 'Mimics epidermal growth factor signaling to support cellular renewal and barrier strengthening at the surface.' },
      { name: 'sh-Oligopeptide-2 (IGF mimic)', what: 'Mimics insulin-like growth factor signaling, supporting collagen and elastin production in the deeper dermal layer.' },
      { name: 'sh-Polypeptide-1 (TGF-beta mimic)', what: 'Activates fibroblast pathways involved in tissue repair and skin resilience.' },
      { name: 'sh-Polypeptide-9 (VEGF mimic)', what: 'Supports microcirculation and oxygen delivery into the skin — a less-discussed but important factor in visible glow.' },
      { name: 'sh-Polypeptide-11 (FGF mimic)', what: 'Fibroblast growth factor mimic — directly signals collagen synthesis pathways.' },
      { name: 'Hydration boosters', what: 'Light humectants that keep the serum absorbable and prevent the post-peptide tight feeling.' }
    ],
    howToUse: 'Morning or evening, after Balance and before heavier creams: Apply 2-3 drops to clean skin. Press in gently with fingertips. Wait 30 seconds before next step. Pairs well with Defense (AM), Bounce (PM), and Firm.',
    bestFor: ['anti-aging', 'fine-lines', 'firmness', 'cellular-renewal', 'all-skin-types'],
    studies: [
      { actor: 'Biomimetic Peptide Topicals', finding: 'Topical peptide formulations that mimic growth factor signaling demonstrate measurable improvements in skin firmness, wrinkle depth, and barrier resilience over 8-12 weeks vs. placebo controls.', source: 'International Journal of Cosmetic Science, 2023' },
      { actor: 'Multi-Peptide Synergy', finding: 'Combination formulations using multiple growth-factor-mimicking peptides demonstrate additive effects on skin renewal markers compared to single-peptide controls.', source: 'Journal of Cosmetic Dermatology, 2022' }
        ],
    faq: [
      { q: 'How is this different from Firm?', a: 'Both are peptide serums but at different positions in the routine. Boost is a daily treatment (AM or PM) focused on cellular renewal and barrier strength via growth-factor mimics. Firm is a higher-intensity PM-focused serum for collagen signaling. Many people use both — Boost AM, Firm PM.' },
      { q: 'Can I use this with Bounce (retinol)?', a: 'Yes — peptides and retinol work via complementary mechanisms. Use Boost in the morning and Bounce at night, or pair them in the same PM routine (Bounce first, Boost over it).' },
      { q: 'When will I see results?', a: 'Peptides build gradually. First subtle improvements in skin smoothness and resilience around week 2-3. Visible firmness and fine-line softening by week 8-12. The longer you use peptides, the more benefit they compound.' },
      { q: 'Pregnant-safe?', a: 'Yes — these biomimetic peptides are routinely used during pregnancy. No retinoids, salicylic acid, or hydroquinone. Confirm with your provider as you would with any product.' },
      { q: 'Is "growth factor" the same as the controversial growth factor products from human cells?', a: 'No — these are biomimetic peptides synthesized to mimic the signaling action of growth factors. They\'re plant-derived/synthetic, not from human or animal cells, and they\'ve been used safely in topical formulations for over a decade.' }
        ],
    relatedSlugs: ['the-house-firm', 'the-house-defense', 'the-house-bounce', 'the-house-eye'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Subtle improvements in skin smoothness; slightly plumper feel.' },
      { week: 'Week 4', text: 'Visible smoothing of surface fine lines; barrier resilience improves.' },
      { week: 'Week 8', text: 'Firmness improvement noticeable; skin feels more bouncy and supple.' },
      { week: 'Week 12+', text: 'Sustained improvements in skin elasticity and overall structural quality.' }
        ],
    proTip: 'Apply twice daily for compounding effect — peptides build slowly but consistently. Layer over damp skin for best absorption.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Color-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Five biomimetic peptides is more than what\'s in most peptide serums at three times this price. The growth-factor-mimic approach is the cutting edge of where peptide research has gone — and Bio-Peptide formulas are now the foundation of premium anti-aging.'
  },
  {
    slug: 'the-house-hyaluronic',
    name: 'Hyaluronic',
    category: 'skincare',
    sub: 'am',
    step: 4,
    routine: 'AM',
    price: 28,
    runtime: 2,
    image: 'images/hyaluronic.jpeg',
    tag: 'Hydrate · Plump · Smooth',
    tagline: 'The simplest hydration that actually works.',
    description: 'A minimalist hyaluronic acid serum — water, sodium hyaluronate, and a clean preservative. Nothing else. The pure form of HA holds up to 1,000 times its weight in water and tailors its absorption to your skin\'s current hydration needs, drop by drop. The simplicity is the point: it layers cleanly under every other product in the line. Apply to damp skin for maximum binding.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'Sodium hyaluronate', what: 'The pure, water-soluble form of hyaluronic acid. Holds up to 1,000 times its weight in water and continuously draws moisture to the skin\'s surface throughout the day.' }
    ],
    howToUse: 'Morning and night, on damp skin: Apply 4-5 drops. Pat into face, neck, and décolletage while skin is still wet. Lock in immediately with moisturizer or face oil — never let HA dry on its own.',
    bestFor: ['hydration', 'dryness', 'plumping', 'all-skin-types'],
    studies: [
      { actor: 'Hyaluronic Acid', finding: 'Topical hyaluronic acid significantly improves skin hydration, elasticity, and reduces appearance of fine lines in clinical dermatoporosis research.', source: 'Sci Reports, 2024' },
      { actor: 'Minimalist HA Formulations', finding: 'Single-active hyaluronic acid serums with minimal carrier systems demonstrate equal hydration delivery to complex multi-ingredient formulations, with reduced reactivity in sensitized skin populations.', source: 'International Journal of Cosmetic Science, 2023' }
        ],
    faq: [
      { q: 'Should I apply on dry or wet skin?', a: 'Damp skin. HA works by binding water — apply right after Balance while skin is still moist, then seal with moisturizer.' },
      { q: 'Can it dehydrate my skin?', a: 'Only if applied to dry skin in dry environments. Always use on damp skin and follow with moisturizer.' },
      { q: 'Is this enough as a moisturizer?', a: 'No — HA is a humectant, not a moisturizer. You still need a cream or oil to seal it in.' },
      { q: 'Why so few ingredients?', a: 'Because hyaluronic acid is the active. Everything else in most HA serums is filler. A minimalist formula reduces reaction risk and stacks cleanly under any other product in your routine.' },
      { q: 'Will it pill under sunscreen?', a: 'No — let it absorb 60 seconds before applying SPF or moisturizer. The minimalist formula is specifically built not to pill or interfere with downstream layers.' }
        ],
    relatedSlugs: ['the-house-soft', 'the-house-hydration', 'the-house-glow'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Immediate plumpness and bounce.' },
      { week: 'Week 1', text: 'Lasting hydration; lines look softer by midday.' },
      { week: 'Week 4', text: 'New hydration baseline; skin holds moisture longer.' },
      { week: 'Week 8', text: 'Skin holds hydration through the day; fine dehydration lines no longer visible.' }
        ],
    proTip: 'Always apply on slightly damp skin. HA needs moisture to bind to — on dry skin it can actually pull moisture out.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Color-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'I went looking for a clean HA serum and couldn\'t find one without seven ingredients I didn\'t need. So we made one that\'s just water and hyaluronic acid. That\'s it. That\'s the whole product.'
  },
  {
    slug: 'the-house-defense',
    name: 'Defense',
    category: 'skincare',
    sub: 'am',
    step: 5,
    routine: 'AM',
    price: 74,
    runtime: 2,
    image: 'images/defense.jpeg',
    tag: 'Antioxidant · Defend · Firm',
    tagline: 'The five-vitamin antioxidant shield.',
    description: 'A potent multi-vitamin antioxidant serum that builds the skin\'s defense against environmental damage from every angle. Pure L-ascorbic acid (vitamin C) at clinically effective concentrations is paired with niacinamide (B3), panthenol (B5), tocopherol (vitamin E), and ferulic acid — the antioxidant that amplifies the effectiveness of C and E by up to 4x. Sodium hyaluronate and sodium PCA add deep hydration. This is the morning antioxidant step that compounds in your favor over years.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'L-Ascorbic Acid (Vitamin C)', what: 'The most-efficacious form of vitamin C. Brightens, supports collagen, and defends against oxidative stress at the cellular level.' },
      { name: 'Ferulic Acid', what: 'Plant-derived polyphenolic antioxidant that amplifies the photo-protective effect of vitamins C and E by up to 4-fold. The key ingredient that makes the formula greater than the sum of its parts.' },
      { name: 'Niacinamide (Vitamin B3)', what: 'Refines pore appearance, strengthens the moisture barrier, evens tone. One of the most-studied actives in dermatology.' },
      { name: 'Panthenol (Vitamin B5)', what: 'Conditioning provitamin that softens, calms, and supports barrier function.' },
      { name: 'Tocopherol (Vitamin E)', what: 'Lipid-soluble antioxidant that prevents transepidermal water loss and works synergistically with vitamin C.' },
      { name: 'Sodium Hyaluronate + Sodium PCA', what: 'Hydrating humectants that prevent dryness from the active blend and lock moisture into the skin.' }
    ],
    howToUse: 'Morning, after cleansing and Balance: Apply 3-5 drops by pressing onto face and neck with fingertips. Wait 30 seconds. Follow with moisturizer and SPF. AM use only.',
    bestFor: ['antioxidant-defense', 'anti-aging', 'brightening', 'environmental-protection', 'firming'],
    studies: [
      { actor: 'C + E + Ferulic Synergy', finding: 'The combination of 15% L-ascorbic acid, 1% tocopherol, and 0.5% ferulic acid demonstrates a doubling of antioxidant photoprotection compared to either vitamin alone, providing 96-hour protection against UV-induced free radicals.', source: 'Pinnell SR, et al. Journal of Investigative Dermatology, Duke University Research' },
      { actor: 'Topical Niacinamide', finding: '12-week split-face trial at 5% niacinamide demonstrated significant improvement in hyperpigmentation, fine lines, sallowness, and red blotchiness compared to vehicle control.', source: 'Bissett DL, Oblong JE. Dermatologic Surgery, 2005' }
        ],
    faq: [
      { q: 'How is this different from Boost?', a: 'Defense and Boost work on different mechanisms. Defense uses pure L-ascorbic acid + ferulic acid + vitamin E + niacinamide — the CE Ferulic antioxidant architecture for environmental defense and brightening. Boost is the bio-peptide growth factor serum — five biomimetic peptides for cellular renewal and skin resilience. They\'re complementary, not redundant. Most people use both: Defense AM (antioxidant shield), Boost AM after Defense (peptide signaling).' },
      { q: 'Will pure L-ascorbic acid sting?', a: 'It can the first few applications. Most people acclimate within a week. If stinging persists, alternate days until your skin builds tolerance.' },
      { q: 'How long until I see results?', a: 'Antioxidant protection starts the moment you apply it. Visible brightening: 4-6 weeks. Visible firmness and tone improvement: 8-12 weeks. Long-term photoprotection compounds over years.' },
      { q: 'Can I use this with retinol?', a: 'Yes — Defense in the morning, Bounce (retinol) at night. They work in different mechanisms and stacking them across the day gives you the best long-term anti-aging protocol.' },
      { q: 'Does this replace SPF?', a: 'Absolutely not. Defense amplifies SPF protection but does not block UV. Always finish your morning with sunscreen.' },
      { q: 'Is this safe during pregnancy?', a: 'Yes — Defense contains no retinoids, hydroquinone, or salicylic acid. Vitamin C, B-vitamins, vitamin E, ferulic acid, and hyaluronic acid are all routinely used during pregnancy. Confirm with your provider.' }
        ],
    relatedSlugs: ['the-house-boost', 'the-house-firm', 'the-house-bounce', 'the-house-shield'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Immediate antioxidant protection at the cellular level (invisible to you, real on UV exposure).' },
      { week: 'Week 4', text: 'Visible brightness; even tone; less environmental reactivity.' },
      { week: 'Week 8', text: 'Surface firmness improves; fine lines look softer; sun damage evens.' },
      { week: 'Week 12+', text: 'Compounding photoprotection; skin tolerates sun exposure more cleanly; long-term anti-aging baseline raised.' }
        ],
    proTip: 'Apply before SPF every morning. The antioxidant + sunscreen stack is the foundation of every dermatology anti-aging protocol — neither one alone is enough.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Color-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'C+E+Ferulic is the antioxidant formula dermatologists have recommended for over twenty years. Every other antioxidant serum on the market is trying to imitate this architecture. So we just made it directly — at a price that\'s not absurd.'
  },
  {
    slug: 'the-house-soft',
    name: 'Soft',
    category: 'skincare',
    sub: 'am',
    step: 6,
    routine: 'AM',
    price: 42,
    runtime: 2,
    image: 'images/soft.jpeg',
    tag: 'Hydrate · Renew · Strengthen',
    tagline: 'The multi-action daily moisturizer.',
    description: 'An advanced daily hyaluronic moisturizing cream that delivers multi-weight hydration in a lightweight, fast-absorbing texture. Multiple molecular weights of hyaluronic acid hydrate at different layers of the skin — high-molecular-weight HA forms a moisture-locking film on the surface while low-molecular-weight HA penetrates deeper for plumping from within. Niacinamide and barrier-supportive emollients round out the formula for everyday comfort and resilience. Lightweight enough for AM under SPF; nourishing enough for PM as the final hydrating layer.',
    size: '1.7 fl oz / 50 ml',
    ingredients: [
      { name: 'Multi-weight Hyaluronic Acid', what: 'Multiple molecular weights of HA hydrate different layers of the skin simultaneously — surface, mid-layer, and deeper for plumping from within.' },
      { name: 'Sodium hyaluronate', what: 'Humectant that holds water in the upper layers of skin throughout the day.' },
      { name: 'Niacinamide (Vitamin B3)', what: 'Multi-function vitamin B derivative that refines blemish appearance, balances sebum, and softens visible signs of aging.' },
      { name: 'Soothing barrier-support emollients', what: 'Lipid-class ingredients that reinforce the skin barrier and reduce trans-epidermal water loss.' },
      { name: 'Glycerin', what: 'Time-tested humectant that supports moisture retention and skin softness.' }
    ],
    howToUse: 'Morning and night, after serums: Apply a pea-sized amount to face and neck. Massage gently in upward motions. Allow 30 seconds before applying SPF (AM) or Glow (PM).',
    bestFor: ['daily-moisture', 'barrier-support', 'all-skin-types', 'sensitive-skin', 'lightweight-hydration'],
    studies: [
      { actor: 'Multi-Weight Hyaluronic Acid Performance', finding: 'Comparative studies show formulations using multiple molecular weights of hyaluronic acid produce measurably superior hydration outcomes vs. single-weight formulations — particularly for trans-epidermal water loss reduction.', source: 'Journal of Cosmetic Dermatology, 2021' },
      { actor: 'Niacinamide for Daily Wear', finding: 'Niacinamide (Vitamin B3) at 4-5% daily concentration produces measurable improvements in skin tone, pore appearance, and fine line softening over 8-12 weeks with negligible irritation risk.', source: 'International Journal of Dermatology, 2019' }
        ],
    faq: [
      { q: 'Is this rich enough for dry skin?', a: 'For most skin types, yes — the multi-weight HA system plus barrier-supportive emollients deliver real, lasting hydration. Very dry skin in winter may want to layer Glow on top as an overnight finishing step.' },
      { q: 'Will it work under makeup?', a: 'Yes — give it 60-90 seconds to absorb before foundation. The formula is lightweight enough to layer under SPF and makeup without pilling.' },
      { q: 'AM or PM?', a: 'Both. Some people split: Hydration mist for daytime refreshment, Soft as the AM and PM moisturizer. Both work either time.' },
      { q: 'Will it clog pores?', a: 'No — formulated to be non-comedogenic. Lightweight texture suitable for all skin types including oily and combination skin.' },
      { q: 'Is this pregnancy-safe?', a: 'Yes — no retinoids, no salicylic acid, no actives that pregnancy guidance typically restricts. Confirm with your provider for your specific situation.' }
        ],
    relatedSlugs: ['the-house-hyaluronic', 'the-house-hydration', 'the-house-eye', 'the-house-shield'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Hydrated, comfortable, no greasy finish. Skin feels plumped and softer.' },
      { week: 'Week 2', text: 'Stronger barrier; less afternoon dryness. Makeup sits flatter.' },
      { week: 'Week 4', text: 'Smoother complexion; pore appearance refines from sustained hydration.' },
      { week: 'Week 8', text: 'Sustained barrier comfort even in dry climates. Skin tolerance for other actives improves.' }
        ],
    proTip: 'Wait 60 seconds after your serums before applying Soft. Lets the actives absorb fully before being sealed in.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Color-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'The everyday moisturizer that does its job without making a fuss. Multi-weight HA means the hydration actually lasts — not the surface-only film that drugstore creams give you. Pairs cleanly with everything else in the routine.'
  },
  {
    slug: 'the-house-shield',
    name: 'Shield',
    category: 'skincare',
    sub: 'am',
    step: 7,
    routine: 'AM',
    price: 48,
    runtime: 2,
    image: 'images/shield.jpeg',
    tag: 'Protect · Defend · Block',
    tagline: 'The mineral SPF that finishes the routine.',
    description: 'A broad-spectrum mineral sunscreen built on non-nano zinc oxide (9.5%) and titanium dioxide (4.7%) — the two minerals dermatologists consistently recommend for daily UV protection. SPF 30, 40-minute water resistant, in a non-greasy, fragrance-free, reef-friendly formula. Coffee fruit extract, ferulic acid, and niacinamide layer in antioxidant support and tone-evening alongside the UV defense. This is the final AM step that turns your antioxidant + serum routine into a real preventive protocol. The single most important product in any anti-aging routine — done properly.',
    size: '3.4 fl oz / 100 ml',
    ingredients: [
      { name: 'Zinc Oxide (9.5%, non-nano)', what: 'Broad-spectrum mineral UV filter. Especially strong against UVA — the longer-wavelength rays primarily responsible for visible photoaging. The single most important active in a sunscreen for anti-aging purposes.' },
      { name: 'Titanium Dioxide (4.7%, non-nano)', what: 'Mineral UV filter that physically reflects UVB rays. Pairs with zinc oxide to deliver complete broad-spectrum coverage.' },
      { name: 'Coffee Fruit Extract (Arabica)', what: 'A highly potent natural antioxidant from the coffee fruit. Adds free-radical defense on top of UV blocking — sun damage isn\'t just UV, it\'s the oxidative cascade UV triggers.' },
      { name: 'Ferulic Acid', what: 'Plant-derived antioxidant that amplifies the photoprotective effect of the formula — the same ingredient that makes Defense the CE Ferulic-tier serum it is.' },
      { name: 'Niacinamide', what: 'Vitamin B3. Reduces UV-induced redness and supports the barrier as the sunscreen sits on skin throughout the day.' }
    ],
    howToUse: 'Morning, as the final step of your routine: Apply liberally and evenly to all skin exposed to the sun — face, neck, ears, décolletage, and the back of your hands. Two finger-lengths of product for face and neck is the right amount (most people use too little). Apply 15 minutes before sun exposure. Reapply every 2 hours when outside, immediately after toweling, and after 40 minutes of swimming or sweating.',
    bestFor: ['UV-defense', 'anti-aging', 'sensitive-skin', 'daily-protection', 'all-skin-types'],
    studies: [
      { actor: 'Daily SPF for Anti-Aging', finding: 'Daily broad-spectrum SPF use over 4.5 years demonstrated 24% less visible skin aging compared to discretionary use in a landmark randomized controlled trial of 903 adults.', source: 'Hughes MC, et al. Annals of Internal Medicine, 2013' },
      { actor: 'Mineral vs. Chemical Sunscreens', finding: 'Non-nano zinc oxide and titanium dioxide demonstrate broad-spectrum UV protection with significantly less skin sensitization, hormonal-disruption concern, and reef impact compared to oxybenzone and octinoxate.', source: 'Journal of the American Academy of Dermatology, 2019' }
        ],
    faq: [
      { q: 'Will it leave a white cast?', a: 'Mineral SPFs traditionally leave a white cast; this formula is engineered to minimize it through coated micronized (non-nano) particles. On medium skin tones, expect a slight initial cast that absorbs within 60 seconds. On deeper skin tones, blend thoroughly and finish with your tinted moisturizer or foundation to fully neutralize.' },
      { q: 'Mineral vs. chemical — what\'s the difference?', a: 'Mineral SPFs (zinc oxide, titanium dioxide) sit on top of skin and physically block UV. Chemical SPFs (oxybenzone, octinoxate, avobenzone) absorb into skin and convert UV to heat. Mineral is gentler, safer for sensitive skin and reef ecosystems, and starts working immediately. Chemical is sometimes cosmetically lighter but has more sensitization concerns. We chose mineral.' },
      { q: 'Do I need SPF if I\'m indoors all day?', a: 'Yes — UVA rays pass through windows and contribute meaningfully to photoaging. You don\'t need to reapply if you\'re not in direct sun, but a single AM application is the baseline. If you\'re working near a window, you\'re getting UV exposure.' },
      { q: 'Can I use this with my retinol routine?', a: 'Yes — and you should. The whole point of Bounce (retinol) is to drive cell turnover and reveal new skin. Without SPF, that new skin gets photodamaged immediately and you lose every gain you made overnight. Shield + retinol is the only retinol routine that makes sense.' },
      { q: 'Will it pill or interfere with makeup?', a: 'No — wait 60 seconds for full absorption before applying foundation or makeup. The non-greasy mineral base creates a soft matte finish that works as a primer.' },
      { q: 'How much do I actually need?', a: 'Two finger-lengths of product for face and neck. Most people apply less than half what they need, which is why "SPF 30" sunscreens routinely test at SPF 12 or lower in real-world use. Don\'t skimp.' }
        ],
    relatedSlugs: ['the-house-defense', 'the-house-soft', 'the-house-boost'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Immediate UV protection — invisible to you, real to your skin\'s cellular damage profile.' },
      { week: 'Week 4', text: 'Less environmental reactivity; afternoon redness reduced; less post-sun tightness.' },
      { week: 'Month 6', text: 'Visible reduction in new sun damage; existing actives (Defense, Boost, Bounce) work harder because their gains aren\'t being undone daily.' },
      { week: 'Year 1+', text: 'The long-term compounding payoff — daily SPF over years is the single most-evidenced anti-aging intervention in dermatology. Your photos start to lie about your age.' }
        ],
    proTip: 'Two finger-lengths for face and neck. Apply 15 minutes before going outside. Reapply every 2 hours if you\'re in direct sun. Skipping reapplication is what makes high-SPF numbers a myth in real-world use.',
    freeFrom: ['Paraben-Free', 'Fragrance-Free', 'Reef-Friendly', 'Oxybenzone-Free', 'Octinoxate-Free', 'Non-Nano', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'SPF is the most important product in any skincare routine. Full stop. Every other product in this line — Defense, Boost, Bounce — works against a daily flow of UV damage. Shield is what stops the leak. If you only do one thing tomorrow morning, do this.'
  },
  {
    slug: 'the-house-clear',
    name: 'Clear',
    category: 'skincare',
    sub: 'treatment',
    step: 99,
    routine: 'As-needed',
    price: 28,
    runtime: 4,
    image: 'images/clear.jpeg',
    tag: 'Clarify · Decongest · Calm',
    tagline: 'A 2% salicylic clarifier — the OTC standard for acne, formulated for daily use.',
    description: 'A 2% salicylic acid (BHA) clarifying treatment that works on both acne-prone and congested-but-not-acneic skin. Salicylic is oil-soluble — it penetrates into the pore where sebum accumulates, rather than just sitting on the surface. At 2% it\'s the highest concentration allowed over-the-counter for acne treatment, backed by FDA monograph as a recognized acne active. Layered with soothing botanicals to calm the surrounding skin. Use after cleansing as your daily clarifying step.',
    size: '4 fl oz / 120 ml',
    ingredients: [
      { name: 'Salicylic Acid (2%)', what: 'Oil-soluble BHA exfoliant that penetrates into the pore to clear sebum congestion and accelerate cellular turnover. The OTC-standard concentration for acne treatment.' },
      { name: 'Soothing botanical complex', what: 'Calming plant extracts that balance the acid action and prevent over-drying of healthy surrounding skin.' },
      { name: 'Humectants', what: 'Light hydrating ingredients that prevent the post-acid tight feeling.' }
    ],
    howToUse: 'Daily, after cleansing: Apply with a cotton pad or fingertips to the face (avoid the eye area). Don\'t rinse. For acne-prone skin, use every day. For occasional congestion, use every other day. Always follow with SPF in the morning.',
    bestFor: ['acne-prone', 'congested-pores', 'oily-skin', 'occasional-breakouts', 'daily-clarify'],
    studies: [
      { actor: 'Salicylic Acid for Acne', finding: 'Topical 2% salicylic acid is one of the most-studied OTC acne treatments. FDA monograph recognition and decades of dermatological evidence support its efficacy for inflammatory and comedonal acne.', source: 'American Academy of Dermatology guidelines' },
      { actor: 'BHA Daily Use', finding: 'Daily 2% salicylic acid topical treatments demonstrate significant reductions in inflammatory acne lesions and comedone counts vs. placebo controls over 8-week clinical trials.', source: 'Journal of the American Academy of Dermatology' }
        ],
    faq: [
      { q: 'Is this a spot treatment or a daily clarifier?', a: 'A daily clarifier — apply over the whole face (or zones with congestion), not as a dab on individual spots. The 2% concentration is calibrated for daily-use whole-face application.' },
      { q: 'Can I use this if I don\'t have acne?', a: 'Yes — at 2%, salicylic also works for congested-but-not-acneic skin: blackheads, surface texture, occasional flare-ups. Use every other day for non-acne maintenance.' },
      { q: 'Can I use Clear and Balance the same day?', a: 'Yes, but stagger them: Balance AM, Clear PM (or vice versa). Don\'t apply both on the same step. Most people don\'t need both daily — pick based on your primary concern.' },
      { q: 'Can I layer this with my retinol?', a: 'Not on the same night — alternate. Salicylic + retinol on the same evening over-exfoliates. Bounce on retinol nights, Clear on alternating nights.' },
      { q: 'Pregnant-safe?', a: 'Topical salicylic acid in OTC-strength concentrations is generally considered low-risk during pregnancy but is not universally recommended. Confirm with your provider.' }
        ],
    relatedSlugs: ['the-house-mask', 'the-house-balance', 'the-house-wash'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Smoother skin texture; reduced surface congestion.' },
      { week: 'Week 4', text: 'Visible reduction in active breakouts and blackheads.' },
      { week: 'Week 8', text: 'Clearer overall complexion; sustained clarity with daily use.' },
      { week: 'Week 12+', text: 'Refined pore appearance; significantly fewer flare-ups.' }
        ],
    proTip: 'Apply with a cotton pad for even coverage and to avoid over-applying. The 2% works best as a sweep, not a soak.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Salicylic acid at 2% is what every derm prescribes for everyday acne management. The trick most brands miss: it works better as a daily clarifier than as a spot dab. Cover the zone, not the lesion.'
  },
  // ═══════════════════════════════════════════════════════════
  // SKINCARE — PM ROUTINE (steps 01–06)
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'the-house-bounce',
    name: 'Bounce',
    category: 'skincare',
    sub: 'pm',
    step: 1,
    routine: 'PM',
    price: 62,
    runtime: 2,
    image: 'images/bounce.jpeg',
    tag: 'Renew · Firm · Plump',
    tagline: 'The five-active overnight retinol serum.',
    description: 'A multi-active retinol serum that does more than just resurface. Retinol drives the cell turnover and collagen signaling that anti-aging routines are built around — but most retinol products stop there. This one adds a stable Vitamin C derivative for antioxidant defense, Matrixyl peptides for collagen signaling, sodium hyaluronate for plumping hydration, and a botanical Skin-Tightening Trio (watermelon, lentil, apple) for surface firmness. The buffering actives mean your skin tolerates the retinol more cleanly. The PM treatment step that earns its place at the top of the routine.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'Retinol (0.05%)', what: 'Vitamin A active that accelerates cell turnover and signals collagen synthesis. Decades of clinical evidence as the gold-standard topical for visible anti-aging.' },
      { name: 'Sodium Ascorbyl Phosphate (0.5%)', what: 'Stable Vitamin C derivative that adds antioxidant defense and amplifies retinol\'s brightening and tone-evening effects.' },
      { name: 'Sodium Hyaluronate (0.1%)', what: 'Pure hyaluronic acid that holds water in the upper skin layers. Buffers retinol\'s drying effect and adds visible plumping.' },
      { name: 'Palmitoyl Tripeptide-1 + Palmitoyl Tetrapeptide-7 (Matrixyl)', what: 'Matrixyl-family signal peptides that activate collagen synthesis — work synergistically with retinol\'s collagen-building mechanism.' },
      { name: 'Skin-Tightening Trio (Watermelon, Lentil, Apple Fruit Extracts)', what: 'A botanical complex that supports surface firmness and skin elasticity through plant-derived peptides and antioxidants.' },
      { name: 'Sodium PCA', what: 'Skin-identical humectant that holds moisture in the upper layers.' },
      { name: 'Phospholipids', what: 'Lipid carriers that enhance penetration of the active ingredients into the upper epidermis.' },
      { name: 'Leuconostoc/Radish Root Ferment Filtrate', what: 'A naturally derived antimicrobial that replaces traditional preservatives. The clean-label preservation choice.' }
    ],
    howToUse: 'Evening only, on alternating nights with Renewal: Apply 3-4 drops to clean, dry skin. Avoid the orbital eye area (use Eye instead there). Wait 60 seconds for absorption before next step. Follow with Firm, Eye, Hydration or Soft, then Glow. Start 2 nights per week, build to 3-4 nights as your skin builds tolerance over 6-8 weeks. Always use SPF the next morning — this is non-negotiable with retinol.',
    bestFor: ['anti-aging', 'cell-turnover', 'fine-lines', 'uneven-tone', 'collagen-support'],
    studies: [
      { actor: 'Topical Retinol Evidence', finding: 'Topical retinoids have multi-decade clinical evidence for reducing fine lines, improving skin texture, evening pigmentation, and stimulating dermal collagen production — the most-validated single ingredient in anti-aging dermatology.', source: 'Journal of the American Academy of Dermatology, 1986-present reviews' },
      { actor: 'Retinol + Matrixyl Peptides', finding: 'Combination of low-dose retinol with Palmitoyl Tripeptide-1 and Palmitoyl Tetrapeptide-7 (Matrixyl) demonstrates additive collagen-signaling effects and accelerated wrinkle-depth reduction compared to retinol monotherapy in 12-week trials.', source: 'International Journal of Cosmetic Science, peptide research' }
        ],
    faq: [
      { q: 'When should I start using retinol?', a: 'Most people benefit from starting in their late 20s or early 30s, when natural collagen production begins declining. If you\'re younger, focus on Defense (CE Ferulic antioxidant) and SPF first — those build the foundation retinol later compounds on top of.' },
      { q: 'Will my skin peel?', a: 'Some mild flaking is normal in the first 2-3 weeks as the cell-turnover cycle accelerates ("retinization"). If severe, reduce frequency. The buffering actives in this formula (HA, peptides, Vit C) make the retinization phase noticeably gentler than a pure-retinol product.' },
      { q: 'Can I use this if I\'m pregnant?', a: 'No — retinol is not recommended during pregnancy or breastfeeding. Skip the retinol step entirely until after; the Eye serum (peptides + DCX complex, no retinoids) is pregnancy-safe for the under-eye, and Soft (multi-weight HA cream) is pregnancy-safe for daily moisture.' },
      { q: 'How is this different from Renewal?', a: 'Renewal is a triple-acid AHA/BHA treatment cleanse (chemical exfoliation) — used 2-3 nights/week. Bounce is the retinol serum (cell-turnover and collagen) — used 3-4 nights/week. They\'re both treatment nights, but never on the same evening (over-exfoliation). Standard rotation: Bounce 3 nights, Renewal 2 nights, rest nights for the other 2.' },
      { q: 'Why 0.05% retinol — that seems low?', a: 'Honestly, 0.05% retinol with peptides and Vit C is more effective than 0.5% retinol alone for most users. Higher percentages cause more irritation and the drop-out rate is huge — most people quit before they see results. Lower-percentage-but-tolerated beats higher-percentage-but-abandoned every time. After 6-12 months at this level your skin\'s tolerance builds and we can recommend stepping up to a higher % if you want.' }
        ],
    relatedSlugs: ['the-house-renewal', 'the-house-firm', 'the-house-eye', 'the-house-shield'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Cell turnover begins; possible mild flaking ("retinization phase") — pass through it slowly.' },
      { week: 'Week 4', text: 'Texture smooths; pores look refined; tone starts to even.' },
      { week: 'Week 8', text: 'Visible firmness; fine lines soften; pigment evens.' },
      { week: 'Week 12+', text: 'Compounding collagen and tone changes. Real, visible structural difference vs. month 1 photos.' }
        ],
    proTip: 'Start with 2 nights per week, build to 3 nights by week 6, 4 nights by week 12. Always SPF the next morning. The whole point of retinol depends on consistent SPF — without it you\'re going backward.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Color-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Most retinol products are just retinol. This one stacks the buffering actives in the same bottle — peptides, HA, Vit C, botanicals — which means you actually keep using it because it doesn\'t shred your barrier. Six weeks in I noticed the texture change. Six months in my photos started to lie about my age.'
  },
  {
    slug: 'the-house-firm',
    name: 'Firm',
    category: 'skincare',
    sub: 'pm',
    step: 3,
    routine: 'PM',
    price: 58,
    runtime: 2,
    image: 'images/firm.jpeg',
    tag: 'Firm · Plump · Lift',
    tagline: 'Advanced peptide serum that targets the foundation.',
    description: 'A peptide complex serum that targets the foundational pathways of skin firmness. Where vitamin C and acids work on the surface, peptides signal into the deeper structural layers — collagen and elastin synthesis. Layered with hyaluronic acid for plumping hydration and seaweed extract for marine-derived minerals and antioxidants. Use evening for the cellular work; some skin types also benefit from twice-daily use. Hydrating, fast-absorbing, and built to be the foundation of an anti-aging routine.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'Advanced peptide complex', what: 'A blend of peptides that target multiple pathways involved in collagen and elastin support — signaling structural renewal in the dermal layer.' },
      { name: 'Sodium Hyaluronate', what: 'Multi-weight hyaluronic acid; plumps and hydrates while the peptides work on the foundation.' },
      { name: 'Chondrus Crispus (Seaweed) Extract', what: 'Marine-derived antioxidants and minerals that nourish and strengthen the skin\'s natural defense. Forms a lightweight protective layer.' }
    ],
    howToUse: 'Evening, after Defense (AM-overlap day) or Bounce (alternating with retinol nights): Apply 2-3 drops to face and neck, including the orbital bone area. Pat gently. Follow with eye cream and moisturizer.',
    bestFor: ['firming', 'anti-aging', 'expression-lines', 'fine-lines', 'all-skin-types'],
    studies: [
      { actor: 'Multi-Peptide Topical Formulas', finding: 'Combination peptide formulations targeting multiple collagen and elastin pathways demonstrate additive effects on wrinkle depth and skin firmness over 8-12 weeks vs. single-peptide formulations.', source: 'International Journal of Cosmetic Science, 2022' },
      { actor: 'Peptide + Hyaluronic Synergy', finding: 'Peptide serums layered with hyaluronic acid demonstrate enhanced peptide absorption and improved hydration retention compared to peptide-only or HA-only controls.', source: 'Journal of Cosmetic Dermatology, 2023' }
        ],
    faq: [
      { q: 'How does this compare to retinol?', a: 'Peptides and retinol work via different mechanisms — peptides signal collagen production via the skin\'s own pathways; retinol accelerates cell turnover. Both have decades of evidence. The strongest anti-aging protocols use them together: Bounce on retinol nights, Firm on alternating nights, both as part of a long-term stack.' },
      { q: 'Can I use this around my eyes?', a: 'Yes — Firm is safe around the orbital bone, but not directly on the eyelid or waterline. Many users use Firm under-eye as well as the dedicated Eye serum.' },
      { q: 'Pregnant-safe?', a: 'Yes — Firm contains no retinoids, salicylic acid, or hydroquinone. Peptides are routinely used during pregnancy. Confirm with your provider.' },
      { q: 'Do I need to use this every day?', a: 'Peptides build up best with consistent use — 5-7 nights a week. Daily is fine; peptides don\'t exfoliate, so they won\'t overload your barrier.' },
      { q: 'When should I expect to see results?', a: 'Subtle smoothing from hyaluronic acid + seaweed can appear in 2-4 weeks. Collagen-signaling effects from the peptide complex build over 8-12 weeks with consistent nightly use.' }
        ],
    relatedSlugs: ['the-house-eye', 'the-house-bounce', 'the-house-boost'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Surface plumping from hyaluronic acid + seaweed; skin looks fresher.' },
      { week: 'Week 4', text: 'Fine lines around eyes and forehead look softer.' },
      { week: 'Week 8', text: 'Visible firmness around jawline and cheek area; expression lines less etched.' },
      { week: 'Week 12+', text: 'Sustained elasticity; long-term collagen signaling translates into visible structural improvement.' }
        ],
    proTip: 'Apply with your ring finger around the eye area — it\'s the weakest finger and applies the gentlest pressure for the thin skin under your eyes.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Color-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Peptide serums are the unsexy backbone of anti-aging. They\'re not glamorous like retinol, but they work consistently, build over time, and don\'t fight with any of the other actives in the routine.'
  },
  {
    slug: 'the-house-hydration',
    name: 'Hydration',
    category: 'skincare',
    sub: 'pm',
    step: 2,
    routine: 'PM',
    price: 30,
    runtime: 2,
    image: 'images/hydration.jpeg',
    tag: 'Hydrate · Refresh · Mist',
    tagline: 'A hyaluronic acid mist for face and body.',
    description: 'A fine-mist hydrating spray powered by sodium hyaluronate and sodium lactate — two of the skin\'s natural moisture-binding molecules. Layered with rosa centifolia (cabbage rose) hydrosol and glycerin for an instant refresh that lasts. The ultra-fine nozzle delivers a cloud-like spray that absorbs cleanly without dripping. Use after cleansing as a hydrating prep step, throughout the day for a refresh over makeup, or post-workout to cool and rehydrate. Vegan, paraben-free, cruelty-free, gluten-free, non-GMO, phthalate-free.',
    size: '4 fl oz / 120 ml spray bottle',
    ingredients: [
      { name: 'Sodium Hyaluronate', what: 'The water-soluble form of hyaluronic acid; holds up to 1,000 times its weight in water and continuously draws moisture to the skin\'s surface.' },
      { name: 'Sodium Lactate', what: 'A natural humectant and part of the skin\'s own moisturizing factor (NMF). Binds water at the surface and supports the skin\'s natural hydration balance.' },
      { name: 'Rosa Centifolia Water', what: 'Cabbage rose hydrosol — a calming, lightly aromatic floral water that soothes and refreshes.' },
      { name: 'Glycerin', what: 'Classic humectant that pulls water into the skin and prevents post-mist evaporation.' },
      { name: 'Phenoxyethanol + Caprylyl Glycol + Sorbic Acid', what: 'Preservation system that keeps the formula stable and safe over the full shelf life.' }
    ],
    howToUse: 'After cleansing: Hold the bottle 8-10 inches from your face and spray 2-3 pumps. Let absorb for a few seconds before applying serums. Throughout the day: spritz over makeup for a hydration refresh. Post-workout: cool face and body before showering. Can be used on the body as well.',
    bestFor: ['daily-hydration', 'travel', 'midday-refresh', 'post-workout', 'all-skin-types'],
    studies: [
      { actor: 'Topical Hyaluronic Acid', finding: 'Topical hyaluronic acid significantly improves skin hydration, elasticity, and reduces appearance of fine lines in clinical dermatoporosis research.', source: 'Sci Reports, 2024' },
      { actor: 'Hyaluronic Mists & Sprays', finding: 'Hyaluronic-based hydrating mists demonstrate measurable improvements in skin hydration levels for 60-90 minutes post-application, making them effective both as routine steps and as throughout-the-day refreshers.', source: 'Journal of Cosmetic Dermatology, 2023' }
        ],
    faq: [
      { q: 'How is this different from Hyaluronic (the serum)?', a: 'Hyaluronic is a concentrated 1 oz serum — applied once, layered into your routine. Hydration is a 4 oz mist — used throughout the day, over makeup, post-workout, on the body. Different use cases, complementary. Many people use both.' },
      { q: 'Will it ruin my makeup?', a: 'No — the ultra-fine spray pattern is designed to refresh without dripping. Hold 8-10 inches away, do 2-3 short bursts, pat gently with fingertips if needed.' },
      { q: 'Can I use this on my body?', a: 'Yes — that\'s actually part of the formula\'s design. Use post-shower or post-workout for body hydration. Especially good for neck, décolleté, and arms in dry climates.' },
      { q: 'Is the fragrance an issue for sensitive skin?', a: 'The light floral note comes from rose hydrosol — a gentle natural ingredient. Most users tolerate it well, but spot-test if you\'re reactive to fragrance.' },
      { q: 'Pregnant-safe?', a: 'Yes — no retinoids, salicylic acid, or hydroquinone. Safe during pregnancy and nursing.' }
        ],
    relatedSlugs: ['the-house-hyaluronic', 'the-house-soft', 'the-house-shield'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Immediate cool, refreshed skin; cloud-fine mist absorbs without dripping.' },
      { week: 'Week 1', text: 'Sustained hydration throughout the day, especially with mid-afternoon refresh.' },
      { week: 'Week 4', text: 'Improved overall skin hydration baseline; less afternoon tightness.' },
      { week: 'Week 8', text: 'Skin holds moisture longer; visibly less environmental reactivity.' }
        ],
    proTip: 'Keep one bottle on your desk and one in your gym bag. The 4 oz size lasts months at home and travels easily — under TSA limits if you decant.',
    freeFrom: ['Paraben-Free', 'Phthalate-Free', 'Sulfate-Free', 'Gluten-Free', 'Non-GMO', 'Cruelty-Free', 'Vegan', 'Made in USA'],
    daniels_note: 'A hydrating mist is the unsexy backbone of a real skincare routine — the step you actually use throughout the day. Sodium lactate (an NMF component) plus sodium hyaluronate is a smarter combination than the rose-water-only mists most brands sell at the same price.'
  },
  {
    slug: 'the-house-eye',
    name: 'Eye',
    category: 'skincare',
    sub: 'pm',
    step: 4,
    routine: 'PM',
    price: 48,
    runtime: 3,
    image: 'images/eye.jpeg',
    tag: 'Brighten · Firm · De-puff',
    tagline: 'Peptides + DCX complex for the under-eye area.',
    description: 'A multi-targeted under-eye serum that works on three concerns at once — peptides for fine lines and firmness, the DCX complex for dark circles and uneven pigmentation, and seaweed extract for de-puffing minerals and antioxidants. The lightweight serum format absorbs faster than traditional eye creams and layers cleanly under makeup or other products. Hydrators round out the formula to keep the delicate eye area comfortable. Apply morning and evening with the gentlest possible press around the orbital bone.',
    size: '0.5 fl oz / 15 ml',
    ingredients: [
      { name: 'Peptide Blend', what: 'Multiple peptides that support collagen and firmness in the delicate eye area, where skin is roughly half the thickness of cheek skin.' },
      { name: 'DCX Complex', what: 'A targeted active complex formulated specifically for dark circles, discoloration, and pigmentation in the orbital area.' },
      { name: 'Chondrus Crispus (Seaweed) Extract', what: 'Marine-derived minerals and antioxidants that de-puff and support the barrier; forms a lightweight protective layer.' },
      { name: 'Hydrators', what: 'Light humectants that prevent the dry, tight feeling that often accompanies under-eye treatments.' }
    ],
    howToUse: 'Morning and night: Tap a rice-grain amount under each eye and along the orbital bone using your ring finger. Press, never rub. Allow 30 seconds before applying makeup or other products.',
    bestFor: ['under-eye', 'dark-circles', 'fine-lines', 'crow\'s-feet', 'puffiness'],
    studies: [
      { actor: 'Peptide Eye Treatments', finding: 'Combination peptide formulas demonstrate measurable reduction in periorbital wrinkle depth and expression-line appearance over 8-12 weeks of consistent daily application.', source: 'Journal of Cosmetic Dermatology, 2022' },
      { actor: 'Topical Treatments for Periorbital Pigmentation', finding: 'Targeted active complexes formulated for the under-eye area show significant improvements in pigmentation and tone uniformity vs. placebo controls when used consistently over 8-12 weeks.', source: 'International Journal of Dermatology, 2023' }
        ],
    faq: [
      { q: 'How much should I use?', a: 'A rice-grain amount per eye is plenty. Eye serums are concentrated and the under-eye skin doesn\'t need much product to absorb a full dose.' },
      { q: 'Will this fix dark circles caused by genetics?', a: 'Partially. True genetic dark circles are largely pigmentation and shadow — the DCX complex helps with pigmentation specifically. Vascular puffiness and surface dullness also improve. For deep hereditary shadows, results require dermatology procedures, not topicals.' },
      { q: 'Can I use it with my retinol?', a: 'Yes — apply Eye first, then Bounce around the rest of the face (avoiding the under-eye). The peptides in Eye complement retinol\'s renewal mechanism.' },
      { q: 'Pregnant-safe?', a: 'Yes — peptides and the DCX complex are routinely used during pregnancy. No retinoids, no salicylic acid. Confirm with your provider.' },
      { q: 'Will it work under concealer?', a: 'Yes — wait 30 seconds for full absorption before applying makeup. The serum texture is specifically designed not to disturb concealer.' }
        ],
    relatedSlugs: ['the-house-firm', 'the-house-boost', 'the-house-defense'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Less morning puffiness; brighter under-eye.' },
      { week: 'Week 4', text: 'Dark circles look lighter; under-eye texture smoother.' },
      { week: 'Week 8', text: 'Fine lines softened; peptide firming effects visible.' },
      { week: 'Week 12+', text: 'Sustained brightness; visible elasticity improvement around the eye area.' }
        ],
    proTip: 'Tap, never rub. The under-eye is the thinnest skin on your face — friction creates more damage than product fixes.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Color-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Eye serums work harder than eye creams because the format absorbs faster into thin skin. The peptide + DCX combo is the right architecture for the three things people actually want to fix here: fatigue, pigment, and fine lines.'
  },
  {
    slug: 'the-house-renewal',
    name: 'Renewal',
    category: 'skincare',
    sub: 'pm',
    step: 5,
    routine: 'PM',
    price: 48,
    runtime: 2,
    image: 'images/renewal.jpeg',
    tag: 'Resurface · Clarify · Renew',
    tagline: 'Multi-action peeling pads — a stronger weekly resurfacing reset.',
    description: 'Treatment-grade peeling pads pre-soaked in a multi-acid resurfacing complex. The combination of AHAs and BHAs deeply removes dead skin buildup, unclogs pores, and reveals smoother, brighter skin underneath. The pad format ensures even distribution and consistent dosing — no measuring, no over-applying. Used 2-3 nights per week, this is when your skin gets its real reset, complementing your daily Balance step.',
    size: '60 pre-soaked pads',
    ingredients: [
      { name: 'Multi-Acid Complex (AHA + BHA)', what: 'A blend of alpha and beta hydroxy acids — glycolic and lactic for surface resurfacing, salicylic for pore penetration. Stronger than daily-use Balance for a deeper weekly treatment.' },
      { name: 'Soothing botanicals', what: 'Calming plant extracts that buffer the multi-acid action and reduce post-treatment redness.' },
      { name: 'Humectants', what: 'Light hydrators that keep the skin comfortable as the actives work.' }
    ],
    howToUse: '2-3 nights per week, after a regular cleanse: Take one pad and sweep over face and neck (avoid eye area). Do not rinse. Wait 2-3 minutes for full absorption before applying next steps. Do not use on the same night as Bounce (retinol). Always use SPF the next morning — this is non-negotiable.',
    bestFor: ['resurfacing', 'pore-clarity', 'uneven-texture', 'dullness', 'congested-skin'],
    studies: [
      { actor: 'Combination AHA/BHA Treatments', finding: 'Topical combination AHA/BHA formulations demonstrate significantly greater improvements in surface texture, pore appearance, and tone uniformity vs. single-acid controls over 8-week dermatological trials.', source: 'Journal of Cosmetic Dermatology, 2023' },
      { actor: 'Peeling Pad Formats', finding: 'Pre-soaked treatment pads deliver consistent dosing across the face and reduce user error in active concentration vs. liquid pour formats, supporting more predictable clinical outcomes.', source: 'International Journal of Cosmetic Science' }
        ],
    faq: [
      { q: 'How is this different from Balance?', a: 'Balance is daily-use at 3.5% glycolic — gentle and consistent. Renewal is a stronger weekly multi-acid treatment in pad format. Use both: Balance daily, Renewal 2-3 nights a week as a deeper reset.' },
      { q: 'Can I use Renewal and Bounce on the same night?', a: 'No — alternate. Stacking multi-acids and retinol over-exfoliates and compromises the barrier. Standard rotation: Bounce 3 nights/week, Renewal 2 nights/week, rest the other 2 evenings.' },
      { q: 'Will it sting?', a: 'A mild tingle is normal during the first minute. Active burning is not — if that happens, wipe off and reduce frequency. The pad format is calibrated for nightly tolerability, just not nightly use.' },
      { q: 'Can I use these in the morning?', a: 'Possible but not preferred. The acids increase sun sensitivity for ~24 hours after application. PM use means SPF the next morning protects newly resurfaced skin. AM use means SPF same-day must be reapplied diligently.' },
      { q: 'Pregnant-safe?', a: 'Not recommended — Renewal contains salicylic acid in treatment-level concentrations. Balance (gentle daily glycolic only) is the safer choice during pregnancy.' }
        ],
    relatedSlugs: ['the-house-bounce', 'the-house-balance', 'the-house-polish'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Visibly smoother surface immediately after use.' },
      { week: 'Week 2', text: 'Brighter, more refined tone; less congestion.' },
      { week: 'Week 4', text: 'Smoother texture; spots and uneven tone fade.' },
      { week: 'Week 8+', text: 'Even surface; pore appearance refined; sustained luminosity.' }
        ],
    proTip: 'Use on the 2 nights per week you\'re NOT using Bounce. Alternating gives each one room to work without overloading your skin.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'The pad format is unsexy but smart — consistent dose, no measuring, no over-applying. The 2 nights a week I use Renewal are the mornings I get the best skin photos.'
  },
  {
    slug: 'the-house-glow',
    name: 'Glow',
    category: 'skincare',
    sub: 'pm',
    step: 6,
    routine: 'PM',
    price: 36,
    runtime: 3,
    image: 'images/glow.jpeg',
    tag: 'Seal · Replenish · Soften',
    tagline: 'Hyaluronic acid spheres suspended in pure squalane.',
    description: 'A two-phase facial oil that delivers both deep moisture and surface hydration in one step. Pure squalane — a plant-derived equivalent of the skin\'s own oil — forms the silky, fast-absorbing base. Hyaluronic acid spheres are suspended throughout, dispersing micro-doses of water-binding hydration as you press the oil into skin. The result: skin that feels nourished and sealed without weight or residue. Use as the final step in the PM routine, or in the AM if your skin tolerates oil under SPF.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'Squalane', what: 'Plant-derived (typically from sugarcane or olive) compound that mimics the structure of the skin\'s own natural oil (sebum). Absorbs cleanly without residue, supports the lipid barrier, and is non-comedogenic for most skin types.' },
      { name: 'Hyaluronic Acid Spheres', what: 'Micro-encapsulated hyaluronic acid suspended in the oil base. When pressed into skin, the spheres release water-binding HA at the surface — combining the moisture of oil with the hydration of HA in one formula.' },
      { name: 'Tocopherol (Vitamin E)', what: 'Lipid-soluble antioxidant that protects the squalane from oxidation and adds barrier-supporting properties.' }
    ],
    howToUse: 'PM only (or AM if your skin tolerates oil under SPF), as the final step of your routine: Warm 2-3 drops between your palms. Press onto face and neck — do not rub. The formula spreads further than expected, so start with less than you think.',
    bestFor: ['barrier-repair', 'overnight-seal', 'dryness', 'all-skin-types'],
    studies: [
      { actor: 'Squalane for Barrier Repair', finding: 'Plant-derived squalane mimics the composition of natural sebum and demonstrates measurable restoration of skin barrier function in compromised skin within 14 days of daily application.', source: 'Lipids in Health and Disease, 2023' },
      { actor: 'Oil + Hyaluronic Combinations', finding: 'Two-phase formulations combining oil-based emollients with hyaluronic acid demonstrate enhanced hydration retention vs. either single-component approach, supporting both immediate and sustained moisture delivery.', source: 'Journal of Cosmetic Dermatology, 2022' }
        ],
    faq: [
      { q: 'How is this different from a traditional face oil?', a: 'Traditional face oils are plant-oil blends (rose hip, jojoba, argan). Glow is a two-phase formula: pure squalane (the most skin-mimicking single oil) + suspended hyaluronic acid spheres for water-binding hydration. You get oil and water in one step, which is rare in a single bottle.' },
      { q: 'Will it leave a greasy finish?', a: 'No — squalane is one of the fastest-absorbing cosmetic oils and the HA spheres add water-binding rather than adding more oil. Most users describe Glow as silky, not heavy.' },
      { q: 'Can I use it under makeup?', a: 'Possible but the formula is built for PM use. If you want a dewy AM finish, try 1-2 drops mixed into your moisturizer. Don\'t apply directly under foundation — it can interfere with makeup adhesion.' },
      { q: 'Will it break me out?', a: 'For most skin types, no — squalane is non-comedogenic and the HA spheres are water-binding only. Acne-prone skin should patch-test first along the jawline for 3-5 nights.' },
      { q: 'Is this pregnancy-safe?', a: 'Yes — pure squalane and hyaluronic acid are routinely used during pregnancy. No retinoids or acids. Confirm with your provider.' }
        ],
    relatedSlugs: ['the-house-soft', 'the-house-hydration', 'the-house-eye'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Immediately softer, suppler skin; sealed-in moisture overnight.' },
      { week: 'Week 1', text: 'Strengthened barrier; less afternoon tightness; previous-night actives held longer.' },
      { week: 'Week 4', text: 'Improved barrier baseline; less environmental reactivity; visible smoothing.' },
      { week: 'Week 8', text: 'Skin holds a natural glow without highlighter; smoother texture day-to-day.' }
        ],
    proTip: 'Press in last, after everything else is absorbed. The oil + HA seal traps the entire routine beneath it — it\'s the close, not a layer.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Color-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Pure squalane plus suspended HA is the smartest face oil concept I\'ve come across. The oil delivers the lipid barrier support. The HA spheres deliver the water layer. Two things skin actually wants, in one bottle that costs less than either dedicated product alone.'
  },
  // ═══════════════════════════════════════════════════════════
  // SKINCARE — WEEKLY TREATMENTS
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'the-house-mask',
    name: 'Mask',
    category: 'skincare',
    sub: 'weekly',
    step: null,
    routine: 'Weekly',
    price: 34,
    runtime: 3,
    image: 'images/mask.jpeg',
    tag: 'Detox · Clarify · Tighten',
    tagline: 'The clay mask with active sulfur.',
    description: 'A clay-based weekly mask powered by bentonite clay, colloidal sulfur, salicylic acid, and zinc oxide — a clinically proven combination for deeply detoxifying skin, drawing out impurities, and clearing congestion. Camphor adds a cooling sensation. The clay tightens as it sits (real visible pore-tightening), then rinses clean for skin that feels balanced, mattified, and refined. Used once a week, this is the deep reset that no daily product can replicate.',
    size: '2 fl oz / 60 ml',
    ingredients: [
      { name: 'Bentonite Clay', what: 'A negatively charged volcanic clay that attracts and absorbs toxins, dirt, and excess oil. Deeply cleanses and unclogs pores.' },
      { name: 'Colloidal Sulfur', what: 'Acne-fighting mineral that absorbs excess oil and creates an environment hostile to acne-causing bacteria.' },
      { name: 'Salicylic Acid (BHA)', what: 'Oil-soluble exfoliating acid that penetrates into the pore to clear sebum congestion.' },
      { name: 'Zinc Oxide', what: 'Multi-tasking mineral that calms inflammation, reduces sebum buildup, and soothes redness.' },
      { name: 'Camphor', what: 'Antioxidant astringent that delivers a cooling sensation and supports balance in oily, congested skin.' }
    ],
    howToUse: 'Once a week, on a non-treatment night: Apply a thin, even layer to clean skin. Avoid the eye and lip area. Leave on for 8-10 minutes (do not let it dry completely — it can over-tighten). Rinse with cool water. Follow with hydration only — skip strong actives on mask nights.',
    bestFor: ['detox', 'pore-clarity', 'congested-skin', 'oily-skin', 'occasional-breakouts'],
    studies: [
      { actor: 'Bentonite Clay Masks', finding: 'Topical bentonite clay applications demonstrate significant sebum reduction, pore appearance improvement, and clearance of surface congestion at 1–2 uses per week without disrupting skin pH balance.', source: 'International Journal of Dermatology, 2022' },
      { actor: 'Colloidal Sulfur + Salicylic Acid', finding: 'The combination of sulfur and BHA salicylic acid demonstrates significant reduction in inflammatory acne lesions and pore congestion in dermatological trials spanning multiple decades.', source: 'Journal of Drugs in Dermatology, 2023' }
        ],
    faq: [
      { q: 'Can I use this with Polish in the same week?', a: 'Yes — Mask one night, Polish another. Don\'t use both on the same night.' },
      { q: 'How often should I use it?', a: 'Once a week is the sweet spot for most people. Very oily skin can go twice a week. More than that risks over-drying.' },
      { q: 'Can I use it on the same night as Bounce or Renewal?', a: 'No — mask night replaces your active treatment. Cleanse, mask, then hydration steps only. Save retinol and AHAs for non-mask nights.' },
      { q: 'Will it sting?', a: 'A mild cool tingle from the camphor is normal. Active burning or stinging is not — rinse immediately if that happens.' },
      { q: 'Pregnant-safe?', a: 'Not recommended during pregnancy — contains salicylic acid at treatment concentrations. Skip mask nights or use a gentle hydration mask alternative.' }
        ],
    relatedSlugs: ['the-house-polish', 'the-house-clear', 'the-house-wash'],
    resultsTimeline: [
      { week: 'Use 1', text: 'Visibly tighter-looking pores; smoother surface; balanced finish.' },
      { week: 'Week 2', text: 'Cleaner-looking pores after each use; less congestion building between sessions.' },
      { week: 'Week 4', text: 'Refined texture; clearer overall skin clarity; fewer breakouts in cycle.' },
      { week: 'Week 8+', text: 'Visibly refined pores and lasting clarity; oily zones better balanced.' }
        ],
    proTip: 'Don\'t let it dry completely — that\'s when it starts pulling moisture from your skin, not just oil. Eight to ten minutes is the sweet spot. Rinse while it\'s still slightly tacky.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Sulfur plus salicylic plus zinc is what every dermatologist prescribes for congested skin — they\'ve done it for fifty years. Putting them all in a once-a-week mask is honestly the most effective form factor for the combo.'
  },
  {
    slug: 'the-house-polish',
    name: 'Polish',
    category: 'skincare',
    sub: 'weekly',
    step: null,
    routine: 'Weekly',
    price: 30,
    runtime: 3,
    image: 'images/polish.jpeg',
    tag: 'Exfoliate · Brighten · Smooth',
    tagline: 'The berry-seed weekly polish.',
    description: 'A naturally derived physical exfoliant that uses real strawberry seeds and biodegradable jojoba beads to gently sweep away dead skin. Strawberry seeds deliver vitamin C antioxidant benefits as they exfoliate. Goji berry and ginseng extracts nourish, hydrate, and support skin elasticity. The result: visibly smoother, brighter, more radiant skin. Used once or twice a week, never on the same night as Renewal or Bounce.',
    size: '2 fl oz / 60 ml',
    ingredients: [
      { name: 'Strawberry Seeds (Fragaria Vesca Seed)', what: 'Real berry seeds that deliver vitamin C antioxidants while exfoliating. Sustainable, biodegradable, and clinically effective at lifting dead skin.' },
      { name: 'Jojoba Esters (Jojoba Beads)', what: 'Botanical, biodegradable, perfectly spherical exfoliant beads. Don\'t tear or microscar the skin like irregular grains can.' },
      { name: 'Goji Berry Extract (Lycium Barbarum)', what: 'Antioxidant-rich superfruit that supports skin resilience and natural defense.' },
      { name: 'Ginseng Extract (Panax Ginseng Root)', what: 'Adaptogenic plant extract that hydrates dryness, supports collagen, and promotes the appearance of elasticity.' }
    ],
    howToUse: '1-2 times per week, after cleansing: Massage a quarter-sized amount onto damp skin in gentle circular motions for 30-60 seconds. Avoid the eye area. Rinse with cool water. Do not use on the same night as Bounce, Renewal, or Mask.',
    bestFor: ['exfoliation', 'dullness', 'rough-texture', 'all-skin-types'],
    studies: [
      { actor: 'Biodegradable Physical Exfoliants', finding: 'Spherical jojoba-bead and plant-seed exfoliants demonstrate effective dead-skin removal with significantly less barrier disruption and micro-tearing compared to irregular-grain scrubs.', source: 'International Journal of Cosmetic Science, 2022' },
      { actor: 'Mechanical + Chemical Exfoliation Combined', finding: 'Combined weekly mechanical exfoliation with daily low-percentage chemical exfoliants demonstrates faster texture refinement than either method alone, without barrier compromise.', source: 'Dermatologic Surgery, 2023' }
        ],
    faq: [
      { q: 'Is this too rough for sensitive skin?', a: 'No — the jojoba beads are perfectly round and the strawberry seeds are fine. Use the lightest possible pressure and rinse if your skin tells you it\'s too much. Start once a week.' },
      { q: 'Can I use it with Renewal?', a: 'Different nights. Renewal is a chemical exfoliant; Polish is mechanical. Stacking them on the same night over-exfoliates. Spread them across the week.' },
      { q: 'Is this better than a chemical exfoliant?', a: 'Different jobs. Polish is mechanical — physically lifts dead skin and surface buildup. Chemical exfoliants (like Renewal\'s triple-acid blend) work deeper at the cellular level. Most great routines use both: chemical actives daily-to-weekly, physical polish 1-2x/week.' },
      { q: 'Pregnant-safe?', a: 'Yes — Polish contains no salicylic acid, retinoids, or hydroquinone. It\'s one of the few "treatment" steps that\'s pregnancy-friendly.' },
      { q: 'Are the strawberry seeds eco-friendly?', a: 'Yes — biodegradable plant material, not plastic microbeads (which are banned in most cosmetics now). Both the strawberry seeds and jojoba beads dissolve naturally.' }
        ],
    relatedSlugs: ['the-house-mask', 'the-house-wash', 'the-house-balance'],
    resultsTimeline: [
      { week: 'Use 1', text: 'Immediately smoother, softer skin after rinsing.' },
      { week: 'Week 2', text: 'Visible brightness; makeup applies more evenly.' },
      { week: 'Week 4', text: 'Sustained smoothness; actives absorb noticeably better.' },
      { week: 'Week 8', text: 'Routinely smooth, brighter complexion; refined texture as a new baseline.' }
        ],
    proTip: 'Apply to wet skin in gentle circular motions. The water is doing half the work — heavy pressure isn\'t the point. Rinse with cool water to close pores afterward.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Real strawberry seeds in a scrub feel almost ridiculous until you smell them. There\'s no added fragrance — the berry note is just real fruit. Use it once a week, on a non-treatment night, and the morning after is one of the best skin days you\'ll have that week.'
  },
  // ═══════════════════════════════════════════════════════════
  // SUPPLEMENTS — FOUNDATION (5)
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'the-house-multi',
    name: 'Multi',
    category: 'supplement',
    sub: 'foundation',
    price: 32,
    runtime: 1,
    image: 'products/Multi.jpeg',
    tag: 'Antioxidant · Immune · Metabolic',
    tagline: 'Your daily nutritional foundation.',
    description: 'Every essential vitamin and mineral, plus an antioxidant fruit blend and immune-supporting botanicals — properly dosed in two morning capsules. The daily multivitamin that handles everything your diet doesn\'t reliably cover.',
    size: '60 capsules · 30 servings',
    ingredients: [
      { name: 'Vitamin A (as beta-carotene)', dose: '900 mcg RAE', what: 'Vision, immune function, skin health.' },
      { name: 'Vitamin C', dose: '90 mg', what: 'Antioxidant; collagen synthesis; immune support.' },
      { name: 'Vitamin D3', dose: '25 mcg (1000 IU)', what: 'Bone density, immune balance, mood regulation.' },
      { name: 'Vitamin E', dose: '15 mg', what: 'Antioxidant; cardiovascular and skin support.' },
      { name: 'B-Complex (B1-B12)', dose: 'Full RDI', what: 'Energy metabolism, nervous system, cellular function.' },
      { name: 'Zinc', dose: '11 mg', what: 'Immune function, wound healing, hormone balance.' },
      { name: 'Selenium', dose: '55 mcg', what: 'Antioxidant; thyroid function.' },
      { name: 'Antioxidant fruit blend', dose: '500 mg', what: 'Acai, blueberry, pomegranate; whole-food antioxidants.' },
      { name: 'Immune botanicals', dose: '200 mg', what: 'Echinacea, elderberry; immune system support.' }
    ],
    howToUse: 'Take 2 capsules daily with breakfast. For best absorption, take with a fat source. Do not exceed recommended dose.',
    bestFor: ['foundational-health', 'immunity', 'energy', 'antioxidant-support'],
    studies: [
      { actor: 'Foundational Multivitamin Evidence', finding: 'A 30-year follow-up of the Physicians\' Health Study II RCT in 14,641 male physicians showed daily multivitamin use modestly reduced total cancer incidence and cataract risk over the follow-up period.', source: 'Annals of Internal Medicine, 2013 (Gaziano et al.)' },
      { actor: 'Vitamin D + Immune Function', finding: 'Pooled meta-analysis of 25 RCTs across 11,321 participants found daily vitamin D supplementation reduced risk of acute respiratory infection by approximately 12% — strongest in those with baseline deficiency.', source: 'BMJ, 2017 (Martineau et al.)' },
      { actor: 'Antioxidant Co-supplementation', finding: 'Long-term observational data establishes that adults meeting daily reference intakes for B-complex vitamins, vitamin C, vitamin D, and zinc show better metabolic and immune markers than those reliant on diet alone — particularly older adults and those eating low-variety diets.', source: 'Nutrients, 2020 (NIH ODS data review)' }
    ],
    faq: [
      { q: 'Can I take this on an empty stomach?', a: 'Best with food — fat-soluble vitamins (A, D, E, K) absorb better with a meal containing some fat.' },
      { q: 'Is it vegetarian?', a: 'Yes — capsules and ingredients are plant-based.' },
      { q: 'Can I combine with other supplements?', a: 'Yes — Multi is designed as the foundation of a stack. Pairs especially well with Sunshine, Flow, and Calm.' },
      { q: 'Should I take it with food?', a: 'Yes — fat-soluble vitamins (A, D, E, K) absorb best with a meal containing some fat. Take two capsules with breakfast for best absorption and to avoid nausea on an empty stomach.' },
      { q: 'Can I take this with other supplements?', a: 'Yes — it\'s designed as a foundation that pairs cleanly with Calm, Sunshine, Flow, Biome, and the rest of the line. There\'s intentional overlap with Sunshine (D3) for those who want a higher daily D dose.' }
    ],
    relatedSlugs: ['the-house-sunshine', 'the-house-flow', 'the-house-calm'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Subtle energy increase; sleep often improves.' },
      { week: 'Week 4', text: 'Better workout recovery; less afternoon fatigue.' },
      { week: 'Week 8+', text: 'Foundational baseline established; the floor under every other supplement.' },
      { week: 'Week 3', text: 'Hair, skin, and nail markers improve as B-complex and zinc stores fill in.' },
      { week: 'Week 12+', text: 'Sustained energy, immune resilience, and nutritional baseline.' }
    ],
    proTip: 'Take with breakfast — fat-soluble vitamins A, D, E, K all need a meal containing fat to absorb properly.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'I tried fancy multivitamins for years before realizing 90% don\'t dose to clinical levels. This one does. It\'s the foundation of every stack I run.'
  },
  {
    slug: 'the-house-calm',
    name: 'Calm',
    category: 'supplement',
    sub: 'foundation',
    price: 26,
    runtime: 2,
    image: 'products/Calm.jpeg',
    tag: 'Relaxation · Muscle · Nerve',
    tagline: 'Sleep deeper. Stress less.',
    description: 'A triple-form magnesium blend — glycinate, citrate, and malate — delivering well-absorbed magnesium in the three forms most clinically validated for sleep, stress, and muscle support. Magnesium oxide (the cheap form) is mostly excreted; the chelated forms are what your nervous system actually uses. Take in the evening for deeper sleep, less muscle tension, and a calmer baseline.',
    size: '90 capsules · 45 servings',
    ingredients: [
      { name: 'Magnesium glycinate', what: 'Chelated form bound to glycine for superior absorption and zero laxative effect. The form your nervous system uses — preferred for sleep and stress support.' },
      { name: 'Magnesium citrate', what: 'Well-absorbed organic-acid-bound form. Supports muscle relaxation and gentle digestive regularity.' },
      { name: 'Magnesium malate', what: 'Paired with malic acid for cellular ATP production support. Gentle on digestion and complements the other two forms for sustained release.' },
      { name: 'Glycine (free amino acid)', what: 'Calming neurotransmitter naturally bound to the magnesium chelate. Independent evidence supports its own role in sleep quality.' },
      { name: 'Vegetable cellulose capsule', what: 'Plant-based capsule shell — no gelatin, no animal products.' },
      { name: 'No magnesium oxide', what: 'Excluded by design. Oxide is poorly absorbed and causes the laxative effect cheap magnesiums are known for.' }
    ],
    howToUse: 'Take 2 capsules in the evening, 30-60 minutes before bed. For higher needs, can take 1 capsule in morning and 1 at night. Best paired with consistent sleep schedule.',
    bestFor: ['sleep', 'stress-relief', 'muscle-relaxation', 'evening-routine'],
    studies: [
      { actor: 'Magnesium Glycinate vs Stress', finding: 'Systematic review of 18 studies in Nutrients found magnesium supplementation produces small-to-moderate beneficial effects on subjective anxiety and stress, with chelated forms (glycinate, citrate) outperforming oxide.', source: 'Nutrients, 2017 (Boyle, Lawton, Dye)' },
      { actor: 'Magnesium + Sleep Architecture', finding: 'Double-blind RCT of 46 elderly insomniacs found 500mg magnesium daily for 8 weeks significantly improved subjective insomnia scores, sleep efficiency, sleep onset latency, and serum melatonin vs. placebo.', source: 'Journal of Research in Medical Sciences, 2012 (Abbasi et al.)' },
      { actor: 'Bioavailability Comparison', finding: 'Comparative pharmacokinetic study showed chelated and citrate magnesium absorb significantly more than oxide — the mechanistic basis for choosing glycinate, citrate, and malate over inexpensive oxide preparations.', source: 'Magnesium Research, 2003 (Walker et al.)' }
    ],
    faq: [
      { q: 'How long until I notice effects?', a: 'Sleep quality usually improves within the first week. Full benefits compound over 4-6 weeks.' },
      { q: 'Why three forms of magnesium?', a: 'Each form has a slight specialty: glycinate is best for sleep and nervous-system calming, citrate is best for muscle relaxation, malate is best for cellular energy support. The triple blend delivers all three benefits in one capsule without overdosing on any single form.' },
      { q: 'Can I take this with sleep medication?', a: 'Consult your doctor — magnesium is generally complementary, but combinations should be reviewed.' },
      { q: 'When should I take it?', a: '30-60 minutes before bed for sleep support. For stress/anxiety use, taking with dinner works well. Avoid stacking with other minerals (calcium, zinc) at the same time — they compete for absorption.' },
      { q: 'Will it make me drowsy during the day?', a: 'No — magnesium isn\'t a sedative. It supports the nervous system\'s natural wind-down at night without causing daytime sleepiness when taken in the evening.' }
    ],
    relatedSlugs: ['the-house-tranquil', 'the-house-multi', 'the-house-restore'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Easier sleep onset; less middle-of-night waking.' },
      { week: 'Week 1', text: 'Deeper, more restorative sleep.' },
      { week: 'Week 4+', text: 'Morning clarity; cortisol pattern improving.' },
      { week: 'Week 4', text: 'Sleep onset improves; mid-night wakings reduce.' },
      { week: 'Week 8+', text: 'Sustained nervous system support — better stress recovery, fewer muscle tension days.' }
    ],
    proTip: 'Take 30-45 minutes before bed. Don\'t combine with heavy meals or alcohol — both blunt the magnesium effect.',
    freeFrom: ['Gluten-Free', 'Vegetarian', 'Lactose-Free', 'Allergen-Free', 'Hormone-Free', 'All Natural', 'Antibiotic-Free', 'Non-GMO', 'Corn-Free', 'Third-Party Tested'],
    daniels_note: 'Best magnesium for actual sleep. Triple-form blend (glycinate, citrate, malate), no laxative effect. Take 30 minutes before bed — I sleep deeper within the first week.'
  },
  {
    slug: 'the-house-sunshine',
    name: 'Sunshine',
    category: 'supplement',
    sub: 'foundation',
    price: 20,
    runtime: 3,
    image: 'products/Sunshine.jpeg',
    tag: 'Bones · Muscles · Immune',
    tagline: 'The vitamin your body craves.',
    description: 'Fat-soluble Vitamin D3 cholecalciferol in a clean softgel — properly dosed for bone density, immune balance, and the energy you forgot was missing. Most adults are deficient; supplementation reliably closes the gap.',
    size: '100 softgels · 100 servings',
    ingredients: [
      { name: 'Vitamin D3 (cholecalciferol)', dose: '5000 IU (125 mcg)', what: 'The active form your body produces from sunlight. Far more effective at raising serum 25(OH)D than vitamin D2.' },
      { name: 'Extra-virgin olive oil carrier', dose: '—', what: 'Vitamin D is fat-soluble. The olive oil carrier ensures maximum absorption — far better than dry capsule forms.' },
      { name: 'Softgel shell (bovine gelatin)', dose: '—', what: 'Pharmaceutical-grade gelatin softgel; protects the oil from oxidation until use.' },
      { name: 'No vitamin D2', dose: '—', what: 'Excluded by design. D2 (ergocalciferol) is 70% less effective than D3 at raising serum levels and is what most prescription forms still use.' },
      { name: 'Third-party tested', dose: '—', what: 'Each batch verified for label-accurate dose and absence of heavy metals and contaminants.' }
    ],
    howToUse: 'Take 1 softgel daily with a meal containing fat (D3 absorbs best with fat). Best taken in the morning.',
    bestFor: ['bone-health', 'immunity', 'mood', 'foundational-health'],
    studies: [
      { actor: 'Vitamin D Deficiency Standard of Care', finding: 'Landmark New England Journal of Medicine review by Michael Holick establishing vitamin D as a steroid hormone with widespread effects on bone, immune, and metabolic function. Defined the deficiency thresholds (25(OH)D <30 ng/mL) now used in clinical practice.', source: 'New England Journal of Medicine, 2007 (Holick)' },
      { actor: 'Vitamin D + Falls Reduction', finding: 'Meta-analysis of 8 high-quality RCTs covering 2,426 older adults found 700-1000 IU/day vitamin D reduced fall risk by approximately 19% — demonstrating effects on muscle function beyond bone health.', source: 'JAMA, 2009 (Bischoff-Ferrari et al.)' },
      { actor: 'Vitamin D + Immune Function', finding: 'Pooled IPD meta-analysis of 25 RCTs and 11,321 participants found regular daily/weekly D3 supplementation reduced acute respiratory infection risk by 12%. Effects strongest in those starting deficient.', source: 'BMJ, 2017 (Martineau et al.)' }
    ],
    faq: [
      { q: 'How much D3 should I take?', a: '2000 IU is the typical daily dose. People with documented deficiency may need higher doses under medical supervision.' },
      { q: 'When is the best time to take it?', a: 'Morning with breakfast — fat aids absorption.' },
      { q: 'Can I get enough from the sun?', a: 'In summer with 20+ minutes of midday sun and exposed arms/legs, yes. For most people in fall-spring or with indoor lifestyles, supplementation is necessary.' },
      { q: 'Should I take it with food?', a: 'Yes — vitamin D is fat-soluble, so absorption is highest with a meal containing some fat. The olive oil carrier helps, but a meal makes it even better.' },
      { q: 'Do I need to get my levels checked first?', a: 'Ideally yes — ask your doctor for a 25(OH)D test. Optimal range is 40-60 ng/mL. Most US adults test below 30. 5000 IU daily is a standard repletion dose for adults but a blood test confirms what your body actually needs.' }
    ],
    relatedSlugs: ['the-house-multi', 'the-house-flow', 'the-house-calm'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Subtle mood improvement; better daytime energy.' },
      { week: 'Week 4', text: 'Bone & immune markers improving (testable).' },
      { week: 'Week 8+', text: 'Deficiency closed; sustained baseline.' },
      { week: 'Week 6', text: 'Serum 25(OH)D rises into optimal range if previously deficient.' },
      { week: 'Week 12+', text: 'Sustained immune resilience, mood balance, and bone density support — the everyday baseline.' }
    ],
    proTip: 'Take with a fat-containing meal — Vitamin D is fat-soluble. Avocado, eggs, fish oil, or just a normal lunch all work.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Most adults are deficient in Vitamin D. I got tested before and after — supplementing closed the gap entirely. 2000 IU is the right dose for most people.'
  },
  {
    slug: 'the-house-flow',
    name: 'Flow',
    category: 'supplement',
    sub: 'foundation',
    price: 25,
    runtime: 2,
    image: 'products/Flow.jpeg',
    tag: 'Heart · Brain · Vision',
    tagline: 'Heart, brain, and joints — daily.',
    description: '1000mg of fish oil concentrate with targeted EPA and DHA in a clean, lemon-finished softgel. Cardiovascular support, cognition, joint health, and visible skin glow — all backed by some of the most-studied supplement research in nutrition science.',
    size: '100 softgels · 50 servings',
    ingredients: [
      { name: 'Fish oil concentrate', dose: '1000 mg', what: 'Wild-sourced; molecularly distilled for purity.' },
      { name: 'EPA (Eicosapentaenoic acid)', dose: '300 mg', what: 'Anti-inflammatory; cardiovascular support.' },
      { name: 'DHA (Docosahexaenoic acid)', dose: '200 mg', what: 'Brain function; vision; cognitive health.' },
      { name: 'Vitamin E', dose: '5 IU', what: 'Antioxidant; preserves the oil from oxidation.' },
      { name: 'Natural lemon flavor', dose: '—', what: 'Prevents fishy aftertaste and burp-back.' }
    ],
    howToUse: 'Take 2 softgels daily with a meal. For higher cardiovascular goals, can take 4 softgels (2 morning, 2 evening). Best with fatty meals for absorption.',
    bestFor: ['heart-health', 'brain-health', 'cognition', 'joint-support'],
    studies: [
      { actor: 'Omega-3 Cardiovascular Benefit', finding: 'American Heart Association position paper synthesizing decades of evidence — established 1g/day combined EPA+DHA as the evidence-based cardiovascular dose for adults with heart disease and 250-500mg/day for general prevention.', source: 'Circulation, 2002 (Kris-Etherton et al.)' },
      { actor: 'EPA + DHA Inflammation', finding: 'Comprehensive review establishing that EPA-derived resolvins and DHA-derived protectins actively resolve inflammation — explaining benefits for joint health, cognitive function, and chronic disease prevention.', source: 'Nutrients, 2010 (Calder)' },
      { actor: 'Omega-3 + Cognitive Aging', finding: 'Meta-analysis of 22 RCTs covering 5,200+ older adults found higher EPA/DHA intake associated with measurably slower cognitive decline and reduced risk of mild cognitive impairment.', source: 'Journal of the American College of Cardiology, 2011 (Mozaffarian, Wu)' }
    ],
    faq: [
      { q: 'Will this cause fish burps?', a: 'No — molecularly distilled and lemon-finished to eliminate fishy aftertaste.' },
      { q: 'Is the fish source sustainable?', a: 'Yes — sourced from wild, sustainably-fished cold-water species.' },
      { q: 'Can vegetarians take this?', a: 'No — Flow is fish-based. Vegetarian alternatives use algae-based EPA/DHA.' },
      { q: 'Will it cause fishy burps?', a: 'No — molecular distillation removes the impurities that cause fishy aftertaste. The triglyceride form sits well, and our softgel is enteric-coated for smooth digestion.' },
      { q: 'How long until I notice effects?', a: 'Inflammatory markers begin shifting in 2-3 weeks. Joint comfort, skin smoothness, and mental clarity build over 6-8 weeks. Cardiovascular benefits compound over months to years of consistent use.' }
    ],
    relatedSlugs: ['the-house-vitality', 'the-house-multi', 'the-house-sunshine'],
    resultsTimeline: [
      { week: 'Week 4', text: 'Brain clarity; better focus across the day.' },
      { week: 'Week 8', text: 'Heart markers improve (testable lipid panel).' },
      { week: 'Week 12+', text: 'Skin clarity and joint comfort benefits.' },
      { week: 'Week 2', text: 'Joint comfort improves; morning stiffness reduces.' },
      { week: 'Week 12+', text: 'Sustained cardiovascular and cognitive support — the daily foundation.' }
    ],
    proTip: 'Take with your largest meal of the day. Omega-3 stays in the bloodstream 4-6 hours — one daily dose covers a full cycle.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Omega-3 is the supplement I\'d never stop taking. Heart, brain, skin. Two softgels with breakfast, every day for the last four years.'
  },
  {
    slug: 'the-house-biome',
    name: 'Biome',
    category: 'supplement',
    sub: 'foundation',
    price: 30,
    runtime: 2,
    image: 'products/Biome.jpeg',
    tag: 'Digestive · Metabolic · Immune',
    tagline: 'Balance starts within.',
    description: 'Multi-strain probiotic blend with enteric delivery technology to survive stomach acid. Targeted for digestion, immune balance, and the gut-brain axis — for the gut you almost forgot about until it spoke up.',
    size: '60 capsules · 60 servings',
    ingredients: [
      { name: 'Lactobacillus acidophilus', dose: 'Clinical-strain', what: 'Most-studied probiotic strain; supports digestion and immunity.' },
      { name: 'Bifidobacterium lactis', dose: 'Clinical-strain', what: 'Supports immune function and bowel regularity.' },
      { name: 'Lactobacillus plantarum', dose: 'Clinical-strain', what: 'Supports gut barrier integrity.' },
      { name: 'Lactobacillus rhamnosus', dose: 'Clinical-strain', what: 'Mood/gut-brain axis support.' },
      { name: 'Enteric delivery coating', dose: '—', what: 'Delayed-release coating; ensures probiotics survive stomach acid for delivery to the gut.' }
    ],
    howToUse: 'Take 1 capsule daily, ideally on an empty stomach (morning works well). No refrigeration required due to the enteric delivery technology.',
    bestFor: ['digestion', 'gut-health', 'immunity', 'foundational-health'],
    studies: [
      { actor: 'ISAPP Probiotic Consensus', finding: 'Authoritative consensus document defining probiotics as \'live microorganisms that, when administered in adequate amounts, confer a health benefit on the host\' — establishes the evidence threshold for clinical probiotic claims still used today.', source: 'Nature Reviews Gastroenterology & Hepatology, 2014 (Hill et al.)' },
      { actor: 'Strain-Specific Clinical Benefits', finding: 'Comprehensive review of 1,000+ trials established that specific strains (L. rhamnosus GG, B. lactis BB-12, L. acidophilus NCFM) demonstrate measurable clinical benefits for digestive symptoms, immune function, and antibiotic-associated diarrhea.', source: 'Nature Reviews Gastroenterology & Hepatology, 2019 (Sanders et al.)' },
      { actor: 'Probiotic + Gut-Brain Axis', finding: 'Systematic review of 10 RCTs covering 1,349 participants found multi-strain probiotic supplementation produced significant improvements in subjective stress, anxiety, and mood measures — supporting the gut-brain axis hypothesis.', source: 'Journal of Affective Disorders, 2020 (Liu et al.)' }
    ],
    faq: [
      { q: 'Do I need to refrigerate it?', a: 'No — the enteric delivery technology and shelf-stable strain selection eliminate refrigeration need.' },
      { q: 'How long until I feel a difference?', a: 'Digestive improvements typically appear in 2-4 weeks. Mood/energy benefits compound over 8+ weeks.' },
      { q: 'Can I take it with antibiotics?', a: 'Yes, but space them apart — take the probiotic 2+ hours away from your antibiotic dose. Continue the probiotic for at least 2 weeks after finishing antibiotics to help restore gut diversity.' },
      { q: 'Can I take it with Seal (digestive enzymes)?', a: 'Yes, and they pair beautifully — Biome rebuilds the bacterial baseline, Seal\'s enzymes break food down for absorption. Take Biome AM on empty stomach, Seal with meals.' }
    ],
    relatedSlugs: ['the-house-multi', 'the-house-greens', 'the-house-restore'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Subtle digestion shifts; less bloating.' },
      { week: 'Week 2', text: 'Improved regularity.' },
      { week: 'Week 4+', text: 'New gut baseline; downstream benefits in mood and skin.' },
      { week: 'Week 2', text: 'Digestion normalizes; bloating and irregularity reduce.' },
      { week: 'Week 8+', text: 'Sustained gut diversity, immune resilience, and mood balance via the gut-brain axis.' }
    ],
    proTip: 'Take on an empty stomach 20 minutes before breakfast. Keep refrigerated — heat reduces strain viability over time.',
    freeFrom: ['Gluten-Free', 'Lactose-Free', 'Allergen-Free', 'Hormone-Free', 'All Natural', 'Corn-Free', 'Third-Party Tested'],
    daniels_note: 'I notice when I skip Biome. Within a week. The probiotic everyone underestimates until they don\'t have it.'
  },
  // ═══════════════════════════════════════════════════════════
  // SUPPLEMENTS — LONGEVITY (5)
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'the-house-nad-plus',
    name: 'NAD+',
    category: 'supplement',
    sub: 'longevity',
    price: 60.00,
    runtime: 1,
    image: 'products/Nadplus.jpeg',
    tag: 'Metabolic · Cognition · Vitality',
    tagline: 'Cellular energy and DNA repair.',
    description: '500mg NAD+ stacked with quercetin and 98% trans-resveratrol from Japanese knotweed. Premium longevity science, properly dosed — the daily investment in cellular health that compounds over years.',
    size: '60 capsules · 30 servings',
    ingredients: [
      { name: 'NAD+ (nicotinamide adenine dinucleotide)', dose: '500 mg', what: 'Critical coenzyme; declines with age; supports cellular energy and DNA repair.' },
      { name: 'Trans-resveratrol (98%)', dose: '250 mg', what: 'Polyphenol from Japanese knotweed; activates longevity pathways.' },
      { name: 'Quercetin', dose: '100 mg', what: 'Bioflavonoid; enhances resveratrol absorption and provides antioxidant support.' },
      { name: 'BioPerine® (black pepper extract)', dose: '5 mg', what: 'Increases bioavailability of NAD+ and resveratrol up to 2,000%.' }
    ],
    howToUse: 'Take 2 capsules daily, ideally in the morning. Can be taken with or without food. For optimal results, pair with consistent sleep and exercise.',
    bestFor: ['longevity', 'cellular-energy', 'cognitive-support', 'anti-aging'],
    studies: [
      { actor: 'NAD+ Precursor Bioavailability', finding: 'Landmark study establishing that nicotinamide riboside (unlike nicotinic acid or nicotinamide) raises NAD+ in human blood after oral administration without flushing — the bioavailability data underpinning current NAD+ precursor supplements.', source: 'Nature Communications, 2016 (Trammell et al.)' },
      { actor: 'Human NAD+ Trial', finding: 'First placebo-controlled human trial of NR — 6-week supplementation at 1g/day raised whole-blood NAD+ levels by 60% with excellent tolerability and signs of reduced systolic blood pressure in middle-aged and older adults.', source: 'Nature Communications, 2018 (Martens et al.)' },
      { actor: 'Resveratrol + Longevity Pathway', finding: 'Foundational paper from the Sinclair lab at Harvard establishing resveratrol as a sirtuin (SIRT1) activator that extends lifespan in yeast — the discovery that launched the longevity-via-sirtuins research field.', source: 'Nature, 2003 (Howitz et al.)' }
    ],
    faq: [
      { q: 'When will I notice the effects?', a: 'Most users report energy and mental clarity within 2-3 weeks. Longevity benefits compound over months and years.' },
      { q: 'Can I take this with other supplements?', a: 'Yes — NAD+ pairs especially well with Vitality (CoQ10) and the rest of the longevity stack.' },
      { q: 'What\'s the difference between NAD+, NMN, and NR?', a: 'NMN and NR are precursors that the body converts to NAD+. Direct NAD+ supplementation skips the conversion step.' },
      { q: 'How is this different from NR or NMN?', a: 'NAD+ direct supplementation is more controversial than NR/NMN precursors because gut absorption of NAD+ itself is debated. We pair NAD+ with quercetin and trans-resveratrol — the stack approach used in longevity research labs — to support sirtuin activation through multiple pathways.' },
      { q: 'Will I feel it immediately?', a: 'No — NAD+ work is upstream and cellular. Subtle energy improvements may appear in 2-3 weeks. The benefits are long-term and compound over months to years of consistent use.' }
    ],
    relatedSlugs: ['the-house-vitality', 'the-house-restore', 'the-house-tranquil'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Subtle energy lift; less afternoon crash.' },
      { week: 'Week 4', text: 'Workout recovery accelerates.' },
      { week: 'Week 8', text: 'Sustained cellular vitality; less "tired-but-wired" feeling.' },
      { week: 'Week 12+', text: 'Compound benefit; visible at the cellular level.' },
      { week: 'Week 12+', text: 'Sustained cellular vitality markers — the longevity bet that compounds over years.' }
    ],
    proTip: 'Morning, with breakfast. NAD+ is stable on the shelf — no refrigeration needed, but consistency matters more than timing.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'My energy at 40 wasn\'t what it was at 30. Started this six months in — the difference is real. Not magic, but real. Cellular-level support.'
  },
  {
    slug: 'the-house-vitality',
    name: 'Vitality',
    category: 'supplement',
    sub: 'longevity',
    price: 28,
    runtime: 1,
    image: 'products/Vitality.jpeg',
    tag: 'Energy · Antioxidant · Heart',
    tagline: 'Fuel your cells from within.',
    description: '200mg of CoQ10 ubiquinone per capsule for cellular energy production and heart health — the supplement your forties will thank you for. Especially relevant if you\'re on statins (which deplete CoQ10) or want sustained mental and physical energy.',
    size: '30 capsules · 30 servings',
    ingredients: [
      { name: 'CoQ10 (ubiquinone)', dose: '200 mg', what: 'The oxidized form that converts to ubiquinol once metabolized. Stable, well-studied, and equally effective at clinical doses.' },
      { name: 'BioPerine® (piperine extract)', dose: '5 mg', what: 'Black pepper extract that increases CoQ10 absorption by approximately 30%. The same bioavailability enhancer used in turmeric formulations.' },
      { name: 'MCT oil carrier', dose: '—', what: 'Medium-chain triglyceride oil ensures maximum fat-soluble absorption of CoQ10 — far better than dry powder forms.' },
      { name: 'Vegetable softgel shell', dose: '—', what: 'Plant-based softgel — no gelatin, no animal products.' },
      { name: 'No artificial colors or fillers', dose: '—', what: 'Clean formulation: just the active, the absorption enhancer, and the carrier.' }
    ],
    howToUse: 'Take 1 capsule daily with a meal containing fat. Best taken in the morning.',
    bestFor: ['energy', 'heart-health', 'cellular-function', 'longevity'],
    studies: [
      { actor: 'Q-SYMBIO Heart Failure Trial', finding: 'International multicenter RCT in 420 chronic heart failure patients — 300mg/day CoQ10 reduced major adverse cardiac events by 43% over 2 years vs. placebo, establishing CoQ10 as a clinically meaningful cardiovascular intervention.', source: 'JACC: Heart Failure, 2014 (Mortensen et al.)' },
      { actor: 'CoQ10 + Aging Decline', finding: 'Comprehensive review establishing CoQ10\'s natural decline with age (~30% by age 60) and the rationale for supplementation in adults over 40 — particularly those on statin therapy, which depletes endogenous CoQ10 by 40%.', source: 'Frontiers in Physiology, 2018 (Hernández-Camacho et al.)' },
      { actor: 'CoQ10 + Physical Fatigue', finding: 'Double-blind crossover trial in 17 healthy volunteers — 100mg or 300mg CoQ10 for 8 days reduced subjective fatigue during cycle ergometer test and improved recovery markers vs. placebo.', source: 'Nutrition, 2008 (Mizuno et al.)' }
    ],
    faq: [
      { q: 'Should I take this if I\'m on statins?', a: 'Discuss with your doctor — statins deplete CoQ10, and supplementation is often recommended.' },
      { q: 'When will I feel a difference?', a: 'Energy improvements typically appear in 2-4 weeks. Cardiovascular benefits compound over months.' },
      { q: 'Is ubiquinone or ubiquinol better?', a: 'Both work; ubiquinone is more shelf-stable and converts to ubiquinol in the body.' },
      { q: 'Should I take it with food?', a: 'Yes — CoQ10 is fat-soluble. Take with a meal containing some fat (or with The House Flow for omega-3 synergy) for maximum absorption.' },
      { q: 'Do I need this if I\'m on a statin?', a: 'Yes, especially. Statins reduce CoQ10 levels by 30-40% — many cardiologists now recommend CoQ10 alongside statin therapy specifically to address this depletion.' }
    ],
    relatedSlugs: ['the-house-nad-plus', 'the-house-flow', 'the-house-multi'],
    resultsTimeline: [
      { week: 'Week 4', text: 'Sustained energy throughout the day.' },
      { week: 'Week 8', text: 'Heart markers improve (blood pressure, lipids).' },
      { week: 'Week 12+', text: 'Sustained cellular energy benefit.' },
      { week: 'Week 4', text: 'Daily energy stabilizes; afternoon slumps less pronounced.' },
      { week: 'Week 12+', text: 'Sustained cellular energy support — particularly noticeable in adults over 40.' }
    ],
    proTip: 'Take with breakfast or lunch — CoQ10 is fat-soluble and needs a meal to absorb properly. Avoid taking at night, can disrupt sleep.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in USA', 'Third-Party Tested'],
    daniels_note: '200mg of CoQ10 is the dose that matters. I take it with breakfast — fat-soluble, so it needs the meal. A game-changer for sustained energy.'
  },
  {
    slug: 'the-house-synapse',
    name: 'Synapse',
    category: 'supplement',
    sub: 'longevity',
    price: 34,
    runtime: 1,
    image: 'products/Synapse.jpeg',
    tag: 'Cognitive · Energy · Performance',
    tagline: 'Focus, clarity, and adaptogenic power.',
    description: 'Ten-mushroom extract complex — Lion\'s Mane, Reishi, Cordyceps, Chaga, Turkey Tail, and more — in a daily gummy. The wellness category that\'s exploded for good reason: cognitive support, immune function, and adaptogenic resilience in one stack.',
    size: '60 gummies · 30 servings',
    ingredients: [
      { name: 'Lion\'s Mane', dose: '500 mg', what: 'Cognitive support; nerve growth factor production.' },
      { name: 'Reishi', dose: '300 mg', what: 'Immune balance; stress adaptation.' },
      { name: 'Cordyceps', dose: '300 mg', what: 'Energy and athletic performance; cellular oxygen utilization.' },
      { name: 'Chaga', dose: '200 mg', what: 'Antioxidant powerhouse; immune support.' },
      { name: 'Turkey Tail', dose: '200 mg', what: 'Immune system modulation; gut health.' },
      { name: 'Maitake, Shiitake, others', dose: '500 mg combined', what: 'Synergistic mushroom support.' }
    ],
    howToUse: 'Take 2 gummies daily, anytime. No food required. Pleasant berry flavor — most customers find these the easiest supplement to remember to take.',
    bestFor: ['cognition', 'focus', 'immunity', 'adaptogenic-support'],
    studies: [
      { actor: 'Lion\'s Mane + Cognitive Function', finding: '16-week double-blind RCT in adults 50-80 with mild cognitive impairment — 3g/day Lion\'s Mane significantly improved cognitive function scores; effects diminished after stopping, supporting consistent daily use.', source: 'Phytotherapy Research, 2009 (Mori et al.)' },
      { actor: 'Functional Mushroom Bioactives', finding: 'Mechanistic review documenting hericenones and erinacines (Lion\'s Mane bioactives) as nerve growth factor (NGF) inducers — the neurobiological basis for observed cognitive benefits across multiple mushroom species.', source: 'International Journal of Medicinal Mushrooms, 2013 (Lai et al.)' },
      { actor: 'Reishi + Stress Resilience', finding: 'Systematic review of 5 RCTs found Reishi (Ganoderma lucidum) supplementation improved fatigue scores, immune markers, and quality of life in adults experiencing chronic stress and low energy.', source: 'Cochrane Database of Systematic Reviews, 2016 (Jin et al.)' }
    ],
    faq: [
      { q: 'Are these psychedelic mushrooms?', a: 'No — these are functional culinary mushrooms with no psychoactive effects.' },
      { q: 'How do they taste?', a: 'Berry-flavored gummies; pleasant enough that most people genuinely enjoy them.' },
      { q: 'Can I take with coffee?', a: 'Yes — Synapse pairs well with coffee for sustained cognitive energy without jitters.' },
      { q: 'Why a 10-mushroom complex instead of one?', a: 'Each species has distinct bioactives — Lion\'s Mane targets NGF, Reishi targets stress, Cordyceps targets ATP production, Turkey Tail targets immune function. The blend captures the full spectrum of functional mushroom benefits rather than betting on one.' },
      { q: 'Is this safe to take long-term?', a: 'Yes — functional mushrooms have a multi-millennium safety record in Traditional Chinese Medicine and decades of clinical research support daily use. No tolerance or cycling needed.' }
    ],
    relatedSlugs: ['the-house-focus', 'the-house-tranquil', 'the-house-nad-plus'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Subtle focus improvement.' },
      { week: 'Week 4', text: 'Cognitive sharpness; better word recall.' },
      { week: 'Week 8+', text: 'Memory and clarity baseline; the long game compounds.' },
      { week: 'Week 4', text: 'Focus and mental clarity noticeably sharper, particularly afternoon cognitive endurance.' },
      { week: 'Week 12+', text: 'Sustained cognitive support, stress resilience, and immune balance.' }
    ],
    proTip: 'Morning with food. Lion\'s Mane builds slowly over 4-6 weeks — be patient. Stop and start often resets the benefit.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Lion\'s Mane is the cognitive supplement I\'d recommend to anyone over 35. The 10-mushroom blend covers more bases than just Lion\'s alone.'
  },
  {
    slug: 'the-house-tranquil',
    name: 'Tranquil',
    category: 'supplement',
    sub: 'longevity',
    price: 24,
    runtime: 1,
    image: 'products/Tranquil.jpeg',
    tag: 'Relaxation · Vitality · Balance',
    tagline: 'Stress resilience meets hormonal balance.',
    description: 'Standardized ashwagandha root extract delivered as a single-ingredient capsule — for stress that won\'t quit and resilience that lasts. Ashwagandha is one of the most-studied adaptogens in modern wellness, with 24+ randomized controlled trials documenting effects on cortisol, sleep quality, and stress markers.',
    size: '60 capsules · 30 servings',
    ingredients: [
      { name: 'Ashwagandha root extract', dose: 'Clinical-grade', what: 'Standardized ashwagandha extract — reduces serum cortisol and supports the body\'s stress response. The single most-validated adaptogen in modern research.' },
      { name: 'Standardized for active compounds', dose: '—', what: 'Withanolide-standardized extract delivers the same compound concentration as the extracts used in clinical trials — not generic powdered root.' },
      { name: 'Vegetarian capsule', dose: '—', what: 'Plant-based capsule shell. No animal products, no unnecessary excipients.' }
    ],
    howToUse: 'Take 2 capsules daily, ideally with breakfast. Some users prefer one in the morning and one in evening for sustained adaptogenic support.',
    bestFor: ['stress-relief', 'cortisol-modulation', 'sleep-quality', 'adaptogenic-support'],
    studies: [
      { actor: 'Foundational Cortisol Trial', finding: '60-day double-blind placebo-controlled RCT — standardized ashwagandha extract reduced serum cortisol by 27.9% and produced significant improvement on perceived stress scale and depression-anxiety-stress scale measurements.', source: 'Indian Journal of Psychological Medicine, 2012 (Chandrasekhar, Kapoor, Anishetty)' },
      { actor: 'Ashwagandha + Sleep Quality', finding: 'RCT in 60 adults — 240mg ashwagandha extract daily reduced morning cortisol, improved sleep onset latency, and improved subjective sleep quality over 60 days vs. placebo.', source: 'Medicine, 2019 (Lopresti et al.)' },
      { actor: 'Adaptogenic Dose-Response', finding: '8-week RCT in 60 healthy adults — both 250mg and 600mg/day standardized ashwagandha significantly reduced morning cortisol and stress scores in dose-dependent fashion. Demonstrates flexibility in dosing for individual response.', source: 'Cureus, 2019 (Salve et al.)' }
    ],
    faq: [
      { q: 'How long until I feel less stressed?', a: 'Most users report measurable stress reduction in 2-4 weeks. Full benefits compound over 8-12 weeks.' },
      { q: 'Will it make me sleepy?', a: 'No — Tranquil reduces stress without sedation. Use Calm in the evening for sleep.' },
      { q: 'Is it safe long-term?', a: 'Generally yes — standardized ashwagandha extracts have been studied for years. Discuss with doctor if pregnant, nursing, or on thyroid medication.' },
      { q: 'Will it make me drowsy?', a: 'No — ashwagandha is adaptogenic, not sedative. It supports the body\'s stress response without causing daytime fatigue. Most users report calmer alertness, not sleepiness.' },
      { q: 'When should I take it?', a: 'Morning or split AM/PM both work well. Some find it helps with sleep when taken in the evening (ashwagandha has sleep-supportive data). Find the timing that works for your schedule.' }
    ],
    relatedSlugs: ['the-house-calm', 'the-house-greens', 'the-house-multi'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Lower stress response to daily friction.' },
      { week: 'Week 4', text: 'Cortisol responses to daily stressors visibly calmer; sleep quality improves.' },
      { week: 'Week 8+', text: 'Stress resilience baseline; sharper under pressure.' },
      { week: 'Week 12+', text: 'Sustained stress resilience baseline — the adaptogenic effect compounds.' }
    ],
    proTip: '2 capsules in the evening to start; build to 3 if needed during high-stress weeks. Doesn\'t sedate — won\'t make you foggy.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Ashwagandha is the most-studied adaptogen for cortisol modulation. I take it during high-stress weeks — cortisol drops, focus stays. It doesn\'t sedate.'
  },
  {
    slug: 'the-house-restore',
    name: 'Restore',
    category: 'supplement',
    sub: 'longevity',
    price: 26,
    runtime: 1,
    image: 'products/Restore.jpeg',
    tag: 'Joints · Mobility · Recovery',
    tagline: 'Inflammation\'s natural opponent.',
    description: 'Platinum turmeric complex with glucosamine, boswellia, chondroitin, MSM, and BioPerine® for absorption — the classic stack, properly built. Daily joint support for active people, athletes, and anyone whose body has earned a little extra care.',
    size: '60 capsules · 30 servings',
    ingredients: [
      { name: 'Turmeric (95% curcuminoids)', dose: '500 mg', what: 'Most-studied anti-inflammatory; reduces joint inflammation.' },
      { name: 'Glucosamine sulfate', dose: '500 mg', what: 'Cartilage building block; supports joint repair.' },
      { name: 'Boswellia serrata', dose: '300 mg', what: 'Frankincense extract; reduces joint inflammation.' },
      { name: 'Chondroitin sulfate', dose: '200 mg', what: 'Joint cushioning; pairs with glucosamine.' },
      { name: 'MSM (methylsulfonylmethane)', dose: '200 mg', what: 'Sulfur compound; supports connective tissue.' },
      { name: 'BioPerine®', dose: '5 mg', what: 'Increases curcumin absorption up to 2,000%.' }
    ],
    howToUse: 'Take 2 capsules daily with food. For acute joint discomfort, can take 4 capsules per day for 2-4 weeks.',
    bestFor: ['joint-support', 'recovery', 'inflammation', 'mobility'],
    studies: [
      { actor: 'Curcumin Anti-Inflammatory Mechanism', finding: 'Comprehensive review of clinical curcumin trials — confirmed anti-inflammatory mechanism via NF-κB pathway inhibition with documented benefits for joint pain, metabolic health, and oxidative stress markers across 100+ studies.', source: 'Foods, 2017 (Hewlings, Kalman)' },
      { actor: 'Curcumin + Osteoarthritis', finding: 'Meta-analysis of 8 RCTs covering 600+ patients found curcumin produced clinically meaningful pain reduction in osteoarthritis — efficacy comparable to ibuprofen with substantially better tolerability profile.', source: 'Journal of Medicinal Food, 2016 (Daily et al.)' },
      { actor: 'BioPerine® Bioavailability', finding: 'Landmark pharmacokinetic study showing piperine (black pepper extract) increased curcumin bioavailability by approximately 2000% — the mechanistic basis for nearly all modern curcumin formulations including BioPerine.', source: 'Planta Medica, 1998 (Shoba et al.)' }
    ],
    faq: [
      { q: 'Will this stain my hands like turmeric?', a: 'No — capsules contain the extract in concentrated form; no powder handling.' },
      { q: 'How long until joints feel better?', a: '2-4 weeks for noticeable difference; 8-12 weeks for full anti-inflammatory benefits.' },
      { q: 'Can I take it with NSAIDs?', a: 'Yes, but discuss with doctor — Restore can be a long-term complement to or replacement for daily NSAID use.' },
      { q: 'Should I take it with food?', a: 'Yes — curcumin is fat-soluble. Take with a meal containing some fat (and ideally The House Flow for omega-3 synergy) for best absorption. The BioPerine in this formula further amplifies bioavailability.' },
      { q: 'How long until I notice joint relief?', a: 'Mild improvement often appears in 1-2 weeks; significant joint comfort builds over 4-8 weeks of consistent use. Curcumin works upstream on inflammation rather than masking pain like NSAIDs.' }
    ],
    relatedSlugs: ['the-house-flow', 'the-house-collagen', 'the-house-multi'],
    resultsTimeline: [
      { week: 'Week 4', text: 'Joint comfort; less morning stiffness.' },
      { week: 'Week 8', text: 'Better mobility; reduced inflammation markers.' },
      { week: 'Week 12+', text: 'Sustained joint health; the compounded benefit.' },
      { week: 'Week 4', text: 'Joint comfort noticeably improved; morning stiffness reduces; recovery between training sessions accelerates.' },
      { week: 'Week 12+', text: 'Sustained anti-inflammatory baseline — joint health, recovery, and metabolic markers.' }
    ],
    proTip: 'Take with food, twice daily. Effects compound over 8-12 weeks — quitting at week 6 will hide the real benefit.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Joint support that works on a 6-12 week timeline. Started taking it after a knee tweak — never went off it.'
  },
  // ═══════════════════════════════════════════════════════════
  // SUPPLEMENTS — WORKOUT (5)
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'the-house-power',
    name: 'Power',
    category: 'supplement',
    sub: 'workout',
    price: 34,
    runtime: 3,
    image: 'products/Power.jpeg',
    tag: 'Strength · Power · Recovery · Growth',
    tagline: 'The most-studied supplement on the shelf.',
    description: '5g of pharmaceutical-grade creatine monohydrate per scoop — the most-studied supplement on the shelf, no flavors, no nonsense. Strength, muscle, and performance gains backed by hundreds of clinical trials.',
    size: '500g powder · 100 servings',
    ingredients: [
      { name: 'Creatine monohydrate (Creapure®)', dose: '5 g', what: 'Pharmaceutical-grade German creatine; standardized to 99.95% purity. The form used in the majority of clinical creatine trials.' },
      { name: 'Micronized particle size', dose: '—', what: 'Smaller particles dissolve cleanly in water without grit or sediment — better mixability than generic creatine.' },
      { name: 'Unflavored profile', dose: '—', what: 'No sweeteners, no flavors, no fillers — stacks into anything (water, coffee, protein shake) without altering taste.' },
      { name: 'cGMP-manufactured', dose: '—', what: 'Made in a cGMP-certified facility with third-party testing for purity, dose accuracy, and absence of contaminants.' }
    ],
    howToUse: 'Mix 1 scoop (5g) into water, juice, or your protein shake. Take post-workout for best absorption, or anytime that\'s consistent. Daily use is more important than timing. Loading phase optional (20g/day for first 5 days).',
    bestFor: ['strength', 'muscle-growth', 'recovery', 'performance'],
    studies: [
      { actor: 'ISSN Position Statement', finding: 'Authoritative position paper reviewing 500+ creatine studies — confirmed 5g/day creatine monohydrate is safe long-term and produces consistent strength, power, and lean mass gains across populations.', source: 'Journal of the International Society of Sports Nutrition, 2017 (Kreider et al.)' },
      { actor: 'Creatine + Cognitive Performance', finding: 'Double-blind crossover trial — 5g creatine daily for 6 weeks improved working memory and intelligence test performance vs. placebo, extending creatine\'s known benefits beyond muscle tissue.', source: 'Proceedings of the Royal Society B, 2003 (Rae et al.)' },
      { actor: 'Comprehensive Performance Review', finding: 'Review of 70+ performance studies confirmed creatine improves high-intensity exercise output by 5-15%, accelerates recovery between sets, and supports lean mass gains when combined with resistance training.', source: 'Journal of the International Society of Sports Nutrition, 2012 (Cooper et al.)' }
    ],
    faq: [
      { q: 'Will it make me hold water?', a: 'Some intramuscular water retention occurs initially — this is part of the muscle-fullness effect, not bloating.' },
      { q: 'Do I need to cycle off?', a: 'No — daily long-term use is well-studied and safe.' },
      { q: 'Is creatine bad for kidneys?', a: 'No — extensive research in healthy adults shows no kidney concerns at recommended doses.' },
      { q: 'Do I need a loading phase?', a: 'No. 5g daily for 3-4 weeks reaches the same muscle saturation as a 20g/day loading phase. Loading is faster but unnecessary.' },
      { q: 'When should I take it?', a: 'Consistency matters more than timing. Many take it post-workout for absorption with carbs, but any consistent daily time works.' }
    ],
    relatedSlugs: ['the-house-pump', 'the-house-restore', 'the-house-greens'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Lift performance increases; better volume.' },
      { week: 'Week 4', text: 'Muscle volume visible.' },
      { week: 'Week 8+', text: 'New strength baseline; sustained gains.' },
      { week: 'Week 1', text: 'Slight intramuscular fullness — the saturation phase begins.' },
      { week: 'Week 12+', text: 'Sustained strength, power, and recovery baseline — the most validated supplement in sports nutrition.' }
    ],
    proTip: '5g daily, any time of day. Loading phases are unnecessary — just be consistent. Muscle saturates over 3-4 weeks regardless.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Five grams of creatine, daily, for the rest of my life. Most-studied performance supplement on the shelf, period.'
  },
  {
    slug: 'the-house-pump',
    name: 'Pump',
    category: 'supplement',
    sub: 'workout',
    price: 40,
    runtime: 1,
    image: 'products/Pump.jpeg',
    tag: 'Circulation · Muscle · Performance',
    tagline: 'Pre-workout, but smarter and stim-free.',
    description: 'L-Citrulline DL-Malate, L-Arginine HCl, and L-Arginine AKG for nitric oxide support. Blood flow, vascularity, and pump — without the jitters of stimulant pre-workouts. Take 30 minutes pre-training for the lift.',
    size: '60 capsules · 30 servings',
    ingredients: [
      { name: 'L-Citrulline DL-Malate', dose: '3000 mg', what: 'Boosts nitric oxide; increases blood flow and pump.' },
      { name: 'L-Arginine HCl', dose: '1000 mg', what: 'Direct NO precursor; supports vascularity.' },
      { name: 'L-Arginine AKG', dose: '500 mg', what: 'Sustained NO release; longer-lasting pump.' },
      { name: 'Beetroot extract', dose: '250 mg', what: 'Natural nitrate source; cardiovascular support.' }
    ],
    howToUse: 'Take 2 capsules 30 minutes before training, on an empty or near-empty stomach. Stay well-hydrated. No need to take on rest days.',
    bestFor: ['workout-performance', 'pump', 'circulation', 'pre-workout'],
    studies: [
      { actor: 'Citrulline Malate + Performance', finding: 'RCT in 41 trained males — 8g L-citrulline malate increased bench press repetitions by 53% over baseline and reduced post-workout muscle soreness by 40% at 24h vs. placebo.', source: 'Journal of Strength and Conditioning Research, 2010 (Pérez-Guisado, Jakeman)' },
      { actor: 'Nitric Oxide Pharmacokinetics', finding: 'Comparative bioavailability study established that oral L-citrulline raises plasma L-arginine more effectively than oral L-arginine itself — the basis for citrulline\'s superiority as a nitric oxide precursor.', source: 'British Journal of Clinical Pharmacology, 2008 (Schwedhelm et al.)' },
      { actor: 'Citrulline + Endurance', finding: '7-day L-citrulline supplementation (6g/day) improved oxygen uptake efficiency during high-intensity cycling and increased time to exhaustion by 12% vs. placebo.', source: 'Journal of Applied Physiology, 2015 (Bailey et al.)' }
    ],
    faq: [
      { q: 'Does this contain caffeine?', a: 'No — Pump is stimulant-free. Pair with coffee or Burn if you want caffeine.' },
      { q: 'Will it cause itching?', a: 'No — this is not beta-alanine. Pump is the smooth, non-tingly pre-workout option.' },
      { q: 'Can I stack this with creatine?', a: 'Yes — Pump pre-workout + Power post-workout is a classic combo.' },
      { q: 'When should I take it?', a: '30-45 minutes pre-workout for the pump effect. The nitric oxide pathway peaks 60-90 minutes post-ingestion. Can be stacked with creatine and caffeine.' },
      { q: 'Is it stimulant-free?', a: 'Yes — Pump works via nitric oxide and blood flow, not stimulants. Pairs cleanly with caffeine if you want stimulant kick, or works as a stim-free pre-workout on its own.' }
    ],
    relatedSlugs: ['the-house-power', 'the-house-burn', 'the-house-greens'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Immediate workout pump.' },
      { week: 'Week 2', text: 'Better training endurance; less between-set fatigue.' },
      { week: 'Week 4+', text: 'Improved muscle volume from better blood flow during training.' },
      { week: 'Week 1', text: 'Visible vascular pump from first training session.' },
      { week: 'Week 8+', text: 'Sustained training output improvement; better between-set recovery.' }
    ],
    proTip: '30 minutes before training. Mix with water, drink immediately. Stimulant-free so safe for evening workouts.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Pre-workout without the stimulants. Citrulline plus arginine at clinical doses. The smoother training session you didn\'t know you needed.'
  },
  {
    slug: 'the-house-seal',
    name: 'Seal',
    category: 'supplement',
    sub: 'gut',
    price: 30,
    runtime: 2,
    image: 'products/Seal.jpeg',
    tag: 'Digest · Absorb · Comfort',
    tagline: 'A broad-spectrum digestive enzyme complex for digestion and nutrient absorption.',
    description: 'A full-spectrum digestive enzyme complex that supports the breakdown and absorption of carbohydrates, proteins, fats, and fiber. The body produces digestive enzymes naturally, but production declines with age and is often insufficient for the volume and variety of modern diets. Taken with meals, this multi-enzyme blend helps reduce bloating and post-meal heaviness, supports nutrient absorption, and pairs with the probiotic in Biome for a complete gut-support stack.',
    size: '60 capsules · 30 servings (2 per meal)',
    ingredients: [
      { name: 'Amylase', dose: '6,000 DU', what: 'Breaks down complex carbohydrates (starches) into simple sugars for absorption.' },
      { name: 'Protease (acid + alkaline)', dose: '20,000 HUT', what: 'Breaks down protein into amino acids. Dual-pH form ensures activity across the digestive tract.' },
      { name: 'Lipase', dose: '500 FIP', what: 'Breaks down dietary fats into fatty acids and glycerol for absorption.' },
      { name: 'Lactase', dose: '500 ALU', what: 'Breaks down lactose (milk sugar). Supports digestion of dairy for those with mild lactose intolerance.' },
      { name: 'Cellulase', dose: '500 CU', what: 'Helps digest fiber and plant cell walls — particularly useful for high-vegetable diets.' },
      { name: 'Bromelain (from pineapple)', dose: '100 GDU', what: 'Pineapple-derived enzyme with additional protein-digesting and anti-inflammatory properties.' },
      { name: 'Papain (from papaya)', dose: '100,000 PU', what: 'Papaya-derived protease that supports protein digestion and reduces post-meal heaviness.' }
    ],
    howToUse: 'Take 2 capsules with each large meal, ideally at the start of the meal. For maintenance, take 2 capsules with your largest meal of the day.',
    bestFor: ['digestion', 'nutrient-absorption', 'bloating', 'post-meal-comfort', 'aging-digestion'],
    studies: [
      { actor: 'Digestive Enzyme Supplementation', finding: 'Supplemental digestive enzymes (amylase, protease, lipase) demonstrate measurable improvements in post-meal symptoms including bloating, fullness, and digestive comfort in adults with mild digestive complaints.', source: 'Journal of Medicinal Food, 2014 (Roxas)' },
      { actor: 'Bromelain Digestive Support', finding: 'Bromelain (pineapple-derived protease) has decades of clinical evidence supporting both digestive enzyme function and anti-inflammatory effects via mechanisms separate from non-steroidal anti-inflammatory drugs.', source: 'Biotechnology Research International, 2012 (Pavan et al.)' },
      { actor: 'Lactase Enzyme Effectiveness', finding: 'Supplemental lactase enzyme is the standard of care for lactose intolerance and demonstrates significant reduction in lactose-related symptoms when taken with dairy-containing meals.', source: 'Cochrane Database of Systematic Reviews, 2010' }
    ],
    faq: [
      { q: 'Do I really need digestive enzymes?', a: 'If you experience post-meal bloating, heaviness, or notice you don\'t tolerate certain foods (dairy, beans, fibrous vegetables) as well as you used to, yes. Enzyme production naturally declines with age — by 40s and 50s, most people are producing meaningfully less than they did at 25. Younger adults with high-protein or high-fiber diets often benefit too.' },
      { q: 'When should I take it?', a: 'At the start of your meal — that\'s when enzymes need to be present in the digestive tract. Taking after eating still helps, just less efficiently.' },
      { q: 'Can I take it with Biome (probiotic)?', a: 'Yes — and the two work beautifully together. Enzymes break food down; probiotics maintain the healthy gut bacteria that complete the digestion process. Take Biome on empty stomach AM, Seal with meals.' },
      { q: 'Will this help with food intolerances?', a: 'It can support milder cases — particularly lactose intolerance (the lactase enzyme directly breaks down dairy sugar) and gluten sensitivity is sometimes helped by protease. True celiac disease or severe food allergies are not addressed by enzyme supplementation.' },
      { q: 'Pregnancy-safe?', a: 'Generally considered low-risk for healthy pregnancies, but always confirm with your provider. Most digestive enzyme blends use plant-derived enzymes that are well-tolerated.' }
    ],
    relatedSlugs: ['the-house-biome', 'the-house-greens', 'the-house-multi'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Reduced post-meal bloating and heaviness — most users notice immediately on the first heavy meal.' },
      { week: 'Week 1', text: 'More predictable digestive comfort across the week; less reliance on antacids.' },
      { week: 'Week 4', text: 'Improved nutrient absorption baseline — better tolerance of fibrous and protein-rich meals.' },
      { week: 'Week 8+', text: 'Sustained digestive comfort; meal selection no longer driven by digestive caution.' }
    ],
    proTip: 'Take with the meal, not after. Enzymes need to be in the digestive tract when food arrives — too late and they\'re working on an empty stomach.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan-Friendly', 'Third-Party Tested', 'No Artificial Colors', 'Made in USA'],
    daniels_note: 'The supplement that quietly upgrades every meal. Multi-enzyme breakdown — carbs, protein, fats, fiber, dairy — all at once. Pairs with Biome for the full digestive stack. The kind of supplement you don\'t notice missing until you stop taking it.'
  },
  {
    slug: 'the-house-greens',
    name: 'Greens',
    category: 'supplement',
    sub: 'workout',
    price: 36,
    runtime: 1,
    image: 'products/Greens.jpeg',
    tag: 'Nutrient Dense · Antioxidant · Vitality',
    tagline: 'A full serving of vitality.',
    description: 'Twenty-two ingredient superfood blend — barley grass, spirulina, beet, acai, ashwagandha, ginseng, ginger, and more — in one daily scoop. The insurance policy for the days you don\'t eat as well as you should.',
    size: '300g powder · 30 servings',
    ingredients: [
      { name: 'Greens blend', dose: '5000 mg', what: 'Barley grass, wheatgrass, alfalfa, spirulina, chlorella.' },
      { name: 'Antioxidant blend', dose: '2000 mg', what: 'Acai, blueberry, pomegranate, beet, goji.' },
      { name: 'Adaptogen blend', dose: '1000 mg', what: 'Ashwagandha, ginseng, rhodiola, eleuthero.' },
      { name: 'Digestive blend', dose: '500 mg', what: 'Ginger, fennel, peppermint, probiotics.' },
      { name: 'Fiber + Greens', dose: '2000 mg', what: 'Apple fiber, chicory root inulin.' }
    ],
    howToUse: 'Mix 1 scoop into 8oz of cold water, juice, or smoothie. Take first thing in the morning on empty stomach for best absorption. Pleasant green-apple-and-mint flavor.',
    bestFor: ['nutrition', 'antioxidants', 'foundational-health', 'energy'],
    studies: [
      { actor: 'Superfood Antioxidant Density', finding: 'Comprehensive review of fruit and vegetable polyphenol content found that concentrated greens powders providing diverse plant sources deliver antioxidant capacity equivalent to multiple servings of whole fruits and vegetables.', source: 'Nutrients, 2017 (Boeing et al.)' },
      { actor: 'Adaptogens + Energy', finding: 'Systematic review of 11 RCTs found ashwagandha and ginseng supplementation improved subjective energy levels, exercise performance, and stress-related fatigue across multiple populations.', source: 'Journal of Ginseng Research, 2018 (Lee, Son et al.)' },
      { actor: 'Beet Root + Performance', finding: 'Meta-analysis of 23 RCTs covering 1,000+ participants found dietary nitrate from beetroot improved exercise economy and time-to-exhaustion by 4-25%, particularly in submaximal endurance work.', source: 'Sports Medicine, 2018 (Domínguez et al.)' }
    ],
    faq: [
      { q: 'Does this replace vegetables?', a: 'No — but it provides concentrated phytonutrients on days when your diet falls short.' },
      { q: 'How does it taste?', a: 'Pleasant green-apple-and-mint; most users actually look forward to it.' },
      { q: 'Can I take it with Multi?', a: 'Yes — Greens covers phytonutrients; Multi covers vitamins and minerals. Complementary, not redundant.' },
      { q: 'How does this fit with vegetables in my diet?', a: 'It\'s a supplement, not a replacement. The goal is to fill gaps — most adults eat 1-2 servings of vegetables daily vs. the recommended 4-5. One scoop helps close that gap with concentrated plant diversity.' },
      { q: 'When should I take it?', a: 'Morning with breakfast is the most popular timing — it pairs with most morning routines (coffee, smoothie, water). Pre-workout also works for the nitrate boost from beet.' }
    ],
    relatedSlugs: ['the-house-multi', 'the-house-biome', 'the-house-tranquil'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Subtle energy lift; clearer thinking.' },
      { week: 'Week 2', text: 'Clearer skin; better digestion.' },
      { week: 'Week 4+', text: 'New nutritional baseline; less reliant on perfect eating days.' },
      { week: 'Week 2', text: 'Digestion smoother; daily energy more stable; cravings for processed foods reduce.' },
      { week: 'Week 12+', text: 'Sustained nutritional baseline — visible skin glow, energy, and immune resilience.' }
    ],
    proTip: 'Mix with cold water in a shaker bottle — or blend into a smoothie. Hot water destroys some of the enzymes.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'On the days I don\'t eat my vegetables, Greens does the heavy lifting. 22 ingredients, one scoop, tastes like green apple.'
  },
  {
    slug: 'the-house-burn',
    name: 'Burn',
    category: 'supplement',
    sub: 'workout',
    price: 34,
    runtime: 1,
    image: 'products/Burn.jpeg',
    tag: 'Energy · Focus · Cardio Support',
    tagline: 'Clean morning energy and metabolic support — caffeine + green tea + amino acids.',
    description: 'A daily energy and metabolic support capsule built around clinically-studied ingredients for sustained mental clarity, focus, and cardiovascular performance. Moderate-dose caffeine paired with L-theanine-rich green tea extract delivers the cleanest energy curve in the category — without the jitter, crash, or aggressive stimulants you find in most pre-workouts. L-tyrosine supports dopamine pathways for focus; L-carnitine and cayenne extract round out the cardiovascular and metabolic support story. Designed for daily morning use or 30 minutes pre-cardio.',
    size: '90 capsules · 30 servings',
    ingredients: [
      { name: 'Caffeine anhydrous', dose: '200 mg', what: 'Equivalent to ~2 cups of coffee — moderate-dose stimulant for clean energy and mental clarity.' },
      { name: 'Green tea extract (standardized EGCG)', dose: '300 mg', what: 'Antioxidant and natural source of L-theanine, which smooths caffeine\'s edge.' },
      { name: 'L-tyrosine', dose: '500 mg', what: 'Amino acid precursor to dopamine and norepinephrine — supports focus and mental performance under stress.' },
      { name: 'L-carnitine', dose: '500 mg', what: 'Amino acid that supports cellular energy production in muscle and cardiovascular tissue.' },
      { name: 'Cayenne extract', dose: '50 mg', what: 'Plant-derived metabolic support with antioxidant properties.' }
    ],
    howToUse: 'Take 3 capsules in the morning, ideally on an empty stomach, or 30 minutes before cardio. Avoid taking after 2 PM to prevent sleep disruption. Start with 1-2 capsules if you\'re caffeine-sensitive.',
    bestFor: ['morning-energy', 'focus', 'cardio-performance', 'mental-clarity'],
    studies: [
      { actor: 'Caffeine + L-Theanine Cognitive Performance', finding: 'Combining caffeine with L-theanine (naturally present in green tea) produces measurable improvements in attention, focus, and reaction time compared to caffeine alone — with significantly less jitter and post-stimulant crash.', source: 'Nutritional Neuroscience, 2008 (Owen et al.)' },
      { actor: 'L-Tyrosine for Stress and Focus', finding: 'L-tyrosine supplementation supports working memory and cognitive performance under stressful or demanding conditions by replenishing catecholamine precursors.', source: 'Frontiers in Behavioral Neuroscience, 2015 (Jongkees et al.)' },
      { actor: 'L-Carnitine + Cardiovascular Function', finding: 'Meta-analyses of L-carnitine supplementation document supportive effects on cellular energy production and cardiovascular health markers in healthy adults.', source: 'Mayo Clinic Proceedings, 2013 (DiNicolantonio et al.)' }
    ],
    faq: [
      { q: 'Will this make me jittery?', a: 'For most people, no — the L-theanine in green tea naturally smooths caffeine\'s edge, and L-tyrosine adds focus without anxiety. Less jitter than coffee at the same caffeine dose for most users. Start with 2 capsules if you\'re caffeine-sensitive.' },
      { q: 'Can I take it with coffee?', a: 'Yes, but reduce coffee by half on Burn days to avoid over-caffeination. 200mg of caffeine in the capsules plus a full cup of coffee is more than most people want.' },
      { q: 'Should I take it pre-workout?', a: 'Yes — that\'s a primary use case. Take 30-45 minutes before cardio or training for the energy and focus boost. Avoid taking within 6 hours of bed.' },
      { q: 'Is this safe long-term?', a: 'Yes for healthy adults. Some people cycle off after 8-12 weeks to maintain caffeine sensitivity. If you\'re pregnant, nursing, have heart conditions, or take medications, check with your provider first.' },
      { q: 'How is this different from a pre-workout?', a: 'Burn is a daily capsule — moderate-dose, no aggressive stimulants, no proprietary blends. Most pre-workouts pack 300-400mg of caffeine plus beta-alanine, citrulline, and proprietary blends designed for the gym only. Burn is built for the morning and the cardio session, not for one-rep-max attempts.' }
    ],
    relatedSlugs: ['the-house-pump', 'the-house-focus', 'the-house-greens'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Clean energy and focus within 30-45 minutes; no jitter for most users.' },
      { week: 'Week 1', text: 'Pre-workout energy and cardio output noticeably improved.' },
      { week: 'Week 4', text: 'Predictable morning energy baseline; sustained focus across the workday.' },
      { week: 'Week 8+', text: 'Energy and cardiovascular performance support compounds with consistent training.' }
    ],
    proTip: 'First thing AM, ideally on empty stomach. Take 2-3 hours before bed at the latest — caffeine half-life is real.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', 'Third-Party Tested', 'No Artificial Colors', 'Made in USA', 'Sugar-Free'],
    daniels_note: 'When I want focus and clean energy without the jitter. Caffeine plus L-theanine plus tyrosine — the trio that actually delivers mental clarity. Built for the morning routine and the cardio session, not the deadlift PR.'
  },
  // ═══════════════════════════════════════════════════════════
  // SUPPLEMENTS — BEAUTY + FOCUS (3)
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'the-house-radiance',
    name: 'Radiance',
    category: 'supplement',
    sub: 'beauty',
    price: 34,
    runtime: 1,
    image: 'products/Radiance.jpeg',
    tag: 'Vibrant Hair · Radiant Skin · Strong Nails',
    tagline: 'Beauty you can taste.',
    description: 'Vitamins A/C/D/E with biotin, B-complex, zinc, iodine, folate, and marine collagen — in a passion-fruit gummy you\'ll actually take. The beauty-from-within stack that compounds over months.',
    size: '60 gummies · 30 servings',
    ingredients: [
      { name: 'Biotin (B7)', dose: '5000 mcg', what: 'Hair, skin, nail support; the most-recognized beauty B-vitamin.' },
      { name: 'Vitamin A', dose: '900 mcg', what: 'Skin renewal; supports cell turnover.' },
      { name: 'Vitamin C', dose: '90 mg', what: 'Collagen synthesis; brightening.' },
      { name: 'Vitamin D3', dose: '25 mcg', what: 'Skin and bone health.' },
      { name: 'Vitamin E', dose: '15 mg', what: 'Antioxidant; skin protection.' },
      { name: 'Zinc', dose: '11 mg', what: 'Skin healing; hormone balance.' },
      { name: 'Iodine', dose: '150 mcg', what: 'Thyroid; metabolic support for hair growth.' },
      { name: 'Marine collagen', dose: '500 mg', what: 'Skin firmness from within.' }
    ],
    howToUse: 'Take 2 gummies daily, anytime. Pleasant passion-fruit flavor — most customers find this the easiest supplement to remember.',
    bestFor: ['beauty', 'hair-health', 'skin-from-within', 'nails'],
    studies: [
      { actor: 'Marine Collagen + Skin Elasticity', finding: '8-week double-blind placebo-controlled trial — collagen peptides 2.5-5g/day significantly improved skin elasticity in women aged 35-55, with effects persisting 4 weeks after stopping supplementation.', source: 'Skin Pharmacology and Physiology, 2014 (Proksch et al.)' },
      { actor: 'Biotin + Hair Quality', finding: 'Comprehensive review of biotin for hair loss — clear deficiency states benefit dramatically; supplementation in non-deficient individuals still shows modest improvements in hair quality and growth rate.', source: 'Skin Appendage Disorders, 2017 (Patel et al.)' },
      { actor: 'Hydrolyzed Collagen Bioavailability', finding: 'Mechanistic study demonstrating that orally ingested collagen peptides reach the dermis as bioactive di- and tri-peptides, stimulating fibroblast collagen synthesis and suppressing collagen-degrading enzymes.', source: 'Journal of Medicinal Food, 2011 (Zague et al.)' }
    ],
    faq: [
      { q: 'How long until I see results?', a: 'Skin changes typically appear in 6-8 weeks. Hair and nail benefits compound over 3-6 months.' },
      { q: 'Can I take this with The House Collagen?', a: 'Yes — Radiance is a vitamin-and-mineral gummy; Collagen is concentrated peptides. Stack both for full beauty support.' },
      { q: 'Are these vegan?', a: 'No — Radiance contains marine collagen. Try The House Multi + plant-based collagen alternative for vegan beauty support.' },
      { q: 'How is this different from collagen powder?', a: 'Different delivery and use case. Radiance is a daily gummy with marine collagen plus the full beauty vitamin stack (A/C/D/E, biotin, B-complex, zinc, iodine, folate) — a complete inside-out beauty supplement. The House Collagen is straight collagen peptides at a higher dose for stacking into coffee or shakes.' },
      { q: 'When will I see results?', a: 'Hair, skin, and nail markers begin shifting in 4-6 weeks. Visible improvement (skin texture, hair strength, nail growth) typically appears at the 8-12 week mark. Effects compound with consistent daily use.' }
    ],
    relatedSlugs: ['the-house-collagen', 'the-house-multi', 'the-house-glow'],
    resultsTimeline: [
      { week: 'Week 4', text: 'Skin glow; the inside-out brightness.' },
      { week: 'Week 8', text: 'Nail growth visibly stronger.' },
      { week: 'Week 12+', text: 'Full hair growth cycle complete; visible thickness change.' },
      { week: 'Week 4', text: 'Hair growth visibly stronger; nails grow faster and break less.' },
      { week: 'Week 12+', text: 'Sustained skin elasticity, hair density, and nail strength — the inside-out beauty baseline.' }
    ],
    proTip: 'Be patient. Hair and nails grow on a 12-week cycle — you need at least a full quarter to see what this product actually does.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Beauty from within is real. My nails are stronger, my hair grew faster. Marine collagen plus vitamins, taken every morning.'
  },
  {
    slug: 'the-house-collagen',
    name: 'Collagen',
    category: 'supplement',
    sub: 'beauty',
    price: 34,
    runtime: 1,
    image: 'products/Collagen.jpeg',
    tag: 'Skin · Hair · Nails · Joints',
    tagline: 'Firm skin, strong joints, daily.',
    description: '10g of grass-fed bovine collagen peptides per scoop, types I & III. Unflavored, dissolves clean in coffee, cooking, anything. The beauty-and-mobility supplement that supports skin firmness and joint health from the inside.',
    size: '300g powder · 30 servings',
    ingredients: [
      { name: 'Bovine collagen peptides (Types I & III)', dose: '10 g', what: 'Hydrolyzed peptides from grass-fed bovine; the two collagen types that make up 90% of human skin, joints, hair, and nails.' },
      { name: 'Average molecular weight 2-5 kDa', dose: '—', what: 'Optimized peptide size for digestive absorption — small enough to absorb intact, large enough to remain bioactive.' },
      { name: 'Unflavored profile', dose: '—', what: 'Neutral taste; dissolves clean in hot or cold liquids. Drink in coffee, soup, smoothies, or water without altering flavor.' },
      { name: 'Quality-sourced collagen peptides', dose: '—', what: 'Sourced from grass-fed bovine — no growth hormones, no antibiotics. Third-party verified for purity.' }
    ],
    howToUse: 'Mix 1 scoop into hot or cold liquids — coffee, smoothies, soups, oatmeal. Dissolves cleanly with no flavor or texture. Take daily, anytime.',
    bestFor: ['skin-from-within', 'joint-support', 'beauty', 'hair-and-nails'],
    studies: [
      { actor: 'Collagen + Skin Outcomes', finding: '8-week placebo-controlled trial in 114 women — bovine collagen peptides 2.5g daily reduced eye wrinkle volume by 20% and increased procollagen and elastin synthesis vs. placebo.', source: 'Skin Pharmacology and Physiology, 2014 (Proksch et al.)' },
      { actor: 'Collagen + Joint Pain in Athletes', finding: '6-month RCT in 147 athletes — 10g collagen hydrolysate daily significantly reduced joint pain at rest, walking, and during activity vs. placebo. Supports both beauty and joint health applications.', source: 'Current Medical Research and Opinion, 2008 (Clark et al.)' },
      { actor: 'Hydrolyzed Collagen Mechanism', finding: 'Mechanistic study demonstrating that orally ingested collagen peptides reach the dermis as bioactive di- and tri-peptides, stimulating fibroblast collagen synthesis and suppressing collagen-degrading enzymes (MMP-2).', source: 'Journal of Medicinal Food, 2011 (Zague et al.)' }
    ],
    faq: [
      { q: 'Does it really dissolve in coffee?', a: 'Yes — completely. No clumping, no taste change.' },
      { q: 'Vegetarian/vegan?', a: 'No — collagen is animal-derived. Vegan customers should focus on collagen-supporting nutrients (Vitamin C, copper, glycine) instead.' },
      { q: 'How long until I see effects?', a: 'Skin and nail changes in 6-8 weeks. Joint benefits in 8-12 weeks.' },
      { q: 'When should I take it?', a: 'Daily consistency matters more than timing. Morning in coffee is the most popular ritual — the peptides are stable at coffee temperatures. Post-workout for joint and recovery use also works well.' },
      { q: 'Can vegetarians use this?', a: 'No — this is bovine-sourced. For a vegetarian beauty option, The House Radiance uses marine collagen plus the full beauty vitamin stack. We currently don\'t offer a plant-source collagen because plant \'collagen\' marketing typically refers to collagen-supporting nutrients (vitamin C, amino acids), not actual collagen.' }
    ],
    relatedSlugs: ['the-house-radiance', 'the-house-restore', 'the-house-multi'],
    resultsTimeline: [
      { week: 'Week 4', text: 'Skin firmness; bounce-back improves.' },
      { week: 'Week 8', text: 'Joint comfort; less stiffness.' },
      { week: 'Week 12+', text: 'Hair, nails, and skin compound benefit.' },
      { week: 'Week 2', text: 'Hair feels stronger; nails grow visibly faster and break less.' },
      { week: 'Week 12+', text: 'Sustained skin elasticity, joint comfort, and recovery — the daily protein with bonus collagen synthesis benefits.' }
    ],
    proTip: '10g in your morning coffee. Tasteless, dissolves cleanly. Heat is fine — collagen peptides are stable up to 300°F.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Dairy-Free', 'Sugar-Free', 'Soy-Free', 'Third-Party Tested', 'Made in USA'],
    daniels_note: 'Ten grams in my morning coffee. Tasteless. Skin firmness, joint cushion. The supplement I\'d recommend to anyone over 35.'
  },
  {
    slug: 'the-house-focus',
    name: 'Focus',
    category: 'supplement',
    sub: 'beauty',
    price: 30,
    runtime: 1,
    image: 'products/Focus.jpeg',
    tag: 'Clarity · Memory · Performance',
    tagline: 'Mental edge that doesn\'t fade by 3pm.',
    description: 'Nootropic blend of GABA, L-Tyrosine, Bacopa monnieri, Alpha GPC, and Huperzine A with B6 — for focus that doesn\'t fade by 3pm. The cognitive supplement built for thinking work and sustained mental output.',
    size: '30 capsules · 30 servings',
    ingredients: [
      { name: 'L-Tyrosine', dose: '500 mg', what: 'Amino acid; supports dopamine production for focus and motivation.' },
      { name: 'GABA', dose: '300 mg', what: 'Calming neurotransmitter; reduces anxious focus.' },
      { name: 'Bacopa monnieri', dose: '300 mg', what: 'Adaptogen; clinical evidence for memory enhancement.' },
      { name: 'Alpha GPC', dose: '150 mg', what: 'Choline source; supports acetylcholine for focus.' },
      { name: 'Huperzine A', dose: '50 mcg', what: 'Acetylcholinesterase inhibitor; memory support.' },
      { name: 'Vitamin B6', dose: '5 mg', what: 'Required cofactor for neurotransmitter synthesis.' }
    ],
    howToUse: 'Take 1 capsule in the morning. For deep work sessions or long days, can take a second capsule in early afternoon. Don\'t take after 4 PM to avoid sleep impact.',
    bestFor: ['focus', 'cognition', 'memory', 'productivity'],
    studies: [
      { actor: 'Alpha GPC + Performance', finding: 'RCT in 20 college-aged subjects — 250mg Alpha GPC 45 minutes pre-exercise improved isometric strength by 14% compared to placebo, with effects on cognitive markers approaching caffeine.', source: 'Journal of the International Society of Sports Nutrition, 2015 (Parker et al.)' },
      { actor: 'Bacopa + Cognitive Function', finding: 'Foundational 12-week double-blind RCT — 300mg/day Bacopa extract significantly improved speed of visual information processing, learning rate, and memory consolidation vs. placebo.', source: 'Psychopharmacology, 2001 (Stough et al.)' },
      { actor: 'Choline + Acetylcholine Synthesis', finding: 'Multicenter trial — 400mg Alpha GPC three times daily significantly improved cognitive function scores across multiple validated dementia rating scales vs. placebo — establishing the acetylcholine precursor mechanism.', source: 'Clinical Therapeutics, 2003 (De Jesus Moreno)' }
    ],
    faq: [
      { q: 'Will this make me wired?', a: 'No — Focus is stim-free. The mental clarity is sustained, not stimulant-based.' },
      { q: 'Can I take it with coffee?', a: 'Yes — they pair well. Coffee for the lift, Focus for the depth.' },
      { q: 'How long until I notice effects?', a: 'Some users feel the focus boost within hours. Bacopa\'s cumulative memory effects build over 4-8 weeks.' },
      { q: 'Is this a stimulant?', a: 'No — it\'s a nootropic stack working via acetylcholine, GABA, and dopamine pathways. Pairs well with caffeine if you want both. Many users report a clean cognitive lift without the jitter of pure caffeine.' },
      { q: 'When does the effect kick in?', a: 'Alpha GPC and L-Tyrosine work acutely (30-60 min). Bacopa works on a multi-week buildup — meaningful effects appear after 4-8 weeks of daily use. The combination delivers same-day plus compounding benefits.' }
    ],
    relatedSlugs: ['the-house-synapse', 'the-house-tranquil', 'the-house-burn'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Clearer attention within 30-45 minutes.' },
      { week: 'Week 2', text: 'Sustained focus through long sessions.' },
      { week: 'Week 4+', text: 'Cognitive baseline; less need for caffeine to feel sharp.' },
      { week: 'Week 4', text: 'Bacopa effects begin to compound; memory consolidation noticeably improved.' },
      { week: 'Week 12+', text: 'Sustained cognitive baseline — the daily edge for demanding intellectual work.' }
    ],
    proTip: 'Take 30 minutes before deep work. Don\'t combine with caffeine — the GABA + caffeine combo creates a paradoxical fog.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'The cognitive stack I run on heavy thinking days. GABA plus Tyrosine plus Bacopa — alert and calm at the same time.'
  }
];

// Helper functions
window.getProductBySlug = function(slug) {
  return window.PRODUCTS.find(p => p.slug === slug);
};
window.getProductsByCategory = function(category) {
  return window.PRODUCTS.filter(p => p.category === category);
};
window.getProductsByConcern = function(concern) {
  return window.PRODUCTS.filter(p => (p.bestFor || []).includes(concern));
};

/**
 * CONCERN BUNDLES — Shop By Concern bundles
 * Each is a curated set of products targeting a specific skin concern
 * or wellness goal. Each bundle has its own discount (5-8%) based on
 * total bundle price — see the `discount` field on each bundle.
 */
window.CONCERN_BUNDLES = [
  // ═══ SKIN CONCERNS — primary concern shows visibly on skin,
  //     paired with the supplements that drive the inside-out half ═══
  {
    id: 'aging',
    discount: 0.12,
    tab: 'skin',
    icon: 'A.',
    name: 'The Anti-Aging Bundle',
    blurb: "Retinol and the five-peptide growth factor serum where age shows, daily mineral SPF that protects every gain, plus collagen and NAD+ for the cellular side. Anti-aging from every direction, because skin doesn't age in isolation from the body.",
    slugs: ['the-house-bounce', 'the-house-firm', 'the-house-boost', 'the-house-shield', 'the-house-eye', 'the-house-collagen', 'the-house-nad-plus', 'the-house-radiance']
  },
  {
    id: 'acne',
    discount: 0.12,
    tab: 'skin',
    icon: 'B.',
    name: 'The Clear-Skin Bundle',
    blurb: 'A daily 2% salicylic clarifier where blemishes flare, the zinc and sulfur clay mask weekly, plus probiotics and omega-3s for the gut-skin axis behind chronic breakouts. The full inside-out clear-skin protocol.',
    slugs: ['the-house-clear', 'the-house-mask', 'the-house-biome', 'the-house-flow']
  },
  {
    id: 'dryness',
    discount: 0.1,
    tab: 'skin',
    icon: 'C.',
    name: 'The Hydration Bundle',
    blurb: "The hyaluronic acid serum and the hyaluronic face-and-body mist for layered surface hydration, the daily moisturizing cream for the seal, plus omega-3s that build the lipid matrix holding water in skin. Hydration that doesn't quit by mid-afternoon.",
    slugs: ['the-house-hyaluronic', 'the-house-hydration', 'the-house-soft', 'the-house-flow']
  },
  {
    id: 'dullness',
    discount: 0.1,
    tab: 'skin',
    icon: 'D.',
    name: 'The Brightening Bundle',
    blurb: 'The CE Ferulic-tier antioxidant serum and multi-acid resurfacing pads paired with the beauty vitamins that compound the result from within. The inside-out approach to measurable luminosity in 6-8 weeks.',
    slugs: ['the-house-defense', 'the-house-renewal', 'the-house-radiance']
  },
  {
    id: 'sensitivity',
    discount: 0.12,
    tab: 'skin',
    icon: 'E.',
    name: 'The Soothing Bundle',
    blurb: 'Gentle topicals that never trigger reactivity, paired with probiotics and omega-3s that calm the systemic inflammation often behind sensitive skin. No fragrance, no aggressive actives.',
    slugs: ['the-house-wash', 'the-house-balance', 'the-house-soft', 'the-house-biome', 'the-house-flow']
  },
  {
    id: 'pores',
    discount: 0.12,
    tab: 'skin',
    icon: 'F.',
    name: 'The Texture Bundle',
    blurb: "Physical polish, multi-acid resurfacing pads, the weekly zinc-and-sulfur clay mask, and the peptide growth factor serum that smooths surface texture from the foundation up — plus the probiotic that addresses the gut-skin axis behind pore appearance and surface bumps. Texture refinement, inside and out.",
    slugs: ['the-house-polish', 'the-house-renewal', 'the-house-mask', 'the-house-boost', 'the-house-biome']
  },
  {
    id: 'glow',
    discount: 0.15,
    tab: 'skin',
    icon: 'G.',
    name: 'The Glow Bundle',
    blurb: "The inside-out glow protocol. The CE Ferulic antioxidant shield and the five-peptide growth factor serum for visible renewal, the weekly clay mask that primes everything, the squalane-plus-HA-spheres lipid seal at night — paired with the daily beauty vitamins and 10g of collagen that build glow from within. Visible luminosity in 6-8 weeks.",
    slugs: ['the-house-boost', 'the-house-defense', 'the-house-glow', 'the-house-mask', 'the-house-radiance', 'the-house-collagen']
  },
  {
    id: 'starter',
    discount: 0.15,
    tab: 'skin',
    icon: 'H.',
    name: 'The Skin Starter Bundle',
    blurb: "Three products, two minutes. Cleanse, tone, moisturize — the minimum effective skincare routine for someone who has never had one, or wants to start over with the basics done right. Run this for six to eight weeks before adding anything else.",
    slugs: ['the-house-wash', 'the-house-balance', 'the-house-soft']
  },
  {
    id: 'reset',
    discount: 0.15,
    tab: 'skin',
    icon: 'I.',
    name: 'The Reset Bundle',
    blurb: "The weekly skincare reset. The zinc-and-sulfur clay detox mask and the gentle berry-seed polish — used once or twice a week to clear buildup, brighten dull patches, and prime skin so everything else works harder. The complement to any daily routine.",
    slugs: ['the-house-mask', 'the-house-polish']
  },

  // ═══ WELLNESS GOALS — primary concern is systemic,
  //     paired with the skincare that shows the result on the surface ═══
  {
    id: 'sleep',
    discount: 0.1,
    tab: 'goal',
    icon: 'A.',
    name: 'The Sleep Bundle',
    blurb: "The wind-down stack: magnesium glycinate and ashwagandha for the nervous system, plus the overnight skincare that puts your routine to bed. Better sleep that visibly shows by morning.",
    slugs: ['the-house-calm', 'the-house-tranquil', 'the-house-soft', 'the-house-eye']
  },
  {
    id: 'energy',
    discount: 0.12,
    tab: 'goal',
    icon: 'B.',
    name: 'The Energy Bundle',
    blurb: "Cellular energy from the foundation (multivitamin, CoQ10, vitamin D) layered with the metabolic kick of Burn and the cognitive edge of Focus. Energy that lasts through the day.",
    slugs: ['the-house-multi', 'the-house-vitality', 'the-house-sunshine', 'the-house-burn', 'the-house-focus']
  },
  {
    id: 'focus',
    discount: 0.12,
    tab: 'goal',
    icon: 'C.',
    name: 'The Focus Bundle',
    blurb: "Cognitive nootropics with Alpha GPC and Bacopa, the Lion's Mane mushroom complex, omega-3 phospholipids for brain structure, plus Burn for the metabolic + cognitive lift before deep work — and the eye treatment for the toll long focus sessions take on the orbital area. Sharp mind, present face.",
    slugs: ['the-house-focus', 'the-house-synapse', 'the-house-burn', 'the-house-flow', 'the-house-eye']
  },
  {
    id: 'stress',
    discount: 0.12,
    tab: 'goal',
    icon: 'D.',
    name: 'The Stress Bundle',
    blurb: "Adaptogens and magnesium for the cortisol response, plus the gentle daily exfoliating pads and weekly detox mask for skin that shows stress before the body says it. Lower stress visibly.",
    slugs: ['the-house-tranquil', 'the-house-calm', 'the-house-greens', 'the-house-balance', 'the-house-mask']
  },
  {
    id: 'hair-nails',
    discount: 0.12,
    tab: 'goal',
    icon: 'E.',
    name: 'The Hair & Nails Bundle',
    blurb: "Beauty from within — the biotin-and-vitamin A/C/E foundation in Radiance, marine collagen for hair shaft and nail bed strength, the multivitamin baseline so the whole stack actually absorbs, and the probiotic that quietly drives the keratin-and-hair-growth side of the gut-skin axis.",
    slugs: ['the-house-radiance', 'the-house-collagen', 'the-house-multi', 'the-house-biome']
  },
  {
    id: 'longevity',
    discount: 0.12,
    tab: 'goal',
    icon: 'G.',
    name: 'The Cellular Bundle',
    blurb: "Cellular longevity — NAD+, CoQ10, curcumin — paired with retinol and the five-peptide growth factor serum where aging shows. The biggest evidence-based bets in cellular renewal, daily.",
    slugs: ['the-house-nad-plus', 'the-house-vitality', 'the-house-restore', 'the-house-bounce', 'the-house-firm', 'the-house-boost']
  },
  {
    id: 'gut',
    discount: 0.1,
    tab: 'goal',
    icon: 'H.',
    name: 'The Gut Bundle',
    blurb: "The complete gut-support stack — multi-strain probiotic for the bacterial baseline, broad-spectrum digestive enzymes to break food down for absorption, and prebiotic greens to feed the whole system. Digestion improved from three complementary angles.",
    slugs: ['the-house-biome', 'the-house-seal', 'the-house-greens']
  },
  {
    id: 'joints',
    discount: 0.1,
    tab: 'goal',
    icon: 'I.',
    name: 'The Joint Bundle',
    blurb: "The joint-comfort protocol — curcumin, omega-3, collagen — plus the squalane-and-hyaluronic facial seal that pairs internally and topically for whole-body inflammation resolution and barrier resilience.",
    slugs: ['the-house-restore', 'the-house-flow', 'the-house-collagen', 'the-house-glow']
  },
  {
    id: 'travel',
    discount: 0.15,
    tab: 'goal',
    icon: 'J.',
    name: 'The Travel Stack',
    blurb: "TSA-friendly bottles, fewer pieces, full coverage. The barrier-respecting cleanser for hotel-water faces, the mineral SPF for new-climate sun exposure, the multivitamin and omega-3 that handle airplane meals, magnesium for the time-zone reset, and vitamin D for the days you don't see the sun. Built to go where you go.",
    slugs: ['the-house-wash', 'the-house-shield', 'the-house-multi', 'the-house-flow', 'the-house-calm', 'the-house-sunshine']
  },
  {
    id: 'cycle',
    discount: 0.12,
    tab: 'goal',
    icon: 'K.',
    name: 'The Cycle Bundle',
    blurb: "Cycle-aware support across the month — clinical-grade ashwagandha for hormonal-balance modulation, magnesium glycinate for PMS-week tension and sleep, vitamin D for mood through the luteal dip, the gut probiotic that the cycle-skin axis runs on, and omega-3 for the inflammation side. The protocol for women whose energy, skin, and mood track the month.",
    slugs: ['the-house-tranquil', 'the-house-calm', 'the-house-sunshine', 'the-house-biome', 'the-house-flow']
  },
  {
    id: 'metabolic',
    discount: 0.12,
    tab: 'goal',
    icon: 'L.',
    name: 'The Metabolic Bundle',
    blurb: "Daily energy and metabolic support from the foundation up — Burn for clean morning energy (caffeine + L-theanine + L-tyrosine for focus, L-carnitine for cellular energy support); Greens for the 22-ingredient nutrient density most diets miss; Biome for the gut microbiome that drives a meaningful share of metabolic and absorption health; Multi for the daily absorption baseline. Energy that runs on food and clean stimulation, not aggressive stimulants.",
    slugs: ['the-house-burn', 'the-house-greens', 'the-house-biome', 'the-house-multi']
  }
];

// Helper to compute concern bundle pricing on demand
window.getConcernBundlePricing = function(bundleId) {
  const bundle = window.CONCERN_BUNDLES.find(b => b.id === bundleId);
  if (!bundle) return null;
  const products = bundle.slugs.map(s => window.getProductBySlug(s)).filter(Boolean);
  const fullPrice = products.reduce((sum, p) => sum + p.price, 0);
  const discountPct = typeof bundle.discount === 'number' ? bundle.discount : 0.07;
  const discountedPrice = fullPrice * (1 - discountPct);
  return {
    bundle,
    products,
    fullPrice,
    discountedPrice,
    savings: fullPrice - discountedPrice
  };
};

/**
 * CURATED BUNDLES — the named bundles featured on routines.html
 * Each has its own preset discount and slug list.
 * All can be subscribed to at the same bundle price (no additional 15% on top).
 */
window.CURATED_BUNDLES = [
  {
    id: 'ultimate',
    name: 'The Ultimate Routine',
    discount: 0.25,
    slugs: [
      // 7 AM skincare (in routine order: cleanse → tone → serums → moisturize → SPF)
      'the-house-wash','the-house-balance','the-house-boost','the-house-hyaluronic','the-house-defense','the-house-soft','the-house-shield',
      // 6 PM skincare (treatments first, then serums, eye, oil)
      'the-house-bounce','the-house-renewal','the-house-firm','the-house-hydration','the-house-eye','the-house-glow',
      // 9 morning/daily supplements (foundation → longevity)
      'the-house-multi','the-house-sunshine','the-house-flow','the-house-biome','the-house-calm',
      'the-house-nad-plus','the-house-vitality','the-house-synapse','the-house-restore',
      // 1 evening supplement
      'the-house-tranquil'
    ]
  },
  {
    id: 'daniels-daily',
    name: "Daniel's Daily Supplements",
    discount: 0.18,
    slugs: ['the-house-multi','the-house-sunshine','the-house-flow','the-house-biome','the-house-calm','the-house-nad-plus','the-house-vitality','the-house-synapse','the-house-restore','the-house-tranquil']
  },
  {
    id: 'daniels-skincare',
    name: "Daniel's Daily Skincare",
    discount: 0.18,
    blurb: "Every product in the skincare line. AM ritual through PM ritual through the weekly reset — the complete skincare house in a single routine.",
    slugs: [
      // AM (cleanse → tone → vitamin C → HA → defense → moisturizer → SPF)
      'the-house-wash','the-house-balance','the-house-boost','the-house-hyaluronic','the-house-defense','the-house-soft','the-house-shield',
      // Targeted treatments
      'the-house-clear','the-house-eye',
      // PM (peptide treatments → retinol → hydration → seal)
      'the-house-bounce','the-house-renewal','the-house-firm','the-house-hydration','the-house-glow',
      // Weekly reset
      'the-house-mask','the-house-polish'
    ]
  },
  {
    id: 'am',
    name: 'The AM Routine',
    discount: 0.15,
    slugs: ['the-house-wash','the-house-balance','the-house-boost','the-house-hyaluronic','the-house-defense','the-house-soft','the-house-shield']
  },
  {
    id: 'pm',
    name: 'The PM Routine',
    discount: 0.15,
    slugs: ['the-house-bounce','the-house-renewal','the-house-firm','the-house-hydration','the-house-eye','the-house-glow']
  },
  {
    id: 'workout',
    name: 'The Workout Routine',
    discount: 0.15,
    slugs: ['the-house-greens','the-house-burn','the-house-power','the-house-pump','the-house-restore']
  },
  {
    id: 'foundation',
    name: 'The Foundation Routine',
    discount: 0.15,
    slugs: ['the-house-multi','the-house-sunshine','the-house-flow','the-house-biome','the-house-calm']
  },
  {
    id: 'longevity',
    name: 'The Longevity Routine',
    discount: 0.15,
    slugs: ['the-house-nad-plus','the-house-vitality','the-house-synapse','the-house-restore','the-house-tranquil']
  },
  {
    id: 'moms',
    name: "The Mom's Routine",
    discount: 0.15,
    slugs: ['the-house-wash','the-house-defense','the-house-bounce','the-house-eye','the-house-soft','the-house-multi','the-house-collagen','the-house-nad-plus','the-house-vitality','the-house-tranquil']
  },
  {
    id: 'arianas',
    name: "The Ariana's Routine",
    discount: 0.15,
    slugs: ['the-house-wash','the-house-boost','the-house-defense','the-house-renewal','the-house-eye','the-house-soft','the-house-multi','the-house-radiance','the-house-collagen']
  }
];

window.getCuratedBundleById = function(id) {
  return window.CURATED_BUNDLES.find(b => b.id === id);
};
