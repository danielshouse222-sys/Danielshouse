/* DANIEL'S HOUSE CHATBOT — ADVANCED
   ─────────────────────────────────────────────────────────────────────────
   A capable client-side assistant that goes well beyond keyword FAQ
   matching. Major capabilities:

   • COMMAND DISPATCH — the bot can DO things, not just answer:
       "add the AM routine to my cart"        → adds it, confirms inline
       "compare AM vs PM"                     → side-by-side comparison card
       "help me find a routine"               → starts the quiz hand-off
       "show me skincare under $40"           → filtered product cards
       "I have dry skin"                      → recommends routines/products
       "what's in my cart"                    → shows cart summary inline

   • RICH RESPONSE CARDS — products, routines, ingredients, studies, and
     comparisons render as inline cards (image, name, price, action buttons),
     not flat text + a link.

   • CONTEXT AWARENESS — detects the current page, peeks at cart contents,
     and reads quiz answers (if the user has taken the quiz). The opening
     greeting is contextual: on a product page it offers product-specific
     help; with items in cart it offers checkout help; etc.

   • UNDERSTANDING LAYER:
       - Synonym expansion (40+ groups: "refund"→"return", etc.)
       - Levenshtein typo tolerance for short tokens
       - Multi-intent detection
       - Coreference resolution ("tell me about that", "is it safe" →
         resolves to the last-mentioned product/ingredient)

   • CONVERSATION MEMORY:
       - Last-discussed entity (product/ingredient/routine) tracked for
         pronoun resolution
       - "Tell me more" continues the last topic

   • VOICE INPUT via Web Speech API (microphone button) with graceful
     fallback when unavailable.

   • FEEDBACK — every bot reply gets a 👍/👎 affordance.

   Architecture (within a single IIFE for namespace hygiene):
       1. CONSTANTS              — synonyms, intents, copy
       2. UTILS                  — tokenize, levenshtein, escape, etc.
       3. CONTEXT PROBE          — current page, cart, quiz history
       4. CORPUS                 — FAQ/product/bundle/ingredient atoms
       5. UNDERSTANDING          — synonym expand, typo correct, intent classify
       6. SCORING                — improved over v1 with synonym-aware tokens
       7. ACTION HANDLERS        — registry of executable commands
       8. RICH CARD RENDERERS    — product / routine / ingredient / study / compare cards
       9. RESPONSE BUILDER       — ties intent + action + render
      10. UI                     — panel, voice, feedback, conversation
      11. INIT */

(function() {
  'use strict';

  /* ════════════════════════════════════════════════════════════════════
     1. CONSTANTS — synonyms, intents, brand copy
     ════════════════════════════════════════════════════════════════════ */

  const STORAGE_KEY      = 'dh_chatbot_history_v2';
  const FEEDBACK_KEY     = 'dh_chatbot_feedback_v1';
  const MEMORY_KEY       = 'dh_chatbot_memory_v1';

  /* ════════════════════════════════════════════════════════════════════════
     BRAND-PROVIDED CLAUDE API KEY
     ════════════════════════════════════════════════════════════════════════
     Set BRAND_API_KEY below to enable Claude for every visitor automatically.
     When set, the chatbot opens in Claude mode by default without requiring
     visitors to provide their own key. Visitors can still override with
     their own key via the settings modal (gear icon → enter key → Save).

     ⚠ SECURITY TRADE-OFF: any key placed in client-side JavaScript is
       visible to anyone who views the page source. For a production
       deployment, you should instead set up a small backend proxy (e.g.
       a Cloudflare Worker or Vercel function) that holds the real key
       server-side and exposes a single rate-limited endpoint, then point
       this constant at that proxy URL by setting BRAND_API_PROXY below.

     For a personal/demo site, putting your own key here is a deliberate
     trade-off: simplicity + auto-Claude vs. someone could grab it and
     burn through credits. Anthropic enforces per-key rate limits, so
     worst-case the spend is bounded, but rotate the key if abused.
     ════════════════════════════════════════════════════════════════════════ */
  const BRAND_API_KEY    = '';  // ← cleared; key now lives server-side in the Cloudflare Worker
  const BRAND_API_PROXY  = 'https://claud-proxy.daniellruggiero.workers.dev';  // Cloudflare Worker proxy holding the real Anthropic key

  /* BRAND_CLAUDE_READY — single switch for whether brand-provided Claude is
     live for all visitors. Flip this to true ONLY when:
       (1) BRAND_API_KEY is set OR BRAND_API_PROXY is configured, AND
       (2) The Anthropic account has a positive credit balance, AND
       (3) Optional safety: spend limits are set in the Anthropic console.
     Until then, the chatbot opens in rule-based mode and shows a "Claude
     coming soon" callout. Visitors can still opt-in early with their own
     API key via the settings modal. */
  const BRAND_CLAUDE_READY = false;  // ← flip to true once Anthropic credits are loaded

  const CLAUDE_KEY_STORAGE   = 'dh_chatbot_claude_key';
  const CLAUDE_ON_STORAGE    = 'dh_chatbot_claude_enabled';
  const CLAUDE_MODEL_STORAGE = 'dh_chatbot_claude_model';
  const CLAUDE_DEFAULT_MODEL = 'claude-haiku-4-5-20251001';
  const CLAUDE_MODELS = [
    { id: 'claude-haiku-4-5-20251001', label: 'Haiku 4.5 · fastest, cheapest' },
    { id: 'claude-sonnet-4-6',          label: 'Sonnet 4.6 · balanced' },
    { id: 'claude-opus-4-7',            label: 'Opus 4.7 · smartest, slowest' }
  ];
  const MAX_HISTORY      = 50;
  const CONFIDENCE_FLOOR = 1.4;

  const STOP_WORDS = new Set([
    'a','an','the','and','or','but','is','are','was','were','be','been','being',
    'have','has','had','do','does','did','will','would','could','should','may',
    'might','must','can','of','to','in','on','at','for','with','about','from',
    'as','by','this','that','these','those','my','your','our','their','its',
    'i','you','he','she','it','we','they','me','him','her','us','them',
    'what','when','where','why','how','who','which','if','then','so','than',
    'just','also','only','really','very','too','quite','still','already','yet',
    'some','any','all','each','every','no','not','more','less','most','least'
  ]);

  // Synonym groups — when any token appears, we ALSO add the canonical form
  // to the user token set. Lets "refund"/"money back"/"send back" all route
  // to the same return-policy FAQ.
  const SYNONYM_GROUPS = [
    { canonical: 'return',     aliases: ['refund', 'refunds', 'returning', 'send', 'back', 'exchange', 'unhappy', 'unsatisfied', 'guarantee', 'satisfaction', 'moneyback'] },
    { canonical: 'shipping',   aliases: ['delivery', 'ship', 'shipped', 'arrive', 'arrival', 'fast', 'tracking', 'track', 'package', 'shipment', 'postal', 'mail'] },
    { canonical: 'subscribe',  aliases: ['subscription', 'subscriber', 'auto', 'autoship', 'recurring', 'recur', 'membership', 'monthly', 'plan'] },
    { canonical: 'cancel',     aliases: ['canceling', 'cancellation', 'stop', 'pause', 'unsubscribe', 'quit', 'end'] },
    { canonical: 'cart',       aliases: ['basket', 'order', 'purchase', 'buying', 'checkout', 'pay', 'payment'] },
    { canonical: 'cost',       aliases: ['price', 'pricing', 'expensive', 'cheap', 'affordable', 'budget', 'discount', 'sale', 'deal'] },
    { canonical: 'safe',       aliases: ['safety', 'side', 'effect', 'sideeffects', 'allergic', 'allergy', 'reaction', 'risk', 'dangerous'] },
    { canonical: 'pregnant',   aliases: ['pregnancy', 'nursing', 'breastfeeding', 'baby', 'expecting'] },
    { canonical: 'ingredient', aliases: ['ingredients', 'active', 'actives', 'formula', 'contain', 'contains', 'includes', 'made'] },
    { canonical: 'skincare',   aliases: ['skin', 'face', 'facial', 'topical', 'serum', 'cream', 'moisturizer', 'cleanser', 'toner'] },
    { canonical: 'supplement', aliases: ['supplements', 'vitamin', 'vitamins', 'pill', 'capsule', 'tablet', 'gummy', 'powder'] },
    { canonical: 'aging',      aliases: ['wrinkles', 'wrinkle', 'collagen', 'firmness', 'sagging', 'old', 'older', 'antiaging'] },
    { canonical: 'acne',       aliases: ['breakout', 'breakouts', 'pimple', 'pimples', 'blemish', 'blemishes', 'spot', 'spots', 'zit', 'zits', 'oily'] },
    { canonical: 'dry',        aliases: ['dryness', 'dehydrated', 'flaky', 'tight', 'parched'] },
    { canonical: 'sleep',      aliases: ['sleeping', 'insomnia', 'tired', 'rest', 'bedtime', 'sleeplessness'] },
    { canonical: 'energy',     aliases: ['energetic', 'fatigue', 'fatigued', 'sluggish', 'exhausted', 'drained'] },
    { canonical: 'stress',     aliases: ['stressed', 'anxiety', 'anxious', 'overwhelmed', 'cortisol', 'tense'] },
    { canonical: 'focus',      aliases: ['focused', 'concentration', 'cognitive', 'memory', 'clarity', 'brain'] },
    { canonical: 'workout',    aliases: ['exercise', 'training', 'gym', 'fitness', 'performance', 'lift', 'lifting', 'cardio', 'recovery'] },
    { canonical: 'compare',    aliases: ['vs', 'versus', 'difference', 'different', 'between', 'against'] },
    { canonical: 'help',       aliases: ['recommend', 'suggest', 'suggestion', 'advice', 'guide', 'pick', 'choose'] },
    { canonical: 'quiz',       aliases: ['questionnaire', 'survey', 'find'] },
    { canonical: 'routine',    aliases: ['routines', 'regimen', 'regime', 'protocol', 'stack', 'system'] },
    { canonical: 'bundle',     aliases: ['bundles', 'set', 'pack', 'kit', 'collection', 'combo'] },
    { canonical: 'gut',        aliases: ['stomach', 'digestive', 'digestion', 'bloating', 'microbiome', 'intestinal'] },
    { canonical: 'joint',      aliases: ['joints', 'inflammation', 'inflammatory', 'arthritis', 'mobility', 'stiffness', 'pain'] },
    { canonical: 'immune',     aliases: ['immunity', 'sick', 'illness', 'cold', 'flu', 'antioxidant'] },
    { canonical: 'add',        aliases: ['adding', 'put', 'place', 'buy', 'purchase'] },
    { canonical: 'contact',    aliases: ['email', 'reach', 'call', 'phone', 'support', 'human', 'person', 'someone', 'service'] }
  ];

  const SYNONYM_MAP = {};
  SYNONYM_GROUPS.forEach(g => {
    SYNONYM_MAP[g.canonical] = g.canonical;
    g.aliases.forEach(a => { SYNONYM_MAP[a] = g.canonical; });
  });

  const STARTER_SUGGESTIONS = [
    'How does Smart Refill work?',
    'Help me find a routine',
    'Compare the AM and PM Routines',
    'I have dry skin — what should I use?',
    'How fast does shipping arrive?'
  ];

  const PAGE_SUGGESTIONS = {
    'product.html':     ["What's in this?",          "Compare with another product", "Is this safe during pregnancy?"],
    'routine.html':     ["What's in this routine?",  "How is Smart Refill different?", "Compare with another routine"],
    'routines.html':    ["Help me pick a routine",   "What's the difference between routines?", "How does Smart Refill save money?"],
    'bundles.html':     ["Which bundle is for me?",  "How does the discount stack with subscribe?", "Compare two bundles"],
    'skincare.html':    ["I have dry skin — what should I use?", "What does retinol do?", "AM vs PM routine?"],
    'supplements.html': ["What's in Daniel's Daily Supplements?", "Help me with sleep / stress / energy", "Is BioPerine important?"],
    'ingredients.html': ["What's the strongest evidence for retinol?", "Niacinamide vs vitamin C?", "What is bakuchiol?"],
    'studies.html':     ["Show me studies on Smart Refill ingredients", "What evidence supports ashwagandha?", "Most-cited study in the library?"],
    'quiz.html':        ["What does the quiz do?", "Can I retake it?", "Can I subscribe to the quiz result?"],
    'faq.html':         ["How do returns work?", "Can I cancel my subscription?", "Smart Refill explained"]
  };

  /* ════════════════════════════════════════════════════════════════════
     2. UTILS
     ════════════════════════════════════════════════════════════════════ */

  function tokenize(text) {
    if (!text) return [];
    return text
      .toLowerCase()
      .replace(/[''']/g, "'")
      .replace(/[^a-z0-9'\s]/g, ' ')
      .split(/\s+/)
      .filter(t => t && t.length > 1 && !STOP_WORDS.has(t));
  }

  function lev(a, b) {
    if (a === b) return 0;
    if (!a.length) return b.length;
    if (!b.length) return a.length;
    const m = [];
    for (let i = 0; i <= b.length; i++) m[i] = [i];
    for (let j = 0; j <= a.length; j++) m[0][j] = j;
    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        m[i][j] = b.charAt(i - 1) === a.charAt(j - 1)
          ? m[i - 1][j - 1]
          : Math.min(m[i - 1][j - 1] + 1, m[i][j - 1] + 1, m[i - 1][j] + 1);
      }
    }
    return m[b.length][a.length];
  }

  function expandWithSynonyms(tokens) {
    const out = new Set(tokens);
    tokens.forEach(t => {
      const canon = SYNONYM_MAP[t];
      if (canon && canon !== t) out.add(canon);
    });
    return [...out];
  }

  function escapeText(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  function stripHTML(html) {
    const d = document.createElement('div');
    d.innerHTML = html;
    return d.textContent || '';
  }

  function formatPrice(n) {
    return '$' + Number(n).toFixed(2);
  }

  /* ════════════════════════════════════════════════════════════════════
     3. CONTEXT PROBE — current page, cart contents
     ════════════════════════════════════════════════════════════════════ */

  function getCurrentPage() {
    const path = (window.location.pathname || '').split('/').pop() || 'index.html';
    return path || 'index.html';
  }

  function getCartContext() {
    const items = (window.dhCart && window.dhCart.items) || [];
    if (!items.length) return { count: 0, subtotal: 0, hasSubscribe: false, hasSmartRefill: false, bundles: [] };
    let subtotal = 0;
    items.forEach(i => {
      let p = i.price;
      if (i.bundleName && i.bundleDiscount) {
        p = p * (1 - i.bundleDiscount);
        if (i.subscribe) p *= 0.9;
      } else if (i.subscribe) p *= 0.9;
      subtotal += p * i.qty;
    });
    return {
      count: items.reduce((s, i) => s + i.qty, 0),
      subtotal: subtotal,
      hasSubscribe: items.some(i => i.subscribe),
      hasSmartRefill: items.some(i => i.cadence === 'smart'),
      bundles: [...new Set(items.filter(i => i.bundleName).map(i => i.bundleName))]
    };
  }

  /* ════════════════════════════════════════════════════════════════════
     4. CORPUS ASSEMBLY
     ════════════════════════════════════════════════════════════════════ */

  function buildCorpus() {
    const corpus = [];

    (window.DH_FAQ_DATA || []).forEach((entry, i) => {
      corpus.push({
        kind: 'faq',
        id: `faq-${i}`,
        title: entry.q,
        body: stripHTML(entry.a),
        bodyHTML: entry.a,
        cat: entry.cat,
        qTokens: tokenize(entry.q),
        bodyTokens: tokenize(stripHTML(entry.a))
      });
    });

    (window.PRODUCTS || []).forEach(p => {
      const fullName = `The House ${p.name}`;
      const body = `${fullName}: ${p.blurb || ''} Price: ${formatPrice(p.price)}. ${p.tag ? 'Tagged as ' + p.tag + '.' : ''}`;
      corpus.push({
        kind: 'product',
        id: `product-${p.slug}`,
        slug: p.slug,
        title: fullName,
        shortName: p.name,
        body: body,
        cat: p.category === 'skincare' ? 'Skincare' : 'Supplements',
        ref: p,
        qTokens: tokenize(`${fullName} ${p.name} ${p.tag || ''}`),
        bodyTokens: tokenize(body)
      });
    });

    const allBundles = (window.CURATED_BUNDLES || []).concat(window.CONCERN_BUNDLES || []);
    allBundles.forEach(b => {
      const products = (b.slugs || []).map(s => window.getProductBySlug?.(s)).filter(Boolean);
      const productList = products.map(p => `The House ${p.name}`).join(', ');
      const isRoutine = (window.CURATED_BUNDLES || []).some(x => x.id === b.id);
      const discountPct = Math.round((b.discount || 0.15) * 100);
      const body = `${b.name} contains ${products.length} products: ${productList}. ${discountPct}% off as a bundle. ${b.blurb || ''}`;
      corpus.push({
        kind: 'bundle',
        id: `bundle-${b.id}`,
        slug: b.id,
        title: b.name,
        body: body,
        cat: isRoutine ? 'Routines' : 'Bundles',
        ref: b,
        isRoutine: isRoutine,
        products: products,
        qTokens: tokenize(`${b.name} routine bundle ${productList}`),
        bodyTokens: tokenize(body)
      });
    });

    (window.INGREDIENTS || []).forEach(ing => {
      const aliasText = ing.alt ? ` (also ${ing.alt})` : '';
      const body = `${ing.name}${aliasText}: ${ing.body || ''} ${ing.evidence || 'moderate'} evidence. ${(ing.tags || []).join(', ')}.`;
      corpus.push({
        kind: 'ingredient',
        id: `ingredient-${ing.slug}`,
        slug: ing.slug,
        title: ing.name,
        body: body,
        cat: ing.cat === 'skincare' ? 'Skincare Ingredient' : 'Supplement Ingredient',
        ref: ing,
        qTokens: tokenize(`${ing.name} ${ing.alt || ''} ${(ing.tags || []).join(' ')}`),
        bodyTokens: tokenize(body)
      });
    });

    return corpus;
  }

  /* ════════════════════════════════════════════════════════════════════
     5. INTENT CLASSIFICATION
     ════════════════════════════════════════════════════════════════════ */

  function classifyIntent(query, memory) {
    const q = query.toLowerCase().trim();
    const tokens = tokenize(query);
    const expanded = expandWithSynonyms(tokens);
    const expSet = new Set(expanded);

    if (/^(hi|hey|hello|yo|sup|howdy)\b/.test(q) || /^good (morning|afternoon|evening)\b/.test(q)) return { kind: 'greeting' };
    if (/^(thanks|thank you|ty|thx|appreciate it|got it|cool|great|perfect|awesome)\b/.test(q)) return { kind: 'thanks' };
    if (/^(bye|goodbye|cya|see ya|later|talk soon)\b/.test(q)) return { kind: 'farewell' };
    if (/(are you (a |an )?(bot|robot|ai|computer|human|real|person))|^who are you/.test(q)) return { kind: 'meta' };
    if (/(speak to|talk to|contact|email|reach|call) (a |an |the )?(human|person|someone|customer service|support|daniel)/.test(q)
        || /(email|contact) (address|us|you)/.test(q)) {
      return { kind: 'contact' };
    }

    // ADD TO CART
    const addMatch = q.match(/(?:^|\b)(add|buy|get|i want|i'll take|put|include)\s+(?:the\s+)?(.+?)(?:\s+(?:to|in|into)\s+(?:my\s+)?(?:cart|basket|order))?$/i);
    if (addMatch && (/cart|basket|buy|order|want|take/i.test(q) || expSet.has('add') || expSet.has('cart'))) {
      const target = addMatch[2].trim();
      // Flag if the ORIGINAL query had the brand-product prefix "The House X",
      // which signals a single-product ask. The capturing regex strips "the "
      // before the target, so we check the full lowercase query.
      const looksLikeProduct = /\bthe\s+house\b/i.test(q) || /\bhouse\b/i.test(target);
      return { kind: 'add_to_cart', target: target, looksLikeProduct: looksLikeProduct };
    }

    // COMPARE
    const cmpMatch = q.match(/(?:compare|comparison|vs\.?|versus|difference between)\s+(.+?)\s+(?:and|vs\.?|versus|to|with)\s+(.+?)(?:\?|$)/i);
    if (cmpMatch) {
      return { kind: 'compare', a: cmpMatch[1].trim(), b: cmpMatch[2].trim() };
    }

    // FILTER BY PRICE
    const priceMatch = q.match(/(?:under|below|less than|cheaper than)\s*\$?\s*(\d+)/);
    if (priceMatch) {
      let category = null;
      if (expSet.has('skincare')) category = 'skincare';
      else if (expSet.has('supplement')) category = 'supplement';
      return { kind: 'filter_by_price', max: parseFloat(priceMatch[1]), category: category };
    }

    // CART STATUS
    if (/(what'?s|show me|view).*(my )?cart/.test(q) || /^cart$/.test(q) || /how much.*cart/.test(q)) {
      return { kind: 'cart_status' };
    }

    // CONCERN-BASED RECOMMENDATIONS
    const concernKeywords = {
      'aging':   ['aging', 'wrinkles', 'wrinkle', 'old', 'older', 'collagen', 'fine', 'lines', 'sagging'],
      'acne':    ['acne', 'breakout', 'pimple', 'blemish', 'spot', 'zit', 'oily'],
      'dryness': ['dry', 'dehydrated', 'flaky', 'tight', 'parched'],
      'sleep':   ['sleep', 'insomnia', 'tired', 'rest'],
      'energy':  ['energy', 'fatigue', 'sluggish', 'exhausted', 'drained'],
      'stress':  ['stress', 'anxious', 'anxiety', 'overwhelmed'],
      'focus':   ['focus', 'concentration', 'cognitive', 'memory', 'brain'],
      'gut':     ['gut', 'stomach', 'digestion', 'bloating'],
      'joints':  ['joint', 'inflammation', 'arthritis', 'pain', 'mobility'],
      'immune':  ['immune', 'immunity', 'cold', 'flu', 'sick'],
      'strength':['workout', 'training', 'gym', 'performance', 'strength', 'lift', 'lifting', 'muscle', 'recovery'],
      'hair-nails':['hair', 'nails', 'nail', 'biotin', 'thinning', 'shedding', 'brittle', 'thicker'],
      'travel':  ['travel', 'traveling', 'flying', 'flight', 'trip', 'hotel', 'jet lag', 'jetlag', 'carry-on'],
      'cycle':   ['cycle', 'pms', 'period', 'hormones', 'hormonal', 'menstrual', 'luteal'],
      'metabolic':['metabolic', 'metabolism', 'burn fat', 'fat loss', 'weight', 'pre-workout', 'carnitine'],
      'glow':    ['glow', 'beauty', 'brighten', 'brightening', 'luminous', 'luminosity', 'radiance'],
      'dullness':['dull', 'dullness'],
      'sensitivity':['sensitive', 'sensitivity', 'reactive', 'redness']
    };
    if (/^(i have|i'?ve got|i'?m dealing with|i suffer from|i struggle with|help me with)\b/i.test(q)
        || /^my\s+(skin|hair|gut|joints|sleep|energy|stress)/i.test(q)) {
      for (const [concern, kws] of Object.entries(concernKeywords)) {
        if (kws.some(k => expSet.has(k))) return { kind: 'concern', concern: concern };
      }
    }

    // NAVIGATION
    if (/(take|start|do|launch|open) (the |my )?(quiz|questionnaire)/.test(q) || (expSet.has('help') && expSet.has('quiz'))) {
      return { kind: 'navigate_quiz' };
    }
    if (/(help me (find|pick|choose)|recommend|suggest) (a |an |the )?(routine|bundle|product|stack)/.test(q)) {
      return { kind: 'navigate_quiz' };
    }

    // TELL ME MORE
    if (/(tell me more|more (info|information|details)|expand|elaborate|continue|keep going|go on)/.test(q)
        && memory.lastEntity) {
      return { kind: 'tell_more', entityType: memory.lastEntity.type, entityId: memory.lastEntity.id };
    }

    // COREFERENCE
    if ((/\b(it|that|this|those|them|they)\b/.test(q)) && memory.lastEntity && tokens.length <= 5) {
      return { kind: 'coreference', resolved: memory.lastEntity, originalQuery: query };
    }

    return null;
  }

  /* ════════════════════════════════════════════════════════════════════
     6. SCORING
     ════════════════════════════════════════════════════════════════════ */

  const KIND_WEIGHT = { faq: 1.0, bundle: 1.05, product: 1.05, ingredient: 1.05 };

  function scoreEntry(entry, userTokens) {
    if (!userTokens.length) return 0;
    let score = 0;
    const qSet = new Set(entry.qTokens);
    const bSet = new Set(entry.bodyTokens);
    const userSet = new Set(userTokens);

    userTokens.forEach(t => {
      if (qSet.has(t)) score += 3;
      else if (bSet.has(t)) score += 1;
      else if (entry.title.toLowerCase().includes(t)) score += 1.5;
      else if (t.length >= 4 && t.length <= 12) {
        for (const titleTok of entry.qTokens) {
          if (Math.abs(titleTok.length - t.length) <= 1 && lev(t, titleTok) === 1) {
            score += 2;
            break;
          }
        }
      }
    });
    if (entry.cat && userTokens.some(t => entry.cat.toLowerCase().includes(t))) score += 1.5;
    if (entry.qTokens.length > 0) {
      const covered = entry.qTokens.filter(t => userSet.has(t)).length;
      const coverage = covered / entry.qTokens.length;
      if (coverage === 1.0)      score += 8;
      else if (coverage >= 0.66) score += 2;
    }
    const lenPenalty = Math.log(entry.bodyTokens.length + 10) / 4;
    return (score / lenPenalty) * (KIND_WEIGHT[entry.kind] || 1.0);
  }

  function findBestMatches(userQuery, corpus, topN) {
    const rawTokens = tokenize(userQuery);
    const userTokens = expandWithSynonyms(rawTokens);
    if (!userTokens.length) return [];
    const scored = corpus.map(e => ({ entry: e, score: scoreEntry(e, userTokens) }));
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, topN || 6).filter(s => s.score > 0);
  }

  function findEntityByName(name, corpus, kindFilter) {
    const n = name.toLowerCase().trim();
    let pool = corpus;
    if (kindFilter) pool = pool.filter(e => kindFilter.includes(e.kind));
    let hit = pool.find(e => e.title.toLowerCase() === n);
    if (hit) return hit;
    hit = pool.find(e => e.shortName && e.shortName.toLowerCase() === n);
    if (hit) return hit;
    hit = pool.find(e => e.title.toLowerCase().includes(n));
    if (hit) return hit;
    const slugMap = { 'am': 'am', 'pm': 'pm', 'glow': 'glow', 'workout': 'workout', 'mom': 'moms', "mom's": 'moms', 'arianas': 'arianas', "ariana's": 'arianas', 'ariana': 'arianas', 'ultimate': 'ultimate', 'daily': 'daniels-daily', 'foundation': 'foundation', 'longevity': 'longevity', 'reset': 'spa', 'weekly': 'spa', 'spa': 'spa' };
    if (slugMap[n]) {
      hit = pool.find(e => e.slug === slugMap[n]);
      if (hit) return hit;
    }
    const tokens = tokenize(name);
    if (tokens.length) {
      let best = null, bestScore = 0;
      pool.forEach(e => {
        const score = scoreEntry(e, expandWithSynonyms(tokens));
        if (score > bestScore) { bestScore = score; best = e; }
      });
      // Threshold tuned to 4 — at 2, body-only matches (e.g. a bundle containing
      // a product the user named) could weakly outscore the product itself. At 4,
      // a real match needs a title-token hit, not just a body token.
      if (best && bestScore >= 4) return best;
    }
    return null;
  }

  /* ════════════════════════════════════════════════════════════════════
     7. ACTION HANDLERS
     ════════════════════════════════════════════════════════════════════ */

  function actAddToCart(target, corpus, hints) {
    hints = hints || {};
    // Use the hint from the intent classifier — checked the FULL query, not
    // just the target token (which has "the" stripped by the capturing regex).
    let entity;
    if (hints.looksLikeProduct) {
      entity = findEntityByName(target, corpus, ['product']);
      if (!entity) entity = findEntityByName(target, corpus, ['bundle']);
    } else {
      entity = findEntityByName(target, corpus, ['bundle']);
      if (!entity) entity = findEntityByName(target, corpus, ['product']);
    }
    if (!entity) {
      return {
        kind: 'action-fail',
        message: `I couldn't find "${escapeText(target)}" — could you try a more specific name? For example: "add the AM Routine to my cart" or "add The House Multi".`,
        suggestions: ['Show me the routines', 'Help me pick a routine', "What's in the AM Routine?"]
      };
    }
    if (entity.kind === 'bundle') {
      const b = entity.ref;
      if (window.dhCart && window.dhCart.addBundle) {
        window.dhCart.addBundle(b.slugs, b.name, b.discount || 0.15, false);
        const productCount = (b.slugs || []).length;
        return {
          kind: 'action-success',
          cardHTML: renderActionConfirmCard({
            icon: '✓',
            title: `Added ${b.name} to your cart.`,
            sub: `${productCount} products at ${Math.round((b.discount || 0.15) * 100)}% off as a bundle. Subscribe at checkout for an additional 10% off.`,
            actions: [
              { label: 'View Cart',         cmd: 'open_cart' },
              { label: 'Make it Subscribe', cmd: 'subscribe_last' }
            ]
          }),
          entity: { type: 'bundle', id: entity.id }
        };
      }
    } else if (entity.kind === 'product') {
      const p = entity.ref;
      if (window.dhCart && window.dhCart.add) {
        window.dhCart.add(p, { subscribe: false });
        return {
          kind: 'action-success',
          cardHTML: renderActionConfirmCard({
            icon: '✓',
            title: `Added The House ${p.name} to your cart.`,
            sub: formatPrice(p.price) + ' · ' + (p.tag || ''),
            actions: [
              { label: 'View Cart',    cmd: 'open_cart' },
              { label: 'See Details',  href: `product.html?slug=${p.slug}` }
            ]
          }),
          entity: { type: 'product', id: entity.id }
        };
      }
    }
    return { kind: 'no-match', message: 'Add-to-cart not available right now.' };
  }

  function actCompare(a, b, corpus) {
    const entA = findEntityByName(a, corpus, ['product', 'bundle', 'ingredient']);
    const entB = findEntityByName(b, corpus, ['product', 'bundle', 'ingredient']);
    if (!entA || !entB) {
      return {
        kind: 'low-confidence',
        message: `I couldn't find ${!entA ? `"${escapeText(a)}"` : `"${escapeText(b)}"`}. Try the full name — for example, "compare the AM Routine vs the PM Routine".`,
        suggestions: ['Compare AM vs PM Routine', 'Compare retinol vs bakuchiol', 'Compare Foundation vs Longevity Stack']
      };
    }
    return {
      kind: 'compare',
      cardHTML: renderCompareCard(entA, entB),
      entity: { type: entA.kind, id: entA.id }
    };
  }

  function actFilterByPrice(max, category, corpus) {
    let pool = corpus.filter(e => e.kind === 'product');
    if (category) pool = pool.filter(e => e.ref && e.ref.category === category);
    const matches = pool.filter(e => e.ref && e.ref.price <= max);
    matches.sort((x, y) => (x.ref.price - y.ref.price));
    if (!matches.length) {
      return {
        kind: 'no-match',
        message: `Nothing in${category ? ` ${category}` : ''} under $${max}. The cheapest${category ? ` ${category}` : ''} option starts at ${formatPrice(Math.min(...pool.map(e => e.ref.price)))}.`,
        suggestions: ['Show me all routines', 'How does the bundle discount work?', 'What does subscribe save?']
      };
    }
    const showing = matches.slice(0, 6);
    return {
      kind: 'filter',
      message: `Found ${matches.length} ${category || 'product'}${matches.length === 1 ? '' : 's'} under $${max}.`,
      cardHTML: renderProductGridCard(showing.map(e => e.ref), `${category ? category.charAt(0).toUpperCase() + category.slice(1) : 'Product'}s under $${max}`),
      suggestions: ['Compare two of these', 'Help me pick a routine', "What's the cheapest bundle?"]
    };
  }

  function actCartStatus() {
    const ctx = getCartContext();
    if (ctx.count === 0) {
      return {
        kind: 'cart-status',
        message: "Your cart is empty. Want me to help you find something?",
        suggestions: ['Help me find a routine', 'Show me popular bundles', "What's Daniel's Daily Supplements?"]
      };
    }
    return {
      kind: 'cart-status',
      cardHTML: renderCartSummaryCard(ctx),
      suggestions: ctx.hasSubscribe ? ['How does Smart Refill work?', 'Can I change frequency later?', 'When will I be charged?']
                                    : ['Should I subscribe?', 'How much does subscribing save?', 'Smart Refill explained']
    };
  }

  function actConcernRecommendation(concern, corpus) {
    const concernBundles = (window.CONCERN_BUNDLES || []);
    const direct = concernBundles.find(b => b.id === concern);
    const routines = (window.CURATED_BUNDLES || []);
    const concernRoutineMap = {
      'aging':  ['pm', 'glow'],
      'acne':   ['am', 'pm'],
      'dryness': ['pm', 'am'],
      'sleep':   ['longevity'],
      'energy':  ['foundation', 'workout'],
      'stress':  ['longevity'],
      'focus':   ['longevity'],
      'gut':     ['foundation'],
      'joints':  ['longevity'],
      'immune':  ['foundation'],
      'strength': ['workout'],
      'hair-nails': ['arianas', 'daniels-skincare'],
      'travel': ['foundation', 'am'],
      'cycle': ['moms', 'foundation'],
      'metabolic': ['workout', 'daniels-daily'],
      'glow':    ['arianas', 'daniels-skincare'],
      'dullness': ['am']
    };
    const relatedRoutineIds = concernRoutineMap[concern] || [];
    const relatedRoutines = routines.filter(r => relatedRoutineIds.includes(r.id));
    const concernCorpus = corpus.find(e => e.kind === 'bundle' && e.ref && e.ref.id === concern);
    return {
      kind: 'concern',
      message: `Got it — for ${concern.replace(/-/g, ' ')}, here's what I'd point to:`,
      cardHTML: renderConcernCard(concern, direct, relatedRoutines),
      suggestions: ['Help me with the quiz', `What's in the ${(direct?.name) || 'recommended bundle'}?`, 'Can I subscribe?'],
      entity: concernCorpus ? { type: 'bundle', id: concernCorpus.id } : null
    };
  }

  /* ════════════════════════════════════════════════════════════════════
     8. RICH CARD RENDERERS
     ════════════════════════════════════════════════════════════════════ */

  function renderProductCard(product) {
    return `
      <div class="dh-chat-card dh-chat-card-product">
        <a href="product.html?slug=${product.slug}" class="dh-chat-card-img">
          <img src="${product.image}" alt="${product.name}" loading="lazy"/>
        </a>
        <div class="dh-chat-card-body">
          <div class="dh-chat-card-cat">${product.category === 'skincare' ? 'Skincare' : 'Supplement'} · ${(product.tag || '').split('·')[0].trim()}</div>
          <div class="dh-chat-card-name">The House <em>${product.name}</em></div>
          <div class="dh-chat-card-blurb">${(product.blurb || '').slice(0, 110)}${(product.blurb || '').length > 110 ? '…' : ''}</div>
          <div class="dh-chat-card-foot">
            <span class="dh-chat-card-price">${formatPrice(product.price)}</span>
            <button class="dh-chat-card-btn" data-cmd="add-product" data-slug="${product.slug}">Add to Cart</button>
          </div>
        </div>
      </div>
    `;
  }

  function renderBundleCard(bundle, products, isRoutine) {
    const fullPrice  = products.reduce((s, p) => s + p.price, 0);
    const finalPrice = fullPrice * (1 - (bundle.discount || 0.15));
    const discountPct = Math.round((bundle.discount || 0.15) * 100);
    return `
      <div class="dh-chat-card dh-chat-card-bundle">
        <div class="dh-chat-card-bundle-eyebrow">${isRoutine ? 'Routine' : 'Bundle'} · ${discountPct}% off</div>
        <div class="dh-chat-card-name">${bundle.name}</div>
        <div class="dh-chat-card-bundle-products">
          ${products.slice(0, 6).map(p => `
            <div class="dh-chat-mini-prod" title="The House ${p.name}">
              <img src="${p.image}" alt=""/>
              <span>${p.name}</span>
            </div>
          `).join('')}
          ${products.length > 6 ? `<div class="dh-chat-mini-prod dh-chat-mini-more">+${products.length - 6} more</div>` : ''}
        </div>
        <div class="dh-chat-card-foot">
          <div class="dh-chat-card-pricing">
            <span class="dh-chat-card-was">${formatPrice(fullPrice)}</span>
            <span class="dh-chat-card-price">${formatPrice(finalPrice)}</span>
          </div>
          <button class="dh-chat-card-btn" data-cmd="add-bundle" data-slug="${bundle.id}">Add to Cart</button>
        </div>
        <a class="dh-chat-card-link" href="${isRoutine ? 'routine' : 'concern'}.html?slug=${bundle.id}">View full ${isRoutine ? 'routine' : 'bundle'} page →</a>
      </div>
    `;
  }

  function renderIngredientCard(ing) {
    return `
      <div class="dh-chat-card dh-chat-card-ingredient">
        <div class="dh-chat-card-cat">${ing.cat === 'skincare' ? 'Skincare Ingredient' : 'Supplement Ingredient'} · ${ing.evidence || 'moderate'} evidence</div>
        <div class="dh-chat-card-name">${ing.name}</div>
        ${ing.alt ? `<div class="dh-chat-card-alt">also known as ${ing.alt}</div>` : ''}
        <div class="dh-chat-card-blurb">${(ing.body || '').slice(0, 220)}${(ing.body || '').length > 220 ? '…' : ''}</div>
        ${(ing.studies && ing.studies.length) ? `<div class="dh-chat-card-studies-pill">${ing.studies.length} ${ing.studies.length === 1 ? 'study' : 'studies'} on file</div>` : ''}
        <a class="dh-chat-card-link" href="ingredient.html?slug=${ing.slug}">View full ingredient page →</a>
      </div>
    `;
  }

  function renderActionConfirmCard(opts) {
    const actionsHTML = (opts.actions || []).map(a => {
      const attrs = a.cmd ? `data-cmd="${a.cmd}"` : `href="${a.href}"`;
      const tag = a.cmd ? 'button' : 'a';
      return `<${tag} class="dh-chat-card-btn ${a.cmd ? '' : 'dh-chat-card-link-btn'}" ${attrs}>${a.label}</${tag}>`;
    }).join('');
    return `
      <div class="dh-chat-card dh-chat-card-action">
        <div class="dh-chat-card-action-row">
          <div class="dh-chat-card-action-icon">${opts.icon || '✓'}</div>
          <div>
            <div class="dh-chat-card-name">${opts.title}</div>
            ${opts.sub ? `<div class="dh-chat-card-blurb">${opts.sub}</div>` : ''}
          </div>
        </div>
        ${actionsHTML ? `<div class="dh-chat-card-actions-row">${actionsHTML}</div>` : ''}
      </div>
    `;
  }

  function renderCompareCard(entA, entB) {
    function summarize(e) {
      if (e.kind === 'bundle') {
        const products = (e.ref.slugs || []).map(s => window.getProductBySlug?.(s)).filter(Boolean);
        const fullPrice = products.reduce((s, p) => s + p.price, 0);
        const finalPrice = fullPrice * (1 - (e.ref.discount || 0.15));
        return {
          label: e.title,
          cat: e.isRoutine ? 'Routine' : 'Bundle',
          rows: [
            ['Products',   products.length + ' bottles'],
            ['Categories', `${products.filter(p => p.category === 'skincare').length} skin · ${products.filter(p => p.category === 'supplement').length} supp`],
            ['Discount',   `${Math.round((e.ref.discount || 0.15) * 100)}% off`],
            ['Price',      `${formatPrice(fullPrice)} → ${formatPrice(finalPrice)}`]
          ],
          href: `${e.isRoutine ? 'routine' : 'concern'}.html?slug=${e.ref.id}`
        };
      }
      if (e.kind === 'product') {
        const p = e.ref;
        return {
          label: `The House ${p.name}`,
          cat: p.category === 'skincare' ? 'Skincare' : 'Supplement',
          rows: [
            ['Tag', p.tag || '—'],
            ['Price', formatPrice(p.price)],
            ['Subscribe', formatPrice(p.price * 0.9) + ' (10% off)'],
            ['Summary', (p.blurb || '').slice(0, 70) + ((p.blurb || '').length > 70 ? '…' : '')]
          ],
          href: `product.html?slug=${p.slug}`
        };
      }
      if (e.kind === 'ingredient') {
        const ing = e.ref;
        return {
          label: ing.name,
          cat: ing.cat === 'skincare' ? 'Skincare Ingredient' : 'Supplement Ingredient',
          rows: [
            ['Also',     ing.alt || '—'],
            ['Evidence', ing.evidence || 'moderate'],
            ['Tags',     (ing.tags || []).join(', ') || '—'],
            ['Studies',  (ing.studies || []).length + ' on file']
          ],
          href: `ingredient.html?slug=${ing.slug}`
        };
      }
      return { label: e.title, cat: e.cat, rows: [['Info', stripHTML(e.body).slice(0, 70)]] };
    }
    const sa = summarize(entA);
    const sb = summarize(entB);
    const rowLabels = new Set([...sa.rows.map(r => r[0]), ...sb.rows.map(r => r[0])]);
    const rowsHTML = [...rowLabels].map(label => {
      const va = (sa.rows.find(r => r[0] === label) || ['', '—'])[1];
      const vb = (sb.rows.find(r => r[0] === label) || ['', '—'])[1];
      return `<tr><th>${label}</th><td>${va}</td><td>${vb}</td></tr>`;
    }).join('');
    return `
      <div class="dh-chat-card dh-chat-card-compare">
        <div class="dh-chat-card-cat">Side-by-side comparison</div>
        <table class="dh-chat-compare-table">
          <thead>
            <tr>
              <th></th>
              <th><a href="${sa.href}">${sa.label}</a><span class="dh-chat-compare-sub">${sa.cat}</span></th>
              <th><a href="${sb.href}">${sb.label}</a><span class="dh-chat-compare-sub">${sb.cat}</span></th>
            </tr>
          </thead>
          <tbody>${rowsHTML}</tbody>
        </table>
      </div>
    `;
  }

  function renderProductGridCard(products, title) {
    return `
      <div class="dh-chat-card dh-chat-card-grid">
        ${title ? `<div class="dh-chat-card-cat">${title}</div>` : ''}
        <div class="dh-chat-grid">
          ${products.map(p => `
            <a class="dh-chat-grid-item" href="product.html?slug=${p.slug}">
              <div class="dh-chat-grid-img"><img src="${p.image}" alt="${p.name}" loading="lazy"/></div>
              <div class="dh-chat-grid-name">The House ${p.name}</div>
              <div class="dh-chat-grid-price">${formatPrice(p.price)}</div>
            </a>
          `).join('')}
        </div>
      </div>
    `;
  }

  function renderCartSummaryCard(ctx) {
    return `
      <div class="dh-chat-card dh-chat-card-cart">
        <div class="dh-chat-card-cat">Your Cart</div>
        <div class="dh-chat-card-name">${ctx.count} item${ctx.count === 1 ? '' : 's'} · ${formatPrice(ctx.subtotal)} subtotal</div>
        ${ctx.bundles.length ? `<div class="dh-chat-card-blurb">${ctx.bundles.join(', ')}</div>` : ''}
        ${ctx.hasSubscribe ? `<div class="dh-chat-card-ingredient-pill">↻ Includes subscription items</div>` : ''}
        ${ctx.hasSmartRefill ? `<div class="dh-chat-card-ingredient-pill">↻ Smart Refill active</div>` : ''}
        <div class="dh-chat-card-actions-row">
          <button class="dh-chat-card-btn" data-cmd="open_cart">View Cart</button>
        </div>
      </div>
    `;
  }

  function renderConcernCard(concern, directBundle, relatedRoutines) {
    const parts = [];
    if (directBundle) {
      const products = (directBundle.slugs || []).map(s => window.getProductBySlug?.(s)).filter(Boolean);
      parts.push(renderBundleCard(directBundle, products, false));
    }
    relatedRoutines.forEach(r => {
      const products = (r.slugs || []).map(s => window.getProductBySlug?.(s)).filter(Boolean);
      parts.push(renderBundleCard(r, products, true));
    });
    if (!parts.length) {
      return `<div class="dh-chat-card dh-chat-card-info">For ${concern}, try the <a href="quiz.html" class="dh-chat-link">routine quiz</a> for a personalized stack.</div>`;
    }
    return parts.join('');
  }

  /* ════════════════════════════════════════════════════════════════════
     9. RESPONSE BUILDER
     ════════════════════════════════════════════════════════════════════ */

  function specialIntentResponse(kind) {
    switch (kind) {
      case 'greeting': {
        const cart = getCartContext();
        const page = getCurrentPage();
        let opener = "Hi — I'm Daniel's House's assistant. I can answer questions and do things for you.";
        if (cart.count > 0) opener += ` You've got ${cart.count} item${cart.count === 1 ? '' : 's'} in your cart — want help finishing up?`;
        return {
          kind: 'greeting',
          message: opener,
          suggestions: PAGE_SUGGESTIONS[page] || STARTER_SUGGESTIONS.slice(0, 3)
        };
      }
      case 'thanks':
        return { kind: 'thanks', message: "Anytime. If anything else comes up, I'm here.", suggestions: [] };
      case 'farewell':
        return { kind: 'farewell', message: "Take care. Come back anytime.", suggestions: [] };
      case 'meta':
        return {
          kind: 'meta',
          message: "I'm Daniel's House's assistant — I can pull from the FAQ, product catalog, ingredient glossary, and research library, and I can take actions like adding things to your cart, comparing products, or filtering by price. For things I can't handle, you can email Daniel directly at <a href=\"mailto:daniel@danielshousewellness.com\" class=\"dh-chat-link\">daniel@danielshousewellness.com</a>.",
          suggestions: ['Help me find a routine', 'Compare AM vs PM Routine', "What's in my cart?"]
        };
      case 'contact':
        return {
          kind: 'contact',
          message: "Sure — email Daniel directly at <a href=\"mailto:daniel@danielshousewellness.com\" class=\"dh-chat-link\">daniel@danielshousewellness.com</a>. He reads every message and replies within a business day.",
          suggestions: []
        };
    }
    return null;
  }

  function buildResponse(userQuery, corpus, memory) {
    const intent = classifyIntent(userQuery, memory);
    if (intent) {
      const specialResp = specialIntentResponse(intent.kind);
      if (specialResp) return specialResp;
      switch (intent.kind) {
        case 'add_to_cart':     return actAddToCart(intent.target, corpus, { looksLikeProduct: intent.looksLikeProduct });
        case 'compare':         return actCompare(intent.a, intent.b, corpus);
        case 'filter_by_price': return actFilterByPrice(intent.max, intent.category, corpus);
        case 'cart_status':     return actCartStatus();
        case 'concern':         return actConcernRecommendation(intent.concern, corpus);
        case 'navigate_quiz':
          return {
            kind: 'navigate',
            message: "The fastest way is the routine quiz — 10 quick questions, ~2 minutes, gives you a personalized stack with the bundle discount automatically applied.",
            cardHTML: renderActionConfirmCard({
              icon: '◇',
              title: 'Take the Find-Your-Routine Quiz',
              sub: '10 questions · 2 minutes · personalized routine + 15% bundle discount',
              actions: [{ label: 'Start the Quiz', href: 'quiz.html' }]
            }),
            suggestions: ['What does the quiz ask?', 'Can I retake it?', 'Compare AM vs PM Routine']
          };
        case 'tell_more': {
          const entry = corpus.find(e => e.id === intent.entityId);
          if (entry) return renderEntryAsCardResponse(entry);
          break;
        }
        case 'coreference': {
          const entry = corpus.find(e => e.id === intent.resolved.id);
          if (entry) {
            const rewritten = intent.originalQuery.replace(/\b(it|that|this|those|them|they)\b/gi, entry.title);
            const matches = findBestMatches(rewritten, corpus, 4);
            if (matches.length && matches[0].score >= CONFIDENCE_FLOOR) return formatTopMatch(matches);
            return renderEntryAsCardResponse(entry);
          }
          break;
        }
      }
    }

    const matches = findBestMatches(userQuery, corpus, 6);
    if (!matches.length) {
      return {
        kind: 'no-match',
        message: "I don't have a specific answer for that one yet. You can browse the full <a href=\"faq.html\" class=\"dh-chat-link\">FAQ page</a>, take the <a href=\"quiz.html\" class=\"dh-chat-link\">routine quiz</a>, or email Daniel directly at <a href=\"mailto:daniel@danielshousewellness.com\" class=\"dh-chat-link\">daniel@danielshousewellness.com</a>.",
        suggestions: ['How does Smart Refill work?', 'Help me find a routine', 'How do returns work?']
      };
    }
    const top = matches[0].score;
    if (top < CONFIDENCE_FLOOR) {
      return {
        kind: 'low-confidence',
        message: "I'm not sure I caught that exactly — were you asking about one of these?",
        suggestions: matches.slice(0, 3).map(m => m.entry.title)
      };
    }
    return formatTopMatch(matches);
  }

  function formatTopMatch(matches) {
    const best = matches[0].entry;
    const suggestions = matches.slice(1, 4).map(m => m.entry.title);
    if (best.kind === 'product')    return wrapWithCard(best, renderProductCard(best.ref), { type: 'product', id: best.id });
    if (best.kind === 'bundle')     {
      const products = (best.ref.slugs || []).map(s => window.getProductBySlug?.(s)).filter(Boolean);
      return wrapWithCard(best, renderBundleCard(best.ref, products, best.isRoutine), { type: 'bundle', id: best.id });
    }
    if (best.kind === 'ingredient') return wrapWithCard(best, renderIngredientCard(best.ref), { type: 'ingredient', id: best.id });
    return {
      kind: 'faq',
      title: best.title,
      cat: best.cat,
      message: best.bodyHTML,
      suggestions: suggestions
    };
  }

  function wrapWithCard(entry, cardHTML, entityRef) {
    return {
      kind: entry.kind,
      title: entry.title,
      cat: entry.cat,
      cardHTML: cardHTML,
      message: '',
      entity: entityRef,
      suggestions: []
    };
  }

  function renderEntryAsCardResponse(entry) {
    if (entry.kind === 'product')    return wrapWithCard(entry, renderProductCard(entry.ref), { type: 'product', id: entry.id });
    if (entry.kind === 'bundle') {
      const products = (entry.ref.slugs || []).map(s => window.getProductBySlug?.(s)).filter(Boolean);
      return wrapWithCard(entry, renderBundleCard(entry.ref, products, entry.isRoutine), { type: 'bundle', id: entry.id });
    }
    if (entry.kind === 'ingredient') return wrapWithCard(entry, renderIngredientCard(entry.ref), { type: 'ingredient', id: entry.id });
    return { kind: 'faq', message: entry.bodyHTML, title: entry.title, cat: entry.cat, suggestions: [] };
  }

  /* ════════════════════════════════════════════════════════════════════
     9.5 CLAUDE API INTEGRATION — BYO API KEY
     ════════════════════════════════════════════════════════════════════
     When the user provides their own Anthropic API key and enables Claude
     mode, any query that doesn't trigger a structured action (add-to-cart,
     compare, filter-by-price, etc.) is sent to api.anthropic.com with the
     full Daniel's House corpus injected as the system prompt. The model
     answers in natural language with the brand's voice + accurate facts.

     Architecture:
       - Settings stored in localStorage; never logged or transmitted off-domain.
       - System prompt assembled once per session from FAQs / products /
         bundles / ingredients (~5-6K tokens of context).
       - Calls use the streaming endpoint; tokens render into the chat
         bubble as they arrive (typewriter effect).
       - On any failure (no key, network error, rate limit, CORS) we
         silently fall back to the rule-based FAQ matcher so the chatbot
         keeps working.
     ════════════════════════════════════════════════════════════════════ */

  function getClaudeSettings() {
    const userKey   = localStorage.getItem(CLAUDE_KEY_STORAGE) || '';
    const userModel = localStorage.getItem(CLAUDE_MODEL_STORAGE) || '';
    const enabledRaw = localStorage.getItem(CLAUDE_ON_STORAGE);
    // Brand-provided Claude is "live" only when explicitly flagged ready.
    // A configured proxy URL alone isn't enough — the brand might still be
    // in setup (worker deployed but no Anthropic credit yet).
    const brandReady = BRAND_CLAUDE_READY && Boolean(BRAND_API_KEY || BRAND_API_PROXY);
    // Auto-enable on first visit ONLY if the user has their own key, or
    // brand-provided Claude is fully ready. Otherwise default to off so
    // the chatbot opens in rule-based mode with a "coming soon" callout.
    const defaultEnabled = Boolean(userKey || brandReady);
    const enabled = (enabledRaw === null) ? defaultEnabled : (enabledRaw === 'true');
    // Effective API key for direct mode: user's key wins; brand key only
    // when brand-ready (otherwise empty so we don't accidentally call).
    const effectiveKey = userKey || (brandReady ? BRAND_API_KEY : '') || '';
    return {
      apiKey: effectiveKey,
      userKey: userKey,
      brandReady: brandReady,
      brandConfigured: Boolean(BRAND_API_KEY || BRAND_API_PROXY),  // set up but maybe not live yet
      hasBrandKey: Boolean(BRAND_API_KEY),
      hasBrandProxy: Boolean(BRAND_API_PROXY),
      keySource: userKey ? 'user' : (brandReady ? (BRAND_API_KEY ? 'brand' : 'proxy') : 'none'),
      enabled: enabled,
      model: userModel || CLAUDE_DEFAULT_MODEL
    };
  }
  function saveClaudeSettings(patch) {
    if ('apiKey'  in patch) localStorage.setItem(CLAUDE_KEY_STORAGE, patch.apiKey || '');
    if ('enabled' in patch) localStorage.setItem(CLAUDE_ON_STORAGE,  patch.enabled ? 'true' : 'false');
    if ('model'   in patch) localStorage.setItem(CLAUDE_MODEL_STORAGE, patch.model || CLAUDE_DEFAULT_MODEL);
  }
  function isClaudeReady() {
    const s = getClaudeSettings();
    if (!s.enabled) return false;
    // Ready if user has a real key, OR brand-provided Claude is live with a proxy
    if (s.apiKey && s.apiKey.length > 10) return true;
    if (s.brandReady && s.hasBrandProxy) return true;
    return false;
  }

  /* Build the system prompt from the entire site corpus. Compact JSON for
     facts the model needs to ground every answer in. */
  let _cachedSystemPrompt = null;
  function buildSystemPrompt() {
    if (_cachedSystemPrompt) return _cachedSystemPrompt;

    const products = (window.PRODUCTS || []).map(p => ({
      name: 'The House ' + p.name,
      slug: p.slug,
      cat: p.category,
      price: p.price,
      tag: p.tag || '',
      blurb: p.blurb || ''
    }));

    const bundles = ((window.CURATED_BUNDLES || []).concat(window.CONCERN_BUNDLES || [])).map(b => {
      const isRoutine = (window.CURATED_BUNDLES || []).some(x => x.id === b.id);
      return {
        id: b.id,
        name: b.name,
        type: isRoutine ? 'routine' : 'concern-bundle',
        discount: Math.round((b.discount || 0.15) * 100) + '%',
        products: (b.slugs || []).map(s => (window.getProductBySlug?.(s) || {}).name).filter(Boolean),
        blurb: b.blurb || ''
      };
    });

    const ingredients = (window.INGREDIENTS || []).map(i => ({
      name: i.name,
      alt: i.alt || '',
      cat: i.cat,
      evidence: i.evidence || 'moderate',
      tags: i.tags || [],
      blurb: (i.body || '').slice(0, 220)
    }));

    const faqs = (window.DH_FAQ_DATA || []).map(f => ({
      cat: f.cat,
      q: f.q,
      a: stripHTML(f.a).slice(0, 600)
    }));

    const prompt = [
      `You are Daniel's House's wellness-brand assistant — Daniel's House sells premium DTC skincare and supplements, founded by Daniel who personally uses everything. Your job is to answer customer questions accurately using ONLY the facts in the context below. You speak in the brand's voice: warm, direct, knowledgeable, never gimmicky.`,
      ``,
      `## Tone rules`,
      `- Concise (under 100 words unless detail is requested).`,
      `- Real and grounded — no hype phrases, no exclamation marks, no emoji.`,
      `- Italicize product names with single asterisks: *The House Multi*.`,
      `- Link to relevant pages when useful using markdown: [text](url). Use these URLs:`,
      `    Products: product.html?slug={slug}    Bundles: routine.html?slug={id} or concern.html?slug={id}`,
      `    Ingredients: ingredient.html?slug={slug}    FAQ: faq.html    Quiz: quiz.html`,
      `- Never invent facts. If something isn't in the context below, say so and offer the user can email daniel@danielshousewellness.com.`,
      `- If asked about pricing, return the exact prices from the catalog.`,
      ``,
      `## Smart Refill mechanics (a key brand differentiator)`,
      `Smart Refill is a subscription cadence where each product in a routine ships on its own runtime cycle — 1, 2, or 3 months depending on the bottle — instead of every product shipping every 30 days. Saves money for mixed-runtime bundles by not over-supplying long-lasting items. Available for all routines and concern bundles EXCEPT pure-supplement bundles where every product is runtime=1 (Workout, Longevity, Foundation 5, Weekly/Reset, Strength bundle).`,
      ``,
      `## What you can refer the user to`,
      `If the user wants to take action, refer them to the appropriate page or tell them to use the bot's commands (which the user sees in the input placeholder): "add the AM Routine to my cart", "compare retinol vs bakuchiol", "I have dry skin", "what's in my cart". The user can also click product/bundle/ingredient cards inline.`,
      ``,
      `## Product catalog`,
      JSON.stringify(products),
      ``,
      `## Bundles & routines`,
      JSON.stringify(bundles),
      ``,
      `## Ingredients glossary`,
      JSON.stringify(ingredients),
      ``,
      `## FAQ (verbatim Q&A pairs — quote answers as needed but reword for conversation)`,
      JSON.stringify(faqs)
    ].join('\n');

    _cachedSystemPrompt = prompt;
    return prompt;
  }

  /* Convert markdown-ish output (italics, bold, links) into our chat HTML.
     Intentionally narrow — we don't accept arbitrary HTML from the model. */
  function renderClaudeText(md) {
    let html = escapeText(md);
    // [text](url) → <a>
    html = html.replace(/\[([^\]]+)\]\(([^\s)]+)\)/g, (m, text, url) => {
      // Only allow relative URLs to our pages, mailto, or http(s) to safe targets
      const safe = /^(https?:\/\/|mailto:|[a-z]+\.html|\.\.?\/)/i.test(url);
      if (!safe) return text;
      return `<a href="${url}" class="dh-chat-link">${text}</a>`;
    });
    // **bold**
    html = html.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
    // *italic*
    html = html.replace(/(?<!\*)\*([^*\n]+)\*(?!\*)/g, '<em>$1</em>');
    // Paragraph breaks
    html = html.replace(/\n\n+/g, '</p><p>');
    html = html.replace(/\n/g, '<br/>');
    return `<p>${html}</p>`;
  }

  /* Stream the API response token-by-token. Returns an async iterator that
     yields incremental text deltas. */
  async function* streamClaudeResponse(query, history, settings) {
    const messages = history
      .filter(m => m.role === 'user' || m.role === 'bot')
      .map(m => ({
        role: m.role === 'bot' ? 'assistant' : 'user',
        content: m.role === 'bot' ? (stripHTML(m.html || '') || stripHTML(m.cardHTML || '') || '...') : stripHTML(m.html || query)
      }))
      .filter(m => m.content);
    messages.push({ role: 'user', content: query });

    const endpoint = (settings.brandReady && settings.hasBrandProxy && !settings.userKey)
      ? BRAND_API_PROXY
      : 'https://api.anthropic.com/v1/messages';
    const headers = (endpoint === 'https://api.anthropic.com/v1/messages')
      ? {
          'x-api-key': settings.apiKey,
          'anthropic-version': '2023-06-01',
          'anthropic-dangerous-direct-browser-access': 'true',
          'content-type': 'application/json'
        }
      : {
          // Proxy mode: don't expose any key — the proxy adds it server-side.
          'content-type': 'application/json'
        };
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify({
        model: settings.model,
        max_tokens: 1024,
        system: buildSystemPrompt(),
        messages: messages,
        stream: true
      })
    });

    if (!response.ok) {
      let errMsg = `API error (${response.status})`;
      try {
        const errJson = await response.json();
        if (errJson?.error?.message) errMsg += ': ' + errJson.error.message;
      } catch (e) {}
      throw new Error(errMsg);
    }

    const reader  = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      // SSE events are separated by blank lines (\n\n). Parse complete events.
      let breakIdx;
      while ((breakIdx = buffer.indexOf('\n\n')) !== -1) {
        const eventChunk = buffer.slice(0, breakIdx);
        buffer = buffer.slice(breakIdx + 2);
        const dataLine = eventChunk.split('\n').find(l => l.startsWith('data: '));
        if (!dataLine) continue;
        const dataStr = dataLine.slice(6).trim();
        if (dataStr === '[DONE]') return;
        try {
          const data = JSON.parse(dataStr);
          if (data.type === 'content_block_delta' && data.delta && data.delta.type === 'text_delta') {
            yield data.delta.text;
          } else if (data.type === 'error' && data.error) {
            throw new Error(data.error.message || 'Stream error');
          }
        } catch (e) {
          if (e.message && e.message !== 'Unexpected end of JSON input') throw e;
        }
      }
    }
  }



  function buildUI() {
    if (document.querySelector('.dh-chat-wrap')) return null;
    const wrap = document.createElement('div');
    wrap.className = 'dh-chat-wrap collapsed';
    wrap.innerHTML = `
      <button class="dh-chat-launcher" type="button" aria-label="Open chat assistant">
        <span class="dh-chat-launcher-icon">
          <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
            <path d="M4 6h16v10H7l-3 3V6z"></path>
            <circle cx="9" cy="11" r="0.8" fill="currentColor"></circle>
            <circle cx="12" cy="11" r="0.8" fill="currentColor"></circle>
            <circle cx="15" cy="11" r="0.8" fill="currentColor"></circle>
          </svg>
        </span>
        <span class="dh-chat-launcher-label">Ask</span>
        <span class="dh-chat-launcher-dot" aria-hidden="true"></span>
      </button>

      <div class="dh-chat-overlay" aria-hidden="true"></div>
      <div class="dh-chat-panel" role="dialog" aria-modal="true" aria-label="Daniel's House Assistant">
        <div class="dh-chat-head">
          <div class="dh-chat-head-avatar">D</div>
          <div class="dh-chat-head-text">
            <div class="dh-chat-head-title">Daniel's House <em>Assistant</em></div>
            <div class="dh-chat-head-sub"><span class="dh-chat-status-dot"></span><span class="dh-chat-status-text">Ready</span></div>
          </div>
          <button class="dh-chat-settings" type="button" aria-label="Settings" title="Settings — connect Claude API">⚙</button>
          <button class="dh-chat-reset" type="button" aria-label="Clear conversation" title="Clear conversation">⟲</button>
          <button class="dh-chat-close" type="button" aria-label="Close chat">✕</button>
        </div>
        <div class="dh-chat-capabilities">
          <span class="dh-chat-cap-chip" data-q="Help me find a routine">⚡ Find a routine</span>
          <span class="dh-chat-cap-chip" data-q="Compare AM vs PM Routine">⚖ Compare</span>
          <span class="dh-chat-cap-chip" data-q="What's in my cart?">🛒 Cart</span>
          <span class="dh-chat-cap-chip" data-q="How does Smart Refill work?">↻ Smart Refill</span>
        </div>
        <div class="dh-chat-body" id="dh-chat-body"></div>
        <div class="dh-chat-claude-banner" hidden>
          <span class="dh-chat-claude-banner-dot"></span>
          <span class="dh-chat-claude-banner-text">Connected to Claude · <span class="dh-chat-claude-banner-model">Haiku 4.5</span></span>
        </div>
        <div class="dh-chat-disclaimer">For order-specific issues, email
          <a href="mailto:daniel@danielshousewellness.com" class="dh-chat-link">daniel@danielshousewellness.com</a>
        </div>
        <form class="dh-chat-input-row" autocomplete="off">
          <button type="button" class="dh-chat-voice" aria-label="Voice input" title="Voice input">🎤</button>
          <input type="text" class="dh-chat-input" placeholder="Ask anything, or try “add AM Routine to cart”..." aria-label="Your question" maxlength="240"/>
          <button type="submit" class="dh-chat-send" aria-label="Send">→</button>
        </form>

        <!-- ─ Settings modal (BYO Claude API key, model selection) ───────────
             Lives inside the panel so position:absolute + inset:0 fills the
             panel rather than the wrap or viewport. -->
        <div class="dh-chat-settings-modal" hidden>
          <div class="dh-chat-settings-backdrop"></div>
          <div class="dh-chat-settings-card">
            <button class="dh-chat-settings-close" type="button" aria-label="Close settings">✕</button>
            <div class="dh-chat-settings-eyebrow">Advanced</div>
            <h3 class="dh-chat-settings-title">Use real <em>Claude</em></h3>
            <p class="dh-chat-settings-blurb">This assistant is talking to Claude — Anthropic's AI — by default, with the entire Daniel's House catalog and FAQ loaded as context. It uses the brand's own API key. Want to use your own key instead (e.g. to switch to Opus or have your usage on your own account)? Paste it below. Your key stays in your browser and is sent only to <code>api.anthropic.com</code>.</p>

            <label class="dh-chat-settings-label">
              <span>Your Anthropic API key</span>
              <input type="password" class="dh-chat-settings-key" placeholder="sk-ant-..." autocomplete="off" spellcheck="false"/>
            </label>
            <a class="dh-chat-settings-help" href="https://console.anthropic.com/settings/keys" target="_blank" rel="noopener noreferrer">Get a key from console.anthropic.com →</a>

            <label class="dh-chat-settings-label">
              <span>Model</span>
              <select class="dh-chat-settings-model"></select>
            </label>

            <label class="dh-chat-settings-toggle">
              <input type="checkbox" class="dh-chat-settings-enabled"/>
              <span class="dh-chat-settings-toggle-slider"></span>
              <span class="dh-chat-settings-toggle-label">Use Claude for free-form questions</span>
            </label>

            <div class="dh-chat-settings-note">
              When enabled and an API key is set, free-form questions route to Claude with the full Daniel's House catalog as context. Structured actions (add to cart, compare, filter) still use the local engine for instant responses. Your key and chat history stay in your browser.
            </div>

            <div class="dh-chat-settings-status">
              <span class="dh-chat-settings-status-dot"></span>
              <span class="dh-chat-settings-status-text">Not connected</span>
            </div>

            <div class="dh-chat-settings-actions">
              <button type="button" class="dh-chat-settings-save">Save</button>
              <button type="button" class="dh-chat-settings-test">Test Connection</button>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(wrap);
    return wrap;
  }

  function loadHistory() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || []; } catch (e) { return []; }
  }
  function saveHistory(history) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(-MAX_HISTORY))); } catch (e) {}
  }
  function loadMemory() {
    try { return JSON.parse(localStorage.getItem(MEMORY_KEY)) || { lastEntity: null }; } catch (e) { return { lastEntity: null }; }
  }
  function saveMemory(memory) {
    try { localStorage.setItem(MEMORY_KEY, JSON.stringify(memory)); } catch (e) {}
  }

  function bubbleHTML(role, body, opts) {
    opts = opts || {};
    const meta = opts.meta ? `<div class="dh-chat-bubble-meta">${escapeText(opts.meta)}</div>` : '';
    const avatar = role === 'bot' ? `<div class="dh-chat-bubble-avatar">D</div>` : '';
    const feedback = role === 'bot' && opts.id ? `
      <div class="dh-chat-feedback" data-msg-id="${opts.id}">
        <button class="dh-chat-feedback-btn" data-vote="up" aria-label="Helpful">👍</button>
        <button class="dh-chat-feedback-btn" data-vote="down" aria-label="Not helpful">👎</button>
      </div>` : '';
    return `
      <div class="dh-chat-msg dh-chat-msg-${role}">
        ${avatar}
        <div class="dh-chat-bubble-wrap">
          <div class="dh-chat-bubble">
            ${meta}
            <div class="dh-chat-bubble-text">${body}</div>
          </div>
          ${feedback}
        </div>
      </div>
    `;
  }

  function suggestionsHTML(suggestions) {
    if (!suggestions || !suggestions.length) return '';
    return `<div class="dh-chat-suggestions">
      <div class="dh-chat-suggestions-label">${suggestions.length === 1 ? 'Related' : 'You might also ask'}</div>
      <div class="dh-chat-suggestions-list">
        ${suggestions.map(s => `<button type="button" class="dh-chat-suggestion" data-q="${escapeText(s)}">${escapeText(s)}</button>`).join('')}
      </div>
    </div>`;
  }

  function typingIndicatorHTML() {
    return `
      <div class="dh-chat-msg dh-chat-msg-bot dh-chat-typing-row">
        <div class="dh-chat-bubble-avatar">D</div>
        <div class="dh-chat-bubble dh-chat-typing"><span></span><span></span><span></span></div>
      </div>
    `;
  }

  function init() {
    const wrap = buildUI();
    if (!wrap) return;
    const launcher    = wrap.querySelector('.dh-chat-launcher');
    const overlay     = wrap.querySelector('.dh-chat-overlay');
    const closeBtn    = wrap.querySelector('.dh-chat-close');
    const resetBtn    = wrap.querySelector('.dh-chat-reset');
    const settingsBtn = wrap.querySelector('.dh-chat-settings');
    const body        = wrap.querySelector('#dh-chat-body');
    const form        = wrap.querySelector('.dh-chat-input-row');
    const input       = wrap.querySelector('.dh-chat-input');
    const voiceBtn    = wrap.querySelector('.dh-chat-voice');
    const statusText  = wrap.querySelector('.dh-chat-status-text');

    const claudeBanner      = wrap.querySelector('.dh-chat-claude-banner');
    const claudeBannerModel = wrap.querySelector('.dh-chat-claude-banner-model');

    const settingsModal   = wrap.querySelector('.dh-chat-settings-modal');
    const settingsBackdrop= wrap.querySelector('.dh-chat-settings-backdrop');
    const settingsClose   = wrap.querySelector('.dh-chat-settings-close');
    const settingsKey     = wrap.querySelector('.dh-chat-settings-key');
    const settingsModel   = wrap.querySelector('.dh-chat-settings-model');
    const settingsEnabled = wrap.querySelector('.dh-chat-settings-enabled');
    const settingsSave    = wrap.querySelector('.dh-chat-settings-save');
    const settingsTest    = wrap.querySelector('.dh-chat-settings-test');
    const settingsStatusDot  = wrap.querySelector('.dh-chat-settings-status-dot');
    const settingsStatusText = wrap.querySelector('.dh-chat-settings-status-text');

    // Populate model select
    settingsModel.innerHTML = CLAUDE_MODELS.map(m =>
      `<option value="${m.id}">${m.label}</option>`
    ).join('');

    function refreshClaudeBanner() {
      const s = getClaudeSettings();
      if (isClaudeReady()) {
        claudeBanner.removeAttribute('hidden');
        const modelLabel = (CLAUDE_MODELS.find(m => m.id === s.model)?.label || s.model).split(' · ')[0];
        claudeBannerModel.textContent = modelLabel;
        input.setAttribute('placeholder', 'Ask Claude anything about Daniel\'s House...');
      } else {
        claudeBanner.setAttribute('hidden', '');
        input.setAttribute('placeholder', 'Ask anything, or try "add AM Routine to cart"...');
      }
    }

    function applyClaudeStatusUI(state, msg) {
      // state: 'idle' | 'ready' | 'pending' | 'error'
      const dot = settingsStatusDot;
      const text = settingsStatusText;
      dot.dataset.state = state;
      text.textContent = msg;
    }

    function loadSettingsIntoForm() {
      const s = getClaudeSettings();
      // Show the user key — never the brand key (which is private to the source)
      settingsKey.value = s.userKey;
      settingsModel.value = s.model;
      settingsEnabled.checked = s.enabled;

      // Update the modal blurb to reflect the current brand state
      const blurbEl = wrap.querySelector('.dh-chat-settings-blurb');
      if (blurbEl) {
        if (s.brandReady) {
          blurbEl.innerHTML = `This assistant is talking to Claude by default, with the entire Daniel's House catalog and FAQ loaded as context. Want to use your own key instead (e.g. to switch to Opus or have your usage on your own account)? Paste it below. Your key stays in your browser and is sent only to <code>api.anthropic.com</code>.`;
        } else if (s.brandConfigured) {
          blurbEl.innerHTML = `Brand-provided Claude is being set up — every visitor will get natural-language answers automatically once it's live. In the meantime, you can connect your own Anthropic API key for a preview. Your key stays in your browser and is sent only to <code>api.anthropic.com</code>.`;
        } else {
          blurbEl.innerHTML = `Connect your Anthropic API key to enable natural-language conversation backed by the full Daniel's House catalog. The rule-based engine handles questions either way; Claude adds richer, multi-turn answers. Your key stays in your browser and is sent only to <code>api.anthropic.com</code>.`;
        }
      }

      // Key input placeholder
      if (s.keySource === 'brand' && !s.userKey) {
        settingsKey.setAttribute('placeholder', 'Using brand-provided Claude — paste your own key to override');
      } else if (s.keySource === 'proxy' && !s.userKey) {
        settingsKey.setAttribute('placeholder', 'Using brand proxy — paste your own key to override');
      } else if (s.brandConfigured && !s.brandReady) {
        settingsKey.setAttribute('placeholder', 'Brand Claude coming soon — paste your key for early access');
      } else {
        settingsKey.setAttribute('placeholder', 'sk-ant-...');
      }

      // Status row
      let statusMsg, statusState;
      if (isClaudeReady()) {
        if (s.keySource === 'brand')      { statusMsg = 'Connected · Using brand-provided Claude'; statusState = 'ready'; }
        else if (s.keySource === 'proxy') { statusMsg = 'Connected · Using brand proxy'; statusState = 'ready'; }
        else                              { statusMsg = 'Connected · Using your key'; statusState = 'ready'; }
      } else if (s.userKey) {
        statusMsg = 'Key saved — toggle on to enable';
        statusState = 'idle';
      } else if (s.brandConfigured && !s.brandReady) {
        statusMsg = 'Brand-provided Claude coming soon';
        statusState = 'pending';
      } else {
        statusMsg = 'Not connected — add a key to enable Claude';
        statusState = 'idle';
      }
      applyClaudeStatusUI(statusState, statusMsg);
    }

    function openSettings() {
      loadSettingsIntoForm();
      settingsModal.removeAttribute('hidden');
    }
    function closeSettings() {
      settingsModal.setAttribute('hidden', '');
    }
    settingsBtn.addEventListener('click', openSettings);
    settingsClose.addEventListener('click', closeSettings);
    settingsBackdrop.addEventListener('click', closeSettings);

    settingsSave.addEventListener('click', () => {
      saveClaudeSettings({
        apiKey:  settingsKey.value.trim(),
        model:   settingsModel.value,
        enabled: settingsEnabled.checked
      });
      _cachedSystemPrompt = null; // rebuild on next call
      refreshClaudeBanner();
      applyClaudeStatusUI(
        isClaudeReady() ? 'ready' : 'idle',
        isClaudeReady() ? 'Saved · Claude active' : 'Saved'
      );
      setTimeout(closeSettings, 600);
    });

    settingsTest.addEventListener('click', async () => {
      const key = settingsKey.value.trim();
      const model = settingsModel.value;
      if (!key) {
        applyClaudeStatusUI('error', 'Enter an API key first');
        return;
      }
      applyClaudeStatusUI('pending', 'Testing connection...');
      try {
        const r = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'x-api-key': key,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true',
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            model: model,
            max_tokens: 12,
            messages: [{ role: 'user', content: 'Say "hello" in one word.' }]
          })
        });
        if (r.ok) {
          applyClaudeStatusUI('ready', '✓ Connection successful');
        } else {
          let detail = `HTTP ${r.status}`;
          try { const j = await r.json(); if (j?.error?.message) detail = j.error.message; } catch (e) {}
          applyClaudeStatusUI('error', '✗ ' + detail);
        }
      } catch (e) {
        applyClaudeStatusUI('error', '✗ ' + (e.message || 'Network error'));
      }
    });

    refreshClaudeBanner();

    let history = loadHistory();
    let memory  = loadMemory();
    let corpus  = [];

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) voiceBtn.style.display = 'none';

    function render() {
      const items = [];
      if (history.length === 0) {
        const cart = getCartContext();
        const page = getCurrentPage();
        const claudeOn = isClaudeReady();
        const s = getClaudeSettings();
        let welcome;
        if (claudeOn) {
          const modelLabel = (CLAUDE_MODELS.find(m => m.id === s.model)?.label || s.model).split(' · ')[0];
          welcome = `<p>Hi — I'm Daniel's House's assistant, powered by <strong>Claude (${modelLabel})</strong> with our full catalog, FAQ, and ingredient glossary loaded. Ask me anything in plain English — I can also <strong>add things to your cart</strong>, <strong>compare products</strong>, and <strong>recommend by concern</strong>.</p>`;
        } else {
          welcome = `<p>Hi — I'm Daniel's House's assistant. I can <strong>answer questions</strong>, <strong>add things to your cart</strong>, <strong>compare products</strong>, <strong>recommend by concern</strong>, and more.</p>`;
          // Coming-soon callout — only when brand has set up the proxy/key but
          // hasn't flagged ready yet (i.e. credits not loaded). Visitors can
          // opt-in early with their own key.
          if (s.brandConfigured && !s.brandReady && !s.userKey) {
            welcome += `<div class="dh-chat-claude-callout">
              <div class="dh-chat-claude-callout-eyebrow">↻ Claude · Coming Soon</div>
              <p>A natural-language version of this assistant, powered by Claude with the full Daniel's House catalog as context, is being set up — every visitor will get it automatically once it's live.</p>
              <p>Want a preview now? <button type="button" class="dh-chat-inline-link" data-action="open-settings">Connect your own Anthropic API key</button> in settings.</p>
            </div>`;
          } else if (s.userKey && !s.enabled) {
            // Edge case: user has a key but disabled it
            welcome += `<div class="dh-chat-claude-callout">
              <p style="margin:0;">Your Claude key is configured but turned off. <button type="button" class="dh-chat-inline-link" data-action="open-settings">Enable in settings</button> for natural-language answers.</p>
            </div>`;
          }
        }
        if (cart.count > 0) welcome += `<p style="margin-top:8px;color:var(--gold);font-weight:500;">You have ${cart.count} item${cart.count === 1 ? '' : 's'} in your cart (${formatPrice(cart.subtotal)} subtotal).</p>`;
        welcome += `<p style="font-size:11px;letter-spacing:0.06em;color:var(--ink-soft);margin-top:8px;">Try: <em>"add the AM Routine to my cart"</em>, <em>"compare retinol vs bakuchiol"</em>, <em>"I have dry skin"</em>.</p>`;
        items.push(bubbleHTML('bot', welcome));
        const suggestions = PAGE_SUGGESTIONS[page] || STARTER_SUGGESTIONS;
        items.push(`<div class="dh-chat-suggestions">
          <div class="dh-chat-suggestions-label">${PAGE_SUGGESTIONS[page] ? 'On this page' : 'Popular questions'}</div>
          <div class="dh-chat-suggestions-list">
            ${suggestions.map(s => `<button type="button" class="dh-chat-suggestion" data-q="${escapeText(s)}">${escapeText(s)}</button>`).join('')}
          </div>
        </div>`);
      } else {
        history.forEach(msg => {
          let bubbleBody = '';
          if (msg.cardHTML) bubbleBody += msg.cardHTML;
          if (msg.html)     bubbleBody += `<div>${msg.html}</div>`;
          items.push(bubbleHTML(msg.role, bubbleBody, { meta: msg.meta, id: msg.id }));
          if (msg.role === 'bot' && msg.suggestions && msg.suggestions.length) {
            items.push(suggestionsHTML(msg.suggestions));
          }
        });
      }
      body.innerHTML = items.join('');
      body.scrollTop = body.scrollHeight;
    }

    function setStatus(text) {
      if (statusText) statusText.textContent = text;
    }

    function open() {
      wrap.classList.remove('collapsed');
      wrap.classList.add('expanded');
      document.body.style.overflow = 'hidden';
      if (!corpus.length) corpus = buildCorpus();
      render();
      setTimeout(() => input.focus(), 200);
    }
    function close() {
      wrap.classList.remove('expanded');
      wrap.classList.add('collapsed');
      document.body.style.overflow = '';
    }

    launcher.addEventListener('click', () => wrap.classList.contains('expanded') ? close() : open());
    overlay.addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && wrap.classList.contains('expanded')) close();
    });

    resetBtn.addEventListener('click', () => {
      history = [];
      memory  = { lastEntity: null };
      saveHistory(history);
      saveMemory(memory);
      render();
    });

    if (SpeechRecognition) {
      const rec = new SpeechRecognition();
      rec.continuous = false;
      rec.interimResults = false;
      rec.lang = 'en-US';
      let listening = false;
      voiceBtn.addEventListener('click', () => {
        if (listening) { rec.stop(); return; }
        try {
          listening = true;
          voiceBtn.classList.add('listening');
          setStatus('Listening…');
          rec.start();
        } catch (e) {
          listening = false;
          voiceBtn.classList.remove('listening');
          setStatus('Ready');
        }
      });
      rec.onresult = (e) => {
        const text = e.results[0][0].transcript;
        input.value = text;
        listening = false;
        voiceBtn.classList.remove('listening');
        setStatus('Ready');
        form.dispatchEvent(new Event('submit', { cancelable: true }));
      };
      rec.onerror = () => { listening = false; voiceBtn.classList.remove('listening'); setStatus('Ready'); };
      rec.onend   = () => { listening = false; voiceBtn.classList.remove('listening'); setStatus('Ready'); };
    }

    function pushUserMessage(text) {
      history.push({ id: 'u' + Date.now(), role: 'user', html: escapeText(text) });
      render();
    }

    function pushBotResponse(response) {
      const meta = response.title && response.cat ? `${response.cat} · ${response.title}` : null;
      const msgEntry = {
        id: 'b' + Date.now(),
        role: 'bot',
        html: response.message || '',
        cardHTML: response.cardHTML || '',
        suggestions: response.suggestions || []
      };
      if (meta) msgEntry.meta = meta;
      history.push(msgEntry);
      if (response.entity) {
        memory.lastEntity = response.entity;
        saveMemory(memory);
      }
      saveHistory(history);
      render();
    }

    function handleQuery(text) {
      text = (text || '').trim();
      if (!text) return;
      pushUserMessage(text);

      // First check if this is a structured action (add to cart, compare, etc.) —
      // those always use the rule-based engine for instant feedback. Only
      // free-form questions route through the LLM.
      if (!corpus.length) corpus = buildCorpus();
      const intent = classifyIntent(text, memory);
      const isStructuredAction = intent && ['add_to_cart','compare','filter_by_price','cart_status','concern','navigate_quiz','tell_more','coreference','greeting','thanks','farewell','meta','contact'].includes(intent.kind);

      // Route through Claude when configured AND the query is free-form Q&A.
      if (!isStructuredAction && isClaudeReady()) {
        runClaudeQuery(text);
        return;
      }

      // Rule-based path — typing indicator + scored response
      body.insertAdjacentHTML('beforeend', typingIndicatorHTML());
      body.scrollTop = body.scrollHeight;
      setStatus('Thinking…');
      setTimeout(() => {
        const response = buildResponse(text, corpus, memory);
        const typer = body.querySelector('.dh-chat-typing-row');
        if (typer) typer.remove();
        setStatus('Ready');
        pushBotResponse(response);
      }, 450 + Math.random() * 350);
    }

    /* Stream a free-form answer from Claude, rendering tokens as they arrive.
       On any failure, silently fall through to the rule-based matcher so the
       chatbot stays useful even if the user's key is exhausted or the network
       blinks. */
    async function runClaudeQuery(text) {
      const settings = getClaudeSettings();
      // Insert a streaming bubble immediately
      const msgId = 'b' + Date.now();
      const streamBubble = document.createElement('div');
      streamBubble.className = 'dh-chat-msg dh-chat-msg-bot dh-chat-streaming-row';
      streamBubble.innerHTML = `
        <div class="dh-chat-bubble-avatar">D</div>
        <div class="dh-chat-bubble-wrap">
          <div class="dh-chat-bubble">
            <div class="dh-chat-bubble-meta">↻ Claude · ${(CLAUDE_MODELS.find(m => m.id === settings.model)?.label.split(' · ')[0]) || 'Claude'}</div>
            <div class="dh-chat-bubble-text dh-chat-stream-target"><span class="dh-chat-stream-cursor"></span></div>
          </div>
        </div>
      `;
      body.appendChild(streamBubble);
      body.scrollTop = body.scrollHeight;
      setStatus('Asking Claude…');

      const target = streamBubble.querySelector('.dh-chat-stream-target');
      let accumulated = '';
      try {
        for await (const delta of streamClaudeResponse(text, history, settings)) {
          accumulated += delta;
          // Render incrementally — markdown to HTML each frame
          target.innerHTML = renderClaudeText(accumulated) + '<span class="dh-chat-stream-cursor"></span>';
          body.scrollTop = body.scrollHeight;
          setStatus('Streaming…');
        }
        // Final render — remove the cursor
        target.innerHTML = renderClaudeText(accumulated);
        setStatus('Ready');
        // Persist to history (as bot message with rendered HTML)
        const msgEntry = {
          id: msgId,
          role: 'bot',
          html: renderClaudeText(accumulated),
          cardHTML: '',
          meta: '↻ Claude · ' + ((CLAUDE_MODELS.find(m => m.id === settings.model)?.label.split(' · ')[0]) || 'Claude'),
          suggestions: []
        };
        history.push(msgEntry);
        saveHistory(history);
        streamBubble.remove();
        render();
      } catch (err) {
        // Replace stream bubble with an error+fallback message and run rule-based
        streamBubble.remove();
        const fallback = buildResponse(text, corpus, memory);
        const errMsg = (err && err.message) ? err.message : String(err);
        fallback.message = `<p style="color: var(--ink-soft); font-style: italic; font-size: 11px; margin-bottom: 8px;">Claude call failed (${escapeText(errMsg)}) — falling back to local engine.</p>` + (fallback.message || '');
        pushBotResponse(fallback);
        setStatus('Ready');
      }
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      const v = input.value;
      input.value = '';
      handleQuery(v);
    });

    wrap.addEventListener('click', e => {
      const action = e.target.closest('[data-action]')?.dataset?.action;
      if (action === 'open-settings') {
        e.preventDefault();
        openSettings();
        return;
      }
      const sugg = e.target.closest('.dh-chat-suggestion, .dh-chat-cap-chip');
      if (sugg) {
        if (!wrap.classList.contains('expanded')) open();
        handleQuery(sugg.dataset.q);
        return;
      }
      const btn = e.target.closest('[data-cmd]');
      if (btn) {
        e.preventDefault();
        const cmd = btn.dataset.cmd;
        if (cmd === 'add-product') {
          const p = window.getProductBySlug?.(btn.dataset.slug);
          if (p && window.dhCart?.add) {
            window.dhCart.add(p, { subscribe: false });
            handleQuery(`add ${p.name}`);
          }
        } else if (cmd === 'add-bundle') {
          const b = (window.CURATED_BUNDLES || []).concat(window.CONCERN_BUNDLES || []).find(x => x.id === btn.dataset.slug);
          if (b && window.dhCart?.addBundle) {
            window.dhCart.addBundle(b.slugs, b.name, b.discount || 0.15, false);
            handleQuery(`add ${b.name}`);
          }
        } else if (cmd === 'open_cart') {
          const cartFab = document.querySelector('.cart-floating-toggle');
          if (cartFab) cartFab.click();
          close();
        } else if (cmd === 'subscribe_last') {
          if (window.dhCart?.items) {
            window.dhCart.items.forEach(i => { i.subscribe = true; });
            window.dhCart.save?.();
            window.dhCart.render?.();
            handleQuery('show me my cart');
          }
        }
        return;
      }
      const vote = e.target.closest('.dh-chat-feedback-btn');
      if (vote) {
        const msgId = vote.parentElement.dataset.msgId;
        const dir = vote.dataset.vote;
        try {
          const fb = JSON.parse(localStorage.getItem(FEEDBACK_KEY)) || {};
          fb[msgId] = dir;
          localStorage.setItem(FEEDBACK_KEY, JSON.stringify(fb));
        } catch (er) {}
        vote.parentElement.querySelectorAll('.dh-chat-feedback-btn').forEach(b => b.classList.remove('voted'));
        vote.classList.add('voted');
        if (dir === 'down') handleQuery("Sorry that wasn't helpful — could you try rephrasing?");
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
