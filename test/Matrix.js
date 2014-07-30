const
    Matrix = require('../index.js').Matrix,
    should = require('should');

describe('Matrix', function() {
  var mat;

  it('#Matrix() should be a function', function() {
    Matrix.should.be.a.Function;
  });

  it('should throw error when tried creating matrix without rows and columns arguments', function() {
    (function() { new Matrix(); }).should.throw('Tried creating matrix without rows and columns arguments');
    (function() { new Matrix(1); }).should.throw('Tried creating matrix without rows and columns arguments');
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
    (function() {
      mat.set(3, 0, 68);
    }).should.throw('Row or column numbers are out of range');
    (function() {
      mat.set(-1, -2, 500);
    }).should.throw('Row or column numbers are out of range');
  });

  it('#set() with array argument should work ok', function() {
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
    }).should.throw('Too few coefficients passed to Matrix');

    (function() {
      Matrix(3, 3).set([
        1,  2,  3,
        4,  5,  6,
        7,  8,  9,
       10, 11, 12
      ]);
    }).should.throw('Too many coefficients passed to Matrix');
  });

  it('#get() should return the element value of Matrix', function() {
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
    mat.toString().should.equal("1 2 3\n4 5 6\n7 8 9");
  });

  it('#add() should return the sum of two matrices', function() {
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

  it('#adda() should return the sum of two matrices and saves it back', function() {
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
  });

  it('#sub() should return the difference of two matrices', function() {
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

  it('#suba() should return the difference of two matrices and saves it back', function() {
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
  });

  it('#mul() should return the product of two matrices', function() {
    var vector = new Matrix(3, 1).set([1, 2, 3]);
    mat.mul(vector).toString().should.equal("14\n32\n50");

    mat.mul(-1).toString().should.equal("-1 -2 -3\n-4 -5 -6\n-7 -8 -9");

    (function() {
      vector.mul(mat);
    }).should.throw("Invalid matrix product");
  });

  it('#mula() should return the product of two matrices and saves it back', function() {
    var vector = new Matrix(3, 1).set([1, 2, 3]);
    mat.mula(vector);
    mat.toString().should.equal("14\n32\n50");

    mat.mula(-1);
    mat.toString().should.equal("-14\n-32\n-50");

    (function() {
      vector.mula(mat);
    }).should.throw("Invalid matrix product");
  });

  it('#div() should return a Matrix which be divied by scalar value', function() {
    var mat2 = mat.div(0);
    mat2.toString().should.equal("inf inf inf\ninf inf inf\ninf inf inf");
    mat2.get(0, 0).should.be.a.Infinity;

    mat.div(2).toString().should.equal("0.5   1 1.5\n  2 2.5   3\n3.5   4 4.5");
  });

  it('#diva() should return a Matrix which be divied by scalar value and saves it back', function() {
    mat.diva(0);
    mat.toString().should.equal("inf inf inf\ninf inf inf\ninf inf inf");
    mat.get(0, 0).should.be.a.Infinity;
  });
});
