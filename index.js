var moment = require('moment');

console.log("in .js file");

console.log(moment().subtract(10, 'days').calendar());