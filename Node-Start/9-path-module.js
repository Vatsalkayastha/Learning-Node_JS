const { log } = require('console');
const path = require('path')
// const { log } = require('util')

console.log(path.sep);

const filepath = path.join('/content','subfolder','test.txt');

console.log(filepath);

const base = path.basename(filepath);
console.log(base);

const absolute = path.resolve(__dirname,'content','sub-folder','test.txt');
console.log(absolute);