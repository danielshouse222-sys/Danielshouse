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
      eyebrow: 'Refined Texture · Resurfacing + Gut-Skin Axis',
      description: 'Five products built around smoothness, not breakouts — physical polish, glycolic resurfacing, and weekly charcoal detox for visible texture, plus niacinamide for tone refinement and the probiotic that drives the gut-skin axis behind surface bumps and uneven texture.',
      whyThis: "Texture issues — visible pores, surface bumps, uneven tone, micro-roughness — come from three places: surface buildup, slow cell turnover, and inflammation upstream of the skin. The Texture Bundle works on all three. Polish (physical exfoliation with pumice + jojoba beads) smooths the surface and primes absorption. Renewal (glycolic acid + lactic) accelerates cell turnover for refined texture without harshness. Mask (charcoal + bentonite, weekly) draws out the accumulated buildup that makes pores look bigger. Boost (niacinamide) reduces sebum, evens tone, and visibly refines pore appearance. Internally: Biome's probiotic supports the gut microbiome that influences sebum and inflammation — a connection that quietly drives chronic texture issues most surface protocols ignore. Together: smoother skin, less visible pore appearance, no acne-grade actives needed.",
      timeline: [
        { week: 'Week 1', text: 'Immediate smoothness after Polish or Mask. Skin feels cleaner and more even.' },
        { week: 'Week 4', text: 'Glycolic effect compounds — texture noticeably refined. Pore appearance softens in the T-zone.' },
        { week: 'Week 8', text: 'Niacinamide effect on sebum production kicks in. Surface uniformity becomes the new baseline.' },
        { week: 'Week 12+', text: 'Durable refined-skin baseline. Makeup and SPF sit more evenly; light reflects more uniformly off the skin.' }
      ],
      faq: [
        { q: 'How is this different from the Clear-Skin Bundle?', a: "Clear-Skin is acne-focused — salicylic acid into pores, charcoal mask, the gut probiotic. Texture is smoothness-focused — glycolic acid for resurfacing, physical polish for surface, niacinamide for tone, mask for buildup. Different actives, different angle. Use Clear-Skin if you're treating active breakouts; use Texture if your skin is mostly clear but feels rough or looks uneven." },
        { q: 'Can sensitive skin handle this?', a: "Yes, with cadence control. Polish: light pressure, 1-2x per week max. Renewal: start at 2 nights a week, build up. Mask: 1x per week. The probiotic and niacinamide are gentle daily. Skin that's actively irritated should pause topicals until calm." },
        { q: 'Will my pores actually get smaller?', a: 'Pore size is genetic — but pore appearance is highly modifiable. Cleaning out the buildup that visually enlarges pores, evening surface texture, and reducing sebum production over time produces a measurable refining effect. Most users see visible improvement in 8-12 weeks.' },
        { q: 'How often should I use Polish and Renewal together?', a: 'Never the same night. Alternate: Polish one night, Renewal another. Both stimulate cell turnover; doing them together over-exfoliates and triggers reactivity.' }
      ]
    },
    'glow': {
      eyebrow: 'Visible Glow · Inside + Out',
      description: 'Six glow-focused products — topical vitamin C, antioxidant defense, the omega-rich overnight oil, weekly charcoal mask, plus daily beauty vitamins and 10g of collagen. The full inside-out beauty stack.',
      whyThis: "Visible glow comes from combining topical and internal strategies. Topically: Boost (vitamin C) brightens pigment irregularities; Defense (niacinamide + antioxidants) protects from environmental dullness; Glow (facial oil) seals everything with a luminous finish; Mask (weekly charcoal/clay) decongests skin every 3-7 days so light reflects more evenly. Internally: Radiance delivers the daily vitamin A/C/E/biotin foundation skin/hair/nails are literally built from; Collagen provides 10g daily peptides for skin elasticity and the water-binding capacity that produces a 'lit from within' look. Topical alone hits a ceiling — adding internal nutrient support pushes through it.",
      timeline: [
        { week: 'Week 1', text: 'Immediate fresh-skin effect from vitamin C and the overnight oil. Hair and nails feel stronger from collagen.' },
        { week: 'Week 4', text: 'Brightness visibly improves; skin reflects light more evenly. Hair growth accelerates.' },
        { week: 'Week 8', text: 'Skin elasticity measurably improves (collagen kicks in). Glow baseline at higher level.' },
        { week: 'Week 12+', text: 'Sustained inside-out glow. The compounded effect of topical + internal works as designed.' }
      ],
      faq: [
        { q: 'How is this different from the Brightening Bundle?', a: "Brightening is a 4-product focused stack for tone and pigment correction (Boost, Defense, Renewal, Radiance). The Glow Bundle is broader and more luminance-focused — it adds the overnight oil seal, the weekly mask, and 10g of collagen to push past the ceiling that topical-only protocols hit. Use Brightening if pigment irregularities are the issue; use Glow if you want overall luminosity." },
        { q: 'How often should I use the mask?', a: 'Once a week — twice if your skin is congested. More often causes over-exfoliation. Less is more with weekly treatments.' },
        { q: 'When should I take Collagen and Radiance?', a: 'Collagen: any time daily — morning in coffee is the most popular ritual. Radiance: with food for fat-soluble vitamin absorption.' },
        { q: 'How long until visible glow?', a: '1-2 weeks for surface freshness from topical actives. 4-6 weeks for collagen + Radiance internal effects. 8-12 weeks for full inside-out compounding.' }
      ]
    },
    'starter': {
      eyebrow: 'Three Steps · The Entry Point',
      description: 'Three products. Cleanse, tone, moisturize. The minimum effective skincare routine for someone who has never had one — or wants to start over with the basics done right.',
      whyThis: "Most people's first skincare routine fails for the same reason: too many products, too many actives, too soon. The Skin Starter Bundle is the opposite. Wash is a non-stripping, barrier-respecting cleanser — sulfate-free, plant-protein based, gentle enough for daily use. Balance is a witch-hazel-and-aloe toner that prepares skin without astringency. Soft is a daily ceramide moisturizer that locks in hydration and keeps the barrier strong. No retinol, no acids, no vitamin C — those come later, once the foundation is in place. Run this for 6-8 weeks before adding anything else. You'll know it's working when your skin no longer feels tight after cleansing and your makeup or SPF sits flat all day.",
      timeline: [
        { week: 'Week 1', text: 'Skin no longer tight after cleansing. Toner adds a calming pause in the routine.' },
        { week: 'Week 4', text: 'Barrier feels balanced. Less reactivity, more even tone, fewer mid-day shine episodes.' },
        { week: 'Week 8', text: 'A reliable baseline. Skin tolerates makeup, SPF, and weather changes without complaint.' },
        { week: 'Week 12+', text: 'Ready to layer. With a strong barrier you can now add vitamin C (Boost), or treatments like Renewal — without flare-ups.' }
      ],
      faq: [
        { q: 'I have problem skin — is this really enough?', a: "For the first 6-8 weeks, yes. Most reactive, breakout-prone, or sensitive skin gets worse from too many actives, not too few. Run the foundation properly first, then add targeted treatments once you know how your skin responds." },
        { q: "I'm 25 / 35 / 45 — should I be using more?", a: "Not necessarily, and not at first. Age isn't the variable; barrier health is. Once these three are running and your skin feels resilient, layer Boost (vitamin C) in the morning and Bounce (retinol) at night — that's the natural next step." },
        { q: "What order do I use them in?", a: "Morning and night, same order each time: Wash → Balance → Soft. Apply Balance with your hands or a cotton round to damp skin, let it absorb for 20 seconds, then Soft on top. The whole routine takes under two minutes." },
        { q: "Is this safe during pregnancy?", a: "Yes — none of these three contain ingredients flagged for pregnancy concerns. Wash, Balance, and Soft are pregnancy- and breastfeeding-safe routinely. (Always confirm with your provider for your specific case.)" }
      ]
    },
    'reset': {
      eyebrow: 'Weekly Reset · The Skincare Complement',
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
      description: 'Six products — multivitamin, CoQ10, and vitamin D3 for foundational cellular energy, Burn for the metabolic and pre-task lift, the Focus nootropic for the mental side of energy, and topical vitamin C for the surface effects of fatigue.',
      whyThis: "Sustainable energy isn't one thing — it's foundational nutrients, mitochondrial function, metabolic flexibility, and cognitive engagement all working together. This bundle covers all four. Multi delivers the B-complex, iron, and zinc cells need for ATP production. Vitality (CoQ10) supports mitochondrial energy — the actual factories. Sunshine (vitamin D3) addresses one of the most common modern deficiencies, with documented mood and energy effects. Burn adds caffeine-and-amino-acid metabolic support for the days that need a clean lift without jitter. Focus (Alpha GPC + L-Tyrosine + Bacopa) handles the cognitive side — the mental energy that makes physical energy feel useful. And Boost (topical vitamin C) brightens the dullness fatigue puts on the surface. Inside-out, all-day energy.",
      timeline: [
        { week: 'Week 1', text: 'Burn and Focus deliver same-day acute energy and mental clarity. Boost provides immediate skin freshness.' },
        { week: 'Week 4', text: 'Foundation nutrients fill in. Daily energy stabilizes; afternoon crashes less pronounced. Skin reflects more evenly.' },
        { week: 'Week 8', text: "CoQ10 effect on mitochondrial energy markedly improved (particularly in adults 40+). Bacopa's compound cognitive effect begins to show." },
        { week: 'Week 12+', text: 'Sustained foundational energy that visibly shows. Less reliance on caffeine; more steady output, sharper mental engagement.' }
      ],
      faq: [
        { q: 'When should I take each supplement?', a: 'Morning with breakfast: Multi, Vitality, Sunshine (fat-soluble vitamins absorb best with food). Pre-task: Burn and Focus, 30 minutes before deep work or training. Boost (topical) goes on cleansed AM skin, before moisturizer.' },
        { q: 'Is Burn a stimulant? Will it stack with coffee?', a: "Burn contains caffeine plus L-carnitine, green tea, and B-vitamins — moderate stimulation with the metabolic and mood layer added. Yes, it stacks with coffee, but most users do well taking Burn instead of (not on top of) a second cup. Don't take after 2 PM if you're sleep-sensitive." },
        { q: 'How is this different from drinking more coffee?', a: 'Caffeine works on the surface — short-acting alertness via adenosine blockade. This stack works on the foundation: cellular energy via mitochondria, nutrient repletion of common deficiencies, metabolic support, plus the cognitive nootropic that turns physical energy into useful output.' },
        { q: 'When will I notice changes?', a: 'Same-day from Burn and Focus and the topical vitamin C. Daily energy stabilization at 4-6 weeks as nutrient stores fill in. Full CoQ10 + Bacopa effects at 8-12 weeks.' }
      ]
    },
    'focus': {
      eyebrow: 'Mental Clarity · Cognitive Stack + Eye Recovery',
      description: "Five products — the Focus nootropic with Alpha GPC and Bacopa, Synapse's 10-mushroom Lion's Mane complex, omega-3 for brain structure, Burn for the metabolic + cognitive lift before deep work, plus the eye treatment for the toll long focus sessions take.",
      whyThis: "Focus work compounds in two places: the cognitive stack that supports it, and the orbital area that bears the visible toll. This bundle covers both. Focus delivers acute cognitive support via Alpha GPC (acetylcholine precursor), L-Tyrosine (dopamine precursor), Bacopa (compounding memory effect over 4-6 weeks). Synapse's mushroom complex — particularly Lion's Mane — supports nerve growth factor and long-term cognitive resilience. Burn adds caffeine-and-L-carnitine for the pre-deep-work metabolic lift. Flow's omega-3 EPA/DHA supplies the DHA your brain literally builds itself out of. Eye Cream addresses the strain, puffiness, and dark circles that show after long thinking sessions. The stack for serious mental work.",
      timeline: [
        { week: 'Week 1', text: 'Alpha GPC, L-Tyrosine, and Burn work acutely — sharper focus and metabolic lift from first dose. Eye Cream reduces strain look.' },
        { week: 'Week 4', text: "Bacopa effect begins to compound; memory consolidation improves. Burn's metabolic effect becomes steady, not stimulatory." },
        { week: 'Week 8', text: "Lion's Mane NGF effect builds; mental endurance noticeably better through long thinking work." },
        { week: 'Week 12+', text: 'Sustained cognitive baseline. The compounded effect becomes the new default.' }
      ],
      faq: [
        { q: 'Is Focus a stimulant?', a: 'No — nootropic stack working on acetylcholine, dopamine, GABA, and choline pathways. Pairs cleanly with caffeine if you want a stimulant kick — and Burn is in the bundle for exactly that.' },
        { q: 'Is the Burn in here for the caffeine, or something else?', a: "Both. The caffeine provides acute alertness; the L-carnitine and green tea provide metabolic energy substrate so the kick is paired with fuel. The B-complex in Burn also helps neurotransmitter synthesis the rest of the stack depends on." },
        { q: 'When should I take each?', a: 'Focus and Burn: morning or 30 minutes pre-deep-work (not after 2 PM if you sleep-sensitive). Synapse: morning with breakfast. Flow: with any meal containing fat. Eye Cream: AM + PM as last skincare step.' },
        { q: 'How long until cognitive effects?', a: 'Focus and Burn work same-day. Synapse and Flow take 4-8 weeks for compounding effects.' }
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
    },
    'hair-nails': {
      eyebrow: 'Beauty From Within · The Hair, Skin, and Nail Stack',
      description: 'Four products — Radiance for the biotin-and-vitamin foundation, marine collagen for hair-shaft and nail-bed strength, the multivitamin for the absorption baseline, and the probiotic that drives the keratin and growth side of the gut-skin axis.',
      whyThis: "Hair and nails reflect what you feed them. The foundation matters more than the trendy ingredients on the front of any bottle. Radiance delivers the biotin, vitamins A/C/E, zinc, and silica that hair and nails are literally built from — a deficiency anywhere in this stack shows up as breakage, slow growth, or brittleness within weeks. Collagen provides type I and III peptides for hair-shaft structural protein and the nail bed where nails actually grow from; multiple RCTs show measurable improvements in hair thickness and nail growth rate at 8-16 weeks with 10g daily. Multi handles the broader vitamin and mineral baseline — without it, the other targeted nutrients have nothing to compound on. Biome supports the gut microbiome that drives a meaningful share of keratin metabolism and hair-loss-related inflammation. Inside-out hair and nails, no topical noise needed.",
      timeline: [
        { week: 'Week 1', text: 'Foundation nutrients begin loading. No visible change yet — hair and nails grow on slow cycles.' },
        { week: 'Week 4', text: 'Nail growth visibly faster; brittle edges reduce. Hair feels stronger in the brush.' },
        { week: 'Week 8', text: 'Hair thickness and shine measurably improve. Collagen effect on growth rate becomes clear.' },
        { week: 'Week 12+', text: 'Sustained inside-out baseline. The hair-and-nail clinical RCTs typically read out their full effect here.' }
      ],
      faq: [
        { q: 'How fast will I see results?', a: 'Nails grow ~3 mm/month and hair ~1 cm/month. Visible improvement requires multiple growth cycles. Expect noticeable change at 8-12 weeks, full effect at 16-24 weeks.' },
        { q: 'Is this just biotin?', a: "No — biotin alone is overhyped. Most hair-and-nail issues come from broader deficiencies (iron, zinc, vitamin D, protein), inflammation, or the gut. This bundle covers all four levers — that's why it works when standalone biotin doesn't." },
        { q: 'When should I take everything?', a: 'Morning with breakfast: Multi, Radiance, Collagen (collagen in coffee works well). Biome: empty stomach in the morning, or with food. All together is fine; spreading aids absorption a little.' },
        { q: "I'm dealing with shedding or thinning — will this fix it?", a: "It supports the foundation that drives healthy growth. For active shedding (telogen effluvium, hormonal, etc.) or pattern hair loss, see a dermatologist for diagnosis — this bundle pairs well with clinical treatment, but isn't a substitute for it." }
      ]
    },
    'travel': {
      eyebrow: 'Built for the Road · TSA-Friendly Coverage',
      description: 'Five products that fit in any carry-on — barrier-respecting cleanser, the foundational multi, omega-3 for airplane meals, magnesium for time-zone resets, and vitamin D for the days you do not see the sun. The bare-minimum travel protocol that actually holds.',
      whyThis: "Travel breaks every routine that depends on environment — bad sleep, dry plane air, restaurant meals, unfamiliar water, missed sun exposure. This bundle covers what you can't outsource. Wash is the only skincare product you can't compromise on: gentle enough for hotel-water rinses, strong enough to clean off a day of dirt and recycled cabin air, sulfate-free so your barrier survives the trip. Multi and Flow handle the nutrient gap from restaurant food and airplane meals. Calm is the magnesium glycinate that resets your nervous system across time zones — particularly effective for the first three nights after a long flight. Sunshine (D3) covers the vitamin D deficit from days spent indoors, in transit, or in low-sun destinations. Five bottles, every base covered.",
      timeline: [
        { week: 'Day 1', text: 'Calm helps you sleep on a new schedule from the first night. Wash makes hotel-water skin feel normal.' },
        { week: 'Week 1 on a trip', text: 'Foundation nutrients hold off the cumulative deficit travel creates. Less travel fatigue, less digestion disruption.' },
        { week: 'Multi-trip', text: 'The stack becomes the muscle memory — same routine works in any hotel, any time zone, any duration.' },
        { week: 'Year-round', text: 'For frequent travelers, this becomes the everyday minimum. The Travel Stack and being home stop being different routines.' }
      ],
      faq: [
        { q: 'How does this fit TSA / carry-on rules?', a: 'All five products are well under 3.4 oz / 100 ml each. Wash is 4 oz so check labels of the actual current bottle — newer travel-sized formats may be split. Supplements are bottles of capsules/softgels, no liquid restriction.' },
        { q: 'Why this list specifically?', a: "These five are the highest-leverage products for the things travel breaks — sleep, skin barrier, nutrient gaps, vitamin D. The skincare line is deliberately minimal (just Wash) because hotel sinks and airplane air are bad places to do a full routine. If you want full skincare on the road, layer the rest of your routine on top of this baseline." },
        { q: 'Is the cadence here Smart Refill?', a: "Yes — Smart Refill is the right cadence for this bundle. Wash and Flow ship every 2 months, Calm every 2, Sunshine every 3, Multi monthly. Different cadences = exactly what Smart Refill is for. Saves about $40/year vs flat monthly." },
        { q: 'What about jet lag specifically?', a: 'Calm 30-60 minutes before bed in the new time zone for the first 3 nights makes a meaningful difference. Sunshine in the morning helps your circadian rhythm reset. Multi covers the nutrient depletion that compounds the disruption.' }
      ]
    },
    'cycle': {
      eyebrow: 'Cycle Support · Across the Month',
      description: 'Five products — KSM-66 ashwagandha for hormonal-balance modulation, magnesium glycinate for PMS-week tension and sleep, vitamin D for mood through the luteal dip, the gut probiotic for the cycle-skin axis, and omega-3 for the inflammation side. The protocol for women whose energy, skin, and mood track the month.',
      whyThis: "The menstrual cycle drives meaningful weekly changes in mood, energy, skin, sleep, and inflammation — and most general wellness protocols ignore this. This bundle addresses each axis with what the clinical literature actually supports. Tranquil (KSM-66 ashwagandha at 600mg) is the most-studied adaptogen for cortisol modulation, with particular evidence in women for stress, sleep, and hormonal balance support. Calm (magnesium glycinate) addresses the magnesium deficit that worsens PMS symptoms — cramping, irritability, sleep disruption, and headaches all respond to consistent supplementation in clinical trials. Sunshine (vitamin D3) supports mood through the luteal phase where vitamin D status is meaningfully correlated with PMS severity. Biome covers the cycle-influenced gut microbiome — hormonal shifts change gut function, and the gut-skin axis is the upstream driver of mid-cycle and pre-period breakouts. Flow's omega-3 EPA/DHA reduces the inflammation that drives cramping and the breakouts that often track the luteal phase. Five products, addressing the four levers cycle-aware women actually feel.",
      timeline: [
        { week: 'Cycle 1', text: 'Calm reduces PMS-week tension and improves sleep on first cycle. Tranquil begins loading.' },
        { week: 'Cycle 2', text: 'Magnesium effects on cramping and sleep compound. Cycle-tracking breakouts visibly reduce.' },
        { week: 'Cycle 3', text: 'Ashwagandha cortisol modulation becomes consistent. Luteal-phase mood feels meaningfully steadier.' },
        { week: 'Cycle 4+', text: 'Sustained cycle-aware baseline. Energy, mood, and skin track the month with much less amplitude.' }
      ],
      faq: [
        { q: 'When should I take each?', a: 'Tranquil: morning with breakfast (daily). Calm: 30-60 minutes before bed (especially PMS week). Sunshine, Flow, Biome: morning with food. Daily, all month — none of these are cycle-phase-specific. Consistency over the whole month is what produces the effect.' },
        { q: 'Will this help PCOS or endometriosis?', a: 'These conditions need medical management; supplements alone are not a substitute. That said, the components here (ashwagandha for stress/cortisol, magnesium for cramping, omega-3 for inflammation, probiotic for gut-hormone axis) are commonly used alongside clinical care. Talk to your provider about adding this protocol.' },
        { q: "I'm pregnant or trying — is this safe?", a: 'Ashwagandha (Tranquil) is not recommended during pregnancy. Skip Tranquil. Magnesium glycinate, vitamin D, omega-3, and probiotic are all generally pregnancy-safe — but always confirm with your provider during pregnancy or breastfeeding. The Mom\'s Routine is built for that season.' },
        { q: "What if I'm on hormonal birth control?", a: "These supplements are compatible with hormonal contraceptives — but birth control already smooths a lot of cycle variation, so you may feel less acute benefit from cycle-tracking effects. The foundational support (mood, sleep, skin, gut, inflammation) is still meaningful." },
        { q: 'How does this differ from the Sleep Bundle or Stress Bundle?', a: "Sleep is acute (wind-down + magnesium + overnight skincare). Stress is broad cortisol response. The Cycle Bundle is the monthly-rhythm protocol — overlaps with both but specifically tracks luteal-phase mood, PMS cramping, cycle-related skin patterns, and the hormonal-balance side of adaptogens. Use Sleep when sleep is the problem, Stress when stress is the problem, Cycle when the pattern is monthly." }
      ]
    },
    'metabolic': {
      eyebrow: 'Metabolic Health · Foundation-First Energy',
      description: 'Four supplements — Burn for the metabolic and pre-task lift, Greens for nutrient density, Biome for the gut microbiome that drives a meaningful share of metabolism, and Multi for the absorption baseline. Metabolism that runs on food, not just stimulation.',
      whyThis: "Metabolic health is rarely a stimulant problem — it's a fuel, gut, and micronutrient problem. This bundle works that foundation. Burn delivers L-carnitine (which shuttles fatty acids into mitochondria for energy), green tea EGCG (with documented metabolic effects), and B-vitamins (cofactors for nearly every enzyme that turns food into ATP). Greens layers in 22 plant-based ingredients including fiber, polyphenols, prebiotics, and adaptogens — the nutrient density most diets fall short on. Biome supports the gut microbiome that influences metabolism via short-chain fatty acid production, bile acid metabolism, and inflammation regulation. Multi covers the broader vitamin and mineral baseline that lets the other three actually work. Inside-out metabolic support, no crash, no withdrawal.",
      timeline: [
        { week: 'Week 1', text: 'Acute lift from Burn from day one. Digestion begins to normalize.' },
        { week: 'Week 4', text: 'Nutrient gaps fill in. Cravings settle as the gut and blood sugar stabilize.' },
        { week: 'Week 8', text: 'Metabolic flexibility improves — more consistent energy between meals, less afternoon crash.' },
        { week: 'Week 12+', text: 'Sustained metabolic baseline. The compounded effect of foundational support compounds without the stimulant cycle.' }
      ],
      faq: [
        { q: 'Is this a weight-loss bundle?', a: "No — this is a metabolic-health bundle. The components are designed to support how your body produces and uses energy, not to suppress appetite or trigger fat loss directly. Sustained metabolic health is the foundation weight goals work on, but this isn't a diet aid." },
        { q: 'How is this different from the Energy Bundle?', a: "Energy is broader (cellular energy via mitochondria, vitamin D, vitamin C for tired skin, cognitive nootropic). Metabolic is narrower and gut-first (Burn for the metabolic lift, Greens for nutrient density, Biome for the microbiome, Multi for absorption). Use Energy if your issue is daily fatigue across all axes; use Metabolic if your issue is specifically about how your body processes food into energy." },
        { q: 'Is Burn safe daily?', a: 'Yes at recommended dose. Burn contains caffeine — about a small cup of coffee per serving — plus L-carnitine, green tea, and B-vitamins. Stack it with coffee with caution; sensitive sleepers should take it before 2 PM.' },
        { q: 'When should I take each?', a: 'Burn: morning or 30 minutes before deep work / training. Greens: with breakfast or as a smoothie base. Biome: empty stomach in the morning works best for most. Multi: with food (fat-soluble vitamins absorb better that way).' }
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
