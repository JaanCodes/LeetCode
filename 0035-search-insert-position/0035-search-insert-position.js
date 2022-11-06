/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) => {
  if (nums[nums.length - 1] < target) return nums.length;
  if (nums.indexOf(target) >= 0) return nums.indexOf(target);
  if (nums[0] >= target) return 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i;
    if (nums[i] > target && nums[i - 1] < target) return i;
  }
};