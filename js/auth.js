/* AUTH MODULE — client-side account system for the prototype.
   PROTOTYPE ONLY: data lives in localStorage; passwords use a non-cryptographic
   hash (NOT secure). Swap with real auth (Shopify Customer Accounts, Supabase,
   Auth0, etc.) before launch. The data shape and UI translate cleanly.

   Exports window.dhAuth with:
     signIn, signUp, signOut, getCurrentUser, getCurrentUserId, getAccounts,
     updateCurrentUser, placeOrderFromCart, getReviews, getReviewsForProduct,
     userHasPurchased, addReview, onChange, bindNavAccountButton

   Events: dispatches 'dh:auth:change' on window when state mutates.
*/
(function() {
  const ACCOUNTS_KEY = 'dh_accounts_v1';
  const ACTIVE_KEY   = 'dh_active_account_v1';
  const REVIEWS_KEY  = 'dh_reviews_v1';

  function readJSON(key, fallback) {
    try { return JSON.parse(localStorage.getItem(key)) || fallback; }
    catch (e) { return fallback; }
  }
  function writeJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); }
    catch (e) { console.error('[dhAuth] storage write failed', e); }
  }

  // Non-cryptographic hash — for prototype only.
  function hashPwd(p) {
    let h = 0;
    for (let i = 0; i < p.length; i++) {
      h = ((h << 5) - h) + p.charCodeAt(i);
      h |= 0;
    }
    return 'h_' + Math.abs(h).toString(36) + '_' + p.length;
  }

  function getAccounts() { return readJSON(ACCOUNTS_KEY, []); }
  function saveAccounts(arr) { writeJSON(ACCOUNTS_KEY, arr); }
  function getCurrentUserId() { return localStorage.getItem(ACTIVE_KEY); }
  function getCurrentUser() {
    const id = getCurrentUserId();
    if (!id) return null;
    return getAccounts().find(a => a.id === id) || null;
  }
  function setCurrentUserId(id) {
    if (id) localStorage.setItem(ACTIVE_KEY, id);
    else localStorage.removeItem(ACTIVE_KEY);
    notifyChange();
  }
  function updateCurrentUser(patch) {
    const id = getCurrentUserId();
    if (!id) return null;
    const accounts = getAccounts();
    const idx = accounts.findIndex(a => a.id === id);
    if (idx === -1) return null;
    accounts[idx] = Object.assign({}, accounts[idx], patch);
    saveAccounts(accounts);
    notifyChange();
    return accounts[idx];
  }

  // ── Auth actions ──
  function signIn(email, password) {
    const accounts = getAccounts();
    const h = hashPwd(password || '');
    const acc = accounts.find(a =>
      a.email.toLowerCase() === (email||'').trim().toLowerCase() &&
      a.passwordHash === h
    );
    if (!acc) throw new Error('Invalid email or password.');
    setCurrentUserId(acc.id);
    return acc;
  }

  function signUp({email, password, firstName, lastName, phone}) {
    email = (email||'').trim();
    if (!email || !password) throw new Error('Email and password are required.');
    if (!/^\S+@\S+\.\S+$/.test(email)) throw new Error('Please enter a valid email address.');
    if (password.length < 6) throw new Error('Password must be at least 6 characters.');
    const accounts = getAccounts();
    if (accounts.find(a => a.email.toLowerCase() === email.toLowerCase())) {
      throw new Error('An account with that email already exists.');
    }
    const id = 'usr_' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    const acc = {
      id, email,
      passwordHash: hashPwd(password),
      firstName: (firstName||'').trim(),
      lastName:  (lastName||'').trim(),
      phone:     (phone||'').trim(),
      name: `${(firstName||'').trim()} ${(lastName||'').trim()}`.trim(),
      createdAt: new Date().toISOString(),
      addresses: [],
      orders: [],
      subscriptions: [],
      savedRoutine: { am: [], pm: [], daily: [] },
      wishlist: [],
      reviews: [],
      preferences: { emailMarketing: true, smsMarketing: false }
    };
    seedSampleData(acc);
    accounts.push(acc);
    saveAccounts(accounts);
    setCurrentUserId(id);
    return acc;
  }

  function signOut() { setCurrentUserId(null); }

  // ── Sample seeding ─────────────────────────────────────────────
  // New accounts get one delivered order + one in-transit order + one
  // active subscription so the portal looks populated on first sign-in.
  // Daniel/the user can clear or replace this in real implementations.
  function seedSampleData(acc) {
    const now = Date.now();
    const day = 24 * 3600 * 1000;
    const seventeenDaysAgo = new Date(now - 17*day);
    const fourDaysAgo      = new Date(now - 4*day);
    const nextShip         = new Date(now + 18*day);

    acc.orders.push({
      id: 'ord_' + seventeenDaysAgo.getTime().toString(36),
      date: seventeenDaysAgo.toISOString(),
      status: 'delivered',
      items: [
        { slug: 'the-house-wash',    name: 'The House Wash',    qty: 1, price: 28, isSubscription: false },
        { slug: 'the-house-defense', name: 'The House Defense', qty: 1, price: 38, isSubscription: false },
        { slug: 'the-house-multi',   name: 'The House Multi',   qty: 1, price: 42, isSubscription: true  }
      ],
      subtotal: 108, shipping: 0, tax: 8.64, discount: 0, total: 116.64,
      shippingAddress: null,
      trackingNumber: '1Z9999W90388394212'
    });
    acc.orders.push({
      id: 'ord_' + fourDaysAgo.getTime().toString(36),
      date: fourDaysAgo.toISOString(),
      status: 'shipped',
      items: [
        { slug: 'the-house-boost', name: 'The House Boost', qty: 1, price: 36, isSubscription: false },
        { slug: 'the-house-soft',  name: 'The House Soft',  qty: 1, price: 34, isSubscription: false }
      ],
      subtotal: 70, shipping: 0, tax: 5.60, discount: 0, total: 75.60,
      shippingAddress: null,
      trackingNumber: '1Z9999W90388394301'
    });
    acc.subscriptions.push({
      id: 'sub_' + (now - 1).toString(36),
      productSlug: 'the-house-multi',
      productName: 'The House Multi',
      frequency: 'monthly',
      nextShipDate: nextShip.toISOString(),
      pricePerShip: 37.80,
      status: 'active',
      startedAt: seventeenDaysAgo.toISOString()
    });
    acc.savedRoutine.am = ['the-house-wash','the-house-balance','the-house-boost','the-house-hyaluronic','the-house-defense','the-house-soft'];
    acc.savedRoutine.pm = ['the-house-renewal','the-house-eye','the-house-firm','the-house-soft'];
    acc.savedRoutine.daily = ['the-house-multi','the-house-collagen','the-house-flow'];
  }

  // ── Cart → Order ─────────────────────────────────────────────
  function placeOrderFromCart(cartItems, totals) {
    const u = getCurrentUser();
    if (!u) throw new Error('Sign in to place an order.');
    if (!cartItems || !cartItems.length) throw new Error('Cart is empty.');
    const order = {
      id: 'ord_' + Date.now().toString(36),
      date: new Date().toISOString(),
      status: 'processing',
      items: cartItems.map(i => ({
        slug: i.slug, name: i.name, qty: i.qty || 1, price: i.price,
        isSubscription: !!i.subscribe
      })),
      subtotal: (totals && totals.subtotal) || 0,
      shipping: (totals && totals.shipping) || 0,
      tax:      (totals && totals.tax)      || 0,
      discount: (totals && totals.discount) || 0,
      total:    (totals && totals.total)    || 0,
      trackingNumber: ''
    };
    const orders = (u.orders || []).slice();
    orders.unshift(order);
    updateCurrentUser({ orders });
    return order;
  }

  // ── Reviews ──────────────────────────────────────────────────
  function getReviews() { return readJSON(REVIEWS_KEY, []); }
  function saveReviews(arr) { writeJSON(REVIEWS_KEY, arr); }
  function getReviewsForProduct(slug) {
    return getReviews().filter(r => r.slug === slug);
  }
  function userHasPurchased(slug) {
    const u = getCurrentUser();
    if (!u) return false;
    return (u.orders||[]).some(o => (o.items||[]).some(i => i.slug === slug));
  }
  function addReview({slug, rating, title, body}) {
    const u = getCurrentUser();
    if (!u) throw new Error('Sign in to leave a review.');
    if (!userHasPurchased(slug)) throw new Error('Only verified buyers can review this product.');
    rating = Number(rating);
    if (!rating || rating < 1 || rating > 5) throw new Error('Please pick a rating from 1 to 5 stars.');
    if (!body || body.trim().length < 10) throw new Error('Please write at least 10 characters in your review.');

    const reviews = getReviews();
    // One review per user per product — overwrite any prior
    const filtered = reviews.filter(r => !(r.userId === u.id && r.slug === slug));
    const lastInitial = (u.lastName||'')[0];
    const newRev = {
      id: 'rev_' + Date.now().toString(36),
      userId: u.id,
      userName: (u.firstName || 'Customer') + (lastInitial ? ' ' + lastInitial + '.' : ''),
      slug, rating,
      title: (title || '').trim(),
      body: body.trim(),
      date: new Date().toISOString(),
      verified: true
    };
    filtered.push(newRev);
    saveReviews(filtered);

    // Mirror on user record so the My Reviews tab works
    const myList = (u.reviews||[]).slice();
    const myIdx = myList.findIndex(r => r.slug === slug);
    const myRev = { slug, rating, title: newRev.title, body: newRev.body, date: newRev.date };
    if (myIdx >= 0) myList[myIdx] = myRev;
    else myList.push(myRev);
    updateCurrentUser({ reviews: myList });

    return newRev;
  }

  // ── Change-notification system ───────────────────────────────
  const _listeners = new Set();
  function notifyChange() {
    _listeners.forEach(fn => { try { fn(); } catch(e){} });
    try { window.dispatchEvent(new CustomEvent('dh:auth:change')); }
    catch(e){}
  }
  function onChange(fn) { _listeners.add(fn); return () => _listeners.delete(fn); }

  // ── Top-nav Account button binding ───────────────────────────
  // Pages include <a class="account-trigger" href="account.html">…</a>
  // This function updates its label (Sign In ↔ first name).
  function bindNavAccountButton() {
    document.querySelectorAll('.account-trigger').forEach(btn => {
      const u = getCurrentUser();
      if (u) {
        btn.textContent = u.firstName ? u.firstName : 'Account';
        btn.setAttribute('aria-label', 'Account');
        btn.setAttribute('data-state', 'signed-in');
      } else {
        btn.textContent = 'Sign In';
        btn.setAttribute('aria-label', 'Sign in');
        btn.setAttribute('data-state', 'signed-out');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', bindNavAccountButton);
  window.addEventListener('dh:auth:change', bindNavAccountButton);

  window.dhAuth = {
    signIn, signUp, signOut,
    getCurrentUser, getCurrentUserId, getAccounts,
    updateCurrentUser, placeOrderFromCart,
    getReviews, getReviewsForProduct, userHasPurchased, addReview,
    onChange, bindNavAccountButton
  };
})();
