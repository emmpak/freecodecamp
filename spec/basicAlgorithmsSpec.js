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

describe('palindrome', function() {
  it('should return true', function() {
    expect(basic.isPalindrome('eye')).toBeTruthy;
    expect(basic.isPalindrome('_eye')).toBeTruthy;
    expect(basic.isPalindrome('race car')).toBeTruthy;
    expect(basic.isPalindrome('A man, a plan, a canal. Panama')).toBeTruthy;
    expect(basic.isPalindrome('never odd or even')).toBeTruthy;
    expect(basic.isPalindrome('My age is 0, 0 si ega ym.')).toBeTruthy;
    expect(basic.isPalindrome('0_0 (: /-\ :) 0-0')).toBeTruthy;
  })

  it('should return false', function() {
    expect(basic.isPalindrome('not a palindrome')).toBeFalsy;
    expect(basic.isPalindrome('nope')).toBeFalsy;
    expect(basic.isPalindrome('almostomla')).toBeFalsy;
    expect(basic.isPalindrome('1 eye for of 1 eye.')).toBeFalsy;
    expect(basic.isPalindrome('five|\_/|four')).toBeFalsy;
  })
})
