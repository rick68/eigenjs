# EigenJS

The goal of this project is to port Eigen library into JavaScript for linear algebar.

[![NPM][nodeico-download]][nodeico-url] [![NPM][nodeico-months]][nodeico-url]

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Build status][appveyor-image]][appveyor-url] [![Gitter chat][gitter-image]][gitter-url] [![gittip.com/rick68][gittip-image]][gittip-url]

[nodeico-download]: https://nodei.co/npm/eigenjs.png?downloads=true&downloadRank=true&stars=true
[nodeico-months]: https://nodei.co/npm-dl/eigenjs.png?months=6&height=3
[nodeico-url]: https://nodei.co/npm/eigenjs/

[npm-image]: http://img.shields.io/npm/v/eigenjs.svg
[npm-url]: https://npmjs.org/package/eigenjs

[downloads-image]: http://img.shields.io/npm/dm/eigenjs.svg

[travis-image]: https://travis-ci.org/rick68/eigenjs.svg?branch=master
[travis-url]: https://travis-ci.org/rick68/eigenjs

[appveyor-image]: https://ci.appveyor.com/api/projects/status/jot11x58urjndseb/branch/master
[appveyor-url]: https://ci.appveyor.com/project/rick68/eigenjs/branch/master

[gitter-image]: https://badges.gitter.im/rick68/eigenjs.png
[gitter-url]: https://gitter.im/rick68/eigenjs

[gittip-image]: http://img.shields.io/gittip/rick68.svg
[gittip-url]: https://www.gittip.com/rick68

## Installation

+ **OS X** (XCode & Command Line Tools)
+ **Linux** (GCC >= 4.8):

```bash
$ npm install eigenjs
```

+ **Windows7/8** (Visual Studio 2012):

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
    * [comp.mul(vec)](#compmulvec)
    * [comp.mul(rvec)](#compmulrvec)
    * [comp.mul(mblock)](#compmulmblock)
    * [comp.mul(vblock)](#compmulvblock)
    * [comp.mul(rvblock)](#compmulrvblock)
    * [comp.mul(cmat)](#compmulcmat)
    * [comp.mul(cvec)](#compmulcvec)
    * [comp.mul(crvec)](#compmulcrvec)
    * [comp.mul(cmblock)](#compmulcmblock)
    * [comp.mul(cvblock)](#compmulcvblock)
    * [comp.mul(crvblock)](#compmulcrvblock)
    * [comp.mula(scalar)](#compmulascalar)
    * [comp.mula(comp)](#compmulacomp)
    * [comp.div(scalar)](#compdivscalar)
    * [comp.div(comp)](#compdivcomp)
    * [comp.diva(scalar)](#compdivascalar)
    * [comp.diva(comp)](#compdivacomp)
    * [comp.equals(scalar)](#compequalsscalar)
    * [comp.equals(comp)](#compequalscomp)
    * [comp.isApprox(comp, [prec = 1e-12])](#compisapproxcomp-prec--1e-12)
    * [comp.toString()](#comptostring)
  * [Complex Properties](#complex-properties)
    * [comp.real](#compreal)
    * [comp.imag](#compimag)
* [Matrix](#matrix)
  * [Matrix Class Methods](#matrix-class-methods)
    * [Matrix(mat)](#matrixmat)
    * [Matrix(vec)](#matrixvec)
    * [Matrix(rvec)](#matrixrvec)
    * [Matrix(mblock)](#matrixmblock)
    * [Matrix(vblock)](#matrixvblock)
    * [Matrix(rvblock)](#matrixrvblock)
    * [Matrix(rows, cols)](#matrixrows-cols)
    * [Matrix.Zero(n)](#matrixzeron)
    * [Matrix.Zero(rows, cols)](#matrixzerorows-cols)
    * [Matrix.Ones(n)](#matrixonesn)
    * [Matrix.Ones(rows, cols)](#matrixonesrows-cols)
    * [Matrix.Constant(rows, cols, scalar)](#matrixconstantrows-cols-scalar)
    * [Matrix.Constant(rows, cols, comp)](#matrixconstantrows-cols-comp)
    * [Matrix.Random(n)](#matrixrandomn)
    * [Matrix.Random(rows, cols)](#matrixrandomrows-cols)
    * [Matrix.Identity(n)](#matrixidentityn)
    * [Matrix.Identity(rows, cols)](#matrixidentityrows-cols)
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
    * [mat.value()](#matvalue)
    * [mat.setZero()](#matsetzero)
    * [mat.setOnes()](#matsetones)
    * [mat.setConstant(scalar)](#matsetconstantscalar)
    * [mat.setRandom()](#matsetrandom)
    * [mat.setIdentity()](#matsetidentity)
    * [mat.setDiagonal(index, vec)](#matsetdiagonalindex-vec)
    * [mat.setDiagonal(index, rvec)](#matsetdiagonalindex-rvec)
    * [mat.block(startRow, startCol, blockRows, blockCols)](#matblockstartrow-startcol-blockrows-blockcols)
    * [mat.row(n)](#matrown)
    * [mat.col(n)](#matcoln)
    * [mat.topRows(n)](#mattoprowsn)
    * [mat.bottomRows(n)](#matbottomrowsn)
    * [mat.middleRows(startRow, n)](#matmiddlerowsstartrow-n)
    * [mat.leftCols(n)](#matleftcolsn)
    * [mat.rightCols(n)](#matrightcolsn)
    * [mat.middleCols(startCol, n)](#matmiddlecolsstartcol-n)
    * [mat.topLeftCorner(cRows, cCols)](#mattopleftcornercrows-ccols)
    * [mat.topRightCorner(cRows, cCols)](#mattoprightcornercrows-ccols)
    * [mat.bottomLeftCorner(cRows, cCols)](#matbottomleftcornercrows-ccols)
    * [mat.bottomRightCorner(cRows, cCols)](#matbottomrightcornercrows-ccols)
    * [mat.replicate(rowFactor, colFactor)](#matreplicaterowfactor-colfactor)
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
    * [mat.norm()](#matnorm)
    * [mat.redux(func)](#matreduxfunc)
    * [mat.sum()](#matsum)
    * [mat.prod()](#matprod)
    * [mat.mean()](#matmean)
    * [mat.visit(func)](#matvisitfunc)
    * [mat.maxCoeff()](#matmaxcoeff)
    * [mat.maxCoeff(obj)](#matmaxcoeffobj)
    * [mat.maxCoeff(func)](#matmaxcoefffunc)
    * [mat.minCoeff()](#matmincoeff)
    * [mat.minCoeff(obj)](#matmincoeffobj)
    * [mat.minCoeff(func)](#matmincoefffunc)
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
    * [mat.all()](#matall)
    * [mat.any()](#matany)
    * [mat.count()](#matcount)
    * [mat.allFinite()](#matallfinite)
    * [mat.hasNaN()](#mathasnan)
    * [mat.partialPivLu()](#matpartialpivlu)
    * [mat.fullPivLu()](#matfullpivlu)
    * [mat.toString([options])](#mattostringoptions)
* [Complex Matrix](#complex-matrix)
  * [Complex Matrix Class Methods](#complex-matrix-class-methods)
    * [CMatrix(mat)](#cmatrixmat)
    * [CMatrix(vec)](#cmatrixvec)
    * [CMatrix(rvec)](#cmatrixrvec)
    * [CMatrix(mblock)](#cmatrixmblock)
    * [CMatrix(vblock)](#cmatrixvblock)
    * [CMatrix(rvblock)](#cmatrixrvblock)
    * [CMatrix(cmat)](#cmatrixcmat)
    * [CMatrix(cvec)](#cmatrixcvec)
    * [CMatrix(crvec)](#cmatrixcrvec)
    * [CMatrix(cmblock)](#cmatrixcmblock)
    * [CMatrix(cvblock)](#cmatrixcvblock)
    * [CMatrix(crvblock)](#cmatrixcrvblock)
    * [CMatrix(rows, cols)](#cmatrixrows-cols)
    * [CMatrix.Zero(n)](#cmatrixzeron)
    * [CMatrix.Zero(rows, cols)](#cmatrixzerorows-cols)
    * [CMatrix.Ones(n)](#cmatrixonesn)
    * [CMatrix.Ones(rows, cols)](#cmatrixonesrows-cols)
    * [CMatrix.Constant(rows, cols, scalar)](#cmatrixconstantrows-cols-scalar)
    * [CMatrix.Constant(rows, cols, comp)](#cmatrixconstantrows-cols-comp)
    * [CMatrix.Random(n)](#cmatrixrandomn)
    * [CMatrix.Random(rows, cols)](#cmatrixrandomrows-cols)
    * [CMatrix.Identity(n)](#cmatrixidentityn)
    * [CMatrix.Identity(rows, cols)](#cmatrixidentityrows-cols)
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
    * [cmat.value()](#cmatvalue)
    * [cmat.setZero()](#cmatsetzero)
    * [cmat.setOnes()](#cmatsetones)
    * [cmat.setConstant(scalar)](#cmatsetconstantscalar)
    * [cmat.setConstant(comp)](#cmatsetconstantcomp)
    * [cmat.setRandom()](#cmatsetrandom)
    * [cmat.setIdentity()](#cmatsetidentity)
    * [cmat.setDiagonal(index, vec)](#cmatsetdiagonalindex-vec)
    * [cmat.setDiagonal(index, rvec)](#cmatsetdiagonalindex-rvec)
    * [cmat.setDiagonal(index, cvec)](#cmatsetdiagonalindex-cvec)
    * [cmat.setDiagonal(index, crvec)](#cmatsetdiagonalindex-crvec)
    * [cmat.block(startRow, startCol, blockRows, blockCols)](#cmatblockstartrow-startcol-blockrows-blockcols)
    * [cmat.row(n)](#cmatrown)
    * [cmat.col(n)](#cmatcoln)
    * [cmat.topRows(n)](#cmattoprowsn)
    * [cmat.bottomRows(n)](#cmatbottomrowsn)
    * [cmat.middleRows(startRow, n)](#cmatmiddlerowsstartrow-n)
    * [cmat.leftCols(n)](#cmatleftcolsn)
    * [cmat.rightCols(n)](#cmatrightcolsn)
    * [cmat.middleCols(startCol, n)](#cmatmiddlecolsstartcol-n)
    * [cmat.topLeftCorner(cRows, cCols)](#cmattopleftcornercrows-ccols)
    * [cmat.topRightCorner(cRows, cCols)](#cmattoprightcornercrows-ccols)
    * [cmat.bottomLeftCorner(cRows, cCols)](#cmatbottomleftcornercrows-ccols)
    * [cmat.bottomRightCorner(cRows, cCols)](#cmatbottomrightcornercrows-ccols)
    * [cmat.replicate(rowFactor, colFactor)](#cmatreplicaterowfactor-colfactor)
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
    * [cmat.norm()](#cmatnorm)
    * [cmat.redux(func)](#cmatreduxfunc)
    * [cmat.sum()](#cmatsum)
    * [cmat.prod()](#cmatprod)
    * [cmat.mean()](#cmatmean)
    * [cmat.visit(func)](#cmatvisitfunc)
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
    * [cmat.allFinite()](#cmatallfinite)
    * [cmat.hasNaN()](#cmathasnan)
    * [cmat.partialPivLu()](#cmatpartialpivlu)
    * [cmat.fullPivLu()](#cmatfullpivlu)
    * [cmat.toString([options])](#cmattostringoptions)
* [Vector](#vector) **inherits from Matrix**
  * [Vector Class Methods](#vector-class-methods)
    * [Vector(mat)](#vectormat)
    * [Vector(vec)](#vectorvec)
    * [Vector(rvec)](#vectorrvec)
    * [Vector(mblock)](#vectormblock)
    * [Vector(vblock)](#vectorvblock)
    * [Vector(rvblock)](#vectorrvblock)
    * [Vector(rows)](#vectorrows)
    * [Vector(scalar_array)](#vectorscalar_array)
    * [Vector.Constant(rows, scalar)](#vectorconstantrows-scalar)
    * [Vector.Constant(rows, comp)](#vectorconstantrows-comp)
    * [Vector.LinSpaced(size, low, high)](#vectorlinspacedsize-low-high)
  * [Vector Instance Methods](#vector-instance-methods)
    * [vec.set(row, scalar)](#vecsetrow-scalar)
    * [vec.set(scalar_array)](#vecsetscalar_array)
    * [vec.get(row)](#vecgetrow)
    * [vec.setLinSpaced(low, high)](#vecsetlinspacedlow-high)
    * [vec.setLinSpaced(size, low, high)](#vecsetlinspacedsize-low-high)
    * [vec.block(startRow, blockRows)](#vecblockstartrow-blockrows)
    * [vec.head(n)](#vecheadn)
    * [vec.tail(n)](#vectailn)
    * [vec.dot(mat)](#vecdotmat)
    * [vec.dot(vec)](#vecdotvec)
    * [vec.dot(rvec)](#vecdotrvec)
    * [vec.dot(mblock)](#vecdotmblock)
    * [vec.dot(vblock)](#vecdotvblock)
    * [vec.dot(rvblock)](#vecdotrvblock)
    * [vec.dot(cmat)](#vecdotcmat)
    * [vec.dot(cvec)](#vecdotcvec)
    * [vec.dot(crvec)](#vecdotcrvec)
    * [vec.dot(cmblock)](#vecdotcmblock)
    * [vec.dot(cvblock)](#vecdotcvblock)
    * [vec.dot(crvblock)](#vecdotcrvblock)
    * [vec.asDiagonal()](#vecasdiagonal)
    * [vec.normalize()](#vecnormalize)
    * [vec.maxCoeff()](#vecmaxcoeff)
    * [vec.maxCoeff(obj)](#vecmaxcoeffobj)
    * [vec.maxCoeff(func)](#vecmaxcoefffunc)
    * [vec.minCoeff()](#vecmincoeff)
    * [vec.minCoeff(obj)](#vecmincoeffobj)
    * [vec.minCoeff(func)](#vecmincoefffunc)
* [Complex Vector](#complex-vector) **inherits from CMatrix**
  * [Complex Vector Class Methods](#complex-vector-class-methods)
    * [CVector(mat)](#cvectormat)
    * [CVector(vec)](#cvectorvec)
    * [CVector(rvec)](#cvectorrvec)
    * [CVector(mblock)](#cvectormblock)
    * [CVector(vblock)](#cvectorvblock)
    * [CVector(rvblock)](#cvectorrvblock)
    * [CVector(cmat)](#cvectorcmat)
    * [CVector(cvec)](#cvectorcvec)
    * [CVector(crvec)](#cvectorcrvec)
    * [CVector(cmblock)](#cvectorcmblock)
    * [CVector(cvblock)](#cvectorcvblock)
    * [CVector(crvblock)](#cvectorcrvblock)
    * [CVector(rows)](#cvectorrows)
    * [CVector(comp_array)](#cvectorcomp_array)
    * [CVector.Constant(rows, scalar)](#cvectorconstantrows-scalar)
    * [CVector.Constant(rows, comp)](#cvectorconstantrows-comp)
  * [Complex Vector Instance Methods](#complex-vector-instance-methods)
    * [cvec.set(row, comp)](#cvecsetrow-comp)
    * [cvec.set(comp_array)](#cvecsetcomp_array)
    * [cvec.get(row)](#cvecgetrow)
    * [cvec.block(startRow, blockRows)](#cvecblockstartrow-blockrows)
    * [cvec.head(n)](#cvecheadn)
    * [cvec.tail(n)](#cvectailn)
    * [cvec.dot(mat)](#cvecdotmat)
    * [cvec.dot(vec)](#cvecdotvec)
    * [cvec.dot(rvec)](#cvecdotrvec)
    * [cvec.dot(mblock)](#cvecdotmblock)
    * [cvec.dot(vblock)](#cvecdotvblock)
    * [cvec.dot(rvblock)](#cvecdotrvblock)
    * [cvec.dot(cmat)](#cvecdotcmat)
    * [cvec.dot(cvec)](#cvecdotcvec)
    * [cvec.dot(crvec)](#cvecdotcrvec)
    * [cvec.dot(cmblock)](#cvecdotcmblock)
    * [cvec.dot(cvblock)](#cvecdotcvblock)
    * [cvec.dot(crvblock)](#cvecdotcrvblock)
    * [cvec.asDiagonal()](#cvecasdiagonal)
    * [cvec.normalize()](#cvecnormalize)
* [Row Vector](#row-vector) **inherits from Matrix**
  * [Row Vector Class Methods](#row-vector-class-methods)
    * [RowVector(mat)](#rowvectormat)
    * [RowVector(vec)](#rowvectorvec)
    * [RowVector(rvec)](#rowvectorrvec)
    * [RowVector(mblock)](#rowvectormblock)
    * [RowVector(vblock)](#rowvectorvblock)
    * [RowVector(rvblock)](#rowvectorrvblock)
    * [RowVector(cols)](#rowvectorcols)
    * [RowVector(scalar_array)](#rowvectorscalar_array)
    * [RowVector.Constant(cols, scalar)](#rowvectorconstantcols-scalar)
    * [RowVector.Constant(cols, comp)](#rowvectorconstantcols-comp)
    * [RowVector.LinSpaced(size, low, high)](#rowvectorlinspacedsize-low-high)
  * [Row Vector Instance Methods](#row-vector-instance-methods)
    * [rvec.set(col, scalar)](#rvecsetcol-scalar)
    * [rvec.set(scalar_array)](#rvecsetscalar_array)
    * [rvec.get(col)](#rvecgetcol)
    * [rvec.setLinSpaced(low, high)](#rvecsetlinspacedlow-high)
    * [rvec.setLinSpaced(size, low, high)](#rvecsetlinspacedsize-low-high)
    * [rvec.block(startCol, blockCols)](#rvecblockstartcol-blockcols)
    * [rvec.head(n)](#rvecheadn)
    * [rvec.tail(n)](#rvectailn)
    * [rvec.dot(mat)](#rvecdotmat)
    * [rvec.dot(vec)](#rvecdotvec)
    * [rvec.dot(rvec)](#rvecdotrvec)
    * [rvec.dot(mblock)](#rvecdotmblock)
    * [rvec.dot(vblock)](#rvecdotvblock)
    * [rvec.dot(rvblock)](#rvecdotrvblock)
    * [rvec.dot(cmat)](#rvecdotcmat)
    * [rvec.dot(cvec)](#rvecdotcvec)
    * [rvec.dot(crvec)](#rvecdotcrvec)
    * [rvec.dot(cmblock)](#rvecdotcmblock)
    * [rvec.dot(cvblock)](#rvecdotcvblock)
    * [rvec.dot(crvblock)](#rvecdotcrvblock)
    * [rvec.asDiagonal()](#rvecasdiagonal)
    * [rvec.normalize()](#rvecnormalize)
    * [rvec.maxCoeff()](#rvecmaxcoeff)
    * [rvec.maxCoeff(obj)](#rvecmaxcoeffobj)
    * [rvec.maxCoeff(func)](#rvecmaxcoefffunc)
    * [rvec.minCoeff()](#rvecmincoeff)
    * [rvec.minCoeff(obj)](#rvecmincoeffobj)
    * [rvec.minCoeff(func)](#rvecmincoefffunc)
* [Complex Row Vector](#complex-row-vector) **inherits from CMatrix**
  * [Complex Row Vector Class Methods](#complex-row-vector-class-methods)
    * [CRowVector(mat)](#crowvectormat)
    * [CRowVector(vec)](#crowvectorvec)
    * [CRowVector(rvec)](#crowvectorrvec)
    * [CRowVector(mblock)](#crowvectormblock)
    * [CRowVector(vblock)](#crowvectorvblock)
    * [CRowVector(rvblock)](#crowvectorrvblock)
    * [CRowVector(cmat)](#crowvectorcmat)
    * [CRowVector(cvec)](#crowvectorcvec)
    * [CRowVector(crvec)](#crowvectorcrvec)
    * [CRowVector(cmblock)](#crowvectorcmblock)
    * [CRowVector(cvblock)](#crowvectorcvblock)
    * [CRowVector(crvblock)](#crowvectorcrvblock)
    * [CRowVector(cols)](#crowvectorcols)
    * [CRowVector(comp_array)](#crowvectorcomp_array)
    * [CRowVector.Constant(cols, scalar)](#crowvectorconstantcols-scalar)
    * [CRowVector.Constant(cols, comp)](#crowvectorconstantcols-comp)
  * [Complex Row Vector Instance Methods](#complex-row-vector-instance-methods)
    * [crvec.set(col, comp)](#crvecsetcol-comp)
    * [crvec.set(comp_array)](#crvecsetcomp_array)
    * [crvec.get(col)](#crvecgetcol)
    * [crvec.block(startCol, blockCols)](#crvecblockstartcol-blockcols)
    * [crvec.head(n)](#crvecheadn)
    * [crvec.tail(n)](#crvectailn)
    * [crvec.dot(mat)](#crvecdotmat)
    * [crvec.dot(vec)](#crvecdotvec)
    * [crvec.dot(rvec)](#crvecdotrvec)
    * [crvec.dot(mblock)](#crvecdotmblock)
    * [crvec.dot(vblock)](#crvecdotvblock)
    * [crvec.dot(rvblock)](#crvecdotrvblock)
    * [crvec.dot(cmat)](#crvecdotcmat)
    * [crvec.dot(cvec)](#crvecdotcvec)
    * [crvec.dot(crvec)](#crvecdotcrvec)
    * [crvec.dot(cmblock)](#crvecdotcmblock)
    * [crvec.dot(cvblock)](#crvecdotcvblock)
    * [crvec.dot(crvblock)](#crvecdotcrvblock)
    * [crvec.asDiagonal()](#crvecasdiagonal)
    * [crvec.normalize()](#crvecnormalize)
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
* [Partial Pivoting LU](#partial-pivoting-lu)
  * [Partial Pivoting LU Class Methods](#partial-pivoting-lu-class-methods)
    * [PartialPivLU(mat)](#partialpivlumat)
    * [PartialPivLU(mblock)](#partialpivlumblock)
  * [Partial Pivoting LU Instance Methods](#partial-pivoting-lu-instance-methods)
    * [pplu.permutationP()](#pplupermutationp)
    * [pplu.martixL()](#pplumatrixl)
    * [pplu.martixU()](#pplumatrixu)
    * [pplu.determinant()](#ppludeterminant)
    * [pplu.inverse()](#ppluinverse)
    * [pplu.solve(mat)](#pplusolvemat)
    * [pplu.solve(vec)](#pplusolvevec)
* [Complex Partial Pivoting LU](#complex-partial-pivoting-lu)
  * [Complex Partial Pivoting LU Class Methods](#complex-partial-pivoting-lu-class-methods)
    * [CPartialPivLU(cmat)](#cpartialpivlucmat)
    * [CPartialPivLU(cmblock)](#cpartialpivlucmblock)
  * [Complex Partial Pivoting LU Instance Methods](#complex-partial-pivoting-lu-instance-methods)
    * [cpplu.permutationP()](#cpplupermutationp)
    * [cpplu.martixL()](#cpplumatrixl)
    * [cpplu.martixU()](#cpplumatrixu)
    * [cpplu.determinant()](#cppludeterminant)
    * [cpplu.inverse()](#cppluinverse)
    * [cpplu.solve(cmat)](#cpplusolvecmat)
    * [cpplu.solve(cvec)](#cpplusolvecvec)
* [Full Pivoting LU](#full-pivoting-lu)
  * [Full Pivoting LU Class Methods](#full-pivoting-lu-class-methods)
    * [FullPivLU(mat)](#fullpivlumat)
    * [FullPivLU(mblock)](#fullpivlumblock)
  * [Full Pivoting LU Instance Methods](#full-pivoting-lu-instance-methods)
    * [fplu.permutationP()](#fplupermutationp)
    * [fplu.permutationQ()](#fplupermutationq)
    * [fplu.martixL()](#fplumatrixl)
    * [fplu.martixU()](#fplumatrixu)
    * [fplu.determinant()](#fpludeterminant)
    * [fplu.inverse()](#fpluinverse)
    * [fplu.isInvertible()](#fpluisinvertible)
    * [fplu.solve(mat)](#fplusolvemat)
    * [fplu.solve(vec)](#fplusolvevec)
    * [fplu.rank()](#fplurank)
    * [fplu.dimensionOfKernel()](#fpludimensionofkernel)
    * [fplu.kernel()](#fplukernel)
* [Complex Full Pivoting LU](#complex-full-pivoting-lu)
  * [Complex Full Pivoting LU Class Methods](#complex-full-pivoting-lu-class-methods)
    * [CFullPivLU(cmat)](#cfullpivlucmat)
    * [CFullPivLU(cmblock)](#cfullpivlucmblock)
  * [Complex Full Pivoting LU Instance Methods](#complex-full-pivoting-lu-instance-methods)
    * [cfplu.permutationP()](#cfplupermutationp)
    * [cfplu.permutationQ()](#cfplupermutationq)
    * [cfplu.martixL()](#cfplumatrixl)
    * [cfplu.martixU()](#cfplumatrixu)
    * [cfplu.determinant()](#cfpludeterminant)
    * [cfplu.inverse()](#cfpluinverse)
    * [cfplu.isInvertible()](#cfpluisinvertible)
    * [cfplu.solve(cmat)](#cfplusolvecmat)
    * [cfplu.solve(cvec)](#cfplusolvecvec)
    * [cfplu.rank()](#cfplurank)
    * [cfplu.dimensionOfKernel()](#cfpludimensionofkernel)
    * [cfplu.kernel()](#cfplukernel)

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
#### comp.mul(vec)
#### comp.mul(rvec)
#### comp.mul(mblock)
#### comp.mul(vblock)
#### comp.mul(rvblock)
#### comp.mul(cmat)
#### comp.mul(cvec)
#### comp.mul(crvec)
#### comp.mul(cmblock)
#### comp.mul(cvblock)
#### comp.mul(crvblock)

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

#### comp.equals(scalar)
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

#### Matrix(mat)
#### Matrix(vec)
#### Matrix(rvec)
#### Matrix(mblock)
#### Matrix(vblock)
#### Matrix(rvblock)

```js
var M = require('eigenjs').Matrix
  , mat = new M.Random(2, 3)
  , mat2 = new M(mat);
console.log('mat =\n%s\n', mat);
console.log('mat2 =\n%s', mat2);
```

```txt
mat =
  0.381981  -0.373117  -0.866239
-0.0467884  -0.981309  -0.885573

mat2 =
  0.381981  -0.373117  -0.866239
-0.0467884  -0.981309  -0.885573
```

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

#### mat.value()

Returns the unique coefficient of a 1x1 expression

```js
var M = require('eigenjs').Matrix
  , mat = M.Random(1, 1);
console.log('%d', mat.value());
```

```txt
-0.7131525574778916
```

#### mat.setZero()

```js
var M = require('eigenjs').Matrix
  , mat = new M.Random(3, 3);
console.log('mat =\n%s\n', mat);
console.log('mat =\n%s', mat.setZero());
```

```txt
mat =
 0.244911 -0.752925 -0.562905
 0.215088 -0.406688 -0.750836
 0.983236  0.800109  0.695126

mat =
0 0 0
0 0 0
0 0 0
```

#### mat.setOnes()

```js
var M = require('eigenjs').Matrix
  , mat = new M.Zero(3, 3);
console.log('mat =\n%s\n', mat);
console.log('mat =\n%s', mat.setOnes());
```

```txt
mat =
0 0 0
0 0 0
0 0 0

mat =
1 1 1
1 1 1
1 1 1
```

#### mat.setConstant(scalar)


```js
var M = require('eigenjs').Matrix
  , mat = new M.Zero(3, 3);
console.log('mat =\n%s\n', mat);
console.log('mat =\n%s', mat.setConstant(0.6));
```

```txt
mat =
0 0 0
0 0 0
0 0 0

mat =
0.6 0.6 0.6
0.6 0.6 0.6
0.6 0.6 0.6
```

#### mat.setRandom()

```js
var M = require('eigenjs').Matrix
  , mat = new M.Zero(3, 3);
console.log('mat =\n%s\n', mat);
console.log('mat =\n%s', mat.setRandom());
```

```txt
mat =
0 0 0
0 0 0
0 0 0

mat =
 -0.292434 -0.0673437   0.283946
 -0.938224   0.154289   0.283845
 -0.725773  -0.862362   0.583097
```

#### mat.setIdentity()

```js
var M = require('eigenjs').Matrix
  , mat = new M.Zero(3, 3);
console.log('mat =\n%s\n', mat);
console.log('mat =\n%s', mat.setIdentity());
```

```txt
mat =
0 0 0
0 0 0
0 0 0

mat =
1 0 0
0 1 0
0 0 1
```

#### mat.setDiagonal(index, vec)
#### mat.setDiagonal(index, rvec)

```js
var M = require('eigenjs').Matrix
  , mat = new M.Zero(3, 3)
  , dia = mat.diagonal(1);
console.log('mat =\n%s\n', mat);
dia.setRandom();
console.log('mat =\n%s', mat.setDiagonal(1, dia));
```

```txt
mat =
0 0 0
0 0 0
0 0 0

mat =
        0 -0.294006         0
        0         0  0.634569
        0         0         0
```

#### mat.block(startRow, startCol, blockRows, blockCols)

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

#### mat.row(n)

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

#### mat.col(n)

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

#### mat.topRows(n)

Returns a block consisting of the top rows of *this.

```js
var M = require('eigenjs').Matrix
  , mat = new M(4, 4).set([
             7,  9, -5,  3,
            -2, -6,  1,  0,
             6, -3,  0,  9,
             6,  6,  3,  9
          ]);
console.log('%s', mat.topRows(2));
```

```txt
 7  9 -5  3
-2 -6  1  0
```

#### mat.bottomRows(n)

Returns a block consisting of the bottom rows of *this.

```js
var M = require('eigenjs').Matrix
  , mat = new M(4, 4).set([
             7,  9, -5,  3,
            -2, -6,  1,  0,
             6, -3,  0,  9,
             6,  6,  3,  9
          ]);
console.log('%s', mat.bottomRows(2));
```

```txt
 6 -3  0  9
 6  6  3  9
```

#### mat.middleRows(startRow, n)

Returns a block consisting of a range of rows of *this.

```js
var M = require('eigenjs').Matrix
  , mat = new M(4, 4).set([
             7,  9, -5,  3,
            -2, -6,  1,  0,
             6, -3,  0,  9,
             6,  6,  3,  9
          ]);
console.log('%s', mat.middleRows(1, 2));
```

```txt
-2 -6  1  0
 6 -3  0  9
```

#### mat.leftCols(n)

Returns a block consisting of the left columns of *this.

```js
var M = require('eigenjs').Matrix
  , mat = new M(4, 4).set([
             7,  9, -5,  3,
            -2, -6,  1,  0,
             6, -3,  0,  9,
             6,  6,  3,  9
          ]);
console.log('%s', mat.leftCols(2));
```

```txt
 7  9
-2 -6
 6 -3
 6  6
```

#### mat.rightCols(n)

Returns a block consisting of the right columns of *this.

```js
var M = require('eigenjs').Matrix
  , mat = new M(4, 4).set([
             7,  9, -5,  3,
            -2, -6,  1,  0,
             6, -3,  0,  9,
             6,  6,  3,  9
          ]);
console.log('%s', mat.rightCols(2));
```

```txt
-5  3
 1  0
 0  9
 3  9
```

#### mat.middleCols(startCol, n)

Returns a block consisting of a range of columns of *this.

```js
var M = require('eigenjs').Matrix
  , mat = new M(4, 4).set([
             7,  9, -5,  3,
            -2, -6,  1,  0,
             6, -3,  0,  9,
             6,  6,  3,  9
          ]);
console.log('%s', mat.middleCols(1, 2));
```

```txt
 9 -5
-6  1
-3  0
 6  3
```

#### mat.topLeftCorner(cRows, cCols)

Returns a block consisting of a top-left corner of *this.

```js
var M = require('eigenjs').Matrix
  , mat = new M(4, 4).set([
             7,  9, -5,  3,
            -2, -6,  1,  0,
             6, -3,  0,  9,
             6,  6,  3,  9
          ]);
console.log('%s', mat.topLeftCorner(2, 2));
```

```txt
 7  9
-2 -6
```

#### mat.topRightCorner(cRows, cCols)

Returns a block consisting of a top-right corner of *this.

```js
var M = require('eigenjs').Matrix
  , mat = new M(4, 4).set([
             7,  9, -5,  3,
            -2, -6,  1,  0,
             6, -3,  0,  9,
             6,  6,  3,  9
          ]);
console.log('%s', mat.topRightCorner(2, 2));
```

```txt
-5  3
 1  0
```

#### mat.bottomLeftCorner(cRows, cCols)

Returns a block consisting of a bottom-left corner of *this.

```js
var M = require('eigenjs').Matrix
  , mat = new M(4, 4).set([
             7,  9, -5,  3,
            -2, -6,  1,  0,
             6, -3,  0,  9,
             6,  6,  3,  9
          ]);
console.log('%s', mat.bottomLeftCorner(2, 2));
```

```txt
 6 -3
 6  6
```

#### mat.bottomRightCorner(cRows, cCols)

Returns a block consisting of a bottom-right corner of *this.

```js
var M = require('eigenjs').Matrix
  , mat = new M(4, 4).set([
             7,  9, -5,  3,
            -2, -6,  1,  0,
             6, -3,  0,  9,
             6,  6,  3,  9
          ]);
console.log('%s', mat.bottomRightCorner(2, 2));
```

```txt
0 9
3 9
```

#### mat.replicate(rowFactor, colFactor)

```js
var M = require('eigenjs').Matrix
  , mat = new M(3, 1).set([
             7,
            -2,
             6
          ]);
console.log('%s', mat.replicate(2, 5));
```

```txt
 7  7  7  7  7
-2 -2 -2 -2 -2
 6  6  6  6  6
 7  7  7  7  7
-2 -2 -2 -2 -2
 6  6  6  6  6
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

Returns the determinant of this matrix. This method uses class [PartialPivLU](#partial-pivoting-lu).

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

Returns the matrix inverse of this matrix. This method uses class [PartialPivLU](#partial-pivoting-lu).

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

#### mat.norm()

Returns the Frobenius norm.

```js
var M = require('eigenjs').Matrix
  , mat = new M(3, 3).set([
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
          ]);
console.log('%d', mat.norm());
```

```txt
16.881943016134134
```

#### mat.redux(func)

* func `Function` The result of a full redux operation on the whoie matrix or vector using `func`.

```js
var M = require('eigenjs').Matrix
  , mat = new M(3, 3).set([
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
          ])
  , func = function(a, b) { return a + b; };
console.log('%d', mat.redux(func));
```

```txt
45
```

#### mat.sum()

```js
var M = require('eigenjs').Matrix
  , mat = new M(3, 3).set([
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
          ]);
console.log('%d', mat.sum());
```

```txt
45
```

#### mat.prod()

```js
var M = require('eigenjs').Matrix
  , mat = new M(3, 3).set([
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
          ]);
console.log('%d', mat.prod());
```

```txt
362880
```

#### mat.mean()

```js
var M = require('eigenjs').Matrix
  , mat = new M(3, 3).set([
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
          ]);
console.log('%d', mat.mean());
```

```txt
5
```

#### mat.visit(func)

* func `Function` Applies the `func` to the whole coefficients of the matrix or vector.

```js
var M = require('eigenjs').Matrix
  , mat = new M(3, 3).set([
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
          ]);
mat.visit(function(value, row, col) {
  console.log('mat(%d, %d) = %d', row, col, value);
});
```

```txt
mat(0, 0) = 1
mat(1, 0) = 4
mat(2, 0) = 7
mat(0, 1) = 2
mat(1, 1) = 5
mat(2, 1) = 8
mat(0, 2) = 3
mat(1, 2) = 6
mat(2, 2) = 9
```

#### mat.maxCoeff()

```js
var M = require('eigenjs').Matrix
  , mat = new M.Random(3, 3);
console.log('mat = \n%s\n', mat);
console.log('max = %d', mat.maxCoeff());
```

```txt
mat =
  0.175793  -0.547068  -0.959701
  0.561311  -0.579446   0.297471
-0.0382309  -0.743676  -0.411312

max = 0.5613114636211243
```

#### mat.maxCoeff(obj)

+ obj `Object`

```js
var M = require('eigenjs').Matrix
  , mat = new M.Random(3, 3)
  , obj = {};
console.log('mat = \n%s\n', mat);
console.log('max = %s', mat.maxCoeff(obj));
console.log('obj = %s', JSON.stringify(obj));
```

```txt
mat =
 -0.68294  0.690895 -0.698356
-0.174138 -0.119934  0.733219
-0.743578  0.262349 -0.795382

max = 0.7332185766348702
obj = {"maxCoeff":0.7332185766348702,"rowId":1,"colId":2}
```

#### mat.maxCoeff(func)

+ func `Function`

```js
var M = require('eigenjs').Matrix
  , mat = new M.Random(3, 3)
  , func = function(rowId, colId) {
             console.log('rowId = %d, colId = %d', rowId, colId);
           };
console.log('mat = \n%s\n', mat);
console.log('max = %d', mat.maxCoeff(func));
```

```txt
mat =
-0.552622 -0.355055  0.141004
0.0814275   0.58272  -0.13819
 0.552011 -0.217758 -0.551142

rowId = 1, colId = 1
max = 0.5827204285109044
```

#### mat.minCoeff()

```js
var M = require('eigenjs').Matrix
  , mat = new M.Random(3, 3);
console.log('mat = \n%s\n', mat);
console.log('min = %d', mat.minCoeff());
```

```txt
mat =
-0.725041  0.511321   0.29833
 0.233345  -0.22101 0.0355704
-0.167162 -0.514649 -0.168438

min = -0.7250411527813604
```

#### mat.minCoeff(obj)

+ obj `Object`

```js
var M = require('eigenjs').Matrix
  , mat = new M.Random(3, 3)
  , obj = {};
console.log('mat = \n%s\n', mat);
console.log('min = %d', mat.minCoeff(obj));
console.log('obj = %s', JSON.stringify(obj));
```

```txt
mat =
  0.74568  0.870563  -0.82341
 0.636928 -0.455949  0.944912
 0.855648  0.872564  -0.87055

min = -0.8705498761825962
obj = {"minCoeff":-0.8705498761825962,"rowId":2,"colId":2}
```

#### mat.minCoeff(func)

+ func `Function`

```js
var M = require('eigenjs').Matrix
  , mat = new M.Random(3, 3)
  , func = function(rowId, colId) {
             console.log('rowId = %d, colId = %d', rowId, colId);
           };
console.log('mat = \n%s\n', mat);
console.log('min = %d', mat.minCoeff(func));
```

```txt
 0.371743  0.261372  0.144462
-0.111958  0.884582  -0.02937
 0.314765 -0.823458  0.378298

rowId = 2, colId = 1
min = -0.8234578174648144
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

#### mat.all()

Returns true if all coefficients are true.

```js
var M = require('eigenjs').Matrix
  , mat = new M.Constant(3, 3, 1);
console.log('mat = \n%s\n%s\n', mat, mat.all());
mat.set(0, 0, 0);
console.log('mat = \n%s\n%s', mat, mat.all());
```

```txt
mat =
1 1 1
1 1 1
1 1 1
true

mat =
0 1 1
1 1 1
1 1 1
false
```

#### mat.any()

Returns true if at least one coefficient is true.

```js
var M = require('eigenjs').Matrix
  , mat = new M.Zero(3, 3);
console.log('mat = \n%s\n%s\n', mat, mat.any());
mat.set(0, 0, 1);
console.log('mat = \n%s\n%s', mat, mat.any());
```

```txt
mat =
0 0 0
0 0 0
0 0 0
false

mat =
1 0 0
0 0 0
0 0 0
true
```

#### mat.count()

Returns the number of coefficients which evaluate to true.

```js
var M = require('eigenjs').Matrix
  , mat = new M.Zero(3, 3);
mat.block(0, 1, 3, 2).setOnes();
console.log('mat = \n%s\n', mat);
console.log('%d', mat.count());
```

```txt
mat =
0 1 1
0 1 1
0 1 1

6
```

#### mat.allFinite()

Returns true if *this contains only finite numbers, i.e., no NaN and no +/-INF values.

```js
var M = require('eigenjs').Matrix
  , mat = new M.Random(3, 3);
console.log('mat = \n%s\n%s\n', mat, mat.allFinite());
mat.set(0, 0, Infinity);
console.log('mat = \n%s\n%s', mat, mat.allFinite());
```

```txt
mat =
 0.202332  0.271506 -0.887678
 0.592388 -0.806422  0.799406
  0.26443  0.461303 -0.389755
true

mat =
      inf  0.271506 -0.887678
 0.592388 -0.806422  0.799406
  0.26443  0.461303 -0.389755
false
```

#### mat.hasNaN()

Returns true if *this contains at least one Not A Number (NaN).

```js
var M = require('eigenjs').Matrix
  , mat = new M.Zero(3, 3);
console.log('mat = \n%s\n%s\n', mat, mat.hasNaN());
mat.set(1, 1, NaN);
console.log('mat = \n%s\n%s', mat, mat.hasNaN());
```

```txt
mat =
0 0 0
0 0 0
0 0 0
false

mat =
  0   0   0
  0 nan   0
  0   0   0
true
```

#### mat.partialPivLu()

Returns the partial-pivoting LU decomposition of *this.

```js
var M = require('eigenjs').Matrix
  , mat = new M(3, 3).set([
            1, 4, 5,
            4, 2, 6,
            5, 6, 3
          ])
  , pplu = mat.partialPivLu();
console.log('P = \n%s\n', pplu.permutationP());
console.log('L = \n%s\n', pplu.matrixL());
console.log('U = \n%s', pplu.matrixU());
```

```txt
P =
0 0 1
0 1 0
1 0 0

L =
  1   0   0
0.8   1   0
0.2  -1   1

U =
   5    6    3
   0 -2.8  3.6
   0    0    8
```

#### mat.fullPivLu()

Returns the full-pivoting LU decomposition of *this.

```js
var M = require('eigenjs').Matrix
  , mat = new M(2, 4).set([
             1,  1,  1,  3,
             1,  2, -1,  4
          ])
  , fplu = mat.fullPivLu();
console.log('P = \n%s\n', fplu.permutationP());
console.log('L = \n%s\n', fplu.matrixL());
console.log('U = \n%s\n', fplu.matrixU());
console.log('Q = \n%s', fplu.permutationQ());
```

```txt
P =
0 1
1 0

L =
   1    0
0.75    1

U =
   4   -1    2    1
   0 1.75 -0.5 0.25

Q =
0 0 0 1
0 0 1 0
0 1 0 0
1 0 0 0
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
console.log('mat =\n%s\n', mat.toString());
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

#### CMatrix(mat)
#### CMatrix(vec)
#### CMatrix(rvec)
#### CMatrix(mblock)
#### CMatrix(vblock)
#### CMatrix(rvblock)
#### CMatrix(cmat)
#### CMatrix(cvec)
#### CMatrix(crvec)
#### CMatrix(cmblock)
#### CMatrix(cvblock)
#### CMatrix(crvblock)

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM.Random(2, 3)
  , cmat2 = new CM(cmat);
console.log('cmat =\n%s\n', cmat);
console.log('cmat2 =\n%s', cmat2);
```

```txt
cmat =
 (-0.947988,-0.839555) (-0.502409,0.00732418)   (0.402069,-0.422384)
   (-0.40669,0.758583)   (-0.902474,0.124615)  (0.992439,-0.0813283)

cmat2 =
 (-0.947988,-0.839555) (-0.502409,0.00732418)   (0.402069,-0.422384)
   (-0.40669,0.758583)   (-0.902474,0.124615)  (0.992439,-0.0813283)
```

#### CMatrix(rows, cols)

```js
var CM = require('eigenjs').CMatrix
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

### Complex Matrix Instance Methods

#### cmat.rows()
#### cmat.cols()

```js
var CM = require('eigenjs').CMatrix
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

#### cmat.value()

Returns the unique coefficient of a 1x1 expression

```js
var CM = require('eigenjs').CMatrix
  , cmat = CM.Random(1, 1);
console.log('%s', cmat.value());
```

```txt
(-0.402467,-0.259974)
```

#### cmat.setZero()

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM.Random(3, 3);
console.log('cmat =\n%s\n', cmat);
console.log('cmat =\n%s', cmat.setZero());
```

```txt
cmat =
  (0.828056,-0.856655)  (0.192893,-0.0390696)   (-0.477729,0.812314)
   (0.200923,0.904817)  (-0.643549,-0.129635)    (0.566937,0.514797)
(-0.740525,0.00155845)   (-0.780958,0.437884)    (0.194337,0.223802)

cmat =
(0,0) (0,0) (0,0)
(0,0) (0,0) (0,0)
(0,0) (0,0) (0,0)
```

#### cmat.setOnes()

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM.Zero(3, 3);
console.log('cmat =\n%s\n', cmat);
console.log('cmat =\n%s', cmat.setOnes());
```

```txt
cmat =
(0,0) (0,0) (0,0)
(0,0) (0,0) (0,0)
(0,0) (0,0) (0,0)

cmat =
(1,0) (1,0) (1,0)
(1,0) (1,0) (1,0)
(1,0) (1,0) (1,0)
```

#### cmat.setConstant(scalar)
#### cmat.setConstant(comp)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat = new CM.Zero(3, 3);
console.log('cmat =\n%s\n', cmat);
console.log('cmat =\n%s', cmat.setConstant(C(6, 8)));
```

```txt
cmat =
(0,0) (0,0) (0,0)
(0,0) (0,0) (0,0)
(0,0) (0,0) (0,0)

cmat =
(6,8) (6,8) (6,8)
(6,8) (6,8) (6,8)
(6,8) (6,8) (6,8)
```

#### cmat.setRandom()

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM.Zero(3, 3);
console.log('cmat =\n%s\n', cmat);
console.log('cmat =\n%s', cmat.setRandom());
```

```txt
cmat =
(0,0) (0,0) (0,0)
(0,0) (0,0) (0,0)
(0,0) (0,0) (0,0)

cmat =
   (0.298345,0.285858)   (-0.693147,0.286686)  (-0.91605,-0.0576106)
  (0.410026,-0.685715)     (0.33597,0.656071)   (-0.261633,0.736407)
(-0.808358,-0.0710831)    (0.588954,0.544957)   (0.800236,-0.434336)
```

#### mat.setIdentity()

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM.Zero(3, 3);
console.log('cmat =\n%s\n', cmat);
console.log('cmat =\n%s', cmat.setIdentity());
```

```txt
cmat =
(0,0) (0,0) (0,0)
(0,0) (0,0) (0,0)
(0,0) (0,0) (0,0)

cmat =
(1,0) (0,0) (0,0)
(0,0) (1,0) (0,0)
(0,0) (0,0) (1,0)
```

#### mat.setDiagonal(index, vec)
#### mat.setDiagonal(index, rvec)
#### mat.setDiagonal(index, cvec)
#### mat.setDiagonal(index, crvec)

```js
var CM = require('eigenjs').CMatrix
  , cmat = new M.Random(3, 3)
  , dia = cmat.diagonal(1);
console.log('cmat = \n%s\n', cmat);
dia.setZero();
console.log('cmat =\n%s', cmat.setDiagonal(1, dia));
```

```txt
cmat =
 0.103146  0.540894  0.490517
-0.433484  0.804028  0.127162
 0.438421 -0.707295 -0.785343

cmat =
 0.103146         0  0.490517
-0.433484  0.804028         0
 0.438421 -0.707295 -0.785343
```

#### cmat.block(startRow, startCol, blockRows, blockCols)

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

#### cmat.row(n)

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

#### cmat.col(n)

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

#### cmat.topRows(n)

Returns a block consisting of the top rows of *this.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(4, 2).set([
             C( 1,  2), C( 3,  4),
             C( 5,  6), C( 7,  8),
             C( 9, 10), C(11, 12),
             C(13, 14), C(15, 16)
           ]);
console.log('%s', cmat.topRows(2));
```

```txt
(1,2) (3,4)
(5,6) (7,8)
```

#### cmat.bottomRows(n)

Returns a block consisting of the bottom rows of *this.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(4, 2).set([
             C( 1,  2), C( 3,  4),
             C( 5,  6), C( 7,  8),
             C( 9, 10), C(11, 12),
             C(13, 14), C(15, 16)
           ]);
console.log('%s', cmat.bottomRows(2));
```

```txt
 (9,10) (11,12)
(13,14) (15,16)
```

#### cmat.middleRows(startRow, n)

Returns a block consisting of a range of rows of *this.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(4, 2).set([
             C( 1,  2), C( 3,  4),
             C( 5,  6), C( 7,  8),
             C( 9, 10), C(11, 12),
             C(13, 14), C(15, 16)
           ]);
console.log('%s', cmat.middleRows(1, 2));
```

```txt
  (5,6)   (7,8)
 (9,10) (11,12)
```

#### cmat.leftCols(n)

Returns a block consisting of the left columns of *this.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(4, 2).set([
             C( 1,  2), C( 3,  4),
             C( 5,  6), C( 7,  8),
             C( 9, 10), C(11, 12),
             C(13, 14), C(15, 16)
           ]);
console.log('%s', cmat.leftCols(1));
```

```txt
  (1,2)
  (5,6)
 (9,10)
(13,14)
```

#### cmat.rightCols(n)

Returns a block consisting of the right columns of *this.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(4, 2).set([
             C( 1,  2), C( 3,  4),
             C( 5,  6), C( 7,  8),
             C( 9, 10), C(11, 12),
             C(13, 14), C(15, 16)
           ]);
console.log('%s', cmat.rightCols(1));
```

```txt
  (3,4)
  (7,8)
(11,12)
(15,16)
```

#### cmat.middleCols(startCol, n)

Returns a block consisting of a range of columns of *this.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(4, 2).set([
             C( 1,  2), C( 3,  4),
             C( 5,  6), C( 7,  8),
             C( 9, 10), C(11, 12),
             C(13, 14), C(15, 16)
           ]);
console.log('%s', cmat.middleCols(1, 1));
```

```txt
  (3,4)
  (7,8)
(11,12)
(15,16)
```

#### cmat.topLeftCorner(cRows, cCols)

Returns a block consisting of a top-left corner of *this.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(4, 2).set([
             C( 1,  2), C( 3,  4),
             C( 5,  6), C( 7,  8),
             C( 9, 10), C(11, 12),
             C(13, 14), C(15, 16)
           ]);
console.log('%s', cmat.topLeftCorner(2, 1));
```

```txt
(1,2)
(5,6)
```

#### cmat.topRightCorner(cRows, cCols)

Returns a block consisting of a top-right corner of *this.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(4, 2).set([
             C( 1,  2), C( 3,  4),
             C( 5,  6), C( 7,  8),
             C( 9, 10), C(11, 12),
             C(13, 14), C(15, 16)
           ]);
console.log('%s', cmat.topRightCorner(2, 1));
```

```txt
(3,4)
(7,8)
```

#### cmat.bottomLeftCorner(cRows, cCols)

Returns a block consisting of a bottom-left corner of *this.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(4, 2).set([
             C( 1,  2), C( 3,  4),
             C( 5,  6), C( 7,  8),
             C( 9, 10), C(11, 12),
             C(13, 14), C(15, 16)
           ]);
console.log('%s', cmat.bottomLeftCorner(2, 1));
```

```txt
 (9,10)
(13,14)
```

#### cmat.bottomRightCorner(cRows, cCols)

Returns a block consisting of a bottom-right corner of *this.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(4, 2).set([
             C( 1,  2), C( 3,  4),
             C( 5,  6), C( 7,  8),
             C( 9, 10), C(11, 12),
             C(13, 14), C(15, 16)
           ]);
console.log('%s', cmat.bottomRightCorner(2, 1));
```

```txt
(11,12)
(15,16)
```

#### cmat.replicate(rowFactor, colFactor)

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(3, 1).set([
             7,
            -2,
             6
           ]);
console.log('%s', cmat.replicate(2, 5));
```

```txt
 (7,0)  (7,0)  (7,0)  (7,0)  (7,0)
(-2,0) (-2,0) (-2,0) (-2,0) (-2,0)
 (6,0)  (6,0)  (6,0)  (6,0)  (6,0)
 (7,0)  (7,0)  (7,0)  (7,0)  (7,0)
(-2,0) (-2,0) (-2,0) (-2,0) (-2,0)
 (6,0)  (6,0)  (6,0)  (6,0)  (6,0)
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

Returns the determinant of this matrix. This method uses class [CPartialPivLU](#cpartial-pivoting-lu).

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

Returns the matrix inverse of this matrix. This method uses class [CPartialPivLU](#cpartial-pivoting-lu).

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

#### cmat.norm()

Returns the Frobenius norm.

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat = new CM(2, 2).set([
             C(1, 2), C(3, 4),
             C(5, 6), C(7, 9)
           ]);
console.log('%d', cmat.norm());
```

```txt
14.866068747318506
```

#### cmat.redux(func)

* func `Function` The result of a full redux operation on the whoie matrix or vector using `func`.

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat = new CM(2, 2).set([
            C(1, 2), C(3, 4),
            C(5, 6), C(7, 8)
           ])
  , func = function(a, b) { return a.add(b); };
console.log('%s', cmat.redux(func));
```

```txt
(16,20)
```

#### cmat.sum()

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat = new CM(2, 2).set([
            C(1, 2), C(3, 4),
            C(5, 6), C(7, 8)
           ]);
console.log('%s', cmat.sum());
```

```txt
(16,20)
```

#### cmat.prod()

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat = new CM(2, 2).set([
            C(1, 2), C(3, 4),
            C(5, 6), C(7, 8)
           ]);
console.log('%s', cmat.prod());
```

```txt
(-755,-540)
```

#### cmat.mean()

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CM = Eigen.CMatrix
  , cmat = new CM(2, 2).set([
            C(1, 2), C(3, 4),
            C(5, 6), C(7, 8)
           ]);
console.log('%s', cmat.mean());
```

```txt
(4,5)
```

#### cmat.visit(func)

* func `Function` Applies the `func` to the whole coefficients of the matrix or vector.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(3, 3).set([
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
           ]);
cmat.visit(function(value, row, col) {
  console.log('cmat(%d, %d) = %s', row, col, value);
});
```

```txt
cmat(0, 0) = (1,0)
cmat(1, 0) = (4,0)
cmat(2, 0) = (7,0)
cmat(0, 1) = (2,0)
cmat(1, 1) = (5,0)
cmat(2, 1) = (8,0)
cmat(0, 2) = (3,0)
cmat(1, 2) = (6,0)
cmat(2, 2) = (9,0)
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

#### cmat.allFinite()

Returns true if *this contains only finite numbers, i.e., no NaN and no +/-INF values.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM.Random(3, 3);
console.log('cmat = \n%s\n%s\n', cmat, cmat.allFinite());
cmat.set(0, 0, Infinity);
console.log('cmat = \n%s\n%s', cmat, cmat.allFinite());
```

```txt
cmat =
 (-0.0193897,0.117036)  (-0.236475,-0.431972)    (0.261242,0.687658)
 (-0.982734,-0.815806)  (-0.153287,-0.292975)  (-0.532892,-0.314321)
  (0.750476,-0.742562) (-0.0286768,0.0286941)   (-0.790602,0.352619)
true

cmat =
               (inf,0)  (-0.236475,-0.431972)    (0.261242,0.687658)
 (-0.982734,-0.815806)  (-0.153287,-0.292975)  (-0.532892,-0.314321)
  (0.750476,-0.742562) (-0.0286768,0.0286941)   (-0.790602,0.352619)
false
```

#### cmat.hasNaN()

Returns true if *this contains at least one Not A Number (NaN).

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM.Zero(3, 3);
console.log('cmat = \n%s\n%s\n', cmat, cmat.hasNaN());
cmat.set(1, 1, NaN);
console.log('cmat = \n%s\n%s', cmat, cmat.hasNaN());
```

```txt
cmat =
(0,0) (0,0) (0,0)
(0,0) (0,0) (0,0)
(0,0) (0,0) (0,0)
false

cmat =
  (0,0)   (0,0)   (0,0)
  (0,0) (nan,0)   (0,0)
  (0,0)   (0,0)   (0,0)
true
```

#### cmat.partialPivLu()

Returns the partial-pivoting LU decomposition of *this.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(3, 3).set([
             1, 4, 5,
             4, 2, 6,
             5, 6, 3
           ])
  , cpplu = cmat.partialPivLu();
console.log('P = \n%s\n', cpplu.permutationP());
console.log('L = \n%s\n', cpplu.matrixL());
console.log('U = \n%s', cpplu.matrixU());
```

```txt
P =
(0,0) (0,0) (1,0)
(0,0) (1,0) (0,0)
(1,0) (0,0) (0,0)

L =
  (1,0)   (0,0)   (0,0)
(0.8,0)   (1,0)   (0,0)
(0.2,0) (-1,-0)   (1,0)

U =
   (5,0)    (6,0)    (3,0)
   (0,0) (-2.8,0)  (3.6,0)
   (0,0)    (0,0)    (8,0)
```

#### cmat.fullPivLu()

Returns the full-pivoting LU decomposition of *this.

```js
var CM = require('eigenjs').CMatrix
  , cmat = new CM(2, 4).set([
              1,  1,  1,  3,
              1,  2, -1,  4
           ])
  , cfplu = cmat.fullPivLu();
console.log('P = \n%s\n', cfplu.permutationP());
console.log('L = \n%s\n', cfplu.matrixL());
console.log('U = \n%s\n', cfplu.matrixU());
console.log('Q = \n%s', cfplu.permutationQ());
```

```txt
P =
(0,0) (1,0)
(1,0) (0,0)

L =
   (1,0)    (0,0)
(0.75,0)    (1,0)

U =
   (4,0)   (-1,0)    (2,0)    (1,0)
   (0,0) (1.75,0) (-0.5,0) (0.25,0)

Q =
(0,0) (0,0) (0,0) (1,0)
(0,0) (0,0) (1,0) (0,0)
(0,0) (1,0) (0,0) (0,0)
(1,0) (0,0) (0,0) (0,0)
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
console.log('cmat =\n%s\n', cmat.toString());
console.log('cmat =\n' + cmat.toString(octavefmt));
```

```txt
cmat =
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

#### Vector(mat)
#### Vector(vec)
#### Vector(rvec)
#### Vector(mblock)
#### Vector(vblock)
#### Vector(rvblock)

```js
var V = require('eigenjs').Vector
  , vec = new V.Random(3)
  , vec2 = new V(vec);
console.log('vec = \n%s\n', vec);
console.log('vec2 = \n%s', vec2);
```

```txt
vec =
-0.777518
  0.25226
-0.262954

vec2 =
-0.777518
  0.25226
-0.262954
```

#### Vector(rows)

```js
var V = require('eigenjs').Vector
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
var V = require('eigenjs').Vector
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

#### Vector.LinSpaced(size, low, high)

Sets a linearly space vector.

```js
var V = require('eigenjs').Vector
  , vec = V.LinSpaced(5, 0, 1);
console.log('vec = \n%s', vec);
```

```txt
vec =
   0
0.25
 0.5
0.75
   1
```

### Vector Instance Methods

#### vec.set(row, scalar)

```js
var V = require('eigenjs').Vector
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
var V = require('eigenjs').Vector
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
var V = require('eigenjs').Vector
  , vec = new V([1,
                 2,
                 3]);
console.log(vec.get(0));
console.log(vec.get(1));
console.log(vec.get(2));
```

```txt
1
2
3
```

#### vec.setLinSpaced(low, high)

Sets a linearly space vector.

```js
var V = require('eigenjs').Vector
  , vec = new V.Zero(5);
console.log('vec = \n%s\n', vec);
vec.setLinSpaced(0, 1);
console.log('vec = \n%s', vec);
```

```txt
vec =
0
0
0
0
0

vec =
   0
0.25
 0.5
0.75
   1
```

#### vec.setLinSpaced(size, low, high)

Sets a linearly space vector.

```js
var V = require('eigenjs').Vector
  , vec = new V.Random(3);
console.log('vec = \n%s\n', vec);
vec.setLinSpaced(5, 0, 1);
console.log('vec = \n%s', vec);
```

```txt
vec =
-0.498866
-0.440048
 0.118123

vec =
   0
0.25
 0.5
0.75
   1
```

#### vec.block(startRow, blockRows)

```js
var V = require('eigenjs').Vector
  , vec = new V([1,
                 2,
                 3,
                 4])
  , vblock = vec.block(1, 2);
console.log('vblock = \n%s', vblock);
```

```txt
vblock =
2
3
```

#### vec.head(n)

```js
var V = require('eigenjs').Vector
  , vec = new V([1,
                 2,
                 3,
                 4])
  , vblock = vec.head(2);
console.log('vblock = \n%s', vblock);
```

```txt
vblock =
1
2
```

#### vec.tail(n)

```js
var V = require('eigenjs').Vector
  , vec = new V([1,
                 2,
                 3,
                 4])
  , vblock = vec.tail(2);
console.log('vblock = \n%s', vblock);
```

```txt
vblock =
3
4
```

#### vec.dot(mat)
#### vec.dot(vec)
#### vec.dot(rvec)
#### vec.dot(mblock)
#### vec.dot(vblock)
#### vec.dot(rvblock)
#### vec.dot(cmat)
#### vec.dot(cvec)
#### vec.dot(crvec)
#### vec.dot(cmblock)
#### vec.dot(cvblock)
#### vec.dot(crvblock)

Returns the dot product of *this with other.

```js
var V = require('eigenjs').Vector
  , vec1 = new V([1,
                  2,
                  3])
  , vec2 = new V([4,
                  5,
                  6]);
console.log(vec1.dot(vec2).toString());
```

```txt
32
```

#### vec.asDiagonal()

```js
var V = require('eigenjs').Vector
  , vec = new V.Random(3)
  , dia = vec.asDiagonal();
console.log('vec = \n%s\n', vec);
console.log('dia = \n%s', dia);
```

```txt
vec =
 0.593699
 0.299713
-0.718297

dia =
 0.593699         0         0
        0  0.299713         0
        0         0 -0.718297
```

#### vec.normalize()

```js
var V = require('eigenjs').Vector
  , vec = new V([
            1,
            2,
            3
          ]);
vec.normalize();
console.log('vec = \n%s', vec);
```

```txt
vec =
0.267261
0.534522
0.801784
```

#### vec.maxCoeff()

```js
var V = require('eigenjs').Vector
  , vec = new V.Random(3);
console.log('vec = \n%s\n', vec);
console.log('max = %d', vec.maxCoeff());
```

```txt
vec =
 0.604974
-0.210128
  0.37608

max = 0.6049735153117093
```

#### vec.maxCoeff(obj)

+ obj `Object`

```js
var V = require('eigenjs').Vector
  , vec = new V.Random(3)
  , obj = {};
console.log('vec = \n%s\n', vec);
console.log('max = %d', vec.maxCoeff(obj));
console.log('obj = %s', JSON.stringify(obj));
```

```txt
vec =
-0.887644
 -0.63168
-0.644859

max = -0.631679946385175
obj = {"maxCoeff":-0.631679946385175,"rowId":1,"colId":0}
```

#### vec.maxCoeff(func)

+ func `Function`

```js
var V = require('eigenjs').Vector
  , vec = new V.Random(3)
  , func = function(rowId, colId) {
             console.log('rowId = %d, colId = %d', rowId, colId);
           };
console.log('vec = \n%s\n', vec);
console.log('max = %d', vec.maxCoeff(func));
```

```txt
vec =
-0.006325
-0.304345
 0.875084

rowId = 2, colId = 0
max = 0.8750841114088352
```

#### vec.minCoeff()

```js
var V = require('eigenjs').Vector
  , vec = new V.Random(3);
console.log('vec = \n%s\n', vec);
console.log('min = %d', vec.minCoeff());
```

```txt
vec =
 0.311621
 -0.59179
-0.210911

min = -0.5917897846511517
```

#### vec.minCoeff(obj)

+ obj `Object`

```js
var V = require('eigenjs').Vector
  , vec = new V.Random(3)
  , obj = {};
console.log('vec = \n%s\n', vec);
console.log('min = %d', vec.minCoeff(obj));
console.log('obj = %s', JSON.stringify(obj));
```

```txt
vec =
  0.413097
    0.9239
-0.0150985

min = -0.015098494950262165
obj = {"minCoeff":-0.015098494950262165,"rowId":2,"colId":0}
```

#### vec.minCoeff(func)

+ func `Function`

```js
var V = require('eigenjs').Vector
  , vec = new V.Random(3)
  , func = function(rowId, colId) {
             console.log('rowId = %d, colId = %d', rowId, colId);
           };
console.log('vec = \n%s\n', vec);
console.log('min = %d', vec.minCoeff(func));
```

```txt
vec =
-0.277781
-0.668038
 0.286223

rowId = 1, colId = 0
min = -0.668037947112712
```

## Complex Vector

### Complex Vector Class Methods

#### CVector(mat)
#### CVector(vec)
#### CVector(rvec)
#### CVector(mblock)
#### CVector(vblock)
#### CVector(rvblock)
#### CVector(cmat)
#### CVector(cvec)
#### CVector(crvec)
#### CVector(cmblock)
#### CVector(cvblock)
#### CVector(crvblock)

```js
var CV = require('eigenjs').CVector
  , cvec = new CV.Random(3)
  , cvec2 = new CV(cvec);
console.log('cvec = \n%s\n', cvec);
console.log('cvec2 = \n%s', cvec2);
```

```txt
cvec =
 (0.97863,-0.172027)
(0.743826,-0.517891)
(-0.194503,0.984235)

cvec2 =
 (0.97863,-0.172027)
(0.743826,-0.517891)
(-0.194503,0.984235)
```

#### CVector(rows)

```js
var CV = require('eigenjs').CVector
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

#### cvec.head(n)

```js
var CV = require('eigenjs').CVector
  , cvec = new CV([  1    ,
                     2    ,
                   C(3   ),
                   C(4, 0)])
  , cvblock = cvec.head(2);
console.log('cvblock = \n%s', cvblock);
```

```txt
cvblock =
(1,0)
(2,0)
```

#### cvec.tail(n)

```js
var CV = require('eigenjs').CVector
  , cvec = new CV([  1    ,
                     2    ,
                   C(3   ),
                   C(4, 0)])
  , cvblock = cvec.tail(2);
console.log('cvblock = \n%s', cvblock);
```

```txt
cvblock =
(3,0)
(4,0)
```

#### cvec.dot(mat)
#### cvec.dot(vec)
#### cvec.dot(rvec)
#### cvec.dot(mblock)
#### cvec.dot(vblock)
#### cvec.dot(rvblock)
#### cvec.dot(cmat)
#### cvec.dot(cvec)
#### cvec.dot(crvec)
#### cvec.dot(cmblock)
#### cvec.dot(cvblock)
#### cvec.dot(crvblock)

Returns the dot product of *this with other.

This function returns the hermitian (sesquilinear) dot product, conjugate-linear in the first variable and linear in the second variable.

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CV = Eigen.CVector
  , cvec1 = new CV([C(1, 1),
                    C(2, 2),
                    C(3, 3)])
  , cvec2 = new CV([4,
                    5,
                    6]);
console.log(cvec1.dot(cvec2).toString());
```

```txt
(32,-32)
```

#### cvec.asDiagonal()

```js
var CV = require('eigenjs').CVecotr
  , cvec = new CV.Random(3)
  , dia = cvec.asDiagonal();
console.log('cvec = \n%s\n', cvec);
console.log('dia = \n%s', dia);
```

```txt
cvec =
 (-0.350871,0.918551)
(0.0934938,-0.649058)
(-0.725789,-0.339967)

dia =
 (-0.350871,0.918551)                 (0,0)                 (0,0)
                (0,0) (0.0934938,-0.649058)                 (0,0)
                (0,0)                 (0,0) (-0.725789,-0.339967)
```

#### cvec.normalize()

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CV = Eigen.CVector
  , cvec = new CV([
               1    ,
             C(2, 3),
               4
           ]);
cvec.normalize();
console.log('cvec = \n%s', cvec);
```

```txt
cvec =
       (0.182574,0)
(0.365148,0.547723)
       (0.730297,0)
```

## Row Vector

### Row Vector Class Methods

#### RowVector(mat)
#### RowVector(vec)
#### RowVector(rvec)
#### RowVector(mblock)
#### RowVector(vblock)
#### RowVector(rvblock)

```js
var RV = require('eigenjs').RowVector
  , rvec = new RV.Random(3)
  , rvec2 = new RV(rvec);
console.log('rvec = \n%s\n', rvec);
console.log('rvec2 = \n%s', rvec2);
```

```txt
rvec =
-0.0369638   0.749797   -0.15956

rvec2 =
-0.0369638   0.749797   -0.15956
```

#### RowVector(cols)

```js
var RV = require('eigenjs').RowVector
  , rvec = new RV(3);
console.log('rvec = \n%s', rvec);
```

```txt
rvec =
0 0 0
```

#### RowVector(scalar_array)

```js
var RV = require('eigenjs').RowVector
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

#### RowVector.LinSpaced(size, low, high)

Sets a linearly space vector.

```js
var RV = require('eigenjs').RowVector
  , rvec = RV.LinSpaced(5, 1, 0);
console.log('rvec = \n%s', rvec);
```

```txt
rvec =
   1 0.75  0.5 0.25    0
```

### Row Vector Instance Methods

#### rvec.set(col, scalar)

```js
var RV = require('eigenjs').RowVector
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
var RV = require('eigenjs').RowVector
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
var RV = require('eigenjs').RowVector
  , rvec = new RV([1, 2, 3]);
console.log(rvec.get(0));
console.log(rvec.get(1));
console.log(rvec.get(2));
```

```txt
1
2
3
```

#### rvec.setLinSpaced(low, high)

Sets a linearly space vector.

```js
var RV = require('eigenjs').RowVector
  , rvec = new RV.Zero(5);
console.log('rvec = \n%s\n', rvec);
rvec.setLinSpaced(1, 0);
console.log('rvec = \n%s', rvec);
```

```txt
rvec =
0 0 0 0 0

rvec =
   1 0.75  0.5 0.25    0
```

#### rvec.setLinSpaced(size, low, high)

Sets a linearly space vector.

```js
var RV = require('eigenjs').RowVector
  , rvec = new RV.Random(3);
console.log('rvec = \n%s\n', rvec);
rvec.setLinSpaced(5, 1, 0);
console.log('rvec = \n%s', rvec);
```

```txt
rvec =
 0.829713  0.985904 0.0914511

rvec =
   1 0.75  0.5 0.25    0
```

#### rvec.block(startCol, blockCols)

```js
var RV = require('eigenjs').RowVector
  , rvec = new RV([1, 2, 3, 4])
  , rvblock = rvec.block(1, 2);
console.log('rvblock = \n%s', rvblock);
```

```txt
rvblock =
2 3
```

#### rvec.head(n)

```js
var RV = require('eigenjs').RowVector
  , rvec = new RV([1, 2, 3, 4])
  , rvblock = rvec.head(2);
console.log('rvblock = \n%s', rvblock);
```

```txt
rvblock =
1 2
```

#### rvec.tail(n)

```js
var RV = require('eigenjs').RowVector
  , rvec = new RV([1, 2, 3, 4])
  , rvblock = rvec.tail(2);
console.log('rvblock = \n%s', rvblock);
```

```txt
rvblock =
3 4
```

#### rvec.dot(mat)
#### rvec.dot(vec)
#### rvec.dot(rvec)
#### rvec.dot(mblock)
#### rvec.dot(vblock)
#### rvec.dot(rvblock)
#### rvec.dot(cmat)
#### rvec.dot(cvec)
#### rvec.dot(crvec)
#### rvec.dot(cmblock)
#### rvec.dot(cvblock)
#### rvec.dot(crvblock)

Returns the dot product of *this with other.

```js
var RV = require('eigenjs').RowVector
  , rvec1 = new RV([1, 2, 3])
  , rvec2 = new RV([4, 5, 6]);
console.log(rvec1.dot(rvec2).toString());
```

```txt
32
```

#### rvec.asDiagonal()

```js
var RV = require('eigenjs').RowVector
  , rvec = new RV.Random(3)
  , dia = rvec.asDiagonal();
console.log('rvec = \n%s\n', rvec);
console.log('dia = \n%s', dia);
```

```txt
rvec =
0.00429723   0.223465  -0.221164

dia =
0.00429723          0          0
         0   0.223465          0
         0          0  -0.221164
```

#### rvec.normalize()

```js
var RV = require('eigenjs').RVector
  , rvec = new RV([1, 2, 3]);
rvec.normalize();
console.log('rvec = \n%s', rvec);
```

```txt
rvec =
0.267261 0.534522 0.801784
```

#### rvec.maxCoeff()

```js
var RV = require('eigenjs').RowVector
  , rvec = new RV.Random(3);
console.log('rvec = \n%s\n', rvec);
console.log('max = %d', rvec.maxCoeff());
```

```txt
rvec =
-0.487994  0.283088  -0.14679

max = 0.28308759503210323
```

#### rvec.maxCoeff(obj)

+ obj `Object`

```js
var RV = require('eigenjs').RowVector
  , rvec = new RV.Random(3)
  , obj = {};
console.log('rvec = \n%s\n', rvec);
console.log('max = %d', rvec.maxCoeff(obj));
console.log('obj = %s', JSON.stringify(obj));
```

```txt
rvec =
0.402709 0.332409 0.800923

max = 0.8009226330560273
obj = {"maxCoeff":0.8009226330560273,"rowId":0,"colId":2}
```

#### rvec.maxCoeff(func)

+ func `Function`

```js
var RV = require('eigenjs').RowVector
  , rvec = new RV.Random(3)
  , func = function(rowId, colId) {
             console.log('rowId = %d, colId = %d', rowId, colId);
           };
console.log('rvec = \n%s\n', rvec);
console.log('max = %d', rvec.maxCoeff(func));
```

```txt
rvec =
 0.713395 0.0274691 -0.326461

rowId = 0, colId = 0
max = 0.7133948633975324
```

#### rvec.minCoeff()

```js
var RV = require('eigenjs').RowVector
  , rvec = new RV.Random(3);
console.log('rvec = \n%s\n', rvec);
console.log('min = %d', rvec.minCoeff());
```

```txt
rvec =
 0.349846 -0.129927  0.316636

min = -0.1299270163895222
```

#### rvec.minCoeff(obj)

+ obj `Object`

```js
var RV = require('eigenjs').RowVector
  , rvec = new RV.Random(3)
  , obj = {};
console.log('rvec = \n%s\n', rvec);
console.log('min = %d', rvec.minCoeff(obj));
console.log('obj = %s', JSON.stringify(obj));
```

```txt
rvec =
 0.451323 -0.614237  0.512448

min = -0.6142373744464653
obj = {"minCoeff":-0.6142373744464653,"rowId":0,"colId":1}
```

#### rvec.minCoeff(func)

+ func `Function`

```js
var RV = require('eigenjs').RowVector
  , rvec = new RV.Random(3)
  , func = function(rowId, colId) {
             console.log('rowId = %d, colId = %d', rowId, colId);
           };
console.log('rvec = \n%s\n', rvec);
console.log('min = %d', rvec.minCoeff(func));
```

```txt
rvec =
-0.816445 0.0135587 -0.118738

rowId = 0, colId = 0
min = -0.8164447219187602
```

## Complex Row Vector

### Complex Row Vector Class Methods

#### CRowVector(mat)
#### CRowVector(vec)
#### CRowVector(rvec)
#### CRowVector(mblock)
#### CRowVector(vblock)
#### CRowVector(rvblock)
#### CRowVector(cmat)
#### CRowVector(cvec)
#### CRowVector(crvec)
#### CRowVector(cmblock)
#### CRowVector(cvblock)
#### CRowVector(crvblock)

```js
var CRV = require('eigenjs').CRowVector
  , crvec = new CRV.Random(3)
  , crvec2 = new CRV(crvec);
console.log('crvec = \n%s\n', crvec);
console.log('crvec2 = \n%s', crvec2);
```

```txt
crvec =
(-0.456363,-0.0965678)    (0.985458,0.584867)   (-0.136223,0.491867)

crvec2 =
(-0.456363,-0.0965678)    (0.985458,0.584867)   (-0.136223,0.491867)
```

#### CRowVector(cols)

```js
var CRV = require('eigenjs').CRowVector
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

#### crvec.head(n)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CRV = Eigen.CRowVector
  , crvec = new CRV([1, 2, C(3), C(4, 0)])
  , crvblock = crvec.head(2);
console.log('crvblock = \n%s', crvblock);
```

```txt
crvblock =
(1,0) (2,0)
```

#### crvec.tail(n)

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CRV = Eigen.CRowVector
  , crvec = new CRV([1, 2, C(3), C(4, 0)])
  , crvblock = crvec.tail(2);
console.log('crvblock = \n%s', crvblock);
```

```txt
crvblock =
(3,0) (4,0)
```

#### crvec.dot(mat)
#### crvec.dot(vec)
#### crvec.dot(rvec)
#### crvec.dot(mblock)
#### crvec.dot(vblock)
#### crvec.dot(rvblock)
#### crvec.dot(cmat)
#### crvec.dot(cvec)
#### crvec.dot(crvec)
#### crvec.dot(cmblock)
#### crvec.dot(cvblock)
#### crvec.dot(crvblock)

Returns the dot product of *this with other.

This function returns the hermitian (sesquilinear) dot product, conjugate-linear in the first variable and linear in the second variable.

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CRV = Eigen.CRowVector
  , crvec1 = new CRV([C(1, 1), C(2, 2), C(3, 3)])
  , crvec2 = new CRV([4, 5, 6]);
console.log(crvec1.dot(crvec2).toString());
```

```txt
(32,-32)
```

#### crvec.asDiagonal()

```js
var Eigen = require('eigenjs')
  , CRV = Eigen.CRowVector
  , crvec = new CRV.Random(3)
  , dia = crvec.asDiagonal();
console.log('crvec = \n%s\n', crvec);
console.log('dia = \n%s', dia);
```

```txt
crvec =
 (-0.52811,0.0530528) (-0.340944,-0.248457)  (0.185028,-0.228998)

dia =
 (-0.52811,0.0530528)                 (0,0)                 (0,0)
                (0,0) (-0.340944,-0.248457)                 (0,0)
                (0,0)                 (0,0)  (0.185028,-0.228998)
```

#### crvec.normalize()

```js
var Eigen = require('eigenjs')
  , C = Eigen.Complex
  , CRV = Eigen.CRowVector
  , crvec = new CRV([1, C(2, 3), 4]);
crvec.normalize();
console.log('crvec = \n%s', crvec);
```

```txt
crvec =
       (0.182574,0) (0.365148,0.547723)        (0.730297,0)
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

## Partial Pivoting LU

This class represents a LU decomposition of a square invertible matrix, with partial pivoting: the matrix A is decomposed as PA = LU where L is unit-lower-triangular, U is upper-triangular, and P is a permutation matrix.

### Partial Pivoting LU Class Methods

#### PartialPivLU(mat)
#### PartialPivLU(mblock)

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , PPLU = Eigen.PartialPivLU
  , mat = new M(3, 3).set([
            1, 4, 5,
            4, 2, 6,
            5, 6, 3
          ])
  , pplu = new PPLU(mat)
  , P = pplu.permutationP()
  , L = pplu.matrixL()
  , U = pplu.matrixU();
console.log('%s', P.inverse().mula(L).mula(U));
```

```txt
1 4 5
4 2 6
5 6 3
```

### Partial Pivoting LU Instance Methods

#### pplu.permutationP()

Returns the permutation matrix P.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , PPLU = Eigen.PartialPivLU
  , mat = new M(3, 3).set([
            1, 4, 5,
            4, 2, 6,
            5, 6, 3
          ])
  , pplu = new PPLU(mat);
console.log('P = \n%s', pplu.permutationP());
```

```txt
P =
0 0 1
0 1 0
1 0 0
```

#### pplu.matrixL()

Returns the unit-lower-triangular matrix L.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , PPLU = Eigen.PartialPivLU
  , mat = new M(3, 3).set([
            1, 4, 5,
            4, 2, 6,
            5, 6, 3
          ])
  , pplu = new PPLU(mat);
console.log('L = \n%s', pplu.matrixL());
```

```txt
L =
  1   0   0
0.8   1   0
0.2  -1   1
```

#### pplu.matrixU()

Returns the upper-triangular matrix U.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , PPLU = Eigen.PartialPivLU
  , mat = new M(3, 3).set([
            1, 4, 5,
            4, 2, 6,
            5, 6, 3
          ])
  , pplu = new PPLU(mat);
console.log('U = \n%s', pplu.matrixU());
```

```txt
U =
   5    6    3
   0 -2.8  3.6
   0    0    8
```

#### pplu.determinant()

Returns the determinant of the matrix of which *this is the LU decomposition. It has only linear complexity (that is, O(n) where n is the dimension of the square matrix) as the LU decomposition has already been computed.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , PPLU = Eigen.PartialPivLU
  , mat = new M(3, 3).set([
            1, 4, 5,
            4, 2, 6,
            5, 6, 3
          ])
  , pplu = new PPLU(mat);
console.log('%d', mat.determinant());
console.log('%d', pplu.determinant());
```

```txt
112
112
```

#### pplu.inverse()

Returns the inverse of the matrix of which *this is the LU decomposition.

The matrix being decomposed here is assumed to be invertible. If you need to check for invertibility, use class FullPivLU instead.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , PPLU = Eigen.PartialPivLU
  , mat = new M(3, 3).set([
            1, 4, 5,
            4, 2, 6,
            5, 6, 3
          ])
  , pplu = new PPLU(mat);
console.log('%s', pplu.inverse().equals(mat.inverse()));
```

```txt
true
```

#### pplu.solve(mat)
#### pplu.solve(vec)

This method returns the solution x to the equation Ax=b, where A is the matrix of which *this is the LU decomposition.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , V = Eigen.Vector
  , PPLU = Eigen.PartialPivLU
  , mat = new M(3, 3).set([
            1, 4, 5,
            4, 2, 6,
            5, 6, 3
          ])
  , b = new V([
              24,
              26,
              26
            ])
  , pplu = new PPLU(mat);
console.log('x = \n%s', pplu.solve(b));
```

```txt
x =
1
2
3
```

### Complex Partial Pivoting LU

This class represents a LU decomposition of a square invertible matrix, with partial pivoting: the matrix A is decomposed as PA = LU where L is unit-lower-triangular, U is upper-triangular, and P is a permutation matrix.

### Complex Partial Pivoting LU Class Methods

#### CPartialPivLU(cmat)
#### CPartialPivLU(cmblock)

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CPPLU = Eigen.CPartialPivLU
  , cmat = new CM(3, 3).set([
             1, 4, 5,
             4, 2, 6,
             5, 6, 3
           ])
  , cpplu = new CPPLU(cmat)
  , P = cpplu.permutationP()
  , L = cpplu.matrixL()
  , U = cpplu.matrixU();
console.log('%s', P.inverse().mula(L).mula(U));
```

```txt
(1,0) (4,0) (5,0)
(4,0) (2,0) (6,0)
(5,0) (6,0) (3,0)
```

### Complex Partial Pivoting LU Instance Methods

#### cpplu.permutationP()

Returns the permutation matrix P.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CPPLU = Eigen.CPartialPivLU
  , cmat = new CM(3, 3).set([
             1, 4, 5,
             4, 2, 6,
             5, 6, 3
           ])
  , cpplu = new CPPLU(cmat);
console.log('P = \n%s', cpplu.permutationP());
```

```txt
P =
(0,0) (0,0) (1,0)
(0,0) (1,0) (0,0)
(1,0) (0,0) (0,0)
```

#### cpplu.matrixL()

Returns the unit-lower-triangular matrix L.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CPPLU = Eigen.CPartialPivLU
  , cmat = new CM(3, 3).set([
             1, 4, 5,
             4, 2, 6,
             5, 6, 3
           ])
  , cpplu = new CPPLU(cmat);
console.log('L = \n%s', cpplu.matrixL());
```

```txt
L =
  (1,0)   (0,0)   (0,0)
(0.8,0)   (1,0)   (0,0)
(0.2,0) (-1,-0)   (1,0)
```

#### cpplu.matrixU()

Returns the upper-triangular matrix U.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CPPLU = Eigen.CPartialPivLU
  , cmat = new CM(3, 3).set([
             1, 4, 5,
             4, 2, 6,
             5, 6, 3
           ])
  , cpplu = new CPPLU(cmat);
console.log('U = \n%s', cpplu.matrixU());
```

```txt
U =
   (5,0)    (6,0)    (3,0)
   (0,0) (-2.8,0)  (3.6,0)
   (0,0)    (0,0)    (8,0)
```

#### cpplu.determinant()

Returns the determinant of the complex matrix of which *this is the LU decomposition. It has only linear complexity (that is, O(n) where n is the dimension of the complex square matrix) as the LU decomposition has already been computed.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CPPLU = Eigen.CPartialPivLU
  , cmat = new CM(3, 3).set([
            1, 4, 5,
            4, 2, 6,
            5, 6, 3
          ])
  , cpplu = new CPPLU(cmat);
console.log('%s', cmat.determinant());
console.log('%s', cpplu.determinant());
```

```txt
(112,-0)
(112,-0)
```

#### cpplu.inverse()

Returns the inverse of the complex matrix of which *this is the LU decomposition.

The complex matrix being decomposed here is assumed to be invertible. If you need to check for invertibility, use class CFullPivLU instead.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CPPLU = Eigen.CPartialPivLU
  , cmat = new CM(3, 3).set([
            1, 4, 5,
            4, 2, 6,
            5, 6, 3
          ])
  , cpplu = new CPPLU(cmat);
console.log('%s', cpplu.inverse().equals(cmat.inverse()));
```

```txt
true
```

#### cpplu.solve(cmat)
#### cpplu.solve(cvec)

This method returns the solution x to the equation Ax=b, where A is the matrix of which *this is the LU decomposition.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CV = Eigen.CVector
  , CPPLU = Eigen.CPartialPivLU
  , cmat = new CM(3, 3).set([
             1, 4, 5,
             4, 2, 6,
             5, 6, 3
           ])
  , b = new CV([
               24,
               26,
               26
             ])
  , cpplu = new CPPLU(cmat);
console.log('x = \n%s', cpplu.solve(b));
```

```txt
x =
(1,0)
(2,0)
(3,0)
```

### Full Pivoting LU

This class represents a LU decomposition of any matrix, with complete pivoting: the matrix A is decomposed as PAQ = LU where L is unit-lower-triangular, U is upper-triangular, and P and Q are permutation matrices. This is a rank-revealing LU decomposition. The eigenvalues (diagonal coefficients) of U are sorted in such a way that any zeros are at the end.

This decomposition provides the generic approach to solving systems of linear equations, computing the rank, invertibility, inverse, kernel, and determinant.

This LU decomposition is very stable and well tested with large matrices. However there are use cases where the SVD decomposition is inherently more stable and/or flexible. For example, when computing the kernel of a matrix, working with the SVD allows to select the smallest singular values of the matrix, something that the LU decomposition doesn't see.

#### Full Pivoting LU Class Methods

#### FullPivLU(mat)
#### FullPivLU(mblock)

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , FPLU = Eigen.FullPivLU
  , mat = new M(3, 5).set([
             1,  3,  0,  2, -1,
             0,  0,  1,  4, -3,
             1,  2,  1,  6, -4
          ])
  , fplu = new FPLU(mat)
  , P = fplu.permutationP()
  , L = fplu.matrixL()
  , U = fplu.matrixU()
  , Q = fplu.permutationQ();
console.log('%s', P.inverse().mula(L).mula(U).mula(Q.inverse()));
```

```txt
 1  3  0  2 -1
 0  0  1  4 -3
 1  2  1  6 -4
```

#### Full Pivoting LU Instance Methods

#### fplu.permutationP()

Returns the permutation matrix P.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , FPLU = Eigen.FullPivLU
  , mat = new M(3, 5).set([
             1,  3,  0,  2, -1,
             0,  0,  1,  4, -3,
             1,  2,  1,  6, -4
          ])
  , fplu = new FPLU(mat);
console.log('P = \n%s', fplu.permutationP());
```

```txt
P =
0 0 1
1 0 0
0 1 0
```

#### fplu.permutationQ()

Returns the permutation matrix Q.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , FPLU = Eigen.FullPivLU
  , mat = new M(3, 5).set([
             1,  3,  0,  2, -1,
             0,  0,  1,  4, -3,
             1,  2,  1,  6, -4
          ])
  , fplu = new FPLU(mat);
console.log('Q = \n%s', fplu.permutationQ());
```

```txt
Q =
0 0 1 0 0
0 1 0 0 0
0 0 0 1 0
1 0 0 0 0
0 0 0 0 1
```

#### fplu.matrixL()

Returns the unit-lower-triangular matrix L.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , FPLU = Eigen.FullPivLU
  , mat = new M(3, 5).set([
             1,  3,  0,  2, -1,
             0,  0,  1,  4, -3,
             1,  2,  1,  6, -4
          ])
  , fplu = new FPLU(mat);
console.log('L = \n%s', fplu.matrixL());
```

```txt
L =
        1         0         0
 0.333333         1         0
 0.666667 -0.571429         1
```

#### fplu.matrixU()

Returns the upper-triangular matrix U.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , FPLU = Eigen.FullPivLU
  , mat = new M(3, 5).set([
             1,  3,  0,  2, -1,
             0,  0,  1,  4, -3,
             1,  2,  1,  6, -4
          ])
  , fplu = new FPLU(mat);
console.log('U = \n%s', fplu.matrixU());
```

```txt
U =
        6         2         1         1        -4
        0   2.33333  0.666667 -0.333333  0.333333
        0         0 -0.285714  0.142857 -0.142857
```

#### fplu.determinant()

Returns the determinant of the matrix of which *this is the LU decomposition. It has only linear complexity (that is, O(n) where n is the dimension of the square matrix) as the LU decomposition has already been computed.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , FPLU = Eigen.FullPivLU
  , mat = M.Random(3, 3)
  , fplu = new FPLU(mat)
  , det = fplu.determinant();
console.log('mat = \n%s\n', mat);
console.log('det = %d', det);
```

```txt
mat =
   0.460707   -0.430882   -0.561277
  -0.902957     0.15904    0.614972
-0.00347658    0.980629   -0.170248

det = 0.27353337419849527
```

#### fplu.inverse()

Returns the inverse of the matrix of which *this is the LU decomposition.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , FPLU = Eigen.FullPivLU
  , mat = M.Random(3, 3)
  , fplu = new FPLU(mat)
  , inv = fplu.inverse();
console.log('%s', inv.isApprox(mat.inverse()));
```

```txt
true
```

#### fplu.isInvertible()

Returns true if the matrix of which *this is the LU decomposition is invertible.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , FPLU = Eigen.FullPivLU
  , mat = new M(3, 3).set([
            1, 4, 5,
            4, 2, 6,
            5, 6, 3
          ])
  , fplu = new FPLU(mat);
console.log('%s', fplu.isInvertible());
```

```txt
true
```

#### fplu.solve(mat)
#### fplu.solve(vec)

Returns a solution x to the equation Ax=b, where A is the matrix of which *this is the LU decomposition.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , V = Eigen.Vector
  , FPLU = Eigen.FullPivLU
  , mat = new M(3, 3).set([
            0, 1, 1,
            1, 2, 1,
            2, 7, 9
          ])
  , b = new V([
              1,
              2,
              3
            ])
  , fplu = new FPLU(mat);
console.log('x = \n%s', fplu.solve(b));
```

```txt
x =
-1
 2
-1
```

#### fplu.rank()

Returns the rank of the matrix of which *this is the LU decomposition.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , FPLU = Eigen.FullPivLU
  , mat = new M(3, 4).set([
            2, 1, 0, 1,
            0, 2, 1, 0,
            2, 3, 1, 1
          ])
  , fplu = new FPLU(mat);
console.log('%d', fplu.rank());
```

```txt
2
```

#### fplu.dimensionOfKernel()

Returns the dimension of the kernel of the matrix of which *this is the LU decomposition.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , FPLU = Eigen.FullPivLU
  , mat = M(3, 4).set([
            1, 1, 0, 2,
            1, 2, 0, 3,
            2, 3, 0, 5
          ])
  , fplu = new FPLU(mat)
  , dim = fplu.dimensionOfKernel();
console.log('dim = %d', dim);
```

```txt
dim = 2
```

#### fplu.kernel()

Returns the kernel of the matrix, also called its null-space. The columns of the returned matrix will form a basis of the kernel.

```js
var Eigen = require('eigenjs')
  , M = Eigen.Matrix
  , FPLU = Eigen.FullPivLU
  , mat = M(3, 4).set([
            1, 1, 0, 2,
            1, 2, 0, 3,
            2, 3, 0, 5
          ])
  , fplu = new FPLU(mat)
  , ker = fplu.kernel();
console.log('ker = \n%s', ker);
```

```txt
ker =
 1  0
 1  0
 0  1
-1 -0
```

### Complex Full Pivoting LU

This class represents a LU decomposition of any matrix, with complete pivoting: the matrix A is decomposed as PAQ = LU where L is unit-lower-triangular, U is upper-triangular, and P and Q are permutation matrices. This is a rank-revealing LU decomposition. The eigenvalues (diagonal coefficients) of U are sorted in such a way that any zeros are at the end.

This decomposition provides the generic approach to solving systems of linear equations, computing the rank, invertibility, inverse, kernel, and determinant.

This LU decomposition is very stable and well tested with large matrices. However there are use cases where the SVD decomposition is inherently more stable and/or flexible. For example, when computing the kernel of a matrix, working with the SVD allows to select the smallest singular values of the matrix, something that the LU decomposition doesn't see.

#### Complex Full Pivoting LU Class Methods

#### CFullPivLU(cmat)
#### CFullPivLU(cmblock)

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CFPLU = Eigen.CFullPivLU
  , cmat = new CM(3, 5).set([
              1,  3,  0,  2, -1,
              0,  0,  1,  4, -3,
              1,  2,  1,  6, -4
           ])
  , cfplu = new CFPLU(cmat)
  , P = cfplu.permutationP()
  , L = cfplu.matrixL()
  , U = cfplu.matrixU()
  , Q = cfplu.permutationQ();
console.log('%s', P.inverse().mula(L).mula(U).mula(Q.inverse()));
```

```txt
          (1,0)           (3,0)           (0,0)           (2,0)          (-1,0)
          (0,0) (2.22045e-16,0)           (1,0)           (4,0)          (-3,0)
          (1,0)           (2,0)           (1,0)           (6,0)          (-4,0)
```

#### Complex Full Pivoting LU Instance Methods

#### cfplu.permutationP()

Returns the permutation matrix P.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CFPLU = Eigen.CFullPivLU
  , cmat = new CM(3, 5).set([
              1,  3,  0,  2, -1,
              0,  0,  1,  4, -3,
              1,  2,  1,  6, -4
           ])
  , cfplu = new CFPLU(cmat);
console.log('P = \n%s', cfplu.permutationP());
```

```txt
P =
(0,0) (0,0) (1,0)
(1,0) (0,0) (0,0)
(0,0) (1,0) (0,0)
```

#### cfplu.permutationQ()

Returns the permutation matrix Q.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CFPLU = Eigen.CFullPivLU
  , cmat = new CM(3, 5).set([
              1,  3,  0,  2, -1,
              0,  0,  1,  4, -3,
              1,  2,  1,  6, -4
           ])
  , cfplu = new CFPLU(cmat);
console.log('Q = \n%s', cfplu.permutationQ());
```

```txt
Q =
(0,0) (0,0) (1,0) (0,0) (0,0)
(0,0) (1,0) (0,0) (0,0) (0,0)
(0,0) (0,0) (0,0) (1,0) (0,0)
(1,0) (0,0) (0,0) (0,0) (0,0)
(0,0) (0,0) (0,0) (0,0) (1,0)
```

#### cfplu.matrixL()

Returns the unit-lower-triangular matrix L.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CFPLU = Eigen.CFullPivLU
  , cmat = new CM(3, 5).set([
              1,  3,  0,  2, -1,
              0,  0,  1,  4, -3,
              1,  2,  1,  6, -4
           ])
  , cfplu = new CFPLU(cmat);
console.log('L = \n%s', cfplu.matrixL());
```

```txt
L =
        (1,0)         (0,0)         (0,0)
 (0.333333,0)         (1,0)         (0,0)
 (0.666667,0) (-0.571429,0)         (1,0)
```

#### cfplu.matrixU()

Returns the upper-triangular matrix U.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CFPLU = Eigen.CFullPivLU
  , cmat = new CM(3, 5).set([
              1,  3,  0,  2, -1,
              0,  0,  1,  4, -3,
              1,  2,  1,  6, -4
           ])
  , cfplu = new CFPLU(cmat);
console.log('U = \n%s', cfplu.matrixU());
```

```txt
U =
        (6,0)         (2,0)         (1,0)         (1,0)        (-4,0)
        (0,0)   (2.33333,0)  (0.666667,0) (-0.333333,0)  (0.333333,0)
        (0,0)         (0,0) (-0.285714,0)  (0.142857,0) (-0.142857,0)
```

#### cfplu.determinant()

Returns the determinant of the complex matrix of which *this is the LU decomposition. It has only linear complexity (that is, O(n) where n is the dimension of the complex square matrix) as the LU decomposition has already been computed.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CFPLU = Eigen.CFullPivLU
  , cmat = CM.Random(3, 3)
  , cfplu = new CFPLU(cmat)
  , det = cfplu.determinant();
console.log('cmat = \n%s\n', cmat);
console.log('det = %s', det);
```

```txt
cmat =
 (-0.93669,-0.95681) (-0.640516,0.839641) (-0.418346,0.860162)
 (0.886216,0.637253) (-0.146449,0.632311)   (0.73613,0.142591)
 (0.306307,0.100039) (-0.741677,0.642565)  (0.534108,0.757001)

det = (0.871298,0.0216014)
```

#### cfplu.inverse()

Returns the inverse of complex matrix of which *this is the LU decomposition.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CFPLU = Eigen.CFullPivLU
  , cmat = CM.Random(3, 3)
  , cfplu = new CFPLU(cmat)
  , inv = cfplu.inverse();
console.log('%s', inv.isApprox(cmat.inverse()));
```

```txt
true
```

#### cfplu.isInvertible()

Returns true if the complex matrix of which *this is the LU decomposition is invertible.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.Matrix
  , CFPLU = Eigen.CFullPivLU
  , cmat = new CM(3, 3).set([
             1, 4, 5,
             4, 2, 6,
             5, 6, 3
           ])
  , cfplu = new CFPLU(cmat);
console.log('%s', cfplu.isInvertible());
```

```txt
true
```

#### cfplu.solve(cmat)
#### cfplu.solve(cvec)

Returns a solution x to the equation Ax=b, where A is the complex matrix of which *this is the LU decomposition.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CV = Eigen.CVector
  , CFPLU = Eigen.CFullPivLU
  , cmat = new CM(3, 3).set([
              0, 1, 1,
              1, 2, 1,
              2, 7, 9
            ])
  , b = new CV([
               4,
               5,
               6
             ])
  , cfplu = new CFPLU(cmat);
console.log('x = \n%s', cfplu.solve(b));
```

```txt
x =
(-7,-0)
  (8,0)
 (-4,0)
```

#### cfplu.rank()

Returns the rank of the complex matrix of which *this is the LU decomposition.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CFPLU = Eigen.CFullPivLU
  , cmat = new CM(3, 4).set([
             2, 1, 0, 1,
             0, 2, 1, 0,
             2, 3, 1, 1
           ])
  , cfplu = new CFPLU(cmat);
console.log('%d', cfplu.rank());
```

```txt
2
```

#### cfplu.dimensionOfKernel()

Returns the dimension of the kernel of the complex matrix of which *this is the LU decomposition.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CFPLU = Eigen.CFullPivLU
  , cmat = CM(3, 4).set([
             1, 1, 0, 2,
             1, 2, 0, 3,
             2, 3, 0, 5
           ])
  , cfplu = new CFPLU(cmat)
  , dim = cfplu.dimensionOfKernel();
console.log('dim = %d', dim);
```

```txt
dim = 2
```

#### cfplu.kernel()

Returns the kernel of the complex matrix, also called its null-space. The columns of the returned matrix will form a basis of the kernel.

```js
var Eigen = require('eigenjs')
  , CM = Eigen.CMatrix
  , CFPLU = Eigen.CFullPivLU
  , cmat = CM(3, 4).set([
             1, 1, 0, 2,
             1, 2, 0, 3,
             2, 3, 0, 5
           ])
  , cfplu = new CFPLU(cmat)
  , ker = cfplu.kernel();
console.log('ker = \n%s', ker);
```

```txt
ker =
  (1,0)   (0,0)
  (1,0)  (-0,0)
  (0,0)   (1,0)
(-1,-0) (-0,-0)
```
