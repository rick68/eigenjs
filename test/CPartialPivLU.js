const
    Eigen = require('../index.js'),
    CPartialPivLU = Eigen.CPartialPivLU
    CMatrix = Eigen.CMatrix,
    CVector = Eigen.CVector,
    should = require('should');

describe('CPartialPivLU', function() {
  var cmat, cmblock, lu, cblocklu;

  it('#CPartialPivLU() should be a function', function() {
    CPartialPivLU.should.be.a.Function;
  });

  beforeEach(function() {
    cmat = CMatrix(3, 3).set([
      1, 4, 5,
      4, 2, 6,
      5, 6, 3
    ]);
    lu = new CPartialPivLU(cmat);

    cmblock = cmat.block(0, 0, 2, 2);
    cblocklu = CPartialPivLU(cmblock);
  });

  it('#CPartialPivLU() should be invoked with a CMatrix argument', function() {
    lu.should.instanceOf(CPartialPivLU);
  });

  it('#CPartialPivLU() should be invoked with a CMatrixBlock argument', function() {
    cblocklu.should.instanceOf(CPartialPivLU);
  });

  it('#CPartialPivLU() should be invoked with a sequare', function() {
    (function() {
      CPartialPivLU(CMatrix.Random(2,3));
    }).should.throw("CPartialPivLU is only for square (and moreover invertible) complex matrices");

    (function() {
      CPartialPivLU(cmat.block(0, 0, 2, 3));
    }).should.throw("CPartialPivLU is only for square (and moreover invertible) complex matrices");
  });

  it('#permutationP() should return the permutation matrix P', function() {
    lu.permutationP.should.be.a.Function;
    cblocklu.permutationP.should.be.a.Function;

    var p = lu.permutationP();
    p.toString().should.equal("(0,0) (0,0) (1,0)\n(0,0) (1,0) (0,0)\n(1,0) (0,0) (0,0)");

    p = cblocklu.permutationP();
    p.toString().should.equal("(0,0) (1,0)\n(1,0) (0,0)");
  });

  it('#matrixL() should return the complex unit-lower-triangular matrix L', function() {
    lu.matrixL.should.be.a.Function;
    cblocklu.matrixL.should.be.a.Function;

    var l = lu.matrixL();
    l.toString().should.equal("  (1,0)   (0,0)   (0,0)\n(0.8,0)   (1,0)   (0,0)\n(0.2,0) (-1,-0)   (1,0)");

    l = cblocklu.matrixL();
    l.toString().should.equal("   (1,0)    (0,0)\n(0.25,0)    (1,0)");
  });

  it('#matrixU() should return the complex upper-triangular matrix U', function() {
    lu.matrixU.should.be.a.Function;
    cblocklu.matrixU.should.be.a.Function;

    var u = lu.matrixU();
    u.toString().should.equal("   (5,0)    (6,0)    (3,0)\n   (0,0) (-2.8,0)  (3.6,0)\n   (0,0)    (0,0)    (8,0)");

    u = cblocklu.matrixU();
    u.toString().should.equal("  (4,0)   (2,0)\n  (0,0) (3.5,0)");
  });

  it('#solve() should return solution x to the equation Ax=b, where A and b are the matrices', function() {
    lu.solve.should.be.a.Function;

    var x = lu.solve(new CMatrix(3, 1).set([
      24,
      26,
      26
    ]));
    x.should.instanceOf(CMatrix);
    x.toString().should.equal("(1,0)\n(2,0)\n(3,0)");

    x = lu.solve(new CMatrix(3, 3).set([
       24,  54,  84,
       26,  62,  98,
       26,  68, 110
    ]));
    x.should.instanceOf(CMatrix);
    x.toString().should.equal("(1,0) (4,0) (7,0)\n(2,0) (5,0) (8,0)\n(3,0) (6,0) (9,0)");

    (function() {
      lu.solve(CMatrix.Random(1,1));
    }).should.throw("Invalid argument");
  });

  it('#solve() should return solution x to the equation Ax=b, where A is the matrx and b is the vector', function() {
    lu.solve.should.be.a.Function;

    var x = lu.solve(new CVector([
      24,
      26,
      26
    ]));
    x.should.instanceOf(CVector);
    x.isApprox(CVector([
      1,
      2,
      3
    ])).should.be.true;

    (function() {
      lu.solve(CVector.Random(1));
    }).should.throw("Invalid argument");
  });

  it('#determinant() should return the determinant of the matrix of it is the LU decomposition', function() {
    lu.determinant.should.be.a.Function;

    var result = lu.determinant();
    result.equals(112).should.be.true;
    result.equals(cmat.determinant()).should.be.true;
  });

  it('#inverse() should return the inverse of the matrix of which it is the LU decomposition', function() {
    lu.determinant.should.be.a.Function;

    var inv = lu.inverse();
    inv.equals(cmat.inverse());
  });
});
