const
    Eigen = require('../index.js'),
    Matrix = Eigen.Matrix,
    Vector = Eigen.Vector,
    CMatrix = Eigen.CMatrix,
    CVector = Eigen.CVector,
    Complex = Eigen.Complex,
    CVectorBlock = Eigen.CVectorBlock,
    CRowVector = Eigen.CRowVector,
    RowVector = Eigen.RowVector,
    should = require('should');

describe('CVector', function() {
  var cvec;

  it('#CVector() should be a function', function() {
    CVector.should.be.a.Function;
  });

  it('should throw error when tried creating a complex vector without size or a scalar array argument', function() {
    (function() { new CVector(); }).should.throw('Invalid argument');
    (function() { new CVector(1); }).should.not.throw();
    CVector(1, 2).toString().should.equal("(0,0)");
  });

  it('should be invoked with size argument and return an object', function() {
    CVector(1).should.be.an.Object;
    (new CVector(2)).should.be.an.Object;
  });

  it('#CVector(3) should return the complex vector of size 3', function() {
    cvec = CVector(3);
    cvec.rows().should.equal(3);
    cvec.cols().should.equal(1);
  });

  it('#CVector() should return the complex vector with a scalar array', function() {
    cvec = CVector([1, 2, 3]);
    cvec.rows().should.equal(3);
    cvec.cols().should.equal(1);
    cvec.toString().should.equal("(1,0)\n(2,0)\n(3,0)");
  });

  beforeEach(function() {
    cvec = CVector([
      Complex(1, 1),
      Complex(2, 2),
      Complex(3, 3),
      Complex(4, 4),
      Complex(5, 5),
      Complex(6, 6)
    ]);
  });

  it('#CVector() should created by CMatrix', function() {
    var cmat = new CMatrix.Random(3, 1);
    var cvec2 = new CVector(cmat);
    cvec2.toString().should.equal(cmat.toString());

    cmat2 = new CMatrix.Random(1, 3);
    var cvec3 = new CVector(cmat2);
    cvec3.toString({ rowSeparator: ' ' }).should.equal(cmat2.toString());
  });

  it('#CVector() should created by CMatrixBlock', function() {
    var cmat = new CMatrix.Random(3, 3);
    var cmblock = cmat.col(0);
    var cmblock2 = cmat.row(0);

    var cvec2 = new CVector(cmblock);
    cvec2.toString().should.equal(cmblock.toString());

    var cvec3 = new CVector(cmblock2);
    cvec3.toString({ rowSeparator: ' ' }).should.equal(cmblock2.toString());
  });

  it('#CVector() should created by CVector', function() {
    var cvec2 = new CVector(cvec);
    cvec2.equals(cvec).should.be.true;
  });

  it('#CVector() should created by CVectorBlock', function() {
    var cvblock = cvec.col(0);
    var cvec2 = new CVector(cvblock);
    cvec2.equals(cvec).should.be.true;
  });

  it('#CVector() should created by CRowVector', function() {
    var crvec = new CRowVector([1, 2, 3]);
    var cvec2 = new CVector(crvec);
    cvec2.visit(function(value, row, col) {
      value.equals(crvec.get(row)).should.be.true;
    });
  });

  it('#CVector() should created by CRowVectorBlock', function() {
    var crvec = new CRowVector([1, 2, 3]);
    var crblock = crvec.row(0);
    var cvec2 = new CVector(crblock);
    cvec2.visit(function(value, row, col) {
      value.equals(crvec.get(row)).should.be.true;
    });
  });

  it('#CVector() should created by Matrix', function() {
    var mat = new Matrix.Random(3, 1);
    var cvec2 = new CVector(mat);
    cvec2.visit(function(value, row, col) {
      value.equals(mat.get(row, col)).should.be.true;
    });

    var mat2 = new Matrix.Random(1, 3);
    var cvec3 = new CVector(mat2);
    cvec3.visit(function(value, row, col) {
      value.equals(mat2.get(0, row)).should.be.true;
    });
  });

  it('#CVector() should created by MatrixBlock', function() {
    var cmat = new CMatrix.Random(3, 3);
    var cmblock = cmat.col(0);
    var cmblock2 = cmat.row(0);

    var cvec2 = new CVector(cmblock);
    cvec2.toString().should.equal(cmblock.toString());

    var cvec3 = new CVector(cmblock2);
    cvec3.toString({ rowSeparator: ' ' }).should.equal(cmblock2.toString());
  });

  it('#CVector() should created by Vector', function() {
    var cvec2 = new CVector(cvec);
    cvec2.equals(cvec).should.be.true;
  });

  it('#CVector() should created by VectorBlock', function() {
    var cvblock = cvec.col(0);
    var cvec2 = new CVector(cvblock);
    cvec2.visit(function(value, row, col) {
      value.equals(cvblock.get(row)).should.be.true;
    });
  });

  it('#CVector() should created by RowVector', function() {
    var crvec = new CRowVector.Random(3);
    var cvec2 = new CVector(crvec);
    cvec2.toString({ rowSeparator: ' ' }).should.equal(crvec.toString());
  });

  it('#CVector() should created by RowVectorBlock', function() {
    var crvec = new CRowVector.Random(3);
    var crblock = crvec.row(0);
    var cvec2 = new CVector(crblock);
    cvec2.toString({ rowSeparator: ' ' }).should.equal(crvec.toString());
  });

  it('#set() should throw message when the row is out of range', function() {
    cvec.set.should.be.a.Function;

    (function() {
      cvec.set(6, 68);
    }).should.throw('The row or column number is out of range');
    (function() {
      cvec.set(-1, 500);
    }).should.throw('The row or column number is out of range');
  });

  it('#set() with array argument should work ok', function() {
    cvec.set.should.be.a.Function;

    CVector(6).set([
      Complex(1, 1),
      Complex(2, 2),
      Complex(3, 3),
      Complex(4, 4),
      Complex(5, 5),
      Complex(6, 6)
    ]).toString().should.eql(cvec.toString());

    (function() {
      CVector(6).set([
        1,
        2,
        3
      ]);
    }).should.throw('Too few coefficients');

    (function() {
      CVector(6).set([
         1,
         2,
         3,
         4,
         5,
         6,
         7
      ]);
    }).should.throw('Too many coefficients');
  });

  it('#get() should return the element value of CVector', function() {
    cvec.get.should.be.a.Function;

    (function(){
      cvec.get(6);
    }).should.throw('The row or column number is out of range');
  });

  it('#value() should return the unique coefficient of a 1x1 expression', function() {
    cvec.value.should.be.a.Function;

    (function(){
      cvec.value();
    }).should.throw('The size of row and column values must equal 1');

    var cvec2 = new CVector(1);
    cvec2.value().equals(0).should.be.true;
  });

  it('#setZero() should set all coefficients to zero', function() {
    cvec.setZero.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");
    cvec.setZero().toString().should.equal("(0,0)\n(0,0)\n(0,0)\n(0,0)\n(0,0)\n(0,0)");
  });

  it('#setOnes() should set all coefficients to ones', function() {
    cvec.setOnes.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");
    cvec.setOnes().toString().should.equal("(1,0)\n(1,0)\n(1,0)\n(1,0)\n(1,0)\n(1,0)");
  });

  it('#setConstant() should set all coefficients to constant', function() {
    cvec.setConstant.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");
    cvec.setConstant(0.6).toString().should.equal("(0.6,0)\n(0.6,0)\n(0.6,0)\n(0.6,0)\n(0.6,0)\n(0.6,0)");
    cvec.setConstant(Complex(3, -4)).toString().should.equal("(3,-4)\n(3,-4)\n(3,-4)\n(3,-4)\n(3,-4)\n(3,-4)");
  });

  it('#setRandom() should set all coefficients to random', function() {
    cvec.setRandom.should.be.a.Function;
    cvec.setRandom();
  });

  it('#setIdentity() should write the identity expression into itself', function() {
    cvec.setIdentity.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");
    cvec.setIdentity().toString().should.equal("(1,0)\n(0,0)\n(0,0)\n(0,0)\n(0,0)\n(0,0)");
  });

  it('#setDiagonal() should set the diagonal to other values', function() {
    cvec.setDiagonal.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");
    cvec.setDiagonal(0, Vector.Zero(1)).toString().should.equal("(0,0)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");
    cvec.setDiagonal(0, RowVector.Ones(1)).toString().should.equal("(1,0)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");
    cvec.setDiagonal(0, CVector.Zero(1)).toString().should.equal("(0,0)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");
    cvec.setDiagonal(0, CRowVector.Ones(1)).toString().should.equal("(1,0)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    (function(){
      cvec.setDiagonal(68, Vector.Random(3));
    }).should.throw('Invalid index argument');

    (function(){
      cvec.setDiagonal(-500, RowVector.Random(3));
    }).should.throw('Invalid index argument');

    (function(){
      cvec.setDiagonal(68, CVector.Random(3));
    }).should.throw('Invalid index argument');

    (function(){
      cvec.setDiagonal(-500, CRowVector.Random(3));
    }).should.throw('Invalid index argument');
  });

  it('#toString() should return all element values of CVector', function() {
    cvec.toString.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");
  });

  it('#add() should return the sum of two complex vector', function() {
    cvec.add.should.be.a.Function;

    CVector(6).set([
       2,
       4,
       6,
       8,
      10,
      12
    ]).add(cvec).toString().should.equal(" (3,1)\n (6,2)\n (9,3)\n(12,4)\n(15,5)\n(18,6)");

    (function() {
      CVector(2).set([
        1,
        0
      ]).add(cvec);
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex vector and a vector', function() {
    cvec.add.should.be.a.Function;

    cvec.add(Vector(6).set([
       2,
       4,
       6,
       8,
      10,
      12
    ])).toString().should.equal(" (3,1)\n (6,2)\n (9,3)\n(12,4)\n(15,5)\n(18,6)");

    (function() {
      CVector(2).set([
        1,
        0
      ]).add(cvec);
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex vector and a matrix', function() {
    cvec.add.should.be.a.Function;

    cvec.add(
      Matrix(6, 1).set([
         2,
         4,
         6,
         8,
        10,
        12
      ])
     ).toString().should.equal(" (3,1)\n (6,2)\n (9,3)\n(12,4)\n(15,5)\n(18,6)");

    (function() {
      cvec.add(
        CMatrix(2, 1).set([
          1,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a complex vector and a complex matrix', function() {
    cvec.add.should.be.a.Function;

    cvec.add(
      CMatrix(6, 1).set([
         2,
         4,
         6,
         8,
        10,
        12
      ])
     ).toString().should.equal(" (3,1)\n (6,2)\n (9,3)\n(12,4)\n(15,5)\n(18,6)");

    (function() {
      cvec.add(
        CMatrix(2, 1).set([
          1,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of two complex vector and saves it back', function() {
    cvec.adda.should.be.a.Function;

    cvec.adda(
      CVector([
         2,
         4,
         6,
         8,
        10,
        12
      ])
    );
    cvec.toString().should.equal(" (3,1)\n (6,2)\n (9,3)\n(12,4)\n(15,5)\n(18,6)");
  });

  it('#adda() should return the sum of a complex vector and a vector then saves it back', function() {
    cvec.adda.should.be.a.Function;

    cvec.adda(
      Vector([
         2,
         4,
         6,
         8,
        10,
        12
      ])
    );
    cvec.toString().should.equal(" (3,1)\n (6,2)\n (9,3)\n(12,4)\n(15,5)\n(18,6)");
  });

  it('#adda() should return the sum of a complex vector and a matrix then saves it back', function() {
    cvec.adda.should.be.a.Function;

    cvec.adda(
      Matrix(6, 1)
      .set([
         2,
         4,
         6,
         8,
        10,
        12
      ])
    );
    cvec.toString().should.equal(" (3,1)\n (6,2)\n (9,3)\n(12,4)\n(15,5)\n(18,6)");
  });

  it('#adda() should return the sum of a complex vector and a complex matrix then saves it back', function() {
    cvec.adda.should.be.a.Function;

    cvec.adda(
      CMatrix(6, 1)
      .set([
         2,
         4,
         6,
         8,
        10,
        12
      ])
    );
    cvec.toString().should.equal(" (3,1)\n (6,2)\n (9,3)\n(12,4)\n(15,5)\n(18,6)");
  });

  it('#sub() should return the difference of two complex vectors', function() {
    cvec.sub.should.be.a.Function;

    cvec.sub(
      CVector([
         2,
         4,
         6,
         8,
        10,
        12
      ])
     ).toString().should.equal("(-1,1)\n(-2,2)\n(-3,3)\n(-4,4)\n(-5,5)\n(-6,6)");

    (function() {
      cvec.sub(CVector([
        1,
        2,
        3
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex vector and a vector', function() {
    cvec.sub.should.be.a.Function;

    cvec.sub(
      Vector([
         2,
         4,
         6,
         8,
        10,
        12
      ])
     ).toString().should.equal("(-1,1)\n(-2,2)\n(-3,3)\n(-4,4)\n(-5,5)\n(-6,6)");

    (function() {
      cvec.sub(Vector([
        1,
        2,
        3
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex vector and a matrix', function() {
    cvec.sub.should.be.a.Function;

    cvec.sub(
      Matrix(6, 1).set([
         2,
         4,
         6,
         8,
        10,
        12
      ])
     ).toString().should.equal("(-1,1)\n(-2,2)\n(-3,3)\n(-4,4)\n(-5,5)\n(-6,6)");

    (function() {
      cvec.sub(
        Matrix(3, 1).set([
          1,
          2,
          3
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a complex vector and a complex matrix', function() {
    cvec.add.should.be.a.Function;

    var cmat = CMatrix(6, 1).set([
      Complex( 2, 0),
      Complex( 4, 1),
      Complex( 6, 2),
      Complex( 8, 4),
      Complex( 9, 5),
      Complex(10, 6),
    ]);

    cvec.sub(cmat).toString().should.equal("(-1,1)\n(-2,1)\n(-3,1)\n(-4,0)\n(-4,0)\n(-4,0)");

    (function() {
      cvec.sub(
        CMatrix(3, 1).set([
          1,
          2,
          3
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of two complex vectors and saves it back', function() {
    cvec.suba.should.be.a.Function;

    var cvec2 = CVector([
       2,
       4, 
       6,
       8,
      10,
      12
    ]);
    cvec2.suba(cvec);
    cvec2.toString().should.equal("(1,-1)\n(2,-2)\n(3,-3)\n(4,-4)\n(5,-5)\n(6,-6)");
  });

  it('#suba() should return the difference of a complex vector and a vector then saves it back', function() {
    cvec.suba.should.be.a.Function;

    var cvec2 = Vector([
       2,
       4, 
       6,
       8,
      10,
      12
    ]);
    cvec.suba(cvec2);
    cvec.toString().should.equal("(-1,1)\n(-2,2)\n(-3,3)\n(-4,4)\n(-5,5)\n(-6,6)");
  });

  it('#suba() should return the difference of a complex vector and a matrix then saves it back', function() {
    cvec.suba.should.be.a.Function;

    var mat = Matrix(6, 1).set([
       2,
       4, 
       6,
       8,
      10,
      12
    ]);
    cvec.suba(mat);
    cvec.toString().should.equal("(-1,1)\n(-2,2)\n(-3,3)\n(-4,4)\n(-5,5)\n(-6,6)");
  });

  it('#suba() should return the difference of a complex vector and a complex matrix then saves it back', function() {
    cvec.suba.should.be.a.Function;

    var cmat = CMatrix(6, 1).set([
       2,
       4, 
       6,
       8,
      10,
      12
    ]);
    cvec.suba(cmat);
    cvec.toString().should.equal("(-1,1)\n(-2,2)\n(-3,3)\n(-4,4)\n(-5,5)\n(-6,6)");
  });

  it('#mul() should return the product of two complex vectors', function() {
    cvec.mul.should.be.a.Function;

    var cvec2 = new CVector([-1]);
    cvec.mul(cvec2).toString().should.equal("(-1,-1)\n(-2,-2)\n(-3,-3)\n(-4,-4)\n(-5,-5)\n(-6,-6)");

    (function() {
      cvec2.mul(cvec)
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex vectors and a vector', function() {
    cvec.mul.should.be.a.Function;

    var vec = new Vector([-1]);
    cvec.mul(vec).toString().should.equal("(-1,-1)\n(-2,-2)\n(-3,-3)\n(-4,-4)\n(-5,-5)\n(-6,-6)");
  });

  it('#mul() should return the product of a complex vector and a matrix', function() {
    cvec.mul.should.be.a.Function;

    var mat = new Matrix(1, 6).set([
       2, 4, 6, 8, 10, 12
    ]);
    cvec.mul(mat).toString().should.equal("  (2,2)   (4,4)   (6,6)   (8,8) (10,10) (12,12)\n  (4,4)   (8,8) (12,12) (16,16) (20,20) (24,24)\n  (6,6) (12,12) (18,18) (24,24) (30,30) (36,36)\n  (8,8) (16,16) (24,24) (32,32) (40,40) (48,48)\n(10,10) (20,20) (30,30) (40,40) (50,50) (60,60)\n(12,12) (24,24) (36,36) (48,48) (60,60) (72,72)");

    (function() {
      cvec.mul(Matrix(3, 1).set([2, 4, 6]));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a complex vector and a complex matrix', function() {
    cvec.mul.should.be.a.Function;

    var cmat = new CMatrix(1, 3).set([Complex(1, 1), Complex(2, 2), Complex(3, 3)]);
    cvec.mul(cmat).toString().should.equal(" (0,2)  (0,4)  (0,6)\n (0,4)  (0,8) (0,12)\n (0,6) (0,12) (0,18)\n (0,8) (0,16) (0,24)\n(0,10) (0,20) (0,30)\n(0,12) (0,24) (0,36)");
  });

  it('#mul() should return the product of a vector and a scalar value', function() {
    cvec.mul.should.be.a.Function;

    cvec.mul(-1).toString().should.equal("(-1,-1)\n(-2,-2)\n(-3,-3)\n(-4,-4)\n(-5,-5)\n(-6,-6)");
  });

  it('#mul() should return the product of a vector and a complex value', function() {
    cvec.mul.should.be.a.Function;

    cvec.mul(-1).toString().should.equal("(-1,-1)\n(-2,-2)\n(-3,-3)\n(-4,-4)\n(-5,-5)\n(-6,-6)");
  });

  it('#mul() should return the product of a vector and a complex value', function() {
    cvec.mul.should.be.a.Function;

    var c = new Complex(-1, 0);
    cvec.mul(c).toString().should.equal("(-1,-1)\n(-2,-2)\n(-3,-3)\n(-4,-4)\n(-5,-5)\n(-6,-6)");
  });

  it('#mula() should return the product of two complecies vector and saves it back', function() {
    cvec.mula.should.be.a.Function;

    cvec.mula(CVector([2]));
    cvec.toString().should.equal("  (2,2)\n  (4,4)\n  (6,6)\n  (8,8)\n(10,10)\n(12,12)");
  });

  it('#mula() should return the product of a complex vector and a vector then saves it back', function() {
    cvec.mula.should.be.a.Function;

    cvec.mula(Vector([2]));
    cvec.toString().should.equal("  (2,2)\n  (4,4)\n  (6,6)\n  (8,8)\n(10,10)\n(12,12)");
  });

  it('#mula() should return the product of a complex vector and a matrix then saves it back', function() {
    cvec.mula.should.be.a.Function;

    cvec.mula(Matrix(1, 1).set([2]));
    cvec.toString().should.equal("  (2,2)\n  (4,4)\n  (6,6)\n  (8,8)\n(10,10)\n(12,12)");

    (function() {
      cvec.mula(Matrix(3, 1).set([2, 4, 6]));
    }).should.throw("Invalid matrix product");

    (function() {
      cvec.mula(Matrix(1, 3).set([2, 4, 6]));
    }).should.throw("The matrix size must be 1x1");
  });

  it('#mula() should return the product of a complex vector and a complex matrix then saves it back', function() {
    cvec.mula.should.be.a.Function;

    cvec.mula(CMatrix(1, 1).set([2]));
    cvec.toString().should.equal("  (2,2)\n  (4,4)\n  (6,6)\n  (8,8)\n(10,10)\n(12,12)");

    (function() {
      cvec.mula(CMatrix(3, 1).set([2, 4, 6]));
    }).should.throw("Invalid matrix product");

    (function() {
      cvec.mula(CMatrix(1, 3).set([2, 4, 6]));
    }).should.throw("The complex matrix size must be 1x1");
  });

  it('#mula() should return the product of a complex vector and a scalar value then saves it back', function() {
    cvec.mula.should.be.a.Function;

    cvec.mula(2);
    cvec.toString().should.equal("  (2,2)\n  (4,4)\n  (6,6)\n  (8,8)\n(10,10)\n(12,12)");
  });

  it('#mula() should return the product of a complex vector and a complex value then saves it back', function() {
    cvec.mula.should.be.a.Function;

    cvec.mula(new Complex(-1, -1));
    cvec.toString().should.equal(" (0,-2)\n (0,-4)\n (0,-6)\n (0,-8)\n(0,-10)\n(0,-12)");
  });

  it('#div() should return a CVector which be divied by a scalar value', function() {
    cvec.div.should.be.a.Function;

    cvec.div(2).toString().should.equal("(0.5,0.5)\n    (1,1)\n(1.5,1.5)\n    (2,2)\n(2.5,2.5)\n    (3,3)");
  });

  it('#div() should return a CVector which be divied by a comple value', function() {
    cvec.div.should.be.a.Function;

    cvec.div(Complex(2, 0)).toString().should.equal("(0.5,0.5)\n    (1,1)\n(1.5,1.5)\n    (2,2)\n(2.5,2.5)\n    (3,3)");
  });

  it('#diva() should return a Matrix which be divied by a scalar value then saves it back', function() {
    cvec.diva.should.be.a.Function;

    cvec.diva(2);
    cvec.toString().should.equal("(0.5,0.5)\n    (1,1)\n(1.5,1.5)\n    (2,2)\n(2.5,2.5)\n    (3,3)");
  });

  it('#diva() should return a Matrix which be divied by a comple value then saves it back', function() {
    cvec.diva.should.be.a.Function;

    cvec.diva(Complex(2, 0));
    cvec.toString().should.equal("(0.5,0.5)\n    (1,1)\n(1.5,1.5)\n    (2,2)\n(2.5,2.5)\n    (3,3)");
  });

  it('#transpose() should return the transpose of a complex matrix', function() {
    cvec.transpose.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    var crvec = cvec.transpose();
    crvec.should.instanceOf(CRowVector);
    crvec.toString().should.equal("(1,1) (2,2) (3,3) (4,4) (5,5) (6,6)");
  });

  it('#conjugate() should return the conjugate of a complex matrix', function() {
    cvec.conjugate.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    var cvec2 = cvec.conjugate();
    cvec2.should.instanceOf(CVector);

    cvec2.toString().should.equal("(1,-1)\n(2,-2)\n(3,-3)\n(4,-4)\n(5,-5)\n(6,-6)");
  });

  it('#adjoint() should return the adjoint of a complex matrix', function() {
    cvec.adjoint.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    var crvec = cvec.adjoint();
    crvec.should.instanceOf(CRowVector);
    crvec.toString().should.equal("(1,-1) (2,-2) (3,-3) (4,-4) (5,-5) (6,-6)");
  });

  it('#determinant() should return the determinant of a complex matrix', function() {
    cvec.determinant.should.be.a.Function;

    (function() {
      cvec.determinant();
    }).should.throw("The matrix must be square");

    CVector([5]).determinant().equals(Complex(5)).should.true;
  });

  it('#inverse() should return the inverse of a complex matrix', function() {
    cvec.inverse.should.be.a.Function;

    (function() {
      cvec.inverse();
    }).should.throw("The matrix must be square");

    var mat2 = Vector([6]).inverse();
    mat2.should.instanceOf(Matrix);
    mat2.equals(Matrix(1, 1).set([1 / 6])).should.true;
  });

  it('#trace() should return the trace of a complex matrix', function() {
    cvec.trace.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    var trace = cvec.trace();
    trace.equals(Complex(1, 1)).should.be.true;
  });

  it('#diagonal() should return the diagonal of a complex matrix', function() {
    cvec.diagonal.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    var dia = cvec.diagonal();
    dia.should.instanceOf(CVector);
    dia.toString().should.equal("(1,1)");
    cvec.diagonal(-1).toString().should.equal("(2,2)");
    cvec.diagonal(-2).toString().should.equal("(3,3)");
    cvec.diagonal(-3).toString().should.equal("(4,4)");
    cvec.diagonal(-4).toString().should.equal("(5,5)");
    cvec.diagonal(-5).toString().should.equal("(6,6)");

    (function() {
      cvec.diagonal(cvec.cols());
    }).should.throw("Invalid index argument");

    (function() {
      cvec.diagonal(-cvec.rows());
    }).should.throw("Invalid index argument");
  });

  it('#norm() should return the l2 norm', function() {
    cvec.norm.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    var sum = 0;

    for (var i = 0; i < cvec.rows(); ++i) {
      sum += cvec.get(i).norm();
    }

    cvec.norm().should.equal(Math.pow(sum, 0.5));
  });

  it('#equals() should return true if two complex vectors are equal', function() {
    cvec.equals.should.be.a.Function;

    cvec.equals(cvec).should.ok;
    cvec.equals(new CVector([
      Complex(1, 1),
      Complex(2, 2),
      Complex(3, 3),
      Complex(4, 4),
      Complex(5, 5),
      Complex(6, 6)
    ])).should.ok;
  });

  it('#equals() should return true if a complex vector and a complex matrix are equal', function() {
    cvec.equals.should.be.a.Function;

    cvec.equals(cvec).should.ok;
    cvec.equals(new CVector(6, 1).set([
      Complex(1, 1),
      Complex(2, 2),
      Complex(3, 3),
      Complex(4, 4),
      Complex(5, 5),
      Complex(6, 6)
    ])).should.ok;
  });

  it('#isApprox() should return true if this is approximately equal to other', function() {
    cvec.isApprox.should.be.a.Function;

    var cvec2 = new CVector([
      Complex(0.111, 0.111),
      Complex(0.222, 0.222),
      Complex(0.333, 0.333),
      Complex(0.444, 0.444),
      Complex(0.555, 0.555),
      Complex(0.666, 0.666)
    ]);

    cvec.div(9).isApprox(cvec2, 1e-3).should.false;
    cvec.div(9).isApprox(cvec2, 1e-2).should.true;

    (function() {
      cvec.isApprox(
        new CVector([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isSquare() should return true if this is square', function() {
    cvec.isSquare.should.be.a.Function;

    cvec.isSquare().should.be.false;
    CVector(1).isSquare().should.be.true;
  });

  it('#isZero() should return true if this is zero', function() {
    cvec.isZero.should.be.a.Function;

    cvec.isZero().should.be.false;

    var cvec2 = new CVector(3).set([
      0,
      0,
      0.0001
    ]);
    cvec2.isZero().should.be.false;
    cvec2.isZero(1e-4).should.be.true;
  });

  it('#isOnes() should return true if this is ones', function() {
    cvec.isOnes.should.be.a.Function;

    cvec.isOnes().should.be.false;

    var cvec2 = new CVector(3).set([
      1,
      1.0001,
      0.9997
    ]);
    cvec2.isOnes().should.be.false;
    cvec2.isOnes(1e-4).should.be.false;
    cvec2.isOnes(1e-3).should.be.true;
  });

  it('#isApprox() should return true if this is approximately equal to a complex matrix', function() {
    cvec.isApprox.should.be.a.Function;

    var cvec2 = new CMatrix(6, 1).set([
      Complex(0.111, 0.111),
      Complex(0.222, 0.222),
      Complex(0.333, 0.333),
      Complex(0.444, 0.444),
      Complex(0.555, 0.555),
      Complex(0.666, 0.666)
    ]);

    cvec.div(9).isApprox(cvec2, 1e-3).should.false;
    cvec.div(9).isApprox(cvec2, 1e-2).should.true;

    (function() {
      cvec.isApprox(
        new CVector([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isIdentity() should return true if this is identity', function() {
    cvec.isIdentity.should.be.a.Function;

    cvec.isIdentity().should.be.false;

    var cvec2 = new CVector([1]);
    cvec2.isIdentity().should.be.true;
  });

  it('#isDiagonal() should return true if this is diagonal', function() {
    cvec.isDiagonal.should.be.a.Function;

    cvec.isDiagonal().should.be.false;

    var cvec2 = new CVector(1);
    cvec2.isDiagonal().should.be.true;
  });

  it('#allFinite() should return true if it contains only finite numbers, i.e., no NaN and no +/-INF values', function() {
    cvec.allFinite.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");
    cvec.allFinite().should.be.true;
    cvec.set(0, Infinity);
    cvec.allFinite().should.be.false;
  });

  it('#hasNaN() should return true if it contains at least one Not A Number (NaN)', function() {
    cvec.hasNaN.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");
    cvec.hasNaN().should.be.false;
    cvec.set(0, NaN);
    cvec.hasNaN().should.be.true;
  });

  it('#Zero() should return a zero complex vector', function() {
    CVector.Zero.should.be.a.Function;

    CVector.Zero(6).toString().should.equal("(0,0)\n(0,0)\n(0,0)\n(0,0)\n(0,0)\n(0,0)");

    CVector.Zero(3).equals(
      new CVector([
        0,
        0,
        0
      ])
    ).should.true;
  });

  it('#Ones() should return a ones complex vector', function() {
    CVector.Ones.should.be.a.Function;

    CVector.Ones(6).toString().should.equal("(1,0)\n(1,0)\n(1,0)\n(1,0)\n(1,0)\n(1,0)");

    CVector.Ones(3).equals(
      new CVector([
        1,
        1,
        1
      ])
    ).should.true;
  });

  it('#Constant() should return a CVector with constant values', function() {
    CVector.Constant.should.be.a.Function;

    var cvec2 = CVector.Constant(4, 0.6);
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(0.6,0)\n(0.6,0)\n(0.6,0)\n(0.6,0)");
  });

  it('#Identity() should return a identity complex vector', function() {
    CVector.Identity.should.be.a.Function;

    CVector.Identity(0).toString().should.equal("");

    cvec = CVector.Identity(3);
    cvec.equals(new CVector([
      1,
      0,
      0
    ])).should.true;

    (function() {
      cvec.equals(
        new CVector([
          1,
          0,
          0,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#Random() should return a vectorx with random values', function() {
    CVector.Random.should.be.a.Function;

    var cvec2 = Vector.Random(3);
    cvec2.rows().should.equal(3);
    cvec2.cols().should.equal(1);

    var cvec3 = Vector.Random(3, 999);
    cvec3.rows().should.equal(3);
    cvec3.cols().should.equal(1);

  });

  it("#block() should return a complex vector block", function() {
    cvec.block.should.be.a.Function;

    var cvblock = cvec.block(2, 2);
    cvblock.should.instanceOf(CVectorBlock);
    cvblock.toString().should.equal("(3,3)\n(4,4)");

    cvblock.assign(CVector([
      -1,
      -2
    ]));

    cvec.toString().should.equal(" (1,1)\n (2,2)\n(-1,0)\n(-2,0)\n (5,5)\n (6,6)");
  });

  it("#row() should return a column matrix of the complex vector", function() {
    cvec.row.should.be.a.Function;

    var row = cvec.row(0);
    row.should.instanceOf(CVectorBlock);
    row.toString().should.equal("(1,1)");

    (function() {
      cvec.row(6);
    }).should.throw("The row or column number is out of range");
  });

  it("#col() should return a column matrix of the complex vector", function() {
    cvec.col.should.be.a.Function;

    var col = cvec.col(0);
    col.should.instanceOf(CVectorBlock);
    col.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    (function() {
      cvec.col(1);
    }).should.throw("The row or column number is out of range");
  });

  it("#head() should return a dynamic-size expression of the first coefficients of it", function() {
    cvec.head.should.be.a.Function;

    var head = cvec.head(3);
    head.should.instanceOf(CVectorBlock);
    head.toString().should.equal("(1,1)\n(2,2)\n(3,3)");

    (function() {
      cvec.head(7);
    }).should.throw("Invalid argument");
  });

  it("#tail() should return a dynamic-size expression of the last coefficients of it", function() {
    cvec.tail.should.be.a.Function;

    var tail = cvec.tail(3);
    tail.should.instanceOf(CVectorBlock);
    tail.toString().should.equal("(4,4)\n(5,5)\n(6,6)");

    (function() {
      cvec.tail(7);
    }).should.throw("Invalid argument");
  });

  it("#topRows() should return a block consisting of the top rows of it", function() {
    cvec.topRows.should.be.a.Function;

    var cvblock = cvec.topRows(3);
    cvblock.should.instanceOf(CVectorBlock);
    cvblock.toString().should.equal("(1,1)\n(2,2)\n(3,3)");

    (function() {
      cvec.topRows(7);
    }).should.throw("Invalid argument");

    (function() {
      cvec.topRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRows() should return a block consisting of the bottom rows of it", function() {
    cvec.bottomRows.should.be.a.Function;

    var cvblock = cvec.bottomRows(3);
    cvblock.should.instanceOf(CVectorBlock);
    cvblock.toString().should.equal("(4,4)\n(5,5)\n(6,6)");

    (function() {
      cvec.bottomRows(7);
    }).should.throw("Invalid argument");

    (function() {
      cvec.bottomRows(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleRows() should return a block consisting of a range of rows of it", function() {
    cvec.middleRows.should.be.a.Function;

    var cvblock = cvec.middleRows(3, 3);
    cvblock.should.instanceOf(CVectorBlock);
    cvblock.toString().should.equal("(4,4)\n(5,5)\n(6,6)");

    (function() {
      cvec.middleRows(7, 1);
    }).should.throw("Invalid argument");

    (function() {
      cvec.middleRows(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#leftCols() should return a block consisting of the left columns of it", function() {
    cvec.leftCols.should.be.a.Function;

    var cvblock = cvec.leftCols(1);
    cvblock.should.instanceOf(CVectorBlock);
    cvblock.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    (function() {
      cvec.leftCols(2);
    }).should.throw("Invalid argument");

    (function() {
      cvec.leftCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#rightCols() should return a block consisting of the right columns of it", function() {
    cvec.rightCols.should.be.a.Function;

    var cvblock = cvec.rightCols(1);
    cvblock.should.instanceOf(CVectorBlock);
    cvblock.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    (function() {
      cvec.rightCols(2);
    }).should.throw("Invalid argument");

    (function() {
      cvec.rightCols(-1);
    }).should.throw("Invalid argument");
  });

  it("#middleCols() should return a block consisting of a range of columns of it", function() {
    cvec.middleCols.should.be.a.Function;

    var cvblock = cvec.middleCols(0, 1);
    cvblock.should.instanceOf(CVectorBlock);
    cvblock.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    (function() {
      cvec.middleCols(1, 1);
    }).should.throw("Invalid argument");

    (function() {
      cvec.middleCols(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topLeftCorner() should return a block consisting of a top-left corner of it", function() {
    cvec.topLeftCorner.should.be.a.Function;

    var cvblock = cvec.topLeftCorner(3, 1);
    cvblock.should.instanceOf(CVectorBlock);
    cvblock.toString().should.equal("(1,1)\n(2,2)\n(3,3)");

    (function() {
      cvec.topLeftCorner(7, 1);
    }).should.throw("Invalid argument");

    (function() {
      cvec.topLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#topRightCorner() should return a block consisting of a top-right corner of it", function() {
    cvec.topRightCorner.should.be.a.Function;

    var cvblock = cvec.topRightCorner(3, 1);
    cvblock.should.instanceOf(CVectorBlock);
    cvblock.toString().should.equal("(1,1)\n(2,2)\n(3,3)");

    (function() {
      cvec.topRightCorner(7, 1);
    }).should.throw("Invalid argument");

    (function() {
      cvec.topRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomLeftCorner() should return a block consisting of a bottom-left corner of it", function() {
    cvec.bottomLeftCorner.should.be.a.Function;

    var cvblock = cvec.bottomLeftCorner(3, 1);
    cvblock.should.instanceOf(CVectorBlock);
    cvblock.toString().should.equal("(4,4)\n(5,5)\n(6,6)");

    (function() {
      cvec.bottomLeftCorner(7, 1);
    }).should.throw("Invalid argument");

    (function() {
      cvec.bottomLeftCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#bottomRightCorner() should return a block consisting of a bottom-right corner of it", function() {
    cvec.bottomRightCorner.should.be.a.Function;

    var cvblock = cvec.bottomRightCorner(3, 1);
    cvblock.should.instanceOf(CVectorBlock);
    cvblock.toString().should.equal("(4,4)\n(5,5)\n(6,6)");

    (function() {
      cvec.bottomRightCorner(7, 1);
    }).should.throw("Invalid argument");

    (function() {
      cvec.bottomRightCorner(-1, 1);
    }).should.throw("Invalid argument");
  });

  it("#replicate() should return a complex matrix which is replicated", function() {
    cvec.replicate.should.be.a.Function;

    cvec.replicate(0, 0).toString().should.equal("");
    cvec.replicate(0, 1).toString().should.equal("");
    cvec.replicate(1, 0).toString().should.equal("");
    cvec.replicate(1, 1).toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");
    cvec.replicate(2, 1).toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)\n(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");
    cvec.replicate(1, 2).toString().should.equal("(1,1) (1,1)\n(2,2) (2,2)\n(3,3) (3,3)\n(4,4) (4,4)\n(5,5) (5,5)\n(6,6) (6,6)");
    cvec.replicate(2, 2).toString().should.equal("(1,1) (1,1)\n(2,2) (2,2)\n(3,3) (3,3)\n(4,4) (4,4)\n(5,5) (5,5)\n(6,6) (6,6)\n(1,1) (1,1)\n(2,2) (2,2)\n(3,3) (3,3)\n(4,4) (4,4)\n(5,5) (5,5)\n(6,6) (6,6)");

    (function() {
      cvec.replicate(-1, 0);
    }).should.throw("Invalid argument");
  });

  it("#dot() should return the dot product of two complex vectors", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new CVector(cvec.rows())).equals(Complex(0)).should.be.true;
    cvec.dot(cvec).equals(Complex(182)).should.be.true;

    (function() {
      cvec.dot(new CVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector and a vector", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new Vector(cvec.rows())).equals(Complex(0)).should.be.true;
    cvec.dot(new Vector([ 7,
                          8,
                          9,
                         10,
                         11,
                         12
                         ])).equals(Complex(217, -217)).should.be.true;

    (function() {
      cvec.dot(new Vector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector and a row-vector", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new RowVector(cvec.rows())).equals(Complex(0)).should.be.true;
    cvec.dot(new RowVector([7, 8, 9, 10, 11, 12])).equals(Complex(217, -217)).should.be.true;

    (function() {
      cvec.dot(new RowVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector and a complex row-vector", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new CRowVector(cvec.rows())).equals(Complex(0));
    cvec.dot(new CRowVector([7, 8, 9, 10, 11, 12])).equals(Complex(217, -217)).should.be.true;

    (function() {
      cvec.dot(new CRowVector(1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector and a vector block", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new Vector(cvec.rows()).block(0, cvec.rows())).equals(Complex(0)).should.be.true;
    cvec.dot(cvec.block(0, cvec.rows())).equals(Complex(182)).should.be.true;

    (function() {
      cvec.dot(new Vector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector and a row-vector block", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new RowVector(cvec.rows()).block(0, cvec.rows())).equals(Complex(0)).should.be.true;
    cvec.dot(new RowVector([7, 8, 9, 10, 11, 12]).block(0, 6)).equals(Complex(217, -217)).should.be.true;

    (function() {
      cvec.dot(new RowVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a vector and a complex row-vector block", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new CRowVector(cvec.rows()).block(0, cvec.rows())).equals(Complex(0)).should.be.true;
    cvec.dot(new CRowVector([7, 8, 9, 10, 11, 12]).block(0, 6)).equals(Complex(217, -217)).should.be.true;

    (function() {
      cvec.dot(new RowVector(1).block(0, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector and a matrix (mx1)", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new Matrix(cvec.rows(), 1)).equals(0).should.be.true;
    cvec.dot(new Matrix(cvec.rows(), 1).set([
       7,
       8,
       9,
      10,
      11,
      12])).equals(Complex(217, -217)).should.be.true;

    (function() {
      cvec.dot(new Matrix(1, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector and a matrix block (mx1)", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new Matrix(cvec.rows(), 1).col(0)).equals(0).should.be.true;
    cvec.dot(new Matrix(cvec.rows(), 1).set([
       7,
       8,
       9,
      10,
      11,
      12]).col(0)).equals(Complex(217, -217)).should.be.true;

    (function() {
      cvec.dot(new Matrix(1, 1).col(0));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector and a complex matrix (mx1)", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new CMatrix(cvec.rows(), 1)).equals(0).should.be.true;
    cvec.dot(new CMatrix(cvec.rows(), 1).set([
       7,
       8,
       9,
      10,
      11,
      12])).equals(Complex(217, -217)).should.be.true;

    (function() {
      cvec.dot(new CMatrix(1, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector and a complex matrix block (mx1)", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new CMatrix(cvec.rows(), 1).col(0)).equals(0).should.be.true;
    cvec.dot(new CMatrix(cvec.rows(), 1).set([
       7,
       8,
       9,
      10,
      11,
      12]).col(0)).equals(Complex(217, -217)).should.be.true;

    (function() {
      cvec.dot(new CMatrix(1, 1).col(0));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector and a matrix (1xm)", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new Matrix(1, cvec.rows())).equals(0).should.be.true;
    cvec.dot(new Matrix(1, cvec.rows()).set([
      7, 8, 9, 10, 11, 12
    ])).equals(Complex(217, -217)).should.be.true;

    (function() {
      cvec.dot(new Matrix(1, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector and a matrix block (1xm)", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new Matrix(1, cvec.rows()).row(0)).equals(0).should.be.true;
    cvec.dot(new Matrix(1, cvec.rows()).set([
      7, 8, 9, 10, 11, 12
    ]).row(0)).equals(Complex(217, -217)).should.be.true;

    (function() {
      cvec.dot(new Matrix(1, 1).row(0));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector and a complec matrix (1xm)", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new CMatrix(1, cvec.rows())).equals(0).should.be.true;
    cvec.dot(new CMatrix(1, cvec.rows()).set([
      7, 8, 9, 10, 11, 12
    ])).equals(Complex(217, -217)).should.be.true;

    (function() {
      cvec.dot(new CMatrix(1, 1));
    }).should.throw("Invalid argument")
  });

  it("#dot() should return the dot product of a complex vector and a complec matrix block (1xm)", function() {
    cvec.dot.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    cvec.dot(new CMatrix(1, cvec.rows()).row(0)).equals(0).should.be.true;
    cvec.dot(new CMatrix(1, cvec.rows()).set([
      7, 8, 9, 10, 11, 12
    ]).row(0)).equals(Complex(217, -217)).should.be.true;

    (function() {
      cvec.dot(new CMatrix(1, 1).row(0));
    }).should.throw("Invalid argument")
  });

  it("#asDiagonal() should return a complex diagonal", function() {
    cvec.asDiagonal.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    var dia = cvec.asDiagonal();
    dia.should.instanceOf(CMatrix);

    dia.toString().should.equal("(1,1) (0,0) (0,0) (0,0) (0,0) (0,0)\n(0,0) (2,2) (0,0) (0,0) (0,0) (0,0)\n(0,0) (0,0) (3,3) (0,0) (0,0) (0,0)\n(0,0) (0,0) (0,0) (4,4) (0,0) (0,0)\n(0,0) (0,0) (0,0) (0,0) (5,5) (0,0)\n(0,0) (0,0) (0,0) (0,0) (0,0) (6,6)");
  });

  it("#normalize() should normalizes the complex vector", function() {
    cvec.normalize.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");
    cvec.normalize();
    cvec.toString().should.equal("(0.0741249,0.0741249)\n    (0.14825,0.14825)\n  (0.222375,0.222375)\n      (0.2965,0.2965)\n  (0.370625,0.370625)\n    (0.44475,0.44475)");
  });

  it("#redux() should return a full redux operation on the whole complex matrix", function() {
    cvec.redux.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    var result = cvec.redux(function(a, b){
      return a.add(b);
    })
    result.equals(Complex(21, 21)).should.be.true;
  });

  it("#sum() should return a full sum operation on the whole complex matrix", function() {
    cvec.sum.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    var result = cvec.sum();
    result.equals(Complex(21, 21)).should.be.true;
  });

  it("#prod() should return a full product operation on the whole complex matrix", function() {
    cvec.prod.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    var result = cvec.prod();
    result.equals(Complex(0, -5760)).should.be.true;
  });

  it("#mean() should return a full mean operation on the whole complex matrix", function() {
    cvec.mean.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    var result = cvec.mean();
    result.equals(Complex(3.5, 3.5)).should.be.true;
  });

  it("#visit() should apply the visitor operation on the whole complex vector", function() {
    cvec.visit.should.be.a.Function;

    cvec.toString().should.equal("(1,1)\n(2,2)\n(3,3)\n(4,4)\n(5,5)\n(6,6)");

    var sum = Complex(0);
    cvec.visit(function(scalar, row, col) {
      scalar.should.instanceOf(Complex);
      row.should.be.a.Number;
      col.should.be.a.Number;
      cvec.get(row).equals(scalar).should.true;
      col.should.equal(0);
      sum.adda(scalar);
    });

    cvec.sum().equals(sum).should.true;
  });
});
