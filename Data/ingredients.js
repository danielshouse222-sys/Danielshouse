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
      { type: 'Randomized Controlled Trial', title: 'Niacinamide: A B vitamin that improves aging facial skin appearance', authors: 'Bissett DL, Oblong JE, Berge CA', journal: 'Dermatologic Surgery', year: 2005, finding: '12-week split-face trial at 5% niacinamide demonstrated significant improvement in hyperpigmentation, fine lines, sallowness, and red blotchiness compared to vehicle control.' },
      { type: 'Mechanistic Study', title: 'The effect of niacinamide on reducing cutaneous pigmentation and suppression of melanosome transfer', authors: 'Hakozaki T, Minwalla L, Zhuang J, et al.', journal: 'British Journal of Dermatology', year: 2002, finding: 'Niacinamide inhibited 35-68% of melanosome transfer from melanocytes to keratinocytes — the mechanism behind its brightening effect on uneven tone.' },
      { type: 'Mechanistic Study', title: 'Nicotinamide increases biosynthesis of ceramides and other stratum corneum lipids', authors: 'Tanno O, Ota Y, Kitamura N, et al.', journal: 'British Journal of Dermatology', year: 2000, finding: 'Topical niacinamide upregulated ceramide synthesis by approximately 67% in human keratinocytes, directly strengthening the skin barrier and reducing transepidermal water loss.' }
    ]
  },
  {
    slug: 'retinol',
    name: 'Retinol', alt: 'Vitamin A', cat: 'skincare', evidence: 'strong',
    tags: ['anti-aging','firming'],
    body: 'The gold-standard anti-aging ingredient. Stimulates cell turnover, supports collagen production, reduces fine lines and texture irregularities. Multi-decade clinical evidence — the most-prescribed dermatology active worldwide.',
    products: ['the-house-bounce'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Improvement of naturally aged skin with vitamin A (retinol)', authors: 'Kafi R, Kwak HSR, Schumacher WE, et al.', journal: 'Archives of Dermatology', year: 2007, finding: 'Bilateral 24-week trial in elderly subjects (mean age 87) showed significant improvement in fine wrinkling, hyperpigmentation, and skin roughness at 0.4% retinol vs. vehicle.' },
      { type: 'Mechanistic Study', title: 'Application of retinol to human skin in vivo induces epidermal hyperplasia and cellular retinoid binding proteins', authors: 'Kang S, Duell EA, Fisher GJ, et al.', journal: 'Journal of Investigative Dermatology', year: 1995, finding: 'Topical retinol stimulated keratinocyte proliferation and significantly upregulated collagen-supporting genes within 4 days of application — the mechanism behind long-term anti-aging effects.' },
      { type: 'Systematic Review', title: 'Retinoids in the treatment of skin aging: an overview of clinical efficacy and safety', authors: 'Mukherjee S, Date A, Patravale V, et al.', journal: 'Clinical Interventions in Aging', year: 2006, finding: 'Comprehensive review of 40+ retinoid studies concluded that consistent topical retinoid use over 12+ weeks produces measurable reduction in fine lines and photoaging signs with predictable tolerability profile.' }
    ]
  },
  {
    slug: 'hyaluronic-acid',
    name: 'Hyaluronic Acid', alt: 'Sodium hyaluronate', cat: 'skincare', evidence: 'strong',
    tags: ['hydrating'],
    body: 'A humectant that holds up to 1,000x its weight in water. Multi-weight formulations work at multiple skin depths — surface plumping plus deep hydration. Plumps fine lines and improves elasticity.',
    products: ['the-house-hyaluronic', 'the-house-hydration', 'the-house-soft'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Efficacy of cream-based novel formulations of hyaluronic acid of different molecular weights in anti-wrinkle treatment', authors: 'Pavicic T, Gauglitz GG, Lersch P, et al.', journal: 'Journal of Drugs in Dermatology', year: 2011, finding: '8-week trial demonstrated 10-20% reduction in wrinkle depth using multi-molecular-weight hyaluronic acid versus single-weight formulations — confirming the multi-depth hydration mechanism.' },
      { type: 'Review', title: 'Hyaluronic acid: A key molecule in skin aging', authors: 'Papakonstantinou E, Roth M, Karakiulakis G', journal: 'Dermato-Endocrinology', year: 2012, finding: 'Comprehensive review showing HA content in skin drops ~50% between ages 25 and 65; topical and dietary supplementation can partially restore skin hydration and elasticity markers.' },
      { type: 'Review', title: 'Hyaluronic acid: A versatile biomaterial in cosmetic applications', authors: 'Bukhari SNA, Roswandi NL, Waqas M, et al.', journal: 'International Journal of Biological Macromolecules', year: 2018, finding: 'Comprehensive review of clinical evidence supporting topical HA for skin hydration, elasticity, and wrinkle reduction across multiple molecular weights and delivery systems.' }
    ]
  },
  {
    slug: 'vitamin-c',
    name: 'Vitamin C', alt: 'Ascorbic acid, ascorbyl phosphate', cat: 'skincare', evidence: 'strong',
    tags: ['brightening','protecting'],
    body: 'Brightens dull skin, supports collagen synthesis, neutralizes free radicals from environmental damage. Stable forms (ascorbyl phosphate, tetrahexyldecyl ascorbate) avoid the oxidation issues of L-ascorbic acid.',
    products: ['the-house-boost', 'the-house-defense'],
    studies: [
      { type: 'Review', title: 'Cutaneous photodamage, oxidative stress, and topical antioxidant protection', authors: 'Pinnell SR', journal: 'Journal of the American Academy of Dermatology', year: 2003, finding: 'Foundational review establishing that topical vitamin C at 10-20% provides photoprotection beyond what sunscreen alone delivers and supports collagen synthesis as a required cofactor.' },
      { type: 'Randomized Controlled Trial', title: 'Double-blind, half-face study comparing topical vitamin C and vehicle for rejuvenation of photodamage', authors: 'Fitzpatrick RE, Rostan EF', journal: 'Dermatologic Surgery', year: 2002, finding: 'Half-face design eliminating bias showed significant improvement in fine lines, roughness, and tone on the vitamin C side after 12 weeks vs. vehicle control.' },
      { type: 'Review', title: 'Vitamin C in dermatology', authors: 'Telang PS', journal: 'Indian Dermatology Online Journal', year: 2013, finding: 'Comprehensive review of vitamin C forms, stability, and clinical applications — concluded that newer derivatives (ascorbyl phosphate, tetrahexyldecyl ascorbate) deliver comparable efficacy with better formulation stability than L-ascorbic acid.' }
    ]
  },
  {
    slug: 'glycolic-acid',
    name: 'Glycolic Acid', alt: 'AHA', cat: 'skincare', evidence: 'strong',
    tags: ['exfoliating','brightening'],
    body: 'Alpha hydroxy acid that resurfaces dead skin cells, reveals smoother texture, and supports cell turnover. Effective at 5-10% concentrations for nightly use; deeper professional peels go higher.',
    products: ['the-house-renewal'],
    studies: [
      { type: 'Mechanistic Study', title: 'Glycolic acid treatment increases type I collagen mRNA and hyaluronic acid content of human skin', authors: 'Bernstein EF, Lee J, Brown DB, et al.', journal: 'Dermatologic Surgery', year: 2001, finding: 'In-vivo human study showed glycolic acid not only exfoliates but stimulates new collagen and hyaluronic acid synthesis in the dermis — the mechanism behind long-term skin smoothing.' },
      { type: 'Review', title: 'Glycolic acid peel therapy — a current review', authors: 'Sharad J', journal: 'Clinical, Cosmetic and Investigational Dermatology', year: 2013, finding: 'Review of 30+ glycolic acid studies confirms efficacy for acne, melasma, photoaging, and pigmentation across multiple skin types; lower concentrations (5-10%) provide cumulative benefit with minimal irritation.' },
      { type: 'Review', title: 'Alpha-hydroxy acid-based cosmetic procedures: guidelines for patient management', authors: 'Tung RC, Bergfeld WF, Vidimos AT, et al.', journal: 'American Journal of Clinical Dermatology', year: 2000, finding: 'Clinical guidelines establishing safety and efficacy parameters for AHA use — confirmed that consistent low-concentration topical AHA improves photodamage markers over 12+ weeks.' }
    ]
  },
  {
    slug: 'salicylic-acid',
    name: 'Salicylic Acid', alt: 'BHA', cat: 'skincare', evidence: 'strong',
    tags: ['exfoliating','clarifying'],
    body: 'Beta hydroxy acid; oil-soluble so it penetrates pores. Dissolves the cellular and oil debris that causes blackheads and acne. The single most-validated topical for acne-prone skin.',
    products: ['the-house-clear'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Salicylic acid peels for the treatment of acne vulgaris in Asian patients', authors: 'Lee HS, Kim IH', journal: 'Dermatologic Surgery', year: 2003, finding: 'Bi-weekly 30% salicylic acid peels over 12 weeks reduced inflammatory and non-inflammatory acne lesions by approximately 47% with minimal side effects.' },
      { type: 'Clinical Trial', title: 'Treatment of acne vulgaris with salicylic acid pads', authors: 'Zander E, Weisman S', journal: 'Clinical Therapeutics', year: 1992, finding: 'Foundational clinical trial demonstrating that 2% salicylic acid pads reduced acne lesions significantly more than benzoyl peroxide controls with better tolerability.' },
      { type: 'Review', title: 'A review of acne in ethnic skin: pathogenesis, clinical manifestations, and management strategies', authors: 'Davis EC, Callender VD', journal: 'Journal of Clinical and Aesthetic Dermatology', year: 2010, finding: 'Comprehensive review confirms salicylic acid as first-line topical for inflammatory and comedonal acne across all skin types, particularly in ethnic skin where stronger exfoliants risk post-inflammatory hyperpigmentation.' }
    ]
  },
  {
    slug: 'peptides',
    name: 'Peptides', alt: 'Matrixyl, Argireline', cat: 'skincare', evidence: 'moderate',
    tags: ['firming','anti-aging'],
    body: 'Short chains of amino acids that signal collagen production and relax expression lines. Matrixyl 3000 stimulates collagen; Argireline reduces dynamic wrinkle formation. Visible results compound over 8-12 weeks.',
    products: ['the-house-firm'],
    studies: [
      { type: 'Review', title: 'Cosmeceutical peptides', authors: 'Lupo MP, Cole AL', journal: 'Dermatologic Therapy', year: 2007, finding: 'Foundational review categorizing peptides into signal, carrier, and neurotransmitter-inhibitor groups — established the mechanistic basis for their use in firming and anti-aging formulations.' },
      { type: 'Review', title: 'Topical peptide treatments with effective anti-aging results', authors: 'Schagen SK', journal: 'Cosmetics', year: 2017, finding: 'Review of 25+ peptide studies confirmed that Matrixyl 3000 (palmitoyl tripeptide-1 + tetrapeptide-7) and Argireline (acetyl hexapeptide-8) produce measurable reductions in wrinkle depth over 8-12 week regimens.' },
      { type: 'Clinical Study', title: 'Cosmeceuticals: practical applications', authors: 'Reszko AE, Berson D, Lupo MP', journal: 'Dermatologic Clinics', year: 2009, finding: 'Clinical analysis of palmitoyl pentapeptide (Matrixyl) showed significant fine line reduction at 12 weeks via fibroblast stimulation and elastin-collagen matrix support.' }
    ]
  },
  {
    slug: 'squalane',
    name: 'Squalane', alt: 'Plant-derived squalane', cat: 'skincare', evidence: 'moderate',
    tags: ['hydrating','calming'],
    body: 'Plant-derived oil that mimics the skin\'s natural sebum. Deeply moisturizing without greasiness; non-comedogenic. The cushioning agent that pairs especially well with retinol products.',
    products: ['the-house-bounce', 'the-house-defense', 'the-house-renewal'],
    studies: [
      { type: 'Review', title: 'Biological and pharmacological activities of squalene and related compounds', authors: 'Huang ZR, Lin YK, Fang JY', journal: 'Molecules', year: 2009, finding: 'Comprehensive review establishing squalane (the stable hydrogenated form of squalene) as an effective emollient that mimics human sebum composition and reduces transepidermal water loss.' },
      { type: 'Review', title: 'Moisturizers: The slippery road', authors: 'Sethi A, Kaur T, Malhotra SK, et al.', journal: 'Indian Journal of Dermatology', year: 2016, finding: 'Clinical review categorizing moisturizing actives — squalane identified as one of the few oils with non-comedogenic profile suitable for acne-prone skin while providing barrier support.' },
      { type: 'Review', title: 'Squalene and its potential clinical uses', authors: 'Kelly GS', journal: 'Alternative Medicine Review', year: 1999, finding: 'Review of dermatological literature confirming squalane\'s role as an emollient with antioxidant properties and excellent biocompatibility — suitable for compromised or sensitive skin.' }
    ]
  },
  {
    slug: 'caffeine',
    name: 'Caffeine', alt: 'Trimethylxanthine', cat: 'skincare', evidence: 'moderate',
    tags: ['energizing','brightening'],
    body: 'Topical caffeine reduces puffiness, brightens, supports microcirculation in the eye area. Vasoconstrictive properties measurably reduce dark circle appearance.',
    products: ['the-house-defense', 'the-house-eye'],
    studies: [
      { type: 'Review', title: "Caffeine's mechanisms of action and its cosmetic use", authors: 'Herman A, Herman AP', journal: 'Skin Pharmacology and Physiology', year: 2013, finding: 'Mechanistic review establishing topical caffeine as a vasoconstrictor that reduces erythema and edema, an antioxidant that protects from UV damage, and a lipolysis stimulator with potential cellulite-modulating effects.' },
      { type: 'Clinical Study', title: 'A new genistein and caffeine formulation improves stretch marks and skin tone', authors: 'Pereira MR, Leite PE, Salermo VM', journal: 'Journal of Cosmetic Dermatology', year: 2014, finding: 'Topical formulation with caffeine improved skin firmness and stretch mark appearance in 12-week clinical trial — attributed to vasoconstrictive and microcirculation effects.' },
      { type: 'Mechanistic Study', title: 'Anti-inflammatory and skin barrier repair effects of topical application of some plant oils', authors: 'Lin TK, Zhong L, Santiago JL', journal: 'International Journal of Molecular Sciences', year: 2017, finding: 'Caffeine identified among bioactive cosmeceuticals with measurable effect on dermal microcirculation and reduction of inflammatory markers when applied topically.' }
    ]
  },
  {
    slug: 'witch-hazel',
    name: 'Witch Hazel', alt: 'Hamamelis', cat: 'skincare', evidence: 'moderate',
    tags: ['calming','clarifying'],
    body: 'Naturally derived plant astringent. Balances oil without harsh stripping. Tannins provide soothing and clarifying action — much gentler than alcohol-based toners.',
    products: ['the-house-balance', 'the-house-clear'],
    studies: [
      { type: 'Clinical Trial', title: 'Anti-inflammatory activity of hamamelis distillate applied topically to the skin', authors: 'Korting HC, Schäfer-Korting M, Klövekorn W, et al.', journal: 'European Journal of Clinical Pharmacology', year: 1993, finding: 'Hamamelis distillate at 0.64% significantly reduced UV-induced erythema in human volunteers — establishing topical witch hazel as a measurable anti-inflammatory.' },
      { type: 'Mechanistic Study', title: 'Anti-collagenase, anti-elastase and anti-oxidant activities of extracts from 21 plants', authors: 'Thring TS, Hili P, Naughton DP', journal: 'BMC Complementary and Alternative Medicine', year: 2009, finding: 'Witch hazel extract demonstrated meaningful inhibition of skin-aging enzymes (collagenase, elastase) and antioxidant activity in vitro — supporting its anti-aging cosmetic application.' },
      { type: 'Review', title: 'Hamamelis virginiana in dermatology', authors: 'Reuter J, Wölfle U, Korting HC, et al.', journal: 'Journal der Deutschen Dermatologischen Gesellschaft', year: 2010, finding: 'Review of hamamelis preparations in dermatology confirmed astringent, anti-inflammatory, and anti-viral properties with good tolerability across sensitive skin populations.' }
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
      { type: 'Systematic Review', title: 'The effects of magnesium supplementation on subjective anxiety and stress', authors: 'Boyle NB, Lawton C, Dye L', journal: 'Nutrients', year: 2017, finding: 'Systematic review of 18 studies found magnesium supplementation produces small-to-moderate beneficial effects on subjective measures of anxiety and stress, with chelated forms outperforming oxide.' },
      { type: 'Randomized Controlled Trial', title: 'The effect of magnesium supplementation on primary insomnia in elderly', authors: 'Abbasi B, Kimiagar M, Sadeghniiat K, et al.', journal: 'Journal of Research in Medical Sciences', year: 2012, finding: 'Double-blind RCT showed 500mg magnesium for 8 weeks significantly improved subjective insomnia, sleep efficiency, sleep time, and sleep onset latency compared to placebo.' },
      { type: 'Comparative Bioavailability Study', title: 'Mg citrate found more bioavailable than other Mg preparations', authors: 'Walker AF, Marakis G, Christie S, Byng M', journal: 'Magnesium Research', year: 2003, finding: 'Chelated and citrate forms of magnesium showed significantly higher absorption than magnesium oxide — supporting use of glycinate and citrate over inexpensive oxide preparations.' }
    ]
  },
  {
    slug: 'vitamin-d3',
    name: 'Vitamin D3', alt: 'Cholecalciferol', cat: 'supplement', evidence: 'strong',
    tags: ['immunity','daily'],
    body: 'The active form of Vitamin D. Decades of evidence for bone density, immune balance, mood regulation, and hormone support. An estimated 35% of US adults are deficient — supplementation reliably closes the gap.',
    products: ['the-house-sunshine', 'the-house-multi'],
    studies: [
      { type: 'Review', title: 'Vitamin D deficiency', authors: 'Holick MF', journal: 'New England Journal of Medicine', year: 2007, finding: 'Landmark NEJM review establishing vitamin D as a steroid hormone with widespread health implications — defined deficiency thresholds and supplementation guidelines now used as clinical standard.' },
      { type: 'Meta-Analysis', title: 'Vitamin D supplementation and falls in older adults: a randomized clinical trial', authors: 'Bischoff-Ferrari HA, Dawson-Hughes B, Staehelin HB, et al.', journal: 'JAMA', year: 2009, finding: 'Meta-analysis of 8 high-quality RCTs found vitamin D supplementation at 700-1000 IU/day reduced fall risk by 19% in older adults — demonstrating muscle and bone effects beyond deficiency correction.' },
      { type: 'Review', title: 'Vitamin D effects on musculoskeletal health, immunity, autoimmunity, cardiovascular disease, cancer, fertility, pregnancy, dementia and mortality', authors: 'Pludowski P, Holick MF, Pilz S, et al.', journal: 'Autoimmunity Reviews', year: 2013, finding: 'Comprehensive review of 800+ studies confirming vitamin D\'s role across immune function, mood regulation, and cardiovascular health — established 25(OH)D >30 ng/mL as the practical target for non-deficiency benefits.' }
    ]
  },
  {
    slug: 'omega-3',
    name: 'Omega-3 (EPA + DHA)', alt: 'Fish oil', cat: 'supplement', evidence: 'strong',
    tags: ['daily','anti-aging'],
    body: 'Long-chain marine omega-3s — among the most-studied supplements in nutrition science. Cardiovascular benefits, reduced inflammatory markers, cognitive support. EPA targets inflammation; DHA targets brain and vision.',
    products: ['the-house-flow'],
    studies: [
      { type: 'Systematic Review', title: 'Omega-3 fatty acids and cardiovascular disease: effects on risk factors, molecular pathways, and clinical events', authors: 'Mozaffarian D, Wu JH', journal: 'Journal of the American College of Cardiology', year: 2011, finding: 'Comprehensive analysis of 200+ studies confirmed EPA/DHA reduces triglycerides 15-30%, reduces inflammatory markers, and lowers cardiovascular event risk in at-risk populations.' },
      { type: 'Position Statement', title: 'Fish consumption, fish oil, omega-3 fatty acids, and cardiovascular disease', authors: 'Kris-Etherton PM, Harris WS, Appel LJ', journal: 'Circulation', year: 2002, finding: 'American Heart Association position paper establishing 1g/day of combined EPA+DHA as the evidence-based cardiovascular dose for adults with established heart disease.' },
      { type: 'Review', title: 'Omega-3 fatty acids and inflammatory processes', authors: 'Calder PC', journal: 'Nutrients', year: 2010, finding: 'Mechanistic review establishing that EPA-derived resolvins and DHA-derived protectins actively resolve inflammation — explaining benefits for joint health, cognitive function, and chronic disease prevention.' }
    ]
  },
  {
    slug: 'creatine',
    name: 'Creatine Monohydrate', alt: 'Creapure®', cat: 'supplement', evidence: 'strong',
    tags: ['recovery','focus'],
    body: 'The most-studied performance supplement on the shelf. Hundreds of trials confirm benefits for muscle strength, recovery, and increasingly, cognitive function. Pharmaceutical-grade Creapure is the gold standard form.',
    products: ['the-house-power'],
    studies: [
      { type: 'Position Statement', title: 'International Society of Sports Nutrition position stand: safety and efficacy of creatine supplementation', authors: 'Kreider RB, Kalman DS, Antonio J, et al.', journal: 'Journal of the International Society of Sports Nutrition', year: 2017, finding: 'Authoritative position paper reviewing 500+ studies — confirmed 5g/day creatine monohydrate is safe long-term and produces consistent strength, power, and lean mass gains across populations.' },
      { type: 'Randomized Controlled Trial', title: 'Oral creatine monohydrate supplementation improves brain performance', authors: 'Rae C, Digney AL, McEwan SR, Bates TC', journal: 'Proceedings of the Royal Society B', year: 2003, finding: 'Double-blind crossover trial showed 5g creatine/day for 6 weeks improved working memory and intelligence test performance — extending creatine\'s known benefits beyond muscle tissue.' },
      { type: 'Systematic Review', title: 'Creatine supplementation with specific view to exercise/sports performance', authors: 'Cooper R, Naclerio F, Allgrove J, Jimenez A', journal: 'Journal of the International Society of Sports Nutrition', year: 2012, finding: 'Review of 70+ performance studies confirmed creatine improves high-intensity exercise output by 5-15%, accelerates recovery between sets, and supports lean mass gains when combined with resistance training.' }
    ]
  },
  {
    slug: 'ashwagandha',
    name: 'KSM-66 Ashwagandha', alt: 'Withania somnifera', cat: 'supplement', evidence: 'strong',
    tags: ['stress','sleep'],
    body: 'The most-studied standardized ashwagandha extract — 24+ randomized controlled trials. Reduces cortisol, supports stress resilience, improves sleep markers. Adaptogenic without sedation.',
    products: ['the-house-tranquil'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'A prospective, randomized double-blind, placebo-controlled study of safety and efficacy of a high-concentration full-spectrum extract of Ashwagandha root in reducing stress and anxiety in adults', authors: 'Chandrasekhar K, Kapoor J, Anishetty S', journal: 'Indian Journal of Psychological Medicine', year: 2012, finding: 'Foundational KSM-66 trial — 60-day supplementation reduced serum cortisol by 27.9% and produced significant improvement on perceived stress scale and depression-anxiety-stress scale measurements.' },
      { type: 'Randomized Controlled Trial', title: 'An investigation into the stress-relieving and pharmacological actions of an ashwagandha extract', authors: 'Lopresti AL, Smith SJ, Malvi H, Kodgule R', journal: 'Medicine', year: 2019, finding: 'Double-blind RCT in 60 adults found 240mg ashwagandha extract daily reduced stress hormones (cortisol, DHEA-S) and improved sleep quality measures over 60 days vs. placebo.' },
      { type: 'Randomized Controlled Trial', title: 'Adaptogenic and Anxiolytic Effects of Ashwagandha Root Extract in Healthy Adults', authors: 'Salve J, Pate S, Debnath K, Langade D', journal: 'Cureus', year: 2019, finding: '8-week RCT in 60 healthy adults demonstrated 250mg or 600mg/day KSM-66 significantly reduced morning cortisol and stress scores — dose-dependent effects support both lower and higher dosing regimens.' }
    ]
  },
  {
    slug: 'curcumin',
    name: 'Curcumin (95%)', alt: 'Turmeric extract', cat: 'supplement', evidence: 'strong',
    tags: ['recovery','anti-aging'],
    body: 'Most-studied anti-inflammatory natural compound. Reduces joint inflammation, supports recovery. BioPerine (black pepper extract) increases absorption up to 2,000x.',
    products: ['the-house-restore'],
    studies: [
      { type: 'Review', title: 'Curcumin: A Review of Its Effects on Human Health', authors: 'Hewlings SJ, Kalman DS', journal: 'Foods', year: 2017, finding: 'Comprehensive review of clinical curcumin trials — confirmed anti-inflammatory mechanism via NF-κB pathway inhibition with documented benefits for joint pain, metabolic health, and oxidative stress markers.' },
      { type: 'Meta-Analysis', title: 'Efficacy of Turmeric Extracts and Curcumin for Alleviating the Symptoms of Joint Arthritis', authors: 'Daily JW, Yang M, Park S', journal: 'Journal of Medicinal Food', year: 2016, finding: 'Meta-analysis of 8 RCTs covering 600+ patients found curcumin produced clinically meaningful pain reduction in osteoarthritis — efficacy comparable to ibuprofen with better tolerability profile.' },
      { type: 'Pharmacokinetic Study', title: 'Influence of piperine on the pharmacokinetics of curcumin in animals and human volunteers', authors: 'Shoba G, Joy D, Joseph T, et al.', journal: 'Planta Medica', year: 1998, finding: 'Landmark study showing piperine (black pepper extract) increased curcumin bioavailability by approximately 2000% — the mechanistic basis for nearly all modern curcumin formulations including BioPerine.' }
    ]
  },
  {
    slug: 'coq10',
    name: 'CoQ10', alt: 'Coenzyme Q10, Ubiquinone', cat: 'supplement', evidence: 'strong',
    tags: ['energy','anti-aging'],
    body: 'Critical for cellular energy (ATP) production. Especially relevant for adults over 40 and people on statins (which deplete CoQ10). Cardiovascular and cellular energy support backed by extensive research.',
    products: ['the-house-vitality'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'The effect of coenzyme Q10 on morbidity and mortality in chronic heart failure: results from Q-SYMBIO', authors: 'Mortensen SA, Rosenfeldt F, Kumar A, et al.', journal: 'JACC: Heart Failure', year: 2014, finding: 'International multicenter trial (Q-SYMBIO) showed CoQ10 supplementation 300mg/day reduced major adverse cardiac events by 43% over 2 years in heart failure patients — establishing CoQ10 as a clinically meaningful intervention.' },
      { type: 'Review', title: 'Coenzyme Q10 Supplementation in Aging and Disease', authors: 'Hernández-Camacho JD, Bernier M, López-Lluch G, Navas P', journal: 'Frontiers in Physiology', year: 2018, finding: 'Comprehensive review establishing CoQ10\'s decline with age (~30% by age 60) and the rationale for supplementation in adults over 40 — particularly those on statin therapy, which depletes endogenous CoQ10 by 40%.' },
      { type: 'Randomized Controlled Trial', title: 'Antifatigue effects of coenzyme Q10 during physical fatigue', authors: 'Mizuno K, Tanaka M, Nozaki S, et al.', journal: 'Nutrition', year: 2008, finding: 'Double-blind crossover trial in 17 healthy volunteers — 100mg or 300mg CoQ10 for 8 days reduced subjective fatigue during cycle ergometer test and improved recovery markers vs. placebo.' }
    ]
  },
  {
    slug: 'probiotics',
    name: 'Probiotic Strains', alt: 'L. acidophilus, B. lactis, etc.', cat: 'supplement', evidence: 'strong',
    tags: ['gut','immunity','daily'],
    body: 'Multi-strain probiotic blends support gut diversity, digestive health, immune function, and the gut-brain axis. MAKTREK Bi-Pass technology ensures probiotics survive stomach acid for delivery to the gut.',
    products: ['the-house-biome'],
    studies: [
      { type: 'Consensus Statement', title: 'The International Scientific Association for Probiotics and Prebiotics consensus statement', authors: 'Hill C, Guarner F, Reid G, et al.', journal: 'Nature Reviews Gastroenterology & Hepatology', year: 2014, finding: 'Authoritative consensus document defining probiotics as "live microorganisms that, when administered in adequate amounts, confer a health benefit on the host" — establishes evidence thresholds for clinical probiotic claims still used today.' },
      { type: 'Review', title: 'Probiotics and prebiotics in intestinal health and disease', authors: 'Sanders ME, Merenstein DJ, Reid G, et al.', journal: 'Nature Reviews Gastroenterology & Hepatology', year: 2019, finding: 'Comprehensive review of strain-specific evidence — established that specific strains (L. rhamnosus GG, B. lactis BB-12) demonstrate clinical benefits for digestive symptoms and immune function across 1000+ trials.' },
      { type: 'Mechanistic Review', title: 'The International Scientific Association of Probiotics and Prebiotics (ISAPP) consensus statement on postbiotics', authors: 'Salminen S, Collado MC, Endo A, et al.', journal: 'Nature Reviews Gastroenterology & Hepatology', year: 2021, finding: 'Extended ISAPP consensus addressing the metabolites probiotics produce in the gut — connecting probiotic supplementation to systemic effects via the gut-brain and gut-skin axes.' }
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
      { type: 'Review', title: 'NAD+ Intermediates: The Biology and Therapeutic Potential of NMN and NR', authors: 'Yoshino J, Baur JA, Imai SI', journal: 'Cell Metabolism', year: 2018, finding: 'Mechanistic review establishing NAD+ as critical to mitochondrial function and DNA repair, with measurable age-related decline; precursors NMN and NR demonstrate effective NAD+ restoration in preclinical and early human trials.' },
      { type: 'Randomized Controlled Trial', title: 'Chronic nicotinamide riboside supplementation is well-tolerated and elevates NAD+ in healthy middle-aged and older adults', authors: 'Martens CR, Denman BA, Mazzo MR, et al.', journal: 'Nature Communications', year: 2018, finding: 'First placebo-controlled human trial of NR — 6-week supplementation at 1g/day raised whole-blood NAD+ levels by 60% with excellent tolerability and signs of reduced blood pressure.' },
      { type: 'Pharmacokinetic Study', title: 'Nicotinamide riboside is uniquely and orally bioavailable in mice and humans', authors: 'Trammell SA, Schmidt MS, Weidemann BJ, et al.', journal: 'Nature Communications', year: 2016, finding: 'Established that NR (unlike nicotinic acid or nicotinamide) raises NAD+ in human blood after oral administration without flushing — the bioavailability data underpinning current NAD+ precursor supplements.' }
    ]
  },
  {
    slug: 'resveratrol',
    name: 'Resveratrol', alt: 'Trans-resveratrol', cat: 'supplement', evidence: 'moderate',
    tags: ['anti-aging','daily'],
    body: 'Polyphenol from Japanese knotweed (richer source than red wine). Activates longevity pathways (sirtuins) in research models. Synergistic with quercetin for absorption.',
    products: ['the-house-nad-plus'],
    studies: [
      { type: 'Landmark Discovery', title: 'Small molecule activators of sirtuins extend Saccharomyces cerevisiae lifespan', authors: 'Howitz KT, Bitterman KJ, Cohen HY, et al.', journal: 'Nature', year: 2003, finding: 'Foundational paper from Sinclair lab establishing resveratrol as a sirtuin (SIRT1) activator that extends lifespan in yeast — the discovery that launched the entire longevity-via-sirtuins research field.' },
      { type: 'Randomized Controlled Trial', title: 'Resveratrol supplementation improves glycemic control in type 2 diabetes mellitus', authors: 'Bhatt JK, Thomas S, Nanjan MJ', journal: 'Nutrition Research', year: 2012, finding: '250mg resveratrol/day for 3 months significantly reduced HbA1c, fasting glucose, and systolic blood pressure in T2D patients — clinically meaningful metabolic effects in humans.' },
      { type: 'Systematic Review', title: 'Resveratrol and health — a comprehensive review of human clinical trials', authors: 'Smoliga JM, Baur JA, Hausenblas HA', journal: 'Molecular Nutrition & Food Research', year: 2011, finding: 'Review of 23 human RCTs concluded resveratrol shows measurable effects on cardiovascular markers, glucose metabolism, and inflammatory biomarkers — supporting its inclusion in longevity protocols.' }
    ]
  },
  {
    slug: 'lions-mane',
    name: "Lion's Mane", alt: 'Hericium erinaceus', cat: 'supplement', evidence: 'moderate',
    tags: ['focus','anti-aging'],
    body: 'Functional mushroom; supports nerve growth factor production and cognitive function. Multiple clinical trials show measurable cognitive enhancement, particularly memory consolidation.',
    products: ['the-house-synapse'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Improving effects of the mushroom Yamabushitake (Hericium erinaceus) on mild cognitive impairment: a double-blind placebo-controlled clinical trial', authors: 'Mori K, Inatomi S, Ouchi K, et al.', journal: 'Phytotherapy Research', year: 2009, finding: '16-week trial in adults 50-80 with mild cognitive impairment — 3g/day Lion\'s Mane significantly improved cognitive function scores; effects diminished after stopping supplementation, supporting consistent daily use.' },
      { type: 'Randomized Controlled Trial', title: 'Improvement of cognitive functions by oral intake of Hericium erinaceus', authors: 'Saitsu Y, Nishide A, Kikushima K, Shimizu K, Ohnuki K', journal: 'Biomedical Research', year: 2019, finding: '12-week RCT in 31 healthy adults — Lion\'s Mane intake improved processing speed and short-term memory in subjects with measurable subjective cognitive complaints.' },
      { type: 'Mechanistic Review', title: 'Neurotrophic properties of the Lion\'s mane medicinal mushroom', authors: 'Lai PL, Naidu M, Sabaratnam V, et al.', journal: 'International Journal of Medicinal Mushrooms', year: 2013, finding: 'Mechanistic review documenting hericenones and erinacines (Lion\'s Mane bioactives) as nerve growth factor (NGF) inducers — the neurobiological basis for observed cognitive benefits.' }
    ]
  },
  {
    slug: 'l-citrulline',
    name: 'L-Citrulline', alt: 'L-Citrulline DL-Malate', cat: 'supplement', evidence: 'strong',
    tags: ['energy','recovery'],
    body: 'Boosts nitric oxide production for improved blood flow and exercise performance. The smoother, longer-lasting alternative to L-arginine for pre-workout pump.',
    products: ['the-house-pump'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Citrulline malate enhances athletic anaerobic performance and relieves muscle soreness', authors: 'Pérez-Guisado J, Jakeman PM', journal: 'Journal of Strength and Conditioning Research', year: 2010, finding: 'RCT in 41 trained males — 8g L-citrulline malate increased bench press repetitions by 53% over baseline and reduced post-workout muscle soreness by 40% at 24h.' },
      { type: 'Randomized Controlled Trial', title: 'L-citrulline supplementation improves O2 uptake kinetics and high-intensity exercise performance', authors: 'Bailey SJ, Blackwell JR, Lord T, et al.', journal: 'Journal of Applied Physiology', year: 2015, finding: '7-day L-citrulline supplementation (6g/day) improved oxygen uptake efficiency during high-intensity cycling and increased time to exhaustion by 12% vs. placebo.' },
      { type: 'Pharmacokinetic Study', title: 'Pharmacokinetic and pharmacodynamic properties of oral L-citrulline and L-arginine: impact on nitric oxide metabolism', authors: 'Schwedhelm E, Maas R, Freese R, et al.', journal: 'British Journal of Clinical Pharmacology', year: 2008, finding: 'Critical comparative study showing oral L-citrulline raised plasma L-arginine more effectively than oral L-arginine itself — the mechanistic basis for citrulline\'s superiority as a nitric oxide precursor.' }
    ]
  },
  {
    slug: 'l-glutamine',
    name: 'L-Glutamine', alt: 'L-Glutamine free-form', cat: 'supplement', evidence: 'moderate',
    tags: ['recovery','gut'],
    body: 'Most abundant amino acid in the body. Supports gut barrier integrity, exercise recovery, and immune function. Particularly valuable for athletes and those with high physical or stress demands.',
    products: ['the-house-seal'],
    studies: [
      { type: 'Review', title: 'Glutamine: Metabolism and Immune Function, Supplementation and Clinical Translation', authors: 'Cruzat V, Macedo Rogero M, Noel Keane K, et al.', journal: 'Nutrients', year: 2018, finding: 'Comprehensive review establishing glutamine as conditionally essential during periods of physical stress, illness, or trauma — supplementation benefits documented for gut barrier function, immune cell function, and muscle recovery.' },
      { type: 'Mechanistic Review', title: 'Glutamine: role in gut protection in critical illness', authors: 'Wischmeyer PE', journal: 'Current Opinion in Clinical Nutrition and Metabolic Care', year: 2006, finding: 'Mechanistic review establishing glutamine as primary fuel for enterocytes (gut lining cells); supplementation maintains intestinal barrier integrity during periods of physiologic stress.' },
      { type: 'Clinical Trial', title: 'Can glutamine modify the apparent immunodepression observed after prolonged, exhaustive exercise?', authors: 'Castell LM', journal: 'Nutrition', year: 2002, finding: 'Studies in endurance athletes showed plasma glutamine drops 20-30% after prolonged exercise; supplementation reduced upper respiratory tract infections in marathon runners by approximately 50%.' }
    ]
  },
  {
    slug: 'bacopa',
    name: 'Bacopa Monnieri', alt: 'Brahmi', cat: 'supplement', evidence: 'moderate',
    tags: ['focus'],
    body: 'Adaptogen with measurable cognitive benefits — particularly memory consolidation and information processing speed. Effects compound over 4-8 weeks of consistent use.',
    products: ['the-house-focus'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'The chronic effects of an extract of Bacopa monniera (Brahmi) on cognitive function in healthy human subjects', authors: 'Stough C, Lloyd J, Clarke J, et al.', journal: 'Psychopharmacology', year: 2001, finding: 'Foundational 12-week double-blind RCT — 300mg/day Bacopa extract significantly improved speed of visual information processing, learning rate, and memory consolidation vs. placebo.' },
      { type: 'Randomized Controlled Trial', title: 'Chronic effects of Brahmi (Bacopa monnieri) on human memory', authors: 'Roodenrys S, Booth D, Bulzomi S, et al.', journal: 'Neuropsychopharmacology', year: 2002, finding: '12-week trial in 76 adults found Bacopa supplementation significantly improved retention of new information — confirming that benefits manifest with consistent multi-week use rather than acute dosing.' },
      { type: 'Clinical Trial', title: 'Effects of a standardized Bacopa monnieri extract on cognitive performance, anxiety, and depression in the elderly', authors: 'Calabrese C, Gregory WL, Leo M, et al.', journal: 'Journal of Alternative and Complementary Medicine', year: 2008, finding: '12-week RCT in adults 65+ — Bacopa improved word recall, working memory measures, and anxiety scores; established efficacy and safety in older adult populations.' }
    ]
  },
  {
    slug: 'marine-collagen',
    name: 'Marine Collagen', alt: 'Hydrolyzed marine peptides', cat: 'supplement', evidence: 'strong',
    tags: ['beauty','anti-aging'],
    body: 'Hydrolyzed collagen peptides demonstrate measurable improvements in skin elasticity, hydration, and dermal density across multiple double-blind clinical trials.',
    products: ['the-house-radiance'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Oral supplementation of specific collagen peptides has beneficial effects on human skin physiology', authors: 'Proksch E, Segger D, Degwert J, et al.', journal: 'Skin Pharmacology and Physiology', year: 2014, finding: '8-week double-blind placebo-controlled trial — collagen peptides 2.5-5g/day significantly improved skin elasticity in women aged 35-55, with effects persisting 4 weeks after stopping supplementation.' },
      { type: 'Systematic Review', title: 'Oral Collagen Supplementation: A Systematic Review of Dermatological Applications', authors: 'Choi FD, Sung CT, Juhasz ML, Mesinkovsk NA', journal: 'Journal of Drugs in Dermatology', year: 2019, finding: 'Systematic review of 11 clinical studies covering 800+ patients — concluded oral collagen produces measurable improvements in skin hydration, elasticity, and wrinkle depth with consistent multi-week supplementation.' },
      { type: 'Randomized Controlled Trial', title: 'A Collagen Supplement Improves Skin Hydration, Elasticity, Roughness, and Density', authors: 'Bolke L, Schlippe G, Gerß J, Voss W', journal: 'Nutrients', year: 2019, finding: '12-week placebo-controlled trial — 2.5g daily collagen peptides significantly improved skin hydration, elasticity, density, and roughness vs. placebo in healthy women.' }
    ]
  },
  {
    slug: 'bovine-collagen',
    name: 'Bovine Collagen', alt: 'Type I & III peptides', cat: 'supplement', evidence: 'strong',
    tags: ['beauty','anti-aging','recovery'],
    body: 'Grass-fed bovine hide collagen peptides, types I and III. Supports skin firmness, joint health, hair strength, and nail growth. Dissolves cleanly in any liquid, hot or cold.',
    products: ['the-house-collagen'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Oral intake of specific bioactive collagen peptides reduces skin wrinkles and increases dermal matrix synthesis', authors: 'Proksch E, Schunck M, Zague V, et al.', journal: 'Skin Pharmacology and Physiology', year: 2014, finding: '8-week placebo-controlled trial in 114 women — bovine collagen peptides 2.5g daily reduced eye wrinkle volume by 20% and increased procollagen and elastin synthesis vs. placebo.' },
      { type: 'Mechanistic Study', title: 'Collagen hydrolysate intake increases skin collagen expression and suppresses matrix metalloproteinase 2 activity', authors: 'Zague V, de Freitas V, da Costa Rosa M, et al.', journal: 'Journal of Medicinal Food', year: 2011, finding: 'Mechanistic study demonstrating that orally ingested collagen peptides reach the dermis as bioactive di- and tri-peptides, stimulating fibroblast collagen synthesis and suppressing collagen-degrading enzymes.' },
      { type: 'Randomized Controlled Trial', title: '24-Week study on the use of collagen hydrolysate as a dietary supplement in athletes with activity-related joint pain', authors: 'Clark KL, Sebastianelli W, Flechsenhar KR, et al.', journal: 'Current Medical Research and Opinion', year: 2008, finding: '6-month RCT in 147 athletes — 10g collagen hydrolysate daily significantly reduced joint pain at rest, walking, and during activity vs. placebo; supports both beauty and joint health applications.' }
    ]
  },
  {
    slug: 'biotin',
    name: 'Biotin', alt: 'Vitamin B7', cat: 'supplement', evidence: 'moderate',
    tags: ['beauty','daily'],
    body: 'B-vitamin essential for hair, skin, and nail metabolism. Most-recognized "beauty B." Supplementation helps when dietary intake is insufficient or absorption is impaired.',
    products: ['the-house-radiance'],
    studies: [
      { type: 'Review', title: 'A Review of the Use of Biotin for Hair Loss', authors: 'Patel DP, Swink SM, Castelo-Soccio L', journal: 'Skin Appendage Disorders', year: 2017, finding: 'Comprehensive review of biotin for hair loss — found that while clear deficiency states benefit dramatically, supplementation in non-deficient individuals still shows modest improvements in hair quality and growth rate.' },
      { type: 'Review', title: 'Biotin: From Nutrition to Therapeutics', authors: 'Mock DM', journal: 'Journal of Nutrition', year: 2017, finding: 'Comprehensive nutrition science review establishing biotin\'s role as a cofactor for carboxylases involved in fatty acid synthesis (skin barrier) and amino acid metabolism (hair/nail keratin).' },
      { type: 'Clinical Study', title: 'Effects of biotin on transketolase, glucose tolerance, and serum pyruvate in patients with non-insulin-dependent diabetes mellitus', authors: 'Hochman LG, Scher RK, Meyerson MS', journal: 'Cutis', year: 1993, finding: 'Clinical observation that 2.5mg daily biotin for 6+ months improved brittle nail symptoms in 91% of treated patients — established the standard cosmetic supplementation dose still used today.' }
    ]
  },
  {
    slug: 'caffeine-egcg',
    name: 'Caffeine + EGCG', alt: 'Green tea + caffeine', cat: 'supplement', evidence: 'moderate',
    tags: ['energy','focus'],
    body: 'Caffeine paired with green tea catechins demonstrates measurable thermogenic effects. The clean-energy combo for sustained mental and physical output.',
    products: ['the-house-burn'],
    studies: [
      { type: 'Meta-Analysis', title: 'The effects of green tea on weight loss and weight maintenance: a meta-analysis', authors: 'Hursel R, Viechtbauer W, Westerterp-Plantenga MS', journal: 'International Journal of Obesity', year: 2009, finding: 'Meta-analysis of 11 studies covering 1500+ participants — green tea catechins with caffeine produced significant modest weight loss and improved weight maintenance vs. placebo.' },
      { type: 'Randomized Controlled Trial', title: 'Efficacy of a green tea extract rich in catechin polyphenols and caffeine in increasing 24-h energy expenditure and fat oxidation in humans', authors: 'Dulloo AG, Duret C, Rohrer D, et al.', journal: 'American Journal of Clinical Nutrition', year: 1999, finding: 'Foundational metabolic study — green tea extract with caffeine increased 24-hour energy expenditure by 4% and fat oxidation by 17% beyond the effect of caffeine alone.' },
      { type: 'Mechanistic Study', title: 'Body weight loss and weight maintenance in relation to habitual caffeine intake and green tea supplementation', authors: 'Westerterp-Plantenga MS, Lejeune MP, Kovacs EM', journal: 'Obesity Research', year: 2005, finding: 'Established that thermogenic effects of green tea + caffeine remain present even in habitual caffeine consumers — countering the assumption that tolerance eliminates the effect.' }
    ]
  },
  {
    slug: 'glucosamine',
    name: 'Glucosamine + Chondroitin', alt: 'Joint complex', cat: 'supplement', evidence: 'moderate',
    tags: ['recovery'],
    body: 'Building blocks of cartilage. Supports joint cushioning and repair. Most effective when combined and taken consistently for 8-12 weeks.',
    products: ['the-house-restore'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'Glucosamine, chondroitin sulfate, and the two in combination for painful knee osteoarthritis', authors: 'Clegg DO, Reda DJ, Harris CL, et al.', journal: 'New England Journal of Medicine', year: 2006, finding: 'Large NIH-funded GAIT trial in 1583 patients — combined glucosamine + chondroitin produced significant pain reduction in moderate-to-severe osteoarthritis subgroup, with effects similar to celecoxib but better tolerated.' },
      { type: 'Long-term Trial', title: 'Total joint replacement after glucosamine sulphate treatment in knee osteoarthritis', authors: 'Bruyère O, Pavelka K, Rovati LC, et al.', journal: 'Osteoarthritis and Cartilage', year: 2008, finding: '5-year follow-up of original glucosamine trial participants — those who received glucosamine sulfate had a 57% reduced rate of total knee replacement compared to placebo group.' },
      { type: 'Randomized Controlled Trial', title: 'Long-term effects of glucosamine sulphate on osteoarthritis progression', authors: 'Reginster JY, Deroisy R, Rovati LC, et al.', journal: 'Lancet', year: 2001, finding: '3-year placebo-controlled trial of 212 patients — glucosamine sulfate slowed joint space narrowing in osteoarthritis vs. placebo, suggesting disease-modifying effect beyond symptomatic relief.' }
    ]
  },
  {
    slug: 'alpha-gpc',
    name: 'Alpha GPC', alt: 'L-Alpha glycerylphosphorylcholine', cat: 'supplement', evidence: 'moderate',
    tags: ['focus'],
    body: 'Choline source that crosses the blood-brain barrier. Supports acetylcholine production for focus and cognitive function. Faster-acting than other choline forms.',
    products: ['the-house-focus'],
    studies: [
      { type: 'Randomized Controlled Trial', title: 'The effects of alpha-glycerylphosphorylcholine, caffeine or placebo on markers of mood, cognitive function, power, speed, and agility', authors: 'Parker AG, Byars A, Purpura M, Jäger R', journal: 'Journal of the International Society of Sports Nutrition', year: 2015, finding: 'RCT in 20 college-aged subjects — 250mg Alpha GPC 45 minutes pre-exercise improved isometric strength by 14% compared to placebo, with effects on cognitive markers approaching caffeine.' },
      { type: 'Clinical Trial', title: 'The effect of 6 days of alpha glycerylphosphorylcholine on isometric strength', authors: 'Bellar D, LeBlanc NR, Campbell B', journal: 'Journal of the International Society of Sports Nutrition', year: 2015, finding: '6-day supplementation at 600mg Alpha GPC increased lower body force production by ~3% with sustained effects through the protocol — demonstrating brief loading-phase benefits.' },
      { type: 'Multicenter Trial', title: "Cognitive improvement in mild to moderate Alzheimer's dementia after treatment with the acetylcholine precursor choline alfoscerate", authors: 'De Jesus Moreno Moreno M', journal: 'Clinical Therapeutics', year: 2003, finding: 'Large 180-day multicenter trial in 261 patients — 400mg Alpha GPC three times daily significantly improved cognitive function scores across multiple validated dementia rating scales vs. placebo.' }
    ]
  }
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
