
/**
 *@param {number[]} instructions
 *@return {boolean}
 *
 */
// const RobotBoundedCircle = (instructions) => {
//     //                  N       W       S       E
//     let directions = [[0,1], [-1,0], [0, -1], [1, 0]]

//     let currentDirection = 0
//     let currentPosition = [0,0]
//     for (let move of instructions){
//         if (move === "G"){
//             currentPosition[0] += directions[currentDirection][0]
//             currentPosition[1] += directions[currentDirection][1]
//         } else if(move === "L") {
//             currentDirection + 1 > 3 ? currentDirection = 0 : currentDirection += 1;
//         } else if(move === "R") {
//             currentDirection - 1 < 0 ? currentDirection = 3 : currentDirection -= 1;
//         }
//     }
//     return (currentPosition[0] + currentPosition[1] === 0) || (currentDirection !== 0);
// }


/**
 *@param {number[]} instructions
 *@return {boolean}
 *
 */
const RobotBoundedCircle = (instructions) => {
    let directionX = 0
    let directionY = 1

    let positionX = 0
    let positionY = 0

    for(let move of instructions){
        if (move == 'G'){
            positionX = positionX + directionX
            positionY = positionY + directionY
        }else if (move == 'L'){
            let tempX = directionX
            directionX = -1 * directionY
            directionY = tempX
        }else{
            let tempX = directionX
            directionX = directionY
            directionY = -1 * tempX
        }
    }

    return (positionX == 0 && positionY == 0) || (directionX != 0 || directionY != 1)
}



// /**
//  *@param {number[]} instructions
//  *@return {boolean}
//  *
//  */
//  const RobotBoundedCircle3 = (instructions) => {
//     let directionX = 0
//     let directionY = 1

//     let positionX = 0
//     let positionY = 0

//     let simulate = 0

//     while(simulate < 4){
//         for(let move of instructions){
//             if (move == 'G'){
//                 positionX = positionX + directionX
//                 positionY = positionY + directionY
//             }else if (move == 'L'){
//                 let tempX = directionX
//                 directionX = -1 * directionY
//                 directionY = tempX
//             }else{
//                 let tempX = directionX
//                 directionX = directionY
//                 directionY = -1 * tempX
//             }
//         }
//         simulate++
//     }

//     return (positionX == 0 && positionY == 0) ? true : false
// }
console.log(RobotBoundedCircle("GGLLGG"))