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

## Complex methods

### Eigen.Complex(real, imag)

```js
var Complex = require('eigenjs').Complex
  , c = new Complex(3, -4);
console.log('c = %s', c);
```

```txt
c = (3,-4)
```

### Eigen.Complex.real && Eigen.Complex.imag

```js
var Complex = require('eigenjs').Complex
  , c = new Complex(3, -4);
c.real = 6;
c.imag = 8;
console.log('(%d,%d)', c.real, c.imag);
```

```txt
(6,8)
```

### Eigen.Complex.abs()

```js
var Complex = require('eigenjs').Complex
  , c = new Complex(3, -4);
console.log(c.abs());
```

```txt
5
```

### Eigen.Complex.arg()

```js
var Complex = require('eigenjs').Complex
  , c = new Complex(3, -4);
console.log(c.arg());
console.log('(%d,%d)', c.abs() * Math.cos(c.arg()), c.abs() * Math.sin(c.arg()));
```

```txt
-0.9272952180016122
(3.0000000000000004,-3.9999999999999996)
```

### Eigen.Complex.norm()

```js
var Complex = require('eigenjs').Complex
  , c = new Complex(3, -4);
console.log(c.norm());
```

```txt
25
```

### Eigen.Complex.conj()

```js
var Complex = require('eigenjs').Complex
  , c = new Complex(3, -4);
console.log(c.conj().toString());
```

```txt
(3,4)
```

### Eigen.Complex.polar(scalar, scalar)

```js
var Complex = require('eigenjs').Complex
  , rho = 5
  , theta = -0.9272952180016122
  , c = Complex.polar(rho, theta);
console.log(c.conj().toString());
console.log(c.real * Math.cos(c.imag));
console.log(c.real * Math.sin(c.imag));
```

```txt
(5,0.927295)
3.0000000000000004
-3.9999999999999996
```

### Eigen.Complex.proj(scalar) && Eigen.Complex.proj(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(0, -Infinity)
  , c2 = Complex.proj(c1);
console.log(c2.toString());
```

```txt
(inf, -0)
```

### Eigen.Complex.cos(scalar) && Eigen.Complex.cos(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(Math.PI/4, 0)
  , c2 = Complex.cos(c1);
console.log(c2.toString());
```

```txt
(0.707107,-0)
```

### Eigen.Complex.cosh(scalar) && Eigen.Complex.cosh(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(0, 0)
  , c2 = Complex.cosh(c1);
console.log(c2.toString());
```

```txt
(1,0)
```

### Eigen.Complex.exp(scalar) && Eigen.Complex.exp(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(1, 0)
  , c2 = Complex.exp(c1);
console.log(c2.toString());
```

```txt
(2.71828,0)
```

### Eigen.Complex.log(scalar) && Eigen.Complex.log(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(Math.E, 0)
  , c2 = Complex.log(c1);
console.log(c2.toString());
```

```txt
(1,0)
```

### Eigen.Complex.log10(scalar) && Eigen.Complex.log10(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(1000, 0)
  , c2 = Complex.log10(c1);
console.log(c2.toString());
```

```txt
(3,0)
```

### Eigen.Complex.pow(scalar, scalar) && Eigen.Complex.pow(comp, scalar) && Eigen.Complex.pow(scalar, comp) && Eigen.Complex.pow(comp, comp)

```js
var Complex = require('eigenjs').Complex
  , c = Complex.pow(2, 3)
console.log(c.toString());
```

```txt
(8,0)
```

### Eigen.Complex.sin(scalar) && Eigen.Complex.sin(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(Math.PI/4, 0)
  , c2 = Complex.sin(c1);
console.log(c2.toString());
```

```txt
(0.707107,0)
```

### Eigen.Complex.sinh(scalar) && Eigen.Complex.sin(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(0, 0)
  , c2 = Complex.sinh(c1);
console.log(c2.toString());
```

```txt
(0,0)
```

### Eigen.Complex.sqrt(scalar) && Eigen.Complex.sqrt(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(9, 0)
  , c2 = Complex.sqrt(c1);
console.log(c2.toString());
```

```txt
(3,0)
```

### Eigen.Complex.tan(scalar) && Eigen.Complex.tan(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(Math.PI/4, 0)
  , c2 = Complex.tan(c1);
console.log(c2.toString());
```

```txt
(1,0)
```

### Eigen.Complex.tanh(scalar) && Eigen.Complex.tanh(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(Infinity, 0)
  , c2 = Complex.tanh(c1);
console.log(c2.toString());
```

```txt
(1,0)
```

### Eigen.Complex.acos(scalar) && Eigen.Complex.acos(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(1, 0)
  , c2 = Complex.acos(c1);
console.log(c2.toString());
```

```txt
(0,0)
```

### Eigen.Complex.acosh(scalar) && Eigen.Complex.acosh(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(1.54308, 0)
  , c2 = Complex.acosh(c1);
console.log(c2.toString());
```

```txt
(0.999999,0)
```

### Eigen.Complex.asin(scalar) && Eigen.Complex.asin(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(1, 0)
  , c2 = Complex.asin(c1);
console.log(c2.toString());
```

```txt
(1.5708,7.82511e-09)
```

### Eigen.Complex.asinh(scalar) && Eigen.Complex.asinh(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(1, 0)
  , c2 = Complex.asinh(c1);
console.log(c2.toString());
```

```txt
(0.881374,0)
```

### Eigen.Complex.atan(scalar) && Eigen.Complex.atan(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(Infinity, 0)
  , c2 = Complex.atan(c1);
console.log(c2.toString());
```

```txt
(1.5708,0)
```

### Eigen.Complex.atanh(scalar) && Eigen.Complex.atanh(comp)

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(1, 0)
  , c2 = Complex.atanh(c1);
console.log(c2.toString());
```

```txt
(inf,0)
```

### Eigen.Complex.equals()

```js
var Complex = require('eigenjs').Complex
  , c1 = new Complex(1, 0)
  , c2 = c1.conj();
console.log(c1.equals(c2));
```

```txt
true
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

### Eigen.Matrix.mula(mat)

```js
var Matrix = require('eigenjs').Matrix
  , mat1 = new Matrix(2, 3)
  , vector = new Matrix(3, 1);
mat1.set([
  1, 2, 3,
  4, 5, 6
]);
vector.set([
  1,
  6,
  8
]);
mat1.mula(vector);
console.log("mat1 = \n%s", mat1);
```

```txt
mat1 =
37
82
```

### Eigen.Matrix.mula(scalar)

```js
var Matrix = require('eigenjs').Matrix
  , mat1 = new Matrix(2, 3);
mat1.set([
  1, 2, 3,
  4, 5, 6
]);
mat1.mula(2);
console.log("mat1 = \n%s", mat1);
```

```txt
mat1 =
 2  4  6
 8 10 12
```

### Eigen.Matrix.div(scalar)

```js
var Matrix = require('eigenjs').Matrix
  , mat1 = new Matrix(2, 2)
  , mat2;
mat1.set([
  1, 2,
  3, 4
]);
mat2 = mat1.div(2);
console.log("mat2 = \n%s", mat2);
```

```txt
mat2 =
0.5   1
1.5   2
```

### Eigen.Matrix.diva(scalar)

```js
var Matrix = require('eigenjs').Matrix
  , mat1 = new Matrix(2, 2);
mat1.set([
  1, 2,
  3, 4
]);
mat1.diva(2);
console.log("mat1 = \n%s", mat1);
```

```txt
mat1 =
0.5   1
1.5   2
```
