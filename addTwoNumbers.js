let ListNode = require('./ListNode')

let cNode = new ListNode(4)
let bNode = new ListNode(3, cNode)
let aNode = new ListNode(2, bNode)
aNode.next = bNode
aNode.next.next = cNode

let dNode = new ListNode(9)
let eNode = new ListNode(5, dNode)
let fNode = new ListNode(2, eNode)



/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1,l2)=>{
    let dummyhead = new ListNode(0)
    let current = dummyhead
    let carryOver = 0
    let p = l1
    let q = l2
    while (p != null || q != null){
        let x = p != null ? p.val : 0
        let y = q != null ? q.val : 0

        let sum = carryOver + x + y
        carryOver = Math.floor(sum / 10)
        current.next = new ListNode(sum % 10)
        current = current.next
        if (p != null) p = p.next;
        if (q != null) q = q.next;
    }

    if (carryOver > 0){
        current.next = new ListNode(carryOver)
    }
    return dummyhead.next
}


console.log(aNode)
console.log('\n')
console.log(fNode)
console.log('..........................\n')
console.log(addTwoNumbers(aNode,fNode))