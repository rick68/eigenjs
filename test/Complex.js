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

  it('#norm() should return the norm value of the complex number', function() {
    c.norm.should.be.a.Function;
    c.norm().should.equal(25);
  });

  it('#conj() should return the conjugate of the complex number', function() {
    c.conj.should.be.a.Function;
    c.conj().toString().should.equal("(3,4)");
  });

  it('#polar() should returns a complex object (in cartesian format) corresponding to the complex number defined by its polar components rho and theta, where rho is the magnitude (modulus) and theta is the phase angle', function() {
    Complex.polar.should.be.a.Function;
    var rho = 5;
    var theta = -0.9272952180016122;
    c = Complex.polar(rho, theta);
    c.toString().should.equal("(5,-0.927295)");
    (c.real * Math.cos(c.imag)).should.approximately(3, 0.0000001);
    (c.real * Math.sin(c.imag)).should.approximately(-4, 0.0000001);
  });

  it('#cos() should return the cosine of the complex number', function() {
    Complex.cos.should.be.a.Function;
    Complex.cos(c).toString().should.equal("(-27.0349,3.85115)");
  });

  it('#cosh() should return the hyperbolic cosine of the complex number', function() {
    Complex.cosh.should.be.a.Function;
    Complex.cosh(c).toString().should.equal("(-6.58066,7.58155)");
    c = Complex(0, 0);
    Complex.cosh(c).toString().should.equal("(1,0)");
    c = Complex(1, 0);
    Complex.cosh(c).toString().should.equal("(1.54308,0)");
    c = Complex(-1, 0);
    Complex.cosh(c).toString().should.equal("(1.54308,-0)");
  });

  it('#exp() should return the base-e exponential of the complex number', function() {
    Complex.exp.should.be.a.Function;
    Complex.exp(c).toString().should.equal("(-13.1288,15.2008)");
    c = Complex(-1, 0);
    Complex.exp(c).toString().should.equal("(0.367879,0)");
    c = Complex(0, 0);
    Complex.exp(c).toString().should.equal("(1,0)");
    c = Complex(1, 0);
    Complex.exp(c).toString().should.equal("(2.71828,0)");
  });

  it('#log() should return the natural (base-e) logarithm of the complex number, using the principal branch, whose cuts are along the negative real axis', function() {
    Complex.log.should.be.a.Function;
    Complex.log(c).toString().should.equal("(1.60944,-0.927295)");
    c = Complex(-1, 0);
    Complex.log(c).toString().should.equal("(0,3.14159)");
  });

  it('#log10() should return the natural (base-10) logarithm of the complex number, using the principal branch, whose cuts are along the negative real axis', function() {
    Complex.log10.should.be.a.Function;
    Complex.log10(c).toString().should.equal("(0.69897,-0.402719)");
    c = Complex(1000, 0);
    Complex.log10(c).toString().should.equal("(3,0)");
    c = Complex(0, 0);
    Complex.log10(c).toString().should.equal("(-inf,0)");
  });

  it('#pow() should return the complex power of base x raised to the y-th power using the principal branch, whose cuts are along the negative real axis', function() {
    Complex.pow.should.be.a.Function;
    Complex.pow(2, 3).toString().should.equal("(8,0)");
    Complex.pow(c, 2).toString().should.equal("(-7,-24)");
    Complex.pow(1, c).toString().should.equal("(1,0)");
    Complex.pow(c, c).toString().should.equal("(-2.99799,-0.623785)");
  });
});
