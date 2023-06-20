# is-hex-color-code

[![npm version](https://img.shields.io/npm/v/is-hex-color-code.svg)](https://www.npmjs.com/package/is-hex-color-code)

A simple npm package to validate hexadecimal color codes.

## Installation

You can install the package using npm:

```
npm install is-hex-color-code
```

## Usage

Import the `isHex` function into your project and use it to check if a value is a valid hexadecimal color code.

```
const isHex = require('is-hex-color-code');

console.log(isHex('#FFFFFF'));  // Output: true
console.log(isHex('#123abc'));  // Output: true
console.log(isHex('invalid'));  // Output: false
console.log(isHex('#HHJJZZ'));  // Output: false
console.log(isHex('#ACBD'));  // Output: false
```

The `isHex` function accepts a color value as input and returns `true` if it is a valid hexadecimal color code (with or without the `#` prefix), and `false` otherwise.