/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = (s) => {
  const romanNumbers = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let integer = 0;
  for (let i = 0; i < s.length; i++) {
    romanNumbers[s[i]] < romanNumbers[s[i + 1]] ? (integer -= romanNumbers[s[i]]) : (integer += romanNumbers[s[i]]);
  }
  return integer;
};