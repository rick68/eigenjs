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
    }).should.throw('The row or column number is out of range');

    (function() {
      new VectorBlock(vec, 0, 1);
    }).should.not.throw();

    (function() {
      new VectorBlock(vec, 4, 2);
    }).should.not.throw();

    (function() {
      new VectorBlock(vec, 6, 3);
    }).should.throw('The row or column number is out of range');
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
    }).should.throw('The row or column number is out of range');

    (function() {
      vblock.set(-1, 500);
    }).should.throw('The row or column number is out of range');
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
    }).should.throw('The row or column number is out of range');
  });

  it('#value() should return the unique coefficient of a 1x1 expression', function() {
    vblock.value.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    (function(){
      vblock.value();
    }).should.throw('The size of row and column values must equal 1');

    var vblock2 = vblock.block(0, 1);
    vblock2.value().should.equal(3);
  });

  it('#setZero() should set all coefficients to zero', function() {
    vblock.setZero.should.be.a.Function;

    vblock.toString().should.equal("3\n4");
    vblock.setZero().toString().should.equal("0\n0");

    vec.toString().should.equal("1\n2\n0\n0\n5\n6");
  });

  it('#setOnes() should set all coefficients to ones', function() {
    vblock.setOnes.should.be.a.Function;

    vblock.toString().should.equal("3\n4");
    vblock.setOnes().toString().should.equal("1\n1");

    vec.toString().should.equal("1\n2\n1\n1\n5\n6");
  });

  it('#setConstant() should set all coefficients to constant', function() {
    vblock.setConstant.should.be.a.Function;

    vec.toString().should.equal("1\n2\n3\n4\n5\n6");
    vblock.setConstant(0.6).toString().should.equal("0.6\n0.6");
    vec.toString().should.equal("  1\n  2\n0.6\n0.6\n  5\n  6");

    (function(){
      vblock.setConstant(Complex(3, -4));
    }).should.throw('Invalid argument');
  });

  it('#setRandom() should set all coefficients to random', function() {
    vblock.setRandom.should.be.a.Function;
    vblock.setRandom();
  });

  it('#setIdentity() should write the identity expression into itself', function() {
    vblock.setIdentity.should.be.a.Function;

    vec.toString().should.equal("1\n2\n3\n4\n5\n6");
    vblock.setIdentity().toString().should.equal("1\n0");
    vec.toString().should.equal("1\n2\n1\n0\n5\n6");
  });

  it('#setLinSpaced() should set a linearly space into a vector block', function() {
    vblock.setLinSpaced.should.be.a.Function;

    vblock.toString().should.equal("3\n4");
    vblock.setLinSpaced(0.1, 0.2);
    vec.toString().should.equal("  1\n  2\n0.1\n0.2\n  5\n  6");

    (function(){
      vblock.setLinSpaced(1, 0, 1);
    }).should.throw('The size argument is not equal to the block size');

    vblock.setLinSpaced(2, 0, 1);
    vec.toString().should.equal("1\n2\n0\n1\n5\n6");
  });

  it('#setDiagonal() should set the diagonal to other values', function() {
    vblock.setDiagonal.should.be.a.Function;

    vec.toString().should.equal("1\n2\n3\n4\n5\n6");

    vblock.toString().should.equal("3\n4");
    vblock.setDiagonal(0, Vector.Zero(1)).toString().should.equal("0\n4");
    vec.toString().should.equal("1\n2\n0\n4\n5\n6");

    vblock.setDiagonal(0, RowVector.Ones(1)).toString().should.equal("1\n4");
    vec.toString().should.equal("1\n2\n1\n4\n5\n6");

    (function(){
      vblock.setDiagonal(68, Vector.Random(1));
    }).should.throw('Invalid index argument');

    (function(){
      vblock.setDiagonal(-500, RowVector.Random(1));
    }).should.throw('Invalid index argument');
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

  it('#transpose() should return the transpose of a matrix', function() {
    vblock.transpose.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var rvec = vblock.transpose();
    rvec.should.instanceOf(RowVector);
    rvec.toString().should.equal("3 4");
  });

  it('#conjugate() should return the conjugate of a matrix', function() {
    vblock.conjugate.should.be.a.Function;

    var vec2 = vblock.conjugate();
    vec2.should.instanceOf(Vector);
    vblock.equals(vec2).should.be.true;
  });

  it('#adjoint() should return the adjoint of a matrix', function() {
    vblock.adjoint.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var rvec = vblock.adjoint();
    rvec.should.instanceOf(RowVector);
    rvec.toString().should.equal("3 4");
  });

  it('#determinant() should return the determinant of a matrix', function() {
    vblock.determinant.should.be.a.Function;

    (function() {
      vblock.determinant();
    }).should.throw("The matrix must be square");

    Vector([1]).block(0, 1).determinant().should.equal(1);
  });

  it('#inverse() should return the inverse of a matrix', function() {
    vblock.inverse.should.be.a.Function;

    (function() {
      vblock.inverse();
    }).should.throw("The matrix must be square");

    var mat2 = Vector([3]).block(0, 1).inverse();
    mat2.should.instanceOf(Matrix);
    mat2.equals(Matrix(1, 1).set([1 / 3])).should.be.true;
  });

  it('#trace() should return the trace of a matrix', function() {
    vblock.trace.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var trace = vblock.trace();
    trace.should.equal(3);
  });

  it('#diagonal() should return the diagonal of a matrix', function() {
    vblock.diagonal.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var dia = vblock.diagonal();
    dia.should.instanceOf(Vector);
    dia.toString().should.equal("3");
    vblock.diagonal(-1).toString().should.equal("4");

    (function() {
      vblock.diagonal(vblock.cols());
    }).should.throw("Invalid index argument");

    (function() {
      vblock.diagonal(-vblock.rows());
    }).should.throw("Invalid index argument");
  });

  it('#norm() should return the l2 norm', function() {
    vblock.norm.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var sum = 0;

    for (var i = 0; i < vblock.rows(); ++i) {
      sum += Math.pow(vblock.get(i), 2);
    }

    vblock.norm().should.equal(Math.pow(sum, 0.5));
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

  it('#isZero() should return true if this is zero', function() {
    vblock.isZero.should.be.a.Function;

    vblock.isZero().should.be.false;

    var vblock2 = new Vector(3).set([
      0,
      0,
      0.0001
    ]).block(0, 3);
    vblock2.isZero().should.be.false;
    vblock2.isZero(1e-4).should.be.true;
  });

  it('#isOnes() should return true if this is ones', function() {
    vblock.isOnes.should.be.a.Function;

    vblock.isOnes().should.be.false;

    var vblock2 = new Vector(3).set([
      1,
      1.0001,
      0.9997
    ]).block(0, 3);
    vblock2.isOnes().should.be.false;
    vblock2.isOnes(1e-4).should.be.false;
    vblock2.isOnes(1e-3).should.be.true;
  });

  it('#isDiagonal() should return true if this is diagonal', function() {
    vblock.isDiagonal.should.be.a.Function;

    vblock.isDiagonal().should.be.false;

    var vblock2 = vec.block(0, 1);
    vblock2.isDiagonal().should.be.true;
  });

  it('#all() should return true if all coefficients are true', function() {
    vblock.all.should.be.a.Function;

    vec.all().should.be.true;
    vblock.toString().should.equal("3\n4");
    vblock.all().should.be.true;
    vblock.set(0, 0);
    vblock.toString().should.equal("0\n4");
    vblock.all().should.be.false;
    vec.toString().should.equal("1\n2\n0\n4\n5\n6");
    vec.all().should.be.false;
  });

  it('#count() should return the number of coefficients which evaluate to true', function() {
    vblock.count.should.be.a.Function;

    vec.count().should.equal(6);
    vblock.toString().should.equal("3\n4");
    vblock.count().should.equal(2);
    vblock.set(0, 0);
    vblock.toString().should.equal("0\n4");
    vblock.count().should.equal(1);
    vec.toString().should.equal("1\n2\n0\n4\n5\n6");
    vec.count().should.equal(5);
  });

  it('#any() should return true if at least one coefficient is true', function() {
    vblock.any.should.be.a.Function;

    vec.any().should.be.true;
    vblock.toString().should.equal("3\n4");
    vblock.any().should.be.true;
    vblock.setZero();
    vblock.toString().should.equal("0\n0");
    vblock.any().should.be.false;
    vec.toString().should.equal("1\n2\n0\n0\n5\n6");
    vec.any().should.be.true;
  });

  it('#allFinite() should return true if it contains only finite numbers, i.e., no NaN and no +/-INF values', function() {
    vblock.allFinite.should.be.a.Function;

    vec.toString().should.equal("1\n2\n3\n4\n5\n6");
    vec.allFinite().should.be.true;
    vblock.allFinite().should.be.true;
    vblock.set(0, NaN);
    vblock.allFinite().should.be.false;
    vec.allFinite().should.be.false;
  });

  it('#hasNaN() should return true if it contains at least one Not A Number (NaN)', function() {
    vblock.hasNaN.should.be.a.Function;

    vec.toString().should.equal("1\n2\n3\n4\n5\n6");
    vec.hasNaN().should.be.false;
    vblock.hasNaN().should.be.false;
    vblock.set(0, NaN);
    vblock.hasNaN().should.be.true;
    vec.hasNaN().should.be.true;
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

  it('#Ones() should return a ones matrix', function() {
    VectorBlock.Ones.should.be.a.Function;

    VectorBlock.Ones(3).toString().should.equal("1\n1\n1");
    VectorBlock.Ones(3).should.instanceOf(Vector);

    VectorBlock.Ones(3).equals(
      new Matrix(3, 1).set([
        1,
        1,
        1
      ])
    ).should.true;
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

  it('#LinSpaced() should return a linearly space vector', function() {
    VectorBlock.LinSpaced.should.be.a.Function;

    var vec2 = VectorBlock.LinSpaced(5, 0, 1);
    vec2.should.instanceOf(Vector);
    vec2.toString().should.equal("   0\n0.25\n 0.5\n0.75\n   1");
 
    var vec3 = VectorBlock.LinSpaced(5, 1, 0);
    vec3.should.instanceOf(Vector);
    vec3.toString().should.equal("   1\n0.75\n 0.5\n0.25\n   0");

    var vec4 = VectorBlock.LinSpaced(5, 1, 1);
    vec4.should.instanceOf(Vector);
    vec4.toString().should.equal("1\n1\n1\n1\n1");

    (function() {
      VectorBlock.LinSpaced(-1, 0, 1);
    }).should.throw("Invalid argument")
  });

  it("#block() should return a vector block", function() {
    vblock.col.should.be.a.Function;

    var vblock2 = vblock.block(1, 1);
    vblock2.should.instanceOf(VectorBlock);
    vblock2.toString().should.equal("4");

    vblock2.assign(Vector([
      -1
    ]));

    vec.toString().should.equal(" 1\n 2\n 3\n-1\n 5\n 6");
  });

  it("#row() should return a column matrix of the vector block", function() {
    vblock.row.should.be.a.Function;

    var row = vblock.row(0);
    row.should.instanceOf(VectorBlock);
    row.toString().should.equal("3");

    (function() {
      vblock.row(2);
    }).should.throw("The row or column number is out of range");
  });

  it("#col() should return a column matrix of the vector block", function() {
    vblock.col.should.be.a.Function;

    var col = vblock.col(0);
    col.should.instanceOf(VectorBlock);
    col.toString().should.equal("3\n4");

    (function() {
      vblock.col(1);
    }).should.throw("The row or column number is out of range");
  });

  it("#head() should return a dynamic-size expression of the first coefficients of it", function() {
    vblock.head.should.be.a.Function;

    var head = vblock.head(1);
    head.should.instanceOf(VectorBlock);
    head.toString().should.equal("3");

    (function() {
      vblock.head(3);
    }).should.throw("Invalid argument");
  });

  it("#tail() should return a dynamic-size expression of the tail coefficients of it", function() {
    vblock.tail.should.be.a.Function;

    var tail = vblock.tail(1);
    tail.should.instanceOf(VectorBlock);
    tail.toString().should.equal("4");

    (function() {
      vblock.tail(3);
    }).should.throw("Invalid argument");
  });

  it("#topRows() should return a block consisting of the top rows of it", function() {
    vblock.topRows.should.be.a.Function;

    var vblock2 = vblock.topRows(1);
    vblock2.should.instanceOf(VectorBlock);
    vblock2.toString().should.equal("3");

    (function() {
      vblock.topRows(4);
    }).should.throw("Invalid argument");

    (function() {
      vblock.topRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRows() should return a block consisting of the bottom rows of it", function() {
    vblock.bottomRows.should.be.a.Function;

    var vblock2 = vblock.bottomRows(1);
    vblock2.should.instanceOf(VectorBlock);
    vblock2.toString().should.equal("4");

    (function() {
      vblock.bottomRows(4);
    }).should.throw("Invalid argument");

    (function() {
      vblock.bottomRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleRows() should return a block consisting of a range of rows of it", function() {
    vblock.middleRows.should.be.a.Function;

    var vblock2 = vblock.middleRows(1, 1);
    vblock2.should.instanceOf(VectorBlock);
    vblock2.toString().should.equal("4");

    (function() {
      vblock.middleRows(4, 1);
    }).should.throw("Invalid argument");

    (function() {
      vblock.middleRows(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#leftCols() should return a block consisting of the left columns of it", function() {
    vblock.leftCols.should.be.a.Function;

    var vblock2 = vblock.leftCols(1);
    vblock2.should.instanceOf(VectorBlock);
    vblock2.toString().should.equal("3\n4");

    (function() {
      vblock.leftCols(2);
    }).should.throw("Invalid argument");

    (function() {
      vblock.leftCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#rightCols() should return a block consisting of the right columns of it", function() {
    vblock.rightCols.should.be.a.Function;

    var vblock2 = vblock.rightCols(1);
    vblock2.should.instanceOf(VectorBlock);
    vblock2.toString().should.equal("3\n4");

    (function() {
      vblock.rightCols(2);
    }).should.throw("Invalid argument");

    (function() {
      vblock.rightCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleCols() should return a block consisting of a range columns of it", function() {
    vblock.middleCols.should.be.a.Function;

    var vblock2 = vblock.middleCols(0, 1);
    vblock2.should.instanceOf(VectorBlock);
    vblock2.toString().should.equal("3\n4");

    (function() {
      vblock.middleCols(1, 1);
    }).should.throw("Invalid argument");

    (function() {
      vblock.middleCols(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topLeftCorner() should return a block consisting of a top-left corner of it", function() {
    vblock.topLeftCorner.should.be.a.Function;

    var vblock2 = vblock.topLeftCorner(1, 1);
    vblock2.should.instanceOf(VectorBlock);
    vblock2.toString().should.equal("3");

    (function() {
      vblock.topLeftCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      vblock.topLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topRightCorner() should return a block consisting of a top-right corner of it", function() {
    vblock.topRightCorner.should.be.a.Function;

    var vblock2 = vblock.topRightCorner(1, 1);
    vblock2.should.instanceOf(VectorBlock);
    vblock2.toString().should.equal("3");

    (function() {
      vblock.topRightCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      vblock.topRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomLeftCorner() should return a block consisting of a bottom-left corner of it", function() {
    vblock.bottomLeftCorner.should.be.a.Function;

    var vblock2 = vblock.bottomLeftCorner(1, 1);
    vblock2.should.instanceOf(VectorBlock);
    vblock2.toString().should.equal("4");

    (function() {
      vblock.bottomLeftCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      vblock.bottomLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRightCorner() should return a block consisting of a bottom-righ corner of it", function() {
    vblock.bottomRightCorner.should.be.a.Function;

    var vblock2 = vblock.bottomRightCorner(1, 1);
    vblock2.should.instanceOf(VectorBlock);
    vblock2.toString().should.equal("4");

    (function() {
      vblock.bottomRightCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      vblock.bottomRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#replicate() should return a matrix which is replicated", function() {
    vblock.replicate.should.be.a.Function;

    vblock.replicate(0, 0).toString().should.equal("");
    vblock.replicate(0, 1).toString().should.equal("");
    vblock.replicate(1, 0).toString().should.equal("");
    vblock.replicate(1, 1).toString().should.equal("3\n4");
    vblock.replicate(2, 1).toString().should.equal("3\n4\n3\n4");
    vblock.replicate(1, 2).toString().should.equal("3 3\n4 4");
    vblock.replicate(2, 2).toString().should.equal("3 3\n4 4\n3 3\n4 4");

    (function() {
      vblock.replicate(-1, 0);
    }).should.throw("Invalid argument");
  });

  it("#dot() should return the dot product of two vector blocks", function() {
    vblock.dot.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    vblock.dot(new Vector(vblock.rows()).block(0, vblock.rows())).should.equal(0);
    vblock.dot(vblock).should.equal(25);

    (function() {
      vblock.dot(new Vector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a vector block and a vector", function() {
    vblock.dot.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    vblock.dot(new Vector(vblock.rows())).should.equal(0);
    vblock.dot(new Vector([5,
                           6])).should.equal(39);

    (function() {
      vblock.dot(new Vector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a vector block and a row-vector", function() {
    vblock.dot.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    vblock.dot(new RowVector(vblock.rows())).should.equal(0);
    vblock.dot(new RowVector([5, 6])).should.equal(39);

    (function() {
      vblock.dot(new RowVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a vector block and a complex vector", function() {
    vblock.dot.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    vblock.dot(new CVector(vblock.rows())).equals(Complex(0));
    vblock.dot(new CVector([5,
                            6])).equals(Complex(39, 0)).should.be.true;

    (function() {
      vblock.dot(new CVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a vector block and a complex row-vector", function() {
    vblock.dot.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    vblock.dot(new CRowVector(vblock.rows())).equals(Complex(0));
    vblock.dot(new CRowVector([5, 6])).equals(Complex(39, 0)).should.be.true;

    (function() {
      vblock.dot(new CRowVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a vector block and a row-vector block", function() {
    vblock.dot.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    vblock.dot(new RowVector(vblock.rows()).block(0, vblock.rows())).should.equal(0);
    vblock.dot(new RowVector([5, 6]).block(0, 2)).should.equal(39);

    (function() {
      vblock.dot(new RowVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a vector block and a complex vector block", function() {
    vblock.dot.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    vblock.dot(new CVector(vblock.rows()).block(0, vblock.rows())).equals(Complex(0)).should.be.true;
    vblock.dot(new CVector([5,
                            6]).block(0, 2)).equals(Complex(39)).should.be.true;

    (function() {
      vblock.dot(new CVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a vector block and a complex row-vector block", function() {
    vblock.dot.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    vblock.dot(new CRowVector(vblock.rows()).block(0, vblock.rows())).equals(Complex(0)).should.be.true;
    vblock.dot(new CRowVector([5, 6]).block(0, 2)).equals(Complex(39)).should.be.true;

    (function() {
      vblock.dot(new RowVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#asDiagonal() should return a diagonal", function() {
    vblock.asDiagonal.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var dia = vblock.asDiagonal();
    dia.should.instanceOf(Matrix);

    dia.toString().should.equal("3 0\n0 4");
  });

  it("#normalize() should normalizes the vector block", function() {
    vblock.normalize.should.be.a.Function;

    vec.toString().should.equal("1\n2\n3\n4\n5\n6");

    vblock.toString().should.equal("3\n4");
    vblock.normalize();
    vblock.toString().should.equal("0.6\n0.8");

    vec.toString().should.equal("  1\n  2\n0.6\n0.8\n  5\n  6");
  });

  it("#redux() should return a full redux operation on the whole matrix", function() {
    vblock.redux.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var result = vblock.redux(function(a, b){
      return a + b;
    })
    result.should.equal(7);
  });

  it("#sum() should return a full sum operation on the whole matrix", function() {
    vblock.sum.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var result = vblock.sum();
    result.should.equal(7);
  });

  it("#prod() should return a full product operation on the whole matrix", function() {
    vblock.prod.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var result = vblock.prod();
    result.should.equal(12);
  });

  it("#mean() should return the maximum of all coefficients", function() {
    vblock.mean.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var result = vblock.mean();
    result.should.equal(3.5);
  });

  it("#visit() should apply the visitor operation on the whole vector block", function() {
    vblock.visit.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var sum = 0;
    vblock.visit(function(scalar, row, col) {
      scalar.should.be.a.Number;
      row.should.be.a.Number;
      col.should.be.a.Number;
      vblock.get(row).should.equal(scalar);
      col.should.equal(0);
      sum += scalar;
    });

    vblock.sum().should.equal(sum);
  });

  it("#maxCoeff() should return the maximum of all coefficients", function() {
    vblock.maxCoeff.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var max = vblock.maxCoeff();
    max.should.equal(4);

    var result = {}, max = 0;
    max = vblock.maxCoeff(result);
    max.should.equal(4);
    result.should.have.properties('maxCoeff', 'rowId', 'colId');
    JSON.stringify(result).should.equal("{\"maxCoeff\":4,\"rowId\":1,\"colId\":0}");

    var ok = false, max = 0;
    max = vblock.maxCoeff(function(rowId, colId) {
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
    vblock.minCoeff.should.be.a.Function;

    vblock.toString().should.equal("3\n4");

    var min = vblock.minCoeff();
    min.should.equal(3);

    var result = {}, min = 0;
    min = vblock.minCoeff(result);
    min.should.equal(3);
    result.should.have.properties('minCoeff', 'rowId', 'colId');
    JSON.stringify(result).should.equal("{\"minCoeff\":3,\"rowId\":0,\"colId\":0}");

    var ok = false, min = 0;
    min = vblock.minCoeff(function(rowId, colId) {
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
