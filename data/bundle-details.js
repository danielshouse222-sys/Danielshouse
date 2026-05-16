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
      description: 'Twenty-three bottles in one box. The complete Daily supplement stack of ten paired with both AM and PM skincare rituals — every product Daniel actually uses on himself, every day. The biggest savings on the site (25% off retail) and the simplest decision: the whole house, all at once.',
      whyThis: "The Ultimate isn't a marketing tier — it's what happens when you stop assembling supplements piecemeal and let the routine compound. The Daily Stack covers the inside (energy, immunity, sleep, recovery, cellular health), the AM ritual builds and protects the barrier (cleanse, tone, antioxidant defense, hydrate, SPF-ready moisturize), and the PM ritual handles repair (retinol, exfoliation, deep hydration, eye, overnight oil). Stacked together, the effects compound: better gut function improves nutrient delivery to skin, magnesium and ashwagandha improve sleep which improves skin repair, omega-3s reduce inflammation which improves both joint comfort and skin clarity.",
      timeline: [
        { week: 'Week 1', text: 'Skincare barrier feels balanced; products absorb cleanly. Supplements begin to stabilize daily energy and digestion.' },
        { week: 'Week 4', text: 'Visible skin improvement — texture, hydration, brightness. Supplement effects compound — sleep deeper, mornings calmer, recovery faster.' },
        { week: 'Week 8', text: 'Skin firmness and fine line reduction become noticeable. Cellular energy markers (CoQ10, NAD+) baseline at higher levels. Stress resilience visibly improved.' },
        { week: 'Week 12+', text: 'The full compounding effect: skin elasticity at multi-year baseline highs, sustained daily energy, deep cardiovascular and longevity markers in motion. The full-system effect Daniel built this around.' }
      ],
      faq: [
        { q: 'Is this just every product packaged together?', a: 'Yes — 23 bottles, the entire AM/PM skincare routine plus the complete Daily supplement stack. The pricing reflects the buying-it-all discount (25% off retail) rather than a different formulation.' },
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
      description: "The complete daily skincare ritual — AM through PM through the weekly reset. Seventeen formulations covering everything your daily routine needs, the same deep discount Daniel's Daily Supplements get, the complete topical half of the Ultimate Routine. For customers who already have their supplement game figured out and want the full daily skincare house. (The four targeted treatments — Bright, Lift, Lipid, Spot — live in their own dedicated bundle since they're applied as needed rather than daily.)",
      whyThis: "The skincare half of the Ultimate, without the supplements. The 7 AM steps (Wash, Balance, Boost, Plump, Defense, Soft, Shield) prep, protect, and shield the skin every morning — botanical cleanser, 3.5% glycolic exfoliator, bio-peptide growth factor serum, pure HA, CE Ferulic antioxidant architecture, advanced HA moisturizer, and broad-spectrum mineral SPF. The 5 PM steps (Bounce, Renewal, Firm, Mist, Glow) work at night when active ingredients aren't fighting UV — five-active retinol, multi-action peeling pads, advanced peptide complex, hyaluronic mist, and squalane + HA spheres. Two daily treatments — Clear (2% salicylic daily clarifier) and Awake (DCX peptide eye serum) — sit alongside the rituals. Mask, Polish, and the new overnight collagen mask Dream form the weekly reset that compounds everything else. Together it's the complete daily topical protocol, layered for compounding effect. If your skin has specific targeted concerns — hyperpigmentation, neck aging, recurring breakouts, or barrier-stressed days — add The Targeted Bundle on top.",
      timeline: [
        { week: 'Week 1', text: 'Texture feels cleaner and more balanced. Less midday shine; product layering becomes second nature.' },
        { week: 'Week 4', text: 'Mist holds through the day; pore appearance refines. The retinol + peptide nightly routine starts showing visible smoothing.' },
        { week: 'Week 8', text: 'Tone evens out; fine lines soften measurably. Weekly mask + polish + Dream ritual produces visible "post-treatment" glow.' },
        { week: 'Week 12+', text: 'Durable skin baseline. Brighter tone, firmer texture, fewer breakouts, the compound effect of seventeen actives working together properly sequenced.' }
      ],
      faq: [
        { q: 'Do I really use all 17 products?', a: "Not every product every day. AM and PM rituals run daily (12 products). Clear is daily-or-as-needed for clarification. Awake is nightly under the eyes. Mask, Polish, and Dream are weekly. Most days you'll use 11–14 of the 17." },
        { q: 'What order do I apply them in?', a: 'AM: Wash → Balance (glycolic) → Boost (peptide growth factor) → Plump → Defense (CE Ferulic) → Soft → Shield (mineral SPF). PM: Wash → Renewal (multi-acid pads) OR Bounce (5-active retinol) — alternate nights → Firm → Mist (HA mist) → Awake → Glow (HA-in-squalane seal). Clear is applied after Wash on acne-prone days. Dream is layered over moisturizer 2-3 nights/week. Mask + Polish are weekly add-ons.' },
        { q: 'Where are Bright, Lift, Lipid, and Spot?', a: "Those four sit in their own bundle — The Targeted Bundle ($184 / $162 at 12% off). They're applied as needed rather than every day: Bright on hyperpigmentation, Lift on the neck and décolleté, Lipid on barrier-stressed nights, Spot on active blemishes. Most customers don't need all four — they pick the targeted layer for the concerns their daily routine doesn't already cover." },
        { q: 'Can I subscribe to all 17?', a: 'Yes — and Smart Refill is the right cadence here. The skincare line has products on 1, 2, 3, and 6-month cycles. Smart Refill ships each bottle only when its cadence comes due, so you don\'t end up stockpiling unused bottles of Renewal while you blow through Wash. Same discount, smarter shipments.' },
        { q: 'How is this different from buying AM + PM separately?', a: "Buying AM + PM as two separate routines totals about 15% off each, applied to two smaller bundle totals — and you'd still be missing Clear (daily clarifier), Awake (eye serum), the weekly resurfacing pair (Mask + Polish), and the new overnight collagen mask (Dream). This routine pairs all 17 daily-and-weekly products at a flat 18% — a deeper discount than either bundle gets on its own — and covers everything the AM and PM rituals leave out." }
      ]
    },
    'am': {
      eyebrow: 'Morning Skincare Ritual',
      description: 'The full morning routine. Cleanse, tone, brighten, hydrate, defend, moisturize, shield — seven steps to start the day with a complete barrier and visible glow.',
      whyThis: "Morning skincare has three jobs: prep, protect, and shield. Wash removes overnight residue and excess oil without stripping (rose hip seed oil + geranium + Irish moss). Balance gently exfoliates with 3.5% glycolic acid — daily-use AHA that smooths surface texture without irritation. Boost delivers bio-peptide growth factor support with five biomimetic peptides for cellular renewal and skin resilience. Plump layers pure water-and-sodium-hyaluronate for plumping hydration. Defense provides the CE Ferulic antioxidant architecture (L-ascorbic acid + ferulic acid + niacinamide + B5 + vitamin E) against pollution and free radicals. Soft seals everything with the advanced multi-weight HA moisturizing cream. Shield finishes with broad-spectrum mineral SPF 30 — the most important product in any morning routine. Each step compounds the next: clean skin absorbs serums better, hydrated skin holds antioxidants longer, sealed skin holds hydration through the day, and SPF protects every gain.",
      timeline: [
        { week: 'Week 1', text: 'Skin feels cleaner and more balanced. Less midday shine; better foundation application.' },
        { week: 'Week 4', text: 'Visible brightness improvement. Mist holds through the day; barrier feels stronger.' },
        { week: 'Week 8', text: 'Sustained even tone; skin reflects light more evenly. Pollution effects visibly reduced.' },
        { week: 'Week 12+', text: 'Durable morning-routine baseline. Skin starts the day strong and protected.' }
      ],
      faq: [
        { q: 'What order do I use these in?', a: 'In order: Wash, Balance (3.5% glycolic), Boost (peptide growth factor), Plump (serum), Defense (CE Ferulic antioxidant), Soft (moisturizer), Shield (mineral SPF). Apply each before the next is fully absorbed — thinnest to thickest, SPF always last.' },
        { q: 'Do I need all seven?', a: "If you're tight on time, the absolute minimum is Wash + Boost + Soft + Shield. The full 7-step gets the most compounding benefit, but a streamlined version still works — just never skip the SPF." },
        { q: 'Is Shield enough sun protection on its own?', a: 'Yes — Shield is broad-spectrum SPF 30 with non-nano zinc oxide and titanium dioxide (the two FDA-cleared mineral filters), reef-friendly, and 40-min water resistant. It pairs with the Defense antioxidant step underneath to compound photoprotection: ferulic acid + vitamin C below, mineral filters on top. Reapply every 2 hours if outdoors for extended periods.' }
      ]
    },
    'pm': {
      eyebrow: 'Evening Skincare Ritual',
      description: 'The full nighttime routine. Treatment, resurface, firm, hydrate, eye, overnight — six steps designed for sleep, when skin repair runs at its strongest.',
      whyThis: "The PM ritual is where the heaviest visible work happens — retinol-driven cellular turnover, peptide-driven collagen signaling, and resurfacing acids to clear the surface so everything penetrates. <strong>Critical:</strong> Bounce (retinol) and Renewal (multi-acid resurfacing pads) are alternated on different nights, not stacked. Retinol nights (Mon/Wed/Fri): cleanse → Bounce → Firm → Mist → Awake → Glow. Acid-pad nights (Tue/Thu/Sat): cleanse → Renewal → Firm → Mist → Awake → Glow. Sunday: rest night (cleanse → Mist → Glow only). Stacking retinol and exfoliating acids in the same evening is the most common cause of over-exfoliation, barrier damage, and the breakouts that look like the routine is 'failing.' The schedule above is what dermatologists actually recommend.",
      timeline: [
        { week: 'Week 1', text: 'Initial acclimation — possible mild dryness from retinol. Skin feels softer after Awake and Glow.' },
        { week: 'Week 4', text: 'Texture noticeably smoother; surface refinement from the triple-acid blend. Fine lines around eyes soften.' },
        { week: 'Week 8', text: 'Skin firmness measurably improved. Tone evenness builds. Foundation sits differently.' },
        { week: 'Week 12+', text: 'Visible anti-aging effect — skin density, elasticity, and clarity at higher baseline. Maintain with consistency.' }
      ],
      faq: [
        { q: 'How do I alternate retinol and the triple-acid treatment?', a: 'Use Bounce (retinol) one night, Renewal (glycolic + lactic + salicylic) the next night when starting out. After 4-6 weeks of tolerance building, you can use them on alternating nights regularly — never the same night.' },
        { q: 'I have sensitive skin — is this too much?', a: 'Start slow. Use Bounce 1-2 nights weekly for 2-3 weeks, then build up. Renewal is gentler — start 2 nights weekly. The other 4 products (Firm, Mist, Awake, Glow) are gentle enough for daily use from day one.' },
        { q: 'Order to apply?', a: "Wash first (use your AM cleanser). Then in order: Renewal OR Bounce (treatment night) → Firm (peptides) → Mist (gel-cream moisturizer) → Awake → Glow (sealing lipid blend). Patience between steps." },
        { q: 'Can I use Bounce (retinol) and Renewal (acid pads) the same night?', a: '<strong>No — alternate them.</strong> Retinol M/W/F, acid pads T/Th/S, Sunday rest. Stacking both in one evening is over-exfoliation territory for most skin types: weakens the barrier, increases sensitivity, and often shows up as breakouts that look like the routine isn\'t working. Alternating gives your skin time to recover between active nights and lets each ingredient do its job without interference.' }
      ]
    },
    'workout': {
      eyebrow: 'Training & Recovery',
      description: 'The performance stack — pre-workout pump, clean energy, daily creatine for strength, and joint-focused anti-inflammatory recovery. Built for people training hard.',
      whyThis: "Performance supplements have hundreds of products and a handful that actually work. This routine is the handful. Power delivers 5g of pharmaceutical-grade creatine — the most-studied supplement in sports nutrition. Pump (L-citrulline malate) raises plasma arginine for nitric oxide and the vascular pump effect. Surge delivers clean morning energy (caffeine + L-theanine + L-tyrosine + L-carnitine) for pre-workout focus and cardiovascular support — without aggressive stimulants. Forge (Cordyceps militaris, 4g) is the mitochondrial endurance ingredient — the only mushroom with RCT-level evidence for VO2max and exercise tolerance. Greens covers the polyphenol and adaptogen foundation that supports training adaptation. Restore (curcumin + turmeric + glucosamine) addresses joint comfort and the anti-inflammatory recovery that compounds across training cycles. Together they form the daily training stack at clinically meaningful doses.",
      timeline: [
        { week: 'Week 1', text: 'Visible vascular pump from Pump pre-workout. Slight muscle fullness as creatine saturation begins.' },
        { week: 'Week 4', text: 'Lift performance increases — more reps at the same weight. Recovery between sessions accelerates.' },
        { week: 'Week 8', text: 'New strength baseline established. Less DOMS after volume training. Body composition shifts visibly.' },
        { week: 'Week 12+', text: 'Sustained performance baseline. The most-validated training stack working as designed.' }
      ],
      faq: [
        { q: 'When should I take each?', a: 'Surge + Pump: 30-45 min pre-workout. Power: post-workout with carbs (or any consistent daily time). Forge: morning or 30-60 min pre-workout. Restore: with dinner. Greens: morning or any time of day.' },
        { q: 'Is creatine safe long-term?', a: 'Yes — creatine is the most-studied supplement in sports nutrition with decades of human trial data. No long-term safety concerns in healthy adults. Continuous daily use is well-supported.' },
        { q: 'Will Surge cause jitter or crash?', a: "Moderate caffeine dose with L-theanine to smooth the edge. Most users tolerate it well. Avoid within 6 hours of bed; cycle off occasionally if you want to keep caffeine sensitivity sharp." }
      ]
    },
    'foundation': {
      eyebrow: 'Daily Essentials · Foundation Layer',
      description: 'Five non-negotiable supplements. Multivitamin, vitamin D3, omega-3s, probiotic, and magnesium glycinate — the daily foundation that everything else builds on.',
      whyThis: "If you take nothing else, take these five. Multi provides the daily B-complex, iron, zinc, and trace minerals most modern diets miss. Sunshine delivers 5,000 IU D3 — addressing one of the most common deficiencies in adults. Flow delivers EPA/DHA omega-3 at the dose where clinical trials show effect. Biome is a multi-strain probiotic with enteric delivery for stomach-acid survival. Calm provides magnesium glycinate for nervous-system support and evening wind-down. This is the foundational nutrient floor. Every other supplement builds on having this floor in place.",
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
      whyThis: "Longevity isn't a single supplement — it's a portfolio of cellular health investments. NAD+ pairs NAD+ direct supplementation with resveratrol and quercetin (sirtuin-activator stack). Vitality (CoQ10) supports mitochondrial function as it declines with age. Synapse's 10-mushroom complex — particularly Lion's Mane — supports nerve growth factor and cognitive resilience. Restore (curcumin + glucosamine + boswellia + MSM) addresses chronic low-grade inflammation, considered a primary aging mechanism. Tranquil (clinical-grade ashwagandha) modulates cortisol and stress response. Effects compound over months and years.",
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
      description: "Eleven products built for the season of life when needs shift — gentle but effective skincare with the neck-firming cream most routines forget, energy and immunity support, calm-down magnesium, and the longevity-grade collagen and cellular stack. Named for the parents who built the protocol, but truly for anyone whose skin and body have grown more reactive with the years.",
      whyThis: "The needs of parents at this stage are specific: gentle on the skin (no fragrances, no harsh actives that flake off, mindful of skin that's grown more reactive), reliable on energy (because life and sleep can both be unpredictable), supportive of nervous-system recovery (because cortisol after decades of work and family life is its own thing). This routine combines the gentle anti-aging skincare staples (Wash, Defense, Bounce at low frequency, Awake, Lift, Soft) — including Lift, the neck-firming cream that addresses the area most skincare routines stop short of — with the daily-energy stack (Multi, Collagen, NAD+, Vitality) plus Tranquil for adaptogenic support. Together they form a sustainable rhythm — not aspirational, not maximum, just supportive.",
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
      description: "Ten products curated by Ariana — the streamlined effective routine, no fluff. Skincare essentials plus the multi-pathway brightening serum, daily wellness, beauty support. The 'I want what works' bundle.",
      whyThis: "Ariana's routine is the streamlined version: ten products that cover the essentials without overcomplicating. Wash, Boost, Defense, Bright, Renewal, Awake, Soft = a complete cleansing-to-overnight skincare arc using the most-validated actives (bio-peptide growth factor serum, CE Ferulic antioxidant defense, multi-pathway brightening for active luminosity, multi-action peeling pads, dual-peptide eye serum with DCX complex). Multi, Radiance, Collagen = the daily nutrient foundation plus beauty support. It's intentionally smaller than the Ultimate — for users who want the high-confidence routine without 23 bottles to track.",
      timeline: [
        { week: 'Week 1', text: 'Skincare feels balanced; daily vitamins and collagen begin.' },
        { week: 'Week 4', text: 'Visible glow from vitamin C + Bright + Renewal; hair and nails respond to collagen.' },
        { week: 'Week 8', text: 'Sustained baseline — clear skin, even tone, daily energy, beauty support all in place.' },
        { week: 'Week 12+', text: "The streamlined routine that works. Built to be sustainable, not aspirational." }
      ],
      faq: [
        { q: 'How is this different from the Ultimate?', a: "Less than half the products (10 vs 23), same logic. Ariana's is the streamlined version: skincare essentials + daily wellness + beauty support, without the deep longevity layer or the full AM/PM symmetry. For users who want effective + simple." },
        { q: 'Can I add to this later?', a: "Yes — easily. Start with Ariana's, then add Tranquil for stress, Calm for sleep, or NAD+ for the longevity layer as desired. Build at your own pace." },
        { q: 'When should I take the supplements?', a: 'All three (Multi, Radiance, Collagen) in the morning with breakfast. Simplest stack to remember: coffee, supplements, go.' }
      ]
    },
    // ─── GIFT SETS ─────────────────────────────────────────────────────
    'gift-newcomer': {
      eyebrow: 'Gift Set · Inside-Out Starter',
      description: "Four daily-essentials for someone new to building a real wellness routine. The three skincare steps every dermatologist agrees on — cleanser, advanced HA moisturizer, broad-spectrum mineral SPF — plus the daily multivitamin foundation. Inside and out, gift-boxed with a hand-written card.",
      whyThis: "Most starter wellness gifts pick a lane (a skincare basket, or a single supplement bottle) and miss what the recipient actually needs: a real baseline on both sides. This four-product gift hits the minimum that actually moves the needle. <strong>Skincare side</strong>: <strong>Wash</strong> uses rose-hip seed oil and Irish moss to cleanse without stripping — gentle enough to use twice daily; <strong>Soft</strong> is the advanced multi-weight hyaluronic acid moisturizer that seals everything; <strong>Shield</strong> is the broad-spectrum non-nano mineral SPF 30 — the most important step in any anti-aging routine, full stop. Three skincare steps, two minutes, the foundation of every routine that actually works. <strong>Supplement side</strong>: <strong>Multi</strong> is the daily nutritional foundation — every essential vitamin and mineral, an antioxidant fruit blend, and immune-supporting botanicals, properly dosed in two morning capsules. The one supplement every clinical nutritionist agrees on. Together they cover the inside-and-out baseline most people are missing — at the price point a gift should be.",
      timeline: [
        { week: 'Week 1', text: 'Skin feels cleaner and more balanced. Multi nutrient floor starts to load — B-vitamin stores in particular respond quickly.' },
        { week: 'Week 4', text: 'Visible brightness improvement from daily SPF and consistent moisturizing. Energy and immune resilience steadier as Multi compounds.' },
        { week: 'Week 8', text: 'Sustained even tone from the SPF habit. Multi vitamin and mineral stores fully topped up; the recipient gets used to the ritual.' },
        { week: 'Week 12+', text: "Becomes the recipient's daily baseline — easy to keep going, hard to give up." }
      ],
      faq: [
        { q: 'What order do they use these?', a: 'Skincare AM: Wash (cleanse) → Soft (moisturizer) → Shield (SPF — always last). Two minutes morning, total. Multi: two capsules with breakfast.' },
        { q: 'Is the skincare appropriate for any skin type?', a: 'Yes — each product is formulated for daily use across skin types. Wash is gentle (no sulfates), Soft is non-comedogenic, Shield is non-nano mineral SPF (zinc + titanium) which works for sensitive skin too.' },
        { q: 'Why a multivitamin and not just skincare?', a: "Most starter gifts give a skincare basket or a single supplement bottle and call it wellness. The reality is the recipient needs a real baseline on both sides — clean skin + UV protection on the outside, foundational nutrients on the inside. The Multi covers what their diet probably doesn't (B-complex, D3, zinc, selenium, antioxidant fruit blend). Three skincare staples plus one supplement is what 'starting a routine' actually looks like." },
        { q: 'What if they already have skincare?', a: "Then they'll have a better moisturizer and SPF than most drugstore equivalents (Soft is multi-weight HA + niacinamide; Shield is non-nano mineral with coffee fruit + ferulic + niacinamide). And the Multi still slots in regardless of what their skincare routine looks like. If they don't switch, the unused products can be returned within 30 days." },
        { q: 'How is this packaged?', a: "Gift-boxed in our cream-and-gold gift box, ribbon-tied, with a hand-written card included. No prices on the packing slip when the 'this is a gift' box is checked at checkout." }
      ]
    },
    'gift-skin-set': {
      eyebrow: 'Gift Set · The Real Skincare Routine',
      description: "Five essentials for someone ready to take their skincare seriously. Cleanser, CE Ferulic antioxidant, 5-active retinol, hydrating moisturizer, mineral SPF — the daily AM and PM routine, gift-boxed. Sits between The Newcomer Set (inside-out wellness starter) and Daniel's Daily Skincare (the complete 17-product daily ritual).",
      whyThis: "The Newcomer Set is the inside-and-out wellness starter — cleanser, moisturizer, SPF, plus the daily multivitamin. The Skin Set is the dedicated skincare upgrade for someone who specifically wants a real AM + PM ritual. <strong>Wash</strong> is the rose-hip and Irish-moss daily cleanser — gentle, real cleansing power, no stripping. <strong>Defense</strong> is the CE Ferulic architecture (L-ascorbic acid + ferulic acid + niacinamide + vitamin E) — the most clinically-validated antioxidant serum in dermatology, the same formulation logic SkinCeuticals charges $185 for. <strong>Bounce</strong> stacks five layered actives (retinol + stable vitamin C + hyaluronic acid + Matrixyl peptides + botanical complex) where most competitors charge $74+ for a single-active retinol. <strong>Soft</strong> is the advanced multi-weight hyaluronic acid moisturizer — daily hydration that seals serums in. <strong>Shield</strong> finishes with broad-spectrum non-nano mineral SPF 30 — the most evidence-backed product in skincare and the one step every dermatologist agrees on. Five products, the complete cleanse-treat-protect arc, gift-boxed for someone ready to upgrade from drugstore basics.",
      timeline: [
        { week: 'Week 1', text: 'Initial acclimation to Bounce (retinol). Skin feels cleaner from Wash, more hydrated from Soft.' },
        { week: 'Week 4', text: 'Defense\'s antioxidant work starts to show — brighter, more even tone. Bounce\'s acclimation phase complete; nightly use is comfortable.' },
        { week: 'Week 8', text: 'Visible improvement in fine lines, texture, and tone. The full AM + PM ritual is in habit.' },
        { week: 'Week 12+', text: 'Sustained skincare baseline — the recipient asks where to get more of each product when the bottles run out.' }
      ],
      faq: [
        { q: 'How is this different from The Newcomer Set?', a: 'The Newcomer Set (4 products, $128) is the inside-out wellness starter — three skincare staples (Wash, Soft, Shield) plus the Multi supplement foundation. The Skin Set (5 products, $216) is dedicated skincare — adds Defense (CE Ferulic antioxidant) and Bounce (5-active retinol) to anchor a real AM + PM ritual, dropping the supplement. So Newcomer is "wellness 101 in one box." The Skin Set is "ready for a real skincare ritual."' },
        { q: 'How does this compare to Daniel\'s Daily Skincare?', a: 'Daniel\'s Daily Skincare is the complete 17-product daily routine ($595 at 18% off) — every AM step, every PM step, the daily treatments (Clear, Awake), the weekly resurfacing pair (Mask + Polish), and the overnight collagen mask (Dream). For the four targeted add-ons (Bright for pigmentation, Lift for the neck, Lipid for barrier-stressed nights, Spot for active blemishes), see The Targeted Bundle. The Skin Set is the focused 5-product version ($216 at 15% off) — the core ritual without the daily treatments or weekly add-ons. Use The Skin Set as the gift entry to the brand; the recipient can add the rest of the line over time if they want to.' },
        { q: 'Order to use?', a: 'AM: Wash → Defense → Soft → Shield. PM: Wash → Bounce → Soft. Bounce two or three nights a week initially, then nightly once skin acclimates (usually 2-4 weeks).' },
        { q: 'How is this packaged?', a: 'Gift-boxed in our cream-and-gold gift box, ribbon-tied, with a hand-written card explaining the routine. No prices on the packing slip when the "this is a gift" box is checked.' }
      ]
    },
    'gift-dad': {
      eyebrow: "Gift Set · Father's Day · Birthday · The Nudge He Won't Buy Himself",
      description: "Four products for the man whose entire skincare routine is whatever bar of soap is in the shower, and whose supplement shelf has one half-empty bottle of fish oil from 2019. Cleanser, mineral SPF, daily multivitamin, and 5g pharmaceutical-grade creatine — the minimum-effective set, gift-ready.",
      whyThis: "Most men don't have a skincare routine because they don't know where to start, and most men don't take supplements because they can't tell what's evidence-based and what's marketing. The Dad Set strips both questions down to the actual answers. Wash is the rose-hip-and-Irish-moss daily cleanser — gentle enough to use every day, real cleansing power, no fuss. Shield is mineral SPF 50 — the single most evidence-backed product in all of skincare, and the one thing every dermatologist agrees on. Multi is the daily nutritional baseline: every essential vitamin and mineral, plus an antioxidant fruit blend, properly dosed in two morning capsules. Restore is 5g of pharmaceutical-grade creatine monohydrate — the most-studied supplement on the shelf, with evidence spanning muscle and strength, cognitive performance, and healthy aging. Four bottles, four mechanisms, no learning curve. If he uses it for 8 weeks, the changes start to show up — and that's usually enough to make it stick.",
      timeline: [
        { week: 'Week 1', text: "He starts using Wash and Shield in the morning. Skin feels less tight after washing. Multi establishes the supplement habit." },
        { week: 'Week 4', text: "Creatine saturation completes; strength and gym output measurably improve. Daily multi keeps afternoon energy steadier. The 'I look tired' comments fade." },
        { week: 'Week 8', text: "Sustained baseline — what felt new now feels routine. Skin no longer feels reactive to weather changes." },
        { week: 'Week 12+', text: "He stops thinking of skincare as 'something women do' and stops thinking of supplements as 'for fitness people.' Becomes a quiet habit, which is when it's working." }
      ],
      faq: [
        { q: 'Will he actually use it?', a: "If you give it, yes — the regimen is designed to be unmissable. Skincare is two products (wash, then SPF after); supplements are two capsules at breakfast and a scoop of unflavored creatine in coffee or water. No multi-step ritual to abandon, no flavors he won't like." },
        { q: "He hates skincare.", a: "That's why this is two products, not five. Cleanser and SPF — the absolute minimum-effective set. Anyone who can shave can do this. Once he's running it for 4-6 weeks and the skin looks better, he'll often start asking what else to add. (If so: the Newcomer Set, or full AM Routine.)" },
        { q: "He's already into the gym.", a: "Restore and Multi still beat what he's likely using — most consumer creatine and most drugstore multis are under-dosed or use lower-bioavailability forms. If he wants more on the workout side, point him at the Workout Routine after this." },
        { q: "Is this really a good Father's Day gift?", a: "It's the strongest fit. Also works for: significant birthday, anniversary, the 'I'm worried about him' health-nudge moment, or any occasion where you want a gift that has a chance of changing a habit. The packaging is gender-neutral cream-and-gold — no novelty 'Dad' branding on the box." },
        { q: 'Why no fish oil?', a: "We kept the set to four to keep the price approachable and the message simple. If you want fuller supplement coverage, the Foundation Routine adds Flow (omega-3), Sunshine (D3+K2), Biome (probiotic), and Calm (magnesium). For most men starting from zero, four bottles is already a meaningful step." }
      ]
    }
  },

  concern: {
    'aging': {
      eyebrow: 'Anti-Aging · Topical + Cellular',
      description: 'Nine targeted products — retinol, peptides, the bio-peptide growth factor serum, broad-spectrum mineral SPF, the eye treatment, and the neck-firming cream for the surface plus collagen, NAD+, and beauty vitamins for the cellular foundation. The complete inside-out anti-aging protocol, working at the four levels visible aging actually shows.',
      whyThis: "Aging skin reflects aging cells. The strongest anti-aging protocols address both. Topically: Bounce (retinol) stimulates collagen and cell turnover at the dermis; Firm (peptides) signals collagen synthesis at the surface; Boost (bio-peptide growth factor serum) layers five biomimetic peptides for cellular renewal; Shield (broad-spectrum mineral SPF 30) protects every gain from the UV damage that drives 80% of visible aging; Awake addresses the thin orbital skin where peptides have outsized effect; Lift extends the protocol below the jawline — DMAE for instant tone, Argireline + Matrixyl 3000 for neck expression lines, gentle retinyl palmitate for the thinner skin retinol can't handle. Internally: Collagen at 10g daily provides the amino acid substrates fibroblasts need to actually build new collagen; NAD+ supports the cellular energy and sirtuin pathways central to longevity research; Radiance covers the daily A/C/E/biotin/zinc baseline skin needs to function. Each side without the other hits a ceiling. Together they compound — and without daily SPF, the topical work goes backwards every afternoon.",
      timeline: [
        { week: 'Week 1', text: 'Skin acclimates to retinol; mild dryness possible. Collagen and NAD+ begin to load.' },
        { week: 'Week 4', text: 'Texture noticeably smoother; surface refinement from retinol. Hair and nails respond to collagen.' },
        { week: 'Week 8', text: 'Fine lines around eyes and forehead measurably softer. Skin elasticity (collagen-driven) measurably improves.' },
        { week: 'Week 12+', text: 'The compounded effect — visible firmness and density at a higher baseline. Anti-aging is a long protocol; this is what consistency produces.' }
      ],
      faq: [
        { q: "I've never used retinol — is this too much?", a: 'Start slow on Bounce (1-2 nights weekly for the first 2-3 weeks). The supplements (Collagen, NAD+, Radiance) and the other topicals (Firm, Awake) are gentle from day one. Always wear sunscreen during retinol use.' },
        { q: 'Do I need both topical AND oral collagen support?', a: 'Yes — they work at different levels. Topical retinol/peptides signal fibroblasts; oral collagen provides the amino acids fibroblasts need. Either alone is partial; together they compound.' },
        { q: 'When should I take each?', a: 'Morning: Collagen (in coffee works), Radiance (with breakfast for fat-soluble vitamins), NAD+. Evening skincare: Bounce or alternate with other actives; Firm + Awake nightly.' }
      ]
    },
    'acne': {
      eyebrow: 'Clear Skin · Topical + Gut-Skin Axis',
      description: 'A five-product clear-skin protocol — the daily 2% salicylic clarifier, the overnight apothecary drying lotion for active blemishes, and the weekly zinc & sulfur mask for the surface, plus probiotics and omega-3s for the gut-skin connection behind chronic breakouts.',
      whyThis: "Chronic acne is rarely just a surface problem. The gut-skin axis is well-documented: gut inflammation, dysbiosis, and systemic inflammation reliably worsen acne. This protocol works both sides. Clear (2% salicylic acid daily clarifier) prevents and treats whole-face congestion. Spot (the apothecary calamine-sulfur-salicylic drying lotion) is the targeted overnight intervention for individual active lesions. Mask (bentonite + sulfur + salicylic acid + zinc oxide, weekly) draws out accumulated impurities and tightens pore appearance. Internally, Biome's multi-strain probiotic helps restore the gut microbiome that correlates with cleaner skin in clinical trials; Flow's omega-3 EPA/DHA actively resolves inflammation. Together they address acne at its actual root causes — daily prevention, targeted overnight spot work, and the systemic inflammation behind chronic flares.",
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
      eyebrow: 'Lasting Mist · Topical + Lipid Matrix',
      description: 'Five hydration-focused products — multi-weight hyaluronic acid serum, refreshing HA mist for body and face, multi-action daily moisturizer with niacinamide and HA, the clinical-grade ceramide-cholesterol-fatty-acid lipid blend for barrier repair, plus omega-3s that build the lipid matrix that holds water in skin.',
      whyThis: "Lasting hydration requires three things: humectants (HA), emollients (cream + barrier-supportive lipids), and the structural support that keeps moisture from escaping. Topically: Plump delivers a clean, multi-weight HA serum at multiple depths; Mist is a featherweight hyaluronic face and body mist (HA + rose centifolia water + glycerin + sodium lactate) that layers cleanly over moisturizer for instant refreshment; Soft is the advanced daily HA moisturizing cream that delivers all-day hydration with niacinamide and barrier-supportive emollients; Lipid is the barrier-rebuild treatment for barrier-compromised nights — ceramides (3%), cholesterol (1%), and free fatty acids (1%) at the physiologic 3:1:1 ratio dermatology research identifies as optimal for repair. Internally: Flow's omega-3 EPA/DHA are precursors to skin ceramides — your barrier literally builds from dietary fatty acids. Topical alone is corrective; pairing with internal nutrient support is preventive and durable.",
      timeline: [
        { week: 'Week 1', text: 'Immediate plump-and-glow effect from layered hyaluronic. Skin feels softer to the touch.' },
        { week: 'Week 4', text: 'Barrier visibly stronger; less reactivity, less afternoon dullness.' },
        { week: 'Week 8', text: 'Sustained all-day hydration; omega-3 effect on the skin lipid barrier compounds.' },
        { week: 'Week 12+', text: 'Durable, deep hydration that compounds. The "thirsty skin" baseline resets durably.' }
      ],
      faq: [
        { q: 'Can I layer all the topical products every day?', a: "Yes — that's the design. Thinnest to thickest: Plump (serum) → Mist (snow-algae gel-cream) → Soft (overnight cream). All daily-safe." },
        { q: 'Why omega-3 for dry skin?', a: "Skin barrier integrity depends on dietary lipids — omega-3 EPA/DHA are direct ceramide precursors. Your barrier literally builds from dietary fatty acids, which means topical hydration without the internal fat-acid foundation hits a ceiling. Flow's EPA/DHA at the dose where clinical effect shows is the under-recognized half of any dry-skin protocol." },
        { q: 'When would I add Collagen or Glow on top?', a: "Add Glow (HA spheres in squalane) as a nightly overnight occlusive if your dryness wakes you up. Add Collagen (10g daily peptides) for the inside-out hydration story — RCTs show measurable skin water-binding improvements at 8-12 weeks. The four products in this bundle are the foundation; Glow and Collagen are the next layers if needed." },
        { q: 'Is this enough for very dry/cracked skin?', a: 'For seasonal dryness, yes. For chronic eczema or severe atopic conditions, pair with clinical-grade barrier cream and consult a dermatologist.' }
      ]
    },
    'dullness': {
      eyebrow: 'Brightness · Topical Antioxidants + Internal Beauty Stack',
      description: 'Four brightening products — the multi-pathway brightening serum for active pigment correction, the CE Ferulic-tier antioxidant serum, multi-action peeling pads, and the daily beauty vitamin foundation. The inside-out approach to measurable luminosity.',
      whyThis: "Dull skin has three causes: surface buildup, pigment irregularities, and oxidative damage. Topical alone addresses the first two. Adding internal nutrient support pushes through the ceiling. Topically: Bright stacks niacinamide (5%), alpha-arbutin (2%), licorice extract, and stable vitamin C to attack pigment formation from four independent pathways — the targeted brightener for active dark spots and uneven tone; Defense's CE Ferulic architecture (L-ascorbic acid + ferulic acid + niacinamide + B5 + vitamin E) neutralizes free-radical damage and protects every gain from the UV exposure that drives pigment back; Renewal's multi-action peeling pads (glycolic + lactic + salicylic) accelerate surface turnover to reveal fresh skin underneath the brighteners are already producing. Internally: Radiance covers daily vitamins A/C/E/biotin/zinc — the nutrient foundation skin needs to function and reflect light evenly. Together they produce visible brightness that surface-only protocols can't match.",
      timeline: [
        { week: 'Week 1', text: 'Immediate freshness from Renewal exfoliation; Defense antioxidant baseline begins.' },
        { week: 'Week 4', text: 'Skin reflects light more evenly. Hyperpigmentation and post-acne marks start to fade.' },
        { week: 'Week 8', text: 'Measurable brightness improvement; Radiance internal effect on tone uniformity compounds.' },
        { week: 'Week 12+', text: 'Sustained inside-out brightness. The compounded effect produces durable luminosity.' }
      ],
      faq: [
        { q: 'Will vitamin C make my skin sun-sensitive?', a: "Counterintuitively, no — vitamin C enhances sunscreen's photoprotection. Always wear SPF daily (especially when using glycolic acid in Renewal)." },
        { q: 'When will I see brighter skin?', a: 'Subtle freshness in 1-2 weeks from topical resurfacing. Visible tone improvement in 6-8 weeks. Radiance vitamins take 8-12 weeks to fill in nutrient stores for the full inside-out effect.' },
        { q: 'Can I pair this with prescription brighteners?', a: 'Yes — niacinamide and vitamin C work alongside hydroquinone and other prescription brighteners. The combined mechanism is stronger than monotherapy.' }
      ]
    },
    'sensitivity': {
      eyebrow: 'Calm & Resilient · Topical + Systemic Inflammation',
      description: 'Six reactive-skin essentials — gentle botanical cleanser, multi-action overnight cream, the squalane-and-HA overnight lipid seal, and the clinical-grade ceramide-cholesterol-fatty-acid blend for barrier repair on flare days, plus probiotics and omega-3s for the systemic inflammation often behind sensitive skin.',
      whyThis: "Reactive skin often has a systemic-inflammation component that surface-only protocols miss. Topically: Wash is fragrance-free and barrier-respecting (rose hip seed oil, geranium, Irish moss); Soft is an advanced daily HA moisturizing cream that delivers multi-weight hydration with niacinamide and barrier-supportive emollients; Lipid is the targeted barrier-rebuild treatment for flare days — ceramides, cholesterol, and free fatty acids at the 3:1:1 ratio dermatology research identifies as physiologically optimal for restoration; Glow (hyaluronic spheres in squalane) provides the overnight occlusive that seals everything in. Internally: Biome's probiotic addresses the gut-skin axis — reactive skin often correlates with gut dysbiosis; Flow's omega-3 EPA/DHA actively resolves inflammation systemically. Together they heal the barrier from both sides instead of perpetuating the reactive cycle.",
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
    'targeted': {
      eyebrow: 'Targeted Treatments · The Add-On Layer',
      description: "Four treatments your daily routine doesn't cover — multi-pathway brightening for hyperpigmentation, neck-firming for the area below the jawline, clinical-grade ceramide-cholesterol-fatty-acid barrier repair for stressed nights, and the overnight apothecary drying lotion for individual active blemishes. The targeted layer most customers add on top of a working daily routine once they know what specific concerns are left.",
      whyThis: "Daniel's Daily Skincare handles the routine that runs every day — cleanse, treat, protect, seal, repeat. The Targeted Bundle handles the four problems daily routines don't solve. Bright stacks niacinamide (5%), alpha-arbutin (2%), licorice extract, and stable vitamin C to attack pigment formation through four independent mechanisms — the targeted brightener for active dark spots, melasma, post-acne marks, and uneven tone. Lift extends anti-aging below the jawline — DMAE for visible tone tightening, Argireline + Matrixyl 3000 for neck expression lines, gentle retinyl palmitate calibrated for the thinner skin retinol can't safely treat. Lipid is the barrier-rebuild treatment for the nights skin actually asks for repair — ceramides (3%), cholesterol (1%), and free fatty acids (1%) at the physiologic 3:1:1 ratio dermatology research identifies as optimal for restoration. Spot is the classic apothecary drying lotion in the format dermatologists prescribed for fifty years — calamine and colloidal sulfur sediment with salicylic acid in an alcohol carrier, dabbed on individual lesions before bed. Together: the four most-asked-for targeted treatments, in one purchase, at the bundle discount that makes the trial worth it.",
      timeline: [
        { week: 'Week 1', text: 'Bright and Lift produce immediate effects — surface brightness from niacinamide, visible tone tightening from DMAE. Spot resolves active blemishes overnight. Lipid available for barrier-stressed nights when needed.' },
        { week: 'Week 4', text: 'Visible reduction in surface unevenness; post-acne marks start to fade. Neck texture noticeably smoother; "necklace lines" soften. Barrier resilience improved on any sensitive days.' },
        { week: 'Week 8', text: 'Measurable lightening of established dark spots; tone evens out across the full face. Neck firmness measurably improved.' },
        { week: 'Week 12+', text: 'Stubborn pigmentation responds; the targeted layer compounds on top of the daily routine. The four-product bundle becomes the "added precision" that pushes results past the ceiling of a daily-only protocol.' }
      ],
      faq: [
        { q: "Do I need all four?", a: "No — most customers don't. Bright is for hyperpigmentation; skip it if your tone is even. Lift is for neck aging; skip it if you're under 30 or your jawline-and-below is unbothered. Lipid is for barrier-stressed nights (post-procedure, over-exfoliated, post-flight); a healthy barrier doesn't need daily Lipid use. Spot is purely as-needed for active breakouts. The bundle exists for the customers who want all four targeted concerns covered — but pick à la carte if only one or two apply." },
        { q: "How does this fit with Daniel's Daily Skincare?", a: "Daniel's Daily Skincare is the daily routine — 17 products covering AM, PM, and weekly cadence. The Targeted Bundle layers on top for the four problems daily routines don't solve: pigmentation, neck aging, barrier crises, and active blemishes. Most committed customers buy both — Daniel's Daily Skincare ($595 / 17 products) as the foundation, The Targeted Bundle ($162 / 4 products) as the precision layer." },
        { q: 'Can I use them all the same day?', a: 'Yes, but the timing matters. AM: Bright (after Balance, before Defense), Lift (on the neck, after moisturizer, before SPF). PM: Bright again if you want, Lift on the neck, Spot dabbed on individual lesions before bed. Lipid replaces your normal moisturizer/oil on barrier-stressed nights — not stacked on top. Most customers use 2-3 of the four daily, with Lipid and Spot as needed.' },
        { q: 'Is this pregnancy-safe?', a: 'Mixed. Bright (niacinamide, alpha-arbutin, licorice, stable vitamin C, 1% lactic acid) — generally considered low-risk. Lift contains retinyl palmitate, a retinoid — most providers advise avoiding retinoids during pregnancy; skip Lift while pregnant or breastfeeding. Lipid (ceramides, cholesterol, fatty acids, squalane) is fully pregnancy-safe. Spot contains salicylic acid — spot use is the safest application format but some providers advise avoiding all salicylic during pregnancy. Confirm with your provider.' }
      ]
    },
    'glow': {
      eyebrow: 'Visible Glow · Inside + Out',
      description: 'Eight glow-focused products — the multi-pathway brightening serum for active luminosity, the bio-peptide growth factor serum, the CE Ferulic antioxidant shield, the squalane-and-HA-spheres overnight lipid seal, the weekly zinc & sulfur clay mask, the overnight collagen sleep mask, plus daily beauty vitamins and 10g of collagen. The full inside-out beauty stack.',
      whyThis: "Visible glow comes from combining topical and internal strategies. Topically: Bright stacks niacinamide, alpha-arbutin, licorice, and stable vitamin C to attack pigment irregularities and surface unevenness on the four pathways that actually drive dull skin; Boost (bio-peptide growth factor serum) supports renewal and skin resilience; Defense (the CE Ferulic architecture — L-ascorbic acid + ferulic acid + niacinamide + B5 + vitamin E) protects from environmental dullness; Glow (hyaluronic spheres suspended in squalane) delivers multi-weight HA in a lipid carrier that absorbs cleanly with a luminous finish; Mask (bentonite + sulfur + salicylic + zinc, weekly) decongests skin every 7 days so light reflects more evenly; Dream is the overnight collagen sleep mask that works in the 10pm-2am repair window — wake to visibly plumper, more luminous skin 2-3 mornings a week. Internally: Radiance delivers the daily vitamin A/C/E/biotin foundation skin/hair/nails are literally built from; Collagen provides 10g daily peptides for skin elasticity and the water-binding capacity that produces a 'lit from within' look. Topical alone hits a ceiling — adding internal nutrient support pushes through it.",
      timeline: [
        { week: 'Week 1', text: 'Immediate fresh-skin effect from vitamin C, Bright, and the overnight oil. Hair and nails feel stronger from collagen.' },
        { week: 'Week 4', text: 'Brightness visibly improves; skin reflects light more evenly. Dark spots begin to fade. Hair growth accelerates.' },
        { week: 'Week 8', text: 'Skin elasticity measurably improves (collagen kicks in). Hyperpigmentation noticeably lighter. Glow baseline at higher level.' },
        { week: 'Week 12+', text: 'Sustained inside-out glow. The compounded effect of topical + internal works as designed.' }
      ],
      faq: [
        { q: 'How is this different from the Brightening Bundle?', a: "Brightening is a 4-product focused stack for tone and pigment correction (Defense, Bright, Renewal, Radiance) — the targeted protocol for dark spots and uneven tone. The Glow Bundle is broader and more luminance-focused — it adds Boost (peptide growth factor), the overnight oil seal (Glow), the weekly mask, the overnight collagen sleep mask (Dream), and 10g of collagen to push past the ceiling that topical-only protocols hit. Use Brightening if pigment irregularities are the issue; use Glow if you want overall luminosity." },
        { q: 'How often should I use the mask?', a: 'Once a week — twice if your skin is congested. More often causes over-exfoliation. Less is more with weekly treatments. Dream is different — that\'s a 2-3 nights/week overnight collagen sleep mask, layered over your normal moisturizer.' },
        { q: 'When should I take Collagen and Radiance?', a: 'Collagen: any time daily — morning in coffee is the most popular ritual. Radiance: with food for fat-soluble vitamin absorption.' },
        { q: 'How long until visible glow?', a: '1-2 weeks for surface freshness from topical actives. 4-6 weeks for collagen + Radiance internal effects. 8-12 weeks for full inside-out compounding.' }
      ]
    },
    'starter': {
      eyebrow: 'Four Steps · The Entry Point',
      description: 'Four products. Cleanse, tone, moisturize, protect. The minimum effective skincare routine for someone who has never had one — or wants to start over with the basics done right. SPF every morning isn\'t optional; it\'s the most evidence-backed step in the whole protocol.',
      whyThis: "Most people's first skincare routine fails for the same reason: too many products, too many actives, too soon. The Skin Starter Bundle is the opposite. Wash is a barrier-respecting cleanser — rose hip seed oil, geranium, and Irish moss in a silky, fragrance-free base. Balance is a daily 3.5% glycolic acid exfoliating treatment — the most-studied AHA at a daily-use concentration that smooths the surface without aggression. Soft is the advanced daily HA moisturizing cream with multi-weight hyaluronic acid, niacinamide, and barrier-supportive emollients. Shield is broad-spectrum mineral SPF 50 — the single most evidence-backed step in skincare, the one product every dermatologist agrees on, the difference between a routine that works and one that goes backwards every afternoon. No retinol serums, no treatment-strength acids, no L-ascorbic vitamin C — those come later, once the foundation is in place. Run this for 6-8 weeks before adding anything else. You'll know it's working when your skin no longer feels tight after cleansing, your sunburn risk drops, and your makeup or SPF sits flat all day.",
      timeline: [
        { week: 'Week 1', text: 'Skin no longer tight after cleansing. The daily glycolic adds visible smoothness. SPF habit forms.' },
        { week: 'Week 4', text: 'Barrier feels balanced. Less reactivity, more even tone, fewer mid-day shine episodes. Sun-protection paying off — fewer red days, less new pigment.' },
        { week: 'Week 8', text: 'A reliable baseline. Skin tolerates makeup, weather changes, and longer outdoor days without complaint.' },
        { week: 'Week 12+', text: 'Ready to layer. With a strong barrier and consistent SPF in place, you can now add vitamin C (Defense), retinol (Bounce), or treatments like Renewal — without flare-ups.' }
      ],
      faq: [
        { q: 'I have problem skin — is this really enough?', a: "For the first 6-8 weeks, yes. Most reactive, breakout-prone, or sensitive skin gets worse from too many actives, not too few. Run the foundation properly first, then add targeted treatments once you know how your skin responds." },
        { q: "I'm 25 / 35 / 45 — should I be using more?", a: "Not necessarily, and not at first. Age isn't the variable; barrier health is. Once these four are running and your skin feels resilient, layer Defense (vitamin C + ferulic) in the morning and Bounce (retinol) at night — that's the natural next step." },
        { q: "What order do I use them in?", a: "Morning: Wash → Balance → Soft → Shield. Night: Wash → Balance → Soft (skip Shield at night). Apply Balance with a cotton pad or fingertips, wait 60 seconds, then Soft, then Shield as the final morning step. The whole AM routine takes under three minutes." },
        { q: "Is this safe during pregnancy?", a: "Wash, Soft, and Shield (mineral SPF — zinc oxide based) are all pregnancy-safe. Balance contains glycolic acid at 3.5% daily-use concentration — most providers consider it acceptable during pregnancy, but some advise against any AHAs. For the strictest pregnancy-safe starter routine, swap Balance for The House Plump and you have a fully pregnancy-friendly daily foundation. Always confirm with your provider for your specific case." }
      ]
    },
    'spa': {
      eyebrow: 'Weekly Indulgence · Bathroom-to-Hotel-Spa',
      description: 'Six products built to make your bathroom feel like a spa visit. The weekly polish-then-mask resurfacing pair, the overnight collagen sleep mask, the HA moisturizing cream that drinks in what the treatments unlock, the hyaluronic mist that turns any moment into a refresh, and the squalane-plus-HA-spheres lipid oil for the final glow seal.',
      whyThis: "A spa visit works because of sequencing — exfoliate, treat, hydrate, finish. The Spa Bundle gives you the same ritual at home, once a week. Polish (real strawberry seeds + biodegradable jojoba beads + goji and ginseng extracts) is the physical exfoliation that clears surface dead skin and primes absorption. Mask (bentonite clay + colloidal sulfur + salicylic acid + zinc oxide) is the deep-pull treatment that draws out the week's accumulated oil, debris, and surface buildup. Dream is the overnight collagen sleep mask — marine collagen, multi-weight HA, and a peptide complex that works in the 10pm-2am skin repair window, used 2-3 nights per week as the final PM step. Soft (advanced HA moisturizing cream — multi-weight hyaluronic acid + niacinamide + barrier-supportive emollients) is the deep hydration that goes in beautifully on the now-receptive skin. Mist (hyaluronic acid in a fine refreshing spray) is the cooling sensory finish you can return to throughout the week. Glow (multi-weight HA spheres suspended in squalane) is the daily overnight lipid seal that leaves skin radiant by morning. Together: the closest thing to a hotel spa that lives in your bathroom.",
      timeline: [
        { week: 'Week 1', text: 'Immediate softness and luminosity after first session. Skin feels treated, not just cleansed.' },
        { week: 'Week 4', text: 'Surface texture noticeably refined; pores visibly cleaner; consistent post-ritual glow.' },
        { week: 'Week 8', text: 'Skin baseline shifts higher — what used to be your "good skin day" becomes the new normal.' },
        { week: 'Week 12+', text: 'Sustained spa-day baseline. Daily products absorb better; skin holds hydration longer.' }
      ],
      faq: [
        { q: 'How often is the full ritual?', a: 'Once a week for the polish-mask pair (do them the same evening, polish first, then mask). Dream is 2-3 nights/week, layered over your normal moisturizer as the final PM step. Soft can be your nightly moisturizer. Mist anytime you want a sensory refresh. Glow nightly as the last step, or save it for your spa nights only.' },
        { q: 'Can I do Polish and Mask the same night?', a: 'Yes — that\'s actually the recommended ritual for this bundle. Polish first to clear the surface, then Mask to draw out what\'s underneath. Just skip retinol or strong acids that night; skin is more permeable post-treatment.' },
        { q: 'Is this enough on its own, or do I need a daily routine?', a: 'This is the ritual layer — designed to complement a daily routine, not replace it. Pair it with your AM essentials (Wash, SPF) and any PM actives you use. If you\'re starting from scratch, the Skin Starter Bundle is the right foundation; the Spa Bundle is what you add on top once the foundation is in place.' },
        { q: 'How is this different from the Reset?', a: "The Reset (no longer offered) was just two products — Polish and Mask. The Spa Bundle is the full ritual: the same weekly pair, plus the overnight collagen sleep mask (Dream), the moisturizer, the mist, and the overnight oil that turn it into an actual experience." }
      ]
    },

    'sleep': {
      eyebrow: 'Deeper Rest · Wind-Down + Overnight Skincare',
      description: 'Six products — magnesium glycinate, clinical-dose Reishi (Still at 500mg), and clinical-grade KSM-66 ashwagandha for the nervous system, plus the overnight HA moisturizing cream, the overnight collagen sleep mask, and the eye treatment that put your routine to bed.',
      whyThis: "Sleep quality affects skin repair directly — your skin does its biggest repair work between 10 PM and 2 AM. This bundle pairs sleep-improving supplements with the overnight skincare that takes advantage of that repair window. Calm (magnesium glycinate) supports the GABA pathway and nervous system relaxation. Tranquil (clinical-grade KSM-66 ashwagandha at 600mg) reduces serum cortisol over 4-6 weeks, improving sleep architecture. Still (Reishi at 500mg) is the clinical-dose mushroom for the stress and sleep-architecture axis, layered on top of magnesium and ashwagandha for the third mechanism. Soft (overnight HA moisturizing cream) seals in moisture during the repair window. Dream is the overnight collagen sleep mask — marine collagen, multi-weight HA, and peptides that work during the exact 10pm-2am window when fibroblast activity peaks; used 2-3 nights/week, layered over Soft as the final PM step. Awake addresses the puffiness and dark circles that show when sleep is short. Together: a wind-down ritual that visibly shows by morning.",
      timeline: [
        { week: 'Week 1', text: 'Faster wind-down; muscle tension reduces. Skin feels softer in the morning.' },
        { week: 'Week 4', text: 'Sleep onset improves; mid-night wakings reduce. Under-eye puffiness less pronounced.' },
        { week: 'Week 8', text: 'Cortisol response calmer; sleep architecture measurably deeper. Skin shows the difference.' },
        { week: 'Week 12+', text: 'Sustained nervous system support and brighter morning skin. The "tired but wired" baseline resets.' }
      ],
      faq: [
        { q: 'Will this make me drowsy during the day?', a: "No — these aren't sedatives. Magnesium supports natural wind-down at night. Ashwagandha is adaptogenic — supports stress resilience without sedation." },
        { q: 'When should I take each?', a: 'Calm: 30-60 minutes before bed. Tranquil: morning or split AM/PM. Soft and Awake: nightly as the last step of evening skincare.' },
        { q: 'Is this safe long-term?', a: 'Yes — both supplements have extensive long-term safety data. Unlike melatonin, neither creates dependence or tolerance.' }
      ]
    },
    'energy': {
      eyebrow: 'Cellular ATP + Gut Absorption · The Comprehensive Stack',
      description: 'Seven supplements covering both cellular ATP production (Multi + Vitality + Sunshine + Flow + Surge) and gut-driven nutrient absorption (Greens + Biome). The comprehensive approach for customers who want full inside-out energy coverage in a single purchase — at the deepest concern-bundle discount on the site.',
      whyThis: "Energy isn't one mechanism — it's two stacked mechanisms working together. The body absorbs nutrients (gut) and then produces ATP from them (cellular machinery). Most energy supplements address one half. This bundle addresses both. <strong>Cellular ATP side</strong>: CoQ10 (Vitality) directly supplies the molecule mitochondria use to produce ATP — synthesized endogenously but declining with age, the single most-studied mitochondrial nutrient. D3+K2 (Sunshine) supports the cellular signaling that powers ATP production; vitamin D deficiency is one of the most common reversible causes of low energy in modern adults. Omega-3 EPA+DHA (Flow) feeds the two highest-energy tissues in the body — brain and heart — which together consume roughly a third of total ATP output. Multi covers the B-complex, iron, zinc, and trace mineral cofactors for ATP-producing enzymes. Surge handles the optional clean morning lift — caffeine + L-tyrosine for stimulation without the L-theanine smoothing. <strong>Gut absorption side</strong>: Greens delivers 22 micronutrients most diets miss. Biome supports the gut microbiome that determines how much of any nutrition actually reaches your cells. Together: nutrient absorption and cellular fuel production both addressed. The 18% bundle discount is the deepest available outside the Ultimate Routine.",
      timeline: [
        { week: 'Week 1', text: 'Surge delivers acute lift. Biome and Greens begin to normalize digestion.' },
        { week: 'Week 4', text: 'Multi nutrient stores fill in. D3 levels rise. Gut microbiome shifts; better absorption noticeable through more consistent energy between meals.' },
        { week: 'Week 8', text: 'CoQ10 mitochondrial effect compounds (especially in adults 40+). Gut-energy axis stabilized. Both halves working together.' },
        { week: 'Week 12+', text: 'Full inside-out energy baseline established. Less caffeine reliance; sustained output across the day; food becomes fuel more efficiently. The compounding effect that distinguishes a fully-stacked approach from any single intervention.' }
      ],
      faq: [
        { q: 'Is this too much to take daily?', a: "It's 5 supplements daily (Multi + Vitality + Sunshine + Flow + Biome) plus 2 situational (Surge when you want a lift, Greens as a daily powder). The daily capsule load is moderate — most users find it manageable. If pill burden is a concern, the same coverage is available via the Ultimate Routine with skincare layered in." },
        { q: 'When should I take each?', a: 'Morning with breakfast: Multi, Vitality, Sunshine, Flow, Biome (the fat-soluble vitamins and probiotics absorb best with food). Surge before deep work or training. Greens as a smoothie base or mixed into water; flexible timing.' },
        { q: 'Is Surge safe daily?', a: 'Yes at recommended dose. Surge contains caffeine — about a small cup of coffee per serving — plus L-carnitine, green tea, and B-vitamins. Stack with coffee with caution; sensitive sleepers should take it before 2 PM.' },
        { q: 'Do I need both Greens and Multi?', a: "They serve different jobs. Multi is the standardized micronutrient floor — vitamin A, B-complex, C, D, E, K, iron, zinc, selenium — at clinical doses. Greens is the food-based phytonutrient layer — chlorella, spirulina, beetroot, ashwagandha, adaptogenic and antioxidant compounds Multi doesn't contain. Most committed users take both; Greens shouldn't be your sole vitamin source, and Multi alone doesn't deliver the phytonutrient breadth Greens does." }
      ]
    },
    'focus': {
      eyebrow: 'Mental Clarity · Cognitive Stack + Awake Recovery',
      description: "Five products — the Focus nootropic with Alpha GPC and Bacopa, Synapse's 10-mushroom Lion's Mane complex, omega-3 for brain structure, Surge for the metabolic + cognitive lift before deep work, plus the eye treatment for the toll long focus sessions take.",
      whyThis: "Focus work compounds in two places: the cognitive stack that supports it, and the orbital area that bears the visible toll. This bundle covers both. Focus delivers acute cognitive support via Alpha GPC (acetylcholine precursor), L-Tyrosine (dopamine precursor), Bacopa (compounding memory effect over 4-6 weeks). Synapse's mushroom complex — particularly Lion's Mane — supports nerve growth factor and long-term cognitive resilience. Surge adds caffeine-and-L-carnitine for the pre-deep-work metabolic lift. Flow's omega-3 EPA/DHA supplies the DHA your brain literally builds itself out of. Awake addresses the strain, puffiness, and dark circles that show after long thinking sessions. The stack for serious mental work.",
      timeline: [
        { week: 'Week 1', text: 'Alpha GPC, L-Tyrosine, and Surge work acutely — sharper focus and metabolic lift from first dose. Awake reduces strain look.' },
        { week: 'Week 4', text: "Bacopa effect begins to compound; memory consolidation improves. Surge's metabolic effect becomes steady, not stimulatory." },
        { week: 'Week 8', text: "Lion's Mane NGF effect builds; mental endurance noticeably better through long thinking work." },
        { week: 'Week 12+', text: 'Sustained cognitive baseline. The compounded effect becomes the new default.' }
      ],
      faq: [
        { q: 'Is Focus a stimulant?', a: 'No — nootropic stack working on acetylcholine, dopamine, GABA, and choline pathways. Pairs cleanly with caffeine if you want a stimulant kick — and Surge is in the bundle for exactly that.' },
        { q: 'Is the Surge in here for the caffeine, or something else?', a: "Both. The caffeine provides acute alertness; the L-carnitine and green tea provide metabolic energy substrate so the kick is paired with fuel. The B-complex in Surge also helps neurotransmitter synthesis the rest of the stack depends on." },
        { q: 'When should I take each?', a: 'Focus and Surge: morning or 30 minutes pre-deep-work (not after 2 PM if you sleep-sensitive). Synapse: morning with breakfast. Flow: with any meal containing fat. Awake: AM + PM as last skincare step.' },
        { q: 'How long until cognitive effects?', a: 'Focus and Surge work same-day. Synapse and Flow take 4-8 weeks for compounding effects.' }
      ]
    },
    'stress': {
      eyebrow: 'Resilience & Calm · Adaptogens + Skincare as Ritual',
      description: 'Five products — clinical-grade ashwagandha, magnesium glycinate, and the adaptogenic greens that quiet the cortisol response, plus the daily peeling pads and the weekly detox mask. Skincare reframed as the calming self-care ritual it should be.',
      whyThis: "Chronic stress shows up on skin first — increased sebum, slower wound healing, barrier dysfunction, more visible reactivity — and at the nervous system long before the rest of the body says anything. This bundle works both fronts at once. Tranquil's clinical-grade ashwagandha extract is the most-studied adaptogen for cortisol reduction. Calm (magnesium glycinate) addresses the nervous-system magnesium depletion that's near-universal in chronically stressed adults. Greens layers in additional adaptogens (ginseng) on a nutrient-dense base for daily resilience. The topical half is built as a ritual rather than a treatment: Balance is the daily 3.5% glycolic acid exfoliating treatment — a small sensory pause between cleanse and serums that doubles as a deliberate ten-second calm-down moment with visible exfoliation work happening underneath. Mask is the weekly detox treatment with bentonite, sulfur, and zinc — a slow, intentional ten-minute reset that pulls double duty as skincare and as decompression. Together, the daily glycolic and the weekly mask reframe skincare as the calming self-care it should be, while the supplements work quietly on the cortisol response underneath.",
      timeline: [
        { week: 'Week 1', text: 'Nervous system feels less tense; the mist and mask rituals become a daily/weekly decompression anchor.' },
        { week: 'Week 4', text: 'Cortisol response noticeably calmer. Sleep improves; skin reactivity reduces.' },
        { week: 'Week 8', text: 'Adaptogenic effect compounds. Stress recovery faster; skin clarity improves with the weekly mask cadence.' },
        { week: 'Week 12+', text: 'Sustained resilience baseline. The "always-on" feeling resets; skin holds steady through normal stress.' }
      ],
      faq: [
        { q: 'Will adaptogens numb my edge?', a: 'No — adaptogens modulate the stress response without blunting it. Users typically report sharper focus and better decision-making once cortisol drops.' },
        { q: 'How does stress affect skin?', a: 'Cortisol increases sebum production, slows wound healing, and weakens the skin barrier. Reducing systemic cortisol — through ashwagandha and magnesium — visibly improves skin in stressed populations.' },
        { q: 'Why frame skincare as self-care here?', a: 'Because the act itself matters. The 30 seconds of sweeping a Balance pad across your face, the ten minutes with the Mask on — these are deliberate pauses in a day that doesn\u2019t otherwise give you any. The cortisol benefit isn\u2019t just from the actives; it\u2019s from the ritual.' },
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
      eyebrow: 'Digestive Health · Multi-Layer Gut Support',
      description: 'Three products — multi-strain probiotic, broad-spectrum digestive enzymes, and the 22-ingredient adaptogenic greens. Digestion improved from three complementary angles.',
      whyThis: "Gut health affects nearly every other body system — and the gut-skin axis is one of the strongest connections. This bundle addresses the gut at three complementary levels. Biome provides multi-strain clinically-studied probiotics with enteric delivery for stomach-acid survival. Seal is a broad-spectrum digestive enzyme complex (amylase, protease, lipase, lactase, cellulase, bromelain, papain) that breaks food down for absorption. Greens provides 22 plant-based ingredients including fiber, polyphenols, and prebiotic compounds for whole-system support.",
      timeline: [
        { week: 'Week 1', text: 'Digestion normalizes; bloating and post-meal heaviness reduce.' },
        { week: 'Week 4', text: 'Energy more stable. Skin reactivity reduces as systemic inflammation drops.' },
        { week: 'Week 8', text: 'Sustained gut diversity and digestive comfort. Skin clarity improves via the gut-skin axis.' },
        { week: 'Week 12+', text: 'Gut-health baseline reset. Downstream effects on skin, energy, mood compound.' }
      ],
      faq: [
        { q: 'Do I need to refrigerate the probiotic?', a: 'No — enteric delivery technology and shelf-stable strains maintain potency at room temperature.' },
        { q: 'Can I take this with antibiotics?', a: 'Yes, but space them 2+ hours apart. Continue probiotic for 2+ weeks after finishing antibiotics.' },
        { q: 'How does gut health affect my skin?', a: "Gut dysbiosis and inflammation are strongly linked to acne, rosacea, eczema, and general skin reactivity. Improving the gut consistently improves the skin in cases where surface protocols haven't been enough." }
      ]
    },
    'joints': {
      eyebrow: 'Joint Comfort · Internal Anti-Inflammation + Topical EFAs',
      description: 'Four products — the curcumin-based joint complex, omega-3 EPA/DHA, and bovine collagen peptides for inflammation and structural support, plus the squalane-and-HA-spheres lipid seal that pairs internally and topically for whole-body inflammation resolution.',
      whyThis: "Joint health depends on three things: controlling inflammation, supporting joint structure, and aiding recovery from wear and tear. This bundle delivers all three internally — and the topical lipid seal completes the omega-rich, anti-inflammatory theme. Restore is the daily anti-inflammatory: 95% curcumin with BioPerine (2,000% absorption boost), glucosamine, boswellia, chondroitin, MSM. Flow's omega-3 supports inflammation resolution via resolvins. Collagen provides amino acid substrates joints use to maintain cartilage. Glow (hyaluronic spheres in squalane) is the topical complement — barrier-restoring lipids that calm visible inflammation on the surface. For deeper mitochondrial support to power joint recovery, add Vitality (CoQ10) — but the four products here cover the core anti-inflammatory protocol on their own.",
      timeline: [
        { week: 'Week 1', text: 'Subtle morning stiffness reduction. Skin feels softer from Glow.' },
        { week: 'Week 4', text: 'Joint comfort noticeably better; morning stiffness markedly reduced.' },
        { week: 'Week 8', text: 'Inflammation baseline measurably lower. Recovery from training accelerates.' },
        { week: 'Week 12+', text: 'Sustained joint health baseline. Whole-body anti-inflammatory protocol working as designed.' }
      ],
      faq: [
        { q: 'How is this different from OTC joint supplements?', a: 'Most OTC joint products are under-dosed glucosamine alone. This uses clinical-dose curcumin with BioPerine, 10g daily collagen, EPA/DHA omega-3, and CoQ10. The combined mechanism is much stronger.' },
        { q: 'When should I take each?', a: 'Restore: with a meal containing fat. Flow: any meal with fat. Collagen: any time (morning in coffee works well). Glow: nightly as the final skincare step.' },
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
      description: 'Six products that fit in any carry-on — barrier-respecting cleanser, broad-spectrum mineral SPF, the foundational multi, omega-3 for airplane meals, magnesium for time-zone resets, and vitamin D for the days you do not see the sun. The bare-minimum travel protocol that actually holds.',
      whyThis: "Travel breaks every routine that depends on environment — bad sleep, dry plane air, restaurant meals, unfamiliar water, missed sun exposure, and new-climate UV your skin isn't acclimated to. This bundle covers what you can't outsource. Wash is the only cleanser you can't compromise on: gentle enough for hotel-water rinses, strong enough to clean off a day of dirt and recycled cabin air. Shield is the broad-spectrum mineral SPF 30 — non-nano zinc oxide and titanium dioxide, reef-friendly, 40-minute water resistant — the one travel product nothing else replaces. Multi and Flow handle the nutrient gap from restaurant food and airplane meals. Calm is the magnesium glycinate that resets your nervous system across time zones — particularly effective for the first three nights after a long flight. Sunshine (D3) covers the vitamin D deficit from days spent indoors, in transit, or in low-sun destinations. Six bottles, every base covered.",
      timeline: [
        { week: 'Day 1', text: 'Calm helps you sleep on a new schedule from the first night. Wash makes hotel-water skin feel normal. Shield protects from new-climate UV from the first morning.' },
        { week: 'Week 1 on a trip', text: 'Foundation nutrients hold off the cumulative deficit travel creates. Less travel fatigue, less digestion disruption.' },
        { week: 'Multi-trip', text: 'The stack becomes the muscle memory — same routine works in any hotel, any time zone, any duration.' },
        { week: 'Year-round', text: 'For frequent travelers, this becomes the everyday minimum. The Travel Stack and being home stop being different routines.' }
      ],
      faq: [
        { q: 'How does this fit TSA / carry-on rules?', a: 'All six products are well under 3.4 oz / 100 ml each (Shield is exactly 3.4 oz). Wash is 4 oz so check the label of the actual current bottle — newer travel-sized formats may be split. Supplements are bottles of capsules/softgels, no liquid restriction.' },
        { q: 'Why this list specifically?', a: "These six are the highest-leverage products for the things travel breaks — sleep, skin barrier, sun protection, nutrient gaps, vitamin D. The skincare line is deliberately minimal (just Wash + Shield) because hotel sinks and airplane air are bad places to do a full routine, but SPF on the road is non-negotiable. If you want full skincare on the road, layer the rest of your routine on top of this baseline." },
        { q: 'Is the cadence here Smart Refill?', a: "Yes — Smart Refill is the right cadence for this bundle. Wash, Flow, and Shield ship every 2 months, Calm every 2, Sunshine every 3, Multi monthly. Different cadences = exactly what Smart Refill is for. Saves about $40/year vs flat monthly." },
        { q: 'What about jet lag specifically?', a: 'Calm 30-60 minutes before bed in the new time zone for the first 3 nights makes a meaningful difference. Sunshine in the morning helps your circadian rhythm reset. Multi covers the nutrient depletion that compounds the disruption.' }
      ]
    },
    'cycle': {
      eyebrow: 'Cycle Support · Across the Month',
      description: 'Eight products built for the menstrual month — three cycle-specific formulas (Steady, Rhythm, Bloom) plus five daily foundations (Tranquil, Calm, Sunshine, Biome, Flow). Active B6 for the luteal-phase mood dip, standardized chasteberry for cycle regularity, evening primrose for the prostaglandin side, clinical-grade ashwagandha for hormonal-balance modulation, magnesium glycinate for PMS-week tension and sleep, vitamin D for mood through the luteal dip, the gut probiotic for the cycle-skin axis, and omega-3 for systemic inflammation. The protocol for women whose energy, skin, and mood track the month.',
      whyThis: "The menstrual cycle drives meaningful weekly changes in mood, energy, skin, sleep, and inflammation — and most general wellness protocols ignore this. This bundle addresses each axis with what the clinical literature actually supports. <strong>The three cycle-specific products:</strong> Steady delivers active P-5-P (pre-converted B6) — the cofactor for serotonin, GABA, and dopamine synthesis — at the dose that addresses the luteal-phase mood dip. Rhythm uses standardized Vitex agnus-castus (chasteberry), the herbal supplement with the strongest published evidence base for PMS symptoms and cycle regularity. Bloom delivers cold-pressed evening primrose oil (GLA) — the prostaglandin precursor with clinical evidence for breast comfort and cyclical-symptom support. <strong>The five daily foundations:</strong> Tranquil (clinical-grade ashwagandha) is the most-studied adaptogen for cortisol modulation, with particular evidence in women for stress, sleep, and hormonal balance support. Calm (magnesium glycinate) addresses the magnesium deficit that worsens PMS symptoms — cramping, irritability, sleep disruption, and headaches all respond to consistent supplementation in clinical trials. Sunshine (vitamin D3) supports mood through the luteal phase where vitamin D status is meaningfully correlated with PMS severity. Biome covers the cycle-influenced gut microbiome — hormonal shifts change gut function, and the gut-skin axis is the upstream driver of mid-cycle and pre-period breakouts. Flow's omega-3 EPA/DHA reduces the inflammation that drives cramping and the breakouts that often track the luteal phase. Eight products, every lever cycle-aware women actually feel — addressed.",
      timeline: [
        { week: 'Cycle 1', text: 'Calm reduces PMS-week tension and improves sleep on first cycle. Steady\'s B6 begins to support the luteal mood dip. Tranquil and Rhythm begin loading.' },
        { week: 'Cycle 2', text: 'Magnesium effects on cramping compound. Bloom\'s GLA starts to influence prostaglandin balance. Cycle-tracking breakouts visibly reduce.' },
        { week: 'Cycle 3', text: 'Chasteberry (Rhythm) cycle-regulating effect begins to show — many women see steadier cycle length and clearer luteal-phase mood. Ashwagandha cortisol modulation becomes consistent.' },
        { week: 'Cycle 4+', text: 'Sustained cycle-aware baseline. Energy, mood, skin, and breast comfort track the month with much less amplitude. The compounding effect the clinical literature is built around.' }
      ],
      faq: [
        { q: 'When should I take each?', a: 'Tranquil, Rhythm, Steady, Bloom: morning with breakfast (daily). Sunshine, Flow, Biome: morning with food. Calm: 30-60 minutes before bed (especially PMS week). Daily, all month — none of these are cycle-phase-specific. Consistency over the whole month is what produces the effect.' },
        { q: 'Do I really need eight bottles?', a: 'Most women don\'t start with all eight. The three cycle-specific products (Steady, Rhythm, Bloom) are the targeted layer — if your symptoms are luteal-phase mood, cycle irregularity, and breast tenderness, that\'s where to start. The five daily foundations (Tranquil, Calm, Sunshine, Biome, Flow) are the same foundation we recommend for any adult woman — they happen to address the inflammatory, mood, and gut-skin sides of cycle symptoms too. The 12% bundle discount on all eight is meaningful only if you were planning to take all eight anyway. Buy à la carte if you only want a subset.' },
        { q: 'Will this help PCOS or endometriosis?', a: 'These conditions need medical management; supplements alone are not a substitute. That said, several components here (chasteberry for cycle regularity, ashwagandha for stress/cortisol, magnesium for cramping, omega-3 for inflammation, probiotic for gut-hormone axis, B6 for luteal mood) are commonly used alongside clinical care. Talk to your provider about adding this protocol — chasteberry in particular has prescription-medication interactions worth flagging.' },
        { q: "I'm pregnant or trying — is this safe?", a: 'Ashwagandha (Tranquil), chasteberry (Rhythm), and evening primrose (Bloom) are not recommended during pregnancy. Skip those three. Steady (B6), Calm (magnesium glycinate), Sunshine (D3), Flow (omega-3), and Biome (probiotic) are all generally pregnancy-safe — but always confirm with your provider during pregnancy or breastfeeding. The Mom\'s Routine is built for that season.' },
        { q: "What if I'm on hormonal birth control?", a: "These supplements are largely compatible with hormonal contraceptives — but chasteberry (Rhythm) may theoretically interact with hormonal contraception by influencing prolactin, so talk to your provider first if you're on HBC and want to add Rhythm. Birth control already smooths a lot of cycle variation, so you may feel less acute benefit from cycle-tracking effects. The foundational support (mood, sleep, skin, gut, inflammation) is still meaningful." },
        { q: 'How does this differ from the Sleep Bundle or Stress Bundle?', a: "Sleep is acute (wind-down + magnesium + overnight skincare). Stress is broad cortisol response. The Cycle Bundle is the monthly-rhythm protocol — overlaps with both but specifically tracks luteal-phase mood (Steady), cycle regularity (Rhythm), prostaglandin-driven symptoms (Bloom), PMS cramping (Calm), and cycle-related skin patterns (Biome). Use Sleep when sleep is the problem, Stress when stress is the problem, Cycle when the pattern is monthly." }
      ]
    },
    'mushroom-trio': {
      eyebrow: 'Clinical-Dose Mushrooms · The Validated Trio',
      description: 'Three single-ingredient mushroom capsules at clinical doses — Spark (Lion\'s Mane 1,000 mg), Still (Reishi 500 mg), Forge (Cordyceps militaris 500 mg). The dedicated alternative to Synapse for customers who want the three most-studied functional mushrooms each at the dose where the research begins.',
      whyThis: "Functional mushroom research, when you read it carefully, almost never tests broad-spectrum 10-mushroom blends. It tests single mushrooms at single doses. Lion's Mane in the Mori 2009 cognitive RCT: 3,000 mg/day. Reishi in the Jin 2016 Cochrane review for stress and fatigue: 1,500-5,400 mg/day. Cordyceps militaris in the Hirsch 2017 exercise tolerance RCT: 4,000 mg/day. The strongest evidence base sits with single mushrooms at clinical doses — not broad-spectrum blends at sub-clinical doses each. The Mushroom Bundle gives you the three with the strongest published evidence (cognition, stress, energy) at the entry clinical dose for each. <strong>How this differs from Synapse:</strong> Synapse is the broad-spectrum daily gummy at sub-clinical individual doses — the easy daily wellness option. The Mushroom Bundle is the targeted clinical-dose approach. Both are legitimate; they serve different jobs. Many customers use both — Synapse for daily broad coverage, the Bundle when they want clinical-grade support across the cognition/stress/energy axes.",
      timeline: [
        { week: 'Week 1', text: 'Possible single-dose cognitive effects from Spark (Docherty 2023 acute data). Otherwise effects are cumulative.' },
        { week: 'Week 4', text: 'Lion\'s Mane NGF support starts to compound. Reishi adaptogenic effect becomes steadier. Cordyceps cellular-energy effect begins.' },
        { week: 'Week 8', text: 'All three mushroom mechanisms compounding. Cognitive endurance, stress resilience, and cellular energy noticeably improved.' },
        { week: 'Week 12+', text: 'Full clinical-research timeline reached for all three mushrooms. The cumulative effect the research is built around.' }
      ],
      faq: [
        { q: 'How is this different from Synapse?', a: 'Synapse is broad-spectrum: 10 mushrooms in one gummy at sub-clinical individual doses. Easy compliance, daily wellness layer, $34. The Mushroom Bundle is targeted: 3 mushrooms each at clinical doses, capsule format, $75.68 at the 12% bundle discount. Different jobs. If you want a broad mushroom layer in your daily routine, Synapse. If you want clinical-dose Lion\'s Mane, Reishi, and Cordyceps specifically, the Bundle.' },
        { q: 'Can I take Synapse and the Trio together?', a: 'Yes, no interaction or duplication concerns. Some customers do this — Synapse for the broad-spectrum mushroom layer including the four mushrooms not in the Trio (Chaga, Turkey Tail, Maitake, Shiitake), with the Trio adding clinical-dose support for Lion\'s Mane, Reishi, and Cordyceps. It\'s a lot of mushroom; most people don\'t need both. But it\'s safe if you want comprehensive coverage.' },
        { q: 'When should I take each?', a: 'Spark: morning or before deep cognitive work. Still: evening for sleep applications, or with breakfast for daytime stress modulation. Forge: morning or 30-60 minutes pre-workout. Each is 2 capsules daily.' },
        { q: 'Can I buy just one?', a: 'Yes — each is also sold separately. Spark $30, Still $28, Forge $28. Buy as a Trio for the bundle discount when you want all three working together; buy individually when you only need one mechanism.' }
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
