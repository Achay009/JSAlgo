/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductOfSubArray = function(nums) {
    if (nums.length == 0) return 0
    let currentMax = nums[0]
    let currentMin = nums[0]
    let max = nums[0]

    for (let i = 1; i < nums.length; i++){
        let num = nums[i]
        let minProduct = num * currentMin
        let maxProduct = num * currentMax
        currentMax = Math.max(maxProduct, num, minProduct)
        currentMin = Math.min(maxProduct, num, minProduct)
        max = Math.max(currentMax, max)
    }

    return max
}