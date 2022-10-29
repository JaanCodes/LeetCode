/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = (x) => {
  const reversedString = x.toString().split("").reverse().join("");
  return +reversedString === x ? true : false;
};