/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) => {
  const arr = [...nums1, ...nums2].sort((a, b) => a - b);
  const length = arr.length;
  if (length % 2 === 0) {
    return (arr[length / 2 - 1] + arr[length / 2]) / 2;
  }
  return arr[(length - 1) / 2];
};