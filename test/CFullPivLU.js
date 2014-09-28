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
});
