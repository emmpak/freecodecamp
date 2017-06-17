var intermediate = require('../src/intermediateAlgorithms');

describe('sumAll', function(){
  it('returns the sum of all numbers in a range', function(){
    expect(intermediate.sumAll([1, 4])).toEqual(10);
    expect(intermediate.sumAll([4, 1])).toEqual(10);
    expect(intermediate.sumAll([5, 10])).toEqual(45);
    expect(intermediate.sumAll([10, 5])).toEqual(45);
  });
});
