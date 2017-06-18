var intermediate = require('../src/intermediateAlgorithms');

describe('sumAll', function(){
  it('returns the sum of all numbers in a range', function(){
    expect(intermediate.sumAll([1, 4])).toEqual(10);
    expect(intermediate.sumAll([4, 1])).toEqual(10);
    expect(intermediate.sumAll([5, 10])).toEqual(45);
    expect(intermediate.sumAll([10, 5])).toEqual(45);
  });
});

describe('diffArray', function(){
  it('returns the symmetric difference of the given arrays', function(){
    expect(intermediate.diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"])).toEqual(["pink wool"]);
    expect(intermediate.diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"])).toEqual(["diorite", "pink wool"]);
    expect(intermediate.diffArray(["andesite", "grass", "dirt", "dead shrub"])).toEqual([]);
    expect(intermediate.diffArray([1, 2, 3, 5])).toEqual([4]);
    expect(intermediate.diffArray([1, "calf", 3, "piglet"])).toEqual(["piglet", 4]);
    expect(intermediate.diffArray([])).toEqual(["snuffleupagus", "cookie monster", "elmo"]);
    expect(intermediate.diffArray([1, "calf", 3, "piglet"])).toEqual([1, "calf", 3, "piglet", 7, "filly"]);
  });
});
