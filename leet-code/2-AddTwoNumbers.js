/*
  2. Add Two Numbers
  You are given two non-empty linked lists representing two 
  non-negative integers. The digits are stored in reverse order, 
  and each of their nodes contains a single digit. Add the two 
  numbers and return the sum as a linked list. You may assume 
  the two numbers do not contain any leading zero, except the 
  number 0 itself.

  Example 1:
  Input: l1 = [2,4,3], l2 = [5,6,4]
  Output: [7,0,8]
  Explanation: 342 + 465 = 807.
  
  Example 2:
  Input: l1 = [0], l2 = [0]
  Output: [0]

  Example 3:
  Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
  Output: [8,9,9,9,0,0,0,1]

  Constraints:
  • The number of nodes in each linked list is in the range [1, 100].
  • 0 <= Node.val <= 9
  • It is guaranteed that the list represents a number that does not 
   have leading zeros.
*/

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function add2Num(l1, l2){
  let list = new ListNode(0);
  let pointer = list;

  let sum = 0;
  let carry = 0;

  while(l1 !== null || l2 !== null || sum !== 0){
    if(l1 !== null){
      sum += l1.val;
      l1 = l1.next;
    }

    if(l2 !== null){
      sum += l2.val;
      l2 = l2.next;
    }

    if(sum >= 10){
      carry = 1;
      sum -= 10;
    }

    pointer.next = new ListNode(sum);
    pointer = pointer.next;
    sum = carry;
    carry = 0;
  }
  return list.next;
}

function toList(arr){
  let newList = new ListNode(0);
  let head = newList;
  for(let i = 0; i < arr.length; i++){
    head.next = new ListNode(arr[i]);
    head = head.next;
  }
  return newList.next;
}

function prnt(item){
  console.log(item);
}

prnt("2. Add Two Numbers");
prnt(add2Num(toList([2,4,3]), toList([5,6,4]))); //[7,0,8]
prnt(add2Num(toList([0]), toList([0])));//[0]
prnt(add2Num(toList([9,9,9,9,9,9,9]), toList([9,9,9,9]))); //[8,9,9,9,0,0,0,1]