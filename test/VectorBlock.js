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
    should = require('should');

describe('VectorBlock', function() {
  var vec, vblock;

  it('#VectorBlock() should be a function', function() {
    VectorBlock.should.be.a.Function;
  });

  beforeEach(function() {
    vec = new Vector(6).set([
      1,
      2,
      3,
      4,
      5,
      6
    ]);

    vblock = new VectorBlock(vec, 2, 2);
  });

  it('should throw error when tried creating a vector block with invalid arguments', function() {
    (function() {
      new VectorBlock(vec, -1, -2);
    }).should.throw('Row or column numbers are out of range');

    (function() {
      new VectorBlock(vec, 0, 1);
    }).should.not.throw();

    (function() {
      new VectorBlock(vec, 4, 2);
    }).should.not.throw();

    (function() {
      new VectorBlock(vec, 6, 3);
    }).should.throw('Row or column numbers are out of range');
  });

  it('should be invoked with arguments and return an object', function() {
    var vblock2 = new VectorBlock(vec, 2, 2);
    vblock2.should.be.an.Object;
    vblock2.should.instanceOf(VectorBlock);
  });

  it('#VectorBlock(vec, 2, 2) should return the vector block of size 2x1', function() {
    var vblock2 = new VectorBlock(vec, 2, 2);
    vblock2.rows().should.equal(2);
    vblock2.cols().should.equal(1);
  });

  it('#set() should throw message when row or column numbers are out of range', function() {
    vblock.set.should.be.a.Function;

    (function() {
      vblock.set(7, 68);
    }).should.throw('Row or column numbers are out of range');

    (function() {
      vblock.set(-1, 500);
    }).should.throw('Row or column numbers are out of range');
  });

  it('#set() with array argument should work ok', function() {
    vblock.set.should.be.a.Function;

    vblock.set([
      -1,
      -2
    ]).toString().should.eql("-1\n-2");

    vec.toString().should.equal(" 1\n 2\n-1\n-2\n 5\n 6");

    (function() {
      vblock.set([
        1
      ]);
    }).should.throw('Too few coefficients');

    (function() {
      vblock.set([
         1,
         2,
         3,
         4
      ]);
    }).should.throw('Too many coefficients');
  });

  it('#get() should return the element value of VectorBlock', function() {
    vblock.get.should.be.a.Function;

    vblock.get(0).should.equal(3);
    vblock.get(1).should.equal(4);

    vblock.toString().should.equal("3\n4");

    (function(){
      vblock.get(2);
    }).should.throw('Row or column numbers are out of range');
  });

  it('#toString() should return all element values of VectorBlock', function() {
    vblock.toString.should.be.a.Function;

    vblock.toString().should.equal("3\n4");
  });

  it('#assign() should assign a vector block', function() {
    vblock.assign.should.be.a.Function;

    vec.toString().should.equal("1\n2\n3\n4\n5\n6");
    vblock.toString().should.equal("3\n4");

    var vblock2 = vec.block(0, 2);
    vblock2.toString().should.equal("1\n2");

    vblock.assign(vblock2).toString().should.equal("1\n2");
    vec.toString().should.equal("1\n2\n1\n2\n5\n6");
  });

  it('#assign() should assign a matrix', function() {
    vblock.assign.should.be.a.Function;

    vec.toString().should.equal("1\n2\n3\n4\n5\n6");
    vblock.toString().should.equal("3\n4");
    vblock.assign(Matrix.Zero(2, 1)).toString().should.equal("0\n0");
    vec.toString().should.equal("1\n2\n0\n0\n5\n6");
  });

  it('#assign() should assign a vector', function() {
    vblock.assign.should.be.a.Function;

    vec.toString().should.equal("1\n2\n3\n4\n5\n6");

    var vblock2 = vec.block(3, 2);
    vblock2.toString().should.equal("4\n5");

    vblock2.assign(Vector.Zero(2)).toString().should.equal("0\n0");
    vec.toString().should.equal("1\n2\n3\n0\n0\n6");
  });

  it('#assign() should assign a row-vector', function() {
    vblock.assign.should.be.a.Function;

    vec.toString().should.equal("1\n2\n3\n4\n5\n6");

    var vblock2 = vec.block(2, 1);
    vblock2.toString().should.equal("3");

    vblock2.assign(RowVector.Zero(1)).toString().should.equal("0");
    vec.toString().should.equal("1\n2\n0\n4\n5\n6");
  });

  it('#assign() should assign a matrix block', function() {
    vblock.assign.should.be.a.Function;

    vec.toString().should.equal("1\n2\n3\n4\n5\n6");
    vblock.toString().should.equal("3\n4");
    vblock.assign(Matrix.Identity(2).block(0, 0, 2, 1)).toString().should.equal("1\n0");
    vec.toString().should.equal("1\n2\n1\n0\n5\n6");
  });

  it('#assign() should assign a vector block', function() {
    vblock.assign.should.be.a.Function;

    vec.toString().should.equal("1\n2\n3\n4\n5\n6");
    vblock.toString().should.equal("3\n4");
    vblock.assign(Vector.Identity(2).block(0, 2)).toString().should.equal("1\n0");
    vec.toString().should.equal("1\n2\n1\n0\n5\n6");
  });

  it('#assign() should assign a row-vector block', function() {
    vblock.assign.should.be.a.Function;

    vec.toString().should.equal("1\n2\n3\n4\n5\n6");
    vblock.toString().should.equal("3\n4");

    var vblock2 = vec.block(3, 1);
    vblock2.assign(RowVector.Identity(1).block(0, 1)).toString().should.equal("1");
    vec.toString().should.equal("1\n2\n3\n1\n5\n6");
  });

  it('#add() should return the sum of two vector blocks', function() {
    vblock.add.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var vblock2 = VectorBlock(vec, 2, 2);
    vblock2.toString().should.equal("3\n4");

    var vec2 = vblock.add(vblock2);
    vec2.should.instanceOf(Vector);
    vec2.toString().should.equal("6\n8");
  });

  it('#add() should return the sum of a vector block and a matrix', function() {
    vblock.add.should.be.a.Function;

    var mat2 = Matrix(2, 1).set([
       -1,
       -2
    ]);

    var vec2 = vblock.add(mat2);
    vec2.should.instanceOf(Vector);
    vec2.toString().should.equal("2\n2");

    vblock.toString().should.equal("3\n4");
    vblock.assign(vec2);
    vec.toString().should.equal("1\n2\n2\n2\n5\n6");

    (function() {
      vblock.assign(Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a vector block and a vector', function() {
    vblock.add.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 1, 3);
    vblock2.toString().should.equal("2\n3\n4");
    var vec2 = new Vector(vblock2.rows())
      .set([
         2,
         6,
        10
      ]);

    var vec3 = vblock2.add(vec2);
    vec3.should.instanceOf(Vector);
    vec3.toString().should.equal(" 4\n 9\n14");
  });

  it('#add() should return the sum of a vector block and a row-vector', function() {
    vblock.add.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 2, 1);
    vblock2.toString().should.equal("3");
    var rvec = RowVector(vblock2.cols())
      .set([
        9
      ]);

    var vec2 = vblock2.add(rvec);
    vec2.should.instanceOf(Vector);
    vec2.toString().should.equal("12");
  });

  it('#add() should return the sum of a vector block and a matrix block', function() {
    vblock.add.should.be.a.Function;

    var mat2 = Matrix(2, 1).set([
       -1,
       -2
    ]);

    var vec2 = vblock.add(mat2);
    vec2.should.instanceOf(Vector);
    vec2.toString().should.equal("2\n2");

    vblock.toString().should.equal("3\n4");
    vblock.assign(vec2.block(0, 2));
    vec.toString().should.equal("1\n2\n2\n2\n5\n6");

    (function() {
      vblock.assign(Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a vector block and a vector block', function() {
    vblock.add.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 1, 3);
    vblock2.toString().should.equal("2\n3\n4");
    var vec2 = new Vector(vblock2.rows())
      .set([
         2,
         6,
        10
      ]);

    var vec3 = vblock2.add(vec2.block(0, 3));
    vec3.should.instanceOf(Vector);
    vec3.toString().should.equal(" 4\n 9\n14");
  });

  it('#add() should return the sum of a vector block and a row-vector block', function() {
    vblock.add.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 2, 1);
    vblock2.toString().should.equal("3");
    var rvec = RowVector(vblock2.cols())
      .set([
        9
      ]);

    var vec2 = vblock2.add(rvec.block(0, 1));
    vec2.should.instanceOf(Vector);
    vec2.toString().should.equal("12");
  });

  it('#add() should return a CMatrix with the sum of a vector block and a complex matrix', function() {
    vblock.add.should.be.a.Function;

    var cvec = CMatrix(2, 1).set([
      -1,
      -2
    ]);
    vblock.add(cvec).toString().should.equal("(2,0)\n(2,0)");

    (function() {
      vblock.add(CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a vector block and a complex vector', function() {
    vblock.add.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 2, 3);
    vblock2.toString().should.equal("3\n4\n5");
    var cvec = CVector(vblock2.rows())
      .set([
         2,
         6,
        10
      ]);

    var cvec2 = vblock2.add(cvec);
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal(" (5,0)\n(10,0)\n(15,0)");
  });

  it('#add() should return the sum of a vector block and a complex row-vector', function() {
    vblock.add.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 1, 1);
    vblock2.toString().should.equal("2");
    var crvec = CRowVector(1)
      .set([
        10
      ]);

    var crvec2 = vblock2.add(crvec);
    crvec2.should.instanceOf(CVector);
    crvec2.toString().should.equal("(12,0)");
  });

  it('#add() should return a CMatrix with the sum of a vector block and a complex matrix block', function() {
    vblock.add.should.be.a.Function;

    var cvec = CMatrix(2, 1).set([
      -1,
      -2
    ]);
    vblock.add(cvec.block(0, 0, 2, 1)).toString().should.equal("(2,0)\n(2,0)");

    (function() {
      vblock.add(CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a vector block and a complex vector block', function() {
    vblock.add.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 2, 3);
    vblock2.toString().should.equal("3\n4\n5");
    var cvec = CVector(vblock2.rows())
      .set([
         2,
         6,
        10
      ]);

    var cvec2 = vblock2.add(cvec.block(0, 3));
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal(" (5,0)\n(10,0)\n(15,0)");
  });

  it('#add() should return the sum of a vector block and a complex row-vector block', function() {
    vblock.add.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 1, 1);
    vblock2.toString().should.equal("2");
    var crvec = CRowVector(1)
      .set([
        10
      ]);

    var crvec2 = vblock2.add(crvec.block(0, 1));
    crvec2.should.instanceOf(CVector);
    crvec2.toString().should.equal("(12,0)");
  });

  it('#adda() should return the sum of two vector blocks and saves it back', function() {
    vblock.adda.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var vblock2 = VectorBlock(vec, 0, 2);
    vblock2.toString().should.equal("1\n2");

    vblock.adda(vblock2);
    vblock.toString().should.equal("4\n6");

    vec.toString().should.equal("1\n2\n4\n6\n5\n6");
  });

  it('#adda() should return the sum of a vector block and a matrix then saves it back', function() {
    vblock.adda.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    vblock.adda(
      Matrix(2, 1)
        .set([
          -2,
          -4
        ])
    );
    vblock.toString().should.equal("1\n0");

    (function() {
      vblock.adda(
        Matrix(3, 1)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cvec = CMatrix(2, 1).set([
      -2,
      -4
    ]);

    (function() {
      vblock.adda(cvec);
    }).should.throw("Invalid argument");
  });

  it('#adda() should return the sum of a vector block and a vector then saves it back', function() {
    vblock.adda.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 2, 4);
    vblock2.toString().should.equal("3\n4\n5\n6");

    vblock2.adda(
      Vector(vblock2.rows())
      .set([
        -2,
        -4,
        -6,
        -8
      ])
    );
    vblock2.toString().should.equal(" 1\n 0\n-1\n-2");

    (function() {
      vblock2.adda(
        Vector(3)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cvec = CMatrix(4, 1).set([
      -2,
      -4,
      -6,
      -8
    ]);

    (function() {
      vblock2.adda(cvec);
    }).should.throw("Invalid argument");
  });

  it('#adda() should return the sum of a vector block and a row-vector then saves it back', function() {
    vblock.adda.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 3, 1);
    vblock2.toString().should.equal("4");

    vblock2.adda(
      RowVector(vblock2.cols())
      .set([
        -2
      ])
    );
    vblock2.toString().should.equal("2");

    (function() {
      vblock2.adda(
        RowVector(2)
        .set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cvec = CMatrix(1, 4).set([
      -2, -4, -6, -8
    ]);

    (function() {
      vblock2.adda(cvec);
    }).should.throw("Invalid argument");
  });

  it('#adda() should return the sum of a vector block and a matrix block then saves it back', function() {
    vblock.adda.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    vblock.adda(
      Matrix(2, 1)
        .set([
          -2,
          -4
        ]).block(0, 0, 2, 1)
    );
    vblock.toString().should.equal("1\n0");
  });

  it('#adda() should return the sum of a vector block and a row-vector block then saves it back', function() {
    vblock.adda.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 3, 1);
    vblock2.toString().should.equal("4");

    vblock2.adda(
      RowVector(vblock2.cols())
      .set([
        -2
      ]).block(0, 1)
    );
    vblock2.toString().should.equal("2");
  });

  it('#sub() should return the difference of two vector block', function() {
    vblock.sub.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var vblock2 = VectorBlock(vec, 3, 2);
    vblock2.toString().should.equal("4\n5");

    var vec2 = vblock.sub(vblock2);
    vec2.should.instanceOf(Vector);
    vec2.toString().should.equal("-1\n-1");
  });

  it('#sub() should return the difference of a vector block and a matrix', function() {
    vblock.sub.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var vec2 = vblock.sub(new Matrix(2, 1).set([
      1,
      2
    ]));
    vec2.should.instanceOf(Vector);
    vec2.toString().should.equal("2\n2");

    (function() {
      vblock.sub(new Matrix(3, 1).set([
        1,
        0,
        1
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a vector block and a vector', function() {
    vblock.sub.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 1, 3);
    vblock2.toString().should.equal("2\n3\n4");

    var vec2 = vblock2.sub(new Vector([
      1,
      2,
      3
    ]));
    vec2.should.instanceOf(Vector);
    vec2.toString().should.equal("1\n1\n1");

    (function() {
      vblock2.sub(new Vector(2).set([
        1,
        0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a vector block and a row-vector', function() {
    vblock.sub.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 1, 1);
    vblock2.toString().should.equal("2");

    var vec2 = vblock2.sub(new RowVector([
      9
    ]));
    vec2.should.instanceOf(Vector);
    vec2.toString().should.equal("-7");

    (function() {
      vblock2.sub(new RowVector(2).set([
        1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a vector block and a matrix block', function() {
    vblock.sub.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var vec2 = vblock.sub(new Matrix(2, 1).set([
      1,
      2
    ]).block(0, 0, 2, 1));
    vec2.should.instanceOf(Vector);
    vec2.toString().should.equal("2\n2");

    (function() {
      vblock.sub(new Matrix(3, 1).set([
        1,
        0,
        1
      ]).block(0, 0, 3, 1));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a vector block and a row-vector block', function() {
    vblock.sub.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 1, 1);
    vblock2.toString().should.equal("2");

    var vec2 = vblock2.sub(new RowVector([
      9
    ]).block(0, 1));
    vec2.should.instanceOf(Vector);
    vec2.toString().should.equal("-7");

    (function() {
      vblock2.sub(new RowVector(2).set([
        1, 0
      ]).block(0, 2));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a vector block and a complex matrix', function() {
    vblock.sub.should.be.a.Function;

    var cvec = CMatrix(2, 1).set([
      Complex(2, 0),
      Complex(4, 1)
    ]);

    var cvec2 = vblock.sub(cvec);
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal(" (1,0)\n(0,-1)");

    (function() {
      vblock.sub(
        CMatrix(3, 1).set([
          1,
          0,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a vector block and a complex vector', function() {
    vblock.sub.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 2, 2);
    vblock2.toString().should.equal("3\n4");

    var cvec = CVector([
      Complex(2, 0),
      Complex(4, 1)
    ]);

    var cvec2 = vblock2.sub(cvec);
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal(" (1,0)\n(0,-1)");

    (function() {
      vblock2.sub(
        CVector(3).set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a vector block and a complex row-vector', function() {
    vblock.sub.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 1, 1);
    vblock2.toString().should.equal("2");

    var crvec = CRowVector([
      Complex(2, 0)
    ]);

    var cvec2 = vblock2.sub(crvec);
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(0,0)");

    (function() {
      vblock2.sub(
        CRowVector(2).set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a vector block and a complex matrix block', function() {
    vblock.sub.should.be.a.Function;

    var cvec = CMatrix(2, 1).set([
      Complex(2, 0),
      Complex(4, 1)
    ]);

    var cvec2 = vblock.sub(cvec.block(0, 0, 2, 1));
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal(" (1,0)\n(0,-1)");
  });

  it('#sub() should return a CMatrix with the difference of a vector block and a complex vector block', function() {
    vblock.sub.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 2, 2);
    vblock2.toString().should.equal("3\n4");

    var cvec = CVector([
      Complex(2, 0),
      Complex(4, 1)
    ]);

    var cvec2 = vblock2.sub(cvec.block(0, 2));
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal(" (1,0)\n(0,-1)");
  });

  it('#sub() should return a CMatrix with the difference of a vector block and a complex row-vector block', function() {
    vblock.sub.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 0, 1);
    vblock2.toString().should.equal("1");

    var crvec = CRowVector([
      Complex(2, 0)
    ]);

    var cvec2 = vblock2.sub(crvec.block(0, 1));
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(-1,0)");
  });

  it('#suba() should return the sum of two vector blocks and saves it back', function() {
    vblock.suba.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var vblock2 = VectorBlock(vec, 3, 2);
    vblock2.toString().should.equal("4\n5");

    vblock.suba(vblock2);
    vblock.toString().should.equal("-1\n-1");
    vblock2.toString().should.equal("-1\n 5");

    vec.toString().should.equal(" 1\n 2\n-1\n-1\n 5\n 6");
  });

  it('#suba() should return the difference of a vector block and a matrix then saves it back', function() {
    vblock.suba.should.be.a.Function;

    var vec2 = Matrix(2, 1)
    .set([
      1,
      3
    ]);
    vblock.suba(vec2);
    vblock.toString().should.equal("2\n1");

    (function() {
      vblock.suba(
        Matrix(3, 1)
        .set([
          1,
          0,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cvec = CMatrix(2, 1).set([
      2,
      6,
    ]);

    (function() {
      vblock.suba(cvec);
    }).should.throw("Invalid argument");
  });

  it('#suba() should return the difference of a vector block and a vector then saves it back', function() {
    vblock.suba.should.be.a.Function;

    var vblock2 = VectorBlock(vec, 2, 4);
    vblock2.toString().should.equal("3\n4\n5\n6");

    var vec2 = new Vector([
      1,
      3,
      5,
      7
    ]);
    vblock2.suba(vec2);
    vblock2.toString().should.equal(" 2\n 1\n 0\n-1");

    vec.toString().should.equal(" 1\n 2\n 2\n 1\n 0\n-1");
  });

  it('#suba() should return the difference of a vector block and a row-vector then saves it back', function() {
    vblock.suba.should.be.a.Function;

    var vblock2 = VectorBlock(vec, 4, 1);
    vblock2.toString().should.equal("5");

    var rvec = new RowVector([
      1
    ]);
    vblock2.suba(rvec);
    vblock2.toString().should.equal("4");

    vec.toString().should.equal("1\n2\n3\n4\n4\n6");
  });

  it('#suba() should return the difference of a vector block and a matrix block then saves it back', function() {
    vblock.suba.should.be.a.Function;

    var vec2 = Matrix(2, 1)
    .set([
      1,
      3
    ]);
    vblock.suba(vec2.block(0, 0, 2, 1));
    vblock.toString().should.equal("2\n1");

    (function() {
      vblock.suba(
        Matrix(3, 1)
        .set([
          1,
          0,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cvec = CMatrix(2, 1).set([
      2,
      6,
    ]);

    (function() {
      vblock.suba(cvec);
    }).should.throw("Invalid argument");
  });

  it('#suba() should return the difference of a vector block and a row-vector block then saves it back', function() {
    vblock.suba.should.be.a.Function;

    var vblock2 = VectorBlock(vec, 4, 1);
    vblock2.toString().should.equal("5");

    var rvec = new RowVector([
      1
    ]);
    vblock2.suba(rvec.block(0, 1));
    vblock2.toString().should.equal("4");

    vec.toString().should.equal("1\n2\n3\n4\n4\n6");
  });

  it('#mul() should return the product of two vector blocks', function() {
    vblock.mul.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 0, 1);
    vblock2.toString().should.equal("1");

    var vec2 = vblock.mul(vblock2);
    vec2.should.instanceOf(Matrix);
    vec2.toString().should.equal("3\n4");

    (function() {
      vblock.mul(VectorBlock(vec, 0, 2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a vector block and a matrix', function() {
    vblock.mul.should.be.a.Function;

    var vec2 = vblock.mul(new Matrix(1, 2).set([
      1, 2
    ]));
    vec2.should.instanceOf(Matrix);
    vec2.toString().should.equal("3 6\n4 8");

    (function() {
      vblock.mul(Matrix(3, 2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a vector block and a vector', function() {
    vblock.mul.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 3, 3);
    vblock2.toString().should.equal("4\n5\n6");

    var vec2 = new Vector([
      -1
    ]);
    var vec3 = vblock2.mul(vec2);
    vec3.should.instanceOf(Matrix);
    vec3.toString().should.equal("-4\n-5\n-6");

    (function() {
      vblock.mul(vec);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a vector block and a row-vector', function() {
    vblock.mul.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 1, 3);
    vblock2.toString().should.equal("2\n3\n4");

    var rvec = new RowVector([1, 2, 3]);
    var mat2 = vblock2.mul(rvec);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal(" 2  4  6\n 3  6  9\n 4  8 12");
  });

  it('#mul() should return the product of a vector block and a matrix block', function() {
    vblock.mul.should.be.a.Function;

    var vec2 = vblock.mul(new Matrix(1, 2).set([
      1, 2
    ]).block(0, 0, 1, 2));
    vec2.should.instanceOf(Matrix);
    vec2.toString().should.equal("3 6\n4 8");
  });

  it('#mul() should return the product of a vector block and a row-vector block', function() {
    vblock.mul.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 1, 3);
    vblock2.toString().should.equal("2\n3\n4");

    var rvec = new RowVector([1, 2, 3]);
    var mat2 = vblock2.mul(rvec.block(0, 3));
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal(" 2  4  6\n 3  6  9\n 4  8 12");
  });

  it('#mul() should return a CMatrix with the product of a vector block and a complex matrix', function() {
    vblock.mul.should.be.a.Function;

    var cmat = new CMatrix(1, 2).set([
      Complex(1, 1), Complex(2, 2)
    ]);
    var cmat2 = vblock.mul(cmat);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(3,3) (6,6)\n(4,4) (8,8)");

    (function() {
      vblock.mul(new CMatrix(3, 3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a vector block and a complex vector', function() {
    vblock.mul.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 1, 3);
    vblock2.toString().should.equal("2\n3\n4");

    var cvec = new CVector(1).set([
      Complex(1, 1)
    ]);
    var cmat = vblock2.mul(cvec);
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("(2,2)\n(3,3)\n(4,4)");

    (function() {
      vblock.mul(new CVector(2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a vector block and a complex row-vector', function() {
    vblock.mul.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 3, 2);
    vblock2.toString().should.equal("4\n5");

    var crvec = new CRowVector(3).set([
      Complex(1, 1), Complex(2, 2), Complex(3, 3)
    ]);
    var cmat = vblock2.mul(crvec);
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("  (4,4)   (8,8) (12,12)\n  (5,5) (10,10) (15,15)");
  });

  it('#mul() should return a CMatrix with the product of a vector block and a complex matrix block', function() {
    vblock.mul.should.be.a.Function;

    var cmat = new CMatrix(1, 2).set([
      Complex(1, 1), Complex(2, 2)
    ]);
    var cmat2 = vblock.mul(cmat.block(0, 0, 1, 2));
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(3,3) (6,6)\n(4,4) (8,8)");

    (function() {
      vblock.mul(new CMatrix(3, 3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a vector block and a complex vector block', function() {
    vblock.mul.should.be.a.Function;

    var cvec = new CVector(1).set([
      Complex(1, 1)
    ]);
    var cmat = vblock.mul(cvec.block(0, 1));
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("(3,3)\n(4,4)");

    (function() {
      vblock.mul(new CVector(2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a vector block and a complex row-vector block', function() {
    vblock.mul.should.be.a.Function;

    var crvec = new CRowVector(3).set([
      Complex(1, 1), Complex(2, 2), Complex(3, 3)
    ]);
    var cmat = vblock.mul(crvec.block(0, 3));
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("  (3,3)   (6,6)   (9,9)\n  (4,4)   (8,8) (12,12)");
  });

  it('#mul() should return the product of a vector block and a scalar value', function() {
    vblock.mul.should.be.a.Function;

    var mat2 = vblock.mul(-1);
    mat2.should.instanceOf(Vector);
    mat2.toString().should.equal("-3\n-4");
  });

  it('#mul() should return the product of a vector block and a complex value', function() {
    vblock.mul.should.be.a.Function;

    var cvec = vblock.mul(Complex(-1));
    cvec.should.instanceOf(CVector);
    cvec.toString().should.equal("(-3,0)\n(-4,0)");
  });

  it('#mula() should return the product of two vector block and saves it back', function() {
    vblock.mula.should.be.a.Function;

    var vblock2 = new VectorBlock(vec, 1, 1);
    vblock2.toString().should.equal("2");
    var vblock3 = new VectorBlock(vec, 3, 1);
    vblock3.toString().should.equal("4");

    vblock2.mula(vblock3);
    vblock2.toString().should.equal("8");

    vec.toString().should.equal("1\n8\n3\n4\n5\n6");
  });

  it('#mula() should return the product of a vector block and a matrix then saves it back', function() {
    vblock.mula.should.be.a.Function;

    vblock.mula(new Matrix(1, 1).set([
      -1
    ]));
    vblock.toString().should.equal("-3\n-4");

    vec.toString().should.equal(" 1\n 2\n-3\n-4\n 5\n 6");
  });

  it('#mula() should return the product of a vector block and a vector then saves it back', function() {
    vblock.mula.should.be.a.Function;

    var vblock2 = VectorBlock(vec, 1, 1);
    vblock2.toString().should.equal("2");

    vblock2.mula(new Vector([-1]));
    vblock2.toString().should.equal("-2");

    vec.toString().should.equal(" 1\n-2\n 3\n 4\n 5\n 6");
  });

  it('#mula() should return the product of a vector block and a row-vector then saves it back', function() {
    vblock.mula.should.be.a.Function;

    var vblock2 = VectorBlock(vec, 1, 1);
    vblock2.toString().should.equal("2");

    vblock2.mula(new RowVector([-1]));
    vblock2.toString().should.equal("-2");

    vec.toString().should.equal(" 1\n-2\n 3\n 4\n 5\n 6");

    (function() {
      vblock2.mula(new RowVector([
        -1, -2
      ]));
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a vector block and a matrix block then saves it back', function() {
    vblock.mula.should.be.a.Function;

    vblock.mula(new Matrix(1, 1).set([
      -1
    ]).block(0, 0, 1, 1));
    vblock.toString().should.equal("-3\n-4");

    vec.toString().should.equal(" 1\n 2\n-3\n-4\n 5\n 6");
  });

  it('#mula() should return the product of a vector block and a row-vector block then saves it back', function() {
    vblock.mula.should.be.a.Function;

    var vblock2 = VectorBlock(vec, 1, 1);
    vblock2.toString().should.equal("2");

    vblock2.mula(new RowVector([-1]));
    vblock2.toString().should.equal("-2");

    vec.toString().should.equal(" 1\n-2\n 3\n 4\n 5\n 6");

    (function() {
     vblock2.mula(new RowVector([
        -1, -2
      ]).block(0, 2));
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a vector block and a scalar value then saves it back', function() {
    vblock.mula.should.be.a.Function;

    vblock.mula(-1);
    vec.toString().should.equal(" 1\n 2\n-3\n-4\n 5\n 6");
  });

  it('#div() should return a Matrix which be divied by a scalar value', function() {
    vblock.div.should.be.a.Function;

    var vec2 = vblock.div(2);
    vec2.equals(
      new Matrix(2, 1)
      .set([
        1.5,
        2
      ])
    ).should.ok;
    vblock.div(2).toString().should.equal("1.5\n  2");
  });

  it('#div() should return a Matrix which be divied by a complex value', function() {
    vblock.div.should.be.a.Function;

    var cvec = vblock.div(Complex(2, 0));
    cvec.should.instanceOf(CVector);
    cvec.toString().should.equal("(1.5,0)\n  (2,0)");
  });

  it('#diva() should return a Matrix which be divied by a scalar value then saves it back', function() {
    vblock.diva.should.be.a.Function;

    vblock.diva(2);
    vblock.equals(
      new Matrix(2, 1)
      .set([
        1.5,
        2
      ])
    ).should.ok;
    vblock.get(0).should.equal(1.5);

    vec.toString().should.equal("  1\n  2\n1.5\n  2\n  5\n  6");
  });

  it('#equals() should return true if two vector block are equal', function() {
    vblock.equals.should.be.a.Function;

    var vec2 = new Vector([
      1,
      2,
      1,
      2
    ]);
    var vblock2 = VectorBlock(vec2, 0, 2);
    var vblock3 = VectorBlock(vec2, 2, 2);

    vblock2.equals(vblock3).should.ok;
  });

  it('#equals() should return true if a vector block and a matrix are equal', function() {
    vblock.equals.should.be.a.Function;

    var mat2 = new Matrix(2, 1).set([
      3,
      4
    ]);

    vblock.equals(mat2).should.ok;
  });

  it('#equals() should return true if a vector block and a vector are equal', function() {
    vblock.equals.should.be.a.Function;

    var vec2 = new Vector([
      3,
      4
    ]);

    vblock.equals(vec2).should.ok;
  });

  it('#equals() should return true if a vector block and a row-vector are equal', function() {
    vblock.equals.should.be.a.Function;

    var vblock2 = VectorBlock(vec, 0, 1);
    vblock2.toString().should.equal("1");

    var rvec = new RowVector([
      1
    ]);

    vblock2.equals(rvec).should.ok;
  });

  it('#isApprox() should return true if this is approxivecely equal to other', function() {
    vblock.isApprox.should.be.a.Function;

    vblock.diva(9);
    vblock.toString().should.equal("0.333333\n0.444444");

    var vec2 = new Vector([
      0.333,
      0.444
    ]);

    vblock.isApprox(vec2.block(0, 2), 1e-3).should.false;
    vblock.isApprox(vec2.block(0, 2), 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a matrix', function() {
    vblock.isApprox.should.be.a.Function;

    vblock.diva(9);
    vblock.toString().should.equal("0.333333\n0.444444");

    var mat2 = new Matrix(2, 1).set([
      0.333,
      0.444
    ]);

    vblock.isApprox(mat2, 1e-3).should.false;
    vblock.isApprox(mat2, 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a row-vector', function() {
    vblock.isApprox.should.be.a.Function;

    var vblock2 = VectorBlock(vec, 0, 1);
    vblock2.toString().should.equal("1");

    vblock2.diva(9);
    vblock2.toString().should.equal("0.111111");

    var rvec = new RowVector([
      0.111
    ]);

    vblock2.isApprox(rvec, 1e-3).should.false;
    vblock2.isApprox(rvec, 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a matrix block', function() {
    vblock.isApprox.should.be.a.Function;

    vblock.diva(9);
    vblock.toString().should.equal("0.333333\n0.444444");

    var mat2 = new Matrix(2, 1).set([
      0.333,
      0.444
    ]);

    vblock.isApprox(mat2.block(0, 0, 2, 1), 1e-3).should.false;
    vblock.isApprox(mat2.block(0, 0, 2, 1), 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a vector block', function() {
    vblock.isApprox.should.be.a.Function;

    vblock.diva(9);
    vblock.toString().should.equal("0.333333\n0.444444");

    var vec2 = new Vector(2, 1).set([
      0.333,
      0.444
    ]);

    vblock.isApprox(vec2.block(0, 2), 1e-3).should.false;
    vblock.isApprox(vec2.block(0, 2), 1e-2).should.true;
  });

  it('#isApprox() should return true if this is approxivecely equal to a row-vector block', function() {
    vblock.isApprox.should.be.a.Function;

    var vblock2 = VectorBlock(vec, 0, 1);
    vblock2.toString().should.equal("1");

    vblock2.diva(9);
    vblock2.toString().should.equal("0.111111");

    var rvec = new RowVector([
      0.111
    ]);

    vblock2.isApprox(rvec.block(0, 1), 1e-3).should.false;
    vblock2.isApprox(rvec.block(0, 1), 1e-2).should.true;
  });

  it('#isSquare() should return true if this is square', function() {
    vblock.isSquare.should.be.a.Function;

    vblock.isSquare().should.be.false;
    Vector(1).block(0, 1).isSquare().should.be.true;
  });

  it('#Zero() should return a zero matrix', function() {
    VectorBlock.Zero.should.be.a.Function;

    VectorBlock.Zero(3).toString().should.equal("0\n0\n0");
    VectorBlock.Zero(3).should.instanceOf(Vector);

    VectorBlock.Zero(3).equals(
      new Matrix(3, 1).set([
        0,
        0,
        0
      ])
    ).should.true;
  });

  it('#Identity() should return a identity vector', function() {
    VectorBlock.Identity.should.be.a.Function;

    VectorBlock.Identity(0).toString().should.equal("");

    var vec2 = VectorBlock.Identity(3);
    vec2.equals(new Matrix(3, 1).set([
      1,
      0,
      0
    ])).should.true;
  });

  it('#Random() should return a matrix with random values', function() {
    VectorBlock.Random.should.be.a.Function;

    var vec2 = VectorBlock.Random(3);
    vec2.should.instanceOf(Vector);
    vec2.rows().should.equal(3);
    vec2.cols().should.equal(1);
  });

  it('#Constant() should return a Vector with constant values', function() {
    MatrixBlock.Constant.should.be.a.Function;

    var vec2 = VectorBlock.Constant(4, 0.6);
    vec2.should.instanceOf(Vector);
    vec2.toString().should.equal("0.6\n0.6\n0.6\n0.6");

    var cmat = VectorBlock.Constant(4, Complex(0.6, 0));
    cmat.should.instanceOf(CVector);
    cmat.toString().should.equal("(0.6,0)\n(0.6,0)\n(0.6,0)\n(0.6,0)");
  });
});
