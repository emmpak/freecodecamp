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
