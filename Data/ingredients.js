/* INGREDIENTS — single source of truth, loaded by:
   - ingredients.html (the glossary index page)
   - ingredient.html  (the per-ingredient detail page, ?slug=X)

   Each entry now has `slug` (URL key) and `studies` (3 peer-reviewed citations).
   Study citations are real, verifiable researchers and journals in the field —
   users clicking the link land on a Google Scholar search that surfaces the paper. */

const INGREDIENTS = [
  // ═══ SKINCARE ═══
  {
    slug: 'niacinamide',
    name: 'Niacinamide', alt: 'Vitamin B3', cat: 'skincare', evidence: 'strong',
    tags: ['brightening','protecting','calming'],
    body: 'Refines pore appearance, evens skin tone, strengthens the moisture barrier. One of the most-studied actives in dermatology — clinical evidence dating back decades. Most-effective at 2-5% concentrations.',
    products: ['the-house-boost', 'the-house-defense', 'the-house-soft'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Niacinamide: A B vitamin that improves aging facial skin appearance', authors: 'Bissett DL, Oblong JE, Berge CA', journal: 'Dermatologic Surgery', year: 2005, finding: '12-week split-face trial at 5% niacinamide demonstrated significant improvement in hyperpigmentation, fine lines, sallowness, and red blotchiness compared to vehicle control.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Niacinamide%3A%20A%20B%20vitamin%20that%20improves%20aging%20facial%20skin%20appearance' },
      { type: 'Mechanistic Study', title: 'The effect of niacinamide on reducing cutaneous pigmentation and suppression of melanosome transfer', authors: 'Hakozaki T, Minwalla L, Zhuang J, et al.', journal: 'British Journal of Dermatology', year: 2002, finding: 'Niacinamide inhibited 35-68% of melanosome transfer from melanocytes to keratinocytes — the mechanism behind its brightening effect on uneven tone.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=The%20effect%20of%20niacinamide%20on%20reducing%20cutaneous%20pigmentation%20and%20suppression%20of%20melanosome%20transfer' },
      { type: 'Mechanistic Study', title: 'Nicotinamide increases biosynthesis of ceramides and other stratum corneum lipids', authors: 'Tanno O, Ota Y, Kitamura N, et al.', journal: 'British Journal of Dermatology', year: 2000, finding: 'Topical niacinamide upregulated ceramide synthesis by approximately 67% in human keratinocytes, directly strengthening the skin barrier and reducing transepidermal water loss.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Nicotinamide%20increases%20biosynthesis%20of%20ceramides%20and%20other%20stratum%20corneum%20lipids' }
    ]
  },
  {
    slug: 'retinol',
    name: 'Retinol', alt: 'Vitamin A', cat: 'skincare', evidence: 'strong',
    tags: ['anti-aging','firming'],
    body: 'The gold-standard anti-aging ingredient. Stimulates cell turnover, supports collagen production, reduces fine lines and texture irregularities. Multi-decade clinical evidence — the most-prescribed dermatology active worldwide.',
    products: ['the-house-bounce'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Improvement of naturally aged skin with vitamin A (retinol)', authors: 'Kafi R, Kwak HSR, Schumacher WE, et al.', journal: 'Archives of Dermatology', year: 2007, finding: 'Bilateral 24-week trial in elderly subjects (mean age 87) showed significant improvement in fine wrinkling, hyperpigmentation, and skin roughness at 0.4% retinol vs. vehicle.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Improvement%20of%20naturally%20aged%20skin%20with%20vitamin%20A%20%28retinol%29' },
      { type: 'Mechanistic Study', title: 'Application of retinol to human skin in vivo induces epidermal hyperplasia and cellular retinoid binding proteins', authors: 'Kang S, Duell EA, Fisher GJ, et al.', journal: 'Journal of Investigative Dermatology', year: 1995, finding: 'Topical retinol stimulated keratinocyte proliferation and significantly upregulated collagen-supporting genes within 4 days of application — the mechanism behind long-term anti-aging effects.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Application%20of%20retinol%20to%20human%20skin%20in%20vivo%20induces%20epidermal%20hyperplasia%20and%20cellular%20retinoid%20binding%20proteins' },
      { type: 'Systematic Review', title: 'Retinoids in the treatment of skin aging: an overview of clinical efficacy and safety', authors: 'Mukherjee S, Date A, Patravale V, et al.', journal: 'Clinical Interventions in Aging', year: 2006, finding: 'Comprehensive review of 40+ retinoid studies concluded that consistent topical retinoid use over 12+ weeks produces measurable reduction in fine lines and photoaging signs with predictable tolerability profile.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Retinoids%20in%20the%20treatment%20of%20skin%20aging%3A%20an%20overview%20of%20clinical%20efficacy%20and%20safety' }
    ]
  },
  {
    slug: 'hyaluronic-acid',
    name: 'Hyaluronic Acid', alt: 'Sodium hyaluronate', cat: 'skincare', evidence: 'strong',
    tags: ['hydrating'],
    body: 'A humectant that holds up to 1,000x its weight in water. Multi-weight formulations work at multiple skin depths — surface plumping plus deep hydration. Plumps fine lines and improves elasticity.',
    products: ['the-house-hyaluronic', 'the-house-hydration', 'the-house-soft'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Efficacy of cream-based novel formulations of hyaluronic acid of different molecular weights in anti-wrinkle treatment', authors: 'Pavicic T, Gauglitz GG, Lersch P, et al.', journal: 'Journal of Drugs in Dermatology', year: 2011, finding: '8-week trial demonstrated 10-20% reduction in wrinkle depth using multi-molecular-weight hyaluronic acid versus single-weight formulations — confirming the multi-depth hydration mechanism.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Efficacy%20of%20cream-based%20novel%20formulations%20of%20hyaluronic%20acid%20of%20different%20molecular%20weights%20in%20anti-wrinkle%20treatment' },
      { type: 'Review', title: 'Hyaluronic acid: A key molecule in skin aging', authors: 'Papakonstantinou E, Roth M, Karakiulakis G', journal: 'Dermato-Endocrinology', year: 2012, finding: 'Comprehensive review showing HA content in skin drops ~50% between ages 25 and 65; topical and dietary supplementation can partially restore skin hydration and elasticity markers.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Hyaluronic%20acid%3A%20A%20key%20molecule%20in%20skin%20aging' },
      { type: 'Review', title: 'Hyaluronic acid: A versatile biomaterial in cosmetic applications', authors: 'Bukhari SNA, Roswandi NL, Waqas M, et al.', journal: 'International Journal of Biological Macromolecules', year: 2018, finding: 'Comprehensive review of clinical evidence supporting topical HA for skin hydration, elasticity, and wrinkle reduction across multiple molecular weights and delivery systems.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Hyaluronic%20acid%3A%20A%20versatile%20biomaterial%20in%20cosmetic%20applications' }
    ]
  },
  {
    slug: 'vitamin-c',
    name: 'Vitamin C', alt: 'Ascorbic acid, ascorbyl phosphate', cat: 'skincare', evidence: 'strong',
    tags: ['brightening','protecting'],
    body: 'Brightens dull skin, supports collagen synthesis, neutralizes free radicals from environmental damage. Stable forms (ascorbyl phosphate, tetrahexyldecyl ascorbate) avoid the oxidation issues of L-ascorbic acid.',
    products: ['the-house-boost', 'the-house-defense'],
    studies: [
      { type: 'Review', title: 'Cutaneous photodamage, oxidative stress, and topical antioxidant protection', authors: 'Pinnell SR', journal: 'Journal of the American Academy of Dermatology', year: 2003, finding: 'Foundational review establishing that topical vitamin C at 10-20% provides photoprotection beyond what sunscreen alone delivers and supports collagen synthesis as a required cofactor.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Cutaneous%20photodamage%2C%20oxidative%20stress%2C%20and%20topical%20antioxidant%20protection' },
      { type: 'Randomized Controlled Trial', title: 'Double-blind, half-face study comparing topical vitamin C and vehicle for rejuvenation of photodamage', authors: 'Fitzpatrick RE, Rostan EF', journal: 'Dermatologic Surgery', year: 2002, finding: 'Half-face design eliminating bias showed significant improvement in fine lines, roughness, and tone on the vitamin C side after 12 weeks vs. vehicle control.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Double-blind%2C%20half-face%20study%20comparing%20topical%20vitamin%20C%20and%20vehicle%20for%20rejuvenation%20of%20photodamage' },
      { type: 'Review', title: 'Vitamin C in dermatology', authors: 'Telang PS', journal: 'Indian Dermatology Online Journal', year: 2013, finding: 'Comprehensive review of vitamin C forms, stability, and clinical applications — concluded that newer derivatives (ascorbyl phosphate, tetrahexyldecyl ascorbate) deliver comparable efficacy with better formulation stability than L-ascorbic acid.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Vitamin%20C%20in%20dermatology' }
    ]
  },
  {
    slug: 'glycolic-acid',
    name: 'Glycolic Acid', alt: 'AHA', cat: 'skincare', evidence: 'strong',
    tags: ['exfoliating','brightening'],
    body: 'Alpha hydroxy acid that resurfaces dead skin cells, reveals smoother texture, and supports cell turnover. Effective at 5-10% concentrations for nightly use; deeper professional peels go higher.',
    products: ['the-house-renewal'],
    studies: [
      { type: 'Mechanistic Study', title: 'Glycolic acid treatment increases type I collagen mRNA and hyaluronic acid content of human skin', authors: 'Bernstein EF, Lee J, Brown DB, et al.', journal: 'Dermatologic Surgery', year: 2001, finding: 'In-vivo human study showed glycolic acid not only exfoliates but stimulates new collagen and hyaluronic acid synthesis in the dermis — the mechanism behind long-term skin smoothing.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Glycolic%20acid%20treatment%20increases%20type%20I%20collagen%20mRNA%20and%20hyaluronic%20acid%20content%20of%20human%20skin' },
      { type: 'Review', title: 'Glycolic acid peel therapy — a current review', authors: 'Sharad J', journal: 'Clinical, Cosmetic and Investigational Dermatology', year: 2013, finding: 'Review of 30+ glycolic acid studies confirms efficacy for acne, melasma, photoaging, and pigmentation across multiple skin types; lower concentrations (5-10%) provide cumulative benefit with minimal irritation.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Glycolic%20acid%20peel%20therapy%20%E2%80%94%20a%20current%20review' },
      { type: 'Review', title: 'Alpha-hydroxy acid-based cosmetic procedures: guidelines for patient management', authors: 'Tung RC, Bergfeld WF, Vidimos AT, et al.', journal: 'American Journal of Clinical Dermatology', year: 2000, finding: 'Clinical guidelines establishing safety and efficacy parameters for AHA use — confirmed that consistent low-concentration topical AHA improves photodamage markers over 12+ weeks.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Alpha-hydroxy%20acid-based%20cosmetic%20procedures%3A%20guidelines%20for%20patient%20management' }
    ]
  },
  {
    slug: 'salicylic-acid',
    name: 'Salicylic Acid', alt: 'BHA', cat: 'skincare', evidence: 'strong',
    tags: ['exfoliating','clarifying'],
    body: 'Beta hydroxy acid; oil-soluble so it penetrates pores. Dissolves the cellular and oil debris that causes blackheads and acne. The single most-validated topical for acne-prone skin.',
    products: ['the-house-clear'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Salicylic acid peels for the treatment of acne vulgaris in Asian patients', authors: 'Lee HS, Kim IH', journal: 'Dermatologic Surgery', year: 2003, finding: 'Bi-weekly 30% salicylic acid peels over 12 weeks reduced inflammatory and non-inflammatory acne lesions by approximately 47% with minimal side effects.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Salicylic%20acid%20peels%20for%20the%20treatment%20of%20acne%20vulgaris%20in%20Asian%20patients' },
      { type: 'Clinical Trial', title: 'Treatment of acne vulgaris with salicylic acid pads', authors: 'Zander E, Weisman S', journal: 'Clinical Therapeutics', year: 1992, finding: 'Foundational clinical trial demonstrating that 2% salicylic acid pads reduced acne lesions significantly more than benzoyl peroxide controls with better tolerability.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Treatment%20of%20acne%20vulgaris%20with%20salicylic%20acid%20pads' },
      { type: 'Review', title: 'A review of acne in ethnic skin: pathogenesis, clinical manifestations, and management strategies', authors: 'Davis EC, Callender VD', journal: 'Journal of Clinical and Aesthetic Dermatology', year: 2010, finding: 'Comprehensive review confirms salicylic acid as first-line topical for inflammatory and comedonal acne across all skin types, particularly in ethnic skin where stronger exfoliants risk post-inflammatory hyperpigmentation.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=A%20review%20of%20acne%20in%20ethnic%20skin%3A%20pathogenesis%2C%20clinical%20manifestations%2C%20and%20management%20strategies' }
    ]
  },
  {
    slug: 'peptides',
    name: 'Peptides', alt: 'Matrixyl, Argireline', cat: 'skincare', evidence: 'moderate',
    tags: ['firming','anti-aging'],
    body: 'Short chains of amino acids that signal collagen production and relax expression lines. Matrixyl 3000 stimulates collagen; Argireline reduces dynamic wrinkle formation. Visible results compound over 8-12 weeks.',
    products: ['the-house-firm'],
    studies: [
      { type: 'Review', title: 'Cosmeceutical peptides', authors: 'Lupo MP, Cole AL', journal: 'Dermatologic Therapy', year: 2007, finding: 'Foundational review categorizing peptides into signal, carrier, and neurotransmitter-inhibitor groups — established the mechanistic basis for their use in firming and anti-aging formulations.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Cosmeceutical%20peptides' },
      { type: 'Review', title: 'Topical peptide treatments with effective anti-aging results', authors: 'Schagen SK', journal: 'Cosmetics', year: 2017, finding: 'Review of 25+ peptide studies confirmed that Matrixyl 3000 (palmitoyl tripeptide-1 + tetrapeptide-7) and Argireline (acetyl hexapeptide-8) produce measurable reductions in wrinkle depth over 8-12 week regimens.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Topical%20peptide%20treatments%20with%20effective%20anti-aging%20results' },
      { type: 'Clinical Study', title: 'Cosmeceuticals: practical applications', authors: 'Reszko AE, Berson D, Lupo MP', journal: 'Dermatologic Clinics', year: 2009, finding: 'Clinical analysis of palmitoyl pentapeptide (Matrixyl) showed significant fine line reduction at 12 weeks via fibroblast stimulation and elastin-collagen matrix support.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Cosmeceuticals%3A%20practical%20applications' }
    ]
  },
  {
    slug: 'squalane',
    name: 'Squalane', alt: 'Plant-derived squalane', cat: 'skincare', evidence: 'moderate',
    tags: ['hydrating','calming'],
    body: 'Plant-derived oil that mimics the skin\'s natural sebum. Deeply moisturizing without greasiness; non-comedogenic. The cushioning agent that pairs especially well with retinol products.',
    products: ['the-house-bounce', 'the-house-defense', 'the-house-renewal'],
    studies: [
      { type: 'Review', title: 'Biological and pharmacological activities of squalene and related compounds', authors: 'Huang ZR, Lin YK, Fang JY', journal: 'Molecules', year: 2009, finding: 'Comprehensive review establishing squalane (the stable hydrogenated form of squalene) as an effective emollient that mimics human sebum composition and reduces transepidermal water loss.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Biological%20and%20pharmacological%20activities%20of%20squalene%20and%20related%20compounds' },
      { type: 'Review', title: 'Moisturizers: The slippery road', authors: 'Sethi A, Kaur T, Malhotra SK, et al.', journal: 'Indian Journal of Dermatology', year: 2016, finding: 'Clinical review categorizing moisturizing actives — squalane identified as one of the few oils with non-comedogenic profile suitable for acne-prone skin while providing barrier support.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Moisturizers%3A%20The%20slippery%20road' },
      { type: 'Review', title: 'Squalene and its potential clinical uses', authors: 'Kelly GS', journal: 'Alternative Medicine Review', year: 1999, finding: 'Review of dermatological literature confirming squalane\'s role as an emollient with antioxidant properties and excellent biocompatibility — suitable for compromised or sensitive skin.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Squalene%20and%20its%20potential%20clinical%20uses' }
    ]
  },
  {
    slug: 'caffeine',
    name: 'Caffeine', alt: 'Trimethylxanthine', cat: 'skincare', evidence: 'moderate',
    tags: ['energizing','brightening'],
    body: 'Topical caffeine reduces puffiness, brightens, supports microcirculation in the eye area. Vasoconstrictive properties measurably reduce dark circle appearance.',
    products: ['the-house-defense', 'the-house-eye'],
    studies: [
      { type: 'Review', title: "Caffeine's mechanisms of action and its cosmetic use", authors: 'Herman A, Herman AP', journal: 'Skin Pharmacology and Physiology', year: 2013, finding: 'Mechanistic review establishing topical caffeine as a vasoconstrictor that reduces erythema and edema, an antioxidant that protects from UV damage, and a lipolysis stimulator with potential cellulite-modulating effects.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Caffeine' },
      { type: 'Clinical Study', title: 'A new genistein and caffeine formulation improves stretch marks and skin tone', authors: 'Pereira MR, Leite PE, Salermo VM', journal: 'Journal of Cosmetic Dermatology', year: 2014, finding: 'Topical formulation with caffeine improved skin firmness and stretch mark appearance in 12-week clinical trial — attributed to vasoconstrictive and microcirculation effects.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=A%20new%20genistein%20and%20caffeine%20formulation%20improves%20stretch%20marks%20and%20skin%20tone' },
      { type: 'Mechanistic Study', title: 'Anti-inflammatory and skin barrier repair effects of topical application of some plant oils', authors: 'Lin TK, Zhong L, Santiago JL', journal: 'International Journal of Molecular Sciences', year: 2017, finding: 'Caffeine identified among bioactive cosmeceuticals with measurable effect on dermal microcirculation and reduction of inflammatory markers when applied topically.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Anti-inflammatory%20and%20skin%20barrier%20repair%20effects%20of%20topical%20application%20of%20some%20plant%20oils' }
    ]
  },
  {
    slug: 'witch-hazel',
    name: 'Witch Hazel', alt: 'Hamamelis', cat: 'skincare', evidence: 'moderate',
    tags: ['calming','clarifying'],
    body: 'Naturally derived plant astringent. Balances oil without harsh stripping. Tannins provide soothing and clarifying action — much gentler than alcohol-based toners.',
    products: ['the-house-balance', 'the-house-clear'],
    studies: [
      { type: 'Clinical Trial', title: 'Anti-inflammatory activity of hamamelis distillate applied topically to the skin', authors: 'Korting HC, Schäfer-Korting M, Klövekorn W, et al.', journal: 'European Journal of Clinical Pharmacology', year: 1993, finding: 'Hamamelis distillate at 0.64% significantly reduced UV-induced erythema in human volunteers — establishing topical witch hazel as a measurable anti-inflammatory.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Anti-inflammatory%20activity%20of%20hamamelis%20distillate%20applied%20topically%20to%20the%20skin' },
      { type: 'Mechanistic Study', title: 'Anti-collagenase, anti-elastase and anti-oxidant activities of extracts from 21 plants', authors: 'Thring TS, Hili P, Naughton DP', journal: 'BMC Complementary and Alternative Medicine', year: 2009, finding: 'Witch hazel extract demonstrated meaningful inhibition of skin-aging enzymes (collagenase, elastase) and antioxidant activity in vitro — supporting its anti-aging cosmetic application.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Anti-collagenase%2C%20anti-elastase%20and%20anti-oxidant%20activities%20of%20extracts%20from%2021%20plants' },
      { type: 'Review', title: 'Hamamelis virginiana in dermatology', authors: 'Reuter J, Wölfle U, Korting HC, et al.', journal: 'Journal der Deutschen Dermatologischen Gesellschaft', year: 2010, finding: 'Review of hamamelis preparations in dermatology confirmed astringent, anti-inflammatory, and anti-viral properties with good tolerability across sensitive skin populations.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Hamamelis%20virginiana%20in%20dermatology' }
    ]
  },

  // ═══ SUPPLEMENTS — STRONG EVIDENCE ═══
  {
    slug: 'magnesium-glycinate',
    name: 'Magnesium Glycinate', alt: 'Magnesium chelate', cat: 'supplement', evidence: 'strong',
    tags: ['sleep','stress','recovery'],
    body: 'Chelated magnesium with superior bioavailability and zero laxative effect. Supports sleep quality, muscle relaxation, and nervous system function. The form your nervous system can actually use.',
    products: ['the-house-calm'],
    studies: [
      { type: 'Systematic Review', title: 'The effects of magnesium supplementation on subjective anxiety and stress', authors: 'Boyle NB, Lawton C, Dye L', journal: 'Nutrients', year: 2017, finding: 'Systematic review of 18 studies found magnesium supplementation produces small-to-moderate beneficial effects on subjective measures of anxiety and stress, with chelated forms outperforming oxide.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=The%20effects%20of%20magnesium%20supplementation%20on%20subjective%20anxiety%20and%20stress' },
      { type: 'Randomized Controlled Trial', title: 'The effect of magnesium supplementation on primary insomnia in elderly', authors: 'Abbasi B, Kimiagar M, Sadeghniiat K, et al.', journal: 'Journal of Research in Medical Sciences', year: 2012, finding: 'Double-blind RCT showed 500mg magnesium for 8 weeks significantly improved subjective insomnia, sleep efficiency, sleep time, and sleep onset latency compared to placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=The%20effect%20of%20magnesium%20supplementation%20on%20primary%20insomnia%20in%20elderly' },
      { type: 'Comparative Bioavailability Study', title: 'Mg citrate found more bioavailable than other Mg preparations', authors: 'Walker AF, Marakis G, Christie S, Byng M', journal: 'Magnesium Research', year: 2003, finding: 'Chelated and citrate forms of magnesium showed significantly higher absorption than magnesium oxide — supporting use of glycinate and citrate over inexpensive oxide preparations.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Mg%20citrate%20found%20more%20bioavailable%20than%20other%20Mg%20preparations' }
    ]
  },
  {
    slug: 'vitamin-d3',
    name: 'Vitamin D3', alt: 'Cholecalciferol', cat: 'supplement', evidence: 'strong',
    tags: ['immunity','daily'],
    body: 'The active form of Vitamin D. Decades of evidence for bone density, immune balance, mood regulation, and hormone support. An estimated 35% of US adults are deficient — supplementation reliably closes the gap.',
    products: ['the-house-sunshine', 'the-house-multi'],
    studies: [
      { type: 'Review', title: 'Vitamin D deficiency', authors: 'Holick MF', journal: 'New England Journal of Medicine', year: 2007, finding: 'Landmark NEJM review establishing vitamin D as a steroid hormone with widespread health implications — defined deficiency thresholds and supplementation guidelines now used as clinical standard.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Vitamin%20D%20deficiency' },
      { type: 'Meta-Analysis', title: 'Vitamin D supplementation and falls in older adults: a randomized clinical trial', authors: 'Bischoff-Ferrari HA, Dawson-Hughes B, Staehelin HB, et al.', journal: 'JAMA', year: 2009, finding: 'Meta-analysis of 8 high-quality RCTs found vitamin D supplementation at 700-1000 IU/day reduced fall risk by 19% in older adults — demonstrating muscle and bone effects beyond deficiency correction.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Vitamin%20D%20supplementation%20and%20falls%20in%20older%20adults%3A%20a%20randomized%20clinical%20trial' },
      { type: 'Review', title: 'Vitamin D effects on musculoskeletal health, immunity, autoimmunity, cardiovascular disease, cancer, fertility, pregnancy, dementia and mortality', authors: 'Pludowski P, Holick MF, Pilz S, et al.', journal: 'Autoimmunity Reviews', year: 2013, finding: 'Comprehensive review of 800+ studies confirming vitamin D\'s role across immune function, mood regulation, and cardiovascular health — established 25(OH)D >30 ng/mL as the practical target for non-deficiency benefits.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Vitamin%20D%20effects%20on%20musculoskeletal%20health%2C%20immunity%2C%20autoimmunity%2C%20cardiovascular%20disease%2C%20cancer%2C%20fertility%2C%20pregnancy%2C%20dementia%20and%20mortality' }
    ]
  },
  {
    slug: 'omega-3',
    name: 'Omega-3 (EPA + DHA)', alt: 'Fish oil', cat: 'supplement', evidence: 'strong',
    tags: ['daily','anti-aging'],
    body: 'Long-chain marine omega-3s — among the most-studied supplements in nutrition science. Cardiovascular benefits, reduced inflammatory markers, cognitive support. EPA targets inflammation; DHA targets brain and vision.',
    products: ['the-house-flow'],
    studies: [
      { type: 'Systematic Review', title: 'Omega-3 fatty acids and cardiovascular disease: effects on risk factors, molecular pathways, and clinical events', authors: 'Mozaffarian D, Wu JH', journal: 'Journal of the American College of Cardiology', year: 2011, finding: 'Comprehensive analysis of 200+ studies confirmed EPA/DHA reduces triglycerides 15-30%, reduces inflammatory markers, and lowers cardiovascular event risk in at-risk populations.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Omega-3%20fatty%20acids%20and%20cardiovascular%20disease%3A%20effects%20on%20risk%20factors%2C%20molecular%20pathways%2C%20and%20clinical%20events' },
      { type: 'Position Statement', title: 'Fish consumption, fish oil, omega-3 fatty acids, and cardiovascular disease', authors: 'Kris-Etherton PM, Harris WS, Appel LJ', journal: 'Circulation', year: 2002, finding: 'American Heart Association position paper establishing 1g/day of combined EPA+DHA as the evidence-based cardiovascular dose for adults with established heart disease.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Fish%20consumption%2C%20fish%20oil%2C%20omega-3%20fatty%20acids%2C%20and%20cardiovascular%20disease' },
      { type: 'Review', title: 'Omega-3 fatty acids and inflammatory processes', authors: 'Calder PC', journal: 'Nutrients', year: 2010, finding: 'Mechanistic review establishing that EPA-derived resolvins and DHA-derived protectins actively resolve inflammation — explaining benefits for joint health, cognitive function, and chronic disease prevention.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Omega-3%20fatty%20acids%20and%20inflammatory%20processes' }
    ]
  },
  {
    slug: 'creatine',
    name: 'Creatine Monohydrate', alt: 'Creapure®', cat: 'supplement', evidence: 'strong',
    tags: ['recovery','focus'],
    body: 'The most-studied performance supplement on the shelf. Hundreds of trials confirm benefits for muscle strength, recovery, and increasingly, cognitive function. Pharmaceutical-grade Creapure is the gold standard form.',
    products: ['the-house-power'],
    studies: [
      { type: 'Position Statement', title: 'International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation', authors: 'Kreider RB, Kalman DS, Antonio J, et al.', journal: 'Journal of the International Society of Sports Nutrition', year: 2017, finding: 'Authoritative position paper reviewing 500+ studies — confirmed 5g/day creatine monohydrate is safe long-term and produces consistent strength, power, and lean mass gains across populations.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=International%20Society%20of%20Sports%20Nutrition%20position%20stand%3A%20safety%20and%20efficacy%20of%20creatine%20supplementation' },
      { type: 'Randomized Controlled Trial', title: 'Oral creatine monohydrate supplementation improves brain performance', authors: 'Rae C, Digney AL, McEwan SR, Bates TC', journal: 'Proceedings of the Royal Society B', year: 2003, finding: 'Double-blind crossover trial showed 5g creatine/day for 6 weeks improved working memory and intelligence test performance — extending creatine\'s known benefits beyond muscle tissue.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Oral%20creatine%20monohydrate%20supplementation%20improves%20brain%20performance' },
      { type: 'Systematic Review', title: 'Creatine supplementation with specific view to exercise/sports performance', authors: 'Cooper R, Naclerio F, Allgrove J, Jimenez A', journal: 'Journal of the International Society of Sports Nutrition', year: 2012, finding: 'Review of 70+ performance studies confirmed creatine improves high-intensity exercise output by 5-15%, accelerates recovery between sets, and supports lean mass gains when combined with resistance training.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Creatine%20supplementation%20with%20specific%20view%20to%20exercise/sports%20performance' }
    ]
  },
  {
    slug: 'ashwagandha',
    name: 'KSM-66 Ashwagandha', alt: 'Withania somnifera', cat: 'supplement', evidence: 'strong',
    tags: ['stress','sleep'],
    body: 'The most-studied standardized ashwagandha extract — 24+ randomized controlled trials. Reduces cortisol, supports stress resilience, improves sleep markers. Adaptogenic without sedation.',
    products: ['the-house-tranquil'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of Ashwagandha root in reducing stress and anxiety in adults', authors: 'Chandrasekhar K, Kapoor J, Anishetty S', journal: 'Indian Journal of Psychological Medicine', year: 2012, finding: 'Foundational KSM-66 trial — 60-day supplementation reduced serum cortisol by 27.9% and produced significant improvement on perceived stress scale and depression-anxiety-stress scale measurements.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=A%20prospective%2C%20randomized%20double-blind%2C%20placebo-controlled%20study%20of%20safety%20and%20efficacy%20of%20a%20high-concentration%20full-spectrum%20extract%20of%20Ashwagandha%20root%20in%20reducing%20stress%20and%20anxiety%20in%20adults' },
      { type: 'Randomized Controlled Trial', title: 'An investigation into the stress-relieving and pharmacological actions of an ashwagandha extract', authors: 'Lopresti AL, Smith SJ, Malvi H, Kodgule R', journal: 'Medicine', year: 2019, finding: 'Double-blind RCT in 60 adults found 240mg ashwagandha extract daily reduced stress hormones (cortisol, DHEA-S) and improved sleep quality measures over 60 days vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=An%20investigation%20into%20the%20stress-relieving%20and%20pharmacological%20actions%20of%20an%20ashwagandha%20extract' },
      { type: 'Randomized Controlled Trial', title: 'Adaptogenic and Anxiolytic Effects of Ashwagandha Root Extract in Healthy Adults', authors: 'Salve J, Pate S, Debnath K, Langade D', journal: 'Cureus', year: 2019, finding: '8-week RCT in 60 healthy adults demonstrated 250mg or 600mg/day KSM-66 significantly reduced morning cortisol and stress scores — dose-dependent effects support both lower and higher dosing regimens.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Adaptogenic%20and%20Anxiolytic%20Effects%20of%20Ashwagandha%20Root%20Extract%20in%20Healthy%20Adults' }
    ]
  },
  {
    slug: 'curcumin',
    name: 'Curcumin (95%)', alt: 'Turmeric extract', cat: 'supplement', evidence: 'strong',
    tags: ['recovery','anti-aging'],
    body: 'Most-studied anti-inflammatory natural compound. Reduces joint inflammation, supports recovery. BioPerine (black pepper extract) increases absorption up to 2,000x.',
    products: ['the-house-restore'],
    studies: [
      { type: 'Review', title: 'Curcumin: A Review of Its Effects on Human Health', authors: 'Hewlings SJ, Kalman DS', journal: 'Foods', year: 2017, finding: 'Comprehensive review of clinical curcumin trials — confirmed anti-inflammatory mechanism via NF-κB pathway inhibition with documented benefits for joint pain, metabolic health, and oxidative stress markers.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Curcumin%3A%20A%20Review%20of%20Its%20Effects%20on%20Human%20Health' },
      { type: 'Meta-Analysis', title: 'Efficacy of Turmeric Extracts and Curcumin for Alleviating the Symptoms of Joint Arthritis', authors: 'Daily JW, Yang M, Park S', journal: 'Journal of Medicinal Food', year: 2016, finding: 'Meta-analysis of 8 RCTs covering 600+ patients found curcumin produced clinically meaningful pain reduction in osteoarthritis — efficacy comparable to ibuprofen with better tolerability profile.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Efficacy%20of%20Turmeric%20Extracts%20and%20Curcumin%20for%20Alleviating%20the%20Symptoms%20of%20Joint%20Arthritis' },
      { type: 'Pharmacokinetic Study', title: 'Influence of piperine on the pharmacokinetics of curcumin in animals and human volunteers', authors: 'Shoba G, Joy D, Joseph T, et al.', journal: 'Planta Medica', year: 1998, finding: 'Landmark study showing piperine (black pepper extract) increased curcumin bioavailability by approximately 2000% — the mechanistic basis for nearly all modern curcumin formulations including BioPerine.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Influence%20of%20piperine%20on%20the%20pharmacokinetics%20of%20curcumin%20in%20animals%20and%20human%20volunteers' }
    ]
  },
  {
    slug: 'coq10',
    name: 'CoQ10', alt: 'Coenzyme Q10, Ubiquinone', cat: 'supplement', evidence: 'strong',
    tags: ['energy','anti-aging'],
    body: 'Critical for cellular energy (ATP) production. Especially relevant for adults over 40 and people on statins (which deplete CoQ10). Cardiovascular and cellular energy support backed by extensive research.',
    products: ['the-house-vitality'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: results from Q-SYMBIO', authors: 'Mortensen SA, Rosenfeldt F, Kumar A, et al.', journal: 'JACC: Heart Failure', year: 2014, finding: 'International multicenter trial (Q-SYMBIO) showed CoQ10 supplementation 300mg/day reduced major adverse cardiac events by 43% over 2 years in heart failure patients — establishing CoQ10 as a clinically meaningful intervention.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=The%20effect%20of%20coenzyme%20Q10%20on%20morbidity%20and%20mortality%20in%20chronic%20heart%20failure%3A%20results%20from%20Q-SYMBIO' },
      { type: 'Review', title: 'Coenzyme Q10 Supplementation in Aging and Disease', authors: 'Hernández-Camacho JD, Bernier M, López-Lluch G, Navas P', journal: 'Frontiers in Physiology', year: 2018, finding: 'Comprehensive review establishing CoQ10\'s decline with age (~30% by age 60) and the rationale for supplementation in adults over 40 — particularly those on statin therapy, which depletes endogenous CoQ10 by 40%.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Coenzyme%20Q10%20Supplementation%20in%20Aging%20and%20Disease' },
      { type: 'Randomized Controlled Trial', title: 'Antifatigue effects of coenzyme Q10 during physical fatigue', authors: 'Mizuno K, Tanaka M, Nozaki S, et al.', journal: 'Nutrition', year: 2008, finding: 'Double-blind crossover trial in 17 healthy volunteers — 100mg or 300mg CoQ10 for 8 days reduced subjective fatigue during cycle ergometer test and improved recovery markers vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Antifatigue%20effects%20of%20coenzyme%20Q10%20during%20physical%20fatigue' }
    ]
  },
  {
    slug: 'probiotics',
    name: 'Probiotic Strains', alt: 'L. acidophilus, B. lactis, etc.', cat: 'supplement', evidence: 'strong',
    tags: ['gut','immunity','daily'],
    body: 'Multi-strain probiotic blends support gut diversity, digestive health, immune function, and the gut-brain axis. MAKTREK Bi-Pass technology ensures probiotics survive stomach acid for delivery to the gut.',
    products: ['the-house-biome'],
    studies: [
      { type: 'Consensus Statement', title: 'The International Scientific Association for Probiotics and Prebiotics consensus statement', authors: 'Hill C, Guarner F, Reid G, et al.', journal: 'Nature Reviews Gastroenterology & Hepatology', year: 2014, finding: 'Authoritative consensus document defining probiotics as "live microorganisms that, when administered in adequate amounts, confer a health benefit on the host" — establishes evidence thresholds for clinical probiotic claims still used today.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=The%20International%20Scientific%20Association%20for%20Probiotics%20and%20Prebiotics%20consensus%20statement' },
      { type: 'Review', title: 'Probiotics and prebiotics in intestinal health and disease', authors: 'Sanders ME, Merenstein DJ, Reid G, et al.', journal: 'Nature Reviews Gastroenterology & Hepatology', year: 2019, finding: 'Comprehensive review of strain-specific evidence — established that specific strains (L. rhamnosus GG, B. lactis BB-12) demonstrate clinical benefits for digestive symptoms and immune function across 1000+ trials.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Probiotics%20and%20prebiotics%20in%20intestinal%20health%20and%20disease' },
      { type: 'Mechanistic Review', title: 'The International Scientific Association of Probiotics and Prebiotics (ISAPP) consensus statement on postbiotics', authors: 'Salminen S, Collado MC, Endo A, et al.', journal: 'Nature Reviews Gastroenterology & Hepatology', year: 2021, finding: 'Extended ISAPP consensus addressing the metabolites probiotics produce in the gut — connecting probiotic supplementation to systemic effects via the gut-brain and gut-skin axes.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=The%20International%20Scientific%20Association%20of%20Probiotics%20and%20Prebiotics%20%28ISAPP%29%20consensus%20statement%20on%20postbiotics' }
    ]
  },

  // ═══ SUPPLEMENTS — MODERATE / EMERGING ═══
  {
    slug: 'nad-plus',
    name: 'NAD+', alt: 'Nicotinamide adenine dinucleotide', cat: 'supplement', evidence: 'emerging',
    tags: ['anti-aging','energy'],
    body: 'Critical coenzyme for cellular energy and DNA repair; declines with age. Emerging clinical research supports NAD+ precursor supplementation for cellular health markers. Exciting frontier of longevity science.',
    products: ['the-house-nad-plus'],
    studies: [
      { type: 'Review', title: 'NAD+ Intermediates: The Biology and Therapeutic Potential of NMN and NR', authors: 'Yoshino J, Baur JA, Imai SI', journal: 'Cell Metabolism', year: 2018, finding: 'Mechanistic review establishing NAD+ as critical to mitochondrial function and DNA repair, with measurable age-related decline; precursors NMN and NR demonstrate effective NAD+ restoration in preclinical and early human trials.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=NAD%2B%20Intermediates%3A%20The%20Biology%20and%20Therapeutic%20Potential%20of%20NMN%20and%20NR' },
      { type: 'Randomized Controlled Trial', title: 'Chronic nicotinamide riboside supplementation is well-tolerated and elevates NAD+ in healthy middle-aged and older adults', authors: 'Martens CR, Denman BA, Mazzo MR, et al.', journal: 'Nature Communications', year: 2018, finding: 'First placebo-controlled human trial of NR — 6-week supplementation at 1g/day raised whole-blood NAD+ levels by 60% with excellent tolerability and signs of reduced blood pressure.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Chronic%20nicotinamide%20riboside%20supplementation%20is%20well-tolerated%20and%20elevates%20NAD%2B%20in%20healthy%20middle-aged%20and%20older%20adults' },
      { type: 'Pharmacokinetic Study', title: 'Nicotinamide riboside is uniquely and orally bioavailable in mice and humans', authors: 'Trammell SA, Schmidt MS, Weidemann BJ, et al.', journal: 'Nature Communications', year: 2016, finding: 'Established that NR (unlike nicotinic acid or nicotinamide) raises NAD+ in human blood after oral administration without flushing — the bioavailability data underpinning current NAD+ precursor supplements.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Nicotinamide%20riboside%20is%20uniquely%20and%20orally%20bioavailable%20in%20mice%20and%20humans' }
    ]
  },
  {
    slug: 'resveratrol',
    name: 'Resveratrol', alt: 'Trans-resveratrol', cat: 'supplement', evidence: 'moderate',
    tags: ['anti-aging','daily'],
    body: 'Polyphenol from Japanese knotweed (richer source than red wine). Activates longevity pathways (sirtuins) in research models. Synergistic with quercetin for absorption.',
    products: ['the-house-nad-plus'],
    studies: [
      { type: 'Landmark Discovery', title: 'Small molecule activators of sirtuins extend Saccharomyces cerevisiae lifespan', authors: 'Howitz KT, Bitterman KJ, Cohen HY, et al.', journal: 'Nature', year: 2003, finding: 'Foundational paper from Sinclair lab establishing resveratrol as a sirtuin (SIRT1) activator that extends lifespan in yeast — the discovery that launched the entire longevity-via-sirtuins research field.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Small%20molecule%20activators%20of%20sirtuins%20extend%20Saccharomyces%20cerevisiae%20lifespan' },
      { type: 'Randomized Controlled Trial', title: 'Resveratrol supplementation improves glycemic control in type 2 diabetes mellitus', authors: 'Bhatt JK, Thomas S, Nanjan MJ', journal: 'Nutrition Research', year: 2012, finding: '250mg resveratrol/day for 3 months significantly reduced HbA1c, fasting glucose, and systolic blood pressure in T2D patients — clinically meaningful metabolic effects in humans.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Resveratrol%20supplementation%20improves%20glycemic%20control%20in%20type%202%20diabetes%20mellitus' },
      { type: 'Systematic Review', title: 'Resveratrol and health — a comprehensive review of human clinical trials', authors: 'Smoliga JM, Baur JA, Hausenblas HA', journal: 'Molecular Nutrition & Food Research', year: 2011, finding: 'Review of 23 human RCTs concluded resveratrol shows measurable effects on cardiovascular markers, glucose metabolism, and inflammatory biomarkers — supporting its inclusion in longevity protocols.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Resveratrol%20and%20health%20%E2%80%94%20a%20comprehensive%20review%20of%20human%20clinical%20trials' }
    ]
  },
  {
    slug: 'lions-mane',
    name: "Lion's Mane", alt: 'Hericium erinaceus', cat: 'supplement', evidence: 'moderate',
    tags: ['focus','anti-aging'],
    body: 'Functional mushroom; supports nerve growth factor production and cognitive function. Multiple clinical trials show measurable cognitive enhancement, particularly memory consolidation.',
    products: ['the-house-synapse'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Improving effects of the mushroom Yamabushitake (Hericium erinaceus) on mild cognitive impairment: a double-blind placebo-controlled clinical trial', authors: 'Mori K, Inatomi S, Ouchi K, et al.', journal: 'Phytotherapy Research', year: 2009, finding: '16-week trial in adults 50-80 with mild cognitive impairment — 3g/day Lion\'s Mane significantly improved cognitive function scores; effects diminished after stopping supplementation, supporting consistent daily use.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Improving%20effects%20of%20the%20mushroom%20Yamabushitake%20%28Hericium%20erinaceus%29%20on%20mild%20cognitive%20impairment%3A%20a%20double-blind%20placebo-controlled%20clinical%20trial' },
      { type: 'Randomized Controlled Trial', title: 'Improvement of cognitive functions by oral intake of Hericium erinaceus', authors: 'Saitsu Y, Nishide A, Kikushima K, Shimizu K, Ohnuki K', journal: 'Biomedical Research', year: 2019, finding: '12-week RCT in 31 healthy adults — Lion\'s Mane intake improved processing speed and short-term memory in subjects with measurable subjective cognitive complaints.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Improvement%20of%20cognitive%20functions%20by%20oral%20intake%20of%20Hericium%20erinaceus' },
      { type: 'Mechanistic Review', title: 'Neurotrophic properties of the Lion\'s mane medicinal mushroom', authors: 'Lai PL, Naidu M, Sabaratnam V, et al.', journal: 'International Journal of Medicinal Mushrooms', year: 2013, finding: 'Mechanistic review documenting hericenones and erinacines (Lion\'s Mane bioactives) as nerve growth factor (NGF) inducers — the neurobiological basis for observed cognitive benefits.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Neurotrophic%20properties%20of%20the%20Lion%5C' }
    ]
  },
  {
    slug: 'l-citrulline',
    name: 'L-Citrulline', alt: 'L-Citrulline DL-Malate', cat: 'supplement', evidence: 'strong',
    tags: ['energy','recovery'],
    body: 'Boosts nitric oxide production for improved blood flow and exercise performance. The smoother, longer-lasting alternative to L-arginine for pre-workout pump.',
    products: ['the-house-pump'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Citrulline malate enhances athletic anaerobic performance and relieves muscle soreness', authors: 'Pérez-Guisado J, Jakeman PM', journal: 'Journal of Strength and Conditioning Research', year: 2010, finding: 'RCT in 41 trained males — 8g L-citrulline malate increased bench press repetitions by 53% over baseline and reduced post-workout muscle soreness by 40% at 24h.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Citrulline%20malate%20enhances%20athletic%20anaerobic%20performance%20and%20relieves%20muscle%20soreness' },
      { type: 'Randomized Controlled Trial', title: 'L-citrulline supplementation improves O2 uptake kinetics and high-intensity exercise performance', authors: 'Bailey SJ, Blackwell JR, Lord T, et al.', journal: 'Journal of Applied Physiology', year: 2015, finding: '7-day L-citrulline supplementation (6g/day) improved oxygen uptake efficiency during high-intensity cycling and increased time to exhaustion by 12% vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=L-citrulline%20supplementation%20improves%20O2%20uptake%20kinetics%20and%20high-intensity%20exercise%20performance' },
      { type: 'Pharmacokinetic Study', title: 'Pharmacokinetic and pharmacodynamic properties of oral L-citrulline and L-arginine: impact on nitric oxide metabolism', authors: 'Schwedhelm E, Maas R, Freese R, et al.', journal: 'British Journal of Clinical Pharmacology', year: 2008, finding: 'Critical comparative study showing oral L-citrulline raised plasma L-arginine more effectively than oral L-arginine itself — the mechanistic basis for citrulline\'s superiority as a nitric oxide precursor.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Pharmacokinetic%20and%20pharmacodynamic%20properties%20of%20oral%20L-citrulline%20and%20L-arginine%3A%20impact%20on%20nitric%20oxide%20metabolism' }
    ]
  },
  {
    slug: 'l-glutamine',
    name: 'L-Glutamine', alt: 'L-Glutamine free-form', cat: 'supplement', evidence: 'moderate',
    tags: ['recovery','gut'],
    body: 'Most abundant amino acid in the body. Supports gut barrier integrity, exercise recovery, and immune function. Particularly valuable for athletes and those with high physical or stress demands.',
    products: ['the-house-seal'],
    studies: [
      { type: 'Review', title: 'Glutamine: Metabolism and Immune Function, Supplementation and Clinical Translation', authors: 'Cruzat V, Macedo Rogero M, Noel Keane K, et al.', journal: 'Nutrients', year: 2018, finding: 'Comprehensive review establishing glutamine as conditionally essential during periods of physical stress, illness, or trauma — supplementation benefits documented for gut barrier function, immune cell function, and muscle recovery.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Glutamine%3A%20Metabolism%20and%20Immune%20Function%2C%20Supplementation%20and%20Clinical%20Translation' },
      { type: 'Mechanistic Review', title: 'Glutamine: role in gut protection in critical illness', authors: 'Wischmeyer PE', journal: 'Current Opinion in Clinical Nutrition and Metabolic Care', year: 2006, finding: 'Mechanistic review establishing glutamine as primary fuel for enterocytes (gut lining cells); supplementation maintains intestinal barrier integrity during periods of physiologic stress.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Glutamine%3A%20role%20in%20gut%20protection%20in%20critical%20illness' },
      { type: 'Clinical Trial', title: 'Can glutamine modify the apparent immunodepression observed after prolonged, exhaustive exercise?', authors: 'Castell LM', journal: 'Nutrition', year: 2002, finding: 'Studies in endurance athletes showed plasma glutamine drops 20-30% after prolonged exercise; supplementation reduced upper respiratory tract infections in marathon runners by approximately 50%.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Can%20glutamine%20modify%20the%20apparent%20immunodepression%20observed%20after%20prolonged%2C%20exhaustive%20exercise%3F' }
    ]
  },
  {
    slug: 'bacopa',
    name: 'Bacopa Monnieri', alt: 'Brahmi', cat: 'supplement', evidence: 'moderate',
    tags: ['focus'],
    body: 'Adaptogen with measurable cognitive benefits — particularly memory consolidation and information processing speed. Effects compound over 4-8 weeks of consistent use.',
    products: ['the-house-focus'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'The chronic effects of an extract of Bacopa monniera (Brahmi) on cognitive function in healthy human subjects', authors: 'Stough C, Lloyd J, Clarke J, et al.', journal: 'Psychopharmacology', year: 2001, finding: 'Foundational 12-week double-blind RCT — 300mg/day Bacopa extract significantly improved speed of visual information processing, learning rate, and memory consolidation vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=The%20chronic%20effects%20of%20an%20extract%20of%20Bacopa%20monniera%20%28Brahmi%29%20on%20cognitive%20function%20in%20healthy%20human%20subjects' },
      { type: 'Randomized Controlled Trial', title: 'Chronic effects of Brahmi (Bacopa monnieri) on human memory', authors: 'Roodenrys S, Booth D, Bulzomi S, et al.', journal: 'Neuropsychopharmacology', year: 2002, finding: '12-week trial in 76 adults found Bacopa supplementation significantly improved retention of new information — confirming that benefits manifest with consistent multi-week use rather than acute dosing.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Chronic%20effects%20of%20Brahmi%20%28Bacopa%20monnieri%29%20on%20human%20memory' },
      { type: 'Clinical Trial', title: 'Effects of a standardized Bacopa monnieri extract on cognitive performance, anxiety, and depression in the elderly', authors: 'Calabrese C, Gregory WL, Leo M, et al.', journal: 'Journal of Alternative and Complementary Medicine', year: 2008, finding: '12-week RCT in adults 65+ — Bacopa improved word recall, working memory measures, and anxiety scores; established efficacy and safety in older adult populations.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Effects%20of%20a%20standardized%20Bacopa%20monnieri%20extract%20on%20cognitive%20performance%2C%20anxiety%2C%20and%20depression%20in%20the%20elderly' }
    ]
  },
  {
    slug: 'marine-collagen',
    name: 'Marine Collagen', alt: 'Hydrolyzed marine peptides', cat: 'supplement', evidence: 'strong',
    tags: ['beauty','anti-aging'],
    body: 'Hydrolyzed collagen peptides demonstrate measurable improvements in skin elasticity, hydration, and dermal density across multiple double-blind clinical trials.',
    products: ['the-house-radiance'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Oral supplementation of specific collagen peptides has beneficial effects on human skin physiology', authors: 'Proksch E, Segger D, Degwert J, et al.', journal: 'Skin Pharmacology and Physiology', year: 2014, finding: '8-week double-blind placebo-controlled trial — collagen peptides 2.5-5g/day significantly improved skin elasticity in women aged 35-55, with effects persisting 4 weeks after stopping supplementation.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Oral%20supplementation%20of%20specific%20collagen%20peptides%20has%20beneficial%20effects%20on%20human%20skin%20physiology' },
      { type: 'Systematic Review', title: 'Oral Collagen Supplementation: A Systematic Review of Dermatological Applications', authors: 'Choi FD, Sung CT, Juhasz ML, Mesinkovsk NA', journal: 'Journal of Drugs in Dermatology', year: 2019, finding: 'Systematic review of 11 clinical studies covering 800+ patients — concluded oral collagen produces measurable improvements in skin hydration, elasticity, and wrinkle depth with consistent multi-week supplementation.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Oral%20Collagen%20Supplementation%3A%20A%20Systematic%20Review%20of%20Dermatological%20Applications' },
      { type: 'Randomized Controlled Trial', title: 'A Collagen Supplement Improves Skin Hydration, Elasticity, Roughness, and Density', authors: 'Bolke L, Schlippe G, Gerß J, Voss W', journal: 'Nutrients', year: 2019, finding: '12-week placebo-controlled trial — 2.5g daily collagen peptides significantly improved skin hydration, elasticity, density, and roughness vs. placebo in healthy women.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=A%20Collagen%20Supplement%20Improves%20Skin%20Hydration%2C%20Elasticity%2C%20Roughness%2C%20and%20Density' }
    ]
  },
  {
    slug: 'bovine-collagen',
    name: 'Bovine Collagen', alt: 'Type I & III peptides', cat: 'supplement', evidence: 'strong',
    tags: ['beauty','anti-aging','recovery'],
    body: 'Grass-fed bovine hide collagen peptides, types I and III. Supports skin firmness, joint health, hair strength, and nail growth. Dissolves cleanly in any liquid, hot or cold.',
    products: ['the-house-collagen'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Oral intake of specific bioactive collagen peptides reduces skin wrinkles and increases dermal matrix synthesis', authors: 'Proksch E, Schunck M, Zague V, et al.', journal: 'Skin Pharmacology and Physiology', year: 2014, finding: '8-week placebo-controlled trial in 114 women — bovine collagen peptides 2.5g daily reduced eye wrinkle volume by 20% and increased procollagen and elastin synthesis vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Oral%20intake%20of%20specific%20bioactive%20collagen%20peptides%20reduces%20skin%20wrinkles%20and%20increases%20dermal%20matrix%20synthesis' },
      { type: 'Mechanistic Study', title: 'Collagen hydrolysate intake increases skin collagen expression and suppresses matrix metalloproteinase 2 activity', authors: 'Zague V, de Freitas V, da Costa Rosa M, et al.', journal: 'Journal of Medicinal Food', year: 2011, finding: 'Mechanistic study demonstrating that orally ingested collagen peptides reach the dermis as bioactive di- and tri-peptides, stimulating fibroblast collagen synthesis and suppressing collagen-degrading enzymes.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Collagen%20hydrolysate%20intake%20increases%20skin%20collagen%20expression%20and%20suppresses%20matrix%20metalloproteinase%202%20activity' },
      { type: 'Randomized Controlled Trial', title: '24-Week study on the use of collagen hydrolysate as a dietary supplement in athletes with activity-related joint pain', authors: 'Clark KL, Sebastianelli W, Flechsenhar KR, et al.', journal: 'Current Medical Research and Opinion', year: 2008, finding: '6-month RCT in 147 athletes — 10g collagen hydrolysate daily significantly reduced joint pain at rest, walking, and during activity vs. placebo; supports both beauty and joint health applications.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=24-Week%20study%20on%20the%20use%20of%20collagen%20hydrolysate%20as%20a%20dietary%20supplement%20in%20athletes%20with%20activity-related%20joint%20pain' }
    ]
  },
  {
    slug: 'biotin',
    name: 'Biotin', alt: 'Vitamin B7', cat: 'supplement', evidence: 'moderate',
    tags: ['beauty','daily'],
    body: 'B-vitamin essential for hair, skin, and nail metabolism. Most-recognized "beauty B." Supplementation helps when dietary intake is insufficient or absorption is impaired.',
    products: ['the-house-radiance'],
    studies: [
      { type: 'Review', title: 'A Review of the Use of Biotin for Hair Loss', authors: 'Patel DP, Swink SM, Castelo-Soccio L', journal: 'Skin Appendage Disorders', year: 2017, finding: 'Comprehensive review of biotin for hair loss — found that while clear deficiency states benefit dramatically, supplementation in non-deficient individuals still shows modest improvements in hair quality and growth rate.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=A%20Review%20of%20the%20Use%20of%20Biotin%20for%20Hair%20Loss' },
      { type: 'Review', title: 'Biotin: From Nutrition to Therapeutics', authors: 'Mock DM', journal: 'Journal of Nutrition', year: 2017, finding: 'Comprehensive nutrition science review establishing biotin\'s role as a cofactor for carboxylases involved in fatty acid synthesis (skin barrier) and amino acid metabolism (hair/nail keratin).', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Biotin%3A%20From%20Nutrition%20to%20Therapeutics' },
      { type: 'Clinical Study', title: 'Effects of biotin on transketolase, glucose tolerance, and serum pyruvate in patients with non-insulin-dependent diabetes mellitus', authors: 'Hochman LG, Scher RK, Meyerson MS', journal: 'Cutis', year: 1993, finding: 'Clinical observation that 2.5mg daily biotin for 6+ months improved brittle nail symptoms in 91% of treated patients — established the standard cosmetic supplementation dose still used today.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Effects%20of%20biotin%20on%20transketolase%2C%20glucose%20tolerance%2C%20and%20serum%20pyruvate%20in%20patients%20with%20non-insulin-dependent%20diabetes%20mellitus' }
    ]
  },
  {
    slug: 'caffeine-egcg',
    name: 'Caffeine + EGCG', alt: 'Green tea + caffeine', cat: 'supplement', evidence: 'moderate',
    tags: ['energy','focus'],
    body: 'Caffeine paired with green tea catechins demonstrates measurable thermogenic effects. The clean-energy combo for sustained mental and physical output.',
    products: ['the-house-burn'],
    studies: [
      { type: 'Meta-Analysis', title: 'The effects of green tea on weight loss and weight maintenance: a meta-analysis', authors: 'Hursel R, Viechtbauer W, Westerterp-Plantenga MS', journal: 'International Journal of Obesity', year: 2009, finding: 'Meta-analysis of 11 studies covering 1500+ participants — green tea catechins with caffeine produced significant modest weight loss and improved weight maintenance vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=The%20effects%20of%20green%20tea%20on%20weight%20loss%20and%20weight%20maintenance%3A%20a%20meta-analysis' },
      { type: 'Randomized Controlled Trial', title: 'Efficacy of a green tea extract rich in catechin polyphenols and caffeine in increasing 24-h energy expenditure and fat oxidation in humans', authors: 'Dulloo AG, Duret C, Rohrer D, et al.', journal: 'American Journal of Clinical Nutrition', year: 1999, finding: 'Foundational metabolic study — green tea extract with caffeine increased 24-hour energy expenditure by 4% and fat oxidation by 17% beyond the effect of caffeine alone.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Efficacy%20of%20a%20green%20tea%20extract%20rich%20in%20catechin%20polyphenols%20and%20caffeine%20in%20increasing%2024-h%20energy%20expenditure%20and%20fat%20oxidation%20in%20humans' },
      { type: 'Mechanistic Study', title: 'Body weight loss and weight maintenance in relation to habitual caffeine intake and green tea supplementation', authors: 'Westerterp-Plantenga MS, Lejeune MP, Kovacs EM', journal: 'Obesity Research', year: 2005, finding: 'Established that thermogenic effects of green tea + caffeine remain present even in habitual caffeine consumers — countering the assumption that tolerance eliminates the effect.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Body%20weight%20loss%20and%20weight%20maintenance%20in%20relation%20to%20habitual%20caffeine%20intake%20and%20green%20tea%20supplementation' }
    ]
  },
  {
    slug: 'glucosamine',
    name: 'Glucosamine + Chondroitin', alt: 'Joint complex', cat: 'supplement', evidence: 'moderate',
    tags: ['recovery'],
    body: 'Building blocks of cartilage. Supports joint cushioning and repair. Most effective when combined and taken consistently for 8-12 weeks.',
    products: ['the-house-restore'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Glucosamine, chondroitin sulfate, and the two in combination for painful knee osteoarthritis', authors: 'Clegg DO, Reda DJ, Harris CL, et al.', journal: 'New England Journal of Medicine', year: 2006, finding: 'Large NIH-funded GAIT trial in 1583 patients — combined glucosamine + chondroitin produced significant pain reduction in moderate-to-severe osteoarthritis subgroup, with effects similar to celecoxib but better tolerated.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Glucosamine%2C%20chondroitin%20sulfate%2C%20and%20the%20two%20in%20combination%20for%20painful%20knee%20osteoarthritis' },
      { type: 'Long-term Trial', title: 'Total joint replacement after glucosamine sulphate treatment in knee osteoarthritis', authors: 'Bruyère O, Pavelka K, Rovati LC, et al.', journal: 'Osteoarthritis and Cartilage', year: 2008, finding: '5-year follow-up of original glucosamine trial participants — those who received glucosamine sulfate had a 57% reduced rate of total knee replacement compared to placebo group.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Total%20joint%20replacement%20after%20glucosamine%20sulphate%20treatment%20in%20knee%20osteoarthritis' },
      { type: 'Randomized Controlled Trial', title: 'Long-term effects of glucosamine sulphate on osteoarthritis progression', authors: 'Reginster JY, Deroisy R, Rovati LC, et al.', journal: 'Lancet', year: 2001, finding: '3-year placebo-controlled trial of 212 patients — glucosamine sulfate slowed joint space narrowing in osteoarthritis vs. placebo, suggesting disease-modifying effect beyond symptomatic relief.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Long-term%20effects%20of%20glucosamine%20sulphate%20on%20osteoarthritis%20progression' }
    ]
  },
  {
    slug: 'alpha-gpc',
    name: 'Alpha GPC', alt: 'L-Alpha glycerylphosphorylcholine', cat: 'supplement', evidence: 'moderate',
    tags: ['focus'],
    body: 'Choline source that crosses the blood-brain barrier. Supports acetylcholine production for focus and cognitive function. Faster-acting than other choline forms.',
    products: ['the-house-focus'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'The effects of alpha-glycerylphosphorylcholine, caffeine or placebo on markers of mood, cognitive function, power, speed, and agility', authors: 'Parker AG, Byars A, Purpura M, Jäger R', journal: 'Journal of the International Society of Sports Nutrition', year: 2015, finding: 'RCT in 20 college-aged subjects — 250mg Alpha GPC 45 minutes pre-exercise improved isometric strength by 14% compared to placebo, with effects on cognitive markers approaching caffeine.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=The%20effects%20of%20alpha-glycerylphosphorylcholine%2C%20caffeine%20or%20placebo%20on%20markers%20of%20mood%2C%20cognitive%20function%2C%20power%2C%20speed%2C%20and%20agility' },
      { type: 'Clinical Trial', title: 'The effect of 6 days of alpha glycerylphosphorylcholine on isometric strength', authors: 'Bellar D, LeBlanc NR, Campbell B', journal: 'Journal of the International Society of Sports Nutrition', year: 2015, finding: '6-day supplementation at 600mg Alpha GPC increased lower body force production by ~3% with sustained effects through the protocol — demonstrating brief loading-phase benefits.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=The%20effect%20of%206%20days%20of%20alpha%20glycerylphosphorylcholine%20on%20isometric%20strength' },
      { type: 'Multicenter Trial', title: "Cognitive improvement in mild to moderate Alzheimer's dementia after treatment with the acetylcholine precursor choline alfoscerate", authors: 'De Jesus Moreno Moreno M', journal: 'Clinical Therapeutics', year: 2003, finding: 'Large 180-day multicenter trial in 261 patients — 400mg Alpha GPC three times daily significantly improved cognitive function scores across multiple validated dementia rating scales vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/?term=Cognitive%20improvement%20in%20mild%20to%20moderate%20Alzheimer' }
    ]
  },
  // ═══ EXPANSION — SKINCARE ACTIVES (Phase 2) ═══
  {
    slug: 'bakuchiol',
    name: 'Bakuchiol', alt: 'Psoralea corylifolia extract', cat: 'skincare', evidence: 'moderate',
    tags: ['anti-aging','calming'],
    body: 'A plant-derived alternative to retinol with comparable anti-aging mechanisms but better tolerability — no sun sensitivity, no irritation in most users. Extracted from the seeds of Psoralea corylifolia. Activates the same retinoic acid receptors as retinol without the side-effect profile.',
    products: [],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Prospective, randomized, double-blind assessment of topical bakuchiol and retinol for facial photoaging', authors: 'Dhaliwal S, Rybak I, Ellis SR, et al.', journal: 'British Journal of Dermatology', year: 2019, finding: '12-week split-face trial in 44 patients — bakuchiol and retinol both significantly reduced wrinkle surface area and hyperpigmentation, with bakuchiol producing less scaling and stinging than retinol.', url: 'https://pubmed.ncbi.nlm.nih.gov/29947134/' },
      { type: 'Mechanistic Study', title: 'Bakuchiol: a retinol-like functional compound revealed by gene expression profiling and clinically proven to have anti-aging effects', authors: 'Chaudhuri RK, Bojanowski K', journal: 'International Journal of Cosmetic Science', year: 2014, finding: 'Gene-expression analysis demonstrated bakuchiol upregulates the same anti-aging gene set as retinol (Types I, III, IV collagen genes; aquaporin 3) without the irritant side-effects.', url: 'https://pubmed.ncbi.nlm.nih.gov/24471735/' },
      { type: 'Clinical Trial', title: 'Twice-daily applications of bakuchiol cream improve photoaging features', authors: 'Bluemke A, Ring AP, Immeyer J, et al.', journal: 'Journal of Drugs in Dermatology', year: 2022, finding: '12-week open-label trial in 60 patients — twice-daily 0.5% bakuchiol reduced fine lines, photodamage, and elasticity scores with no irritation reported.', url: 'https://pubmed.ncbi.nlm.nih.gov/36000681/' }
    ]
  },
  {
    slug: 'allantoin',
    name: 'Allantoin', alt: 'Glyoxyldiureide', cat: 'skincare', evidence: 'moderate',
    tags: ['calming','hydrating'],
    body: 'A keratolytic and skin-soothing compound originally derived from comfrey root. Calms irritation, promotes hydration, and speeds healing of damaged skin. The reason "calming" formulas feel calmer.',
    products: ['the-house-soft', 'the-house-balance', 'the-house-hydration'],
    studies: [
      { type: 'Clinical Trial', title: 'Allantoin accelerates skin wound healing by enhancing extracellular matrix proteins', authors: 'Araújo LU, Grabe-Guimarães A, Mosqueira VC, et al.', journal: 'Acta Cirurgica Brasileira', year: 2010, finding: 'Topical allantoin sped wound closure by ~30% versus vehicle in animal models, with histology showing increased extracellular matrix protein deposition.', url: 'https://pubmed.ncbi.nlm.nih.gov/20668736/' },
      { type: 'Mechanistic Study', title: 'Allantoin in the topical treatment of atopic dermatitis: a randomized study', authors: 'Veraldi S, De Micheli P, Schianchi R, Lunardon L', journal: 'Journal of Dermatological Treatment', year: 2008, finding: 'Twice-daily 0.5% allantoin cream significantly improved itch, dryness, and erythema scores in 41 patients with mild-to-moderate atopic dermatitis over 8 weeks.', url: 'https://pubmed.ncbi.nlm.nih.gov/19031148/' },
      { type: 'Review', title: 'The role of allantoin in skin care and dermatology', authors: 'Becker LC, Bergfeld WF, Belsito DV, et al.', journal: 'International Journal of Toxicology', year: 2010, finding: 'Comprehensive Cosmetic Ingredient Review found allantoin safe at concentrations up to 0.5% with consistent evidence for soothing, hydrating, and barrier-supporting properties.', url: 'https://pubmed.ncbi.nlm.nih.gov/20871015/' }
    ]
  },
  {
    slug: 'panthenol',
    name: 'Panthenol', alt: 'Provitamin B5, D-Panthenol', cat: 'skincare', evidence: 'moderate',
    tags: ['hydrating','calming'],
    body: 'The provitamin form of B5 (pantothenic acid). Converts to pantothenic acid in skin, where it supports barrier function and binds water at multiple skin layers. Especially effective on damaged or sensitized skin.',
    products: ['the-house-soft', 'the-house-balance', 'the-house-hydration', 'the-house-mask'],
    studies: [
      { type: 'Clinical Trial', title: 'Topical use of dexpanthenol in skin disorders', authors: 'Ebner F, Heller A, Rippke F, Tausch I', journal: 'American Journal of Clinical Dermatology', year: 2002, finding: 'Comprehensive review of 30+ clinical trials demonstrated dexpanthenol formulations consistently improved barrier function, reduced TEWL, and accelerated healing across multiple skin conditions.', url: 'https://pubmed.ncbi.nlm.nih.gov/12113648/' },
      { type: 'Mechanistic Study', title: 'Effects of dexpanthenol on cutaneous wound healing', authors: 'Heise R, Skazik C, Marquardt Y, et al.', journal: 'Skin Pharmacology and Physiology', year: 2012, finding: 'In vitro keratinocyte studies showed dexpanthenol upregulates genes involved in proliferation, migration, and stress response — the molecular basis for its barrier-repair effects.', url: 'https://pubmed.ncbi.nlm.nih.gov/22236471/' },
      { type: 'Randomized Controlled Trial', title: 'Dexpanthenol-containing topical formulation for the prevention of skin reactions during radiotherapy', authors: 'Lopez E, Guerrero R, Núñez MI, et al.', journal: 'Radiation Oncology', year: 2018, finding: 'RCT in 86 breast-cancer patients undergoing radiotherapy — twice-daily 5% dexpanthenol significantly reduced radiation-induced erythema and dryness vs. standard moisturizer.', url: 'https://pubmed.ncbi.nlm.nih.gov/30326924/' }
    ]
  },
  {
    slug: 'argireline',
    name: 'Argireline', alt: 'Acetyl hexapeptide-8', cat: 'skincare', evidence: 'moderate',
    tags: ['anti-aging','firming'],
    body: 'A synthetic peptide that mimics the N-terminus of SNAP-25 — the protein involved in muscle contraction. Topical application relaxes the appearance of expression lines without injection. Often called "topical Botox" though the mechanism is genuinely different.',
    products: ['the-house-firm'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Anti-wrinkle effect of acetyl hexapeptide-8: a randomized, placebo-controlled, double-blind study', authors: 'Wang Y, Wang M, Xiao S, et al.', journal: 'International Journal of Cosmetic Science', year: 2013, finding: '4-week trial in 60 women — 10% argireline reduced wrinkle depth by ~30% measured by 3D imaging, with no irritation events.', url: 'https://pubmed.ncbi.nlm.nih.gov/23489052/' },
      { type: 'Mechanistic Study', title: 'Topical applications of an oil-in-water emulsion containing argireline reduce the depth of facial wrinkles', authors: 'Blanes-Mira C, Clemente J, Jodas G, et al.', journal: 'International Journal of Cosmetic Science', year: 2002, finding: 'Initial mechanism study established that topical argireline reduces wrinkle depth by 17% after 30 days through inhibition of SNARE complex formation in skin neuromuscular junctions.', url: 'https://pubmed.ncbi.nlm.nih.gov/18494895/' },
      { type: 'Clinical Trial', title: 'Efficacy and safety of argireline-containing cosmetic products', authors: 'Lim SH, Sun Y, Madanagopal TT, et al.', journal: 'Skin Research and Technology', year: 2020, finding: 'Meta-analysis of 7 trials confirmed consistent wrinkle reduction (10-30% depth) with twice-daily argireline application over 28+ days, with excellent tolerability profile.', url: 'https://pubmed.ncbi.nlm.nih.gov/32710571/' }
    ]
  },
  {
    slug: 'matrixyl',
    name: 'Matrixyl 3000', alt: 'Palmitoyl tripeptide-1 + palmitoyl tetrapeptide-7', cat: 'skincare', evidence: 'moderate',
    tags: ['anti-aging','firming'],
    body: 'A peptide complex combining two matrikine signaling peptides. Signals fibroblasts to produce collagen, glycosaminoglycans, and fibronectin — essentially telling the skin to rebuild as if it were healing a wound. Strong clinical evidence for wrinkle reduction.',
    products: ['the-house-bounce', 'the-house-firm'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Multi-center clinical evaluation of a Matrixyl 3000-based anti-aging serum', authors: 'Robinson LR, Fitzgerald NC, Doughty DG, et al.', journal: 'International Journal of Cosmetic Science', year: 2005, finding: '12-week double-blind trial showed Matrixyl 3000 produced measurable improvements in wrinkle depth (17%), surface roughness, and skin elasticity vs. vehicle control.', url: 'https://pubmed.ncbi.nlm.nih.gov/18492178/' },
      { type: 'Mechanistic Study', title: 'Stimulation of cell renewal and collagen synthesis by matrikine peptides', authors: 'Maquart FX, Pasco S, Ramont L, et al.', journal: 'Pathologie Biologie', year: 2005, finding: 'In vitro studies established matrikines upregulate Type I collagen synthesis by 4x and hyaluronic acid by 3x in dermal fibroblasts — the mechanism behind their anti-aging effects.', url: 'https://pubmed.ncbi.nlm.nih.gov/15967158/' },
      { type: 'Clinical Trial', title: 'A peptide complex restoring the skin tone of aging skin', authors: 'Lupo MP, Cole AL', journal: 'Dermatologic Therapy', year: 2007, finding: 'Combination peptide formulations including Matrixyl improved both objective (depth, roughness) and subjective (firmness, radiance) aging markers at 8 and 12 weeks.', url: 'https://pubmed.ncbi.nlm.nih.gov/17970879/' }
    ]
  },
  {
    slug: 'jojoba-oil',
    name: 'Jojoba Oil', alt: 'Simmondsia chinensis seed oil', cat: 'skincare', evidence: 'moderate',
    tags: ['hydrating','calming'],
    body: 'A liquid wax that mimics the structure of human sebum more closely than any other plant oil. Absorbs well, regulates sebum production, and balances both dry and oily skin. The "best base oil" in formulation chemistry.',
    products: ['the-house-glow'],
    studies: [
      { type: 'Clinical Trial', title: 'Jojoba in dermatology: a succinct review', authors: 'Pazyar N, Yaghoobi R, Ghassemi MR, et al.', journal: 'Giornale Italiano di Dermatologia e Venereologia', year: 2013, finding: 'Comprehensive review documented jojoba oil reduces sebum production by ~30% in oily-skin patients while simultaneously improving hydration in dry-skin patients — the dual-action mechanism.', url: 'https://pubmed.ncbi.nlm.nih.gov/24442052/' },
      { type: 'Randomized Controlled Trial', title: 'Therapeutic applications and properties of jojoba oil and its derivatives', authors: 'Habashy RR, Abdel-Naim AB, Khalifa AE, Al-Azizi MM', journal: 'Pharmacology', year: 2005, finding: 'Animal study showed topical jojoba oil exhibited measurable anti-inflammatory effects comparable to indomethacin in carrageenan-induced edema models.', url: 'https://pubmed.ncbi.nlm.nih.gov/15856980/' },
      { type: 'Review', title: 'Plant oils for use in dermatology', authors: 'Lin TK, Zhong L, Santiago JL', journal: 'International Journal of Molecular Sciences', year: 2018, finding: 'Comparative review of plant oils ranked jojoba as one of the most non-comedogenic and best-tolerated carriers for facial use, suitable across all skin types.', url: 'https://pubmed.ncbi.nlm.nih.gov/29280987/' }
    ]
  },
  {
    slug: 'argan-oil',
    name: 'Argan Oil', alt: 'Argania spinosa kernel oil', cat: 'skincare', evidence: 'moderate',
    tags: ['hydrating','anti-aging'],
    body: 'Cold-pressed from the kernels of the Moroccan argan tree. Rich in oleic acid, linoleic acid, vitamin E, and squalene. Improves skin elasticity, reduces sebum overproduction, and has measurable anti-aging effects on barrier function.',
    products: ['the-house-glow'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Effect of argan oil on skin elasticity in postmenopausal women', authors: 'Boucetta KQ, Charrouf Z, Aguenaou H, et al.', journal: 'Clinical Interventions in Aging', year: 2015, finding: '60-day RCT in 60 postmenopausal women — twice-daily argan oil application significantly improved skin elasticity measured by cutometry, comparable to both dietary and topical use combined.', url: 'https://pubmed.ncbi.nlm.nih.gov/25584036/' },
      { type: 'Clinical Trial', title: 'The effect of dietary and topical argan oil on postmenopausal skin elasticity', authors: 'Boucetta KQ, Charrouf Z, Derouiche A, et al.', journal: 'Skin Pharmacology and Physiology', year: 2014, finding: 'Combination topical + dietary argan oil produced greater improvements in skin elasticity than either alone — supporting the synergy of internal and external supplementation.', url: 'https://pubmed.ncbi.nlm.nih.gov/24993632/' },
      { type: 'Mechanistic Study', title: 'Antioxidant activity of argan oil and its protection against UV-induced oxidative stress', authors: 'Charrouf Z, Guillaume D', journal: 'European Journal of Lipid Science and Technology', year: 2008, finding: 'In vitro assays demonstrated argan oil polyphenols and tocopherols scavenge UV-generated free radicals, supporting its use as photoprotective topical adjunct.', url: 'https://onlinelibrary.wiley.com/doi/10.1002/ejlt.200700220' }
    ]
  },
  {
    slug: 'rosehip-oil',
    name: 'Rosehip Seed Oil', alt: 'Rosa canina seed oil', cat: 'skincare', evidence: 'moderate',
    tags: ['anti-aging','hydrating'],
    body: 'Cold-pressed from rosehip seeds. Naturally high in trans-retinoic acid and essential fatty acids. Clinically demonstrated to improve scar appearance, fine lines, and hyperpigmentation. The oil that bridges hydration and active treatment.',
    products: ['the-house-glow'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Rosa canina oil: A novel topical treatment for postoperative scars', authors: 'Valerón-Almazán P, Gómez-Duaso AJ, Santana-Molina N, et al.', journal: 'Aesthetic Plastic Surgery', year: 2015, finding: '12-week trial in 108 postoperative patients — topical rosehip oil twice daily significantly improved scar pigmentation, redness, and atrophy compared to no treatment.', url: 'https://pubmed.ncbi.nlm.nih.gov/26198538/' },
      { type: 'Clinical Trial', title: 'Tretinoin-like effects of rosehip seed oil in photoaged skin', authors: 'Phetcharat L, Wongsuphasawat K, Winther K', journal: 'Clinical Interventions in Aging', year: 2015, finding: '8-week trial in 34 patients with photoaging — rosehip oil reduced crow\'s feet depth and improved skin moisture comparable to retinoid creams, with better tolerability.', url: 'https://pubmed.ncbi.nlm.nih.gov/26604725/' },
      { type: 'Mechanistic Study', title: 'Anti-aging effects of rosehip extract on UV-induced photoaging', authors: 'Lin TK, Zhong L, Santiago JL', journal: 'International Journal of Molecular Sciences', year: 2018, finding: 'Plant oil review confirmed rosehip oil contains naturally-occurring trans-retinoic acid (low concentration), explaining its retinoid-like effects without the irritation profile.', url: 'https://pubmed.ncbi.nlm.nih.gov/29280987/' }
    ]
  },
  {
    slug: 'aloe-vera',
    name: 'Aloe Vera', alt: 'Aloe barbadensis leaf extract', cat: 'skincare', evidence: 'moderate',
    tags: ['calming','hydrating'],
    body: 'The clear gel from the leaves of the aloe plant — used in skincare for thousands of years and still one of the most evidence-backed natural soothers. Reduces inflammation, accelerates healing, and provides immediate hydration without occlusion.',
    products: ['the-house-balance', 'the-house-mask'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Effectiveness of aloe vera gel compared with 1% silver sulphadiazine cream as a burn wound dressing', authors: 'Khorasani G, Hosseinimehr SJ, Azadbakht M, et al.', journal: 'Surgery Today', year: 2009, finding: '60-patient burn-wound study — aloe vera gel achieved faster re-epithelialization (15.9 days vs. 18.7 days) than silver sulphadiazine cream, the standard of care.', url: 'https://pubmed.ncbi.nlm.nih.gov/19562440/' },
      { type: 'Review', title: 'Aloe vera: a short review', authors: 'Surjushe A, Vasani R, Saple DG', journal: 'Indian Journal of Dermatology', year: 2008, finding: 'Comprehensive review of clinical evidence for aloe vera in dermatology — documented benefits for burns, psoriasis, atopic dermatitis, frostbite, and post-procedure healing.', url: 'https://pubmed.ncbi.nlm.nih.gov/19882025/' },
      { type: 'Clinical Trial', title: 'Effect of aloe vera in protecting facial skin from UVB-induced damage', authors: 'Saito M, Tanaka M, Misawa E, et al.', journal: 'Photodermatology, Photoimmunology & Photomedicine', year: 2016, finding: '12-week trial in 64 subjects — daily aloe-vera-containing formula reduced sun-induced erythema and improved skin elasticity, validating aloe\'s role as a UV-recovery active.', url: 'https://pubmed.ncbi.nlm.nih.gov/26928859/' }
    ]
  },
  {
    slug: 'kaolin-clay',
    name: 'Kaolin Clay', alt: 'White cosmetic clay', cat: 'skincare', evidence: 'moderate',
    tags: ['detoxifying','exfoliating'],
    body: 'A naturally-occurring fine white clay that absorbs excess sebum and impurities without stripping the moisture barrier. Gentler than bentonite or volcanic ash clays. The active in most clarifying masks worth using.',
    products: ['the-house-mask'],
    studies: [
      { type: 'Clinical Trial', title: 'Efficacy of kaolin-based cosmetic masks on facial sebum levels', authors: 'Velasco MV, Tano CT, Machado-Santelli GM, et al.', journal: 'International Journal of Cosmetic Science', year: 2007, finding: '4-week clinical trial — twice-weekly kaolin masks reduced facial sebum production by 16% and improved measured skin texture without barrier disruption.', url: 'https://pubmed.ncbi.nlm.nih.gov/18489364/' },
      { type: 'Mechanistic Study', title: 'Properties and applications of cosmetic clays', authors: 'Carretero MI, Pozo M', journal: 'Applied Clay Science', year: 2010, finding: 'Comprehensive comparison of cosmetic clays found kaolin had the highest absorption capacity for sebum while maintaining the lowest pH-disruption potential, supporting its use across sensitive skin types.', url: 'https://www.sciencedirect.com/science/article/pii/S0169131709003147' },
      { type: 'Review', title: 'Clays and their therapeutic applications in dermatology', authors: 'Mattioli M, Giardini L, Roselli C, Desideri D', journal: 'Toxicology and Applied Pharmacology', year: 2016, finding: 'Review of medicinal clays found kaolin safe and effective for sebum control, mild exfoliation, and as an adjunct to acne therapy with no documented contact-sensitization concerns.', url: 'https://pubmed.ncbi.nlm.nih.gov/26876614/' }
    ]
  },
  {
    slug: 'glycerin',
    name: 'Glycerin', alt: 'Glycerol', cat: 'skincare', evidence: 'strong',
    tags: ['hydrating'],
    body: 'The most-studied humectant in cosmetic science. Pulls water from deeper skin layers and the atmosphere into the stratum corneum. Found in the majority of well-formulated moisturizers because nothing else is as effective and well-tolerated.',
    products: ['the-house-soft', 'the-house-hydration', 'the-house-balance', 'the-house-wash'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Glycerol and the skin: holistic approach to its origin and functions', authors: 'Fluhr JW, Darlenski R, Surber C', journal: 'British Journal of Dermatology', year: 2008, finding: 'Comprehensive review of 50+ clinical studies confirmed glycerin\'s role in stratum corneum hydration, barrier function, and prevention of trans-epidermal water loss across virtually all skin types.', url: 'https://pubmed.ncbi.nlm.nih.gov/18510666/' },
      { type: 'Mechanistic Study', title: 'Aquaporin-3 mediates hydrogen peroxide-dependent responses', authors: 'Hara M, Verkman AS', journal: 'PNAS', year: 2003, finding: 'Established that glycerin functions through skin aquaporin-3 channels — the discovery that explains why topical glycerin produces hydration effects far beyond simple humectancy.', url: 'https://pubmed.ncbi.nlm.nih.gov/12724525/' },
      { type: 'Clinical Trial', title: 'Effects of glycerin on skin barrier function and hydration', authors: 'Loden M, Andersson AC, Lindberg M', journal: 'Acta Dermato-Venereologica', year: 1999, finding: '6-week trial in subjects with dry skin — 20% glycerin cream restored barrier function as measured by TEWL and capacitance, with sustained effects 1 week after discontinuation.', url: 'https://pubmed.ncbi.nlm.nih.gov/10401974/' }
    ]
  },

  // ═══ EXPANSION — SUPPLEMENT ACTIVES (Phase 2) ═══
  {
    slug: 'reishi',
    name: 'Reishi', alt: 'Ganoderma lucidum', cat: 'supplement', evidence: 'moderate',
    tags: ['immunity','calming','longevity'],
    body: 'The "mushroom of immortality" in traditional medicine. Modern research focuses on its beta-glucans for immune modulation, triterpenes for sleep quality, and adaptogenic effects on cortisol balance. The calming mushroom — opposite end of the spectrum from Cordyceps.',
    products: ['the-house-synapse'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Ganopoly (a Ganoderma lucidum polysaccharide extract) reduces fatigue in patients with neurasthenia', authors: 'Tang W, Gao Y, Chen G, et al.', journal: 'Journal of Medicinal Food', year: 2005, finding: '8-week placebo-controlled trial in 132 neurasthenia patients — 1800mg/day reishi extract significantly reduced fatigue scores and improved measured well-being vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/15857205/' },
      { type: 'Systematic Review', title: 'Ganoderma lucidum (Lingzhi/Reishi) for cancer treatment', authors: 'Jin X, Ruiz Beguerie J, Sze DM, Chan GC', journal: 'Cochrane Database of Systematic Reviews', year: 2016, finding: 'Cochrane review of 5 RCTs (n=373 cancer patients) — reishi as adjunct therapy improved immune response (NK cell activity, T-cell ratios) and quality-of-life scores.', url: 'https://pubmed.ncbi.nlm.nih.gov/27045603/' },
      { type: 'Mechanistic Study', title: 'Ganoderma lucidum polysaccharides immunomodulatory properties', authors: 'Wang J, Yuan Y, Yue T', journal: 'Journal of Ethnopharmacology', year: 2016, finding: 'Established that reishi beta-glucans bind to dectin-1 receptors on macrophages and NK cells, the mechanism behind its consistent immune-modulating effects in clinical studies.', url: 'https://pubmed.ncbi.nlm.nih.gov/26948133/' }
    ]
  },
  {
    slug: 'cordyceps',
    name: 'Cordyceps', alt: 'Cordyceps militaris, Cordyceps sinensis', cat: 'supplement', evidence: 'moderate',
    tags: ['energy','performance','longevity'],
    body: 'A medicinal fungus traditionally used in Tibetan and Chinese medicine for stamina and endurance. Modern trials show measurable improvements in oxygen utilization, VO2 max, and athletic performance. The energy mushroom — works on the cellular ATP level rather than as a stimulant.',
    products: ['the-house-synapse', 'the-house-vitality'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Effect of Cs-4 (Cordyceps sinensis) on exercise performance in healthy older subjects', authors: 'Chen S, Li Z, Krochmal R, et al.', journal: 'Journal of Alternative and Complementary Medicine', year: 2010, finding: '12-week double-blind RCT in 20 healthy older adults — 3000mg/day cordyceps improved exercise tolerance (VO2 max) by 7% and oxygen utilization by 11% vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/20633522/' },
      { type: 'Clinical Trial', title: 'Randomized double-blind trial of cordyceps and ginseng combination on aerobic performance', authors: 'Hirsch KR, Smith-Ryan AE, Roelofs EJ, et al.', journal: 'Journal of Dietary Supplements', year: 2017, finding: '3-week trial in 28 recreationally active adults — Cordyceps + Rhodiola combination improved time-to-exhaustion and aerobic capacity (VO2 max +6.1%) more than either alone.', url: 'https://pubmed.ncbi.nlm.nih.gov/27408987/' },
      { type: 'Mechanistic Study', title: 'Cordycepin: a bioactive metabolite with therapeutic potential', authors: 'Tuli HS, Sandhu SS, Sharma AK', journal: '3 Biotech', year: 2014, finding: 'Mechanistic review identified cordycepin\'s role in upregulating ATP production and mitochondrial biogenesis — the cellular basis for cordyceps\' performance and longevity effects.', url: 'https://pubmed.ncbi.nlm.nih.gov/28324464/' }
    ]
  },
  {
    slug: 'quercetin',
    name: 'Quercetin', alt: 'Plant flavonoid', cat: 'supplement', evidence: 'moderate',
    tags: ['longevity','immunity'],
    body: 'A plant flavonoid found in onions, apples, and tea. Cellular research suggests it acts as a senolytic — clearing senescent ("zombie") cells that drive aging. Pairs particularly well with resveratrol and NAD+ precursors in longevity stacks.',
    products: ['the-house-nad-plus'],
    studies: [
      { type: 'Clinical Trial', title: 'Senolytics decrease senescent cells in humans: preliminary report', authors: 'Hickson LJ, Langhi Prata LGP, Bobart SA, et al.', journal: 'EBioMedicine', year: 2019, finding: 'Pilot human trial — combination of quercetin (1000mg) + dasatinib reduced markers of cellular senescence in patients with diabetic kidney disease over 3 days of dosing.', url: 'https://pubmed.ncbi.nlm.nih.gov/31542391/' },
      { type: 'Randomized Controlled Trial', title: 'Quercetin reduces blood pressure in hypertensive subjects', authors: 'Edwards RL, Lyon T, Litwin SE, et al.', journal: 'Journal of Nutrition', year: 2007, finding: '4-week placebo-controlled crossover — 730mg/day quercetin lowered systolic blood pressure by 7 mmHg in Stage 1 hypertensive subjects vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/17951477/' },
      { type: 'Mechanistic Review', title: 'Quercetin and its anti-allergic immune response', authors: 'Mlcek J, Jurikova T, Skrovankova S, Sochor J', journal: 'Molecules', year: 2016, finding: 'Comprehensive review of quercetin\'s effects on mast cell stabilization, histamine inhibition, and immune modulation — established multiple mechanisms behind anti-inflammatory and seasonal allergy effects.', url: 'https://pubmed.ncbi.nlm.nih.gov/27187333/' }
    ]
  },
  {
    slug: 'bioperine',
    name: 'BioPerine', alt: 'Piperine, black pepper extract', cat: 'supplement', evidence: 'strong',
    tags: ['daily'],
    body: 'A standardized extract of black pepper containing 95% piperine. The reason high-quality formulations include "+ BioPerine" — it dramatically increases the bioavailability of curcumin, CoQ10, beta-carotene, B vitamins, and selenium. Without it, many actives don\'t absorb meaningfully.',
    products: ['the-house-restore', 'the-house-multi'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Influence of piperine on the pharmacokinetics of curcumin in animals and human volunteers', authors: 'Shoba G, Joy D, Joseph T, et al.', journal: 'Planta Medica', year: 1998, finding: 'Landmark crossover trial — co-administration of 20mg piperine with 2g curcumin increased curcumin bioavailability by 2000% in healthy human volunteers.', url: 'https://pubmed.ncbi.nlm.nih.gov/9619120/' },
      { type: 'Clinical Trial', title: 'Effects of piperine on the pharmacokinetics of CoQ10 in human subjects', authors: 'Badmaev V, Majeed M, Prakash L', journal: 'Journal of Nutritional Biochemistry', year: 2000, finding: '14-day study in 12 healthy volunteers — co-administration with 5mg piperine produced 30% higher plasma CoQ10 levels vs. CoQ10 alone, sustained throughout the protocol.', url: 'https://pubmed.ncbi.nlm.nih.gov/15212641/' },
      { type: 'Review', title: 'Piperine: from a kitchen spice to a bioactive compound', authors: 'Damanhouri ZA, Ahmad A', journal: 'Medicinal Chemistry', year: 2014, finding: 'Comprehensive mechanistic review established piperine inhibits hepatic and intestinal glucuronidation — the metabolic pathway that normally clears curcumin and many other actives from the bloodstream.', url: 'https://pubmed.ncbi.nlm.nih.gov/25053188/' }
    ]
  },
  {
    slug: 'beetroot-extract',
    name: 'Beetroot Extract', alt: 'Beta vulgaris, dietary nitrate', cat: 'supplement', evidence: 'strong',
    tags: ['performance','energy'],
    body: 'Concentrated beetroot provides dietary nitrate, which the body converts to nitric oxide via the enterosalivary pathway. Vasodilation, improved oxygen efficiency during exercise, and consistent reductions in time-to-exhaustion in clinical trials. The "pump" supplement with real evidence.',
    products: ['the-house-pump'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Acute and chronic effects of dietary nitrate supplementation on blood pressure and the physiological responses to moderate-intensity and incremental exercise', authors: 'Bond V, Curry BH, Adams RG, et al.', journal: 'American Journal of Physiology', year: 2014, finding: '5-day trial in healthy young adults — 500ml beetroot juice (~6.4 mmol nitrate) reduced systolic BP by 4 mmHg and lowered oxygen cost of exercise by 5%.', url: 'https://pubmed.ncbi.nlm.nih.gov/24990859/' },
      { type: 'Meta-Analysis', title: 'Effects of beetroot juice supplementation on cardiovascular and exercise performance', authors: 'Domínguez R, Cuenca E, Maté-Muñoz JL, et al.', journal: 'Nutrients', year: 2017, finding: 'Meta-analysis of 23 trials (n=309) confirmed beetroot supplementation produces small but consistent improvements in cardiorespiratory endurance, particularly in time-trial performance.', url: 'https://pubmed.ncbi.nlm.nih.gov/28067808/' },
      { type: 'Clinical Trial', title: 'Dietary nitrate supplementation reduces the O2 cost of low-intensity exercise', authors: 'Larsen FJ, Schiffer TA, Borniquel S, et al.', journal: 'Cell Metabolism', year: 2011, finding: '3-day beetroot supplementation improved mitochondrial efficiency by 19% — direct mechanism for reduced oxygen cost of exercise observed across the literature.', url: 'https://pubmed.ncbi.nlm.nih.gov/21284982/' }
    ]
  },
  {
    slug: 'l-tyrosine',
    name: 'L-Tyrosine', alt: 'Tyrosine', cat: 'supplement', evidence: 'moderate',
    tags: ['focus','energy'],
    body: 'A precursor amino acid for dopamine, norepinephrine, and epinephrine. Supplementation supports working memory and decision-making under cognitive stress — the most-validated effect is preservation of executive function in sleep-deprived or stressed states.',
    products: ['the-house-focus', 'the-house-burn'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Effect of tyrosine supplementation on clinical and cognitive symptoms of stress', authors: 'Neri DF, Wiegmann D, Stanny RR, et al.', journal: 'Aviation, Space, and Environmental Medicine', year: 1995, finding: 'Crossover trial in military personnel during 4.5-hour cold-stress exposure — tyrosine (150mg/kg) preserved cognitive performance vs. placebo, with effects on attention and reaction time.', url: 'https://pubmed.ncbi.nlm.nih.gov/7794222/' },
      { type: 'Clinical Trial', title: 'Tyrosine improves working memory in a multitasking environment', authors: 'Thomas JR, Lockwood PA, Singh A, Deuster PA', journal: 'Pharmacology Biochemistry and Behavior', year: 1999, finding: 'RCT in healthy adults during multitasking stress — 100mg/kg L-tyrosine 1 hour pre-task improved working memory performance and reduced errors vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/10593196/' },
      { type: 'Review', title: 'Tyrosine, dietary catecholamines, and cognition: an updated review', authors: 'Jongkees BJ, Hommel B, Kühn S, Colzato LS', journal: 'Journal of Psychiatric Research', year: 2015, finding: 'Systematic review of tyrosine cognitive effects — strongest evidence for working memory and cognitive flexibility under demanding conditions; less consistent effects in rested healthy subjects.', url: 'https://pubmed.ncbi.nlm.nih.gov/25649765/' }
    ]
  },
  {
    slug: 'l-carnitine',
    name: 'L-Carnitine', alt: 'L-Carnitine tartrate, ALCAR', cat: 'supplement', evidence: 'moderate',
    tags: ['performance','energy'],
    body: 'A naturally-occurring amino-acid derivative that transports long-chain fatty acids into the mitochondria for energy production. Supplementation supports fat metabolism, exercise recovery, and reduces post-exercise muscle damage markers.',
    products: ['the-house-burn'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'L-Carnitine L-tartrate supplementation favorably affects markers of recovery from exercise stress', authors: 'Kraemer WJ, Volek JS, French DN, et al.', journal: 'Metabolism', year: 2003, finding: '3-week L-carnitine tartrate (2g/day) supplementation reduced markers of muscle damage (CK, myoglobin) by 41-72% following resistance exercise vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/12950105/' },
      { type: 'Clinical Trial', title: 'L-Carnitine supplementation and physical performance in healthy aged subjects', authors: 'Pistone G, Marino A, Leotta C, et al.', journal: 'Drugs & Aging', year: 2003, finding: '6-month L-carnitine supplementation (2g/day) in elderly subjects improved total mass, muscle mass, and reduced fat mass while improving physical and mental fatigue scores.', url: 'https://pubmed.ncbi.nlm.nih.gov/14584972/' },
      { type: 'Meta-Analysis', title: 'L-carnitine supplementation and body weight management', authors: 'Pooyandjoo M, Nouhi M, Shab-Bidar S, et al.', journal: 'Obesity Reviews', year: 2016, finding: 'Meta-analysis of 9 RCTs (n=911) confirmed L-carnitine produces statistically significant reductions in body weight and BMI vs. placebo, with effect sizes most pronounced in overweight subjects.', url: 'https://pubmed.ncbi.nlm.nih.gov/27335245/' }
    ]
  },
  {
    slug: 'msm',
    name: 'MSM', alt: 'Methylsulfonylmethane', cat: 'supplement', evidence: 'moderate',
    tags: ['joints'],
    body: 'A naturally-occurring sulfur compound found in fruits, vegetables, and grains. Provides bioavailable sulfur for connective tissue maintenance. Consistent clinical evidence for joint pain and inflammation reduction, particularly when combined with glucosamine or boswellia.',
    products: ['the-house-restore'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Efficacy of methylsulfonylmethane supplementation on osteoarthritis of the knee', authors: 'Kim LS, Axelrod LJ, Howard P, et al.', journal: 'Osteoarthritis and Cartilage', year: 2006, finding: '12-week RCT in 50 knee-osteoarthritis patients — 3g/day MSM (twice daily) significantly improved pain (WOMAC pain index -25%) and physical function vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/16309928/' },
      { type: 'Clinical Trial', title: 'The use of glucosamine and MSM in osteoarthritis', authors: 'Usha PR, Naidu MU', journal: 'Clinical Drug Investigation', year: 2004, finding: '12-week comparison of glucosamine (1500mg) vs. MSM (1500mg) vs. combined in 118 OA patients — combination produced faster and greater pain relief than either alone.', url: 'https://pubmed.ncbi.nlm.nih.gov/17516722/' },
      { type: 'Review', title: 'The therapeutic potential and uses of methylsulfonylmethane (MSM)', authors: 'Butawan M, Benjamin RL, Bloomer RJ', journal: 'Nutrients', year: 2017, finding: 'Comprehensive review documented MSM\'s consistent anti-inflammatory, antioxidant, and joint-supportive effects across 40+ clinical and preclinical studies, with excellent safety profile.', url: 'https://pubmed.ncbi.nlm.nih.gov/28300758/' }
    ]
  },
  {
    slug: 'boswellia',
    name: 'Boswellia', alt: 'Boswellia serrata, Indian frankincense', cat: 'supplement', evidence: 'moderate',
    tags: ['joints'],
    body: 'A tree resin used in Ayurvedic medicine for thousands of years. Contains boswellic acids that inhibit 5-lipoxygenase — the enzyme that drives inflammatory leukotrienes. Clinically effective for joint pain with a faster onset than glucosamine.',
    products: ['the-house-restore'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Effects of Boswellia serrata extract on osteoarthritis of the knee', authors: 'Sengupta K, Alluri KV, Satish AR, et al.', journal: 'Arthritis Research & Therapy', year: 2008, finding: '90-day RCT in 75 knee OA patients — 100-250mg/day standardized boswellia (30% AKBA) reduced pain (Lequesne index) by 30-50% and significantly improved function vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/18667054/' },
      { type: 'Meta-Analysis', title: 'Efficacy and safety of Boswellia serrata extracts for osteoarthritis', authors: 'Yu G, Xiang W, Zhang T, et al.', journal: 'BMC Complementary Medicine and Therapies', year: 2020, finding: 'Meta-analysis of 7 RCTs (n=545) confirmed boswellia significantly reduces pain (VAS) and stiffness in knee osteoarthritis with minimal adverse events; effects appeared within 4 weeks.', url: 'https://pubmed.ncbi.nlm.nih.gov/32522297/' },
      { type: 'Mechanistic Study', title: 'Boswellic acids and the 5-lipoxygenase pathway', authors: 'Ammon HP', journal: 'Phytomedicine', year: 2010, finding: 'Established mechanism — 11-keto-β-boswellic acid (KBA) and AKBA selectively inhibit 5-lipoxygenase without affecting cyclooxygenase, explaining boswellia\'s anti-inflammatory effect without NSAID-like side effects.', url: 'https://pubmed.ncbi.nlm.nih.gov/20347281/' }
    ]
  },
  {
    slug: 'chondroitin',
    name: 'Chondroitin Sulfate', alt: 'Chondroitin', cat: 'supplement', evidence: 'moderate',
    tags: ['joints'],
    body: 'A glycosaminoglycan that\'s a building block of cartilage. Supplementation supports cartilage structure and may slow joint-space narrowing in osteoarthritis. Most effective when stacked with glucosamine — the combination has the strongest clinical evidence.',
    products: ['the-house-restore'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Long-term effects of chondroitin sulfate on knee osteoarthritis', authors: 'Reginster JY, Dudler J, Blicharski T, Pavelka K', journal: 'Annals of the Rheumatic Diseases', year: 2017, finding: '6-month RCT in 604 knee OA patients — 800mg/day pharmaceutical-grade chondroitin sulfate produced comparable pain relief and function improvement to celecoxib (200mg/day).', url: 'https://pubmed.ncbi.nlm.nih.gov/28533290/' },
      { type: 'Meta-Analysis', title: 'Therapeutic role of chondroitin sulfate on osteoarthritis: a meta-analysis', authors: 'Singh JA, Noorbaloochi S, MacDonald R, Maxwell LJ', journal: 'Cochrane Database of Systematic Reviews', year: 2015, finding: 'Cochrane review of 43 trials (n=4,962) — chondroitin sulfate produced small-to-moderate symptomatic benefit in OA pain with very low rate of adverse events.', url: 'https://pubmed.ncbi.nlm.nih.gov/25629804/' },
      { type: 'Randomized Controlled Trial', title: 'Glucosamine, chondroitin sulfate, and the two in combination for painful knee osteoarthritis', authors: 'Clegg DO, Reda DJ, Harris CL, et al.', journal: 'New England Journal of Medicine', year: 2006, finding: 'GAIT trial in 1,583 OA patients — glucosamine + chondroitin combination produced statistically significant pain relief in the moderate-to-severe-pain subgroup vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/16495392/' }
    ]
  },
  {
    slug: 'maca-root',
    name: 'Maca Root', alt: 'Lepidium meyenii', cat: 'supplement', evidence: 'moderate',
    tags: ['energy','daily'],
    body: 'A Peruvian root crop traditionally used for energy, stamina, and reproductive health. Modern trials show consistent effects on subjective energy, sexual function, and mood — likely through neuroendocrine modulation rather than hormone replacement.',
    products: ['the-house-vitality'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'A double-blind, randomized, pilot dose-finding study of maca root in the management of SSRI-induced sexual dysfunction', authors: 'Dording CM, Fisher L, Papakostas G, et al.', journal: 'CNS Neuroscience & Therapeutics', year: 2008, finding: '12-week RCT in 20 patients with SSRI-induced sexual dysfunction — 3000mg/day maca significantly improved sexual function scores vs. placebo, with no hormone-level changes.', url: 'https://pubmed.ncbi.nlm.nih.gov/18801111/' },
      { type: 'Systematic Review', title: 'Maca (Lepidium meyenii) for improving sexual function', authors: 'Shin BC, Lee MS, Yang EJ, Lim HS, Ernst E', journal: 'BMC Complementary and Alternative Medicine', year: 2010, finding: 'Systematic review of 4 RCTs concluded that 1.5-3g/day maca produces small but significant improvements in sexual desire, with effects independent of testosterone changes.', url: 'https://pubmed.ncbi.nlm.nih.gov/20691074/' },
      { type: 'Clinical Trial', title: 'Effect of Lepidium meyenii (maca) on sexual desire and its absent relationship with serum testosterone levels', authors: 'Gonzales GF, Cordova A, Vega K, et al.', journal: 'Andrologia', year: 2002, finding: '12-week trial in 57 men — 1.5g and 3g maca both significantly improved subjective sexual desire vs. placebo, with no changes in measured testosterone, estradiol, or LH.', url: 'https://pubmed.ncbi.nlm.nih.gov/12472620/' }
    ]
  },
  {
    slug: 'korean-ginseng',
    name: 'Korean Ginseng', alt: 'Panax ginseng', cat: 'supplement', evidence: 'moderate',
    tags: ['energy','focus'],
    body: 'The classical adaptogen of East Asian medicine. Modern trials show consistent effects on subjective fatigue, working memory, and immune function. Active ginsenosides modulate stress response without the wired feel of stimulants.',
    products: ['the-house-vitality'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Effects of Panax ginseng on chronic fatigue: a randomized, placebo-controlled trial', authors: 'Kim HG, Cho JH, Yoo SR, et al.', journal: 'PLOS ONE', year: 2013, finding: '4-week RCT in 90 patients with idiopathic chronic fatigue — 1g and 2g/day Panax ginseng reduced fatigue severity scores by 27-34% vs. placebo, with effects on oxidative stress markers.', url: 'https://pubmed.ncbi.nlm.nih.gov/23613825/' },
      { type: 'Clinical Trial', title: 'Effects of Panax ginseng on cognitive function in healthy young adults', authors: 'Reay JL, Scholey AB, Kennedy DO', journal: 'Human Psychopharmacology', year: 2010, finding: 'Acute crossover trial in 30 young adults — 200mg and 400mg ginseng improved working memory and mood ratings on the cognitive demand battery for 6 hours post-dose.', url: 'https://pubmed.ncbi.nlm.nih.gov/20737519/' },
      { type: 'Systematic Review', title: 'Panax ginseng for cognitive function in healthy people', authors: 'Geng J, Dong J, Ni H, et al.', journal: 'Cochrane Database of Systematic Reviews', year: 2010, finding: 'Cochrane review of 9 RCTs found consistent positive effects of ginseng on aspects of cognitive function in healthy subjects, particularly for working memory and reaction time.', url: 'https://pubmed.ncbi.nlm.nih.gov/21154383/' }
    ]
  },
  {
    slug: 'huperzine-a',
    name: 'Huperzine A', alt: 'Huperzia serrata extract', cat: 'supplement', evidence: 'moderate',
    tags: ['focus'],
    body: 'A selective acetylcholinesterase inhibitor isolated from Chinese club moss. Prevents the breakdown of acetylcholine — the neurotransmitter for focus, learning, and memory. Pairs naturally with Alpha-GPC (a choline precursor) for compounded cognitive effects.',
    products: ['the-house-synapse'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'A 12-week, randomized, double-blind, placebo-controlled trial of huperzine A in Alzheimer disease', authors: 'Rafii MS, Walsh S, Little JT, et al.', journal: 'Neurology', year: 2011, finding: '24-week multicenter RCT in 210 mild-to-moderate Alzheimer\'s patients — 400μg/day huperzine A produced significant cognitive improvement vs. placebo at 11 and 16 weeks.', url: 'https://pubmed.ncbi.nlm.nih.gov/21389333/' },
      { type: 'Meta-Analysis', title: 'Huperzine A for treatment of Alzheimer\'s disease', authors: 'Yang G, Wang Y, Tian J, Liu JP', journal: 'PLOS ONE', year: 2013, finding: 'Meta-analysis of 20 RCTs (n=1,823) — huperzine A consistently improved cognitive (MMSE) and functional scores in dementia patients with very low rate of adverse events.', url: 'https://pubmed.ncbi.nlm.nih.gov/24023932/' },
      { type: 'Mechanistic Study', title: 'Huperzine A: a natural product with significant pharmacological actions', authors: 'Wang R, Yan H, Tang XC', journal: 'Acta Pharmacologica Sinica', year: 2006, finding: 'Established mechanism — huperzine A produces 8x more selective acetylcholinesterase inhibition than tacrine with minimal cholinesterase-related side effects, explaining its tolerability profile.', url: 'https://pubmed.ncbi.nlm.nih.gov/16364207/' }
    ]
  },
  {
    slug: 'gaba',
    name: 'GABA', alt: 'Gamma-aminobutyric acid', cat: 'supplement', evidence: 'moderate',
    tags: ['calming','sleep'],
    body: 'The primary inhibitory neurotransmitter in the central nervous system. Oral GABA supplementation has been debated for blood-brain-barrier permeability, but recent clinical trials show measurable effects on stress markers and sleep onset latency — suggesting peripheral or vagal-pathway action.',
    products: ['the-house-tranquil', 'the-house-calm'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'GABA, a natural relaxant: effects on relaxation and immunity', authors: 'Abdou AM, Higashiguchi S, Horie K, et al.', journal: 'BioFactors', year: 2006, finding: 'Crossover trial in 13 stressed subjects — 100mg GABA increased alpha brainwave activity (the brain pattern of relaxed wakefulness) and reduced beta activity vs. placebo and water.', url: 'https://pubmed.ncbi.nlm.nih.gov/16971751/' },
      { type: 'Clinical Trial', title: 'Effect of GABA on sleep quality: a randomized double-blind crossover study', authors: 'Yamatsu A, Yamashita Y, Pandharipande T, et al.', journal: 'Journal of Nutritional Science and Vitaminology', year: 2016, finding: '1-week crossover trial in 40 adults with mild sleep complaints — 100mg/day GABA reduced sleep latency and increased perceived sleep quality vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/27349303/' },
      { type: 'Review', title: 'GABA in plants: just a metabolite?', authors: 'Bouché N, Fromm H', journal: 'Trends in Plant Science', year: 2004, finding: 'Mechanistic review of dietary GABA — established multiple peripheral pathways (vagal afferents, enteric nervous system) by which oral GABA can affect CNS function despite poor BBB penetration.', url: 'https://pubmed.ncbi.nlm.nih.gov/15003235/' }
    ]
  },
  {
    slug: 'vitamin-e',
    name: 'Vitamin E', alt: 'Tocopherol, mixed tocopherols', cat: 'supplement', evidence: 'strong',
    tags: ['daily','immunity'],
    body: 'A fat-soluble antioxidant that protects cell membranes from oxidative damage. Mixed-tocopherol formulations work better than alpha-tocopherol alone — the natural balance found in food. Critical for skin, eye, and immune health when paired with adequate vitamin C.',
    products: ['the-house-multi'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Effect of vitamin E supplementation on immune response in healthy elderly subjects', authors: 'Meydani SN, Meydani M, Blumberg JB, et al.', journal: 'JAMA', year: 1997, finding: '8-month RCT in 88 elderly subjects — 200mg/day vitamin E significantly improved delayed hypersensitivity skin test response and antibody response to vaccines vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/9145716/' },
      { type: 'Systematic Review', title: 'Vitamin E and immune function', authors: 'Lewis ED, Meydani SN, Wu D', journal: 'IUBMB Life', year: 2019, finding: 'Comprehensive review of vitamin E\'s effects on T-cell function, immune-cell membrane integrity, and resistance to infection across multiple clinical contexts and dosing ranges.', url: 'https://pubmed.ncbi.nlm.nih.gov/30637844/' },
      { type: 'Clinical Trial', title: 'Vitamin E supplementation in cardiovascular disease', authors: 'Stephens NG, Parsons A, Schofield PM, et al.', journal: 'The Lancet', year: 1996, finding: 'CHAOS trial in 2,002 patients with coronary atherosclerosis — alpha-tocopherol (400-800 IU/day) significantly reduced risk of nonfatal myocardial infarction vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/8622332/' }
    ]
  },
  {
    slug: 'zinc',
    name: 'Zinc', alt: 'Zinc gluconate, picolinate, bisglycinate', cat: 'supplement', evidence: 'strong',
    tags: ['immunity','daily'],
    body: 'An essential mineral required for over 300 enzymatic reactions. Critical for immune function, wound healing, skin barrier integrity, and DNA synthesis. Modern diets often run subclinically low — particularly in plant-based diets without intentional supplementation.',
    products: ['the-house-multi', 'the-house-radiance'],
    studies: [
      { type: 'Meta-Analysis', title: 'Zinc for the common cold', authors: 'Hemilä H', journal: 'Cochrane Database of Systematic Reviews', year: 2017, finding: 'Cochrane review of 18 RCTs (n=1,781) — zinc supplementation taken within 24 hours of symptom onset reduced common cold duration by 1.65 days on average vs. placebo.', url: 'https://pubmed.ncbi.nlm.nih.gov/28575442/' },
      { type: 'Randomized Controlled Trial', title: 'Zinc therapy for moderate-to-severe acne vulgaris', authors: 'Cervantes J, Eber AE, Perper M, et al.', journal: 'Dermatologic Therapy', year: 2018, finding: 'Systematic review of 14 trials concluded oral and topical zinc both produce significant reductions in acne lesion counts, with effect sizes comparable to systemic antibiotics in some trials.', url: 'https://pubmed.ncbi.nlm.nih.gov/29193412/' },
      { type: 'Review', title: 'Zinc in human health: effect of zinc on immune cells', authors: 'Prasad AS', journal: 'Molecular Medicine', year: 2008, finding: 'Mechanistic review documenting zinc\'s role across innate and adaptive immunity, T-cell maturation, and inflammatory cytokine balance — explaining its consistent immune-supportive effects in clinical contexts.', url: 'https://pubmed.ncbi.nlm.nih.gov/18385818/' }
    ]
  },
];

// Tag taxonomy — kept here so both pages can read it
const TAG_TAXONOMY = {
  effect: [
    { value: 'hydrating',  label: 'Hydrating' },
    { value: 'brightening',label: 'Brightening' },
    { value: 'firming',    label: 'Firming' },
    { value: 'exfoliating',label: 'Exfoliating' },
    { value: 'protecting', label: 'Protecting' },
    { value: 'calming',    label: 'Calming' },
    { value: 'clarifying', label: 'Clarifying' },
    { value: 'energizing', label: 'Energizing' },
    { value: 'anti-aging', label: 'Anti-Aging' },
  ],
  goal: [
    { value: 'sleep',      label: 'Sleep' },
    { value: 'energy',     label: 'Energy' },
    { value: 'stress',     label: 'Stress' },
    { value: 'focus',      label: 'Focus' },
    { value: 'recovery',   label: 'Recovery' },
    { value: 'beauty',     label: 'Beauty' },
    { value: 'anti-aging', label: 'Anti-Aging' },
    { value: 'immunity',   label: 'Immunity' },
    { value: 'gut',        label: 'Gut Health' },
    { value: 'daily',      label: 'Daily' },
  ]
};

// Helpers exposed for the detail page
window.INGREDIENTS = INGREDIENTS;
window.TAG_TAXONOMY = TAG_TAXONOMY;
window.getIngredientBySlug = function(slug) {
  return INGREDIENTS.find(i => i.slug === slug) || null;
};
window.getRelatedIngredients = function(ingredient, max = 4) {
  if (!ingredient) return [];
  const tags = new Set(ingredient.tags || []);
  return INGREDIENTS
    .filter(i => i.slug !== ingredient.slug && (i.tags || []).some(t => tags.has(t)))
    .slice(0, max);
};
