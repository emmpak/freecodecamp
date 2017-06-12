var exports = module.exports={};

exports.reverseString = function(str) {
  return str.split('').reverse().join('');
};

exports.factorialize = function(num) {
  if (num === 0) { return 1; }
  return num * this.factorialize(num-1);
};
