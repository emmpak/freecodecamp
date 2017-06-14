var exports = module.exports={};

exports.reverseString = function(str) {
  return str.split('').reverse().join('');
};

exports.factorialize = function(num) {
  if (num === 0) { return 1; }
  return num * this.factorialize(num-1);
  // return Array(num).fill().map(function(e, i) { return ++i; }).reduce(function(sum, num) { return sum * num; });
};

exports.isPalindrome = function(str) {
  str = str.replace(/[\W_]/g,'').toLowerCase()
  return  str === this.reverseString(str);
};

exports.findLongestWord = function(str) {
  return str.split(' ').map(word => word.length).sort((num1, num2) => num1 - num2).pop();
};

exports.titleCase = function(str) {
  return str.toLowerCase().replace(/(^|\s)([a-z])/g, char => char.toUpperCase());
};

exports.largestOfFour = function(arr) {
  return arr.map(arr => arr.sort((num1, num2) => num1 - num2)).map(arr => arr.pop());
};

exports.confirmEnding = function(str, target) {
  // return str.endsWith(target);
  return str.substr(-target.length) === target;
};

exports.repeatStringNumTimes = function(str, num) {
  return num < 0 ? '' : Array(num).fill(str).join('');
};

exports.truncateString = function(str, num) {
  let new_str = num > 4 ? str.substring(0,num-3) + '...' : str.substring(0,num) + '...';
  return str.length <= num ? str : new_str;
};

exports.chunkArrayInGroups = function(arr, num) {
  let new_arr = [];
  for(let i=0; i < arr.length; i += num) {
    new_arr.push(arr.slice(i, i + num));
  }
  return new_arr;
};

exports.slasher = function(arr, howMany) {
  return arr.slice(howMany);
};

exports.mutation = function(arr) {
  arr = arr.map(str => str.toLowerCase());
  return arr[1].split('').every(char => arr[0].includes(char));
};

exports.bouncer = function(arr) {
  return arr.filter(val => !!val);
};

exports.destroyer = function(arr) {
  // no binding of 'arguments' object with arrow functions
  return arr.filter(val => Array.from(arguments).indexOf(val) === -1);
  // var args = Array.from(arguments);
  // return arr.filter(function(val) { return args.indexOf(val) === -1; });
};
