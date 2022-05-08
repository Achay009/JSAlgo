

/**
 * The goal of this algorigthm is to find 3 numbers such that they sum up to be 0
 * i.e  a + b + c = 0
 *
 */

/**
 *@param {number[]} numbers
 *@return {number[]}
 *
 */
const threeSum = (numbers) => {

    let result  = []
    numbers.sort((a,b) => {return a-b})

    for (let num in numbers){
        if ((num > 0) && (numbers[num] === numbers[num - 1])) continue;

        let left = Number(num) + 1
        let right = numbers.length -1

        while ( left < right ){
            let threeSum = numbers[num] + numbers[left] + numbers[right]
            if (threeSum > 0){
                right--
            }else if (threeSum < 0) {
                left++
            }else{
                result.push([numbers[num], numbers[left], numbers[right]])
                left++
                while ((numbers[left] == numbers[left - 1]) && (left < right)) {
                    left++
                }
            }
        }
    }

    return result
}


// console.log(threeSum([-1,0,1,2,-1,-4]))

// let func = ()=>{
//     for (let i = 1; i <= 3; i++){
//         console.log('hello')
//     }
// }

// func()