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
    expect(basic.isPalindrome('eye')).toBeTruthy();
    expect(basic.isPalindrome('_eye')).toBeTruthy();
    expect(basic.isPalindrome('race car')).toBeTruthy();
    expect(basic.isPalindrome('A man, a plan, a canal. Panama')).toBeTruthy();
    expect(basic.isPalindrome('never odd or even')).toBeTruthy();
    expect(basic.isPalindrome('My age is 0, 0 si ega ym.')).toBeTruthy();
    expect(basic.isPalindrome('0_0 (: /-\ :) 0-0')).toBeTruthy();
  });

  it('should return false', function() {
    expect(basic.isPalindrome('not a palindrome')).toBeFalsy();
    expect(basic.isPalindrome('nope')).toBeFalsy();
    expect(basic.isPalindrome('almostomla')).toBeFalsy();
    expect(basic.isPalindrome('1 eye for of 1 eye.')).toBeFalsy();
    expect(basic.isPalindrome('five|\_/|four')).toBeFalsy();
  });
});

describe('findLongestWord', function() {
  it('returns the number of the longest word in a sentence', function() {
    expect(basic.findLongestWord("The quick brown fox jumped over the lazy dog")).toEqual(6);
    expect(basic.findLongestWord("May the force be with you")).toEqual(5);
    expect(basic.findLongestWord("Google do a barrel roll")).toEqual(6);
    expect(basic.findLongestWord("What is the average airspeed velocity of an unladen swallow")).toEqual(8);
    expect(basic.findLongestWord("What if we try a super-long word such as otorhinolaryngology")).toEqual(19);
  });
});

describe('titleCase', function() {
  it('returns the first letter of each word capitalized', function() {
    expect(basic.titleCase("I'm a little tea pot")).toEqual("I'm A Little Tea Pot");
    expect(basic.titleCase("sHoRt AnD sToUt")).toEqual("Short And Stout");
    expect(basic.titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")).toEqual("Here Is My Handle Here Is My Spout");
  });
});

describe('largestOfFour', function() {
  it('should return largest number from each provided sub-array', function() {
    expect(basic.largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])).toEqual([27,5,39,1001]);
    expect(basic.largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])).toEqual([9, 35, 97, 1000000]);
  });
});

describe('confirmEnding', function() {
  it('should return true if a string ends with the given target string', function() {
    expect(basic.confirmEnding("Bastian", "n")).toBeTruthy();
    expect(basic.confirmEnding("He has to give me a new name", "name")).toBeTruthy();
    expect(basic.confirmEnding("Open sesame", "same")).toBeTruthy();
  });

  it('should return false if a string does not end with the given target string', function() {
    expect(basic.confirmEnding("Connor", "n")).toBe(false);
    expect(basic.confirmEnding("Open sesame", "pen")).toBe(false);
    expect(basic.confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")).toBe(false);
    expect(basic.confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")).toBe(false);
  });
});

describe('repeatStringNumTimes', function(){
  it('returns an empty string if the given number is negative', function(){
    expect(basic.repeatStringNumTimes("abc", -2).toEqual(""));
  });

  it('repeats the given string based on the given number', function(){
    expect(basic.repeatStringNumTimes("*", 3)).toEqual("***");
    expect(basic.repeatStringNumTimes("abc", 3)).toEqual("abcabcabc");
    expect(basic.repeatStringNumTimes("abc", 4)).toEqual("abcabcabcabc");
    expect(basic.repeatStringNumTimes("abc", 1)).toEqual("abc");
    expect(basic.repeatStringNumTimes("*", 8)).toEqual("********");
  });
});
