const
    Eigen = require('../index.js'),
    PartialPivLU = Eigen.PartialPivLU
    Matrix = Eigen.Matrix,
    Vector = Eigen.Vector,
    should = require('should');

describe('PartialPivLU', function() {
  var mat, mblock, lu, blocklu;

  it('#PartialPivLU() should be a function', function() {
    PartialPivLU.should.be.a.Function;
  });

  beforeEach(function() {
    mat = Matrix(3, 3).set([
      1, 4, 5,
      4, 2, 6,
      5, 6, 3
    ]);
    lu = new PartialPivLU(mat);

    mblock = mat.block(0, 0, 2, 2);
    blocklu = PartialPivLU(mblock);
  });

  it('#PartialPivLU() should be invoked with a Matrix argument', function() {
    lu.should.instanceOf(PartialPivLU);
  });

  it('#PartialPivLU() should be invoked with a MatrixBlock argument', function() {
    blocklu.should.instanceOf(PartialPivLU);
  });

  it('#PartialPivLU() should be invoked with a sequare', function() {
    (function() {
      PartialPivLU(Matrix.Random(2,3));
    }).should.throw("PartialPivLU is only for square (and moreover invertible) matrices");

    (function() {
      PartialPivLU(mat.block(0, 0, 2, 3));
    }).should.throw("PartialPivLU is only for square (and moreover invertible) matrices");
  });

  it('#permutationP() should return the permutation matrix P', function() {
    lu.permutationP.should.be.a.Function;
    blocklu.permutationP.should.be.a.Function;

    var p = lu.permutationP();
    p.toString().should.equal("0 0 1\n0 1 0\n1 0 0");

    p = blocklu.permutationP();
    p.toString().should.equal("0 1\n1 0");
  });

  it('#matrixL() should return the unit-lower-triangular matrix L', function() {
    lu.matrixL.should.be.a.Function;
    blocklu.matrixL.should.be.a.Function;

    var l = lu.matrixL();
    l.toString().should.equal("  1   0   0\n0.8   1   0\n0.2  -1   1");

    l = blocklu.matrixL();
    l.toString().should.equal("   1    0\n0.25    1");
  });

  it('#matrixU() should return the upper-triangular matrix U', function() {
    lu.matrixU.should.be.a.Function;
    blocklu.matrixU.should.be.a.Function;

    var u = lu.matrixU();
    u.toString().should.equal("   5    6    3\n   0 -2.8  3.6\n   0    0    8");

    u = blocklu.matrixU();
    u.toString().should.equal("  4   2\n  0 3.5");
  });

  it('#solve() should return solution x to the equation Ax=b, where A and b are the matrices', function() {
    lu.solve.should.be.a.Function;

    var x = lu.solve(new Matrix(3, 1).set([
      24,
      26,
      26
    ]));
    x.should.instanceOf(Matrix);
    x.toString().should.equal("1\n2\n3");

    x = lu.solve(new Matrix(3, 3).set([
       24,  54,  84,
       26,  62,  98,
       26,  68, 110
    ]));
    x.should.instanceOf(Matrix);
    x.toString().should.equal("1 4 7\n2 5 8\n3 6 9");

    (function() {
      lu.solve(Matrix.Random(1,1));
    }).should.throw("Invalid argument");
  });

  it('#solve() should return solution x to the equation Ax=b, where A is the matrx and b is the vector', function() {
    lu.solve.should.be.a.Function;

    var x = lu.solve(new Vector([
      24,
      26,
      26
    ]));
    x.should.instanceOf(Vector);
    x.toString().should.equal("1\n2\n3");

    (function() {
      lu.solve(Vector.Random(1));
    }).should.throw("Invalid argument");
  });

  it('#determinant() should return the determinant of the matrix of it is the LU decomposition', function() {
    lu.determinant.should.be.a.Function;

    var result = lu.determinant();
    result.should.approximately(112, 1e-3);
    result.should.equal(mat.determinant());
  });

  it('#inverse() should return the inverse of the matrix of which it is the LU decomposition', function() {
    lu.determinant.should.be.a.Function;

    var inv = lu.inverse();
    inv.equals(mat.inverse());
  });
});
