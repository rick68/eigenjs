# EigenJS

The goal of this project is to port Eigen library into JavaScript for linear algebar.

[![NPM][nodeico-download]][nodeico-url] [![NPM][nodeico-months]][nodeico-url]

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Gitter chat][gitter-image]][gitter-url] [![gittip.com/rick68][gittip-image]][gittip-url]

[nodeico-download]: https://nodei.co/npm/eigenjs.png?downloads=true&downloadRank=true&stars=true
[nodeico-months]: https://nodei.co/npm-dl/eigenjs.png?months=6&height=3
[nodeico-url]: https://nodei.co/npm/eigenjs/

[npm-image]: http://img.shields.io/npm/v/eigenjs.svg
[npm-url]: https://npmjs.org/package/eigenjs

[downloads-image]: http://img.shields.io/npm/dm/eigenjs.svg

[travis-image]: https://travis-ci.org/rick68/eigenjs.svg?branch=master
[travis-url]: https://travis-ci.org/rick68/eigenjs

[gitter-image]: https://badges.gitter.im/rick68/eigenjs.png
[gitter-url]: https://gitter.im/rick68/eigenjs

[gittip-image]: http://img.shields.io/gittip/rick68.svg
[gittip-url]: https://www.gittip.com/rick68

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
    * [Matrix.Ones(n)](#matrixonesn)
    * [Matrix.Ones(rows, cols)](#matrixonesrows-cols)
    * [Matrix.Constant(rows, cols, scalar)](#matrixconstantrows-cols-scalar)
    * [Matrix.Constant(rows, cols, comp)](#matrixconstantrows-cols-comp)
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
    * [mat.assign(mat)](#matassignmat)
    * [mat.assign(vec)](#matassignvec)
    * [mat.assign(rvec)](#matassignrvec)
    * [mat.assign(mblock)](#matassignmblock)
    * [mat.assign(vblock)](#matassignvblock)
    * [mat.assign(rvblock)](#matassignrvblock)
    * [mat.block(startRow, startCol, blockRows, blockCols)](#matblockstartrow-startcol-blockrows-blockcols)
    * [mat.row(n)](#matrown)
    * [mat.col(n)](#matcoln)
    * [mat.add(mat)](#mataddmat)
    * [mat.add(vec)](#mataddvec)
    * [mat.add(rvec)](#mataddrvec)
    * [mat.add(mblock)](#mataddmblock)
    * [mat.add(vblock)](#mataddvblock)
    * [mat.add(rvblock)](#mataddrvblock)
    * [mat.add(cmat)](#mataddcmat)
    * [mat.add(cvec)](#mataddcvec)
    * [mat.add(crvec)](#mataddcrvec)
    * [mat.add(cmblock)](#mataddcmblock)
    * [mat.add(cvblock)](#mataddcvblock)
    * [mat.add(crvblock)](#mataddcrvblock)
    * [mat.adda(mat)](#mataddamat)
    * [mat.adda(vec)](#mataddavec)
    * [mat.adda(rvec)](#mataddarvec)
    * [mat.adda(mblock)](#mataddamblock)
    * [mat.adda(vblock)](#mataddavblork)
    * [mat.adda(rvblock)](#mataddarvblock)
    * [mat.sub(mat)](#matsubmat)
    * [mat.sub(vec)](#matsubvec)
    * [mat.sub(rvec)](#matsubrvec)
    * [mat.sub(mblock)](#matsubmblock)
    * [mat.sub(vblock)](#matsubvblock)
    * [mat.sub(rvblock)](#matsubrvblock)
    * [mat.sub(cmat)](#matsubcmat)
    * [mat.sub(cvec)](#matsubcvec)
    * [mat.sub(crvec)](#matsubcrvec)
    * [mat.sub(cmblock)](#matsubcmblock)
    * [mat.sub(cvblock)](#matsubcvblock)
    * [mat.sub(crvblock)](#matsubcrvblock)
    * [mat.suba(mat)](#matsubamat)
    * [mat.suba(vec)](#matsubavec)
    * [mat.suba(rvec)](#matsubarvec)
    * [mat.suba(mblock)](#matsubamblock)
    * [mat.suba(vblock)](#matsubavblock)
    * [mat.suba(rvblock)](#matsubarvblock)
    * [mat.mul(scalar)](#matmulscalar)
    * [mat.mul(comp)](#matmulcomp)
    * [mat.mul(mat)](#matmulmat)
    * [mat.mul(vec)](#matmulvec)
    * [mat.mul(rvec)](#matmulrvec)
    * [mat.mul(mblock)](#matmulmblock)
    * [mat.mul(vblock)](#matmulvblock)
    * [mat.mul(rvblock)](#matmulrvblock)
    * [mat.mul(cmat)](#matmulcmat)
    * [mat.mul(cvec)](#matmulcvec)
    * [mat.mul(crvec)](#matmulcrvec)
    * [mat.mul(cmblock)](#matmulcmblock)
    * [mat.mul(cvblock)](#matmulcvblock)
    * [mat.mul(crvblock)](#matmulcrvblock)
    * [mat.mula(scalar)](#matmulascalar)
    * [mat.mula(mat)](#matmulamat)
    * [mat.mula(vec)](#matmulavec)
    * [mat.mula(rvec)](#matmularvec)
    * [mat.mula(mblock)](#matmulamblock)
    * [mat.mula(vblock)](#matmulavblock)
    * [mat.mula(rvblock)](#matmularvblock)
    * [mat.div(scalar)](#matdivscalar)
    * [mat.div(comp)](#matdivcomp)
    * [mat.diva(scalar)](#matdivascalar)
    * [mat.transpose()](#mattranspose)
    * [mat.conjugate()](#matconjugate)
    * [mat.adjoint()](#matadjoint)
    * [mat.determinant()](#matdeterminant)
    * [mat.inverse()](#matinverse)
    * [mat.trace()](#mattrace)
    * [mat.diagonal([index = 0])](#matdiagonalindex--0)
    * [mat.equals(mat)](#matequalsmat)
    * [mat.equals(vec)](#matequalsvec)
    * [mat.equals(rvec)](#matequalsrvec)
    * [mat.equals(mblock)](#matequalsmblock)
    * [mat.equals(vblock)](#matequalsvblock)
    * [mat.equals(rvblock)](#matequalsrvblock)
    * [mat.isApprox(mat, [prec = 1e-12])](#matisapproxmat-prec--1e-12)
    * [mat.isApprox(vec, [prec = 1e-12])](#matisapproxvec-prec--1e-12)
    * [mat.isApprox(rvec, [prec = 1e-12])](#matisapproxrvec-prec--1e-12)
    * [mat.isApprox(mblock, [prec = 1e-12])](#matisapproxmblock-prec--1e-12)
    * [mat.isApprox(vblock, [prec = 1e-12])](#matisapproxvblock-prec--1e-12)
    * [mat.isApprox(rvblock, [prec = 1e-12])](#matisapproxrvblock-prec--1e-12)
    * [mat.isSquare()](#matissquare)
    * [mat.isZero([prec = 1e-12])](#matiszeroprec--1e-12)
    * [mat.isOnes([prec = 1e-12])](#matisonesprec--1e-12)
    * [mat.isIdentity([prec = 1e-12])](#matisidentityprec--1e-12)
    * [mat.isDiagonal([prec = 1e-12])](#matisdiagonalprec--1e-12)
    * [mat.toString([options])](#mattostringoptions)
* [Complex Matrix](#complex-matrix)
  * [Complex Matrix Class Methods](#complex-matrix-class-methods)
    * [CMatrix(rows, cols)](#cmatrixrows-cols)
    * [CMatrix.Zero(n)](#cmatrixzeron)
    * [CMatrix.Zero(rows, cols)](#cmatrixzerorows-cols)
    * [CMatrix.Ones(n)](#cmatrixonesn)
    * [CMatrix.Ones(rows, cols)](#cmatrixonesrows-cols)
    * [CMatrix.Constant(rows, cols, scalar)](#cmatrixconstantrows-cols-scalar)
    * [CMatrix.Constant(rows, cols, comp)](#cmatrixconstantrows-cols-comp)
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
    * [cmat.assign(mat)](#cmatassignmat)
    * [cmat.assign(vec)](#cmatassignvec)
    * [cmat.assign(rvec)](#cmatassignrvec)
    * [cmat.assign(mblock)](#cmatassignmblock)
    * [cmat.assign(vblock)](#cmatassignvblock)
    * [cmat.assign(rvblock)](#cmatassignrvblock)
    * [cmat.assign(cmat)](#cmatassigncmat)
    * [cmat.assign(cvec)](#cmatassigncvec)
    * [cmat.assign(crvec)](#cmatassigncrvec)
    * [cmat.assign(cmblock)](#cmatassigncmblock)
    * [cmat.assign(cvblock)](#cmatassigncvblock)
    * [cmat.assign(crvblock)](#cmatassigncrvblock)
    * [cmat.block(startRow, startCol, blockRows, blockCols)](#cmatblockstartrow-startcol-blockrows-blockcols)
    * [cmat.row(n)](#cmatrown)
    * [cmat.col(n)](#cmatcoln)
    * [cmat.add(mat)](#cmataddmat)
    * [cmat.add(vec)](#cmataddvec)
    * [cmat.add(rvec)](#cmataddrvec)
    * [cmat.add(mblock)](#cmataddmblock)
    * [cmat.add(vblock)](#cmataddvblock)
    * [cmat.add(rvblock)](#cmataddrvblock)
    * [cmat.add(cmat)](#cmataddcmat)
    * [cmat.add(cvec)](#cmataddcvec)
    * [cmat.add(crvec)](#cmataddcrvec)
    * [cmat.add(cmblock)](#cmataddcmblock)
    * [cmat.add(cvblock)](#cmataddcvblock)
    * [cmat.add(crvblock)](#cmataddcrvblock)
    * [cmat.adda(mat)](#cmataddamat)
    * [cmat.adda(vec)](#cmataddavec)
    * [cmat.adda(rvec)](#cmataddarvec)
    * [cmat.adda(mblock)](#cmataddamblock)
    * [cmat.adda(vblock)](#cmataddavblock)
    * [cmat.adda(rvblock)](#cmataddarvblock)
    * [cmat.adda(cmat)](#cmataddacmat)
    * [cmat.adda(cvec)](#cmataddacvec)
    * [cmat.adda(crvec)](#cmataddacrvec)
    * [cmat.adda(cmblock)](#cmataddacmblock)
    * [cmat.adda(cvblock)](#cmataddacvblock)
    * [cmat.adda(crvblock)](#cmataddacrvblock)
    * [cmat.sub(mat)](#cmatsubmat)
    * [cmat.sub(vec)](#cmatsubvec)
    * [cmat.sub(rvec)](#cmatsubrvec)
    * [cmat.sub(mblock)](#cmatsubmblock)
    * [cmat.sub(vblock)](#cmatsubvblock)
    * [cmat.sub(rvblock)](#cmatsubrvblock)
    * [cmat.sub(cmat)](#cmatsubcmat)
    * [cmat.sub(cvec)](#cmatsubcvec)
    * [cmat.sub(crvec)](#cmatsubcrvec)
    * [cmat.sub(cmblock)](#cmatsubcmblock)
    * [cmat.sub(cvblock)](#cmatsubcvblock)
    * [cmat.sub(crvblock)](#cmatsubcrvblock)
    * [cmat.suba(mat)](#cmatsubamat)
    * [cmat.suba(vec)](#cmatsubavec)
    * [cmat.suba(rvec)](#cmatsubarvec)
    * [cmat.suba(mblock)](#cmatsubamblock)
    * [cmat.suba(vblock)](#cmatsubavblock)
    * [cmat.suba(rvblock)](#cmatsubarvblock)
    * [cmat.suba(cmat)](#cmatsubacmat)
    * [cmat.suba(cvec)](#cmatsubacvec)
    * [cmat.suba(crvec)](#cmatsubacrvec)
    * [cmat.suba(cmblock)](#cmatsubacmblock)
    * [cmat.suba(cvblock)](#cmatsubacvblock)
    * [cmat.suba(crvblock)](#cmatsubacrvblock)
    * [cmat.mul(scalar)](#cmatmulscalar)
    * [cmat.mul(comp)](#cmatmulcomp)
    * [cmat.mul(mat)](#cmatmulmat)
    * [cmat.mul(vec)](#cmatmulvec)
    * [cmat.mul(rvec)](#cmatmulrvec)
    * [cmat.mul(mblock)](#cmatmulmblock)
    * [cmat.mul(vblock)](#cmatmulvblock)
    * [cmat.mul(rvblock)](#cmatmulrvblock)
    * [cmat.mul(cmat)](#cmatmulcmat)
    * [cmat.mul(cvec)](#cmatmulcvec)
    * [cmat.mul(crvec)](#cmatmulcrvec)
    * [cmat.mul(cmblock)](#cmatmulcmblock)
    * [cmat.mul(cvblock)](#cmatmulcvblock)
    * [cmat.mul(crvblock)](#cmatmulcrvblock)
    * [cmat.mula(scalar)](#cmatmulascalar)
    * [cmat.mula(comp)](#cmatmulacomp)
    * [cmat.mula(mat)](#cmatmulamat)
    * [cmat.mula(vec)](#cmatmulavec)
    * [cmat.mula(rvec)](#cmatmularvec)
    * [cmat.mula(mblock)](#cmatmulamblock)
    * [cmat.mula(vblock)](#cmatmulavblock)
    * [cmat.mula(rvblock)](#cmatmularvblock)
    * [cmat.mula(cmat)](#cmatmulacmat)
    * [cmat.mula(cvec)](#cmatmulacvec)
    * [cmat.mula(crvec)](#cmatmulacrvec)
    * [cmat.mula(cmblock)](#cmatmulacmblock)
    * [cmat.mula(cvblock)](#cmatmulacvblock)
    * [cmat.mula(crvblock)](#cmatmulacrvblock)
    * [cmat.div(scalar)](#cmatdivscalar)
    * [cmat.div(comp)](#cmatdivcomp)
    * [cmat.diva(scalar)](#cmatdivascalar)
    * [cmat.diva(comp)](#cmatdivacomp)
    * [cmat.transpose()](#cmattranspose)
    * [cmat.conjugate()](#cmatconjugate)
    * [cmat.adjoint()](#cmatadjoint)
    * [cmat.determinant()](#cmatdeterminant)
    * [cmat.inverse()](#cmatinverse)
    * [cmat.trace()](#cmattrace)
    * [cmat.diagonal([index = 0])](#cmatdiagonalindex--0)
    * [cmat.equals(cmat)](#cmatequalscmat)
    * [cmat.equals(cvec)](#cmatequalscvec)
    * [cmat.equals(crvec)](#cmatequalscrvec)
    * [cmat.equals(cmblock)](#cmatequalscmblock)
    * [cmat.equals(cvblock)](#cmatequalscvblock)
    * [cmat.equals(crvblock)](#cmatequalscrvblock)
    * [cmat.isApprox(cmat, [prec = 1e-12])](#cmatisapproxcmat-prec--1e-12)
    * [cmat.isApprox(cvec, [prec = 1e-12])](#cmatisapproxcvec-prec--1e-12)
    * [cmat.isApprox(crvec, [prec = 1e-12])](#cmatisapproxcrvec-prec--1e-12)
    * [cmat.isApprox(cmblock, [prec = 1e-12])](#cmatisapproxcmblock-prec--1e-12)
    * [cmat.isApprox(cvblock, [prec = 1e-12])](#cmatisapproxcvblock-prec--1e-12)
    * [cmat.isApprox(crvblock, [prec = 1e-12])](#cmatisapproxcrvblock-prec--1e-12)
    * [cmat.isSquare()](#cmatissquare)
    * [cmat.isZero([prec = 1e-12])](#cmatisonesprec--1e-12)
    * [cmat.isOnes([prec = 1e-12])](#cmatisonesprec--1e-12)
    * [cmat.isIdentity([prec = 1e-12])](#cmatisidentityprec--1e-12)
    * [cmat.isDiagonal([prec = 1e-12])](#cmatisdiagonalprec--1e-12)
    * [cmat.toString([options])](#cmattostringoptions)
* [Vector](#vector) **inherits from Matrix**
  * [Vector Class Methods](#vector-class-methods)
    * [Vector(rows)](#vectorrows)
    * [Vector(scalar_array)](#vectorscalar_array)
    * [Vector.Constant(rows, scalar)](#vectorconstantrows-scalar)
    * [Vector.Constant(rows, comp)](#vectorconstantrows-comp)
  * [Vector Instance Methods](#vector-instance-methods)
    * [vec.set(row, scalar)](#vecsetrow-scalar)
    * [vec.set(scalar_array)](#vecsetscalar_array)
    * [vec.get(row)](#vecgetrow)
    * [vec.block(startRow, blockRows)](#vecblockstartrow-blockrows)
* [Complex Vector](#complex-vector) **inherits from CMatrix**
  * [Complex Vector Class Methods](#complex-vector-class-methods)
    * [CVector(rows)](#cvectorrows)
    * [CVector(comp_array)](#cvectorcomp_array)
    * [CVector.Constant(rows, scalar)](#cvectorconstantrows-scalar)
    * [CVector.Constant(rows, comp)](#cvectorconstantrows-comp)
  * [Complex Vector Instance Methods](#complex-vector-instance-methods)
    * [cvec.set(row, comp)](#cvecsetrow-comp)
    * [cvec.set(comp_array)](#cvecsetcomp_array)
    * [cvec.get(row)](#cvecgetrow)
    * [cvec.block(startRow, blockRows)](#cvecblockstartrow-blockrows)
* [Row Vector](#row-vector) **inherits from Matrix**
  * [Row Vector Class Methods](#row-vector-class-methods)
    * [RowVector(cols)](#rowvectorcols)
    * [RowVector(scalar_array)](#rowvectorscalar_array)
    * [RowVector.Constant(cols, scalar)](#rowvectorconstantcols-scalar)
    * [RowVector.Constant(cols, comp)](#rowvectorconstantcols-comp)
  * [Row Vector Instance Methods](#row-vector-instance-methods)
    * [rvec.set(col, scalar)](#rvecsetcol-scalar)
    * [rvec.set(scalar_array)](#rvecsetscalar_array)
    * [rvec.get(col)](#rvecgetcol)
    * [rvec.block(startCol, blockCols)](#rvecblockstartcol-blockcols)
* [Complex Row Vector](#complex-row-vector) **inherits from CMatrix**
  * [Complex Row Vector Class Methods](#complex-row-vector-class-methods)
    * [CRowVector(cols)](#crowvectorcols)
    * [CRowVector(comp_array)](#crowvectorcomp_array)
    * [CRowVector.Constant(cols, scalar)](#crowvectorconstantcols-scalar)
    * [CRowVector.Constant(cols, comp)](#crowvectorconstantcols-comp)
  * [Complex Row Vector Instance Methods](#complex-row-vector-instance-methods)
    * [crvec.set(col, comp)](#crvecsetcol-comp)
    * [crvec.set(comp_array)](#crvecsetcomp_array)
    * [crvec.get(col)](#crvecgetcol)
    * [crvec.block(startCol, blockCols)](#crvecblockstartcol-blockcols)
* [Matrix Block](#matrix-block) **inherits from Matrix**
  * [Matrix Block Class Methods](#matrix-block-class-methods)
    * [MatrixBlock(mat, startRow, startCol, blockRows, blockCols)](#matrixblockmat-startrow-startcol-blockrows-blockcols)
    * [MatrixBlock(mblock, startRow, startCol, blockRows, blockCols)](#matrixblockmblock-startrow-startcol-blockrows-blockcols)
  * [Matrix Block Instance Methods](#matrix-block-instance-methods)
* [Complex Matrix Block](#complex-matrix-block) **inherits from CMatrix**
  * [Complex Matrix Block Class Methods](#complex-matrix-block-class-methods)
    * [CMatrixBlock(cmat, startRow, startCol, blockRows, blockCols)](#cmatrixblockcmat-startrow-startcol-blockrows-blockcols)
    * [CMatrixBlock(cmblock, startRow, startCol, blockRows, blockCols)](#cmatrixblockcmblock-startrow-startcol-blockrows-blockcols)
  * [Complex Matrix Block Instance Methods](#complex-matrix-block-instance-methods)
* [Vector Block](#vector-block) **inherits from Vector and MatrixBlock**
  * [Vector Block Class Methods](#vector-block-class-methods)
    * [VectorBlock(vec, startRow, blockRows)](#vectorblockvec-startrow-blockrows)
    * [VectorBlock(vblock, startRow, blockRows)](#vectorblockvblock-startrow-blockrows)
  * [Vector Block Instance Methods](#vector-block-instance-methods)
* [Complex Vector Block](#complex-vector-block) **inherits from CVector and CMatrixBlock**
  * [Complex Vector Block Class Methods](#complex-vector-block-class-methods)
    * [CVectorBlock(cvec, startRow, blockRows)](#cvectorblockcvec-startrow-blockrows)
    * [CVectorBlock(cvblock, startRow, blockRows)](#cvectorblockcvblock-startrow-blockrows)
  * [Complex Vector Block Instance Methods](#complex-vector-block-instance-methods)
* [Row Vector Block](#row-vector-block) **inherits from RowVector and MatrixBlock**
  * [Row Vector Block Class Methods](#row-vector-block-class-methods)
    * [RowVectorBlock(rvec, startCol, blockCols)](#rowvectorblockrvec-startcol-blockcols)
    * [RowVectorBlock(rvblock, startCol, blockCols)](#rowvectorblockrvblock-startcol-blockcols)
  * [Row Vector Block Instance Methods](#row-vector-block-instance-methods)
* [Complex Row Vector Block](#complex-row-vector-block) **inherits from CRowVector and CMatrixBlock**
  * [Complex Row Vector Block Class Methods](#complex-row-vector-block-class-methods)
    * [CRowVectorBlock(crvec, startCol, blockCols)](#crowvectorblockcrvec-startcol-blockcols)
    * [CRowVectorBlock(crvblock, startCol, blockCols)](#crowvectorblockcrvblock-startcol-blockcols)
  * [Complex Row Vector Block Instance Methods](#complex-row-vector-block-instance-methods)

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

#### Matrix.Ones(n)
#### Matrix.Ones(rows, cols)

```js
var M = require('eigenjs').Matrix
  , mat = M.Ones(2, 3);
console.log('mat = \n%s', mat);
```

```txt
mat =
1 1 1
1 1 1
```

#### Matrix.Constant(rows, cols, scalar)
#### Matrix.Constant(rows, cols, comp)

```js
var M = require('eigenjs').Matrix
  , mat = M.Constant(4, 4, 0.6);
console.log('mat = \n%s', mat);
```

```txt
mat =
0.6 0.6 0.6 0.6
0.6 0.6 0.6 0.6
0.6 0.6 0.6 0.6
0.6 0.6 0.6 0.6
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

#### mat.assign(mat)
#### mat.assign(vec)
#### mat.assign(rvec)
#### mat.assign(mblock)
#### mat.assign(vblock)
#### mat.assign(rvblock)

```js
var M = require('eigenjs').Matrix
  , mat = M.Random(4, 4);
mat.assign(M.Zero(4, 4));
console.log('mat = \n%s', mat);
```

```txt
mat =
0 0 0 0
0 0 0 0
0 0 0 0
0 0 0 0
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

### mat.row(n)

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , RV = Eigen.RowVector
  , mat = new M.Zero(3, 3)
  , mblock = mat.row(1);
mblock.assign(RV.Random(3));
console.log('mat =\n%s', mat);
```

```txt
mat =
        0         0         0
-0.843392 -0.891355  0.991578
        0         0         0
```

### mat.col(n)

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , V = Eigen.Vector
  , mat = new M.Zero(3, 3)
  , mblock = mat.col(1);
mblock.assign(V.Random(3));
console.log('mat =\n%s', mat);
```

```txt
mat =
         0   0.674939          0
         0  -0.303923          0
         0 -0.0302965          0
```

#### mat.add(mat)
#### mat.add(vec)
#### mat.add(rvec)
#### mat.add(mblock)
#### mat.add(vblock)
#### mat.add(rvblock)
#### mat.add(cmat)
#### mat.add(cvec)
#### mat.add(crvec)
#### mat.add(cmblock)
#### mat.add(cvblock)
#### mat.add(crvblock)

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
console.log('mat3 = \n%s', mat3);
```

```txt
mat3 =
 6  9
 9 12
```

#### mat.adda(mat)
#### mat.adda(vec)
#### mat.adda(rvec)
#### mat.adda(mblock)
#### mat.adda(vblock)
#### mat.adda(rvblock)

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
console.log('mat1 = \n%s', mat1);
```

```txt
mat1 =
 6  9
 9 12
```

#### mat.sub(mat)
#### mat.sub(vec)
#### mat.sub(rvec)
#### mat.sub(mblock)
#### mat.sub(vblock)
#### mat.sub(rvblock)
#### mat.sub(cmat)
#### mat.sub(cvet)
#### mat.sub(crvet)
#### mat.sub(cmblock)
#### mat.sub(cvblock)
#### mat.sub(crvblock)

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
console.log('mat3 = \n%s', mat3);
```

```txt
mat3 =
-4 -3
-5 -4
```

#### mat.suba(mat)
#### mat.suba(vec)
#### mat.suba(rvec)
#### mat.suba(mblock)
#### mat.suba(vblock)
#### mat.suba(rvblock)

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
console.log('mat1 = \n%s', mat1);
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
#### mat.mul(mblock)
#### mat.mul(vblock)
#### mat.mul(rvblock)
#### mat.mul(cmat)
#### mat.mul(cvec)
#### mat.mul(crvec)
#### mat.mul(cvblock)
#### mat.mul(crvblock)

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
console.log('mat2 = \n%s', mat2);
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
#### mat.mula(mblock)
#### mat.mula(vblock)
#### mat.mula(rvblock)

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
console.log('mat = \n%s', mat);
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
console.log('mat2 = \n%s', mat2);
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
console.log('mat = \n%s', mat);
```

```txt
mat =
0.5   1
1.5   2
```

#### mat.transpose()

```js
var M = require('eigenjs').Matrix
  , mat1 = new M.Random(3, 2)
  , mat2 = mat1.transpose();
console.log('mat1 = \n%s', mat1);
console.log('mat2 = \n%s', mat2);
```

```txt
mat1 =
 -0.112813  -0.325566
-0.0500345   0.213005
 -0.930346  -0.022705
mat2 =
 -0.112813 -0.0500345  -0.930346
 -0.325566   0.213005  -0.022705
```

#### mat.conjugate()

```js
var M = require('eigenjs').Matrix
  , mat1 = new M.Random(2, 2)
  , mat2 = mat1.conjugate();
console.log(mat1.equals(mat2));
```

```txt
true
```

#### mat.adjoint()

```js
var M = require('eigenjs').Matrix
  , mat1 = new M.Random(3, 2)
  , mat2 = mat1.adjoint();
console.log('mat1 = \n%s', mat1);
console.log('mat2 = \n%s', mat2);
```

```txt
mat1 =
 0.997487 0.0670765
 0.770148 -0.645138
 -0.12185 -0.835853
mat2 =
 0.997487  0.770148  -0.12185
0.0670765 -0.645138 -0.835853
```

#### mat.determinant()

```js
var M = require('eigenjs').Matrix
  , mat = new M.Random(2, 2);
console.log('mat = \n%s\n', mat);
console.log('det = %d', mat.determinant());
```

```txt
mat =
 0.132371 -0.813862
 0.758326  -0.58171

det = 0.540171350604003
```

#### mat.inverse()

```js
var M = require('eigenjs').Matrix
  , mat = new M(3, 3).set([
            1, 2, 3,
            0, 1, 4,
            5, 6, 0
          ])
  , inv = mat.inverse();
console.log('inv = \n%s', inv);
```

```txt
inv =
-24  18   5
 20 -15  -4
 -5   4   1
```

#### mat.trace()

```js
var M = require('eigenjs').Matrix
  , mat = new M(2, 3).set([
            1, 2, 3,
            4, 5, 6
          ])
  , tr = mat.trace();
console.log('mat = \n%s\n', mat);
console.log('tr = ', tr);
```

```txt
mat =
1 2 3
4 5 6

tr =  6
```

#### mat.diagonal([index = 0])

```js
var M = require('eigenjs').Matrix
  , mat = new M(4, 4).set([
             7,  9, -5, -3,
            -2, -6,  1,  0,
             6, -3,  0,  9,
             6,  6,  3,  9
          ]);
console.log('%s', mat.diagonal(1).transpose());
console.log('%s', mat.diagonal(-2).transpose());
```

```txt
9 1 9
6 6
```

#### mat.equals(mat)
#### mat.equals(vec)
#### mat.equals(rvec)
#### mat.equals(mblock)
#### mat.equals(vblock)
#### mat.equals(rvblock)

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
#### mat.isApprox(mblock, [prec = 1e-12])
#### mat.isApprox(vblock, [prec = 1e-12])
#### mat.isApprox(rvblock, [prec = 1e-12])

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

#### mat.isSquare()

```js
var M = require('eigenjs').Matrix
  , mat1 = new M(4, 4)
  , mat2 = new M(3, 2);
console.log(mat1.isSquare());
console.log(mat2.isSquare());
```

```txt
true
false
```

#### mat.isZero([prec = 1e-12])

```js
var M = require('eigenjs').Matrix
  , mat = new M(2, 3).set([
            0,      0, 0.0001,
            0,      0,      0
          ]);
console.log(mat.isZero());
console.log(mat.isZero(1e-3));
```

```txt
false
true
```

#### mat.isOnes([prec = 1e-12])

```js
var M = require('eigenjs').Matrix
  , mat = new M(2, 3).set([
            1,      1, 1.0001,
            1, 0.9997,      1
          ]);
console.log(mat.isOnes());
console.log(mat.isOnes(1e-3));
```

```txt
false
true
```

#### mat.isIdentity([prec = 1e-12])

```js
var M = require('eigenjs').Matrix
  , mat = new M(3, 3).set([
            1,       0, 0.0001,
            0,  0.9997,      0,
            0,       0,      1
          ]);
console.log(mat.isIdentity());
console.log(mat.isIdentity(1e-3));
```

```txt
false
true
```

#### mat.isDiagonal([prec = 1e-12])

```js
var M = require('eigenjs').Matrix
  , mat = new M(3, 3).set([
            1e+04,     0,     1,
                0, 1e+04,     0,
                0,     0, 1e+04
          ]);
console.log(mat.isDiagonal());
console.log(mat.isDiagonal(1e-3));
```

```txt
false
true
```

#### mat.toString([options])

+ options `Object`
  - precision `Number` Default=`6`. The number of digits for floating point values.
  - fullPrecision `Booleam` Default=`false`. If set to true, then the number of digits will be computed to match the full precision of each floating-point type.
  - dontAlignCols `Booleam` Default=`false`. If set to true, it allows to disable the alignment of columnt, resulting in faster code.
  - coeffSeparator `String` Default=`' '`. The string printed between two coefficients of the same row.
  - rowSeparator `String` Default=`''`. The string printed between two rows.
  - rowPrefix `String` Default=`''`. The string printed at the beginning of each row.
  - rowSuffix `String` Default=`''`. The string printed at the end of each row.
  - matPrefix `String` Default=`''`. The string printed at the beginning of the matrix.
  - matSuffix `String` Default=`''`. The string printed at the end of the matrix.

```js
var M = require('eigenjs').Matrix
  , mat = new M.Random(3, 3)
  , cleanfmt = {
        precision: 4
      , coeffSeparator: ", "
      , rowSeparator: "\n"
      , rowPrefix: "["
      , rowSuffix: "]"
      };
console.log('mat =\n' + mat.toString());
console.log('mat =\n' + mat.toString(cleanfmt));
```

```txt
mat =
   0.611558    0.725525   -0.550208
   0.457785  -0.0968169    0.657662
0.000162166    0.797849    -0.68232
mat =
[   0.6116,    0.7255,   -0.5502]
[   0.4578,  -0.09682,    0.6577]
[0.0001622,    0.7978,   -0.6823]
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

#### CMatrix.Ones(n)
#### CMatrix.Ones(rows, cols)

```js
var CM = require('eigenjs').CMatrix
  , cmat = CM.Ones(2, 3);
console.log('cmat = \n%s', cmat);
```

```txt
cmat =
(1,0) (1,0) (1,0)
(1,0) (1,0) (1,0)
```

#### CMatrix.Constant(rows, cols, scalar)
#### CMatrix.Constant(rows, cols, comp)

```js
var CM = require('eigenjs').CMatrix
  , cmat = CM.Constant(4, 4, 0.6);
console.log('cmat = \n%s', cmat);
```

```txt
cmat =
(0.6,0) (0.6,0) (0.6,0) (0.6,0)
(0.6,0) (0.6,0) (0.6,0) (0.6,0)
(0.6,0) (0.6,0) (0.6,0) (0.6,0)
(0.6,0) (0.6,0) (0.6,0) (0.6,0)
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

#### cmat.assign(mat)
#### cmat.assign(vec)
#### cmat.assign(rvec)
#### cmat.assign(mblock)
#### cmat.assign(vblock)
#### cmat.assign(rvblock)
#### cmat.assign(cmat)
#### cmat.assign(cvec)
#### cmat.assign(crvec)
#### cmat.assign(cmblock)
#### cmat.assign(cvblock)
#### cmat.assign(crvblock)

```js
var CM = require('eigenjs').CMatrix
  , cmat = CM.Random(4, 4);
cmat.assign(CM.Zero(4, 4));
console.log('cmat = \n%s', cmat);
```

```txt
cmat =
(0,0) (0,0) (0,0) (0,0)
(0,0) (0,0) (0,0) (0,0)
(0,0) (0,0) (0,0) (0,0)
(0,0) (0,0) (0,0) (0,0)
```

### cmat.block(startRow, startCol, blockRows, blockCols)

```js
var CM = require('eigenjs').CMatrix
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

### cmat.row(n)

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CRV = Eigen.CRowVector
  , cmat = new CM.Zero(3, 3)
  , cmblock = cmat.row(1);
cmblock.assign(CRV.Random(3));
console.log('cmat =\n%s', cmat);
```

```txt
cmat =
               (0,0)                (0,0)                (0,0)
(0.500827,-0.595426)  (0.677855,0.716979) (0.271854,-0.943846)
               (0,0)                (0,0)                (0,0)
```

### cmat.col(n)

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CV = Eigen.CVector
  , cmat = new CM.Zero(3, 3)
  , cmblock = cmat.col(1);
cmblock.assign(CV.Random(3));
console.log('cmat =\n%s', cmat);
```

```txt
cmat =
                (0,0)     (-0.97615,-0.147)                 (0,0)
                (0,0) (-0.630134,-0.661642)                 (0,0)
                (0,0)  (-0.211411,0.819724)                 (0,0)
```

#### cmat.add(mat)
#### cmat.add(vec)
#### cmat.add(rvec)
#### cmat.add(mblock))
#### cmat.add(vblock)
#### cmat.add(rvblock)
#### cmat.add(cmat)
#### cmat.add(cvec)
#### cmat.add(crvec)
#### cmat.add(cmblock)
#### cmat.add(cvblock)
#### cmat.add(crvblock)

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
console.log('cmat3 = \n%s', cmat3);
```

```txt
cmat3 =
  (6,1)   (8,2)
(10,10) (12,12)
```

#### cmat.adda(mat)
#### cmat.adda(vec)
#### cmat.adda(rvec)
#### cmat.adda(mblock)
#### cmat.adda(vblock)
#### cmat.adda(rvblock)
#### cmat.adda(cmat)
#### cmat.adda(cvec)
#### cmat.adda(crvec)
#### cmat.adda(cmblock)
#### cmat.adda(cvblock)
#### cmat.adda(crvblock)

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
console.log('cmat1 = \n%s', cmat1);
```

```txt
cmat1 =
 (6,1)  (8,2)
(10,3) (12,4)
```

#### cmat.sub(mat)
#### cmat.sub(vec)
#### cmat.sub(rvec)
#### cmat.sub(mblock)
#### cmat.sub(vblock)
#### cmat.sub(rvblock)
#### cmat.sub(cmat)
#### cmat.sub(cvec)
#### cmat.sub(crvec)
#### cmat.sub(cmblock)
#### cmat.sub(cvblock)
#### cmat.sub(crvblock)

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
console.log('cmat3 = \n%s', cmat3);
```

```txt
cmat3 =
(-4,1) (-4,2)
(-4,3) (-4,4)
```

#### cmat.suba(mat)
#### cmat.suba(vec)
#### cmat.suba(rvec)
#### cmat.suba(mblock)
#### cmat.suba(vblock)
#### cmat.suba(rvblock)
#### cmat.suba(cmat)
#### cmat.suba(cvec)
#### cmat.suba(crvec)
#### cmat.suba(cmblock)
#### cmat.suba(vblock)
#### cmat.suba(rvblock)

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
console.log('cmat1 = \n%s', cmat1);
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
#### cmat.mul(mblock)
#### cmat.mul(vblock)
#### cmat.mul(rvblock)
#### cmat.mul(cmat)
#### cmat.mul(cvec)
#### cmat.mul(crvec)
#### cmat.mul(cmblock)
#### cmat.mul(cvblock)
#### cmat.mul(crvblock)

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
console.log('cmat2 = \n%s', cmat2);
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
#### cmat.mula(mblock)
#### cmat.mula(vblock)
#### cmat.mula(rvblock)
#### cmat.mula(cmat)
#### cmat.mula(cvec)
#### cmat.mula(crvec)
#### cmat.mula(cmblock)
#### cmat.mula(cvblock)
#### cmat.mula(crvblock)

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
console.log('cmat = \n%s', cmat);
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
console.log('cmat2 = \n%s', cmat2);
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
console.log('cmat = \n%s', cmat);
```

```txt
cmat =
(0.5,0.5)     (1,1)
(1.5,1.5)     (2,2)
```

#### cmat.transpose()

```js
var CM = require('eigenjs').CMatrix
  , cmat1 = new CM.Random(3, 2)
  , cmat2 = cmat1.transpose();
console.log('cmat1 = \n%s', cmat1);
console.log('cmat2 = \n%s', cmat2);
```

```txt
cmat1 =
(-0.0175928,0.317664)  (0.0405036,0.744415)
  (0.980286,-0.33036)  (-0.617894,-0.94324)
(-0.360953,-0.543819)  (0.958967,-0.649626)
cmat2 =
(-0.0175928,0.317664)   (0.980286,-0.33036) (-0.360953,-0.543819)
 (0.0405036,0.744415)  (-0.617894,-0.94324)  (0.958967,-0.649626)
```

#### cmat.conjugate()

```js
var CM = require('eigenjs').CMatrix
  , cmat1 = new CM.Random(2, 2)
  , cmat2 = cmat1.conjugate();
console.log('cmat1 = \n%s', cmat1);
console.log('cmat2 = \n%s', cmat2);
```

```txt
cmat1 =
 (-0.241556,0.172337)    (0.87717,0.591998)
(0.472778,-0.0217244) (-0.291438,-0.198262)
cmat2 =
(-0.241556,-0.172337)   (0.87717,-0.591998)
 (0.472778,0.0217244)  (-0.291438,0.198262)
```

#### cmat.adjoint()

```js
var CM = require('eigenjs').CMatrix
  , cmat1 = new CM.Random(3, 2)
  , cmat2 = cmat1.adjoint();
console.log('cmat1 = \n%s', cmat1);
console.log('cmat2 = \n%s', cmat2);
```

```txt
cmat1 =
(-0.431879,-0.597577)    (0.956798,0.90183)
 (0.525477,-0.313942)  (-0.943631,0.390357)
  (-0.415382,0.66716)   (0.737088,0.238193)
cmat2 =
 (-0.431879,0.597577)   (0.525477,0.313942)  (-0.415382,-0.66716)
  (0.956798,-0.90183) (-0.943631,-0.390357)  (0.737088,-0.238193)
```

#### cmat.determinant()

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM.Random(2, 2);
console.log('cmat = \n%s\n', cmat);
console.log('det = %s', mat.determinant());
```

```txt
cmat =
 (0.528893,-0.900902) (-0.307532,-0.690669)
  (0.541616,0.947563)  (-0.072443,0.450036)

det = (-0.120764,0.968768)
```

#### cmat.inverse()

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(3, 3).set([
            1, 2, 3,
            0, 1, 4,
            5, 6, 0
          ])
  , inv = cmat.inverse();
console.log('inv = \n%s', inv);
```

```txt
inv =
(-24,0)  (18,0)   (5,0)
 (20,0) (-15,0)  (-4,0)
(-5,-0)   (4,0)   (1,0)
```

#### cmat.trace()

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat = new CM(2, 3).set([
            1,   2    , 3,
            4, C(5, 6), 7
           ])
  , tr = cmat.trace();
console.log('cmat = \n%s\n', cmat);
console.log('tr = %s', tr);
```

```txt
cmat =
(1,0) (2,0) (3,0)
(4,0) (5,6) (7,0)

tr = (6,6)
```

#### cmat.diagonal([index = 0])

```js
var CM = require('eigenjs').CMatrix
  , cmat = CM.Random(2, 3);
console.log('cmat = \n%s\n', cmat);
console.log('%s', cmat.diagonal());
```

```txt
cmat =
   (0.345978,0.85694)  (0.99589,-0.0742672) (-0.763035,-0.329107)
   (0.592024,0.15202)   (-0.20903,0.834369)   (0.692856,0.838519)

 (0.345978,0.85694)
(-0.20903,0.834369)
```

#### cmat.equals(cmat)
#### cmat.equals(cvec)
#### cmat.equals(crvec)
#### cmat.equals(cmblock)
#### cmat.equals(cvblock)
#### cmat.equals(crvblock)

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
#### cmat.isApprox(cmblock, [prec = 1e-12])
#### cmat.isApprox(cvblock, [prec = 1e-12])
#### cmat.isApprox(crvblock, [prec = 1e-12])

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

#### cmat.isSquare()

```js
var CM = require('eigenjs').CMatrix
  , cmat1 = new CM(4, 4)
  , cmat2 = new CM(3, 2);
console.log(cmat1.isSquare());
console.log(cmat2.isSquare());
```

```txt
true
false
```

#### cmat.isZero([prec = 1e-12])

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat = new CM(2, 3).set([
            0,           0 ,      0.0001,
            0, C(0, 0.0007),           0
          ]);
console.log(cmat.isZero());
console.log(cmat.isZero(1e-3));
```

```txt
false
true
```

#### cmat.isOnes([prec = 1e-12])

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat = new CM(2, 3).set([
            1,            1,      1.0001 ,
            1,       0.9997, C(1, 0.0001)
          ]);
console.log(cmat.isOnes());
console.log(cmat.isOnes(1e-3));
```

```txt
false
true
```

#### cmat.isIdentity([prec = 1e-12])

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(3, 3).set([
            1,       0, 0.0001,
            0,  0.9997,      0,
            0,       0,      1
          ]);
console.log(cmat.isIdentity());
console.log(cmat.isIdentity(1e-3));
```

```txt
false
true
```

#### cmat.isDiagonal([prec = 1e-12])

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(3, 3).set([
            1e+04,     0,     1,
                0, 1e+04,     0,
                0,     0, 1e+04
          ]);
console.log(cmat.isDiagonal());
console.log(cmat.isDiagonal(1e-3));
```

```txt
false
true
```

#### cmat.toString([options])

+ options `Object`
  - precision `Number` Default=`6`. The number of digits for floating point values.
  - fullPrecision `Booleam` Default=`false`. If set to true, then the number of digits will be computed to match the full precision of each floating-point type.
  - dontAlignCols `Booleam` Default=`false`. If set to true, it allows to disable the alignment of columnt, resulting in faster code.
  - coeffSeparator `String` Default=`' '`. The string printed between two coefficients of the same row.
  - rowSeparator `String` Default=`''`. The string printed between two rows.
  - rowPrefix `String` Default=`''`. The string printed at the beginning of each row.
  - rowSuffix `String` Default=`''`. The string printed at the end of each row.
  - matPrefix `String` Default=`''`. The string printed at the beginning of the matrix.
  - matSuffix `String` Default=`''`. The string printed at the end of the matrix.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM.Random(3, 3)
  , octavefmt = {
        coeffSeparator: ", "
      , rowSeparator: ";\n"
      , rowPrefix: "["
      , rowSuffix: "]"
      };
console.log('cmat =\n' + cmat.toString());
console.log('cmat =\n' + cmat.toString(octavefmt));
```

```txt
(-0.881059,0.0362337) (-0.272438,-0.865992) (-0.230511,-0.192664)
 (0.979223,-0.201546)  (-0.723588,0.651508)  (-0.105755,0.579535)
  (0.624409,0.438373)  (-0.109684,0.538095)   (0.244085,0.332142)
cmat =
[(-0.881059,0.0362337), (-0.272438,-0.865992), (-0.230511,-0.192664)];
[ (0.979223,-0.201546),  (-0.723588,0.651508),  (-0.105755,0.579535)];
[  (0.624409,0.438373),  (-0.109684,0.538095),   (0.244085,0.332142)]
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

#### Vector.Constant(rows, scalar)
#### Vector.Constant(rows, comp)

```js
var V = require('eigenjs').Vector
  , vec = V.Constant(4, 0.6);
console.log('vec = \n%s', vec);
```

```txt
vec =
0.6
0.6
0.6
0.6
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

#### vec.block(startRow, blockRows)

```js
var Eigen = require('eigenjs')
  , V = Eigen.Vector
  , vec = new V([1,
                 2,
                 3,
                 4])
  , vblock = vec.block(1, 2);
console.log('vblock = %s', vblock);
```

```txt
vblock =
2
3
```

## Complex Vector

### Complex Vector Class Methods

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

#### CVector.Constant(rows, scalar)
#### CVector.Constant(rows, comp)

```js
var CV = require('eigenjs').CVector
  , cvec = CV.Constant(4, 0.6);
console.log('cvec = \n%s', cvec);
```

```txt
cvec =
(0.6,0)
(0.6,0)
(0.6,0)
(0.6,0)
```

### Complex Vector Instance Methods

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

#### cvec.block(startRow, blockRows)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CV = Eigen.CVector
  , cvec = new CV([  1    ,
                     2    ,
                   C(3   ),
                   C(4, 0)])
  , cvblock = cvec.block(1, 2);
console.log('cvblock = \n%s', cvblock);
```

```txt
cvblock =
(2,0)
(3,0)
```

## Row Vector

### Row Vector Class Methods

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

#### RowVector.Constant(cols, scalar)
#### RowVector.Constant(cols, comp)

```js
var RV = require('eigenjs').RVector
  , rvec = RV.Constant(4, 0.6);
console.log('rvec = \n%s', rvec);
```

```txt
rvec =
0.6 0.6 0.6 0.6
```

### Row Vector Instance Methods

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

#### rvec.block(startCol, blockCols)

```js
var Eigen = require('eigenjs')
  , RV = Eigen.RowVector
  , rvec = new RV([1, 2, 3, 4])
  , rvblock = rvec.block(1, 2);
console.log('rvblock = \n%s', rvblock);
```

```txt
rvblock =
2 3
```

## Complex Row Vector

### Complex Row Vector Class Methods

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

#### CRowVector.Constant(cols, scalar)
#### CRowVector.Constant(cols, comp)

```js
var CRV = require('eigenjs').CRVector
  , crvec = CRV.Constant(4, 0.6);
console.log('crvec = \n%s', crvec);
```

```txt
crvec =
(0.6,0) (0.6,0) (0.6,0) (0.6,0)
```

### Complex Row Vector Instance Methods

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

#### crvec.get(col)

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

#### crvec.block(startCol, blockCols)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CRV = Eigen.CRowVector
  , crvec = new CRV([1, 2, C(3), C(4, 0)])
  , crvblock = crvec.block(1, 2);
console.log('crvblock = \n%s', crvblock);
```

```txt
crvblock =
(2,0) (3,0)
```

## Matrix Block

### Matrix Block Class Methods

#### MatrixBlock(mat, startRow, startCol, blockRows, blockCols)
#### MatrixBlock(mblock, startRow, startCol, blockRows, blockCols)

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

### Matrix Block Instance Methods

## Complex Matrix Block

### Complex Matrix Block Class Methods

#### CMatrixBlock(cmat, startRow, startCol, blockRows, blockCols)
#### CMatrixBlock(cmblock, startRow, startCol, blockRows, blockCols)

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CMB = Eigen.CMatrixBlock
  , cmat = new CM.Random(3, 3)
  , cmblock = new CMB(cmat, 1, 1, 2, 1);
console.log('cmat = \n%s', cmat);
console.log('cmblock = \n%s', cmblock);
```

```txt
cmat =
  (0.24353,-0.983476)  (0.689103,-0.238167)  (0.931696,-0.989139)
    (0.72236,0.70887)  (-0.870838,-0.17097)   (-0.463351,0.45267)
(-0.0298291,0.662265) (0.513237,-0.0206502) (0.0326769,-0.799212)
cmblock =
 (-0.870838,-0.17097)
(0.513237,-0.0206502)
```


### Complex Matrix Block Instance Methods

## Vector Block

### Vector Block Class Methods

#### VectorBlock(vec, startRow, blockRows)
#### VectorBlock(vblock, startRow, blockRows)

```js
var Eigen = require('eigenjs')
  , V = Eigen.Vector
  , VB = Eigen.VectorBlock
  , vec = new V.Random(4)
  , vblock = new VB(vec, 1, 2);
console.log('vec = \n%s', vec);
console.log('vblock = \n%s', vblock);
```

```txt
vec =
 0.588843
 0.686789
 0.856138
-0.895627
vblock =
0.686789
0.856138
```

### Vector Block Instance Methods

## Complex Vector Block

### Complex Vector Block Class Methods

#### CVectorBlock(cvec, startRow, blockRows)
#### CVectorBlock(cvblock, startRow, blockRows)

```js
var Eigen = require('eigenjs')
  , CV = Eigen.CVector
  , CVB = Eigen.CVectorBlock
  , cvec = new CV.Random(4)
  , cvblock = new CVB(cvec, 1, 2);
console.log('cvec = \n%s', cvec);
console.log('cvblock = \n%s', cvblock);
```

```txt
cvec =
  (0.152345,0.457992)
 (-0.536544,0.301383)
  (-0.65206,0.819627)
(-0.523377,-0.399041)
cvblock =
(-0.536544,0.301383)
 (-0.65206,0.819627)
```

### Complex Vector Block Instance Methods

## Row Vector Block

### Row Vector Block Class Methods

#### RowVectorBlock(rvec, startCol, blockCols)
#### RowVectorBlock(rvblock, startCol, blockCols)

```js
var Eigen = require('eigenjs')
  , RV = Eigen.RowVector
  , RVB = Eigen.RowVectorBlock
  , rvec = new RV.Random(4)
  , rvblock = new RVB(rvec, 1, 2);
console.log('rvec = \n%s', rvec);
console.log('rvblock = \n%s', rvblock);
```

```txt
rvec =
 0.922803  -0.45235 -0.640183  0.439847
rvblock =
 -0.45235 -0.640183
```

### Row Vector Block Instance Methods

## Complex Row Vector Block

### Complex Row Vector Block Class Methods

#### CRowVectorBlock(crvec, startCol, blockCols)
#### CRowVectorBlock(crvblock, startCol, blockCols)

```js
var Eigen = require('eigenjs')
  , CRV = Eigen.CRowVector
  , CRVB = Eigen.CRowVectorBlock
  , crvec = new CRV.Random(4)
  , crvblock = new CRVB(crvec, 1, 2);
console.log('crvec = \n%s', crvec);
console.log('crvblock = \n%s', crvblock);
```

```txt
crvec =
(0.707337,0.220289) (0.397833,0.371915) (0.782186,0.199594) (0.575888,0.951467)
crvblock =
(0.397833,0.371915) (0.782186,0.199594)
```

### Complex Row Vector Block Instance Methods
