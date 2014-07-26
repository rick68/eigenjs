const
    Eigen = require('../index.js');
    should = require('should');

describe('Eigen', function () {
  describe('Matrix', function() {
    it('#Matrix() should be a function', function() {
      Eigen.Matrix.should.be.a.Function;
    });

    it('#Matrix() should return an object', function() {
      Eigen.Matrix().should.be.an.Object;
      (new Eigen.Matrix()).should.be.an.Object;
    });
  });
});
