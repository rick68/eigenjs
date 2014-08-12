const
    Eigen = require('../index.js'),
    Matrix = Eigen.Matrix,
    Complex = Eigen.Complex,
    CMatrix = Eigen.CMatrix,
    should = require('should');

describe('Matrix', function() {
  var mat;

  it('#Matrix() should be a function', function() {
    Matrix.should.be.a.Function;
  });

  it('should throw error when tried creating a matrix without rows and columns arguments', function() {
    (function() { new Matrix(); }).should.throw('Tried creating a matrix without rows and columns arguments');
    (function() { new Matrix(1); }).should.throw('Tried creating a matrix without rows and columns arguments');
    (function() { new Matrix(1, 2); }).should.not.throw();
  });

  it('should be invoked with arguments rows and columns and return an object', function() {
    Matrix(1,2).should.be.an.Object;
    (new Matrix(3, 4)).should.be.an.Object;
  });

  it('#Matrix(3, 2) should return the matrix of size 3x2', function() {
    mat = Matrix(3, 2);
    mat.rows().should.equal(3);
    mat.cols().should.equal(2);
  })

  beforeEach(function() {
    mat = Matrix(3, 3)
      .set(0, 0, 1)
      .set(0, 1, 2)
      .set(0, 2, 3)
      .set(1, 0, 4)
      .set(1, 1, 5)
      .set(1, 2, 6)
      .set(2, 0, 7)
      .set(2, 1, 8)
      .set(2, 2, 9);
  });

  it('#set() should throw message when row or column nubers are out of range', function() {
    mat.set.should.be.a.Function;

    (function() {
      mat.set(3, 0, 68);
    }).should.throw('Row or column numbers are out of range');
    (function() {
      mat.set(-1, -2, 500);
    }).should.throw('Row or column numbers are out of range');
  });

  it('#set() with array argument should work ok', function() {
    mat.set.should.be.a.Function;

    Matrix(3, 3).set([
      1, 2, 3,
      4, 5, 6,
      7, 8, 9
    ]).toString().should.eql(mat.toString());

    (function() {
      Matrix(3, 3).set([
        1, 2, 3,
        4, 5, 6
      ]);
    }).should.throw('Too few coefficients');

    (function() {
      Matrix(3, 3).set([
         1,  2,  3,
         4,  5,  6,
         7,  8,  9,
        10, 11, 12
      ]);
    }).should.throw('Too many coefficients');
  });

  it('#get() should return the element value of Matrix', function() {
    mat.get.should.be.a.Function;

    mat.get(0, 0).should.equal(1);
    mat.get(0, 1).should.equal(2);
    mat.get(0, 2).should.equal(3);
    mat.get(1, 0).should.equal(4);
    mat.get(1, 1).should.equal(5);
    mat.get(1, 2).should.equal(6);
    mat.get(2, 0).should.equal(7);
    mat.get(2, 1).should.equal(8);
    mat.get(2, 2).should.equal(9);
    (function(){
      mat.get(3, 0);
    }).should.throw('Row or column numbers are out of range');
  });

  it('#toString() should return all element values of Matrix', function() {
    mat.toString.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");
  });

  it('#add() should return the sum of two matrices', function() {
    mat.add.should.be.a.Function;

    Matrix(3, 3).set([
       2,  4,  6,
       8,  9, 10,
      11, 12, 13
    ]).add(mat).toString().should.equal(" 3  6  9\n12 14 16\n18 20 22");

    (function() {
      Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]).add(mat);
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return a CMatrix with the sum of a matrix and a complex matrix', function() {
    mat.add.should.be.a.Function;

    var cmat = CMatrix(3, 3).set([
      2,  4,  6,
      8,  9, 10,
     11, 12, 13
    ]);
    mat.add(cmat).toString().should.equal(" (3,0)  (6,0)  (9,0)\n(12,0) (14,0) (16,0)\n(18,0) (20,0) (22,0)");

    (function() {
      Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]).add(mat);
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of two matrices and saves it back', function() {
    mat.adda.should.be.a.Function;

    mat.adda(
      Matrix(3, 3)
      .set([
         2,  4,  6,
         8,  9, 10,
        11, 12, 13
      ])
    );
    mat.toString().should.equal(" 3  6  9\n12 14 16\n18 20 22");

    (function() {
      mat.adda(
        Matrix(2, 3)
        .set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cmat = CMatrix(3, 3).set([
       2,  4,  6,
       8,  9, 10,
      11, 12, 13
    ]);

    (function() {
      mat.adda(cmat);
    }).should.throw("Invalid argument");
  });

  it('#sub() should return the difference of two matrices', function() {
    mat.sub.should.be.a.Function;

    Matrix(3, 3).set([
       1,  3,  5,
       7,  9, 11,
      13, 15, 17
    ]).sub(mat).toString().should.equal("0 1 2\n3 4 5\n6 7 8");

    (function() {
      Matrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]).sub(mat);
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the sum of a matrix and complex matrix', function() {
    mat.add.should.be.a.Function;

    var cmat = CMatrix(3, 3).set([
      Complex( 2, 0), Complex( 4, 1),  Complex(6, 2),
      Complex( 8, 4), Complex( 9, 5), Complex(10, 6),
      Complex(11, 7), Complex(12, 8), Complex(13, 9)
    ]);

    mat.sub(cmat).toString().should.equal(" (-1,0) (-2,-1) (-3,-2)\n(-4,-4) (-4,-5) (-4,-6)\n(-4,-7) (-4,-8) (-4,-9)");

    (function() {
      mat.sub(
        CMatrix(2, 3).set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of two matrices and saves it back', function() {
    mat.suba.should.be.a.Function;

    var mat2 = Matrix(3, 3)
    .set([
       1,  3,  5,
       7,  9, 11,
      13, 15, 17
    ]);
    mat2.suba(mat);
    mat2.toString().should.equal("0 1 2\n3 4 5\n6 7 8");

    (function() {
      mat.suba(
        Matrix(2, 3)
        .set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");

    var cmat = CMatrix(3, 3).set([
       2,  4,  6,
       8,  9, 10,
      11, 12, 13
    ]);

    (function() {
      mat.suba(cmat);
    }).should.throw("Invalid argument");
  });

  it('#mul() should return the product of two matrices', function() {
    mat.mul.should.be.a.Function;

    var vector = new Matrix(3, 1).set([1, 2, 3]);
    mat.mul(vector).toString().should.equal("14\n32\n50");

    (function() {
      vector.mul(mat);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a matrix and a complex matrix', function() {
    mat.mul.should.be.a.Function;

    var cvector = new CMatrix(3, 1).set([Complex(1, 1), Complex(2, 2), Complex(3, 3)]);
    mat.mul(cvector).toString().should.equal("14\n14\n32");

    (function() {
      cvector.mul(mat);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a matrix and a scalar', function() {
    mat.mul.should.be.a.Function;

    mat.mul(-1).toString().should.equal("-1 -2 -3\n-4 -5 -6\n-7 -8 -9");
  });

  it('#mula() should return the product of two matrices and saves it back', function() {
    mat.mula.should.be.a.Function;

    var vector = new Matrix(3, 1).set([1, 2, 3]);
    mat.mula(vector);
    mat.toString().should.equal("14\n32\n50");

    (function() {
      vector.mula(mat);
    }).should.throw("Invalid matrix product");
  });

  it('#mula() should return the product of a matrices and a scalar value then saves it back', function() {
    mat.mula.should.be.a.Function;

    mat.mula(-1);
    mat.toString().should.equal("-1 -2 -3\n-4 -5 -6\n-7 -8 -9");
  });

  it('#mul() should return a CMatrix with the product of a matrix and a complex', function() {
    mat.mul.should.be.a.Function;

    var c = new Complex(-1, 0);
    mat.mul(c).toString().should.equal("(-1,0) (-2,0) (-3,0)\n(-4,0) (-5,0) (-6,0)\n(-7,0) (-8,0) (-9,0)");
  });

  it('#div() should return a Matrix which be divied by a scalar value', function() {
    mat.div.should.be.a.Function;

    var mat2 = mat.div(0);
    mat2.equals(
      new Matrix(3, 3)
      .set([
        Infinity, Infinity, Infinity,
        Infinity, Infinity, Infinity,
        Infinity, Infinity, Infinity
      ])
    ).should.ok;
    mat.div(2).toString().should.equal("0.5   1 1.5\n  2 2.5   3\n3.5   4 4.5");
  });

  it('#div() should return a Matrix which be divied by a complex value', function() {
    mat.div.should.be.a.Function;

    mat.div(Complex(2, 0)).toString().should.equal("(0.5,0)   (1,0) (1.5,0)\n  (2,0) (2.5,0)   (3,0)\n(3.5,0)   (4,0) (4.5,0)");
  });

  it('#diva() should return a Matrix which be divied by a scalar value then saves it back', function() {
    mat.diva.should.be.a.Function;

    mat.diva(0);
    mat.equals(
      new Matrix(3, 3)
      .set([
        Infinity, Infinity, Infinity,
        Infinity, Infinity, Infinity,
        Infinity, Infinity, Infinity
      ])
    ).should.ok;
    mat.get(0, 0).should.be.a.Infinity;
  });

  it('#equals() should return true if two Matrix are equal', function() {
    mat.equals.should.be.a.Function;

    mat.equals(mat).should.ok;
    mat.equals(new Matrix(3, 3).set([
      1, 2, 3,
      4, 5, 6,
      7, 8, 9
    ])).should.ok;
  });

  it('#isApprox() should return true if this is approximately equal to other', function() {
    mat.isApprox.should.be.a.Function;

    var mat2 = new Matrix(3, 3).set([
      0.111, 0.222, 0.333,
      0.444, 0.555, 0.666,
      0.777, 0.888, 0.999
    ]);
    mat.div(9).isApprox(mat2, 1e-3).should.false;
    mat.div(9).isApprox(mat2, 1e-2).should.true;
  });

  it('#Zero() should return a zero matrix', function() {
    Matrix.Zero.should.be.a.Function;

    Matrix.Zero(3, 3).toString().should.equal("0 0 0\n0 0 0\n0 0 0");

    Matrix.Zero(3, 4).equals(
      new Matrix(3, 4).set([
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
      ])
    ).should.true;

    (function() {
      Matrix.Zero(3);
    }).should.throw("Invalid rows or columns arguments");
  });

  it('#Identity() should return a identity matrix', function() {
    Matrix.Identity.should.be.a.Function;

    Matrix.Identity(0).toString().should.equal("");

    mat = Matrix.Identity(3);
    mat.equals(new Matrix(3, 3).set([
      1, 0, 0,
      0, 1, 0,
      0, 0, 1
    ])).should.true;

    mat = Matrix.Identity(3, 4);
    mat.equals(new Matrix(3, 4).set([
      1, 0, 0, 0,
      0, 1, 0, 0,
      0, 0, 1, 0
    ])).should.true;
  });

  it('#Random() should return a matrix with random values', function() {
    Matrix.Random.should.be.a.Function;

    (function() {
      Matrix.Random(3);
    }).should.throw("Invalid rows or columns arguments");
  });
});
