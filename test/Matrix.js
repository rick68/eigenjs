const
    Eigen = require('../index.js'),
    Complex = Eigen.Complex,
    Matrix = Eigen.Matrix,
    Vector = Eigen.Vector,
    CMatrix = Eigen.CMatrix,
    MatrixBlock = Eigen.MatrixBlock,
    RowVector = Eigen.RowVector,
    PartialPivLU = Eigen.PartialPivLU,
    FullPivLU = Eigen.FullPivLU,
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
  });

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

  it('#Matrix() should created by Matrix', function() {
    var mat2 = new Matrix(mat);
    mat2.equals(mat).should.be.true;
  });

  it('#Matrix() should created by MatrixBlock', function() {
    var mblock = mat.block(0, 0, 2, 2);
    var mat2 = new Matrix(mblock);
    mat2.equals(mblock).should.be.true;
  });

  it('#Matrix() should created by Vector', function() {
    var vec = new Vector([
      1,
      2,
      3]);
    var mat2 = new Matrix(vec);
    mat2.toString().should.equal(vec.toString());
  });


  it('#Matrix() should created by VectorBlock', function() {
    var vec = new Vector([
      1,
      2,
      3]);
    var vblock = vec.block(0, 3);
    var mat2 = new Matrix(vblock);
    mat2.toString().should.equal(vblock.toString());
  });

  it('#Matrix() should created by RowVector', function() {
    var rvec = new RowVector([1, 2, 3]);
    var mat2 = new Matrix(rvec);
    mat2.toString().should.equal(rvec.toString());
  });

  it('#Matrix() should created by RowVectorBlock', function() {
    var rvec = new Vector([1, 2, 3]);
    var rvblock = rvec.block(0, 3);
    var mat2 = new Matrix(rvblock);
    mat2.toString().should.equal(rvblock.toString());
  });

  it('#set() should throw message when row or column numbers are out of range', function() {
    mat.set.should.be.a.Function;

    (function() {
      mat.set(3, 0, 68);
    }).should.throw('The row or column number is out of range');
    (function() {
      mat.set(-1, -2, 500);
    }).should.throw('The row or column number is out of range');
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
    }).should.throw('The row or column number is out of range');
  });

  it('#value() should return the unique coefficient of a 1x1 expression', function() {
    mat.value.should.be.a.Function;

    (function(){
      mat.value();
    }).should.throw('The size of row and column values must equal 1');

    var mat2 = new Matrix(1, 1);
    mat2.value().should.equal(0);
  });

  it('#setZero() should set all coefficients to zero', function() {
    mat.setZero.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");
    mat.setZero().toString().should.equal("0 0 0\n0 0 0\n0 0 0");
  });

  it('#setOnes() should set all coefficients to ones', function() {
    mat.setOnes.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");
    mat.setOnes().toString().should.equal("1 1 1\n1 1 1\n1 1 1");
  });

  it('#setConstant() should set all coefficients to constant', function() {
    mat.setConstant.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");
    mat.setConstant(0.6).toString().should.equal("0.6 0.6 0.6\n0.6 0.6 0.6\n0.6 0.6 0.6");

    (function(){
      mat.setConstant(Complex(3, -4));
    }).should.throw('Invalid argument');
  });

  it('#setRandom() should set all coefficients to random', function() {
    mat.setRandom.should.be.a.Function;
    mat.setRandom();
  });

  it('#setIdentity() should write the identity expression into itself', function() {
    mat.setIdentity.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");
    mat.setIdentity().toString().should.equal("1 0 0\n0 1 0\n0 0 1");
  });

  it('#setDiagonal() should set the diagonal to other values', function() {
    mat.setDiagonal.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");
    mat.setDiagonal(0, Vector.Zero(3)).toString().should.equal("0 2 3\n4 0 6\n7 8 0");
    mat.setDiagonal(0, RowVector.Ones(3)).toString().should.equal("1 2 3\n4 1 6\n7 8 1");

    (function(){
      mat.setDiagonal(68, Vector.Random(3));
    }).should.throw('Invalid index argument');

    (function(){
      mat.setDiagonal(-500, RowVector.Random(3));
    }).should.throw('Invalid index argument');
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

  it('#sub() should return a CMatrix with the difference of a matrix and a complex matrix', function() {
    mat.sub.should.be.a.Function;

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

  it('#mul() should return the product of a matrix and a vector', function() {
    mat.mul.should.be.a.Function;

    var vec = new Vector([1, 2, 3]);
    mat.mul(vec).toString().should.equal("14\n32\n50");

    (function() {
      vec.mul(mat);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a matrix and a complex matrix', function() {
    mat.mul.should.be.a.Function;

    var cvector = new CMatrix(3, 1).set([Complex(1, 1), Complex(2, 2), Complex(3, 3)]);
    mat.mul(cvector).toString().should.equal("(14,14)\n(32,32)\n(50,50)");

    (function() {
      cvector.mul(mat);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a matrix and a scalar value', function() {
    mat.mul.should.be.a.Function;

    mat.mul(-1).toString().should.equal("-1 -2 -3\n-4 -5 -6\n-7 -8 -9");
  });

  it('#mul() should return a CMatrix with the product of a matrix and a complex', function() {
    mat.mul.should.be.a.Function;

    var c = new Complex(-1, 0);
    mat.mul(c).toString().should.equal("(-1,0) (-2,0) (-3,0)\n(-4,0) (-5,0) (-6,0)\n(-7,0) (-8,0) (-9,0)");
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

  it('#transpose() should return the transpose of a matrix', function() {
    mat.transpose.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");

    var mat2 = mat.transpose();
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("1 4 7\n2 5 8\n3 6 9");
  });

  it('#conjugate() should return the conjugate of a matrix', function() {
    mat.conjugate.should.be.a.Function;

    var mat2 = mat.conjugate();
    mat2.should.instanceOf(Matrix);
    mat.equals(mat2).should.be.true;
  });

  it('#adjoint() should return the adjoint of a matrix', function() {
    mat.adjoint.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");

    var mat2 = mat.adjoint();
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("1 4 7\n2 5 8\n3 6 9");
  });

  it('#determinant() should return the determinant of a matrix', function() {
    mat.determinant.should.be.a.Function;

    var result = mat.determinant();
    result.should.approximately(0, 1e-3);

    Matrix.Identity(2).determinant().should.equal(1);

    (function() {
      Matrix(3, 2).determinant();
    }).should.throw("The matrix must be square");
  });

  it('#inverse() should return the inverse of a matrix', function() {
    mat.inverse.should.be.a.Function;

    var mat2 = new Matrix(3, 3).set([
      1, 2, 3,
      0, 1, 4,
      5, 6, 0
    ]);

    var mat3 = mat2.inverse();
    mat3.toString().should.equal("-24  18   5\n 20 -15  -4\n -5   4   1");

    mat2.mul(mat3).isApprox(Matrix.Identity(3)).should.be.true;

    (function() {
      Matrix(3, 2).inverse();
    }).should.throw("The matrix must be square");
  });

  it('#trace() should return the trace of a matrix', function() {
    mat.trace.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");

    var trace = mat.trace();
    trace.should.equal(15);
  });

  it('#diagonal() should return the diagonal of a matrix', function() {
    mat.diagonal.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");

    var dia = mat.diagonal();
    dia.should.instanceOf(Vector);
    dia.toString().should.equal("1\n5\n9");
    mat.diagonal(1).toString().should.equal("2\n6");
    mat.diagonal(2).toString().should.equal("3");
    mat.diagonal(-1).toString().should.equal("4\n8");
    mat.diagonal(-2).toString().should.equal("7");

    (function() {
      mat.diagonal(mat.cols());
    }).should.throw("Invalid index argument");

    (function() {
      mat.diagonal(-mat.rows());
    }).should.throw("Invalid index argument");
  });

  it('#norm() should return the Frobenius norm', function() {
    mat.norm.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");

    var sum = 0;

    for (var i = 0; i < mat.cols(); ++i) {
      for (var j = 0; j < mat.rows(); ++j) {
        sum += Math.pow(mat.get(j, i), 2);
      }
    }

    mat.norm().should.equal(Math.pow(sum, 0.5));
  });

  it('#equals() should return true if two matrices are equal', function() {
    mat.equals.should.be.a.Function;

    mat.equals(mat).should.ok;
    mat.equals(new Matrix(3, 3).set([
      1, 2, 3,
      4, 5, 6,
      7, 8, 9
    ])).should.ok;
  });

  it('#equals() should return true if a matrix and a vector are equal', function() {
    mat.equals.should.be.a.Function;

    var mat2 = new Matrix(3, 1).set([
      1,
      2,
      3
    ]);
    mat2.equals(new Vector([
      1,
      2,
      3
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

    (function() {
      mat.isApprox(
        new Matrix(1, 1).set([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isApprox() should return true if this is approximately equal to a vector', function() {
    mat.isApprox.should.be.a.Function;

    var mat2 = new Matrix(3, 1).set([
      1,
      2,
      3
    ]);
    var vec = new Vector([
      0.111,
      0.222,
      0.333
    ])
    mat2.div(9).isApprox(vec, 1e-3).should.false;
    mat2.div(9).isApprox(vec, 1e-2).should.true;

    (function() {
      mat2.isApprox(
        new Vector([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isSquare() should return true if this is square', function() {
    mat.isSquare.should.be.a.Function;

    mat.isSquare().should.be.true;
    Matrix(3, 4).isSquare().should.be.false;
  });

  it('#isZero() should return true if this is zero', function() {
    mat.isZero.should.be.a.Function;

    mat.isZero().should.be.false;

    var mat2 = new Matrix(3, 3).set([
      0,      0, 0.0001,
      0,      0,      0,
      0,      0,      0
    ]);
    mat2.isZero().should.be.false;
    mat2.isZero(1e-4).should.be.true;
  });

  it('#isOnes() should return true if this is ones', function() {
    mat.isOnes.should.be.a.Function;

    mat.isOnes().should.be.false;

    var mat2 = new Matrix(3, 3).set([
      1,      1, 1.0001,
      1, 0.9997,      1,
      1,      1,      1
    ]);
    mat2.isOnes().should.be.false;
    mat2.isOnes(1e-4).should.be.false;
    mat2.isOnes(1e-3).should.be.true;
  });

  it('#isIdentity() should return true if this is identity', function() {
    mat.isIdentity.should.be.a.Function;

    mat.isIdentity().should.be.false;

    var mat2 = new Matrix(3, 3).set([
      1,      0, 0.0001,
      0,      1,      0,
      0,      0,      1
    ]);
    mat2.isIdentity().should.be.false;
    mat2.isIdentity(1e-5).should.be.false;
    mat2.isIdentity(1e-4).should.be.true;
  });

  it('#isDiagonal() should return true if this is diagonal', function() {
    mat.isDiagonal.should.be.a.Function;

    mat.isDiagonal().should.be.false;

    var mat2 = new Matrix(3, 3).set([
      1e+04,     0,     1,
          0, 1e+04,     0,
          0,     0, 1e+04
    ]);
    mat2.isDiagonal().should.be.false;
    mat2.isDiagonal(1e-5).should.be.false;
    mat2.isDiagonal(1e-4).should.be.true;
  });

  it('#all() should return true if all coefficients are true', function() {
    mat.all.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");
    mat.all().should.be.true;
    mat.set(0, 0, 0);
    mat.toString().should.equal("0 2 3\n4 5 6\n7 8 9");
    mat.all().should.be.false;
  });

  it('#any() should return true if at least one coefficient is true', function() {
    mat.any.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");
    mat.any().should.be.true;
    mat.setZero();
    mat.toString().should.equal("0 0 0\n0 0 0\n0 0 0");
    mat.any().should.be.false;
  });

  it('#count() should return the number of coefficients which evaluate to true', function() {
    mat.count.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");
    mat.count().should.equal(9);
    mat.setZero();
    mat.toString().should.equal("0 0 0\n0 0 0\n0 0 0");
    mat.count().should.equal(0);
  });

  it('#allFinite() should return true if it contains only finite numbers, i.e., no NaN and no +/-INF values', function() {
    mat.allFinite.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");
    mat.allFinite().should.be.true;
    mat.set(0, 0, NaN);
    mat.allFinite().should.be.false;
  });

  it('#hasNaN() should return true is it contains at leas one Not A Number (NaN)', function() {
    mat.hasNaN.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");
    mat.hasNaN().should.be,false;
    mat.set(0, 0, NaN);
    mat.hasNaN().should.be.true;
  });

  it('#Zero() should return a zero matrix', function() {
    Matrix.Zero.should.be.a.Function;

    Matrix.Zero(3, 3).toString().should.equal("0 0 0\n0 0 0\n0 0 0");

    Matrix.Zero(3).toString().should.equal("0 0 0\n0 0 0\n0 0 0");

    Matrix.Zero(3, 4).equals(
      new Matrix(3, 4).set([
        0, 0, 0, 0,
        0, 0, 0, 0,
        0, 0, 0, 0
      ])
    ).should.true;
  });

  it('#Ones() should return a ones matrix', function() {
    Matrix.Ones.should.be.a.Function;

    Matrix.Ones(3, 3).toString().should.equal("1 1 1\n1 1 1\n1 1 1");

    Matrix.Ones(3).toString().should.equal("1 1 1\n1 1 1\n1 1 1");

    Matrix.Ones(3, 4).equals(
      new Matrix(3, 4).set([
        1, 1, 1, 1,
        1, 1, 1, 1,
        1, 1, 1, 1
      ])
    ).should.true;
  });

  it('#Constant() should return a Matrix with constant values', function() {
    Matrix.Constant.should.be.a.Function;

    var mat2 = Matrix.Constant(4, 4, 0.6);
    mat2.should.instanceOf(Matrix);
    mat2.toString().should.equal("0.6 0.6 0.6 0.6\n0.6 0.6 0.6 0.6\n0.6 0.6 0.6 0.6\n0.6 0.6 0.6 0.6");

    var cmat = Matrix.Constant(4, 4, Complex(0.6, 0));
    cmat.should.instanceOf(CMatrix);
    cmat.toString().should.equal("(0.6,0) (0.6,0) (0.6,0) (0.6,0)\n(0.6,0) (0.6,0) (0.6,0) (0.6,0)\n(0.6,0) (0.6,0) (0.6,0) (0.6,0)\n(0.6,0) (0.6,0) (0.6,0) (0.6,0)");
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

    var mat2 = Matrix.Identity(3, 4);
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
    Matrix.Random.should.be.a.Function;

    var mat2 = Matrix.Random(3);
    mat2.rows().should.equal(3);
    mat2.cols().should.equal(3);

    var mat3 = Matrix.Random(3, 4);
    mat3.rows().should.equal(3);
    mat3.cols().should.equal(4);
  });

  it("#block() should return a matrix block", function() {
    mat.block.should.be.a.Function;

    var mblock = mat.block(0, 0, 2, 2);
    mblock.should.instanceOf(MatrixBlock);
    mblock.toString().should.equal("1 2\n4 5");

    mblock.assign(Matrix(2, 2).set([
      -1, -2,
      -3, -4
    ]));

    mat.toString().should.equal("-1 -2  3\n-3 -4  6\n 7  8  9");
  });

  it("#row() should return a row matrix of the matrix", function() {
    mat.row.should.be.a.Function;

    var row = mat.row(0);
    row.should.instanceOf(MatrixBlock);
    row.toString().should.equal("1 2 3");

    (function() {
      mat.row(3);
    }).should.throw("The row or column number is out of range");
  });

  it("#col() should return a column matrix of the matrix", function() {
    mat.col.should.be.a.Function;

    var col = mat.col(0);
    col.should.instanceOf(MatrixBlock);
    col.toString().should.equal("1\n4\n7");

    (function() {
      mat.col(3);
    }).should.throw("The row or column number is out of range");
  });

  it("#topRows() should return a block consisting of the top rows of it", function() {
    mat.topRows.should.be.a.Function;

    var mblock = mat.topRows(2);
    mblock.should.instanceOf(MatrixBlock);
    mblock.toString().should.equal("1 2 3\n4 5 6");

    (function() {
      mat.topRows(4);
    }).should.throw("Invalid argument");

    (function() {
      mat.topRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRows() should return a block consisting of the bottom rows of it", function() {
    mat.bottomRows.should.be.a.Function;

    var mblock = mat.bottomRows(2);
    mblock.should.instanceOf(MatrixBlock);
    mblock.toString().should.equal("4 5 6\n7 8 9");

    (function() {
      mat.bottomRows(4);
    }).should.throw("Invalid argument");

    (function() {
      mat.bottomRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleRows() should return a block consisting of a range of rows of it", function() {
    mat.middleRows.should.be.a.Function;

    var mblock = mat.middleRows(1, 1);
    mblock.should.instanceOf(MatrixBlock);
    mblock.toString().should.equal("4 5 6");

    (function() {
      mat.middleRows(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      mat.middleRows(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#leftCols() should return a block consisting of the left columns of it", function() {
    mat.leftCols.should.be.a.Function;

    var mblock = mat.leftCols(2);
    mblock.should.instanceOf(MatrixBlock);
    mblock.toString().should.equal("1 2\n4 5\n7 8");

    (function() {
      mat.leftCols(4);
    }).should.throw("Invalid argument");

    (function() {
      mat.leftCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#rightCols() should return a block consisting of the right columns of it", function() {
    mat.rightCols.should.be.a.Function;

    var mblock = mat.rightCols(2);
    mblock.should.instanceOf(MatrixBlock);
    mblock.toString().should.equal("2 3\n5 6\n8 9");

    (function() {
      mat.rightCols(4);
    }).should.throw("Invalid argument");

    (function() {
      mat.rightCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleCols() should return a block consisting of a range of columns of it", function() {
    mat.middleCols.should.be.a.Function;

    var mblock = mat.middleCols(1, 1);
    mblock.should.instanceOf(MatrixBlock);
    mblock.toString().should.equal("2\n5\n8");

    (function() {
      mat.middleCols(4, 1);
    }).should.throw("Invalid argument");

    (function() {
      mat.middleCols(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topLeftCorner() should return a block consisting of a top-left corner of it", function() {
    mat.topLeftCorner.should.be.a.Function;

    var mblock = mat.topLeftCorner(2, 2);
    mblock.should.instanceOf(MatrixBlock);
    mblock.toString().should.equal("1 2\n4 5");

    (function() {
      mat.topLeftCorner(4, 4);
    }).should.throw("Invalid argument");

    (function() {
      mat.topLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topRightCorner() should return a block consisting of a top-right corner of it", function() {
    mat.topRightCorner.should.be.a.Function;

    var mblock = mat.topRightCorner(2, 2);
    mblock.should.instanceOf(MatrixBlock);
    mblock.toString().should.equal("2 3\n5 6");

    (function() {
      mat.topRightCorner(4, 4);
    }).should.throw("Invalid argument");

    (function() {
      mat.topRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomLeftCorner() should return a block consisting of a bottom-left corner of it", function() {
    mat.bottomLeftCorner.should.be.a.Function;

    var mblock = mat.bottomLeftCorner(2, 2);
    mblock.should.instanceOf(MatrixBlock);
    mblock.toString().should.equal("4 5\n7 8");

    (function() {
      mat.bottomLeftCorner(4, 4);
    }).should.throw("Invalid argument");

    (function() {
      mat.bottomLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRightCorner() should return a block consisting of a bottom-right corner of it", function() {
    mat.bottomRightCorner.should.be.a.Function;

    var mblock = mat.bottomRightCorner(2, 2);
    mblock.should.instanceOf(MatrixBlock);
    mblock.toString().should.equal("5 6\n8 9");

    (function() {
      mat.bottomRightCorner(4, 4);
    }).should.throw("Invalid argument");

    (function() {
      mat.bottomRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#replicate() should return a matrix which is replicated", function() {
    mat.replicate.should.be.a.Function;

    mat.replicate(0, 0).toString().should.equal("");
    mat.replicate(0, 1).toString().should.equal("");
    mat.replicate(1, 0).toString().should.equal("");
    mat.replicate(1, 1).toString().should.equal("1 2 3\n4 5 6\n7 8 9");
    mat.replicate(2, 1).toString().should.equal("1 2 3\n4 5 6\n7 8 9\n1 2 3\n4 5 6\n7 8 9");
    mat.replicate(1, 2).toString().should.equal("1 2 3 1 2 3\n4 5 6 4 5 6\n7 8 9 7 8 9");
    mat.replicate(2, 2).toString().should.equal("1 2 3 1 2 3\n4 5 6 4 5 6\n7 8 9 7 8 9\n1 2 3 1 2 3\n4 5 6 4 5 6\n7 8 9 7 8 9");

    (function() {
      mat.replicate(-1, 0);
    }).should.throw("Invalid argument");
  });

  it("#redux() should return a full redux operation on the whole matrix", function() {
    mat.redux.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");

    var result = mat.redux(function(a, b){
      return a + b;
    })
    result.should.equal(45);
  });

  it("#sum() should return a full sum operation on the whole matrix", function() {
    mat.sum.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");

    var result = mat.sum();
    result.should.equal(45);
  });

  it("#prod() should return a full product operation on the whole matrix", function() {
    mat.prod.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");

    var result = mat.prod();
    result.should.equal(362880);
  });

  it("#mean() should return the mean of all coefficients", function() {
    mat.mean.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");

    var result = mat.mean();
    result.should.equal(5);
  });

  it("#visit() should apply the visitor operation on the whole matrix", function() {
    mat.visit.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");

    var sum = 0;
    mat.visit(function(scalar, row, col) {
      scalar.should.be.a.Number;
      row.should.be.a.Number;
      col.should.be.a.Number;
      mat.get(row, col).should.equal(scalar);
      sum += scalar;
    });

    mat.sum().should.equal(sum);
  });

  it("#maxCoeff() should return the maximum of all coefficients", function() {
    mat.maxCoeff.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");

    var max = mat.maxCoeff();
    max.should.equal(9);

    var result = {}, max = 0;
    max = mat.maxCoeff(result);
    max.should.equal(9);
    result.should.have.properties('maxCoeff', 'rowId', 'colId');
    JSON.stringify(result).should.equal("{\"maxCoeff\":9,\"rowId\":2,\"colId\":2}");

    var ok = false, max = 0;
    max = mat.maxCoeff(function(rowId, colId) {
	rowId.should.be.a.Number;
	colId.should.be.a.Number;
	rowId.should.equal(result.rowId);
	colId.should.equal(result.colId);
	ok = true;
    });
    max.should.equal(9);
    ok.should.be.true;
  });

  it("#minCoeff() should return the minimum of all coefficients", function() {
    mat.minCoeff.should.be.a.Function;

    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");

    var min = mat.minCoeff();
    min.should.equal(1);

    var result = {}, min = 0;
    min = mat.minCoeff(result);
    min.should.equal(1);
    result.should.have.properties('minCoeff', 'rowId', 'colId');
    JSON.stringify(result).should.equal("{\"minCoeff\":1,\"rowId\":0,\"colId\":0}");

    var ok = false, min = 0;
    min = mat.minCoeff(function(rowId, colId) {
	rowId.should.be.a.Number;
	colId.should.be.a.Number;
	rowId.should.equal(result.rowId);
	colId.should.equal(result.colId);
	ok = true;
    });
    min.should.equal(1);
    ok.should.be.true;
  });

  it("#partialPivLu() should return a PartialPivLU object", function() {
    mat.partialPivLu.should.be.a.Function;

    var pplu = mat.partialPivLu();
    pplu.should.instanceOf(PartialPivLU);

    (function() {
      Matrix.Random(1, 2).partialPivLu();
    }).should.throw("PartialPivLU is only for square (and moreover invertible) matrices");
  });

  it("#fullPivLu() should return a FullPivLU object", function() {
    mat.partialPivLu.should.be.a.Function;

    var fplu = mat.fullPivLu();
    fplu.should.instanceOf(FullPivLU);
  });
});
