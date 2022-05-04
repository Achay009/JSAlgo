
/**
 * @param {number[]} heights
 * @return {number}
 */
const trappingRainWater = (heights) => {
    if (heights.length <= 0) console.log("The Max amount of water stored/contained is 0");

    let left = 0;
    let right = heights.length - 1;
    let leftMax = heights[0];
    let rightMax = heights[right];
    let result = 0;
    while (left < right){
        if (leftMax < rightMax){
            left++;
            leftMax = Math.max(leftMax, heights[left]);
            result += leftMax - heights[left];
            continue;
        }

        right--;
        rightMax = Math.max(rightMax, heights[right]);
        result += rightMax - heights[right];

    }

    return result
}