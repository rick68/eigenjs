const
    Eigen = require('../index.js'),
    Matrix = Eigen.Matrix,
    Vector = Eigen.Vector,
    CMatrix = Eigen.CMatrix,
    CVector = Eigen.CVector,
    Complex = Eigen.Complex,
    CVectorBlock = Eigen.CVectorBlock,
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

  it('#set() should throw message when the row is out of range', function() {
    cvec.set.should.be.a.Function;

    (function() {
      cvec.set(6, 68);
    }).should.throw('Row or column numbers are out of range');
    (function() {
      cvec.set(-1, 500);
    }).should.throw('Row or column numbers are out of range');
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
    }).should.throw('Row or column numbers are out of range');
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
    var cvblock = cvec.block(2, 2);
    cvblock.should.instanceOf(CVectorBlock);
    cvblock.toString().should.equal("(3,3)\n(4,4)");

    cvblock.assign(CVector([
      -1,
      -2
    ]));

    cvec.toString().should.equal(" (1,1)\n (2,2)\n(-1,0)\n(-2,0)\n (5,5)\n (6,6)");
  });

  it('#Constant() should return a CVector with constant values', function() {
    CVector.Constant.should.be.a.Function;

    var cvec2 = CVector.Constant(4, 0.6);
    cvec2.should.instanceOf(CVector);
    cvec2.toString().should.equal("(0.6,0)\n(0.6,0)\n(0.6,0)\n(0.6,0)");
  });
});