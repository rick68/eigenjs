const
    Eigen = require('../index.js'),
    C = Eigen.Complex,
    Matrix = Eigen.Matrix,
    CMatrix = Eigen.CMatrix,
    should = require('should');

describe('CMatrix', function() {
  var mat;

  it('#CMatrix() should be a function', function() {
    CMatrix.should.be.a.Function;
  });

  it('should throw error when tried creating complex matrix without rows and columns arguments', function() {
    (function() { new CMatrix(); }).should.throw('Tried creating complex matrix without rows and columns arguments');
    (function() { new CMatrix(1); }).should.throw('Tried creating complex matrix without rows and columns arguments');
    (function() { new CMatrix(1, 2); }).should.not.throw();
  });

  it('should be invoked with arguments rows and columns and return an object', function() {
    CMatrix(1,2).should.be.an.Object;
    (new CMatrix(3, 4)).should.be.an.Object;
  });

  it('#CMatrix(3, 2) should return the complex matrix of size 3x2', function() {
    cmat = CMatrix(3, 2);
    cmat.rows().should.equal(3);
    cmat.cols().should.equal(2);
  })

  beforeEach(function() {
    cmat = CMatrix(3, 3)
      .set(0, 0, C(1, 1))
      .set(0, 1, C(2, 2))
      .set(0, 2, C(3, 3))
      .set(1, 0, C(4, 4))
      .set(1, 1, C(5, 5))
      .set(1, 2, C(6, 6))
      .set(2, 0, C(7, 7))
      .set(2, 1, C(8, 8))
      .set(2, 2, C(9, 9));
  });

  it('#set() should throw message when row or column nubers are out of range', function() {
    cmat.set.should.be.a.Function;

    (function() {
      cmat.set(3, 0, 68);
    }).should.throw('Row or column numbers are out of range');
    (function() {
      cmat.set(-1, -2, 500);
    }).should.throw('Row or column numbers are out of range');
  });

  it('#set() with array argument should work ok', function() {
    cmat.set.should.be.a.Function;

    CMatrix(3, 3).set([
      C(1, 1), C(2, 2), C(3, 3),
      C(4, 4), C(5, 5), C(6, 6),
      C(7, 7), C(8, 8), C(9, 9)
    ]).toString().should.eql(cmat.toString());

    (function() {
      CMatrix(3, 3).set([
      C(1, 1), C(2, 2), C(3, 3),
      C(4, 4), C(5, 5), C(6, 6)
      ]);
    }).should.throw('Too few coefficients passed to CMatrix');

    (function() {
      CMatrix(3, 3).set([
      C( 1,  1), C( 2,  2), C( 3,  3),
      C( 4,  4), C( 5,  5), C( 6,  6),
      C( 7,  7), C( 8,  8), C( 9,  9),
      C(10, 10), C(11, 11), C(12, 12)
      ]);
    }).should.throw('Too many coefficients passed to CMatrix');
  });

  it('#equals() should return true if two CMatrix are equal', function() {
    cmat.equals.should.be.a.Function;

    cmat.equals(cmat).should.ok;
    cmat.equals(new CMatrix(3, 3)
    .set([
      C(1, 1), C(2, 2), C(3, 3),
      C(4, 4), C(5, 5), C(6, 6),
      C(7, 7), C(8, 8), C(9, 9)
    ])).should.ok;
  });

  it('#get() should return the element value of CMatrix', function() {
    cmat.get.should.be.a.Function;

    cmat.get(0, 0).equals(C(1, 1)).should.ok;
    cmat.get(0, 1).equals(C(2, 2)).should.ok;
    cmat.get(0, 2).equals(C(3, 3)).should.ok;
    cmat.get(1, 0).equals(C(4, 4)).should.ok;
    cmat.get(1, 1).equals(C(5, 5)).should.ok;
    cmat.get(1, 2).equals(C(6, 6)).should.ok;
    cmat.get(2, 0).equals(C(7, 7)).should.ok;
    cmat.get(2, 1).equals(C(8, 8)).should.ok;
    cmat.get(2, 2).equals(C(9, 9)).should.ok;
    (function(){
      cmat.get(3, 0);
    }).should.throw('Row or column numbers are out of range');
  });

  it('#toString() should return all element values of CMatrix', function() {
    cmat.toString.should.be.a.Function;

    cmat.toString().should.equal("(1,1) (2,2) (3,3)\n(4,4) (5,5) (6,6)\n(7,7) (8,8) (9,9)");
  });

  it('#add() should return the sum of two complex matrices', function() {
    cmat.add.should.be.a.Function;

    CMatrix(3, 3).set([
      2,  4,  6,
      8,  9, 10,
     11, 12, 13
    ]).add(cmat).toString().should.equal(" (3,1)  (6,2)  (9,3)\n(12,4) (14,5) (16,6)\n(18,7) (20,8) (22,9)");

    (function() {
      CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]).add(cmat);
    }).should.throw("Nonconformant arguments");

  });

  it('#add() should return the sum of a complex matrix and a matrix', function() {
    cmat.add.should.be.a.Function;

    var mat = Matrix(3, 3).set([
      2,  4,  6,
      8,  9, 10,
     11, 12, 13
    ]);

    cmat.add(mat).toString().should.equal(" (3,1)  (6,2)  (9,3)\n(12,4) (14,5) (16,6)\n(18,7) (20,8) (22,9)");

    (function() {
      cmat.add(
        Matrix(2, 3).set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of two complex matrices and saves it back', function() {
    cmat.adda.should.be.a.Function;

    cmat.adda(
      CMatrix(3, 3)
      .set([
        C( 2, 0), C( 4, 0), C( 6, 0),
        C( 8, 0), C( 9, 0), C(10, 0),
        C(11, 0), C(12, 0), C(13, 0)
      ])
    );
    cmat.toString().should.equal(" (3,1)  (6,2)  (9,3)\n(12,4) (14,5) (16,6)\n(18,7) (20,8) (22,9)");

    (function() {
      cmat.adda(
        CMatrix(2, 3)
        .set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of a complex matrix and a matrix then saves it back', function() {
    cmat.adda.should.be.a.Function;

    var mat = Matrix(3, 3).set([
      1,  3,  5,
      7,  9, 11,
     13, 15, 17
    ]);
    cmat.adda(mat).toString().should.equal(" (2,1)  (5,2)  (8,3)\n(11,4) (14,5) (17,6)\n(20,7) (23,8) (26,9)");

    (function() {
      cmat.adda(
        CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of two complex matrices', function() {
    cmat.sub.should.be.a.Function;

    CMatrix(3, 3).set([
      2,  4,  6,
      8,  9, 10,
     11, 12, 13
    ]).sub(cmat).toString().should.equal("(1,-1) (2,-2) (3,-3)\n(4,-4) (4,-5) (4,-6)\n(4,-7) (4,-8) (4,-9)");

    (function() {
      CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
      ]).sub(cmat);
    }).should.throw("Nonconformant arguments");

  });

  it('#sub() should return the difference of a complec matrix and a matrix', function() {
    cmat.sub.should.be.a.Function;

    var mat = Matrix(3, 3).set([
      1,  3,  5,
      7,  9, 11,
     13, 15, 17
    ]);
    cmat.sub(mat).toString().should.equal(" (0,1) (-1,2) (-2,3)\n(-3,4) (-4,5) (-5,6)\n(-6,7) (-7,8) (-8,9)");

    (function() {
      cmat.sub(
        CMatrix(2, 3).set([
        1, 0, 0,
        0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of two complex matrices and saves it back', function() {
    cmat.suba.should.be.a.Function;

    var cmat2 = CMatrix(3, 3)
    .set([
      1,  3,  5,
      7,  9, 11,
     13, 15, 17
    ]);
    cmat.suba(cmat2);
    cmat.toString().should.equal(" (0,1) (-1,2) (-2,3)\n(-3,4) (-4,5) (-5,6)\n(-6,7) (-7,8) (-8,9)");

    (function() {
      cmat.suba(
        CMatrix(2, 3)
        .set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of a complex matrix and a matrix then saves it back', function() {
    cmat.suba.should.be.a.Function;

    var mat = Matrix(3, 3)
    .set([
      1,  3,  5,
      7,  9, 11,
     13, 15, 17
    ]);
    cmat.suba(mat);
    cmat.toString().should.equal(" (0,1) (-1,2) (-2,3)\n(-3,4) (-4,5) (-5,6)\n(-6,7) (-7,8) (-8,9)");

    (function() {
      cmat.suba(
        Matrix(2, 3)
        .set([
          1, 0, 0,
          0, 1, 0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#mul() should return the product of two complex matrices', function() {
    cmat.mul.should.be.a.Function;

    var cvector = new CMatrix(3, 1).set([C(1, 1), C(2, 2), C(3, 3)]);
    cmat.mul(cvector).toString().should.equal(" (0,28)\n (0,64)\n(0,100)");

    (function() {
      cvector.mul(cmat);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex matrix and a matrix', function() {
    cmat.mul.should.be.a.Function;

    var vector = new Matrix(3, 1).set([1, 2, 3]);
    cmat.mul(vector).toString().should.equal("(14,14)\n(32,32)\n(50,50)");

    (function() {
      vector.mul(cmat);
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a complex matrix and a scalar value', function() {
    cmat.mul.should.be.a.Function;

    cmat.mul(-1).toString().should.equal("(-1,-1) (-2,-2) (-3,-3)\n(-4,-4) (-5,-5) (-6,-6)\n(-7,-7) (-8,-8) (-9,-9)");
  });

  it('#mul() should return the product of a complex matrix and a complex value', function() {
    cmat.mul.should.be.a.Function;

    cmat.mul(C(-1, -1)).toString().should.equal(" (0,-2)  (0,-4)  (0,-6)\n (0,-8) (0,-10) (0,-12)\n(0,-14) (0,-16) (0,-18)");
  });

  it('#mula() should return the product of two complex matrices and saves it back', function() {
    cmat.mula.should.be.a.Function;

    var cvector = new CMatrix(3, 1).set([1, 2, 3]);
    cmat.mula(cvector);
    cmat.toString().should.equal("(14,14)\n(32,32)\n(50,50)");

    (function() {
      cvector.mula(cmat);
    }).should.throw("Invalid matrix product");
  });

  it('#mula() should return the product of a complex matrix and a matrix then saves it back', function() {
    cmat.mula.should.be.a.Function;

    var vector = new Matrix(3, 1).set([1, 2, 3]);
    cmat.mula(vector);
    cmat.toString().should.equal("(14,14)\n(32,32)\n(50,50)");
  });

  it('#mula() should return the product of a complex matrix and a scalar value then saves it back', function() {
    cmat.mula.should.be.a.Function;

    cmat.mula(-1);
    cmat.toString().should.equal("(-1,-1) (-2,-2) (-3,-3)\n(-4,-4) (-5,-5) (-6,-6)\n(-7,-7) (-8,-8) (-9,-9)");
  });

  it('#mula() should return the product of a complex matrix and a complex value then saves it back', function() {
    cmat.mula.should.be.a.Function;

    cmat.mula(C(-1, 0));
    cmat.toString().should.equal("(-1,-1) (-2,-2) (-3,-3)\n(-4,-4) (-5,-5) (-6,-6)\n(-7,-7) (-8,-8) (-9,-9)");
  });

  it('#div() should return a CMatrix which be divied by a scalar value', function() {
    cmat.div.should.be.a.Function;

    var cmat2 = cmat.div(0);

    for (var i = 0; i < cmat.rows(); ++i) {
      for (var j = 0; j < cmat.cols(); ++j) {
        isNaN(cmat2.get(i, j).real);
        isNaN(cmat2.get(i, j).imag);
      }
    }
    cmat2.equals(
      new CMatrix(3, 3)
      .set([
        C(NaN, NaN), C(NaN, NaN), C(NaN, NaN), 
        C(NaN, NaN), C(NaN, NaN), C(NaN, NaN), 
        C(NaN, NaN), C(NaN, NaN), C(NaN, NaN)
      ])
    ).should.false;
    (NaN !== NaN).should.true;
    
    cmat.div(2).toString().should.equal("(0.5,0.5)     (1,1) (1.5,1.5)\n    (2,2) (2.5,2.5)     (3,3)\n(3.5,3.5)     (4,4) (4.5,4.5)");
  });

  it('#div() should return a CMatrix which be divied by a complex value', function() {
    cmat.div.should.be.a.Function;

    var cmat2 = cmat.div(C(0, 0));

    for (var i = 0; i < cmat.rows(); ++i) {
      for (var j = 0; j < cmat.cols(); ++j) {
        isNaN(cmat2.get(i, j).real);
        isNaN(cmat2.get(i, j).imag);
      }
    }
    cmat2.equals(
      new CMatrix(3, 3)
      .set([
        C(NaN, NaN), C(NaN, NaN), C(NaN, NaN), 
        C(NaN, NaN), C(NaN, NaN), C(NaN, NaN), 
        C(NaN, NaN), C(NaN, NaN), C(NaN, NaN)
      ])
    ).should.false;
    (NaN !== NaN).should.true;
    
    cmat.div(C(2, 0)).toString().should.equal("(0.5,0.5)     (1,1) (1.5,1.5)\n    (2,2) (2.5,2.5)     (3,3)\n(3.5,3.5)     (4,4) (4.5,4.5)");
  });

  it('#diva() should return a CMatrix which be divied by a scalar value and saves it back', function() {
    cmat.diva.should.be.a.Function;

    cmat.diva(C(2, 0));
    cmat.toString().should.equal("(0.5,0.5)     (1,1) (1.5,1.5)\n    (2,2) (2.5,2.5)     (3,3)\n(3.5,3.5)     (4,4) (4.5,4.5)");

    cmat.diva(0);
    for (var i = 0; i < cmat.rows(); ++i) {
      for (var j = 0; j < cmat.cols(); ++j) {
        isNaN(cmat.get(i, j).real);
        isNaN(cmat.get(i, j).imag);
      }
    }
    cmat.equals(
      new CMatrix(3, 3)
      .set([
        C(NaN, NaN), C(NaN, NaN), C(NaN, NaN), 
        C(NaN, NaN), C(NaN, NaN), C(NaN, NaN), 
        C(NaN, NaN), C(NaN, NaN), C(NaN, NaN)
      ])
    ).should.false;
    (NaN !== NaN).should.true;
  });

  it('#isApprox() should return true if this is approximately equal to other', function() {
    cmat.isApprox.should.be.a.Function;

    var cmat2 = new CMatrix(3, 3).set([
      C(0.111, 0.111), C(0.222, 0.222), C(0.333, 0.333),
      C(0.444, 0.444), C(0.555, 0.555), C(0.666, 0.666),
      C(0.777, 0.777), C(0.888, 0.888), C(0.999, 0.999)
    ]);
    cmat.div(9).isApprox(cmat2, 1e-3).should.false;
    cmat.div(9).isApprox(cmat2, 1e-2).should.true;
  });
});
