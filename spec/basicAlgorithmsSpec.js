var basic = require('../src/basicAlgorithms');

describe('reverseString', function() {
  it("returns a string", function() {
    expect(typeof basic.reverseString('hello')).toEqual('string');
  });

  it("returns the reveresed string", function() {
    expect(basic.reverseString('hello')).toEqual('olleh');
    expect(basic.reverseString('Howdy')).toEqual('ydwoH');
    expect(basic.reverseString('Greetings from Earth')).toEqual('htraE morf sgniteerG');
  });
});

describe('factorialize', function() {
  it('returns a number', function() {
    expect(basic.factorialize(2)).toEqual(jasmine.any(Number));
  });

  it('returns the product of all positive integers less than or equal to n', function() {
    expect(basic.factorialize(5)).toEqual(120);
    expect(basic.factorialize(10)).toEqual(3628800);
    expect(basic.factorialize(0)).toEqual(1);
  });
});
