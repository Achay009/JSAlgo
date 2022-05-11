/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var kthFactor = function(n, k) {
    let result = []
    for (let i = 0; i <= n; i++){
        if(n % i == 0) result.push(i)
    }

    return result[k-1] ? result[k-1] : -1
};