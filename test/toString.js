const
    Eigen = require('../index.js'),
    Matrix = Eigen.Matrix,
    should = require('should');

describe('toString()', function() {
  var mat;

  beforeEach(function() {
    mat = new Matrix(3, 3).set([
            1, 2, 3,
            4, 5, 6,
            7, 8, 9
          ]).diva(9);
  });

  it('with option precision, default to 6', function() {
    mat.toString({ precision: 0 }).should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");
    mat.toString({ precision: 1 }).should.equal("0.1 0.2 0.3\n0.4 0.6 0.7\n0.8 0.9   1");
    mat.toString({ precision: 2 }).should.equal("0.11 0.22 0.33\n0.44 0.56 0.67\n0.78 0.89    1");
    mat.toString({ precision: 3 }).should.equal("0.111 0.222 0.333\n0.444 0.556 0.667\n0.778 0.889     1");
    mat.toString({ precision: 4 }).should.equal("0.1111 0.2222 0.3333\n0.4444 0.5556 0.6667\n0.7778 0.8889      1");
    mat.toString({ precision: 5 }).should.equal("0.11111 0.22222 0.33333\n0.44444 0.55556 0.66667\n0.77778 0.88889       1");
    mat.toString({ precision: 6 }).should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");
    mat.toString({ precision: 7 }).should.equal("0.1111111 0.2222222 0.3333333\n0.4444444 0.5555556 0.6666667\n0.7777778 0.8888889         1");
    mat.toString({ precision: 8 }).should.equal("0.11111111 0.22222222 0.33333333\n0.44444444 0.55555556 0.66666667\n0.77777778 0.88888889          1");
    mat.toString({ precision: 9 }).should.equal("0.111111111 0.222222222 0.333333333\n0.444444444 0.555555556 0.666666667\n0.777777778 0.888888889           1");
    mat.toString({ precision: 10 }).should.equal("0.1111111111 0.2222222222 0.3333333333\n0.4444444444 0.5555555556 0.6666666667\n0.7777777778 0.8888888889            1");
    mat.toString({ precision: 11 }).should.equal("0.11111111111 0.22222222222 0.33333333333\n0.44444444444 0.55555555556 0.66666666667\n0.77777777778 0.88888888889             1");
    mat.toString({ precision: 12 }).should.equal("0.111111111111 0.222222222222 0.333333333333\n0.444444444444 0.555555555556 0.666666666667\n0.777777777778 0.888888888889              1");
    mat.toString({ precision: 13 }).should.equal("0.1111111111111 0.2222222222222 0.3333333333333\n0.4444444444444 0.5555555555556 0.6666666666667\n0.7777777777778 0.8888888888889               1");
    mat.toString({ precision: 14 }).should.equal("0.11111111111111 0.22222222222222 0.33333333333333\n0.44444444444444 0.55555555555556 0.66666666666667\n0.77777777777778 0.88888888888889                1");
    mat.toString({ precision: 15 }).should.equal("0.111111111111111 0.222222222222222 0.333333333333333\n0.444444444444444 0.555555555555556 0.666666666666667\n0.777777777777778 0.888888888888889                 1");
    mat.toString({ precision: 16 }).should.equal("0.1111111111111111 0.2222222222222222 0.3333333333333333\n0.4444444444444444 0.5555555555555556 0.6666666666666666\n0.7777777777777777 0.8888888888888888                  1");
  });

  it('with option fullPrecision, default to false', function() {
    mat.toString({ fullPrecision: false }).should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");
    mat.toString({ fullPrecision: true }).should.equal("0.1111111111111111 0.2222222222222222 0.3333333333333333\n0.4444444444444444 0.5555555555555556 0.6666666666666666\n0.7777777777777777 0.8888888888888888                  1");
  });

  it('with option dontAlignCols, default to false', function() {
    mat.toString({ dontAlignCols: false }).should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");
    mat.toString({ dontAlignCols: true }).should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889 1");
  });

  it('with option coeffSeparator, default to " "', function() {
    mat.toString().should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");
    mat.toString({ coeffSeparator: ", " }).should.equal("0.111111, 0.222222, 0.333333\n0.444444, 0.555556, 0.666667\n0.777778, 0.888889,        1");
    mat.toString({ coeffSeparator: " | " }).should.equal("0.111111 | 0.222222 | 0.333333\n0.444444 | 0.555556 | 0.666667\n0.777778 | 0.888889 |        1");
  });

  it('with option rowSeparator, default to "\\n"', function() {
    mat.toString().should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");
    mat.toString({ rowSeparator: ";\n" }).should.equal("0.111111 0.222222 0.333333;\n0.444444 0.555556 0.666667;\n0.777778 0.888889        1");
  });

  it('with option rowPrefix, default to ""', function() {
    mat.toString().should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");
    mat.toString({ rowPrefix: "[" }).should.equal("[0.111111 0.222222 0.333333\n[0.444444 0.555556 0.666667\n[0.777778 0.888889        1");
  });

  it('with option rowSuffix, default to ""', function() {
    mat.toString().should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");
    mat.toString({ rowSuffix: "]" }).should.equal("0.111111 0.222222 0.333333]\n0.444444 0.555556 0.666667]\n0.777778 0.888889        1]");
  });

  it('with option matPrefix, default to ""', function() {
    mat.toString().should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");
    mat.toString({ matPrefix: "[" }).should.equal("[0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");

  });

  it('with option matSuffix, default to ""', function() {
    mat.toString().should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");
    mat.toString({ matSuffix: "]" }).should.equal("0.111111 0.222222 0.333333\n 0.444444 0.555556 0.666667\n 0.777778 0.888889        1]");
  });

  it('comma initialization format', function() {
    var CommaInitFmt = {
      dontAlignCols: true,
      coeffSeparator: ", ",
      rowSeparator: ", ",
      rowPrefix: "",
      rowSuffix: "",
      matPrefix: " << ",
      matSuffix: ";"
    };

    mat.toString().should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");
    mat.toString(CommaInitFmt).should.equal(" << 0.111111, 0.222222, 0.333333,  0.444444, 0.555556, 0.666667,  0.777778, 0.888889, 1;");
  });

  it('clean format', function() {
    var CleanFmt = {
      precision: 4,
      coeffSeparator: ", ",
      rowSeparator: "\n",
      rowPrefix: "[",
      rowSuffix: "]"
    };

    mat.toString().should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");
    mat.toString(CleanFmt).should.equal("[0.1111, 0.2222, 0.3333]\n[0.4444, 0.5556, 0.6667]\n[0.7778, 0.8889,      1]");
  });

  it('Octave format', function() {
    var OctaveFmt = {
      coeffSeparator: ", ",
      rowSeparator: ";\n",
      matPrefix: "[",
      matSuffix: "]"
    };

    mat.toString().should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");
    mat.toString(OctaveFmt).should.equal("[0.111111, 0.222222, 0.333333;\n 0.444444, 0.555556, 0.666667;\n 0.777778, 0.888889,        1]");
  });

  it('heavy format', function() {
    var HeavyFmt = {
      fullPrecision: true,
      coeffSeparator: ", ",
      rowSeparator: ";\n",
      rowPrefix: "[",
      rowSuffix: "]",
      matPrefix: "[",
      matSuffix: "]"
    };

    mat.toString().should.equal("0.111111 0.222222 0.333333\n0.444444 0.555556 0.666667\n0.777778 0.888889        1");
    mat.toString(HeavyFmt).should.equal("[[0.1111111111111111, 0.2222222222222222, 0.3333333333333333];\n [0.4444444444444444, 0.5555555555555556, 0.6666666666666666];\n [0.7777777777777777, 0.8888888888888888,                  1]]");
  });
});
