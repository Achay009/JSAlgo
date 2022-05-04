const ListNode = require('./ListNode')

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeSortedLinkedList = (l1, l2) => {
    if (l1 == null) return l2
    if (l2 == null ) return l1


    if (l1.val < l2.val){
        l1.next = mergeSortedLinkedList(l1.next, l2);
        return l1;
    }else{
        l2.next = mergeSortedLinkedList(l1, l2.next);
        return l2;
    }
}


let cNode = new ListNode(4)
let bNode = new ListNode(3, cNode)
let aNode = new ListNode(2, bNode)
aNode.next = bNode
aNode.next.next = cNode

let dNode = new ListNode(9)
let eNode = new ListNode(5, dNode)
let fNode = new ListNode(1, eNode)

console.log(mergeSortedLinkedList(aNode, fNode))