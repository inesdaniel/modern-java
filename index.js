var moment = require('moment');

console.log("in .js file");

console.log(moment().subtract(10, 'days').calendar());


// load math.js
const math = require('mathjs');

// use math.js
console.log(math.sqrt(-4)); // 2i

// Basic literal string creation
console.log(`This is a pretty little template string.`);

// Multiline strings
console.log(`In ES5 this is
 not legal.`);

 