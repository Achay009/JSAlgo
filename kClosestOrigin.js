/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function(points, k) {
    let distances = []
    for (let point in points){
        distances.push([point,distanceFromOrigin(points[point])])
    }
    distances.sort((a,b) => {return a[1]-b[1]})
    let resultPoints = distances.slice(0,k)
    let result = []

    for (let point of resultPoints){
        let [initialPoint, distance] = point
        result.push(points[initialPoint])
    }

    return result
};


[[1,3],[-2,2]]

/**
 * @param {number[][]} arr
 * @return {number}
 */
var distanceFromOrigin = (arr)=> {
    let [x , y] = arr
    let distance = Math.sqrt(((x - 0) * (x-0)) + ((y - 0) * (y - 0)))
    return distance
}

console.log(kClosest([[1,3],[-2,2]],1))
console.log(kClosest([[3,3],[5,-1],[-2,4]], 2))