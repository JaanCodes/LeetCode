/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let sum = BigInt(digits.join("")) + 1n;
  return sum.toString().split("");
};