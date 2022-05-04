let TreeNode = require('./TreeNode')


/**
 * @param {TreeNode} root
 * @return {number}
 */
const goodNodes = (root) => {
    let count = 0
    const countGoodNodes = (root, max) => {
        if ( root == null) return

        max = Math.max(root.val, max)
        if (max <= root.val){
            count++
        }
        countGoodNodes(root.left, max)
        countGoodNodes(root.right, max)
    }
    countGoodNodes(root, root.val)
    return count
}


let node1 = new TreeNode(3)
let node2 = new TreeNode(1)
let node3 = new TreeNode(4)
let node4 = new TreeNode(3)
let node5 = new TreeNode(1)
let node6 = new TreeNode(5)

node3.left = node5
node3.right = node6

node2.left = node4

node1.left = node2
node1.right = node3

console.log(goodNodes(node1))
