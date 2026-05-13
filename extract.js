// Simulate browser environment to load the data files
global.window = {};
require('./data/products.js');
require('./data/ingredients.js');
require('./data/bundle-details.js');

const PRODUCTS = global.window.PRODUCTS || [];
const CONCERN_BUNDLES = global.window.CONCERN_BUNDLES || [];
const CURATED_BUNDLES = global.window.CURATED_BUNDLES || [];
const INGREDIENTS = global.window.INGREDIENTS || {};

console.log('=== PRODUCTS:', PRODUCTS.length);
console.log('=== CONCERN BUNDLES:', CONCERN_BUNDLES.length);
console.log('=== CURATED BUNDLES/ROUTINES:', CURATED_BUNDLES.length);
console.log('=== INGREDIENT entries:', Object.keys(INGREDIENTS).length);

// Show all product names + prices + categories
console.log('\n--- ALL PRODUCTS ---');
PRODUCTS.forEach(p => {
  const cat = (p.category || 'unknown');
  console.log(`${p.name.padEnd(15)} $${(p.price || 0).toFixed(2).padStart(7)}  [${cat}]  ${p.tag || ''}`);
});

console.log('\n--- CATEGORIES ---');
const cats = {};
PRODUCTS.forEach(p => { cats[p.category || 'unknown'] = (cats[p.category || 'unknown'] || 0) + 1; });
Object.entries(cats).forEach(([k,v]) => console.log(`${k}: ${v}`));

console.log('\n--- AVG PRICES ---');
const skin = PRODUCTS.filter(p => p.category === 'skincare');
const supp = PRODUCTS.filter(p => p.category === 'supplement');
const avgPrice = arr => arr.reduce((a,p) => a + p.price, 0) / arr.length;
const sumPrice = arr => arr.reduce((a,p) => a + p.price, 0);
console.log(`Skincare:    ${skin.length} items, avg $${avgPrice(skin).toFixed(2)}, total catalog $${sumPrice(skin).toFixed(2)}`);
console.log(`Supplement:  ${supp.length} items, avg $${avgPrice(supp).toFixed(2)}, total catalog $${sumPrice(supp).toFixed(2)}`);
console.log(`TOTAL CATALOG VALUE: $${sumPrice(PRODUCTS).toFixed(2)}`);
