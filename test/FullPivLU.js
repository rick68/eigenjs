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

    lu = Matrix.Random(3, 3).fullPivLu();
    lu.determinant();
  });

  it('#inverse() should return the inverse of the matrix of which it is the LU decomposition', function() {
    lu.inverse.should.be.a.Function;

    (function() {
      lu.inverse();
    }).should.throw("The matrix must be square");

    lu = Matrix.Random(3, 3).fullPivLu()
    lu.inverse();
  });

  it('#isInvertible() should return true if the matrix of which *this is the LU decomposition is invertible.', function() {
    lu.solve.should.be.a.Function;

    lu.isInvertible().should.be.false;

    Matrix(3, 3).set([
      0, 1, 1,
      1, 2, 1,
      2, 7, 9
    ]).fullPivLu().isInvertible().should.be.true;

    Matrix.Random(3, 3).fullPivLu().isInvertible().should.be.true;
  });

  it('#solve() should return solution x to the equation Ax=b, where A and b are the matrices', function() {
    lu.solve.should.be.a.Function;

    (function() {
      lu.solve(new Matrix(5, 2).set([
        1, 2,
        1, 2,
        1, 2,
        1, 2,
        1, 2
      ]));
    }).should.throw("The matrix must be square");

    lu = Matrix(3, 3).set([
      0, 1, 1,
      1, 2, 1,
      2, 7, 9
    ]).fullPivLu();

    var x = lu.solve(new Matrix(3, 2).set([
      1, 4,
      2, 5,
      3, 6
    ]));
    x.should.instanceOf(Matrix);
    x.toString().should.equal("-1 -7\n 2  8\n-1 -4");

    (function() {
      lu.solve(Matrix.Random(1, 1));
    }).should.throw("Invalid argument");
  });

  it('#solve() should return solution x to the equation Ax=b, where A is the matrx and b is the vector', function() {
    lu.solve.should.be.a.Function;

    (function() {
      lu.solve(new Vector([
        1,
        1,
        1,
        1,
        1
      ]));
    }).should.throw("The matrix must be square");

    lu = Matrix(3, 3).set([
      0, 1, 1,
      1, 2, 1,
      2, 7, 9
    ]).fullPivLu();

    var x = lu.solve(new Vector([
      1,
      2,
      3
    ]));
    x.should.instanceOf(Vector);
    x.toString().should.equal("-1\n 2\n-1");

    (function() {
      lu.solve(Vector.Random(1));
    }).should.throw("Invalid argument");
  });

  it('#dimensionOfKernel() should return the dimension of the kernel of the matrix of which *this is the LU decomposition.', function() {
    lu.dimensionOfKernel.should.be.a.Function;

    lu.dimensionOfKernel().should.equal(2);

    Matrix.Random(2, 2).fullPivLu().dimensionOfKernel().should.equal(0);
    Matrix.Random(2, 3).fullPivLu().dimensionOfKernel().should.equal(1);
    Matrix.Random(2, 4).fullPivLu().dimensionOfKernel().should.equal(2);
  });

  it('#dimensionOfKernel() should return the dimension of the kernel of the matrix of which *this is the LU decomposition.', function() {
    lu.dimensionOfKernel.should.be.a.Function;

    lu.dimensionOfKernel().should.equal(2);

    Matrix.Random(2, 2).fullPivLu().dimensionOfKernel().should.equal(0);
    Matrix.Random(2, 3).fullPivLu().dimensionOfKernel().should.equal(1);
    Matrix.Random(2, 4).fullPivLu().dimensionOfKernel().should.equal(2);
  });

  it('#kernel() should return the kernel of the matrix.' , function() {
    lu.kernel.should.be.a.Function;

    lu.kernel().toString().should.equal("         0.5         -0.5\n-1.18952e-16  3.09276e-16\n           1            0\n       -0.25         0.75\n           0            1");
  });

  it('#rank() should return the rank of the matrix of which *this is the LU decomposition.', function() {
    lu.rank.should.be.a.Function;

    lu.rank().should.equal(3);
  });
});
