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
    p.toString().should.equal("0 0 1\n1 0 0\n0 1 0");

    p = cblocklu.permutationP();
    p.toString().should.equal("0 0 1\n1 0 0\n0 1 0");
  });

  it('#permutationQ() should return the permutation matrix Q', function() {
    lu.permutationQ.should.be.a.Function;
    cblocklu.permutationP.should.be.a.Function;

    var q = lu.permutationQ();
    q.toString().should.equal("0 0 1 0 0\n0 1 0 0 0\n0 0 0 1 0\n1 0 0 0 0\n0 0 0 0 1");

    q = cblocklu.permutationQ();
    q.toString().should.equal("0 1 0\n0 0 1\n1 0 0");
  });
});
