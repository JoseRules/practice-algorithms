/*
  24. Swap Nodes in Pairs
  Given a linked list, swap every two adjacent nodes and return its 
  head. You must solve the problem without modifying the values in 
  the list's nodes (i.e., only nodes themselves may be changed.)

  Example 1:
  Input: head = [1,2,3,4]
  Output: [2,1,4,3]
  
  Example 2:
  Input: head = []
  Output: []

  Example 3:
  Input: head = [1]
  Output: [1]

  Example 4:
  Input: head = [1,2,3]
  Output: [2,1,3]
  
  Constraints:
  • The number of nodes in the list is in the range [0, 100].
  • 0 <= Node.val <= 100
*/

const ListNode = require('../utils/LinkedList');
const { listToArray } = require('../utils/Tools');

function swapPairs(head) {
  let pointer = head;
  head = (head && head.next) ? head.next : head;
  let before;

  while (pointer) {
    if (pointer.next) {
      let pointer2 = pointer.next;
      if (before) { before.next = pointer2 }
      let pointer3 = pointer2 ? pointer2.next : null;
      pointer2.next = pointer;
      before = pointer;
      pointer.next = pointer3;
      pointer = (pointer3 && pointer3.next) ? pointer3 : null;
    } else {
      pointer = null;
    }

  }
  return head
}

const list = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4))));
const list2 = new ListNode(1, new ListNode(2, new ListNode(3)));

console.log(listToArray(swapPairs(list)));//[2,1,4,3]
console.log(listToArray(swapPairs(null)));//[]
console.log(listToArray(swapPairs(new ListNode(1))));//[1]
console.log(listToArray(swapPairs(list2)));//[2,1,3]
