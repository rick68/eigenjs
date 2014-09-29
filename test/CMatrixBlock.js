const
    Eigen = require('../index.js'),
    Complex = Eigen.Complex,
    Matrix = Eigen.Matrix,
    Vector = Eigen.Vector,
    RowVector = Eigen.RowVector,
    CMatrix = Eigen.CMatrix,
    CVector = Eigen.CVector,
    CRowVector = Eigen.CRowVector,
    MatrixBlock = Eigen.MatrixBlock,
    CMatrixBlock = Eigen.CMatrixBlock,
    CPartialPivLU = Eigen.CPartialPivLU,
    CFullPivLU = Eigen.CFullPivLU,
    should = require('should');

describe('CMatrixBlock', function() {
  var cmat, cmblock;

  it('#CMatrixBlock() should be a function', function() {
    CMatrixBlock.should.be.a.Function;
  });

  beforeEach(function() {
    cmat = CMatrix(4, 4).set([
       1,  2,  3,  4,
       5,  6,  7,  8,
       9, 10, 11, 12,
      13, 14, 15, 16
    ]);

    cmblock = new CMatrixBlock(cmat, 1, 1, 2, 2);
  });

  it('should throw error when tried creating a complex matrix block with invalid arguments', function() {
    (function() {
      new CMatrixBlock(cmat, -1, -2, -3, -4);
    }).should.throw('The row or column number is out of range');

    (function() {
      new CMatrixBlock(cmat, 0, 0, 4, 4);
    }).should.not.throw();

    (function() {
      new CMatrixBlock(cmat, 4, 4, 0, 0);
    }).should.not.throw();

    (function() {
      new CMatrixBlock(cmat, 0, 0, 5, 4);
    }).should.throw('The row or column number is out of range');
  });

  it('should be invoked with arguments and return an object', function() {
    var cmblock2 = new CMatrixBlock(cmat, 1, 1, 2, 2);
    cmblock2.should.be.an.Object;
    cmblock2.should.instanceOf(CMatrixBlock);
  });

  it('#CMatrixBlock(mat, 1, 1, 2, 2) should return the complex matrix block of size 2x2', function() {
    var cmblock2 = new CMatrixBlock(cmat, 1, 1, 2, 2);
    cmblock2.rows().should.equal(2);
    cmblock2.cols().should.equal(2);
  });

  it('#set() should throw message when row or column numbers are out of range', function() {
    cmblock.set.should.be.a.Function;

    (function() {
      cmblock.set(3, 0, 68);
    }).should.throw('The row or column number is out of range');

    (function() {
      cmblock.set(-1, -2, 500);
    }).should.throw('The row or column number is out of range');
  });

  it('#set() with array argument should work ok', function() {
    cmblock.set.should.be.a.Function;

    cmblock.set([
      -1, -2,
      -3, -4
    ]).toString().should.eql("(-1,0) (-2,0)\n(-3,0) (-4,0)");

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0) (-1,0) (-2,0)  (8,0)\n (9,0) (-3,0) (-4,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    (function() {
      cmblock.set([
        1, 2
      ]);
    }).should.throw('Too few coefficients');

    (function() {
      cmblock.set([
         1,  2,  3,
         4,  5,  6
      ]);
    }).should.throw('Too many coefficients');
  });

  it('#get() should return the element value of CMatrixBlock', function() {
    cmblock.get.should.be.a.Function;

    cmblock.get(0, 0).equals(Complex(6));
    cmblock.get(0, 1).equals(Complex(7));
    cmblock.get(1, 0).equals(Complex(10));
    cmblock.get(1, 1).equals(Complex(11));

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    (function(){
      cmblock.get(2, 0);
    }).should.throw('The row or column number is out of range');
  });

  it('#value() should return the unique coefficient of a 1x1 expression', function() {
    cmblock.value.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    (function(){
      cmblock.value();
    }).should.throw('The size of row and column values must equal 1');

    var cmblock2 = cmblock.block(0, 0, 1, 1);
    cmblock2.value().equals(6).should.be.true;
  });

  it('#setZero() should set all coefficients to zero', function() {
    cmblock.setZero.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");
    cmblock.setZero().toString().should.equal("(0,0) (0,0)\n(0,0) (0,0)");
    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (0,0)  (0,0)  (8,0)\n (9,0)  (0,0)  (0,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
  });

  it('#setOnes() should set all coefficients to ones', function() {
    cmblock.setOnes.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");
    cmblock.setOnes().toString().should.equal("(1,0) (1,0)\n(1,0) (1,0)");
    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (1,0)  (1,0)  (8,0)\n (9,0)  (1,0)  (1,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
  });

  it('#setConstant() should set all coefficients to constant', function() {
    cmblock.setConstant.should.be.a.Function;

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
    cmblock.setConstant(0.6).toString().should.equal("(0.6,0) (0.6,0)\n(0.6,0) (0.6,0)");
    cmat.toString().should.equal("  (1,0)   (2,0)   (3,0)   (4,0)\n  (5,0) (0.6,0) (0.6,0)   (8,0)\n  (9,0) (0.6,0) (0.6,0)  (12,0)\n (13,0)  (14,0)  (15,0)  (16,0)");

    cmblock.setConstant(Complex(3, -4)).toString().should.equal("(3,-4) (3,-4)\n(3,-4) (3,-4)");
    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0) (3,-4) (3,-4)  (8,0)\n (9,0) (3,-4) (3,-4) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
  });

  it('#setRandom() should set all coefficients to random', function() {
    cmblock.setRandom.should.be.a.Function;
    cmblock.setRandom();
  });

  it('#setIdentity() should write the identity expression into itself', function() {
    cmblock.setIdentity.should.be.a.Function;

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");
    cmblock.setIdentity().toString().should.equal("(1,0) (0,0)\n(0,0) (1,0)");
    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (1,0)  (0,0)  (8,0)\n (9,0)  (0,0)  (1,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
  });

  it('#setDiagonal() should set the diagonal to other values', function() {
    cmblock.setDiagonal.should.be.a.Function;

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");
    cmblock.setDiagonal(0, Vector.Zero(2)).toString().should.equal(" (0,0)  (7,0)\n(10,0)  (0,0)");
    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (0,0)  (7,0)  (8,0)\n (9,0) (10,0)  (0,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    cmblock.setDiagonal(0, RowVector.Ones(2)).toString().should.equal(" (1,0)  (7,0)\n(10,0)  (1,0)");
    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (1,0)  (7,0)  (8,0)\n (9,0) (10,0)  (1,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    cmblock.setDiagonal(0, CVector.Zero(2)).toString().should.equal(" (0,0)  (7,0)\n(10,0)  (0,0)");
    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (0,0)  (7,0)  (8,0)\n (9,0) (10,0)  (0,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    cmblock.setDiagonal(0, CRowVector.Ones(2)).toString().should.equal(" (1,0)  (7,0)\n(10,0)  (1,0)");
    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (1,0)  (7,0)  (8,0)\n (9,0) (10,0)  (1,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    (function(){
      cmblock.setDiagonal(68, Vector.Random(2));
    }).should.throw('Invalid index argument');

    (function(){
      cmblock.setDiagonal(-500, RowVector.Random(2));
    }).should.throw('Invalid index argument');

    (function(){
      cmblock.setDiagonal(68, CVector.Random(2));
    }).should.throw('Invalid index argument');

    (function(){
      cmblock.setDiagonal(-500, CRowVector.Random(2));
    }).should.throw('Invalid index argument');
  });

  it('#toString() should return all element values of CMatrixBlock', function() {
    cmblock.toString.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");
  });

  it('#assign() should assign a complex matrix blocks in another', function() {
    cmblock.assign.should.be.a.Function;

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");
    cmblock.assign(CMatrix.Zero(2)).toString().should.equal("(0,0) (0,0)\n(0,0) (0,0)");
    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (0,0)  (0,0)  (8,0)\n (9,0)  (0,0)  (0,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
  });

  it('#assign() should assign a complex matrix block in a matrix', function() {
    cmblock.assign.should.be.a.Function;

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");
    cmblock.assign(Matrix.Zero(2)).toString().should.equal("(0,0) (0,0)\n(0,0) (0,0)");
    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (0,0)  (0,0)  (8,0)\n (9,0)  (0,0)  (0,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
  });

  it('#assign() should assign a complex matrix block in a vector', function() {
    cmblock.assign.should.be.a.Function;

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    var cmblock2 = new CMatrixBlock(cmat, 0, 0, 4, 1);
    cmblock2.toString().should.equal(" (1,0)\n (5,0)\n (9,0)\n(13,0)");

    cmblock2.assign(Vector.Zero(4)).toString().should.equal("(0,0)\n(0,0)\n(0,0)\n(0,0)");
    cmat.toString().should.equal(" (0,0)  (2,0)  (3,0)  (4,0)\n (0,0)  (6,0)  (7,0)  (8,0)\n (0,0) (10,0) (11,0) (12,0)\n (0,0) (14,0) (15,0) (16,0)");
  });

  it('#assign() should assign a complex matrix block in a row-vector', function() {
    cmblock.assign.should.be.a.Function;

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    var cmblock2 = new CMatrixBlock(cmat, 0, 0, 1, 4);
    cmblock2.toString().should.equal("(1,0) (2,0) (3,0) (4,0)");

    cmblock2.assign(RowVector.Zero(4)).toString().should.equal("(0,0) (0,0) (0,0) (0,0)");
    cmat.toString().should.equal(" (0,0)  (0,0)  (0,0)  (0,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
  });

  it('#assign() should assign a complex matrix block in a complex matrix', function() {
    cmblock.assign.should.be.a.Function;

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");
    cmblock.assign(CMatrix.Zero(2)).toString().should.equal("(0,0) (0,0)\n(0,0) (0,0)");
    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (0,0)  (0,0)  (8,0)\n (9,0)  (0,0)  (0,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
  });

  it('#assign() should assign a complex matrix block in a complex vector', function() {
    cmblock.assign.should.be.a.Function;

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    var cmblock2 = new CMatrixBlock(cmat, 0, 0, 4, 1);
    cmblock2.toString().should.equal(" (1,0)\n (5,0)\n (9,0)\n(13,0)");

    cmblock2.assign(CVector.Zero(4)).toString().should.equal("(0,0)\n(0,0)\n(0,0)\n(0,0)");
    cmat.toString().should.equal(" (0,0)  (2,0)  (3,0)  (4,0)\n (0,0)  (6,0)  (7,0)  (8,0)\n (0,0) (10,0) (11,0) (12,0)\n (0,0) (14,0) (15,0) (16,0)");
  });

  it('#assign() should assign a complex matrix block in a complex row-vector', function() {
    cmblock.assign.should.be.a.Function;

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    var cmblock2 = new CMatrixBlock(cmat, 0, 0, 1, 4);
    cmblock2.toString().should.equal("(1,0) (2,0) (3,0) (4,0)");

    cmblock2.assign(CRowVector.Zero(4)).toString().should.equal("(0,0) (0,0) (0,0) (0,0)");
    cmat.toString().should.equal(" (0,0)  (0,0)  (0,0)  (0,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
  });

  it('#add() should return the sum of two complex matrix blocks', function() {
    cmblock.add.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var cmblock2 = CMatrixBlock(cmat, 0, 0, 2, 2);
    cmblock2.toString().should.equal("(1,0) (2,0)\n(5,0) (6,0)");

    var mat2 = cmblock.add(cmblock2);
    mat2.should.instanceOf(CMatrix);
    mat2.toString().should.equal(" (7,0)  (9,0)\n(15,0) (17,0)");
  });

  it('#add() should return the sum of a complex matrix block and a matrix', function() {
    cmblock.add.should.be.a.Function;

    var cmat2 = CMatrix(2, 2).set([
       -1, -2,
       -3, -4
    ]);

    var cmat3 = cmblock.add(cmat2);
    cmat3.should.instanceOf(CMatrix);
    cmat3.toString().should.equal("(5,0) (5,0)\n(7,0) (7,0)");
    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    cmblock.assign(cmat3);
    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (5,0)  (5,0)  (8,0)\n (9,0)  (7,0)  (7,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    (function() {
      cmblock.assign(Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex matrix block and a vector', function() {
    cmblock.add.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 0, 1, 4, 1);
    cmblock2.toString().should.equal(" (2,0)\n (6,0)\n(10,0)\n(14,0)");
    var vec = Vector(cmblock2.rows())
      .set([
         2,
         6,
        10,
        14
      ]);

    var vec2 = cmblock2.add(vec);
    vec2.should.instanceOf(CMatrix);
    vec2.toString().should.equal(" (4,0)\n(12,0)\n(20,0)\n(28,0)");
  });

  it('#add() should return the sum of a complex matrix block and a row-vector', function() {
    cmblock.add.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 1, 0, 1, 4);
    cmblock2.toString().should.equal("(5,0) (6,0) (7,0) (8,0)");
    var rvec = RowVector(cmblock2.cols())
      .set([
        2, 6, 10, 14
      ]);

    var crvec2 = cmblock2.add(rvec);
    crvec2.should.instanceOf(CMatrix);
    crvec2.toString().should.equal(" (7,0) (12,0) (17,0) (22,0)");
  });

  it('#add() should return a CMatrix with the sum of a complex matrix block and a matrix block', function() {
    cmblock.add.should.be.a.Function;

    var mat = Matrix(2, 2).set([
      -1,  -2,
      -3,  -4
    ]);
    var mblock = new MatrixBlock(mat, 0, 0, 2, 2);

    cmblock.add(mblock).toString().should.equal("(5,0) (5,0)\n(7,0) (7,0)");

    (function() {
      cmblock.add(CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return a CMatrix with the sum of a complex matrix block and a complex matrix', function() {
    cmblock.add.should.be.a.Function;

    var cmat2 = CMatrix(2, 2).set([
      -1,  -2,
      -3,  -4
    ]);
    cmblock.add(cmat2).toString().should.equal("(5,0) (5,0)\n(7,0) (7,0)");

    (function() {
      cmblock.add(CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex matrix block and a complex vector', function() {
    cmblock.add.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 0, 1, 4, 1);
    cmblock2.toString().should.equal(" (2,0)\n (6,0)\n(10,0)\n(14,0)");
    var cvec = CVector(cmblock2.rows())
      .set([
         2,
         6,
        10,
        14
      ]);

    var cvec2 = cmblock2.add(cvec);
    cvec2.should.instanceOf(CMatrix);
    cvec2.toString().should.equal(" (4,0)\n(12,0)\n(20,0)\n(28,0)");
  });

  it('#add() should return the sum of a complex matrix block and a complex row-vector', function() {
    cmblock.add.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 1, 0, 1, 4);
    cmblock2.toString().should.equal("(5,0) (6,0) (7,0) (8,0)");
    var crvec = CRowVector(cmblock2.cols())
      .set([
        2, 6, 10, 14
      ]);

    var crvec2 = cmblock2.add(crvec);
    crvec2.should.instanceOf(CMatrix);
    crvec2.toString().should.equal(" (7,0) (12,0) (17,0) (22,0)");
  });

  it('#adda() should return the sum of two complex matrix blocks and saves it back', function() {
    cmblock.adda.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var cmblock2 = CMatrixBlock(cmat, 0, 0, 2, 2);
    cmblock2.toString().should.equal("(1,0) (2,0)\n(5,0) (6,0)");

    cmblock.adda(cmblock2);
    cmblock.toString().should.equal(" (7,0)  (9,0)\n(15,0) (18,0)");
    cmblock2.toString().should.equal("(1,0) (2,0)\n(5,0) (7,0)");

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (7,0)  (9,0)  (8,0)\n (9,0) (15,0) (18,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
  });

  it('#adda() should return the sum of a complex matrix block and a matrix then saves it back', function() {
    cmblock.adda.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    cmblock.adda(
      Matrix(2, 2)
        .set([
          -2, -4,
          -6, -8
        ])
    );
    cmblock.toString().should.equal("(4,0) (3,0)\n(4,0) (3,0)");

    (function() {
      cmblock.adda(
        Matrix(2, 3)
        .set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex matrix block and a vector then saves it back', function() {
    cmblock.adda.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 0, 2, 4, 1);
    cmblock2.toString().should.equal(" (3,0)\n (7,0)\n(11,0)\n(15,0)");

    cmblock2.adda(
      Vector(cmblock2.rows())
      .set([
        -2,
        -4,
        -6,
        -8
      ])
    );
    cmblock2.toString().should.equal("(1,0)\n(3,0)\n(5,0)\n(7,0)");

    (function() {
      cmblock2.adda(
        Vector(3)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex matrix block and a row-vector then saves it back', function() {
    cmblock.adda.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 2, 0, 1, 4);
    cmblock2.toString().should.equal(" (9,0) (10,0) (11,0) (12,0)");

    cmblock2.adda(
      RowVector(cmblock2.cols())
      .set([
        -2, -4, -6, -8
      ]));
    cmblock2.toString().should.equal("(7,0) (6,0) (5,0) (4,0)");

    (function() {
      cmblock2.adda(
        RowVector(2)
        .set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex matrix block and a matrix block then saves it back', function() {
    cmblock.adda.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 0, 0, 2, 2);
    cmblock2.toString().should.equal("(1,0) (2,0)\n(5,0) (6,0)");

    var mat = new Matrix(2, 2).set([
      -1, -2,
      -3, -4
    ]);
    var mblock = mat.block(0, 0, 2, 2);

    cmblock2.adda(mblock);
    cmblock2.toString().should.equal("(0,0) (0,0)\n(2,0) (2,0)");
  });

  it('#adda() should return the sum of a complex matrix block and a complex matrix then saves it back', function() {
    cmblock.adda.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    cmblock.adda(
      Matrix(2, 2)
        .set([
          -2, -4,
          -6, -8
        ])
    );
    cmblock.toString().should.equal("(4,0) (3,0)\n(4,0) (3,0)");

    (function() {
      cmblock.adda(
        Matrix(2, 3)
        .set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex matrix block and a complex vector then saves it back', function() {
    cmblock.adda.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 0, 2, 4, 1);
    cmblock2.toString().should.equal(" (3,0)\n (7,0)\n(11,0)\n(15,0)");

    cmblock2.adda(
      CVector(cmblock2.rows())
      .set([
        -2,
        -4,
        -6,
        -8
      ])
    );
    cmblock2.toString().should.equal("(1,0)\n(3,0)\n(5,0)\n(7,0)");

    (function() {
      cmblock2.adda(
        CVector(3)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex matrix block and a complex row-vector then saves it back', function() {
    cmblock.adda.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 2, 0, 1, 4);
    cmblock2.toString().should.equal(" (9,0) (10,0) (11,0) (12,0)");

    cmblock2.adda(
      CRowVector(cmblock2.cols())
      .set([
        -2, -4, -6, -8
      ]));
    cmblock2.toString().should.equal("(7,0) (6,0) (5,0) (4,0)");

    (function() {
      cmblock2.adda(
        CRowVector(2)
        .set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of two complex matrix block', function() {
    cmblock.sub.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var cmblock2 = CMatrixBlock(cmat, 0, 0, 2, 2);
    cmblock2.toString().should.equal("(1,0) (2,0)\n(5,0) (6,0)");

    var cmat2 = cmblock.sub(cmblock2);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(5,0) (5,0)\n(5,0) (5,0)");
  });

  it('#sub() should return the difference of a complex matrix block and a matrix', function() {
    cmblock.sub.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var cmat2 = cmblock.sub(new Matrix(2, 2).set([
      1, 2,
      3, 4
    ]));
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(5,0) (5,0)\n(7,0) (7,0)");

    (function() {
      cmblock.sub(new Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex matrix block and a vector', function() {
    cmblock.sub.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 0, 0, 4, 1);
    cmblock2.toString().should.equal(" (1,0)\n (5,0)\n (9,0)\n(13,0)");

    var cmat2 = cmblock2.sub(new Vector([
      1,
      2,
      3,
      4
    ]));
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(0,0)\n(3,0)\n(6,0)\n(9,0)");

    (function() {
      cmblock2.sub(new Vector(2).set([
        1,
        0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex matrix block and a row-vector', function() {
    cmblock.sub.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 0, 0, 1, 4);
    cmblock2.toString().should.equal("(1,0) (2,0) (3,0) (4,0)");

    var cmat2 = cmblock2.sub(new RowVector([
      1, 2, 3, 4
    ]));
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(0,0) (0,0) (0,0) (0,0)");

    (function() {
      cmblock2.sub(new RowVector(2).set([
        1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex matrix block and a matrix block', function() {
    cmblock.sub.should.be.a.Function;

    var mat = new Matrix(1, 4).set([
      -1, -2, -3, -4
    ]);
    var mblock = mat.block(0, 0, 1, 4);

    var cmblock2 = new CMatrixBlock(cmat, 0, 0, 1, 4);
    cmblock2.toString().should.equal("(1,0) (2,0) (3,0) (4,0)");

    var cmat2 = cmblock2.sub(mblock);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(2,0) (4,0) (6,0) (8,0)");
  });

  it('#sub() should return a CMatrix with the difference of a complex matrix block and a complex matrix', function() {
    cmblock.sub.should.be.a.Function;

    var cmat = CMatrix(2, 2).set([
      Complex(2, 0), Complex(4, 1), 
      Complex(6, 2), Complex(8, 4)
    ]);

    var cmat2 = cmblock.sub(cmat);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal(" (4,0) (3,-1)\n(4,-2) (3,-4)");

    (function() {
      cmblock.sub(
        CMatrix(2, 3).set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a complex matrix block and a complex vector', function() {
    cmblock.sub.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 0, 0, 4, 1);
    cmblock2.toString().should.equal(" (1,0)\n (5,0)\n (9,0)\n(13,0)");

    var cvec = CVector([
      Complex(2, 0),
      Complex(4, 1), 
      Complex(6, 2),
      Complex(8, 4)
    ]);

    var cmat2 = cmblock2.sub(cvec);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(-1,0)\n(1,-1)\n(3,-2)\n(5,-4)");

    (function() {
      cmblock2.sub(
        CVector(2).set([
          1,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a matrix block and a complex row-vector', function() {
    cmblock.sub.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 0, 0, 1, 4);
    cmblock2.toString().should.equal("(1,0) (2,0) (3,0) (4,0)");

    var crvec = CRowVector([
      Complex(2, 0), Complex(4, 1), Complex(6, 2), Complex(8, 4)
    ]);

    var cmat2 = cmblock2.sub(crvec);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal(" (-1,0) (-2,-1) (-3,-2) (-4,-4)");

    (function() {
      cmblock2.sub(
        CRowVector(2).set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the sum of two complex matrix blocks and saves it back', function() {
    cmblock.suba.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var cmblock2 = new CMatrixBlock(cmat, 0, 0, 2, 2);
    cmblock2.toString().should.equal("(1,0) (2,0)\n(5,0) (6,0)");

    cmblock.suba(cmblock2);
    cmblock.toString().should.equal("(5,0) (5,0)\n(5,0) (6,0)");
    cmblock2.toString().should.equal("(1,0) (2,0)\n(5,0) (5,0)");

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (5,0)  (5,0)  (8,0)\n (9,0)  (5,0)  (6,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
  });

  it('#suba() should return the difference of a complex matrix block and a matrix then saves it back', function() {
    cmblock.suba.should.be.a.Function;

    var mat2 = Matrix(2, 2)
    .set([
      1, 3,
      5, 7
    ]);
    cmblock.suba(mat2);
    cmblock.toString().should.equal("(5,0) (4,0)\n(5,0) (4,0)");

    (function() {
      cmblock.suba(
        Matrix(2, 3)
        .set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of a matrix block and a vector then saves it back', function() {
    cmblock.suba.should.be.a.Function;

    var cmblock2 = CMatrixBlock(cmat, 0, 2, 4, 1);
    cmblock2.toString().should.equal(" (3,0)\n (7,0)\n(11,0)\n(15,0)");

    var vec = new Vector([
      1,
      3,
      5,
      7
    ]);
    cmblock2.suba(vec);
    cmblock2.toString().should.equal("(2,0)\n(4,0)\n(6,0)\n(8,0)");

    cmat.toString().should.equal(" (1,0)  (2,0)  (2,0)  (4,0)\n (5,0)  (6,0)  (4,0)  (8,0)\n (9,0) (10,0)  (6,0) (12,0)\n(13,0) (14,0)  (8,0) (16,0)");
  });

  it('#suba() should return the difference of a matrix block and a row-vector then saves it back', function() {
    cmblock.suba.should.be.a.Function;

    var cmblock2 = CMatrixBlock(cmat, 3, 0, 1, 4);
    cmblock2.toString().should.equal("(13,0) (14,0) (15,0) (16,0)");

    var rvec = new RowVector([
      1, 3, 5, 7
    ]);
    cmblock2.suba(rvec);
    cmblock2.toString().should.equal("(12,0) (11,0) (10,0)  (9,0)");

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(12,0) (11,0) (10,0)  (9,0)");
  });

  it('#suba() should return the difference of a complex matrix block and a complex matrix then saves it back', function() {
    cmblock.suba.should.be.a.Function;

    var cmat2 = CMatrix(2, 2)
    .set([
      1, 3,
      5, 7
    ]);
    cmblock.suba(cmat2);
    cmblock.toString().should.equal("(5,0) (4,0)\n(5,0) (4,0)");

    (function() {
      cmblock.suba(
        CMatrix(2, 3)
        .set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of a matrix block and a complex vector then saves it back', function() {
    cmblock.suba.should.be.a.Function;

    var cmblock2 = CMatrixBlock(cmat, 0, 2, 4, 1);
    cmblock2.toString().should.equal(" (3,0)\n (7,0)\n(11,0)\n(15,0)");

    var cvec = new CVector([
      1,
      3,
      5,
      7
    ]);
    cmblock2.suba(cvec);
    cmblock2.toString().should.equal("(2,0)\n(4,0)\n(6,0)\n(8,0)");

    cmat.toString().should.equal(" (1,0)  (2,0)  (2,0)  (4,0)\n (5,0)  (6,0)  (4,0)  (8,0)\n (9,0) (10,0)  (6,0) (12,0)\n(13,0) (14,0)  (8,0) (16,0)");
  });

  it('#suba() should return the difference of a matrix block and a complex row-vector then saves it back', function() {
    cmblock.suba.should.be.a.Function;

    var cmblock2 = CMatrixBlock(cmat, 3, 0, 1, 4);
    cmblock2.toString().should.equal("(13,0) (14,0) (15,0) (16,0)");

    var crvec = new CRowVector([
      1, 3, 5, 7
    ]);
    cmblock2.suba(crvec);
    cmblock2.toString().should.equal("(12,0) (11,0) (10,0)  (9,0)");

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(12,0) (11,0) (10,0)  (9,0)");
  });

  it('#mul() should return the product of two complex matrix blocks', function() {
    cmblock.mul.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 0, 0, 2, 2);
    cmblock2.toString().should.equal("(1,0) (2,0)\n(5,0) (6,0)");

    var cmat2 = cmblock.mul(cmblock2);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(41,0) (54,0)\n(65,0) (86,0)");

    (function() {
      cmblock.mul(CMatrixBlock(cmat, 0, 0, 3, 2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex matrix block and a matrix', function() {
    cmblock.mul.should.be.a.Function;

    var cmat2 = cmblock.mul(new Matrix(2, 2).set([
      1, 2,
      3, 4
    ]));
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(27,0) (40,0)\n(43,0) (64,0)");

    (function() {
      cmblock.mul(Matrix(3, 2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex matrix block and a vector', function() {
    cmblock.mul.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 3, 1, 1, 3);
    cmblock2.toString().should.equal("(14,0) (15,0) (16,0)");

    var vec = new Vector([
      1,
      2,
      3
    ]);
    var cmat2 = cmblock2.mul(vec);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(92,0)");

    (function() {
      cmblock.mul(vec);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex matrix block and a row-vector', function() {
    cmblock.mul.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 1, 3, 3, 1);
    cmblock2.toString().should.equal(" (8,0)\n(12,0)\n(16,0)");

    var rvec = new RowVector([1, 2, 3]);
    var cmat2 = cmblock2.mul(rvec);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal(" (8,0) (16,0) (24,0)\n(12,0) (24,0) (36,0)\n(16,0) (32,0) (48,0)");

    (function() {
      cmblock.mul(rvec);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex matrix block and a matrix block', function() {
    cmblock.mul.should.be.a.Function;

    var mat = new Matrix(2, 2).set([
      -1, -2,
      -3, -4
    ]);
    var mblock = mat.block(0, 0, 2, 2);

    var cmat2 = cmblock.mul(mblock);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(-27,0) (-40,0)\n(-43,0) (-64,0)");
  });

  it('#mul() should return a CMatrix with the product of a complex matrix block and a complex matrix', function() {
    cmblock.mul.should.be.a.Function;

    var cmat = new CMatrix(2, 2).set([
      Complex(1, 1), Complex(2, 2),
      Complex(3, 3), Complex(4, 4)
    ]);
    var cmat2 = cmblock.mul(cmat);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(27,27) (40,40)\n(43,43) (64,64)");

    (function() {
      cmblock.mul(new CMatrix(3, 3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a complex matrix block and a complex vector', function() {
    cmblock.mul.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 0, 0, 1, 3);
    cmblock2.toString().should.equal("(1,0) (2,0) (3,0)");

    var cvec = new CVector(3).set([
      Complex(1, 1),
      Complex(2, 2),
      Complex(3, 3)
    ]);
    var cmat2 = cmblock2.mul(cvec);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(14,14)");

    (function() {
      cmblock.mul(new CVector(1));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a complex matrix block and a complex row-vector', function() {
    cmblock.mul.should.be.a.Function;

    var cmblock2 = new CMatrixBlock(cmat, 0, 0, 3, 1);
    cmblock2.toString().should.equal("(1,0)\n(5,0)\n(9,0)");

    var crvec = new CRowVector(3).set([
      Complex(1, 1), Complex(2, 2), Complex(3, 3)
    ]);
    var cmat2 = cmblock2.mul(crvec);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("  (1,1)   (2,2)   (3,3)\n  (5,5) (10,10) (15,15)\n  (9,9) (18,18) (27,27)");

    (function() {
      cmblock.mul(new CRowVector(3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a matrix block and a scalar value', function() {
    cmblock.mul.should.be.a.Function;

    var cmat2 = cmblock.mul(-1);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal(" (-6,0)  (-7,0)\n(-10,0) (-11,0)");
  });

  it('#mul() should return the product of a matrix block and a complex value', function() {
    cmblock.mul.should.be.a.Function;

    var cmat2 = cmblock.mul(Complex(-1));
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal(" (-6,0)  (-7,0)\n(-10,0) (-11,0)");
  });

  it('#mula() should return the product of two complex matrix block and saves it back', function() {
    cmblock.mula.should.be.a.Function;

    var cmat2 = new CMatrix(2, 2).set([
      -1, -2,
      -3, -4
    ]);
    var cmblock2 = cmat2.block(0, 0, 2, 2);
    cmblock2.should.instanceOf(CMatrixBlock);

    cmblock.mula(cmblock2);
    cmblock.toString().should.equal("(-27,0) (-40,0)\n(-43,0) (-64,0)");

    cmat.toString().should.equal("  (1,0)   (2,0)   (3,0)   (4,0)\n  (5,0) (-27,0) (-40,0)   (8,0)\n  (9,0) (-43,0) (-64,0)  (12,0)\n (13,0)  (14,0)  (15,0)  (16,0)");

    (function() {
      cmblock.mula(new CMatrixBlock(cmat, 0, 0, 2, 3));
    }).should.throw("The complex matrix block size must be mxm");
  });

  it('#mula() should return the product of a complex matrix block and a matrix then saves it back', function() {
    cmblock.mula.should.be.a.Function;

    var mat = new Matrix(2, 2).set([
      -1, -2,
      -3, -4
    ]);

    cmblock.mula(mat);
    cmblock.toString().should.equal("(-27,0) (-40,0)\n(-43,0) (-64,0)");

    cmat.toString().should.equal("  (1,0)   (2,0)   (3,0)   (4,0)\n  (5,0) (-27,0) (-40,0)   (8,0)\n  (9,0) (-43,0) (-64,0)  (12,0)\n (13,0)  (14,0)  (15,0)  (16,0)");
  });

  it('#mula() should return the product of a complex matrix block and a vector then saves it back', function() {
    cmblock.mula.should.be.a.Function;

    var cmblock2 = CMatrixBlock(cmat, 0, 0, 1, 1);
    cmblock2.toString().should.equal("(1,0)");

    cmblock2.mula(new Vector([-1]));
    cmblock2.toString().should.equal("(-1,0)");

    cmat.toString().should.equal("(-1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    (function() {
      cmblock.mula(new Vector([
        -1,
        -2
      ]))
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a complex matrix block and a row-vector then saves it back', function() {
    cmblock.mula.should.be.a.Function;

    var cmblock2 = CMatrixBlock(cmat, 0, 0, 1, 1);
    cmblock2.toString().should.equal("(1,0)");

    cmblock2.mula(new RowVector([2]));
    cmblock2.toString().should.equal("(2,0)");

    cmat.toString().should.equal(" (2,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    (function() {
      cmblock2.mula(new RowVector([
        -1, -2
      ]))
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a complex matrix block and a matrix block then saves it back', function() {
    cmblock.mula.should.be.a.Function;

    var mat = new Matrix(2, 2).set([
      -1, -2,
      -3, -4
    ]);
    var mblock = mat.block(0, 0, 2, 2);
    mblock.should.instanceOf(MatrixBlock);

    cmblock.mula(mblock);
    cmblock.toString().should.equal("(-27,0) (-40,0)\n(-43,0) (-64,0)");

    cmat.toString().should.equal("  (1,0)   (2,0)   (3,0)   (4,0)\n  (5,0) (-27,0) (-40,0)   (8,0)\n  (9,0) (-43,0) (-64,0)  (12,0)\n (13,0)  (14,0)  (15,0)  (16,0)");

    (function() {
      cmblock.mula(new CMatrixBlock(cmat, 0, 0, 2, 3));
    }).should.throw("The complex matrix block size must be mxm");
  });

  it('#mula() should return the product of a complex matrix block and a complex matrix then saves it back', function() {
    cmblock.mula.should.be.a.Function;

    var cmat2 = new CMatrix(2, 2).set([
      -1, -2,
      -3, -4
    ]);

    cmblock.mula(cmat2);
    cmblock.toString().should.equal("(-27,0) (-40,0)\n(-43,0) (-64,0)");

    cmat.toString().should.equal("  (1,0)   (2,0)   (3,0)   (4,0)\n  (5,0) (-27,0) (-40,0)   (8,0)\n  (9,0) (-43,0) (-64,0)  (12,0)\n (13,0)  (14,0)  (15,0)  (16,0)");
  });

  it('#mula() should return the product of a complex matrix block and a complex vector then saves it back', function() {
    cmblock.mula.should.be.a.Function;

    var cmblock2 = CMatrixBlock(cmat, 0, 0, 1, 1);
    cmblock2.toString().should.equal("(1,0)");

    cmblock2.mula(new CVector([-1]));
    cmblock2.toString().should.equal("(-1,0)");

    cmat.toString().should.equal("(-1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    (function() {
      cmblock.mula(new CVector([
        -1,
        -2
      ]))
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a complex matrix block and a complex row-vector then saves it back', function() {
    cmblock.mula.should.be.a.Function;

    var cmblock2 = CMatrixBlock(cmat, 0, 0, 1, 1);
    cmblock2.toString().should.equal("(1,0)");

    cmblock2.mula(new CRowVector([2]));
    cmblock2.toString().should.equal("(2,0)");

    cmat.toString().should.equal(" (2,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");

    (function() {
      cmblock2.mula(new CRowVector([
        -1, -2
      ]))
    }).should.throw("The operation result is out of range");
  });


  it('#mula() should return the product of a complex matrix block and a scalar value then saves it back', function() {
    cmblock.mula.should.be.a.Function;

    cmblock.mula(-1);
    cmat.toString().should.equal("  (1,0)   (2,0)   (3,0)   (4,0)\n  (5,0)  (-6,0)  (-7,0)   (8,0)\n  (9,0) (-10,0) (-11,0)  (12,0)\n (13,0)  (14,0)  (15,0)  (16,0)");
  });

  it('#div() should return a CMatrix which be divied by a scalar value', function() {
    cmblock.div.should.be.a.Function;

    cmblock.div(2).toString().should.equal("  (3,0) (3.5,0)\n  (5,0) (5.5,0)");
  });

  it('#div() should return a CMatrix which be divied by a complex value', function() {
    cmblock.div.should.be.a.Function;

    var cmat = cmblock.div(Complex(2, 0));
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("  (3,0) (3.5,0)\n  (5,0) (5.5,0)");
  });

  it('#diva() should return a CMatrix which be divied by a scalar value then saves it back', function() {
    cmblock.diva.should.be.a.Function;

    cmblock.diva(2);
    cmat.toString().should.equal("  (1,0)   (2,0)   (3,0)   (4,0)\n  (5,0)   (3,0) (3.5,0)   (8,0)\n  (9,0)   (5,0) (5.5,0)  (12,0)\n (13,0)  (14,0)  (15,0)  (16,0)");
  });

  it('#transpose() should return the transpose of a complex matrix', function() {
    cmblock.transpose.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var cmat2 = cmblock.transpose();
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal(" (6,0) (10,0)\n (7,0) (11,0)");
  });

  it('#conjugate() should return the conjugate of a complex matrix', function() {
    cmblock.conjugate.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var cmat2 = cmblock.conjugate();
    cmat2.should.instanceOf(CMatrix);

    cmat2.toString().should.equal(" (6,-0)  (7,-0)\n(10,-0) (11,-0)");
  });

  it('#adjoint() should return the adjoint of a complex matrix', function() {
    cmblock.adjoint.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var cmat2 = cmblock.adjoint();
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal(" (6,-0) (10,-0)\n (7,-0) (11,-0)");
  });

  it('#determinant() should return the determinant of a complex matrix', function() {
    cmblock.determinant.should.be.a.Function;

    var result = cmblock.determinant();
    result.should.instanceOf(Complex);
    result.abs().should.approximately(4, 1e-12);
  });

  it('#inverse() should return the inverse of a complex matrix', function() {
    cmblock.inverse.should.be.a.Function;

    var cmat2 = cmblock.inverse();
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(-2.75,0)  (1.75,0)\n  (2.5,0)  (-1.5,0)");

    cmblock.mul(cmat2).isApprox(CMatrix.Identity(2)).should.be.true;

    (function() {
      CMatrix(3, 2).block(0, 0, 3, 2).inverse();
    }).should.throw("The matrix must be square");
  });

  it('#trace() should return the trace of a complex matrix', function() {
    cmblock.trace.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var trace = cmblock.trace();
    trace.equals(Complex(17, 0)).should.be.true;
  });

  it('#diagonal() should return the diagonal of a complex matrix', function() {
    cmblock.diagonal.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var dia = cmblock.diagonal();
    dia.should.instanceOf(CVector);
    dia.toString().should.equal(" (6,0)\n(11,0)");
    cmblock.diagonal(1).toString().should.equal("(7,0)");
    cmblock.diagonal(-1).toString().should.equal("(10,0)");

    (function() {
      cmblock.diagonal(cmblock.cols());
    }).should.throw("Invalid index argument");

    (function() {
      cmblock.diagonal(-cmblock.rows());
    }).should.throw("Invalid index argument");
  });

  it('#norm() should return the Frobenius norm', function() {
    cmblock.norm.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var sum = 0;

    for (var i = 0; i < cmblock.cols(); ++i) {
      for (var j = 0; j < cmblock.rows(); ++j) {
        sum += cmblock.get(j, i).norm();
      }
    }

    cmblock.norm().should.equal(Math.pow(sum, 0.5));
  });

  it('#equals() should return true if two complex matrix block are equal', function() {
    cmblock.equals.should.be.a.Function;

    var cmat2 = new CMatrix.Identity(4, 4);
    var cmblock2 = CMatrixBlock(cmat2, 0, 0, 2, 2);
    var cmblock3 = CMatrixBlock(cmat2, 2, 2, 2, 2);

    cmblock2.equals(cmblock3).should.ok;
  });

  it('#equals() should return true if a complex matrix block and a complex matrix are equal', function() {
    cmblock.equals.should.be.a.Function;

    var cmat2 = new CMatrix(2, 2).set([
       6, 7,
      10, 11
    ]);

    cmblock.equals(cmat2).should.ok;
  });

  it('#equals() should return true if a complex matrix block and a complex matrix block are equal', function() {
    cmblock.equals.should.be.a.Function;

    var cmat2 = new CMatrix(2, 2).set([
       6, 7,
      10, 11
    ]);
    var cmblock2 = cmat2.block(0, 0, 2, 2);

    cmblock.equals(cmblock2).should.ok;
  });

  it('#equals() should return true if a complex matrix block and a complex vector are equal', function() {
    cmblock.equals.should.be.a.Function;

    var cmblock2 = CMatrixBlock(cmat, 0, 0, 4, 1);
    cmblock2.toString().should.equal(" (1,0)\n (5,0)\n (9,0)\n(13,0)");

    var cvec = new CVector([
       1,
       5,
       9,
      13
    ]);

    cmblock2.equals(cvec).should.ok;
  });

  it('#equals() should return true if a complex matrix block and a complex row-vector are equal', function() {
    cmblock.equals.should.be.a.Function;

    var cmblock2 = CMatrixBlock(cmat, 0, 0, 1, 4);
    cmblock2.toString().should.equal("(1,0) (2,0) (3,0) (4,0)");

    var crvec = new CRowVector([
      1, 2, 3, 4
    ]);

    cmblock2.equals(crvec).should.ok;
  });

  it('#isApprox() should return true if this is approximately equal to other', function() {
    cmblock.isApprox.should.be.a.Function;

    cmblock.diva(99);
    cmblock.toString().should.equal("(0.0606061,0) (0.0707071,0)\n  (0.10101,0)  (0.111111,0)");

    var cmat2 = new CMatrix(2, 2).set([
      0.061, 0.071,
      0.101, 0.111
    ]);

    cmblock.isApprox(cmat2, 1e-3).should.false;
    cmblock.isApprox(cmat2, 1e-2).should.true;

    (function() {
      cmblock.isApprox(
        new CMatrix(1, 1).set([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isApprox() should return true if this is approximately equal to a complex vector', function() {
    cmblock.isApprox.should.be.a.Function;

    var cmblock2 = CMatrixBlock(cmat, 0, 0, 4, 1);
    cmblock2.toString().should.equal(" (1,0)\n (5,0)\n (9,0)\n(13,0)");

    cmblock2.diva(99);
    cmblock2.toString().should.equal(" (0.010101,0)\n(0.0505051,0)\n(0.0909091,0)\n (0.131313,0)");

    var cvec = new CVector([
      0.010,
      0.051,
      0.091,
      0.131
    ]);

    cmblock2.isApprox(cvec, 1e-3).should.false;
    cmblock2.isApprox(cvec, 1e-2).should.true;

    (function() {
      cmblock2.isApprox(
        new CVector([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isApprox() should return true if this is approximately equal to a complex row-vector', function() {
    cmblock.isApprox.should.be.a.Function;

    var cmblock2 = CMatrixBlock(cmat, 0, 0, 1, 4);
    cmblock2.toString().should.equal("(1,0) (2,0) (3,0) (4,0)");

    cmblock2.diva(9);
    cmblock2.toString().should.equal("(0.111111,0) (0.222222,0) (0.333333,0) (0.444444,0)");

    var crvec = new CRowVector([
      0.111, 0.222, 0.333, 0.444
    ]);

    cmblock2.isApprox(crvec, 1e-3).should.false;
    cmblock2.isApprox(crvec, 1e-2).should.true;

    (function() {
      cmblock2.isApprox(
        new CRowVector([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isSquare() should return true if this is square', function() {
    cmblock.isSquare.should.be.a.Function;

    cmblock.isSquare().should.be.true;
    CMatrix(3, 4).block(0, 0, 3, 4).isSquare().should.be.false;
  });

  it('#isZero() should return true if this is zero', function() {
    cmblock.isZero.should.be.a.Function;

    cmblock.isZero().should.be.false;

    var cmblock2 = new Matrix(3, 3).set([
      0,      0, 0.0001,
      0,      0,      0,
      0,      0,      0
    ]).block(0, 0, 3, 3);
    cmblock2.isZero().should.be.false;
    cmblock2.isZero(1e-4).should.be.true;
  });

  it('#isOnes() should return true if this is ones', function() {
    cmblock.isOnes.should.be.a.Function;

    cmblock.isOnes().should.be.false;

    var cmblock2 = new CMatrix(3, 3).set([
      1,      1, 1.0001,
      1, 0.9997,      1,
      1,      1,      1
    ]).block(0, 0, 3, 3);
    cmblock2.isOnes().should.be.false;
    cmblock2.isOnes(1e-4).should.be.false;
    cmblock2.isOnes(1e-3).should.be.true;
  });

  it('#isIdentity() should return true if this is identity', function() {
    cmblock.isIdentity.should.be.a.Function;

    cmblock.isIdentity().should.be.false;

    var cmblock2 = cmat.block(0, 0, 1, 1);
    cmblock2.isIdentity().should.be.true;
  });

  it('#isDiagonal() should return true if this is diagonal', function() {
    cmblock.isDiagonal.should.be.a.Function;

    cmblock.isDiagonal().should.be.false;

    var cmblock2 = cmat.block(0, 0, 1, 1);
    cmblock2.isDiagonal().should.be.true;
  });

  it('#allFinite() should return true if it contains only finite numbers, i.e., no NaN and no +/-INF values', function() {
    cmblock.allFinite.should.be.a.Function;

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
    cmat.allFinite().should.be.true;
    cmblock.allFinite().should.be.true;
    cmblock.set(0, 0, Infinity);
    cmblock.allFinite().should.be.false;
    cmat.allFinite().should.be.false;
  });

  it('#hasNaN() should return true is it contains at least one Not A Number (NaN)', function() {
    cmblock.hasNaN.should.be.a.Function;

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0)  (6,0)  (7,0)  (8,0)\n (9,0) (10,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
    cmat.hasNaN().should.be.false;
    cmblock.hasNaN().should.be.false;
    cmblock.set(0, 0, NaN);
    cmblock.hasNaN().should.be.true;
    cmat.hasNaN().should.be.true;
  });

  it('#Zero() should return a complex zero matrix', function() {
    CMatrixBlock.Zero.should.be.a.Function;

    CMatrixBlock.Zero(3, 3).toString().should.equal("(0,0) (0,0) (0,0)\n(0,0) (0,0) (0,0)\n(0,0) (0,0) (0,0)");

    CMatrixBlock.Zero(3).toString().should.equal("(0,0) (0,0) (0,0)\n(0,0) (0,0) (0,0)\n(0,0) (0,0) (0,0)");

    CMatrixBlock.Zero(3, 4).equals(
      new CMatrix(3, 4).set([
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
      ])
    ).should.true;
  });

  it('#Ones() should return a complex ones matrix', function() {
    CMatrixBlock.Ones.should.be.a.Function;

    CMatrixBlock.Ones(3, 3).toString().should.equal("(1,0) (1,0) (1,0)\n(1,0) (1,0) (1,0)\n(1,0) (1,0) (1,0)");

    CMatrixBlock.Ones(3).toString().should.equal("(1,0) (1,0) (1,0)\n(1,0) (1,0) (1,0)\n(1,0) (1,0) (1,0)");

    CMatrixBlock.Ones(3, 4).equals(
      new CMatrix(3, 4).set([
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ])
    ).should.true;
  });

  it('#Constant() should return a CMatrix with constant values', function() {
    CMatrixBlock.Constant.should.be.a.Function;

    var cmat2 = CMatrixBlock.Constant(4, 4, 0.6);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(0.6,0) (0.6,0) (0.6,0) (0.6,0)\n(0.6,0) (0.6,0) (0.6,0) (0.6,0)\n(0.6,0) (0.6,0) (0.6,0) (0.6,0)\n(0.6,0) (0.6,0) (0.6,0) (0.6,0)");
  });

  it('#Identity() should return a complex identity matrix', function() {
    CMatrixBlock.Identity.should.be.a.Function;

    CMatrixBlock.Identity(0).toString().should.equal("");

    cmat2 = CMatrixBlock.Identity(3);
    cmat2.equals(new CMatrix(3, 3).set([
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ])).should.true;

    var cmat3 = CMatrixBlock.Identity(3, 4);
    cmat3.equals(new CMatrix(3, 4).set([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0
    ])).should.true;

    (function() {
      cmat.equals(cmat3);
    }).should.throw("Nonconformant arguments");
  });

  it('#Random() should return a complex matrix with random values', function() {
    CMatrixBlock.Random.should.be.a.Function;

    var cmat2 = CMatrixBlock.Random(3);
    cmat2.rows().should.equal(3);
    cmat2.cols().should.equal(3);

    var cmat3 = CMatrixBlock.Random(3, 4);
    cmat3.rows().should.equal(3);
    cmat3.cols().should.equal(4);
  });

  it("#block() should return a complex matrix block", function() {
    cmat.block.should.be.a.Function;

    var cmblock2 = cmblock.block(0, 0, 2, 1);
    cmblock2.should.instanceOf(CMatrixBlock);
    cmblock2.toString().should.equal(" (6,0)\n(10,0)");

    cmblock2.assign(CMatrix(2, 1).set([
      -1,
      -2
    ]));

    cmat.toString().should.equal(" (1,0)  (2,0)  (3,0)  (4,0)\n (5,0) (-1,0)  (7,0)  (8,0)\n (9,0) (-2,0) (11,0) (12,0)\n(13,0) (14,0) (15,0) (16,0)");
  });

  it("#row() should return a row matrix block of the complex matrix block", function() {
    cmblock.row.should.be.a.Function;

    var row = cmblock.row(0);
    row.should.instanceOf(CMatrixBlock);
    row.toString().should.equal("(6,0) (7,0)");

    (function() {
      cmblock.row(3);
    }).should.throw("The row or column number is out of range");
  });

  it("#col() should return a column matrix block of the complex matrix block", function() {
    cmblock.col.should.be.a.Function;

    var col = cmblock.col(0);
    col.should.instanceOf(CMatrixBlock);
    col.toString().should.equal(" (6,0)\n(10,0)");

    (function() {
      cmblock.col(3);
    }).should.throw("The row or column number is out of range");
  });

  it("#topRows() should return a block consisting of the top rows of it", function() {
    cmblock.topRows.should.be.a.Function;

    var cmblock2 = cmblock.topRows(1);
    cmblock2.should.instanceOf(CMatrixBlock);
    cmblock2.toString().should.equal("(6,0) (7,0)");

    (function() {
      cmblock.topRows(3);
    }).should.throw("Invalid argument");

    (function() {
      cmblock.topRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRows() should return a block consisting of the bottom rows of it", function() {
    cmblock.bottomRows.should.be.a.Function;

    var cmblock2 = cmblock.bottomRows(1);
    cmblock2.should.instanceOf(CMatrixBlock);
    cmblock2.toString().should.equal("(10,0) (11,0)");

    (function() {
      cmblock.bottomRows(3);
    }).should.throw("Invalid argument");

    (function() {
      cmblock.bottomRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleRows() should return a block consisting of a range of rows of it", function() {
    cmblock.middleRows.should.be.a.Function;

    var cmblock2 = cmblock.middleRows(1, 1);
    cmblock2.should.instanceOf(CMatrixBlock);
    cmblock2.toString().should.equal("(10,0) (11,0)");

    (function() {
      cmblock.middleRows(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      cmblock.middleRows(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#leftCols() should return a block consisting of the left columns of it", function() {
    cmblock.leftCols.should.be.a.Function;

    var cmblock2 = cmblock.leftCols(1);
    cmblock2.should.instanceOf(CMatrixBlock);
    cmblock2.toString().should.equal(" (6,0)\n(10,0)");

    (function() {
      cmblock.leftCols(3);
    }).should.throw("Invalid argument");

    (function() {
      cmblock.leftCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#rightCols() should return a block consisting of the right columns of it", function() {
    cmblock.rightCols.should.be.a.Function;

    var cmblock2 = cmblock.rightCols(1);
    cmblock2.should.instanceOf(CMatrixBlock);
    cmblock2.toString().should.equal(" (7,0)\n(11,0)");

    (function() {
      cmblock.rightCols(3);
    }).should.throw("Invalid argument");

    (function() {
      cmblock.rightCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleCols() should return a block consisting of a range of columns of it", function() {
    cmblock.middleCols.should.be.a.Function;

    var cmblock2 = cmblock.middleCols(1, 1);
    cmblock2.should.instanceOf(CMatrixBlock);
    cmblock2.toString().should.equal(" (7,0)\n(11,0)");

    (function() {
      cmblock.middleCols(2, 1);
    }).should.throw("Invalid argument");

    (function() {
      cmblock.middleCols(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topLeftCorner() should return a block consisting of a top-left corner of it", function() {
    cmblock.topLeftCorner.should.be.a.Function;

    var cmblock2 = cmblock.topLeftCorner(1, 1);
    cmblock2.should.instanceOf(CMatrixBlock);
    cmblock2.toString().should.equal("(6,0)");

    (function() {
      cmblock.topLeftCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      cmblock.topLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topRightCorner() should return a block consisting of a top-right corner of it", function() {
    cmblock.topRightCorner.should.be.a.Function;

    var cmblock2 = cmblock.topRightCorner(1, 1);
    cmblock2.should.instanceOf(CMatrixBlock);
    cmblock2.toString().should.equal("(7,0)");

    (function() {
      cmblock.topRightCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      cmblock.topRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomLeftCorner() should return a block consisting of a bottom-left corner of it", function() {
    cmblock.bottomLeftCorner.should.be.a.Function;

    var cmblock2 = cmblock.bottomLeftCorner(1, 1);
    cmblock2.should.instanceOf(CMatrixBlock);
    cmblock2.toString().should.equal("(10,0)");

    (function() {
      cmblock.bottomLeftCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      cmblock.bottomLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRightCorner() should return a block consisting of a bottom-right corner of it", function() {
    cmblock.bottomRightCorner.should.be.a.Function;

    var cmblock2 = cmblock.bottomRightCorner(1, 1);
    cmblock2.should.instanceOf(CMatrixBlock);
    cmblock2.toString().should.equal("(11,0)");

    (function() {
      cmblock.bottomRightCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      cmblock.bottomRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#replicate() should return a complex matrix which is replicated", function() {
    cmblock.replicate.should.be.a.Function;

    cmblock.replicate(0, 0).toString().should.equal("");
    cmblock.replicate(0, 1).toString().should.equal("");
    cmblock.replicate(1, 0).toString().should.equal("");
    cmblock.replicate(1, 1).toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");
    cmblock.replicate(2, 1).toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)\n (6,0)  (7,0)\n(10,0) (11,0)");
    cmblock.replicate(1, 2).toString().should.equal(" (6,0)  (7,0)  (6,0)  (7,0)\n(10,0) (11,0) (10,0) (11,0)");
    cmblock.replicate(2, 2).toString().should.equal(" (6,0)  (7,0)  (6,0)  (7,0)\n(10,0) (11,0) (10,0) (11,0)\n (6,0)  (7,0)  (6,0)  (7,0)\n(10,0) (11,0) (10,0) (11,0)");

    (function() {
      cmblock.replicate(-1, 0);
    }).should.throw("Invalid argument");
  });

  it("#redux() should return a full redux operation on the whole complex matrix", function() {
    cmblock.redux.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var result = cmblock.redux(function(a, b){
      return a.add(b);
    })
    result.equals(34).should.be.true;
  });

  it("#sum() should return a full sum operation on the whole complex matrix", function() {
    cmblock.sum.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var result = cmblock.sum();
    result.equals(Complex(34, 0)).should.be.true;
  });

  it("#prod() should return a full product operation on the whole complex matrix", function() {
    cmblock.prod.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var result = cmblock.prod();
    result.equals(Complex(4620, 0)).should.be.true;
  });

  it("#mean() should return a full mean operation on the whole complex matrix", function() {
    cmblock.mean.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var result = cmblock.mean();
    result.equals(Complex(8.5, 0)).should.be.true;
  });

  it("#visit() should apply the visitor operation on the whole complex matrix block", function() {
    cmblock.visit.should.be.a.Function;

    cmblock.toString().should.equal(" (6,0)  (7,0)\n(10,0) (11,0)");

    var sum = Complex(0);
    cmblock.visit(function(scalar, row, col) {
      scalar.should.instanceOf(Complex);
      row.should.be.a.Number;
      col.should.be.a.Number;
      cmblock.get(row, col).equals(scalar).should.true;
      sum.adda(scalar);
    });

    cmblock.sum().equals(sum).should.true;
  });

  it("#partialPivLu() should return a PartialPivLU object", function() {
    cmblock.partialPivLu.should.be.a.Function;

    var cpplu = cmblock.partialPivLu();
    cpplu.should.instanceOf(CPartialPivLU);

    (function() {
      CMatrix.Random(1, 2).partialPivLu();
    }).should.throw("CPartialPivLU is only for square (and moreover invertible) complex matrices");
  });

  it("#fullPivLu() should return a CFullPivLU object", function() {
    cmblock.partialPivLu.should.be.a.Function;

    var cfplu = cmblock.fullPivLu();
    cfplu.should.instanceOf(CFullPivLU);
  });
});
