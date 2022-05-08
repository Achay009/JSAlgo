/**
 * @param {number[]} data
 * @return {number}
 */
var minSwaps = function(data) {
    let minSwaps = 0

    let oneCount = 0

    for(let i = 0; i < data.length; i++) {
        if(data[i] === 1) oneCount++
    }

    for(let i = 0; i < oneCount; i++) {
        if(data[i] === 0) minSwaps++
    }

    let swaps = minSwaps
    let y = 0
    for(let x = oneCount; x < data.length; x++) {
        if(data[y] === 0) swaps--
        if(data[x] === 0) swaps++
        y++
        minSwaps = Math.min(minSwaps, swaps)
    }

    return minSwaps
};

console.log('Minimum number of swaps 0 0 1 1 0 0 1 1')
console.log(minSwaps([0,0,1,1,0,0,1,1]))