/*
  5. Longest Palindromic Substring

  Given a string s, return the longest palindromic substring in s.

  Example 1:
  Input: s = "babad"
  Output: "bab"
  Explanation: "aba" is also a valid answer.

  Example 2:
  Input: s = "cbbd"
  Output: "bb"

  Example 3: 
  Input: s = "a"
  Output: "a"

  Example 4: 
  Input: s = "ac"
  Output: "a"

  Constraints:
  • 1 <= s.length <= 1000
  • s consist of only digits and English letters.
*/
const getPalindrome = (left, right, s) => {
  while(left >= 0 && right < s.length){
    if(s[left] !== s[right]) break;
    left--;
    right++;
  }
  return [left + 1, right];
}

function longestPalindrome (s){
  let max = [0, 1];

  for(let i = 0; i < s.length; i++){
    let even = getPalindrome(i - 1, i, s);
    let odd = getPalindrome(i - 1, i + 1, s);
    let currMax = odd[1] - odd[0] > even[1] - even[0] ? odd : even;
    max = max[1] - max[0] > currMax[1] - currMax[0] ? max : currMax;
  }

  return s.slice(max[0], max[1]);
}

console.log("5. Longest Palindromic Substring");
console.log(longestPalindrome("babad")); //Output: "bab"
console.log(longestPalindrome("cbbd")); //Output: "bb"
console.log(longestPalindrome("a")); //Output: "a"
console.log(longestPalindrome("ac")); //Output: "a"
