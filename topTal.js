
let cropMessage = (message, k) => {
    let result = ''

    let sharedMessage = message.split(' ')

    for (let msg of sharedMessage){
        let remainder = k - result.length
        let wordAdded = msg
        if (remainder >= wordAdded.length){
            result += msg
            result += ' '
        }
    }

    return result.trim()
}


console.log(cropMessage('Codility We test coders from the pit of hell and other places', 20))


/**
 * 
 * @param {number []} factories 
 * @return {number}
 */
let minimumNumberOfFilters = (factories) => {
    let sum = factories.reduce((a,b) => a + b, 0)
    let expected = sum / 2
    let sortedFactories = factories.sort((a,b) => {return b-a})
    let filter = 0
    while (expected < sum){
        filter++
        sortedFactories = sortedFactories.sort((a,b) => {return b-a})
        sortedFactories[0] = sortedFactories[0]/2
        sum = sortedFactories.reduce((a,b) => a + b, 0)
    }

    return filter
}

/**
 * 
 * @param {numbet []} P 
 * @param {number []} S 
 */
let minimumNumberOfCars = (P, S) => {
    let seatsIncars = S.sort((a,b) => b-a)
    let totalPeple = P.reduce((a,b) => a + b)

    let id = 0
    while (totalPeple > 0){
        totalPeple -= seatsIncars[id]
        id++
    }

    return id
}