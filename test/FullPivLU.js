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
});
