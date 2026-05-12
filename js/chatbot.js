/* DANIEL'S HOUSE CHATBOT
   ─────────────────────────────────────────────────────────────────────────
   A self-contained FAQ chatbot that injects a floating button + chat panel
   on every page that loads this script. No backend, no API key — runs
   entirely client-side over the existing data sources:

     • window.DH_FAQ_DATA   (loaded from data/faq-data.js)
     • window.CURATED_BUNDLES, CONCERN_BUNDLES (data/products.js)
     • window.PRODUCTS, INGREDIENTS

   How matching works (simplified scoring):
     1. Tokenize the user's question (lower-case, strip punctuation, drop
        common stop-words).
     2. Score every FAQ entry: each shared token between user tokens and
        Q+A tokens earns weighted points (Q tokens worth more than A).
     3. Bonus points for category-keyword hits ("shipping", "subscribe").
     4. Return the top-scoring entry's answer above a minimum confidence
        threshold; otherwise route to a friendly fallback that points to
        the FAQ page or email.
     5. Always include 2-3 related suggestions to keep the conversation
        flowing.

   Intentionally simple — for a brand site FAQ assistant this is more
   reliable than an actual LLM (no hallucination risk). The data
   coverage is also explicit and editable. */

(function() {
  'use strict';

  /* ════════════════════════════════════════════════════════════════════
     1. CONFIG + UTILITIES
     ════════════════════════════════════════════════════════════════════ */

  const STORAGE_KEY = 'dh_chatbot_history_v1';
  const MAX_HISTORY = 50;

  // Common stop-words filtered before scoring — keep the meaningful nouns/verbs.
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

  function tokenize(text) {
    if (!text) return [];
    return text
      .toLowerCase()
      .replace(/[''']/g, "'")
      .replace(/[^a-z0-9'\s]/g, ' ')   // strip punctuation; keep alphanumerics + apostrophes
      .split(/\s+/)
      .filter(t => t && t.length > 1 && !STOP_WORDS.has(t));
  }

  function stripHTML(html) {
    const d = document.createElement('div');
    d.innerHTML = html;
    return d.textContent || '';
  }

  /* ════════════════════════════════════════════════════════════════════
     2. CORPUS ASSEMBLY
     ════════════════════════════════════════════════════════════════════
     Pulls together every queryable knowledge atom on the site into a
     single scored corpus. Each atom is one of three kinds:
       - 'faq'        → standard FAQ Q&A pair
       - 'product'    → "tell me about The House Multi" type query
       - 'bundle'     → "what's in the AM Routine" type query
     Atoms have a stable id so the chat history can replay them. */

  function buildCorpus() {
    const corpus = [];

    // ─── FAQ ENTRIES ───────────────────────────────────────────────────
    (window.DH_FAQ_DATA || []).forEach((entry, i) => {
      corpus.push({
        kind: 'faq',
        id: `faq-${i}`,
        title: entry.q,
        body: stripHTML(entry.a),
        bodyHTML: entry.a,
        cat: entry.cat,
        // Pre-compute token sets for fast scoring
        qTokens: tokenize(entry.q),
        bodyTokens: tokenize(stripHTML(entry.a))
      });
    });

    // ─── PRODUCT ENTRIES — for "what is the house X" lookups ─────────
    (window.PRODUCTS || []).forEach(p => {
      const shortName = p.name;            // e.g. "Multi"
      const fullName  = `The House ${p.name}`;
      const body = `${fullName} is a ${p.category} product. ${p.blurb || ''} `
                 + `Price: $${p.price.toFixed(2)}. `
                 + (p.tag ? `Tagged as ${p.tag}.` : '');
      corpus.push({
        kind: 'product',
        id: `product-${p.slug}`,
        title: fullName,
        body: body,
        bodyHTML: body + ` <a href="product.html?slug=${p.slug}" class="dh-chat-link">View full details →</a>`,
        cat: p.category === 'skincare' ? 'Skincare' : 'Supplements',
        qTokens: tokenize(`${fullName} ${shortName} ${p.tag || ''}`),
        bodyTokens: tokenize(body),
        href: `product.html?slug=${p.slug}`
      });
    });

    // ─── BUNDLE / ROUTINE ENTRIES — for "what's in the AM routine" ──
    const allBundles = (window.CURATED_BUNDLES || []).concat(window.CONCERN_BUNDLES || []);
    allBundles.forEach(b => {
      const products = (b.slugs || []).map(s => window.getProductBySlug?.(s)).filter(Boolean);
      const productList = products.map(p => `The House ${p.name}`).join(', ');
      const discountPct = Math.round((b.discount || 0.15) * 100);
      const body = `${b.name} contains ${products.length} products: ${productList}. ` +
                   `Bundle discount: ${discountPct}% off when purchased together. ` +
                   (b.blurb || '');
      const isRoutine = (window.CURATED_BUNDLES || []).some(x => x.id === b.id);
      corpus.push({
        kind: 'bundle',
        id: `bundle-${b.id}`,
        title: b.name,
        body: body,
        bodyHTML: body + ` <a href="${isRoutine ? 'routine' : 'concern'}.html?slug=${b.id}" class="dh-chat-link">View full routine →</a>`,
        cat: isRoutine ? 'Routines' : 'Bundles',
        qTokens: tokenize(`${b.name} routine bundle ${productList}`),
        bodyTokens: tokenize(body),
        href: `${isRoutine ? 'routine' : 'concern'}.html?slug=${b.id}`
      });
    });

    // ─── INGREDIENT ENTRIES — for "tell me about retinol" / "what is niacinamide" ──
    (window.INGREDIENTS || []).forEach(ing => {
      const aliasText = ing.alt ? ` (also known as ${ing.alt})` : '';
      const body = `${ing.name}${aliasText} is a ${ing.cat} ingredient. ${ing.body || ''} ` +
                   `Evidence: ${ing.evidence || 'moderate'}. ` +
                   ((ing.tags || []).length ? `Tagged as: ${(ing.tags || []).join(', ')}.` : '');
      corpus.push({
        kind: 'ingredient',
        id: `ingredient-${ing.slug}`,
        title: ing.name,
        body: body,
        bodyHTML: body + ` <a href="ingredient.html?slug=${ing.slug}" class="dh-chat-link">View full ingredient page →</a>`,
        cat: ing.cat === 'skincare' ? 'Skincare Ingredient' : 'Supplement Ingredient',
        qTokens: tokenize(`${ing.name} ${ing.alt || ''} ${(ing.tags || []).join(' ')}`),
        bodyTokens: tokenize(body),
        href: `ingredient.html?slug=${ing.slug}`
      });
    });

    return corpus;
  }

  /* ════════════════════════════════════════════════════════════════════
     3. SCORING + RANKING
     ════════════════════════════════════════════════════════════════════ */

  // Per-kind base weight — slightly prefer FAQ matches for FAQ-style queries,
  // product/bundle/ingredient matches for "what is X" / "tell me about X" queries.
  const KIND_WEIGHT = { faq: 1.0, bundle: 1.05, product: 1.05, ingredient: 1.05 };

  function scoreEntry(entry, userTokens) {
    if (!userTokens.length) return 0;
    let score = 0;
    // Each token shared with the title earns 3 points, with the body 1 point.
    // Multi-word matches in the title score a bonus (consecutive tokens).
    const qSet = new Set(entry.qTokens);
    const bSet = new Set(entry.bodyTokens);
    const userSet = new Set(userTokens);
    userTokens.forEach(t => {
      if (qSet.has(t)) score += 3;
      else if (bSet.has(t)) score += 1;
      // Partial substring match on title — catches "subscrib" matching "subscribe" / "subscription"
      else if (entry.title.toLowerCase().includes(t)) score += 1.5;
    });
    // Bonus for category hit: if any user token matches the category name itself
    if (entry.cat && userTokens.some(t => entry.cat.toLowerCase().includes(t))) score += 1.5;
    // Title coverage bonus — if the user's tokens fully cover the entry's title tokens,
    // it's a focused match and should outrank longer titles that include extra words.
    // E.g. "how does smart refill work" should prefer the title "What is Smart Refill?"
    //   (title tokens: smart, refill — fully covered)
    // over "Which routines work with Smart Refill?"
    //   (title tokens: routines, work, smart, refill — 75% covered).
    if (entry.qTokens.length > 0) {
      const coveredTitleTokens = entry.qTokens.filter(t => userSet.has(t)).length;
      const titleCoverage = coveredTitleTokens / entry.qTokens.length;
      if (titleCoverage === 1.0)      score += 8;   // perfect coverage — laser-focused match
      else if (titleCoverage >= 0.66) score += 2;   // mostly covered
    }
    // Normalize by length so long FAQ answers don't drown short relevant matches
    const lenPenalty = Math.log(entry.bodyTokens.length + 10) / 4;
    return (score / lenPenalty) * (KIND_WEIGHT[entry.kind] || 1.0);
  }

  function findBestMatches(userQuery, corpus, topN) {
    const userTokens = tokenize(userQuery);
    if (!userTokens.length) return [];
    const scored = corpus.map(e => ({ entry: e, score: scoreEntry(e, userTokens) }));
    scored.sort((a, b) => b.score - a.score);
    return scored.slice(0, topN || 4).filter(s => s.score > 0);
  }

  /* ════════════════════════════════════════════════════════════════════
     4. INTENT DETECTION + SPECIAL RESPONSES
     ════════════════════════════════════════════════════════════════════
     Some queries don't map to FAQ entries — greetings, thanks, "are you
     a bot", asking for a human. Handle those before scoring. */

  function detectSpecialIntent(userQuery) {
    const q = userQuery.toLowerCase().trim();
    // Greetings
    if (/^(hi|hey|hello|yo|sup|howdy)\b/.test(q) || /^good (morning|afternoon|evening)\b/.test(q)) {
      return {
        kind: 'greeting',
        message: "Hi there. I'm Daniel's House's FAQ assistant — I can answer questions about shipping, returns, ingredients, subscriptions, Smart Refill, the routines, or anything else on the site. What would you like to know?",
        suggestions: ['How does Smart Refill work?', 'How long does shipping take?', 'Can I cancel my subscription?']
      };
    }
    // Thanks
    if (/^(thanks|thank you|ty|thx|appreciate it|got it|cool|great|perfect|awesome)\b/.test(q)) {
      return {
        kind: 'thanks',
        message: "Anytime. If anything else comes up, I'm here.",
        suggestions: []
      };
    }
    // Asking if it's a bot or human
    if (/(are you (a |an )?(bot|robot|ai|computer|human|real|person))|who are you/.test(q)) {
      return {
        kind: 'meta',
        message: "I'm a simple assistant trained on Daniel's House's FAQ and product catalog — not a human. For anything I can't answer, you can email Daniel directly at <a href=\"mailto:daniel@danielshousewellness.com\" class=\"dh-chat-link\">daniel@danielshousewellness.com</a>.",
        suggestions: ['How does Smart Refill work?', "What's in the AM Routine?", 'How do returns work?']
      };
    }
    // Want a human / contact info
    if (/(speak to|talk to|contact|email|reach|call) (a |an |the )?(human|person|someone|customer service|support|daniel)/.test(q)
        || /(email|contact) (address|us|you)/.test(q)) {
      return {
        kind: 'contact',
        message: "Sure — you can email Daniel directly at <a href=\"mailto:daniel@danielshousewellness.com\" class=\"dh-chat-link\">daniel@danielshousewellness.com</a>. He reads every message personally and replies within a business day or two.",
        suggestions: []
      };
    }
    // Goodbye
    if (/^(bye|goodbye|cya|see ya|later|talk soon)\b/.test(q)) {
      return {
        kind: 'farewell',
        message: "Take care. Come back anytime.",
        suggestions: []
      };
    }
    return null;
  }

  /* ════════════════════════════════════════════════════════════════════
     5. ANSWER GENERATION
     ════════════════════════════════════════════════════════════════════ */

  function buildResponse(userQuery, corpus) {
    // Special intents first (greetings, thanks, contact requests)
    const special = detectSpecialIntent(userQuery);
    if (special) return special;

    const matches = findBestMatches(userQuery, corpus, 4);
    if (!matches.length) {
      return {
        kind: 'no-match',
        message: "I don't have a specific answer for that one yet. You can browse the full <a href=\"faq.html\" class=\"dh-chat-link\">FAQ page</a>, or email Daniel directly at <a href=\"mailto:daniel@danielshousewellness.com\" class=\"dh-chat-link\">daniel@danielshousewellness.com</a> — he reads every message.",
        suggestions: ['How does Smart Refill work?', 'How fast does shipping arrive?', 'How do returns work?']
      };
    }

    const best = matches[0].entry;
    const top  = matches[0].score;
    // Confidence threshold — if the best score is weak, treat as no clear match
    if (top < 1.4) {
      const suggestionTitles = matches.slice(0, 3).map(m => m.entry.title);
      return {
        kind: 'low-confidence',
        message: "I'm not sure I found the exact answer — were you asking about one of these?",
        suggestions: suggestionTitles
      };
    }

    // Pull 2-3 related suggestions from the next-best matches (excluding the winner)
    const suggestions = matches.slice(1, 4).map(m => m.entry.title);

    return {
      kind: best.kind,
      message: best.bodyHTML,
      title: best.title,
      cat: best.cat,
      suggestions: suggestions
    };
  }

  /* ════════════════════════════════════════════════════════════════════
     6. CHAT UI (DOM)
     ════════════════════════════════════════════════════════════════════ */

  // Suggested questions shown on first open — covers the most common asks.
  const STARTER_SUGGESTIONS = [
    'How does Smart Refill work?',
    'How fast does shipping arrive?',
    'Can I cancel my subscription?',
    "What's the difference between Daniel's Daily Supplements and Skincare?",
    'How does the AM Routine work?'
  ];

  function buildUI() {
    if (document.querySelector('.dh-chat-wrap')) return; // singleton

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
      <div class="dh-chat-panel" role="dialog" aria-modal="true" aria-label="Daniel's House FAQ Assistant">
        <div class="dh-chat-head">
          <div class="dh-chat-head-avatar">D</div>
          <div class="dh-chat-head-text">
            <div class="dh-chat-head-title">Daniel's House <em>Assistant</em></div>
            <div class="dh-chat-head-sub"><span class="dh-chat-status-dot"></span>Online · FAQ, shipping, ingredients</div>
          </div>
          <button class="dh-chat-close" type="button" aria-label="Close chat">✕</button>
        </div>
        <div class="dh-chat-body" id="dh-chat-body"></div>
        <div class="dh-chat-disclaimer">For order-specific issues, email
          <a href="mailto:daniel@danielshousewellness.com" class="dh-chat-link">daniel@danielshousewellness.com</a>
        </div>
        <form class="dh-chat-input-row" autocomplete="off">
          <input type="text" class="dh-chat-input" placeholder="Ask a question..." aria-label="Your question" maxlength="240"/>
          <button type="submit" class="dh-chat-send" aria-label="Send">→</button>
        </form>
      </div>
    `;
    document.body.appendChild(wrap);
    return wrap;
  }

  /* ════════════════════════════════════════════════════════════════════
     7. CHAT FLOW + STATE
     ════════════════════════════════════════════════════════════════════ */

  // Persistent history (last N messages) — kept in localStorage so the
  // conversation survives page navigation. Each message is { role, html }.
  function loadHistory() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed.slice(-MAX_HISTORY) : [];
    } catch (e) { return []; }
  }
  function saveHistory(history) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(history.slice(-MAX_HISTORY)));
    } catch (e) { /* ignore */ }
  }

  function escapeText(s) {
    return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }

  function bubbleHTML(role, html, opts) {
    opts = opts || {};
    const meta = opts.meta ? `<div class="dh-chat-bubble-meta">${escapeText(opts.meta)}</div>` : '';
    const cls = `dh-chat-msg dh-chat-msg-${role}`;
    const avatar = role === 'bot'
      ? `<div class="dh-chat-bubble-avatar">D</div>`
      : '';
    return `
      <div class="${cls}">
        ${avatar}
        <div class="dh-chat-bubble">
          ${meta}
          <div class="dh-chat-bubble-text">${html}</div>
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
        <div class="dh-chat-bubble dh-chat-typing">
          <span></span><span></span><span></span>
        </div>
      </div>
    `;
  }

  function init() {
    const wrap = buildUI();
    if (!wrap) return;
    const launcher = wrap.querySelector('.dh-chat-launcher');
    const overlay  = wrap.querySelector('.dh-chat-overlay');
    const panel    = wrap.querySelector('.dh-chat-panel');
    const closeBtn = wrap.querySelector('.dh-chat-close');
    const body     = wrap.querySelector('#dh-chat-body');
    const form     = wrap.querySelector('.dh-chat-input-row');
    const input    = wrap.querySelector('.dh-chat-input');

    let history = loadHistory();
    let corpus  = []; // built lazily on first open since other data scripts may not have loaded yet

    function render() {
      const items = [];
      if (history.length === 0) {
        // Welcome message + starter suggestions
        items.push(bubbleHTML('bot', `
          <p>Hi — I'm Daniel's House's FAQ assistant. I can help with:</p>
          <ul class="dh-chat-bullet">
            <li>Shipping, returns &amp; tracking</li>
            <li>Subscriptions &amp; Smart Refill</li>
            <li>Ingredients &amp; safety</li>
            <li>Routines, bundles &amp; products</li>
          </ul>
          <p>What would you like to know?</p>
        `));
        items.push(`<div class="dh-chat-suggestions">
          <div class="dh-chat-suggestions-label">Popular questions</div>
          <div class="dh-chat-suggestions-list">
            ${STARTER_SUGGESTIONS.map(s => `<button type="button" class="dh-chat-suggestion" data-q="${escapeText(s)}">${escapeText(s)}</button>`).join('')}
          </div>
        </div>`);
      } else {
        history.forEach(msg => {
          items.push(bubbleHTML(msg.role, msg.html, { meta: msg.meta }));
          if (msg.role === 'bot' && msg.suggestions) {
            items.push(suggestionsHTML(msg.suggestions));
          }
        });
      }
      body.innerHTML = items.join('');
      body.scrollTop = body.scrollHeight;
    }

    function open() {
      wrap.classList.remove('collapsed');
      wrap.classList.add('expanded');
      document.body.style.overflow = 'hidden';
      // Build corpus on first open — gives downstream data scripts time to load
      if (!corpus.length) corpus = buildCorpus();
      render();
      setTimeout(() => input.focus(), 200);
    }
    function close() {
      wrap.classList.remove('expanded');
      wrap.classList.add('collapsed');
      document.body.style.overflow = '';
    }

    launcher.addEventListener('click', () => {
      if (wrap.classList.contains('expanded')) close();
      else open();
    });
    overlay.addEventListener('click', close);
    closeBtn.addEventListener('click', close);
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && wrap.classList.contains('expanded')) close();
    });

    function pushUserMessage(text) {
      history.push({ role: 'user', html: escapeText(text) });
      render();
    }

    function pushBotResponse(response) {
      const meta = response.title && response.cat
        ? `${response.cat} · ${response.title}`
        : null;
      const msgEntry = {
        role: 'bot',
        html: response.message,
        suggestions: response.suggestions || []
      };
      if (meta) msgEntry.meta = meta;
      history.push(msgEntry);
      saveHistory(history);
      render();
    }

    function handleQuery(text) {
      text = (text || '').trim();
      if (!text) return;
      pushUserMessage(text);
      // Insert typing indicator briefly to feel less robotic
      body.insertAdjacentHTML('beforeend', typingIndicatorHTML());
      body.scrollTop = body.scrollHeight;
      setTimeout(() => {
        if (!corpus.length) corpus = buildCorpus();
        const response = buildResponse(text, corpus);
        // Remove typing indicator
        const typer = body.querySelector('.dh-chat-typing-row');
        if (typer) typer.remove();
        pushBotResponse(response);
      }, 450 + Math.random() * 350);
    }

    form.addEventListener('submit', e => {
      e.preventDefault();
      const v = input.value;
      input.value = '';
      handleQuery(v);
    });

    // Click on a suggestion → send it as a user message
    body.addEventListener('click', e => {
      const sugg = e.target.closest('.dh-chat-suggestion');
      if (sugg) {
        handleQuery(sugg.dataset.q);
      }
    });
  }

  // Wait for the data scripts (faq-data.js, products.js) to load before
  // wiring up the chatbot. Most pages load shared.js at the bottom of <body>.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
