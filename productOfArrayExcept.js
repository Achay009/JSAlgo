
//UnOptimised solution
/**
 * @param {number []} array
 * @return {number}
 */
const productOfArray = (array) => {
    let result = []
    for(let num in array){
        let multiple = 1
        for (let item in array ){
            if (item == num) continue
            multiple = multiple * array[item]
        }

        result[num] = multiple
        multiple = 1
    }

    return result
}


//UnOptimised solution
/**
 * @param {number []} array
 * @return {number}
 */
const productOfArray2 = (array) => {
    let ans = []
    ans[0] = 1
    //moving forward
    for(let num = 1; num < array.length; num++ ){
        ans[num] = ans[num - 1]  * array[num - 1]
    }

    let R = 1 //moving multiple
    // moving from backward 
    for (let num = array.length - 1; num >= 0; num--){
        ans[num] =  ans[num] * R
        R = R * array[num]
    }
    return ans
}

console.log(productOfArray([1000,2000,3000,40000,5000,6000,7000,8000,9000,10000,11000,12000,13000,14000,15000]))
console.log(productOfArray2([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]))

