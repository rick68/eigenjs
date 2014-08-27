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
  var mat, block;

  it('#MatrixBlock() should be a function', function() {
    MatrixBlock.should.be.a.Function;
  });

  it('should throw error when tried creating a matrix with invalid arguments', function() {
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
    var mb = new MatrixBlock(mat, 1, 1, 2, 2);
    mb.should.be.an.Object;
    mb.should.instanceOf(MatrixBlock);
  });

  it('#MatrixBlock(mat, 1, 1, 2, 2) should return the matrix block of size 2x2', function() {
    var mb = new MatrixBlock(mat, 1, 1, 2, 2);
    mb.rows().should.equal(2);
    mb.cols().should.equal(2);
  });

  beforeEach(function() {
    mat = Matrix(4, 4).set([
       1,  2,  3,  4,
       5,  6,  7,  8,
       9, 10, 11, 12,
      13, 14, 15, 16
    ]);

    block = new MatrixBlock(mat, 1, 1, 2, 2);
  });

  it('#set() should throw message when row or column nubers are out of range', function() {
    block.set.should.be.a.Function;

    (function() {
      block.set(3, 0, 68);
    }).should.throw('Row or column numbers are out of range');

    (function() {
      block.set(-1, -2, 500);
    }).should.throw('Row or column numbers are out of range');
  });

  it('#set() with array argument should work ok', function() {
    block.set.should.be.a.Function;

    block.set([
      -1, -2,
      -3, -4
    ]).toString().should.eql("-1 -2\n-3 -4");

    mat.toString().should.equal(" 1  2  3  4\n 5 -1 -2  8\n 9 -3 -4 12\n13 14 15 16");

    (function() {
      block.set([
        1, 2
      ]);
    }).should.throw('Too few coefficients');

    (function() {
      block.set([
         1,  2,  3,
         4,  5,  6
      ]);
    }).should.throw('Too many coefficients');
  });

  it('#get() should return the element value of MatrixBlock', function() {
    block.get.should.be.a.Function;

    block.get(0, 0).should.equal(6);
    block.get(0, 1).should.equal(7);
    block.get(1, 0).should.equal(10);
    block.get(1, 1).should.equal(11);

    block.toString().should.equal(" 6  7\n10 11");

    (function(){
      block.get(2, 0);
    }).should.throw('Row or column numbers are out of range');
  });

  it('#toString() should return all element values of MatrixBlock', function() {
    block.toString.should.be.a.Function;

    block.toString().should.equal(" 6  7\n10 11");
  });

  it('#assign() should return the sum of a matrix block and a matrix', function() {
    block.assign.should.be.a.Function;

    mat.toString().should.equal(" 1  2  3  4\n 5  6  7  8\n 9 10 11 12\n13 14 15 16");
    block.toString().should.equal(" 6  7\n10 11");
    block.assign(Matrix.Zero(2)).toString().should.equal("0 0\n0 0");
    mat.toString().should.equal(" 1  2  3  4\n 5  0  0  8\n 9  0  0 12\n13 14 15 16");
  });

  it('#add() should return the sum of two matrix blocks', function() {
    block.add.should.be.a.Function;

    block.toString().should.equal(" 6  7\n10 11");

    var block2 = MatrixBlock(mat, 0, 0, 2, 2);
    block2.toString().should.equal("1 2\n5 6");

    var mat2 = block.add(block2);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal(" 7  9\n15 17");
  });

  it('#add() should return the sum of a matrix block and a matrix', function() {
    block.add.should.be.a.Function;

    var mat2 = Matrix(2, 2).set([
       -1, -2,
       -3, -4
    ]);

    var mat3 = block.add(mat2);
    mat3.should.instanceOf(Matrix);
    mat3.toString().should.equal("5 5\n7 7");
    block.toString().should.equal(" 6  7\n10 11");

    block.assign(mat3);
    mat.toString().should.equal(" 1  2  3  4\n 5  5  5  8\n 9  7  7 12\n13 14 15 16");

    (function() {
      block.assign(Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a matrix block and a vector', function() {
    block.add.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 0, 1, 4, 1);
    block2.toString().should.equal(" 2\n 6\n10\n14");
    var vec = Vector(block2.rows())
      .set([
         2,
         6,
        10,
        14
      ]);

    var vec2 = block2.add(vec);
    vec2.should.instanceOf(Matrix);
    vec2.toString().should.equal(" 4\n12\n20\n28");
  });

  it('#add() should return the sum of a matrix block and a row-vector', function() {
    block.add.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 1, 0, 1, 4);
    block2.toString().should.equal("5 6 7 8");
    var rvec = RowVector(block2.cols())
      .set([
        2, 6, 10, 14
      ]);

    var rvec2 = block2.add(rvec);
    rvec2.should.instanceOf(Matrix);
    rvec2.toString().should.equal(" 7 12 17 22");
  });

  it('#add() should return a CMatrix with the sum of a matrix block and a complex matrix', function() {
    block.add.should.be.a.Function;

    var cmat = CMatrix(2, 2).set([
      -1,  -2,
      -3,  -4
    ]);
    block.add(cmat).toString().should.equal("(5,0) (5,0)\n(7,0) (7,0)");

    (function() {
      block.add(CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a matrix block and a complex vector', function() {
    block.add.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 0, 1, 4, 1);
    block2.toString().should.equal(" 2\n 6\n10\n14");
    var cvec = CVector(block2.rows())
      .set([
         2,
         6,
        10,
        14
      ]);

    var cvec2 = block2.add(cvec);
    cvec2.should.instanceOf(CMatrix);
    cvec2.toString().should.equal(" (4,0)\n(12,0)\n(20,0)\n(28,0)");
  });

  it('#add() should return the sum of a matrix block and a complex row-vector', function() {
    block.add.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 1, 0, 1, 4);
    block2.toString().should.equal("5 6 7 8");
    var crvec = CRowVector(block2.cols())
      .set([
        2, 6, 10, 14
      ]);

    var crvec2 = block2.add(crvec);
    crvec2.should.instanceOf(CMatrix);
    crvec2.toString().should.equal(" (7,0) (12,0) (17,0) (22,0)");
  });

  it('#adda() should return the sum of two matrix blocks and saves it back', function() {
    block.adda.should.be.a.Function;

    block.toString().should.equal(" 6  7\n10 11");

    var block2 = MatrixBlock(mat, 0, 0, 2, 2);
    block2.toString().should.equal("1 2\n5 6");

    block.adda(block2);
    block.toString().should.equal(" 7  9\n15 18");
    block2.toString().should.equal("1 2\n5 7");

    mat.toString().should.equal(" 1  2  3  4\n 5  7  9  8\n 9 15 18 12\n13 14 15 16");
  });

  it('#adda() should return the sum of a matrix block and a matrix and saves it back', function() {
    block.adda.should.be.a.Function;

    block.toString().should.equal(" 6  7\n10 11");

    block.adda(
      Matrix(2, 2)
        .set([
          -2, -4,
          -6, -8
        ])
    );
    block.toString().should.equal("4 3\n4 3");

    (function() {
      block.adda(
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
      block.adda(cmat);
    }).should.throw("Invalid argument");
  });

  it('#adda() should return the sum of a matrix block and a vector and saves it back', function() {
    block.adda.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 0, 2, 4, 1);
    block2.toString().should.equal(" 3\n 7\n11\n15");

    block2.adda(
      Vector(block2.rows())
      .set([
        -2,
        -4,
        -6,
        -8
      ])
    );
    block2.toString().should.equal("1\n3\n5\n7");

    (function() {
      block2.adda(
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
      block2.adda(cmat);
    }).should.throw("Invalid argument");
  });

  it('#adda() should return the sum of a matrix block and a row-vector and saves it back', function() {
    block.adda.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 2, 0, 1, 4);
    block2.toString().should.equal(" 9 10 11 12");

    block2.adda(
      RowVector(block2.cols())
      .set([
        -2, -4, -6, -8
      ])
    );
    block2.toString().should.equal("7 6 5 4");

    (function() {
      block2.adda(
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
      block2.adda(cmat);
    }).should.throw("Invalid argument");
  });

  it('#sub() should return the difference of two matrix block', function() {
    block.sub.should.be.a.Function;

    block.toString().should.equal(" 6  7\n10 11");

    var block2 = MatrixBlock(mat, 0, 0, 2, 2);
    block2.toString().should.equal("1 2\n5 6");

    var mat2 = block.sub(block2);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("5 5\n5 5");
  });

  it('#sub() should return the difference of a matrix block and a matrix', function() {
    block.sub.should.be.a.Function;

    block.toString().should.equal(" 6  7\n10 11");

    var mat2 = block.sub(new Matrix(2, 2).set([
      1, 2,
      3, 4
    ]));
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("5 5\n7 7");

    (function() {
      block.sub(new Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a matrix block and a vector', function() {
    block.sub.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 0, 0, 4, 1);
    block2.toString().should.equal(" 1\n 5\n 9\n13");

    var vec = block2.sub(new Vector([
      1,
      2,
      3,
      4
    ]));
    vec.should.instanceOf(Matrix);
    vec.toString().should.equal("0\n3\n6\n9");

    (function() {
      block2.sub(new Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a matrix block and a row-vector', function() {
    block.sub.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 0, 0, 1, 4);
    block2.toString().should.equal("1 2 3 4");

    var rvec = block2.sub(new RowVector([
      1, 2, 3, 4
    ]));
    rvec.should.instanceOf(Matrix);
    rvec.toString().should.equal("0 0 0 0");

    (function() {
      block2.sub(new Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a matrix block and a complex matrix', function() {
    block.sub.should.be.a.Function;

    var cmat = CMatrix(2, 2).set([
      Complex(2, 0), Complex(4, 1), 
      Complex(6, 2), Complex(8, 4)
    ]);

    var cmat2 = block.sub(cmat);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal(" (4,0) (3,-1)\n(4,-2) (3,-4)");

    (function() {
      block.sub(
        CMatrix(2, 3).set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a matrix block and a complex vector', function() {
    block.sub.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 0, 0, 4, 1);
    block2.toString().should.equal(" 1\n 5\n 9\n13");

    var cvec = CVector([
      Complex(2, 0),
      Complex(4, 1), 
      Complex(6, 2),
      Complex(8, 4)
    ]);

    var cmat2 = block2.sub(cvec);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(-1,0)\n(1,-1)\n(3,-2)\n(5,-4)");

    (function() {
      block2.sub(
        CMatrix(2, 3).set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a matrix block and a complex row-vector', function() {
    block.sub.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 0, 0, 1, 4);
    block2.toString().should.equal("1 2 3 4");

    var crvec = CRowVector([
      Complex(2, 0), Complex(4, 1), Complex(6, 2), Complex(8, 4)
    ]);

    var cmat2 = block2.sub(crvec);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal(" (-1,0) (-2,-1) (-3,-2) (-4,-4)");

    (function() {
      block2.sub(
        CMatrix(3, 2).set([
          1, 0,
          0, 1,
          0, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the sum of two matrix blocks  and saves it back', function() {
    block.suba.should.be.a.Function;

    block.toString().should.equal(" 6  7\n10 11");

    var block2 = MatrixBlock(mat, 0, 0, 2, 2);
    block2.toString().should.equal("1 2\n5 6");

    block.suba(block2);
    block.toString().should.equal("5 5\n5 6");
    block2.toString().should.equal("1 2\n5 5");

    mat.toString().should.equal(" 1  2  3  4\n 5  5  5  8\n 9  5  6 12\n13 14 15 16");
  });

  it('#suba() should return the difference of a matrix block and a matrix then saves it back', function() {
    block.suba.should.be.a.Function;

    var mat2 = Matrix(2, 2)
    .set([
      1, 3,
      5, 7
    ]);
    block.suba(mat2);
    block.toString().should.equal("5 4\n5 4");

    (function() {
      block.suba(
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
      block.suba(cmat);
    }).should.throw("Invalid argument");
  });

  it('#suba() should return the difference of a matrix block and a vector then saves it back', function() {
    block.suba.should.be.a.Function;

    var block2 = MatrixBlock(mat, 0, 2, 4, 1);
    block2.toString().should.equal(" 3\n 7\n11\n15");

    var vec = new Vector([
      1,
      3,
      5,
      7
    ]);
    block2.suba(vec);
    block2.toString().should.equal("2\n4\n6\n8");

    mat.toString().should.equal(" 1  2  2  4\n 5  6  4  8\n 9 10  6 12\n13 14  8 16");
  });

  it('#mul() should return the product of two matrix blocks', function() {
    block.mul.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 0, 0, 2, 2);
    block2.toString().should.equal("1 2\n5 6");

    var mat2 = block.mul(block2);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("41 54\n65 86");

    (function() {
      block.mul(MatrixBlock(mat, 0, 0, 3, 2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a matrix block and a matrix', function() {
    block.mul.should.be.a.Function;

    var mat2 = block.mul(new Matrix(2, 2).set([
      1, 2,
      3, 4
    ]));
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("27 40\n43 64");

    (function() {
      block.mul(Matrix(3, 2));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a matrix block and a vector', function() {
    block.mul.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 3, 1, 1, 3);
    block2.toString().should.equal("14 15 16");

    var vec = new Vector([
      1,
      2,
      3
    ]);
    var mat2 = block2.mul(vec);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("92");

    (function() {
      block.mul(vec);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a matrix block and a row-vector', function() {
    block.mul.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 1, 3, 3, 1);
    block2.toString().should.equal(" 8\n12\n16");

    var rvec = new RowVector([1, 2, 3]);
    var mat2 = block2.mul(rvec);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal(" 8 16 24\n12 24 36\n16 32 48");

    (function() {
      block.mul(rvec);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a matrix block and a complex matrix', function() {
    block.mul.should.be.a.Function;

    var cmat = new CMatrix(2, 2).set([
      Complex(1, 1), Complex(2, 2),
      Complex(3, 3), Complex(4, 4)
    ]);
    var cmat2 = block.mul(cmat);
    cmat2.should.instanceOf(CMatrix);
    cmat2.toString().should.equal("(27,27) (40,40)\n(43,43) (64,64)");

    (function() {
      block.mul(new CMatrix(3, 3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a matrix block and a complex vector', function() {
    block.mul.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 0, 0, 1, 3);
    block2.toString().should.equal("1 2 3");

    var cvec = new CVector(3).set([
      Complex(1, 1),
      Complex(2, 2),
      Complex(3, 3)
    ]);
    var cmat = block2.mul(cvec);
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("(14,14)");

    (function() {
      block.mul(new CVector(1));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a matrix block and a complex row-vector', function() {
    block.mul.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 0, 0, 3, 1);
    block2.toString().should.equal("1\n5\n9");

    var crvec = new CRowVector(3).set([
      Complex(1, 1), Complex(2, 2), Complex(3, 3)
    ]);
    var cmat = block2.mul(crvec);
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("  (1,1)   (2,2)   (3,3)\n  (5,5) (10,10) (15,15)\n  (9,9) (18,18) (27,27)");

    (function() {
      block.mul(new CRowVector(3));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a matrix block and a scalar value', function() {
    block.mul.should.be.a.Function;

    var mat2 = block.mul(-1);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal(" -6  -7\n-10 -11");
  });

  it('#mul() should return the product of a matrix block and a complex value', function() {
    block.mul.should.be.a.Function;

    var cmat = block.mul(Complex(-1));
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal(" (-6,0)  (-7,0)\n(-10,0) (-11,0)");
  });

  it('#mula() should return the product of two matrix block and saves it back', function() {
    block.mula.should.be.a.Function;

    var block2 = new MatrixBlock(mat, 0, 0, 1, 3);
    block2.toString().should.equal("1 2 3");
    var block3 = new MatrixBlock(mat, 1, 1, 3, 3);
    block3.toString().should.equal(" 6  7  8\n10 11 12\n14 15 16");

    block2.mula(block3);
    block2.toString().should.equal("68 74 80");

    mat.toString().should.equal("68 74 80  4\n 5  6  7  8\n 9 10 11 12\n13 14 15 16");

    (function() {
      block3.mula(new MatrixBlock(mat, 0, 0, 3, 2));
    }).should.throw("The matrix block size must be mxm");
  });

  it('#mula() should return the product of a matrix block and a matrix then saves it back', function() {
    block.mula.should.be.a.Function;

    block.mula(new Matrix(2, 2).set([
      -1, -2,
      -3, -4
    ]));
    block.toString().should.equal("-27 -40\n-43 -64");

    mat.toString().should.equal("  1   2   3   4\n  5 -27 -40   8\n  9 -43 -64  12\n 13  14  15  16");

    (function() {
      block.mula(new Vector([
        -1,
        -2
      ]))
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a matrix block and a vector then saves it back', function() {
    block.mula.should.be.a.Function;

    var block2 = MatrixBlock(mat, 0, 0, 1, 1);
    block2.toString().should.equal("1");

    block2.mula(new Vector([-1]));
    block2.toString().should.equal("-1");

    mat.toString().should.equal("-1  2  3  4\n 5  6  7  8\n 9 10 11 12\n13 14 15 16");

    (function() {
      block.mula(new Vector([
        -1,
        -2
      ]))
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a matrix block and a row-vector then saves it back', function() {
    block.mula.should.be.a.Function;

    var block2 = MatrixBlock(mat, 0, 0, 1, 1);
    block2.toString().should.equal("1");

    block2.mula(new RowVector([-1]));
    block2.toString().should.equal("-1");

    mat.toString().should.equal("-1  2  3  4\n 5  6  7  8\n 9 10 11 12\n13 14 15 16");

    (function() {
      block2.mula(new RowVector([
        -1, -2
      ]))
    }).should.throw("The operation result is out of range");
  });

  it('#mula() should return the product of a matrix block and a scalar value then saves it back', function() {
    block.mula.should.be.a.Function;

    block.mula(-1);
    mat.toString().should.equal("  1   2   3   4\n  5  -6  -7   8\n  9 -10 -11  12\n 13  14  15  16");
  });

  it('#div() should return a Matrix which be divied by a scalar value', function() {
    block.div.should.be.a.Function;

    var mat2 = block.div(0);
    mat2.equals(
      new Matrix(2, 2)
      .set([
        Infinity, Infinity,
        Infinity, Infinity
      ])
    ).should.ok;
    block.div(2).toString().should.equal("  3 3.5\n  5 5.5");
  });

  it('#div() should return a Matrix which be divied by a complex value', function() {
    block.div.should.be.a.Function;

    var cmat = block.div(Complex(2, 0));
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("  (3,0) (3.5,0)\n  (5,0) (5.5,0)");
  });

  it('#diva() should return a Matrix which be divied by a scalar value then saves it back', function() {
    block.diva.should.be.a.Function;

    block.diva(0);
    block.equals(
      new Matrix(2, 2)
      .set([
        Infinity, Infinity,
        Infinity, Infinity
      ])
    ).should.ok;
    block.get(0, 0).should.be.a.Infinity;

    mat.toString().should.equal("  1   2   3   4\n  5 inf inf   8\n  9 inf inf  12\n 13  14  15  16");
  });

  it('#equals() should return true if two matrix block are equal', function() {
    block.equals.should.be.a.Function;

    var mat2 = new Matrix.Identity(4, 4);
    var block2 = MatrixBlock(mat2, 0, 0, 2, 2);
    var block3 = MatrixBlock(mat2, 2, 2, 2, 2);

    block2.equals(block3).should.ok;
  });

  it('#equals() should return true if a matrix block and a matrix are equal', function() {
    block.equals.should.be.a.Function;

    var mat2 = new Matrix.Identity(4, 4);
    var block2 = MatrixBlock(mat2, 0, 0, 2, 2);
    var block3 = MatrixBlock(mat2, 2, 2, 2, 2);

    block2.equals(block3).should.ok;
  });

  it('#equals() should return true if a matrix block and a vector are equal', function() {
    block.equals.should.be.a.Function;

    var block2 = MatrixBlock(mat, 0, 0, 4, 1);
    block2.toString().should.equal(" 1\n 5\n 9\n13");

    var vec = new Vector([
       1,
       5,
       9,
      13
    ]);

    block2.equals(vec).should.ok;
  });

  it('#equals() should return true if a matrix block and a row-vector are equal', function() {
    block.equals.should.be.a.Function;

    var block2 = MatrixBlock(mat, 0, 0, 1, 4);
    block2.toString().should.equal("1 2 3 4");

    var rvec = new RowVector([
      1, 2, 3, 4
    ]);

    block2.equals(rvec).should.ok;
  });

  it('#isApprox() should return true if this is approximately equal to other', function() {
    block.isApprox.should.be.a.Function;

    block.diva(99);
    block.toString().should.equal("0.0606061 0.0707071\n  0.10101  0.111111");

    var mat2 = new Matrix(2, 2).set([
      0.061, 0.071,
      0.101, 0.111
    ]);

    block.isApprox(mat2, 1e-3).should.false;
    block.isApprox(mat2, 1e-2).should.true;

    (function() {
      block.isApprox(
        new Matrix(1, 1).set([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isApprox() should return true if this is approximately equal to a vector', function() {
    block.isApprox.should.be.a.Function;

    var block2 = MatrixBlock(mat, 0, 0, 4, 1);
    block2.toString().should.equal(" 1\n 5\n 9\n13");

    block2.diva(99);
    block2.toString().should.equal(" 0.010101\n0.0505051\n0.0909091\n 0.131313");

    var vec = new Vector([
      0.010,
      0.051,
      0.091,
      0.131
    ]);

    block2.isApprox(vec, 1e-3).should.false;
    block2.isApprox(vec, 1e-2).should.true;

    (function() {
      block2.isApprox(
        new Vector([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isApprox() should return true if this is approximately equal to a row-vector', function() {
    block.isApprox.should.be.a.Function;

    var block2 = MatrixBlock(mat, 0, 0, 1, 4);
    block2.toString().should.equal("1 2 3 4");

    block2.diva(9);
    block2.toString().should.equal("0.111111 0.222222 0.333333 0.444444");

    var rvec = new RowVector([
      0.111, 0.222, 0.333, 0.444
    ]);

    block2.isApprox(rvec, 1e-3).should.false;
    block2.isApprox(rvec, 1e-2).should.true;

    (function() {
      block2.isApprox(
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

    mat = MatrixBlock.Identity(3);
    mat.equals(new Matrix(3, 3).set([
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ])).should.true;

    var mat2 = MatrixBlock.Identity(3, 4);
    mat2.equals(new Matrix(3, 4).set([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0
    ])).should.true;

    (function() {
      mat.equals(mat2);
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
