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

describe('RowVectorBlock', function() {
  var rvec, rrvblock;

  it('#RowRowVectorBlock() should be a function', function() {
    RowVectorBlock.should.be.a.Function;
  });

  beforeEach(function() {
    rvec = new RowVector(6).set([
      1, 2, 3, 4, 5, 6
    ]);

    rvblock = new RowVectorBlock(rvec, 2, 2);
  });

  it('should throw error when tried creating a vector block with invalid arguments', function() {
    (function() {
      new RowVectorBlock(rvec, -1, -2);
    }).should.throw('The row or column number is out of range');

    (function() {
      new RowVectorBlock(rvec, 0, 1);
    }).should.not.throw();

    (function() {
      new RowVectorBlock(rvec, 4, 2);
    }).should.not.throw();

    (function() {
      new RowVectorBlock(rvec, 6, 3);
    }).should.throw('The row or column number is out of range');
  });

  it('should be invoked with arguments and return an object', function() {
    var rvblock2 = new RowVectorBlock(rvec, 2, 2);
    rvblock2.should.be.an.Object;
    rvblock2.should.instanceOf(RowVectorBlock);
  });

  it('#RowVectorBlock(rvec, 2, 2) should return the vector block of size 2x1', function() {
    var rvblock2 = new RowVectorBlock(rvec, 2, 2);
    rvblock2.rows().should.equal(1);
    rvblock2.cols().should.equal(2);
  });

  it('#set() should throw message when row or column numbers are out of range', function() {
    rvblock.set.should.be.a.Function;

    (function() {
      rvblock.set(7, 68);
    }).should.throw('The row or column number is out of range');

    (function() {
      rvblock.set(-1, 500);
    }).should.throw('The row or column number is out of range');
  });

  it('#set() with array argument should work ok', function() {
    rvblock.set.should.be.a.Function;

    rvblock.set([
      -1, -2
    ]).toString().should.eql("-1 -2");

    rvec.toString().should.equal(" 1  2 -1 -2  5  6");

    (function() {
      rvblock.set([
        1
      ]);
    }).should.throw('Too few coefficients');

    (function() {
      rvblock.set([
        1, 2, 3, 4
      ]);
    }).should.throw('Too many coefficients');
  });

  it('#get() should return the element value of RowVectorBlock', function() {
    rvblock.get.should.be.a.Function;

    rvblock.get(0).should.equal(3);
    rvblock.get(1).should.equal(4);

    rvblock.toString().should.equal("3 4");

    (function(){
      rvblock.get(2);
    }).should.throw('The row or column number is out of range');
  });

  it('#value() should return the unique coefficient of a 1x1 expression', function() {
    rvblock.value.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    (function(){
      rvblock.value();
    }).should.throw('The size of row and column values must equal 1');

    var rvblock2 = rvblock.block(0, 1);
    rvblock2.value().should.equal(3);
  });

  it('#setZero() should set all coefficients to zero', function() {
    rvblock.setZero.should.be.a.Function;

    rvblock.toString().should.equal("3 4");
    rvblock.setZero().toString().should.equal("0 0");

    rvec.toString().should.equal("1 2 0 0 5 6");
  });

  it('#setOnes() should set all coefficients to ones', function() {
    rvblock.setOnes.should.be.a.Function;

    rvblock.toString().should.equal("3 4");
    rvblock.setOnes().toString().should.equal("1 1");

    rvec.toString().should.equal("1 2 1 1 5 6");
  });

  it('#setConstant() should set all coefficients to constant', function() {
    rvblock.setConstant.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvblock.setConstant(0.6).toString().should.equal("0.6 0.6");
    rvec.toString().should.equal("  1   2 0.6 0.6   5   6");

    (function(){
      rvblock.setConstant(Complex(3, -4));
    }).should.throw('Invalid argument');
  });

  it('#setRandom() should set all coefficients to random', function() {
    rvblock.setRandom.should.be.a.Function;
    rvblock.setRandom();
  });

  it('#setIdentity() should write the identity expression into itself', function() {
    rvblock.setIdentity.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvblock.setIdentity().toString().should.equal("1 0");
    rvec.toString().should.equal("1 2 1 0 5 6");
  });

  it('#setLinSpaced() should set a linearly space into a row-vector block', function() {
    rvblock.setLinSpaced.should.be.a.Function;

    rvblock.toString().should.equal("3 4");
    rvblock.setLinSpaced(0.1, 0.2);
    rvec.toString().should.equal("  1   2 0.1 0.2   5   6");

    (function(){
      rvblock.setLinSpaced(1, 0, 1);
    }).should.throw('The size argument is not equal to the block size');

    rvblock.setLinSpaced(2, 0, 1);
    rvec.toString().should.equal("1 2 0 1 5 6");
  });

  it('#setDiagonal() should set the diagonal to other values', function() {
    rvblock.setDiagonal.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvblock.toString().should.equal("3 4");
    rvblock.setDiagonal(0, Vector.Zero(1)).toString().should.equal("0 4");
    rvec.toString().should.equal("1 2 0 4 5 6");

    rvblock.setDiagonal(0, RowVector.Ones(1)).toString().should.equal("1 4");
    rvec.toString().should.equal("1 2 1 4 5 6");

    (function(){
      rvblock.setDiagonal(68, Vector.Random(1));
    }).should.throw('Invalid index argument');

    (function(){
      rvblock.setDiagonal(-500, RowVector.Random(1));
    }).should.throw('Invalid index argument');
  });

  it('#toString() should return all element values of RowVectorBlock', function() {
    rvblock.toString.should.be.a.Function;

    rvblock.toString().should.equal("3 4");
  });

  it('#assign() should assign a row-vector block', function() {
    rvblock.assign.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvblock.toString().should.equal("3 4");

    var rvblock2 = rvec.block(0, 2);
    rvblock2.toString().should.equal("1 2");

    rvblock.assign(rvblock2).toString().should.equal("1 2");
    rvec.toString().should.equal("1 2 1 2 5 6");
  });

  it('#assign() should assign a matrix', function() {
    rvblock.assign.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvblock.toString().should.equal("3 4");
    rvblock.assign(Matrix(1, 2).set([-1, -2])).toString().should.equal("-1 -2");
    rvec.toString().should.equal(" 1  2 -1 -2  5  6");
  });

  it('#assign() should assign a vector', function() {
    rvblock.assign.should.be.a.Function;

    var rvblock2 = rvec.block(3, 1);
    rvblock2.toString().should.equal("4");

    rvblock2.assign(Vector.Zero(1)).toString().should.equal("0");
    rvec.toString().should.equal("1 2 3 0 5 6");
  });

  it('#assign() should assign a row-vector', function() {
    rvblock.assign.should.be.a.Function;

    var rvblock2 = rvec.block(3, 2);
    rvblock2.toString().should.equal("4 5");

    rvblock2.assign(RowVector.Zero(2)).toString().should.equal("0 0");
    rvec.toString().should.equal("1 2 3 0 0 6");
  });


  it('#assign() should assign a matrix block', function() {
    rvblock.assign.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvblock.toString().should.equal("3 4");
    rvblock.assign(Matrix.Identity(2).block(0, 0, 1, 2)).toString().should.equal("1 0");
    rvec.toString().should.equal("1 2 1 0 5 6");
  });

  it('#assign() should assign a vector block', function() {
    rvblock.assign.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 2, 1);
    rvblock2.toString().should.equal("3");

    rvblock2.assign(Vector.Identity(1).block(0, 1)).toString().should.equal("1");
    rvec.toString().should.equal("1 2 1 4 5 6");
  });


  it('#add() should return the sum of two row-vector blocks', function() {
    rvblock.add.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var rvblock2 = RowVectorBlock(rvec, 4, 2);
    rvblock2.toString().should.equal("5 6");

    var rvec2 = rvblock.add(rvblock2);
    rvec2.should.instanceOf(RowVector);
    rvec2.toString().should.equal(" 8 10");
  });

  it('#add() should return the sum of a row-vector block and a matrix', function() {
    rvblock.add.should.be.a.Function;

    var mat2 = Matrix(1, 2).set([
      -1, -2
    ]);

    var rvec2 = rvblock.add(mat2);
    rvec2.should.instanceOf(RowVector);
    rvec2.toString().should.equal("2 2");

    rvblock.toString().should.equal("3 4");
    rvblock.assign(rvec2);
    rvec.toString().should.equal("1 2 2 2 5 6");

    (function() {
      rvblock.assign(Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a row-vector block and a vector', function() {
    rvblock.add.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 1, 3);
    rvblock2.toString().should.equal("2 3 4");
    var rvec2 = new RowVector(rvblock2.cols())
      .set([
        2, 6, 10
      ]);

    var rvec3 = rvblock2.add(rvec2);
    rvec3.should.instanceOf(RowVector);
    rvec3.toString().should.equal(" 4  9 14");
  });

  it('#add() should return the sum of a row-vector block and a row-vector', function() {
    rvblock.add.should.be.a.Function;

    var rvec2 = RowVector(rvblock.cols())
      .set([
        8, 9
      ]);

    var rvec3 = rvblock.add(rvec2);
    rvec3.should.instanceOf(RowVector);
    rvec3.toString().should.equal("11 13");
  });

  it('#add() should return the sum of a row-vector block and a matrix block', function() {
    rvblock.add.should.be.a.Function;

    var mat2 = Matrix(1, 2).set([
      -1, -2
    ]);

    var rvec2 = rvblock.add(mat2);
    rvec2.should.instanceOf(RowVector);
    rvec2.toString().should.equal("2 2");

    rvblock.toString().should.equal("3 4");
    rvblock.assign(rvec2.block(0, 2));
    rvec2.toString().should.equal("2 2");

    (function() {
      rvblock.assign(Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a row-vector block and a vector block', function() {
    rvblock.add.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 1, 2);
    rvblock2.toString().should.equal("2 3");
    var rvec2 = new RowVector(rvblock2.cols())
      .set([
        2, 6
      ]);

    var rvec3 = rvblock2.add(rvec2.block(0, 2));
    rvec3.should.instanceOf(RowVector);
    rvec3.toString().should.equal("4 9");
  });

  it('#add() should return a CMatrix with the sum of a row-vector block and a complex matrix', function() {
    rvblock.add.should.be.a.Function;

    var crvec = CMatrix(1, 2).set([
      -1, -2
    ]);
    rvblock.add(crvec).toString().should.equal("(2,0) (2,0)");

    (function() {
      rvblock.add(CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a row-vector block and a complex vector', function() {
    rvblock.add.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 2, 1);
    rvblock2.toString().should.equal("3");

    var cvec = CVector([
        2
      ]);

    var crvec2 = rvblock2.add(cvec);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(5,0)");
  });

  it('#add() should return the sum of a row-vector block and a complex row-vector', function() {
    rvblock.add.should.be.a.Function;

    var crvec = CRowVector(2)
      .set([
        2, 6
      ]);

    var crvec2 = rvblock.add(crvec);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal(" (5,0) (10,0)");
  });

  it('#add() should return a CMatrix with the sum of a row-vector block and a complex matrix block', function() {
    rvblock.add.should.be.a.Function;

    var cmat = CMatrix(1, 2).set([
      -1, -2
    ]);
    rvblock.add(cmat.block(0, 0, 1, 2)).toString().should.equal("(2,0) (2,0)");

    (function() {
      rvblock.add(CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a row-vector block and a complex vector block', function() {
    rvblock.add.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 1, 1);
    rvblock2.toString().should.equal("2");
    var crvec = CVector(1)
      .set([
        10
      ]);

    var cmat = rvblock2.add(crvec.block(0, 1));
    cmat.should.instanceOf(CRowVector);
    cmat.toString().should.equal("(12,0)");
  });

  it('#add() should return the sum of a row-vector block and a complex row-vector block', function() {
    rvblock.add.should.be.a.Function;

    var crvec = CRowVector(2)
      .set([
        2, 6
      ]);

    var crvec2 = rvblock.add(crvec.block(0, 2));
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal(" (5,0) (10,0)");
  });

  it('#adda() should return the sum of two row-vector blocks and saves it back', function() {
    rvblock.adda.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var rvblock2 = RowVectorBlock(rvec, 4, 2);
    rvblock2.toString().should.equal("5 6");

    rvblock.adda(rvblock2);
    rvblock.toString().should.equal(" 8 10");

    rvec.toString().should.equal(" 1  2  8 10  5  6");
  });

  it('#adda() should return the sum of a row-vector block and a matrix then saves it back', function() {
    rvblock.adda.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    rvblock.adda(
      Matrix(1, 2)
        .set([
          -2, -4
        ])
    );
    rvblock.toString().should.equal("1 0");

    (function() {
      rvblock.adda(
        Matrix(3, 1)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cmat = CMatrix(2, 1).set([
      -2,
      -4
    ]);

    (function() {
      rvblock.adda(cmat);
    }).should.throw("Invalid argument");
  });

  it('#adda() should return the sum of a row-vector block and a vector then saves it back', function() {
    rvblock.adda.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 2, 1);
    rvblock2.toString().should.equal("3");

    rvblock2.adda(
      Vector(1)
      .set([
        -2,
      ])
    );
    rvblock2.toString().should.equal("1");

    (function() {
      rvblock2.adda(
        Vector(3)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a row-vector block and a row-vector then saves it back', function() {
    rvblock.adda.should.be.a.Function;

    rvblock.adda(
      RowVector(2)
      .set([
        -2, -4
      ])
    );
    rvblock.toString().should.equal("1 0");

    (function() {
      rvblock.adda(
        RowVector(1)
        .set([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");

    var crvec = CMatrix(1, 4).set([
      -2, -4, -6, -8
    ]);

    (function() {
      rvblock.adda(crvec);
    }).should.throw("Invalid argument");
  });

  it('#adda() should return the sum of a row-vector block and a matrix block then saves it back', function() {
    rvblock.adda.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    rvblock.adda(
      Matrix(1, 2)
        .set([
          -2, -4
        ]).block(0, 0, 1, 2)
    );
    rvblock.toString().should.equal("1 0");
  });

  it('#sub() should return the difference of two row-vector block', function() {
    rvblock.sub.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var rvblock2 = RowVectorBlock(rvec, 3, 2);
    rvblock2.toString().should.equal("4 5");

    var rvec2 = rvblock.sub(rvblock2);
    rvec2.should.instanceOf(RowVector);
    rvec2.toString().should.equal("-1 -1");
  });

  it('#sub() should return the difference of a row-vector block and a matrix', function() {
    rvblock.sub.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var rvec2 = rvblock.sub(new Matrix(1, 2).set([
      1, 2
    ]));
    rvec2.should.instanceOf(RowVector);
    rvec2.toString().should.equal("2 2");

    (function() {
      rvblock.sub(new Matrix(1, 3).set([
        1, 0, 1
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a row-vector block and a vector', function() {
    rvblock.sub.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 1, 1);
    rvblock2.toString().should.equal("2");

    var rvec2 = rvblock2.sub(new Vector([
      1
    ]));
    rvec2.should.instanceOf(RowVector);
    rvec2.toString().should.equal("1");

    (function() {
      rvblock2.sub(new Vector(2).set([
        1,
        0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a row-vector block and a row-vector', function() {
    rvblock.sub.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 1, 1);
    rvblock2.toString().should.equal("2");

    var vec2 = rvblock2.sub(new RowVector([
      9
    ]));
    vec2.should.instanceOf(RowVector);
    vec2.toString().should.equal("-7");

    (function() {
      rvblock2.sub(new RowVector(2).set([
        1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a row-vector block and a matrix block', function() {
    rvblock.sub.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var rvec2 = rvblock.sub(new Matrix(1, 2).set([
      1, 2
    ]).block(0, 0, 1, 2));
    rvec2.should.instanceOf(RowVector);
    rvec2.toString().should.equal("2 2");

    (function() {
      rvblock.sub(new Matrix(1, 3).set([
        1, 0, 1
      ]).block(0, 0, 1, 3));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a row-vector block and a vector block', function() {
    rvblock.sub.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 1, 1);
    rvblock2.toString().should.equal("2");

    var rvec2 = rvblock2.sub(new Vector([
      9
    ]).block(0, 1));
    rvec2.should.instanceOf(RowVector);
    rvec2.toString().should.equal("-7");

    (function() {
      rvblock2.sub(new RowVector(2).set([
        1, 0
      ]).block(0, 2));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a row-vector block and a complex matrix', function() {
    rvblock.sub.should.be.a.Function;

    var crvec = CMatrix(1, 2).set([
      Complex(2, 0), Complex(4, 1)
    ]);

    var crvec2 = rvblock.sub(crvec);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal(" (1,0) (0,-1)");

    (function() {
      rvblock.sub(
        CMatrix(1, 3).set([
          1, 0, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a row-vector block and a complex vector', function() {
    rvblock.sub.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 2, 1);
    rvblock2.toString().should.equal("3");

    var cvec = CVector([
      Complex(2, 0)
    ]);

    var crvec2 = rvblock2.sub(cvec);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(1,0)");

    (function() {
      rvblock2.sub(
        CVector(3).set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a row-vector block and a complex row-vector', function() {
    rvblock.sub.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 3, 2);
    rvblock2.toString().should.equal("4 5");

    var crvec = CRowVector([
      Complex(2, 0), Complex(4, 0)
    ]);

    var crvec2 = rvblock2.sub(crvec);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(2,0) (1,0)");

    (function() {
      rvblock2.sub(
        CRowVector(3).set([
          1, 0, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a row-vector block and a complex matrix block', function() {
    rvblock.sub.should.be.a.Function;

    var crvec = CMatrix(1, 2).set([
      Complex(2, 0), Complex(4, 1)
    ]);

    var crvec2 = rvblock.sub(crvec.block(0, 0, 1, 2));
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal(" (1,0) (0,-1)");
  });

  it('#sub() should return a CMatrix with the difference of a row-vector block and a complex vector block', function() {
    rvblock.sub.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 2, 1);
    rvblock2.toString().should.equal("3");

    var crvec = CVector([
      Complex(2, 0),
      Complex(4, 1)
    ]);

    var crvec2 = rvblock2.sub(crvec.block(0, 1));
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(1,0)");
  });

  it('#sub() should return a CMatrix with the difference of a row-vector block and a complex row-vector block', function() {
    rvblock.sub.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 0, 1);
    rvblock2.toString().should.equal("1");

    var crvec = CRowVector([
      Complex(2, 0)
    ]);

    var crvec2 = rvblock2.sub(crvec.block(0, 1));
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(-1,0)");
  });

  it('#suba() should return the sum of two row-vector blocks and saves it back', function() {
    rvblock.suba.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var rvblock2 = RowVectorBlock(rvec, 3, 2);
    rvblock2.toString().should.equal("4 5");

    rvblock.suba(rvblock2);
    rvblock.toString().should.equal("-1 -1");
    rvblock2.toString().should.equal("-1  5");

    rvec.toString().should.equal(" 1  2 -1 -1  5  6");
  });

  it('#suba() should return the difference of a row-vector block and a matrix then saves it back', function() {
    rvblock.suba.should.be.a.Function;

    var mat2 = Matrix(1, 2)
    .set([
      1, 3
    ]);
    rvblock.suba(mat2);
    rvblock.toString().should.equal("2 1");

    (function() {
      rvblock.suba(
        Matrix(1, 3)
        .set([
          1, 0, 0
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cmat = CMatrix(1, 2).set([
      2, 6,
    ]);

    (function() {
      rvblock.suba(cmat);
    }).should.throw("Invalid argument");
  });

  it('#suba() should return the difference of a row-vector block and a vector then saves it back', function() {
    rvblock.suba.should.be.a.Function;

    var rvblock2 = RowVectorBlock(rvec, 2, 4);
    rvblock2.toString().should.equal("3 4 5 6");

    var rvec2 = new RowVector([
      1, 3, 5, 7
    ]);
    rvblock2.suba(rvec2);
    rvblock2.toString().should.equal(" 2  1  0 -1");

    rvec.toString().should.equal(" 1  2  2  1  0 -1");
  });

  it('#suba() should return the difference of a row-vector block and a row-vector then saves it back', function() {
    rvblock.suba.should.be.a.Function;

    var rvblock2 = RowVectorBlock(rvec, 3, 3);
    rvblock2.toString().should.equal("4 5 6");

    var rvec2 = new RowVector([
      -1, -2, -3
    ]);
    rvblock2.suba(rvec2);
    rvblock2.toString().should.equal("5 7 9");

    rvec.toString().should.equal("1 2 3 5 7 9");
  });

  it('#suba() should return the difference of a row-vector block and a matrix block then saves it back', function() {
    rvblock.suba.should.be.a.Function;

    var mat2 = Matrix(1, 2)
    .set([
      1, 3
    ]);
    rvblock.suba(mat2.block(0, 0, 1, 2));
    rvblock.toString().should.equal("2 1");

    (function() {
      rvblock.suba(
        Matrix(1, 3)
        .set([
          1, 0, 0
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cmat = CMatrix(1,2).set([
      2, 6
    ]);

    (function() {
      rvblock.suba(cmat);
    }).should.throw("Invalid argument");
  });

  it('#suba() should return the difference of a row-vector block and a vector block then saves it back', function() {
    rvblock.suba.should.be.a.Function;

    var rvblock2 = rvec.block(3, 1);
    rvblock2.toString().should.equal("4");

    var vec = Vector(1)
    .set([
      1
    ]);
    rvblock2.suba(vec.block(0, 1));
    rvblock2.toString().should.equal("3");

    (function() {
      rvblock.suba(
        Vector(3)
        .set([
          1,
          0,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cvec = CVector(1).set([
      2
    ]);

    (function() {
      rvblock2.suba(cvec);
    }).should.throw("Invalid argument");
  });

  it('#mul() should return the product of two row-vector blocks', function() {
    rvblock.mul.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 0, 1);
    rvblock2.toString().should.equal("1");
    var rvblock3 = new RowVectorBlock(rvec, 1, 1);
    rvblock3.toString().should.equal("2");

    var mat2 = rvblock2.mul(rvblock3);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("2");

    (function() {
      rvblock.mul(RowVectorBlock(rvec, 0, 2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a row-vector block and a matrix', function() {
    rvblock.mul.should.be.a.Function;

    var vec2 = rvblock.mul(new Matrix(2, 1).set([
      1,
      2
    ]));
    vec2.should.instanceOf(Matrix);
    vec2.toString().should.equal("11");

    (function() {
      rvblock.mul(Matrix(3, 2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a row-vector block and a vector', function() {
    rvblock.mul.should.be.a.Function;

    var vec = new Vector([
      -1,
      -2
    ]);
    var vec2 = rvblock.mul(vec);
    vec2.should.instanceOf(Matrix);
    vec2.toString().should.equal("-11");

    (function() {
      rvblock.mul(vec2);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a row-vector block and a row-vector', function() {
    rvblock.mul.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 3, 1);
    rvblock2.toString().should.equal("4");

    var rvec2 = new RowVector([-1]);
    var mat2 = rvblock2.mul(rvec2);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("-4");
  });

  it('#mul() should return the product of a row-vector block and a matrix block', function() {
    rvblock.mul.should.be.a.Function;

    var mat2 = rvblock.mul(new Matrix(2, 1).set([
      1,
      2
    ]).block(0, 0, 2, 1));
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("11");
  });

  it('#mul() should return a CMatrix with the product of a row-vector block and a complex matrix', function() {
    rvblock.mul.should.be.a.Function;

    var cmat = new CMatrix(2, 2).set([
      Complex(1, 1), Complex(2, 2),
      Complex(3, 3), Complex(4, 4)
    ]);
    var cmat2 = rvblock.mul(cmat);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(15,15) (22,22)");

    (function() {
      rvblock.mul(new CMatrix(3, 3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a row-vector block and a complex vector', function() {
    rvblock.mul.should.be.a.Function;

    var crvec = new CVector(2).set([
      Complex(1, 1),
      Complex(2, 2)
    ]);
    var cmat = rvblock.mul(crvec);
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("(11,11)");

    (function() {
      rvblock.mul(new CVector(3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a row-vector block and a complex row-vector', function() {
    rvblock.mul.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 3, 1);
    rvblock2.toString().should.equal("4");

    var crvec = new CRowVector(1).set([
      Complex(1, 1)
    ]);
    var cmat = rvblock2.mul(crvec);
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("(4,4)");
  });

  it('#mul() should return a CMatrix with the product of a row-vector block and a complex matrix block', function() {
    rvblock.mul.should.be.a.Function;

    var cmat = new CMatrix(2, 2).set([
      Complex(1, 1), Complex(2, 2),
      Complex(3, 3), Complex(4, 4)
    ]);
    var cmat2 = rvblock.mul(cmat.block(0, 0, 2, 2));
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(15,15) (22,22)");

    (function() {
      rvblock.mul(new CMatrix(3, 3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a row-vector block and a complex vector block', function() {
    rvblock.mul.should.be.a.Function;

    var crvec = new CVector(2).set([
      Complex(1, 1),
      Complex(2, 2)
    ]);
    var cmat = rvblock.mul(crvec.block(0, 2));
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("(11,11)");

    (function() {
      rvblock.mul(new CVector(3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a row-vector block and a complex row-vector block', function() {
    rvblock.mul.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 3, 1);
    rvblock2.toString().should.equal("4");

    var crvec = new CRowVector(1).set([
      Complex(1, 1)
    ]);
    var cmat = rvblock2.mul(crvec.block(0, 1));
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("(4,4)");
  });

  it('#mul() should return the product of a row-vector block and a scalar value', function() {
    rvblock.mul.should.be.a.Function;

    var mat2 = rvblock.mul(-1);
    mat2.should.instanceOf(RowVector);
    mat2.toString().should.equal("-3 -4");
  });

  it('#mul() should return the product of a row-vector block and a complex value', function() {
    rvblock.mul.should.be.a.Function;

    var crvec = rvblock.mul(Complex(-1));
    crvec.should.instanceOf(CRowVector);
    crvec.toString().should.equal("(-3,0) (-4,0)");
  });

  it('#mula() should return the product of two row-vector block and saves it back', function() {
    rvblock.mula.should.be.a.Function;

    var rvblock2 = new RowVectorBlock(rvec, 1, 1);
    rvblock2.toString().should.equal("2");
    var rvblock3 = new RowVectorBlock(rvec, 3, 1);
    rvblock3.toString().should.equal("4");

    rvblock2.mula(rvblock3);
    rvblock2.toString().should.equal("8");

    rvec.toString().should.equal("1 8 3 4 5 6");
  });

  it('#mula() should return the product of a row-vector block and a matrix then saves it back', function() {
    rvblock.mula.should.be.a.Function;

    rvblock.mula(new Matrix(2, 2).set([
      -1, -2,
      -3, -4
    ]));
    rvblock.toString().should.equal("-15 -22");

    rvec.toString().should.equal("  1   2 -15 -22   5   6");
  });

  it('#mula() should return the product of a row-vector block and a vector then saves it back', function() {
    rvblock.mula.should.be.a.Function;

    var rvblock2 = RowVectorBlock(rvec, 1, 1);
    rvblock2.toString().should.equal("2");

    rvblock2.mula(new Vector([-1]));
    rvblock2.toString().should.equal("-2");

    rvec.toString().should.equal(" 1 -2  3  4  5  6");
  });

  it('#mula() should return the product of a row-vector block and a row-vector then saves it back', function() {
    rvblock.mula.should.be.a.Function;

    var rvblock2 = RowVectorBlock(rvec, 1, 1);
    rvblock2.toString().should.equal("2");

    rvblock2.mula(new RowVector([-1]));
    rvblock2.toString().should.equal("-2");

    rvec.toString().should.equal(" 1 -2  3  4  5  6");

    (function() {
     rvblock2.mula(new RowVector([
        -1, -2
      ]));
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a row-vector block and a matrix block then saves it back', function() {
    rvblock.mula.should.be.a.Function;

    rvblock.mula(new Matrix(2, 2).set([
      -1, -2,
      -3, -4
    ]).block(0, 0, 2, 2));
    rvblock.toString().should.equal("-15 -22");

    rvec.toString().should.equal("  1   2 -15 -22   5   6");
  });

  it('#mula() should return the product of a row-vector block and a vector block then saves it back', function() {
    rvblock.mula.should.be.a.Function;

    var rvblock2 = RowVectorBlock(rvec, 1, 1);
    rvblock2.toString().should.equal("2");

    rvblock2.mula(new Vector([-1]));
    rvblock2.toString().should.equal("-2");

    rvec.toString().should.equal(" 1 -2  3  4  5  6");

    (function() {
     rvblock2.mula(new RowVector([
        -1, -2
      ]).block(0, 2));
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a row-vector block and a scalar value then saves it back', function() {
    rvblock.mula.should.be.a.Function;

    rvblock.mula(-1);
    rvec.toString().should.equal(" 1  2 -3 -4  5  6");
  });

  it('#div() should return a Matrix which be divied by a scalar value', function() {
    rvblock.div.should.be.a.Function;

    var vec2 = rvblock.div(2);
    vec2.equals(
      new Matrix(1, 2)
      .set([
        1.5, 2
      ])
    ).should.ok;
    rvblock.div(2).toString().should.equal("1.5   2");
  });

  it('#div() should return a Matrix which be divied by a complex value', function() {
    rvblock.div.should.be.a.Function;

    var crvec = rvblock.div(Complex(2, 0));
    crvec.should.instanceOf(CRowVector);
    crvec.toString().should.equal("(1.5,0)   (2,0)");
  });

  it('#diva() should return a Matrix which be divied by a scalar value then saves it back', function() {
    rvblock.diva.should.be.a.Function;

    rvblock.diva(2);
    rvblock.equals(
      new Matrix(1, 2)
      .set([
        1.5, 2
      ])
    ).should.ok;
    rvblock.get(0).should.equal(1.5);

    rvec.toString().should.equal("  1   2 1.5   2   5   6");
  });

  it('#transpose() should return the transpose of a matrix', function() {
    rvblock.transpose.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var vec = rvblock.transpose();
    vec.should.instanceOf(Vector);
    vec.toString().should.equal("3\n4");
  });

  it('#conjugate() should return the conjugate of a matrix', function() {
    rvblock.conjugate.should.be.a.Function;

    var rvblock2 = rvblock.conjugate();
    rvblock2.should.instanceOf(RowVector);
    rvblock.equals(rvblock2).should.be.true;
  });

  it('#adjoint() should return the adjoint of a matrix', function() {
    rvblock.adjoint.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var vec = rvblock.adjoint();
    vec.should.instanceOf(Vector);
    vec.toString().should.equal("3\n4");
  });

  it('#determinant() should return the determinant of a matrix', function() {
    rvblock.determinant.should.be.a.Function;

    (function() {
      rvblock.determinant();
    }).should.throw("The matrix must be square");

    RowVector([9]).block(0, 1).determinant().should.equal(9);
  });

  it('#inverse() should return the inverse of a matrix', function() {
    rvblock.inverse.should.be.a.Function;

    (function() {
      rvblock.inverse();
    }).should.throw("The matrix must be square");

    var mat2 = RowVector([3]).block(0, 1).inverse();
    mat2.should.instanceOf(Matrix);
    mat2.equals(Matrix(1, 1).set([1 / 3])).should.be.true;
  });

  it('#trace() should return the trace of a matrix', function() {
    rvblock.trace.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var trace = rvblock.trace();
    trace.should.equal(3);
  });

  it('#diagonal() should return the diagonal of a matrix', function() {
    rvblock.diagonal.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var dia = rvblock.diagonal();
    dia.should.instanceOf(Vector);
    dia.toString().should.equal("3");
    rvblock.diagonal(1).toString().should.equal("4");

    (function() {
      rvblock.diagonal(rvblock.cols());
    }).should.throw("Invalid index argument");

    (function() {
      rvblock.diagonal(-rvblock.rows());
    }).should.throw("Invalid index argument");
  });

  it('#norm() should return the l2 norm', function() {
    rvblock.norm.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var sum = 0;

    for (var i = 0; i < rvblock.cols(); ++i) {
      sum += Math.pow(rvblock.get(i), 2);
    }

    rvblock.norm().should.equal(Math.pow(sum, 0.5));
  });

  it('#equals() should return true if two row-vector blocks are equal', function() {
    rvblock.equals.should.be.a.Function;

    var rvec2 = new RowVector([
      1, 2, 1, 2
    ]);
    var rvblock2 = RowVectorBlock(rvec2, 0, 2);
    var rvblock3 = RowVectorBlock(rvec2, 2, 2);

    rvblock2.equals(rvblock3).should.ok;
  });

  it('#equals() should return true if a row-vector block and a matrix are equal', function() {
    rvblock.equals.should.be.a.Function;

    var mat2 = new Matrix(1, 2).set([
      3, 4
    ]);

    rvblock.equals(mat2).should.ok;
  });

  it('#equals() should return true if a row-vector block and a vector are equal', function() {
    rvblock.equals.should.be.a.Function;

    var rvblock2 = rvec.block(2, 1);

    var vec = new Vector([
      3
    ]);

    rvblock2.equals(vec).should.ok;
  });

  it('#equals() should return true if a row-vector block and a matrix block are equal', function() {
    rvblock.equals.should.be.a.Function;

    var mat2 = new Matrix(1, 2).set([
      3, 4
    ]);

    rvblock.equals(mat2.block(0, 0, 1, 2)).should.ok;
  });

  it('#equals() should return true if a row-vector block and a vector block are equal', function() {
    rvblock.equals.should.be.a.Function;

    var rvblock2 = rvec.block(2, 1);

    var vec = new Vector([
      3
    ]);

    rvblock2.equals(vec.block(0, 1)).should.ok;
  });

  it('#equals() should return true if a row-vector block and a row-vector block are equal', function() {
    rvblock.equals.should.be.a.Function;

    var rvec2 = new RowVector([
      3, 4
    ]);

    rvblock.equals(rvec2.block(0, 2)).should.ok;
  });

  it('#isApprox() should return true if this is approxivecely equal to other', function() {
    rvblock.isApprox.should.be.a.Function;

    rvblock.diva(9);
    rvblock.toString().should.equal("0.333333 0.444444");

    var rvec2 = new RowVector([
      0.333, 0.444
    ]);

    rvblock.isApprox(rvec2.block(0, 2), 1e-3).should.false;
    rvblock.isApprox(rvec2.block(0, 2), 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a matrix', function() {
    rvblock.isApprox.should.be.a.Function;

    rvblock.diva(9);
    rvblock.toString().should.equal("0.333333 0.444444");

    var rvec2 = new Matrix(1, 2).set([
      0.333, 0.444
    ]);

    rvblock.isApprox(rvec2, 1e-3).should.false;
    rvblock.isApprox(rvec2, 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a vector', function() {
    rvblock.isApprox.should.be.a.Function;

    var rvblock2 = rvec.block(2, 1)
    rvblock2.toString().should.equal("3");

    rvblock2.diva(9);
    rvblock2.toString().should.equal("0.333333");

    var vec = new Vector(1).set([
      0.333,
    ]);

    rvblock2.isApprox(vec, 1e-3).should.false;
    rvblock2.isApprox(vec, 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a row-vector', function() {
    rvblock.isApprox.should.be.a.Function;

    var rvblock2 = RowVectorBlock(rvec, 0, 1);
    rvblock2.toString().should.equal("1");

    rvblock2.diva(9);
    rvblock2.toString().should.equal("0.111111");

    var rvec2 = new RowVector([
      0.111
    ]);

    rvblock2.isApprox(rvec2, 1e-3).should.false;
    rvblock2.isApprox(rvec2, 1e-2).should.true;
  });

  it('#isSquare() should return true if this is square', function() {
    rvblock.isSquare.should.be.a.Function;

    rvblock.isSquare().should.be.false;
    RowVector(1).block(0, 1).isSquare().should.be.true;
  });

  it('#isZero() should return true if this is zero', function() {
    rvblock.isZero.should.be.a.Function;

    rvblock.isZero().should.be.false;

    var rvblock2 = new RowVector(3).set([
      0, 0, 0.0001
    ]).block(0, 3);
    rvblock2.isZero().should.be.false;
    rvblock2.isZero(1e-4).should.be.true;
  });

  it('#isOnes() should return true if this is ones', function() {
    rvblock.isOnes.should.be.a.Function;

    rvblock.isOnes().should.be.false;

    var rvblock2 = new RowVector(3).set([
      1, 1.0001, 0.9997
    ]).block(0, 3);
    rvblock2.isOnes().should.be.false;
    rvblock2.isOnes(1e-4).should.be.false;
    rvblock2.isOnes(1e-3).should.be.true;
  });

  it('#isIdentity() should return true if this is identity', function() {
    rvblock.isIdentity.should.be.a.Function;

    rvblock.isIdentity().should.be.false;

    var rvblock2 = rvec.block(0, 1);
    rvblock2.isIdentity().should.be.true;
  });

  it('#isDiagonal() should return true if this is diagonal', function() {
    rvblock.isDiagonal.should.be.a.Function;

    rvblock.isDiagonal().should.be.false;

    var rvblock2 = rvec.block(0, 1);
    rvblock2.isDiagonal().should.be.true;
  });

  it('#all() should return true if all coefficients are true', function() {
    rvblock.all.should.be.a.Function;

    rvec.all().should.be.true;
    rvblock.toString().should.equal("3 4");
    rvblock.all().should.be.true;
    rvblock.set(0, 0);
    rvblock.toString().should.equal("0 4");
    rvblock.all().should.be.false;
    rvec.toString().should.equal("1 2 0 4 5 6");
    rvec.all().should.be.false;
  });

  it('#count() should return the number of coefficients which evaluate to true', function() {
    rvblock.count.should.be.a.Function;

    rvec.count().should.equal(6);
    rvblock.toString().should.equal("3 4");
    rvblock.count().should.equal(2);
    rvblock.set(0, 0);
    rvblock.toString().should.equal("0 4");
    rvblock.count().should.equal(1);
    rvec.toString().should.equal("1 2 0 4 5 6");
    rvec.count().should.equal(5);
  });

  it('#any() should return true if at least one coefficient is true', function() {
    rvblock.any.should.be.a.Function;

    rvec.any().should.be.true;
    rvblock.toString().should.equal("3 4");
    rvblock.any().should.be.true;
    rvblock.setZero();
    rvblock.toString().should.equal("0 0");
    rvblock.any().should.be.false;
    rvec.toString().should.equal("1 2 0 0 5 6");
    rvec.any().should.be.true;
  });

  it('#allFinite() should return true if it contains only finite numbers, i.e., no NaN and no +/-INF values', function() {
    rvblock.allFinite.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvec.allFinite().should.be.true;
    rvblock.allFinite().should.be.true;
    rvblock.set(0, NaN);
    rvblock.allFinite().should.be.false;
    rvec.allFinite().should.be.false;
  });

  it('#hasNaN() should return true if it contains at least one Not A Number (NaN)', function() {
    rvblock.hasNaN.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvec.hasNaN().should.be.false;
    rvblock.hasNaN().should.be.false;
    rvblock.set(0, NaN);
    rvblock.hasNaN().should.be.true;
    rvec.hasNaN().should.be.true;
  });

  it('#Zero() should return a zero matrix', function() {
    RowVectorBlock.Zero.should.be.a.Function;

    RowVectorBlock.Zero(3).toString().should.equal("0 0 0");
    RowVectorBlock.Zero(3).should.instanceOf(RowVector);

    RowVectorBlock.Zero(3).equals(
      new Matrix(1, 3).set([
        0, 0, 0
      ])
    ).should.true;
  });

  it('#Ones() should return a ones matrix', function() {
    RowVectorBlock.Ones.should.be.a.Function;

    RowVectorBlock.Ones(3).toString().should.equal("1 1 1");
    RowVectorBlock.Ones(3).should.instanceOf(RowVector);

    RowVectorBlock.Ones(3).equals(
      new Matrix(1, 3).set([
        1, 1, 1
      ])
    ).should.true;
  });

  it('#Constant() should return a RowVector with constant values', function() {
    RowVectorBlock.Constant.should.be.a.Function;

    var rvec2 = RowVectorBlock.Constant(4, 0.6);
    rvec2.should.instanceOf(RowVector);
    rvec2.toString().should.equal("0.6 0.6 0.6 0.6");

    var crvec = RowVectorBlock.Constant(4, Complex(0.6, 0));
    crvec.should.instanceOf(CRowVector);
    crvec.toString().should.equal("(0.6,0) (0.6,0) (0.6,0) (0.6,0)");
  });

  it('#Identity() should return a identity vector', function() {
    RowVectorBlock.Identity.should.be.a.Function;

    RowVectorBlock.Identity(0).toString().should.equal("");

    var rvec2 = RowVectorBlock.Identity(3);
    rvec2.equals(new Matrix(1, 3).set([
      1, 0, 0
    ])).should.true;
  });

  it('#Random() should return a matrix with random values', function() {
    RowVectorBlock.Random.should.be.a.Function;

    var rvec2 = RowVectorBlock.Random(3);
    rvec2.should.instanceOf(RowVector);
    rvec2.rows().should.equal(1);
    rvec2.cols().should.equal(3);
  });

  it('#LinSpaced() should return a linearly space row-vector', function() {
    RowVectorBlock.LinSpaced.should.be.a.Function;

    var rvec2 = RowVectorBlock.LinSpaced(5, 0, 1);
    rvec2.should.instanceOf(RowVector);
    rvec2.toString().should.equal("   0 0.25  0.5 0.75    1");
 
    var rvec3 = RowVectorBlock.LinSpaced(5, 1, 0);
    rvec3.should.instanceOf(RowVector);
    rvec3.toString().should.equal("   1 0.75  0.5 0.25    0");

    var rvec4 = RowVectorBlock.LinSpaced(5, 1, 1);
    rvec4.should.instanceOf(RowVector);
    rvec4.toString().should.equal("1 1 1 1 1");

    (function() {
      RowVectorBlock.LinSpaced(-1, 0, 1);
    }).should.throw("Invalid argument")
  });

  it("#block() should return a row-vector block", function() {
    rvblock.block.should.be.a.Function;

    var rvblock2 = rvblock.block(1, 1);
    rvblock2.should.instanceOf(RowVectorBlock);
    rvblock2.toString().should.equal("4");

    rvblock2.assign(RowVector([
      -1
    ]));

    rvec.toString().should.equal(" 1  2  3 -1  5  6");
  });

  it("#row() should return a row matrix block of the row-vector block", function() {
    rvblock.row.should.be.a.Function;

    var row = rvblock.row(0);
    row.should.instanceOf(RowVectorBlock);
    row.toString().should.equal("3 4");

    (function() {
      rvblock.row(1);
    }).should.throw("The row or column number is out of range");
  });

  it("#col() should return a column matrix block of the row-vector block", function() {
    rvblock.col.should.be.a.Function;

    var col = rvec.col(0);
    col.should.instanceOf(RowVectorBlock);
    col.toString().should.equal("1");

    (function() {
      rvblock.col(2);
    }).should.throw("The row or column number is out of range");
  });

  it("#head() should return a dynamic-size expression of the first coefficients of it", function() {
    rvblock.head.should.be.a.Function;

    var head = rvblock.head(1);
    head.should.instanceOf(RowVectorBlock);
    head.toString().should.equal("3");

    (function() {
      rvblock.head(3);
    }).should.throw("Invalid argument");
  });

  it("#tail() should return a dynamic-size expression of the last coefficients of it", function() {
    rvblock.tail.should.be.a.Function;

    var tail = rvblock.tail(1);
    tail.should.instanceOf(RowVectorBlock);
    tail.toString().should.equal("4");

    (function() {
      rvblock.tail(3);
    }).should.throw("Invalid argument");
  });

  it("#topRows() should return a block consisting of the top rows of it", function() {
    rvblock.topRows.should.be.a.Function;

    var rvblock2 = rvblock.topRows(1);
    rvblock2.should.instanceOf(RowVectorBlock);
    rvblock2.toString().should.equal("3 4");

    (function() {
      rvblock.topRows(2);
    }).should.throw("Invalid argument");

    (function() {
      rvblock.topRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRows() should return a block consisting of the bottom rows of it", function() {
    rvblock.bottomRows.should.be.a.Function;

    var rvblock2 = rvblock.bottomRows(1);
    rvblock2.should.instanceOf(RowVectorBlock);
    rvblock2.toString().should.equal("3 4");

    (function() {
      rvblock.bottomRows(2);
    }).should.throw("Invalid argument");

    (function() {
      rvblock.bottomRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleRows() should return a block consisting of a range of rows of it", function() {
    rvblock.middleRows.should.be.a.Function;

    var rvblock2 = rvblock.middleRows(0, 1);
    rvblock2.should.instanceOf(RowVectorBlock);
    rvblock2.toString().should.equal("3 4");

    (function() {
      rvblock.middleRows(1, 1);
    }).should.throw("Invalid argument");

    (function() {
      rvblock.middleRows(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#leftCols() should return a block consisting of the left columns of it", function() {
    rvblock.leftCols.should.be.a.Function;

    var rvblock2 = rvblock.leftCols(1);
    rvblock2.should.instanceOf(RowVectorBlock);
    rvblock2.toString().should.equal("3");

    (function() {
      rvblock.leftCols(3);
    }).should.throw("Invalid argument");

    (function() {
      rvblock.leftCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#rightCols() should return a block consisting of the right columns of it", function() {
    rvblock.rightCols.should.be.a.Function;

    var rvblock2 = rvblock.rightCols(1);
    rvblock2.should.instanceOf(RowVectorBlock);
    rvblock2.toString().should.equal("4");

    (function() {
      rvblock.rightCols(3);
    }).should.throw("Invalid argument");

    (function() {
      rvblock.rightCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleCols() should return a block consisting of a range of columns of it", function() {
    rvblock.middleCols.should.be.a.Function;

    var rvblock2 = rvblock.middleCols(1, 1);
    rvblock2.should.instanceOf(RowVectorBlock);
    rvblock2.toString().should.equal("4");

    (function() {
      rvblock.middleCols(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      rvblock.middleCols(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topLeftCorner() should return a block consisting of a top-left corner of it", function() {
    rvblock.topLeftCorner.should.be.a.Function;

    var rvblock2 = rvblock.topLeftCorner(1, 1);
    rvblock2.should.instanceOf(RowVectorBlock);
    rvblock2.toString().should.equal("3");

    (function() {
      rvblock.topLeftCorner(2, 1);
    }).should.throw("Invalid argument");

    (function() {
      rvblock.topLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topRightCorner() should return a block consisting of a top-right corner of it", function() {
    rvblock.topRightCorner.should.be.a.Function;

    var rvblock2 = rvblock.topRightCorner(1, 1);
    rvblock2.should.instanceOf(RowVectorBlock);
    rvblock2.toString().should.equal("4");

    (function() {
      rvblock.topRightCorner(2, 1);
    }).should.throw("Invalid argument");

    (function() {
      rvblock.topRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomLeftCorner() should return a block consisting of a bottom-left corner of it", function() {
    rvblock.bottomLeftCorner.should.be.a.Function;

    var rvblock2 = rvblock.bottomLeftCorner(1, 1);
    rvblock2.should.instanceOf(RowVectorBlock);
    rvblock2.toString().should.equal("3");

    (function() {
      rvblock.bottomLeftCorner(1, 3);
    }).should.throw("Invalid argument");

    (function() {
      rvblock.bottomLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRightCorner() should return a block consisting of a bottom-right corner of it", function() {
    rvblock.bottomRightCorner.should.be.a.Function;

    var rvblock2 = rvblock.bottomRightCorner(1, 1);
    rvblock2.should.instanceOf(RowVectorBlock);
    rvblock2.toString().should.equal("4");

    (function() {
      rvblock.bottomRightCorner(1, 3);
    }).should.throw("Invalid argument");

    (function() {
      rvblock.bottomRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#replicate() should return a matrix which is replicated", function() {
    rvblock.replicate.should.be.a.Function;

    rvblock.replicate(0, 0).toString().should.equal("");
    rvblock.replicate(0, 1).toString().should.equal("");
    rvblock.replicate(1, 0).toString().should.equal("");
    rvblock.replicate(1, 1).toString().should.equal("3 4");
    rvblock.replicate(2, 1).toString().should.equal("3 4\n3 4");
    rvblock.replicate(1, 2).toString().should.equal("3 4 3 4");
    rvblock.replicate(2, 2).toString().should.equal("3 4 3 4\n3 4 3 4");

    (function() {
      rvblock.replicate(-1, 0);
    }).should.throw("Invalid argument");
  });

  it("#dot() should return the dot product of two row-vector blocks", function() {
    rvblock.dot.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    rvblock.dot(new RowVector(rvblock.cols()).block(0, rvblock.cols())).should.equal(0);
    rvblock.dot(rvblock).should.equal(25);

    (function() {
      rvblock.dot(new RowVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector block and a vector", function() {
    rvblock.dot.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    rvblock.dot(new Vector(rvblock.cols())).should.equal(0);
    rvblock.dot(new Vector([5,
                            6])).should.equal(39);

    (function() {
      rvblock.dot(new Vector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector block and a row-vector", function() {
    rvblock.dot.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    rvblock.dot(new RowVector(rvblock.cols())).should.equal(0);
    rvblock.dot(new RowVector([5, 6])).should.equal(39);

    (function() {
      rvblock.dot(new RowVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector block and a complex vector", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new CVector(rvec.cols())).equals(Complex(0));
    rvec.dot(new CVector([ 7,
                           8,
                           9,
                          10,
                          11,
                          12])).equals(Complex(217, 0)).should.be.true;

    (function() {
      rvec.dot(new CVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector block and a complex row-vector", function() {
    rvblock.dot.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    rvblock.dot(new CRowVector(rvblock.cols())).equals(Complex(0));
    rvblock.dot(new CRowVector([5, 6])).equals(Complex(39, 0)).should.be.true;

    (function() {
      rvblock.dot(new CRowVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector block and a vector block", function() {
    rvblock.dot.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    rvblock.dot(new Vector(rvblock.cols()).block(0, rvblock.cols())).should.equal(0);
    rvblock.dot(rvblock.block(0, rvblock.cols())).should.equal(25);

    (function() {
      rvblock.dot(new Vector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector block and a complex vector block", function() {
    rvblock.dot.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    rvblock.dot(new CVector(rvblock.cols()).block(0, rvblock.cols())).equals(Complex(0)).should.be.true;
    rvblock.dot(new CVector([5,
                             6]).block(0, 2)).equals(Complex(39)).should.be.true;

    (function() {
      rvblock.dot(new CVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector block and a complex row-vector block", function() {
    rvblock.dot.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    rvblock.dot(new CRowVector(rvblock.cols()).block(0, rvblock.cols())).equals(Complex(0)).should.be.true;
    rvblock.dot(new CRowVector([5, 6]).block(0, 2)).equals(Complex(39)).should.be.true;

    (function() {
      rvblock.dot(new RowVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#asDiagonal() should return a diagonal", function() {
    rvblock.asDiagonal.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var dia = rvblock.asDiagonal();
    dia.should.instanceOf(Matrix);

    dia.toString().should.equal("3 0\n0 4");
  });

  it("#normalize() should normalizes the row-vector block", function() {
    rvblock.normalize.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvblock.toString().should.equal("3 4");
    rvblock.normalize();
    rvblock.toString().should.equal("0.6 0.8");

    rvec.toString().should.equal("  1   2 0.6 0.8   5   6");
  });

  it("#redux() should return a full redux operation on the whole matrix", function() {
    rvblock.redux.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var result = rvblock.redux(function(a, b){
      return a + b;
    })
    result.should.equal(7);
  });

  it("#sum() should return a full sum operation on the whole matrix", function() {
    rvblock.sum.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var result = rvblock.sum();
    result.should.equal(7);
  });

  it("#prod() should return a full product operation on the whole matrix", function() {
    rvblock.prod.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var result = rvblock.prod();
    result.should.equal(12);
  });

  it("#mean() should return the mean of all coefficients", function() {
    rvblock.mean.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var result = rvblock.mean();
    result.should.equal(3.5);
  });

  it("#visit() should apply the visitor operation on the whole row-vector block", function() {
    rvblock.visit.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var sum = 0;
    rvblock.visit(function(scalar, row, col) {
      scalar.should.be.a.Number;
      row.should.be.a.Number;
      col.should.be.a.Number;
      row.should.equal(0);
      rvblock.get(col).should.equal(scalar);
      sum += scalar;
    });

    rvblock.sum().should.equal(sum);
  });

  it("#maxCoeff() should return the maximum of all coefficients", function() {
    rvblock.maxCoeff.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var max = rvblock.maxCoeff();
    max.should.equal(4);

    var result = {}, max = 0;
    max = rvblock.maxCoeff(result);
    max.should.equal(4);
    result.should.have.properties('maxCoeff', 'rowId', 'colId');
    JSON.stringify(result).should.equal("{\"maxCoeff\":4,\"rowId\":0,\"colId\":1}");

    var ok = false, max = 0;
    max = rvblock.maxCoeff(function(rowId, colId) {
	rowId.should.be.a.Number;
	colId.should.be.a.Number;
	rowId.should.equal(result.rowId);
	colId.should.equal(result.colId);
	ok = true;
    });
    max.should.equal(4);
    ok.should.be.true;
  });

  it("#minCoeff() should return the minimum of all coefficients", function() {
    rvblock.minCoeff.should.be.a.Function;

    rvblock.toString().should.equal("3 4");

    var min = rvblock.minCoeff();
    min.should.equal(3);

    var result = {}, min = 0;
    min = rvblock.minCoeff(result);
    min.should.equal(3);
    result.should.have.properties('minCoeff', 'rowId', 'colId');
    JSON.stringify(result).should.equal("{\"minCoeff\":3,\"rowId\":0,\"colId\":0}");

    var ok = false, min = 0;
    min = rvblock.minCoeff(function(rowId, colId) {
	rowId.should.be.a.Number;
	colId.should.be.a.Number;
	rowId.should.equal(result.rowId);
	colId.should.equal(result.colId);
	ok = true;
    });
    min.should.equal(3);
    ok.should.be.true;
  });
});
