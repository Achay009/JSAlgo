
let ListNode = require('./ListNode')

let cNode = new ListNode(4)
let bNode = new ListNode(3, cNode)
let aNode = new ListNode(2, bNode)

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList  = function(head){
    if (head == null || head.next == null) return head

    var last = reverseList(head.next)
    head.next.next = head
    head.next = null
    return last
}


//   Null <-  a   <-    b           c  ->  d   ->  e
//                      prev      cur    next

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const reverseList2  = function(head){
    let current = head
    let prev = null
    while (current != null){
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}
console.log('Before the reverse')
console.log(aNode)
console.log('After the reverse')
console.log(reverseList2(aNode))


