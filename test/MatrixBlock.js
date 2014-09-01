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
    should = require('should');

describe('MatrixBlock', function() {
  var mat, mblock;

  it('#MatrixBlock() should be a function', function() {
    MatrixBlock.should.be.a.Function;
  });

  beforeEach(function() {
    mat = Matrix(4, 4).set([
       1,  2,  3,  4,
       5,  6,  7,  8,
       9, 10, 11, 12,
      13, 14, 15, 16
    ]);

    mblock = new MatrixBlock(mat, 1, 1, 2, 2);
  });

  it('should throw error when tried creating a matrix block with invalid arguments', function() {
    (function() {
      new MatrixBlock(mat, -1, -2, -3, -4);
    }).should.throw('Row or column numbers are out of range');

    (function() {
      new MatrixBlock(mat, 0, 0, 4, 4);
    }).should.not.throw();

    (function() {
      new MatrixBlock(mat, 4, 4, 0, 0);
    }).should.not.throw();

    (function() {
      new MatrixBlock(mat, 0, 0, 5, 4);
    }).should.throw('Row or column numbers are out of range');
  });

  it('should be invoked with arguments and return an object', function() {
    var mblock2 = new MatrixBlock(mat, 1, 1, 2, 2);
    mblock2.should.be.an.Object;
    mblock2.should.instanceOf(MatrixBlock);
  });

  it('#MatrixBlock(mat, 1, 1, 2, 2) should return the matrix block of size 2x2', function() {
    var mblock2 = new MatrixBlock(mat, 1, 1, 2, 2);
    mblock2.rows().should.equal(2);
    mblock2.cols().should.equal(2);
  });

  it('#set() should throw message when row or column numbers are out of range', function() {
    mblock.set.should.be.a.Function;

    (function() {
      mblock.set(3, 0, 68);
    }).should.throw('Row or column numbers are out of range');

    (function() {
      mblock.set(-1, -2, 500);
    }).should.throw('Row or column numbers are out of range');
  });

  it('#set() with array argument should work ok', function() {
    mblock.set.should.be.a.Function;

    mblock.set([
      -1, -2,
      -3, -4
    ]).toString().should.eql("-1 -2\n-3 -4");

    mat.toString().should.equal(" 1  2  3  4\n 5 -1 -2  8\n 9 -3 -4 12\n13 14 15 16");

    (function() {
      mblock.set([
        1, 2
      ]);
    }).should.throw('Too few coefficients');

    (function() {
      mblock.set([
         1,  2,  3,
         4,  5,  6
      ]);
    }).should.throw('Too many coefficients');
  });

  it('#get() should return the element value of MatrixBlock', function() {
    mblock.get.should.be.a.Function;

    mblock.get(0, 0).should.equal(6);
    mblock.get(0, 1).should.equal(7);
    mblock.get(1, 0).should.equal(10);
    mblock.get(1, 1).should.equal(11);

    mblock.toString().should.equal(" 6  7\n10 11");

    (function(){
      mblock.get(2, 0);
    }).should.throw('Row or column numbers are out of range');
  });

  it('#toString() should return all element values of MatrixBlock', function() {
    mblock.toString.should.be.a.Function;

    mblock.toString().should.equal(" 6  7\n10 11");
  });

  it('#assign() should assign a matrix blocks in another', function() {
    mblock.assign.should.be.a.Function;

    mat.toString().should.equal(" 1  2  3  4\n 5  6  7  8\n 9 10 11 12\n13 14 15 16");
    mblock.toString().should.equal(" 6  7\n10 11");

    var mblock2 = mat.block(0, 0, 2, 2);
    mblock2.toString().should.equal("1 2\n5 6");

    mblock.assign(mblock2).toString().should.equal("1 2\n5 1");
    mat.toString().should.equal(" 1  2  3  4\n 5  1  2  8\n 9  5  1 12\n13 14 15 16");
  });

  it('#assign() should assign a matrix block in a matrix', function() {
    mblock.assign.should.be.a.Function;

    mat.toString().should.equal(" 1  2  3  4\n 5  6  7  8\n 9 10 11 12\n13 14 15 16");
    mblock.toString().should.equal(" 6  7\n10 11");
    mblock.assign(Matrix.Zero(2)).toString().should.equal("0 0\n0 0");
    mat.toString().should.equal(" 1  2  3  4\n 5  0  0  8\n 9  0  0 12\n13 14 15 16");
  });

  it('#assign() should assign a matrix block in a vector', function() {
    mblock.assign.should.be.a.Function;

    mat.toString().should.equal(" 1  2  3  4\n 5  6  7  8\n 9 10 11 12\n13 14 15 16");

    var mblock2 = mat.block(0, 0, 4, 1);
    mblock2.toString().should.equal(" 1\n 5\n 9\n13");

    mblock2.assign(Vector.Zero(4)).toString().should.equal("0\n0\n0\n0");
    mat.toString().should.equal(" 0  2  3  4\n 0  6  7  8\n 0 10 11 12\n 0 14 15 16");
  });

  it('#assign() should assign a matrix block in a row-vector', function() {
    mblock.assign.should.be.a.Function;

    mat.toString().should.equal(" 1  2  3  4\n 5  6  7  8\n 9 10 11 12\n13 14 15 16");

    var mblock2 = mat.block(0, 0, 1, 4);
    mblock2.toString().should.equal("1 2 3 4");

    mblock2.assign(RowVector.Zero(4)).toString().should.equal("0 0 0 0");
    mat.toString().should.equal(" 0  0  0  0\n 5  6  7  8\n 9 10 11 12\n13 14 15 16");
  });

  it('#add() should return the sum of two matrix blocks', function() {
    mblock.add.should.be.a.Function;

    mblock.toString().should.equal(" 6  7\n10 11");

    var mblock2 = MatrixBlock(mat, 0, 0, 2, 2);
    mblock2.toString().should.equal("1 2\n5 6");

    var mat2 = mblock.add(mblock2);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal(" 7  9\n15 17");
  });

  it('#add() should return the sum of a matrix block and a matrix', function() {
    mblock.add.should.be.a.Function;

    var mat2 = Matrix(2, 2).set([
       -1, -2,
       -3, -4
    ]);

    var mat3 = mblock.add(mat2);
    mat3.should.instanceOf(Matrix);
    mat3.toString().should.equal("5 5\n7 7");
    mblock.toString().should.equal(" 6  7\n10 11");

    mblock.assign(mat3);
    mat.toString().should.equal(" 1  2  3  4\n 5  5  5  8\n 9  7  7 12\n13 14 15 16");

    (function() {
      mblock.assign(Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a matrix block and a vector', function() {
    mblock.add.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 0, 1, 4, 1);
    mblock2.toString().should.equal(" 2\n 6\n10\n14");
    var vec = Vector(mblock2.rows())
      .set([
         2,
         6,
        10,
        14
      ]);

    var vec2 = mblock2.add(vec);
    vec2.should.instanceOf(Matrix);
    vec2.toString().should.equal(" 4\n12\n20\n28");
  });

  it('#add() should return the sum of a matrix block and a row-vector', function() {
    mblock.add.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 1, 0, 1, 4);
    mblock2.toString().should.equal("5 6 7 8");
    var rvec = RowVector(mblock2.cols())
      .set([
        2, 6, 10, 14
      ]);

    var rvec2 = mblock2.add(rvec);
    rvec2.should.instanceOf(Matrix);
    rvec2.toString().should.equal(" 7 12 17 22");
  });

  it('#add() should return a CMatrix with the sum of a matrix block and a complex matrix', function() {
    mblock.add.should.be.a.Function;

    var cmat = CMatrix(2, 2).set([
      -1,  -2,
      -3,  -4
    ]);
    mblock.add(cmat).toString().should.equal("(5,0) (5,0)\n(7,0) (7,0)");

    (function() {
      mblock.add(CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a matrix block and a complex vector', function() {
    mblock.add.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 0, 1, 4, 1);
    mblock2.toString().should.equal(" 2\n 6\n10\n14");
    var cvec = CVector(mblock2.rows())
      .set([
         2,
         6,
        10,
        14
      ]);

    var cvec2 = mblock2.add(cvec);
    cvec2.should.instanceOf(CMatrix);
    cvec2.toString().should.equal(" (4,0)\n(12,0)\n(20,0)\n(28,0)");
  });

  it('#add() should return the sum of a matrix block and a complex row-vector', function() {
    mblock.add.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 1, 0, 1, 4);
    mblock2.toString().should.equal("5 6 7 8");
    var crvec = CRowVector(mblock2.cols())
      .set([
        2, 6, 10, 14
      ]);

    var crvec2 = mblock2.add(crvec);
    crvec2.should.instanceOf(CMatrix);
    crvec2.toString().should.equal(" (7,0) (12,0) (17,0) (22,0)");
  });

  it('#adda() should return the sum of two matrix blocks and saves it back', function() {
    mblock.adda.should.be.a.Function;

    mblock.toString().should.equal(" 6  7\n10 11");

    var mblock2 = MatrixBlock(mat, 0, 0, 2, 2);
    mblock2.toString().should.equal("1 2\n5 6");

    mblock.adda(mblock2);
    mblock.toString().should.equal(" 7  9\n15 18");
    mblock2.toString().should.equal("1 2\n5 7");

    mat.toString().should.equal(" 1  2  3  4\n 5  7  9  8\n 9 15 18 12\n13 14 15 16");
  });

  it('#adda() should return the sum of a matrix block and a matrix then saves it back', function() {
    mblock.adda.should.be.a.Function;

    mblock.toString().should.equal(" 6  7\n10 11");

    mblock.adda(
      Matrix(2, 2)
        .set([
          -2, -4,
          -6, -8
        ])
    );
    mblock.toString().should.equal("4 3\n4 3");

    (function() {
      mblock.adda(
        Matrix(2, 3)
        .set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cmat = CMatrix(2, 2).set([
      -2, -4,
      -6, -8
    ]);

    (function() {
      mblock.adda(cmat);
    }).should.throw("Invalid argument");
  });

  it('#adda() should return the sum of a matrix block and a vector then saves it back', function() {
    mblock.adda.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 0, 2, 4, 1);
    mblock2.toString().should.equal(" 3\n 7\n11\n15");

    mblock2.adda(
      Vector(mblock2.rows())
      .set([
        -2,
        -4,
        -6,
        -8
      ])
    );
    mblock2.toString().should.equal("1\n3\n5\n7");

    (function() {
      mblock2.adda(
        Vector(3)
        .set([
          1,
          0,
          1
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cmat = CMatrix(2, 2).set([
      -2, -4,
      -6, -8
    ]);

    (function() {
      mblock2.adda(cmat);
    }).should.throw("Invalid argument");
  });

  it('#adda() should return the sum of a matrix block and a row-vector then saves it back', function() {
    mblock.adda.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 2, 0, 1, 4);
    mblock2.toString().should.equal(" 9 10 11 12");

    mblock2.adda(
      RowVector(mblock2.cols())
      .set([
        -2, -4, -6, -8
      ])
    );
    mblock2.toString().should.equal("7 6 5 4");

    (function() {
      mblock2.adda(
        RowVector(2)
        .set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cmat = CMatrix(1, 4).set([
      -2, -4, -6, -8
    ]);

    (function() {
      mblock2.adda(cmat);
    }).should.throw("Invalid argument");
  });

  it('#sub() should return the difference of two matrix block', function() {
    mblock.sub.should.be.a.Function;

    mblock.toString().should.equal(" 6  7\n10 11");

    var mblock2 = MatrixBlock(mat, 0, 0, 2, 2);
    mblock2.toString().should.equal("1 2\n5 6");

    var mat2 = mblock.sub(mblock2);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("5 5\n5 5");
  });

  it('#sub() should return the difference of a matrix block and a matrix', function() {
    mblock.sub.should.be.a.Function;

    mblock.toString().should.equal(" 6  7\n10 11");

    var mat2 = mblock.sub(new Matrix(2, 2).set([
      1, 2,
      3, 4
    ]));
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("5 5\n7 7");

    (function() {
      mblock.sub(new Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a matrix block and a vector', function() {
    mblock.sub.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 0, 0, 4, 1);
    mblock2.toString().should.equal(" 1\n 5\n 9\n13");

    var mat2 = mblock2.sub(new Vector([
      1,
      2,
      3,
      4
    ]));
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("0\n3\n6\n9");

    (function() {
      mblock2.sub(new Vector(2).set([
        1,
        0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a matrix block and a row-vector', function() {
    mblock.sub.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 0, 0, 1, 4);
    mblock2.toString().should.equal("1 2 3 4");

    var mat2 = mblock2.sub(new RowVector([
      1, 2, 3, 4
    ]));
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("0 0 0 0");

    (function() {
      mblock2.sub(new RowVector(2).set([
        1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a matrix block and a complex matrix', function() {
    mblock.sub.should.be.a.Function;

    var cmat = CMatrix(2, 2).set([
      Complex(2, 0), Complex(4, 1),
      Complex(6, 2), Complex(8, 4)
    ]);

    var cmat2 = mblock.sub(cmat);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal(" (4,0) (3,-1)\n(4,-2) (3,-4)");

    (function() {
      mblock.sub(
        CMatrix(2, 3).set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a matrix block and a complex vector', function() {
    mblock.sub.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 0, 0, 4, 1);
    mblock2.toString().should.equal(" 1\n 5\n 9\n13");

    var cvec = CVector([
      Complex(2, 0),
      Complex(4, 1),
      Complex(6, 2),
      Complex(8, 4)
    ]);

    var cmat2 = mblock2.sub(cvec);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(-1,0)\n(1,-1)\n(3,-2)\n(5,-4)");

    (function() {
      mblock2.sub(
        CVector(2).set([
          1,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a matrix block and a complex row-vector', function() {
    mblock.sub.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 0, 0, 1, 4);
    mblock2.toString().should.equal("1 2 3 4");

    var crvec = CRowVector([
      Complex(2, 0), Complex(4, 1), Complex(6, 2), Complex(8, 4)
    ]);

    var cmat2 = mblock2.sub(crvec);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal(" (-1,0) (-2,-1) (-3,-2) (-4,-4)");

    (function() {
      mblock2.sub(
        CRowVector(2).set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the sum of two matrix blocks and saves it back', function() {
    mblock.suba.should.be.a.Function;

    mblock.toString().should.equal(" 6  7\n10 11");

    var mblock2 = MatrixBlock(mat, 0, 0, 2, 2);
    mblock2.toString().should.equal("1 2\n5 6");

    mblock.suba(mblock2);
    mblock.toString().should.equal("5 5\n5 6");
    mblock2.toString().should.equal("1 2\n5 5");

    mat.toString().should.equal(" 1  2  3  4\n 5  5  5  8\n 9  5  6 12\n13 14 15 16");
  });

  it('#suba() should return the difference of a matrix block and a matrix then saves it back', function() {
    mblock.suba.should.be.a.Function;

    var mat2 = Matrix(2, 2)
    .set([
      1, 3,
      5, 7
    ]);
    mblock.suba(mat2);
    mblock.toString().should.equal("5 4\n5 4");

    (function() {
      mblock.suba(
        Matrix(2, 3)
        .set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cmat = CMatrix(2, 2).set([
      2, 4,
      6, 8
    ]);

    (function() {
      mblock.suba(cmat);
    }).should.throw("Invalid argument");
  });

  it('#suba() should return the difference of a matrix block and a vector then saves it back', function() {
    mblock.suba.should.be.a.Function;

    var mblock2 = MatrixBlock(mat, 0, 2, 4, 1);
    mblock2.toString().should.equal(" 3\n 7\n11\n15");

    var vec = new Vector([
      1,
      3,
      5,
      7
    ]);
    mblock2.suba(vec);
    mblock2.toString().should.equal("2\n4\n6\n8");

    mat.toString().should.equal(" 1  2  2  4\n 5  6  4  8\n 9 10  6 12\n13 14  8 16");
  });

  it('#suba() should return the difference of a matrix block and a row-vector then saves it back', function() {
    mblock.suba.should.be.a.Function;

    var mblock2 = MatrixBlock(mat, 3, 0, 1, 4);
    mblock2.toString().should.equal("13 14 15 16");

    var rvec = new RowVector([
      1, 3, 5, 7
    ]);
    mblock2.suba(rvec);
    mblock2.toString().should.equal("12 11 10  9");

    mat.toString().should.equal(" 1  2  3  4\n 5  6  7  8\n 9 10 11 12\n12 11 10  9");
  });

  it('#mul() should return the product of two matrix blocks', function() {
    mblock.mul.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 0, 0, 2, 2);
    mblock2.toString().should.equal("1 2\n5 6");

    var mat2 = mblock.mul(mblock2);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("41 54\n65 86");

    (function() {
      mblock.mul(MatrixBlock(mat, 0, 0, 3, 2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a matrix block and a matrix', function() {
    mblock.mul.should.be.a.Function;

    var mat2 = mblock.mul(new Matrix(2, 2).set([
      1, 2,
      3, 4
    ]));
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("27 40\n43 64");

    (function() {
      mblock.mul(Matrix(3, 2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a matrix block and a vector', function() {
    mblock.mul.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 3, 1, 1, 3);
    mblock2.toString().should.equal("14 15 16");

    var vec = new Vector([
      1,
      2,
      3
    ]);
    var mat2 = mblock2.mul(vec);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("92");

    (function() {
      mblock.mul(vec);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a matrix block and a row-vector', function() {
    mblock.mul.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 1, 3, 3, 1);
    mblock2.toString().should.equal(" 8\n12\n16");

    var rvec = new RowVector([1, 2, 3]);
    var mat2 = mblock2.mul(rvec);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal(" 8 16 24\n12 24 36\n16 32 48");

    (function() {
      mblock.mul(rvec);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a matrix block and a complex matrix', function() {
    mblock.mul.should.be.a.Function;

    var cmat = new CMatrix(2, 2).set([
      Complex(1, 1), Complex(2, 2),
      Complex(3, 3), Complex(4, 4)
    ]);
    var cmat2 = mblock.mul(cmat);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(27,27) (40,40)\n(43,43) (64,64)");

    (function() {
      mblock.mul(new CMatrix(3, 3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a matrix block and a complex vector', function() {
    mblock.mul.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 0, 0, 1, 3);
    mblock2.toString().should.equal("1 2 3");

    var cvec = new CVector(3).set([
      Complex(1, 1),
      Complex(2, 2),
      Complex(3, 3)
    ]);
    var cmat = mblock2.mul(cvec);
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("(14,14)");

    (function() {
      mblock.mul(new CVector(1));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a matrix block and a complex row-vector', function() {
    mblock.mul.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 0, 0, 3, 1);
    mblock2.toString().should.equal("1\n5\n9");

    var crvec = new CRowVector(3).set([
      Complex(1, 1), Complex(2, 2), Complex(3, 3)
    ]);
    var cmat = mblock2.mul(crvec);
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("  (1,1)   (2,2)   (3,3)\n  (5,5) (10,10) (15,15)\n  (9,9) (18,18) (27,27)");

    (function() {
      mblock.mul(new CRowVector(3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a matrix block and a scalar value', function() {
    mblock.mul.should.be.a.Function;

    var mat2 = mblock.mul(-1);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal(" -6  -7\n-10 -11");
  });

  it('#mul() should return the product of a matrix block and a complex value', function() {
    mblock.mul.should.be.a.Function;

    var cmat = mblock.mul(Complex(-1));
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal(" (-6,0)  (-7,0)\n(-10,0) (-11,0)");
  });

  it('#mula() should return the product of two matrix block and saves it back', function() {
    mblock.mula.should.be.a.Function;

    var mblock2 = new MatrixBlock(mat, 0, 0, 1, 3);
    mblock2.toString().should.equal("1 2 3");
    var mblock3 = new MatrixBlock(mat, 1, 1, 3, 3);
    mblock3.toString().should.equal(" 6  7  8\n10 11 12\n14 15 16");

    mblock2.mula(mblock3);
    mblock2.toString().should.equal("68 74 80");

    mat.toString().should.equal("68 74 80  4\n 5  6  7  8\n 9 10 11 12\n13 14 15 16");

    (function() {
      mblock3.mula(new MatrixBlock(mat, 0, 0, 3, 2));
    }).should.throw("The matrix block size must be mxm");
  });

  it('#mula() should return the product of a matrix block and a matrix then saves it back', function() {
    mblock.mula.should.be.a.Function;

    mblock.mula(new Matrix(2, 2).set([
      -1, -2,
      -3, -4
    ]));
    mblock.toString().should.equal("-27 -40\n-43 -64");

    mat.toString().should.equal("  1   2   3   4\n  5 -27 -40   8\n  9 -43 -64  12\n 13  14  15  16");

    (function() {
      mblock.mula(new Vector([
        -1,
        -2
      ]));
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a matrix block and a vector then saves it back', function() {
    mblock.mula.should.be.a.Function;

    var mblock2 = MatrixBlock(mat, 0, 0, 1, 1);
    mblock2.toString().should.equal("1");

    mblock2.mula(new Vector([-1]));
    mblock2.toString().should.equal("-1");

    mat.toString().should.equal("-1  2  3  4\n 5  6  7  8\n 9 10 11 12\n13 14 15 16");

    (function() {
      mblock.mula(new Vector([
        -1,
        -2
      ]));
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a matrix block and a row-vector then saves it back', function() {
    mblock.mula.should.be.a.Function;

    var mblock2 = MatrixBlock(mat, 0, 0, 1, 1);
    mblock2.toString().should.equal("1");

    mblock2.mula(new RowVector([-1]));
    mblock2.toString().should.equal("-1");

    mat.toString().should.equal("-1  2  3  4\n 5  6  7  8\n 9 10 11 12\n13 14 15 16");

    (function() {
      mblock2.mula(new RowVector([
        -1, -2
      ]));
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a matrix block and a scalar value then saves it back', function() {
    mblock.mula.should.be.a.Function;

    mblock.mula(-1);
    mat.toString().should.equal("  1   2   3   4\n  5  -6  -7   8\n  9 -10 -11  12\n 13  14  15  16");
  });

  it('#div() should return a Matrix which be divied by a scalar value', function() {
    mblock.div.should.be.a.Function;

    var mat2 = mblock.div(0);
    mat2.equals(
      new Matrix(2, 2)
      .set([
        Infinity, Infinity,
        Infinity, Infinity
      ])
    ).should.ok;
    mblock.div(2).toString().should.equal("  3 3.5\n  5 5.5");
  });

  it('#div() should return a Matrix which be divied by a complex value', function() {
    mblock.div.should.be.a.Function;

    var cmat = mblock.div(Complex(2, 0));
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("  (3,0) (3.5,0)\n  (5,0) (5.5,0)");
  });

  it('#diva() should return a Matrix which be divied by a scalar value then saves it back', function() {
    mblock.diva.should.be.a.Function;

    mblock.diva(2);
    mblock.equals(
      new Matrix(2, 2)
      .set([
        3, 3.5,
        5, 5.5
      ])
    ).should.ok;
    mblock.get(0, 0).should.equal(3);

    mat.toString().should.equal("  1   2   3   4\n  5   3 3.5   8\n  9   5 5.5  12\n 13  14  15  16");
  });

  it('#equals() should return true if two matrix block are equal', function() {
    mblock.equals.should.be.a.Function;

    var mat2 = new Matrix.Identity(4, 4);
    var mblock2 = MatrixBlock(mat2, 0, 0, 2, 2);
    var mblock3 = MatrixBlock(mat2, 2, 2, 2, 2);

    mblock2.equals(mblock3).should.ok;
  });

  it('#equals() should return true if a matrix block and a matrix are equal', function() {
    mblock.equals.should.be.a.Function;

    var mat2 = new Matrix(2, 2).set([
       6, 7,
      10, 11
    ]);

    mblock.equals(mat2).should.ok;
  });

  it('#equals() should return true if a matrix block and a vector are equal', function() {
    mblock.equals.should.be.a.Function;

    var mblock2 = MatrixBlock(mat, 0, 0, 4, 1);
    mblock2.toString().should.equal(" 1\n 5\n 9\n13");

    var vec = new Vector([
       1,
       5,
       9,
      13
    ]);

    mblock2.equals(vec).should.ok;
  });

  it('#equals() should return true if a matrix block and a row-vector are equal', function() {
    mblock.equals.should.be.a.Function;

    var mblock2 = MatrixBlock(mat, 0, 0, 1, 4);
    mblock2.toString().should.equal("1 2 3 4");

    var rvec = new RowVector([
      1, 2, 3, 4
    ]);

    mblock2.equals(rvec).should.ok;
  });

  it('#isApprox() should return true if this is approximately equal to other', function() {
    mblock.isApprox.should.be.a.Function;

    mblock.diva(99);
    mblock.toString().should.equal("0.0606061 0.0707071\n  0.10101  0.111111");

    var mat2 = new Matrix(2, 2).set([
      0.061, 0.071,
      0.101, 0.111
    ]);

    mblock.isApprox(mat2, 1e-3).should.false;
    mblock.isApprox(mat2, 1e-2).should.true;

    (function() {
      mblock.isApprox(
        new Matrix(1, 1).set([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isApprox() should return true if this is approximately equal to a vector', function() {
    mblock.isApprox.should.be.a.Function;

    var mblock2 = MatrixBlock(mat, 0, 0, 4, 1);
    mblock2.toString().should.equal(" 1\n 5\n 9\n13");

    mblock2.diva(99);
    mblock2.toString().should.equal(" 0.010101\n0.0505051\n0.0909091\n 0.131313");

    var vec = new Vector([
      0.010,
      0.051,
      0.091,
      0.131
    ]);

    mblock2.isApprox(vec, 1e-3).should.false;
    mblock2.isApprox(vec, 1e-2).should.true;

    (function() {
      mblock2.isApprox(
        new Vector([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isApprox() should return true if this is approximately equal to a row-vector', function() {
    mblock.isApprox.should.be.a.Function;

    var mblock2 = MatrixBlock(mat, 0, 0, 1, 4);
    mblock2.toString().should.equal("1 2 3 4");

    mblock2.diva(9);
    mblock2.toString().should.equal("0.111111 0.222222 0.333333 0.444444");

    var rvec = new RowVector([
      0.111, 0.222, 0.333, 0.444
    ]);

    mblock2.isApprox(rvec, 1e-3).should.false;
    mblock2.isApprox(rvec, 1e-2).should.true;

    (function() {
      mblock2.isApprox(
        new RowVector([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#Zero() should return a zero matrix', function() {
    MatrixBlock.Zero.should.be.a.Function;

    MatrixBlock.Zero(3, 3).toString().should.equal("0 0 0\n0 0 0\n0 0 0");

    MatrixBlock.Zero(3).toString().should.equal("0 0 0\n0 0 0\n0 0 0");

    MatrixBlock.Zero(3, 4).equals(
      new Matrix(3, 4).set([
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
      ])
    ).should.true;
  });

  it('#Identity() should return a identity matrix', function() {
    MatrixBlock.Identity.should.be.a.Function;

    MatrixBlock.Identity(0).toString().should.equal("");

    var mat2 = MatrixBlock.Identity(3);
    mat2.equals(new Matrix(3, 3).set([
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ])).should.true;

    var mat3 = MatrixBlock.Identity(3, 4);
    mat3.equals(new Matrix(3, 4).set([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0
    ])).should.true;

    (function() {
      mat.equals(mat3);
    }).should.throw("Nonconformant arguments");
  });

  it('#Random() should return a matrix with random values', function() {
    MatrixBlock.Random.should.be.a.Function;

    var mat2 = MatrixBlock.Random(3);
    mat2.rows().should.equal(3);
    mat2.cols().should.equal(3);

    var mat3 = MatrixBlock.Random(3, 4);
    mat3.rows().should.equal(3);
    mat3.cols().should.equal(4);
  });
});
