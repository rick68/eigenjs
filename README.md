# EigenJS [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Gitter chat][gitter-image]][gitter-url]
The goal of this project is to port Eigen library into JavaScript for linear algebar.

[npm-image]: http://img.shields.io/npm/v/eigenjs.svg
[npm-url]: https://npmjs.org/package/eigenjs

[downloads-image]: http://img.shields.io/npm/dm/eigenjs.svg

[travis-image]: https://travis-ci.org/rick68/eigenjs.svg?branch=master
[travis-url]: https://travis-ci.org/rick68/eigenjs

[gitter-image]: https://badges.gitter.im/rick68/eigenjs.png
[gitter-url]: https://gitter.im/rick68/eigenjs

## Getting started
First download and install [Eigen](http://eigen.tuxfamily.org). In OS X, you can simply use [Homebrew](http://brew.sh) and do:

```bash
$ brew install eigen
```

then either use npm:

```bash
$ npm install eigenjs
```

## Matrix methods

### Eigen.Matrix(rows, cols)

```js
var Matrix = require('eigenjs').Matrix
  , mat = new Matrix(2, 2);
console.log('mat =\n%s', mat);
```

```bash
mat =
0 0
0 0
```
