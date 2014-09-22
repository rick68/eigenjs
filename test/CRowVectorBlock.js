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
    RowVectorBlock = Eigen.RowVectorBlock,
    CRowVectorBlock = Eigen.CRowVectorBlock,
    should = require('should');

describe('CRowVectorBlock', function() {
  var crvec, crvblock;

  it('#RowCRowVectorBlock() should be a function', function() {
    CRowVectorBlock.should.be.a.Function;
  });

  beforeEach(function() {
    crvec = new CRowVector(6).set([
      1, 2, 3, 4, 5, 6
    ]);

    crvblock = new CRowVectorBlock(crvec, 2, 2);
  });

  it('should throw error when tried creating a vector block with invalid arguments', function() {
    (function() {
      new CRowVectorBlock(crvec, -1, -2);
    }).should.throw('The row or column number is out of range');

    (function() {
      new CRowVectorBlock(crvec, 0, 1);
    }).should.not.throw();

    (function() {
      new CRowVectorBlock(crvec, 4, 2);
    }).should.not.throw();

    (function() {
      new CRowVectorBlock(crvec, 6, 3);
    }).should.throw('The row or column number is out of range');
  });

  it('should be invoked with arguments and return an object', function() {
    var crvblock2 = new CRowVectorBlock(crvec, 2, 2);
    crvblock2.should.be.an.Object;
    crvblock2.should.instanceOf(CRowVectorBlock);
  });

  it('#CRowVectorBlock(crvec, 2, 2) should return the vector block of size 2x1', function() {
    var crvblock2 = new CRowVectorBlock(crvec, 2, 2);
    crvblock2.rows().should.equal(1);
    crvblock2.cols().should.equal(2);
  });

  it('#set() should throw message when row or column numbers are out of range', function() {
    crvblock.set.should.be.a.Function;

    (function() {
      crvblock.set(7, 68);
    }).should.throw('The row or column number is out of range');

    (function() {
      crvblock.set(-1, 500);
    }).should.throw('The row or column number is out of range');
  });

  it('#set() with array argument should work ok', function() {
    crvblock.set.should.be.a.Function;

    crvblock.set([
      -1, -2
    ]).toString().should.eql("(-1,0) (-2,0)");

    crvec.toString().should.equal(" (1,0)  (2,0) (-1,0) (-2,0)  (5,0)  (6,0)");

    (function() {
      crvblock.set([
        1
      ]);
    }).should.throw('Too few coefficients');

    (function() {
      crvblock.set([
        1, 2, 3, 4
      ]);
    }).should.throw('Too many coefficients');
  });

  it('#get() should return the element value of CRowVectorBlock', function() {
    crvblock.get.should.be.a.Function;

    crvblock.get(0).equals(Complex(3, 0));
    crvblock.get(1).equals(Complex(4, 0));

    crvblock.toString().should.equal("(3,0) (4,0)");

    (function(){
      crvblock.get(2);
    }).should.throw('The row or column number is out of range');
  });

  it('#value() should return the unique coefficient of a 1x1 expression', function() {
    crvblock.value.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    (function(){
      crvblock.value();
    }).should.throw('The size of row and column values must equal 1');

    var crvblock2 = crvblock.block(0, 1);
    crvblock2.value().equals(3).should.be.true;
  });

  it('#setZero() should set all coefficients to zero', function() {
    crvblock.setZero.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");
    crvblock.setZero().toString().should.equal("(0,0) (0,0)");

    crvec.toString().should.equal("(1,0) (2,0) (0,0) (0,0) (5,0) (6,0)");
  });

  it('#setOnes() should set all coefficients to ones', function() {
    crvblock.setOnes.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");
    crvblock.setOnes().toString().should.equal("(1,0) (1,0)");

    crvec.toString().should.equal("(1,0) (2,0) (1,0) (1,0) (5,0) (6,0)");
  });

  it('#setConstant() should set all coefficients to constant', function() {
    crvblock.setConstant.should.be.a.Function;

    crvec.toString().should.equal("(1,0) (2,0) (3,0) (4,0) (5,0) (6,0)");
    crvblock.setConstant(0.6).toString().should.equal("(0.6,0) (0.6,0)");
    crvec.toString().should.equal("  (1,0)   (2,0) (0.6,0) (0.6,0)   (5,0)   (6,0)");

    crvblock.setConstant(Complex(3, -4)).toString().should.equal("(3,-4) (3,-4)");
    crvec.toString().should.equal(" (1,0)  (2,0) (3,-4) (3,-4)  (5,0)  (6,0)");
  });

  it('#setRandom() should set all coefficients to random', function() {
    crvblock.setRandom.should.be.a.Function;
    crvblock.setRandom();
  });

  it('#setIdentity() should write the identity expression into itself', function() {
    crvblock.setIdentity.should.be.a.Function;

    crvec.toString().should.equal("(1,0) (2,0) (3,0) (4,0) (5,0) (6,0)");
    crvblock.toString().should.equal("(3,0) (4,0)");
    crvblock.setIdentity().toString().should.equal("(1,0) (0,0)");
    crvec.toString().should.equal("(1,0) (2,0) (1,0) (0,0) (5,0) (6,0)");
  });

  it('#setDiagonal() should set the diagonal to other values', function() {
    crvblock.setDiagonal.should.be.a.Function;

    crvec.toString().should.equal("(1,0) (2,0) (3,0) (4,0) (5,0) (6,0)");

    crvblock.toString().should.equal("(3,0) (4,0)");
    crvblock.setDiagonal(0, Vector.Zero(1)).toString().should.equal("(0,0) (4,0)");
    crvec.toString().should.equal("(1,0) (2,0) (0,0) (4,0) (5,0) (6,0)");

    crvblock.setDiagonal(0, RowVector.Ones(1)).toString().should.equal("(1,0) (4,0)");
    crvec.toString().should.equal("(1,0) (2,0) (1,0) (4,0) (5,0) (6,0)");

    crvblock.setDiagonal(0, CVector.Zero(1)).toString().should.equal("(0,0) (4,0)");
    crvec.toString().should.equal("(1,0) (2,0) (0,0) (4,0) (5,0) (6,0)");

    crvblock.setDiagonal(0, CRowVector.Ones(1)).toString().should.equal("(1,0) (4,0)");
    crvec.toString().should.equal("(1,0) (2,0) (1,0) (4,0) (5,0) (6,0)");

    (function(){
      crvblock.setDiagonal(68, Vector.Random(1));
    }).should.throw('Invalid index argument');

    (function(){
      crvblock.setDiagonal(-500, RowVector.Random(1));
    }).should.throw('Invalid index argument');

    (function(){
      crvblock.setDiagonal(68, CVector.Random(1));
    }).should.throw('Invalid index argument');

    (function(){
      crvblock.setDiagonal(-500, CRowVector.Random(1));
    }).should.throw('Invalid index argument');
  });

  it('#toString() should return all element values of CRowVectorBlock', function() {
    crvblock.toString.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");
  });

  it('#assign() should assign a complex row-vector block', function() {
    crvblock.assign.should.be.a.Function;

    crvec.toString().should.equal("(1,0) (2,0) (3,0) (4,0) (5,0) (6,0)");
    crvblock.toString().should.equal("(3,0) (4,0)");

    var crvblock2 = crvec.block(0, 2);
    crvblock2.toString().should.equal("(1,0) (2,0)");

    crvblock.assign(crvblock2).toString().should.equal("(1,0) (2,0)");
    crvec.toString().should.equal("(1,0) (2,0) (1,0) (2,0) (5,0) (6,0)");
  });

  it('#assign() should assign a matrix', function() {
    crvblock.assign.should.be.a.Function;

    crvec.toString().should.equal("(1,0) (2,0) (3,0) (4,0) (5,0) (6,0)");
    crvblock.toString().should.equal("(3,0) (4,0)");
    crvblock.assign(Matrix(1, 2).set([-1, -2])).toString().should.equal("(-1,0) (-2,0)");
    crvec.toString().should.equal(" (1,0)  (2,0) (-1,0) (-2,0)  (5,0)  (6,0)");
  });

  it('#assign() should assign a vector', function() {
    crvblock.assign.should.be.a.Function;

    var crvblock2 = crvec.block(3, 1);
    crvblock2.toString().should.equal("(4,0)");

    crvblock2.assign(Vector.Zero(1)).toString().should.equal("(0,0)");
    crvec.toString().should.equal("(1,0) (2,0) (3,0) (0,0) (5,0) (6,0)");
  });

  it('#assign() should assign a row-vector', function() {
    crvblock.assign.should.be.a.Function;

    var crvblock2 = crvec.block(3, 2);
    crvblock2.toString().should.equal("(4,0) (5,0)");

    crvblock2.assign(RowVector.Zero(2)).toString().should.equal("(0,0) (0,0)");
    crvec.toString().should.equal("(1,0) (2,0) (3,0) (0,0) (0,0) (6,0)");
  });

  it('#assign() should assign a matrix block', function() {
    crvblock.assign.should.be.a.Function;

    crvec.toString().should.equal("(1,0) (2,0) (3,0) (4,0) (5,0) (6,0)");
    crvblock.toString().should.equal("(3,0) (4,0)");
    crvblock.assign(Matrix.Identity(2).block(0, 0, 1, 2)).toString().should.equal("(1,0) (0,0)");
    crvec.toString().should.equal("(1,0) (2,0) (1,0) (0,0) (5,0) (6,0)");
  });

  it('#assign() should assign a vector block', function() {
    crvblock.assign.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 2, 1);
    crvblock2.toString().should.equal("(3,0)");

    crvblock2.assign(Vector.Identity(1).block(0, 1)).toString().should.equal("(1,0)");
    crvec.toString().should.equal("(1,0) (2,0) (1,0) (4,0) (5,0) (6,0)");
  });

  it('#add() should return the sum of two row-vector blocks', function() {
    crvblock.add.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var crvblock2 = CRowVectorBlock(crvec, 4, 2);
    crvblock2.toString().should.equal("(5,0) (6,0)");

    var crvec2 = crvblock.add(crvblock2);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal(" (8,0) (10,0)");
  });

  it('#add() should return the sum of a complex row-vector block and a matrix', function() {
    crvblock.add.should.be.a.Function;

    var mat2 = Matrix(1, 2).set([
      -1, -2
    ]);

    var crvec2 = crvblock.add(mat2);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(2,0) (2,0)");

    crvblock.toString().should.equal("(3,0) (4,0)");
    crvblock.assign(crvec2);
    crvec.toString().should.equal("(1,0) (2,0) (2,0) (2,0) (5,0) (6,0)");

    (function() {
      crvblock.assign(Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex row-vector block and a vector', function() {
    crvblock.add.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 1, 3);
    crvblock2.toString().should.equal("(2,0) (3,0) (4,0)");
    var crvec2 = new RowVector(crvblock2.cols())
      .set([
        2, 6, 10
      ]);

    var crvec3 = crvblock2.add(crvec2);
    crvec3.should.instanceOf(CRowVector);
    crvec3.toString().should.equal(" (4,0)  (9,0) (14,0)");
  });

  it('#add() should return the sum of a complex row-vector block and a row-vector', function() {
    crvblock.add.should.be.a.Function;

    var crvec2 = RowVector(crvblock.cols())
      .set([
        8, 9
      ]);

    var crvec3 = crvblock.add(crvec2);
    crvec3.should.instanceOf(CRowVector);
    crvec3.toString().should.equal("(11,0) (13,0)");
  });

  it('#add() should return the sum of a complex row-vector block and a matrix block', function() {
    crvblock.add.should.be.a.Function;

    var mat2 = Matrix(1, 2).set([
      -1, -2
    ]);

    var crvec2 = crvblock.add(mat2);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(2,0) (2,0)");

    crvblock.toString().should.equal("(3,0) (4,0)");
    crvblock.assign(crvec2.block(0, 2));
    crvec2.toString().should.equal("(2,0) (2,0)");

    (function() {
      crvblock.assign(CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex row-vector block and a vector block', function() {
    crvblock.add.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 1, 2);
    crvblock2.toString().should.equal("(2,0) (3,0)");
    var crvec2 = new RowVector(crvblock2.cols())
      .set([
        2, 6
      ]);

    var crvec3 = crvblock2.add(crvec2.block(0, 2));
    crvec3.should.instanceOf(CRowVector);
    crvec3.toString().should.equal("(4,0) (9,0)");
  });

  it('#add() should return a CMatrix with the sum of a complex row-vector block and a complex matrix', function() {
    crvblock.add.should.be.a.Function;

    var crvec = CMatrix(1, 2).set([
      -1, -2
    ]);
    crvblock.add(crvec).toString().should.equal("(2,0) (2,0)");

    (function() {
      crvblock.add(CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex row-vector block and a complex vector', function() {
    crvblock.add.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 2, 1);
    crvblock2.toString().should.equal("(3,0)");

    var cvec = CVector([
        2
      ]);

    var crvec2 = crvblock2.add(cvec);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(5,0)");
  });

  it('#add() should return the sum of a complex row-vector block and a complex row-vector', function() {
    crvblock.add.should.be.a.Function;

    var crvec = CRowVector(2)
      .set([
        2, 6
      ]);

    var crvec2 = crvblock.add(crvec);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal(" (5,0) (10,0)");
  });

  it('#add() should return a CMatrix with the sum of a complex row-vector block and a complex matrix block', function() {
    crvblock.add.should.be.a.Function;

    var cmat = CMatrix(1, 2).set([
      -1, -2
    ]);
    crvblock.add(cmat.block(0, 0, 1, 2)).toString().should.equal("(2,0) (2,0)");

    (function() {
      crvblock.add(CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex row-vector block and a complex vector block', function() {
    crvblock.add.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 1, 1);
    crvblock2.toString().should.equal("(2,0)");
    var crvec2 = CVector(1)
      .set([
        10
      ]);

    var cmat = crvblock2.add(crvec2.block(0, 1));
    cmat.should.instanceOf(CRowVector);
    cmat.toString().should.equal("(12,0)");
  });

  it('#add() should return the sum of a complex row-vector block and a complex row-vector block', function() {
    crvblock.add.should.be.a.Function;

    var crvec = CRowVector(2)
      .set([
        2, 6
      ]);

    var crvec2 = crvblock.add(crvec.block(0, 2));
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal(" (5,0) (10,0)");
  });

  it('#adda() should return the sum of two complex row-vector blocks and saves it back', function() {
    crvblock.adda.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var crvblock2 = CRowVectorBlock(crvec, 4, 2);
    crvblock2.toString().should.equal("(5,0) (6,0)");

    crvblock.adda(crvblock2);
    crvblock.toString().should.equal(" (8,0) (10,0)");

    crvec.toString().should.equal(" (1,0)  (2,0)  (8,0) (10,0)  (5,0)  (6,0)");
  });

  it('#adda() should return the sum of a complex row-vector block and a matrix then saves it back', function() {
    crvblock.adda.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    crvblock.adda(
      Matrix(1, 2)
        .set([
          -2, -4
        ])
    );
    crvblock.toString().should.equal("(1,0) (0,0)");

    (function() {
      crvblock.adda(
        Matrix(3, 1)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex row-vector block and a vector then saves it back', function() {
    crvblock.adda.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 2, 1);
    crvblock2.toString().should.equal("(3,0)");

    crvblock2.adda(
      Vector(1)
      .set([
        -2,
      ])
    );
    crvblock2.toString().should.equal("(1,0)");

    (function() {
      crvblock2.adda(
        Vector(3)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex row-vector block and a row-vector then saves it back', function() {
    crvblock.adda.should.be.a.Function;

    crvblock.adda(
      RowVector(2)
      .set([
        -2, -4
      ])
    );
    crvblock.toString().should.equal("(1,0) (0,0)");

    (function() {
      crvblock.adda(
        RowVector(1)
        .set([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex row-vector block and a matrix block then saves it back', function() {
    crvblock.adda.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    crvblock.adda(
      Matrix(1, 2)
        .set([
          -2, -4
        ]).block(0, 0, 1, 2)
    );
    crvblock.toString().should.equal("(1,0) (0,0)");
  });

  it('#adda() should return the sum of a complex row-vector block and a vector block then saves it back', function() {
    crvblock.adda.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 2, 1);
    crvblock2.toString().should.equal("(3,0)");

    crvblock2.adda(
      Vector(1)
      .set([
        -2,
      ]).block(0, 1)
    );
    crvblock2.toString().should.equal("(1,0)");

    (function() {
      crvblock2.adda(
        Vector(3)
        .set([
          1,
          0,
          1
        ]).block(0, 3)
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex row-vector block and a row-vector block then saves it back', function() {
    crvblock.adda.should.be.a.Function;

    crvblock.adda(
      RowVector(2)
      .set([
        -2, -4
      ]).block(0, 2)
    );
    crvblock.toString().should.equal("(1,0) (0,0)");

    (function() {
      crvblock.adda(
        RowVector(1)
        .set([
          1
        ]).block(0, 1)
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex row-vector block and a complex matrix then saves it back', function() {
    crvblock.adda.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    crvblock.adda(
      CMatrix(1, 2)
        .set([
          -2, -4
        ])
    );
    crvblock.toString().should.equal("(1,0) (0,0)");

    (function() {
      crvblock.adda(
        CMatrix(3, 1)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex row-vector block and a complex vector then saves it back', function() {
    crvblock.adda.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 2, 1);
    crvblock2.toString().should.equal("(3,0)");

    crvblock2.adda(
      CVector(1)
      .set([
        -2,
      ])
    );
    crvblock2.toString().should.equal("(1,0)");

    (function() {
      crvblock2.adda(
        CVector(3)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex row-vector block and a complex row-vector then saves it back', function() {
    crvblock.adda.should.be.a.Function;

    crvblock.adda(
      CRowVector(2)
      .set([
        -2, -4
      ])
    );
    crvblock.toString().should.equal("(1,0) (0,0)");

    (function() {
      crvblock.adda(
        CRowVector(1)
        .set([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex row-vector block and a complex matrix block then saves it back', function() {
    crvblock.adda.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    crvblock.adda(
      CMatrix(1, 2)
        .set([
          -2, -4
        ])
    );
    crvblock.toString().should.equal("(1,0) (0,0)");

    (function() {
      crvblock.adda(
        CMatrix(3, 1)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex row-vector block and a complex vector block then saves it back', function() {
    crvblock.adda.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 2, 1);
    crvblock2.toString().should.equal("(3,0)");

    crvblock2.adda(
      CVector(1)
      .set([
        -2,
      ]).block(0, 1)
    );
    crvblock2.toString().should.equal("(1,0)");

    (function() {
      crvblock2.adda(
        CVector(3)
        .set([
          1,
          0,
          1
        ]).block(0, 3)
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of two row-vector block', function() {
    crvblock.sub.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var crvblock2 = CRowVectorBlock(crvec, 3, 2);
    crvblock2.toString().should.equal("(4,0) (5,0)");

    var crvec2 = crvblock.sub(crvblock2);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(-1,0) (-1,0)");
  });

  it('#sub() should return the difference of a complex row-vector block and a matrix', function() {
    crvblock.sub.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var crvec2 = crvblock.sub(new Matrix(1, 2).set([
      1, 2
    ]));
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(2,0) (2,0)");

    (function() {
      crvblock.sub(new Matrix(1, 3).set([
        1, 0, 1
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex row-vector block and a vector', function() {
    crvblock.sub.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 1, 1);
    crvblock2.toString().should.equal("(2,0)");

    var crvec2 = crvblock2.sub(new Vector([
      1
    ]));
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(1,0)");

    (function() {
      crvblock2.sub(new Vector(2).set([
        1,
        0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex row-vector block and a row-vector', function() {
    crvblock.sub.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 1, 1);
    crvblock2.toString().should.equal("(2,0)");

    var vec2 = crvblock2.sub(new RowVector([
      9
    ]));
    vec2.should.instanceOf(CRowVector);
    vec2.toString().should.equal("(-7,0)");

    (function() {
      crvblock2.sub(new RowVector(2).set([
        1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex row-vector block and a matrix block', function() {
    crvblock.sub.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var crvec2 = crvblock.sub(new Matrix(1, 2).set([
      1, 2
    ]).block(0, 0, 1, 2));
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(2,0) (2,0)");

    (function() {
      crvblock.sub(new Matrix(1, 3).set([
        1, 0, 1
      ]).block(0, 0, 1, 3));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex row-vector block and a vector block', function() {
    crvblock.sub.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 1, 1);
    crvblock2.toString().should.equal("(2,0)");

    var crvec2 = crvblock2.sub(new Vector([
      9
    ]).block(0, 1));
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(-7,0)");

    (function() {
      crvblock2.sub(new RowVector(2).set([
        1, 0
      ]).block(0, 2));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a complex row-vector block and a complex matrix', function() {
    crvblock.sub.should.be.a.Function;

    var crvec = CMatrix(1, 2).set([
      Complex(2, 0), Complex(4, 1)
    ]);

    var crvec2 = crvblock.sub(crvec);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal(" (1,0) (0,-1)");

    (function() {
      crvblock.sub(
        CMatrix(1, 3).set([
          1, 0, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a complex row-vector block and a complex vector', function() {
    crvblock.sub.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 2, 1);
    crvblock2.toString().should.equal("(3,0)");

    var cvec = CVector([
      Complex(2, 0)
    ]);

    var crvec2 = crvblock2.sub(cvec);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(1,0)");

    (function() {
      crvblock2.sub(
        CVector(3).set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a complex row-vector block and a complex row-vector', function() {
    crvblock.sub.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 3, 2);
    crvblock2.toString().should.equal("(4,0) (5,0)");

    var crvec2 = CRowVector([
      Complex(2, 0), Complex(4, 0)
    ]);

    var crvec3 = crvblock2.sub(crvec2);
    crvec3.should.instanceOf(CRowVector);
    crvec3.toString().should.equal("(2,0) (1,0)");

    (function() {
      crvblock2.sub(
        CRowVector(3).set([
          1, 0, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a complex row-vector block and a complex matrix block', function() {
    crvblock.sub.should.be.a.Function;

    var crvec = CMatrix(1, 2).set([
      Complex(2, 0), Complex(4, 1)
    ]);

    var crvec2 = crvblock.sub(crvec.block(0, 0, 1, 2));
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal(" (1,0) (0,-1)");
  });

  it('#sub() should return a CMatrix with the difference of a complex row-vector block and a complex vector block', function() {
    crvblock.sub.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 2, 1);
    crvblock2.toString().should.equal("(3,0)");

    var crvec2 = CVector([
      Complex(2, 0),
      Complex(4, 1)
    ]);

    var crvec3 = crvblock2.sub(crvec2.block(0, 1));
    crvec3.should.instanceOf(CRowVector);
    crvec3.toString().should.equal("(1,0)");
  });

  it('#sub() should return a CMatrix with the difference of a complex row-vector block and a complex row-vector block', function() {
    crvblock.sub.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 0, 1);
    crvblock2.toString().should.equal("(1,0)");

    var crvec2 = CRowVector([
      Complex(2, 0)
    ]);

    var crvec3 = crvblock2.sub(crvec2.block(0, 1));
    crvec3.should.instanceOf(CRowVector);
    crvec3.toString().should.equal("(-1,0)");
  });

  it('#suba() should return the sum of two complex row-vector blocks and saves it back', function() {
    crvblock.suba.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var crvblock2 = CRowVectorBlock(crvec, 3, 2);
    crvblock2.toString().should.equal("(4,0) (5,0)");

    crvblock.suba(crvblock2);
    crvblock.toString().should.equal("(-1,0) (-1,0)");
    crvblock2.toString().should.equal("(-1,0)  (5,0)");

    crvec.toString().should.equal(" (1,0)  (2,0) (-1,0) (-1,0)  (5,0)  (6,0)");
  });

  it('#suba() should return the difference of a complex row-vector block and a matrix then saves it back', function() {
    crvblock.suba.should.be.a.Function;

    var mat2 = Matrix(1, 2)
    .set([
      1, 3
    ]);
    crvblock.suba(mat2);
    crvblock.toString().should.equal("(2,0) (1,0)");

    (function() {
      crvblock.suba(
        Matrix(1, 3)
        .set([
          1, 0, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of a complex row-vector block and a vector then saves it back', function() {
    crvblock.suba.should.be.a.Function;

    var crvblock2 = CRowVectorBlock(crvec, 2, 4);
    crvblock2.toString().should.equal("(3,0) (4,0) (5,0) (6,0)");

    var rvec = new RowVector([
      1, 3, 5, 7
    ]);
    crvblock2.suba(rvec);
    crvblock2.toString().should.equal(" (2,0)  (1,0)  (0,0) (-1,0)");

    crvec.toString().should.equal(" (1,0)  (2,0)  (2,0)  (1,0)  (0,0) (-1,0)");
  });

  it('#suba() should return the difference of a complex row-vector block and a row-vector then saves it back', function() {
    crvblock.suba.should.be.a.Function;

    var crvblock2 = CRowVectorBlock(crvec, 3, 3);
    crvblock2.toString().should.equal("(4,0) (5,0) (6,0)");

    var crvec2 = new RowVector([
      -1, -2, -3
    ]);
    crvblock2.suba(crvec2);
    crvblock2.toString().should.equal("(5,0) (7,0) (9,0)");

    crvec.toString().should.equal("(1,0) (2,0) (3,0) (5,0) (7,0) (9,0)");
  });

  it('#suba() should return the difference of a complex row-vector block and a matrix block then saves it back', function() {
    crvblock.suba.should.be.a.Function;

    var mat2 = Matrix(1, 2)
    .set([
      1, 3
    ]);
    crvblock.suba(mat2.block(0, 0, 1, 2));
    crvblock.toString().should.equal("(2,0) (1,0)");

    (function() {
      crvblock.suba(
        Matrix(1, 3)
        .set([
          1, 0, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of a complex row-vector block and a vector block then saves it back', function() {
    crvblock.suba.should.be.a.Function;

    var crvblock2 = crvec.block(3, 1);
    crvblock2.toString().should.equal("(4,0)");

    var vec = Vector(1)
    .set([
      1
    ]);
    crvblock2.suba(vec.block(0, 1));
    crvblock2.toString().should.equal("(3,0)");

    (function() {
      crvblock.suba(
        Vector(3)
        .set([
          1,
          0,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of a complex row-vector block and a row-vector block then saves it back', function() {
    crvblock.suba.should.be.a.Function;

    var crvblock2 = crvec.block(3, 1);
    crvblock2.toString().should.equal("(4,0)");

    var rvec = RowVector(1)
    .set([
      1
    ]);
    crvblock2.suba(rvec.block(0, 1));
    crvblock2.toString().should.equal("(3,0)");

    (function() {
      crvblock.suba(
        RowVector(3)
        .set([
          1,
          0,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of a complex row-vector block and a complex matrix then saves it back', function() {
    crvblock.suba.should.be.a.Function;

    var cmat2 = CMatrix(1, 2)
    .set([
      1, 3
    ]);
    crvblock.suba(cmat2);
    crvblock.toString().should.equal("(2,0) (1,0)");

    (function() {
      crvblock.suba(
        Matrix(1, 3)
        .set([
          1, 0, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of a complex row-vector block and a complex vector then saves it back', function() {
    crvblock.suba.should.be.a.Function;

    var crvblock2 = CRowVectorBlock(crvec, 2, 4);
    crvblock2.toString().should.equal("(3,0) (4,0) (5,0) (6,0)");

    var crvec2 = new CRowVector([
      1, 3, 5, 7
    ]);
    crvblock2.suba(crvec2);
    crvblock2.toString().should.equal(" (2,0)  (1,0)  (0,0) (-1,0)");

    crvec.toString().should.equal(" (1,0)  (2,0)  (2,0)  (1,0)  (0,0) (-1,0)");
  });

  it('#suba() should return the difference of a complex row-vector block and a complex row-vector then saves it back', function() {
    crvblock.suba.should.be.a.Function;

    var crvblock2 = CRowVectorBlock(crvec, 3, 3);
    crvblock2.toString().should.equal("(4,0) (5,0) (6,0)");

    var crvec2 = new RowVector([
      -1, -2, -3
    ]);
    crvblock2.suba(crvec2);
    crvblock2.toString().should.equal("(5,0) (7,0) (9,0)");

    crvec.toString().should.equal("(1,0) (2,0) (3,0) (5,0) (7,0) (9,0)");
  });

  it('#suba() should return the difference of a complex row-vector block and a complex matrix block then saves it back', function() {
    crvblock.suba.should.be.a.Function;

    var mat2 = Matrix(1, 2)
    .set([
      1, 3
    ]);
    crvblock.suba(mat2.block(0, 0, 1, 2));
    crvblock.toString().should.equal("(2,0) (1,0)");

    (function() {
      crvblock.suba(
        Matrix(1, 3)
        .set([
          1, 0, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of a complex row-vector block and a complex vector block then saves it back', function() {
    crvblock.suba.should.be.a.Function;

    var crvblock2 = crvec.block(3, 1);
    crvblock2.toString().should.equal("(4,0)");

    var cvec2 = CVector(1)
    .set([
      1
    ]);
    crvblock2.suba(cvec2.block(0, 1));
    crvblock2.toString().should.equal("(3,0)");

    (function() {
      crvblock.suba(
        CVector(3)
        .set([
          1,
          0,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#mul() should return the product of two complex row-vector blocks', function() {
    crvblock.mul.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 0, 1);
    crvblock2.toString().should.equal("(1,0)");
    var crvblock3 = new CRowVectorBlock(crvec, 1, 1);
    crvblock3.toString().should.equal("(2,0)");

    var mat2 = crvblock2.mul(crvblock3);
    mat2.should.instanceOf(CMatrix);
    mat2.toString().should.equal("(2,0)");

    (function() {
      crvblock.mul(CRowVectorBlock(crvec, 0, 2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex row-vector block and a matrix', function() {
    crvblock.mul.should.be.a.Function;

    var vec2 = crvblock.mul(new Matrix(2, 1).set([
      1,
      2
    ]));
    vec2.should.instanceOf(CMatrix);
    vec2.toString().should.equal("(11,0)");

    (function() {
      crvblock.mul(Matrix(3, 2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex row-vector block and a vector', function() {
    crvblock.mul.should.be.a.Function;

    var vec = new Vector([
      -1,
      -2
    ]);
    var vec2 = crvblock.mul(vec);
    vec2.should.instanceOf(CMatrix);
    vec2.toString().should.equal("(-11,0)");

    (function() {
      crvblock.mul(vec2);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex row-vector block and a row-vector', function() {
    crvblock.mul.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 3, 1);
    crvblock2.toString().should.equal("(4,0)");

    var rvec2 = new RowVector([-1]);
    var mat2 = crvblock2.mul(rvec2);
    mat2.should.instanceOf(CMatrix);
    mat2.toString().should.equal("(-4,0)");
  });

  it('#mul() should return the product of a complex row-vector block and a matrix block', function() {
    crvblock.mul.should.be.a.Function;

    var mat2 = crvblock.mul(new Matrix(2, 1).set([
      1,
      2
    ]).block(0, 0, 2, 1));
    mat2.should.instanceOf(CMatrix);
    mat2.toString().should.equal("(11,0)");
  });

  it('#mul() should return the product of a complex row-vector block and a vector block', function() {
    crvblock.mul.should.be.a.Function;

    var crvblock2 = crvec.block(2, 1);

    var cmat2 = crvblock2.mul(new Vector(1).set([
      -1
    ]).block(0, 1));
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(-3,0)");
  });

  it('#mul() should return the product of a complex row-vector block and a row-vector block', function() {
    crvblock.mul.should.be.a.Function;

    var crvblock2 = crvec.block(2, 1);

    var rvec = crvblock2.mul(new RowVector(1).set([
      2
    ]).block(0, 1));
    rvec.should.instanceOf(CMatrix);
    rvec.toString().should.equal("(6,0)");
  });

  it('#mul() should return a CMatrix with the product of a complex row-vector block and a complex matrix', function() {
    crvblock.mul.should.be.a.Function;

    var cmat = new CMatrix(2, 2).set([
      Complex(1, 1), Complex(2, 2),
      Complex(3, 3), Complex(4, 4)
    ]);
    var cmat2 = crvblock.mul(cmat);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(15,15) (22,22)");

    (function() {
      crvblock.mul(new CMatrix(3, 3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a complex row-vector block and a complex vector', function() {
    crvblock.mul.should.be.a.Function;

    var crvec = new CVector(2).set([
      Complex(1, 1),
      Complex(2, 2)
    ]);
    var cmat = crvblock.mul(crvec);
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("(11,11)");

    (function() {
      crvblock.mul(new CVector(3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a complex row-vector block and a complex row-vector', function() {
    crvblock.mul.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 3, 1);
    crvblock2.toString().should.equal("(4,0)");

    var crvec2 = new CRowVector(1).set([
      Complex(1, 1)
    ]);
    var cmat2 = crvblock2.mul(crvec2);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(4,4)");
  });

  it('#mul() should return a CMatrix with the product of a complex row-vector block and a complex matrix block', function() {
    crvblock.mul.should.be.a.Function;

    var cmat = new CMatrix(2, 2).set([
      Complex(1, 1), Complex(2, 2),
      Complex(3, 3), Complex(4, 4)
    ]);
    var cmat2 = crvblock.mul(cmat.block(0, 0, 2, 2));
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(15,15) (22,22)");

    (function() {
      crvblock.mul(new CMatrix(3, 3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a complex row-vector block and a complex vector block', function() {
    crvblock.mul.should.be.a.Function;

    var crvec = new CVector(2).set([
      Complex(1, 1),
      Complex(2, 2)
    ]);
    var cmat = crvblock.mul(crvec.block(0, 2));
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("(11,11)");

    (function() {
      crvblock.mul(new CVector(3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex row-vector block and a scalar value', function() {
    crvblock.mul.should.be.a.Function;

    var mat2 = crvblock.mul(-1);
    mat2.should.instanceOf(CRowVector);
    mat2.toString().should.equal("(-3,0) (-4,0)");
  });

  it('#mul() should return the product of a complex row-vector block and a complex value', function() {
    crvblock.mul.should.be.a.Function;

    var crvec = crvblock.mul(Complex(-1));
    crvec.should.instanceOf(CRowVector);
    crvec.toString().should.equal("(-3,0) (-4,0)");
  });

  it('#mula() should return the product of two row-vector block and saves it back', function() {
    crvblock.mula.should.be.a.Function;

    var crvblock2 = new CRowVectorBlock(crvec, 1, 1);
    crvblock2.toString().should.equal("(2,0)");
    var crvblock3 = new CRowVectorBlock(crvec, 3, 1);
    crvblock3.toString().should.equal("(4,0)");

    crvblock2.mula(crvblock3);
    crvblock2.toString().should.equal("(8,0)");

    crvec.toString().should.equal("(1,0) (8,0) (3,0) (4,0) (5,0) (6,0)");
  });

  it('#mula() should return the product of a complex row-vector block and a matrix then saves it back', function() {
    crvblock.mula.should.be.a.Function;

    crvblock.mula(new Matrix(2, 2).set([
      -1, -2,
      -3, -4
    ]));
    crvblock.toString().should.equal("(-15,0) (-22,0)");

    crvec.toString().should.equal("  (1,0)   (2,0) (-15,0) (-22,0)   (5,0)   (6,0)");
  });

  it('#mula() should return the product of a complex row-vector block and a vector then saves it back', function() {
    crvblock.mula.should.be.a.Function;

    var crvblock2 = CRowVectorBlock(crvec, 1, 1);
    crvblock2.toString().should.equal("(2,0)");

    crvblock2.mula(new Vector([-1]));
    crvblock2.toString().should.equal("(-2,0)");

    crvec.toString().should.equal(" (1,0) (-2,0)  (3,0)  (4,0)  (5,0)  (6,0)");
  });

  it('#mula() should return the product of a complex row-vector block and a row-vector then saves it back', function() {
    crvblock.mula.should.be.a.Function;

    var crvblock2 = CRowVectorBlock(crvec, 1, 1);
    crvblock2.toString().should.equal("(2,0)");

    crvblock2.mula(new RowVector([-1]));
    crvblock2.toString().should.equal("(-2,0)");

    crvec.toString().should.equal(" (1,0) (-2,0)  (3,0)  (4,0)  (5,0)  (6,0)");

    (function() {
     crvblock2.mula(new RowVector([
        -1, -2
      ]));
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a complex row-vector block and a matrix block then saves it back', function() {
    crvblock.mula.should.be.a.Function;

    crvblock.mula(new Matrix(2, 2).set([
      -1, -2,
      -3, -4
    ]).block(0, 0, 2, 2));
    crvblock.toString().should.equal("(-15,0) (-22,0)");

    crvec.toString().should.equal("  (1,0)   (2,0) (-15,0) (-22,0)   (5,0)   (6,0)");
  });

  it('#mula() should return the product of a complex row-vector block and a vector block then saves it back', function() {
    crvblock.mula.should.be.a.Function;

    var crvblock2 = CRowVectorBlock(crvec, 1, 1);
    crvblock2.toString().should.equal("(2,0)");

    crvblock2.mula(new Vector([-1]));
    crvblock2.toString().should.equal("(-2,0)");

    crvec.toString().should.equal(" (1,0) (-2,0)  (3,0)  (4,0)  (5,0)  (6,0)");
  });

  it('#mula() should return the product of a complex row-vector block and a scalar value then saves it back', function() {
    crvblock.mula.should.be.a.Function;

    crvblock.mula(-1);
    crvec.toString().should.equal(" (1,0)  (2,0) (-3,0) (-4,0)  (5,0)  (6,0)");
  });

  it('#mula() should return the product of a complex row-vector block and a complex matrix then saves it back', function() {
    crvblock.mula.should.be.a.Function;

    crvblock.mula(new CMatrix(2, 2).set([
      -1, -2,
      -3, -4
    ]));
    crvblock.toString().should.equal("(-15,0) (-22,0)");

    crvec.toString().should.equal("  (1,0)   (2,0) (-15,0) (-22,0)   (5,0)   (6,0)");
  });

  it('#mula() should return the product of a complex row-vector block and a complex vector then saves it back', function() {
    crvblock.mula.should.be.a.Function;

    var crvblock2 = CRowVectorBlock(crvec, 1, 1);
    crvblock2.toString().should.equal("(2,0)");

    crvblock2.mula(new CVector([-1]));
    crvblock2.toString().should.equal("(-2,0)");

    crvec.toString().should.equal(" (1,0) (-2,0)  (3,0)  (4,0)  (5,0)  (6,0)");
  });

  it('#mula() should return the product of a complex row-vector block and a complex row-vector then saves it back', function() {
    crvblock.mula.should.be.a.Function;

    var crvblock2 = CRowVectorBlock(crvec, 1, 1);
    crvblock2.toString().should.equal("(2,0)");

    crvblock2.mula(new CRowVector([-1]));
    crvblock2.toString().should.equal("(-2,0)");

    crvec.toString().should.equal(" (1,0) (-2,0)  (3,0)  (4,0)  (5,0)  (6,0)");

    (function() {
     crvblock2.mula(new CRowVector([
        -1, -2
      ]));
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a complex row-vector block and a complex matrix block then saves it back', function() {
    crvblock.mula.should.be.a.Function;

    crvblock.mula(new CMatrix(2, 2).set([
      -1, -2,
      -3, -4
    ]).block(0, 0, 2, 2));
    crvblock.toString().should.equal("(-15,0) (-22,0)");

    crvec.toString().should.equal("  (1,0)   (2,0) (-15,0) (-22,0)   (5,0)   (6,0)");
  });

  it('#mula() should return the product of a complex row-vector block and a complex vector block then saves it back', function() {
    crvblock.mula.should.be.a.Function;

    var crvblock2 = CRowVectorBlock(crvec, 1, 1);
    crvblock2.toString().should.equal("(2,0)");

    crvblock2.mula(new CVector([-1]));
    crvblock2.toString().should.equal("(-2,0)");

    crvec.toString().should.equal(" (1,0) (-2,0)  (3,0)  (4,0)  (5,0)  (6,0)");
  });

  it('#mula() should return the product of a complex row-vector block and a scalar value then saves it back', function() {
    crvblock.mula.should.be.a.Function;

    crvblock.mula(-1);
    crvec.toString().should.equal(" (1,0)  (2,0) (-3,0) (-4,0)  (5,0)  (6,0)");
  });

  it('#div() should return a CMatrix which be divied by a scalar value', function() {
    crvblock.div.should.be.a.Function;

    var cvec2 = crvblock.div(2);
    cvec2.equals(
      new CMatrix(1, 2)
      .set([
        1.5, 2
      ])
    ).should.ok;
    crvblock.div(2).toString().should.equal("(1.5,0)   (2,0)");
  });

  it('#div() should return a CMatrix which be divied by a complex value', function() {
    crvblock.div.should.be.a.Function;

    var crvec2 = crvblock.div(Complex(2, 0));
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(1.5,0)   (2,0)");
  });

  it('#diva() should return a CMatrix which be divied by a scalar value then saves it back', function() {
    crvblock.diva.should.be.a.Function;

    crvblock.diva(2);
    crvblock.equals(
      new CMatrix(1, 2)
      .set([
        1.5, 2
      ])
    ).should.ok;
    crvblock.get(0).equals(Complex(1.5, 0));

    crvec.toString().should.equal("  (1,0)   (2,0) (1.5,0)   (2,0)   (5,0)   (6,0)");
  });

  it('#diva() should return a CMatrix which be divied by a complex value then saves it back', function() {
    crvblock.diva.should.be.a.Function;

    crvblock.diva(Complex(2, 0));
    crvblock.equals(
      new CMatrix(1, 2)
      .set([
        1.5, 2
      ])
    ).should.ok;
    crvblock.get(0).equals(Complex(1.5, 0));

    crvec.toString().should.equal("  (1,0)   (2,0) (1.5,0)   (2,0)   (5,0)   (6,0)");
  });

  it('#transpose() should return the transpose of a complex matrix', function() {
    crvblock.transpose.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var cvec = crvblock.transpose();
    cvec.should.instanceOf(CVector);
    cvec.toString().should.equal("(3,0)\n(4,0)");
  });

  it('#conjugate() should return the conjugate of a complex matrix', function() {
    crvblock.conjugate.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var crvec2 = crvblock.conjugate();
    crvec2.should.instanceOf(CRowVector);

    crvec2.toString().should.equal("(3,-0) (4,-0)");
  });

  it('#adjoint() should return the adjoint of a complex matrix', function() {
    crvblock.adjoint.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var cvec = crvblock.adjoint();
    cvec.should.instanceOf(CVector);
    cvec.toString().should.equal("(3,-0)\n(4,-0)");
  });

  it('#determinant() should return the determinant of a complex matrix', function() {
    crvblock.determinant.should.be.a.Function;

    (function() {
      crvblock.determinant();
    }).should.throw("The matrix must be square");

    CRowVector([6]).block(0, 1).determinant().equals(Complex(6)).should.true;
  });

  it('#inverse() should return the inverse of a complex matrix', function() {
    crvblock.inverse.should.be.a.Function;

    (function() {
      crvblock.inverse();
    }).should.throw("The matrix must be square");

    var cmat2 = CRowVector([6]).block(0, 1).inverse();
    cmat2.should.instanceOf(CMatrix);
    cmat2.equals(CMatrix(1, 1).set([1 / 6])).should.true;
  });

  it('#trace() should return the trace of a complex matrix', function() {
    crvblock.trace.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var trace = crvblock.trace();
    trace.equals(Complex(3, 0)).should.be.true;
  });

  it('#diagonal() should return the diagonal of a complex matrix', function() {
    crvblock.diagonal.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var dia = crvblock.diagonal();
    dia.should.instanceOf(CVector);
    dia.toString().should.equal("(3,0)");
    crvblock.diagonal(1).toString().should.equal("(4,0)");

    (function() {
      crvblock.diagonal(crvblock.cols());
    }).should.throw("Invalid index argument");

    (function() {
      crvblock.diagonal(-crvblock.rows());
    }).should.throw("Invalid index argument");
  });

  it('#norm() should return the l2 norm', function() {
    crvblock.norm.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var sum = 0;

    for (var i = 0; i < crvblock.cols(); ++i) {
      sum += crvblock.get(i).norm();
    }

    crvblock.norm().should.equal(Math.pow(sum, 0.5));
  });

  it('#equals() should return true if two complex row-vector blocks are equal', function() {
    crvblock.equals.should.be.a.Function;

    var rvec2 = new CRowVector([
      1, 2, 1, 2
    ]);
    var crvblock2 = CRowVectorBlock(rvec2, 0, 2);
    var crvblock3 = CRowVectorBlock(rvec2, 2, 2);

    crvblock2.equals(crvblock3).should.ok;
  });

  it('#equals() should return true if a row-vector block and a complex matrix are equal', function() {
    crvblock.equals.should.be.a.Function;

    var cmat2 = new CMatrix(1, 2).set([
      3, 4
    ]);

    crvblock.equals(cmat2).should.ok;
  });

  it('#equals() should return true if a row-vector block and a complex vector are equal', function() {
    crvblock.equals.should.be.a.Function;

    var crvblock2 = crvec.block(2, 1);

    var cvec2 = new CVector([
      3
    ]);

    crvblock2.equals(cvec2).should.ok;
  });

  it('#equals() should return true if a row-vector block and a matrix block are equal', function() {
    crvblock.equals.should.be.a.Function;

    var cmat2 = new CMatrix(1, 2).set([
      3, 4
    ]);

    crvblock.equals(cmat2.block(0, 0, 1, 2)).should.ok;
  });

  it('#equals() should return true if a row-vector block and a vector block are equal', function() {
    crvblock.equals.should.be.a.Function;

    var crvblock2 = crvec.block(2, 1);

    var cvec = new CVector([
      3
    ]);

    crvblock2.equals(cvec.block(0, 1)).should.ok;
  });

  it('#equals() should return true if a row-vector block and a row-vector block are equal', function() {
    crvblock.equals.should.be.a.Function;

    var crvec2 = new CRowVector([
      3, 4
    ]);

    crvblock.equals(crvec2.block(0, 2)).should.ok;
  });

  it('#isApprox() should return true if this is approxivecely equal to other', function() {
    crvblock.isApprox.should.be.a.Function;

    crvblock.diva(9);
    crvblock.toString().should.equal("(0.333333,0) (0.444444,0)");

    var crvec2 = new CRowVector([
      0.333, 0.444
    ]);

    crvblock.isApprox(crvec2.block(0, 2), 1e-3).should.false;
    crvblock.isApprox(crvec2.block(0, 2), 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a complex matrix', function() {
    crvblock.isApprox.should.be.a.Function;

    crvblock.diva(9);
    crvblock.toString().should.equal("(0.333333,0) (0.444444,0)");

    var cmat2 = new CMatrix(1, 2).set([
      0.333, 0.444
    ]);

    crvblock.isApprox(cmat2, 1e-3).should.false;
    crvblock.isApprox(cmat2, 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a complex vector', function() {
    crvblock.isApprox.should.be.a.Function;

    var crvblock2 = crvec.block(2, 1)
    crvblock2.toString().should.equal("(3,0)");

    crvblock2.diva(9);
    crvblock2.toString().should.equal("(0.333333,0)");

    var cvec2 = new CVector(1).set([
      0.333,
    ]);

    crvblock2.isApprox(cvec2, 1e-3).should.false;
    crvblock2.isApprox(cvec2, 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a complex row-vector', function() {
    crvblock.isApprox.should.be.a.Function;

    var crvblock2 = CRowVectorBlock(crvec, 0, 1);
    crvblock2.toString().should.equal("(1,0)");

    crvblock2.diva(9);
    crvblock2.toString().should.equal("(0.111111,0)");

    var crvec2 = new CRowVector([
      0.111
    ]);

    crvblock2.isApprox(crvec2, 1e-3).should.false;
    crvblock2.isApprox(crvec2, 1e-2).should.true;
  });

  it('#isSquare() should return true if this is square', function() {
    crvblock.isSquare.should.be.a.Function;

    crvblock.isSquare().should.be.false;
    CRowVector(1).block(0, 1).isSquare().should.be.true;
  });

  it('#isZero() should return true if this is zero', function() {
    crvblock.isZero.should.be.a.Function;

    crvblock.isZero().should.be.false;

    var crvblock2 = new CRowVector(3).set([
      0, 0, 0.0001
    ]).block(0, 3);
    crvblock2.isZero().should.be.false;
    crvblock2.isZero(1e-4).should.be.true;
  });

  it('#isOnes() should return true if this is ones', function() {
    crvblock.isOnes.should.be.a.Function;

    crvblock.isOnes().should.be.false;

    var crvblock2 = new CRowVector(3).set([
      1, 1.0001, 0.9997
    ]).block(0, 3);
    crvblock2.isOnes().should.be.false;
    crvblock2.isOnes(1e-4).should.be.false;
    crvblock2.isOnes(1e-3).should.be.true;
  });

  it('#isIdentity() should return true if this is identity', function() {
    crvblock.isIdentity.should.be.a.Function;

    crvblock.isIdentity().should.be.false;

    var crvblock2 = crvec.block(0, 1);
    crvblock2.isIdentity().should.be.true;
  });

  it('#isDiagonal() should return true if this is diagonal', function() {
    crvblock.isDiagonal.should.be.a.Function;

    crvblock.isDiagonal().should.be.false;

    var crvblock2 = crvec.block(0, 1);
    crvblock2.isDiagonal().should.be.true;
  });

  it('#allFinite() should return true if it contains only finite numbers, i.e., no NaN and no +/-INF values', function() {
    crvblock.allFinite.should.be.a.Function;

    crvec.toString().should.equal("(1,0) (2,0) (3,0) (4,0) (5,0) (6,0)");
    crvec.allFinite().should.be.true;
    crvblock.allFinite().should.be.true;
    crvblock.set(0, Infinity);
    crvblock.allFinite().should.be.false;
    crvec.allFinite().should.be.false;
  });

  it('#hasNaN() should return true if it contains at least one Not A Number (NaN)', function() {
    crvblock.hasNaN.should.be.a.Function;

    crvec.toString().should.equal("(1,0) (2,0) (3,0) (4,0) (5,0) (6,0)");
    crvec.hasNaN().should.be.false;
    crvblock.hasNaN().should.be.false;
    crvblock.set(0, NaN);
    crvblock.hasNaN().should.be.true;
    crvec.hasNaN().should.be.true;
  });

  it('#Zero() should return a complex zero matrix', function() {
    CRowVectorBlock.Zero.should.be.a.Function;

    CRowVectorBlock.Zero(3).toString().should.equal("(0,0) (0,0) (0,0)");
    CRowVectorBlock.Zero(3).should.instanceOf(CRowVector);

    CRowVectorBlock.Zero(3).equals(
      new CMatrix(1, 3).set([
        0, 0, 0
      ])
    ).should.true;
  });

  it('#Ones() should return a complex ones matrix', function() {
    CRowVectorBlock.Ones.should.be.a.Function;

    CRowVectorBlock.Ones(3).toString().should.equal("(1,0) (1,0) (1,0)");
    CRowVectorBlock.Ones(3).should.instanceOf(CRowVector);

    CRowVectorBlock.Ones(3).equals(
      new CMatrix(1, 3).set([
        1, 1, 1
      ])
    ).should.true;
  });

  it('#Constant() should return a CRowVector with constant values', function() {
    CRowVectorBlock.Constant.should.be.a.Function;

    var crvec2 = CRowVectorBlock.Constant(4, 0.6);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(0.6,0) (0.6,0) (0.6,0) (0.6,0)");
  });

  it('#Identity() should return a complex identity vector', function() {
    CRowVectorBlock.Identity.should.be.a.Function;

    CRowVectorBlock.Identity(0).toString().should.equal("");

    var crvec2 = CRowVectorBlock.Identity(3);
    crvec2.equals(new CMatrix(1, 3).set([
      1, 0, 0
    ])).should.true;
  });

  it('#Random() should return a complex matrix with random values', function() {
    CRowVectorBlock.Random.should.be.a.Function;

    var crvec2 = CRowVectorBlock.Random(3);
    crvec2.should.instanceOf(CRowVector);
    crvec2.rows().should.equal(1);
    crvec2.cols().should.equal(3);
  });

  it("#block() should return a complex row-vector block", function() {
    crvblock.block.should.be.a.Function;

    var crvblock2 = crvblock.block(1, 1);
    crvblock2.should.instanceOf(CRowVectorBlock);
    crvblock2.toString().should.equal("(4,0)");

    crvblock2.assign(CRowVector([
      -1
    ]));

    crvblock.toString().should.equal(" (3,0) (-1,0)");
    crvec.toString().should.equal(" (1,0)  (2,0)  (3,0) (-1,0)  (5,0)  (6,0)");
  });

  it("#row() should return a row matrix block of the complex row-vector block", function() {
    crvblock.row.should.be.a.Function;

    var row = crvec.row(0);
    row.should.instanceOf(CRowVectorBlock);
    row.toString().should.equal("(1,0) (2,0) (3,0) (4,0) (5,0) (6,0)");

    (function() {
      crvec.row(1);
    }).should.throw("The row or column number is out of range");
  });

  it("#col() should return a column matrix block of the complex row-vector block", function() {
    crvblock.col.should.be.a.Function;

    var col = crvec.col(0);
    col.should.instanceOf(CRowVectorBlock);
    col.toString().should.equal("(1,0)");

    (function() {
      crvec.col(6);
    }).should.throw("The row or column number is out of range");
  });

  it("#head() should return a dynamic-size expression of the first coefficients of it", function() {
    crvblock.head.should.be.a.Function;

    var head = crvblock.head(1);
    head.should.instanceOf(CRowVectorBlock);
    head.toString().should.equal("(3,0)");

    (function() {
      crvblock.head(3);
    }).should.throw("Invalid argument");
  });

  it("#tail() should return a dynamic-size expression of the tail coefficients of it", function() {
    crvblock.tail.should.be.a.Function;

    var tail = crvblock.tail(1);
    tail.should.instanceOf(CRowVectorBlock);
    tail.toString().should.equal("(4,0)");

    (function() {
      crvblock.tail(3);
    }).should.throw("Invalid argument");
  });

  it("#topRows() should return a block consisting of the top rows of it", function() {
    crvblock.topRows.should.be.a.Function;

    var crvblock2 = crvblock.topRows(1);
    crvblock2.should.instanceOf(CRowVectorBlock);
    crvblock2.toString().should.equal("(3,0) (4,0)");

    (function() {
      crvblock.topRows(2);
    }).should.throw("Invalid argument");

    (function() {
      crvblock.topRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRows() should return a block consisting of the bottom rows of it", function() {
    crvblock.bottomRows.should.be.a.Function;

    var crvblock2 = crvblock.bottomRows(1);
    crvblock2.should.instanceOf(CRowVectorBlock);
    crvblock2.toString().should.equal("(3,0) (4,0)");

    (function() {
      crvblock.bottomRows(2);
    }).should.throw("Invalid argument");

    (function() {
      crvblock.bottomRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleRows() should return a block consisting of a range of rows of it", function() {
    crvblock.middleRows.should.be.a.Function;

    var crvblock2 = crvblock.middleRows(0, 1);
    crvblock2.should.instanceOf(CRowVectorBlock);
    crvblock2.toString().should.equal("(3,0) (4,0)");

    (function() {
      crvblock.middleRows(2, 1);
    }).should.throw("Invalid argument");

    (function() {
      crvblock.middleRows(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#leftCols() should return a block consisting of the left columns of it", function() {
    crvblock.leftCols.should.be.a.Function;

    var crvblock2 = crvblock.leftCols(1);
    crvblock2.should.instanceOf(CRowVectorBlock);
    crvblock2.toString().should.equal("(3,0)");

    (function() {
      crvblock.leftCols(3);
    }).should.throw("Invalid argument");

    (function() {
      crvblock.leftCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#rightCols() should return a block consisting of the right columns of it", function() {
    crvblock.rightCols.should.be.a.Function;

    var crvblock2 = crvblock.rightCols(1);
    crvblock2.should.instanceOf(CRowVectorBlock);
    crvblock2.toString().should.equal("(4,0)");

    (function() {
      crvblock.rightCols(3);
    }).should.throw("Invalid argument");

    (function() {
      crvblock.rightCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleCols() should return a block consisting of a range of columns of it", function() {
    crvblock.middleCols.should.be.a.Function;

    var crvblock2 = crvblock.middleCols(1, 1);
    crvblock2.should.instanceOf(CRowVectorBlock);
    crvblock2.toString().should.equal("(4,0)");

    (function() {
      crvblock.middleCols(2, 1);
    }).should.throw("Invalid argument");

    (function() {
      crvblock.middleCols(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topLeftCorner() should return a block consisting of a top-left corner of it", function() {
    crvblock.topLeftCorner.should.be.a.Function;

    var crvblock2 = crvblock.topLeftCorner(1, 1);
    crvblock2.should.instanceOf(CRowVectorBlock);
    crvblock2.toString().should.equal("(3,0)");

    (function() {
      crvblock.topLeftCorner(1, 4);
    }).should.throw("Invalid argument");

    (function() {
      crvblock.topLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topRightCorner() should return a block consisting of a top-right corner of it", function() {
    crvblock.topRightCorner.should.be.a.Function;

    var crvblock2 = crvblock.topRightCorner(1, 1);
    crvblock2.should.instanceOf(CRowVectorBlock);
    crvblock2.toString().should.equal("(4,0)");

    (function() {
      crvblock.topRightCorner(1, 4);
    }).should.throw("Invalid argument");

    (function() {
      crvblock.topRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomLeftCorner() should return a block consisting of a bottom-left corner of it", function() {
    crvblock.bottomLeftCorner.should.be.a.Function;

    var crvblock2 = crvblock.bottomLeftCorner(1, 1);
    crvblock2.should.instanceOf(CRowVectorBlock);
    crvblock2.toString().should.equal("(3,0)");

    (function() {
      crvblock.bottomLeftCorner(1, 3);
    }).should.throw("Invalid argument");

    (function() {
      crvblock.bottomLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRightCorner() should return a block consisting of a bottom-right corner of it", function() {
    crvblock.bottomRightCorner.should.be.a.Function;

    var crvblock2 = crvblock.bottomRightCorner(1, 1);
    crvblock2.should.instanceOf(CRowVectorBlock);
    crvblock2.toString().should.equal("(4,0)");

    (function() {
      crvblock.bottomRightCorner(1, 3);
    }).should.throw("Invalid argument");

    (function() {
      crvblock.bottomRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#replicate() should return a complex matrix which is replicated", function() {
    crvblock.replicate.should.be.a.Function;

    crvblock.replicate(0, 0).toString().should.equal("");
    crvblock.replicate(0, 1).toString().should.equal("");
    crvblock.replicate(1, 0).toString().should.equal("");
    crvblock.replicate(1, 1).toString().should.equal("(3,0) (4,0)");
    crvblock.replicate(2, 1).toString().should.equal("(3,0) (4,0)\n(3,0) (4,0)");
    crvblock.replicate(1, 2).toString().should.equal("(3,0) (4,0) (3,0) (4,0)");
    crvblock.replicate(2, 2).toString().should.equal("(3,0) (4,0) (3,0) (4,0)\n(3,0) (4,0) (3,0) (4,0)");

    (function() {
      crvec.replicate(-1, 0);
    }).should.throw("Invalid argument");
  });

  it("#dot() should return the dot product of two complex row-vector blocks", function() {
    crvblock.dot.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    crvblock.dot(new CRowVector(crvblock.cols()).block(0, crvblock.cols())).equals(Complex(0));
    crvblock.dot(crvblock).equals(Complex(25)).should.be.true;

    (function() {
      crvblock.dot(new CRowVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector block and a vector", function() {
    crvblock.dot.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    crvblock.dot(new Vector(crvblock.cols())).equals(Complex(0));
    crvblock.dot(new Vector([5,
                             6])).equals(Complex(39)).should.be.true;

    (function() {
      crvblock.dot(new Vector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector block and a row-vector", function() {
    crvblock.dot.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    crvblock.dot(new RowVector(crvblock.cols())).equals(Complex(0));
    crvblock.dot(new RowVector([4, 5])).equals(Complex(32)).should.be.true;

    (function() {
      crvblock.dot(new RowVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector block and a complex vector", function() {
    crvblock.dot.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    crvblock.dot(new CVector(crvblock.cols())).equals(Complex(0));
    crvblock.dot(new CVector([4,
                              5])).equals(Complex(32)).should.be.true;

    (function() {
      crvblock.dot(new CVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector block and a vector block", function() {
    crvblock.dot.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    crvblock.dot(new Vector(crvblock.cols()).block(0, crvblock.cols())).equals(Complex(0)).should.be.true;
    crvblock.dot(new Vector([4,
                             5]).block(0, crvblock.cols())).equals(Complex(32)).should.be.true;

    (function() {
      crvblock.dot(new Vector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector block and a row-vector block", function() {
    crvblock.dot.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    crvblock.dot(new RowVector(crvblock.cols()).block(0, crvblock.cols())).equals(Complex(0)).should.be.true;
    crvblock.dot(new RowVector([4, 5]).block(0, 2)).equals(Complex(32)).should.be.true;

    (function() {
      crvblock.dot(new RowVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector block and a complex vector block", function() {
    crvblock.dot.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    crvblock.dot(new CVector(crvblock.cols()).block(0, crvblock.cols())).equals(Complex(0)).should.be.true;
    crvblock.dot(new CVector([4,
                              5]).block(0, 2)).equals(Complex(32)).should.be.true;

    (function() {
      crvblock.dot(new CVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#asDiagonal() should return a complex diagonal", function() {
    crvblock.asDiagonal.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var dia = crvblock.asDiagonal();
    dia.should.instanceOf(CMatrix);

    dia.toString().should.equal("(3,0) (0,0)\n(0,0) (4,0)");
  });

  it("#normalize() should normalizes the complex row-vector block", function() {
    crvblock.normalize.should.be.a.Function;

    crvec.toString().should.equal("(1,0) (2,0) (3,0) (4,0) (5,0) (6,0)");

    crvblock.toString().should.equal("(3,0) (4,0)");
    crvblock.normalize();
    crvblock.toString().should.equal("(0.6,0) (0.8,0)");

    crvec.toString().should.equal("  (1,0)   (2,0) (0.6,0) (0.8,0)   (5,0)   (6,0)");
  });

  it("#redux() should return a full redux operation on the whole complex matrix", function() {
    crvblock.redux.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var result = crvblock.redux(function(a, b){
      return a.add(b);
    })
    result.equals(7).should.be.true;
  });

  it("#sum() should return a full sum operation on the whole complex matrix", function() {
    crvblock.sum.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var result = crvblock.sum();
    result.equals(Complex(7, 0)).should.be.true;
  });

  it("#prod() should return a full product operation on the whole complex matrix", function() {
    crvblock.prod.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var result = crvblock.prod();
    result.equals(Complex(12, 0)).should.be.true;
  });

  it("#mean() should return a full mean operation on the whole complex matrix", function() {
    crvblock.mean.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var result = crvblock.mean();
    result.equals(Complex(3.5, 0)).should.be.true;
  });

  it("#visit() should apply the visitor operation on the whole complex row-vector block", function() {
    crvblock.visit.should.be.a.Function;

    crvblock.toString().should.equal("(3,0) (4,0)");

    var sum = Complex(0);
    crvblock.visit(function(scalar, row, col) {
      scalar.should.instanceOf(Complex);
      row.should.be.a.Number;
      col.should.be.a.Number;
      row.should.equal(0);
      crvblock.get(col).equals(scalar).should.true;
      sum.adda(scalar);
    });

    crvblock.sum().equals(sum).should.true;
  });
});
