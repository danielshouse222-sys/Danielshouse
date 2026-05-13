global.window = {};
require('./data/products.js');
require('./data/ingredients.js');
require('./data/bundle-details.js');

const PRODUCTS = global.window.PRODUCTS || [];
const CONCERN_BUNDLES = global.window.CONCERN_BUNDLES || [];
const CURATED_BUNDLES = global.window.CURATED_BUNDLES || [];
const INGREDIENTS = global.window.INGREDIENTS || {};
const BUNDLE_DETAILS = global.window.BUNDLE_DETAILS || {};

const getPrice = slug => {
  const p = PRODUCTS.find(x => x.slug === slug);
  return p ? p.price : 0;
};

console.log('=== CURATED ROUTINES ===');
CURATED_BUNDLES.forEach(b => {
  const full = b.slugs.reduce((a,s) => a + getPrice(s), 0);
  const disc = full * (1 - b.discount);
  console.log(`${b.name.padEnd(32)} disc=${(b.discount*100).toFixed(0).padStart(2)}%  full=$${full.toFixed(2).padStart(8)}  price=$${disc.toFixed(2).padStart(8)}  save=$${(full-disc).toFixed(2)}  [${b.slugs.length} items]`);
});

console.log('\n=== CONCERN BUNDLES ===');
CONCERN_BUNDLES.forEach(b => {
  const full = b.slugs.reduce((a,s) => a + getPrice(s), 0);
  // Concern bundle pricing — check helper
  const pricing = global.window.getConcernBundlePricing ? global.window.getConcernBundlePricing(b.id) : null;
  const disc = pricing ? pricing.discountedPrice : full * 0.85;
  console.log(`${(b.name || b.id).padEnd(32)}  full=$${full.toFixed(2).padStart(7)}  price=$${disc.toFixed(2).padStart(7)}  [${b.tab || 'mixed'}, ${b.slugs.length} items]`);
});

console.log('\n=== INGREDIENT NAMES (sample) ===');
Object.keys(INGREDIENTS).slice(0, 30).forEach(k => {
  const ing = INGREDIENTS[k];
  console.log(`- ${ing.name || k}: ${(ing.shortDescription || ing.description || '').slice(0, 70)}`);
});
console.log(`... and ${Object.keys(INGREDIENTS).length - 30} more`);
