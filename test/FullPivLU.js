const
    Eigen = require('../index.js'),
    FullPivLU = Eigen.FullPivLU
    Matrix = Eigen.Matrix,
    Vector = Eigen.Vector,
    should = require('should');

describe('FullPivLU', function() {
  var mat, mblock, lu, blocklu;

  it('#FullPivLU() should be a function', function() {
    FullPivLU.should.be.a.Function;
  });

  beforeEach(function() {
    mat = Matrix(3, 5).set([
       1,  3,  0,  2, -1,
       0,  0,  1,  4, -3,
       1,  2,  1,  6, -4
    ]);
    lu = new FullPivLU(mat);

    mblock = mat.block(0, 1, 3, 3);
    blocklu = FullPivLU(mblock);
  });

  it('#FullPivLU() should be invoked with a Matrix argument', function() {
    lu.should.instanceOf(FullPivLU);
  });

  it('#FullPivLU() should be invoked with a MatrixBlock argument', function() {
    blocklu.should.instanceOf(FullPivLU);
  });

  it('#permutationP() should return the permutation matrix P', function() {
    lu.permutationP.should.be.a.Function;
    blocklu.permutationP.should.be.a.Function;

    var p = lu.permutationP();
    p.toString().should.equal("0 0 1\n1 0 0\n0 1 0");

    p = blocklu.permutationP();
    p.toString().should.equal("0 0 1\n1 0 0\n0 1 0");
  });

  it('#permutationQ() should return the permutation matrix Q', function() {
    lu.permutationQ.should.be.a.Function;
    blocklu.permutationP.should.be.a.Function;

    var q = lu.permutationQ();
    q.toString().should.equal("0 0 1 0 0\n0 1 0 0 0\n0 0 0 1 0\n1 0 0 0 0\n0 0 0 0 1");

    q = blocklu.permutationQ();
    q.toString().should.equal("0 1 0\n0 0 1\n1 0 0");
  });

  it('#matrixL() should return the unit-lower-triangular matrix L', function() {
    lu.matrixL.should.be.a.Function;
    blocklu.matrixL.should.be.a.Function;

    var l = lu.matrixL();
    l.toString().should.equal("        1         0         0\n 0.333333         1         0\n 0.666667 -0.571429         1");

    l = blocklu.matrixL();
    l.toString().should.equal("        1         0         0\n 0.333333         1         0\n 0.666667 -0.571429         1");

    l = mat.transpose().fullPivLu().matrixL();
    l.toString().should.equal("        1         0         0         0         0\n 0.333333         1         0         0         0\n 0.166667  0.285714         1         0         0\n 0.166667 -0.142857      -0.5         1         0\n-0.666667  0.142857       0.5         0         1");
  });

  it('#matrixU() should return the upperer-triangular matrix U', function() {
    lu.matrixL.should.be.a.Function;
    blocklu.matrixU.should.be.a.Function;

    var u = lu.matrixU();
    u.toString().should.equal("        6         2         1         1        -4\n        0   2.33333  0.666667 -0.333333  0.333333\n        0         0 -0.285714  0.142857 -0.142857");

    u = blocklu.matrixU();
    u.toString().should.equal("        6         2         1\n        0   2.33333 -0.333333\n        0         0  0.142857");
  });

  it('#determinant() should return the determinant of the matrix of it is the LU decomposition', function() {
    lu.determinant.should.be.a.Function;

    (function() {
      lu.determinant();
    }).should.throw("The matrix must be square");

    lu = Matrix.Random(3, 3);
    lu.determinant();
  });

  it('#inverse() should return the inverse of the matrix of which it is the LU decomposition', function() {
    lu.inverse.should.be.a.Function;

    (function() {
      lu.inverse();
    }).should.throw("The matrix must be square");

    lu = Matrix.Random(3, 3);
    lu.inverse();
  });
});
