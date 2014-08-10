# EigenJS [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Gitter chat][gitter-image]][gitter-url]
The goal of this project is to port Eigen library into JavaScript for linear algebar.

[npm-image]: http://img.shields.io/npm/v/eigenjs.svg
[npm-url]: https://npmjs.org/package/eigenjs

[downloads-image]: http://img.shields.io/npm/dm/eigenjs.svg

[travis-image]: https://travis-ci.org/rick68/eigenjs.svg?branch=master
[travis-url]: https://travis-ci.org/rick68/eigenjs

[gitter-image]: https://badges.gitter.im/rick68/eigenjs.png
[gitter-url]: https://gitter.im/rick68/eigenjs

## Getting Started

```bash
$ npm install eigenjs
```

## API

* [Complex Methods](#Complex-Methods)
  * [Class Methods](#)
    * [Complex(real, imag)](#)
    * [Complex.polar(scalar, scalar)](#)
    * [Complex.cos(scalar)](#)
    * [Complex.cos(comp)](#)
    * [Complex.cosh(scalar)](#)
    * [Complex.cosh(comp)](#)
    * [Complex.exp(scalar)](#)
    * [Complex.exp(comp)](#)
    * [Complex.log(scalar)](#)
    * [Complex.log(comp)](#)
    * [Complex.log10(scalar)](#)
    * [Complex.log10(comp)](#)
    * [Complex.pow(scalar, scalar)](#)
    * [Complex.pow(comp, scalar)](#)
    * [Complex.pow(scalar, comp)](#)
    * [Complex.pow(comp, comp)](#)
    * [Complex.sin(scalar)](#)
    * [Complex.sin(comp)](#)
    * [Complex.sinh(scalar)](#)
    * [Complex.sinh(comp)](#)
    * [Complex.sqrt(scalar)](#)
    * [Complex.sqrt(comp)](#)
    * [Complex.tan(scalar)](#)
    * [Complex.tan(comp)](#)
    * [Complex.tanh(scalar)](#)
    * [Complex.tanh(comp)](#)
    * [Complex.acos(scalar)](#)
    * [Complex.acos(comp)](#)
    * [Complex.acosh(scalar)](#)
    * [Complex.acosh(comp)](#)
    * [Complex.asin(scalar)](#)
    * [Complex.asin(comp)](#)
    * [Complex.asinh(scalar)](#)
    * [Complex.asinh(comp)](#)
    * [Complex.atan(scalar)](#)
    * [Complex.atan(comp)](#)
    * [Complex.atanh(scalar)](#)
    * [Complex.atanh(comp)](#)
  * [Instance Methods](#)
    * [.abs()](#)
    * [.arg()](#)
    * [.norm()](#)
    * [.conj()](#)
    * [.proj(scalar)](#)
    * [.proj(comp)](#)
    * [.add(scalar)](#)
    * [.add(comp)](#)
    * [.adda(scalar)](#)
    * [.adda(comp)](#)
    * [.sub(scalar)](#)
    * [.sub(comp)](#)
    * [.suba(scalar)](#)
    * [.suba(comp)](#)
    * [.mul(scalar)](#)
    * [.mul(comp)](#)
    * [.mul(mat)](#)
    * [.mul(cmat)](#)
    * [.mula(scalar)](#)
    * [.mula(comp)](#)
    * [.div(scalar)](#)
    * [.div(comp)](#)
    * [.diva(scalar)](#)
    * [.diva(comp)](#)
    * [.equals(Complex)](#)
    * [.isApprox(comp, [prec = 1e-12])](#)
    * [.toString()](#)
  * [Properties](#)
    * [real](#)
    * [imag](#)
* [Matrix Methods](#Complex-Methods)
  * [Class Methods](#)
    * [Matrix(rows, cols)](#)
    * [Matrix.Zero(rows, cols)](#)
    * [Matrix.Identity(n)](#)
    * [Matrix.Identity(rows, cols)](#)
    * [Matrix.Random(rows, cols)](#)
  * [Instance Methods](#)
    * [.rows()](#)
    * [.cols()](#)
    * [.set(row, col, scalar)](#)
    * [.set(scalar_array)](#)
    * [.get(row, col)](#)
    * [.add(mat)](#)
    * [.add(cmat)](#)
    * [.adda(mat)](#)
    * [.sub(mat)](#)
    * [.sub(cmat)](#)
    * [.suba(mat)](#)
    * [.mul(scalar)](#)
    * [.mul(comp)](#)
    * [.mul(mat)](#)
    * [.mul(cmat)](#)
    * [.mula(scalar))](#)
    * [.mula(mat)](#)
    * [.div(scalar))](#)
    * [.div(comp)](#)
    * [.diva(scalar))](#)
    * [.equals(mat)](#)
    * [.isApprox(mat, [prec = 1e-12])](#)
* [Complex Matrix Methods](#Complex-Methods)
  * [Class Methods](#)
    * [CMatrix(rows, cols)](#)
    * [CMatrix.Zero(rows, cols)](#)
    * [CMatrix.Identity(n)](#)
    * [CMatrix.Identity(rows, cols)](#)
    * [CMatrix.Random(rows, cols)](#)
  * [Instance Methods](#)
    * [.rows()](#)
    * [.cols()](#)
    * [.set(row, col, comp)](#)
    * [.set(comp_array)](#)
    * [.get(row, col)](#)
    * [.add(mat)](#)
    * [.add(cmat)](#)
    * [.adda(mat)](#)
    * [.adda(cmat)](#)
    * [.sub(mat)](#)
    * [.sub(cmat)](#)
    * [.suba(mat)](#)
    * [.suba(cmat)](#)
    * [.mul(scalar)](#)
    * [.mul(comp)](#)
    * [.mul(mat)](#)
    * [.mul(cmat)](#)
    * [.mula(scalar))](#)
    * [.mula(comp))](#)
    * [.mula(mat)](#)
    * [.mula(cmat)](#)
    * [.div(scalar))](#)
    * [.div(comp)](#)
    * [.diva(scalar))](#)
    * [.diva(comp))](#)
    * [.equals(cmat)](#)
    * [.isApprox(cmat, [prec = 1e-12])](#)


## Complex Methods

### Eigen.Complex(real, imag)

```js
var C = require('eigenjs').Complex
  , c = new C(3, -4);
console.log('c = %s', c);
```

```txt
c = (3,-4)
```

### Eigen.Complex.real && Eigen.Complex.imag

```js
var C = require('eigenjs').Complex
  , c = new C(3, -4);
c.real = 6;
c.imag = 8;
console.log('(%d,%d)', c.real, c.imag);
```

```txt
(6,8)
```

### Eigen.Complex.abs()

```js
var C = require('eigenjs').Complex
  , c = new C(3, -4);
console.log(c.abs());
```

```txt
5
```

### Eigen.Complex.arg()

```js
var C = require('eigenjs').Complex
  , c = new C(3, -4);
console.log(c.arg());
console.log('(%d,%d)', c.abs() * Math.cos(c.arg()), c.abs() * Math.sin(c.arg()));
```

```txt
-0.9272952180016122
(3.0000000000000004,-3.9999999999999996)
```

### Eigen.Complex.norm()

```js
var C = require('eigenjs').Complex
  , c = new C(3, -4);
console.log(c.norm());
```

```txt
25
```

### Eigen.Complex.conj()

```js
var C = require('eigenjs').Complex
  , c = new C(3, -4);
console.log(c.conj().toString());
```

```txt
(3,4)
```

### Eigen.Complex.polar(scalar, scalar)

```js
var C = require('eigenjs').Complex
  , rho = 5
  , theta = -0.9272952180016122
  , c = C.polar(rho, theta);
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
var C = require('eigenjs').Complex
  , c1 = new C(0, -Infinity)
  , c2 = C.proj(c1);
console.log(c2.toString());
```

```txt
(inf, -0)
```

### Eigen.Complex.add(scalar) && Eigen.Complex.add(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(3, 0)
  , c2 = new C(0, 4)
  , c3 = c1.add(c2);
console.log(c3.toString());
```

```txt
(3,4)
```

### Eigen.Complex.adda(scalar) && Eigen.Complex.adda(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(3, 0)
  , c2 = new C(0, 4);
c1.adda(c2);
console.log(c1.toString());
```

```txt
(3,4)
```

### Eigen.Complex.sub(scalar) && Eigen.Complex.sub(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(3, 4)
  , c2 = new Cx(2, -3)
  , c3 = c1.sub(c2);
console.log(c3.toString());
```

```txt
(1,7)
```

### Eigen.Complex.suba(scalar) && Eigen.Complex.suba(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(5, 8)
  , c2 = new C(-3, 4);
c1.suba(c2);
console.log(c1.toString());
```

```txt
(8,4)
```

### Eigen.Complex.mul(scalar) && Eigen.Complex.mul(comp) && Eigen.Complex.mul(mat) && Eigen.Complex.mul(cmat)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1, 8)
  , c2 = new C(6, 4)
  , c3 = c1.mul(c2);
console.log(c3.toString());
```

```txt
(-26,52)
```

### Eigen.Complex.mula(scalar) && Eigen.Complex.mula(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(3, 1)
  , c2 = new C(2, 4)
c1.mula(c2);
console.log(c1.toString());
```

```txt
(2,14)
```

### Eigen.Complex.div(scalar) && Eigen.Complex.div(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(4, 8)
  , c2 = new C(2, 0)
  , c3 = c1.div(c2);
console.log(c3.toString());
```

```txt
(2,4)
```

### Eigen.Complex.diva(scalar) && Eigen.Complex.diva(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(3, 9)
  , c2 = new C(9, 0)
c1.diva(c2);
console.log(c2.toString());
```

```txt
(0.333333,1)
```

### Eigen.Complex.cos(scalar) && Eigen.Complex.cos(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(Math.PI/4, 0)
  , c2 = C.cos(c1);
console.log(c2.toString());
```

```txt
(0.707107,-0)
```

### Eigen.Complex.cosh(scalar) && Eigen.Complex.cosh(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(0, 0)
  , c2 = C.cosh(c1);
console.log(c2.toString());
```

```txt
(1,0)
```

### Eigen.Complex.exp(scalar) && Eigen.Complex.exp(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1, 0)
  , c2 = C.exp(c1);
console.log(c2.toString());
```

```txt
(2.71828,0)
```

### Eigen.Complex.log(scalar) && Eigen.Complex.log(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(Math.E, 0)
  , c2 = C.log(c1);
console.log(c2.toString());
```

```txt
(1,0)
```

### Eigen.Complex.log10(scalar) && Eigen.Complex.log10(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1000, 0)
  , c2 = C.log10(c1);
console.log(c2.toString());
```

```txt
(3,0)
```

### Eigen.Complex.pow(scalar, scalar) && Eigen.Complex.pow(comp, scalar) && Eigen.Complex.pow(scalar, comp) && Eigen.Complex.pow(comp, comp)

```js
var C = require('eigenjs').Complex
  , c = C.pow(2, 3)
console.log(c.toString());
```

```txt
(8,0)
```

### Eigen.Complex.sin(scalar) && Eigen.Complex.sin(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(Math.PI/4, 0)
  , c2 = C.sin(c1);
console.log(c2.toString());
```

```txt
(0.707107,0)
```

### Eigen.Complex.sinh(scalar) && Eigen.Complex.sin(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(0, 0)
  , c2 = C.sinh(c1);
console.log(c2.toString());
```

```txt
(0,0)
```

### Eigen.Complex.sqrt(scalar) && Eigen.Complex.sqrt(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(9, 0)
  , c2 = C.sqrt(c1);
console.log(c2.toString());
```

```txt
(3,0)
```

### Eigen.Complex.tan(scalar) && Eigen.Complex.tan(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(Math.PI/4, 0)
  , c2 = C.tan(c1);
console.log(c2.toString());
```

```txt
(1,0)
```

### Eigen.Complex.tanh(scalar) && Eigen.Complex.tanh(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(Infinity, 0)
  , c2 = C.tanh(c1);
console.log(c2.toString());
```

```txt
(1,0)
```

### Eigen.Complex.acos(scalar) && Eigen.Complex.acos(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1, 0)
  , c2 = C.acos(c1);
console.log(c2.toString());
```

```txt
(0,0)
```

### Eigen.Complex.acosh(scalar) && Eigen.Complex.acosh(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1.54308, 0)
  , c2 = C.acosh(c1);
console.log(c2.toString());
```

```txt
(0.999999,0)
```

### Eigen.Complex.asin(scalar) && Eigen.Complex.asin(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1, 0)
  , c2 = C.asin(c1);
console.log(c2.toString());
```

```txt
(1.5708,7.82511e-09)
```

### Eigen.Complex.asinh(scalar) && Eigen.Complex.asinh(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1, 0)
  , c2 = C.asinh(c1);
console.log(c2.toString());
```

```txt
(0.881374,0)
```

### Eigen.Complex.atan(scalar) && Eigen.Complex.atan(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(Infinity, 0)
  , c2 = C.atan(c1);
console.log(c2.toString());
```

```txt
(1.5708,0)
```

### Eigen.Complex.atanh(scalar) && Eigen.Complex.atanh(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1, 0)
  , c2 = C.atanh(c1);
console.log(c2.toString());
```

```txt
(inf,0)
```

### Eigen.Complex.equals(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1, 0)
  , c2 = c1.conj();
console.log(c1.equals(c2));
```

```txt
true
```
### Eigen.Complex.isApprox(comp, [prec = 1e-12])

```js
var C = require('eigenjs').Complex
  , c1 = new C(1/3, 0)
  , c2 = new C(0.3333, 0);
console.log(c1.isApprox(c2, 1e-3));
```

```txt
true
```

## Matrix Methods

### Eigen.Matrix(rows, cols)

```js
var M = require('eigenjs').Matrix
  , mat = new M(2, 3);
console.log('mat =\n%s', mat);
```

```txt
mat =
0 0 0
0 0 0
```

### Eigen.Matrix.rows() & Eigen.Matrix.cols()

```js
var M = require('eigenjs').Matrix
  , mat = new M(2, 3);
console.log(mat.rows());
console.log(mat.cols());
```

```txt
2
3
```

### Eigen.Matrix.set(row, col, scalar)

```js
var M = require('eigenjs').Matrix
  , mat = new M(2, 2);
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

### Eigen.Matrix.set(scalar_array)

```js
var M = require('eigenjs').Matrix
  , mat = new M(3, 3);
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
var M = require('eigenjs').Matrix
  , mat = new M(2, 2);
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

### Eigen.Matrix.add(mat) && Eigen.Matrix.add(cmat)

```js
var M = require('eigenjs').Matrix
  , mat1 = new M(2, 2)
  , mat2 = new M(2, 2)
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
var M = require('eigenjs').Matrix
  , mat1 = new M(2, 2)
  , mat2 = new M(2, 2);
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

### Eigen.Matrix.sub(mat) && Eigen.Matrix.sub(cmat)

```js
var M = require('eigenjs').Matrix
  , mat1 = new M(2, 2)
  , mat2 = new M(2, 2)
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
var M = require('eigenjs').Matrix
  , mat1 = new M(2, 2)
  , mat2 = new M(2, 2);
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

### Eigen.Matrix.mul(scalar) && Eigen.Matrix.mul(comp) && Eigen.Matrix.mul(mat) && Eigen.Matrix.mul(cmat)

```js
var M = require('eigenjs').Matrix
  , mat1 = new M(2, 3)
  , vec = new M(3, 1)
  , mat2;
mat1.set([
  1, 2, 3,
  4, 5, 6
]);
vec.set([
  1,
  6,
  8
]);
mat2 = mat1.mul(vec);
console.log("mat2 = \n%s", mat2);
```

```txt
mat2 =
37
82
```

### Eigen.Matrix.mula(scalar) && Eigen.Matrix.mula(mat)

```js
var M = require('eigenjs').Matrix
  , mat = new M(2, 3)
  , vec = new M(3, 1);
mat.set([
  1, 2, 3,
  4, 5, 6
]);
vec.set([
  1,
  6,
  8
]);
mat.mula(vec);
console.log("mat = \n%s", mat);
```

```txt
mat =
37
82
```

### Eigen.Matrix.div(scalar) && Eigen.Matrix.div(comp)

```js
var M = require('eigenjs').Matrix
  , mat1 = new M(2, 2)
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
var M = require('eigenjs').Matrix
  , mat = new M(2, 2);
mat.set([
  1, 2,
  3, 4
]);
mat.diva(2);
console.log("mat = \n%s", mat);
```

```txt
mat =
0.5   1
1.5   2
```

### Eigen.Matrix.equals(mat)

```js
var M = require('eigenjs').Matrix
  , mat1 = new M(2, 2)
  , mat2 = new M(2, 2)
  , mat3 = new M(2, 2);
mat1.set([
  1, 2,
  3, 4
]);
mat2.set([
  1, 0,
  0, 1
]);
mat3.set([
  0, 2,
  3, 3
]);
console.log(mat1.equals(mat2.add(mat3)));
```

```txt
true
```

### Eigen.Matrix.isApprox(mat, [prec = 1e-12])

```js
var M = require('eigenjs').Matrix
  , mat1 = new M(2, 2)
  , mat2 = new M(2, 2);
mat1.set([
  1, 3,
  5, 7
]).diva(11);
mat2.set([
  0.091, 0.273,
  0.455, 0.636
]);
console.log(mat1.isApprox(mat2, 1e-3));
```

```txt
true
```

### Eigen.Matrix.Zero(rows, cols)

```js
var M = require('eigenjs').Matrix
  , mat = M.Zero(2, 3);
console.log('mat = \n%s', mat);
```

```txt
mat =
0 0 0
0 0 0
```

### Eigen.Matrix.Identity(n) && Eigen.Matrix.Identity(rows, cols)

```js
var M = require('eigenjs').Matrix
  , mat1 = M.Identity(2)
  , mat2 = M.Identity(2, 3);
console.log('mat1 = \n%s', mat1);
console.log('mat2 = \n%s', mat2);
```

```txt
mat1 =
1 0
0 1
mat2 =
1 0 0
0 1 0
```

### Eigen.Matrix.Random(rows, cols)

```js
var M = require('eigenjs').Matrix
  , mat = M.Random(2, 3);
console.log('mat = \n%s', mat);
```

```txt
mat =
-0.421952 -0.671276  0.547419
 0.260209  -0.13622  0.464891
```

## Complex Matrix Methods

### Eigen.CMatrix(rows, cols)

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , cmat = new CM(2, 3);
console.log('cmat =\n%s', cmat);
```

```txt
cmat =
(0,0) (0,0) (0,0)
(0,0) (0,0) (0,0)
```

### Eigen.CMatrix.rows() & Eigen.CMatrix.cols()

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , cmat = new CM(2, 3);
console.log(cmat.rows());
console.log(cmat.cols());
```

```txt
2
3
```

### Eigen.CMatrix.set(row, col, comp)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat = new CM(2, 2);
cmat.set(0, 0, C(1, 1))
    .set(0, 1, C(2, 2))
    .set(1, 0, C(3, 3))
    .set(1, 1, C(4, 4));
console.log('cmat = \n%s', cmat);
```

```txt
cmat =
(1,1) (2,2)
(3,3) (4,4)
```

### Eigen.CMatrix.set(comp_array)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat = new CM(3, 3);
cmat.set([
  C(1,1), C(2,2), C(3,3),
  C(4,4), C(5,5), C(6,6),
  C(7,7), C(8,8), C(9,9)
]);
console.log('cmat = \n%s', cmat);
```

```txt
cmat =
(1,1) (2,2) (3,3)
(4,4) (5,5) (6,6)
(7,7) (8,8) (9,9)
```

### Eigen.CMatrix.get(row, col)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat = new CM(2, 2);
cmat.set([
  C(1,1), C(2,2),
  C(3,3), C(4,4)
]);
console.log(cmat.get(0, 0) + ' ' + cmat.get(0, 1));
console.log(cmat.get(1, 0) + ' ' + cmat.get(1, 1));
```

```txt
(1,1) (2,2)
(3,3) (4,4)
```

### Eigen.CMatrix.add(mat) && Eigen.CMatrix.add(cmat)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat1 = new CM(2, 2)
  , cmat2 = new CM(2, 2)
  , cmat3;
cmat1.set([
  C(1,1), C(2,2),
  C(3,3), C(4,4)
]);
cmat2.set([
    5   ,   6   ,
  C(7,7), C(8,8)
]);
cmat3 = cmat1.add(cmat2);
console.log("cmat3 = \n%s", cmat3);
```

```txt
cmat3 =
  (6,1)   (8,2)
(10,10) (12,12)
```

### Eigen.CMatrix.adda(mat) && Eigen.CMatrix.adda(cmat)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat1 = new CM(2, 2)
  , cmat2 = new CM(2, 2);
cmat1.set([
  C(1,1), C(2,2),
  C(3,3), C(4,4)
]);
cmat2.set([
  5, 6,
  7, 8,
]);
cmat1.adda(cmat2);
console.log("cmat1 = \n%s", cmat1);
```

```txt
cmat1 =
 (6,1)  (8,2)
(10,3) (12,4)
```

### Eigen.CMatrix.sub(mat) && Eigen.CMatrix.sub(cmat)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat1 = new CM(2, 2)
  , cmat2 = new CM(2, 2)
  , cmat3;
cmat1.set([
  C(1,1), C(2,2),
  C(3,3), C(4,4)
]);
cmat2.set([
  5, 6,
  7, 8,
]);
cmat3 = cmat1.sub(cmat2);
console.log("cmat3 = \n%s", cmat3);
```

```txt
cmat3 =
(-4,1) (-4,2)
(-4,3) (-4,4)
```

### Eigen.CMatrix.suba(mat) && Eigen.CMatrix.suba(cmat)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat1 = new CM(2, 2)
  , cmat2 = new CM(2, 2);
cmat1.set([
  C(1,1), C(2,2),
  C(3,3), C(4,4)
]);
cmat2.set([
  5, 6,
  7, 8,
]);
cmat1.suba(cmat2);
console.log("cmat1 = \n%s", cmat1);
```

```txt
mat1 =
(-4,1) (-4,2)
(-4,3) (-4,4)
```

### Eigen.CMatrix.mul(scalar) && Eigen.CMatrix.mul(comp) && Eigen.CMatrix.mul(mat) && Eigen.CMatrix.mul(cmat)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , M = Eigen.Matrix
  , CM = Eigen.CMatrix
  , cmat1 = new CM(2, 3)
  , vec = new M(3, 1)
  , cmat2;
cmat1.set([
  C(1,1), C(2,2), C(3,3),
  C(4,4), C(5,5), C(6,6)
]);
vec.set([
  1,
  2,
  3
]);
cmat2 = cmat1.mul(vec);
console.log("cmat2 = \n%s", cmat2);
```

```txt
mat2 =
(14,14)
(32,32)
```

### Eigen.CMatrix.mula(scalar) && Eigen.CMatrix.mula(comp) && Eigen.CMatrix.mula(mat) && Eigen.CMatrix.mula(cmat)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat = new CM(2, 3)
  , c = new C(1, -1);
cmat.set([
  C(1,1), C(2,2), C(3,3),
  C(4,4), C(5,5), C(6,6)
]);
cmat.mula(c);
console.log("cmat = \n%s", cmat);
```

```txt
cmat =
 (2,0)  (4,0)  (6,0)
 (8,0) (10,0) (12,0)
```

### Eigen.CMatrix.div(scalar) && Eigen.CMatrix.div(comp)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat1 = new CM(2, 2)
  , cmat2 = new CM(2, 2);
cmat1.set([
  C(1,1), C(2,2),
  C(3,3), C(4,4)
]);
cmat2 = cmat1.div(C(2,0));
console.log("cmat2 = \n%s", cmat2);
```

```txt
cmat2 =
(0.5,0.5)     (1,1)
(1.5,1.5)     (2,2)
```

### Eigen.CMatrix.diva(scalar) && Eigen.CMatrix.diva(comp)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat = new CM(2, 2)
cmat.set([
  C(1,1), C(2,2),
  C(3,3), C(4,4)
]);
cmat.diva(2);
console.log("cmat = \n%s", cmat);
```

```txt
cmat =
(0.5,0.5)     (1,1)
(1.5,1.5)     (2,2)
```

### Eigen.CMatrix.equals(cmat)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat1 = new CM(2, 2)
  , cmat2 = new CM(2, 2)
  , cmat3 = new CM(2, 2);
cmat1.set([
  C(1,1), C(2,2),
  C(3,3), C(4,4)
]);
cmat2.set([
  C(1,0), C(2,0),
  C(3,0), C(4,0)
]);
cmat3.set([
  C(0,1), C(0,2),
  C(0,3), C(0,4)
]);
console.log(cmat1.equals(cmat2.add(cmat3)));
```

```txt
true
```

### Eigen.CMatrix.isApprox(cmat, [prec = 1e-12])

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat1 = new CM(2, 2)
  , cmat2 = new CM(2, 2);
cmat1.set([
  C(1,1), C(3,3),
  C(5,5), C(7,7)
]).diva(C(11,11));
cmat2.set([
  C(0.091,0), C(0.273,0),
  C(0.455,0), C(0.636,0)
]);
console.log(cmat1.isApprox(cmat2, 1e-3));
```

```txt
true
```

### Eigen.CMatrix.Zero(rows, cols)

```js
var CM = require('eigenjs').CMatrix
  , cmat = CM.Zero(2, 3);
console.log('cmat = \n%s', cmat);
```

```txt
cmat =
(0,0) (0,0) (0,0)
(0,0) (0,0) (0,0)
```

### Eigen.CMatrix.Identity(n) && Eigen.CMatrix.Identity(rows, cols)
```js
var CM = require('eigenjs').CMatrix
  , cmat1 = CM.Identity(2)
  , cmat2 = CM.Identity(2, 3);
console.log('cmat1 = \n%s', cmat1);
console.log('cmat2 = \n%s', cmat2);
```

```txt
cmat1 =
(1,0) (0,0)
(0,0) (1,0)
cmat2 =
(1,0) (0,0) (0,0)
(0,0) (1,0) (0,0)
```

### Eigen.CMatrix.Random(rows, cols)

```js
var CM = require('eigenjs').CMatrix
  , cmat = CM.Random(2, 3);
console.log('cmat = \n%s', cmat);
```

```txt
cmat =
   (0.827048,0.18844)  (-0.130621,0.648239)  (-0.946608,0.364096)
(-0.895631,-0.864291)  (0.952898,-0.648834)  (-0.646252,0.440248)
```
