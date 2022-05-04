/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
    let digits = []
    let letters = []
    for (let log of logs){
        if (isNaN(log.split(" ")[1])){
            letters.push(log)
        }else{
            digits.push(log)
        }
    }
    letters.sort((a,b)=> {
        stra = a.substr(a.indexOf(' ') + 1)
        strb = b.substr(b.indexOf(" ") + 1)

        if (stra == strb) return a.localeCompare(b)
        else return stra.localeCompare(strb)
    })
    let result = [...letters, ...digits]

    return result
};

console.log(reorderLogFiles(["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]))