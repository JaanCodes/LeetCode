/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const mapDifferenceToIndex = new Map()
    for(let i = 0; i < nums.length; i++){
        if(mapDifferenceToIndex.has(nums[i])){
            return [mapDifferenceToIndex.get(nums[i]), i]
        }
        const difference = target - nums[i]
        mapDifferenceToIndex.set(difference, i)
    }
};