const
    Eigen = require('../index.js'),
    CFullPivLU = Eigen.CFullPivLU
    CMatrix = Eigen.CMatrix,
    CVector = Eigen.CVector,
    should = require('should');

describe('CFullPivLU', function() {
  var cmat, cmblock, lu, cblocklu;

  it('#CFullPivLU() should be a function', function() {
    CFullPivLU.should.be.a.Function;
  });

  beforeEach(function() {
    cmat = CMatrix(3, 5).set([
       1,  3,  0,  2, -1,
       0,  0,  1,  4, -3,
       1,  2,  1,  6, -4
    ]);
    lu = new CFullPivLU(cmat);

    cmblock = cmat.block(0, 1, 3, 3);
    cblocklu = CFullPivLU(cmblock);
  });

  it('#CFullPivLU() should be invoked with a CMatrix argument', function() {
    lu.should.instanceOf(CFullPivLU);
  });

  it('#CFullPivLU() should be invoked with a CMatrixBlock argument', function() {
    cblocklu.should.instanceOf(CFullPivLU);
  });

  it('#permutationP() should return the permutation matrix P', function() {
    lu.permutationP.should.be.a.Function;
    cblocklu.permutationP.should.be.a.Function;

    var p = lu.permutationP();
    p.toString().should.equal("(0,0) (0,0) (1,0)\n(1,0) (0,0) (0,0)\n(0,0) (1,0) (0,0)");

    p = cblocklu.permutationP();
    p.toString().should.equal("(0,0) (0,0) (1,0)\n(1,0) (0,0) (0,0)\n(0,0) (1,0) (0,0)");
  });

  it('#permutationQ() should return the permutation matrix Q', function() {
    lu.permutationQ.should.be.a.Function;
    cblocklu.permutationP.should.be.a.Function;

    var q = lu.permutationQ();
    q.toString().should.equal("(0,0) (0,0) (1,0) (0,0) (0,0)\n(0,0) (1,0) (0,0) (0,0) (0,0)\n(0,0) (0,0) (0,0) (1,0) (0,0)\n(1,0) (0,0) (0,0) (0,0) (0,0)\n(0,0) (0,0) (0,0) (0,0) (1,0)");

    q = cblocklu.permutationQ();
    q.toString().should.equal("(0,0) (1,0) (0,0)\n(0,0) (0,0) (1,0)\n(1,0) (0,0) (0,0)");
  });

  it('#matrixL() should return the unit-lower-triangular matrix L', function() {
    lu.matrixL.should.be.a.Function;
    cblocklu.matrixL.should.be.a.Function;

    var l = lu.matrixL();
    l.toString().should.equal("        (1,0)         (0,0)         (0,0)\n (0.333333,0)         (1,0)         (0,0)\n (0.666667,0) (-0.571429,0)         (1,0)");

    l = cblocklu.matrixL();
    l.toString().should.equal("        (1,0)         (0,0)         (0,0)\n (0.333333,0)         (1,0)         (0,0)\n (0.666667,0) (-0.571429,0)         (1,0)");
  });

  it('#matrixU() should return the upperer-triangular matrix U', function() {
    lu.matrixL.should.be.a.Function;
    cblocklu.matrixU.should.be.a.Function;

    var u = lu.matrixL();
    u.toString().should.equal("        (1,0)         (0,0)         (0,0)\n (0.333333,0)         (1,0)         (0,0)\n (0.666667,0) (-0.571429,0)         (1,0)");

    u = cblocklu.matrixU();
    u.toString().should.equal("        (6,0)         (2,0)         (1,0)\n        (0,0)   (2.33333,0) (-0.333333,0)\n        (0,0)         (0,0)  (0.142857,0)");
  });

  it('#determinant() should return the determinant of the matrix of it is the LU decomposition', function() {
    lu.determinant.should.be.a.Function;

    (function() {
      lu.determinant();
    }).should.throw("The matrix must be square");

    lu = CMatrix.Random(3, 3).fullPivLu();
    lu.determinant();
  });

  it('#inverse() should return the inverse of the matrix of which it is the LU decomposition', function() {
    lu.inverse.should.be.a.Function;

    (function() {
      lu.inverse();
    }).should.throw("The matrix must be square");

    lu = CMatrix.Random(3, 3).fullPivLu();
    lu.inverse();
  });

  it('#inverse() should return the inverse of the matrix of which it is the LU decomposition', function() {
    lu.inverse.should.be.a.Function;

    (function() {
      lu.inverse();
    }).should.throw("The matrix must be square");

    lu = CMatrix.Random(3, 3).fullPivLu();
    lu.inverse();
  });

  it('#isInvertible() should return true if the matrix of which *this is the LU decomposition is invertible.', function() {
    lu.solve.should.be.a.Function;

    lu.isInvertible().should.be.false;

    CMatrix(3, 3).set([
      0, 1, 1,
      1, 2, 1,
      2, 7, 9
    ]).fullPivLu().isInvertible().should.be.true;

    CMatrix.Random(3, 3).fullPivLu().isInvertible().should.be.true;
  });

  it('#solve() should return solution x to the equation Ax=b, where A is the complex matrx and b is the complex vector', function() {
    lu.solve.should.be.a.Function;

    (function() {
      lu.solve(new CVector([
        1,
        1,
        1,
        1,
        1
      ]));
    }).should.throw("The matrix must be square");

    lu = CMatrix(3, 3).set([
      0, 1, 1,
      1, 2, 1,
      2, 7, 9
    ]).fullPivLu();

    var x = lu.solve(new CVector([
      1,
      2,
      3
    ]));
    x.should.instanceOf(CVector);
    x.toString().should.equal("(-1,-0)\n  (2,0)\n (-1,0)");

    (function() {
      lu.solve(CVector.Random(1));
    }).should.throw("Invalid argument");
  });

  it('#dimensionOfKernel() should return the dimension of the kernel of the matrix of which *this is the LU decomposition.', function() {
    lu.dimensionOfKernel.should.be.a.Function;

    lu.dimensionOfKernel().should.equal(2);

    CMatrix.Random(2, 2).fullPivLu().dimensionOfKernel().should.equal(0);
    CMatrix.Random(2, 3).fullPivLu().dimensionOfKernel().should.equal(1);
    CMatrix.Random(2, 4).fullPivLu().dimensionOfKernel().should.equal(2);
  });

  it('#kernel() should return the kernel of the matrix' , function() {
    lu.kernel.should.be.a.Function;

    var kernel = lu.kernel();
    kernel.should.instanceOf(CMatrix);
    kernel.visit(function(value, row, col) {
      if (Math.abs(value.real) < 1e-12) value.real = 0;
      if (Math.abs(value.imag) < 1e-12) value.imag = 0

      kernel.set(row, col, value);
    });
    kernel.toString().should.equal("  (0.5,0)  (-0.5,0)\n    (0,0)     (0,0)\n    (1,0)     (0,0)\n(-0.25,0)  (0.75,0)\n    (0,0)     (1,0)");
  });

  it('#rank() should return the rank of the complex matrix of which *this is the LU decomposition.' , function() {
    lu.rank.should.be.a.Function;

    lu.rank().should.equal(3);
  });
});
