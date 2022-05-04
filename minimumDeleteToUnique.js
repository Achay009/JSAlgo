

const minimumDeleteToMakeUNique = (s) => {
    let alphabet = {}

    for (const letter of s){
        if (!alphabet[letter]) alphabet[letter] = 0
        alphabet[letter]++
    }
    let set = new Set()
    let result = 0
    for (const letter in alphabet){
        if (alphabet[letter] != 0){
            while (alphabet[letter] != 0 && set.has(alphabet[letter])){
                result++
                alphabet[letter]--
            }
            set.add(alphabet[letter])
        }
    }
    console.log(`Minimum Deletions to make is : ${result}`)
}


minimumDeleteToMakeUNique('aaaabbbccccccggggggzzzzzzzz')