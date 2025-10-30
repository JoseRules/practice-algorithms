/*
  Neostella Challenge

  Caesar cipher
  In cryptography, a Caesar cipher, also known as Caesar's cipher, 
  the shift cipher, Caesar's code, or Caesar shift, is one of the 
  simplest and most widely known encryption techniques. It is a 
  type of substitution cipher in which each letter in the 
  plaintext is replaced by a letter some fixed number of 
  positions down the alphabet. For example, with a left shift 
  of 3, D would be replaced by A, E would become B, and so on.
  
  The method is named after Julius Caesar, who used it in his 
  private correspondence.

  Given a string (s) and a number (num), return text with each 
  letter shifted the number of times num indicates. Punctuation and 
  spaces should remain the same.

  Example 1:
  Input: s = "ABC", num = 1
  Output: "BCD"

  Example 2:
  Input: s = "Hello There!", num = 6
  Output: "Nkrru Znkxk!".

  Example 3:
  Input: s = "Zimbabwe is a great country!", num = 8
  Output: "Hqujijem qa i ozmib kwcvbzg!"

  Constraints:
  • 1 >= s.length <= 3000
  • 1 >= num <= 26
*/

function caesarCipher(s, num){
  let result = [];

  for(let i = 0; i < s.length; i++){
    if(s[i].toLowerCase() === s[i].toUpperCase()){
      result.push(s[i]);
    }else if((s[i] === s[i].toLowerCase() && (s.charCodeAt(i) + num) > 122)
      || (s[i] === s[i].toUpperCase() && (s.charCodeAt(i) + num) > 90)){
      result.push(String.fromCharCode(s.charCodeAt(i) + num - 26));
    }else{
      result.push(String.fromCharCode(s.charCodeAt(i) + num));
    }
  }
  return result.join("");
}

console.log(caesarCipher("ABC", 1)); //
console.log(caesarCipher("Hello There!", 6)); //
console.log(caesarCipher("Zimbabwe is a great country!", 8)); //