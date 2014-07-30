const
    Complex = require('../index.js').Complex,
    should = require('should');

describe('Complex', function() {
  var c;

  beforeEach(function() {
    c = new Complex(3, -4);
  });

  it('#toString() should convert object to string', function() {
    c.toString().should.equal("(3,-4)");
  });
});
