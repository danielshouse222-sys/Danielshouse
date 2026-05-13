/**
 * Daniel's House — Product Data
 * Single source of truth for all 33 products.
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
      { actor: 'Plant Protein Cleansers', finding: 'Hydrolyzed plant proteins demonstrate significant moisture-barrier support compared to traditional sulfate-based surfactants in clinical comparison studies.', source: 'Journal of Cosmetic Dermatology, 2022' },
      { actor: 'Sulfate-Free Cleansing', finding: 'Sulfate-free cleansers maintain transepidermal water loss within healthy parameters, preventing the post-cleanse tightness common with traditional surfactants.', source: 'Skin Research and Technology, 2023' }
        ],
    faq: [
      { q: 'Will this strip my skin?', a: 'No — this is a non-stripping cleanser built specifically to maintain the moisture barrier while lifting daily buildup.' },
      { q: 'Can I use it twice a day?', a: 'Yes. It\'s designed for morning and evening use as the foundational first step of both routines.' },
      { q: 'Is this safe for sensitive skin?', a: 'Yes — the formula is sulfate-free and includes calming aloe. Spot-test on the inner forearm if you have very reactive skin.' },
      { q: 'Can I use this with a Clarisonic or face brush?', a: 'Yes, but skip the brush at first to assess your skin\'s response. The formula is gentle enough to clean well by hand. If you do use a brush, run it once a day at most.' },
      { q: 'Does it remove sunscreen and makeup?', a: 'It removes light SPF and natural-finish makeup well. For heavier makeup or chemical SPF, double-cleanse: an oil cleanser first, then The House Wash.' }
        ],
    relatedSlugs: ['the-house-balance', 'the-house-soft', 'the-house-polish'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Clean skin without tightness or stripping.' },
      { week: 'Week 1', text: 'Barrier feels balanced; skin tolerates makeup and SPF better.' },
      { week: 'Week 4', text: 'Improved tolerance to active serums; less reactive skin.' },
      { week: 'Week 8', text: 'Stronger, more resilient barrier — actives that used to sting now feel comfortable.' }
        ],
    proTip: 'Use lukewarm water, never hot. Hot water strips your barrier and triggers oil rebound.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    runtime: 2,
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
      { actor: 'Witch Hazel + Aloe', finding: 'Combination of witch hazel and aloe demonstrates measurable reduction in skin redness and barrier irritation in dermatological studies.', source: 'Phytotherapy Research, 2021' },
      { actor: 'Witch Hazel + Aloe', finding: 'Topical witch hazel demonstrates measurable anti-inflammatory effects on irritated skin without compromising the moisture barrier when formulated without ethanol.', source: 'Journal of Inflammation Research, 2022' }
        ],
    faq: [
      { q: 'Will this dry out my skin?', a: 'No — unlike traditional astringent toners, this formula uses witch hazel at low concentration paired with hydrating aloe and glycerin.' },
      { q: 'Is alcohol in this?', a: 'No — this is alcohol-free.' },
      { q: 'Can I skip this step?', a: 'Yes if you\'re short on time — but using it improves serum absorption noticeably.' },
      { q: 'Will this dry me out like an astringent?', a: 'No — this is the opposite of a traditional alcohol astringent. It uses witch hazel without the drying alcohol carriers, paired with aloe and white tea to hydrate as it tones.' },
      { q: 'Can I skip my serum and just use this?', a: 'You can, but you\'ll get more out of your routine layering a treatment serum after. Balance preps the skin so serums absorb better — it\'s not a substitute for them.' }
        ],
    relatedSlugs: ['the-house-wash', 'the-house-boost', 'the-house-hydration'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Refreshed, prepped skin.' },
      { week: 'Week 1', text: 'Serums absorb noticeably better.' },
      { week: 'Week 4', text: 'More even tone, smaller-looking pores.' },
      { week: 'Week 8', text: 'Pore appearance refined; skin tolerates makeup and SPF more cleanly.' }
        ],
    proTip: 'Spritz onto damp skin straight after cleansing — the moisture helps your serums penetrate deeper.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    runtime: 2,
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
      { q: 'How long until I see results?', a: 'Brightness shifts can be visible in 2-3 weeks. Full results compound over 8-12 weeks of consistent use.' },
      { q: 'Can I use this with retinol?', a: 'Yes, but stagger them — Boost in the AM, retinol (Renewal) in the PM. Vitamin C and retinol both work hard. Splitting them gives each one room to do its thing.' },
      { q: 'Does it sting when applied?', a: 'It shouldn\'t. If you feel mild tingling the first week, that\'s the niacinamide acclimating. Persistent stinging means your barrier needs a break — pause for 3 days and slowly reintroduce.' }
        ],
    relatedSlugs: ['the-house-defense', 'the-house-hyaluronic', 'the-house-renewal'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Subtle brightness; complexion looks clearer.' },
      { week: 'Week 4', text: 'More even pigment, dark spots beginning to fade.' },
      { week: 'Week 8', text: 'Visible glow; uneven tone significantly reduced.' },
      { week: 'Week 12+', text: 'Sustained brightness; new pigment slower to form.' },
      { week: 'Week 8', text: 'Hyperpigmentation visibly faded; even tone without makeup.' }
        ],
    proTip: 'Apply on dry, freshly cleansed skin before Hyaluronic. Vitamin C absorbs best at low pH.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    runtime: 2,
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
      { actor: 'Hyaluronic Acid', finding: 'Topical hyaluronic acid significantly improves skin hydration, elasticity, and reduces appearance of fine lines in clinical dermatoporosis research.', source: 'Sci Reports, 2024' },
      { actor: 'Multi-Weight Hyaluronic Acid', finding: 'Combining low and high molecular weight HA delivers measurable hydration at multiple skin depths — surface plumping plus deeper retention beyond what either weight achieves alone.', source: 'International Journal of Cosmetic Science, 2023' }
        ],
    faq: [
      { q: 'Should I apply on dry or wet skin?', a: 'Damp skin. HA works by binding water — apply right after toner while skin is still moist, then seal with moisturizer.' },
      { q: 'Can it dehydrate my skin?', a: 'Only if applied to dry skin in dry environments. Always use on damp skin and follow with moisturizer.' },
      { q: 'Is this enough as a moisturizer?', a: 'No — HA is a humectant, not a moisturizer. You still need a cream or oil to seal it in.' },
      { q: 'How is this different from The House Hydration?', a: 'Hyaluronic is leaner — 6 ingredients, AM-friendly, layers under SPF without pilling. Hydration is richer with antioxidant cassia and is built for PM under actives like retinol.' },
      { q: 'Will it pill under sunscreen?', a: 'No — let it absorb 60 seconds before applying SPF or moisturizer. The 6-ingredient formula is specifically built not to pill or interfere with downstream layers.' }
        ],
    relatedSlugs: ['the-house-soft', 'the-house-hydration', 'the-house-glow'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Immediate plumpness and bounce.' },
      { week: 'Week 1', text: 'Lasting hydration; lines look softer by midday.' },
      { week: 'Week 4', text: 'New hydration baseline; skin holds moisture longer.' },
      { week: 'Week 8', text: 'Skin holds hydration through the day; fine dehydration lines no longer visible.' }
        ],
    proTip: 'Always apply on slightly damp skin. HA needs moisture to bind to — on dry skin it can actually pull moisture out.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    runtime: 2,
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
      { actor: 'Vitamin C + E', finding: 'Combination Vitamin C + E topical demonstrates synergistic antioxidant protection against UV-induced photoaging in clinical research spanning two decades.', source: 'Antioxidants, 2022' },
      { actor: 'Topical Squalane', finding: 'Plant-derived squalane mimics the skin\'s sebum composition, restoring barrier function in compromised skin within 14 days of daily application.', source: 'Lipids in Health and Disease, 2023' }
        ],
    faq: [
      { q: 'Can I use this with retinol?', a: 'Yes — Defense in the morning, retinol-containing products at night.' },
      { q: 'Will it pill under sunscreen?', a: 'No — wait 60 seconds for full absorption before applying SPF.' },
      { q: 'Is this safe during pregnancy?', a: 'Yes — Defense contains no retinoids, salicylic acid, or hydroquinone.' },
      { q: 'Can I use this with my morning Vit C serum?', a: 'Defense already includes stable Vitamin C, so you can use it instead of a separate C serum. If you want both, use Boost first and Defense second — but skip days if your skin gets reactive.' },
      { q: 'Is the caffeine in this going to keep me up if I use it at night?', a: 'No — topical caffeine works locally on skin (reducing puffiness, improving microcirculation). It doesn\'t reach systemic levels that affect sleep.' }
        ],
    relatedSlugs: ['the-house-boost', 'the-house-firm', 'the-house-renewal'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Skin feels protected, less reactive to environment.' },
      { week: 'Week 4', text: 'Reduced environmental sensitivity, fewer red days.' },
      { week: 'Week 8', text: 'More even tone; under-eye circles look lighter.' },
      { week: 'Week 12+', text: 'Long-term protection compounds; visible resilience.' },
      { week: 'Week 8', text: 'Sun damage visibly evened; afternoon dullness gone.' }
        ],
    proTip: 'Apply before SPF every morning. The antioxidant layer amplifies your sunscreen\'s protection.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    runtime: 2,
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
      { actor: 'Daily Moisture Barrier', finding: 'Consistent daily use of hyaluronic acid + ceramide moisturizers significantly improves skin hydration metrics and barrier function in clinical settings.', source: 'Journal of Drugs in Dermatology, 2023' },
      { actor: 'Multi-Weight HA + Aloe', finding: 'Daily multi-weight hyaluronic moisturizers improve clinical hydration scores by 38% over 4 weeks vs. occlusive-only formulas in randomized comparison trials.', source: 'Journal of Drugs in Dermatology, 2023' }
        ],
    faq: [
      { q: 'Is this rich enough for dry skin?', a: 'For most skin types, yes. Very dry skin may want to layer The House Glow oil on top in winter.' },
      { q: 'Can I use this if I have oily skin?', a: 'Yes — but consider The House Clear if you\'re acne-prone or have heavy oil production.' },
      { q: 'Will it work under makeup?', a: 'Yes — non-greasy finish is designed to be a clean canvas for makeup or SPF.' },
      { q: 'Is this rich enough for dry skin?', a: 'For most skin types, yes. Very dry skin may want to layer The House Glow oil on top in winter — Soft as base hydration, Glow as the occlusive seal.' },
      { q: 'Will it work under makeup?', a: 'Yes — non-greasy finish is specifically designed to be a clean canvas for makeup or SPF. Let it absorb 90 seconds before applying foundation for best results.' }
        ],
    relatedSlugs: ['the-house-clear', 'the-house-renewal', 'the-house-hyaluronic'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Hydrated, comfortable, no greasy finish.' },
      { week: 'Week 2', text: 'Stronger barrier; less afternoon dryness.' },
      { week: 'Week 4', text: 'Smoother complexion; makeup sits better.' },
      { week: 'Week 8', text: 'Skin feels durably comfortable; no afternoon tightness even in dry climates.' }
        ],
    proTip: 'Wait 60 seconds after your serums before applying Soft. Lets the actives absorb fully before being sealed in.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    runtime: 2,
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
      { actor: 'Salicylic Acid 0.5%', finding: 'Daily low-dose salicylic acid demonstrates significant reduction in non-inflammatory acne lesions and pore size after 8 weeks in clinical trials.', source: 'JAAD, ongoing reviews' },
      { actor: 'Salicylic Acid + Niacinamide', finding: 'Combination 2% salicylic + 4% niacinamide formulas reduce acne lesion count by 47% over 8 weeks while minimizing the dryness common with salicylic-only treatments.', source: 'Clinical, Cosmetic and Investigational Dermatology, 2023' }
        ],
    faq: [
      { q: 'Can I use both Clear and Soft?', a: 'Pick one for daily use. Some people use Clear in summer / Soft in winter.' },
      { q: 'Is this strong enough for moderate acne?', a: 'It supports clear skin but isn\'t a treatment for moderate-to-severe acne — see a dermatologist for those cases.' },
      { q: 'Can I use it with retinol at night?', a: 'Yes — but introduce slowly to avoid over-exfoliation. Alternate nights to start.' },
      { q: 'How often can I use this on active breakouts?', a: 'Once daily to start, evening preferred. If your skin tolerates it, you can spot-treat persistent areas a second time — but blanket application twice a day is too much for most people.' },
      { q: 'Can I use this with retinol?', a: 'Yes, but introduce them on alternating nights for the first 4 weeks. Salicylic acid and retinol are both exfoliating in different ways. Once your barrier adapts, you can layer them.' }
        ],
    relatedSlugs: ['the-house-soft', 'the-house-mask', 'the-house-polish'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Skin feels less congested; fewer new breakouts.' },
      { week: 'Week 4', text: 'Visible reduction in active blemishes.' },
      { week: 'Week 8', text: 'Balanced oil production; smaller-looking pores.' },
      { week: 'Week 8', text: 'Clearer skin overall; remaining marks fade with continued use plus daily SPF.' }
        ],
    proTip: 'Use 2-3x weekly max. Daily use can over-strip skin and trigger rebound oil and inflammation.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    runtime: 2,
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
      { q: 'Can I use this if I\'m pregnant?', a: 'No — retinol is not recommended during pregnancy. See your dermatologist for alternatives.' },
      { q: 'How is this different from The House Renewal?', a: 'Renewal is more aggressive (retinol + glycolic) — built for resurfacing. Bounce is the gentler companion (retinyl palmitate + HA + collagen aminos) — built for plumping and recovery. Use them on alternating nights for a full anti-aging stack.' },
      { q: 'Can sensitive skin tolerate this?', a: 'Generally yes — retinyl palmitate is the mildest retinoid. Start every 3 nights and build up. If you\'re extra reactive, layer Hydration on top after applying Bounce as a buffer.' }
        ],
    relatedSlugs: ['the-house-firm', 'the-house-renewal', 'the-house-hydration'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Cell turnover begins; possible mild flaking.' },
      { week: 'Week 4', text: 'Texture smooths; pores look refined.' },
      { week: 'Week 8', text: 'Visible firmness; fine lines soften.' },
      { week: 'Week 12+', text: 'Compounded collagen; deeper transformation.' },
      { week: 'Week 8', text: 'Skin visibly plumper; fine lines around eyes and mouth softened.' }
        ],
    proTip: 'Start with 2 nights per week, build to 3-4 by week 6, daily by week 12. Always SPF the next morning.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    runtime: 2,
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
      { actor: 'Matrixyl 3000', finding: 'Peptide complex demonstrates significant wrinkle depth reduction and skin firmness improvement after 8-12 weeks of consistent topical use.', source: 'IJCS Peptide Studies, 2021' },
      { actor: 'Matrixyl 3000 Peptides', finding: 'Topical Matrixyl 3000 peptide complex demonstrates measurable improvement in skin firmness and wrinkle depth over 8–12 weeks of daily application in clinical studies.', source: 'International Journal of Cosmetic Science, 2022' }
        ],
    faq: [
      { q: 'Can I use this around my eyes?', a: 'Yes — apply to the orbital bone, not directly on the eyelid or waterline.' },
      { q: 'Pregnant-safe?', a: 'Yes — Firm contains no retinoids, salicylic acid, or hydroquinone.' },
      { q: 'Should I use this with Eye Cream?', a: 'Yes — Firm goes on first as a serum; Eye Cream seals it in.' },
      { q: 'Do I need to use this every day?', a: 'Peptides build up best with consistent use — 5–7 nights a week. Daily is fine; this isn\'t an exfoliating active, so it won\'t overload your barrier.' },
      { q: 'When should I expect to see results?', a: 'Firmness changes are slower than turnover changes. Most people see real lifting and texture improvement at the 8–12 week mark with consistent nightly use.' }
        ],
    relatedSlugs: ['the-house-eye', 'the-house-bounce', 'the-house-defense'],
    resultsTimeline: [
      { week: 'Week 4', text: 'Fine lines around eyes look softer.' },
      { week: 'Week 8', text: 'Noticeable firmness; expression lines less etched.' },
      { week: 'Week 12+', text: 'Sustained elasticity; visible structural improvement.' },
      { week: 'Week 12', text: 'Noticeable firmness around jawline and cheek area; skin holds its shape better.' }
        ],
    proTip: 'Apply with your ring finger around the eye area — it\'s the weakest finger and applies the gentlest pressure for this thin skin.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    runtime: 2,
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
      { actor: 'Glycerin + HA', finding: 'Combined humectant systems demonstrate 24-hour hydration retention superior to either ingredient alone in clinical comparison studies.', source: 'Sci Reports, 2024' },
      { actor: 'Glycerin Humectant Action', finding: 'Glycerin demonstrates 24-hour stratum corneum hydration retention in clinical trials and synergizes with HA to extend humectant effects beyond either ingredient alone.', source: 'Skin Pharmacology and Physiology, 2023' }
        ],
    faq: [
      { q: 'How is this different from The House Hyaluronic?', a: 'Hyaluronic is leaner (6 ingredients, AM-friendly). Hydration is richer with antioxidant cassia — built for layering with PM actives.' },
      { q: 'Can I use both?', a: 'Yes — Hyaluronic AM, Hydration PM is a great pairing.' },
      { q: 'Pregnant-safe?', a: 'Yes — no retinoids, no salicylic acid.' },
      { q: 'Is this the same as a moisturizer?', a: 'No — Hydration is a humectant serum, not an occlusive moisturizer. It pulls water into the skin. Always seal it in with The House Soft on top (or Glow oil for very dry skin).' },
      { q: 'Can I use this every night?', a: 'Yes — this is one of the safest, most universally tolerated products in the line. Daily use is the goal, especially if you\'re also using retinol or AHAs.' }
        ],
    relatedSlugs: ['the-house-hyaluronic', 'the-house-eye', 'the-house-renewal'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Plumper, dewier skin.' },
      { week: 'Week 1', text: 'Lasting hydration even into the afternoon.' },
      { week: 'Week 4', text: 'Improved retinol tolerance; less flaking during retinization.' },
      { week: 'Week 8', text: 'Skin holds plumpness deep into the next morning; retinol routine feels easier.' }
        ],
    proTip: 'Layer over Bounce to soften the retinol response. Skin tolerates actives much better with HA buffer.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    runtime: 3,
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
      { actor: 'Caffeine for Periorbital', finding: 'Topical caffeine demonstrates measurable reduction in periorbital puffiness and improved microcirculation in clinical eye-area studies.', source: 'Journal of Cosmetic Science, 2022' },
      { actor: 'Caffeine + Peptides for Periorbital', finding: 'Topical caffeine combined with palmitoyl peptides reduces periorbital puffiness scores by 32% over 6 weeks and improves microcirculation in the delicate eye area.', source: 'Journal of Cosmetic Dermatology, 2023' }
        ],
    faq: [
      { q: 'How much should I use?', a: 'A rice-grain amount per eye is plenty. Eye creams are concentrated.' },
      { q: 'Can I use this if I have sensitive eyes?', a: 'Yes — fragrance-free and dermatologist-tested for the eye area.' },
      { q: 'Will it work under concealer?', a: 'Yes — wait 30 seconds for full absorption before applying makeup.' },
      { q: 'Will this fix dark circles caused by genetics?', a: 'Honestly, no — true genetic dark circles are pigmentation and shadow that no eye cream resolves alone. This will reduce vascular puffiness and surface dullness. For deep hereditary dark circles, results require dermatology procedures, not topicals.' },
      { q: 'Can I use my retinol around my eyes?', a: 'You can, but use only the smallest amount applied to the orbital bone — not the lid. The House Eye is gentler and more targeted; using it alongside Renewal (on the rest of your face) is the safer move.' }
        ],
    relatedSlugs: ['the-house-firm', 'the-house-renewal', 'the-house-bounce'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Less morning puffiness.' },
      { week: 'Week 4', text: 'Darker circles look lighter; under-eye smoother.' },
      { week: 'Week 8+', text: 'Sustained brightness; visible elasticity improvement.' },
      { week: 'Week 8', text: 'Brighter overall eye area; fine lines softened; makeup sits cleaner.' }
        ],
    proTip: 'Tap, never rub. The under-eye is the thinnest skin on your face — friction creates more damage than product fixes.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    runtime: 2,
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
      { actor: 'Glycolic Acid AHA', finding: 'Topical glycolic acid demonstrates significant improvements in skin texture, tone uniformity, and fine line reduction across multiple clinical reviews.', source: 'JAAD reviews' },
      { actor: 'Retinol + Glycolic Combination', finding: 'Topical 0.5% retinol paired with low-percentage AHA demonstrates faster cell turnover and texture refinement compared to retinol-alone formulations in 12-week trials.', source: 'Dermatologic Surgery, 2023' }
        ],
    faq: [
      { q: 'Can I use Renewal and Bounce on the same night?', a: 'No — alternate nights. Both contain retinoid-family actives plus glycolic; combining can cause over-exfoliation.' },
      { q: 'Will it sting?', a: 'A mild tingle is normal initially. Burning is not — discontinue if that happens.' },
      { q: 'Pregnant-safe?', a: 'No — Renewal contains glycolic acid and retinyl palmitate. Use Hydration as a pregnancy-safe alternative.' },
      { q: 'How long until I can use it nightly?', a: 'Most people get to nightly use by week 4–6. Start 2 nights/week, increase by one night each week as your skin tolerates. Pushing faster invites flaking and a compromised barrier — slow is faster overall.' },
      { q: 'Can I use this if I\'m on Tretinoin or Accutane?', a: 'No — too much overlap. Save this for when you\'re off prescription retinoids and ready to maintain your gains.' }
        ],
    relatedSlugs: ['the-house-bounce', 'the-house-hydration', 'the-house-eye'],
    resultsTimeline: [
      { week: 'Week 2', text: 'Brighter, more refined tone.' },
      { week: 'Week 4', text: 'Smoother texture; spots fade.' },
      { week: 'Week 8+', text: 'Even surface; compounded resurfacing benefit.' },
      { week: 'Week 12', text: 'Tone evened, fine lines softened, texture refined — your skin\'s new baseline.' }
        ],
    proTip: 'Never combine with Bounce on the same night. Alternate them across the week to avoid over-exfoliation.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    runtime: 3,
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
      { actor: 'Rosehip Oil', finding: 'Topical rosehip oil contains natural retinoid precursors and demonstrates measurable improvements in skin texture and tone with consistent use.', source: 'Phytotherapy Research, 2022' },
      { actor: 'Plant Oils + Squalane', finding: 'Multi-oil blends featuring squalane, jojoba, and marula deliver TEWL reduction comparable to occlusive moisturizers while leaving skin less greasy than petrolatum-based alternatives.', source: 'Cosmetics, 2022' }
        ],
    faq: [
      { q: 'Will this break me out?', a: 'For most skin types, no — these are non-comedogenic oils. Acne-prone skin should patch test first.' },
      { q: 'Should I use it AM or PM?', a: 'PM is ideal as the sealing step. Can use in AM but skip if you have oily skin or before SPF.' },
      { q: 'Can I add it to my moisturizer?', a: 'Yes — 1-2 drops mixed into your moisturizer is great for winter dryness.' },
      { q: 'Will this make me break out?', a: 'Unlikely — the oils used (squalane, jojoba, marula) are low-comedogenic. If you\'re extremely acne-prone, start with 2–3 drops, 3 nights/week and assess. Switch to it as the last step at night, not under makeup.' },
      { q: 'Can I use it under makeup?', a: 'Not recommended for most people — face oils can disrupt foundation. Use Glow at night only, or in the morning on no-makeup days when you want a dewy finish.' }
        ],
    relatedSlugs: ['the-house-soft', 'the-house-renewal', 'the-house-mask'],
    resultsTimeline: [
      { week: 'Day 1', text: 'Immediate glow and sealed-in moisture.' },
      { week: 'Week 1', text: 'Strengthened barrier; skin holds active ingredients longer.' },
      { week: 'Week 4', text: 'Improved barrier baseline; less reactive overall.' },
      { week: 'Week 8', text: 'Skin holds a natural glow without highlighter; smoother texture day-to-day.' }
        ],
    proTip: '2 drops mixed into moisturizer for daily use, or 3 drops pressed in as the last step on dry winter nights.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    runtime: 3,
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
      { actor: 'Activated Charcoal', finding: 'Activated charcoal demonstrates measurable absorption of skin oil and impurities in dermatological purification studies.', source: 'Journal of Cosmetic Dermatology, 2021' },
      { actor: 'Kaolin Clay Masks', finding: 'Topical kaolin clay applications demonstrate significant sebum reduction and pore appearance improvement at 1–2 uses per week without disrupting skin pH balance.', source: 'International Journal of Dermatology, 2022' }
        ],
    faq: [
      { q: 'Can I use this with Polish in the same week?', a: 'Yes — Mask one night, Polish another. Don\'t use both on the same night.' },
      { q: 'How often should I use it?', a: 'Once or twice per week. More than that may dry out the skin.' },
      { q: 'Will it cause breakouts?', a: 'No — the formula draws out existing buildup without irritating skin.' },
      { q: 'How often should I use this?', a: '1–2 times a week is the sweet spot. More than that and you risk over-stripping. If you have very oily skin, twice a week. Sensitive skin or dry skin, once a week is plenty.' },
      { q: 'Can I use it on the same night I do my Renewal?', a: 'Skip Renewal on mask nights — too much exfoliation in one session. Mask nights replace your active step. Just cleanse, mask, then moisturize and sleep.' }
        ],
    relatedSlugs: ['the-house-polish', 'the-house-clear', 'the-house-wash'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Cleaner-looking pores after each use.' },
      { week: 'Week 4', text: 'Refined texture; clearer overall skin clarity.' },
      { week: 'Ongoing', text: 'Used 2x weekly for sustained pore health.' },
      { week: 'Week 8', text: 'Visibly refined pores and lasting clarity; oily zones better balanced.' }
        ],
    proTip: 'Five minutes max. Longer doesn\'t deepen results — it just dries out your barrier and creates rebound oil.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    runtime: 3,
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
      { actor: 'Physical vs Chemical Exfoliation', finding: 'Plant cellulose physical exfoliants demonstrate effective dead-skin removal with significantly less barrier disruption than aggressive chemical exfoliants.', source: 'JAAD reviews' },
      { actor: 'Mechanical + Chemical Exfoliation', finding: 'Combined weekly mechanical exfoliation with daily low-percentage chemical exfoliants demonstrates faster texture refinement than either method alone, without barrier compromise.', source: 'Dermatologic Surgery, 2023' }
        ],
    faq: [
      { q: 'Is this too rough for sensitive skin?', a: 'No — plant cellulose is one of the gentlest physical exfoliants. Patch test first if you\'re very reactive.' },
      { q: 'Can I use it with Renewal?', a: 'Use Polish on a different night than Renewal — both exfoliate, just in different ways.' },
      { q: 'Pregnant-safe?', a: 'Yes — fragrance-free option of the active formula contains no salicylic acid or retinoids.' },
      { q: 'Is this better than a chemical exfoliant?', a: 'Different jobs. Polish is mechanical — physically lifts dead skin and surface buildup. Chemical exfoliants (like the glycolic in Renewal) work deeper at the cellular level. Use Polish 1–2x/week alongside a daily chemical actives routine.' },
      { q: 'Will this be too rough on sensitive skin?', a: 'The grains are designed to be small and round (not jagged) for gentle action. That said, start once a week and use the lightest possible pressure. If you feel a sting, rinse immediately and reduce frequency.' }
        ],
    relatedSlugs: ['the-house-mask', 'the-house-wash', 'the-house-glow'],
    resultsTimeline: [
      { week: 'Week 1', text: 'Smoother, softer skin.' },
      { week: 'Week 4', text: 'Visible glow; makeup applies more evenly.' },
      { week: 'Ongoing', text: '2x weekly use for sustained smoothness.' },
      { week: 'Week 8', text: 'Routinely smooth, brighter complexion; actives absorb noticeably better.' }
        ],
    proTip: 'Apply to wet skin in gentle circular motions for 30-60 seconds. Rinse with cool water to close the pores afterward.',
    freeFrom: ['Paraben-Free', 'Sulfate-Free', 'Phthalate-Free', 'Fragrance-Free', 'Cruelty-Free', 'Vegan', 'Made in NA', 'Non-GMO', 'Third-Party Tested'],
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
    blurb: "Retinol and peptides where age shows, plus collagen and NAD+ for the cellular side. Anti-aging from both directions, because skin doesn't age in isolation from the body.",
    slugs: ['the-house-bounce', 'the-house-firm', 'the-house-eye', 'the-house-collagen', 'the-house-nad-plus', 'the-house-radiance']
  },
  {
    id: 'acne',
    discount: 0.12,
    tab: 'skin',
    icon: 'B.',
    name: 'The Clear-Skin Bundle',
    blurb: 'Salicylic acid and niacinamide where pores clog, plus probiotics and omega-3s for the gut-skin axis behind chronic breakouts. The full inside-out clear-skin protocol.',
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
    blurb: "Physical polish, glycolic acid resurfacing, and weekly charcoal detox for visible smoothness, plus niacinamide and the probiotic that addresses the gut-skin axis behind pore appearance and surface bumps. Texture refinement, inside and out — without the acne-heavy actives.",
    slugs: ['the-house-polish', 'the-house-renewal', 'the-house-mask', 'the-house-boost', 'the-house-biome']
  },
  {
    id: 'glow',
    discount: 0.15,
    tab: 'skin',
    icon: 'G.',
    name: 'The Glow Bundle',
    blurb: "The inside-out glow protocol. Topical vitamin C and antioxidant defense for the surface, the weekly charcoal mask that primes everything, the omega-rich oil seal at night — paired with the daily beauty vitamins and 10g of collagen that build glow from within. Visible luminosity in 6-8 weeks.",
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
    blurb: "The weekly skincare reset. Charcoal-clay detox mask and the gentle physical polish — used once or twice a week to clear buildup, brighten dull patches, and prime skin so everything else works harder. The complement to any daily routine.",
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
    blurb: "Adaptogens and magnesium for the cortisol response, plus the gentle barrier toner and weekly detox mask for skin that shows stress before the body says it. Lower stress visibly.",
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
    blurb: "The joint-comfort protocol — curcumin, omega-3, collagen — plus the omega-rich facial oil that pairs internally and topically for whole-body inflammation resolution.",
    slugs: ['the-house-restore', 'the-house-flow', 'the-house-collagen', 'the-house-glow']
  },
  {
    id: 'travel',
    discount: 0.15,
    tab: 'goal',
    icon: 'J.',
    name: 'The Travel Stack',
    blurb: "TSA-friendly bottles, fewer pieces, full coverage. The barrier-respecting cleanser for hotel-water faces, the multivitamin and omega-3 that handle airplane meals, magnesium for the time-zone reset, and vitamin D for the days you don't see the sun. Built to go where you go.",
    slugs: ['the-house-wash', 'the-house-multi', 'the-house-flow', 'the-house-calm', 'the-house-sunshine']
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
      // 6 AM skincare (in routine order: cleanse → tone → serums → moisturize)
      'the-house-wash','the-house-balance','the-house-boost','the-house-hyaluronic','the-house-defense','the-house-soft',
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
      // AM (cleanse → tone → vitamin C → HA → defense → moisturizer)
      'the-house-wash','the-house-balance','the-house-boost','the-house-hyaluronic','the-house-defense','the-house-soft',
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
    slugs: ['the-house-wash','the-house-balance','the-house-boost','the-house-hyaluronic','the-house-defense','the-house-soft']
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
