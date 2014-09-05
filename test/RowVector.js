const
    Eigen = require('../index.js'),
    Vector = Eigen.Vector,
    RowVector = Eigen.RowVector,
    Matrix = Eigen.Matrix,
    CMatrix = Eigen.CMatrix,
    CRowVector = Eigen.CRowVector,
    Complex = Eigen.Complex,
    RowVectorBlock = Eigen.RowVectorBlock,
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

  it('#set() should throw message when the row is out of range', function() {
    rvec.set.should.be.a.Function;

    (function() {
      rvec.set(6, 68);
    }).should.throw('Row or column numbers are out of range');
    (function() {
      rvec.set(-1, 500);
    }).should.throw('Row or column numbers are out of range');
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
    }).should.throw('Row or column numbers are out of range');
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

    var rvec2 = cmat.block(0, 0, 1, 1);
    rvec2.isDiagonal().should.be.true;
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

  it("#block() should return a row-vector block", function() {
    var rvblock = rvec.block(2, 2);
    rvblock.should.instanceOf(RowVectorBlock);
    rvblock.toString().should.equal("3 4");

    rvblock.assign(RowVector([
      -1, -2
    ]));

    rvec.toString().should.equal(" 1  2 -1 -2  5  6");
  });
});
