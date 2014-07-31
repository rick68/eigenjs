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

  it('#abs() should return the absolute value of the complex number', function() {
    c.abs.should.be.a.Function;
    c.abs().should.equal(5);
  });

  it('#arg() should return the phase angle (or angular component) of the complex number, expressed in radians', function() {
    c.arg.should.be.a.Function;
    c.arg().should.equal(-0.9272952180016122);
    (c.abs() * Math.cos(c.arg())).should.approximately(3, 0.0000001);
    (c.abs() * Math.sin(c.arg())).should.approximately(-4, 0.0000001);
  });
});
