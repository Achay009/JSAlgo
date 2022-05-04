let TreeNode = require('./TreeNode')

// INITIAL MISTAKE USING A BFS ON A BST
// /**
//  * @param {TreeNode} root
//  * @param {TreeNode} p
//  * @return {TreeNode}
//  */
// const inOrderSuccessor = (root, p) => {
//     if (root == null || p == null) return null
//     let queue = [root]
//     while (queue.length > 0){
//         let currentTreeNode = queue.shift()

//         if (p.val > currentTreeNode.val){
//             return currentTreeNode.left != null ? currentTreeNode.left : null
//         }

//         if (currentTreeNode.left != null) queue.push(currentTreeNode.left)
//         if (currentTreeNode.right != null) queue.push(currentTreeNode.right)
//     }
// }


let cNode = new TreeNode(3)
let bNode = new TreeNode(1)
let aNode = new TreeNode(2)

aNode.left = bNode
aNode.right = cNode

let dNode = new TreeNode(1)
let eNode = new TreeNode(2)
let fNode = new TreeNode(3)
let gNode = new TreeNode(4)
let hNode = new TreeNode(5)
let iNode = new TreeNode(6)



eNode.left = dNode
fNode.left =eNode
fNode.right = gNode
hNode.right = iNode
hNode.left = fNode


/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @return {TreeNode}
 */
 var inOrderSuccessor = function(root, p) {
	let result = null

	function dfs(node){
		if(!node) return 

		if (node.val > p.val) {
			result = node
			return dfs(node.left)
		} else {
			return dfs(node.right)
		}
	}

	dfs(root)
	return result
};

// console.log('Example 1 ............\n')
// console.log(inOrderSuccessor(aNode, bNode))
console.log('Example 2 ............\n')
console.log(inOrderSuccessor(hNode, iNode))