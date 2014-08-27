# EigenJS [![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Gitter chat][gitter-image]][gitter-url]
The goal of this project is to port Eigen library into JavaScript for linear algebar.

[npm-image]: http://img.shields.io/npm/v/eigenjs.svg
[npm-url]: https://npmjs.org/package/eigenjs

[downloads-image]: http://img.shields.io/npm/dm/eigenjs.svg

[travis-image]: https://travis-ci.org/rick68/eigenjs.svg?branch=master
[travis-url]: https://travis-ci.org/rick68/eigenjs

[gitter-image]: https://badges.gitter.im/rick68/eigenjs.png
[gitter-url]: https://gitter.im/rick68/eigenjs

## Installation

**OS X** and **Linux** (GCC >= 4.8):
```bash
$ npm install eigenjs
```

**Windows7/8** (Visual Studio 2012):
```bash
$ npm install eigenjs --msvs_version=2012
```

## API

* [Complex](#complex)
  * [Complex Class Methods](#complex-class-methods)
    * [Complex(real, [imag])](#complexreal-imag)
    * [Complex.polar(scalar, scalar)](#complexpolarscalar-scalar)
    * [Complex.cos(scalar)](#complexcosscalar)
    * [Complex.cos(comp)](#complexcoscomp)
    * [Complex.cosh(scalar)](#complexcoshscalar)
    * [Complex.cosh(comp)](#complexcoshcomp)
    * [Complex.exp(scalar)](#complexexpscalar)
    * [Complex.exp(comp)](#complexexpcomp)
    * [Complex.log(scalar)](#complexlogscalar)
    * [Complex.log(comp)](#complexlogcomp)
    * [Complex.log10(scalar)](#complexlog10scalar)
    * [Complex.log10(comp)](#complexlog10comp)
    * [Complex.pow(scalar, scalar)](#complexpowscalar-scalar)
    * [Complex.pow(scalar, comp)](#complexpowscalar-comp)
    * [Complex.pow(comp, scalar)](#complexpowcomp-scalar)
    * [Complex.pow(comp, comp)](#complexpowcomp-comp)
    * [Complex.sin(scalar)](#complexsinscalar)
    * [Complex.sin(comp)](#complexsincomp)
    * [Complex.sinh(scalar)](#complexsinhscalar)
    * [Complex.sinh(comp)](#complexsinhcomp)
    * [Complex.sqrt(scalar)](#complexsqrtscalar)
    * [Complex.sqrt(comp)](#complexsqrtcomp)
    * [Complex.tan(scalar)](#complextanscalar)
    * [Complex.tan(comp)](#complextancomp)
    * [Complex.tanh(scalar)](#complextanhscalar)
    * [Complex.tanh(comp)](#complextanhcomp)
    * [Complex.acos(scalar)](#complexacosscalar)
    * [Complex.acos(comp)](#complexacoscomp)
    * [Complex.acosh(scalar)](#complexacoshscalar)
    * [Complex.acosh(comp)](#complexacoshcomp)
    * [Complex.asin(scalar)](#complexasinscalar)
    * [Complex.asin(comp)](#complexasincomp)
    * [Complex.asinh(scalar)](#complexasinhscalar)
    * [Complex.asinh(comp)](#complexasinhcomp)
    * [Complex.atan(scalar)](#complexatanscalar)
    * [Complex.atan(comp)](#complexatancomp)
    * [Complex.atanh(scalar)](#complexatanhscalar)
    * [Complex.atanh(comp)](#complexatanhcomp)
  * [Complex Instance Methods](#complex-instance-methods)
    * [comp.abs()](#compabs)
    * [comp.arg()](#comparg)
    * [comp.norm()](#compnorm)
    * [comp.conj()](#compconj)
    * [comp.proj(scalar)](#compprojscalar)
    * [comp.proj(comp)](#compprojcomp)
    * [comp.add(scalar)](#compaddscalar)
    * [comp.add(comp)](#compaddcomp)
    * [comp.adda(scalar)](#compaddascalar)
    * [comp.adda(comp)](#compaddacomp)
    * [comp.sub(scalar)](#compsubscalar)
    * [comp.sub(comp)](#compsubcomp)
    * [comp.suba(scalar)](#compsubascalar)
    * [comp.suba(comp)](#compsubacomp)
    * [comp.mul(scalar)](#compmulscalar)
    * [comp.mul(comp)](#compmulcomp)
    * [comp.mul(mat)](#compmulmat)
    * [comp.mul(cmat)](#compmulcmat)
    * [comp.mula(scalar)](#compmulascalar)
    * [comp.mula(comp)](#compmulacomp)
    * [comp.div(scalar)](#compdivscalar)
    * [comp.div(comp)](#compdivcomp)
    * [comp.diva(scalar)](#compdivascalar)
    * [comp.diva(comp)](#compdivacomp)
    * [comp.equals(comp)](#compequalscomp)
    * [comp.isApprox(comp, [prec = 1e-12])](#compisapproxcomp-prec--1e-12)
    * [comp.toString()](#comptostring)
  * [Complex Properties](#complex-properties)
    * [comp.real](#compreal)
    * [comp.imag](#compimag)
* [Matrix](#matrix)
  * [Matrix Class Methods](#matrix-class-methods)
    * [Matrix(rows, cols)](#matrixrows-cols)
    * [Matrix.Zero(n)](#matrixzeron)
    * [Matrix.Zero(rows, cols)](#matrixzerorows-cols)
    * [Matrix.Identity(n)](#matrixidentityn)
    * [Matrix.Identity(rows, cols)](#matrixidentityrows-cols)
    * [Matrix.Random(n)](#matrixrandomn)
    * [Matrix.Random(rows, cols)](#matrixrandomrows-cols)
  * [Matrix Instance Methods](#matrix-instance-methods)
    * [mat.rows()](#matrows)
    * [mat.cols()](#matcols)
    * [mat.set(row, col, scalar)](#matsetrow-col-scalar)
    * [mat.set(scalar_array)](#matsetscalar_array)
    * [mat.get(row, col)](#matgetrow-col)
    * [mat.add(mat)](#mataddmat)
    * [mat.add(vec)](#mataddvec)
    * [mat.add(rvec)](#mataddrvec)
    * [mat.add(cmat)](#mataddcmat)
    * [mat.add(cvec)](#mataddcvec)
    * [mat.add(crvec)](#mataddcrvec)
    * [mat.adda(mat)](#mataddamat)
    * [mat.adda(vec)](#mataddavec)
    * [mat.adda(rvec)](#mataddarvec)
    * [mat.sub(mat)](#matsubmat)
    * [mat.sub(vec)](#matsubvec)
    * [mat.sub(rvec)](#matsubrvec)
    * [mat.sub(cmat)](#matsubcmat)
    * [mat.sub(cvec)](#matsubcvec)
    * [mat.sub(crvec)](#matsubcrvec)
    * [mat.suba(mat)](#matsubamat)
    * [mat.suba(vec)](#matsubavec)
    * [mat.suba(rvec)](#matsubarvec)
    * [mat.mul(scalar)](#matmulscalar)
    * [mat.mul(comp)](#matmulcomp)
    * [mat.mul(mat)](#matmulmat)
    * [mat.mul(vec)](#matmulvec)
    * [mat.mul(rvec)](#matmulrvec)
    * [mat.mul(cmat)](#matmulcmat)
    * [mat.mul(cvec)](#matmulcvec)
    * [mat.mul(crvec)](#matmulcrvec)
    * [mat.mula(scalar)](#matmulascalar)
    * [mat.mula(mat)](#matmulamat)
    * [mat.mula(vec)](#matmulavec)
    * [mat.mula(rvec)](#matmularvec)
    * [mat.div(scalar)](#matdivscalar)
    * [mat.div(comp)](#matdivcomp)
    * [mat.diva(scalar)](#matdivascalar)
    * [mat.equals(mat)](#matequalsmat)
    * [mat.equals(vec)](#matequalsvec)
    * [mat.equals(rvec)](#matequalsrvec)
    * [mat.isApprox(mat, [prec = 1e-12])](#matisapproxmat-prec--1e-12)
    * [mat.isApprox(vec, [prec = 1e-12])](#matisapproxvec-prec--1e-12)
    * [mat.isApprox(rvec, [prec = 1e-12])](#matisapproxrvec-prec--1e-12)
    * [mat.block(startRow, startCol, blockRows, blockCols)](#matblockstartrowstartcolblockrowsblockcols)
    * [mat.toString()](#mattostring)
* [Complex Matrix](#complex-matrix)
  * [Complex Matrix Class Methods](#complex-matrix-class-methods)
    * [CMatrix(rows, cols)](#cmatrixrows-cols)
    * [CMatrix.Zero(n)](#cmatrixzeron)
    * [CMatrix.Zero(rows, cols)](#cmatrixzerorows-cols)
    * [CMatrix.Identity(n)](#cmatrixidentityn)
    * [CMatrix.Identity(rows, cols)](#cmatrixidentityrows-cols)
    * [CMatrix.Random(n)](#cmatrixrandomn)
    * [CMatrix.Random(rows, cols)](#cmatrixrandomrows-cols)
  * [Complex Matrix Instance Methods](#complex-matrix-instance-methods)
    * [cmat.rows()](#cmatrows)
    * [cmat.cols()](#cmatcols)
    * [cmat.set(row, col, comp)](#cmatsetrow-col-comp)
    * [cmat.set(comp_array)](#cmatsetcomp_array)
    * [cmat.get(row, col)](#cmatgetrow-col)
    * [cmat.add(mat)](#cmataddmat)
    * [cmat.add(vec)](#cmataddvec)
    * [cmat.add(rvec)](#cmataddrvec)
    * [cmat.add(cmat)](#cmataddcmat)
    * [cmat.add(cvec)](#cmataddcvec)
    * [cmat.add(crvec)](#cmataddcrvec)
    * [cmat.adda(mat)](#cmataddamat)
    * [cmat.adda(vec)](#cmataddavec)
    * [cmat.adda(rvec)](#cmataddarvec)
    * [cmat.adda(cmat)](#cmataddacmat)
    * [cmat.adda(cvec)](#cmataddacvec)
    * [cmat.adda(crvec)](#cmataddacrvec)
    * [cmat.sub(mat)](#cmatsubmat)
    * [cmat.sub(vec)](#cmatsubvec)
    * [cmat.sub(rvec)](#cmatsubrvec)
    * [cmat.sub(cmat)](#cmatsubcmat)
    * [cmat.sub(cvec)](#cmatsubcvec)
    * [cmat.sub(crvec)](#cmatsubcrvec)
    * [cmat.suba(mat)](#cmatsubamat)
    * [cmat.suba(vec)](#cmatsubavec)
    * [cmat.suba(rvec)](#cmatsubarvec)
    * [cmat.suba(cmat)](#cmatsubacmat)
    * [cmat.suba(cvec)](#cmatsubacvec)
    * [cmat.suba(crvec)](#cmatsubacrvec)
    * [cmat.mul(scalar)](#cmatmulscalar)
    * [cmat.mul(comp)](#cmatmulcomp)
    * [cmat.mul(mat)](#cmatmulmat)
    * [cmat.mul(vec)](#cmatmulvec)
    * [cmat.mul(rvec)](#cmatmulrvec)
    * [cmat.mul(cmat)](#cmatmulcmat)
    * [cmat.mul(cvec)](#cmatmulcvec)
    * [cmat.mul(crvec)](#cmatmulcrvec)
    * [cmat.mula(scalar)](#cmatmulascalar)
    * [cmat.mula(comp)](#cmatmulacomp)
    * [cmat.mula(mat)](#cmatmulamat)
    * [cmat.mula(vec)](#cmatmulavec)
    * [cmat.mula(rvec)](#cmatmularvec)
    * [cmat.mula(cmat)](#cmatmulacmat)
    * [cmat.mula(cvec)](#cmatmulacvec)
    * [cmat.mula(crvec)](#cmatmulacrvec)
    * [cmat.div(scalar)](#cmatdivscalar)
    * [cmat.div(comp)](#cmatdivcomp)
    * [cmat.diva(scalar)](#cmatdivascalar)
    * [cmat.diva(comp)](#cmatdivacomp)
    * [cmat.equals(cmat)](#cmatequalscmat)
    * [cmat.equals(cvec)](#cmatequalscvec)
    * [cmat.equals(crvec)](#cmatequalscrvec)
    * [cmat.isApprox(cmat, [prec = 1e-12])](#cmatisapproxcmat-prec--1e-12)
    * [cmat.isApprox(cvec, [prec = 1e-12])](#cmatisapproxcvec-prec--1e-12)
    * [cmat.isApprox(crvec, [prec = 1e-12])](#cmatisapproxcrvec-prec--1e-12)
    * [cmat.block(startRow, startCol, blockRows, blockCols)](#cmatblockstartrowstartcolblockrowsblockcols)
    * [cmat.toString()](#cmattostring)
* [Vector](#vector) **is inherits from Matrix**
  * [Vector Class Methods](#vector-class-methods)
    * [Vector(rows)](#vectorrows)
    * [Vector(scalar_array)](#vectorscalar_array)
  * [Vector Instance Methods](#vector-instance-methods)
    * [vec.set(row, scalar)](#vecsetrow-scalar)
    * [vec.set(scalar_array)](#vecsetscalar_array)
    * [vec.get(row)](#vecgetrow)
* [CVector](#cvector) **is inherits from CMatrix**
  * [CVector Class Methods](#cvector-class-methods)
    * [CVector(rows)](#cvectorrows)
    * [CVector(comp_array)](#cvectorcomp_array)
  * [CVector Instance Methods](#cvector-instance-methods)
    * [cvec.set(row, comp)](#cvecsetrow-comp)
    * [cvec.set(comp_array)](#cvecsetcomp_array)
    * [cvec.get(row)](#cvecgetrow)
* [RowVector](#rowvector) **is inherits from Matrix**
  * [RowVector Class Methods](#rowvector-class-methods)
    * [RowVector(cols)](#rowvectorcols)
    * [RowVector(scalar_array)](#rowvectorscalar_array)
  * [RowVector Instance Methods](#rowvector-instance-methods)
    * [rvec.set(col, scalar)](#rvecsetcol-scalar)
    * [rvec.set(scalar_array)](#rvecsetscalar_array)
    * [rvec.get(col)](#rvecgetcol)
* [CRowVector](#crowvector) **is inherits from CMatrix**
  * [CRowVector Class Methods](#crowvector-class-methods)
    * [CRowVector(cols)](#crowvectorcols)
    * [CRowVector(comp_array)](#crowvectorcomp_array)
  * [CRowVector Instance Methods](#crowvector-instance-methods)
    * [crvec.set(col, comp)](#crvecsetcol-comp)
    * [crvec.set(comp_array)](#crvecsetcomp_array)
    * [crvec.get(col)](#crvecgetcol)
* [MatrixBlock](#matrixblock) **is inherits from Matrix**
  * [MatrixBlock Class Methods](#matrixblock-class-methods)
    * [MatrixBlock(mat, startRow, startCol, blockRows, blockCols)](#matrixblockmatstartrowstartcolblockrowsblockcols)
    * [MatrixBlock(vec, startRow, startCol, blockRows, blockCols)](#matrixblockvecstartrowstartcolblockrowsblockcols)
    * [MatrixBlock(rvec, startRow, startCol, blockRows, blockCols)](#matrixblockrvecstartrowstartcolblockrowsblockcols)
  * [MatrixBlock Instance Methods](#matrixblock-instance-methods)
    * [mblock.assign(mat)](#mblockassignmat)
    * [mblock.assign(vec)](#mblockassignvec)
    * [mblock.assign(rvec)](#mblockassignrvec)

## Complex

### Complex Class Methods

#### Complex(real, [imag])

```js
var C = require('eigenjs').Complex
  , c = new C(3, -4);
console.log('c = %s', c);
```

```txt
c = (3,-4)
```

#### Complex.polar(scalar, scalar)

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

#### Complex.cos(scalar)
#### Complex.cos(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(Math.PI/4, 0)
  , c2 = C.cos(c1);
console.log(c2.toString());
```

```txt
(0.707107,-0)
```

#### Complex.cosh(scalar)
#### Complex.cosh(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(0, 0)
  , c2 = C.cosh(c1);
console.log(c2.toString());
```

```txt
(1,0)
```

#### Complex.exp(scalar)
#### Complex.exp(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1, 0)
  , c2 = C.exp(c1);
console.log(c2.toString());
```

```txt
(2.71828,0)
```

#### Complex.log(scalar)
#### Complex.log(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(Math.E, 0)
  , c2 = C.log(c1);
console.log(c2.toString());
```

```txt
(1,0)
```

#### Complex.log10(scalar)
#### Complex.log10(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1000, 0)
  , c2 = C.log10(c1);
console.log(c2.toString());
```

```txt
(3,0)
```

#### Complex.pow(scalar, scalar)
#### Complex.pow(scalar, comp)
#### Complex.pow(comp, scalar)
#### Complex.pow(comp, comp)

```js
var C = require('eigenjs').Complex
  , c = C.pow(2, 3)
console.log(c.toString());
```

```txt
(8,0)
```

#### Complex.sin(scalar)
#### Complex.sin(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(Math.PI/4, 0)
  , c2 = C.sin(c1);
console.log(c2.toString());
```

```txt
(0.707107,0)
```

#### Complex.sinh(scalar)
#### Complex.sinh(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(0, 0)
  , c2 = C.sinh(c1);
console.log(c2.toString());
```

```txt
(0,0)
```

#### Complex.sqrt(scalar)
#### Complex.sqrt(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(9, 0)
  , c2 = C.sqrt(c1);
console.log(c2.toString());
```

```txt
(3,0)
```

#### Complex.tan(scalar)
#### Complex.tan(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(Math.PI/4, 0)
  , c2 = C.tan(c1);
console.log(c2.toString());
```

```txt
(1,0)
```

#### Complex.tanh(scalar)
#### Complex.tanh(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(Infinity, 0)
  , c2 = C.tanh(c1);
console.log(c2.toString());
```

```txt
(1,0)
```

#### Complex.acos(scalar)
#### Complex.acos(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1, 0)
  , c2 = C.acos(c1);
console.log(c2.toString());
```

```txt
(0,0)
```

#### Complex.acosh(scalar)
#### Complex.acosh(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1.54308, 0)
  , c2 = C.acosh(c1);
console.log(c2.toString());
```

```txt
(0.999999,0)
```

#### Complex.asin(scalar)
#### Complex.asin(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1, 0)
  , c2 = C.asin(c1);
console.log(c2.toString());
```

```txt
(1.5708,7.82511e-09)
```

#### Complex.asinh(scalar)
#### Complex.asinh(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1, 0)
  , c2 = C.asinh(c1);
console.log(c2.toString());
```

```txt
(0.881374,0)
```

#### Complex.atan(scalar)
#### Complex.atan(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(Infinity, 0)
  , c2 = C.atan(c1);
console.log(c2.toString());
```

```txt
(1.5708,0)
```

#### Complex.atanh(scalar)
#### Complex.atanh(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1, 0)
  , c2 = C.atanh(c1);
console.log(c2.toString());
```

```txt
(inf,0)
```

### Complex Instance Methods

#### comp.abs()

```js
var C = require('eigenjs').Complex
  , c = new C(3, -4);
console.log(c.abs());
```

```txt
5
```

#### comp.arg()

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

#### comp.norm()

```js
var C = require('eigenjs').Complex
  , c = new C(3, -4);
console.log(c.norm());
```

```txt
25
```

#### comp.conj()

```js
var C = require('eigenjs').Complex
  , c = new C(3, -4);
console.log(c.conj().toString());
```

```txt
(3,4)
```

#### comp.proj(scalar)
#### comp.proj(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(0, -Infinity)
  , c2 = C.proj(c1);
console.log(c2.toString());
```

```txt
(inf, -0)
```

#### comp.add(scalar)
#### comp.add(comp)

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

#### comp.adda(scalar)
#### comp.adda(comp)

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

#### comp.sub(scalar)
#### comp.sub(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(3, 4)
  , c2 = new C(2, -3)
  , c3 = c1.sub(c2);
console.log(c3.toString());
```

```txt
(1,7)
```

#### comp.suba(scalar)
#### comp.suba(comp)

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

#### comp.mul(scalar)
#### comp.mul(comp)
#### comp.mul(mat)
#### comp.mul(cmat)

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

#### comp.mula(scalar)
#### comp.mula(comp)

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

#### comp.div(scalar)
#### comp.div(comp)

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

#### comp.diva(scalar)
#### comp.diva(comp)

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

#### comp.equals(comp)

```js
var C = require('eigenjs').Complex
  , c1 = new C(1, 0)
  , c2 = c1.conj();
console.log(c1.equals(c2));
```

```txt
true
```
#### comp.isApprox(comp, [prec = 1e-12])

```js
var C = require('eigenjs').Complex
  , c1 = new C(1/3, 0)
  , c2 = new C(0.3333, 0);
console.log(c1.isApprox(c2, 1e-3));
```

```txt
true
```

##### comp.toString()

```js
var C = require('eigenjs').Complex
  , c = new C(3, -4);
console.log(c.toString());
```

```txt
(3,-4)
```

### Complex Properties

#### comp.real
#### comp.imag

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

## Matrix

### Matrix Class Methods

#### Matrix(rows, cols)

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

#### Matrix.Zero(n)
#### Matrix.Zero(rows, cols)

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

#### Matrix.Identity(n)
#### Matrix.Identity(rows, cols)

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

#### Matrix.Random(n)
#### Matrix.Random(rows, cols)

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

### Matrix Instance Methods

#### mat.rows()
#### mat.cols()

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

#### mat.set(row, col, scalar)

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

#### mat.set(scalar_array)

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

#### mat.get(row, col)

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

#### mat.add(mat)
#### mat.add(vec)
#### mat.add(rvec)
#### mat.add(cmat)
#### mat.add(cvec)
#### mat.add(crvec)

```js
var M = require('eigenjs').Matrix
  , mat1 = new M(2, 2)
  , mat2 = new M(2, 2)
  , mat3;
mat1.set([
  1, 3,
  2, 4
]);
mat2.set([
  5, 6,
  7, 8
]);
mat3 = mat1.add(mat2);
console.log("mat3 = \n%s", mat3);
```

```txt
mat3 =
 6  9
 9 12
```

#### mat.adda(mat)
#### mat.adda(vec)
#### mat.adda(rvec)

```js
var M = require('eigenjs').Matrix
  , mat1 = new M(2, 2)
  , mat2 = new M(2, 2);
mat1.set([
  1, 3,
  2, 4
]);
mat2.set([
  5, 6,
  7, 8
]);
mat1.adda(mat2);
console.log("mat1 = \n%s", mat1);
```

```txt
mat1 =
 6  9
 9 12
```

#### mat.sub(mat)
#### mat.sub(vec)
#### mat.sub(rvec)
#### mat.sub(cmat)
#### mat.sub(cvet)
#### mat.sub(crvet)

```js
var M = require('eigenjs').Matrix
  , mat1 = new M(2, 2)
  , mat2 = new M(2, 2)
  , mat3;
mat1.set([
  1, 3,
  2, 4
]);
mat2.set([
  5, 6,
  7, 8
]);
mat3 = mat1.sub(mat2);
console.log("mat3 = \n%s", mat3);
```

```txt
mat3 =
-4 -3
-5 -4
```

#### mat.suba(mat)
#### mat.suba(vec)
#### mat.suba(rvec)

```js
var M = require('eigenjs').Matrix
  , mat1 = new M(2, 2)
  , mat2 = new M(2, 2);
mat1.set([
  1, 3,
  2, 4
]);
mat2.set([
  5, 6,
  7, 8
]);
mat1.suba(mat2);
console.log("mat1 = \n%s", mat1);
```

```txt
mat1 =
-4 -3
-5 -4
```

#### mat.mul(scalar)
#### mat.mul(comp)
#### mat.mul(mat)
#### mat.mul(vec)
#### mat.mul(rvec)
#### mat.mul(cmat)
#### mat.mul(cvec)
#### mat.mul(crvec)

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

#### mat.mula(scalar)
#### mat.mula(mat)
#### mat.mula(vec)
#### mat.mula(rvec)

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

#### mat.div(scalar)
#### mat.div(comp)

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

#### mat.diva(scalar)

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

#### mat.equals(mat)
#### mat.equals(vec)
#### mat.equals(rvec)

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

#### mat.isApprox(mat, [prec = 1e-12])
#### mat.isApprox(vec, [prec = 1e-12])
#### mat.isApprox(rvec, [prec = 1e-12])

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

### mat.block(startRow, startCol, blockRows, blockCols)

```js
var M = require('eigenjs').Matrix
  , mat = new M.Identity(4, 4)
  , mblock = mat.block(1, 1, 2, 2);
mblock.assign(M.Random(2, 2));
console.log('mat =\n%s', mat);
```

```txt
mat =
        1         0         0         0
        0 -0.822352  0.533723         0
        0  0.721993  0.287646         0
        0         0         0         1
```

#### mat.toString()

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , mat = new M.Random(2, 2);
console.log('mat =\n', mat.toString());
```

```txt
mat =
-0.838421  0.550552
 0.657735 -0.874757
```

## Complex Matrix

### Complex Matrix Class Methods

#### CMatrix(rows, cols)

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

#### CMatrix.Zero(n)
#### CMatrix.Zero(rows, cols)

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

#### CMatrix.Identity(n)
#### CMatrix.Identity(rows, cols)
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

#### CMatrix.Random(n)
#### CMatrix.Random(rows, cols)

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

### Complex Matrix Instance Methods

#### cmat.rows()
#### cmat.cols()

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

#### cmat.set(row, col, comp)

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

#### cmat.set(comp_array)

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

#### cmat.get(row, col)

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

#### cmat.add(mat)
#### cmat.add(vec)
#### cmat.add(rvec)
#### cmat.add(cmat)
#### cmat.add(cvec)
#### cmat.add(crvec)

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

#### cmat.adda(mat)
#### cmat.adda(vec)
#### cmat.adda(cmat)
#### cmat.adda(cvec)

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
  7, 8
]);
cmat1.adda(cmat2);
console.log("cmat1 = \n%s", cmat1);
```

```txt
cmat1 =
 (6,1)  (8,2)
(10,3) (12,4)
```

#### cmat.sub(mat)
#### cmat.sub(vec)
#### cmat.sub(rvec)
#### cmat.sub(cmat)
#### cmat.sub(cvec)
#### cmat.sub(crvec)

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
  7, 8
]);
cmat3 = cmat1.sub(cmat2);
console.log("cmat3 = \n%s", cmat3);
```

```txt
cmat3 =
(-4,1) (-4,2)
(-4,3) (-4,4)
```

#### cmat.suba(mat)
#### cmat.suba(vec)
#### cmat.suba(rvec)
#### cmat.suba(cmat)
#### cmat.suba(cvec)
#### cmat.suba(crvec)

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
  7, 8
]);
cmat1.suba(cmat2);
console.log("cmat1 = \n%s", cmat1);
```

```txt
mat1 =
(-4,1) (-4,2)
(-4,3) (-4,4)
```

#### cmat.mul(scalar)
#### cmat.mul(comp)
#### cmat.mul(mat)
#### cmat.mul(vec)
#### cmat.mul(rvec)
#### cmat.mul(cmat)
#### cmat.mul(cvec)
#### cmat.mul(crvec)

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

#### cmat.mula(scalar)
#### cmat.mula(comp)
#### cmat.mula(mat)
#### cmat.mula(vec)
#### cmat.mula(rvec)
#### cmat.mula(cmat)
#### cmat.mula(cvec)
#### cmat.mula(crvec)

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

#### cmat.div(scalar)
#### cmat.div(comp)

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

#### cmat.diva(scalar)
#### cmat.diva(comp)

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

#### cmat.equals(cmat)
#### cmat.equals(cvec)
#### cmat.equals(crvec)

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

#### cmat.isApprox(cmat, [prec = 1e-12])
#### cmat.isApprox(cvec, [prec = 1e-12])
#### cmat.isApprox(crvec, [prec = 1e-12])

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

### cmat.block(startRow, startCol, blockRows, blockCols)

```js
var CM = require('eigenjs').Matrix
  , cmat = new CM.Identity(4, 4)
  , cmblock = cmat.block(1, 1, 2, 2);
cmblock.assign(CM.Random(2, 2));
console.log('cmat =\n%s', cmat);
```

```txt
cmat =
               (1,0)                (0,0)                (0,0)                (0,0)
               (0,0) (0.490586,-0.722033) (-0.380859,0.895456)                (0,0)
               (0,0)  (0.794101,0.457882) (-0.068657,0.081439)                (0,0)
               (0,0)                (0,0)                (0,0)                (1,0)
```

#### cmat.toString()

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , cmat = new CM.Random(2, 2);
console.log('cmat =\n', cmat.toString());
```

```txt
cmat =
  (0.0123055,0.819031)  (0.0701489,0.992777)
(-0.538938,0.0627161)  (-0.401951,0.405649)
```

## Vector

### Vector Class Methods

#### Vector(rows)

```js
var Eigen = require('eigenjs')
  , V = Eigen.Vector
  , vec = new V(3);
console.log('vec = \n%s', vec);
```

```txt
vec =
0
0
0
```

#### Vector(scalar_array)

```js
var Eigen = require('eigenjs')
  , V = Eigen.Vector
  , vec = new V([1,
                 2,
                 3]);
console.log('vec = \n%s', vec);
```

```txt
vec =
1
2
3
```

### Vector Instance Methods

#### vec.set(row, scalar)

```js
var Eigen = require('eigenjs')
  , V = Eigen.Vector
  , vec = new V(3);
vec.set(0, 1);
vec.set(1, 2);
vec.set(2, 3);
console.log('vec = \n%s', vec);
```

```txt
vec =
1
2
3
```

#### vec.set(scalar_array)

```js
var Eigen = require('eigenjs')
  , V = Eigen.Vector
  , vec = new V(3);
vec.set([1,
         2,
         3]);
console.log('vec = \n%s', vec);
```

```txt
vec =
1
2
3
```

#### vec.get(row)

```js
var Eigen = require('eigenjs')
  , V = Eigen.Vector
  , vec = new V([1,
                 2,
                 3]);
console.log(vec.get(0).toString());
console.log(vec.get(1).toString());
console.log(vec.get(2).toString());
```

```txt
1
2
3
```

## CVector

### CVector Class Methods

#### CVector(rows)

```js
var Eigen = require('eigenjs')
  , CV = Eigen.CVector
  , cvec = new CV(3);
console.log('cvec = \n%s', cvec);
```

```txt
cvec =
0
0
0
```

#### CVector(comp_array)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CV = Eigen.Vector
  , cvec = new CV([  1    ,
                   C(2, 4),
                     3    ]);
console.log('cvec = \n%s', cvec);
```

```txt
cvec =
(1,0)
(2,4)
(3,0)
```

### CVector Instance Methods

#### cvec.set(row, comp)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CV = Eigen.CVector
  , cvec = new CV(3);
cvec.set(0, C(1   ));
cvec.set(1, C(2, 4));
cvec.set(2,   3    );
console.log('cvec = \n%s', cvec);
```

```txt
cvec =
(1,0)
(2,4)
(3,0)
```

#### cvec.set(comp_array)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CV = Eigen.CVector
  , cvec = new CV(3);
cvec.set([  1    ,
          C(2, 4),
            3     ]);
console.log('cvec = \n%s', cvec);
```

```txt
cvec =
(1,0)
(2,4)
(3,0)
```

#### cvec.get(row)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CV = Eigen.CVector
  , cvec = new CV([  1    ,
                   C(2, 4),
                     3     ]);
console.log(vec.get(0).toString());
console.log(vec.get(1).toString());
console.log(vec.get(2).toString());
```

```txt
(1,0)
(2,4)
(3,0)
```

## RowVector

### RowVector Class Methods

#### RowVector(cols)

```js
var Eigen = require('eigenjs')
  , RV = Eigen.RowVector
  , rvec = new RV(3);
console.log('rvec = \n%s', rvec);
```

```txt
rvec =
0 0 0
```

#### RowVector(scalar_array)

```js
var Eigen = require('eigenjs')
  , RV = Eigen.RowVector
  , rvec = new RV([1, 2, 3]);
console.log('rvec = \n%s', rvec);
```

```txt
rvec =
1 2 3
```

### RowVector Instance Methods

#### rvec.set(col, scalar)

```js
var Eigen = require('eigenjs')
  , RV = Eigen.RowVector
  , rvec = new RV(3);
rvec.set(0, 1);
rvec.set(1, 2);
rvec.set(2, 3);
console.log('rvec = \n%s', rvec);
```

```txt
rvec =
1 2 3
```

#### rvec.set(scalar_array)

```js
var Eigen = require('eigenjs')
  , RV = Eigen.RowVector
  , rvec = new RV(3);
rvec.set([1, 2, 3]);
console.log('rvec = \n%s', rvec);
```

```txt
rvec =
1 2 3
```

#### rvec.get(col)

```js
var Eigen = require('eigenjs')
  , RV = Eigen.RowVector
  , rvec = new RV([1, 2, 3]);
console.log(rvec.get(0).toString());
console.log(rvec.get(1).toString());
console.log(rvec.get(2).toString());
```

```txt
1
2
3
```

## CRowVector

### CRowVector Class Methods

#### CRowVector(cols)

```js
var Eigen = require('eigenjs')
  , CRV = Eigen.CRowVector
  , crvec = new CRV(3);
console.log('crvec = \n%s', crvec);
```

```txt
cvec =
(0,0) (0,0) (0,0)
```

#### CRowVector(comp_array)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CRV = Eigen.CRowVector
  , crvec = new CRV([1, C(2, 4), 3]);
console.log('crvec = \n%s', crvec);
```

```txt
crvec =
(1,0) (2,4) (3,0)
```

### CRowVector Instance Methods

#### crvec.set(col, comp)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CRV = Eigen.CRowVector
  , crvec = new CRV(3);
crvec.set(0, C(1   ));
crvec.set(1, C(2, 4));
crvec.set(2,   3    );
console.log('crvec = \n%s', crvec);
```

```txt
cvec =
(1,0) (2,4) (3,0)
```

#### crvec.set(comp_array)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CRV = Eigen.CRowVector
  , crvec = new CRV(3);
crvec.set([1, C(2, 4), 3]);
console.log('crvec = \n%s', crvec);
```

```txt
crvec =
(1,0) (2,4) (3,0)
```

#### cvec.get(row)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CRV = Eigen.CRowVector
  , crvec = new CRV([1, C(2, 4), 3]);
console.log(crvec.get(0).toString());
console.log(crvec.get(1).toString());
console.log(crvec.get(2).toString());
```

```txt
(1,0)
(2,4)
(3,0)
```

## MatrixBlock

### MatrixBlock Class Methods

#### MatrixBlock(mat, startRow, startCol, blockRows, blockCols)
#### MatrixBlock(vec, startRow, startCol, blockRows, blockCols)
#### MatrixBlock(rvec, startRow, startCol, blockRows, blockCols)

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , MB = Eigen.MatrixBlock
  , mat = new M.Random(4, 4)
  , mblock = new MB(mat, 1, 1, 2, 2);
console.log('mat = \n%s', mat);
console.log('mblock = \n%s', mblock);
```

```txt
mat =
     0.63505     0.904788    -0.727407     0.187778
   -0.709806     0.764849     0.467046   -0.0105777
    0.295743     0.813348    -0.350211     0.221291
    0.557679   -0.0634692 -0.000702816     -0.76436
mblock =
 0.764849  0.467046
 0.813348 -0.350211
```

### MatrixBlock Instance Methods

#### mblock.assign(mat)
#### mblock.assign(vec)
#### mblock.assign(rvec)

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , MB = Eigen.MatrixBlock
  , mat = new M.Zero(4, 4)
  , mblock = new MB(mat, 1, 1, 2, 2);
mblock.assign(new M.Random(2, 2));
console.log('mat = \n%s', mat);
```

```txt
mat =
        0         0         0         0
        0 -0.863823  0.989624         0
        0 -0.279349  0.611228         0
        0         0         0         0
```
