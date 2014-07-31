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

  it('has a property `real`', function() {
    c.should.have.property('real');
    c.real.should.equal(3);
    c.real = 7;
    c.real.should.equal(7);
    c.toString().should.equal("(7,-4)");
  });

  it('has a property `imag`', function() {
    c.should.have.property('imag');
    c.imag.should.equal(-4);
    c.imag = 2;
    c.imag.should.equal(2);
    c.toString().should.equal("(3,2)");
  });
});
