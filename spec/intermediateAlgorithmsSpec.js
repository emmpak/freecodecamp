var intermediate = require('../src/intermediateAlgorithms');

describe('sumAll', function(){
  it( 'the sum of all numbers in a range', function(){
    expect(intermediate.sumAll([1, 4])).toEqual(10);
    expect(intermediate.sumAll([4, 1])).toEqual(10);
    expect(intermediate.sumAll([5, 10])).toEqual(45);
    expect(intermediate.sumAll([10, 5])).toEqual(45);
  });
});

describe('diffArray', function(){
  it( 'the symmetric difference of the given arrays', function(){
    expect(intermediate.diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toEqual(["pink wool"]);
    expect(intermediate.diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])).toEqual(["pink wool", "diorite"]);
    expect(intermediate.diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"])).toEqual([]);
    expect(intermediate.diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5])).toEqual([4]);
    expect(intermediate.diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4])).toEqual(["piglet", 4]);
    expect(intermediate.diffArray([], ["snuffleupagus", "cookie monster", "elmo"])).toEqual(["snuffleupagus", "cookie monster", "elmo"]);
    expect(intermediate.diffArray([1, "calf", 3, "piglet"], [7, "filly"])).toEqual([1, "calf", 3, "piglet", 7, "filly"]);
  });
});

describe('convertToRoman', function(){
  it('converts the given number into a roman numeral', function(){
    expect(intermediate.convertToRoman(2)).toEqual("II");
    expect(intermediate.convertToRoman(3)).toEqual("III");
    expect(intermediate.convertToRoman(4)).toEqual("IV");
    expect(intermediate.convertToRoman(5)).toEqual("V");
    expect(intermediate.convertToRoman(9)).toEqual("IX");
    expect(intermediate.convertToRoman(12)).toEqual("XII");
    expect(intermediate.convertToRoman(16)).toEqual("XVI");
    expect(intermediate.convertToRoman(29)).toEqual("XXIX");
    expect(intermediate.convertToRoman(44)).toEqual("XLIV");
    expect(intermediate.convertToRoman(45)).toEqual("XLV");
    expect(intermediate.convertToRoman(68)).toEqual("LXVIII");
    expect(intermediate.convertToRoman(83)).toEqual("LXXXIII");
    expect(intermediate.convertToRoman(97)).toEqual("XCVII");
    expect(intermediate.convertToRoman(99)).toEqual("XCIX");
    expect(intermediate.convertToRoman(500)).toEqual("D");
    expect(intermediate.convertToRoman(501)).toEqual("DI");
    expect(intermediate.convertToRoman(649)).toEqual("DCXLIX");
    expect(intermediate.convertToRoman(798)).toEqual("DCCXCVIII");
    expect(intermediate.convertToRoman(891)).toEqual("DCCCXCI");
    expect(intermediate.convertToRoman(1000)).toEqual("M");
    expect(intermediate.convertToRoman(1004)).toEqual("MIV");
    expect(intermediate.convertToRoman(1006)).toEqual("MVI");
    expect(intermediate.convertToRoman(1023)).toEqual("MXXIII");
    expect(intermediate.convertToRoman(2014)).toEqual("MMXIV");
    expect(intermediate.convertToRoman(3999)).toEqual("MMMCMXCIX");
  });
});

describe('whatIsInAName', function(){
  it('returns an array of all objects that have matching property and value pairs', function(){
    expect(intermediate.whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" })).toEqual([{ first: "Tybalt", last: "Capulet" }]);
    expect(intermediate.whatIsInAName([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })).toEqual([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }]);
    expect(intermediate.whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })).toEqual([{ "a": 1, "b": 2 }, { "a": 1, "b": 2, "c": 2 }]);
    expect(intermediate.whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })).toEqual([{ "a": 1, "b": 2, "c": 2 }]);
  });
});
