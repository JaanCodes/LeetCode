/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    nums.sort((a, b) => a - b)
    const result = []
    
    for(let i = 0; i < nums.length - 2; i++){
        if(nums[i] === nums[i - 1]){
            continue
        }
        
        let l = i + 1
        let r = nums.length - 1
        while(l < r) {
            const sum = nums[i] + nums[l] + nums[r]
            if(sum === 0){
                result.push([nums[i], nums[l], nums[r]])
                l++
                while (nums[l] === nums[l - 1] && l < r) {
                    l++;
                }
            }
            if(sum < 0){
                l++
            }
            if(sum > 0){
                r--
            }
        }
    }
    return result
};