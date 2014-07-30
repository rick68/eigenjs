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

```bash
$ npm install eigenjs
```

## Matrix methods

### Eigen.Matrix(rows, cols)

```js
var Matrix = require('eigenjs').Matrix
  , mat = new Matrix(2, 3);
console.log('mat =\n%s', mat);
```

```txt
mat =
0 0 0
0 0 0
```

### Eigen.Matrix.rows() & Eigen.Matrix.cols()

```js
var Matrix = require('eigenjs').Matrix
  , mat = new Matrix(2, 3);
console.log(mat.rows());
console.log(mat.cols());
```

```txt
2
3
```

### Eigen.Matrix.set(row, col, value)

```js
var Matrix = require('eigenjs').Matrix
  , mat = new Matrix(2, 2);
mat.set(0, 0, 1)
   .set(0, 1, 2)
   .set(1, 0, 3)
   .set(1, 1, 4);
console.log('mat = \n%s', mat);
```

```txt
mat =
1 2
3 4
```

### Eigen.Matrix.set(value_array)

```js
var Matrix = require('eigenjs').Matrix
  , mat = new Matrix(3, 3);
mat.set([
  1, 2, 3,
  4, 5, 6,
  7, 8, 9
]);
console.log('mat = \n%s', mat);
```

```txt
mat =
1 2 3
4 5 6
7 8 9
```

### Eigen.Matrix.get(row, col)

```js
var Matrix = require('eigenjs').Matrix
  , mat = new Matrix(2, 2);
mat.set([
  1, 2,
  3, 4
]);
console.log(mat.get(0, 0) + ' ' + mat.get(0, 1));
console.log(mat.get(1, 0) + ' ' + mat.get(1, 1));
```

```txt
1 2
3 4
```

### Eigen.Matrix.add(mat)

```js
var Matrix = require('eigenjs').Matrix
  , mat1 = new Matrix(2, 2)
  , mat2 = new Matrix(2, 2)
  , mat3;
mat1.set([
  1, 3,
  2, 4,
]);
mat2.set([
  5, 6,
  7, 8,
]);
mat3 = mat1.add(mat2);
console.log("mat3 = \n%s", mat3);
```

```txt
mat3 =
 6  9
 9 12
```

### Eigen.Matrix.adda(mat)

```js
var Matrix = require('eigenjs').Matrix
  , mat1 = new Matrix(2, 2)
  , mat2 = new Matrix(2, 2);
mat1.set([
  1, 3,
  2, 4,
]);
mat2.set([
  5, 6,
  7, 8,
]);
mat1.adda(mat2);
console.log("mat1 = \n%s", mat1);
```

```txt
mat1 =
 6  9
 9 12
```

### Eigen.Matrix.sub(mat)

```js
var Matrix = require('eigenjs').Matrix
  , mat1 = new Matrix(2, 2)
  , mat2 = new Matrix(2, 2)
  , mat3;
mat1.set([
  1, 3,
  2, 4,
]);
mat2.set([
  5, 6,
  7, 8,
]);
mat3 = mat1.sub(mat2);
console.log("mat3 = \n%s", mat3);
```

```txt
mat3 =
-4 -3
-5 -4
```

### Eigen.Matrix.suba(mat)

```js
var Matrix = require('eigenjs').Matrix
  , mat1 = new Matrix(2, 2)
  , mat2 = new Matrix(2, 2);
mat1.set([
  1, 3,
  2, 4,
]);
mat2.set([
  5, 6,
  7, 8,
]);
mat1.suba(mat2);
console.log("mat1 = \n%s", mat1);
```

```txt
mat1 =
-4 -3
-5 -4
```

### Eigen.Matrix.mul(mat)

```js
var Matrix = require('eigenjs').Matrix
  , mat1 = new Matrix(2, 3)
  , vector = new Matrix(3, 1)
  , mat2;
mat1.set([
  1, 2, 3,
  4, 5, 6
]);
vector.set([
  1,
  6,
  8
]);
mat2 = mat1.mul(vector);
console.log("mat2 = \n%s", mat2);
```

```txt
mat2 =
37
82
```

### Eigen.Matrix.mul(scalar)
```js
var Matrix = require('eigenjs').Matrix
  , mat1 = new Matrix(2, 3)
  , mat2;
mat1.set([
  1, 2, 3,
  4, 5, 6
]);
mat2 = mat1.mul(2);
console.log("mat2 = \n%s", mat2);
```

```txt
mat2 =
 2  4  6
 8 10 12
```
