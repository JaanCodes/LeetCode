/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let l = 0;
  let r = height.length - 1;
  let maxArea = 0;
  while (l < r) {
    let containerWidth = r - l;
    let containerHeight = Math.min(height[l], height[r]);
    let area = containerWidth * containerHeight;
    if (area > maxArea) maxArea = area;
    else if (height[l] === containerHeight) {
      l++;
    } else if (height[r] === containerHeight) {
      r--;
    }
  }
  return maxArea;
};