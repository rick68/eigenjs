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
    VectorBlock = Eigen.VectorBlock,
    CVectorBlock = Eigen.CVectorBlock,
    CRowVectorBlock = Eigen.CRowVectorBlock,
    should = require('should');

describe('CVectorBlock', function() {
  var cvec, cvblock;

  it('#CVectorBlock() should be a function', function() {
    CVectorBlock.should.be.a.Function;
  });

  beforeEach(function() {
    cvec = new CVector(6).set([
      1,
      2,
      3,
      4,
      5,
      6
    ]);

    cvblock = new CVectorBlock(cvec, 2, 2);
  });

  it('should throw error when tried creating a complex vector block with invalid arguments', function() {
    (function() {
      new CVectorBlock(cvec, -1, -2);
    }).should.throw('The row or column number is out of range');

    (function() {
      new CVectorBlock(cvec, 0, 1);
    }).should.not.throw();

    (function() {
      new CVectorBlock(cvec, 4, 2);
    }).should.not.throw();

    (function() {
      new CVectorBlock(cvec, 6, 3);
    }).should.throw('The row or column number is out of range');
  });

  it('should be invoked with arguments and return an object', function() {
    var cvblock2 = new CVectorBlock(cvec, 2, 2);
    cvblock2.should.be.an.Object;
    cvblock2.should.instanceOf(CVectorBlock);
  });

  it('#CVectorBlock(cvec, 2, 2) should return the complex vector block of size 2x1', function() {
    var cvblock2 = new CVectorBlock(cvec, 2, 2);
    cvblock2.rows().should.equal(2);
    cvblock2.cols().should.equal(1);
  });

  it('#set() should throw message when row or column numbers are out of range', function() {
    cvblock.set.should.be.a.Function;

    (function() {
      cvblock.set(7, 68);
    }).should.throw('The row or column number is out of range');

    (function() {
      cvblock.set(-1, 500);
    }).should.throw('The row or column number is out of range');
  });

  it('#set() with array argument should work ok', function() {
    cvblock.set.should.be.a.Function;

    cvblock.set([
      -1,
      -2
    ]).toString().should.eql("(-1,0)\n(-2,0)");

    cvec.toString().should.equal(" (1,0)\n (2,0)\n(-1,0)\n(-2,0)\n (5,0)\n (6,0)");

    (function() {
      cvblock.set([
        1
      ]);
    }).should.throw('Too few coefficients');

    (function() {
      cvblock.set([
         1,
         2,
         3,
         4
      ]);
    }).should.throw('Too many coefficients');
  });

  it('#get() should return the element value of CVectorBlock', function() {
    cvblock.get.should.be.a.Function;

    cvblock.get(0).equals(new Complex(3, 0));
    cvblock.get(1).equals(new Complex(4, 0));

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    (function(){
      cvblock.get(2);
    }).should.throw('The row or column number is out of range');
  });

  it('#value() should return the unique coefficient of a 1x1 expression', function() {
    cvblock.value.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    (function(){
      cvblock.value();
    }).should.throw('The size of row and column values must equal 1');

    var cvblock2 = cvblock.block(0, 1);
    cvblock2.value().equals(3).should.be.true;
  });

  it('#setZero() should set all coefficients to zero', function() {
    cvblock.setZero.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");
    cvblock.setZero().toString().should.equal("(0,0)\n(0,0)");

    cvec.toString().should.equal("(1,0)\n(2,0)\n(0,0)\n(0,0)\n(5,0)\n(6,0)");
  });

  it('#setOner() should set all coefficients to ones', function() {
    cvblock.setOnes.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");
    cvblock.setOnes().toString().should.equal("(1,0)\n(1,0)");

    cvec.toString().should.equal("(1,0)\n(2,0)\n(1,0)\n(1,0)\n(5,0)\n(6,0)");
  });

  it('#setConstant() should set all coefficients to constant', function() {
    cvblock.setConstant.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");
    cvblock.setConstant(0.6).toString().should.equal("(0.6,0)\n(0.6,0)");
    cvec.toString().should.equal("  (1,0)\n  (2,0)\n(0.6,0)\n(0.6,0)\n  (5,0)\n  (6,0)");

    cvblock.setConstant(Complex(3, -4)).toString().should.equal("(3,-4)\n(3,-4)");
    cvec.toString().should.equal(" (1,0)\n (2,0)\n(3,-4)\n(3,-4)\n (5,0)\n (6,0)");
  });

  it('#setRandom() should set all coefficients to random', function() {
    cvblock.setRandom.should.be.a.Function;
    cvblock.setRandom();
  });

  it('#setIdentity() should write the identity expression into itself', function() {
    cvblock.setIdentity.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");

    cvblock.toString().should.equal("(3,0)\n(4,0)");
    cvblock.setIdentity().toString().should.equal("(1,0)\n(0,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(1,0)\n(0,0)\n(5,0)\n(6,0)");
  });

  it('#setDiagonal() should set the diagonal to other values', function() {
    cvblock.setDiagonal.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");

    cvblock.toString().should.equal("(3,0)\n(4,0)");
    cvblock.setDiagonal(0, Vector.Zero(1)).toString().should.equal("(0,0)\n(4,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(0,0)\n(4,0)\n(5,0)\n(6,0)");

    cvblock.setDiagonal(0, RowVector.Ones(1)).toString().should.equal("(1,0)\n(4,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(1,0)\n(4,0)\n(5,0)\n(6,0)");

    cvblock.setDiagonal(0, CVector.Zero(1)).toString().should.equal("(0,0)\n(4,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(0,0)\n(4,0)\n(5,0)\n(6,0)");

    cvblock.setDiagonal(0, CRowVector.Ones(1)).toString().should.equal("(1,0)\n(4,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(1,0)\n(4,0)\n(5,0)\n(6,0)");

    (function(){
      cvblock.setDiagonal(68, Vector.Random(1));
    }).should.throw('Invalid index argument');

    (function(){
      cvblock.setDiagonal(-500, RowVector.Random(1));
    }).should.throw('Invalid index argument');

    (function(){
      cvblock.setDiagonal(68, CVector.Random(1));
    }).should.throw('Invalid index argument');

    (function(){
      cvblock.setDiagonal(-500, CRowVector.Random(1));
    }).should.throw('Invalid index argument');
  });

  it('#toString() should return all element values of CVectorBlock', function() {
    cvblock.toString.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");
  });

  it('#assign() should assign a matrix', function() {
    cvblock.assign.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");
    cvblock.toString().should.equal("(3,0)\n(4,0)");
    cvblock.assign(Matrix.Zero(2, 1)).toString().should.equal("(0,0)\n(0,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(0,0)\n(0,0)\n(5,0)\n(6,0)");
  });

  it('#assign() should assign a vector', function() {
    cvblock.assign.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");

    var cvblock2 = cvec.block(3, 2);
    cvblock2.toString().should.equal("(4,0)\n(5,0)");

    cvblock2.assign(Vector.Zero(2)).toString().should.equal("(0,0)\n(0,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(0,0)\n(0,0)\n(6,0)");
  });

  it('#assign() should assign a row-vector', function() {
    cvblock.assign.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");

    var cvblock2 = cvec.block(2, 1);
    cvblock2.toString().should.equal("(3,0)");

    cvblock2.assign(RowVector.Zero(1)).toString().should.equal("(0,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(0,0)\n(4,0)\n(5,0)\n(6,0)");
  });

  it('#assign() should assign a complex matrix', function() {
    cvblock.assign.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");
    cvblock.toString().should.equal("(3,0)\n(4,0)");
    cvblock.assign(CMatrix.Zero(2, 1)).toString().should.equal("(0,0)\n(0,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(0,0)\n(0,0)\n(5,0)\n(6,0)");
  });

  it('#assign() should assign a complex vector', function() {
    cvblock.assign.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");

    var cvblock2 = cvec.block(3, 2);
    cvblock2.toString().should.equal("(4,0)\n(5,0)");

    cvblock2.assign(CVector.Zero(2)).toString().should.equal("(0,0)\n(0,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(0,0)\n(0,0)\n(6,0)");
  });

  it('#assign() should assign a complex row-vector', function() {
    cvblock.assign.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");

    var cvblock2 = cvec.block(2, 1);
    cvblock2.toString().should.equal("(3,0)");

    cvblock2.assign(CRowVector.Zero(1)).toString().should.equal("(0,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(0,0)\n(4,0)\n(5,0)\n(6,0)");
  });

  it('#assign() should assign a matrix block', function() {
    cvblock.assign.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");
    cvblock.toString().should.equal("(3,0)\n(4,0)");
    cvblock.assign(Matrix.Identity(2).block(0, 0, 2, 1)).toString().should.equal("(1,0)\n(0,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(1,0)\n(0,0)\n(5,0)\n(6,0)");
  });

  it('#assign() should assign a vector block', function() {
    cvblock.assign.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");
    cvblock.toString().should.equal("(3,0)\n(4,0)");
    cvblock.assign(Vector.Identity(2).block(0, 2)).toString().should.equal("(1,0)\n(0,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(1,0)\n(0,0)\n(5,0)\n(6,0)");
  });

  it('#assign() should assign a row-vector block', function() {
    cvblock.assign.should.be.a.Function;

    var cvblock2 = cvec.block(3, 1);
    cvblock2.toString().should.equal("(4,0)");

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");

    cvblock2.assign(RowVector.Identity(1).block(0, 1)).toString().should.equal("(1,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(1,0)\n(5,0)\n(6,0)");
  });

  it('#assign() should assign a complex matrix block', function() {
    cvblock.assign.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");
    cvblock.toString().should.equal("(3,0)\n(4,0)");
    cvblock.assign(CMatrix.Identity(2).block(0, 0, 2, 1)).toString().should.equal("(1,0)\n(0,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(1,0)\n(0,0)\n(5,0)\n(6,0)");
  });

  it('#assign() should assign a complex vector block', function() {
    cvblock.assign.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");
    cvblock.toString().should.equal("(3,0)\n(4,0)");
    cvblock.assign(CVector.Identity(2).block(0, 2)).toString().should.equal("(1,0)\n(0,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(1,0)\n(0,0)\n(5,0)\n(6,0)");
  });

  it('#assign() should assign a complex row-vector block', function() {
    cvblock.assign.should.be.a.Function;

    var cvblock2 = cvec.block(3, 1);
    cvblock2.toString().should.equal("(4,0)");

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");

    cvblock2.assign(RowVector.Identity(1).block(0, 1)).toString().should.equal("(1,0)");
    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(1,0)\n(5,0)\n(6,0)");
  });


  it('#add() should return the sum of two complex vector blocks', function() {
    cvblock.add.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var cvblock2 = CVectorBlock(cvec, 2, 2);
    cvblock2.toString().should.equal("(3,0)\n(4,0)");

    var cvec2 = cvblock.add(cvblock2);
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(6,0)\n(8,0)");
  });

  it('#add() should return the sum of a complex vector block and a matrix', function() {
    cvblock.add.should.be.a.Function;

    var mat2 = Matrix(2, 1).set([
       -1,
       -2
    ]);

    var cvec2 = cvblock.add(mat2);
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(2,0)\n(2,0)");

    cvblock.toString().should.equal("(3,0)\n(4,0)");
    cvblock.assign(cvec2);
    cvec.toString().should.equal("(1,0)\n(2,0)\n(2,0)\n(2,0)\n(5,0)\n(6,0)");

    (function() {
      cvblock.assign(Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex vector block and a complex vector', function() {
    cvblock.add.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 1, 3);
    cvblock2.toString().should.equal("(2,0)\n(3,0)\n(4,0)");
    var cvec2 = new Vector(cvblock2.rows())
      .set([
         2,
         6,
        10
      ]);

    var cvec3 = cvblock2.add(cvec2);
    cvec3.should.instanceOf(CVector);
    cvec3.toString().should.equal(" (4,0)\n (9,0)\n(14,0)");
  });

  it('#add() should return the sum of a complex vector block and a row-vector', function() {
    cvblock.add.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 2, 1);
    cvblock2.toString().should.equal("(3,0)");
    var rvec = RowVector(cvblock2.cols())
      .set([
        9
      ]);

    var cvec2 = cvblock2.add(rvec);
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(12,0)");
  });

  it('#add() should return the sum of a complex vector block and a matrix block', function() {
    cvblock.add.should.be.a.Function;

    var mat2 = Matrix(2, 1).set([
       -1,
       -2
    ]);

    var cvec2 = cvblock.add(mat2);
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(2,0)\n(2,0)");

    cvblock.toString().should.equal("(3,0)\n(4,0)");
    cvblock.assign(cvec2.block(0, 2));
    cvec.toString().should.equal("(1,0)\n(2,0)\n(2,0)\n(2,0)\n(5,0)\n(6,0)");

    (function() {
      cvblock.assign(Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex vector block and a complex vector block', function() {
    cvblock.add.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 1, 3);
    cvblock2.toString().should.equal("(2,0)\n(3,0)\n(4,0)");
    var cvec2 = new Vector(cvblock2.rows())
      .set([
         2,
         6,
        10
      ]);

    var cvec3 = cvblock2.add(cvec2.block(0, 3));
    cvec3.should.instanceOf(CVector);
    cvec3.toString().should.equal(" (4,0)\n (9,0)\n(14,0)");
  });

  it('#add() should return the sum of a complex vector block and a row-vector block', function() {
    cvblock.add.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 2, 1);
    cvblock2.toString().should.equal("(3,0)");
    var rvec = RowVector(cvblock2.cols())
      .set([
        9
      ]);

    var cvec2 = cvblock2.add(rvec.block(0, 1));
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(12,0)");
  });

  it('#add() should return a CMatrix with the sum of a complex vector block and a complex matrix', function() {
    cvblock.add.should.be.a.Function;

    var cvec = CMatrix(2, 1).set([
      -1,
      -2
    ]);
    cvblock.add(cvec).toString().should.equal("(2,0)\n(2,0)");

    (function() {
      cvblock.add(CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex vector block and a complex vector', function() {
    cvblock.add.should.be.a.Function;

    var cvec2 = CVector(cvblock.rows())
      .set([
         2,
         6
      ]);

    var cvec3 = cvblock.add(cvec2);
    cvec3.should.instanceOf(CVector);
    cvec3.toString().should.equal(" (5,0)\n(10,0)");
  });

  it('#add() should return the sum of a complex vector block and a complex row-vector', function() {
    cvblock.add.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 1, 1);
    cvblock2.toString().should.equal("(2,0)");
    var crvec = CRowVector(1)
      .set([
        10
      ]);

    var crvec2 = cvblock2.add(crvec);
    crvec2.should.instanceOf(CVector);
    crvec2.toString().should.equal("(12,0)");
  });

  it('#add() should return a CMatrix with the sum of a complex vector block and a complex matrix block', function() {
    cvblock.add.should.be.a.Function;

    var cvec = CMatrix(2, 1).set([
      -1,
      -2
    ]);
    cvblock.add(cvec.block(0, 0, 2, 1)).toString().should.equal("(2,0)\n(2,0)");

    (function() {
      cvblock.add(CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex vector block and a complex complex vector block', function() {
    cvblock.add.should.be.a.Function;

    var cvec2 = CVector(cvblock.rows())
      .set([
         2,
         6
      ]);

    var cvec3 = cvblock.add(cvec2.block(0, 2));
    cvec3.should.instanceOf(CVector);
    cvec3.toString().should.equal(" (5,0)\n(10,0)");
  });

  it('#add() should return the sum of a complex vector block and a complex row-vector block', function() {
    cvblock.add.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 1, 1);
    cvblock2.toString().should.equal("(2,0)");
    var crvec = CRowVector(1)
      .set([
        10
      ]);

    var crvec2 = cvblock2.add(crvec.block(0, 1));
    crvec2.should.instanceOf(CVector);
    crvec2.toString().should.equal("(12,0)");
  });

  it('#adda() should return the sum of two complex vector blocks and saves it back', function() {
    cvblock.adda.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var cvblock2 = CVectorBlock(cvec, 0, 2);
    cvblock2.toString().should.equal("(1,0)\n(2,0)");

    cvblock.adda(cvblock2);
    cvblock.toString().should.equal("(4,0)\n(6,0)");

    cvec.toString().should.equal("(1,0)\n(2,0)\n(4,0)\n(6,0)\n(5,0)\n(6,0)");
  });

  it('#adda() should return the sum of a complex vector block and a matrix then saves it back', function() {
    cvblock.adda.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    cvblock.adda(
      Matrix(2, 1)
        .set([
          -2,
          -4
        ])
    );
    cvblock.toString().should.equal("(1,0)\n(0,0)");

    (function() {
      cvblock.adda(
        Matrix(3, 1)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex vector block and a vector then saves it back', function() {
    cvblock.adda.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 2, 4);
    cvblock2.toString().should.equal("(3,0)\n(4,0)\n(5,0)\n(6,0)");

    cvblock2.adda(
      Vector(cvblock2.rows())
      .set([
        -2,
        -4,
        -6,
        -8
      ])
    );
    cvblock2.toString().should.equal(" (1,0)\n (0,0)\n(-1,0)\n(-2,0)");

    (function() {
      cvblock2.adda(
        Vector(3)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex vector block and a row-vector then saves it back', function() {
    cvblock.adda.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 3, 1);
    cvblock2.toString().should.equal("(4,0)");

    cvblock2.adda(
      RowVector(cvblock2.cols())
      .set([
        -2
      ])
    );
    cvblock2.toString().should.equal("(2,0)");

    (function() {
      cvblock2.adda(
        RowVector(2)
        .set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex vector block and a matrix block then saves it back', function() {
    cvblock.adda.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    cvblock.adda(
      Matrix(2, 1)
        .set([
          -2,
          -4
        ]).block(0, 0, 2, 1)
    );
    cvblock.toString().should.equal("(1,0)\n(0,0)");
  });

  it('#adda() should return the sum of a complex vector block and a vector block then saves it back', function() {
    cvblock.adda.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 3, 1);
    cvblock2.toString().should.equal("(4,0)");

    cvblock2.adda(
      Vector(cvblock2.cols())
      .set([
        -2
      ]).block(0, 1)
    );
    cvblock2.toString().should.equal("(2,0)");
  });

  it('#adda() should return the sum of a complex vector block and a row-vector block then saves it back', function() {
    cvblock.adda.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 3, 1);
    cvblock2.toString().should.equal("(4,0)");

    cvblock2.adda(
      RowVector(cvblock2.cols())
      .set([
        -2
      ]).block(0, 1)
    );
    cvblock2.toString().should.equal("(2,0)");
  });

  it('#adda() should return the sum of a complex vector block and a complex matrix then saves it back', function() {
    cvblock.adda.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    cvblock.adda(
      Matrix(2, 1)
        .set([
          -2,
          -4
        ])
    );
    cvblock.toString().should.equal("(1,0)\n(0,0)");

    (function() {
      cvblock.adda(
        CMatrix(3, 1)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex vector block and a complex vector then saves it back', function() {
    cvblock.adda.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 2, 4);
    cvblock2.toString().should.equal("(3,0)\n(4,0)\n(5,0)\n(6,0)");

    cvblock2.adda(
      CVector(cvblock2.rows())
      .set([
        -2,
        -4,
        -6,
        -8
      ])
    );
    cvblock2.toString().should.equal(" (1,0)\n (0,0)\n(-1,0)\n(-2,0)");

    (function() {
      cvblock2.adda(
        Vector(3)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex vector block and a complex row-vector then saves it back', function() {
    cvblock.adda.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 3, 1);
    cvblock2.toString().should.equal("(4,0)");

    cvblock2.adda(
      CRowVector(cvblock2.cols())
      .set([
        -2
      ])
    );
    cvblock2.toString().should.equal("(2,0)");

    (function() {
      cvblock2.adda(
        RowVector(2)
        .set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex vector block and a complex matrix block then saves it back', function() {
    cvblock.adda.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    cvblock.adda(
      Matrix(2, 1)
        .set([
          -2,
          -4
        ]).block(0, 0, 2, 1)
    );
    cvblock.toString().should.equal("(1,0)\n(0,0)");

    (function() {
      cvblock.adda(
        CMatrix(3, 1)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex vector block and a complex row-vector block then saves it back', function() {
    cvblock.adda.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 3, 1);
    cvblock2.toString().should.equal("(4,0)");

    cvblock2.adda(
      CRowVector(cvblock2.cols())
      .set([
        -2
      ]).block(0, 1)
    );
    cvblock2.toString().should.equal("(2,0)");

    (function() {
      cvblock2.adda(
        RowVector(2)
        .set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of two complex vector block', function() {
    cvblock.sub.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var cvblock2 = CVectorBlock(cvec, 3, 2);
    cvblock2.toString().should.equal("(4,0)\n(5,0)");

    var cvec2 = cvblock.sub(cvblock2);
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(-1,0)\n(-1,0)");
  });

  it('#sub() should return the difference of a complex vector block and a matrix', function() {
    cvblock.sub.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var cvec2 = cvblock.sub(new Matrix(2, 1).set([
      1,
      2
    ]));
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(2,0)\n(2,0)");

    (function() {
      cvblock.sub(new Matrix(3, 1).set([
        1,
        0,
        1
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex vector block and a complex vector', function() {
    cvblock.sub.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 1, 3);
    cvblock2.toString().should.equal("(2,0)\n(3,0)\n(4,0)");

    var cvec2 = cvblock2.sub(new Vector([
      1,
      2,
      3
    ]));
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(1,0)\n(1,0)\n(1,0)");

    (function() {
      cvblock2.sub(new Vector(2).set([
        1,
        0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex vector block and a row-vector', function() {
    cvblock.sub.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 1, 1);
    cvblock2.toString().should.equal("(2,0)");

    var cvec2 = cvblock2.sub(new RowVector([
      9
    ]));
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(-7,0)");

    (function() {
      cvblock2.sub(new RowVector(2).set([
        1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex vector block and a matrix block', function() {
    cvblock.sub.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var cvec2 = cvblock.sub(new Matrix(2, 1).set([
      1,
      2
    ]).block(0, 0, 2, 1));
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(2,0)\n(2,0)");

    (function() {
      cvblock.sub(new Matrix(3, 1).set([
        1,
        0,
        1
      ]).block(0, 0, 3, 1));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex vector block and a vector block', function() {
    cvblock.sub.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 1, 1);
    cvblock2.toString().should.equal("(2,0)");

    var cvec2 = cvblock2.sub(new Vector([
      9
    ]).block(0, 1));
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(-7,0)");

    (function() {
      cvblock2.sub(new Vector(2).set([
        1, 0
      ]).block(0, 2));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex vector block and a row-vector block', function() {
    cvblock.sub.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 1, 1);
    cvblock2.toString().should.equal("(2,0)");

    var cvec2 = cvblock2.sub(new RowVector([
      9
    ]).block(0, 1));
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(-7,0)");

    (function() {
      cvblock2.sub(new RowVector(2).set([
        1, 0
      ]).block(0, 2));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a complex vector block and a complex matrix', function() {
    cvblock.sub.should.be.a.Function;

    var cvec = CMatrix(2, 1).set([
      Complex(2, 0),
      Complex(4, 1)
    ]);

    var cvec2 = cvblock.sub(cvec);
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal(" (1,0)\n(0,-1)");

    (function() {
      cvblock.sub(
        CMatrix(3, 1).set([
          1,
          0,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a complex vector block and a complex vector', function() {
    cvblock.sub.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 2, 2);
    cvblock2.toString().should.equal("(3,0)\n(4,0)");

    var cvec2 = CVector([
      Complex(2, 0),
      Complex(4, 1)
    ]);

    var cvec3 = cvblock2.sub(cvec2);
    cvec3.should.instanceOf(CVector);
    cvec3.toString().should.equal(" (1,0)\n(0,-1)");

    (function() {
      cvblock2.sub(
        CVector(3).set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a complex vector block and a complex row-vector', function() {
    cvblock.sub.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 1, 1);
    cvblock2.toString().should.equal("(2,0)");

    var crvec = CRowVector([
      Complex(2, 0)
    ]);

    var cvec2 = cvblock2.sub(crvec);
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(0,0)");

    (function() {
      cvblock2.sub(
        CRowVector(2).set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a complex vector block and a complex matrix block', function() {
    cvblock.sub.should.be.a.Function;

    var cvec = CMatrix(2, 1).set([
      Complex(2, 0),
      Complex(4, 1)
    ]);

    var cvec2 = cvblock.sub(cvec.block(0, 0, 2, 1));
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal(" (1,0)\n(0,-1)");
  });

  it('#sub() should return a CMatrix with the difference of a complex vector block and a complex row-vector block', function() {
    cvblock.sub.should.be.a.Function;

    var cvblock2 = cvec.block(2, 1);
    cvblock2.toString().should.equal("(3,0)");

    var cvec2 = CRowVector(1).set([
      Complex(2, 0)
    ]);

    var cvec3 = cvblock2.sub(cvec2.block(0, 1));
    cvec3.should.instanceOf(CVector);
    cvec3.toString().should.equal("(1,0)");
  });

  it('#sub() should return a CMatrix with the difference of a complex vector block and a complex row-vector block', function() {
    cvblock.sub.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 0, 1);
    cvblock2.toString().should.equal("(1,0)");

    var crvec = CRowVector([
      Complex(2, 0)
    ]);

    var cvec2 = cvblock2.sub(crvec.block(0, 1));
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(-1,0)");
  });

  it('#suba() should return the sum of two complex vector blocks and saves it back', function() {
    cvblock.suba.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var cvblock2 = CVectorBlock(cvec, 3, 2);
    cvblock2.toString().should.equal("(4,0)\n(5,0)");

    cvblock.suba(cvblock2);
    cvblock.toString().should.equal("(-1,0)\n(-1,0)");
    cvblock2.toString().should.equal("(-1,0)\n (5,0)");

    cvec.toString().should.equal(" (1,0)\n (2,0)\n(-1,0)\n(-1,0)\n (5,0)\n (6,0)");
  });

  it('#suba() should return the difference of a complex vector block and a matrix then saves it back', function() {
    cvblock.suba.should.be.a.Function;

    var cvec2 = Matrix(2, 1)
    .set([
      1,
      3
    ]);
    cvblock.suba(cvec2);
    cvblock.toString().should.equal("(2,0)\n(1,0)");

    (function() {
      cvblock.suba(
        Matrix(3, 1)
        .set([
          1,
          0,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of a complex vector block and a vector then saves it back', function() {
    cvblock.suba.should.be.a.Function;

    var cvblock2 = CVectorBlock(cvec, 2, 4);
    cvblock2.toString().should.equal("(3,0)\n(4,0)\n(5,0)\n(6,0)");

    var cvec2 = new Vector([
      1,
      3,
      5,
      7
    ]);
    cvblock2.suba(cvec2);
    cvblock2.toString().should.equal(" (2,0)\n (1,0)\n (0,0)\n(-1,0)");

    cvec.toString().should.equal(" (1,0)\n (2,0)\n (2,0)\n (1,0)\n (0,0)\n(-1,0)");
  });

  it('#suba() should return the difference of a complex vector block and a row-vector then saves it back', function() {
    cvblock.suba.should.be.a.Function;

    var cvblock2 = CVectorBlock(cvec, 4, 1);
    cvblock2.toString().should.equal("(5,0)");

    var rvec = new RowVector([
      1
    ]);
    cvblock2.suba(rvec);
    cvblock2.toString().should.equal("(4,0)");

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(4,0)\n(6,0)");
  });

  it('#suba() should return the difference of a complex vector block and a matrix block then saves it back', function() {
    cvblock.suba.should.be.a.Function;

    var cvec2 = Matrix(2, 1)
    .set([
      1,
      3
    ]);
    cvblock.suba(cvec2.block(0, 0, 2, 1));
    cvblock.toString().should.equal("(2,0)\n(1,0)");

    (function() {
      cvblock.suba(
        Matrix(3, 1)
        .set([
          1,
          0,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of a complex vector block and a row-vector block then saves it back', function() {
    cvblock.suba.should.be.a.Function;

    var cvblock2 = CVectorBlock(cvec, 4, 1);
    cvblock2.toString().should.equal("(5,0)");

    var rvec = new RowVector([
      1
    ]);
    cvblock2.suba(rvec.block(0, 1));
    cvblock2.toString().should.equal("(4,0)");

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(4,0)\n(6,0)");
  });

  it('#mul() should return the product of two complex vector blocks', function() {
    cvblock.mul.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 0, 1);
    cvblock2.toString().should.equal("(1,0)");

    var cvec2 = cvblock.mul(cvblock2);
    cvec2.should.instanceOf(CMatrix);
    cvec2.toString().should.equal("(3,0)\n(4,0)");

    (function() {
      cvblock.mul(CVectorBlock(cvec, 0, 2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex vector block and a matrix', function() {
    cvblock.mul.should.be.a.Function;

    var cvec2 = cvblock.mul(new Matrix(1, 2).set([
      1, 2
    ]));
    cvec2.should.instanceOf(CMatrix);
    cvec2.toString().should.equal("(3,0) (6,0)\n(4,0) (8,0)");

    (function() {
      cvblock.mul(Matrix(3, 2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex vector block and a complex vector', function() {
    cvblock.mul.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 3, 3);
    cvblock2.toString().should.equal("(4,0)\n(5,0)\n(6,0)");

    var cvec2 = new Vector([
      -1
    ]);
    var cvec3 = cvblock2.mul(cvec2);
    cvec3.should.instanceOf(CMatrix);
    cvec3.toString().should.equal("(-4,0)\n(-5,0)\n(-6,0)");

    (function() {
      cvblock.mul(cvec);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex vector block and a row-vector', function() {
    cvblock.mul.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 1, 3);
    cvblock2.toString().should.equal("(2,0)\n(3,0)\n(4,0)");

    var rvec = new RowVector([1, 2, 3]);
    var mat2 = cvblock2.mul(rvec);
    mat2.should.instanceOf(CMatrix);
    mat2.toString().should.equal(" (2,0)  (4,0)  (6,0)\n (3,0)  (6,0)  (9,0)\n (4,0)  (8,0) (12,0)");
  });

  it('#mul() should return the product of a complex vector block and a matrix block', function() {
    cvblock.mul.should.be.a.Function;

    var cvec2 = cvblock.mul(new Matrix(1, 2).set([
      1, 2
    ]).block(0, 0, 1, 2));
    cvec2.should.instanceOf(CMatrix);
    cvec2.toString().should.equal("(3,0) (6,0)\n(4,0) (8,0)");
  });

  it('#mul() should return the product of a complex vector block and a row-vector block', function() {
    cvblock.mul.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 1, 3);
    cvblock2.toString().should.equal("(2,0)\n(3,0)\n(4,0)");

    var rvec = new RowVector([1, 2, 3]);
    var mat2 = cvblock2.mul(rvec.block(0, 3));
    mat2.should.instanceOf(CMatrix);
    mat2.toString().should.equal(" (2,0)  (4,0)  (6,0)\n (3,0)  (6,0)  (9,0)\n (4,0)  (8,0) (12,0)");
  });

  it('#mul() should return a CMatrix with the product of a complex vector block and a complex matrix', function() {
    cvblock.mul.should.be.a.Function;

    var cmat = new CMatrix(1, 2).set([
      Complex(1, 1), Complex(2, 2)
    ]);
    var cmat2 = cvblock.mul(cmat);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(3,3) (6,6)\n(4,4) (8,8)");

    (function() {
      cvblock.mul(new CMatrix(3, 3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a complex vector block and a complex vector', function() {
    cvblock.mul.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 1, 3);
    cvblock2.toString().should.equal("(2,0)\n(3,0)\n(4,0)");

    var cvec2 = new CVector(1).set([
      Complex(1, 1)
    ]);
    var cmat2 = cvblock2.mul(cvec2);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(2,2)\n(3,3)\n(4,4)");

    (function() {
      cvblock.mul(new CVector(2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a complex vector block and a complex row-vector', function() {
    cvblock.mul.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 3, 2);
    cvblock2.toString().should.equal("(4,0)\n(5,0)");

    var crvec = new CRowVector(3).set([
      Complex(1, 1), Complex(2, 2), Complex(3, 3)
    ]);
    var cmat = cvblock2.mul(crvec);
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("  (4,4)   (8,8) (12,12)\n  (5,5) (10,10) (15,15)");
  });

  it('#mul() should return a CMatrix with the product of a complex vector block and a complex matrix block', function() {
    cvblock.mul.should.be.a.Function;

    var cmat = new CMatrix(1, 2).set([
      Complex(1, 1), Complex(2, 2)
    ]);
    var cmat2 = cvblock.mul(cmat.block(0, 0, 1, 2));
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(3,3) (6,6)\n(4,4) (8,8)");

    (function() {
      cvblock.mul(new CMatrix(3, 3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a complex vector block and a complex row-vector block', function() {
    cvblock.mul.should.be.a.Function;

    var crvec = new CRowVector(3).set([
      Complex(1, 1), Complex(2, 2), Complex(3, 3)
    ]);
    var cmat = cvblock.mul(crvec.block(0, 3));
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("  (3,3)   (6,6)   (9,9)\n  (4,4)   (8,8) (12,12)");
  });

  it('#mul() should return the product of a complex vector block and a scalar value', function() {
    cvblock.mul.should.be.a.Function;

    var mat2 = cvblock.mul(-1);
    mat2.should.instanceOf(CVector);
    mat2.toString().should.equal("(-3,0)\n(-4,0)");
  });

  it('#mul() should return the product of a complex vector block and a complex value', function() {
    cvblock.mul.should.be.a.Function;

    var cvec = cvblock.mul(Complex(-1));
    cvec.should.instanceOf(CVector);
    cvec.toString().should.equal("(-3,0)\n(-4,0)");
  });

  it('#mula() should return the product of two complex vector block and saves it back', function() {
    cvblock.mula.should.be.a.Function;

    var cvblock2 = new CVectorBlock(cvec, 1, 1);
    cvblock2.toString().should.equal("(2,0)");
    var cvblock3 = new CVectorBlock(cvec, 3, 1);
    cvblock3.toString().should.equal("(4,0)");

    cvblock2.mula(cvblock3);
    cvblock2.toString().should.equal("(8,0)");

    cvec.toString().should.equal("(1,0)\n(8,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");
  });

  it('#mula() should return the product of a complex vector block and a matrix then saves it back', function() {
    cvblock.mula.should.be.a.Function;

    cvblock.mula(new Matrix(1, 1).set([
      -1
    ]));
    cvblock.toString().should.equal("(-3,0)\n(-4,0)");

    cvec.toString().should.equal(" (1,0)\n (2,0)\n(-3,0)\n(-4,0)\n (5,0)\n (6,0)");
  });

  it('#mula() should return the product of a complex vector block and a vector then saves it back', function() {
    cvblock.mula.should.be.a.Function;

    var cvblock2 = CVectorBlock(cvec, 1, 1);
    cvblock2.toString().should.equal("(2,0)");

    cvblock2.mula(new Vector([-1]));
    cvblock2.toString().should.equal("(-2,0)");

    cvec.toString().should.equal(" (1,0)\n(-2,0)\n (3,0)\n (4,0)\n (5,0)\n (6,0)");
  });

  it('#mula() should return the product of a complex vector block and a row-vector then saves it back', function() {
    cvblock.mula.should.be.a.Function;

    var cvblock2 = CVectorBlock(cvec, 1, 1);
    cvblock2.should.instanceOf(CVectorBlock);
    cvblock2.toString().should.equal("(2,0)");

    cvblock2.mula(new RowVector([2]));
    cvblock2.toString().should.equal("(4,0)");

    cvec.toString().should.equal("(1,0)\n(4,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");

    (function() {
      cvblock2.mula(new RowVector([
        -1, -2
      ]));
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a complex vector block and a matrix block then saves it back', function() {
    cvblock.mula.should.be.a.Function;

    cvblock.mula(new Matrix(1, 1).set([
      -1
    ]).block(0, 0, 1, 1));
    cvblock.toString().should.equal("(-3,0)\n(-4,0)");

    cvec.toString().should.equal(" (1,0)\n (2,0)\n(-3,0)\n(-4,0)\n (5,0)\n (6,0)");
  });

  it('#mula() should return the product of a complex vector block and a row-vector block then saves it back', function() {
    cvblock.mula.should.be.a.Function;

    var cvblock2 = CVectorBlock(cvec, 1, 1);
    cvblock2.toString().should.equal("(2,0)");

    cvblock2.mula(new RowVector([2]));
    cvblock2.toString().should.equal("(4,0)");

    cvec.toString().should.equal("(1,0)\n(4,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");

    (function() {
     cvblock2.mula(new RowVector([
        -1, -2
      ]).block(0, 2));
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a complex vector block and a complex matrix then saves it back', function() {
    cvblock.mula.should.be.a.Function;

    cvblock.mula(new CMatrix(1, 1).set([
      -1
    ]));
    cvblock.toString().should.equal("(-3,0)\n(-4,0)");

    cvec.toString().should.equal(" (1,0)\n (2,0)\n(-3,0)\n(-4,0)\n (5,0)\n (6,0)");
  });

  it('#mula() should return the product of a complex vector block and a complex vector then saves it back', function() {
    cvblock.mula.should.be.a.Function;

    var cvblock2 = CVectorBlock(cvec, 1, 1);
    cvblock2.toString().should.equal("(2,0)");

    cvblock2.mula(new CVector([-1]));
    cvblock2.toString().should.equal("(-2,0)");

    cvec.toString().should.equal(" (1,0)\n(-2,0)\n (3,0)\n (4,0)\n (5,0)\n (6,0)");
  });

  it('#mula() should return the product of a complex vector block and a complex row-vector then saves it back', function() {
    cvblock.mula.should.be.a.Function;

    var cvblock2 = CVectorBlock(cvec, 1, 1);
    cvblock2.should.instanceOf(CVectorBlock);
    cvblock2.toString().should.equal("(2,0)");

    cvblock2.mula(new CRowVector([2]));
    cvblock2.toString().should.equal("(4,0)");

    cvec.toString().should.equal("(1,0)\n(4,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");

    (function() {
      cvblock2.mula(new CRowVector([
        -1, -2
      ]));
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a complex vector block and a complex matrix block then saves it back', function() {
    cvblock.mula.should.be.a.Function;

    cvblock.mula(new CMatrix(1, 1).set([
      -1
    ]).block(0, 0, 1, 1));
    cvblock.toString().should.equal("(-3,0)\n(-4,0)");

    cvec.toString().should.equal(" (1,0)\n (2,0)\n(-3,0)\n(-4,0)\n (5,0)\n (6,0)");
  });

  it('#mula() should return the product of a complex vector block and a complex row-vector block then saves it back', function() {
    cvblock.mula.should.be.a.Function;

    var cvblock2 = CVectorBlock(cvec, 1, 1);
    cvblock2.should.instanceOf(CVectorBlock);
    cvblock2.toString().should.equal("(2,0)");

    cvblock2.mula(new CRowVector([2]).block(0, 1));
    cvblock2.toString().should.equal("(4,0)");

    cvec.toString().should.equal("(1,0)\n(4,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");

    (function() {
      cvblock2.mula(new CRowVector([
        -1, -2
      ]).block(0, 2));
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a complex vector block and a scalar value then saves it back', function() {
    cvblock.mula.should.be.a.Function;

    cvblock.mula(-1);
    cvec.toString().should.equal(" (1,0)\n (2,0)\n(-3,0)\n(-4,0)\n (5,0)\n (6,0)");
  });

  it('#mula() should return the product of a complex vector block and a complex value then saves it back', function() {
    cvblock.mula.should.be.a.Function;

    cvblock.mula(Complex(-1, 0));
    cvec.toString().should.equal(" (1,0)\n (2,0)\n(-3,0)\n(-4,0)\n (5,0)\n (6,0)");
  });

  it('#div() should return a CMatrix which be divied by a scalar value', function() {
    cvblock.div.should.be.a.Function;

    var cvec2 = cvblock.div(2);
    cvec2.equals(
      new CMatrix(2, 1)
      .set([
        1.5,
        2
      ])
    ).should.ok;
    cvblock.div(2).toString().should.equal("(1.5,0)\n  (2,0)");
  });

  it('#div() should return a Matrix which be divied by a complex value', function() {
    cvblock.div.should.be.a.Function;

    var cvec2 = cvblock.div(Complex(2, 0));
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(1.5,0)\n  (2,0)");
  });

  it('#diva() should return a Matrix which be divied by a scalar value then saves it back', function() {
    cvblock.diva.should.be.a.Function;

    cvblock.diva(2);
    cvblock.equals(
      new CMatrix(2, 1)
      .set([
        1.5,
        2
      ])
    ).should.ok;
    cvblock.get(0).equals(Complex(1.5,0));

    cvec.toString().should.equal("  (1,0)\n  (2,0)\n(1.5,0)\n  (2,0)\n  (5,0)\n  (6,0)");
  });

  it('#transpose() should return the transpose of a complex matrix', function() {
    cvblock.transpose.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var crvec = cvblock.transpose();
    crvec.should.instanceOf(CRowVector);
    crvec.toString().should.equal("(3,0) (4,0)");
  });

  it('#adjoint() should return the adjoint of a complex matrix', function() {
    cvblock.adjoint.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var crvec = cvblock.adjoint();
    crvec.should.instanceOf(CRowVector);
    crvec.toString().should.equal("(3,-0) (4,-0)");
  });

  it('#conjugate() should return the conjugate of a complex matrix', function() {
    cvblock.conjugate.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var cvec2 = cvblock.conjugate();
    cvec2.should.instanceOf(CVector);

    cvec2.toString().should.equal("(3,-0)\n(4,-0)");
  });

  it('#determinant() should return the determinant of a complex matrix', function() {
    cvblock.determinant.should.be.a.Function;

    (function() {
      cvblock.determinant();
    }).should.throw("The matrix must be square");

    CVector([3]).block(0, 1).determinant().equals(Complex(3)).should.true;
  });

  it('#inverse() should return the inverse of a complex matrix', function() {
    cvblock.inverse.should.be.a.Function;

    (function() {
      cvblock.inverse();
    }).should.throw("The matrix must be square");

    var cmat2 = CVector([6]).inverse();
    cmat2.should.instanceOf(CMatrix);
    cmat2.equals(CMatrix(1, 1).set([1 / 6])).should.true;
  });

  it('#trace() should return the trace of a complex matrix', function() {
    cvblock.trace.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var trace = cvblock.trace();
    trace.equals(Complex(3, 0)).should.be.true;
  });

  it('#diagonal() should return the diagonal of a complex matrix', function() {
    cvblock.diagonal.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var dia = cvblock.diagonal();
    dia.should.instanceOf(CVector);
    dia.toString().should.equal("(3,0)");
    cvblock.diagonal(-1).toString().should.equal("(4,0)");

    (function() {
      cvblock.diagonal(cvblock.cols());
    }).should.throw("Invalid index argument");

    (function() {
      cvblock.diagonal(-cvblock.rows());
    }).should.throw("Invalid index argument");
  });

  it('#norm() should return the l2 norm', function() {
    cvblock.norm.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var sum = 0;

    for (var i = 0; i < cvblock.rows(); ++i) {
      sum += cvblock.get(i).norm();
    }

    cvblock.norm().should.equal(Math.pow(sum, 0.5));
  });

  it('#equals() should return true if two complex vector block are equal', function() {
    cvblock.equals.should.be.a.Function;

    var cvec2 = new CVector([
      1,
      2,
      1,
      2
    ]);
    var cvblock2 = CVectorBlock(cvec2, 0, 2);
    var cvblock3 = CVectorBlock(cvec2, 2, 2);

    cvblock2.equals(cvblock3).should.ok;
  });

  it('#equals() should return true if a complex vector block and a complex matrix are equal', function() {
    cvblock.equals.should.be.a.Function;

    var mat2 = new CMatrix(2, 1).set([
      3,
      4
    ]);

    cvblock.equals(mat2).should.ok;
  });

  it('#equals() should return true if a complex vector block and a complex vector are equal', function() {
    cvblock.equals.should.be.a.Function;

    var cvec2 = new CVector([
      3,
      4
    ]);

    cvblock.equals(cvec2).should.ok;
  });

  it('#equals() should return true if a complex vector block and a complex row-vector are equal', function() {
    cvblock.equals.should.be.a.Function;

    var cvblock2 = CVectorBlock(cvec, 0, 1);
    cvblock2.toString().should.equal("(1,0)");

    var crvec2 = new CRowVector([
      1
    ]);

    cvblock2.equals(crvec2).should.ok;
  });

  it('#isApprox() should return true if this is approxivecely equal to other', function() {
    cvblock.isApprox.should.be.a.Function;

    cvblock.diva(9);
    cvblock.toString().should.equal("(0.333333,0)\n(0.444444,0)");

    var cvec2 = new CVector([
      0.333,
      0.444
    ]);

    cvblock.isApprox(cvec2.block(0, 2), 1e-3).should.false;
    cvblock.isApprox(cvec2.block(0, 2), 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a complex matrix', function() {
    cvblock.isApprox.should.be.a.Function;

    cvblock.diva(9);
    cvblock.toString().should.equal("(0.333333,0)\n(0.444444,0)");

    var mat2 = new CMatrix(2, 1).set([
      0.333,
      0.444
    ]);

    cvblock.isApprox(mat2, 1e-3).should.false;
    cvblock.isApprox(mat2, 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a complex row-vector', function() {
    cvblock.isApprox.should.be.a.Function;

    var cvblock2 = CVectorBlock(cvec, 0, 1);
    cvblock2.toString().should.equal("(1,0)");

    cvblock2.diva(9);
    cvblock2.toString().should.equal("(0.111111,0)");

    var crvec2 = new CRowVector([
      0.111
    ]);

    cvblock2.isApprox(crvec2, 1e-3).should.false;
    cvblock2.isApprox(crvec2, 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a complex matrix block', function() {
    cvblock.isApprox.should.be.a.Function;

    cvblock.diva(9);
    cvblock.toString().should.equal("(0.333333,0)\n(0.444444,0)");

    var cmat2 = new CMatrix(2, 1).set([
      0.333,
      0.444
    ]);

    cvblock.isApprox(cmat2.block(0, 0, 2, 1), 1e-3).should.false;
    cvblock.isApprox(cmat2.block(0, 0, 2, 1), 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a complex vector block', function() {
    cvblock.isApprox.should.be.a.Function;

    cvblock.diva(9);
    cvblock.toString().should.equal("(0.333333,0)\n(0.444444,0)");

    var cvec2 = new CVector(2, 1).set([
      0.333,
      0.444
    ]);

    cvblock.isApprox(cvec2.block(0, 2), 1e-3).should.false;
    cvblock.isApprox(cvec2.block(0, 2), 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a complex row-vector block', function() {
    cvblock.isApprox.should.be.a.Function;

    var cvblock2 = CVectorBlock(cvec, 0, 1);
    cvblock2.toString().should.equal("(1,0)");

    cvblock2.diva(9);
    cvblock2.toString().should.equal("(0.111111,0)");

    var crvec2 = new CRowVector([
      0.111
    ]);

    cvblock2.isApprox(crvec2.block(0, 1), 1e-3).should.false;
    cvblock2.isApprox(crvec2.block(0, 1), 1e-2).should.true;
  });

  it('#isSquare() should return true if this is square', function() {
    cvblock.isSquare.should.be.a.Function;

    cvblock.isSquare().should.be.false;
    CVector(1).block(0, 1).isSquare().should.be.true;
  });

  it('#isZero() should return true if this is zero', function() {
    cvblock.isZero.should.be.a.Function;

    cvblock.isZero().should.be.false;

    var cvblock2 = new CVector(3).set([
      0,
      0,
      0.0001
    ]).block(0, 3);
    cvblock2.isZero().should.be.false;
    cvblock2.isZero(1e-4).should.be.true;
  });

  it('#isOnes() should return true if this is ones', function() {
    cvblock.isOnes.should.be.a.Function;

    cvblock.isOnes().should.be.false;

    var cvblock2 = new CVector(3).set([
      1,
      1.0001,
      0.9997
    ]).block(0, 3);
    cvblock2.isOnes().should.be.false;
    cvblock2.isOnes(1e-4).should.be.false;
    cvblock2.isOnes(1e-3).should.be.true;
  });

  it('#isIdentity() should return true if this is identity', function() {
    cvblock.isIdentity.should.be.a.Function;

    cvblock.isIdentity().should.be.false;

    var cvblock2 = cvec.block(0, 1);
    cvblock2.isIdentity().should.be.true;
  });

  it('#isDiagonal() should return true if this is diagonal', function() {
    cvblock.isDiagonal.should.be.a.Function;

    cvblock.isDiagonal().should.be.false;

    var cvblock2 = cvec.block(0, 1);
    cvblock2.isDiagonal().should.be.true;
  });

  it('#allFinite() should return true if it contains only finite numbers, i.e., no NaN and no +/-INF values', function() {
    cvblock.allFinite.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");
    cvec.allFinite().should.be.true;
    cvblock.allFinite().should.be.true;
    cvblock.set(0, Infinity);
    cvblock.allFinite().should.be.false;
    cvec.allFinite().should.be.false;
  });

  it('#hasNaN() should return true if it contains at least one Not A Number (NaN)', function() {
    cvblock.hasNaN.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");
    cvec.hasNaN().should.be.false;
    cvblock.hasNaN().should.be.false;
    cvblock.set(0, NaN);
    cvblock.hasNaN().should.be.true;
    cvec.hasNaN().should.be.true;
  });

  it('#Zero() should return a complex matrix with zero values', function() {
    CVectorBlock.Zero.should.be.a.Function;

    CVectorBlock.Zero(3).toString().should.equal("(0,0)\n(0,0)\n(0,0)");
    CVectorBlock.Zero(3).should.instanceOf(CVector);

    CVectorBlock.Zero(3).equals(
      new CMatrix(3, 1).set([
        0,
        0,
        0
      ])
    ).should.true;
  });

  it('#Ones() should return a complex matrix with ones values', function() {
    CVectorBlock.Ones.should.be.a.Function;

    CVectorBlock.Ones(3).toString().should.equal("(1,0)\n(1,0)\n(1,0)");
    CVectorBlock.Ones(3).should.instanceOf(CVector);

    CVectorBlock.Ones(3).equals(
      new CMatrix(3, 1).set([
        1,
        1,
        1
      ])
    ).should.true;
  });

  it('#Constant() should return a CVectorBlock with constant values', function() {
    CVectorBlock.Constant.should.be.a.Function;

    var cvec2 = CVectorBlock.Constant(4, 0.6);
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(0.6,0)\n(0.6,0)\n(0.6,0)\n(0.6,0)");
  });

  it('#Identity() should return a complex identity vector', function() {
    CVectorBlock.Identity.should.be.a.Function;

    CVectorBlock.Identity(0).toString().should.equal("");

    var cvec2 = CVectorBlock.Identity(3);
    cvec2.equals(new CMatrix(3, 1).set([
      1,
      0,
      0
    ])).should.true;
  });

  it('#Random() should return a matrix with random values', function() {
    CVectorBlock.Random.should.be.a.Function;

    var cvec2 = CVectorBlock.Random(3);
    cvec2.should.instanceOf(CVector);
    cvec2.rows().should.equal(3);
    cvec2.cols().should.equal(1);
  });

  it("#block() should return a complex vector block", function() {
    cvblock.block.should.be.a.Function;

    var cvblock2 = cvblock.block(1, 1);
    cvblock2.should.instanceOf(CVectorBlock);
    cvblock2.toString().should.equal("(4,0)");

    cvblock2.assign(CVector([
      -1
    ]));

    cvblock.toString().should.equal(" (3,0)\n(-1,0)");
    cvec.toString().should.equal(" (1,0)\n (2,0)\n (3,0)\n(-1,0)\n (5,0)\n (6,0)");
  });

  it("#row() should return a column matrix block of the complex vector block", function() {
    cvblock.row.should.be.a.Function;

    var row = cvblock.row(0);
    row.should.instanceOf(CVectorBlock);
    row.toString().should.equal("(3,0)");

    (function() {
      cvblock.row(2);
    }).should.throw("The row or column number is out of range");
  });

  it("#col() should return a column matrix block of the complex vector block", function() {
    cvblock.col.should.be.a.Function;

    var col = cvblock.col(0);
    col.should.instanceOf(CVectorBlock);
    col.toString().should.equal("(3,0)\n(4,0)");

    (function() {
      cvblock.col(1);
    }).should.throw("The row or column number is out of range");
  });

  it("#head() should return a dynamic-size expression of the first coefficients of it", function() {
    cvblock.head.should.be.a.Function;

    var head = cvblock.head(1);
    head.should.instanceOf(CVectorBlock);
    head.toString().should.equal("(3,0)");

    (function() {
      cvblock.head(3);
    }).should.throw("Invalid argument");
  });

  it("#tail() should return a dynamic-size expression of the last coefficients of it", function() {
    cvblock.tail.should.be.a.Function;

    var tail = cvblock.tail(1);
    tail.should.instanceOf(CVectorBlock);
    tail.toString().should.equal("(4,0)");

    (function() {
      cvblock.tail(3);
    }).should.throw("Invalid argument");
  });

  it("#topRows() should return a block consisting of the top rows of it", function() {
    cvblock.topRows.should.be.a.Function;

    var cvblock2 = cvblock.topRows(1);
    cvblock2.should.instanceOf(CVectorBlock);
    cvblock2.toString().should.equal("(3,0)");

    (function() {
      cvblock.topRows(3);
    }).should.throw("Invalid argument");

    (function() {
      cvblock.topRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRows() should return a block consisting of the bottom rows of it", function() {
    cvblock.bottomRows.should.be.a.Function;

    var cvblock2 = cvblock.bottomRows(1);
    cvblock2.should.instanceOf(CVectorBlock);
    cvblock2.toString().should.equal("(4,0)");

    (function() {
      cvblock.bottomRows(3);
    }).should.throw("Invalid argument");

    (function() {
      cvblock.bottomRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleRows() should return a block consisting of a range of rows of it", function() {
    cvblock.middleRows.should.be.a.Function;

    var cvblock2 = cvblock.middleRows(1, 1);
    cvblock2.should.instanceOf(CVectorBlock);
    cvblock2.toString().should.equal("(4,0)");

    (function() {
      cvblock.middleRows(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      cvblock.middleRows(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#leftCols() should return a block consisting of the left columns of it", function() {
    cvblock.leftCols.should.be.a.Function;

    var cvblock2 = cvblock.leftCols(1);
    cvblock2.should.instanceOf(CVectorBlock);
    cvblock2.toString().should.equal("(3,0)\n(4,0)");

    (function() {
      cvblock.leftCols(2);
    }).should.throw("Invalid argument");

    (function() {
      cvblock.leftCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#rightCols() should return a block consisting of the right columns of it", function() {
    cvblock.rightCols.should.be.a.Function;

    var cvblock2 = cvblock.rightCols(1);
    cvblock2.should.instanceOf(CVectorBlock);
    cvblock2.toString().should.equal("(3,0)\n(4,0)");

    (function() {
      cvblock.rightCols(2);
    }).should.throw("Invalid argument");

    (function() {
      cvblock.rightCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleCols() should return a block consisting of a range of columns of it", function() {
    cvblock.middleCols.should.be.a.Function;

    var cvblock2 = cvblock.middleCols(0, 1);
    cvblock2.should.instanceOf(CVectorBlock);
    cvblock2.toString().should.equal("(3,0)\n(4,0)");

    (function() {
      cvblock.middleCols(1, 1);
    }).should.throw("Invalid argument");

    (function() {
      cvblock.middleCols(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topLeftCorner() should return a block consisting of a top-left corner of it", function() {
    cvblock.topLeftCorner.should.be.a.Function;

    var cvblock2 = cvblock.topLeftCorner(1, 1);
    cvblock2.should.instanceOf(CVectorBlock);
    cvblock2.toString().should.equal("(3,0)");

    (function() {
      cvblock.topLeftCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      cvblock.topLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topRightCorner() should return a block consisting of a top-right corner of it", function() {
    cvblock.topRightCorner.should.be.a.Function;

    var cvblock2 = cvblock.topRightCorner(1, 1);
    cvblock2.should.instanceOf(CVectorBlock);
    cvblock2.toString().should.equal("(3,0)");

    (function() {
      cvblock.topRightCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      cvblock.topRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomLeftCorner() should return a block consisting of a bottom-left corner of it", function() {
    cvblock.bottomLeftCorner.should.be.a.Function;

    var cvblock2 = cvblock.bottomLeftCorner(1, 1);
    cvblock2.should.instanceOf(CVectorBlock);
    cvblock2.toString().should.equal("(4,0)");

    (function() {
      cvblock.bottomLeftCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      cvblock.bottomLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRightCorner() should return a block consisting of a bottom-right corner of it", function() {
    cvblock.bottomRightCorner.should.be.a.Function;

    var cvblock2 = cvblock.bottomRightCorner(1, 1);
    cvblock2.should.instanceOf(CVectorBlock);
    cvblock2.toString().should.equal("(4,0)");

    (function() {
      cvblock.bottomRightCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      cvblock.bottomRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#replicate() should return a complex matrix which is replicated", function() {
    cvblock.replicate.should.be.a.Function;

    cvblock.replicate(0, 0).toString().should.equal("");
    cvblock.replicate(0, 1).toString().should.equal("");
    cvblock.replicate(1, 0).toString().should.equal("");
    cvblock.replicate(1, 1).toString().should.equal("(3,0)\n(4,0)");
    cvblock.replicate(2, 1).toString().should.equal("(3,0)\n(4,0)\n(3,0)\n(4,0)");
    cvblock.replicate(1, 2).toString().should.equal("(3,0) (3,0)\n(4,0) (4,0)");
    cvblock.replicate(2, 2).toString().should.equal("(3,0) (3,0)\n(4,0) (4,0)\n(3,0) (3,0)\n(4,0) (4,0)");

    (function() {
      cvblock.replicate(-1, 0);
    }).should.throw("Invalid argument");
  });

  it("#dot() should return the dot product of two complex vector blocks", function() {
    cvblock.dot.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    cvblock.dot(new CVector(cvblock.rows())).equals(Complex(0)).should.be.true;
    cvblock.dot(cvblock).equals(Complex(25)).should.be.true;

    (function() {
      cvblock.dot(new CVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector block and a vector", function() {
    cvblock.dot.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    cvblock.dot(new Vector(cvblock.rows())).equals(Complex(0)).should.be.true;
    cvblock.dot(new Vector([5,
                            6,
                            ])).equals(Complex(39)).should.be.true;

    (function() {
      cvblock.dot(new Vector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector block and a row-vector", function() {
    cvblock.dot.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    cvblock.dot(new RowVector(cvblock.rows())).equals(Complex(0)).should.be.true;
    cvblock.dot(new RowVector([5, 6])).equals(Complex(39)).should.be.true;

    (function() {
      cvblock.dot(new RowVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector block and a complex vector", function() {
    cvblock.dot.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    cvblock.dot(new CVector(cvblock.rows())).equals(Complex(0));
    cvblock.dot(new CVector([5,
                             6])).equals(Complex(39)).should.be.true;

    (function() {
      cvblock.dot(new CVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector block and a complex row-vector", function() {
    cvblock.dot.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    cvblock.dot(new CRowVector(cvblock.rows())).equals(Complex(0));
    cvblock.dot(new CRowVector([5, 6])).equals(Complex(39)).should.be.true;

    (function() {
      cvblock.dot(new CRowVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector block and a vector block", function() {
    cvblock.dot.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    cvblock.dot(new Vector(cvblock.rows()).block(0, cvblock.rows())).equals(Complex(0)).should.be.true;
    cvblock.dot(new Vector([5,
                            6]).block(0, 2)).equals(Complex(39)).should.be.true;

    (function() {
      cvblock.dot(new Vector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector block and a row-vector block", function() {
    cvblock.dot.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    cvblock.dot(new RowVector(cvblock.rows()).block(0, cvblock.rows())).equals(Complex(0)).should.be.true;
    cvblock.dot(new RowVector([5, 6]).block(0, 2)).equals(Complex(39)).should.be.true;

    (function() {
      cvblock.dot(new RowVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector block and a complex row-vector block", function() {
    cvblock.dot.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    cvblock.dot(new CRowVector(cvblock.rows()).block(0, cvblock.rows())).equals(Complex(0)).should.be.true;
    cvblock.dot(new CRowVector([5, 6]).block(0, 2)).equals(Complex(39)).should.be.true;

    (function() {
      cvblock.dot(new RowVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#asDiagonal() should return a complex diagonal", function() {
    cvblock.asDiagonal.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var dia = cvblock.asDiagonal();
    dia.should.instanceOf(CMatrix);

    dia.toString().should.equal("(3,0) (0,0)\n(0,0) (4,0)");
  });

  it("#normalize() should normalizes the complex vector block", function() {
    cvblock.normalize.should.be.a.Function;

    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)\n(4,0)\n(5,0)\n(6,0)");

    cvblock.toString().should.equal("(3,0)\n(4,0)");
    cvblock.normalize();
    cvblock.toString().should.equal("(0.6,0)\n(0.8,0)");

    cvec.toString().should.equal("  (1,0)\n  (2,0)\n(0.6,0)\n(0.8,0)\n  (5,0)\n  (6,0)");
  });

  it("#redux() should return a full redux operation on the whole complex matrix", function() {
    cvblock.redux.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var result = cvblock.redux(function(a, b){
      return a.add(b);
    })
    result.equals(7).should.be.true;
  });

  it("#sum() should return a full sum operation on the whole complex matrix", function() {
    cvblock.sum.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var result = cvblock.sum();
    result.equals(Complex(7, 0)).should.be.true;
  });

  it("#prod() should return a full product operation on the whole complex matrix", function() {
    cvblock.prod.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var result = cvblock.prod();
    result.equals(Complex(12, 0)).should.be.true;
  });

  it("#mean() should return a full mean operation on the whole complex matrix", function() {
    cvblock.mean.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var result = cvblock.mean();
    result.equals(Complex(3.5, 0)).should.be.true;
  });

  it("#visit() should apply the visitor operation on the whole complex vector block", function() {
    cvblock.visit.should.be.a.Function;

    cvblock.toString().should.equal("(3,0)\n(4,0)");

    var sum = Complex(0);
    cvblock.visit(function(scalar, row, col) {
      scalar.should.instanceOf(Complex);
      row.should.be.a.Number;
      col.should.be.a.Number;
      cvblock.get(row).equals(scalar).should.true;
      col.should.equal(0);
      sum.adda(scalar);
    });

    cvblock.sum().equals(sum).should.true;
  });
});
