
let temperatures = [73,74,75,71,69,72,76,73]
//Output:          [1, 1, 4, 2, 1, 1, 0, 0]

// /**
//  * @param {number[]} temperatures
//  * @return {number[]}
//  */
// var dailyTemperatures = function(temperatures) {
//     let result = []
//     let p1 = 0
//     let p2 = p1 + 1
//     while (p1 < temperatures.length){
//         if ((!temperatures[p2] || ((p2 >= temperatures.length - 1) && (temperatures[p1] >= temperatures[p2]))){
//             result.push(0)
//             p1++
//             continue
//         }
//         if (temperatures[p2] > temperatures[p1]){
//             result.push(p2-p1)
//             p1++
//             p2 = p1 + 1
//             continue;
//         }
//         p2++
//     }

//     return result
// };


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
    let result = []
    for (let day = 0; day < temperatures.length; day++){
        for (let futtureDay =  day + 1; futtureDay < temperatures.length; futtureDay++){
            if (temperatures[futtureDay] > temperatures[day]){
                result[day] = futtureDay - day
                break;
            }
        }
        if (!result[day]){
            result[day] = 0
        }
    }

    return result
}

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures2 = (temperatures) => {
    let n = temperatures.length;
    let answer = [];
    let stack = [];

    for (let currDay = 0; currDay < n; currDay++) {
        let currentTemp = temperatures[currDay];
        // Pop until the current day's temperature is not
        // warmer than the temperature at the top of the stack
        while (stack.length > 0 && temperatures[stack[stack.length - 1]] < currentTemp) {
            let prevDay = stack.pop();
            answer[prevDay] = currDay - prevDay;
        }
        stack.push(currDay);
    }

    while (stack.length > 0){
        let remainingday = stack.pop()
        answer[remainingday] = 0
    }
    return answer;
}
console.log(dailyTemperatures2(temperatures))
// console.log(dailyTemperatures([30,40,50,60]))
// console.log(dailyTemperatures([30,60,90]))