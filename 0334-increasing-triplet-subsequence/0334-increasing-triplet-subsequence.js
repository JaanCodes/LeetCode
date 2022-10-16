/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(arr) {
   let first = Number.MAX_SAFE_INTEGER;
   let second = Number.MAX_SAFE_INTEGER;
   for (let curr of arr) {
      if (curr > second && curr > first) {
         return true;
      };
      if (curr > first) {
         second = curr;
      }else{
         first = curr;
      };
   };
   return false;
};