/**
 * @param {number[]} nums
 * @return {number}
 */
var subArrayRanges = function(nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++){
        let max = -Infinity; let min = Infinity
        for (j = i; j < nums.length; j++){
            max = Math.max(max, nums[j])
            min = Math.min(min, nums[j])
            sum += (max - min)
        }
    }

    return sum;
};


// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var subArrayRanges2 = function(nums) {
//     let sum = 0
//     let max = 0
//     let min = 0

//     let p1 = 0
//     let p2 = p1
//     while (p1 < nums.length){
//         if (p2 == nums.length){
//             p1++
//             p2 = p1
//             continue
//         }
//         max = Math.max(nums[p1],nums[p2])
//         min = Math.min(nums[p1], nums[p2])
//         sum += (max - min)

//         p2++
//     }

//     return sum;
// };

// console.log(subArrayRanges2([1,2,3]))
// console.log(subArrayRanges2([1,3,3]))
console.log(subArrayRanges2([4,-2,-3,4,1]))