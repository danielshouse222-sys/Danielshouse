/* BUNDLE DETAILS — long-form content per bundle.
   Used by bundle.html (?slug=X) to render the detail page.
   Keyed by bundle id (matches CURATED_BUNDLES id or CONCERN_BUNDLES id).

   Each entry has: eyebrow, description (long), whyThis (rationale paragraph),
   timeline (4-5 entries of {week, text}), faq (3-4 {q, a}), and optional `bestFor`. */

window.BUNDLE_DETAILS = {
  // ═══ FLAGSHIP — CURATED ═══
  'ultimate': {
    eyebrow: 'The Full Stack · Every Bottle Worth Having',
    description: 'Twenty-two bottles in one box. The complete Daily supplement stack of ten paired with both AM and PM skincare rituals — every product Daniel actually uses on himself, every day. The biggest savings on the site (25% off retail) and the simplest decision: the whole house, all at once.',
    whyThis: 'The Ultimate isn\'t a marketing tier — it\'s what happens when you stop assembling supplements piecemeal and let the routine compound. The Daily Stack covers the inside (energy, immunity, sleep, recovery, cellular health), the AM ritual builds and protects the barrier (cleanse, tone, antioxidant defense, hydrate, SPF-ready moisturize), and the PM ritual handles repair (retinol, exfoliation, deep hydration, eye, overnight oil). Stacked together, the effects compound: better gut function improves nutrient delivery to skin, magnesium and ashwagandha improve sleep which improves skin repair, omega-3s reduce inflammation which improves both joint comfort and skin clarity.',
    timeline: [
      { week: 'Week 1', text: 'Skincare barrier feels balanced; products absorb cleanly. Supplements begin to stabilize daily energy and digestion.' },
      { week: 'Week 4', text: 'Visible skin improvement — texture, hydration, brightness. Supplement effects compound — sleep deeper, mornings calmer, recovery faster.' },
      { week: 'Week 8', text: 'Skin firmness and fine line reduction become noticeable. Cellular energy markers (CoQ10, NAD+) baseline at higher levels. Stress resilience visibly improved.' },
      { week: 'Week 12+', text: 'The full compounding effect: skin elasticity at multi-year baseline highs, sustained daily energy, deep cardiovascular and longevity markers in motion. The full-system effect Daniel built this around.' }
    ],
    faq: [
      { q: 'Is this just every product bundled together?', a: 'Yes — 22 bottles, the entire AM/PM skincare routine plus the complete Daily supplement stack. The pricing reflects the buying-it-all discount (25% off retail) rather than a different formulation.' },
      { q: 'Can I subscribe to the Ultimate?', a: 'Yes — and most customers do. Monthly delivery at the same 25% off price, with the option to skip, pause, or cancel any month. The subscribe price doesn\'t stack additional discount on top, since the Ultimate is already at the deepest savings on the site.' },
      { q: 'What if I already have some of these products?', a: 'You can build a custom version using BYO (Build Your Own) on the Bundles page — that gives tiered discounts at 3, 6, and 9 products. For 10+ overlapping products, the Ultimate is usually still better even with duplicates.' },
      { q: 'How long does one Ultimate box last?', a: 'About 30 days for the supplements (each bottle is a 30-day supply) and 2-3 months for the skincare (skincare lasts longer per bottle). Monthly subscribers typically pause every 2-3 months once the skincare backlog stacks up.' }
    ]
  },

  // ═══ CONCERN BUNDLES — SKIN ═══
  'aging': {
    eyebrow: 'Skin Concern · Visible Anti-Aging',
    description: 'Four targeted products — retinol, peptides, glycolic resurfacing, and the eye treatment — that together address the four mechanisms of visible aging: cell turnover slowdown, collagen breakdown, surface texture buildup, and the thinning skin around the eyes.',
    whyThis: 'Anti-aging that works isn\'t one hero product — it\'s the right combination working at different depths and different times. Retinol (in Bounce, used at night) stimulates collagen and cell turnover at the dermis. Peptides (in Firm) signal collagen synthesis at the surface. Glycolic acid (in Renewal) accelerates surface turnover so the retinol can penetrate properly. The Eye Cream addresses the thinner orbital skin where caffeine and peptides have outsized effect. Visible results compound over 8-12 weeks of consistent use.',
    timeline: [
      { week: 'Week 1', text: 'Initial skin acclimation — possible mild dryness or flaking as cell turnover accelerates. This is expected and resolves.' },
      { week: 'Week 4', text: 'Surface texture noticeably smoother. Skin reflects light differently — early "glow" effect from improved turnover.' },
      { week: 'Week 8', text: 'Fine lines around eyes and forehead measurably softer. Skin firmness improves; foundation sits differently on the surface.' },
      { week: 'Week 12+', text: 'The compounding effect: visible improvement in elasticity, tone evenness, and skin density. Maintain with consistent use — anti-aging is a long-term protocol, not a short-term treatment.' }
    ],
    faq: [
      { q: 'I\'ve never used retinol before — is this too much?', a: 'Start slow: Bounce (the retinol product) once or twice a week for the first 2-3 weeks, building up to 4-5 nights weekly. The other three products are gentle enough for daily use from day one. Always wear sunscreen during the day when using retinol.' },
      { q: 'When should I see results?', a: 'Texture and brightness shifts in 4 weeks. Visible firmness and fine line reduction at 8-12 weeks. Anti-aging is a marathon protocol — consistency over intensity is what produces durable results.' },
      { q: 'Can I use these every day?', a: 'Renewal (glycolic) and Bounce (retinol) are nighttime products — alternate them rather than using both same night when starting out. Firm and Eye are AM or PM and can be used daily.' }
    ]
  },
  'acne': {
    eyebrow: 'Skin Concern · Clear, Refined Skin',
    description: 'A four-product clear-skin protocol — salicylic acid toner, charcoal mask, physical polish, and pore-refining niacinamide serum. Gentle enough for daily use, strong enough to make measurable difference in 4-8 weeks.',
    whyThis: 'Acne and breakouts are usually a multi-factor problem: excess oil, pore clogging, surface buildup, and inflammation. This bundle addresses all four. Clear (salicylic acid toner) dissolves the oil and dead-skin matrix inside pores — the most-validated topical for acne-prone skin. Mask (charcoal weekly) draws out accumulated impurities. Polish (physical exfoliation) smooths surface texture without over-stripping. Boost (niacinamide) reduces inflammation and refines pore appearance over time. Built to be gentle enough for daily-to-multi-weekly use without triggering rebound oil.',
    timeline: [
      { week: 'Week 1', text: 'Pores feel cleaner; immediate visible reduction in surface oil. Possible initial purging if very acne-prone.' },
      { week: 'Week 4', text: 'New breakouts noticeably less frequent. Existing blemishes heal faster; less post-acne marks.' },
      { week: 'Week 8', text: 'Skin clarity measurably improved. Pore appearance refined; surface texture smoother. Skin tone more even.' },
      { week: 'Week 12+', text: 'Sustained clear-skin baseline. Cyclical breakouts much reduced. The protocol becomes preventive maintenance rather than corrective treatment.' }
    ],
    faq: [
      { q: 'I have sensitive acne-prone skin — is this too aggressive?', a: 'No — this stack is specifically built to address acne without the harsh-stripping that often triggers rebound oil and irritation. Polish and Mask are weekly, not daily. Start with 2-3 nights of Clear and build up.' },
      { q: 'Should I use this with my prescription acne treatment?', a: 'Generally yes, but check with your dermatologist. Niacinamide and salicylic acid work alongside most prescription topicals (tretinoin, benzoyl peroxide, antibiotics). Avoid using physical exfoliation (Polish) on the same day as strong actives.' },
      { q: 'When can I expect clearer skin?', a: 'Visible reduction in new breakouts at 4 weeks. Sustained clearer skin at 8-12 weeks. Skin needs a full cell turnover cycle (~28 days) to show response to topical changes — patience is the key variable.' }
    ]
  },
  'dryness': {
    eyebrow: 'Skin Concern · Lasting Hydration',
    description: 'Four hydration-focused products — multi-weight hyaluronic acid serum, ceramide moisturizer, finishing facial oil, and overnight oil — that build hydration at multiple skin depths and seal it in.',
    whyThis: 'Lasting hydration requires three things: humectants that pull water in (hyaluronic acid), emollients that fill the gaps between cells (ceramides, squalane), and occlusives that prevent water loss (facial oils). This bundle delivers all three in sequence. Hyaluronic (multi-weight HA) hydrates at multiple depths simultaneously. Hydration (ceramide moisturizer) restores the lipid matrix. Soft (overnight ceramide cream) does deep barrier repair while you sleep. Glow (facial oil) seals it all in. The cumulative effect: dewy, plumped, durable hydration that doesn\'t fade by mid-afternoon.',
    timeline: [
      { week: 'Week 1', text: 'Immediate plump-and-glow effect from layered hyaluronic. Skin feels softer to the touch.' },
      { week: 'Week 4', text: 'Skin barrier visibly stronger — less reactivity, less afternoon dullness. Makeup sits better on the surface.' },
      { week: 'Week 8', text: 'Sustained all-day hydration without midday reapplication. Skin elasticity improves; fine lines from dehydration soften.' },
      { week: 'Week 12+', text: 'Durable, deep hydration that compounds. The "thirsty skin" baseline resets to "well-hydrated" baseline.' }
    ],
    faq: [
      { q: 'Can I use all four products together every day?', a: 'Yes — that\'s the design. Layer in order from thinnest to thickest: Hyaluronic (serum) → Hydration (moisturizer) → Soft (overnight cream) → Glow (oil). All four are gentle enough for daily use.' },
      { q: 'Will the facial oil break me out?', a: 'No — Glow uses non-comedogenic plant oils (squalane, jojoba) that mimic skin\'s natural sebum. Even oily skin tolerates it well, and many oily-skin customers find it actually balances oil production.' },
      { q: 'Is this enough for very dry/cracked skin?', a: 'For seasonal dryness, yes. For chronic skin conditions like eczema or severe atopic dermatitis, pair with a clinical-grade barrier cream and consult a dermatologist. This bundle is preventive hydration, not medical-grade treatment.' }
    ]
  },
  'dullness': {
    eyebrow: 'Skin Concern · Brightness & Even Tone',
    description: 'Four brightening products — vitamin C serum, antioxidant defense moisturizer, glycolic resurfacing pads, and the beauty gummy — that target uneven tone from both topical and internal angles. Glow without irritation.',
    whyThis: 'Dull, uneven skin tone has three causes: surface buildup, pigment irregularities, and oxidative damage from sun and pollution. This stack addresses all three. Boost (vitamin C) brightens pigment irregularities and inhibits melanin transfer. Defense (antioxidant complex) neutralizes the free-radical damage that causes dullness. Renewal (glycolic acid) accelerates surface turnover to reveal fresh skin beneath. Radiance (oral collagen + beauty vitamins) supports skin from inside, where surface protocols can\'t reach. The combination produces measurably brighter, more even skin in 6-8 weeks.',
    timeline: [
      { week: 'Week 1', text: 'Immediate freshness from Renewal exfoliation; vitamin C starts the antioxidant baseline.' },
      { week: 'Week 4', text: 'Skin reflects light more evenly. Hyperpigmentation and post-acne marks start to fade.' },
      { week: 'Week 8', text: 'Measurable brightness improvement; sun-damage spots visibly softer. Skin "glow" baseline reset.' },
      { week: 'Week 12+', text: 'Sustained luminosity. The compounded inside-out effect — vitamin C topically + collagen and beauty vitamins internally — produces durable brightness that single products can\'t match.' }
    ],
    faq: [
      { q: 'Will vitamin C make my skin sensitive to sun?', a: 'Counterintuitively, no — vitamin C actually enhances sunscreen\'s photoprotection. That said, always wear SPF daily (especially when using glycolic acid in Renewal). The combination of topical vitamin C and SPF produces the strongest defense against sun-caused dullness.' },
      { q: 'When will I see brighter skin?', a: 'Subtle freshness in 1-2 weeks from exfoliation. Visible tone improvement in 6-8 weeks. The internal beauty stack (Radiance) takes 8-12 weeks for its full inside-out effect to compound.' },
      { q: 'Can I use this with hydroquinone or other prescription brighteners?', a: 'Yes — this bundle pairs well with prescription brighteners. Niacinamide (in the formulas) supports the same melanin pathway and amplifies prescription brighteners\' effect.' }
    ]
  },
  'sensitivity': {
    eyebrow: 'Skin Concern · Calm, Resilient Skin',
    description: 'Four reactive-skin essentials — gentle hydrating cleanser, alcohol-free witch hazel toner, multi-weight hyaluronic acid, and the overnight ceramide cream. No fragrance, no aggressive actives, no over-stripping.',
    whyThis: 'Sensitive skin doesn\'t need more — it needs better. The wrong actives, the wrong cleanser, the wrong fragrance can compound irritation for weeks. This bundle strips out everything reactive skin reacts to. Wash is sulfate-free and built on hydrolyzed plant proteins that don\'t disrupt the barrier. Balance uses witch hazel (the gentle astringent) rather than alcohol-based toners. Hyaluronic delivers pure barrier-supporting hydration. Soft\'s ceramide cream does overnight barrier repair. Together they form a no-irritation routine that actually heals the barrier rather than perpetuating the reactive cycle.',
    timeline: [
      { week: 'Week 1', text: 'Reactivity reduces; less redness after washing. Skin feels less "stripped" through the day.' },
      { week: 'Week 4', text: 'Barrier visibly stronger; tolerance to other actives gradually returns. Makeup and SPF sit better.' },
      { week: 'Week 8', text: 'Sustained calm baseline. Triggers (weather, fragrance, masks) cause noticeably less reaction.' },
      { week: 'Week 12+', text: 'Durable barrier resilience. Skin can tolerate gentle actives (mild AHA, retinol) you previously couldn\'t handle.' }
    ],
    faq: [
      { q: 'Is this enough for rosacea or eczema?', a: 'For mild reactive skin and barrier-compromised skin from over-exfoliation, yes. For diagnosed rosacea or eczema, pair with a dermatologist-prescribed treatment. This bundle complements clinical care; it doesn\'t replace it.' },
      { q: 'Can I add retinol or vitamin C later?', a: 'After 4-8 weeks of consistent barrier rebuilding, yes — slowly. Start with niacinamide (in Boost), wait two more weeks, then introduce vitamin C, then retinol if you want it. The barrier needs to heal before it can tolerate stronger actives.' },
      { q: 'Why no facial oil in this bundle?', a: 'Some sensitive-skin users do well with non-comedogenic oils; others react. We left it out by default and recommend Glow as an optional add-on once your barrier has stabilized for 4+ weeks.' }
    ]
  },
  'pores': {
    eyebrow: 'Skin Concern · Pore Refinement',
    description: 'Four targeted products — niacinamide pore serum, salicylic acid toner, physical polish, and the weekly charcoal mask — that refine pore appearance and clarity without compromising the moisture barrier.',
    whyThis: 'Pore size is largely genetic, but pore appearance is highly modifiable. Visible pores look bigger when they\'re clogged with oil and dead skin, when surface texture is uneven, and when inflammation around the pore reduces elasticity. This bundle addresses all three. Boost (niacinamide) reduces sebum production and refines pore appearance with weeks of consistent use. Clear (salicylic acid) dissolves the oil and dead-skin plugs that visually enlarge pores. Polish (gentle physical exfoliation) smooths surface texture so light reflects evenly. Mask (charcoal weekly) draws out accumulated impurities. Together they produce smoother, more refined skin without the rebound oil that aggressive pore treatments cause.',
    timeline: [
      { week: 'Week 1', text: 'Pores feel cleaner; skin texture immediately smoother after Polish or Mask use.' },
      { week: 'Week 4', text: 'Less visible oil throughout the day. Pore appearance softens, particularly in T-zone.' },
      { week: 'Week 8', text: 'Sustained pore refinement. Niacinamide effect on sebum production compounds. Surface texture visibly smoother.' },
      { week: 'Week 12+', text: 'Durable refined-skin baseline. Less day-long shine; foundation sits more evenly. Pores look smaller and clarity holds.' }
    ],
    faq: [
      { q: 'Will my pores actually get smaller?', a: 'Not literally — pore size is genetic. But pore appearance can shrink significantly with sustained protocol. Most users see noticeable visual reduction at 8-12 weeks.' },
      { q: 'How often should I use Polish and Mask?', a: 'Polish: 1-2 times per week. Mask: 1 time per week. Daily physical exfoliation is too much and triggers rebound oil. Less is more — consistency wins.' },
      { q: 'Does this dry out my skin?', a: 'No — salicylic acid in Clear is at the gentle 2% concentration; niacinamide in Boost is barrier-supporting. Pair with the hydration bundle if your skin runs dry.' }
    ]
  },

  // ═══ CONCERN BUNDLES — GOALS ═══
  'sleep': {
    eyebrow: 'Wellness Goal · Deeper Rest',
    description: 'Two supplements together — magnesium glycinate for nervous system support and KSM-66 ashwagandha for cortisol regulation. The clean-sleep stack: no melatonin, no morning grogginess, no dependence.',
    whyThis: 'Most "sleep supplements" use melatonin, which addresses a specific problem (jet lag, shift work) but isn\'t built for routine nightly use. The actual mechanisms of poor sleep are usually nervous system overstimulation and elevated evening cortisol. Calm (magnesium glycinate) supports the GABA pathway and nervous system relaxation without sedation — your body uses it to wind down naturally. Tranquil (KSM-66 ashwagandha) reduces serum cortisol over 4-6 weeks of consistent use, which directly improves sleep architecture (deeper, fewer mid-night wakings). Together they address sleep at its actual root causes.',
    timeline: [
      { week: 'Week 1', text: 'Faster wind-down at night; muscle tension visibly reduces.' },
      { week: 'Week 4', text: 'Sleep onset improves; mid-night wakings reduce. Mornings feel calmer.' },
      { week: 'Week 8', text: 'Cortisol response to daily stressors visibly calmer. Sleep quality measurably deeper.' },
      { week: 'Week 12+', text: 'Sustained nervous system support. The "tired but wired" baseline resets to genuine rest.' }
    ],
    faq: [
      { q: 'Will this make me drowsy during the day?', a: 'No — these aren\'t sedatives. Magnesium supports your nervous system\'s natural wind-down at night without causing daytime sleepiness. Ashwagandha is adaptogenic — it supports stress resilience without sedation.' },
      { q: 'When should I take them?', a: 'Calm: 30-60 minutes before bed. Tranquil: morning or split AM/PM. Both can be taken in the evening together; both have data supporting evening dosing for sleep effects.' },
      { q: 'Is this safe long-term?', a: 'Yes — both have extensive long-term safety data. Unlike melatonin, neither creates dependence or builds tolerance. Daily use over years is well-studied and safe.' }
    ]
  },
  'energy': {
    eyebrow: 'Wellness Goal · Sustainable Daily Energy',
    description: 'Four supplements together — multivitamin foundation, CoQ10 for mitochondrial energy, vitamin D3 for cellular vitality, and the thermogenic energy boost. The clean-energy stack without caffeine dependence.',
    whyThis: 'Sustainable energy isn\'t a stimulant problem — it\'s a foundational nutrient and mitochondrial-function problem. Most "low energy" is actually multiple small deficiencies compounding: low B-vitamins, low D, low CoQ10 (especially in adults over 40 and people on statins). This bundle addresses the foundational gaps. Multi covers daily B-complex, iron, zinc — the nutrients your cells need for ATP production. Vitality (CoQ10) directly supports mitochondrial function — the actual energy factories in your cells. Sunshine (D3) addresses one of the most common modern deficiencies, with well-documented mood and energy effects. Burn provides the thermogenic boost when you want it (pre-workout, mid-afternoon) without becoming a caffeine dependence.',
    timeline: [
      { week: 'Week 1', text: 'Burn provides immediate pre-workout and mid-day energy. Foundation begins to fill in.' },
      { week: 'Week 4', text: 'Daily energy stabilizes; afternoon crashes less pronounced. Vitamin D and B-vitamin stores fill in.' },
      { week: 'Week 8', text: 'CoQ10 effect compounds — mitochondrial energy markedly improved, particularly in adults 40+.' },
      { week: 'Week 12+', text: 'Sustained foundational energy. Less reliance on caffeine; less crash, more steady output through the day.' }
    ],
    faq: [
      { q: 'Will Burn make me jittery?', a: 'The caffeine dose is moderate (about a cup of coffee). L-theanine in the green tea smooths the caffeine edge — most users find less jitter than coffee at the same caffeine dose.' },
      { q: 'Should I take all four every day?', a: 'Multi, Vitality, and Sunshine daily with breakfast. Burn pre-workout or mid-day when you want a boost — not necessarily every day. Avoid taking Burn within 6 hours of bed.' },
      { q: 'How is this different from coffee?', a: 'Caffeine works on the surface (alertness via adenosine blockade). This stack works on the foundation (cellular energy via mitochondrial function, nutrient repletion). Combine them — daily foundation + occasional caffeine — for the strongest result.' }
    ]
  },
  'focus': {
    eyebrow: 'Wellness Goal · Mental Clarity',
    description: 'Three supplements together — nootropic blend with Alpha GPC and Bacopa, the 10-mushroom Lion\'s Mane complex, and omega-3 EPA/DHA for brain structure. The mental clarity stack for thinking work.',
    whyThis: 'Cognitive function depends on three things: neurotransmitter availability (acetylcholine, dopamine, GABA), brain structural support (omega-3 phospholipids), and neuroprotective mechanisms (nerve growth factor, antioxidant defense). This bundle addresses all three. Focus delivers acute cognitive support via Alpha GPC (acetylcholine precursor), L-Tyrosine (dopamine precursor), Bacopa (compound buildup over 4-6 weeks), and Huperzine A. Synapse\'s mushroom complex — particularly Lion\'s Mane — supports nerve growth factor production, the mechanism behind long-term cognitive resilience. Flow (omega-3) supplies the DHA your brain literally needs as structural material. The combination delivers same-day mental sharpness plus compounding cognitive support over months.',
    timeline: [
      { week: 'Week 1', text: 'Alpha GPC and L-Tyrosine work acutely — focus and mental sharpness from first dose.' },
      { week: 'Week 4', text: 'Bacopa effect begins to compound; memory consolidation improves.' },
      { week: 'Week 8', text: 'Lion\'s Mane NGF effect builds; mental endurance noticeably better through long thinking work.' },
      { week: 'Week 12+', text: 'Sustained cognitive baseline. The compounded effect of structural omega-3s, NGF support, and daily neurotransmitter precursors becomes the new default.' }
    ],
    faq: [
      { q: 'Is Focus a stimulant?', a: 'No — it\'s a nootropic stack working on acetylcholine, dopamine, and GABA pathways. Pairs cleanly with caffeine if you want stimulant kick. Many users report a clean cognitive lift without coffee\'s jitter.' },
      { q: 'When should I take each?', a: 'Focus: morning or pre-thinking work for acute effect. Synapse: morning with breakfast (daily). Flow: with any meal containing fat for maximum absorption.' },
      { q: 'How long until I notice cognitive effects?', a: 'Focus works same-day. Synapse and Flow take 4-8 weeks of consistent use for their compounding effects. The full stack produces immediate-plus-long-term cognitive support.' }
    ]
  },
  'stress': {
    eyebrow: 'Wellness Goal · Resilience & Calm',
    description: 'Three supplements together — KSM-66 ashwagandha, magnesium glycinate, and the 22-ingredient adaptogenic greens powder. Lower cortisol, better stress recovery, sustained resilience without sedation.',
    whyThis: 'Chronic stress doesn\'t respond to a sedative — it responds to adaptogens that modulate the HPA axis and to nutrients that support the nervous system. This bundle delivers both. Tranquil\'s KSM-66 ashwagandha is the most-studied adaptogen, with 24+ RCTs showing measurable cortisol reduction over 4-8 weeks. Calm (magnesium glycinate) addresses the nervous-system magnesium depletion that\'s common in chronically stressed adults. Greens provides additional adaptogens (ashwagandha + ginseng) plus 22 nutrient-dense plant ingredients that support overall resilience. The combination delivers compounding effects: lower baseline cortisol, better stress recovery between events, fewer "wired" days.',
    timeline: [
      { week: 'Week 1', text: 'Nervous system feels less tense; physical stress markers (jaw clench, shoulder tension) reduce.' },
      { week: 'Week 4', text: 'Cortisol response to daily stressors noticeably calmer. Sleep quality improves as evening cortisol drops.' },
      { week: 'Week 8', text: 'Adaptogenic effect compounds. Stress recovery between events visibly faster.' },
      { week: 'Week 12+', text: 'Sustained stress resilience baseline. The "always-on" feeling resets to a manageable rhythm. Productivity often improves as recovery improves.' }
    ],
    faq: [
      { q: 'Will this make me feel "less" or numb my edge?', a: 'No — adaptogens modulate the stress response without blunting it. Users typically report sharper focus and better decision-making once cortisol drops, not less.' },
      { q: 'Can I take all three daily?', a: 'Yes — that\'s the protocol. Tranquil morning, Greens with breakfast (or as your smoothie base), Calm at night.' },
      { q: 'Is this safe long-term?', a: 'Yes — ashwagandha has decades of safety data; magnesium glycinate has none of the laxative effect of oxide forms; Greens is whole-food based. Daily long-term use is well-supported.' }
    ]
  },
  'strength': {
    eyebrow: 'Wellness Goal · Performance & Recovery',
    description: 'Three supplements together — pharmaceutical-grade creatine, nitric oxide-boosting L-citrulline, and gut-repairing L-glutamine. The most-studied workout stack at clinically-meaningful doses.',
    whyThis: 'Performance supplements have hundreds of products and only a handful that actually work. This bundle is those handful. Power delivers 5g of pharmaceutical-grade creatine monohydrate — the most-studied supplement in sports nutrition, with hundreds of trials confirming strength, power, and lean mass benefits. Pump (L-citrulline malate) raises plasma arginine more effectively than arginine itself, supporting nitric oxide-driven blood flow and the "pump" feeling — and improving exercise economy in endurance work. Seal (L-glutamine) addresses both gut barrier integrity and recovery: plasma glutamine drops 20-30% after intense training, and supplementation reduces upper respiratory infections in athletes by approximately 50%. Together they support output during training, blood flow during work, and recovery after.',
    timeline: [
      { week: 'Week 1', text: 'Visible vascular pump from Pump pre-workout. Slight intramuscular fullness as creatine saturation begins.' },
      { week: 'Week 4', text: 'Lift performance increases — better volume, more reps at the same weight. Recovery between sessions accelerates.' },
      { week: 'Week 8', text: 'Muscle volume visibly increased; new strength baseline established. Less DOMS after high-volume training.' },
      { week: 'Week 12+', text: 'Sustained strength and recovery baseline. The most-validated performance stack in sports nutrition working as intended.' }
    ],
    faq: [
      { q: 'When should I take each?', a: 'Power: post-workout for absorption with carbs (or any consistent daily time). Pump: 30-45 minutes pre-workout. Seal: post-workout, or pre-bed for overnight gut repair and recovery.' },
      { q: 'Do I need a loading phase for creatine?', a: 'No — 5g daily reaches muscle saturation in 3-4 weeks, same end state as a loading phase. Loading is faster, not better. Just be consistent.' },
      { q: 'Will creatine make me hold water?', a: 'Some intramuscular water retention occurs — that\'s the "muscle fullness" effect, not bloating. The water is inside the muscle, not under the skin.' }
    ]
  },
  'beauty': {
    eyebrow: 'Wellness Goal · Inside-Out Radiance',
    description: 'Two supplements together — bovine collagen peptides for skin elasticity and joint support, plus the beauty gummy with marine collagen and the full vitamin stack. The inside-out beauty protocol.',
    whyThis: 'The strongest results in skin, hair, and nails come from combining topical and internal approaches. Topical actives address the surface; internal nutrients build what the surface is made of. Collagen (bovine peptides) at 10g/day provides the amino acid substrates fibroblasts need to synthesize new collagen — the clinical literature consistently shows skin elasticity improvement in 8-12 weeks at this dose. Radiance is the daily vitamin foundation: vitamins A/C/D/E, biotin, B-complex, zinc, iodine — all the nutrients hair, skin, and nail tissue need to function. Together they form the inside-out beauty protocol that topical skincare alone can\'t match.',
    timeline: [
      { week: 'Week 1', text: 'Hair feels stronger; nails grow visibly faster.' },
      { week: 'Week 4', text: 'Skin hydration improves; collagen amino acid pool fills in.' },
      { week: 'Week 8', text: 'Skin elasticity measurably improved. Hair density and growth rate visibly enhanced.' },
      { week: 'Week 12+', text: 'Sustained beauty baseline — durable improvements that compound over months.' }
    ],
    faq: [
      { q: 'When should I take each?', a: 'Collagen: daily, any time — morning in coffee is the most popular ritual. Radiance: any time, but with food for fat-soluble vitamin absorption. Both can be taken together at any time of day.' },
      { q: 'How long until I see results?', a: 'Hair and nails: 4-6 weeks. Skin elasticity: 8-12 weeks. The clinical literature is consistent on collagen timelines — patience and consistency are what produce visible results.' },
      { q: 'Is the bovine collagen vegetarian/vegan?', a: 'No — Collagen is bovine-sourced (grass-fed hide peptides). Radiance contains marine collagen (pescatarian). For a fully plant-based beauty option, the topical brightening bundle is a better choice.' }
    ]
  },
  'longevity': {
    eyebrow: 'Wellness Goal · Cellular Health & Aging',
    description: 'Three supplements together — NAD+ precursor stack with resveratrol, CoQ10 for mitochondrial function, and the curcumin-based joint and inflammation complex. The longevity protocol that compounds over years.',
    whyThis: 'Longevity isn\'t a single supplement — it\'s a portfolio of cellular health investments. The mechanisms most-supported by current research are NAD+ restoration (cellular energy and DNA repair), mitochondrial support (CoQ10), and chronic inflammation reduction (curcumin, omega-3s). This bundle addresses all three. NAD+ pairs NAD+ direct supplementation with resveratrol and quercetin — the same sirtuin-activator stack used in longevity research labs. Vitality (CoQ10) supports mitochondrial function as it declines with age and statin use. Restore (curcumin + glucosamine + boswellia) addresses chronic low-grade inflammation, which most aging-research now considers a primary aging mechanism. Effects compound over months and years rather than weeks.',
    timeline: [
      { week: 'Week 1', text: 'No dramatic acute effects — these supplements work upstream and slowly.' },
      { week: 'Week 4', text: 'Joint comfort improves (curcumin effect); daily energy stabilizes.' },
      { week: 'Week 8', text: 'CoQ10 effect on mitochondrial function compounds. Subtle daily energy improvement.' },
      { week: 'Week 12+', text: 'Sustained cellular vitality markers. The compounded longevity protocol working as intended — the bet that pays off over years.' }
    ],
    faq: [
      { q: 'When will I feel a difference?', a: 'These work upstream and cellular — most users don\'t experience dramatic acute changes. The benefits compound over months and years. Think of it as preventive investment, not symptomatic treatment.' },
      { q: 'Is NAD+ supplementation actually proven?', a: 'NAD+ precursors (NR, NMN) have strong human trial data showing they raise blood NAD+ levels. NAD+ direct supplementation is more debated, which is why we pair it with quercetin and trans-resveratrol — the longevity-research lab approach to activating sirtuins through multiple pathways.' },
      { q: 'When should I take each?', a: 'NAD+: morning. Vitality: with breakfast or lunch (fat-soluble). Restore: with a meal containing fat for curcumin absorption.' }
    ]
  },
  'gut': {
    eyebrow: 'Wellness Goal · Digestive Health',
    description: 'Three supplements together — multi-strain probiotic, gut-repairing L-glutamine, and the 22-ingredient adaptogenic greens powder. The gut-health foundation that improves nearly everything else.',
    whyThis: 'Gut health affects nearly every other body system: immune function, mood, skin clarity, energy, nutrient absorption, inflammation. This bundle addresses the gut at three levels. Biome provides 40 billion CFU of clinically-studied probiotic strains with MAKTREK Bi-Pass technology so they survive stomach acid. Seal (L-glutamine) directly supports the enterocytes — the cells lining the gut — particularly important during stress, intense exercise, or after antibiotic use. Greens provides 22 plant-based ingredients including fiber, polyphenols, and prebiotic compounds that feed the beneficial gut microbiome. Together they form the gut-health foundation that makes everything else (skin protocols, sleep, energy) work better.',
    timeline: [
      { week: 'Week 1', text: 'Digestion normalizes; bloating and irregularity reduce.' },
      { week: 'Week 4', text: 'Energy more stable; mid-afternoon slumps less pronounced. Cravings for processed foods reduce.' },
      { week: 'Week 8', text: 'Sustained gut diversity. Immune resilience improves; mood balance via the gut-brain axis becomes noticeable.' },
      { week: 'Week 12+', text: 'Gut-health baseline reset. The downstream effects — skin clarity, energy, mood, immunity — compound from the foundation.' }
    ],
    faq: [
      { q: 'Do I need to refrigerate the probiotic?', a: 'No — MAKTREK Bi-Pass technology and shelf-stable formulation maintain potency at room temperature through expiration. Refrigeration is fine but unnecessary.' },
      { q: 'Can I take this with antibiotics?', a: 'Yes, but space them 2+ hours apart. Continue the probiotic for at least 2 weeks after finishing antibiotics to help restore gut diversity that the antibiotics disrupted.' },
      { q: 'When should I take each?', a: 'Biome: morning on empty stomach (or with breakfast — both work). Seal: post-workout or pre-bed. Greens: morning with breakfast, in water, or as your smoothie base.' }
    ]
  },
  'joints': {
    eyebrow: 'Wellness Goal · Joint Comfort',
    description: 'Three supplements together — the curcumin-based joint complex, omega-3 EPA/DHA for inflammation, and bovine collagen peptides for joint structure. Daily joint support for active people.',
    whyThis: 'Joint health depends on three things: controlling inflammation (omega-3s, curcumin), supporting joint structure (collagen peptides, glucosamine), and reducing the wear-and-tear damage from training (curcumin again, glucosamine). This bundle addresses all three. Restore is the daily anti-inflammatory: 95% curcumin extract with BioPerine (2,000% absorption boost), glucosamine, boswellia, chondroitin, MSM — the classic joint stack at clinical doses. Flow (omega-3 EPA/DHA) supports inflammation resolution via resolvins and protectins. Collagen (10g peptides daily) provides the amino acid substrates joints use to maintain cartilage. Together they form the daily joint protocol for active people whose bodies have earned a little extra care.',
    timeline: [
      { week: 'Week 1', text: 'Subtle morning stiffness reduction. Recovery between workouts begins to improve.' },
      { week: 'Week 4', text: 'Joint comfort noticeably better; morning stiffness markedly reduced.' },
      { week: 'Week 8', text: 'Inflammation baseline measurably lower. Training recovery accelerates further.' },
      { week: 'Week 12+', text: 'Sustained joint health baseline. The compounded anti-inflammatory + structural support works as designed.' }
    ],
    faq: [
      { q: 'How is this different from over-the-counter joint supplements?', a: 'Most OTC joint products are under-dosed glucosamine alone. This bundle uses clinical-dose curcumin with BioPerine (the 2,000% absorption form), 10g daily collagen (the dose that has clinical data), and EPA/DHA omega-3 (which actively resolves inflammation). The combined mechanism is much stronger.' },
      { q: 'When should I take each?', a: 'Restore: with a meal containing fat (BioPerine and curcumin are fat-soluble). Flow: with any meal containing fat. Collagen: daily, any time — morning in coffee is popular.' },
      { q: 'How long until I notice joint improvement?', a: 'Mild improvement in 1-2 weeks. Significant joint comfort builds over 4-8 weeks. Curcumin works upstream on inflammation rather than masking pain like NSAIDs — slower onset, more durable effect.' }
    ]
  }
};

window.getBundleDetails = function(slug) {
  return window.BUNDLE_DETAILS[slug] || null;
};
