/*
  23. Merge k Sorted Lists

  You are given an array of k linked-lists lists, each linked-list 
  is sorted in ascending order.
  Merge all the linked-lists into one sorted linked-list and return it.

  Example 1:
  Input: lists = [[1,4,5],[1,3,4],[2,6]]
  Output: [1,1,2,3,4,4,5,6]
  Explanation: The linked-lists are:
  [
    1->4->5,
    1->3->4,
    2->6
  ]
  merging them into one sorted linked list:
  1->1->2->3->4->4->5->6
  
  Example 2:
  Input: lists = []
  Output: []
  
  Example 3:
  Input: lists = [[]]
  Output: []

  Constraints:
  • k == lists.length
  • 0 <= k <= 104
  • 0 <= lists[i].length <= 500
  • -104 <= lists[i][j] <= 104
  • lists[i] is sorted in ascending order.
  • The sum of lists[i].length will not exceed 104.
*/

const ListNode = require('../utils/LinkedList');
const { listToArray } = require('../utils/Tools');

function mergeLists(list1, list2) {
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

function mergeKLists(lists) {
  if (lists.length === 0) return null;

  while (lists.length > 1) {
    const list1 = lists.shift();
    const list2 = lists.shift();

    lists.unshift(mergeLists(list1, list2));
  }

  return lists[0]
};
[[1, 4, 5], [1, 3, 4], [2, 6]]

const list1 = new ListNode(1, new ListNode(4, new ListNode(5)));
const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
const list3 = new ListNode(2, new ListNode(6));
console.log(listToArray(mergeKLists([list1, list2, list3])));//[1,1,2,3,4,4,5,6]
console.log(listToArray(mergeKLists([])));//[]
console.log(listToArray(mergeKLists([null])));