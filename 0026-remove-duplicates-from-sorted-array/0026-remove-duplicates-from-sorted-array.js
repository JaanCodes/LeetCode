/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  const setOfWithNoDuplicates = new Set(nums);
  nums.length = 0;
  nums.push(...setOfWithNoDuplicates.values());
  return setOfWithNoDuplicates.size;
};