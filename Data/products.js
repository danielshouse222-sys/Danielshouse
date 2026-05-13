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
    price: 26,
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
    price: 32,
    runtime: 2,
    image: 'images/balance.jpeg',
    tag: 'Exfoliate · Brighten · Clarify',
    tagline: 'The daily tri-acid pad that resets your skin.',
    description: 'Daily exfoliating treatment pads built around a tri-acid complex — salicylic, lactic, and mandelic — that sweeps away dead skin, refines pore appearance, and reveals a natural glow. Soothing herbal extracts keep redness in check, so the acids work without the sting. The replacement for a traditional toner: this step both preps and treats, in one pass. Use once daily as part of your AM or PM routine.',
    size: '60 pads',
    ingredients: [
      { name: 'Salicylic acid (BHA)', what: 'Oil-soluble exfoliant that penetrates into the pore to clear sebum and prevent congestion.' },
      { name: 'Lactic acid (AHA)', what: 'Gentle exfoliating acid that also acts as a humectant — exfoliates while preserving moisture.' },
      { name: 'Mandelic acid (AHA)', what: 'Larger-molecule AHA known for being especially gentle. Refines tone and texture without irritation.' },
      { name: 'Soothing herbal complex', what: 'Calming botanical extracts that keep redness in check while the acids work.' }
    ],
    howToUse: 'Once daily, after cleansing: Sweep one pad over the face and neck. Do not rinse. Allow to absorb for 30 seconds before applying serums. If using at night, do not pair with Bounce (retinol) on the same evening.',
    bestFor: ['daily-exfoliate', 'pore-clarity', 'uneven-tone', 'oily-skin', 'combination-skin'],
    studies: [
      { actor: 'Tri-Acid Exfoliation', finding: 'Combination AHA/BHA topical formulations demonstrate superior reduction in pore appearance and surface texture vs. single-acid controls in 12-week dermatological trials.', source: 'Journal of Cosmetic Dermatology, 2023' },
      { actor: 'Mandelic Acid for Sensitive Skin', finding: 'Mandelic acid produces comparable exfoliating effects to glycolic acid with significantly less reported irritation, making it the gentlest AHA option in clinical use.', source: 'Dermatologic Surgery, 2022' }
        ],
    faq: [
      { q: 'Will this dry out my skin?', a: 'No — the acids are at gentle daily-use concentrations, paired with soothing herbal extracts. Mandelic and lactic acids are also humectants, so they hold moisture as they exfoliate.' },
      { q: 'Can I use it every day?', a: 'Yes — these pads are designed for daily use at the concentrations they\'re formulated to. Start every other day if you\'re acid-sensitive, then move to daily after a week.' },
      { q: 'Can I use this with Bounce (retinol)?', a: 'Not on the same night. Alternate: Balance pad nights and Bounce nights. Stacking AHA + retinol together over-exfoliates and causes irritation.' },
      { q: 'AM or PM?', a: 'Either works. AM gives a brighter, smoother makeup base. PM resurfaces while you sleep. Pick one — daily, not both.' },
      { q: 'Can I skip my serum and just use this?', a: 'No — Balance is a prep step. Continue with your Defense, Hyaluronic, and Soft after.' }
        ],
    relatedSlugs: ['the-house-wash', 'the-house-boost', 'the-house-defense', 'the-house-bounce'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Smoother skin texture after the first swipe; subtle tingle that fades in 30 seconds.' },
      { week: 'Week 1', text: 'Visibly clearer pores; makeup sits flatter.' },
      { week: 'Week 4', text: 'More even tone, refined surface texture, fewer congested patches.' },
      { week: 'Week 8', text: 'Sustained clarity and luminosity. Skin tolerates other actives more cleanly.' }
        ],
    proTip: 'On Bounce nights, skip the pad entirely. Don\'t try to stack — your skin will tell you it was too much.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'I replaced my old witch-hazel toner with these and never looked back. Toners prep; these prep AND treat. Same step, double the work.'
  },
  {
    slug: 'the-house-boost',
    name: 'Boost',
    category: 'skincare',
    sub: 'am',
    step: 3,
    routine: 'AM',
    price: 34,
    runtime: 2,
    image: 'images/boost.jpeg',
    tag: 'Brighten · Antioxidant · Hydrate',
    tagline: 'Three-form vitamin C that doesn\'t sting.',
    description: 'A multi-form vitamin C serum that combines three stable derivatives — sodium ascorbyl phosphate, ascorbyl glucoside, and magnesium ascorbyl phosphate — working synergistically for sustained antioxidant defense and visible brightening, without the irritation profile of pure L-ascorbic acid. Hyaluronic acid hydrates as the actives work, so the formula never feels stripping. The morning vitamin C step for skin that needs to brighten without the sting.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'Sodium ascorbyl phosphate', what: 'Stable, water-soluble vitamin C derivative that converts to L-ascorbic acid in the skin. Brightens and supports collagen.' },
      { name: 'Ascorbyl glucoside', what: 'Slow-releasing vitamin C bound to a glucose carrier — provides longer-lasting antioxidant defense than free vitamin C.' },
      { name: 'Magnesium ascorbyl phosphate', what: 'The gentlest vitamin C derivative; ideal for sensitive or reactive skin while still delivering brightening benefits.' },
      { name: 'Sodium hyaluronate', what: 'Holds up to 1,000x its weight in water; locks in moisture as the vitamin C works.' }
    ],
    howToUse: 'Morning, after Balance: Apply 3-5 drops to clean skin. Press in gently with fingertips. Wait 30 seconds before next step. Always follow with SPF.',
    bestFor: ['brightening', 'antioxidant-defense', 'uneven-tone', 'sensitive-skin', 'all-skin-types'],
    studies: [
      { actor: 'Multi-Form Vitamin C', finding: 'Combining multiple stable vitamin C derivatives produces additive antioxidant effects with significantly reduced irritation potential vs. pure L-ascorbic acid in clinical comparison.', source: 'Journal of Cosmetic Dermatology, 2022' },
      { actor: 'Topical Vitamin C', finding: 'Topical Vitamin C demonstrates measurable improvements in skin brightness, tone evenness, and photo-damage protection across decades of clinical research.', source: 'Antioxidants journal, 2022 (PMC9495646)' }
    ],
    faq: [
      { q: 'Why three forms of vitamin C instead of one?', a: 'Different vitamin C derivatives release at different rates. Magnesium ascorbyl phosphate is gentlest, sodium ascorbyl phosphate is most stable, ascorbyl glucoside is slowest-release. Together they deliver brightening across the whole morning, not a single burst that fades by lunch.' },
      { q: 'Will it sting like pure vitamin C?', a: 'No — these stable derivatives don\'t carry the low pH that makes L-ascorbic acid sting. If you\'ve tried "real" vitamin C and hated the burn, this is the better category for you.' },
      { q: 'Can I use this with Defense?', a: 'Yes — Boost goes first, Defense (Vit C/B/E/Ferulic) layers after. Different vitamin C forms, complementary mechanisms. Most people use both daily.' },
      { q: 'How long until I see results?', a: 'Brightness shifts visible in 2-3 weeks. Full results compound over 8-12 weeks of consistent use.' },
      { q: 'Does this replace SPF?', a: 'Never. Vitamin C amplifies the effectiveness of SPF, but it does NOT block UV on its own. Always finish your morning routine with sunscreen.' }
        ],
    relatedSlugs: ['the-house-defense', 'the-house-hyaluronic', 'the-house-balance'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Subtle brightness; complexion looks clearer.' },
      { week: 'Week 4', text: 'More even pigment, dark spots beginning to fade.' },
      { week: 'Week 8', text: 'Visible glow; uneven tone significantly reduced.' },
      { week: 'Week 12+', text: 'Sustained brightness; new pigment slower to form.' }
        ],
    proTip: 'Apply on dry, freshly cleansed skin before the hydration step. Vitamin C derivatives absorb best on a clean surface.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Color-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Pure L-ascorbic acid is the gold standard but it stings, oxidizes fast, and isn\'t for everyone. This three-form approach gives you 80% of the result with none of the irritation — which means it\'s the one you\'ll actually keep using.'
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
    price: 58,
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
      { q: 'How is this different from Boost?', a: 'Boost uses three stable, gentle vitamin C derivatives. Defense uses pure L-ascorbic acid — the most potent and proven form — supercharged with ferulic acid, vitamin E, and B-vitamins. Boost is for sensitive skin. Defense is for results. Many people use both: Boost first, Defense second.' },
      { q: 'Will pure L-ascorbic acid sting?', a: 'It can the first few applications. Most people acclimate within a week. If stinging persists, alternate with Boost (the gentler vitamin C) until your skin builds tolerance.' },
      { q: 'How long until I see results?', a: 'Antioxidant protection starts the moment you apply it. Visible brightening: 4-6 weeks. Visible firmness and tone improvement: 8-12 weeks. Long-term photoprotection compounds over years.' },
      { q: 'Can I use this with retinol?', a: 'Yes — Defense in the morning, Bounce (retinol) at night. They work in different mechanisms and stacking them across the day gives you the best long-term anti-aging protocol.' },
      { q: 'Does this replace SPF?', a: 'Absolutely not. Defense amplifies SPF protection but does not block UV. Always finish your morning with sunscreen.' },
      { q: 'Is this safe during pregnancy?', a: 'Yes — Defense contains no retinoids, hydroquinone, or salicylic acid. Vitamin C, B-vitamins, vitamin E, ferulic acid, and hyaluronic acid are all routinely used during pregnancy. Confirm with your provider.' }
        ],
    relatedSlugs: ['the-house-boost', 'the-house-firm', 'the-house-bounce'],
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
    price: 32,
    runtime: 2,
    image: 'images/soft.jpeg',
    tag: 'Hydrate · Renew · Strengthen',
    tagline: 'The multi-action daily moisturizer.',
    description: 'A multi-tasking daily moisturizer that does more than hydrate. The formula combines hyaluronic acid and avocado oil for multi-layer hydration with copper ferment, niacinamide, and a gentle form of vitamin A (retinyl palmitate) for visible skin renewal and barrier strength — all without the irritation profile of stronger retinoids. The result: skin that looks radiant, feels comfortable, and stays resilient against everyday stressors. Use AM or PM, layered over your serums.',
    size: '1.7 fl oz / 50 ml',
    ingredients: [
      { name: 'Avocado oil', what: 'Rich in fatty acids, oleic acid, and vitamins A, D, and E. Softens and conditions while supporting the lipid barrier.' },
      { name: 'Sodium hyaluronate', what: 'Multi-layer hydration via humectant action — holds water in the upper layers of the skin throughout the day.' },
      { name: 'Copper ferment', what: 'Bioactive copper complex that supports collagen and elastin synthesis for visible firmness over time.' },
      { name: 'Niacinamide (Vitamin B3)', what: 'Multi-function vitamin B derivative that refines the appearance of blemishes, balances sebum, and softens visible signs of aging.' },
      { name: 'Retinyl palmitate', what: 'Gentle vitamin A ester. Supports skin renewal and tone evening without the irritation of stronger retinoids — ideal for AM use under SPF.' }
    ],
    howToUse: 'Morning and night, after serums: Apply a pea-sized amount to face and neck. Massage gently in upward motions. Allow 30 seconds before applying SPF (AM) or oil/Glow (PM).',
    bestFor: ['daily-moisture', 'barrier-support', 'normal-to-dry', 'sensitive-skin', 'anti-aging'],
    studies: [
      { actor: 'Niacinamide + Vitamin A', finding: 'Combination of niacinamide and a low-strength vitamin A derivative delivers measurable improvements in tone, texture, and pore appearance over 12 weeks with significantly less irritation than retinol monotherapy.', source: 'Journal of Clinical and Aesthetic Dermatology, 2023' },
      { actor: 'Copper-Containing Skincare', finding: 'Topical copper complexes demonstrate measurable effects on extracellular matrix proteins including collagen and elastin in dermatological research spanning two decades.', source: 'International Journal of Molecular Sciences, 2022' }
        ],
    faq: [
      { q: 'Does the retinyl palmitate count as a real retinol step?', a: 'No — retinyl palmitate is the gentlest vitamin A ester and is more about supporting skin renewal than driving visible anti-aging change. For real retinoid work, Bounce (encapsulated retinol) is the dedicated treatment step. Soft\'s vitamin A is a daily-use, low-irritation supportive dose.' },
      { q: 'Is this rich enough for dry skin?', a: 'For most skin types, yes — the avocado oil and copper ferment give it real richness. Very dry skin in winter may want to layer Glow on top.' },
      { q: 'Will it work under makeup?', a: 'Yes — give it 90 seconds to absorb before foundation. The avocado oil grounds the formula but it finishes clean.' },
      { q: 'AM or PM?', a: 'Both. Some people split: Hydration (gel-cream) in the AM for under-SPF, Soft (richer) in the PM. Both work either time.' },
      { q: 'Is the retinyl palmitate safe during pregnancy?', a: 'Retinyl palmitate is a gentler vitamin A derivative, but high-dose topical vitamin A in pregnancy is generally a confirm-with-your-provider question. For pregnancy, The House Hydration is the safer choice — vitamin A free.' }
        ],
    relatedSlugs: ['the-house-hyaluronic', 'the-house-hydration', 'the-house-eye'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Hydrated, comfortable, no greasy finish.' },
      { week: 'Week 2', text: 'Stronger barrier; less afternoon dryness.' },
      { week: 'Week 4', text: 'Smoother complexion; pore appearance refines.' },
      { week: 'Week 8', text: 'Visible firmness improvement; sustained barrier comfort even in dry climates.' }
        ],
    proTip: 'Wait 60 seconds after your serums before applying Soft. Lets the actives absorb fully before being sealed in.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Color-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'I wanted a daily moisturizer that did more than hydrate. The copper ferment plus low-dose vitamin A means this isn\'t just maintenance — it\'s slow, daily progress.'
  },
  {
    slug: 'the-house-shield',
    name: 'Shield',
    category: 'skincare',
    sub: 'am',
    step: 7,
    routine: 'AM',
    price: 38,
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
    runtime: 6,
    image: 'images/clear.jpeg',
    tag: 'Spot Treat · Calm · Clear',
    tagline: 'The overnight spot treatment.',
    description: 'A fast-acting overnight spot treatment that targets active breakouts and surface blemishes. The formula combines colloidal sulfur and salicylic acid (BHA) — the clinically proven duo for absorbing excess oil and accelerating the lifecycle of a spot — with zinc oxide to soothe redness and camphor for an astringent calming effect. Apply directly on the spot at night; wake up to a visibly flatter, calmer surface.',
    size: '0.65 fl oz / 19 ml',
    ingredients: [
      { name: 'Colloidal Sulfur', what: 'Time-honored acne active. Absorbs excess oil and impurities while creating an environment hostile to acne-causing bacteria.' },
      { name: 'Salicylic Acid (BHA)', what: 'Oil-soluble exfoliant that penetrates into the pore to clear sebum congestion and accelerate cellular turnover.' },
      { name: 'Zinc Oxide', what: 'Mineral that calms inflammation, reduces redness, and supports the skin\'s natural healing response.' },
      { name: 'Camphor', what: 'Antioxidant and astringent that brings balance to oily, congested skin while delivering a cooling sensation.' }
    ],
    howToUse: 'At night, on active spots only: Shake well. Dip a clean cotton swab into the bottle (do not double-dip — protects the formula from contamination). Dab directly onto the blemish. Do not spread to surrounding skin. Leave on overnight. Rinse off in the morning if visible residue remains. Use as-needed, not preventively.',
    bestFor: ['active-breakouts', 'spot-treatment', 'oily-skin', 'occasional-acne'],
    studies: [
      { actor: 'Colloidal Sulfur + BHA', finding: 'Combination sulfur and salicylic acid topical treatments demonstrate significant reduction in inflammatory acne lesion size and lifecycle, with measurable effects visible within 24-48 hours of application.', source: 'Journal of Drugs in Dermatology, 2023' },
      { actor: 'Topical Zinc Oxide for Acne', finding: 'Topical zinc oxide reduces inflammatory mediators and supports faster lesion resolution in acne-prone skin compared to vehicle controls.', source: 'Dermatologic Therapy, 2022' }
        ],
    faq: [
      { q: 'How often should I use this?', a: 'As-needed, on active spots only. Most people use it 2-4 nights when a breakout appears, then stop once the spot has flattened. Daily preventive use is not the intent.' },
      { q: 'Can I use it on multiple spots at once?', a: 'Yes — dab each spot individually with a clean swab. Do not spread across the surrounding skin or you\'ll over-dry healthy areas.' },
      { q: 'Will it scar or leave a mark?', a: 'No — this is non-scarring and actually accelerates the healing process. The pink/red mark that sometimes remains after a spot heals (post-inflammatory erythema) fades with daily Defense and SPF.' },
      { q: 'Can I layer this with my retinol?', a: 'On nights you use Bounce (retinol), spot-treat with Clear only on the lesion — keep the surrounding retinol application away from the dab area to prevent over-exfoliation in that spot.' },
      { q: 'What about cystic acne?', a: 'Clear helps with surface blemishes and inflamed whiteheads. True deep cystic acne usually needs prescription support — see a dermatologist if you\'re dealing with that pattern.' }
        ],
    relatedSlugs: ['the-house-mask', 'the-house-boost', 'the-house-renewal'],
    resultsTimeline: [
      { week: 'Hour 8', text: 'Spot is visibly flatter; redness reduced after one overnight application.' },
      { week: 'Day 2-3', text: 'Most active spots reach their healing phase faster than they would untreated.' },
      { week: 'Over time', text: 'When used consistently on flare-ups, accelerates the overall lifecycle of acne and reduces post-blemish marks.' }
        ],
    proTip: 'Spot only — do not spread. The formula is potent. Dabbing on healthy surrounding skin causes unnecessary dryness.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Sulfur was my grandmother\'s acne treatment and it\'s still the active ingredient in every spot treatment a derm will prescribe. The fact that it works at this price feels almost unfair.'
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
    price: 52,
    runtime: 2,
    image: 'images/bounce.jpeg',
    tag: 'Renew · Firm · Plump',
    tagline: 'The four-active overnight retinol serum.',
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
      { q: 'Can I use this if I\'m pregnant?', a: 'No — retinol is not recommended during pregnancy or breastfeeding. Use Soft (which contains gentler retinyl palmitate) or skip the retinol step entirely until after. The Eye cream (bakuchiol) is the pregnancy-safe retinol-alternative for the face.' },
      { q: 'How is this different from Renewal?', a: 'Renewal is a triple-acid AHA/BHA treatment cleanse (chemical exfoliation) — used 2-3 nights/week. Bounce is the retinol serum (cell-turnover and collagen) — used 3-4 nights/week. They\'re both treatment nights, but never on the same evening (over-exfoliation). Standard rotation: Bounce 3 nights, Renewal 2 nights, rest nights for the other 2.' },
      { q: 'Why 0.05% retinol — that seems low?', a: 'Honestly, 0.05% encapsulated retinol with peptides and Vit C is more effective than 0.5% retinol alone for most users. Higher percentages cause more irritation and the drop-out rate is huge — most people quit before they see results. Lower-percentage-but-tolerated beats higher-percentage-but-abandoned every time. After 6-12 months at this level your skin\'s tolerance builds and we can recommend stepping up to a higher % if you want.' }
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
    price: 48,
    runtime: 2,
    image: 'images/firm.jpeg',
    tag: 'Firm · Plump · Lift',
    tagline: 'The six-peptide firming complex.',
    description: 'A high-performance multi-peptide serum that supports collagen production and visible firmness from six different angles. The blend includes Argireline (Acetyl Hexapeptide-8) for expression-line softening, SNAP-8 (Acetyl Octapeptide-3) for longer-chain extension, Pentapeptide-18 (Leuphasyl) for surface relaxation, Syn-Ake (Dipeptide Diaminobutyroyl Benzylamide Diacetate) for smoothing, and Matrixyl-family peptides (Palmitoyl Tripeptide-1, Palmitoyl Tetrapeptide-7) for collagen signaling. Hyaluronic acid and seaweed extract enhance peptide delivery while delivering an instant plumping effect.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'Acetyl Hexapeptide-8 (Argireline)', what: 'The most-studied anti-wrinkle peptide. Targets expression-line formation by softening muscular tension cues — particularly around the eyes and forehead.' },
      { name: 'Acetyl Octapeptide-3 (SNAP-8)', what: 'Longer-chain extension of Argireline\'s mechanism. Smooths the appearance of dynamic wrinkles.' },
      { name: 'Pentapeptide-18 (Leuphasyl)', what: 'Promotes the feeling of relaxed surface tension; works synergistically with Argireline.' },
      { name: 'Dipeptide Diaminobutyroyl Benzylamide Diacetate (Syn-Ake)', what: 'Synthetic peptide that mimics the surface-smoothing effect of waglerin-1; refines visible texture.' },
      { name: 'Palmitoyl Tripeptide-1 + Palmitoyl Tetrapeptide-7 (Matrixyl)', what: 'Matrixyl-family peptides that signal collagen synthesis in the dermal layer for long-term firmness.' },
      { name: 'Chondrus Crispus (Seaweed) Extract', what: 'Forms a lightweight protective film on the skin surface that locks in hydration and delivers minerals.' },
      { name: 'Sodium Hyaluronate', what: 'Multi-weight hyaluronic acid; plumps and hydrates while the peptides build long-term firmness.' }
    ],
    howToUse: 'Evening, after Defense (AM-overlap day) or Bounce (alternating with retinol nights): Apply 3-4 drops to face and neck, including the orbital bone area. Pat gently. Follow with eye cream and moisturizer.',
    bestFor: ['firming', 'anti-aging', 'expression-lines', 'fine-lines', 'all-skin-types'],
    studies: [
      { actor: 'Multi-Peptide Topical Formulas', finding: 'Combination peptide formulations containing Acetyl Hexapeptide-8, Matrixyl-family signaling peptides, and Pentapeptide-18 demonstrate additive effects on wrinkle depth and skin firmness over 8-12 weeks vs. single-peptide formulations.', source: 'International Journal of Cosmetic Science, 2022' },
      { actor: 'Argireline (Acetyl Hexapeptide-8)', finding: 'Daily topical Argireline at 5-10% concentration demonstrates measurable reduction in expression-line depth around the eyes and forehead in 4-8 week clinical studies.', source: 'Journal of Cosmetic Science, peptide research' }
        ],
    faq: [
      { q: 'Are these peptides as effective as retinol?', a: 'They work via different mechanisms — peptides signal collagen production and relax expression cues; retinol accelerates cell turnover. Both have decades of evidence. The strongest anti-aging protocols use them together (Bounce on retinol nights, Firm on alternate nights, both as part of a long-term stack).' },
      { q: 'Can I use this around my eyes?', a: 'Yes — Firm is safe around the orbital bone, but not directly on the eyelid or waterline. Many users skip eye cream and use Firm under-eye as well.' },
      { q: 'Pregnant-safe?', a: 'Yes — Firm contains no retinoids, salicylic acid, or hydroquinone. Peptides are routinely used during pregnancy. Confirm with your provider.' },
      { q: 'Do I need to use this every day?', a: 'Peptides build up best with consistent use — 5-7 nights a week. Daily is fine; this isn\'t an exfoliating active, so it won\'t overload your barrier.' },
      { q: 'When should I expect to see results?', a: 'Surface smoothing from Argireline and Syn-Ake can appear in 2-4 weeks. Collagen-signaling effects from the Matrixyl peptides build over 8-12 weeks with daily nightly use.' }
        ],
    relatedSlugs: ['the-house-eye', 'the-house-bounce', 'the-house-defense'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Surface plumping from hyaluronic acid + seaweed; skin looks fresher.' },
      { week: 'Week 4', text: 'Fine lines around eyes and forehead look softer.' },
      { week: 'Week 8', text: 'Visible firmness around jawline and cheek area; expression lines less etched.' },
      { week: 'Week 12+', text: 'Sustained elasticity; long-term collagen signaling translates into visible structural improvement.' }
        ],
    proTip: 'Apply with your ring finger around the eye area — it\'s the weakest finger and applies the gentlest pressure for the thin skin under your eyes.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Color-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Six peptides feels like overkill until you understand each one is doing a different job. Argireline relaxes expression. Matrixyl signals collagen. Syn-Ake smooths the surface. They\'re not redundant — they\'re a team.'
  },
  {
    slug: 'the-house-hydration',
    name: 'Hydration',
    category: 'skincare',
    sub: 'pm',
    step: 2,
    routine: 'PM',
    price: 38,
    runtime: 2,
    image: 'images/hydration.jpeg',
    tag: 'Hydrate · Refresh · Defend',
    tagline: 'Cloud-light hydration powered by arctic botanicals.',
    description: 'A featherweight gel-cream that delivers cooling, long-lasting hydration without weight. Powered by snow algae (an extremophile that signals longevity pathways), cloudberry (an antioxidant-rich arctic berry), and a sugar-derived moisture complex that boosts the skin\'s natural moisturizing factor. Caffeine adds antioxidant freshness and a gentle de-puffing effect. The matte finish layers cleanly under SPF and makeup — making this the better moisturizer for oily/combination skin, humid climates, or anyone who finds Soft too rich.',
    size: '1.7 fl oz / 50 ml',
    ingredients: [
      { name: 'Snow Algae (Coenochloris signiensis)', what: 'An extremophile algae that survives extreme cold by activating longevity-associated cellular pathways. Topically, it signals similar resilience-supporting responses in skin cells.' },
      { name: 'Cloudberry (Rubus chamaemorus) Fruit Extract', what: 'An arctic berry rich in vitamins A, C, and E plus omega-3 and omega-6 fatty acids. Defends against environmental stressors.' },
      { name: 'Sugar Technology (Xylitylglucoside, Anhydroxylitol, Xylitol)', what: 'Plant-derived sugars that boost the skin\'s natural moisturizing factor (NMF) — the same hydration system the skin produces on its own.' },
      { name: 'Caffeine', what: 'Antioxidant that refreshes, brightens, and supports microcirculation. Adds a subtle de-puffing effect.' },
      { name: 'Aloe Barbadensis Leaf Juice', what: 'Calms and soothes reactive or sensitized skin.' }
    ],
    howToUse: 'Morning and/or night, after serums: Apply a pea-sized amount to face and neck. The texture is gel-cream — it absorbs in seconds without residue. Layer SPF on top for AM use.',
    bestFor: ['oily-skin', 'combination-skin', 'humid-climates', 'daily-hydration', 'retinol-companion'],
    studies: [
      { actor: 'Snow Algae Extract', finding: 'Topical snow algae extract demonstrates upregulation of longevity-associated cellular pathways in skin cells and significantly improves visible signs of aging in clinical studies.', source: 'International Journal of Cosmetic Science, 2022' },
      { actor: 'Plant-Sugar Moisturizing Complexes', finding: 'Topical formulations using xylitol-derived sugars (xylitylglucoside, anhydroxylitol) significantly boost the skin\'s natural moisturizing factor and improve hydration retention compared to glycerin-only controls.', source: 'Journal of Drugs in Dermatology, 2023' }
        ],
    faq: [
      { q: 'How is this different from Soft?', a: 'Soft is a richer multi-action cream with copper ferment and retinyl palmitate. Hydration is lighter — a gel-cream texture built for oily/combination skin or humid climates. Pick based on your skin and your weather: rich-and-active = Soft, light-and-cool = Hydration.' },
      { q: 'Can I use this with retinol?', a: 'Yes — Hydration is one of the best moisturizers to pair with Bounce nights. The gel-cream texture layers cleanly over retinol without smothering it, and the snow algae adds resilience-supporting protection.' },
      { q: 'Is the fragrance a problem for sensitive skin?', a: 'The formula contains a light fragrance for a fresh, cool botanical scent. If you\'re very fragrance-sensitive, Soft is the unscented choice. Most users tolerate Hydration\'s fragrance well, but spot-test if you\'re reactive.' },
      { q: 'Will it pill under makeup?', a: 'No — give it 60 seconds. The gel-cream texture absorbs quickly and creates a smooth canvas for foundation or SPF.' },
      { q: 'Pregnant-safe?', a: 'Yes — Hydration contains no retinoids, salicylic acid, or hydroquinone. It\'s actually the safer moisturizer choice during pregnancy vs. Soft (which has retinyl palmitate).' }
        ],
    relatedSlugs: ['the-house-soft', 'the-house-hyaluronic', 'the-house-eye'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Plumper, dewier, refreshingly cool skin.' },
      { week: 'Week 1', text: 'Lasting hydration into the afternoon without midday top-ups.' },
      { week: 'Week 4', text: 'Improved retinol tolerance; less flaking during retinization.' },
      { week: 'Week 8', text: 'Skin holds hydration deep into the next morning; visibly less environmental reactivity.' }
        ],
    proTip: 'Keep this in the fridge during summer for an extra cooling effect. The gel-cream texture amplifies when chilled.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'For South Florida summers, Hydration is what I reach for. Lighter than Soft, cooler on application, doesn\'t pill under SPF. The snow algae story sold me — but the texture is what kept me using it.'
  },
  {
    slug: 'the-house-eye',
    name: 'Eye',
    category: 'skincare',
    sub: 'pm',
    step: 4,
    routine: 'PM',
    price: 42,
    runtime: 3,
    image: 'images/eye.jpeg',
    tag: 'Brighten · Firm · De-puff',
    tagline: 'Bakuchiol + a triple-peptide complex for the under-eye.',
    description: 'A multi-targeted eye cream that combines hyaluronic acid, squalane, and vitamin E for deep hydration with a triple-peptide complex (Argireline, SNAP-8, Syn-Ake) for visible firming. The star ingredient is bakuchiol — a plant-derived retinol alternative that delivers retinol\'s renewing benefits to the thin, sensitive under-eye area without the irritation profile. Cucumber extract reduces visible puffiness. Apply morning and night around the orbital bone.',
    size: '0.5 oz / 15 ml',
    ingredients: [
      { name: 'Bakuchiol', what: 'A plant-derived compound from the babchi seed that delivers retinol-like renewal benefits without the sensitizing effects. Especially well-tolerated on the thin under-eye skin.' },
      { name: 'Acetyl Hexapeptide-8 (Argireline)', what: 'Targets expression-line formation around the eyes, softening the appearance of crow\'s feet.' },
      { name: 'Acetyl Octapeptide-3 (SNAP-8)', what: 'Longer-chain peptide that extends Argireline\'s mechanism for sustained smoothing.' },
      { name: 'Dipeptide Diaminobutyroyl Benzylamide Diacetate (Syn-Ake)', what: 'Synthetic peptide that mimics waglerin-1; surface-smoothing effect on fine lines.' },
      { name: 'Cucumber Extract (Cucumis Sativus)', what: 'Calming antioxidant that depuffs and soothes visible irritation.' },
      { name: 'Squalane', what: 'Mimics the skin\'s natural lipid layer; absorbs cleanly without weight.' },
      { name: 'Sodium Hyaluronate', what: 'Holds water in the upper layers of the delicate eye area.' },
      { name: 'Tocopherol (Vitamin E)', what: 'Antioxidant that protects the thin under-eye skin from environmental damage.' }
    ],
    howToUse: 'Morning and night: Tap a rice-grain amount under each eye and along the orbital bone using your ring finger. Pat — never rub. Allow 30 seconds before applying makeup or other products.',
    bestFor: ['under-eye', 'dark-circles', 'fine-lines', 'crow\'s-feet', 'puffiness'],
    studies: [
      { actor: 'Bakuchiol vs. Retinol', finding: 'In a 12-week split-face clinical trial, topical bakuchiol demonstrated comparable improvements to retinol in wrinkle depth and pigmentation, with significantly less reported irritation and dryness — particularly relevant for the thin under-eye skin.', source: 'British Journal of Dermatology, 2019' },
      { actor: 'Multi-Peptide Eye Treatments', finding: 'Combination peptide formulas (Argireline + SNAP-8) demonstrate measurable reduction in periorbital wrinkle depth and expression-line appearance over 8-12 weeks of consistent daily application.', source: 'Journal of Cosmetic Dermatology, 2022' }
        ],
    faq: [
      { q: 'How much should I use?', a: 'A rice-grain amount per eye is plenty. Eye creams are concentrated.' },
      { q: 'Why bakuchiol instead of real retinol?', a: 'The under-eye skin is the thinnest on your face — about half the thickness of cheek skin. Most people can\'t tolerate real retinol there. Bakuchiol delivers the renewing effects via a different mechanism without the sensitivity. For the rest of your face, Bounce (true retinol) is the dedicated treatment.' },
      { q: 'Will this fix dark circles caused by genetics?', a: 'Honestly, no — true genetic dark circles are pigmentation and shadow that no eye cream resolves alone. This will reduce vascular puffiness and surface dullness. For deep hereditary dark circles, results require dermatology procedures, not topicals.' },
      { q: 'Is this pregnancy-safe?', a: 'Yes — bakuchiol is the popular vitamin-A-alternative specifically because it\'s pregnancy-safe. No retinoids, no salicylic acid. Confirm with your provider.' },
      { q: 'Will it work under concealer?', a: 'Yes — wait 30 seconds for full absorption before applying makeup.' }
        ],
    relatedSlugs: ['the-house-firm', 'the-house-bounce', 'the-house-defense'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Less morning puffiness; brighter under-eye.' },
      { week: 'Week 4', text: 'Dark circles look lighter; under-eye texture smoother.' },
      { week: 'Week 8', text: 'Fine lines softened; bakuchiol renewal effects visible.' },
      { week: 'Week 12+', text: 'Sustained brightness; visible elasticity improvement around the eye area.' }
        ],
    proTip: 'Tap, never rub. The under-eye is the thinnest skin on your face — friction creates more damage than product fixes.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Color-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Bakuchiol is the closest thing to retinol that doesn\'t feel like retinol — which is exactly what the under-eye needs. The peptide layer on top is the bonus.'
  },
  {
    slug: 'the-house-renewal',
    name: 'Renewal',
    category: 'skincare',
    sub: 'pm',
    step: 5,
    routine: 'PM',
    price: 44,
    runtime: 2,
    image: 'images/renewal.jpeg',
    tag: 'Resurface · Clarify · Renew',
    tagline: 'The triple-acid treatment cleanse.',
    description: 'A treatment-grade cleanser/exfoliator built around a triple-acid blend — glycolic, lactic, and salicylic — that deeply removes dead skin buildup, unclogs pores, and reveals smoother, more radiant skin. The lotion-based formula stays put long enough for the acids to work, then rinses clean without stripping moisture. Used 2-3 nights a week as a cleanse, or left on for 3-5 minutes as a clarifying mask, this is the night when your skin gets its real reset.',
    size: '4 fl oz / 120 ml',
    ingredients: [
      { name: 'Glycolic Acid', what: 'The smallest AHA molecule, water-soluble, penetrates deepest. Refines texture, brightens, and minimizes the appearance of fine lines and discoloration.' },
      { name: 'Lactic Acid', what: 'A gentler AHA that also acts as a humectant — exfoliates while preserving the skin\'s natural moisture levels.' },
      { name: 'Salicylic Acid (BHA)', what: 'Oil-soluble exfoliant that penetrates into the pore. Clears congestion, reduces blackheads, and smooths the surface.' },
      { name: 'Camphor', what: 'Antioxidant astringent that brings balance to oily, congested complexions.' }
    ],
    howToUse: '2-3 nights per week, after a regular cleanse: Apply to damp skin, massage gently for 60 seconds, rinse with cool water. For extra resurfacing, leave on for an additional 3-5 minutes as a mask before rinsing. Do not use on the same night as Bounce (retinol) or Balance (peeling pads). Always use SPF the next morning.',
    bestFor: ['resurfacing', 'pore-clarity', 'uneven-texture', 'dullness', 'congested-skin'],
    studies: [
      { actor: 'Combination AHA/BHA Treatments', finding: 'Topical combination AHA/BHA formulations demonstrate significantly greater improvements in surface texture, pore appearance, and tone uniformity vs. single-acid controls over 8-week dermatological trials.', source: 'Journal of Cosmetic Dermatology, 2023' },
      { actor: 'Glycolic Acid AHA', finding: 'Topical glycolic acid demonstrates significant improvements in skin texture, tone uniformity, and fine line reduction across multiple clinical reviews spanning two decades.', source: 'Journal of the American Academy of Dermatology' }
        ],
    faq: [
      { q: 'Can I use Renewal and Bounce on the same night?', a: 'No — alternate nights. Stacking retinol and AHAs over-exfoliates and compromises the barrier. Standard rotation: Bounce 3 nights/week, Renewal 2 nights/week, rest nights for the other 2 evenings.' },
      { q: 'Can I use this every night?', a: 'No — 2-3 nights per week is the right cadence for most skin types. The triple-acid blend is potent. Daily use causes over-exfoliation, redness, and a thinned barrier.' },
      { q: 'Will it sting?', a: 'A mild tingle is normal during the 60-second massage. Active burning is not — rinse immediately and reduce frequency if that happens.' },
      { q: 'Can I leave it on longer than 60 seconds?', a: 'Yes — up to 3-5 minutes as a clarifying mask treatment. Don\'t exceed 5 minutes; that\'s the point of diminishing returns and increasing irritation.' },
      { q: 'Pregnant-safe?', a: 'Not recommended — Renewal contains salicylic acid and glycolic acid in treatment-level concentrations. The House Wash + Balance (gentle daily exfoliation only) are the safer choices during pregnancy.' }
        ],
    relatedSlugs: ['the-house-bounce', 'the-house-balance', 'the-house-polish'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Visibly smoother surface immediately after rinsing.' },
      { week: 'Week 2', text: 'Brighter, more refined tone; less congestion.' },
      { week: 'Week 4', text: 'Smoother texture; spots and uneven tone fade.' },
      { week: 'Week 8+', text: 'Even surface; pore appearance refined; sustained luminosity.' }
        ],
    proTip: 'Use this on the 2 nights per week you\'re NOT using Bounce. Alternating gives each one room to work without overloading your skin.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'A triple-acid cleanse is the kind of product I only use a few nights a week — but the mornings after are some of my best skin days. The trick is rotation. Don\'t try to do this every night.'
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
    tagline: 'The lipid replenishment seal.',
    description: 'A replenishing veil of lipids that seals in moisture and restores the skin\'s natural lipid barrier. Built around squalane (a plant-derived equivalent of the skin\'s own oil) and glycosphingolipids (ceramide-family lipids), the formula glides on like silk and locks in every product beneath it. The lipid blend is engineered for maximum spreadability and minimum residue — a couple of drops covers the whole face. Skin feels nourished, supple, and resilient — its natural balance restored. Use as the final step in the PM routine.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'Squalane', what: 'Plant-derived (typically olive) compound that mimics the skin\'s own natural oil. Has a tiny molecular structure that allows it to penetrate skin and absorb cleanly without residue.' },
      { name: 'Glycosphingolipids', what: 'Ceramide-family lipids that reinforce the skin\'s natural barrier and slow the evaporation of moisture (TEWL).' },
      { name: 'Lecithin', what: 'Phospholipid that supports the delivery of lipids into the upper layers of the skin.' },
      { name: 'Caprylyl Glycol', what: 'Multifunctional skin conditioner that adds softness and stability to the formula.' }
    ],
    howToUse: 'PM only, as the very last step of your routine: Warm 2-3 drops between your palms. Press onto face and neck. Do not rub — press only. The formula spreads further than expected, so start with less than you think.',
    bestFor: ['barrier-repair', 'overnight-seal', 'dryness', 'all-skin-types'],
    studies: [
      { actor: 'Squalane for Barrier Repair', finding: 'Plant-derived squalane mimics the composition of natural sebum and demonstrates measurable restoration of skin barrier function in compromised skin within 14 days of daily application.', source: 'Lipids in Health and Disease, 2023' },
      { actor: 'Ceramide-Family Lipids', finding: 'Topical glycosphingolipids and related ceramide-family lipids significantly reduce transepidermal water loss and improve barrier function in clinical studies of compromised skin.', source: 'Journal of Lipid Research, 2022' }
        ],
    faq: [
      { q: 'How is this different from a traditional face oil?', a: 'Traditional face oils are plant-oil blends (rose hip, jojoba, argan). Glow is a lipid-replenishment formula using squalane and ceramide-family lipids — the molecules your skin already produces. The result: deeper absorption, less residue, no greasy finish. Different category than the old plant-oil approach.' },
      { q: 'Will it leave a greasy finish?', a: 'No — that\'s the whole point of the formulation. The silicone-based delivery system carries the lipids deep into the upper layers and absorbs in seconds. Most users describe it as silky, not oily.' },
      { q: 'I avoid silicones — is this for me?', a: 'Honest answer: this formula uses cosmetic silicones (cyclopentasiloxane, dimethicone, dimethiconol) as the delivery system. They\'re inert and safe but if you specifically avoid silicones, the old plant-oil approach is a better fit and we recommend looking elsewhere.' },
      { q: 'Can I use it under makeup?', a: 'Not recommended — Glow is built as the PM seal. Using it under foundation can interfere with makeup adhesion.' },
      { q: 'Will it break me out?', a: 'For most skin types, no — squalane is non-comedogenic and the silicones used are not pore-clogging. Acne-prone skin should patch-test first.' }
        ],
    relatedSlugs: ['the-house-soft', 'the-house-hydration', 'the-house-eye'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Immediately softer, suppler skin; sealed-in moisture overnight.' },
      { week: 'Week 1', text: 'Strengthened barrier; less afternoon tightness; previous-night actives held longer.' },
      { week: 'Week 4', text: 'Improved barrier baseline; less environmental reactivity; visible smoothing.' },
      { week: 'Week 8', text: 'Skin holds a natural glow without highlighter; smoother texture day-to-day.' }
        ],
    proTip: 'Press in last, after everything else is absorbed. The lipid seal traps the entire routine beneath it — it\'s the close, not a layer.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Color-Free', 'Cruelty-Free', 'Vegan', 'Made in USA', 'Third-Party Tested'],
    daniels_note: 'Squalane plus ceramide-family lipids is what the skin actually wants — versions of the molecules it makes itself. The result feels almost weightless. I press 2 drops in last every night.'
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
    price: 30,
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
    price: 28,
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
    price: 32.90,
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
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA', 'Third-Party Tested'],
    daniels_note: 'I tried fancy multivitamins for years before realizing 90% don\'t dose to clinical levels. This one does. It\'s the foundation of every stack I run.'
  },
  {
    slug: 'the-house-calm',
    name: 'Calm',
    category: 'supplement',
    sub: 'foundation',
    price: 26.90,
    runtime: 2,
    image: 'products/Calm.jpeg',
    tag: 'Relaxation · Muscle · Nerve',
    tagline: 'Sleep deeper. Stress less.',
    description: '275mg of well-absorbed magnesium glycinate per serving — the form your nervous system can actually use without the laxative side effects. Take in the evening for deeper sleep, less muscle tension, and a calmer baseline.',
    size: '90 capsules · 45 servings',
    ingredients: [
      { name: 'Magnesium glycinate', dose: '275 mg', what: 'Chelated form bound to glycine for superior absorption and zero laxative effect. The form your nervous system can actually use.' },
      { name: 'Magnesium malate', dose: '55 mg', what: 'Paired form that supports cellular ATP production; gentle on digestion and complements the glycinate for sustained release.' },
      { name: 'Glycine (free amino acid)', dose: '—', what: 'Calming neurotransmitter naturally bound to the magnesium chelate. Independent evidence supports its own role in sleep quality.' },
      { name: 'Vegetable cellulose capsule', dose: '—', what: 'Plant-based capsule shell — no gelatin, no animal products.' },
      { name: 'No magnesium oxide', dose: '—', what: 'Excluded by design. Oxide is 4% absorbed and causes the laxative effect cheap magnesiums are known for.' }
    ],
    howToUse: 'Take 2 capsules in the evening, 30-60 minutes before bed. For higher needs, can take 1 capsule in morning and 1 at night. Best paired with consistent sleep schedule.',
    bestFor: ['sleep', 'stress-relief', 'muscle-relaxation', 'evening-routine'],
    studies: [
      { actor: 'Magnesium Glycinate vs Stress', finding: 'Systematic review of 18 studies in Nutrients found magnesium supplementation produces small-to-moderate beneficial effects on subjective anxiety and stress, with chelated forms (glycinate, citrate) outperforming oxide.', source: 'Nutrients, 2017 (Boyle, Lawton, Dye)' },
      { actor: 'Magnesium + Sleep Architecture', finding: 'Double-blind RCT of 46 elderly insomniacs found 500mg magnesium daily for 8 weeks significantly improved subjective insomnia scores, sleep efficiency, sleep onset latency, and serum melatonin vs. placebo.', source: 'Journal of Research in Medical Sciences, 2012 (Abbasi et al.)' },
      { actor: 'Bioavailability Comparison', finding: 'Comparative pharmacokinetic study showed chelated and citrate magnesium absorb significantly more than oxide — the mechanistic basis for choosing glycinate over inexpensive oxide preparations.', source: 'Magnesium Research, 2003 (Walker et al.)' }
    ],
    faq: [
      { q: 'How long until I notice effects?', a: 'Sleep quality usually improves within the first week. Full benefits compound over 4-6 weeks.' },
      { q: 'Can I take this with sleep medication?', a: 'Consult your doctor — magnesium is generally complementary, but combinations should be reviewed.' },
      { q: 'Is this the same as ZMA?', a: 'No — ZMA contains zinc and B6 plus magnesium. Calm is just magnesium glycinate + glycine for clean evening use.' },
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
    daniels_note: 'Best magnesium for actual sleep. Glycinate form, 275mg, no laxative effect. Take 30 minutes before bed — I sleep deeper within the first week.'
  },
  {
    slug: 'the-house-sunshine',
    name: 'Sunshine',
    category: 'supplement',
    sub: 'foundation',
    price: 19.90,
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
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA', 'Third-Party Tested'],
    daniels_note: 'Most adults are deficient in Vitamin D. I got tested before and after — supplementing closed the gap entirely. 2000 IU is the right dose for most people.'
  },
  {
    slug: 'the-house-flow',
    name: 'Flow',
    category: 'supplement',
    sub: 'foundation',
    price: 24.90,
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
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA', 'Third-Party Tested'],
    daniels_note: 'Omega-3 is the supplement I\'d never stop taking. Heart, brain, skin. Two softgels with breakfast, every day for the last four years.'
  },
  {
    slug: 'the-house-biome',
    name: 'Biome',
    category: 'supplement',
    sub: 'foundation',
    price: 30.90,
    runtime: 2,
    image: 'products/Biome.jpeg',
    tag: 'Digestive · Metabolic · Immune',
    tagline: 'Balance starts within.',
    description: 'Four-strain probiotic blend at 40 billion CFU with MAKTREK® Bi-Pass technology to survive stomach acid. Targeted for digestion, immune balance, and the gut-brain axis — for the gut you almost forgot about until it spoke up.',
    size: '60 capsules · 60 servings',
    ingredients: [
      { name: 'Lactobacillus acidophilus', dose: '15 billion CFU', what: 'Most-studied probiotic strain; supports digestion and immunity.' },
      { name: 'Bifidobacterium lactis', dose: '10 billion CFU', what: 'Supports immune function and bowel regularity.' },
      { name: 'Lactobacillus plantarum', dose: '10 billion CFU', what: 'Supports gut barrier integrity.' },
      { name: 'Lactobacillus rhamnosus', dose: '5 billion CFU', what: 'Mood/gut-brain axis support.' },
      { name: 'MAKTREK® Bi-Pass technology', dose: '—', what: 'Delayed-release coating; ensures probiotics survive stomach acid.' }
    ],
    howToUse: 'Take 1 capsule daily, ideally on an empty stomach (morning works well). No refrigeration required due to MAKTREK technology.',
    bestFor: ['digestion', 'gut-health', 'immunity', 'foundational-health'],
    studies: [
      { actor: 'ISAPP Probiotic Consensus', finding: 'Authoritative consensus document defining probiotics as \'live microorganisms that, when administered in adequate amounts, confer a health benefit on the host\' — establishes the evidence threshold for clinical probiotic claims still used today.', source: 'Nature Reviews Gastroenterology & Hepatology, 2014 (Hill et al.)' },
      { actor: 'Strain-Specific Clinical Benefits', finding: 'Comprehensive review of 1,000+ trials established that specific strains (L. rhamnosus GG, B. lactis BB-12, L. acidophilus NCFM) demonstrate measurable clinical benefits for digestive symptoms, immune function, and antibiotic-associated diarrhea.', source: 'Nature Reviews Gastroenterology & Hepatology, 2019 (Sanders et al.)' },
      { actor: 'Probiotic + Gut-Brain Axis', finding: 'Systematic review of 10 RCTs covering 1,349 participants found multi-strain probiotic supplementation produced significant improvements in subjective stress, anxiety, and mood measures — supporting the gut-brain axis hypothesis.', source: 'Journal of Affective Disorders, 2020 (Liu et al.)' }
    ],
    faq: [
      { q: 'Do I need to refrigerate it?', a: 'No — MAKTREK technology and shelf-stable strains eliminate refrigeration need.' },
      { q: 'How long until I feel a difference?', a: 'Digestive improvements typically appear in 2-4 weeks. Mood/energy benefits compound over 8+ weeks.' },
      { q: 'Can I take it with antibiotics?', a: 'Yes — but space at least 2 hours apart. Probiotics during/after antibiotics are especially valuable.' },
      { q: 'Do I need to refrigerate it?', a: 'No — the MAKTREK Bi-Pass technology and shelf-stable formulation maintain potency at room temperature through expiration. Refrigeration is fine but unnecessary.' },
      { q: 'Can I take it with antibiotics?', a: 'Yes, but space them apart — take the probiotic 2+ hours away from your antibiotic dose. Continue the probiotic for at least 2 weeks after finishing antibiotics to help restore gut diversity.' }
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
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA', 'Third-Party Tested'],
    daniels_note: 'My energy at 40 wasn\'t what it was at 30. Started this six months in — the difference is real. Not magic, but real. Cellular-level support.'
  },
  {
    slug: 'the-house-vitality',
    name: 'Vitality',
    category: 'supplement',
    sub: 'longevity',
    price: 28.90,
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
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA', 'Third-Party Tested'],
    daniels_note: '200mg of CoQ10 is the dose that matters. I take it with breakfast — fat-soluble, so it needs the meal. A game-changer for sustained energy.'
  },
  {
    slug: 'the-house-synapse',
    name: 'Synapse',
    category: 'supplement',
    sub: 'longevity',
    price: 34.90,
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
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA', 'Third-Party Tested'],
    daniels_note: 'Lion\'s Mane is the cognitive supplement I\'d recommend to anyone over 35. The 10-mushroom blend covers more bases than just Lion\'s alone.'
  },
  {
    slug: 'the-house-tranquil',
    name: 'Tranquil',
    category: 'supplement',
    sub: 'longevity',
    price: 29.50,
    runtime: 1,
    image: 'products/Tranquil.jpeg',
    tag: 'Relaxation · Vitality · Balance',
    tagline: 'Stress resilience meets hormonal balance.',
    description: 'KSM-66® ashwagandha stacked with maca, ginseng, shatavari, and L-arginine — for stress that won\'t quit and energy that lasts. The most-studied adaptogen in modern wellness, properly dosed in the gold-standard form.',
    size: '60 capsules · 30 servings',
    ingredients: [
      { name: 'KSM-66® Ashwagandha', dose: '600 mg', what: 'Most-studied standardized ashwagandha extract; reduces cortisol; adaptogen.' },
      { name: 'Maca root', dose: '300 mg', what: 'Energy, hormonal balance, libido support.' },
      { name: 'Korean ginseng', dose: '200 mg', what: 'Adaptogen; supports energy and stress resilience.' },
      { name: 'Shatavari', dose: '200 mg', what: 'Hormonal balance; especially supportive for female health.' },
      { name: 'L-arginine', dose: '100 mg', what: 'Amino acid; nitric oxide; circulation support.' }
    ],
    howToUse: 'Take 2 capsules daily, ideally with breakfast. Some users prefer one in the morning and one in evening for sustained adaptogenic support.',
    bestFor: ['stress-relief', 'hormonal-balance', 'energy', 'adaptogenic-support'],
    studies: [
      { actor: 'Foundational KSM-66 Trial', finding: '60-day double-blind placebo-controlled RCT — KSM-66 ashwagandha reduced serum cortisol by 27.9% and produced significant improvement on perceived stress scale and depression-anxiety-stress scale measurements.', source: 'Indian Journal of Psychological Medicine, 2012 (Chandrasekhar, Kapoor, Anishetty)' },
      { actor: 'Ashwagandha + Sleep Quality', finding: 'RCT in 60 adults — 240mg ashwagandha extract daily reduced morning cortisol, improved sleep onset latency, and improved subjective sleep quality over 60 days vs. placebo.', source: 'Medicine, 2019 (Lopresti et al.)' },
      { actor: 'Adaptogenic Dose-Response', finding: '8-week RCT in 60 healthy adults — both 250mg and 600mg/day KSM-66 significantly reduced morning cortisol and stress scores in dose-dependent fashion. Demonstrates flexibility in dosing for individual response.', source: 'Cureus, 2019 (Salve et al.)' }
    ],
    faq: [
      { q: 'How long until I feel less stressed?', a: 'Most users report measurable stress reduction in 2-4 weeks. Full benefits compound over 8-12 weeks.' },
      { q: 'Will it make me sleepy?', a: 'No — Tranquil reduces stress without sedation. Use Calm in the evening for sleep.' },
      { q: 'Is it safe long-term?', a: 'Generally yes — KSM-66 has been studied for years. Discuss with doctor if pregnant, nursing, or on thyroid medication.' },
      { q: 'Will it make me drowsy?', a: 'No — ashwagandha is adaptogenic, not sedative. It supports the body\'s stress response without causing daytime fatigue. Most users report calmer alertness, not sleepiness.' },
      { q: 'When should I take it?', a: 'Morning or split AM/PM both work well. Some find it helps with sleep when taken in the evening (KSM-66 has sleep-supportive data). Find the timing that works for your schedule.' }
    ],
    relatedSlugs: ['the-house-calm', 'the-house-greens', 'the-house-multi'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Lower stress response to daily friction.' },
      { week: 'Week 4', text: 'Cortisol drops measurably; better sleep onset.' },
      { week: 'Week 8+', text: 'Stress resilience baseline; sharper under pressure.' },
      { week: 'Week 4', text: 'Cortisol responses to daily stressors visibly calmer; sleep quality improves.' },
      { week: 'Week 12+', text: 'Sustained stress resilience and hormonal balance — the adaptogenic baseline.' }
    ],
    proTip: '2 capsules in the evening to start; build to 3 if needed during high-stress weeks. Doesn\'t sedate — won\'t make you foggy.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA', 'Third-Party Tested'],
    daniels_note: 'KSM-66 ashwagandha is the most-studied form. I take it during high-stress weeks — cortisol drops, focus stays. It doesn\'t sedate.'
  },
  {
    slug: 'the-house-restore',
    name: 'Restore',
    category: 'supplement',
    sub: 'longevity',
    price: 25.90,
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
    relatedSlugs: ['the-house-flow', 'the-house-seal', 'the-house-multi'],
    resultsTimeline: [
      { week: 'Week 4', text: 'Joint comfort; less morning stiffness.' },
      { week: 'Week 8', text: 'Better mobility; reduced inflammation markers.' },
      { week: 'Week 12+', text: 'Sustained joint health; the compounded benefit.' },
      { week: 'Week 4', text: 'Joint comfort noticeably improved; morning stiffness reduces; recovery between training sessions accelerates.' },
      { week: 'Week 12+', text: 'Sustained anti-inflammatory baseline — joint health, recovery, and metabolic markers.' }
    ],
    proTip: 'Take with food, twice daily. Effects compound over 8-12 weeks — quitting at week 6 will hide the real benefit.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA', 'Third-Party Tested'],
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
    price: 33.90,
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
    relatedSlugs: ['the-house-pump', 'the-house-seal', 'the-house-greens'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Lift performance increases; better volume.' },
      { week: 'Week 4', text: 'Muscle volume visible.' },
      { week: 'Week 8+', text: 'New strength baseline; sustained gains.' },
      { week: 'Week 1', text: 'Slight intramuscular fullness — the saturation phase begins.' },
      { week: 'Week 12+', text: 'Sustained strength, power, and recovery baseline — the most validated supplement in sports nutrition.' }
    ],
    proTip: '5g daily, any time of day. Loading phases are unnecessary — just be consistent. Muscle saturates over 3-4 weeks regardless.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA', 'Third-Party Tested'],
    daniels_note: 'Five grams of creatine, daily, for the rest of my life. Most-studied performance supplement on the shelf, period.'
  },
  {
    slug: 'the-house-pump',
    name: 'Pump',
    category: 'supplement',
    sub: 'workout',
    price: 39.99,
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
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA', 'Third-Party Tested'],
    daniels_note: 'Pre-workout without the stimulants. Citrulline plus arginine at clinical doses. The smoother training session you didn\'t know you needed.'
  },
  {
    slug: 'the-house-seal',
    name: 'Seal',
    category: 'supplement',
    sub: 'workout',
    price: 29.90,
    runtime: 1,
    image: 'products/Seal.jpeg',
    tag: 'Recovery · Gut Integrity · Immune',
    tagline: 'Gut repair meets muscle recovery.',
    description: '3.15g of pure L-glutamine per scoop for gut lining support and post-training repair. Stir into water, get on with it. The recovery supplement that does double duty — gut health and muscle repair in one daily scoop.',
    size: '100g powder · 30 servings',
    ingredients: [
      { name: 'L-Glutamine (free-form)', dose: '3.15 g', what: 'Pharmaceutical-grade free-form amino acid; the most abundant amino acid in the human body and primary fuel for the cells lining the gut.' },
      { name: 'Micronized for solubility', dose: '—', what: 'Particle-size optimized to dissolve clean in water without grit. No flavors, no fillers — drinks neutral.' },
      { name: 'Unflavored profile', dose: '—', what: 'Stacks cleanly into water, protein shakes, or post-workout drinks without altering taste.' },
      { name: 'cGMP-manufactured', dose: '—', what: 'Made in a cGMP-certified facility with third-party testing for purity, dose accuracy, and absence of contaminants.' }
    ],
    howToUse: 'Mix 1 scoop into water or post-workout shake. Best taken post-training and/or first thing in the morning on empty stomach. Unflavored — adds no taste to your shake.',
    bestFor: ['recovery', 'gut-health', 'immunity', 'workout-recovery'],
    studies: [
      { actor: 'Glutamine + Gut Barrier Function', finding: 'Comprehensive review establishing glutamine as primary fuel for enterocytes (gut lining cells) — supplementation maintains intestinal barrier integrity during periods of physiologic stress, illness, or intense training.', source: 'Current Opinion in Clinical Nutrition and Metabolic Care, 2006 (Wischmeyer)' },
      { actor: 'Glutamine + Immune Function', finding: 'Comprehensive review establishing glutamine as conditionally essential during periods of physical stress, illness, or trauma — supplementation benefits documented for gut barrier, immune cell function, and muscle recovery.', source: 'Nutrients, 2018 (Cruzat et al.)' },
      { actor: 'Glutamine + Exercise Recovery', finding: 'Studies in endurance athletes showed plasma glutamine drops 20-30% after prolonged exercise; supplementation reduced upper respiratory tract infections in marathon runners by approximately 50%.', source: 'Nutrition, 2002 (Castell)' }
    ],
    faq: [
      { q: 'Does this taste like anything?', a: 'No — completely unflavored, dissolves cleanly in water.' },
      { q: 'When should I take it?', a: 'Post-workout works for muscle recovery; morning empty stomach is best for gut health.' },
      { q: 'Is this the same as BCAAs?', a: 'No — glutamine is a single amino acid focused on recovery and gut. BCAAs are different (leucine, isoleucine, valine).' },
      { q: 'When should I take it?', a: 'Post-workout is ideal — your plasma glutamine drops 20-30% after intense training. Pre-bed also works well for overnight recovery. Daily consistency matters more than exact timing.' },
      { q: 'Will I taste it?', a: 'It\'s nearly tasteless — slightly sweet on the tongue but neutral in solution. Mixes cleanly into water, protein shakes, or BCAA drinks without altering flavor.' }
    ],
    relatedSlugs: ['the-house-power', 'the-house-biome', 'the-house-greens'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Faster gut recovery; less post-workout soreness.' },
      { week: 'Week 2', text: 'Better digestive resilience.' },
      { week: 'Week 4+', text: 'New digestive baseline; sustained recovery benefit.' },
      { week: 'Week 2', text: 'Recovery between training sessions noticeably faster; less DOMS.' },
      { week: 'Week 12+', text: 'Sustained gut integrity and recovery baseline — particularly noticeable in high-training-volume athletes.' }
    ],
    proTip: 'Pre-bed or post-workout. Glutamine doesn\'t compete with food — take it whenever fits your routine.',
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA', 'Third-Party Tested'],
    daniels_note: 'Glutamine for gut and recovery. Tasteless. Mix it with anything. The recovery aid I take whether I trained that day or not.'
  },
  {
    slug: 'the-house-greens',
    name: 'Greens',
    category: 'supplement',
    sub: 'workout',
    price: 35.90,
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
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA', 'Third-Party Tested'],
    daniels_note: 'On the days I don\'t eat my vegetables, Greens does the heavy lifting. 22 ingredients, one scoop, tastes like green apple.'
  },
  {
    slug: 'the-house-burn',
    name: 'Burn',
    category: 'supplement',
    sub: 'workout',
    price: 33.90,
    runtime: 1,
    image: 'products/Burn.jpeg',
    tag: 'Mood · Focus · Metabolism · Cardio',
    tagline: 'Heat up the engine.',
    description: 'Thermogenic complex stacked with mood, focus, and cardiovascular support — for the days you need to dial up metabolism without sacrificing mental clarity. Caffeine + green tea + L-tyrosine for sustained, clean energy.',
    size: '90 capsules · 30 servings',
    ingredients: [
      { name: 'Caffeine anhydrous', dose: '200 mg', what: 'Stimulant; energy, focus, metabolic boost.' },
      { name: 'Green tea extract (EGCG)', dose: '300 mg', what: 'Thermogenic; antioxidant; sustained energy.' },
      { name: 'L-tyrosine', dose: '500 mg', what: 'Amino acid; supports focus and dopamine.' },
      { name: 'L-carnitine', dose: '500 mg', what: 'Supports fatty acid metabolism.' },
      { name: 'Cayenne extract', dose: '50 mg', what: 'Thermogenic; mild metabolic activation.' }
    ],
    howToUse: 'Take 3 capsules in the morning or 30 minutes before workout. Do not exceed recommended dose. Avoid taking after 2 PM to prevent sleep disruption.',
    bestFor: ['energy', 'metabolism', 'focus', 'workout-performance'],
    studies: [
      { actor: 'Green Tea Catechin Meta-Analysis', finding: 'Meta-analysis of 11 studies covering 1,500+ participants — green tea catechins with caffeine produced significant modest weight loss and improved weight maintenance vs. placebo over 12-week regimens.', source: 'International Journal of Obesity, 2009 (Hursel et al.)' },
      { actor: 'Thermogenic Energy Expenditure', finding: 'Foundational metabolic study — green tea extract with caffeine increased 24-hour energy expenditure by 4% and fat oxidation by 17% beyond the effect of caffeine alone.', source: 'American Journal of Clinical Nutrition, 1999 (Dulloo et al.)' },
      { actor: 'Caffeine Tolerance + Thermogenesis', finding: 'Established that thermogenic effects of green tea + caffeine remain present even in habitual caffeine consumers — countering the assumption that tolerance eliminates the effect.', source: 'Obesity Research, 2005 (Westerterp-Plantenga et al.)' }
    ],
    faq: [
      { q: 'Will this make me jittery?', a: 'L-tyrosine and L-carnitine smooth out the caffeine for cleaner focus. Most users find this the smoothest thermogenic.' },
      { q: 'Can I take it with coffee?', a: 'Yes, but reduce coffee by half on Burn days to avoid over-caffeination.' },
      { q: 'Is this safe long-term?', a: 'Yes for healthy adults. Pause use after 8-12 weeks to maintain caffeine sensitivity.' },
      { q: 'Will it make me jittery?', a: 'The caffeine dose is moderate (similar to one cup of coffee). L-theanine in the green tea naturally smooths caffeine\'s edge — less jitter than coffee at the same caffeine dose for most users.' },
      { q: 'Should I take it pre-workout?', a: 'Yes — that\'s a primary use case. Take 30-45 minutes before cardio or training for the thermogenic and energy boost. Avoid taking within 6 hours of bed.' }
    ],
    relatedSlugs: ['the-house-pump', 'the-house-greens', 'the-house-focus'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Clean energy lift; appetite balanced.' },
      { week: 'Week 2', text: 'More predictable hunger patterns.' },
      { week: 'Week 4+', text: 'Thermogenic baseline; sustained metabolic support.' },
      { week: 'Week 1', text: 'Pre-workout energy and focus noticeably improved; cardio output increases.' },
      { week: 'Week 8+', text: 'Sustained metabolic support when paired with consistent training and nutrition.' }
    ],
    proTip: 'First thing AM, ideally on empty stomach. Take 2-3 hours before bed at the latest — caffeine half-life is real.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', 'Third-Party Tested', 'No Artificial Colors', 'Made in NA', 'Sugar-Free'],
    daniels_note: 'When I want a thermogenic without the jitters. Caffeine plus EGCG plus tyrosine — clean energy that lasts the morning.'
  },
  // ═══════════════════════════════════════════════════════════
  // SUPPLEMENTS — BEAUTY + FOCUS (3)
  // ═══════════════════════════════════════════════════════════
  {
    slug: 'the-house-radiance',
    name: 'Radiance',
    category: 'supplement',
    sub: 'beauty',
    price: 34.90,
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
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA', 'Third-Party Tested'],
    daniels_note: 'Beauty from within is real. My nails are stronger, my hair grew faster. Marine collagen plus vitamins, taken every morning.'
  },
  {
    slug: 'the-house-collagen',
    name: 'Collagen',
    category: 'supplement',
    sub: 'beauty',
    price: 33.90,
    runtime: 1,
    image: 'products/Collagen.jpeg',
    tag: 'Skin · Hair · Nails · Joints',
    tagline: 'Firm skin, strong joints, daily.',
    description: '10g of grass-fed bovine hide collagen peptides per scoop, types I & III. Unflavored, dissolves clean in coffee, cooking, anything. The beauty-and-mobility supplement that supports skin firmness and joint health from the inside.',
    size: '300g powder · 30 servings',
    ingredients: [
      { name: 'Bovine collagen peptides (Types I & III)', dose: '10 g', what: 'Hydrolyzed peptides from grass-fed bovine hide; the two collagen types that make up 90% of human skin, joints, hair, and nails.' },
      { name: 'Average molecular weight 2-5 kDa', dose: '—', what: 'Optimized peptide size for digestive absorption — small enough to absorb intact, large enough to remain bioactive.' },
      { name: 'Unflavored profile', dose: '—', what: 'Neutral taste; dissolves clean in hot or cold liquids. Drink in coffee, soup, smoothies, or water without altering flavor.' },
      { name: 'Pasture-raised, grass-fed source', dose: '—', what: 'Sourced from grass-fed bovine hide — no growth hormones, no antibiotics. Third-party verified for purity.' }
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
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Dairy-Free', 'Sugar-Free', 'Soy-Free', 'Third-Party Tested', 'Made in NA'],
    daniels_note: 'Ten grams in my morning coffee. Tasteless. Skin firmness, joint cushion. The supplement I\'d recommend to anyone over 35.'
  },
  {
    slug: 'the-house-focus',
    name: 'Focus',
    category: 'supplement',
    sub: 'beauty',
    price: 29.90,
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
    freeFrom: ['Gluten-Free', 'Non-GMO', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA', 'Third-Party Tested'],
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
    blurb: "Retinol and peptides where age shows, daily mineral SPF that protects every gain, plus collagen and NAD+ for the cellular side. Anti-aging from every direction, because skin doesn't age in isolation from the body.",
    slugs: ['the-house-bounce', 'the-house-firm', 'the-house-shield', 'the-house-eye', 'the-house-collagen', 'the-house-nad-plus', 'the-house-radiance']
  },
  {
    id: 'acne',
    discount: 0.12,
    tab: 'skin',
    icon: 'B.',
    name: 'The Clear-Skin Bundle',
    blurb: 'Colloidal sulfur and salicylic acid where blemishes flare, the zinc and sulfur clay mask weekly, plus probiotics and omega-3s for the gut-skin axis behind chronic breakouts. The full inside-out clear-skin protocol.',
    slugs: ['the-house-clear', 'the-house-mask', 'the-house-boost', 'the-house-biome', 'the-house-flow']
  },
  {
    id: 'dryness',
    discount: 0.1,
    tab: 'skin',
    icon: 'C.',
    name: 'The Hydration Bundle',
    blurb: "Multi-weight hyaluronic and ceramide moisturizers for surface hydration, paired with omega-3s that support the lipid barrier holding water in skin. Hydration that doesn't quit by mid-afternoon.",
    slugs: ['the-house-hyaluronic', 'the-house-hydration', 'the-house-soft', 'the-house-flow']
  },
  {
    id: 'dullness',
    discount: 0.1,
    tab: 'skin',
    icon: 'D.',
    name: 'The Brightening Bundle',
    blurb: 'Topical vitamin C and gentle resurfacing acids paired with the beauty vitamins that compound the result from within. The inside-out approach to measurable luminosity in 6-8 weeks.',
    slugs: ['the-house-boost', 'the-house-defense', 'the-house-renewal', 'the-house-radiance']
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
    blurb: "Physical polish, triple-acid resurfacing, and the weekly zinc-and-sulfur clay mask for visible smoothness, plus niacinamide and the probiotic that addresses the gut-skin axis behind pore appearance and surface bumps. Texture refinement, inside and out — without the acne-heavy actives.",
    slugs: ['the-house-polish', 'the-house-renewal', 'the-house-mask', 'the-house-boost', 'the-house-biome']
  },
  {
    id: 'glow',
    discount: 0.15,
    tab: 'skin',
    icon: 'G.',
    name: 'The Glow Bundle',
    blurb: "The inside-out glow protocol. Topical vitamin C and the five-vitamin CE Ferulic antioxidant shield for the surface, the weekly clay mask that primes everything, the squalane-and-ceramide lipid seal at night — paired with the daily beauty vitamins and 10g of collagen that build glow from within. Visible luminosity in 6-8 weeks.",
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
    blurb: "Cellular energy from the foundation (multivitamin, CoQ10, vitamin D) layered with the metabolic kick of Burn and the cognitive edge of Focus — plus the topical vitamin C that keeps tired skin from showing it. Energy that lasts through the day, mentally and visibly.",
    slugs: ['the-house-multi', 'the-house-vitality', 'the-house-sunshine', 'the-house-burn', 'the-house-focus', 'the-house-boost']
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
    blurb: "Cellular longevity — NAD+, CoQ10, curcumin — paired with retinol and peptides where aging shows. The biggest evidence-based bets in anti-aging, daily.",
    slugs: ['the-house-nad-plus', 'the-house-vitality', 'the-house-restore', 'the-house-bounce', 'the-house-firm']
  },
  {
    id: 'gut',
    discount: 0.1,
    tab: 'goal',
    icon: 'H.',
    name: 'The Gut Bundle',
    blurb: "Gut-foundation supplements that downstream improve nearly everything else, plus the niacinamide serum for when the gut-skin axis shows up on your face. The foundation makes everything else work better.",
    slugs: ['the-house-biome', 'the-house-seal', 'the-house-greens', 'the-house-boost']
  },
  {
    id: 'joints',
    discount: 0.1,
    tab: 'goal',
    icon: 'I.',
    name: 'The Joint Bundle',
    blurb: "The joint-comfort protocol — curcumin, omega-3, collagen — plus the squalane-and-ceramide lipid seal that pairs internally and topically for whole-body inflammation resolution and barrier resilience.",
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
    blurb: "Cycle-aware support across the month — KSM-66 ashwagandha for hormonal-balance modulation, magnesium glycinate for PMS-week tension and sleep, vitamin D for mood through the luteal dip, the gut probiotic that the cycle-skin axis runs on, and omega-3 for the inflammation side. The protocol for women whose energy, skin, and mood track the month.",
    slugs: ['the-house-tranquil', 'the-house-calm', 'the-house-sunshine', 'the-house-biome', 'the-house-flow']
  },
  {
    id: 'metabolic',
    discount: 0.12,
    tab: 'goal',
    icon: 'L.',
    name: 'The Metabolic Bundle',
    blurb: "Metabolic support from the foundation up — Burn for the L-carnitine, green tea, and B-vitamin metabolic and pre-task lift; Greens for the 22-ingredient nutrient density most diets miss; Biome for the gut microbiome that drives a meaningful share of metabolism; Multi for the absorption baseline. Energy and metabolism that runs on food, not just stimulation.",
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
    slugs: ['the-house-greens','the-house-burn','the-house-power','the-house-pump','the-house-seal']
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
