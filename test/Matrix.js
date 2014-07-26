const
    Matrix = require('../index.js').Matrix;
    should = require('should');

describe('Matrix', function() {
  var mat;

  it('#Matrix() should be a function', function() {
    Matrix.should.be.a.Function;
  });

  it('should throw error when tried creating matrix without rows and columns arguments', function() {
    (function() { new Matrix(); }).should.throw();
    (function() { new Matrix(1); }).should.throw();
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
    mat = Matrix(3, 3);
    mat.set(0, 0, 1);
    mat.set(0, 1, 2);
    mat.set(0, 2, 3);
    mat.set(1, 0, 4);
    mat.set(1, 1, 5);
    mat.set(1, 2, 6);
    mat.set(2, 0, 7);
    mat.set(2, 1, 8);
    mat.set(2, 2, 9);
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
    mat.get().should.equal("1 2 3\n4 5 6\n7 8 9");
  })
});
