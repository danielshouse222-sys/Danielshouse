global.window = {};
require('./data/products.js');
require('./data/ingredients.js');
const INGREDIENTS = global.window.INGREDIENTS || {};
console.log('All ingredient names:');
const names = Object.values(INGREDIENTS).map(i => i.name).filter(Boolean);
console.log(names.join(', '));
console.log('\nTotal:', names.length);
