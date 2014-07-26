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
});
