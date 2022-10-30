/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    return Math.pow(x, n) >= Math.abs(Math.pow(2, 31)-1) ? x : Math.pow(x, n)
};