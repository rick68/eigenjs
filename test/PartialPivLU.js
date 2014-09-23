const
    Eigen = require('../index.js'),
    PartialPivLU = Eigen.PartialPivLU
    Matrix = Eigen.Matrix,
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
    }).should.throw("The matrix must be square");

    (function() {
      PartialPivLU(mat.block(0, 0, 2, 3));
    }).should.throw("The matrix must be square");
  });
});
