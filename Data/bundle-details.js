/* BUNDLE DETAILS — long-form content per bundle.
   Used by:
     - bundle.html (separate detail page, fallback when typed by URL)
     - js/bundle-expand.js (inline expansion on bundles.html and shop.html)
   Namespaced by category because `longevity` and `glow` exist in
   both CURATED_BUNDLES and CONCERN_BUNDLES.

   Each entry has: eyebrow, description, whyThis (rationale paragraph),
   timeline (4 entries of {week, text}), faq (3 {q, a}). */

window.BUNDLE_DETAILS = {
  curated: {
    'ultimate': {
      eyebrow: 'The Full Stack · Every Bottle Worth Having',
      description: 'Twenty-two bottles in one box. The complete Daily supplement stack of ten paired with both AM and PM skincare rituals — every product Daniel actually uses on himself, every day. The biggest savings on the site (25% off retail) and the simplest decision: the whole house, all at once.',
      whyThis: "The Ultimate isn't a marketing tier — it's what happens when you stop assembling supplements piecemeal and let the routine compound. The Daily Stack covers the inside (energy, immunity, sleep, recovery, cellular health), the AM ritual builds and protects the barrier (cleanse, tone, antioxidant defense, hydrate, SPF-ready moisturize), and the PM ritual handles repair (retinol, exfoliation, deep hydration, eye, overnight oil). Stacked together, the effects compound: better gut function improves nutrient delivery to skin, magnesium and ashwagandha improve sleep which improves skin repair, omega-3s reduce inflammation which improves both joint comfort and skin clarity.",
      timeline: [
        { week: 'Week 1', text: 'Skincare barrier feels balanced; products absorb cleanly. Supplements begin to stabilize daily energy and digestion.' },
        { week: 'Week 4', text: 'Visible skin improvement — texture, hydration, brightness. Supplement effects compound — sleep deeper, mornings calmer, recovery faster.' },
        { week: 'Week 8', text: 'Skin firmness and fine line reduction become noticeable. Cellular energy markers (CoQ10, NAD+) baseline at higher levels. Stress resilience visibly improved.' },
        { week: 'Week 12+', text: 'The full compounding effect: skin elasticity at multi-year baseline highs, sustained daily energy, deep cardiovascular and longevity markers in motion. The full-system effect Daniel built this around.' }
      ],
      faq: [
        { q: 'Is this just every product bundled together?', a: 'Yes — 22 bottles, the entire AM/PM skincare routine plus the complete Daily supplement stack. The pricing reflects the buying-it-all discount (25% off retail) rather than a different formulation.' },
        { q: 'Can I subscribe to the Ultimate?', a: "Yes — and most customers do. Monthly delivery at the same 25% off price, with the option to skip, pause, or cancel any month. The subscribe price doesn't stack additional discount on top, since the Ultimate is already at the deepest savings on the site." },
        { q: 'What if I already have some of these products?', a: 'You can build a custom version using BYO (Build Your Own) on the Bundles page — that gives tiered discounts at 3, 6, and 9 products. For 10+ overlapping products, the Ultimate is usually still better even with duplicates.' }
      ]
    },
    'daniels-daily': {
      eyebrow: "Founder's Stack · Supplements Only",
      description: "Everything Daniel takes, every single day. Five Foundation essentials paired with five Longevity actives — the complete daily supplement protocol, no skincare. For customers who already have a routine and want the inside-out half.",
      whyThis: "The supplement half of the Ultimate, without the skincare. Multi covers the daily B-complex, iron, zinc baseline. Sunshine handles vitamin D — one of the most common deficiencies in modern adults. Flow delivers EPA/DHA for inflammation and brain structure. Biome supports the gut microbiome that gates everything else. Calm provides magnesium glycinate for evening wind-down and nervous-system support. The Longevity layer (NAD+, Vitality, Synapse, Restore, Tranquil) adds cellular energy, mitochondrial support, nootropics, joint anti-inflammation, and adaptogenic stress modulation. Together they form the full inside-out supplement protocol.",
      timeline: [
        { week: 'Week 1', text: 'Foundation nutrient stores begin to fill in. Calm produces same-week wind-down effects.' },
        { week: 'Week 4', text: 'Vitamin D and magnesium normalize; daily energy stabilizes. Stress resilience starts to compound.' },
        { week: 'Week 8', text: 'CoQ10 and NAD+ effects on cellular energy become noticeable. Joint comfort improves.' },
        { week: 'Week 12+', text: 'Full inside-out baseline established. Sustained energy, mood resilience, and recovery — the compound effect of the daily protocol.' }
      ],
      faq: [
        { q: 'Should I take all 10 at once?', a: 'No — distribute across the day. Morning: Multi, Sunshine, Flow, Biome, Vitality, Synapse, NAD+. Post-workout/with dinner: Restore. Evening: Calm, Tranquil. Spreading them aids absorption and matches each supplement\'s peak-effect timing.' },
        { q: 'Can I skip some and still benefit?', a: 'Yes — the Foundation 5 (Multi, Sunshine, Flow, Biome, Calm) is the most-validated core. The Longevity 5 (NAD+, Vitality, Synapse, Restore, Tranquil) is the optional second layer for users prioritizing aging and cellular health.' },
        { q: 'How long does one bundle last?', a: 'About 30 days. Each bottle is a 30-day supply at recommended dosing. Most customers subscribe monthly for the protocol consistency.' }
      ]
    },
    'am': {
      eyebrow: 'Morning Skincare Ritual',
      description: 'The full morning routine. Cleanse, tone, brighten, hydrate, defend, moisturize — six steps to start the day with a complete barrier and visible glow.',
      whyThis: "Morning skincare has one job: prep and protect. Wash removes overnight residue and excess oil without stripping. Balance restores skin pH with witch-hazel-based toner. Boost delivers vitamin C — the most-studied morning antioxidant and brightener. Hyaluronic layers multi-weight HA for plumping hydration. Defense provides niacinamide + antioxidant stack against pollution and free radicals. Soft seals everything with ceramide-rich moisturizer that's SPF-ready. Each step compounds the next: clean skin absorbs toner better, hydrated skin holds antioxidants longer, sealed skin holds hydration through the day.",
      timeline: [
        { week: 'Week 1', text: 'Skin feels cleaner and more balanced. Less midday shine; better foundation application.' },
        { week: 'Week 4', text: 'Visible brightness improvement. Hydration holds through the day; barrier feels stronger.' },
        { week: 'Week 8', text: 'Sustained even tone; skin reflects light more evenly. Pollution effects visibly reduced.' },
        { week: 'Week 12+', text: 'Durable morning-routine baseline. Skin starts the day strong and protected.' }
      ],
      faq: [
        { q: 'What order do I use these in?', a: 'In order: Wash, Balance (toner), Boost (vitamin C), Hyaluronic (serum), Defense (antioxidant), Soft (moisturizer). Apply each before the next is fully absorbed — thinnest to thickest.' },
        { q: 'Do I need all six?', a: "If you're tight on time, the minimum is Wash + Boost + Soft + sunscreen. The full 6-step gets the most compounding benefit, but a streamlined version still works." },
        { q: 'Where does sunscreen fit in?', a: 'After Soft, before makeup. We don\'t include SPF in this bundle so you can use whatever sunscreen you prefer — but daily SPF is non-negotiable, especially with vitamin C in the routine.' }
      ]
    },
    'pm': {
      eyebrow: 'Evening Skincare Ritual',
      description: 'The full nighttime routine. Treatment, resurface, firm, hydrate, eye, overnight — six steps designed for sleep, when skin repair runs at its strongest.',
      whyThis: "Nighttime is when actives go to work without UV interference. Bounce delivers retinol — the most-validated anti-aging active in dermatology. Renewal uses glycolic acid (alternated with retinol) to resurface and brighten. Firm delivers peptides for collagen signaling. Hydration applies ceramide moisturizer to seal the actives. Eye Cream handles the thinner orbital skin. Glow's facial oil seals it all in — the overnight occlusive that locks in everything below it. The combination produces visible firming, smoothing, and brightening over 8-12 weeks.",
      timeline: [
        { week: 'Week 1', text: 'Initial acclimation — possible mild dryness from retinol. Skin feels softer after Eye and Glow.' },
        { week: 'Week 4', text: 'Texture noticeably smoother; surface refinement from glycolic. Fine lines around eyes soften.' },
        { week: 'Week 8', text: 'Skin firmness measurably improved. Tone evenness builds. Foundation sits differently.' },
        { week: 'Week 12+', text: 'Visible anti-aging effect — skin density, elasticity, and clarity at higher baseline. Maintain with consistency.' }
      ],
      faq: [
        { q: 'How do I alternate retinol and glycolic?', a: 'Use Bounce (retinol) one night, Renewal (glycolic) the next night when starting out. After 4-6 weeks of tolerance building, you can use them on alternating nights regularly — never the same night.' },
        { q: 'I have sensitive skin — is this too much?', a: 'Start slow. Use Bounce 1-2 nights weekly for 2-3 weeks, then build up. Renewal is gentler — start 2 nights weekly. The other 4 products (Firm, Hydration, Eye, Glow) are gentle enough for daily use from day one.' },
        { q: 'Order to apply?', a: "Wash first (use your AM cleanser). Then in order: Renewal OR Bounce (treatment night) → Firm (peptides) → Hydration (moisturizer) → Eye → Glow (sealing oil). Patience between steps." }
      ]
    },
    'workout': {
      eyebrow: 'Training & Recovery',
      description: 'The performance stack — pre-workout pump and metabolic support, daily creatine for strength, and post-workout recovery with gut repair. Built for people training hard.',
      whyThis: "Performance supplements have hundreds of products and a handful that actually work. This bundle is the handful. Power delivers 5g of pharmaceutical-grade creatine — the most-studied supplement in sports nutrition. Pump (L-citrulline malate) raises plasma arginine for nitric oxide and the vascular pump effect. Burn is the thermogenic for pre-workout energy when you want it. Greens covers the polyphenol and adaptogen foundation that supports training adaptation. Seal (L-glutamine) addresses gut barrier and recovery — plasma glutamine drops 20-30% after intense training. Together they form the daily training stack at clinically meaningful doses.",
      timeline: [
        { week: 'Week 1', text: 'Visible vascular pump from Pump pre-workout. Slight muscle fullness as creatine saturation begins.' },
        { week: 'Week 4', text: 'Lift performance increases — more reps at the same weight. Recovery between sessions accelerates.' },
        { week: 'Week 8', text: 'New strength baseline established. Less DOMS after volume training. Body composition shifts visibly.' },
        { week: 'Week 12+', text: 'Sustained performance baseline. The most-validated training stack working as designed.' }
      ],
      faq: [
        { q: 'When should I take each?', a: 'Burn + Pump: 30-45 min pre-workout. Power: post-workout with carbs (or any consistent daily time). Seal: post-workout or pre-bed. Greens: morning or any time of day.' },
        { q: 'Is creatine safe long-term?', a: 'Yes — creatine is the most-studied supplement in sports nutrition with decades of human trial data. No long-term safety concerns in healthy adults. Continuous daily use is well-supported.' },
        { q: 'Will Burn cause jitter or crash?', a: "Moderate caffeine dose with L-theanine to smooth the edge. Most users tolerate it well. Avoid within 6 hours of bed; cycle off occasionally if you want to keep caffeine sensitivity sharp." }
      ]
    },
    'foundation': {
      eyebrow: 'Daily Essentials · Foundation Layer',
      description: 'Five non-negotiable supplements. Multivitamin, vitamin D3, omega-3s, probiotic, and magnesium glycinate — the daily foundation that everything else builds on.',
      whyThis: "If you take nothing else, take these five. Multi provides the daily B-complex, iron, zinc, and trace minerals most modern diets miss. Sunshine delivers 5,000 IU D3 — addressing one of the most common deficiencies in adults. Flow delivers EPA/DHA omega-3 at the dose where clinical trials show effect. Biome is 40 billion CFU multi-strain probiotic with MAKTREK Bi-Pass for stomach-acid survival. Calm provides magnesium glycinate for nervous-system support and evening wind-down. This is the foundational nutrient floor. Every other supplement builds on having this floor in place.",
      timeline: [
        { week: 'Week 1', text: 'Digestion normalizes from probiotic; evening wind-down improves from magnesium.' },
        { week: 'Week 4', text: 'Vitamin D stores fill in; B-vitamin energy stabilizes; omega-3 effects begin.' },
        { week: 'Week 8', text: 'Foundational nutrient floor established. Sleep quality, mood balance, gut function all baseline improved.' },
        { week: 'Week 12+', text: 'Sustained daily baseline. The floor everything else builds on.' }
      ],
      faq: [
        { q: 'Is this enough on its own?', a: 'For most people, yes — at least to start. Foundation gives the broadest nutrient coverage. Add specific supplements (CoQ10, ashwagandha, etc.) when targeting specific goals after the foundation is in place.' },
        { q: 'When should I take each?', a: 'Multi + Flow + Sunshine: with breakfast (fat-soluble vitamins absorb best with food). Biome: morning, empty stomach or with food (both work). Calm: 30-60 minutes before bed.' },
        { q: "I'm already on a multivitamin — should I switch?", a: 'Compare doses. Many drugstore multivitamins under-dose key nutrients (especially D, magnesium, B12 as methylcobalamin). House Multi is built at the doses that have clinical data. If yours matches, stick with it; if not, switching is worth it.' }
      ]
    },
    'longevity': {
      eyebrow: 'Cellular Health · Longevity Stack',
      description: 'Five longevity-targeted supplements. NAD+ precursors, CoQ10, mushroom complex, joint-inflammation, and adaptogens — the daily investments that compound over years.',
      whyThis: "Longevity isn't a single supplement — it's a portfolio of cellular health investments. NAD+ pairs NAD+ direct supplementation with resveratrol and quercetin (sirtuin-activator stack). Vitality (CoQ10) supports mitochondrial function as it declines with age. Synapse's 10-mushroom complex — particularly Lion's Mane — supports nerve growth factor and cognitive resilience. Restore (curcumin + glucosamine + boswellia + MSM) addresses chronic low-grade inflammation, considered a primary aging mechanism. Tranquil (KSM-66 ashwagandha) modulates cortisol and stress response. Effects compound over months and years.",
      timeline: [
        { week: 'Week 1', text: 'No dramatic acute effects — these work upstream and slowly.' },
        { week: 'Week 4', text: 'Joint comfort improves; daily energy stabilizes; cortisol response calms.' },
        { week: 'Week 8', text: 'CoQ10 effect on mitochondrial function compounds. Subtle but durable improvements.' },
        { week: 'Week 12+', text: 'Sustained cellular vitality baseline. The compounded longevity protocol working as intended.' }
      ],
      faq: [
        { q: 'When will I notice effects?', a: 'These work upstream — most users don\'t feel dramatic acute changes. Joint comfort and stress modulation are the first to surface (4-8 weeks). The deeper cellular benefits compound over months and years.' },
        { q: 'Is NAD+ supplementation proven?', a: 'NAD+ precursors (NR, NMN) have strong human trial data raising blood NAD+ levels. We pair NAD+ direct supplementation with quercetin and trans-resveratrol — the multi-pathway approach used in longevity research labs.' },
        { q: 'When should I take each?', a: 'NAD+, Synapse, Vitality: morning with breakfast. Restore: with meal containing fat. Tranquil: morning or split AM/PM.' }
      ]
    },
    'glow': {
      eyebrow: 'Visible Glow · Inside + Out',
      description: 'Six glow-focused products — vitamin C, antioxidant defense, overnight oil, weekly mask, plus beauty vitamins and collagen. Topical + internal beauty stack.',
      whyThis: "Visible glow comes from combining topical and internal strategies. Topically: Boost (vitamin C) brightens; Defense (niacinamide + antioxidants) protects from environmental dullness; Glow (facial oil) seals everything with luminous finish; Mask (weekly charcoal/clay) decongests skin every 3-7 days. Internally: Radiance delivers the daily vitamin foundation for skin/hair/nails; Collagen provides 10g daily peptides for skin elasticity. Topical alone hits a ceiling — adding internal nutrient support pushes through it.",
      timeline: [
        { week: 'Week 1', text: 'Immediate fresh-skin effect from vitamin C and oil. Hair and nails feel stronger from collagen.' },
        { week: 'Week 4', text: 'Brightness visibly improves; skin reflects light more evenly. Hair growth accelerates.' },
        { week: 'Week 8', text: 'Skin elasticity measurably improves (collagen kicks in). Glow baseline at higher level.' },
        { week: 'Week 12+', text: 'Sustained inside-out glow. The compounded effect of topical + internal works as designed.' }
      ],
      faq: [
        { q: 'How often should I use the mask?', a: 'Once a week — twice if your skin is congested. More often causes over-exfoliation. Less is more with weekly treatments.' },
        { q: 'When should I take Collagen and Radiance?', a: 'Collagen: any time daily — morning in coffee is the most popular ritual. Radiance: with food for fat-soluble vitamin absorption.' },
        { q: 'How long until visible glow?', a: '1-2 weeks for surface freshness from topical actives. 4-6 weeks for collagen + Radiance internal effects. 8-12 weeks for full inside-out compounding.' }
      ]
    },
    'weekly': {
      eyebrow: 'Weekly Reset · Skincare Treatments',
      description: 'Two weekly treatments — charcoal-clay mask and physical polish. The deep-clean reset that complements any daily routine.',
      whyThis: "Daily skincare maintains; weekly treatments reset. Mask (kaolin + bentonite + charcoal) draws out accumulated oil, dirt, and surface buildup that daily cleansers can't reach — best used once a week. Polish (physical exfoliation with pumice + jojoba beads) smooths surface texture and primes skin to better absorb actives. Used together (mask one night, polish another, never the same night), they keep skin clear, smooth, and primed for daily routines to work their best.",
      timeline: [
        { week: 'Week 1', text: 'Immediate freshness and smoothness after first use. Pores feel cleaner.' },
        { week: 'Week 4', text: 'Sustained surface refinement; texture noticeably smoother. Less buildup between treatments.' },
        { week: 'Week 8', text: 'Daily products absorb better. Skin clarity improves as weekly reset becomes habit.' },
        { week: 'Week 12+', text: 'Sustained weekly-reset baseline. The complement that makes daily skincare work harder.' }
      ],
      faq: [
        { q: 'How often should I use these?', a: 'Each: once a week, on different nights. So you\'re doing some kind of weekly treatment twice per week. Skin doesn\'t need more than that.' },
        { q: 'Can I use these on sensitive skin?', a: "Polish: be gentle — light pressure, no scrubbing. Mask: tolerated by most sensitive skin but patch-test first. If you have active breakouts or irritation, skip until it resolves." },
        { q: 'Do I need to change my routine on treatment nights?', a: "Yes — after Mask or Polish, skip strong actives that night (retinol, glycolic). Go straight to gentle hydrators and moisturizer. Your skin is more permeable right after treatments — easy does it." }
      ]
    },
    'moms': {
      eyebrow: "For the Tired but Glowing",
      description: "Ten products built for mothers — gentle but effective skincare, energy and immunity support, calm-down magnesium, and the postnatal-friendly collagen and cellular stack.",
      whyThis: "The needs of mothers — especially new mothers — are specific: gentle on the skin (no fragrances, no harsh actives that flake off into baby's face), reliable on energy (because sleep is unpredictable), supportive of nervous-system recovery (because cortisol after pregnancy is its own thing). This bundle combines the gentle skincare staples (Wash, Defense, Bounce at low frequency, Eye, Soft) with the daily-energy stack (Multi, Collagen, NAD+, Vitality) plus Tranquil for adaptogenic support. Together they form a sustainable rhythm — not aspirational, not maximum, just supportive.",
      timeline: [
        { week: 'Week 1', text: 'Skin feels balanced and protected. Daily energy from Multi and Vitality begins.' },
        { week: 'Week 4', text: 'Sleep and stress resilience improve (Tranquil + Multi). Skin glow from Collagen visible.' },
        { week: 'Week 8', text: 'Sustained inside-out support. Skin elasticity, daily energy, mood balance all baseline improved.' },
        { week: 'Week 12+', text: "Durable mom-life-friendly baseline. The bundle that supports you so you can support everyone else." }
      ],
      faq: [
        { q: 'Is this safe while breastfeeding?', a: 'Most products in this bundle are breastfeeding-safe; however, consult your healthcare provider about any supplement during nursing. Topical retinol (Bounce) should be used cautiously while breastfeeding — many providers recommend avoiding it. The other products are routinely used by nursing moms.' },
        { q: "I'm not a new mom — can I still use this?", a: 'Of course — the bundle was named for the season of life it supports, not the only people who benefit. Anyone wanting gentle skincare + sustaining daily nutrients works.' },
        { q: 'When should I take the supplements?', a: 'Morning with breakfast: Multi, NAD+, Vitality, Collagen. Evening with dinner or pre-bed: Tranquil. Spread them out — it aids absorption and matches each supplement\'s timing.' }
      ]
    },
    'arianas': {
      eyebrow: "Ariana's Picks · The Editor's Choice",
      description: "Nine products curated by Ariana — the streamlined effective routine, no fluff. Skincare essentials, daily wellness, beauty support. The 'I want what works' bundle.",
      whyThis: "Ariana's bundle is the streamlined version: nine products that cover the essentials without overcomplicating. Wash, Boost, Defense, Renewal, Eye, Soft = a complete cleansing-to-overnight skincare arc using the most-validated actives (niacinamide, vitamin C, glycolic, peptides). Multi, Radiance, Collagen = the daily nutrient foundation plus beauty support. It's intentionally smaller than the Ultimate — for users who want the high-confidence routine without 22 bottles to track.",
      timeline: [
        { week: 'Week 1', text: 'Skincare feels balanced; daily vitamins and collagen begin.' },
        { week: 'Week 4', text: 'Visible glow from vitamin C + Renewal; hair and nails respond to collagen.' },
        { week: 'Week 8', text: 'Sustained baseline — clear skin, daily energy, beauty support all in place.' },
        { week: 'Week 12+', text: "The streamlined routine that works. Built to be sustainable, not aspirational." }
      ],
      faq: [
        { q: 'How is this different from the Ultimate?', a: "Half the products (9 vs 22), same logic. Ariana's is the streamlined version: skincare essentials + daily wellness + beauty support, without the deep longevity layer or the full AM/PM symmetry. For users who want effective + simple." },
        { q: 'Can I add to this later?', a: "Yes — easily. Start with Ariana's, then add Tranquil for stress, Calm for sleep, or NAD+ for the longevity layer as desired. Build at your own pace." },
        { q: 'When should I take the supplements?', a: 'All three (Multi, Radiance, Collagen) in the morning with breakfast. Simplest stack to remember: coffee, supplements, go.' }
      ]
    }
  },

  concern: {
    'aging': {
      eyebrow: 'Skin Concern · Visible Anti-Aging',
      description: 'Four targeted products — retinol, peptides, glycolic resurfacing, and the eye treatment — that together address the four mechanisms of visible aging: cell turnover slowdown, collagen breakdown, surface texture buildup, and the thinning skin around the eyes.',
      whyThis: "Anti-aging that works isn't one hero product — it's the right combination working at different depths and different times. Retinol (in Bounce, used at night) stimulates collagen and cell turnover at the dermis. Peptides (in Firm) signal collagen synthesis at the surface. Glycolic acid (in Renewal) accelerates surface turnover so the retinol can penetrate properly. The Eye Cream addresses the thinner orbital skin where caffeine and peptides have outsized effect. Visible results compound over 8-12 weeks of consistent use.",
      timeline: [
        { week: 'Week 1', text: 'Initial skin acclimation — possible mild dryness or flaking as cell turnover accelerates. This is expected and resolves.' },
        { week: 'Week 4', text: 'Surface texture noticeably smoother. Skin reflects light differently — early "glow" effect from improved turnover.' },
        { week: 'Week 8', text: 'Fine lines around eyes and forehead measurably softer. Skin firmness improves; foundation sits differently on the surface.' },
        { week: 'Week 12+', text: 'The compounding effect: visible improvement in elasticity, tone evenness, and skin density. Maintain with consistent use — anti-aging is a long-term protocol, not a short-term treatment.' }
      ],
      faq: [
        { q: "I've never used retinol before — is this too much?", a: 'Start slow: Bounce (the retinol product) once or twice a week for the first 2-3 weeks, building up to 4-5 nights weekly. The other three products are gentle enough for daily use from day one. Always wear sunscreen during the day when using retinol.' },
        { q: 'When should I see results?', a: 'Texture and brightness shifts in 4 weeks. Visible firmness and fine line reduction at 8-12 weeks. Anti-aging is a marathon protocol — consistency over intensity is what produces durable results.' },
        { q: 'Can I use these every day?', a: 'Renewal (glycolic) and Bounce (retinol) are nighttime products — alternate them rather than using both same night when starting out. Firm and Eye are AM or PM and can be used daily.' }
      ]
    },
    'acne': {
      eyebrow: 'Skin Concern · Clear, Refined Skin',
      description: 'A four-product clear-skin protocol — salicylic acid toner, charcoal mask, physical polish, and pore-refining niacinamide serum. Gentle enough for daily use, strong enough to make measurable difference in 4-8 weeks.',
      whyThis: "Acne and breakouts are usually a multi-factor problem: excess oil, pore clogging, surface buildup, and inflammation. This bundle addresses all four. Clear (salicylic acid toner) dissolves the oil and dead-skin matrix inside pores — the most-validated topical for acne-prone skin. Mask (charcoal weekly) draws out accumulated impurities. Polish (physical exfoliation) smooths surface texture without over-stripping. Boost (niacinamide) reduces inflammation and refines pore appearance over time. Built to be gentle enough for daily-to-multi-weekly use without triggering rebound oil.",
      timeline: [
        { week: 'Week 1', text: 'Pores feel cleaner; immediate visible reduction in surface oil. Possible initial purging if very acne-prone.' },
        { week: 'Week 4', text: 'New breakouts noticeably less frequent. Existing blemishes heal faster; less post-acne marks.' },
        { week: 'Week 8', text: 'Skin clarity measurably improved. Pore appearance refined; surface texture smoother. Skin tone more even.' },
        { week: 'Week 12+', text: 'Sustained clear-skin baseline. Cyclical breakouts much reduced.' }
      ],
      faq: [
        { q: 'I have sensitive acne-prone skin — is this too aggressive?', a: 'No — this stack is built to address acne without harsh-stripping that triggers rebound oil. Polish and Mask are weekly, not daily. Start with 2-3 nights of Clear and build up.' },
        { q: 'Can I use this with prescription acne treatments?', a: 'Generally yes — niacinamide and salicylic acid work alongside most prescription topicals. Avoid using physical exfoliation (Polish) on the same day as strong actives. Check with your dermatologist.' },
        { q: 'When will I see clearer skin?', a: 'Visible reduction in new breakouts at 4 weeks. Sustained clearer skin at 8-12 weeks. Skin needs a full cell turnover cycle (~28 days) to show response.' }
      ]
    },
    'dryness': {
      eyebrow: 'Skin Concern · Lasting Hydration',
      description: 'Four hydration-focused products — multi-weight hyaluronic acid serum, ceramide moisturizer, finishing facial oil, and overnight oil — that build hydration at multiple skin depths and seal it in.',
      whyThis: "Lasting hydration requires three things: humectants that pull water in (hyaluronic acid), emollients that fill the gaps between cells (ceramides, squalane), and occlusives that prevent water loss (facial oils). This bundle delivers all three. Hyaluronic (multi-weight HA) hydrates at multiple depths simultaneously. Hydration (ceramide moisturizer) restores the lipid matrix. Soft (overnight ceramide cream) does deep barrier repair while you sleep. Glow (facial oil) seals it all in.",
      timeline: [
        { week: 'Week 1', text: 'Immediate plump-and-glow effect from layered hyaluronic. Skin feels softer to the touch.' },
        { week: 'Week 4', text: 'Skin barrier visibly stronger — less reactivity, less afternoon dullness.' },
        { week: 'Week 8', text: 'Sustained all-day hydration without midday reapplication. Elasticity improves.' },
        { week: 'Week 12+', text: 'Durable, deep hydration that compounds. The "thirsty skin" baseline resets to "well-hydrated."' }
      ],
      faq: [
        { q: 'Can I use all four products together every day?', a: "Yes — that's the design. Layer in order from thinnest to thickest: Hyaluronic (serum) → Hydration (moisturizer) → Soft (overnight cream) → Glow (oil)." },
        { q: 'Will the facial oil break me out?', a: 'No — Glow uses non-comedogenic plant oils (squalane, jojoba) that mimic skin\'s natural sebum. Even oily skin tolerates it well.' },
        { q: 'Is this enough for very dry/cracked skin?', a: 'For seasonal dryness, yes. For chronic conditions like eczema, pair with a clinical-grade barrier cream and consult a dermatologist.' }
      ]
    },
    'dullness': {
      eyebrow: 'Skin Concern · Brightness & Even Tone',
      description: 'Four brightening products — vitamin C serum, antioxidant defense moisturizer, glycolic resurfacing pads, and the beauty gummy — that target uneven tone from both topical and internal angles.',
      whyThis: "Dull, uneven skin tone has three causes: surface buildup, pigment irregularities, and oxidative damage. This stack addresses all three. Boost (vitamin C) brightens pigment irregularities and inhibits melanin transfer. Defense (antioxidant complex) neutralizes the free-radical damage that causes dullness. Renewal (glycolic acid) accelerates surface turnover to reveal fresh skin beneath. Radiance (oral collagen + beauty vitamins) supports skin from inside, where surface protocols can't reach.",
      timeline: [
        { week: 'Week 1', text: 'Immediate freshness from Renewal exfoliation; vitamin C starts the antioxidant baseline.' },
        { week: 'Week 4', text: 'Skin reflects light more evenly. Hyperpigmentation starts to fade.' },
        { week: 'Week 8', text: 'Measurable brightness improvement; sun-damage spots visibly softer.' },
        { week: 'Week 12+', text: 'Sustained luminosity. The inside-out effect compounds durably.' }
      ],
      faq: [
        { q: 'Will vitamin C make my skin sun-sensitive?', a: 'Counterintuitively, no — vitamin C enhances sunscreen\'s photoprotection. Always wear SPF daily (especially with glycolic acid in the routine).' },
        { q: 'When will I see brighter skin?', a: 'Subtle freshness in 1-2 weeks. Visible tone improvement in 6-8 weeks. Internal beauty stack (Radiance) takes 8-12 weeks for full effect.' },
        { q: 'Can I use this with prescription brighteners?', a: 'Yes — pairs well with hydroquinone and other prescription brighteners. Niacinamide supports the same melanin pathway and amplifies prescription effects.' }
      ]
    },
    'sensitivity': {
      eyebrow: 'Skin Concern · Calm, Resilient Skin',
      description: 'Four reactive-skin essentials — gentle hydrating cleanser, alcohol-free witch hazel toner, multi-weight hyaluronic acid, and the overnight ceramide cream.',
      whyThis: "Sensitive skin doesn't need more — it needs better. The wrong actives compound irritation for weeks. This bundle strips out everything reactive skin reacts to. Wash is sulfate-free and built on hydrolyzed plant proteins. Balance uses witch hazel (gentle astringent) rather than alcohol. Hyaluronic delivers pure barrier-supporting hydration. Soft's ceramide cream does overnight barrier repair. Together they form a no-irritation routine that actually heals the barrier.",
      timeline: [
        { week: 'Week 1', text: 'Reactivity reduces; less redness after washing.' },
        { week: 'Week 4', text: 'Barrier visibly stronger; tolerance to other actives gradually returns.' },
        { week: 'Week 8', text: 'Sustained calm baseline. Triggers cause noticeably less reaction.' },
        { week: 'Week 12+', text: 'Durable barrier resilience. Can tolerate gentle actives you previously couldn\'t.' }
      ],
      faq: [
        { q: 'Is this enough for rosacea or eczema?', a: 'For mild reactive skin, yes. For diagnosed conditions, pair with a dermatologist-prescribed treatment. This complements clinical care; it doesn\'t replace it.' },
        { q: 'Can I add retinol or vitamin C later?', a: 'After 4-8 weeks of barrier rebuilding, yes — slowly. Start with niacinamide, then vitamin C, then retinol if desired. The barrier needs to heal first.' },
        { q: 'Why no facial oil in this bundle?', a: 'Some sensitive skin reacts to oils. We left it out and recommend Glow as an optional add-on once your barrier has stabilized.' }
      ]
    },
    'pores': {
      eyebrow: 'Skin Concern · Pore Refinement',
      description: 'Four targeted products — niacinamide pore serum, salicylic acid toner, physical polish, and the weekly charcoal mask — that refine pore appearance and clarity.',
      whyThis: "Pore size is genetic, but pore appearance is highly modifiable. Visible pores look bigger when they're clogged, when texture is uneven, and when inflammation reduces elasticity. This bundle addresses all three. Boost (niacinamide) reduces sebum and refines pore appearance. Clear (salicylic acid) dissolves the oil plugs that visually enlarge pores. Polish (gentle exfoliation) smooths surface texture. Mask (charcoal weekly) decongests.",
      timeline: [
        { week: 'Week 1', text: 'Pores feel cleaner; skin immediately smoother after Polish or Mask.' },
        { week: 'Week 4', text: 'Less visible oil; pore appearance softens in T-zone.' },
        { week: 'Week 8', text: 'Niacinamide effect on sebum production compounds. Surface texture smoother.' },
        { week: 'Week 12+', text: 'Durable refined-skin baseline. Less shine; foundation sits more evenly.' }
      ],
      faq: [
        { q: 'Will my pores actually get smaller?', a: 'Not literally — pore size is genetic. But pore appearance can visibly shrink with sustained protocol. Most users see clear improvement at 8-12 weeks.' },
        { q: 'How often should I use Polish and Mask?', a: 'Polish: 1-2x per week. Mask: 1x per week. Daily physical exfoliation triggers rebound oil. Less is more.' },
        { q: 'Does this dry out my skin?', a: 'No — salicylic at gentle 2%; niacinamide is barrier-supporting. Pair with hydration bundle if you run dry.' }
      ]
    },

    'sleep': {
      eyebrow: 'Wellness Goal · Deeper Rest',
      description: 'Two supplements together — magnesium glycinate for nervous system support and KSM-66 ashwagandha for cortisol regulation. No melatonin, no morning grogginess.',
      whyThis: "Most 'sleep supplements' use melatonin, which addresses jet lag but isn't built for routine nightly use. The actual mechanisms of poor sleep are usually nervous system overstimulation and elevated evening cortisol. Calm (magnesium glycinate) supports GABA pathway and nervous system relaxation without sedation. Tranquil (KSM-66 ashwagandha) reduces serum cortisol over 4-6 weeks of use, which directly improves sleep architecture.",
      timeline: [
        { week: 'Week 1', text: 'Faster wind-down at night; muscle tension reduces.' },
        { week: 'Week 4', text: 'Sleep onset improves; mid-night wakings reduce.' },
        { week: 'Week 8', text: 'Cortisol response to daily stressors visibly calmer. Sleep quality measurably deeper.' },
        { week: 'Week 12+', text: 'Sustained nervous system support. The "tired but wired" baseline resets to genuine rest.' }
      ],
      faq: [
        { q: 'Will this make me drowsy during the day?', a: "No — these aren't sedatives. Magnesium supports natural wind-down at night. Ashwagandha is adaptogenic — supports stress resilience without sedation." },
        { q: 'When should I take them?', a: 'Calm: 30-60 minutes before bed. Tranquil: morning or split AM/PM. Both can be taken in the evening.' },
        { q: 'Is this safe long-term?', a: 'Yes — both have extensive long-term safety data. Unlike melatonin, neither creates dependence or tolerance.' }
      ]
    },
    'energy': {
      eyebrow: 'Wellness Goal · Sustainable Daily Energy',
      description: 'Four supplements together — multivitamin foundation, CoQ10 for mitochondrial energy, vitamin D3 for cellular vitality, and the thermogenic energy boost.',
      whyThis: "Sustainable energy isn't a stimulant problem — it's a nutrient and mitochondrial-function problem. Most 'low energy' is actually multiple small deficiencies compounding: low B-vitamins, low D, low CoQ10. This bundle addresses the foundational gaps. Multi covers daily B-complex, iron, zinc — what cells need for ATP production. Vitality (CoQ10) directly supports mitochondrial function. Sunshine (D3) addresses one of the most common modern deficiencies. Burn provides the thermogenic boost when wanted, without becoming a caffeine dependence.",
      timeline: [
        { week: 'Week 1', text: 'Burn provides immediate pre-workout and mid-day energy. Foundation begins to fill in.' },
        { week: 'Week 4', text: 'Daily energy stabilizes; afternoon crashes less pronounced.' },
        { week: 'Week 8', text: 'CoQ10 effect compounds — mitochondrial energy markedly improved.' },
        { week: 'Week 12+', text: 'Sustained foundational energy. Less reliance on caffeine; more steady output.' }
      ],
      faq: [
        { q: 'Will Burn make me jittery?', a: 'The caffeine dose is moderate (about a cup of coffee). L-theanine in green tea smooths the edge — most users find less jitter than coffee.' },
        { q: 'Should I take all four daily?', a: 'Multi, Vitality, Sunshine: daily with breakfast. Burn: pre-workout or mid-day when you want a boost — not necessarily every day. Avoid within 6 hours of bed.' },
        { q: 'How is this different from coffee?', a: 'Caffeine works on the surface (alertness). This stack works on the foundation (cellular energy). Combine them — daily foundation + occasional caffeine — for the strongest result.' }
      ]
    },
    'focus': {
      eyebrow: 'Wellness Goal · Mental Clarity',
      description: 'Three supplements together — nootropic blend with Alpha GPC and Bacopa, the 10-mushroom Lion\'s Mane complex, and omega-3 EPA/DHA for brain structure.',
      whyThis: "Cognitive function depends on three things: neurotransmitter availability (acetylcholine, dopamine), brain structural support (omega-3 phospholipids), and neuroprotective mechanisms (NGF, antioxidant defense). This bundle addresses all three. Focus delivers acute cognitive support via Alpha GPC, L-Tyrosine, Bacopa, and Huperzine A. Synapse's mushroom complex (particularly Lion's Mane) supports nerve growth factor production. Flow (omega-3) supplies the DHA your brain literally needs as structural material.",
      timeline: [
        { week: 'Week 1', text: 'Alpha GPC and L-Tyrosine work acutely — focus from first dose.' },
        { week: 'Week 4', text: 'Bacopa effect begins to compound; memory consolidation improves.' },
        { week: 'Week 8', text: "Lion's Mane NGF effect builds; mental endurance noticeably better." },
        { week: 'Week 12+', text: 'Sustained cognitive baseline. Compounded structural support becomes default.' }
      ],
      faq: [
        { q: 'Is Focus a stimulant?', a: 'No — nootropic stack working on acetylcholine, dopamine, GABA pathways. Pairs cleanly with caffeine if you want stimulant kick.' },
        { q: 'When should I take each?', a: 'Focus: morning or pre-thinking work. Synapse: morning with breakfast (daily). Flow: with any meal containing fat.' },
        { q: 'How long until cognitive effects?', a: 'Focus works same-day. Synapse and Flow take 4-8 weeks of consistent use for compounding effects.' }
      ]
    },
    'stress': {
      eyebrow: 'Wellness Goal · Resilience & Calm',
      description: 'Three supplements together — KSM-66 ashwagandha, magnesium glycinate, and the 22-ingredient adaptogenic greens powder.',
      whyThis: "Chronic stress doesn't respond to a sedative — it responds to adaptogens that modulate the HPA axis and to nutrients that support the nervous system. Tranquil's KSM-66 ashwagandha is the most-studied adaptogen, with 24+ RCTs showing measurable cortisol reduction over 4-8 weeks. Calm (magnesium glycinate) addresses the nervous-system magnesium depletion common in chronically stressed adults. Greens provides additional adaptogens plus nutrient-dense plant ingredients.",
      timeline: [
        { week: 'Week 1', text: 'Nervous system feels less tense; physical stress markers reduce.' },
        { week: 'Week 4', text: 'Cortisol response to daily stressors noticeably calmer. Sleep improves.' },
        { week: 'Week 8', text: 'Adaptogenic effect compounds. Stress recovery faster.' },
        { week: 'Week 12+', text: 'Sustained stress resilience baseline. The "always-on" feeling resets to a manageable rhythm.' }
      ],
      faq: [
        { q: 'Will this numb my edge or make me less sharp?', a: 'No — adaptogens modulate the stress response without blunting it. Users typically report sharper focus and better decision-making once cortisol drops.' },
        { q: 'Can I take all three daily?', a: "Yes — that's the protocol. Tranquil morning, Greens with breakfast, Calm at night." },
        { q: 'Is this safe long-term?', a: 'Yes — ashwagandha has decades of safety data; magnesium glycinate has none of the laxative effect of oxide forms; Greens is whole-food based.' }
      ]
    },
    'strength': {
      eyebrow: 'Wellness Goal · Performance & Recovery',
      description: 'Three supplements together — pharmaceutical-grade creatine, nitric oxide-boosting L-citrulline, and gut-repairing L-glutamine. The most-studied workout stack at clinically-meaningful doses.',
      whyThis: "Performance supplements have hundreds of products and a handful that work. Power delivers 5g pharmaceutical-grade creatine — the most-studied supplement in sports nutrition, with hundreds of trials confirming strength, power, and lean mass benefits. Pump (L-citrulline malate) raises plasma arginine more effectively than arginine itself, supporting nitric oxide-driven blood flow. Seal (L-glutamine) addresses gut barrier integrity and recovery — plasma glutamine drops 20-30% after intense training.",
      timeline: [
        { week: 'Week 1', text: 'Visible vascular pump from Pump pre-workout. Slight intramuscular fullness from creatine.' },
        { week: 'Week 4', text: 'Lift performance increases — better volume, more reps. Recovery accelerates.' },
        { week: 'Week 8', text: 'Muscle volume visibly increased; new strength baseline established.' },
        { week: 'Week 12+', text: 'Sustained strength and recovery baseline. The most-validated stack in sports nutrition working as intended.' }
      ],
      faq: [
        { q: 'When should I take each?', a: 'Power: post-workout (or any consistent daily time). Pump: 30-45 min pre-workout. Seal: post-workout or pre-bed.' },
        { q: 'Do I need a loading phase for creatine?', a: 'No — 5g daily reaches muscle saturation in 3-4 weeks, same end state as loading. Just be consistent.' },
        { q: 'Will creatine make me hold water?', a: 'Some intramuscular water retention — the "muscle fullness" effect, not bloating. The water is inside the muscle, not under skin.' }
      ]
    },
    'beauty': {
      eyebrow: 'Wellness Goal · Inside-Out Radiance',
      description: 'Two supplements together — bovine collagen peptides for skin elasticity and joint support, plus the beauty gummy with marine collagen and the full vitamin stack.',
      whyThis: "The strongest results in skin, hair, and nails come from combining topical and internal approaches. Collagen (bovine peptides) at 10g/day provides the amino acid substrates fibroblasts need to synthesize new collagen — clinical literature consistently shows skin elasticity improvement in 8-12 weeks at this dose. Radiance is the daily vitamin foundation: vitamins A/C/D/E, biotin, B-complex, zinc, iodine.",
      timeline: [
        { week: 'Week 1', text: 'Hair feels stronger; nails grow visibly faster.' },
        { week: 'Week 4', text: 'Skin hydration improves; collagen amino acid pool fills in.' },
        { week: 'Week 8', text: 'Skin elasticity measurably improved. Hair density and growth enhanced.' },
        { week: 'Week 12+', text: 'Sustained beauty baseline — durable improvements compounding over months.' }
      ],
      faq: [
        { q: 'When should I take each?', a: 'Collagen: daily, any time — morning in coffee is the most popular ritual. Radiance: any time, with food for fat-soluble vitamin absorption.' },
        { q: 'How long until results?', a: 'Hair and nails: 4-6 weeks. Skin elasticity: 8-12 weeks. The clinical literature is consistent on collagen timelines.' },
        { q: 'Is bovine collagen vegetarian/vegan?', a: 'No — Collagen is bovine-sourced. Radiance contains marine collagen (pescatarian). For fully plant-based beauty, the topical brightening bundle is a better choice.' }
      ]
    },
    'longevity': {
      eyebrow: 'Wellness Goal · Cellular Health & Aging',
      description: 'Three supplements together — NAD+ precursor stack with resveratrol, CoQ10 for mitochondrial function, and the curcumin-based joint and inflammation complex.',
      whyThis: "Longevity isn't a single supplement — it's a portfolio of cellular health investments. NAD+ pairs NAD+ direct supplementation with resveratrol and quercetin — the same sirtuin-activator stack used in longevity research labs. Vitality (CoQ10) supports mitochondrial function as it declines with age and statin use. Restore (curcumin + glucosamine + boswellia) addresses chronic low-grade inflammation, considered a primary aging mechanism.",
      timeline: [
        { week: 'Week 1', text: 'No dramatic acute effects — these work upstream and slowly.' },
        { week: 'Week 4', text: 'Joint comfort improves (curcumin effect); daily energy stabilizes.' },
        { week: 'Week 8', text: 'CoQ10 effect on mitochondrial function compounds.' },
        { week: 'Week 12+', text: 'Sustained cellular vitality markers. The compounded longevity protocol as intended.' }
      ],
      faq: [
        { q: 'When will I feel a difference?', a: 'These work upstream — most users don\'t experience dramatic acute changes. Benefits compound over months and years. Think of it as preventive investment.' },
        { q: 'Is NAD+ supplementation proven?', a: 'NAD+ precursors (NR, NMN) have strong human trial data. We pair NAD+ with quercetin and trans-resveratrol — the multi-pathway approach used in longevity labs.' },
        { q: 'When should I take each?', a: 'NAD+: morning. Vitality: breakfast or lunch (fat-soluble). Restore: with meal containing fat for curcumin absorption.' }
      ]
    },
    'gut': {
      eyebrow: 'Wellness Goal · Digestive Health',
      description: 'Three supplements together — multi-strain probiotic, gut-repairing L-glutamine, and the 22-ingredient adaptogenic greens powder.',
      whyThis: "Gut health affects nearly every other body system: immune function, mood, skin clarity, energy, nutrient absorption. This bundle addresses the gut at three levels. Biome provides 40 billion CFU of clinically-studied probiotic strains with MAKTREK Bi-Pass for stomach-acid survival. Seal (L-glutamine) directly supports the enterocytes — gut-lining cells. Greens provides 22 plant-based ingredients including fiber, polyphenols, and prebiotic compounds that feed beneficial microbiome.",
      timeline: [
        { week: 'Week 1', text: 'Digestion normalizes; bloating and irregularity reduce.' },
        { week: 'Week 4', text: 'Energy more stable; mid-afternoon slumps less pronounced. Cravings reduce.' },
        { week: 'Week 8', text: 'Sustained gut diversity. Immune resilience improves; mood balance noticeable.' },
        { week: 'Week 12+', text: 'Gut-health baseline reset. Downstream effects on skin, energy, mood compound.' }
      ],
      faq: [
        { q: 'Do I need to refrigerate the probiotic?', a: 'No — MAKTREK Bi-Pass technology and shelf-stable formulation maintain potency at room temperature.' },
        { q: 'Can I take this with antibiotics?', a: 'Yes, but space them 2+ hours apart. Continue probiotic for 2+ weeks after finishing antibiotics.' },
        { q: 'When should I take each?', a: 'Biome: morning (empty stomach or with food). Seal: post-workout or pre-bed. Greens: morning with breakfast or as smoothie base.' }
      ]
    },
    'joints': {
      eyebrow: 'Wellness Goal · Joint Comfort',
      description: 'Three supplements together — the curcumin-based joint complex, omega-3 EPA/DHA for inflammation, and bovine collagen peptides for joint structure.',
      whyThis: "Joint health depends on three things: controlling inflammation (omega-3s, curcumin), supporting joint structure (collagen, glucosamine), and reducing wear-and-tear damage (curcumin, glucosamine). Restore is the daily anti-inflammatory: 95% curcumin extract with BioPerine (2,000% absorption boost), glucosamine, boswellia, chondroitin, MSM. Flow (omega-3) supports inflammation resolution via resolvins. Collagen provides amino acid substrates joints use to maintain cartilage.",
      timeline: [
        { week: 'Week 1', text: 'Subtle morning stiffness reduction. Recovery between workouts begins to improve.' },
        { week: 'Week 4', text: 'Joint comfort noticeably better; morning stiffness markedly reduced.' },
        { week: 'Week 8', text: 'Inflammation baseline measurably lower. Training recovery accelerates.' },
        { week: 'Week 12+', text: 'Sustained joint health baseline. The compounded anti-inflammatory + structural support works as designed.' }
      ],
      faq: [
        { q: 'How is this different from OTC joint supplements?', a: 'Most OTC joint products are under-dosed glucosamine alone. This uses clinical-dose curcumin with BioPerine, 10g daily collagen, and EPA/DHA omega-3 that actively resolves inflammation.' },
        { q: 'When should I take each?', a: 'Restore: with a meal containing fat. Flow: any meal with fat. Collagen: daily, any time — morning in coffee is popular.' },
        { q: 'How long until joint improvement?', a: 'Mild improvement in 1-2 weeks. Significant joint comfort builds over 4-8 weeks. Curcumin works upstream on inflammation rather than masking pain.' }
      ]
    }
  }
};

// Lookup helper — supports both 1-arg (uses page context) and 2-arg (explicit category) forms
window.getBundleDetails = function(arg1, arg2) {
  if (arg2 !== undefined) {
    // Two-arg form: getBundleDetails('curated', 'ultimate')
    return (window.BUNDLE_DETAILS[arg1] || {})[arg2] || null;
  }
  // Single-arg form — infer category from page or try both
  const pageCategory = document.body && document.body.dataset && document.body.dataset.bundleCategory;
  if (pageCategory && window.BUNDLE_DETAILS[pageCategory]) {
    const found = window.BUNDLE_DETAILS[pageCategory][arg1];
    if (found) return found;
  }
  // Fallback: search both
  return (window.BUNDLE_DETAILS.curated && window.BUNDLE_DETAILS.curated[arg1])
      || (window.BUNDLE_DETAILS.concern && window.BUNDLE_DETAILS.concern[arg1])
      || null;
};
