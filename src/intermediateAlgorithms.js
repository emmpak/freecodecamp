var exports = module.exports={};

exports.sumAll = function(arr) {
  arr = arr.sort((num1, num2) => num1 - num2);
  return addNum(arr[0], arr[1]);
};

function addNum(num1, num2) {
  if (num1 === num2) return num2;
  return num2 + addNum(num1, num2-1);
}
