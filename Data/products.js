/**
 * Daniel's House — Product Data
 * Single source of truth for all 33 products.
 * Used by product.html, shop.html, search, related products, etc.
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
    image: 'images/wash.jpeg',
    tag: 'Cleanse · Hydrate · Barrier Defense',
    tagline: 'The daily cleanser that doesn\'t punish.',
    description: 'A gentle, hydrating cleanser that lifts oil and dirt without disrupting your moisture barrier. Built around hydrolyzed kale, carrot, and lemon proteins for a clean finish that doesn\'t leave skin tight or stripped. Use morning and night to start every routine on the right foundation.',
    size: '4 fl oz / 120 ml',
    ingredients: [
      { name: 'Hydrolyzed kale protein', what: 'Antioxidant-rich green vegetable protein that supports the moisture barrier while gently lifting impurities.' },
      { name: 'Hydrolyzed carrot protein', what: 'Beta-carotene–rich protein that helps brighten skin tone with daily use.' },
      { name: 'Hydrolyzed lemon protein', what: 'Vitamin C–containing citrus protein that supports clarity and freshness.' },
      { name: 'Aloe leaf juice', what: 'Soothes and hydrates while cleansing — calms reactive skin.' },
      { name: 'Glycerin', what: 'Humectant that pulls water into the skin to prevent post-cleanse dryness.' },
      { name: 'Coconut-derived surfactants', what: 'Plant-based cleansing agents that lift oil without sulfates.' }
    ],
    howToUse: 'Morning and night: Apply a quarter-sized amount to damp skin. Massage gently in circular motions for 30 seconds. Rinse with lukewarm water. Pat dry with a clean towel — do not rub.',
    bestFor: ['daily-cleanse', 'sensitive-skin', 'normal-to-dry'],
    studies: [
      { actor: 'Plant Protein Cleansers', finding: 'Hydrolyzed plant proteins demonstrate significant moisture-barrier support compared to traditional sulfate-based surfactants in clinical comparison studies.', source: 'Journal of Cosmetic Dermatology, 2022' }
    ],
    faq: [
      { q: 'Will this strip my skin?', a: 'No — this is a non-stripping cleanser built specifically to maintain the moisture barrier while lifting daily buildup.' },
      { q: 'Can I use it twice a day?', a: 'Yes. It\'s designed for morning and evening use as the foundational first step of both routines.' },
      { q: 'Is this safe for sensitive skin?', a: 'Yes — the formula is sulfate-free and includes calming aloe. Spot-test on the inner forearm if you have very reactive skin.' }
    ],
    relatedSlugs: ['the-house-balance', 'the-house-soft', 'the-house-polish'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Clean skin without tightness or stripping.' },
      { week: 'Week 1', text: 'Barrier feels balanced; skin tolerates makeup and SPF better.' },
      { week: 'Week 4', text: 'Improved tolerance to active serums; less reactive skin.' }
    ],
    proTip: 'Use lukewarm water, never hot. Hot water strips your barrier and triggers oil rebound.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: 'I tried high-tech cleansers for years. The truth is the best cleanser is the gentlest one you\'ll actually use. This one\'s been in my routine for two years.'
  },
  {
    slug: 'the-house-balance',
    name: 'Balance',
    category: 'skincare',
    sub: 'am',
    step: 2,
    routine: 'AM',
    price: 24,
    image: 'images/balance.jpeg',
    tag: 'Tone · Refresh · Calm',
    tagline: 'The reset between cleanser and serum.',
    description: 'A mild toning elixir built around witch hazel, aloe, white tea, and cucumber. Balances and preps the skin without stripping — the soft handoff between cleansing and treating. Not a five-alarm astringent. Just a calm reset.',
    size: '4 fl oz / 120 ml',
    ingredients: [
      { name: 'Witch hazel extract', what: 'Naturally derived astringent that balances oil without harshness.' },
      { name: 'Aloe leaf juice', what: 'Calms, soothes, and adds light hydration.' },
      { name: 'White tea extract', what: 'Antioxidant-rich; supports the skin\'s defense against environmental damage.' },
      { name: 'Cucumber extract', what: 'Soothing and lightly hydrating; helps reduce visible redness.' },
      { name: 'Glycerin', what: 'Humectant that locks in hydration after cleansing.' }
    ],
    howToUse: 'Morning and night, after cleansing: Spritz directly onto the face from 6 inches away, or apply with a cotton round. Allow to absorb for 20 seconds before applying serums.',
    bestFor: ['daily-tone', 'oily-skin', 'combination-skin', 'sensitive-skin'],
    studies: [
      { actor: 'Witch Hazel + Aloe', finding: 'Combination of witch hazel and aloe demonstrates measurable reduction in skin redness and barrier irritation in dermatological studies.', source: 'Phytotherapy Research, 2021' }
    ],
    faq: [
      { q: 'Will this dry out my skin?', a: 'No — unlike traditional astringent toners, this formula uses witch hazel at low concentration paired with hydrating aloe and glycerin.' },
      { q: 'Is alcohol in this?', a: 'No — this is alcohol-free.' },
      { q: 'Can I skip this step?', a: 'Yes if you\'re short on time — but using it improves serum absorption noticeably.' }
    ],
    relatedSlugs: ['the-house-wash', 'the-house-boost', 'the-house-hydration'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Refreshed, prepped skin.' },
      { week: 'Week 1', text: 'Serums absorb noticeably better.' },
      { week: 'Week 4', text: 'More even tone, smaller-looking pores.' }
    ],
    proTip: 'Spritz onto damp skin straight after cleansing — the moisture helps your serums penetrate deeper.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: 'Most toners either over-correct or do nothing. This one preps the skin without stripping it — and serums absorb noticeably better afterward.'
  },
  {
    slug: 'the-house-boost',
    name: 'Boost',
    category: 'skincare',
    sub: 'am',
    step: 3,
    routine: 'AM',
    price: 34,
    image: 'images/boost.jpeg',
    tag: 'Brighten · Even Tone · Refine',
    tagline: 'The triple-vitamin serum that earns its spot.',
    description: 'Vitamin C, niacinamide (B3), and panthenol (B5) work together to brighten dull skin, even tone, and strengthen the moisture barrier. Lightweight, fast-absorbing, and ready to layer under any moisturizer or sunscreen. Daily morning use is where the visible results compound.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'Sodium ascorbyl phosphate (Vitamin C)', what: 'Stable form of Vitamin C that brightens, supports collagen, and reduces dark spots.' },
      { name: 'Niacinamide (Vitamin B3, 5%)', what: 'Refines pore appearance, evens skin tone, strengthens barrier.' },
      { name: 'Panthenol (Vitamin B5)', what: 'Supports skin healing and provides deep hydration.' },
      { name: 'Hyaluronic acid', what: 'Holds 1000x its weight in water; plumps and hydrates.' },
      { name: 'Aloe leaf juice', what: 'Soothing base that prevents niacinamide flushing.' }
    ],
    howToUse: 'Morning, after toning: Apply 3-4 drops to clean, dry skin. Pat gently across face and neck. Wait 60 seconds before applying moisturizer or sunscreen. AM use only — does not replace SPF.',
    bestFor: ['brightening', 'uneven-tone', 'dullness', 'pore-refinement'],
    studies: [
      { actor: 'Niacinamide + HA', finding: 'In a 2024 study of 44 women, daily niacinamide + hyaluronic acid serum significantly reduced wrinkle depth and improved skin elasticity in 8 weeks.', source: 'Nature Scientific Reports, 2024' },
      { actor: 'Vitamin C', finding: 'Topical Vitamin C demonstrates measurable improvements in skin brightness, tone evenness, and photo-damage protection across decades of clinical research.', source: 'Antioxidants journal, 2022 (PMC9495646)' }
    ],
    faq: [
      { q: 'Can I use this with retinol?', a: 'Yes — use this in the morning, retinol at night. They work together over time.' },
      { q: 'Will the niacinamide cause flushing?', a: 'Unlikely at 5%. Some sensitive skin may experience temporary mild flushing in the first week as skin adjusts.' },
      { q: 'How long until I see results?', a: 'Brightness shifts can be visible in 2-3 weeks. Full results compound over 8-12 weeks of consistent use.' }
    ],
    relatedSlugs: ['the-house-defense', 'the-house-hyaluronic', 'the-house-renewal'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Subtle brightness; complexion looks clearer.' },
      { week: 'Week 4', text: 'More even pigment, dark spots beginning to fade.' },
      { week: 'Week 8', text: 'Visible glow; uneven tone significantly reduced.' },
      { week: 'Week 12+', text: 'Sustained brightness; new pigment slower to form.' }
    ],
    proTip: 'Apply on dry, freshly cleansed skin before Hyaluronic. Vitamin C absorbs best at low pH.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: 'Five percent niacinamide is the sweet spot — enough to work, not enough to irritate. Plus stable Vitamin C. The serum I\'d recommend to anyone starting a real routine.'
  },
  {
    slug: 'the-house-hyaluronic',
    name: 'Hyaluronic',
    category: 'skincare',
    sub: 'am',
    step: 4,
    routine: 'AM',
    price: 28,
    image: 'images/hyaluronic.jpeg',
    tag: 'Hydrate · Plump · Smooth',
    tagline: 'Pure, layerable hydration.',
    description: 'Multi-weight hyaluronic acid pulls moisture into deeper skin layers; glycerin keeps it there. Six ingredients total — no fragrance, no fillers, no fluff. The hydration anchor of any routine. Use morning and night under your moisturizer or anywhere skin feels tight.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'Sodium hyaluronate (low MW)', what: 'Penetrates deeper layers for long-term hydration and plumping.' },
      { name: 'Sodium hyaluronate (high MW)', what: 'Sits on the surface to lock in moisture; immediate plumping effect.' },
      { name: 'Glycerin', what: 'Humectant that pulls water into the skin and holds it there.' },
      { name: 'Panthenol (B5)', what: 'Supports barrier repair and adds slip.' },
      { name: 'Aloe leaf juice', what: 'Calming hydration base.' },
      { name: 'Allantoin', what: 'Soothes and supports cell turnover.' }
    ],
    howToUse: 'Morning and night, on damp skin: Apply 4-5 drops. Pat into face, neck, and décolletage while skin is still wet. Lock in immediately with moisturizer or face oil — never let HA dry on its own.',
    bestFor: ['hydration', 'dryness', 'plumping', 'all-skin-types'],
    studies: [
      { actor: 'Hyaluronic Acid', finding: 'Topical hyaluronic acid significantly improves skin hydration, elasticity, and reduces appearance of fine lines in clinical dermatoporosis research.', source: 'Sci Reports, 2024' }
    ],
    faq: [
      { q: 'Should I apply on dry or wet skin?', a: 'Damp skin. HA works by binding water — apply right after toner while skin is still moist, then seal with moisturizer.' },
      { q: 'Can it dehydrate my skin?', a: 'Only if applied to dry skin in dry environments. Always use on damp skin and follow with moisturizer.' },
      { q: 'Is this enough as a moisturizer?', a: 'No — HA is a humectant, not a moisturizer. You still need a cream or oil to seal it in.' }
    ],
    relatedSlugs: ['the-house-soft', 'the-house-hydration', 'the-house-glow'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Immediate plumpness and bounce.' },
      { week: 'Week 1', text: 'Lasting hydration; lines look softer by midday.' },
      { week: 'Week 4', text: 'New hydration baseline; skin holds moisture longer.' }
    ],
    proTip: 'Always apply on slightly damp skin. HA needs moisture to bind to — on dry skin it can actually pull moisture out.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: 'Six ingredients. Two molecular weights of HA. The hydration anchor I never travel without. Apply on damp skin or it doesn\'t work.'
  },
  {
    slug: 'the-house-defense',
    name: 'Defense',
    category: 'skincare',
    sub: 'am',
    step: 5,
    routine: 'AM',
    price: 38,
    image: 'images/defense.jpeg',
    tag: 'Antioxidant · Age-Defy · Brighten',
    tagline: 'The heavy hitter that does multiple jobs in one bottle.',
    description: 'Squalane, hydrolyzed soy protein, stable Vitamin C, and caffeine in one age-defying serum. Targets fine lines, dullness, environmental damage, and visible signs of aging — all before you leave the house. The morning serum that does the work of three.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'Squalane', what: 'Plant-derived oil that mimics skin\'s natural sebum; deeply moisturizing without greasiness.' },
      { name: 'Hydrolyzed soy protein', what: 'Supports collagen and elasticity; firms over time.' },
      { name: 'Tetrahexyldecyl ascorbate (Vitamin C)', what: 'Stable, oil-soluble Vitamin C that brightens and protects against environmental damage.' },
      { name: 'Caffeine', what: 'Reduces puffiness, brightens, supports microcirculation.' },
      { name: 'Niacinamide', what: 'Reinforces the barrier and refines pores.' },
      { name: 'Vitamin E', what: 'Antioxidant that stabilizes Vitamin C and protects from oxidation.' }
    ],
    howToUse: 'Morning, after Boost or Hyaluronic: Apply 3-4 drops to face and neck. Allow 60 seconds to absorb. Follow with moisturizer and SPF. AM use only.',
    bestFor: ['anti-aging', 'environmental-defense', 'fine-lines', 'dullness'],
    studies: [
      { actor: 'Vitamin C + E', finding: 'Combination Vitamin C + E topical demonstrates synergistic antioxidant protection against UV-induced photoaging in clinical research spanning two decades.', source: 'Antioxidants, 2022' }
    ],
    faq: [
      { q: 'Can I use this with retinol?', a: 'Yes — Defense in the morning, retinol-containing products at night.' },
      { q: 'Will it pill under sunscreen?', a: 'No — wait 60 seconds for full absorption before applying SPF.' },
      { q: 'Is this safe during pregnancy?', a: 'Yes — Defense contains no retinoids, salicylic acid, or hydroquinone.' }
    ],
    relatedSlugs: ['the-house-boost', 'the-house-firm', 'the-house-renewal'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Skin feels protected, less reactive to environment.' },
      { week: 'Week 4', text: 'Reduced environmental sensitivity, fewer red days.' },
      { week: 'Week 8', text: 'More even tone; under-eye circles look lighter.' },
      { week: 'Week 12+', text: 'Long-term protection compounds; visible resilience.' }
    ],
    proTip: 'Apply before SPF every morning. The antioxidant layer amplifies your sunscreen\'s protection.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: 'On busy mornings I pare my routine down to two products: Boost and Defense. Squalane plus caffeine plus stable C — that\'s the layer that handles the day.'
  },
  {
    slug: 'the-house-soft',
    name: 'Soft',
    category: 'skincare',
    sub: 'am',
    step: 6,
    routine: 'AM',
    price: 32,
    image: 'images/soft.jpeg',
    tag: 'Hydrate · Soothe · Soften',
    tagline: 'The daily moisturizer that doesn\'t make you choose.',
    description: 'Multi-weight hyaluronic acid, calming aloe, and a silky non-greasy finish. The daily moisturizer that hydrates without heaviness, soothes without sedation, and finishes clean enough to layer makeup or sunscreen on top. Built for daily, year-round use.',
    size: '1.7 fl oz / 50 ml',
    ingredients: [
      { name: 'Multi-weight hyaluronic acid', what: 'Hydrates at multiple skin layers — surface plumping plus deep moisture.' },
      { name: 'Aloe leaf juice', what: 'Calms and soothes reactive or sensitized skin.' },
      { name: 'Squalane', what: 'Plant-based emollient; replenishes the lipid barrier.' },
      { name: 'Niacinamide', what: 'Refines pores, evens tone with daily use.' },
      { name: 'Glycerin', what: 'Humectant that holds water in the skin.' },
      { name: 'Panthenol', what: 'Soothes and supports the moisture barrier.' }
    ],
    howToUse: 'Morning and night, after serums: Massage a pea-sized amount across face and neck in upward motions. Allow 30 seconds before applying SPF (AM) or sleeping (PM).',
    bestFor: ['daily-moisture', 'normal-skin', 'combination-skin', 'sensitive-skin'],
    studies: [
      { actor: 'Daily Moisture Barrier', finding: 'Consistent daily use of hyaluronic acid + ceramide moisturizers significantly improves skin hydration metrics and barrier function in clinical settings.', source: 'Journal of Drugs in Dermatology, 2023' }
    ],
    faq: [
      { q: 'Is this rich enough for dry skin?', a: 'For most skin types, yes. Very dry skin may want to layer The House Glow oil on top in winter.' },
      { q: 'Can I use this if I have oily skin?', a: 'Yes — but consider The House Clear if you\'re acne-prone or have heavy oil production.' },
      { q: 'Will it work under makeup?', a: 'Yes — non-greasy finish is designed to be a clean canvas for makeup or SPF.' }
    ],
    relatedSlugs: ['the-house-clear', 'the-house-renewal', 'the-house-hyaluronic'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Hydrated, comfortable, no greasy finish.' },
      { week: 'Week 2', text: 'Stronger barrier; less afternoon dryness.' },
      { week: 'Week 4', text: 'Smoother complexion; makeup sits better.' }
    ],
    proTip: 'Wait 60 seconds after your serums before applying Soft. Lets the actives absorb fully before being sealed in.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: 'If I had to pick one moisturizer for the rest of my life, this is it. Not too rich, not too thin. Disappears under SPF.'
  },
  // The House Clear — alternative AM moisturizer for oily/acne-prone
  {
    slug: 'the-house-clear',
    name: 'Clear',
    category: 'skincare',
    sub: 'am-alt',
    step: 6,
    routine: 'AM (alternative)',
    price: 32,
    image: 'images/clear.jpeg',
    tag: 'Balance Oil · Hydrate · Clear',
    tagline: 'The oil-free hydrator built for oily and acne-prone skin.',
    description: 'A lightweight, oil-free hydrator built specifically for combination, oily, and acne-prone skin. Salicylic acid keeps pores clear while glycerin and aloe deliver hydration without weight. Same routine as Soft — different finish.',
    size: '1.7 fl oz / 50 ml',
    ingredients: [
      { name: 'Salicylic acid (BHA, 0.5%)', what: 'Penetrates pores to dissolve excess oil and dead skin; clears blackheads.' },
      { name: 'Niacinamide', what: 'Refines pores, calms breakouts, balances oil.' },
      { name: 'Glycerin', what: 'Hydrates without adding oil or heaviness.' },
      { name: 'Aloe leaf juice', what: 'Soothes irritation and supports skin healing.' },
      { name: 'Witch hazel', what: 'Naturally derived astringent that supports oil balance.' },
      { name: 'Green tea extract', what: 'Antioxidant; reduces inflammation.' }
    ],
    howToUse: 'Morning and night, after serums: Apply a thin layer to face and neck. Avoid over-applying — a little goes a long way for oily skin. Use as an alternative to The House Soft if you have combination, oily, or acne-prone skin.',
    bestFor: ['oily-skin', 'acne-prone', 'combination-skin', 'large-pores'],
    studies: [
      { actor: 'Salicylic Acid 0.5%', finding: 'Daily low-dose salicylic acid demonstrates significant reduction in non-inflammatory acne lesions and pore size after 8 weeks in clinical trials.', source: 'JAAD, ongoing reviews' }
    ],
    faq: [
      { q: 'Can I use both Clear and Soft?', a: 'Pick one for daily use. Some people use Clear in summer / Soft in winter.' },
      { q: 'Is this strong enough for moderate acne?', a: 'It supports clear skin but isn\'t a treatment for moderate-to-severe acne — see a dermatologist for those cases.' },
      { q: 'Can I use it with retinol at night?', a: 'Yes — but introduce slowly to avoid over-exfoliation. Alternate nights to start.' }
    ],
    relatedSlugs: ['the-house-soft', 'the-house-mask', 'the-house-polish'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Skin feels less congested; fewer new breakouts.' },
      { week: 'Week 4', text: 'Visible reduction in active blemishes.' },
      { week: 'Week 8', text: 'Balanced oil production; smaller-looking pores.' }
    ],
    proTip: 'Use 2-3x weekly max. Daily use can over-strip skin and trigger rebound oil and inflammation.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: 'I built Clear for the days my skin runs oily. Lower-stim than most acne products — barrier-friendly enough to use daily without rebound breakouts.'
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
    price: 42,
    image: 'images/bounce.jpeg',
    tag: 'Firm · Renew · Plump',
    tagline: 'Skin that holds its shape.',
    description: 'Hydrolyzed collagen, retinol, and hyaluronic acid target firmness, cell turnover, and deep hydration in one elegant evening step. Use 3-4 nights per week to start; daily once your skin builds tolerance. The PM serum that earns the price.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'Encapsulated retinol (0.25%)', what: 'Time-release Vitamin A; stimulates cell turnover and collagen.' },
      { name: 'Hydrolyzed collagen', what: 'Supports skin firmness and elasticity from above.' },
      { name: 'Hyaluronic acid', what: 'Counterbalances retinol with deep hydration.' },
      { name: 'Squalane', what: 'Cushions the skin to minimize retinol-related dryness.' },
      { name: 'Bakuchiol', what: 'Plant-derived retinol companion; enhances results without added irritation.' },
      { name: 'Niacinamide', what: 'Reduces redness and supports the barrier during retinization.' }
    ],
    howToUse: 'Evening only, after cleansing: Apply 3-4 drops to dry skin. Wait 60 seconds before moisturizer. Start with 2-3 nights per week and build to nightly as tolerance develops. Always use SPF the next morning.',
    bestFor: ['anti-aging', 'fine-lines', 'firmness', 'cell-turnover'],
    studies: [
      { actor: 'Retinoid Evidence', finding: 'Topical retinoids have multi-decade clinical evidence for reducing fine lines, improving skin texture, and stimulating collagen production.', source: 'JAAD reviews, 1986–present' },
      { actor: 'Peptides + Vitamin C', finding: 'In a 2021 study (Escobar et al.), peptide and Vitamin C combinations produced measurable wrinkle reduction in 28-29 days.', source: 'IJCS, 2021' }
    ],
    faq: [
      { q: 'When should I start using retinol?', a: 'Most people benefit from starting in their late 20s or early 30s. If you\'re younger, focus on Boost (Vitamin C) first.' },
      { q: 'Will my skin peel?', a: 'Some mild flaking is normal in the first 2-3 weeks. If severe, reduce frequency.' },
      { q: 'Can I use this if I\'m pregnant?', a: 'No — retinol is not recommended during pregnancy. See your dermatologist for alternatives.' }
    ],
    relatedSlugs: ['the-house-firm', 'the-house-renewal', 'the-house-hydration'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Cell turnover begins; possible mild flaking.' },
      { week: 'Week 4', text: 'Texture smooths; pores look refined.' },
      { week: 'Week 8', text: 'Visible firmness; fine lines soften.' },
      { week: 'Week 12+', text: 'Compounded collagen; deeper transformation.' }
    ],
    proTip: 'Start with 2 nights per week, build to 3-4 by week 6, daily by week 12. Always SPF the next morning.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: '0.25% encapsulated retinol is the right starting dose. I built up to nightly over six weeks. The collagen production is real — I can see it in my skin.'
  },
  {
    slug: 'the-house-firm',
    name: 'Firm',
    category: 'skincare',
    sub: 'pm',
    step: 3,
    routine: 'PM',
    price: 36,
    image: 'images/firm.jpeg',
    tag: 'Firm · Smooth · Tighten',
    tagline: 'Targeted for fine lines and the eye area.',
    description: 'A peptide pair, cucumber, and chrysin in an oil-free, fragrance-free formula. Firms, smooths, and supports skin elasticity around the eye area and along expression lines. Pairs with Bounce for layered anti-aging without irritation.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'Matrixyl 3000 (peptide complex)', what: 'Stimulates collagen synthesis; reduces wrinkle depth measurably.' },
      { name: 'Argireline (acetyl hexapeptide-8)', what: 'Relaxes expression lines on the forehead and around the eyes.' },
      { name: 'Cucumber extract', what: 'Soothing and brightening; reduces visible puffiness.' },
      { name: 'Chrysin', what: 'Plant-derived antioxidant; reduces appearance of dark circles.' },
      { name: 'Hyaluronic acid', what: 'Hydrates the delicate eye area without weight.' },
      { name: 'Niacinamide', what: 'Strengthens the thin under-eye skin.' }
    ],
    howToUse: 'Evening, after Bounce: Apply 2-3 drops to face, neck, and the orbital bone area (not directly into the eye). Pat gently. Follow with moisturizer or eye cream.',
    bestFor: ['anti-aging', 'fine-lines', 'crow\'s-feet', 'firming'],
    studies: [
      { actor: 'Matrixyl 3000', finding: 'Peptide complex demonstrates significant wrinkle depth reduction and skin firmness improvement after 8-12 weeks of consistent topical use.', source: 'IJCS Peptide Studies, 2021' }
    ],
    faq: [
      { q: 'Can I use this around my eyes?', a: 'Yes — apply to the orbital bone, not directly on the eyelid or waterline.' },
      { q: 'Pregnant-safe?', a: 'Yes — Firm contains no retinoids, salicylic acid, or hydroquinone.' },
      { q: 'Should I use this with Eye Cream?', a: 'Yes — Firm goes on first as a serum; Eye Cream seals it in.' }
    ],
    relatedSlugs: ['the-house-eye', 'the-house-bounce', 'the-house-defense'],
    resultsTimeline: [
      { week: 'Week 4', text: 'Fine lines around eyes look softer.' },
      { week: 'Week 8', text: 'Noticeable firmness; expression lines less etched.' },
      { week: 'Week 12+', text: 'Sustained elasticity; visible structural improvement.' }
    ],
    proTip: 'Apply with your ring finger around the eye area — it\'s the weakest finger and applies the gentlest pressure for this thin skin.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: 'Peptides take time. I noticed the difference around week 8. Now I won\'t go without it — especially around the eyes.'
  },
  {
    slug: 'the-house-hydration',
    name: 'Hydration',
    category: 'skincare',
    sub: 'pm',
    step: 2,
    routine: 'PM',
    price: 26,
    image: 'images/hydration.jpeg',
    tag: 'Hydrate · Moisture Lock · Antioxidant',
    tagline: 'Three actives, all pulling weight.',
    description: 'Glycerin mimics the skin\'s own natural moisture process; cassia obtusifolia adds antioxidant defense; sodium hyaluronate locks the whole thing in. The deep-hydration serum that pairs perfectly with retinol or any drying actives in your routine.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'Glycerin', what: 'Humectant that mirrors the skin\'s own moisture-retention molecules.' },
      { name: 'Cassia obtusifolia seed extract', what: 'Plant-based polysaccharide; mimics hyaluronic acid action with extra antioxidant power.' },
      { name: 'Sodium hyaluronate', what: 'Locks moisture into the deeper skin layers.' },
      { name: 'Panthenol', what: 'Supports barrier repair.' },
      { name: 'Allantoin', what: 'Soothes and supports cell turnover.' },
      { name: 'Aloe leaf juice', what: 'Calming hydration base.' }
    ],
    howToUse: 'Evening, after Firm: Apply 3-4 drops to slightly damp skin. Pat in. Follow with eye cream and night cream.',
    bestFor: ['hydration', 'dryness', 'retinol-companion', 'all-skin-types'],
    studies: [
      { actor: 'Glycerin + HA', finding: 'Combined humectant systems demonstrate 24-hour hydration retention superior to either ingredient alone in clinical comparison studies.', source: 'Sci Reports, 2024' }
    ],
    faq: [
      { q: 'How is this different from The House Hyaluronic?', a: 'Hyaluronic is leaner (6 ingredients, AM-friendly). Hydration is richer with antioxidant cassia — built for layering with PM actives.' },
      { q: 'Can I use both?', a: 'Yes — Hyaluronic AM, Hydration PM is a great pairing.' },
      { q: 'Pregnant-safe?', a: 'Yes — no retinoids, no salicylic acid.' }
    ],
    relatedSlugs: ['the-house-hyaluronic', 'the-house-eye', 'the-house-renewal'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Plumper, dewier skin.' },
      { week: 'Week 1', text: 'Lasting hydration even into the afternoon.' },
      { week: 'Week 4', text: 'Improved retinol tolerance; less flaking during retinization.' }
    ],
    proTip: 'Layer over Bounce to soften the retinol response. Skin tolerates actives much better with HA buffer.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: 'When I use retinol, I always layer Hydration on top. It\'s the buffer. Skin tolerates the active much better with this in the routine.'
  },
  {
    slug: 'the-house-eye',
    name: 'Eye',
    category: 'skincare',
    sub: 'pm',
    step: 4,
    routine: 'PM',
    price: 36,
    image: 'images/eye.jpeg',
    tag: 'Depuff · Brighten · Firm',
    tagline: 'Lightweight peptide cream. Sensitive-safe.',
    description: 'A lightweight peptide cream with cucumber, aloe, and safflower seed oil. Soothes, depuffs, and supports the look of firmer under-eyes — without the heaviness of traditional eye creams. Use AM and PM for visible difference.',
    size: '0.5 fl oz / 15 ml',
    ingredients: [
      { name: 'Matrixyl peptide', what: 'Targets fine lines around the eye area.' },
      { name: 'Cucumber extract', what: 'Reduces visible puffiness; soothes.' },
      { name: 'Aloe leaf juice', what: 'Calms and lightly hydrates.' },
      { name: 'Safflower seed oil', what: 'Lightweight oil; nourishes without heaviness.' },
      { name: 'Caffeine', what: 'Microcirculation support; reduces dark circle appearance.' },
      { name: 'Vitamin E', what: 'Antioxidant; protects delicate eye skin.' }
    ],
    howToUse: 'Morning and night: Tap a rice-grain amount under each eye and along the orbital bone using your ring finger. Pat — never rub. Allow 30 seconds before applying makeup or other products.',
    bestFor: ['dark-circles', 'puffiness', 'fine-lines', 'crow\'s-feet'],
    studies: [
      { actor: 'Caffeine for Periorbital', finding: 'Topical caffeine demonstrates measurable reduction in periorbital puffiness and improved microcirculation in clinical eye-area studies.', source: 'Journal of Cosmetic Science, 2022' }
    ],
    faq: [
      { q: 'How much should I use?', a: 'A rice-grain amount per eye is plenty. Eye creams are concentrated.' },
      { q: 'Can I use this if I have sensitive eyes?', a: 'Yes — fragrance-free and dermatologist-tested for the eye area.' },
      { q: 'Will it work under concealer?', a: 'Yes — wait 30 seconds for full absorption before applying makeup.' }
    ],
    relatedSlugs: ['the-house-firm', 'the-house-renewal', 'the-house-bounce'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Less morning puffiness.' },
      { week: 'Week 4', text: 'Darker circles look lighter; under-eye smoother.' },
      { week: 'Week 8+', text: 'Sustained brightness; visible elasticity improvement.' }
    ],
    proTip: 'Tap, never rub. The under-eye is the thinnest skin on your face — friction creates more damage than product fixes.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: 'The under-eye is the first place fatigue shows. This took ten years off in three months. Tap on, never rub.'
  },
  {
    slug: 'the-house-renewal',
    name: 'Renewal',
    category: 'skincare',
    sub: 'pm',
    step: 5,
    routine: 'PM',
    price: 44,
    image: 'images/renewal.jpeg',
    tag: 'Resurface · Renew · Smooth',
    tagline: 'Glycolic acid resurfaces while you sleep.',
    description: 'Glycolic acid resurfaces while retinyl palmitate supports collagen overnight. Squalane and panthenol keep you from waking up tight. The night crème that earns its place at the top of the price tier — visible texture and tone improvement in 4-6 weeks.',
    size: '1.7 fl oz / 50 ml',
    ingredients: [
      { name: 'Glycolic acid (5%)', what: 'AHA; resurfaces dead skin cells, reveals smoother texture.' },
      { name: 'Retinyl palmitate', what: 'Gentle Vitamin A ester; supports collagen without retinol-level irritation.' },
      { name: 'Squalane', what: 'Cushions and protects against acid-related dryness.' },
      { name: 'Panthenol', what: 'Soothes and supports the moisture barrier overnight.' },
      { name: 'Allantoin', what: 'Reduces irritation; supports cell renewal.' },
      { name: 'Hyaluronic acid', what: 'Layered hydration to balance the actives.' }
    ],
    howToUse: 'Evening, as the final treatment step: Apply a pea-sized amount to face and neck. Massage upward. Use 3-4 nights per week to start; build to nightly. Always use SPF the next morning. Avoid combining with Bounce on the same night.',
    bestFor: ['anti-aging', 'texture-refinement', 'dullness', 'uneven-tone'],
    studies: [
      { actor: 'Glycolic Acid AHA', finding: 'Topical glycolic acid demonstrates significant improvements in skin texture, tone uniformity, and fine line reduction across multiple clinical reviews.', source: 'JAAD reviews' }
    ],
    faq: [
      { q: 'Can I use Renewal and Bounce on the same night?', a: 'No — alternate nights. Both contain retinoid-family actives plus glycolic; combining can cause over-exfoliation.' },
      { q: 'Will it sting?', a: 'A mild tingle is normal initially. Burning is not — discontinue if that happens.' },
      { q: 'Pregnant-safe?', a: 'No — Renewal contains glycolic acid and retinyl palmitate. Use Hydration as a pregnancy-safe alternative.' }
    ],
    relatedSlugs: ['the-house-bounce', 'the-house-hydration', 'the-house-eye'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Brighter, more refined tone.' },
      { week: 'Week 4', text: 'Smoother texture; spots fade.' },
      { week: 'Week 8+', text: 'Even surface; compounded resurfacing benefit.' }
    ],
    proTip: 'Never combine with Bounce on the same night. Alternate them across the week to avoid over-exfoliation.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: 'Glycolic plus retinyl palmitate at the right concentrations. Don\'t combine with Bounce on the same night — alternate them across the week.'
  },
  {
    slug: 'the-house-glow',
    name: 'Glow',
    category: 'skincare',
    sub: 'pm',
    step: 6,
    routine: 'PM',
    price: 36,
    image: 'images/glow.jpeg',
    tag: 'Nourish · Glow · Seal',
    tagline: 'The luxe finishing step that ties the routine together.',
    description: 'A six-oil blend with rosehip, hemp seed, and grape seed. The luxe finishing step that locks in everything beneath it and leaves skin with a soft, lit-from-within finish. Use 2-4 drops to seal in your evening routine — or anywhere skin looks tired.',
    size: '1 fl oz / 30 ml',
    ingredients: [
      { name: 'Rosehip seed oil', what: 'Rich in Vitamin A precursors and essential fatty acids; supports skin renewal.' },
      { name: 'Hemp seed oil', what: 'Anti-inflammatory; balances skin without clogging pores.' },
      { name: 'Grape seed oil', what: 'Lightweight, antioxidant-rich; absorbs cleanly.' },
      { name: 'Squalane', what: 'Mimics skin\'s natural sebum for non-greasy moisture.' },
      { name: 'Jojoba oil', what: 'Balances skin\'s oil production.' },
      { name: 'Argan oil', what: 'Nourishing; rich in Vitamin E.' }
    ],
    howToUse: 'Evening, as the final step: Warm 3-4 drops between palms, then press into face and neck. Use after moisturizer to seal in your routine. Can also be added to moisturizer for extra hydration in winter.',
    bestFor: ['dryness', 'glow', 'sealing', 'all-skin-types'],
    studies: [
      { actor: 'Rosehip Oil', finding: 'Topical rosehip oil contains natural retinoid precursors and demonstrates measurable improvements in skin texture and tone with consistent use.', source: 'Phytotherapy Research, 2022' }
    ],
    faq: [
      { q: 'Will this break me out?', a: 'For most skin types, no — these are non-comedogenic oils. Acne-prone skin should patch test first.' },
      { q: 'Should I use it AM or PM?', a: 'PM is ideal as the sealing step. Can use in AM but skip if you have oily skin or before SPF.' },
      { q: 'Can I add it to my moisturizer?', a: 'Yes — 1-2 drops mixed into your moisturizer is great for winter dryness.' }
    ],
    relatedSlugs: ['the-house-soft', 'the-house-renewal', 'the-house-mask'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Immediate glow and sealed-in moisture.' },
      { week: 'Week 1', text: 'Strengthened barrier; skin holds active ingredients longer.' },
      { week: 'Week 4', text: 'Improved barrier baseline; less reactive overall.' }
    ],
    proTip: '2 drops mixed into moisturizer for daily use, or 3 drops pressed in as the last step on dry winter nights.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: 'On dry winter nights I add 2 drops to my moisturizer. On normal nights I press 3 drops in last. The finishing step that locks everything in.'
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
    image: 'images/mask.jpeg',
    tag: 'Detox · Purify · Refine',
    tagline: 'A spa night in five minutes.',
    description: 'Binchotan charcoal, sodium bicarbonate, and kaolin clay. A spa night in five minutes — activated by warm water, finished with a gentle massage. Use one or two nights a week to draw out impurities and refine pore appearance.',
    size: '2 fl oz / 60 ml',
    ingredients: [
      { name: 'Binchotan charcoal', what: 'Premium Japanese charcoal; draws out impurities and excess oil.' },
      { name: 'Kaolin clay', what: 'Gentle clay that absorbs without stripping; supports clarity.' },
      { name: 'Sodium bicarbonate', what: 'Mild exfoliant; activated by warm water for gentle scrubbing action.' },
      { name: 'Aloe leaf juice', what: 'Soothes and balances the active ingredients.' },
      { name: 'Glycerin', what: 'Maintains hydration during the masking process.' }
    ],
    howToUse: '1-2 times per week, after cleansing: Apply an even layer to face, avoiding the eye area. Leave on for 5-7 minutes. Wet hands with warm water and massage in circular motions to activate the gentle exfoliant. Rinse thoroughly with warm water. Follow with toner and the rest of your evening routine.',
    bestFor: ['detox', 'pore-clarity', 'oily-skin', 'acne-prone'],
    studies: [
      { actor: 'Activated Charcoal', finding: 'Activated charcoal demonstrates measurable absorption of skin oil and impurities in dermatological purification studies.', source: 'Journal of Cosmetic Dermatology, 2021' }
    ],
    faq: [
      { q: 'Can I use this with Polish in the same week?', a: 'Yes — Mask one night, Polish another. Don\'t use both on the same night.' },
      { q: 'How often should I use it?', a: 'Once or twice per week. More than that may dry out the skin.' },
      { q: 'Will it cause breakouts?', a: 'No — the formula draws out existing buildup without irritating skin.' }
    ],
    relatedSlugs: ['the-house-polish', 'the-house-clear', 'the-house-wash'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Cleaner-looking pores after each use.' },
      { week: 'Week 4', text: 'Refined texture; clearer overall skin clarity.' },
      { week: 'Ongoing', text: 'Used 2x weekly for sustained pore health.' }
    ],
    proTip: 'Five minutes max. Longer doesn\'t deepen results — it just dries out your barrier and creates rebound oil.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: 'Five minutes, twice a week. The activated charcoal pulls out what daily cleansing misses. Skin looks clearer the next morning — every time.'
  },
  {
    slug: 'the-house-polish',
    name: 'Polish',
    category: 'skincare',
    sub: 'weekly',
    step: null,
    routine: 'Weekly',
    price: 28,
    image: 'images/polish.jpeg',
    tag: 'Exfoliate · Smooth · Refresh',
    tagline: 'A clean menthol cool that turns the step into a moment.',
    description: 'A plant-cellulose physical exfoliant gentle enough for weekly use, with a clean menthol cool that turns the step into a moment. The mid-week refresh that takes off everything dead and leaves skin polished, ready, and glowing.',
    size: '2 fl oz / 60 ml',
    ingredients: [
      { name: 'Plant cellulose beads', what: 'Biodegradable physical exfoliant; gentle enough for sensitive skin.' },
      { name: 'Menthol', what: 'Provides cooling sensation; mildly stimulating to circulation.' },
      { name: 'Peppermint extract', what: 'Refreshes and adds clean scent.' },
      { name: 'Glycerin', what: 'Hydrates during the exfoliation process.' },
      { name: 'Aloe leaf juice', what: 'Soothes any post-scrub redness.' },
      { name: 'Coconut-derived surfactants', what: 'Gentle cleansing action.' }
    ],
    howToUse: '1-2 times per week, after cleansing: Massage a quarter-sized amount onto damp skin in gentle circular motions for 60 seconds. Avoid the eye area. Rinse with cool water. Follow with toner and the rest of your evening routine.',
    bestFor: ['exfoliation', 'texture-refinement', 'dullness', 'all-skin-types'],
    studies: [
      { actor: 'Physical vs Chemical Exfoliation', finding: 'Plant cellulose physical exfoliants demonstrate effective dead-skin removal with significantly less barrier disruption than aggressive chemical exfoliants.', source: 'JAAD reviews' }
    ],
    faq: [
      { q: 'Is this too rough for sensitive skin?', a: 'No — plant cellulose is one of the gentlest physical exfoliants. Patch test first if you\'re very reactive.' },
      { q: 'Can I use it with Renewal?', a: 'Use Polish on a different night than Renewal — both exfoliate, just in different ways.' },
      { q: 'Pregnant-safe?', a: 'Yes — fragrance-free option of the active formula contains no salicylic acid or retinoids.' }
    ],
    relatedSlugs: ['the-house-mask', 'the-house-wash', 'the-house-glow'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Smoother, softer skin.' },
      { week: 'Week 4', text: 'Visible glow; makeup applies more evenly.' },
      { week: 'Ongoing', text: '2x weekly use for sustained smoothness.' }
    ],
    proTip: 'Apply to wet skin in gentle circular motions for 30-60 seconds. Rinse with cool water to close the pores afterward.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Vegan', 'Cruelty-Free', 'Made in NA'],
    daniels_note: 'Polish is gentle enough that I use it twice a week. The menthol cool is unnecessary but I love it. Felt good to design something I\'d actually want to use.'
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
      { actor: 'Daily Multivitamin', finding: 'A 2022 randomized controlled trial of 21,442 adults found daily multivitamin supplementation associated with measurable cognitive benefits over 3 years.', source: 'COSMOS-Mind Trial, 2022' }
    ],
    faq: [
      { q: 'Can I take this on an empty stomach?', a: 'Best with food — fat-soluble vitamins (A, D, E, K) absorb better with a meal containing some fat.' },
      { q: 'Is it vegetarian?', a: 'Yes — capsules and ingredients are plant-based.' },
      { q: 'Can I combine with other supplements?', a: 'Yes — Multi is designed as the foundation of a stack. Pairs especially well with Sunshine, Flow, and Calm.' }
    ],
    relatedSlugs: ['the-house-sunshine', 'the-house-flow', 'the-house-calm'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Subtle energy increase; sleep often improves.' },
      { week: 'Week 4', text: 'Better workout recovery; less afternoon fatigue.' },
      { week: 'Week 8+', text: 'Foundational baseline established; the floor under every other supplement.' }
    ],
    proTip: 'Take with breakfast — fat-soluble vitamins A, D, E, K all need a meal containing fat to absorb properly.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA'],
    daniels_note: 'I tried fancy multivitamins for years before realizing 90% don\'t dose to clinical levels. This one does. It\'s the foundation of every stack I run.'
  },
  {
    slug: 'the-house-calm',
    name: 'Calm',
    category: 'supplement',
    sub: 'foundation',
    price: 26.90,
    image: 'products/Calm.jpeg',
    tag: 'Relaxation · Muscle · Nerve',
    tagline: 'Sleep deeper. Stress less.',
    description: '275mg of well-absorbed magnesium glycinate per serving — the form your nervous system can actually use without the laxative side effects. Take in the evening for deeper sleep, less muscle tension, and a calmer baseline.',
    size: '90 capsules · 45 servings',
    ingredients: [
      { name: 'Magnesium glycinate', dose: '275 mg elemental', what: 'Chelated form; bioavailable; supports sleep, muscle relaxation, nervous system.' },
      { name: 'Glycine', dose: '500 mg', what: 'Amino acid; supports sleep quality and cognitive function.' },
      { name: 'Vegetable cellulose capsule', dose: '—', what: 'Plant-based capsule.' }
    ],
    howToUse: 'Take 2 capsules in the evening, 30-60 minutes before bed. For higher needs, can take 1 capsule in morning and 1 at night. Best paired with consistent sleep schedule.',
    bestFor: ['sleep', 'stress-relief', 'muscle-relaxation', 'evening-routine'],
    studies: [
      { actor: 'Magnesium Glycinate', finding: 'Magnesium glycinate is the chelated form clinically associated with improved sleep quality and reduced stress markers, with better absorption than oxide or citrate.', source: 'NIH ODS; reviewed in Nutrients, multiple' }
    ],
    faq: [
      { q: 'How long until I notice effects?', a: 'Sleep quality usually improves within the first week. Full benefits compound over 4-6 weeks.' },
      { q: 'Can I take this with sleep medication?', a: 'Consult your doctor — magnesium is generally complementary, but combinations should be reviewed.' },
      { q: 'Is this the same as ZMA?', a: 'No — ZMA contains zinc and B6 plus magnesium. Calm is just magnesium glycinate + glycine for clean evening use.' }
    ],
    relatedSlugs: ['the-house-tranquil', 'the-house-multi', 'the-house-restore'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Easier sleep onset; less middle-of-night waking.' },
      { week: 'Week 1', text: 'Deeper, more restorative sleep.' },
      { week: 'Week 4+', text: 'Morning clarity; cortisol pattern improving.' }
    ],
    proTip: 'Take 30-45 minutes before bed. Don\'t combine with heavy meals or alcohol — both blunt the magnesium effect.',
    freeFrom: ['Gluten-Free', 'Vegetarian', 'Vegan', 'Lactose-Free', 'Allergen-Free', 'Hormone-Free', 'All Natural', 'Antibiotic-Free', 'Non-GMO', 'Corn-Free'],
    daniels_note: 'Best magnesium for actual sleep. Glycinate form, 275mg, no laxative effect. Take 30 minutes before bed — I sleep deeper within the first week.'
  },
  {
    slug: 'the-house-sunshine',
    name: 'Sunshine',
    category: 'supplement',
    sub: 'foundation',
    price: 19.90,
    image: 'products/Sunshine.jpeg',
    tag: 'Bones · Muscles · Immune',
    tagline: 'The vitamin your body craves.',
    description: 'Fat-soluble Vitamin D3 cholecalciferol in a clean softgel — properly dosed for bone density, immune balance, and the energy you forgot was missing. Most adults are deficient; supplementation reliably closes the gap.',
    size: '100 softgels · 100 servings',
    ingredients: [
      { name: 'Vitamin D3 (cholecalciferol)', dose: '50 mcg (2000 IU)', what: 'Active form; supports bone, immune, mood, hormone balance.' },
      { name: 'Olive oil base', dose: '—', what: 'Fat-soluble carrier for optimal absorption.' }
    ],
    howToUse: 'Take 1 softgel daily with a meal containing fat (D3 absorbs best with fat). Best taken in the morning.',
    bestFor: ['bone-health', 'immunity', 'mood', 'foundational-health'],
    studies: [
      { actor: 'Vitamin D3', finding: 'Vitamin D3 supplementation has decades of evidence for bone density, immune balance, and mood regulation. An estimated 35% of US adults are deficient — supplementation reliably closes the gap.', source: 'Reviewed in JAMA, The Lancet, NIH ODS' }
    ],
    faq: [
      { q: 'How much D3 should I take?', a: '2000 IU is the typical daily dose. People with documented deficiency may need higher doses under medical supervision.' },
      { q: 'When is the best time to take it?', a: 'Morning with breakfast — fat aids absorption.' },
      { q: 'Can I get enough from the sun?', a: 'In summer with 20+ minutes of midday sun and exposed arms/legs, yes. For most people in fall-spring or with indoor lifestyles, supplementation is necessary.' }
    ],
    relatedSlugs: ['the-house-multi', 'the-house-flow', 'the-house-calm'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Subtle mood improvement; better daytime energy.' },
      { week: 'Week 4', text: 'Bone & immune markers improving (testable).' },
      { week: 'Week 8+', text: 'Deficiency closed; sustained baseline.' }
    ],
    proTip: 'Take with a fat-containing meal — Vitamin D is fat-soluble. Avocado, eggs, fish oil, or just a normal lunch all work.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA'],
    daniels_note: 'Most adults are deficient in Vitamin D. I got tested before and after — supplementing closed the gap entirely. 2000 IU is the right dose for most people.'
  },
  {
    slug: 'the-house-flow',
    name: 'Flow',
    category: 'supplement',
    sub: 'foundation',
    price: 24.90,
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
      { actor: 'Omega-3 EPA + DHA', finding: 'Long-chain marine omega-3s are among the most-studied supplements in nutrition science. Clinical trials consistently associate adequate intake with cardiovascular benefits, reduced inflammatory markers, and cognitive support.', source: 'Reviewed in Circulation, JAMA, meta-analyses' }
    ],
    faq: [
      { q: 'Will this cause fish burps?', a: 'No — molecularly distilled and lemon-finished to eliminate fishy aftertaste.' },
      { q: 'Is the fish source sustainable?', a: 'Yes — sourced from wild, sustainably-fished cold-water species.' },
      { q: 'Can vegetarians take this?', a: 'No — Flow is fish-based. Vegetarian alternatives use algae-based EPA/DHA.' }
    ],
    relatedSlugs: ['the-house-vitality', 'the-house-multi', 'the-house-sunshine'],
    resultsTimeline: [
      { week: 'Week 4', text: 'Brain clarity; better focus across the day.' },
      { week: 'Week 8', text: 'Heart markers improve (testable lipid panel).' },
      { week: 'Week 12+', text: 'Skin clarity and joint comfort benefits.' }
    ],
    proTip: 'Take with your largest meal of the day. Omega-3 stays in the bloodstream 4-6 hours — one daily dose covers a full cycle.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA'],
    daniels_note: 'Omega-3 is the supplement I\'d never stop taking. Heart, brain, skin. Two softgels with breakfast, every day for the last four years.'
  },
  {
    slug: 'the-house-biome',
    name: 'Biome',
    category: 'supplement',
    sub: 'foundation',
    price: 30.90,
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
      { actor: 'Multi-Strain Probiotics', finding: 'Multi-strain probiotic blends demonstrate measurable improvements in digestive symptoms, immune markers, and gut microbiome diversity in clinical trials.', source: 'Multiple meta-analyses, Frontiers in Microbiology' }
    ],
    faq: [
      { q: 'Do I need to refrigerate it?', a: 'No — MAKTREK technology and shelf-stable strains eliminate refrigeration need.' },
      { q: 'How long until I feel a difference?', a: 'Digestive improvements typically appear in 2-4 weeks. Mood/energy benefits compound over 8+ weeks.' },
      { q: 'Can I take it with antibiotics?', a: 'Yes — but space at least 2 hours apart. Probiotics during/after antibiotics are especially valuable.' }
    ],
    relatedSlugs: ['the-house-multi', 'the-house-greens', 'the-house-restore'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Subtle digestion shifts; less bloating.' },
      { week: 'Week 2', text: 'Improved regularity.' },
      { week: 'Week 4+', text: 'New gut baseline; downstream benefits in mood and skin.' }
    ],
    proTip: 'Take on an empty stomach 20 minutes before breakfast. Keep refrigerated — heat reduces strain viability over time.',
    freeFrom: ['Gluten-Free', 'Lactose-Free', 'Allergen-Free', 'Hormone-Free', 'All Natural', 'Corn-Free'],
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
      { actor: 'NAD+ Precursors', finding: 'NAD+ levels decline with age. Emerging clinical research suggests precursor supplementation can increase cellular NAD+ levels and support energy metabolism. Combined with resveratrol and quercetin, the stack targets cellular health at the most fundamental level.', source: 'Cell Metabolism (Imai & Guarente); ongoing trials at Harvard, WashU' }
    ],
    faq: [
      { q: 'When will I notice the effects?', a: 'Most users report energy and mental clarity within 2-3 weeks. Longevity benefits compound over months and years.' },
      { q: 'Can I take this with other supplements?', a: 'Yes — NAD+ pairs especially well with Vitality (CoQ10) and the rest of the longevity stack.' },
      { q: 'What\'s the difference between NAD+, NMN, and NR?', a: 'NMN and NR are precursors that the body converts to NAD+. Direct NAD+ supplementation skips the conversion step.' }
    ],
    relatedSlugs: ['the-house-vitality', 'the-house-restore', 'the-house-tranquil'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Subtle energy lift; less afternoon crash.' },
      { week: 'Week 4', text: 'Workout recovery accelerates.' },
      { week: 'Week 8', text: 'Sustained cellular vitality; less "tired-but-wired" feeling.' },
      { week: 'Week 12+', text: 'Compound benefit; visible at the cellular level.' }
    ],
    proTip: 'Morning, with breakfast. NAD+ is stable on the shelf — no refrigeration needed, but consistency matters more than timing.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA'],
    daniels_note: 'My energy at 40 wasn\'t what it was at 30. Started this six months in — the difference is real. Not magic, but real. Cellular-level support.'
  },
  {
    slug: 'the-house-vitality',
    name: 'Vitality',
    category: 'supplement',
    sub: 'longevity',
    price: 28.90,
    image: 'products/Vitality.jpeg',
    tag: 'Energy · Antioxidant · Heart',
    tagline: 'Fuel your cells from within.',
    description: '200mg of CoQ10 ubiquinone per capsule for cellular energy production and heart health — the supplement your forties will thank you for. Especially relevant if you\'re on statins (which deplete CoQ10) or want sustained mental and physical energy.',
    size: '30 capsules · 30 servings',
    ingredients: [
      { name: 'Coenzyme Q10 (ubiquinone)', dose: '200 mg', what: 'Critical for cellular energy (ATP) production; supports heart and skeletal muscle.' },
      { name: 'Black pepper extract', dose: '2 mg', what: 'Enhances CoQ10 absorption.' },
      { name: 'Sunflower oil', dose: '—', what: 'Fat-soluble carrier; CoQ10 absorbs best with fat.' }
    ],
    howToUse: 'Take 1 capsule daily with a meal containing fat. Best taken in the morning.',
    bestFor: ['energy', 'heart-health', 'cellular-function', 'longevity'],
    studies: [
      { actor: 'CoQ10 Supplementation', finding: 'CoQ10 supplementation demonstrates measurable improvements in cellular energy markers, cardiovascular health, and exercise capacity, particularly in adults over 40.', source: 'Multiple clinical reviews; Mayo Clinic Proceedings' }
    ],
    faq: [
      { q: 'Should I take this if I\'m on statins?', a: 'Discuss with your doctor — statins deplete CoQ10, and supplementation is often recommended.' },
      { q: 'When will I feel a difference?', a: 'Energy improvements typically appear in 2-4 weeks. Cardiovascular benefits compound over months.' },
      { q: 'Is ubiquinone or ubiquinol better?', a: 'Both work; ubiquinone is more shelf-stable and converts to ubiquinol in the body.' }
    ],
    relatedSlugs: ['the-house-nad-plus', 'the-house-flow', 'the-house-multi'],
    resultsTimeline: [
      { week: 'Week 4', text: 'Sustained energy throughout the day.' },
      { week: 'Week 8', text: 'Heart markers improve (blood pressure, lipids).' },
      { week: 'Week 12+', text: 'Sustained cellular energy benefit.' }
    ],
    proTip: 'Take with breakfast or lunch — CoQ10 is fat-soluble and needs a meal to absorb properly. Avoid taking at night, can disrupt sleep.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA'],
    daniels_note: '200mg of CoQ10 is the dose that matters. I take it with breakfast — fat-soluble, so it needs the meal. A game-changer for sustained energy.'
  },
  {
    slug: 'the-house-synapse',
    name: 'Synapse',
    category: 'supplement',
    sub: 'longevity',
    price: 34.90,
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
      { actor: 'Lion\'s Mane Clinical', finding: 'Lion\'s Mane mushroom supplementation demonstrates measurable improvements in cognitive function and nerve growth factor markers in clinical studies of adults.', source: 'Phytotherapy Research; ongoing trials' }
    ],
    faq: [
      { q: 'Are these psychedelic mushrooms?', a: 'No — these are functional culinary mushrooms with no psychoactive effects.' },
      { q: 'How do they taste?', a: 'Berry-flavored gummies; pleasant enough that most people genuinely enjoy them.' },
      { q: 'Can I take with coffee?', a: 'Yes — Synapse pairs well with coffee for sustained cognitive energy without jitters.' }
    ],
    relatedSlugs: ['the-house-focus', 'the-house-tranquil', 'the-house-nad-plus'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Subtle focus improvement.' },
      { week: 'Week 4', text: 'Cognitive sharpness; better word recall.' },
      { week: 'Week 8+', text: 'Memory and clarity baseline; the long game compounds.' }
    ],
    proTip: 'Morning with food. Lion\'s Mane builds slowly over 4-6 weeks — be patient. Stop and start often resets the benefit.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA'],
    daniels_note: 'Lion\'s Mane is the cognitive supplement I\'d recommend to anyone over 35. The 10-mushroom blend covers more bases than just Lion\'s alone.'
  },
  {
    slug: 'the-house-tranquil',
    name: 'Tranquil',
    category: 'supplement',
    sub: 'longevity',
    price: 29.50,
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
      { actor: 'KSM-66 Ashwagandha', finding: 'A 2025 systematic review and meta-analysis of 15 randomized controlled trials covering 873 patients found ashwagandha supplementation produces significant reductions in cortisol, stress, and anxiety versus placebo.', source: 'BJPsych Open, 2025 (Bachour et al.)' }
    ],
    faq: [
      { q: 'How long until I feel less stressed?', a: 'Most users report measurable stress reduction in 2-4 weeks. Full benefits compound over 8-12 weeks.' },
      { q: 'Will it make me sleepy?', a: 'No — Tranquil reduces stress without sedation. Use Calm in the evening for sleep.' },
      { q: 'Is it safe long-term?', a: 'Generally yes — KSM-66 has been studied for years. Discuss with doctor if pregnant, nursing, or on thyroid medication.' }
    ],
    relatedSlugs: ['the-house-calm', 'the-house-greens', 'the-house-multi'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Lower stress response to daily friction.' },
      { week: 'Week 4', text: 'Cortisol drops measurably; better sleep onset.' },
      { week: 'Week 8+', text: 'Stress resilience baseline; sharper under pressure.' }
    ],
    proTip: '2 capsules in the evening to start; build to 3 if needed during high-stress weeks. Doesn\'t sedate — won\'t make you foggy.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA'],
    daniels_note: 'KSM-66 ashwagandha is the most-studied form. I take it during high-stress weeks — cortisol drops, focus stays. It doesn\'t sedate.'
  },
  {
    slug: 'the-house-restore',
    name: 'Restore',
    category: 'supplement',
    sub: 'longevity',
    price: 25.90,
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
      { actor: 'Curcumin + BioPerine', finding: 'Curcumin combined with piperine demonstrates significantly improved bioavailability and measurable anti-inflammatory effects in joint health clinical trials.', source: 'Journal of Pain Research; multiple meta-analyses' }
    ],
    faq: [
      { q: 'Will this stain my hands like turmeric?', a: 'No — capsules contain the extract in concentrated form; no powder handling.' },
      { q: 'How long until joints feel better?', a: '2-4 weeks for noticeable difference; 8-12 weeks for full anti-inflammatory benefits.' },
      { q: 'Can I take it with NSAIDs?', a: 'Yes, but discuss with doctor — Restore can be a long-term complement to or replacement for daily NSAID use.' }
    ],
    relatedSlugs: ['the-house-flow', 'the-house-seal', 'the-house-multi'],
    resultsTimeline: [
      { week: 'Week 4', text: 'Joint comfort; less morning stiffness.' },
      { week: 'Week 8', text: 'Better mobility; reduced inflammation markers.' },
      { week: 'Week 12+', text: 'Sustained joint health; the compounded benefit.' }
    ],
    proTip: 'Take with food, twice daily. Effects compound over 8-12 weeks — quitting at week 6 will hide the real benefit.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA'],
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
    image: 'products/Power.jpeg',
    tag: 'Strength · Power · Recovery · Growth',
    tagline: 'The most-studied supplement on the shelf.',
    description: '5g of pharmaceutical-grade creatine monohydrate per scoop — the most-studied supplement on the shelf, no flavors, no nonsense. Strength, muscle, and performance gains backed by hundreds of clinical trials.',
    size: '500g powder · 100 servings',
    ingredients: [
      { name: 'Creatine monohydrate (Creapure®)', dose: '5 g', what: 'Pharmaceutical-grade German creatine; the gold standard form.' }
    ],
    howToUse: 'Mix 1 scoop (5g) into water, juice, or your protein shake. Take post-workout for best absorption, or anytime that\'s consistent. Daily use is more important than timing. Loading phase optional (20g/day for first 5 days).',
    bestFor: ['strength', 'muscle-growth', 'recovery', 'performance'],
    studies: [
      { actor: 'Creatine Monohydrate', finding: 'A 2024 systematic review and meta-analysis of 16 randomized controlled trials confirmed that creatine supplementation produces measurable benefits for memory, attention, and information processing speed — adding to decades of evidence for muscle and strength gains.', source: 'Frontiers in Nutrition, 2024 (Xu et al.)' }
    ],
    faq: [
      { q: 'Will it make me hold water?', a: 'Some intramuscular water retention occurs initially — this is part of the muscle-fullness effect, not bloating.' },
      { q: 'Do I need to cycle off?', a: 'No — daily long-term use is well-studied and safe.' },
      { q: 'Is creatine bad for kidneys?', a: 'No — extensive research in healthy adults shows no kidney concerns at recommended doses.' }
    ],
    relatedSlugs: ['the-house-pump', 'the-house-seal', 'the-house-greens'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Lift performance increases; better volume.' },
      { week: 'Week 4', text: 'Muscle volume visible.' },
      { week: 'Week 8+', text: 'New strength baseline; sustained gains.' }
    ],
    proTip: '5g daily, any time of day. Loading phases are unnecessary — just be consistent. Muscle saturates over 3-4 weeks regardless.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA'],
    daniels_note: 'Five grams of creatine, daily, for the rest of my life. Most-studied performance supplement on the shelf, period.'
  },
  {
    slug: 'the-house-pump',
    name: 'Pump',
    category: 'supplement',
    sub: 'workout',
    price: 39.99,
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
      { actor: 'L-Citrulline', finding: 'L-citrulline supplementation demonstrates measurable improvements in exercise performance, nitric oxide production, and post-workout recovery in athletic performance trials.', source: 'Journal of the International Society of Sports Nutrition' }
    ],
    faq: [
      { q: 'Does this contain caffeine?', a: 'No — Pump is stimulant-free. Pair with coffee or Burn if you want caffeine.' },
      { q: 'Will it cause itching?', a: 'No — this is not beta-alanine. Pump is the smooth, non-tingly pre-workout option.' },
      { q: 'Can I stack this with creatine?', a: 'Yes — Pump pre-workout + Power post-workout is a classic combo.' }
    ],
    relatedSlugs: ['the-house-power', 'the-house-burn', 'the-house-greens'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Immediate workout pump.' },
      { week: 'Week 2', text: 'Better training endurance; less between-set fatigue.' },
      { week: 'Week 4+', text: 'Improved muscle volume from better blood flow during training.' }
    ],
    proTip: '30 minutes before training. Mix with water, drink immediately. Stimulant-free so safe for evening workouts.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA'],
    daniels_note: 'Pre-workout without the stimulants. Citrulline plus arginine at clinical doses. The smoother training session you didn\'t know you needed.'
  },
  {
    slug: 'the-house-seal',
    name: 'Seal',
    category: 'supplement',
    sub: 'workout',
    price: 29.90,
    image: 'products/Seal.jpeg',
    tag: 'Recovery · Gut Integrity · Immune',
    tagline: 'Gut repair meets muscle recovery.',
    description: '3.15g of pure L-glutamine per scoop for gut lining support and post-training repair. Stir into water, get on with it. The recovery supplement that does double duty — gut health and muscle repair in one daily scoop.',
    size: '100g powder · 30 servings',
    ingredients: [
      { name: 'L-Glutamine (free-form)', dose: '3150 mg', what: 'Most abundant amino acid; supports gut lining repair and muscle recovery.' }
    ],
    howToUse: 'Mix 1 scoop into water or post-workout shake. Best taken post-training and/or first thing in the morning on empty stomach. Unflavored — adds no taste to your shake.',
    bestFor: ['recovery', 'gut-health', 'immunity', 'workout-recovery'],
    studies: [
      { actor: 'L-Glutamine', finding: 'L-glutamine supplementation demonstrates supportive effects for gut barrier integrity, exercise recovery, and immune function in clinical research, particularly in athletic and high-stress populations.', source: 'Multiple clinical reviews; Frontiers in Immunology' }
    ],
    faq: [
      { q: 'Does this taste like anything?', a: 'No — completely unflavored, dissolves cleanly in water.' },
      { q: 'When should I take it?', a: 'Post-workout works for muscle recovery; morning empty stomach is best for gut health.' },
      { q: 'Is this the same as BCAAs?', a: 'No — glutamine is a single amino acid focused on recovery and gut. BCAAs are different (leucine, isoleucine, valine).' }
    ],
    relatedSlugs: ['the-house-power', 'the-house-biome', 'the-house-greens'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Faster gut recovery; less post-workout soreness.' },
      { week: 'Week 2', text: 'Better digestive resilience.' },
      { week: 'Week 4+', text: 'New digestive baseline; sustained recovery benefit.' }
    ],
    proTip: 'Pre-bed or post-workout. Glutamine doesn\'t compete with food — take it whenever fits your routine.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA'],
    daniels_note: 'Glutamine for gut and recovery. Tasteless. Mix it with anything. The recovery aid I take whether I trained that day or not.'
  },
  {
    slug: 'the-house-greens',
    name: 'Greens',
    category: 'supplement',
    sub: 'workout',
    price: 35.90,
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
      { actor: 'Multi-Greens Blends', finding: 'Concentrated greens supplementation provides measurable antioxidant capacity, supports phytonutrient intake, and demonstrates positive markers in cardiovascular and cellular health studies.', source: 'Nutrients; multiple clinical reviews' }
    ],
    faq: [
      { q: 'Does this replace vegetables?', a: 'No — but it provides concentrated phytonutrients on days when your diet falls short.' },
      { q: 'How does it taste?', a: 'Pleasant green-apple-and-mint; most users actually look forward to it.' },
      { q: 'Can I take it with Multi?', a: 'Yes — Greens covers phytonutrients; Multi covers vitamins and minerals. Complementary, not redundant.' }
    ],
    relatedSlugs: ['the-house-multi', 'the-house-biome', 'the-house-tranquil'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Subtle energy lift; clearer thinking.' },
      { week: 'Week 2', text: 'Clearer skin; better digestion.' },
      { week: 'Week 4+', text: 'New nutritional baseline; less reliant on perfect eating days.' }
    ],
    proTip: 'Mix with cold water in a shaker bottle — or blend into a smoothie. Hot water destroys some of the enzymes.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA'],
    daniels_note: 'On the days I don\'t eat my vegetables, Greens does the heavy lifting. 22 ingredients, one scoop, tastes like green apple.'
  },
  {
    slug: 'the-house-burn',
    name: 'Burn',
    category: 'supplement',
    sub: 'workout',
    price: 33.90,
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
      { actor: 'Caffeine + EGCG', finding: 'Caffeine combined with green tea catechins demonstrates measurable thermogenic effects and modest metabolic support in clinical trials.', source: 'American Journal of Clinical Nutrition; multiple reviews' }
    ],
    faq: [
      { q: 'Will this make me jittery?', a: 'L-tyrosine and L-carnitine smooth out the caffeine for cleaner focus. Most users find this the smoothest thermogenic.' },
      { q: 'Can I take it with coffee?', a: 'Yes, but reduce coffee by half on Burn days to avoid over-caffeination.' },
      { q: 'Is this safe long-term?', a: 'Yes for healthy adults. Pause use after 8-12 weeks to maintain caffeine sensitivity.' }
    ],
    relatedSlugs: ['the-house-pump', 'the-house-greens', 'the-house-focus'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Clean energy lift; appetite balanced.' },
      { week: 'Week 2', text: 'More predictable hunger patterns.' },
      { week: 'Week 4+', text: 'Thermogenic baseline; sustained metabolic support.' }
    ],
    proTip: 'First thing AM, ideally on empty stomach. Take 2-3 hours before bed at the latest — caffeine half-life is real.',
    freeFrom: ['Non-GMO'],
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
      { actor: 'Marine Collagen', finding: 'Oral marine collagen peptides demonstrate measurable improvements in skin elasticity, hydration, and visible firmness across multiple double-blind trials.', source: 'Marine Drugs; Journal of Cosmetic Dermatology' }
    ],
    faq: [
      { q: 'How long until I see results?', a: 'Skin changes typically appear in 6-8 weeks. Hair and nail benefits compound over 3-6 months.' },
      { q: 'Can I take this with The House Collagen?', a: 'Yes — Radiance is a vitamin-and-mineral gummy; Collagen is concentrated peptides. Stack both for full beauty support.' },
      { q: 'Are these vegan?', a: 'No — Radiance contains marine collagen. Try The House Multi + plant-based collagen alternative for vegan beauty support.' }
    ],
    relatedSlugs: ['the-house-collagen', 'the-house-multi', 'the-house-glow'],
    resultsTimeline: [
      { week: 'Week 4', text: 'Skin glow; the inside-out brightness.' },
      { week: 'Week 8', text: 'Nail growth visibly stronger.' },
      { week: 'Week 12+', text: 'Full hair growth cycle complete; visible thickness change.' }
    ],
    proTip: 'Be patient. Hair and nails grow on a 12-week cycle — you need at least a full quarter to see what this product actually does.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA'],
    daniels_note: 'Beauty from within is real. My nails are stronger, my hair grew faster. Marine collagen plus vitamins, taken every morning.'
  },
  {
    slug: 'the-house-collagen',
    name: 'Collagen',
    category: 'supplement',
    sub: 'beauty',
    price: 33.90,
    image: 'products/Collagen.jpeg',
    tag: 'Skin · Hair · Nails · Joints',
    tagline: 'Firm skin, strong joints, daily.',
    description: '10g of grass-fed bovine hide collagen peptides per scoop, types I & III. Unflavored, dissolves clean in coffee, cooking, anything. The beauty-and-mobility supplement that supports skin firmness and joint health from the inside.',
    size: '300g powder · 30 servings',
    ingredients: [
      { name: 'Hydrolyzed bovine collagen peptides', dose: '10 g', what: 'Grass-fed, pasture-raised; types I and III for skin, hair, nails, joints.' },
      { name: 'Vitamin C', dose: '60 mg', what: 'Required cofactor for collagen synthesis.' }
    ],
    howToUse: 'Mix 1 scoop into hot or cold liquids — coffee, smoothies, soups, oatmeal. Dissolves cleanly with no flavor or texture. Take daily, anytime.',
    bestFor: ['skin-from-within', 'joint-support', 'beauty', 'hair-and-nails'],
    studies: [
      { actor: 'Collagen Peptides', finding: 'Hydrolyzed collagen peptide supplementation demonstrates measurable improvements in skin elasticity, hydration, dermal density, and joint function across multiple clinical trials.', source: 'Skin Pharmacology and Physiology; multiple meta-analyses' }
    ],
    faq: [
      { q: 'Does it really dissolve in coffee?', a: 'Yes — completely. No clumping, no taste change.' },
      { q: 'Vegetarian/vegan?', a: 'No — collagen is animal-derived. Vegan customers should focus on collagen-supporting nutrients (Vitamin C, copper, glycine) instead.' },
      { q: 'How long until I see effects?', a: 'Skin and nail changes in 6-8 weeks. Joint benefits in 8-12 weeks.' }
    ],
    relatedSlugs: ['the-house-radiance', 'the-house-restore', 'the-house-multi'],
    resultsTimeline: [
      { week: 'Week 4', text: 'Skin firmness; bounce-back improves.' },
      { week: 'Week 8', text: 'Joint comfort; less stiffness.' },
      { week: 'Week 12+', text: 'Hair, nails, and skin compound benefit.' }
    ],
    proTip: '10g in your morning coffee. Tasteless, dissolves cleanly. Heat is fine — collagen peptides are stable up to 300°F.',
    freeFrom: ['Gluten-Free', 'Lactose-Free', 'Corn-Free'],
    daniels_note: 'Ten grams in my morning coffee. Tasteless. Skin firmness, joint cushion. The supplement I\'d recommend to anyone over 35.'
  },
  {
    slug: 'the-house-focus',
    name: 'Focus',
    category: 'supplement',
    sub: 'beauty',
    price: 29.90,
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
      { actor: 'Bacopa Monnieri', finding: 'Bacopa monnieri demonstrates measurable cognitive enhancements, particularly in memory consolidation and information processing speed, across multiple clinical trials.', source: 'Phytotherapy Research; multiple meta-analyses' }
    ],
    faq: [
      { q: 'Will this make me wired?', a: 'No — Focus is stim-free. The mental clarity is sustained, not stimulant-based.' },
      { q: 'Can I take it with coffee?', a: 'Yes — they pair well. Coffee for the lift, Focus for the depth.' },
      { q: 'How long until I notice effects?', a: 'Some users feel the focus boost within hours. Bacopa\'s cumulative memory effects build over 4-8 weeks.' }
    ],
    relatedSlugs: ['the-house-synapse', 'the-house-tranquil', 'the-house-burn'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Clearer attention within 30-45 minutes.' },
      { week: 'Week 2', text: 'Sustained focus through long sessions.' },
      { week: 'Week 4+', text: 'Cognitive baseline; less need for caffeine to feel sharp.' }
    ],
    proTip: 'Take 30 minutes before deep work. Don\'t combine with caffeine — the GABA + caffeine combo creates a paradoxical fog.',
    freeFrom: ['Gluten-Free', 'Non-GMO', 'Vegan', '3rd-Party Tested', 'No Artificial Colors', 'No Fillers', 'Made in NA'],
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
  // ═══ SKIN CONCERNS ═══
  {
    id: 'aging',
    discount: 0.08,
    tab: 'skin',
    icon: 'A.',
    name: 'The Anti-Aging Bundle',
    blurb: 'Retinol, peptides, and resurfacing actives that work overnight. Built for visible firmness and texture refinement in 8-12 weeks.',
    slugs: ['the-house-bounce', 'the-house-firm', 'the-house-renewal', 'the-house-eye']
  },
  {
    id: 'acne',
    discount: 0.07,
    tab: 'skin',
    icon: 'B.',
    name: 'The Acne Bundle',
    blurb: 'Salicylic acid, charcoal, and pore-refining actives. The clear-skin stack — gentle enough for daily use, strong enough to make a difference.',
    slugs: ['the-house-clear', 'the-house-mask', 'the-house-polish', 'the-house-boost']
  },
  {
    id: 'dryness',
    discount: 0.07,
    tab: 'skin',
    icon: 'C.',
    name: 'The Hydration Bundle',
    blurb: 'Multi-weight hyaluronic acid and barrier-supporting lipids. The hydration stack that doesn\'t quit by the end of the day.',
    slugs: ['the-house-hyaluronic', 'the-house-hydration', 'the-house-soft', 'the-house-glow']
  },
  {
    id: 'dullness',
    discount: 0.08,
    tab: 'skin',
    icon: 'D.',
    name: 'The Brightening Bundle',
    blurb: 'Vitamin C, niacinamide, and gentle resurfacing for measurable brightness. Glow without irritation.',
    slugs: ['the-house-boost', 'the-house-defense', 'the-house-renewal', 'the-house-radiance']
  },
  {
    id: 'sensitivity',
    discount: 0.07,
    tab: 'skin',
    icon: 'E.',
    name: 'The Soothing Bundle',
    blurb: 'Calming cleansers, soothing toners, and gentle hydrators. The reactive-skin essentials — no fragrance, no aggressive actives.',
    slugs: ['the-house-wash', 'the-house-balance', 'the-house-hyaluronic', 'the-house-soft']
  },
  {
    id: 'pores',
    discount: 0.07,
    tab: 'skin',
    icon: 'F.',
    name: 'The Pore Bundle',
    blurb: 'Niacinamide, salicylic acid, and physical exfoliation. Smooth, refined skin without compromising the moisture barrier.',
    slugs: ['the-house-boost', 'the-house-clear', 'the-house-polish', 'the-house-mask']
  },

  // ═══ WELLNESS GOALS ═══
  {
    id: 'sleep',
    discount: 0.05,
    tab: 'goal',
    icon: 'A.',
    name: 'The Sleep Bundle',
    blurb: 'Magnesium glycinate, glycine, ashwagandha. Deeper rest, less middle-of-the-night waking, calmer mornings.',
    slugs: ['the-house-calm', 'the-house-tranquil']
  },
  {
    id: 'energy',
    discount: 0.07,
    tab: 'goal',
    icon: 'B.',
    name: 'The Energy Bundle',
    blurb: 'Multivitamin, CoQ10, and Vitamin D — the foundational stack for sustainable mental and physical output.',
    slugs: ['the-house-multi', 'the-house-vitality', 'the-house-sunshine', 'the-house-burn']
  },
  {
    id: 'focus',
    discount: 0.06,
    tab: 'goal',
    icon: 'C.',
    name: 'The Focus Bundle',
    blurb: 'Lion\'s mane, bacopa, alpha GPC. Mental clarity that compounds — for thinking work and sustained output.',
    slugs: ['the-house-focus', 'the-house-synapse', 'the-house-flow']
  },
  {
    id: 'stress',
    discount: 0.06,
    tab: 'goal',
    icon: 'D.',
    name: 'The Stress Bundle',
    blurb: 'KSM-66 ashwagandha, magnesium glycinate, adaptogens. Lower cortisol, better stress recovery.',
    slugs: ['the-house-tranquil', 'the-house-calm', 'the-house-greens']
  },
  {
    id: 'strength',
    discount: 0.07,
    tab: 'goal',
    icon: 'E.',
    name: 'The Strength Bundle',
    blurb: 'Creatine, glutamine, citrulline. The most-studied workout supplements at clinically-meaningful doses.',
    slugs: ['the-house-power', 'the-house-pump', 'the-house-seal']
  },
  {
    id: 'beauty',
    discount: 0.06,
    tab: 'goal',
    icon: 'F.',
    name: 'The Glow Bundle',
    blurb: 'Marine collagen, biotin, vitamins A/C/E. Skin firmness, hair strength, nail growth — supplemented from inside.',
    slugs: ['the-house-radiance', 'the-house-collagen']
  },
  {
    id: 'longevity',
    discount: 0.07,
    tab: 'goal',
    icon: 'G.',
    name: 'The Cellular Bundle',
    blurb: 'NAD+, resveratrol, CoQ10. The longevity stack — the daily investments in cellular health that compound over years.',
    slugs: ['the-house-nad-plus', 'the-house-vitality', 'the-house-restore']
  },
  {
    id: 'gut',
    discount: 0.06,
    tab: 'goal',
    icon: 'H.',
    name: 'The Gut Bundle',
    blurb: 'Multi-strain probiotics, glutamine, digestive enzymes. The gut-health foundation for everything else to work better.',
    slugs: ['the-house-biome', 'the-house-seal', 'the-house-greens']
  },
  {
    id: 'joints',
    discount: 0.06,
    tab: 'goal',
    icon: 'I.',
    name: 'The Joint Bundle',
    blurb: 'Curcumin, glucosamine, omega-3, MSM. Daily joint support for active people whose bodies have earned a little extra care.',
    slugs: ['the-house-restore', 'the-house-flow', 'the-house-collagen']
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
 * CURATED BUNDLES — the named bundles featured on bundles.html
 * Each has its own preset discount and slug list.
 * All can be subscribed to at the same bundle price (no additional 15% on top).
 */
window.CURATED_BUNDLES = [
  {
    id: 'ultimate',
    name: 'The Ultimate Bundle',
    discount: 0.25,
    slugs: [
      // 10 daily supplements
      'the-house-multi','the-house-calm','the-house-sunshine','the-house-flow','the-house-biome',
      'the-house-nad-plus','the-house-vitality','the-house-synapse','the-house-tranquil','the-house-restore',
      // 6 AM skincare
      'the-house-wash','the-house-balance','the-house-boost','the-house-hyaluronic','the-house-defense','the-house-soft',
      // 6 PM skincare
      'the-house-bounce','the-house-firm','the-house-hydration','the-house-eye','the-house-renewal','the-house-glow'
    ]
  },
  {
    id: 'daniels-daily',
    name: "Daniel's Daily Bundle",
    discount: 0.18,
    slugs: ['the-house-multi','the-house-calm','the-house-sunshine','the-house-flow','the-house-biome','the-house-nad-plus','the-house-vitality','the-house-synapse','the-house-tranquil','the-house-restore']
  },
  {
    id: 'am',
    name: 'The AM Bundle',
    discount: 0.15,
    slugs: ['the-house-wash','the-house-balance','the-house-boost','the-house-hyaluronic','the-house-defense','the-house-soft']
  },
  {
    id: 'pm',
    name: 'The PM Bundle',
    discount: 0.15,
    slugs: ['the-house-bounce','the-house-firm','the-house-hydration','the-house-eye','the-house-renewal','the-house-glow']
  },
  {
    id: 'workout',
    name: 'The Workout Bundle',
    discount: 0.15,
    slugs: ['the-house-power','the-house-pump','the-house-seal','the-house-greens','the-house-burn']
  },
  {
    id: 'longevity',
    name: 'The Longevity Bundle',
    discount: 0.15,
    slugs: ['the-house-nad-plus','the-house-vitality','the-house-synapse','the-house-tranquil','the-house-restore']
  },
  {
    id: 'glow',
    name: 'The Glow Bundle',
    discount: 0.15,
    slugs: ['the-house-boost','the-house-defense','the-house-glow','the-house-mask','the-house-radiance','the-house-collagen']
  },
  {
    id: 'weekly',
    name: 'The Reset Bundle',
    discount: 0.15,
    slugs: ['the-house-mask','the-house-polish']
  },
  {
    id: 'moms',
    name: "The Mom's Bundle",
    discount: 0.15,
    slugs: ['the-house-calm','the-house-tranquil','the-house-multi','the-house-collagen','the-house-radiance','the-house-eye','the-house-renewal']
  },
  {
    id: 'arianas',
    name: "The Ariana's Bundle",
    discount: 0.15,
    slugs: ['the-house-wash','the-house-boost','the-house-hyaluronic','the-house-soft','the-house-polish','the-house-multi','the-house-radiance','the-house-collagen']
  }
];

window.getCuratedBundleById = function(id) {
  return window.CURATED_BUNDLES.find(b => b.id === id);
};
