/*
  19. Remove Nth Node From End of List
  Given the head of a linked list, remove the nth node from 
  the end of the list and return its head.

  Example 1:
  Input: head = [1,2,3,4,5], n = 2
  Output: [1,2,3,5]

  Example 2:
  Input: head = [1], n = 1
  Output: []
  
  Example 3:
  Input: head = [1,2], n = 1
  Output: [1]

  Constraints:
  • The number of nodes in the list is sz.
  • 1 <= sz <= 30
  • 0 <= Node.val <= 100
  • 1 <= n <= sz
*/
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val);
  this.next = (next === undefined ? null : next);
}

function listToArray(list) {
  const result = [];
  while (list) {
    result.push(list.val);
    list = list.next;
  }
  return result;
}

function removeNthFromEnd(head, n) {
  let dummy = new ListNode(0);
  dummy.next = head;

  let left = dummy;
  let right = head;

  while (right && n > 0) {
    right = right.next;
    n -= 1;
  }

  while (right) {
    right = right.next;
    left = left.next;
  }

  left.next = left.next.next;

  return dummy.next;
};

const first = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
console.log(listToArray(removeNthFromEnd(first, 2))); //[ 1, 2, 3, 5 ]

const second = new ListNode(1)
console.log(listToArray(removeNthFromEnd(second, 1)));//[]

const third = new ListNode(1, new ListNode(2));
console.log(listToArray(removeNthFromEnd(third, 1))); //[1]