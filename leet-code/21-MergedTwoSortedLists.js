/*
  21. Merge Two Sorted Lists

  You are given the heads of two sorted linked lists list1 and 
  list2.

  Merge the two lists into one sorted list. The list should 
  be made by splicing together the nodes of the first two 
  lists.

  Return the head of the merged linked list.

  Example 1:
  Input: list1 = [1,2,4], list2 = [1,3,4]
  Output: [1,1,2,3,4,4]

  Example 2:
  Input: list1 = [], list2 = []
  Output: []
  
  Example 3:
  Input: list1 = [], list2 = [0]
  Output: [0]
  
  Constraints:
  • The number of nodes in both lists is in the range [0, 50].
  • -100 <= Node.val <= 100
  • Both list1 and list2 are sorted in non-decreasing order.
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

function mergeTwoLists(list1, list2) {
  let head = new ListNode();
  let pointer = head;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      pointer.next = list1;
      pointer = pointer.next;
      list1 = list1.next;
    } else if (list2 !== null) {
      pointer.next = list2;
      pointer = pointer.next;
      list2 = list2.next;
    }
  }

  if (list1) {
    pointer.next = list1;
  } else {
    pointer.next = list2;
  }

  return head.next;
};

const first = new ListNode(1, new ListNode(2, new ListNode(4)));
const second = new ListNode(1, new ListNode(3, new ListNode(4)));
const third = new ListNode(0);

console.log(listToArray(mergeTwoLists(first, second)));//[1,1,2,3,4,4]
console.log(listToArray(mergeTwoLists(null, null)));//[]
console.log(listToArray(mergeTwoLists(null, third)))//[0]