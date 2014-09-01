const
    Eigen = require('../index.js'),
    Vector = Eigen.Vector,
    Matrix = Eigen.Matrix,
    CMatrix = Eigen.CMatrix,
    Complex = Eigen.Complex,
    VectorBlock = Eigen.VectorBlock,
    should = require('should');

describe('Vector', function() {
  var vec;

  it('#Vector() should be a function', function() {
    Vector.should.be.a.Function;
  });

  it('should throw error when tried creating a vector without size or a scalar array argument', function() {
    (function() { new Vector(); }).should.throw('Invalid argument');
    (function() { new Vector(1); }).should.not.throw();
    Vector(1, 2).toString().should.equal("0");
  });

  it('should be invoked with size argument and return an object', function() {
    Vector(1).should.be.an.Object;
    (new Vector(2)).should.be.an.Object;
  });

  it('#Vector(3) should return the vector of size 3', function() {
    vec = Vector(3);
    vec.rows().should.equal(3);
    vec.cols().should.equal(1);
  });

  it('#Vector() should return the vector with a scalar array', function() {
    vec = Vector([
      1,
      2,
      3]
    );
    vec.rows().should.equal(3);
    vec.cols().should.equal(1);
    vec.toString().should.equal("1\n2\n3");
  });

  beforeEach(function() {
    vec = Vector([
      1,
      2,
      3,
      4,
      5,
      6
      ]
    );
  });

  it('#set() should throw message when the row is out of range', function() {
    vec.set.should.be.a.Function;

    (function() {
      vec.set(6, 68);
    }).should.throw('Row or column numbers are out of range');
    (function() {
      vec.set(-1, 500);
    }).should.throw('Row or column numbers are out of range');
  });

  it('#set() with array argument should work ok', function() {
    vec.set.should.be.a.Function;

    Vector(6).set([
      1,
      2,
      3,
      4,
      5,
      6
    ]).toString().should.eql(vec.toString());

    (function() {
      Vector(6).set([
        1,
        2,
        3
      ]);
    }).should.throw('Too few coefficients');

    (function() {
      Vector(6).set([
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

  it('#get() should return the element value of Vector', function() {
    vec.get.should.be.a.Function;

    vec.get(0).should.equal(1);
    vec.get(1).should.equal(2);
    vec.get(2).should.equal(3);
    vec.get(3).should.equal(4);
    vec.get(4).should.equal(5);
    vec.get(5).should.equal(6);
    (function(){
      vec.get(6);
    }).should.throw('Row or column numbers are out of range');
  });

  it('#toString() should return all element values of Vector', function() {
    vec.toString.should.be.a.Function;

    vec.toString().should.equal("1\n2\n3\n4\n5\n6");
  });

  it('#add() should return the sum of two vector', function() {
    vec.add.should.be.a.Function;

    Vector(6).set([
       2,
       4,
       6,
       8,
      10,
      12
    ]).add(vec).toString().should.equal(" 3\n 6\n 9\n12\n15\n18");

    (function() {
      Vector(2).set([
        1,
        0
      ]).add(vec);
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a vector and a matrix', function() {
    vec.add.should.be.a.Function;

    vec.add(
      Matrix(6, 1).set([
         2,
         4,
         6,
         8,
        10,
        12
      ])
     ).toString().should.equal(" 3\n 6\n 9\n12\n15\n18");

    (function() {
      vec.add(
        Matrix(2, 1).set([
          1,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#add() should return the sum of a vector and a complex matrix', function() {
    vec.add.should.be.a.Function;

    vec.add(
      CMatrix(6, 1).set([
         2,
         4,
         6,
         8,
        10,
        12
      ])
     ).toString().should.equal(" (3,0)\n (6,0)\n (9,0)\n(12,0)\n(15,0)\n(18,0)");

    (function() {
      vec.add(
        CMatrix(2, 1).set([
          1,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#adda() should return the sum of two vector and saves it back', function() {
    vec.adda.should.be.a.Function;

    vec.adda(
      Vector(6)
      .set([
         2,
         4,
         6,
         8,
        10,
        12
      ])
    );
    vec.toString().should.equal(" 3\n 6\n 9\n12\n15\n18");

  });

  it('#adda() should return the sum of a vector and a matrix then saves it back', function() {
    vec.adda.should.be.a.Function;

    vec.adda(
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
    vec.toString().should.equal(" 3\n 6\n 9\n12\n15\n18");

    var cmat = CMatrix(6, 1).set([
         2,
         4,
         6,
         8,
        10,
        12
    ]);

    (function() {
      vec.adda(cmat);
    }).should.throw("Invalid argument");
  });

  it('#sub() should return the difference of two vectors', function() {
    vec.sub.should.be.a.Function;

    vec.sub(
      Vector(6).set([
         2,
         4,
         6,
         8,
        10,
        12
      ])
     ).toString().should.equal("-1\n-2\n-3\n-4\n-5\n-6");

    (function() {
      vec.sub(Vector([
        1,
        2,
        3
      ]));
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return the difference of a vector and a matrix', function() {
    vec.sub.should.be.a.Function;

    vec.sub(
      Matrix(6, 1).set([
         2,
         4,
         6,
         8,
        10,
        12
      ])
     ).toString().should.equal("-1\n-2\n-3\n-4\n-5\n-6");

    (function() {
      vec.sub(
        Matrix(3, 1).set([
          1,
          2,
          3
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#sub() should return a CMatrix with the difference of a vector and a complex matrix', function() {
    vec.add.should.be.a.Function;

    var cmat = CMatrix(6, 1).set([
      Complex( 2, 0),
      Complex( 4, 1),
      Complex( 6, 2),
      Complex( 8, 4),
      Complex( 9, 5),
      Complex(10, 6)
    ]);

    vec.sub(cmat).toString().should.equal(" (-1,0)\n(-2,-1)\n(-3,-2)\n(-4,-4)\n(-4,-5)\n(-4,-6)");

    (function() {
      vec.sub(
        CMatrix(3, 1).set([
          1,
          2,
          3
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#suba() should return the difference of two vectors and saves it back', function() {
    vec.suba.should.be.a.Function;

    var vec2 = Vector([
       2,
       4, 
       6,
       8,
      10,
      12
    ]);
    vec2.suba(vec);
    vec2.toString().should.equal("1\n2\n3\n4\n5\n6");
  });

  it('#suba() should return the difference of a vector and a matrix then saves it back', function() {
    vec.suba.should.be.a.Function;

    var mat = Matrix(6, 1).set([
       2,
       4, 
       6,
       8,
      10,
      12
    ]);
    vec.suba(mat);
    vec.toString().should.equal("-1\n-2\n-3\n-4\n-5\n-6");

    var cmat = CMatrix(6, 1).set([
       2,
       4, 
       6,
       8,
      10,
      12
    ]);

    (function() {
      vec.suba(cmat);
    }).should.throw("Invalid argument");
  });

  it('#mul() should return the product of two vectors', function() {
    vec.mul.should.be.a.Function;

    var vec2 = new Vector([-1]);
    vec.mul(vec2).toString().should.equal("-1\n-2\n-3\n-4\n-5\n-6");

    (function() {
      vec2.mul(vec)
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return the product of a vector and a matrix', function() {
    vec.mul.should.be.a.Function;

    var mat = new Matrix(1, 6).set([
       2, 4, 6, 8, 10, 12
    ]);
    vec.mul(mat).toString().should.equal(" 2  4  6  8 10 12\n 4  8 12 16 20 24\n 6 12 18 24 30 36\n 8 16 24 32 40 48\n10 20 30 40 50 60\n12 24 36 48 60 72");

    (function() {
      vec.mul(Matrix(3, 1).set([2, 4, 6]));
    }).should.throw("Invalid matrix product");
  });

  it('#mul() should return a CMatrix with the product of a vector and a complex matrix', function() {
    vec.mul.should.be.a.Function;

    var cmat = new CMatrix(1, 3).set([Complex(1, 1), Complex(2, 2), Complex(3, 3)]);
    vec.mul(cmat).toString().should.equal("  (1,1)   (2,2)   (3,3)\n  (2,2)   (4,4)   (6,6)\n  (3,3)   (6,6)   (9,9)\n  (4,4)   (8,8) (12,12)\n  (5,5) (10,10) (15,15)\n  (6,6) (12,12) (18,18)");
  });

  it('#mul() should return the product of a vector and a scalar value', function() {
    vec.mul.should.be.a.Function;

    vec.mul(-1).toString().should.equal("-1\n-2\n-3\n-4\n-5\n-6");
  });

  it('#mul() should return a CMatrix with the product of a vector and a complex value', function() {
    vec.mul.should.be.a.Function;

    var c = new Complex(-1, 0);
    vec.mul(c).toString().should.equal("(-1,0)\n(-2,0)\n(-3,0)\n(-4,0)\n(-5,0)\n(-6,0)");
  });

  it('#mula() should return the product of a vector and a scalar value then saves it back', function() {
    vec.mula.should.be.a.Function;

    vec.mula(-1);
    vec.toString().should.equal("-1\n-2\n-3\n-4\n-5\n-6");
  });

  it('#mula() should return the product of a vector and a matrix(1x1) then saves it back', function() {
    vec.mula.should.be.a.Function;

    vec.mula(Matrix(1, 1).set([-1]));
    vec.toString().should.equal("-1\n-2\n-3\n-4\n-5\n-6");

    (function() {
      vec.mula(Matrix(1, 2).set([-1, -2]));
    }).should.throw("The matrix size must be 1x1");
  });

  it('#div() should return a Vector which be divied by a scalar value', function() {
    vec.div.should.be.a.Function;

    var vec2 = vec.div(0);

    vec2.equals(
      new Vector(6)
      .set([
        Infinity,
        Infinity,
        Infinity,
        Infinity,
        Infinity,
        Infinity
      ])
    ).should.ok;
    vec.div(2).toString().should.equal("0.5\n  1\n1.5\n  2\n2.5\n  3");
  });

  it('#div() should return a Vector which be divied by a complex value', function() {
    vec.div.should.be.a.Function;

    vec.div(Complex(2, 0)).toString().should.equal("(0.5,0)\n  (1,0)\n(1.5,0)\n  (2,0)\n(2.5,0)\n  (3,0)");
  });

  it('#diva() should return a Vector which be divied by a scalar value then saves it back', function() {
    vec.diva.should.be.a.Function;

    vec.diva(0);
    vec.equals(
      new Vector(6)
      .set([
        Infinity,
        Infinity,
        Infinity,
        Infinity,
        Infinity,
        Infinity
      ])
    ).should.ok;
    vec.get(0).should.be.a.Infinity;
  });

  it('#equals() should return true if two vectors are equal', function() {
    vec.equals.should.be.a.Function;

    vec.equals(vec).should.ok;
    vec.equals(new Vector([
      1,
      2,
      3,
      4,
      5,
      6
    ])).should.ok;
  });

  it('#equals() should return true if a vector and a matrix are equal', function() {
    vec.equals.should.be.a.Function;

    vec.equals(new Matrix(6, 1).set([
      1,
      2,
      3,
      4,
      5,
      6
    ])).should.ok;
  });

  it('#isApprox() should return true if this is approximately equal to other', function() {
    vec.isApprox.should.be.a.Function;

    var vec2 = new Vector(6).set([
      0.111,
      0.222,
      0.333,
      0.444,
      0.555,
      0.666
    ]);
    vec.div(9).isApprox(vec2, 1e-3).should.false;
    vec.div(9).isApprox(vec2, 1e-2).should.true;

    (function() {
      vec.isApprox(
        new Vector([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#isApprox() should return true if this is approximately equal to a matrix', function() {
    vec.isApprox.should.be.a.Function;

    var mat = new Matrix(6, 1).set([
      0.111,
      0.222,
      0.333,
      0.444,
      0.555,
      0.666
    ]);
    vec.div(9).isApprox(mat, 1e-3).should.false;
    vec.div(9).isApprox(mat, 1e-2).should.true;

    (function() {
      vec.isApprox(
        new Matrix(1, 1).set([
          1
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#Zero() should return a zero vector', function() {
    Vector.Zero.should.be.a.Function;

    Vector.Zero(6).toString().should.equal("0\n0\n0\n0\n0\n0");

    Vector.Zero(3).equals(
      new Vector([
        0,
        0,
        0
      ])
    ).should.true;
  });

  it('#Identity() should return a identity vector', function() {
    Vector.Identity.should.be.a.Function;

    Vector.Identity(0).toString().should.equal("");

    vec = Vector.Identity(3);
    vec.equals(new Vector([
      1,
      0,
      0
    ])).should.true;

    (function() {
      vec.equals(
        new Vector([
          1,
          0,
          0,
          0
        ])
      );
    }).should.throw("Nonconformant arguments");
  });

  it('#Random() should return a vectorx with random values', function() {
    Vector.Random.should.be.a.Function;

    var vec2 = Vector.Random(3);
    vec2.rows().should.equal(3);
    vec2.cols().should.equal(1);

    var vec3 = Vector.Random(3, 999);
    vec3.rows().should.equal(3);
    vec3.cols().should.equal(1);

  });

  it("#block() should return a vector block", function() {
    var vblock = vec.block(2, 2);
    vblock.should.instanceOf(VectorBlock);
    vblock.toString().should.equal("3\n4");

    vblock.assign(Vector([
      -1,
      -2
    ]));

    vec.toString().should.equal(" 1\n 2\n-1\n-2\n 5\n 6");
  });
});
