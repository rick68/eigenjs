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

    lu = CMatrix.Random(3, 3);
    lu.determinant();
  });
});
