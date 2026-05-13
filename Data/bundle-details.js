/* BUNDLE DETAILS — long-form content per bundle.
   Used by:
     - routine.html (separate detail page, fallback when typed by URL)
     - js/bundle-expand.js (inline expansion on routines.html and bundles.html)
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
        { q: 'Is this just every product packaged together?', a: 'Yes — 22 bottles, the entire AM/PM skincare routine plus the complete Daily supplement stack. The pricing reflects the buying-it-all discount (25% off retail) rather than a different formulation.' },
        { q: 'Can I subscribe to the Ultimate?', a: "Yes — and most customers do. Monthly delivery at the same 25% off price, with the option to skip, pause, or cancel any month. The subscribe price doesn't stack additional discount on top, since the Ultimate is already at the deepest savings on the site." },
        { q: 'What if I already have some of these products?', a: 'You can build a custom version using BYO (Build Your Own) on the Routines page — that gives tiered discounts at 3, 6, and 9 products. For 10+ overlapping products, the Ultimate is usually still better even with duplicates.' }
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
        { q: 'How long does one routine last?', a: 'About 30 days. Each bottle is a 30-day supply at recommended dosing. Most customers subscribe monthly for the protocol consistency.' }
      ]
    },
    'daniels-skincare': {
      eyebrow: "Founder's Stack · Skincare Only",
      description: "Every product in the skincare line — AM ritual through PM ritual through the weekly reset. Fifteen formulations, the same discount Daniel gets on his daily supplement stack, the complete topical half of the Ultimate Routine. For customers who already have their supplement game figured out and want the full skincare house.",
      whyThis: "The skincare half of the Ultimate, without the supplements. The 6 AM steps (Wash, Balance, Boost, Hyaluronic, Defense, Soft) prep and protect the skin every morning — vitamin C, multi-weight HA, niacinamide, ceramides, all properly sequenced thinnest-to-thickest. The 5 PM steps (Bounce, Renewal, Firm, Hydration, Glow) work at night when active ingredients aren't fighting UV — retinol, glycolic acid, peptides, ceramide cream, and a six-oil seal. Eye and Clear handle the targeted spots (orbital skin, breakouts) wherever they show up. Mask and Polish are the weekly reset that compounds everything else. Together it's the full topical protocol, layered for compounding effect.",
      timeline: [
        { week: 'Week 1', text: 'Texture feels cleaner and more balanced. Less midday shine; product layering becomes second nature.' },
        { week: 'Week 4', text: 'Hydration holds through the day; pore appearance refines. The retinol + peptide nightly routine starts showing visible smoothing.' },
        { week: 'Week 8', text: 'Tone evens out; fine lines soften measurably. Weekly mask + polish ritual produces visible "post-treatment" glow.' },
        { week: 'Week 12+', text: 'Durable skin baseline. Brighter tone, firmer texture, fewer breakouts, the compound effect of fifteen actives working together properly sequenced.' }
      ],
      faq: [
        { q: 'Do I really use all 15 products?', a: "Not every product every day. AM and PM rituals run daily (11 products). Eye and Clear go on as needed (eyes daily if you have an eye-cream habit, Clear only where active breakouts appear). Mask and Polish are weekly. Most days you'll use 10–12 of the 15." },
        { q: 'What order do I apply them in?', a: 'AM: Wash → Balance → Boost (Vit C) → Hyaluronic → Defense → Soft → sunscreen. PM: Wash → Renewal OR Bounce (alternate nights) → Firm → Hyaluronic → Hydration → Eye → Glow (oil seal). Mask + Polish are weekly add-ons.' },
        { q: 'Can I subscribe to all 15?', a: 'Yes — and Smart Refill is the right cadence here. The skincare line has products on 1, 2, and 3-month cycles. Smart Refill ships each bottle only when its cadence comes due, so you don\'t end up stockpiling 6 unused bottles of Renewal while you blow through Wash. Same discount, smarter shipments.' },
        { q: 'How is this different from buying AM + PM + Reset separately?', a: "Buying AM + PM + Reset as three separate routines totals about 14% off (15% on each minus the smaller piece sizes). This routine pairs all 15 at a flat 18% — the same discount Daniel's Daily supplement stack gets — plus the targeted treatments (Eye, Clear) that don't fit cleanly into either AM or PM." }
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
        { q: 'Where does sunscreen fit in?', a: 'After Soft, before makeup. We don\'t include SPF in this routine so you can use whatever sunscreen you prefer — but daily SPF is non-negotiable, especially with vitamin C in the routine.' }
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
      whyThis: "Performance supplements have hundreds of products and a handful that actually work. This routine is the handful. Power delivers 5g of pharmaceutical-grade creatine — the most-studied supplement in sports nutrition. Pump (L-citrulline malate) raises plasma arginine for nitric oxide and the vascular pump effect. Burn is the thermogenic for pre-workout energy when you want it. Greens covers the polyphenol and adaptogen foundation that supports training adaptation. Seal (L-glutamine) addresses gut barrier and recovery — plasma glutamine drops 20-30% after intense training. Together they form the daily training stack at clinically meaningful doses.",
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
      description: "Ten products built for the season of life when needs shift — gentle but effective skincare, energy and immunity support, calm-down magnesium, and the longevity-grade collagen and cellular stack. Named for the parents who built the protocol, but truly for anyone whose skin and body have grown more reactive with the years.",
      whyThis: "The needs of parents at this stage are specific: gentle on the skin (no fragrances, no harsh actives that flake off, mindful of skin that's grown more reactive), reliable on energy (because life and sleep can both be unpredictable), supportive of nervous-system recovery (because cortisol after decades of work and family life is its own thing). This routine combines the gentle anti-aging skincare staples (Wash, Defense, Bounce at low frequency, Eye, Soft) with the daily-energy stack (Multi, Collagen, NAD+, Vitality) plus Tranquil for adaptogenic support. Together they form a sustainable rhythm — not aspirational, not maximum, just supportive.",
      timeline: [
        { week: 'Week 1', text: 'Skin feels balanced and protected. Daily energy from Multi and Vitality begins.' },
        { week: 'Week 4', text: 'Sleep and stress resilience improve (Tranquil + Multi). Skin glow from Collagen visible.' },
        { week: 'Week 8', text: 'Sustained inside-out support. Skin elasticity, daily energy, mood balance all baseline improved.' },
        { week: 'Week 12+', text: "Durable family-life-friendly baseline. The routine that supports you so you can support everyone else." }
      ],
      faq: [
        { q: 'Is this safe while pregnant or breastfeeding?', a: 'Most products in this routine are pregnancy- and breastfeeding-safe; however, consult your healthcare provider about any supplement during pregnancy or nursing. Topical retinol (Bounce) should be used cautiously or avoided entirely — many providers recommend skipping it during pregnancy and while nursing. The other products are routinely used by parents in those seasons.' },
        { q: "I'm not a parent — can I still use this?", a: 'Of course — the routine was named for the season of life it supports, not the only people who benefit. Anyone whose skin has grown more reactive with time and who wants gentle anti-aging skincare paired with sustaining daily nutrients works.' },
        { q: "Will my husband / dad use this too?", a: "Yes — the routine works just as well for men. Maturing skin has the same fundamental needs across genders: barrier-supportive cleansing, daily antioxidants, targeted anti-aging actives, deep hydration. The supplements are gender-neutral. If you're sharing the routine, just split the bottles." },
        { q: 'When should I take the supplements?', a: 'Morning with breakfast: Multi, NAD+, Vitality, Collagen. Evening with dinner or pre-bed: Tranquil. Spread them out — it aids absorption and matches each supplement\'s timing.' }
      ]
    },
    'arianas': {
      eyebrow: "Ariana's Picks · The Editor's Choice",
      description: "Nine products curated by Ariana — the streamlined effective routine, no fluff. Skincare essentials, daily wellness, beauty support. The 'I want what works' bundle.",
      whyThis: "Ariana's routine is the streamlined version: nine products that cover the essentials without overcomplicating. Wash, Boost, Defense, Renewal, Eye, Soft = a complete cleansing-to-overnight skincare arc using the most-validated actives (niacinamide, vitamin C, glycolic, peptides). Multi, Radiance, Collagen = the daily nutrient foundation plus beauty support. It's intentionally smaller than the Ultimate — for users who want the high-confidence routine without 22 bottles to track.",
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
      eyebrow: 'Anti-Aging · Topical + Cellular',
      description: 'Six targeted products — retinol, peptides, and the eye treatment for the surface plus collagen, NAD+, and beauty vitamins for the cellular foundation. The complete inside-out anti-aging protocol, working at the four levels visible aging actually shows.',
      whyThis: "Aging skin reflects aging cells. The strongest anti-aging protocols address both. Topically: Bounce (retinol) stimulates collagen and cell turnover at the dermis; Firm (peptides) signals collagen synthesis at the surface; Eye Cream addresses the thin orbital skin where peptides have outsized effect. Internally: Collagen at 10g daily provides the amino acid substrates fibroblasts need to actually build new collagen; NAD+ supports the cellular energy and sirtuin pathways central to longevity research; Radiance covers the daily A/C/E/biotin/zinc baseline skin needs to function. Each side without the other hits a ceiling. Together they compound.",
      timeline: [
        { week: 'Week 1', text: 'Skin acclimates to retinol; mild dryness possible. Collagen and NAD+ begin to load.' },
        { week: 'Week 4', text: 'Texture noticeably smoother; surface refinement from retinol. Hair and nails respond to collagen.' },
        { week: 'Week 8', text: 'Fine lines around eyes and forehead measurably softer. Skin elasticity (collagen-driven) measurably improves.' },
        { week: 'Week 12+', text: 'The compounded effect — visible firmness and density at a higher baseline. Anti-aging is a long protocol; this is what consistency produces.' }
      ],
      faq: [
        { q: "I've never used retinol — is this too much?", a: 'Start slow on Bounce (1-2 nights weekly for the first 2-3 weeks). The supplements (Collagen, NAD+, Radiance) and the other topicals (Firm, Eye) are gentle from day one. Always wear sunscreen during retinol use.' },
        { q: 'Do I need both topical AND oral collagen support?', a: 'Yes — they work at different levels. Topical retinol/peptides signal fibroblasts; oral collagen provides the amino acids fibroblasts need. Either alone is partial; together they compound.' },
        { q: 'When should I take each?', a: 'Morning: Collagen (in coffee works), Radiance (with breakfast for fat-soluble vitamins), NAD+. Evening skincare: Bounce or alternate with other actives; Firm + Eye nightly.' }
      ]
    },
    'acne': {
      eyebrow: 'Clear Skin · Topical + Gut-Skin Axis',
      description: 'A five-product clear-skin protocol — salicylic acid, charcoal mask, and niacinamide for the surface, plus probiotics and omega-3s for the gut-skin connection behind chronic breakouts.',
      whyThis: "Chronic acne is rarely just a surface problem. The gut-skin axis is well-documented: gut inflammation, dysbiosis, and systemic inflammation reliably worsen acne. This protocol works both sides. Clear (salicylic acid) dissolves the oil and dead-skin matrix inside pores. Mask (charcoal weekly) draws out accumulated impurities. Boost (niacinamide) reduces inflammation and refines pore appearance. Internally, Biome's 40-billion-CFU probiotic helps restore the gut microbiome that correlates with cleaner skin in clinical trials; Flow's omega-3 EPA/DHA actively resolves inflammation. Together they address acne at its actual root causes.",
      timeline: [
        { week: 'Week 1', text: 'Pores feel cleaner; surface oil reduced. Gut sensitivities may briefly stir as probiotic settles.' },
        { week: 'Week 4', text: 'New breakouts noticeably less frequent. Existing blemishes heal faster.' },
        { week: 'Week 8', text: 'Skin clarity measurably improved. Pore appearance refined; surface texture smoother.' },
        { week: 'Week 12+', text: 'Sustained clear-skin baseline. The protocol becomes preventive maintenance rather than corrective treatment.' }
      ],
      faq: [
        { q: 'Will probiotics really help my acne?', a: "There's growing clinical evidence linking gut dysbiosis to acne — particularly for chronic, treatment-resistant cases. Probiotic supplementation has shown meaningful effect in trials. Combined with topical actives, the result is stronger than either alone." },
        { q: 'I have sensitive acne-prone skin — is this too aggressive?', a: "No — Polish/Mask are weekly, not daily. Start with 2-3 nights of Clear and build up. The internal stack is barrier-supportive: it shouldn't trigger reactivity." },
        { q: 'When will I see clearer skin?', a: 'Visible reduction in new breakouts at 4 weeks. Sustained clearer skin at 8-12 weeks. Skin needs a full cell turnover cycle (~28 days) to respond to topical changes; the gut microbiome takes longer.' }
      ]
    },
    'dryness': {
      eyebrow: 'Lasting Hydration · Topical + Lipid Matrix',
      description: 'Five hydration-focused products — multi-weight hyaluronic, ceramide moisturizer, and overnight cream for surface hydration, plus collagen and omega-3s that build the lipid matrix that holds water in skin.',
      whyThis: "Lasting hydration requires three things: humectants (HA), emollients (ceramides), and the structural support that keeps moisture from escaping. Topically: Hyaluronic delivers multi-weight HA at multiple depths; Hydration moisturizer restores the ceramide matrix; Soft does deep overnight barrier repair. Internally: Flow's omega-3 EPA/DHA are precursors to skin ceramides — your barrier literally builds from dietary fatty acids; Collagen at 10g daily improves skin's water-binding capacity in clinical trials. Topical alone is corrective; pairing with internal nutrient support is preventive and durable.",
      timeline: [
        { week: 'Week 1', text: 'Immediate plump-and-glow effect from layered hyaluronic. Skin feels softer to the touch.' },
        { week: 'Week 4', text: 'Barrier visibly stronger; less reactivity, less afternoon dullness.' },
        { week: 'Week 8', text: 'Sustained all-day hydration; collagen effect on water-binding kicks in.' },
        { week: 'Week 12+', text: 'Durable, deep hydration that compounds. The "thirsty skin" baseline resets durably.' }
      ],
      faq: [
        { q: 'Can I layer all the topical products every day?', a: "Yes — that's the design. Thinnest to thickest: Hyaluronic (serum) → Hydration (moisturizer) → Soft (overnight cream). All daily-safe." },
        { q: 'Why omega-3 and collagen for dry skin?', a: "Skin barrier integrity depends on dietary lipids — omega-3 EPA/DHA are direct ceramide precursors. Collagen peptides improve skin hydration markers in multiple RCTs at 8-12 weeks. Both compound with topical hydration." },
        { q: 'Is this enough for very dry/cracked skin?', a: 'For seasonal dryness, yes. For chronic eczema or severe atopic conditions, pair with clinical-grade barrier cream and consult a dermatologist.' }
      ]
    },
    'dullness': {
      eyebrow: 'Brightness · Topical Antioxidants + Internal Beauty Stack',
      description: 'Five brightening products — topical vitamin C, antioxidant defense, and gentle resurfacing acids paired with oral collagen and the full beauty vitamin stack. The inside-out approach to measurable luminosity.',
      whyThis: "Dull skin has three causes: surface buildup, pigment irregularities, and oxidative damage. Topical alone addresses the first two. Adding internal nutrient support pushes through the ceiling. Topically: Boost (vitamin C) brightens pigment irregularities and inhibits melanin transfer; Defense neutralizes free-radical damage; Renewal accelerates surface turnover to reveal fresh skin. Internally: Radiance covers daily vitamins A/C/E/biotin — the nutrient foundation for skin function; Collagen improves skin elasticity, hydration, and the way light reflects off the surface. Together they produce visible brightness that surface-only protocols can't match.",
      timeline: [
        { week: 'Week 1', text: 'Immediate freshness from Renewal exfoliation; vitamin C antioxidant baseline begins.' },
        { week: 'Week 4', text: 'Skin reflects light more evenly. Hyperpigmentation and post-acne marks start to fade.' },
        { week: 'Week 8', text: 'Measurable brightness improvement; collagen effect on skin density adds to luminosity.' },
        { week: 'Week 12+', text: 'Sustained inside-out glow. The compounded effect produces durable brightness.' }
      ],
      faq: [
        { q: 'Will vitamin C make my skin sun-sensitive?', a: "Counterintuitively, no — vitamin C enhances sunscreen's photoprotection. Always wear SPF daily (especially when using glycolic acid in Renewal)." },
        { q: 'When will I see brighter skin?', a: 'Subtle freshness in 1-2 weeks from topical resurfacing. Visible tone improvement in 6-8 weeks. Internal stack (Collagen + Radiance) takes 8-12 weeks for full inside-out effect.' },
        { q: 'Can I pair this with prescription brighteners?', a: 'Yes — niacinamide and vitamin C work alongside hydroquinone and other prescription brighteners. The combined mechanism is stronger than monotherapy.' }
      ]
    },
    'sensitivity': {
      eyebrow: 'Calm & Resilient · Topical + Systemic Inflammation',
      description: 'Six reactive-skin essentials — sulfate-free cleanser, witch hazel toner, multi-weight hyaluronic, and overnight ceramide cream for the surface, plus probiotics and omega-3s for the systemic inflammation often behind sensitive skin.',
      whyThis: "Reactive skin often has a systemic-inflammation component that surface-only protocols miss. Topically: Wash is sulfate-free and barrier-respecting; Balance uses witch hazel (gentle astringent, no alcohol); Hyaluronic delivers pure barrier-supporting hydration; Soft does overnight ceramide repair. Internally: Biome's probiotic addresses the gut-skin axis — reactive skin often correlates with gut dysbiosis; Flow's omega-3 EPA/DHA actively resolves inflammation systemically. Together they heal the barrier from both sides instead of perpetuating the reactive cycle.",
      timeline: [
        { week: 'Week 1', text: 'Reactivity reduces; less redness after washing. Gut may briefly adjust to probiotic.' },
        { week: 'Week 4', text: 'Barrier visibly stronger; tolerance to other actives gradually returns.' },
        { week: 'Week 8', text: 'Sustained calm baseline. Triggers (weather, fragrance) cause noticeably less reaction.' },
        { week: 'Week 12+', text: "Durable barrier resilience. Internal inflammation baseline lower; skin can tolerate gentle actives it previously couldn't." }
      ],
      faq: [
        { q: 'Is this enough for rosacea or eczema?', a: 'For mild reactive skin and barrier compromise from over-exfoliation, yes. For diagnosed conditions, pair with a dermatologist-prescribed treatment.' },
        { q: 'Why probiotics for sensitive skin?', a: "Multiple studies link gut dysbiosis to skin reactivity, atopic conditions, and rosacea. A probiotic + omega-3 stack reduces the systemic inflammation that often drives reactive skin." },
        { q: 'Can I add retinol or vitamin C later?', a: 'After 4-8 weeks of consistent barrier rebuilding from both sides, yes — slowly. Start with niacinamide, then vitamin C, then retinol if desired.' }
      ]
    },
    'pores': {
      eyebrow: 'Pore Refinement · Topical + Gut-Sebum Connection',
      description: 'Five targeted products — niacinamide, salicylic acid, physical polish, and the weekly charcoal mask for the surface, plus the probiotic that addresses the gut-sebum connection most pore products ignore.',
      whyThis: "Pore appearance is genetic, but pore appearance is highly modifiable. Visible pores look bigger when they're clogged, when texture is uneven, and when sebum production is high. Topically: Boost (niacinamide) reduces sebum and refines pore appearance; Clear (salicylic) dissolves the oil plugs that visually enlarge pores; Polish smooths surface texture; Mask weekly draws out impurities. Internally: Biome's probiotic supports the gut microbiome that influences sebum production — a connection emerging strongly in dermatology research.",
      timeline: [
        { week: 'Week 1', text: 'Pores feel cleaner; skin immediately smoother after Polish or Mask.' },
        { week: 'Week 4', text: 'Less visible oil throughout the day. Pore appearance softens in T-zone.' },
        { week: 'Week 8', text: 'Niacinamide effect on sebum production compounds. Surface texture noticeably smoother.' },
        { week: 'Week 12+', text: 'Durable refined-skin baseline. Less day-long shine; foundation sits more evenly.' }
      ],
      faq: [
        { q: 'Will my pores actually get smaller?', a: 'Pore size is genetic — but pore appearance can shrink significantly with sustained protocol. Most users see visible reduction at 8-12 weeks.' },
        { q: 'How does the probiotic help pores?', a: "Sebum production is influenced by hormonal and inflammatory signals — both modulated by the gut microbiome. Adding the probiotic addresses an upstream lever most pore products skip." },
        { q: 'How often should I use Polish and Mask?', a: 'Polish: 1-2x per week. Mask: 1x per week. Daily physical exfoliation triggers rebound oil. Less is more.' }
      ]
    },

    'sleep': {
      eyebrow: 'Deeper Rest · Wind-Down + Overnight Skincare',
      description: 'Four products — magnesium glycinate and KSM-66 ashwagandha for the nervous system, plus the overnight ceramide cream and eye treatment that put your routine to bed.',
      whyThis: "Sleep quality affects skin repair directly — your skin does its biggest repair work between 10 PM and 2 AM. This bundle pairs sleep-improving supplements with the overnight skincare that takes advantage of that repair window. Calm (magnesium glycinate) supports the GABA pathway and nervous system relaxation. Tranquil (KSM-66 ashwagandha) reduces serum cortisol over 4-6 weeks, improving sleep architecture. Soft (overnight ceramide cream) seals in moisture during the repair window. Eye Cream addresses the puffiness and dark circles that show when sleep is short. Together: a wind-down ritual that visibly shows by morning.",
      timeline: [
        { week: 'Week 1', text: 'Faster wind-down; muscle tension reduces. Skin feels softer in the morning.' },
        { week: 'Week 4', text: 'Sleep onset improves; mid-night wakings reduce. Under-eye puffiness less pronounced.' },
        { week: 'Week 8', text: 'Cortisol response calmer; sleep architecture measurably deeper. Skin shows the difference.' },
        { week: 'Week 12+', text: 'Sustained nervous system support and brighter morning skin. The "tired but wired" baseline resets.' }
      ],
      faq: [
        { q: 'Will this make me drowsy during the day?', a: "No — these aren't sedatives. Magnesium supports natural wind-down at night. Ashwagandha is adaptogenic — supports stress resilience without sedation." },
        { q: 'When should I take each?', a: 'Calm: 30-60 minutes before bed. Tranquil: morning or split AM/PM. Soft and Eye Cream: nightly as the last step of evening skincare.' },
        { q: 'Is this safe long-term?', a: 'Yes — both supplements have extensive long-term safety data. Unlike melatonin, neither creates dependence or tolerance.' }
      ]
    },
    'energy': {
      eyebrow: 'Daily Energy · Cellular Inside + Visible Outside',
      description: 'Five products — multivitamin, CoQ10, and vitamin D3 for foundational cellular energy, plus topical vitamin C and antioxidant defense for the surface effects of fatigue.',
      whyThis: "Sustainable energy is a foundational nutrient and mitochondrial-function problem — not a stimulant problem. This bundle addresses both the cellular energy and the way energy (or lack of it) shows on your face. Multi covers daily B-complex, iron, zinc — what cells need for ATP production. Vitality (CoQ10) supports mitochondrial function — the actual energy factories. Sunshine (D3) addresses one of the most common modern deficiencies, with well-documented mood and energy effects. Defense neutralizes the oxidative damage that makes tired skin look dull. Boost (vitamin C) brightens the dullness fatigue produces. The inside-out energy stack.",
      timeline: [
        { week: 'Week 1', text: 'Topical vitamin C provides immediate skin freshness. Foundation supplements begin to fill in.' },
        { week: 'Week 4', text: 'Daily energy stabilizes; afternoon crashes less pronounced. Skin reflects more evenly.' },
        { week: 'Week 8', text: 'CoQ10 effect on mitochondrial energy markedly improved, particularly in adults 40+.' },
        { week: 'Week 12+', text: 'Sustained foundational energy that visibly shows. Less reliance on caffeine; more steady output.' }
      ],
      faq: [
        { q: 'Should I take all the supplements daily?', a: 'Yes — Multi, Vitality, Sunshine: daily with breakfast (fat-soluble vitamins absorb best with food).' },
        { q: 'How is this different from coffee?', a: 'Caffeine works on the surface (alertness via adenosine blockade). This stack works on the foundation (cellular energy via mitochondria + nutrient repletion). Combine them — daily foundation + occasional caffeine — for the strongest result.' },
        { q: 'When will I notice energy changes?', a: 'Skin freshness from vitamin C: 1-2 weeks. Daily energy stabilization: 4-6 weeks as nutrient stores fill in. Full CoQ10 effect: 8-12 weeks.' }
      ]
    },
    'focus': {
      eyebrow: 'Mental Clarity · Cognitive Stack + Eye Recovery',
      description: 'Four products — nootropics with Alpha GPC and Bacopa, the 10-mushroom Lion\'s Mane complex, omega-3 for brain structure, plus the eye treatment for the toll long focus sessions take.',
      whyThis: "Focus work compounds in two places: the cognitive stack that supports it, and the orbital area that bears the visible toll. Focus delivers acute cognitive support via Alpha GPC (acetylcholine precursor), L-Tyrosine (dopamine precursor), Bacopa (compound buildup over 4-6 weeks). Synapse's mushroom complex — particularly Lion's Mane — supports nerve growth factor and long-term cognitive resilience. Flow's omega-3 EPA/DHA supplies the DHA your brain needs as structural material. Eye Cream addresses the strain, puffiness, and dark circles that show after long thinking sessions. The stack for serious mental work.",
      timeline: [
        { week: 'Week 1', text: 'Alpha GPC and L-Tyrosine work acutely — focus from first dose. Eye Cream reduces strain look.' },
        { week: 'Week 4', text: 'Bacopa effect begins to compound; memory consolidation improves.' },
        { week: 'Week 8', text: "Lion's Mane NGF effect builds; mental endurance noticeably better through long thinking work." },
        { week: 'Week 12+', text: 'Sustained cognitive baseline. The compounded effect becomes the new default.' }
      ],
      faq: [
        { q: 'Is Focus a stimulant?', a: 'No — nootropic stack working on acetylcholine, dopamine, and GABA pathways. Pairs cleanly with caffeine if you want stimulant kick.' },
        { q: 'When should I take each?', a: 'Focus: morning or pre-thinking work. Synapse: morning with breakfast (daily). Flow: with any meal containing fat. Eye Cream: AM + PM.' },
        { q: 'How long until cognitive effects?', a: 'Focus works same-day. Synapse and Flow take 4-8 weeks for compounding effects.' }
      ]
    },
    'stress': {
      eyebrow: 'Resilience & Calm · Adaptogens + Skincare as Ritual',
      description: 'Five products — KSM-66 ashwagandha, magnesium glycinate, and the adaptogenic greens that quiet the cortisol response, plus the witch-hazel toner mist and the weekly detox mask. Skincare reframed as the calming self-care ritual it should be.',
      whyThis: "Chronic stress shows up on skin first — increased sebum, slower wound healing, barrier dysfunction, more visible reactivity — and at the nervous system long before the rest of the body says anything. This bundle works both fronts at once. Tranquil's KSM-66 ashwagandha is the most-studied adaptogen for cortisol reduction. Calm (magnesium glycinate) addresses the nervous-system magnesium depletion that's near-universal in chronically stressed adults. Greens layers in additional adaptogens (ginseng) on a nutrient-dense base for daily resilience. The topical half is built as a ritual rather than a treatment: Balance is the gentle witch-hazel toner that's meant to be misted onto the face — a small sensory pause between cleanse and serums that doubles as a deliberate calm-down moment. Mask is the weekly detox treatment — a slow, intentional ten-minute reset that pulls double duty as skincare and as decompression. Together, the mist and the mask reframe skincare as the calming self-care it should be, while the supplements work quietly on the cortisol response underneath.",
      timeline: [
        { week: 'Week 1', text: 'Nervous system feels less tense; the mist and mask rituals become a daily/weekly decompression anchor.' },
        { week: 'Week 4', text: 'Cortisol response noticeably calmer. Sleep improves; skin reactivity reduces.' },
        { week: 'Week 8', text: 'Adaptogenic effect compounds. Stress recovery faster; skin clarity improves with the weekly mask cadence.' },
        { week: 'Week 12+', text: 'Sustained resilience baseline. The "always-on" feeling resets; skin holds steady through normal stress.' }
      ],
      faq: [
        { q: 'Will adaptogens numb my edge?', a: 'No — adaptogens modulate the stress response without blunting it. Users typically report sharper focus and better decision-making once cortisol drops.' },
        { q: 'How does stress affect skin?', a: 'Cortisol increases sebum production, slows wound healing, and weakens the skin barrier. Reducing systemic cortisol — through ashwagandha and magnesium — visibly improves skin in stressed populations.' },
        { q: 'Why frame skincare as self-care here?', a: 'Because the act itself matters. The 30 seconds of misting Balance onto your face, the ten minutes with the Mask on — these are deliberate pauses in a day that doesn\u2019t otherwise give you any. The cortisol benefit isn\u2019t just from the witch hazel; it\u2019s from the ritual.' },
        { q: 'Can I take all three supplements daily?', a: 'Yes. Tranquil in the morning, Greens with breakfast or as a smoothie base, Calm at night.' }
      ]
    },
    'strength': {
      eyebrow: 'Performance & Recovery · Training Stack + Post-Workout Skin',
      description: 'Five products — pharmaceutical-grade creatine, nitric oxide-boosting L-citrulline, gut-repairing L-glutamine, and collagen for connective tissue, plus the gentle cleanser for the post-workout skin reset.',
      whyThis: "Training hard demands both internal recovery and a skincare routine that handles sweat without stripping. Power delivers 5g pharmaceutical-grade creatine — the most-studied supplement in sports nutrition. Pump (L-citrulline) raises plasma arginine and supports nitric-oxide-driven blood flow. Seal (L-glutamine) addresses gut barrier integrity and post-training recovery — plasma glutamine drops 20-30% after intense work. Collagen at 10g daily supports connective tissue, joints, and the cartilage that takes a beating in training. Wash is the sulfate-free, barrier-respecting cleanser for post-workout face — strong enough for sweat, gentle enough for daily use.",
      timeline: [
        { week: 'Week 1', text: 'Visible vascular pump from Pump pre-workout. Slight intramuscular fullness from creatine.' },
        { week: 'Week 4', text: 'Lift performance increases — better volume, more reps. Recovery accelerates.' },
        { week: 'Week 8', text: 'Muscle volume visibly increased. Joint comfort improves (collagen effect).' },
        { week: 'Week 12+', text: 'Sustained strength baseline. The most-validated training stack working as intended.' }
      ],
      faq: [
        { q: 'When should I take each?', a: 'Power: post-workout. Pump: 30-45 min pre-workout. Seal: post-workout or pre-bed. Collagen: any time daily. Wash: post-workout to remove sweat.' },
        { q: 'Do I need a loading phase for creatine?', a: 'No — 5g daily reaches muscle saturation in 3-4 weeks. Loading is faster, not better.' },
        { q: 'Why collagen for strength training?', a: 'Joint and tendon health is the limiting factor for serious lifters. Collagen at 10g daily, especially paired with vitamin C, has clinical evidence supporting tendon and cartilage health.' }
      ]
    },
    'longevity': {
      eyebrow: 'Cellular Health + Visible Anti-Aging',
      description: 'Five products — NAD+ precursor stack with resveratrol, CoQ10 for mitochondrial function, and curcumin-based joint complex for inflammation, paired with retinol and peptides where aging visibly shows.',
      whyThis: "Longevity is a portfolio of cellular bets that compound over years — and visible aging is the part you can see results on in 8-12 weeks. This bundle does both. Internally: NAD+ pairs direct NAD+ supplementation with quercetin and trans-resveratrol — the multi-pathway approach used in longevity labs; Vitality (CoQ10) supports mitochondrial function as it declines with age; Restore (curcumin + glucosamine + boswellia + MSM) addresses chronic low-grade inflammation. Topically: Bounce (retinol) is the most-validated anti-aging active in dermatology; Firm (peptides) signals collagen synthesis. Cellular bets that show.",
      timeline: [
        { week: 'Week 1', text: 'Skin acclimates to retinol; supplements begin loading. No dramatic acute effects from longevity stack.' },
        { week: 'Week 4', text: 'Joint comfort improves (curcumin effect). Skin texture refines from retinol.' },
        { week: 'Week 8', text: 'CoQ10 effect on mitochondrial energy compounds. Visible firmness from retinol + peptides.' },
        { week: 'Week 12+', text: 'Sustained cellular vitality + visible anti-aging baseline. The compounded longevity protocol working as intended.' }
      ],
      faq: [
        { q: 'When will I notice the longevity supplements?', a: "These work upstream and slowly. Joint comfort and stress modulation surface first (4-8 weeks). The cellular benefits compound over months and years — preventive investment, not symptomatic treatment." },
        { q: 'Is NAD+ supplementation proven?', a: 'NAD+ precursors have strong human trial data raising blood NAD+ levels. We pair NAD+ direct supplementation with quercetin and trans-resveratrol — the multi-pathway approach used in longevity research labs.' },
        { q: 'When should I take each?', a: 'NAD+, Vitality: morning. Restore: with meal containing fat. Bounce: night (alternating retinol nights). Firm: daily morning or night.' }
      ]
    },
    'gut': {
      eyebrow: 'Digestive Health · Gut Foundation + Gut-Skin Axis',
      description: 'Four products — multi-strain probiotic, gut-repairing L-glutamine, and the 22-ingredient adaptogenic greens, plus the niacinamide serum for when the gut-skin axis shows up on your face.',
      whyThis: "Gut health affects nearly every other body system — and the gut-skin axis is one of the strongest connections. This bundle addresses the gut at three levels and supports the skin that bears the visible cost of gut issues. Biome provides 40 billion CFU of clinically-studied probiotic strains with MAKTREK Bi-Pass for stomach-acid survival. Seal (L-glutamine) directly supports the enterocytes lining the gut. Greens provides 22 plant-based ingredients including fiber, polyphenols, and prebiotic compounds. Boost (niacinamide) addresses the inflammation that gut issues commonly show as on skin.",
      timeline: [
        { week: 'Week 1', text: 'Digestion normalizes; bloating and irregularity reduce.' },
        { week: 'Week 4', text: 'Energy more stable. Skin reactivity reduces as systemic inflammation drops.' },
        { week: 'Week 8', text: 'Sustained gut diversity. Skin clarity improves via the gut-skin axis.' },
        { week: 'Week 12+', text: 'Gut-health baseline reset. Downstream effects on skin, energy, mood compound.' }
      ],
      faq: [
        { q: 'Do I need to refrigerate the probiotic?', a: 'No — MAKTREK Bi-Pass technology maintains potency at room temperature.' },
        { q: 'Can I take this with antibiotics?', a: 'Yes, but space them 2+ hours apart. Continue probiotic for 2+ weeks after finishing antibiotics.' },
        { q: 'How does gut health affect my skin?', a: "Gut dysbiosis and inflammation are strongly linked to acne, rosacea, eczema, and general skin reactivity. Improving the gut consistently improves the skin in cases where surface protocols haven't been enough." }
      ]
    },
    'joints': {
      eyebrow: 'Joint Comfort · Internal Anti-Inflammation + Topical EFAs',
      description: 'Five products — the curcumin-based joint complex, omega-3 EPA/DHA, bovine collagen peptides, and CoQ10, plus the omega-rich facial oil that pairs internally and topically for whole-body inflammation resolution.',
      whyThis: "Joint health depends on three things: controlling inflammation, supporting joint structure, and aiding recovery from wear and tear. This bundle delivers all three internally — and the topical oil completes the omega-rich, anti-inflammatory theme. Restore is the daily anti-inflammatory: 95% curcumin with BioPerine (2,000% absorption boost), glucosamine, boswellia, chondroitin, MSM. Flow's omega-3 supports inflammation resolution via resolvins. Collagen provides amino acid substrates joints use to maintain cartilage. Vitality (CoQ10) supports the cellular energy joints need to recover. Glow (facial oil) is the topical complement — omega-rich plant oils for skin's anti-inflammatory pathway.",
      timeline: [
        { week: 'Week 1', text: 'Subtle morning stiffness reduction. Skin feels softer from Glow.' },
        { week: 'Week 4', text: 'Joint comfort noticeably better; morning stiffness markedly reduced.' },
        { week: 'Week 8', text: 'Inflammation baseline measurably lower. Recovery from training accelerates.' },
        { week: 'Week 12+', text: 'Sustained joint health baseline. Whole-body anti-inflammatory protocol working as designed.' }
      ],
      faq: [
        { q: 'How is this different from OTC joint supplements?', a: 'Most OTC joint products are under-dosed glucosamine alone. This uses clinical-dose curcumin with BioPerine, 10g daily collagen, EPA/DHA omega-3, and CoQ10. The combined mechanism is much stronger.' },
        { q: 'When should I take each?', a: 'Restore: with a meal containing fat. Flow: any meal with fat. Collagen: any time. Vitality: with breakfast or lunch. Glow: nightly as the final skincare step.' },
        { q: 'How long until joint improvement?', a: 'Mild improvement in 1-2 weeks. Significant joint comfort builds over 4-8 weeks. Curcumin works upstream on inflammation rather than masking pain — slower onset, more durable effect.' }
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
