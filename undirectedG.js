const undirectedPath = (edges, nodeA, nodeB) =>{
    const graph = buildGraph(edges)
    let visited = new Set()

    return hasPath(graph, nodeA, nodeB, visited)
}

//depth first solution to traverse through a graph 
const hasPath = (graph, src, dest, visited)=>{
    if (src == dest) return true
    if (visited.has(src)) return false;

    visited.add(src)

    for (let neighbour of graph[src]){
        if (hasPath(graph, neighbour, dest, visited) == true){
            return true;
        }
    }

    return false;
}

//breadth first solution to traverse a graph : this is for a directged graph 
const hasPathB = (graph, src, dest, visited) => {
    let queue = [src]

    while (queue.length > 0){
        const current =  queue.shift()

        if (current == src) return true

        for (let neighbour of graph[current]){
            queue.push(neighbour)
        }
    }

    return false
}

const buildGraph = (edges)=>{
    const graph = {}

    for (let edge of edges){
        // console.log(edge)
        let [a, b] = edge
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []

        graph[a].push(b)
        graph[b].push(a)
    }

    return graph;
}

const undirectedgraph = [
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

// console.log(undirectedPath(undirectedgraph, 'm', 'k'))




/**
 * Connected component count
 * the example below has 3 componenet connected
 */
                    // (1) --- (2)

                    //         (4)
                    //          |
                    //          |
                    //   (5)---(6)---(8)
                    //          |
                    //          |
                    // (3)     (7)
let connectedComponentGraph = {
    3 : [],
    4 : [6],
    6 : [4,5,7,8],
    8 : [6],
    7 : [6],
    5 : [6],
    1 : [2],
    2 : [1]
}



let connectedComponentCount = (graph) => {
    let count = 0
    const visited = new Set()
    for (let node in graph){
        if (exploreConnectedComponentCount(graph, node, visited) == true){
            count += 1
        }
    }

    return count
}

let exploreConnectedComponentCount = (graph, current, visited) => {
    if (visited.has(String(current))) return false;

    visited.add(String(current))

    for (let neighbour of graph[current]){
        exploreConnectedComponentCount(graph, neighbour, visited)
    }

    return true
}

// console.log(connectedComponentCount(connectedComponentGraph))


/**Count the largest Component
 *
 *
 *
 *
**/


let largetComponentGraph = {
    0 : [8,1,5],
    1 : [0],
    5 : [0,8],
    8 : [0,5],
    2 : [3,4],
    3 : [2,4],
    4 : [3,2]
}


//Component diagram

                //         (5)\
                //          |    \
                //          |     \
                //   (1)---(0)---(8)

                //   (4)-------(2)
                //     \        /
                //      \      /
                //         (3)

let searchLargestComponent = (graph)=> {
    let visited = new Set()
    let max = 0
    for (let node in graph){
        const size = exploreLargestComponent(graph, node, visited)
        if (size > max) max = size
    }

    return max
}

let exploreLargestComponent = (graph, current, visited) => {
    if (visited.has(current)) return 0;

    visited.add(current)

    let size = 1 // current node we are looking at its neighbours
    for(let neighbour of graph[current]){
        size += exploreLargestComponent(graph, neighbour, visited)
    }
    return size
}

// console.log(searchLargestComponent(largetComponentGraph))




/**
 * Shortest Path Problem
 */
//Undirected graph
let shortestPathGraph = [
    ['w', 'x'],
    ['x', 'y'],
    ['z', 'y'],
    ['z', 'v'],
    ['w', 'v']
]


// Graph Diagram 
            //     (x)--------------(y)
            //     /                   \
            //    /                      \
            // (w)                       (z)
            //   \                        /
            //     \                     /
            //       \                 /
            //         \              /
            //           \           /
            //             \       /
            //              \     /
            //                 (v)
let shortestPathAlgo = (undirectedShotestPathGraph, nodeA, nodeB) => {
    let graph = buildGraph(undirectedShotestPathGraph)
    let visited = new Set(nodeA)// always have a visited to avoid cycle
    //using breadth first search since we are finding the shortes path
    let queue  = [[nodeA, 0]]

    // Run a breadth first search on each of the node starting from nodeA
    while (queue.length > 0){
        const [node, distance] = queue.shift()

        // Whoever reaches there first (obviously the shortest path) will return the distance
        if (node == nodeB) return distance

        for (let neighbour of graph[node]){
            if (!visited.has(neighbour)){
                visited.add(neighbour)
                queue.push([neighbour, distance+1])
            }
        }
    }

    return - 1
}


console.log(shortestPathAlgo(shortestPathGraph, 'w', 'z'))