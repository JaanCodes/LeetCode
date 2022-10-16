/**
 * @param {number[]} nums
 * @param {number} diff
 * @return {number}
 */
const arithmeticTriplets = (nums, diff) => {
    nums.sort((a, b) => a - b)
    let result = 0
    for(let i = 0; i < nums.length - 2; i++){
        for(let j = i + 1; j < nums.length - 1; j++){
            for(let k = j + 1; k < nums.length; k++){
                if(i < j && j < k && nums[j] - nums[i] === diff && nums[k] - nums[j] == diff){
                    result++
                }
            }
        }
    }
    return result    
};