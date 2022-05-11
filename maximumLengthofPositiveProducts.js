/**
 * @param {number[]} nums
 * @return {number}
 */
var getMaxLen = function(nums) {
    let runningMultiple = 1
    let max = -Infinity
    for (let windowEnd = 0; windowEnd < nums.length; windowEnd++){
        if (nums[windowEnd] == 0) {
            runningMultiple = 1 
            continue
        }
        runningMultiple *= nums[windowEnd]
        if(runningMultiple > 0){
            max = Math.max(max,windowEnd + 1)
        }
    }
    let queue = new MaxPriorityQueue()
    return max
};

console.log(getMaxLen([0,1,-2,-3,-4]))