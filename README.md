# `uppercase-letter-strings`

A collection of lightweight, single-purpose NPM packages that export individual uppercase letter strings. This project follows the philosophy of extreme modularity, allowing you to bundle only the specific characters your application requires.

## Installation

Install the specific letter package you need via npm:

```bash
npm install @uppercase-letters/a
# or
npm install @uppercase-letters/z
```

## Usage

Each package exports the uppercase letter as the primary export via `module.exports`.

```javascript
const A = require('@uppercase-letters/a');
const B = require('@uppercase-letters/b');

console.log(A); // "A"
console.log(B); // "B"
```

## Package List

The project consists of 26 individual packages, one for each letter of the English alphabet:

* `@uppercase-letters/a`
* `@uppercase-letters/b`
* `@uppercase-letters/c`
* ... and so on through `@uppercase-letters/z`

## Folder Structure

In this GitHub repository, each package is located in its own directory named after the letter:
* `/packages/a`
* `/packages/b`
* `/packages/c`
* ...and so on.

## License

Unlicense