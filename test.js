const isHex = require('./index');

console.log(isHex('#FFFFFF'));  // Output: true
console.log(isHex('#123abc'));  // Output: true
console.log(isHex('invalid'));  // Output: false
console.log(isHex('#HHJJZZ'));  // Output: false
console.log(isHex('#ACBD'));  // Output: false