
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
const mergeIntervals = (intervals)=> {
    intervals.sort((a,b) => { return a[0] - b[0]})
    console.log(intervals)
    let result  = []
    for (let interval of intervals){
        let [a, b] = interval

        if (result.length <= 0 || result[result.length - 1][1] < a){
            result.push(interval)
        }else {
            result[result.length -1][1] = Math.max(result[result.length -1][1], b)
            result[result.length - 1][0] = Math.min(result[result.length - 1][0], a)
        }
    }

    return result
}

console.log(mergeIntervals([[1,3],[2,6],[8,10],[15,18]]))
console.log(mergeIntervals([[1,4],[0,0]]))