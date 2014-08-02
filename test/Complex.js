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
    c = new Complex.polar(rho, theta);
    c.toString().should.equal("(5,-0.927295)");
    (c.real * Math.cos(c.imag)).should.approximately(3, 0.0000001);
    (c.real * Math.sin(c.imag)).should.approximately(-4, 0.0000001);
  });

  it('#proj() should return the projection of the complex number onto the Riemann sphere', function() {
    Complex.proj.should.be.a.Function;
    Complex.proj(c).toString().should.equal("(3,-4)");
    c.real = Infinity;
    c.imag = -1;
    Complex.proj(c).toString().should.equal("(inf,-0)");
    c.real = 0;
    c.imag = -Infinity;
    Complex.proj(c).toString().should.equal("(inf,-0)");
    Complex.proj(Infinity).toString().should.equal("(inf,0)");
  });

  it('#add() should return the sum of two complexes', function() {
    c.add(-7).toString().should.equal("(-4,-4)");
    c.add(new Complex(-2, 4)).toString().should.equal("(1,0)");
  });

  it('#adda() should return the sum of two complexes and saves it back', function() {
    c.adda(3);
    c.toString().should.equal("(6,-4)");
    c.adda(new Complex(0, 12));
    c.toString().should.equal("(6,8)");
  });

  it('#sub() should return the difference of two complexes', function() {
    c.sub(3).toString().should.equal("(0,-4)");
    c.sub(new Complex(-2, 4)).toString().should.equal("(5,-8)");
  });

  it('#cos() should return the cosine of the complex number', function() {
    Complex.cos.should.be.a.Function;
    Complex.cos(c).toString().should.equal("(-27.0349,3.85115)");
    Complex.cos(Math.PI / 3).toString().should.equal("(0.5,-0)");
  });

  it('#cosh() should return the hyperbolic cosine of the complex number', function() {
    Complex.cosh.should.be.a.Function;
    Complex.cosh(c).toString().should.equal("(-6.58066,7.58155)");
    c = new Complex(0, 0);
    Complex.cosh(c).toString().should.equal("(1,0)");
    c = new Complex(1, 0);
    Complex.cosh(c).toString().should.equal("(1.54308,0)");
    c = new Complex(-1, 0);
    Complex.cosh(c).toString().should.equal("(1.54308,-0)");
    Complex.cosh(1).toString().should.equal("(1.54308,0)");
  });

  it('#exp() should return the base-e exponential of the complex number', function() {
    Complex.exp.should.be.a.Function;
    Complex.exp(c).toString().should.equal("(-13.1288,15.2008)");
    c = new Complex(-1, 0);
    Complex.exp(c).toString().should.equal("(0.367879,0)");
    c = new Complex(0, 0);
    Complex.exp(c).toString().should.equal("(1,0)");
    c = new Complex(1, 0);
    Complex.exp(c).toString().should.equal("(2.71828,0)");
    Complex.exp(1).toString().should.equal("(2.71828,0)");
  });

  it('#log() should return the natural (base-e) logarithm of the complex number, using the principal branch, whose cuts are along the negative real axis', function() {
    Complex.log.should.be.a.Function;
    Complex.log(c).toString().should.equal("(1.60944,-0.927295)");
    c = new Complex(-1, 0);
    Complex.log(c).toString().should.equal("(0,3.14159)");
    Complex.log(Math.E).toString().should.equal("(1,0)");
  });

  it('#log10() should return the natural (base-10) logarithm of the complex number, using the principal branch, whose cuts are along the negative real axis', function() {
    Complex.log10.should.be.a.Function;
    Complex.log10(c).toString().should.equal("(0.69897,-0.402719)");
    c = new Complex(1000, 0);
    Complex.log10(c).toString().should.equal("(3,0)");
    c = new Complex(0, 0);
    Complex.log10(c).toString().should.equal("(-inf,0)");
    Complex.log10(1000).toString().should.equal("(3,0)");
  });

  it('#pow() should return the complex power of base x raised to the y-th power using the principal branch, whose cuts are along the negative real axis', function() {
    Complex.pow.should.be.a.Function;
    Complex.pow(2, 3).toString().should.equal("(8,0)");
    Complex.pow(c, 2).toString().should.equal("(-7,-24)");
    Complex.pow(0, c).toString().should.equal("(0,0)");
    Complex.pow(c, c).toString().should.equal("(-2.99799,-0.623785)");
  });

  it('#sin() should return the sine of the complex number', function() {
    Complex.sin.should.be.a.Function;
    Complex.sin(c).toString().should.equal("(3.85374,27.0168)");
    Complex.sin(Math.PI / 4).toString().should.equal("(0.707107,0)");
  });

  it('#sinh() should return the hyperbolic sine of the complex number', function() {
    Complex.sinh.should.be.a.Function;
    Complex.sinh(c).toString().should.equal("(-6.54812,7.61923)");
    c = new Complex(0, 0);
    Complex.sinh(c).toString().should.equal("(0,0)");
    c = new Complex(1, 0);
    Complex.sinh(c).toString().should.equal("(1.1752,0)");
    c = new Complex(-1, 0);
    Complex.sinh(c).toString().should.equal("(-1.1752,0)");
    Complex.sinh(1).toString().should.equal("(1.1752,0)");
  });

  it('#sqrt() should return square root of x using the principal branch, whose cuts are along the negative real axis', function() {
    Complex.sqrt.should.be.a.Function;
    Complex.sqrt(c).toString().should.equal("(2,-1)");
    c = new Complex(9, 0);
    Complex.sqrt(c).toString().should.equal("(3,0)");
    Complex.sqrt(9).toString().should.equal("(3,0)");
  });

  it('#tan() should return the tangent of the complex number', function() {
    Complex.tan.should.be.a.Function;
    Complex.tan(c).toString().should.equal("(-0.000187346,-0.999356)");
    c = new Complex(Math.PI / 4, 0);
    Complex.tan(c).toString().should.equal("(1,0)");
    Complex.tan(Math.PI / 4).toString().should.equal("(1,0)");
  });

  it('#tanh() should return the hyperbolic tangent of the complex number', function() {
    Complex.tanh.should.be.a.Function;
    Complex.tanh(c).toString().should.equal("(1.00071,-0.00490826)");
    c = new Complex(Infinity, 0);
    Complex.tanh(c).toString().should.equal("(1,0)");
    c = new Complex(1, 0);
    Complex.tanh(c).toString().should.equal("(0.761594,0)");
    Complex.tanh(1).toString().should.equal("(0.761594,0)");
  });

  it('#acos() should return the arc cosine of the complex number', function() {
    Complex.acos.should.be.a.Function;
    Complex.acos(c).toString().should.equal("(0.936812,2.30551)");
    c = new Complex(0, 0);
    Complex.acos(c).toString().should.equal("(1.5708,-0)");
    Complex.acos(0).toString().should.equal("(1.5708,-0)");
  });

  it('#acosh() should return the arc hyperbolic cosine of the complex number', function() {
    Complex.acosh.should.be.a.Function;
    Complex.acosh(c).toString().should.equal("(2.30551,-0.936812)");
    c = new Complex(0, 0);
    Complex.acosh(c).toString().should.equal("(0,1.5708)");
    c = new Complex(1.54308, 0);
    Complex.acosh(c).toString().should.equal("(0.999999,0)");
    Complex.acosh(1.54308).toString().should.equal("(0.999999,0)");
  });

  it('#asin() should return the arc sine of the complex number', function() {
    Complex.asin.should.be.a.Function;
    Complex.asin(c).toString().should.equal("(0.633984,-2.30551)");
    c = new Complex(0, 0);
    Complex.asin(c).toString().should.equal("(0,0)");
    Complex.asin(0).toString().should.equal("(0,0)");
  });

  it('#asinh() should return the arc hyperbolic sine of the complex number', function() {
    Complex.asinh.should.be.a.Function;
    Complex.asinh(c).toString().should.equal("(2.29991,-0.917617)");
    c = new Complex(0, 0);
    Complex.asinh(c).toString().should.equal("(0,0)");
    c = new Complex(1, 0);
    Complex.asinh(c).toString().should.equal("(0.881374,0)");
    Complex.asinh(1).toString().should.equal("(0.881374,0)");
  });

  it('#atan() should return the arc tangent of the complex number', function() {
    Complex.atan.should.be.a.Function;
    Complex.atan(c).toString().should.equal("(1.44831,-0.158997)");
    c = new Complex(Infinity, 0);
    Complex.atan(c).toString().should.equal("(1.5708,0)");
    Complex.atan(Infinity).toString().should.equal("(1.5708,0)");
  });

  it('#atanh() should return the arc hyperbolic tangent of the complex number', function() {
    Complex.atanh.should.be.a.Function;
    Complex.atanh(c).toString().should.equal("(0.117501,-1.40992)");
    c = new Complex(0, 0);
    Complex.atanh(c).toString().should.equal("(0,0)");
    c = new Complex(1, 0);
    Complex.atanh(c).toString().should.equal("(inf,0)");
    Complex.atanh(1).toString().should.equal("(inf,0)");
  });

  it('#equals() should return true if two complexes are equal', function() {
    c.equals.should.be.a.Function;
    c.equals(c).should.be.a.true;
    c.equals(new Complex(3, -4)).should.be.a.true;
  });
});
