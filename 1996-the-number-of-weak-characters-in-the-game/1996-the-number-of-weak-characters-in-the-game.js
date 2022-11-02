/**
 * @param {number[][]} properties
 * @return {number}
 */
var numberOfWeakCharacters = function (properties) {
  properties.sort((x, y) => (x[0] === y[0] ? x[1] - y[1] : y[0] - x[0]));
  let count = 0;
  let max = -Infinity;

  for (const [_, defence] of properties) {
    if (defence < max) count++;
    max = Math.max(max, defence);
  }
  return count;
};