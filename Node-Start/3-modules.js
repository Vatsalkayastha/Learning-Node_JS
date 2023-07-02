// Modules
// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

const name = require('./4-name.js');
const sayHi = require('./5-utilities.js');
const data = require('./6-alternative.js')

console.log(data);



sayHi('Harry');
sayHi(name.vatsal);
sayHi(name.jds);