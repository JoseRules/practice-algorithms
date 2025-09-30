/*
  9. Palindrome Number

  Given an integer x, return true if x is a palindrome, and false 
  otherwise.
  
  Example 1:
  Input: x = 121
  Output: true
  Explanation: 121 reads as 121 from left to right and from right 
  to left.
  
  Example 2:
  Input: x = -121
  Output: false
  Explanation: From left to right, it reads -121. From right to left, 
  it becomes 121-. Therefore it is not a palindrome.

  Example 3:
  Input: x = 10
  Output: false
  Explanation: Reads 01 from right to left. Therefore it is not a 
  palindrome.
  
  Constraints:
  • -231 <= x <= 231 - 1
*/

function isPalindrome (x) {
    let result = 0;
    let original = x;
    while(x > 0){
        let value = x % 10;
        result += value;
        x -= value;
        x /= 10;
        if(x > 0) result *= 10;
    }
    return original === result;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));