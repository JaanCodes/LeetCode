/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const reversed = parseInt(x.toString().split("").reverse().join(""));
  return reversed > Math.abs(Math.pow(2, 31) - 1) ? 0 : x < 0 ? -1 * reversed : reversed;
};