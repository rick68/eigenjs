const
    Eigen = require('../index.js'),
    Vector = Eigen.Vector,
    RowVector = Eigen.RowVector,
    Matrix = Eigen.Matrix,
    CMatrix = Eigen.CMatrix,
    CVector = Eigen.CVector,
    CRowVector = Eigen.CRowVector,
    Complex = Eigen.Complex,
    CRowVectorBlock = Eigen.CRowVectorBlock,
    should = require('should');

describe('CRowVector', function() {
  var crvec;

  it('#CRowVector() should be a function', function() {
    CRowVector.should.be.a.Function;
  });

  it('should throw error when tried creating a complex row-vector without size or a scalar array argument', function() {
    (function() { new CRowVector(); }).should.throw('Invalid argument');
    (function() { new CRowVector(1); }).should.not.throw();
    CRowVector(2, 1).toString().should.equal("(0,0)");
  });

  it('should be invoked with size argument and return an object', function() {
    CRowVector(1).should.be.an.Object;
    (new CRowVector(2)).should.be.an.Object;
  });

  it('#CRowVector(3) should return the complex row-vector of size 3', function() {
    crvec = CRowVector(3);
    crvec.rows().should.equal(1);
    crvec.cols().should.equal(3);
  });

  it('#CRowVector() should return the complex row-vector with a scalar array', function() {
    crvec = CRowVector([1, 2, 3]);
    crvec.rows().should.equal(1);
    crvec.cols().should.equal(3);
    crvec.toString().should.equal("(1,0) (2,0) (3,0)");
  });

  beforeEach(function() {
    crvec = CRowVector([
      Complex(1, 1), Complex(2, 2), Complex(3, 3)
    ]);
  });

  it('#CRowVector() should created by CMatrix', function() {
    var cmat = new CMatrix.Random(1, 3);
    var crvec2 = new CRowVector(cmat);
    crvec2.equals(cmat).should.be.true;

    var cmat2 = new CMatrix.Random(3, 1);
    var crvec3 = new CRowVector(cmat2);
    crvec2.equals(cmat).should.be.true;
  });

  it('#CRowVector() should created by CMatrixBlock', function() {
    var cmat = new CMatrix.Random(3, 3);
    var cmblock = cmat.row(0);
    var cmblock2 = cmat.col(0);

    var crvec2 = new CRowVector(cmblock);
    crvec2.equals(cmblock).should.be.true;

    var crvec3 = new CRowVector(cmblock2);
    crvec3.visit(function(value, row, col) {
      value.equals(cmblock2.get(col, 0)).should.be.true;
    });
  });

  it('#CRowVector() should created by CVector', function() {
    var cvec = new CVector.Random(3);
    var crvec2 = new CRowVector(cvec);
    crvec2.visit(function(value, row, col) {
      value.equals(cvec.get(col)).should.be.true;
    });
  });

  it('#CRowVector() should created by CVectorBlock', function() {
    var cvec = new CVector.Random(3);
    var cvblock = cvec.col(0);

    var crvec2 = new CRowVector(cvblock);
    crvec2.visit(function(value, row, col) {
      value.equals(cvblock.get(col)).should.be.true;
    });
  });

  it('#CRowVector() should created by CRowVector', function() {
    var crvec2 = new CRowVector(crvec);
    crvec2.equals(crvec).should.be.true;
  });

  it('#CRowVector() should created by CRowVectorBlock', function() {
    var crvblock = crvec.row(0);
    var crvec2 = new CRowVector(crvblock);
    crvec2.equals(crvblock).should.be.true;
  });

  it('#CRowVector() should created by Matrix', function() {
    var mat = new Matrix.Random(1, 3);
    var crvec2 = new CRowVector(mat);
    crvec2.visit(function(value, row, col) {
      value.equals(mat.get(row, col)).should.be.true;
    });

    var mat2 = new Matrix.Random(3, 1);
    var crvec3 = new CRowVector(mat2);
    crvec3.visit(function(value, row, col) {
      value.equals(mat2.get(col, 0)).should.be.true;
    });
  });

  it('#CRowVector() should created by MatrixBlock', function() {
    var mat = new Matrix.Random(3, 3);
    var mblock = mat.row(0);
    var mblock2 = mat.col(0);

    var crvec2 = new CRowVector(mblock);
    crvec2.visit(function(value, row, col) {
      value.equals(mblock.get(row, col)).should.be.true;
    });

    var crvec3 = new CRowVector(mblock2);
    crvec3.visit(function(value, row, col) {
      value.equals(mblock2.get(col, 0)).should.be.true;
    });
  });

  it('#CRowVector() should created by Vector', function() {
    var vec = new Vector.Random(3);
    var crvec2 = new CRowVector(vec);
    crvec2.visit(function(value, row, col) {
      value.equals(vec.get(col)).should.be.true;
    });
  });

  it('#CRowVector() should created by VectorBlock', function() {
    var vec = new Vector.Random(3);
    var vblock = vec.col(0);

    var crvec2 = new CRowVector(vblock);
    crvec2.visit(function(value, row, col) {
      value.equals(vblock.get(col)).should.be.true;
    });
  });

  it('#CRowVector() should created by RowVector', function() {
    var rvec = new RowVector.Random(3);
    var crvec2 = new CRowVector(rvec);
    crvec2.visit(function(value, row, col) {
      value.equals(rvec.get(col)).should.be.true;
    });
  });

  it('#CRowVector() should created by RowVectorBlock', function() {
    var rvec = new RowVector.Random(3);
    var rvblock = rvec.row(0);
    var crvec2 = new CRowVector(rvblock);
    crvec2.visit(function(value, row, col) {
      value.equals(rvblock.get(col)).should.be.true;
    });
  });

  it('#set() should throw message when the row is out of range', function() {
    crvec.set.should.be.a.Function;

    (function() {
      crvec.set(4, 68);
    }).should.throw('The row or column number is out of range');
    (function() {
      crvec.set(-1, 500);
    }).should.throw('The row or column number is out of range');
  });

  it('#set() with array argument should work ok', function() {
    crvec.set.should.be.a.Function;

    CRowVector(3).set([
      Complex(1, 1), Complex(2, 2), Complex(3, 3)
    ]).toString().should.eql(crvec.toString());

    (function() {
      CRowVector(4).set([
        Complex(1, 1), Complex(2, 2), Complex(3, 3)
      ]);
    }).should.throw('Too few coefficients');

    (function() {
      CRowVector(6).set([
         1, 2, 3, 4, 5, 6, 7
      ]);
    }).should.throw('Too many coefficients');
  });

  it('#get() should return the element value of CRowVector', function() {
    crvec.get.should.be.a.Function;

    crvec.get(0).equals(Complex(1, 1));
    crvec.get(1).equals(Complex(2, 2));
    crvec.get(2).equals(Complex(3, 3));
    (function(){
      crvec.get(3);
    }).should.throw('The row or column number is out of range');
  });

  it('#value() should return the unique coefficient of a 1x1 expression', function() {
    crvec.value.should.be.a.Function;

    (function(){
      crvec.value();
    }).should.throw('The size of row and column values must equal 1');

    var crvec2 = new CRowVector(1);
    crvec2.value().equals(0).should.be.true;
  });

  it('#setZero() should set all coefficients to zero', function() {
    crvec.setZero.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");
    crvec.setZero().toString().should.equal("(0,0) (0,0) (0,0)");
  });

  it('#setOnes() should set all coefficients to ones', function() {
    crvec.setOnes.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");
    crvec.setOnes().toString().should.equal("(1,0) (1,0) (1,0)");
  });

  it('#setConstant() should set all coefficients to constant', function() {
    crvec.setConstant.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");
    crvec.setConstant(0.6).toString().should.equal("(0.6,0) (0.6,0) (0.6,0)");
    crvec.setConstant(Complex(3, -4)).toString().should.equal("(3,-4) (3,-4) (3,-4)");
  });

  it('#setRandom() should set all coefficients to random', function() {
    crvec.setRandom.should.be.a.Function;
    crvec.setRandom();
  });

  it('#setIdentity() should write the identity expression into itself', function() {
    crvec.setIdentity.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");
    crvec.setIdentity().toString().should.equal("(1,0) (0,0) (0,0)");
  });

  it('#setDiagonal() should set the diagonal to other values', function() {
    crvec.setDiagonal.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");
    crvec.setDiagonal(0, Vector.Zero(1)).toString().should.equal("(0,0) (2,2) (3,3)");
    crvec.setDiagonal(0, RowVector.Ones(1)).toString().should.equal("(1,0) (2,2) (3,3)");
    crvec.setDiagonal(0, CVector.Zero(1)).toString().should.equal("(0,0) (2,2) (3,3)");
    crvec.setDiagonal(0, CRowVector.Ones(1)).toString().should.equal("(1,0) (2,2) (3,3)");

    (function(){
      crvec.setDiagonal(68, Vector.Random(3));
    }).should.throw('Invalid index argument');

    (function(){
      crvec.setDiagonal(-500, RowVector.Random(3));
    }).should.throw('Invalid index argument');

    (function(){
      crvec.setDiagonal(68, CVector.Random(3));
    }).should.throw('Invalid index argument');

    (function(){
      crvec.setDiagonal(-500, CRowVector.Random(3));
    }).should.throw('Invalid index argument');
  });

  it('#toString() should return all element values of CRowVector', function() {
    crvec.toString.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");
  });

  it('#add() should return the sum of two complex row-vector', function() {
    crvec.add.should.be.a.Function;

    CRowVector(3).set([
       2, 4, 6
    ]).add(crvec).toString().should.equal("(3,1) (6,2) (9,3)");

    (function() {
      CRowVector(2).set([
        1, 0
      ]).add(crvec);
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex row-vector and a matrix', function() {
    crvec.add.should.be.a.Function;

    crvec.add(
      Matrix(1, 3).set([
       2, 4, 6
      ])
     ).toString().should.equal("(3,1) (6,2) (9,3)");

    (function() {
      crvec.add(
        Matrix(1, 2).set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex row-vector and a vector', function() {
    crvec.add.should.be.a.Function;

    var crvec2 = CRowVector([1]);
    crvec2.add(Vector([2])).toString().should.equal("(3,0)");
  });

  it('#add() should return the sum of a complex row-vector and a row-vector', function() {
    crvec.add.should.be.a.Function;

    var crvec2 = CRowVector([1]);
    crvec2.add(RowVector([2])).toString().should.equal("(3,0)");
  });

  it('#add() should return the sum of a row-vector and a complex matrix', function() {
    crvec.add.should.be.a.Function;

    var crvec2 = crvec.add(
      CMatrix(1, 3).set([
        2, 4, 6
      ])
     );
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(3,1) (6,2) (9,3)");

    (function() {
      crvec.add(
        CMatrix(1, 2).set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex row-vector and a complex vector', function() {
    crvec.add.should.be.a.Function;

    var crvec2 = CRowVector([1]);
    crvec2.add(CVector([2])).toString().should.equal("(3,0)");
  });

  it('#add() should return the sum of a complex row-vector and a complex row-vector', function() {
    crvec.add.should.be.a.Function;

    var crvec2 = CRowVector([1]);
    crvec2.add(CRowVector([2])).toString().should.equal("(3,0)");
  });

  it('#adda() should return the sum of two complex row-vector and saves it back', function() {
    crvec.adda.should.be.a.Function;

    crvec.adda(
      CRowVector([ 2, 4, 6 ])
    ).toString().should.equal("(3,1) (6,2) (9,3)");

    (function() {
      crvec.add(
        CRowVector(1, 2).set([
          1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex row-vector and a matrix then saves it back', function() {
    crvec.adda.should.be.a.Function;

    crvec.adda(
      Matrix(1, 3)
      .set([ 2, 4, 6 ])
    );
    crvec.toString().should.equal("(3,1) (6,2) (9,3)");
  });

  it('#adda() should return the sum of a complex row-vector and a vector then saves it back', function() {
    crvec.adda.should.be.a.Function;

    var crvec2 = CRowVector([1]);
    crvec2.adda(Vector([2])).toString().should.equal("(3,0)");
  });

  it('#adda() should return the sum of a complex row-vector and a row-vector then saves it back', function() {
    crvec.adda.should.be.a.Function;

    var crvec2 = CRowVector([1]);
    crvec2.adda(RowVector([2])).toString().should.equal("(3,0)");
  });

  it('#adda() should return the sum of a complex row-vector and a complex matrix then saves it back', function() {
    crvec.adda.should.be.a.Function;

    crvec.adda(
      CMatrix(1, 3)
      .set([ 2, 4, 6 ])
    );
    crvec.toString().should.equal("(3,1) (6,2) (9,3)");
  });

  it('#adda() should return the sum of a complex row-vector and a complex vector then saves it back', function() {
    crvec.adda.should.be.a.Function;

    var crvec2 = CRowVector([1]);
    crvec2.adda(CRowVector([2])).toString().should.equal("(3,0)");
  });

  it('#sub() should return the difference of two complex row-vectors', function() {
    crvec.sub.should.be.a.Function;

    crvec.sub(
      RowVector([ 2, 4, 6 ])
    ).toString().should.equal("(-1,1) (-2,2) (-3,3)");

    (function() {
      crvec.sub(RowVector([ 1, 2, 3, 4 ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex row-vector and a matrix', function() {
    crvec.sub.should.be.a.Function;

    crvec.sub(
      Matrix(1, 3).set([ 2, 4, 6 ])
     ).toString().should.equal("(-1,1) (-2,2) (-3,3)");

    (function() {
      crvec.sub(
        Matrix(1, 4).set([ 1, 2, 3, 4 ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex row-vector and a vector', function() {
    crvec.sub.should.be.a.Function;

    var crvec2 = CRowVector([1]);
    crvec2.sub(Vector([2])).toString().should.equal("(-1,0)");
  });

  it('#sub() should return the difference of a complex row-vector and a row-vector', function() {
    crvec.sub.should.be.a.Function;

    var crvec2 = CRowVector([1]);
    crvec2.sub(RowVector([2])).toString().should.equal("(-1,0)");
  });

  it('#sub() should return a CMatrix with the difference of a complex row-vector and a complex matrix', function() {
    crvec.sub.should.be.a.Function;

    var cmat = CMatrix(1, 3).set([
      Complex( 2, 0), Complex( 4, 1), Complex( 6, 2)
    ]);

    crvec.sub(cmat).toString().should.equal("(-1,1) (-2,1) (-3,1)");

    (function() {
      crvec.sub(
        CMatrix(1, 4).set([
          1, 2, 3, 4
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex row-vector and a complex vector', function() {
    crvec.sub.should.be.a.Function;

    var crvec2 = CRowVector([1]);
    crvec2.sub(CVector([2])).toString().should.equal("(-1,0)");
  });

  it('#suba() should return the difference of two complex row-vectors and saves it back', function() {
    crvec.suba.should.be.a.Function;

    var crvec2 = CRowVector([ 2, 4, 6 ]);
    crvec2.suba(crvec);
    crvec2.toString().should.equal("(1,-1) (2,-2) (3,-3)");
  });

  it('#suba() should return the difference of a complex row-vector and a matrix then saves it back', function() {
    crvec.suba.should.be.a.Function;

    var mat = Matrix(1, 3).set([ 2, 4, 6 ]);
    crvec.suba(mat);
    crvec.toString().should.equal("(-1,1) (-2,2) (-3,3)");
  });

  it('#suba() should return the difference of a complex row-vector and a vector then saves it back', function() {
    crvec.suba.should.be.a.Function;

    var crvec2 = CRowVector([1]);
    var vec = Vector([2]);
    crvec2.suba(vec);
    crvec2.toString().should.equal("(-1,0)");
  });

  it('#suba() should return the difference of a complex row-vector and a row-vector then saves it back', function() {
    crvec.suba.should.be.a.Function;

    var rvec = RowVector(1, 3).set([ 2, 4, 6 ]);
    crvec.suba(rvec).toString().should.equal("(-1,1) (-2,2) (-3,3)");
  });

  it('#suba() should return the difference of a complex row-vector and a complex matrix then saves it back', function() {
    crvec.suba.should.be.a.Function;

    var cmat = CMatrix(1, 3).set([ 2, 4, 6 ]);
    crvec.suba(cmat).toString().should.equal("(-1,1) (-2,2) (-3,3)");
  });

  it('#suba() should return the difference of a complex row-vector and a complex vector then saves it back', function() {
    crvec.suba.should.be.a.Function;

    var crvec2 = CRowVector([1]);
    crvec2.suba(CVector([2])).toString().should.equal("(-1,0)")
  });

  it('#suba() should return the difference of a complex row-vector and a complex row-vector then saves it back', function() {
    crvec.suba.should.be.a.Function;

    var crvec2 = CRowVector([1]);
    crvec2.suba(CRowVector([2])).toString().should.equal("(-1,0)")
  });

  it('#mul() should return the product of two row-vectors', function() {
    crvec.mul.should.be.a.Function;

    var crvec2 = new CRowVector([-1]);
    crvec2.mul(crvec).toString().should.equal("(-1,-1) (-2,-2) (-3,-3)");

    (function() {
      crvec.mul(crvec2)
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex row-vector and a matrix', function() {
    crvec.mul.should.be.a.Function;

    var mat = new Matrix(3, 1).set([
      2,
      4,
      6
    ]);
    crvec.mul(mat).toString().should.equal("(28,28)");

    (function() {
      crvec.mul(Matrix(1, 3)
        .set([
          2, 4, 6
        ])
      );
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex row-vector and a vector', function() {
    crvec.mul.should.be.a.Function;

    var vec = new Vector([
       2,
       4,
       6
    ]);
    crvec.mul(vec).toString().should.equal("(28,28)");

    (function() {
      crvec.mul(Vector([
          2,
          4
        ])
      );
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex row-vector and a row-vector', function() {
    crvec.mul.should.be.a.Function;

    var crvec2 = new CRowVector([-1]);
    crvec2.mul(RowVector([2])).toString().should.equal("(-2,0)");

    (function() {
      crvec.mul(RowVector([
          2,
          4
        ])
      );
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a complex row-vector and a complex matrix', function() {
    crvec.mul.should.be.a.Function;

    var cmat = new CMatrix(3, 1).set([
      Complex(1, 1),
      Complex(2, 2),
      Complex(3, 3)
    ]);
    crvec.mul(cmat).toString().should.equal("(0,28)");
  });

  it('#mul() should return a CMatrix with the product of a complex row-vector and a complex vector', function() {
    crvec.mul.should.be.a.Function;

    var cvec = new CVector(3, 1).set([
      Complex(1, 1),
      Complex(2, 2),
      Complex(3, 3)
    ]);
    crvec.mul(cvec).toString().should.equal("(0,28)");
  });

  it('#mul() should return the product of a complex row-vector and a scalar value', function() {
    crvec.mul.should.be.a.Function;

    crvec.mul(-1).toString().should.equal("(-1,-1) (-2,-2) (-3,-3)");
  });

  it('#mul() should return a CMatrix with the product of a complex row-vector and a complex', function() {
    crvec.mul.should.be.a.Function;

    var c = new Complex(-1, 0);
    crvec.mul(c).toString().should.equal("(-1,-1) (-2,-2) (-3,-3)");
  });

  it('#mula() should return the product of a complex row-vector and a scalar value then saves it back', function() {
    crvec.mula.should.be.a.Function;

    crvec.mula(-1);
    crvec.toString().should.equal("(-1,-1) (-2,-2) (-3,-3)");
  });

  it('#mula() should return the product of a complex row-vector and a complex value then saves it back', function() {
    crvec.mula.should.be.a.Function;

    crvec.mula(Complex(-1, -1));
    crvec.toString().should.equal("(0,-2) (0,-4) (0,-6)");
  });

  it('#mula() should return the product of a complex row-vector and a matrix(mxm) then saves it back', function() {
    crvec.mula.should.be.a.Function;

    crvec.mula(Matrix(3, 3).set([
      1, 2, 3,
      2, 3, 4,
      3, 4, 5
    ]));
    crvec.toString().should.equal("(14,14) (20,20) (26,26)");

    (function() {
      crvec.mula(Matrix(3, 1).set([
        -1,
        -2,
        -3
      ]));
    }).should.throw("The matrix size must be mxm");
  });

  it('#div() should return a CRowVector which be divied by a scalar value', function() {
    crvec.div.should.be.a.Function;

    crvec.equals(
      new CRowVector(3)
      .set([
        Complex(1, 1), Complex(2, 2), Complex(3, 3)
      ])
    ).should.ok;
    crvec.div(2).toString().should.equal("(0.5,0.5)     (1,1) (1.5,1.5)");
  });

  it('#div() should return a CRowVector which be divied by a complex value', function() {
    crvec.div.should.be.a.Function;

    var crvec2 = crvec.div(Complex(2, 0));
    crvec2.toString().should.equal("(0.5,0.5)     (1,1) (1.5,1.5)");
  });

  it('#diva() should return a CRowVector which be divied by a scalar value then saves it back', function() {
    crvec.diva.should.be.a.Function;

    var crvec2 = crvec.div(2);
    crvec2.toString().should.equal("(0.5,0.5)     (1,1) (1.5,1.5)");
  });

  it('#diva() should return a CRowVector which be divied by a complex value then saves it back', function() {
    crvec.diva.should.be.a.Function;

    var crvec2 = crvec.div(Complex(2, 0));
    crvec2.toString().should.equal("(0.5,0.5)     (1,1) (1.5,1.5)");
  });

  it('#transpose() should return the transpose of a complex matrix', function() {
    crvec.transpose.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    var cvec = crvec.transpose();
    cvec.should.instanceOf(CVector);
    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)");
  });

  it('#conjugate() should return the conjugate of a complex matrix', function() {
    crvec.conjugate.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    var crvec2 = crvec.conjugate();
    crvec2.should.instanceOf(CRowVector);

    crvec2.toString().should.equal("(1,-1) (2,-2) (3,-3)");
  });

  it('#adjoint() should return the adjoint of a complex matrix', function() {
    crvec.adjoint.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    var cvec = crvec.adjoint();
    cvec.should.instanceOf(CVector);
    cvec.toString().should.equal("(1,-1)\n(2,-2)\n(3,-3)");
  });

  it('#determinant() should return the determinant of a complex matrix', function() {
    crvec.determinant.should.be.a.Function;

    (function() {
      crvec.determinant();
    }).should.throw("The matrix must be square");

    CRowVector([8]).determinant().equals(Complex(8)).should.true;
  });

  it('#inverse() should return the inverse of a complex matrix', function() {
    crvec.inverse.should.be.a.Function;

    (function() {
      crvec.inverse();
    }).should.throw("The matrix must be square");

    var cmat2 = CRowVector([6]).inverse();
    cmat2.should.instanceOf(CMatrix);
    cmat2.equals(CMatrix(1, 1).set([1 / 6])).should.true;
  });

  it('#trace() should return the trace of a complex matrix', function() {
    crvec.trace.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    var trace = crvec.trace();
    trace.equals(Complex(1, 1)).should.be.true;
  });

  it('#diagonal() should return the diagonal of a complex matrix', function() {
    crvec.diagonal.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    var dia = crvec.diagonal();
    dia.should.instanceOf(CVector);
    dia.toString().should.equal("(1,1)");
    crvec.diagonal(1).toString().should.equal("(2,2)");
    crvec.diagonal(2).toString().should.equal("(3,3)");

    (function() {
      crvec.diagonal(crvec.cols());
    }).should.throw("Invalid index argument");

    (function() {
      crvec.diagonal(-crvec.rows());
    }).should.throw("Invalid index argument");
  });

  it('#norm() should return the l2 norm', function() {
    crvec.norm.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    var sum = 0;

    for (var i = 0; i < crvec.cols(); ++i) {
      sum += crvec.get(i).norm();
    }

    crvec.norm().should.equal(Math.pow(sum, 0.5));
  });

  it('#equals() should return true if two complex row-vectors are equal', function() {
    crvec.equals.should.be.a.Function;

    crvec.equals(crvec).should.ok;
    crvec.equals(new CRowVector([
      Complex(1, 1), Complex(2, 2), Complex(3, 3)
    ])).should.ok;
  });

  it('#equals() should return true if a complex row-vector and a complex matrix are equal', function() {
    crvec.equals.should.be.a.Function;

    crvec.equals(new CMatrix(1, 3).set([
      Complex(1, 1), Complex(2, 2), Complex(3, 3)
    ])).should.ok;
  });

  it('#equals() should return true if a complex row-vector and a complex vector are equal', function() {
    crvec.equals.should.be.a.Function;

    var crvec2 = new CRowVector([1]);
    crvec2.equals(new CVector([1])).should.ok;
  });

  it('#isApprox() should return true if this is approximately equal to other', function() {
    crvec.isApprox.should.be.a.Function;

    var crvec2 = new CRowVector(3).set([
      Complex(0.111, 0.111), Complex(0.222, 0.222), Complex(0.333, 0.333)
    ]);
    crvec.div(9).isApprox(crvec2, 1e-3).should.false;
    crvec.div(9).isApprox(crvec2, 1e-2).should.true;

    (function() {
      crvec.isApprox(
        new CRowVector([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isApprox() should return true if this is approximately equal to a complex matrix', function() {
    crvec.isApprox.should.be.a.Function;

    var cmat = new CMatrix(1, 3).set([
      Complex(0.111, 0.111), Complex(0.222, 0.222), Complex(0.333, 0.333)
    ]);
    crvec.div(9).isApprox(cmat, 1e-3).should.false;
    crvec.div(9).isApprox(cmat, 1e-2).should.true;

    (function() {
      crvec.isApprox(
        new CMatrix(1, 1).set([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isApprox() should return true if this is approximately equal to a complex vector', function() {
    crvec.isApprox.should.be.a.Function;

    var crvec2 = new CRowVector([1]);
    var cvec = new CVector([0.111]);
    crvec2.div(9).isApprox(cvec, 1e-3).should.false;
    crvec2.div(9).isApprox(cvec, 1e-2).should.true;
  });

  it('#isSquare() should return true if this is square', function() {
    crvec.isSquare.should.be.a.Function;

    crvec.isSquare().should.be.false;
    CRowVector(1).isSquare().should.be.true;
  });

  it('#isZero() should return true if this is zero', function() {
    crvec.isZero.should.be.a.Function;

    crvec.isZero().should.be.false;

    var crvec2 = new CRowVector(3).set([
      0, 0, 0.0001
    ]);
    crvec2.isZero().should.be.false;
    crvec2.isZero(1e-4).should.be.true;
  });

  it('#isOnes() should return true if this is ones', function() {
    crvec.isOnes.should.be.a.Function;

    crvec.isOnes().should.be.false;

    var crvec2 = new CRowVector(3).set([
      1, 1.0001, 0.9997
    ]);
    crvec2.isOnes().should.be.false;
    crvec2.isOnes(1e-4).should.be.false;
    crvec2.isOnes(1e-3).should.be.true;
  });

  it('#isIdentity() should return true if this is identity', function() {
    crvec.isIdentity.should.be.a.Function;

    crvec.isIdentity().should.be.false;

    var crvec2 = new CRowVector([1]);
    crvec2.isIdentity().should.be.true;
  });

  it('#isDiagonal() should return true if this is diagonal', function() {
    crvec.isDiagonal.should.be.a.Function;

    crvec.isDiagonal().should.be.false;

    var crvec2 = crvec.block(0, 1);
    crvec2.isDiagonal().should.be.true;
  });

  it('#allFinite() should return true if it contains only finite numbers, i.e., no NaN and no +/-INF values', function() {
    crvec.allFinite.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");
    crvec.allFinite().should.be.true;
    crvec.set(0, Infinity);
    crvec.allFinite().should.be.false;
  });

  it('#hasNaN() should return true if it contains at least one Not A Number (NaN)', function() {
    crvec.hasNaN.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");
    crvec.hasNaN().should.be.false;
    crvec.set(0, NaN);
    crvec.hasNaN().should.be.true;
  });

  it('#Zero() should return a zero complex row-vector', function() {
    CRowVector.Zero.should.be.a.Function;

    CRowVector.Zero(3).toString().should.equal("(0,0) (0,0) (0,0)");

    CRowVector.Zero(3).equals(
      new CRowVector([
        Complex(0, 0), Complex(0, 0), Complex(0, 0)
      ])
    ).should.true;
  });

  it('#Ones() should return a ones complex row-vector', function() {
    CRowVector.Ones.should.be.a.Function;

    CRowVector.Ones(3).toString().should.equal("(1,0) (1,0) (1,0)");

    CRowVector.Ones(3).equals(
      new CRowVector([
        Complex(1, 0), Complex(1, 0), Complex(1, 0)
      ])
    ).should.true;
  });

  it('#Constant() should return a CRowVector with constant values', function() {
    CRowVector.Constant.should.be.a.Function;

    var crvec2 = CRowVectorBlock.Constant(4, 0.6);
    crvec2.should.instanceOf(CRowVector);
    crvec2.toString().should.equal("(0.6,0) (0.6,0) (0.6,0) (0.6,0)");
  });

  it('#Identity() should return a identity complex row-vector', function() {
    CRowVector.Identity.should.be.a.Function;

    CRowVector.Identity(0).toString().should.equal("");

    crvec = CRowVector.Identity(3);
    crvec.equals(new CRowVector([
      1, 0, 0
    ])).should.true;

    (function() {
      crvec.equals(
        new CRowVector([
          1, 0, 0, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#Random() should return a complex row-vectorx with random values', function() {
    CRowVector.Random.should.be.a.Function;

    var crvec2 = RowVector.Random(3);
    crvec2.rows().should.equal(1);
    crvec2.cols().should.equal(3);

    var crvec3 = CRowVector.Random(999, 3);
    crvec3.rows().should.equal(1);
    crvec3.cols().should.equal(3);

  });

  it("#block() should return a complex row-vector block", function() {
    crvec.block.should.be.a.Function;

    var crvblock = crvec.block(1, 2);
    crvblock.should.instanceOf(CRowVectorBlock);
    crvblock.toString().should.equal("(2,2) (3,3)");

    crvblock.assign(CRowVector([
      -1, -2
    ]));

    crvec.toString().should.equal(" (1,1) (-1,0) (-2,0)");
  });

  it("#row() should return a row matrix of the complex row-vector", function() {
    crvec.row.should.be.a.Function;

    var row = crvec.row(0);
    row.should.instanceOf(CRowVectorBlock);
    row.toString().should.equal("(1,1) (2,2) (3,3)");

    (function() {
      crvec.row(1);
    }).should.throw("The row or column number is out of range");
  });

  it("#col() should return a column matrix of the complex row-vector", function() {
    crvec.col.should.be.a.Function;

    var col = crvec.col(0);
    col.should.instanceOf(CRowVectorBlock);
    col.toString().should.equal("(1,1)");

    (function() {
      crvec.col(3);
    }).should.throw("The row or column number is out of range");
  });

  it("#head() should return a dynamic-size expression of the first coefficients of it", function() {
    crvec.head.should.be.a.Function;

    var head = crvec.head(2);
    head.should.instanceOf(CRowVectorBlock);
    head.toString().should.equal("(1,1) (2,2)");

    (function() {
      crvec.head(4);
    }).should.throw("Invalid argument");
  });

  it("#tail() should return a dynamic-size expression of the last coefficients of it", function() {
    crvec.tail.should.be.a.Function;

    var tail = crvec.tail(2);
    tail.should.instanceOf(CRowVectorBlock);
    tail.toString().should.equal("(2,2) (3,3)");

    (function() {
      crvec.tail(4);
    }).should.throw("Invalid argument");
  });

  it("#topRows() should return a block consisting of the top rows of it", function() {
    crvec.topRows.should.be.a.Function;

    var crvblock = crvec.topRows(1);
    crvblock.should.instanceOf(CRowVectorBlock);
    crvblock.toString().should.equal("(1,1) (2,2) (3,3)");

    (function() {
      crvec.topRows(2);
    }).should.throw("Invalid argument");

    (function() {
      crvec.topRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRows() should return a block consisting of the bottom rows of it", function() {
    crvec.bottomRows.should.be.a.Function;

    var crvblock = crvec.bottomRows(1);
    crvblock.should.instanceOf(CRowVectorBlock);
    crvblock.toString().should.equal("(1,1) (2,2) (3,3)");

    (function() {
      crvec.bottomRows(2);
    }).should.throw("Invalid argument");

    (function() {
      crvec.bottomRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleRows() should return a block consisting of a range of rows of it", function() {
    crvec.middleRows.should.be.a.Function;

    var crvblock = crvec.middleRows(0, 1);
    crvblock.should.instanceOf(CRowVectorBlock);
    crvblock.toString().should.equal("(1,1) (2,2) (3,3)");

    (function() {
      crvec.middleRows(2, 1);
    }).should.throw("Invalid argument");

    (function() {
      crvec.middleRows(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#leftCols() should return a block consisting of the left columns of it", function() {
    crvec.leftCols.should.be.a.Function;

    var crvblock = crvec.leftCols(2);
    crvblock.should.instanceOf(CRowVectorBlock);
    crvblock.toString().should.equal("(1,1) (2,2)");

    (function() {
      crvec.leftCols(4);
    }).should.throw("Invalid argument");

    (function() {
      crvec.leftCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#rightCols() should return a block consisting of the right columns of it", function() {
    crvec.rightCols.should.be.a.Function;

    var crvblock = crvec.rightCols(2);
    crvblock.should.instanceOf(CRowVectorBlock);
    crvblock.toString().should.equal("(2,2) (3,3)");

    (function() {
      crvec.rightCols(4);
    }).should.throw("Invalid argument");

    (function() {
      crvec.rightCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleCols() should return a block consisting of a range of columns of it", function() {
    crvec.middleCols.should.be.a.Function;

    var crvblock = crvec.middleCols(1, 1);
    crvblock.should.instanceOf(CRowVectorBlock);
    crvblock.toString().should.equal("(2,2)");

    (function() {
      crvec.middleCols(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      crvec.middleCols(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topLeftCorner() should return a block consisting of a top-left corner of it", function() {
    crvec.topLeftCorner.should.be.a.Function;

    var crvblock = crvec.topLeftCorner(1, 2);
    crvblock.should.instanceOf(CRowVectorBlock);
    crvblock.toString().should.equal("(1,1) (2,2)");

    (function() {
      crvec.topLeftCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      crvec.topLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topRightCorner() should return a block consisting of a top-right corner of it", function() {
    crvec.topRightCorner.should.be.a.Function;

    var crvblock = crvec.topRightCorner(1, 2);
    crvblock.should.instanceOf(CRowVectorBlock);
    crvblock.toString().should.equal("(2,2) (3,3)");

    (function() {
      crvec.topRightCorner(1, 4);
    }).should.throw("Invalid argument");

    (function() {
      crvec.topRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomLeftCorner() should return a block consisting of a bottom-left corner of it", function() {
    crvec.bottomLeftCorner.should.be.a.Function;

    var crvblock = crvec.bottomLeftCorner(1, 2);
    crvblock.should.instanceOf(CRowVectorBlock);
    crvblock.toString().should.equal("(1,1) (2,2)");

    (function() {
      crvec.bottomLeftCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      crvec.bottomLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRightCorner() should return a block consisting of a bottom-right corner of it", function() {
    crvec.bottomRightCorner.should.be.a.Function;

    var crvblock = crvec.bottomRightCorner(1, 2);
    crvblock.should.instanceOf(CRowVectorBlock);
    crvblock.toString().should.equal("(2,2) (3,3)");

    (function() {
      crvec.bottomRightCorner(3, 1);
    }).should.throw("Invalid argument");

    (function() {
      crvec.bottomRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#replicate() should return a complex matrix which is replicated", function() {
    crvec.replicate.should.be.a.Function;

    crvec.replicate(0, 0).toString().should.equal("");
    crvec.replicate(0, 1).toString().should.equal("");
    crvec.replicate(1, 0).toString().should.equal("");
    crvec.replicate(1, 1).toString().should.equal("(1,1) (2,2) (3,3)");
    crvec.replicate(2, 1).toString().should.equal("(1,1) (2,2) (3,3)\n(1,1) (2,2) (3,3)");
    crvec.replicate(1, 2).toString().should.equal("(1,1) (2,2) (3,3) (1,1) (2,2) (3,3)");
    crvec.replicate(2, 2).toString().should.equal("(1,1) (2,2) (3,3) (1,1) (2,2) (3,3)\n(1,1) (2,2) (3,3) (1,1) (2,2) (3,3)");

    (function() {
      crvec.replicate(-1, 0);
    }).should.throw("Invalid argument");
  });

  it("#dot() should return the dot product of two complex row-vectors", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new CRowVector(crvec.cols())).equals(Complex(0));
    crvec.dot(crvec).equals(Complex(28)).should.be.true;

    (function() {
      crvec.dot(new CRowVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a vector", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new Vector(crvec.cols())).equals(Complex(0));
    crvec.dot(new Vector([5,
                          6,
                          7])).equals(Complex(38, -38)).should.be.true;

    (function() {
      crvec.dot(new Vector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a row-vector", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new RowVector(crvec.cols())).equals(Complex(0));
    crvec.dot(new RowVector([4, 5, 6])).equals(Complex(32, -32)).should.be.true;

    (function() {
      crvec.dot(new RowVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a complex vector", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new CVector(crvec.cols())).equals(Complex(0));
    crvec.dot(new CVector([4,
                           5,
                           6])).equals(Complex(32, -32)).should.be.true;

    (function() {
      crvec.dot(new CVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a vector block", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new Vector(crvec.cols()).block(0, crvec.cols())).equals(Complex(0)).should.be.true;
    crvec.dot(new Vector([4,
                          5,
                          6]).block(0, crvec.cols())).equals(Complex(32, -32)).should.be.true;

    (function() {
      crvec.dot(new Vector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a row-vector block", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new RowVector(crvec.cols()).block(0, crvec.cols())).equals(Complex(0)).should.be.true;
    crvec.dot(new RowVector([4, 5, 6]).block(0, 3)).equals(Complex(32, -32)).should.be.true;

    (function() {
      crvec.dot(new RowVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a complex vector block", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new CVector(crvec.cols()).block(0, crvec.cols())).equals(Complex(0)).should.be.true;
    crvec.dot(new CVector([4,
                           5,
                           6]).block(0, 3)).equals(Complex(32, -32)).should.be.true;

    (function() {
      crvec.dot(new CVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a complex row-vector block", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new CRowVector(crvec.cols()).block(0, crvec.cols())).equals(Complex(0)).should.be.true;
    crvec.dot(new CRowVector([4, 5, 6]).block(0, 3)).equals(Complex(32, -32)).should.be.true;

    (function() {
      crvec.dot(new RowVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a matrix (1xm)", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new Matrix(1, crvec.cols())).equals(Complex(0)).should.be.true;
    crvec.dot(new Matrix(1, crvec.cols()).set([4, 5, 6])).equals(Complex(32, -32)).should.be.true;

    (function() {
      crvec.dot(new Matrix(1, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a matrix block (1xm)", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new Matrix(1, crvec.cols()).row(0)).equals(Complex(0)).should.be.true;
    crvec.dot(new Matrix(1, crvec.cols()).set([4, 5, 6]).row(0)).equals(Complex(32, -32)).should.be.true;

    (function() {
      crvec.dot(new Matrix(1, 1).row(0));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a complex matrix (1xm)", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new CMatrix(1, crvec.cols())).equals(Complex(0)).should.be.true;
    crvec.dot(new CMatrix(1, crvec.cols()).set([4, 5, 6])).equals(Complex(32, -32)).should.be.true;

    (function() {
      crvec.dot(new CMatrix(1, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a complex matrix block (1xm)", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new CMatrix(1, crvec.cols()).row(0)).equals(Complex(0)).should.be.true;
    crvec.dot(new CMatrix(1, crvec.cols()).set([4, 5, 6]).row(0)).equals(Complex(32, -32)).should.be.true;

    (function() {
      crvec.dot(new CMatrix(1, 1).row(0));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a matrix (mx1)", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new Matrix(crvec.cols(), 1)).equals(Complex(0)).should.be.true;
    crvec.dot(new Matrix(crvec.cols(), 1).set([
      4,
      5,
      6
    ])).equals(Complex(32, -32)).should.be.true;

    (function() {
      crvec.dot(new Matrix(1, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a matrix block (mx1)", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new Matrix(crvec.cols(), 1).col(0)).equals(Complex(0)).should.be.true;
    crvec.dot(new Matrix(crvec.cols(), 1).set([
      4,
      5,
      6
    ]).col(0)).equals(Complex(32, -32)).should.be.true;

    (function() {
      crvec.dot(new Matrix(1, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a complex matrix (mx1)", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new CMatrix(crvec.cols(), 1)).equals(Complex(0)).should.be.true;
    crvec.dot(new CMatrix(crvec.cols(), 1).set([
      4,
      5,
      6
    ])).equals(Complex(32, -32)).should.be.true;

    (function() {
      crvec.dot(new CMatrix(1, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex row-vector and a complec matrix block (mx1)", function() {
    crvec.dot.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    crvec.dot(new CMatrix(crvec.cols(), 1).col(0)).equals(Complex(0)).should.be.true;
    crvec.dot(new CMatrix(crvec.cols(), 1).set([
      4,
      5,
      6
    ]).col(0)).equals(Complex(32, -32)).should.be.true;

    (function() {
      crvec.dot(new CMatrix(1, 1));
    }).should.throw("Invalid argument")
  });

  it("#asDiagonal() should return a complex diagonal", function() {
    crvec.asDiagonal.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    var dia = crvec.asDiagonal();
    dia.should.instanceOf(CMatrix);

    dia.toString().should.equal("(1,1) (0,0) (0,0)\n(0,0) (2,2) (0,0)\n(0,0) (0,0) (3,3)");
  });

  it("#normalize() should normalizes the complex row-vector", function() {
    crvec.normalize.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");
    crvec.normalize();
    crvec.toString().should.equal("(0.188982,0.188982) (0.377964,0.377964) (0.566947,0.566947)");
  });

  it("#redux() should return a full redux operation on the whole complex matrix", function() {
    crvec.redux.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    var result = crvec.redux(function(a, b){
      return a.add(b);
    })
    result.equals(Complex(6,6)).should.be.true;
  });

  it("#sum() should return a full sum operation on the whole complex matrix", function() {
    crvec.sum.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    var result = crvec.sum();
    result.equals(Complex(6, 6)).should.be.true;
  });

  it("#prod() should return a full product operation on the whole complex matrix", function() {
    crvec.prod.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    var result = crvec.prod();
    result.equals(Complex(-12, 12)).should.be.true;
  });

  it("#mean() should return a full mean operation on the whole complex matrix", function() {
    crvec.mean.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    var result = crvec.mean();
    result.equals(Complex(2, 2)).should.be.true;
  });

  it("#visit() should apply the visitor operation on the whole complex row-vector", function() {
    crvec.visit.should.be.a.Function;

    crvec.toString().should.equal("(1,1) (2,2) (3,3)");

    var sum = Complex(0);
    crvec.visit(function(scalar, row, col) {
      scalar.should.instanceOf(Complex);
      row.should.be.a.Number;
      col.should.be.a.Number;
      row.should.equal(0);
      crvec.get(col).equals(scalar).should.true;
      sum.adda(scalar);
    });

    crvec.sum().equals(sum).should.true;
  });
});
