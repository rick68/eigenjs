const
    Eigen = require('../index.js'),
    Vector = Eigen.Vector,
    RowVector = Eigen.RowVector,
    Matrix = Eigen.Matrix,
    CMatrix = Eigen.CMatrix,
    CRowVector = Eigen.CRowVector,
    Complex = Eigen.Complex,
    RowVectorBlock = Eigen.RowVectorBlock,
    CVector = Eigen.CVector,
    should = require('should');

describe('RowVector', function() {
  var rvec;

  it('#RowVector() should be a function', function() {
    RowVector.should.be.a.Function;
  });

  it('should throw error when tried creating a row-vector without size or a scalar array argument', function() {
    (function() { new RowVector(); }).should.throw('Invalid argument');
    (function() { new RowVector(1); }).should.not.throw();
    RowVector(2, 1).toString().should.equal("0");
  });

  it('should be invoked with size argument and return an object', function() {
    RowVector(1).should.be.an.Object;
    (new RowVector(2)).should.be.an.Object;
  });

  it('#RowVector(3) should return the row-vector of size 3', function() {
    rvec = RowVector(3);
    rvec.rows().should.equal(1);
    rvec.cols().should.equal(3);
  });

  it('#RowVector() should return the row-vector with a scalar array', function() {
    rvec = RowVector([1, 2, 3]);
    rvec.rows().should.equal(1);
    rvec.cols().should.equal(3);
    rvec.toString().should.equal("1 2 3");
  });

  beforeEach(function() {
    rvec = RowVector([
      1, 2, 3, 4, 5, 6
    ]);
  });

  it('#RowVector() should created by Matrix', function() {
    var mat = new Matrix.Random(1, 3);
    var rvec2 = new RowVector(mat);
    rvec2.toString().should.equal(mat.toString());

    mat2 = new Matrix.Random(3, 1);
    var rvec3 = new RowVector(mat2);
    rvec3.toString().should.equal(mat2.toString({ rowSeparator: ' ' }));
  });

  it('#RowVector() should created by MatrixBlock', function() {
    var mat = new Matrix.Random(3, 3);
    var mblock = mat.row(0);
    var mblock2 = mat.col(0);

    var rvec2 = new RowVector(mblock);
    rvec2.toString().should.equal(mblock.toString());

    var rvec3 = new RowVector(mblock2);
    rvec3.toString().should.equal(mblock2.toString({ rowSeparator: ' ' }));
  });

  it('#RowVector() should created by Vector', function() {
    var vec = new Vector.Random(3);
    var rvec2 = new RowVector(vec);
    rvec2.toString().should.equal(vec.toString({ rowSeparator: ' ' }));
  });

  it('#RowVector() should created by VectorBlock', function() {
    var vec = new Vector.Random(3);
    var vblock = vec.col(0);

    var rvec2 = new RowVector(vblock);
    rvec2.toString().should.equal(vblock.toString({ rowSeparator: ' ' }));
  });

  it('#RowVector() should created by RowVector', function() {
    var rvec2 = new RowVector(rvec);
    rvec2.equals(rvec).should.be.true;
  });

  it('#RowVector() should created by RowVectorBlock', function() {
    var rvblock = rvec.row(0);
    var rvec2 = new RowVector(rvblock);
    rvec2.equals(rvblock).should.be.true;
  });

  it('#set() should throw message when the row is out of range', function() {
    rvec.set.should.be.a.Function;

    (function() {
      rvec.set(6, 68);
    }).should.throw('The row or column number is out of range');
    (function() {
      rvec.set(-1, 500);
    }).should.throw('The row or column number is out of range');
  });

  it('#set() with array argument should work ok', function() {
    rvec.set.should.be.a.Function;

    RowVector(6).set([
      1,2, 3, 4, 5, 6
    ]).toString().should.eql(rvec.toString());

    (function() {
      RowVector(6).set([
        1, 2, 3
      ]);
    }).should.throw('Too few coefficients');

    (function() {
      Vector(6).set([
         1, 2, 3, 4, 5, 6, 7
      ]);
    }).should.throw('Too many coefficients');
  });

  it('#get() should return the element value of RowVector', function() {
    rvec.get.should.be.a.Function;

    rvec.get(0).should.equal(1);
    rvec.get(1).should.equal(2);
    rvec.get(2).should.equal(3);
    rvec.get(3).should.equal(4);
    rvec.get(4).should.equal(5);
    rvec.get(5).should.equal(6);
    (function(){
      rvec.get(6);
    }).should.throw('The row or column number is out of range');
  });

  it('#value() should return the unique coefficient of a 1x1 expression', function() {
    rvec.value.should.be.a.Function;

    (function(){
      rvec.value();
    }).should.throw('The size of row and column values must equal 1');

    var rvec2 = new RowVector(1);
    rvec2.value().should.equal(0);
  });

  it('#setZero() should set all coefficients to zero', function() {
    rvec.setZero.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvec.setZero().toString().should.equal("0 0 0 0 0 0");
  });

  it('#setOnes() should set all coefficients to ones', function() {
    rvec.setOnes.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvec.setOnes().toString().should.equal("1 1 1 1 1 1");
  });

  it('#setConstant() should set all coefficients to constant', function() {
    rvec.setConstant.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvec.setConstant(0.6).toString().should.equal("0.6 0.6 0.6 0.6 0.6 0.6");

    (function(){
      rvec.setConstant(Complex(3, -4));
    }).should.throw('Invalid argument');
  });

  it('#setRandom() should set all coefficients to random', function() {
    rvec.setRandom.should.be.a.Function;
    rvec.setRandom();
  });

  it('#setIdentity() should write the identity expression into itself', function() {
    rvec.setIdentity.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvec.setIdentity().toString().should.equal("1 0 0 0 0 0");
  });

  it('#setLinSpaced() should set a linearly space into a row-vector', function() {
    rvec.setLinSpaced.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvec.setLinSpaced(0.1, 0.2);
    rvec.toString().should.equal(" 0.1 0.12 0.14 0.16 0.18  0.2");

    rvec.setLinSpaced(2, 0, 1);
    rvec.toString().should.equal("0 1");
    rvec.cols().should.equal(2);

    rvec.setLinSpaced(9, 0, 1);
    rvec.toString().should.equal("    0 0.125  0.25 0.375   0.5 0.625  0.75 0.875     1");
    rvec.cols().should.equal(9);
  });

  it('#setDiagonal() should set the diagonal to other values', function() {
    rvec.setDiagonal.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvec.setDiagonal(0, Vector.Zero(1)).toString().should.equal("0 2 3 4 5 6");
    rvec.setDiagonal(0, RowVector.Ones(1)).toString().should.equal("1 2 3 4 5 6");

    (function(){
      rvec.setDiagonal(68, Vector.Random(1));
    }).should.throw('Invalid index argument');

    (function(){
      rvec.setDiagonal(-500, RowVector.Random(1));
    }).should.throw('Invalid index argument');
  });

  it('#toString() should return all element values of RowVector', function() {
    rvec.toString.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
  });

  it('#add() should return the sum of two row-vector', function() {
    rvec.add.should.be.a.Function;

    RowVector(6).set([
       2, 4, 6, 8, 10, 12
    ]).add(rvec).toString().should.equal(" 3  6  9 12 15 18");

    (function() {
      RowVector(2).set([
        1, 0
      ]).add(rvec);
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a row-vector and a matrix', function() {
    rvec.add.should.be.a.Function;

    rvec.add(
      Matrix(1, 6).set([
       2, 4, 6, 8, 10, 12
      ])
     ).toString().should.equal(" 3  6  9 12 15 18");

    (function() {
      rvec.add(
        Matrix(1, 2).set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a row-vector and a vector', function() {
    rvec.add.should.be.a.Function;

    var rvec2 = RowVector([1]);
    rvec2.add(Vector([2])).toString().should.equal("3");
  });

  it('#add() should return the sum of a row-vector and a complex matrix', function() {
    rvec.add.should.be.a.Function;

    var crvec = rvec.add(
      CMatrix(1, 6).set([
        2, 4, 6, 8, 10, 12
      ])
     );
    crvec.should.instanceOf(CRowVector);
    crvec.toString().should.equal(" (3,0)  (6,0)  (9,0) (12,0) (15,0) (18,0)");

    (function() {
      crvec.add(
        CMatrix(1, 2).set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of two row-vector and saves it back', function() {
    rvec.adda.should.be.a.Function;

    rvec.adda(
      RowVector([ 2, 4, 6, 8, 10, 12 ])
    ).toString().should.equal(" 3  6  9 12 15 18");

    (function() {
      rvec.add(
        RowVector(1, 2).set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a row-vector and a matrix then saves it back', function() {
    rvec.adda.should.be.a.Function;

    rvec.adda(
      Matrix(1, 6)
      .set([ 2, 4, 6, 8, 10, 12 ])
    );
    rvec.toString().should.equal(" 3  6  9 12 15 18");

    var cmat = CMatrix(1, 6).set([
      2, 4, 6, 8, 10, 12
    ]);

    (function() {
      rvec.adda(cmat);
    }).should.throw("Invalid argument");
  });

  it('#adda() should return the sum of a row-vector and a vector then saves it back', function() {
    rvec.adda.should.be.a.Function;

    var rvec2 = RowVector([1]);
    rvec2.adda(Vector([2])).toString().should.equal("3");
  });

  it('#sub() should return the difference of two row-vectors', function() {
    rvec.sub.should.be.a.Function;

    rvec.sub(
      RowVector([ 2, 4, 6, 8, 10, 12 ])
    ).toString().should.equal("-1 -2 -3 -4 -5 -6");

    (function() {
      rvec.sub(RowVector([ 1, 2, 3 ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a row-vector and a matrix', function() {
    rvec.sub.should.be.a.Function;

    rvec.sub(
      Matrix(1, 6).set([ 2, 4, 6, 8, 10, 12 ])
     ).toString().should.equal("-1 -2 -3 -4 -5 -6");

    (function() {
      rvec.sub(
        Matrix(1, 3).set([ 1, 2, 3 ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a row-vector and a vector', function() {
    rvec.sub.should.be.a.Function;

    var rvec2 = RowVector([1]);
    rvec2.sub(Vector([2])).toString().should.equal("-1");
  });

  it('#sub() should return a CMatrix with the difference of a row-vector and a complex matrix', function() {
    rvec.sub.should.be.a.Function;

    var cmat = CMatrix(1, 6).set([
      Complex( 2, 0),
      Complex( 4, 1),
      Complex( 6, 2),
      Complex( 8, 4),
      Complex( 9, 5),
      Complex(10, 6)
    ]);

    var crvec = rvec.sub(cmat);
    crvec.should.instanceOf(CRowVector);
    crvec.toString().should.equal(" (-1,0) (-2,-1) (-3,-2) (-4,-4) (-4,-5) (-4,-6)");

    (function() {
      rvec.sub(
        CMatrix(1, 3).set([
          1, 2, 3
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of two row-vectors and saves it back', function() {
    rvec.suba.should.be.a.Function;

    var rvec2 = RowVector([ 2, 4, 6, 8, 10, 12 ]);
    rvec2.suba(rvec);
    rvec2.toString().should.equal("1 2 3 4 5 6");
  });

  it('#suba() should return the difference of a row-vector and a matrix then saves it back', function() {
    rvec.suba.should.be.a.Function;

    var mat = Matrix(1, 6).set([ 2, 4, 6, 8, 10, 12 ]);
    rvec.suba(mat);
    rvec.toString().should.equal("-1 -2 -3 -4 -5 -6");

    var cmat = CMatrix(1, 6).set([ 2, 4, 6, 8, 10, 12 ]);

    (function() {
      rvec.suba(cmat);
    }).should.throw("Invalid argument");
  });

  it('#suba() should return the difference of a row-vector and a vector then saves it back', function() {
    rvec.suba.should.be.a.Function;

    var rvec2 = RowVector([1]);
    rvec2.suba(Vector([2])).toString().should.equal("-1")
  });

  it('#mul() should return the product of two row-vectors', function() {
    rvec.mul.should.be.a.Function;

    var rvec2 = new RowVector([-1]);
    rvec2.mul(rvec).toString().should.equal("-1 -2 -3 -4 -5 -6");

    (function() {
      rvec.mul(rvec2)
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a row-vector and a matrix', function() {
    rvec.mul.should.be.a.Function;

    var mat = new Matrix(6, 1).set([
       2,
       4,
       6,
       8,
      10,
      12
    ]);
    rvec.mul(mat).toString().should.equal("182");

    (function() {
      rvec.mul(Matrix(1, 3)
        .set([
          2, 4, 6
        ])
      );
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a row-vector and a vector', function() {
    rvec.mul.should.be.a.Function;

    var vec = new Vector([
       2,
       4,
       6,
       8,
      10,
      12
    ]);
    rvec.mul(vec).toString().should.equal("182");

    (function() {
      rvec.mul(Vector([
          2,
          4,
          6
        ])
      );
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a row-vector and a complex matrix', function() {
    rvec.mul.should.be.a.Function;

    var cmat = new CMatrix(6, 1).set([
      Complex(1, 1),
      Complex(2, 2),
      Complex(3, 3),
      Complex(4, 4),
      Complex(5, 5),
      Complex(6, 6)
    ]);
    rvec.mul(cmat).toString().should.equal("(91,91)");
  });

  it('#mul() should return the product of a row-vector and a scalar value', function() {
    rvec.mul.should.be.a.Function;

    rvec.mul(-1).toString().should.equal("-1 -2 -3 -4 -5 -6");
  });

  it('#mul() should return a CMatrix with the product of a row-vector and a complex', function() {
    rvec.mul.should.be.a.Function;

    var c = new Complex(-1, 0);
    rvec.mul(c).toString().should.equal("(-1,0) (-2,0) (-3,0) (-4,0) (-5,0) (-6,0)");
  });

  it('#mula() should return the product of a row-vector and a scalar value then saves it back', function() {
    rvec.mula.should.be.a.Function;

    rvec.mula(-1);
    rvec.toString().should.equal("-1 -2 -3 -4 -5 -6");
  });

  it('#mula() should return the product of a row-vector and a matrix(mxm) then saves it back', function() {
    rvec.mula.should.be.a.Function;

    rvec.mula(Matrix(6, 6).set([
      1, 2, 3, 4,  5,  6,
      2, 3, 4, 5,  6,  7,
      3, 4, 5, 6,  7,  8,
      4, 5, 6, 7,  8,  9,
      5, 6, 7, 8,  9, 10,
      6, 7, 8, 9, 10, 11
    ]));
    rvec.toString().should.equal(" 91 112 133 154 175 196");

    (function() {
      rvec.mula(Matrix(6, 1).set([
        -1,
        -2,
        -3,
        -4,
        -5,
        -6
      ]));
    }).should.throw("The matrix size must be mxm");
  });

  it('#div() should return a RowVector which be divied by a scalar value', function() {
    rvec.div.should.be.a.Function;

    var rvec2 = rvec.div(0);

    rvec2.equals(
      new RowVector(6)
      .set([
        Infinity, Infinity, Infinity, Infinity, Infinity, Infinity
      ])
    ).should.ok;
    rvec.div(2).toString().should.equal("0.5   1 1.5   2 2.5   3");
  });

  it('#div() should return a RowVector which be divied by a complex value', function() {
    rvec.div.should.be.a.Function;

    var crvec = rvec.div(Complex(2, 0));
    crvec.should.instanceOf(CRowVector);
    crvec.toString().should.equal("(0.5,0)   (1,0) (1.5,0)   (2,0) (2.5,0)   (3,0)");
  });

  it('#diva() should return a RowVector which be divied by a scalar value then saves it back', function() {
    rvec.diva.should.be.a.Function;

    rvec.diva(0);
    rvec.equals(
      new RowVector(6)
      .set([
        Infinity,
        Infinity,
        Infinity,
        Infinity,
        Infinity,
        Infinity
      ])
    ).should.ok;
    rvec.get(0).should.be.a.Infinity;
  });

  it('#transpose() should return the transpose of a matrix', function() {
    rvec.transpose.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    var vec = rvec.transpose();
    vec.should.instanceOf(Vector);
    vec.toString().should.equal("1\n2\n3\n4\n5\n6");
  });

  it('#conjugate() should return the conjugate of a matrix', function() {
    rvec.conjugate.should.be.a.Function;

    var rvec2 = rvec.conjugate();
    rvec2.should.instanceOf(RowVector);
    rvec.equals(rvec2).should.be.true;
  });

  it('#adjoint() should return the adjoint of a matrix', function() {
    rvec.adjoint.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    var vec = rvec.adjoint();
    vec.should.instanceOf(Vector);
    vec.toString().should.equal("1\n2\n3\n4\n5\n6");
  });

  it('#determinant() should return the determinant of a matrix', function() {
    rvec.determinant.should.be.a.Function;

    (function() {
      rvec.determinant();
    }).should.throw("The matrix must be square");

    RowVector([2]).determinant().should.equal(2);
  });

  it('#inverse() should return the inverse of a matrix', function() {
    rvec.inverse.should.be.a.Function;

    (function() {
      rvec.inverse();
    }).should.throw("The matrix must be square");

    var mat2 = RowVector([3]).inverse();
    mat2.should.instanceOf(Matrix);
    mat2.equals(Matrix(1, 1).set([1 / 3])).should.be.true;
  });

  it('#trace() should return the trace of a matrix', function() {
    rvec.trace.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    var trace = rvec.trace();
    trace.should.equal(1);
  });

  it('#diagonal() should return the diagonal of a matrix', function() {
    rvec.diagonal.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    var dia = rvec.diagonal();
    dia.should.instanceOf(Vector);
    dia.toString().should.equal("1");
    rvec.diagonal(1).toString().should.equal("2");
    rvec.diagonal(2).toString().should.equal("3");
    rvec.diagonal(3).toString().should.equal("4");
    rvec.diagonal(4).toString().should.equal("5");
    rvec.diagonal(5).toString().should.equal("6");

    (function() {
      rvec.diagonal(rvec.cols());
    }).should.throw("Invalid index argument");

    (function() {
      rvec.diagonal(-rvec.rows());
    }).should.throw("Invalid index argument");
  });

  it('#norm() should return the l2 norm', function() {
    rvec.norm.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    var sum = 0;

    for (var i = 0; i < rvec.cols(); ++i) {
      sum += Math.pow(rvec.get(i), 2);
    }

    rvec.norm().should.equal(Math.pow(sum, 0.5));
  });

  it('#equals() should return true if two row-vectors are equal', function() {
    rvec.equals.should.be.a.Function;

    rvec.equals(rvec).should.ok;
    rvec.equals(new RowVector([
      1, 2, 3, 4, 5, 6
    ])).should.ok;
  });

  it('#equals() should return true if a row-vector and a matrix are equal', function() {
    rvec.equals.should.be.a.Function;

    rvec.equals(new Matrix(1, 6).set([
      1, 2, 3, 4, 5, 6
    ])).should.ok;
  });

  it('#isApprox() should return true if this is approximately equal to other', function() {
    rvec.isApprox.should.be.a.Function;

    var rvec2 = new RowVector(6).set([
      0.111, 0.222, 0.333, 0.444, 0.555, 0.666
    ]);
    rvec.div(9).isApprox(rvec2, 1e-3).should.false;
    rvec.div(9).isApprox(rvec2, 1e-2).should.true;

    (function() {
      rvec.isApprox(
        new RowVector([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isApprox() should return true if this is approximately equal to a matrix', function() {
    rvec.isApprox.should.be.a.Function;

    var mat = new Matrix(1, 6).set([
      0.111, 0.222, 0.333, 0.444, 0.555, 0.666
    ]);
    rvec.div(9).isApprox(mat, 1e-3).should.false;
    rvec.div(9).isApprox(mat, 1e-2).should.true;

    (function() {
      rvec.isApprox(
        new Matrix(1, 1).set([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isSquare() should return true if this is square', function() {
    rvec.isSquare.should.be.a.Function;

    rvec.isSquare().should.be.false;
    RowVector(1).isSquare().should.be.true;
  });

  it('#isZero() should return true if this is zero', function() {
    rvec.isZero.should.be.a.Function;

    rvec.isZero().should.be.false;

    var rvec2 = new RowVector(3).set([
      0, 0, 0.0001
    ]);
    rvec2.isZero().should.be.false;
    rvec2.isZero(1e-4).should.be.true;
  });

  it('#isOnes() should return true if this is ones', function() {
    rvec.isOnes.should.be.a.Function;

    rvec.isOnes().should.be.false;

    var rvec2 = new RowVector(3).set([
      1, 1.0001, 0.9997
    ]);
    rvec2.isOnes().should.be.false;
    rvec2.isOnes(1e-4).should.be.false;
    rvec2.isOnes(1e-3).should.be.true;
  });

  it('#isIdentity() should return true if this is identity', function() {
    rvec.isIdentity.should.be.a.Function;

    rvec.isIdentity().should.be.false;

    var rvec2 = new RowVector([1]);
    rvec2.isIdentity().should.be.true;
  });

  it('#isDiagonal() should return true if this is diagonal', function() {
    rvec.isDiagonal.should.be.a.Function;

    rvec.isDiagonal().should.be.false;

    var rvec2 = rvec.block(0, 1);
    rvec2.isDiagonal().should.be.true;
  });

  it('#all() should return true if all coefficients are true', function() {
    rvec.all.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvec.all().should.be.true;
    rvec.set(0, 0);
    rvec.toString().should.equal("0 2 3 4 5 6");
    rvec.all().should.be.false;
  });

  it('#count() should return the number of coefficients which evaluate to true', function() {
    rvec.count.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvec.count().should.equal(6);
    rvec.set(0, 0);
    rvec.toString().should.equal("0 2 3 4 5 6");
    rvec.count().should.equal(5);
  });

  it('#any() should return true if at least one coefficient is true', function() {
    rvec.any.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvec.any().should.be.true;
    rvec.setZero();
    rvec.toString().should.equal("0 0 0 0 0 0");
    rvec.any().should.be.false;
  });

  it('#allFinite() should return true if it contains only finite numbers, i.e., no NaN and no +/-INF values', function() {
    rvec.allFinite.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvec.allFinite().should.be.true;
    rvec.set(0, NaN);
    rvec.allFinite().should.be.false;
  });

  it('#hasNaN() should return true if it contains at least one Not A Number (NaN)', function() {
    rvec.hasNaN.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvec.hasNaN().should.be.false;
    rvec.set(0, NaN);
    rvec.hasNaN().should.be.true;
  });

  it('#Zero() should return a zero row-vector', function() {
    RowVector.Zero.should.be.a.Function;

    RowVector.Zero(6).toString().should.equal("0 0 0 0 0 0");

    RowVector.Zero(3).equals(
      new RowVector([
        0, 0, 0
      ])
    ).should.true;
  });

  it('#Ones() should return a ones row-vector', function() {
    RowVector.Ones.should.be.a.Function;

    RowVector.Ones(6).toString().should.equal("1 1 1 1 1 1");

    RowVector.Ones(3).equals(
      new RowVector([
        1, 1, 1
      ])
    ).should.true;
  });

  it('#Constant() should return a RowVector with constant values', function() {
    RowVector.Constant.should.be.a.Function;

    var rvec2 = RowVector.Constant(4, 0.6);
    rvec2.should.instanceOf(RowVector);
    rvec2.toString().should.equal("0.6 0.6 0.6 0.6");

    var crvec = RowVector.Constant(4, Complex(0.6, 0));
    crvec.should.instanceOf(CRowVector);
    crvec.toString().should.equal("(0.6,0) (0.6,0) (0.6,0) (0.6,0)");
  });

  it('#Identity() should return a identity row-vector', function() {
    RowVector.Identity.should.be.a.Function;

    RowVector.Identity(0).toString().should.equal("");

    rvec = RowVector.Identity(3);
    rvec.equals(new RowVector([
      1, 0, 0
    ])).should.true;

    (function() {
      rvec.equals(
        new RowVector([
          1, 0, 0, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#Random() should return a row-vectorx with random values', function() {
    RowVector.Random.should.be.a.Function;

    var rvec2 = RowVector.Random(3);
    rvec2.rows().should.equal(1);
    rvec2.cols().should.equal(3);

    var rvec3 = RowVector.Random(999, 3);
    rvec3.rows().should.equal(1);
    rvec3.cols().should.equal(3);

  });

  it('#LinSpaced() should return a linearly space row-vector', function() {
    RowVector.LinSpaced.should.be.a.Function;

    var rvec2 = RowVector.LinSpaced(5, 0, 1);
    rvec2.toString().should.equal("   0 0.25  0.5 0.75    1");
 
    var rvec3 = RowVector.LinSpaced(5, 1, 0);
    rvec3.toString().should.equal("   1 0.75  0.5 0.25    0");

    var rvec4 = RowVector.LinSpaced(5, 1, 1);
    rvec4.toString().should.equal("1 1 1 1 1");

    (function() {
      RowVector.LinSpaced(-1, 0, 1);
    }).should.throw("Invalid argument")
  });

  it("#block() should return a row-vector block", function() {
    var rvblock = rvec.block(2, 2);
    rvblock.should.instanceOf(RowVectorBlock);
    rvblock.toString().should.equal("3 4");

    rvblock.assign(RowVector([
      -1, -2
    ]));

    rvec.toString().should.equal(" 1  2 -1 -2  5  6");
  });

  it("#block() should return a row-vector block", function() {
    rvec.block.should.be.a.Function;

    var rvblock = rvec.block(1, 2);
    rvblock.should.instanceOf(RowVectorBlock);
    rvblock.toString().should.equal("2 3");

    rvblock.assign(RowVector([
      -1, -2
    ]));

    rvec.toString().should.equal(" 1 -1 -2  4  5  6");
  });

  it("#row() should return a row matrix of the row-vector", function() {
    rvec.row.should.be.a.Function;

    var row = rvec.row(0);
    row.should.instanceOf(RowVectorBlock);
    row.toString().should.equal("1 2 3 4 5 6");

    (function() {
      rvec.row(1);
    }).should.throw("The row or column number is out of range");
  });

  it("#col() should return a column matrix of the row-vector", function() {
    rvec.col.should.be.a.Function;

    var col = rvec.col(0);
    col.should.instanceOf(RowVectorBlock);
    col.toString().should.equal("1");

    (function() {
      rvec.col(6);
    }).should.throw("The row or column number is out of range");
  });

  it("#head() should return a dynamic-size expression of the first coefficients of it", function() {
    rvec.head.should.be.a.Function;

    var head = rvec.head(3);
    head.should.instanceOf(RowVectorBlock);
    head.toString().should.equal("1 2 3");

    (function() {
      rvec.head(7);
    }).should.throw("Invalid argument");
  });

  it("#tail() should return a dynamic-size expression of the last coefficients of it", function() {
    rvec.tail.should.be.a.Function;

    var tail = rvec.tail(3);
    tail.should.instanceOf(RowVectorBlock);
    tail.toString().should.equal("4 5 6");

    (function() {
      rvec.tail(7);
    }).should.throw("Invalid argument");
  });

  it("#topRows() should return a block consisting of the top rows of it", function() {
    rvec.topRows.should.be.a.Function;

    var rvblock = rvec.topRows(1);
    rvblock.should.instanceOf(RowVectorBlock);
    rvblock.toString().should.equal("1 2 3 4 5 6");

    (function() {
      rvec.topRows(2);
    }).should.throw("Invalid argument");

    (function() {
      rvec.topRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRows() should return a block consisting of the bottom rows of it", function() {
    rvec.bottomRows.should.be.a.Function;

    var rvblock = rvec.bottomRows(1);
    rvblock.should.instanceOf(RowVectorBlock);
    rvblock.toString().should.equal("1 2 3 4 5 6");

    (function() {
      rvec.bottomRows(2);
    }).should.throw("Invalid argument");

    (function() {
      rvec.bottomRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleRows() should return a block consisting of a range of rows of it", function() {
    rvec.middleRows.should.be.a.Function;

    var rvblock = rvec.middleRows(0, 1);
    rvblock.should.instanceOf(RowVectorBlock);
    rvblock.toString().should.equal("1 2 3 4 5 6");

    (function() {
      rvec.middleRows(1, 1);
    }).should.throw("Invalid argument");

    (function() {
      rvec.middleRows(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#leftCols() should return a block consisting of the left columns of it", function() {
    rvec.leftCols.should.be.a.Function;

    var rvblock = rvec.leftCols(3);
    rvblock.should.instanceOf(RowVectorBlock);
    rvblock.toString().should.equal("1 2 3");

    (function() {
      rvec.leftCols(7);
    }).should.throw("Invalid argument");

    (function() {
      rvec.leftCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#rightCols() should return a block consisting of the right columns of it", function() {
    rvec.rightCols.should.be.a.Function;

    var rvblock = rvec.rightCols(3);
    rvblock.should.instanceOf(RowVectorBlock);
    rvblock.toString().should.equal("4 5 6");

    (function() {
      rvec.rightCols(7);
    }).should.throw("Invalid argument");

    (function() {
      rvec.rightCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleCols() should return a block consisting of a range of columns of it", function() {
    rvec.middleCols.should.be.a.Function;

    var rvblock = rvec.middleCols(2, 2);
    rvblock.should.instanceOf(RowVectorBlock);
    rvblock.toString().should.equal("3 4");

    (function() {
      rvec.middleCols(7, 1);
    }).should.throw("Invalid argument");

    (function() {
      rvec.middleCols(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topLeftCorner() should return a block consisting of a top-left corner of it", function() {
    rvec.topLeftCorner.should.be.a.Function;

    var rvblock = rvec.topLeftCorner(1, 2);
    rvblock.should.instanceOf(RowVectorBlock);
    rvblock.toString().should.equal("1 2");

    (function() {
      rvec.topLeftCorner(1, 7);
    }).should.throw("Invalid argument");

    (function() {
      rvec.topLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topRightCorner() should return a block consisting of a top-right corner of it", function() {
    rvec.topRightCorner.should.be.a.Function;

    var rvblock = rvec.topRightCorner(1, 3);
    rvblock.should.instanceOf(RowVectorBlock);
    rvblock.toString().should.equal("4 5 6");

    (function() {
      rvec.topRightCorner(1, 7);
    }).should.throw("Invalid argument");

    (function() {
      rvec.topRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomLeftCorner() should return a block consisting of a bottom-left corner of it", function() {
    rvec.bottomLeftCorner.should.be.a.Function;

    var rvblock = rvec.bottomLeftCorner(1, 3);
    rvblock.should.instanceOf(RowVectorBlock);
    rvblock.toString().should.equal("1 2 3");

    (function() {
      rvec.bottomLeftCorner(1, 7);
    }).should.throw("Invalid argument");

    (function() {
      rvec.bottomLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRightCorner() should return a block consisting of a bottom-right corner of it", function() {
    rvec.bottomRightCorner.should.be.a.Function;

    var rvblock = rvec.bottomRightCorner(1, 3);
    rvblock.should.instanceOf(RowVectorBlock);
    rvblock.toString().should.equal("4 5 6");

    (function() {
      rvec.bottomRightCorner(1, 7);
    }).should.throw("Invalid argument");

    (function() {
      rvec.bottomRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#replicate() should return a matrix which is replicated", function() {
    rvec.replicate.should.be.a.Function;

    rvec.replicate(0, 0).toString().should.equal("");
    rvec.replicate(0, 1).toString().should.equal("");
    rvec.replicate(1, 0).toString().should.equal("");
    rvec.replicate(1, 1).toString().should.equal("1 2 3 4 5 6");
    rvec.replicate(2, 1).toString().should.equal("1 2 3 4 5 6\n1 2 3 4 5 6");
    rvec.replicate(1, 2).toString().should.equal("1 2 3 4 5 6 1 2 3 4 5 6");
    rvec.replicate(2, 2).toString().should.equal("1 2 3 4 5 6 1 2 3 4 5 6\n1 2 3 4 5 6 1 2 3 4 5 6");

    (function() {
      rvec.replicate(-1, 0);
    }).should.throw("Invalid argument");
  });

  it("#dot() should return the dot product of two row-vectors", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new Vector(rvec.cols())).should.equal(0);
    rvec.dot(rvec).should.equal(91);

    (function() {
      rvec.dot(new RowVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector and a vector", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new Vector(rvec.cols())).should.equal(0);
    rvec.dot(new Vector([ 7,
                          8,
                          9,
                         10,
                         11,
                         12])).should.equal(217);

    (function() {
      rvec.dot(new Vector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector and a complex vector", function() {
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

  it("#dot() should return the dot product of a row-vector and a complex row-vector", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new CRowVector(rvec.cols())).equals(Complex(0));
    rvec.dot(new CRowVector([7, 8, 9, 10, 11, 12])).equals(Complex(217, 0)).should.be.true;

    (function() {
      rvec.dot(new CRowVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector and a vector block", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new Vector(rvec.cols()).block(0, rvec.cols())).should.equal(0);
    rvec.dot(rvec.block(0, rvec.cols())).should.equal(91);

    (function() {
      rvec.dot(new Vector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector and a row-vector block", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new RowVector(rvec.cols()).block(0, rvec.cols())).should.equal(0);
    rvec.dot(new RowVector([7, 8, 9, 10, 11, 12]).block(0, 6)).should.equal(217);

    (function() {
      rvec.dot(new RowVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector and a complex vector block", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new CVector(rvec.cols()).block(0, rvec.cols())).equals(Complex(0)).should.be.true;
    rvec.dot(new CVector([ 7,
                           8,
                           9,
                          10,
                          11,
                          12]).block(0, 6)).equals(Complex(217)).should.be.true;

    (function() {
      rvec.dot(new CVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector and a complex row-vector block", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new CRowVector(rvec.cols()).block(0, rvec.cols())).equals(Complex(0)).should.be.true;
    rvec.dot(new CRowVector([7, 8, 9, 10, 11, 12]).block(0, 6)).equals(Complex(217)).should.be.true;

    (function() {
      rvec.dot(new RowVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector and a matrix (1xm)", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new Matrix(1, rvec.cols())).should.equal(0);
    rvec.dot(new Matrix(1, rvec.cols()).set([
      7, 8, 9, 10, 11, 12
    ])).should.equal(217);

    (function() {
      rvec.dot(new Matrix(1, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector and a matrix block (1xm)", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new Matrix(1, rvec.cols()).row(0)).should.equal(0);
    rvec.dot(new Matrix(1, rvec.cols()).set([
      7, 8, 9, 10, 11, 12
    ]).row(0)).should.equal(217);

    (function() {
      rvec.dot(new Matrix(1, 1).row(0));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector and a matrix (mx1)", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new Matrix(rvec.cols(), 1)).should.equal(0);
    rvec.dot(new Matrix(rvec.cols(), 1).set([
       7,
       8,
       9,
      10,
      11,
      12
    ])).should.equal(217);

    (function() {
      rvec.dot(new Matrix(1, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector and a matrix block (mx1)", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new Matrix(rvec.cols(), 1).col(0)).should.equal(0);
    rvec.dot(new Matrix(rvec.cols(), 1).set([
       7,
       8,
       9,
      10,
      11,
      12
    ]).col(0)).should.equal(217);

    (function() {
      rvec.dot(new Matrix(1, 1).col(0));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector and a complex matrix (1xm)", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new CMatrix(1, rvec.cols())).equals(Complex(0)).should.be.true;
    rvec.dot(new CMatrix(1, rvec.cols()).set([
      7, 8, 9, 10, 11, 12
    ])).equals(Complex(217)).should.be.true;

    (function() {
      rvec.dot(new CMatrix(1, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector and a complex matrix block (1xm)", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new CMatrix(1, rvec.cols()).row(0)).equals(Complex(0)).should.be.true;
    rvec.dot(new CMatrix(1, rvec.cols()).set([
      7, 8, 9, 10, 11, 12
    ]).row(0)).equals(Complex(217)).should.be.true;

    (function() {
      rvec.dot(new CMatrix(1, 1).row(0));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector and a complex matrix (mx1)", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new CMatrix(rvec.cols(), 1)).equals(Complex(0)).should.be.true;
    rvec.dot(new CMatrix(rvec.cols(), 1).set([
       7,
       8,
       9,
      10,
      11,
      12
    ])).equals(Complex(217)).should.be.true;

    (function() {
      rvec.dot(new CMatrix(1, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a row-vector and a complex matrix block (mx1)", function() {
    rvec.dot.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    rvec.dot(new CMatrix(rvec.cols(), 1).col(0)).equals(0).should.be.true;
    rvec.dot(new CMatrix(rvec.cols(), 1).set([
       7,
       8,
       9,
      10,
      11,
      12
    ]).col(0)).equals(217).should.be.true;

    (function() {
      rvec.dot(new CMatrix(1, 1).col(0));
    }).should.throw("Invalid argument")
  });

  it("#asDiagonal() should return a diagonal", function() {
    rvec.asDiagonal.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    var dia = rvec.asDiagonal();
    dia.should.instanceOf(Matrix);

    dia.toString().should.equal("1 0 0 0 0 0\n0 2 0 0 0 0\n0 0 3 0 0 0\n0 0 0 4 0 0\n0 0 0 0 5 0\n0 0 0 0 0 6");
  });

  it("#normalize() should normalizes the row-vector", function() {
    rvec.normalize.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");
    rvec.normalize();
    rvec.toString().should.equal("0.104828 0.209657 0.314485 0.419314 0.524142 0.628971");
  });

  it("#redux() should return a full redux operation on the whole matrix", function() {
    rvec.redux.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    var result = rvec.redux(function(a, b){
      return a + b;
    })
    result.should.equal(21);
  });

  it("#sum() should return a full sum operation on the whole matrix", function() {
    rvec.sum.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    var result = rvec.sum();
    result.should.equal(21);
  });

  it("#prod() should return a full product operation on the whole matrix", function() {
    rvec.prod.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    var result = rvec.prod();
    result.should.equal(720);
  });

  it("#mean() should return the mean of all coefficients", function() {
    rvec.mean.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    var result = rvec.mean();
    result.should.equal(3.5);
  });

  it("#visit() should apply the visitor operation on the whole row-vector", function() {
    rvec.visit.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    var sum = 0;
    rvec.visit(function(scalar, row, col) {
      scalar.should.be.a.Number;
      row.should.be.a.Number;
      col.should.be.a.Number;
      row.should.equal(0);
      rvec.get(col).should.equal(scalar);
      sum += scalar;
    });

    rvec.sum().should.equal(sum);
  });

  it("#maxCoeff() should return the maximum of all coefficients", function() {
    rvec.maxCoeff.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    var max = rvec.maxCoeff();
    max.should.equal(6);

    var result = {}, max = 0;
    max = rvec.maxCoeff(result);
    max.should.equal(6);
    result.should.have.properties('maxCoeff', 'rowId', 'colId');
    JSON.stringify(result).should.equal("{\"maxCoeff\":6,\"rowId\":0,\"colId\":5}");

    var ok = false, max = 0;
    max = rvec.maxCoeff(function(rowId, colId) {
	rowId.should.be.a.Number;
	colId.should.be.a.Number;
	rowId.should.equal(result.rowId);
	colId.should.equal(result.colId);
	ok = true;
    });
    max.should.equal(6);
    ok.should.be.true;
  });

  it("#minCoeff() should return the minimum of all coefficients", function() {
    rvec.minCoeff.should.be.a.Function;

    rvec.toString().should.equal("1 2 3 4 5 6");

    var min = rvec.minCoeff();
    min.should.equal(1);

    var result = {}, min = 0;
    min = rvec.minCoeff(result);
    min.should.equal(1);
    result.should.have.properties('minCoeff', 'rowId', 'colId');
    JSON.stringify(result).should.equal("{\"minCoeff\":1,\"rowId\":0,\"colId\":0}");

    var ok = false, min = 0;
    min = rvec.minCoeff(function(rowId, colId) {
	rowId.should.be.a.Number;
	colId.should.be.a.Number;
	rowId.should.equal(result.rowId);
	colId.should.equal(result.colId);
	ok = true;
    });
    min.should.equal(1);
    ok.should.be.true;
  });
});
