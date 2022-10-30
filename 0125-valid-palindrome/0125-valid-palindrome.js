/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const string = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  l = 0;
  r = string.length - 1;
  while (l < r) {
    if (string[l] !== string[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
};