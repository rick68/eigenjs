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
    }).should.throw('Row or column numbers are out of range');

    (function() {
      new RowVectorBlock(rvec, 0, 1);
    }).should.not.throw();

    (function() {
      new RowVectorBlock(rvec, 4, 2);
    }).should.not.throw();

    (function() {
      new RowVectorBlock(rvec, 6, 3);
    }).should.throw('Row or column numbers are out of range');
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
    }).should.throw('Row or column numbers are out of range');

    (function() {
      rvblock.set(-1, 500);
    }).should.throw('Row or column numbers are out of range');
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
    }).should.throw('Row or column numbers are out of range');
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

  it('#isSquare() should return true if this is square', function() {
    rvblock.isSquare.should.be.a.Function;

    rvblock.isSquare().should.be.false;
    RowVector(1).block(0, 1).isSquare().should.be.true;
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

  it('#Constant() should return a RowVector with constant values', function() {
    RowVectorBlock.Constant.should.be.a.Function;

    var rvec2 = RowVectorBlock.Constant(4, 0.6);
    rvec2.should.instanceOf(RowVector);
    rvec2.toString().should.equal("0.6 0.6 0.6 0.6");

    var crvec = RowVectorBlock.Constant(4, Complex(0.6, 0));
    crvec.should.instanceOf(CRowVector);
    crvec.toString().should.equal("(0.6,0) (0.6,0) (0.6,0) (0.6,0)");
  });
});
