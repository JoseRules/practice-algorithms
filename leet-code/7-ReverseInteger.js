/*
  7. Reverse Integer
  Given a signed 32-bit integer x, return x with its digits 
  reversed. If reversing x causes the value to go outside 
  the signed 32-bit integer range [-231, 231 - 1], then 
  return 0.
  
  Assume the environment does not allow you to store 64-bit 
  integers (signed or unsigned).

  Example 1:
  Input: x = 123
  Output: 321
  
  Example 2:
  Input: x = -123
  Output: -321
  
  Example 3:
  Input: x = 120
  Output: 21
  
  Constraints:
  • -231 <= x <= 231 - 1
*/

function reverseNumber(x){
  let negative = x < 0;
    x = Math.abs(x);
    let result = 0;
    while(x > 0){
        const rest = x%10;
        x -= rest;
        x /= 10;
        result += rest;
        result *= x > 0 ? 10 : 1;
    }
    if(result > (Math.pow(2, 31)-2) || result < -Math.pow(2,31)+1) return 0;
    return negative ? -result : result;
}

console.log("7. Reverse Integer");
console.log(reverseNumber(123)); //321
console.log(reverseNumber(-123)); //-321
console.log(reverseNumber(120)); //21