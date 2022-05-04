
/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function getEncryptedNumber(numbers) {
    if (numbers.length == 2) return numbers.join("")
    // console.log(numbers)
    let newNumbers = []
    for (let i = 0; i < numbers.length - 1; i++){
        let sum = numbers[i] + numbers[i + 1]
        sum = sum > 9 ? sum % 10 : sum
        newNumbers.push(sum)
    }
    return getEncryptedNumber(newNumbers)
}

// console.log(getEncryptedNumber([4,1,2,3,4]))


function minimumGroups(awards, k) {
    const result = howSum(k, awards)
    return result.length
}

function howSum(target, numbers){
    if (target === 0) return []
    if (target < 0 ) return null
    let combinations = []
    for (let num in numbers){
        let remainder = target - numbers[num]
        numbers.splice(num)
        let remainderCombination = howSum(remainder, numbers)
        if (remainderCombination != null){
            let combination = [...remainderCombination, numbers[num]]
            combinations.push(combination)
        }
    }
    
    return combinations
}

console.log(minimumGroups([1, 13, 6, 8, 9, 3, 5], 3))