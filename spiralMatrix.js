/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralMatrix = (matrix)=>{
    let m = matrix.length
    let n = matrix[0].length
    let results = []
    let left = 0
    let right = n
    let top = 0
    let bottom = m
    while(results.length < m*n){
        //go from left => right
        for (let i = left; i < right; i++){
            results.push(matrix[top][i])
        }
        top += 1

        //go from top => bottom
        for(let i = top; i < bottom; i++){
            results.push(matrix[i][right-1])
        }
        right -= 1

        // check if left is now right and top is now bottom
        if (!(left < right && top < bottom)) break;

        // go from right => left
        for (let i = right-1; i >= left ; i-- ){
            results.push(matrix[bottom - 1][i])
        }
        bottom -= 1

        // go from bottom => top
        for (let i = bottom-1; i >= top; i--){
            results.push(matrix[i][left])
        }
        left += 1

    }
    return results
}

console.log('before Spiral matrix')
console.table([[1,2,3,4],[5,6,7,8],[9,10,11,12]])
console.log('after Spiral matrix')
console.info(spiralMatrix([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
// console.info

// [1,2,3,4],
// [5,6,7,8]
// [9,10,11,12]

// 1,2,3,4,8,12,11,10,9,5,6,7