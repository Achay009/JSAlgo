
var minimumDeletions = function(s) {
    let stack = []
    let res = 0
    for (const letter of s){
        if (stack.length > 0 && letter == 'a' && stack[stack.length-1] == 'b'){
            stack.pop()
            res++
        }else{
            stack.push(letter)
        }
    }
    return res
};

// Leetcode : Flip String to Monotone Increasing
// Same as minimum deletions questions
var minFlipsMonoIncr = function(s) {
    let stack = []
    let res = 0
    for (const letter of s){
        if (stack.length > 0 && letter == '0' && stack[stack.length-1] == '1'){
            stack.pop()
            res++
        }else{
            stack.push(letter)
        }
    }
    return res
};

console.log(minimumDeletions('aababbab'))
console.log(minimumDeletions('bbaaaaabb'))