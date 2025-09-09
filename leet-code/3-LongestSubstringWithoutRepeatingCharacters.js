/*
  3. Longest Substring Without Repeating Characters
  Given a string s, find the length of the longest substring without 
  duplicate characters.

  Example 1:
  Input: s = "abcabcbb"
  Output: 3
  Explanation: The answer is "abc", with the length of 3.

  Example 2:
  Input: s = "bbbbb"
  Output: 1
  Explanation: The answer is "b", with the length of 1.

  Example 3:
  Input: s = "pwwkew"
  Output: 3
  Explanation: The answer is "wke", with the length of 3.

  Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

  Constraints:
  • 0 <= s.length <= 5 * 104
  • s consists of English letters, digits, symbols and spaces.
*/

function lengthOfLongestSubstring(s) {
    let longestSubstring = 0;
    const set = new Set();

    let left = 0;
    let right = 0;

    while(right < s.length){
        let letter = s[right];
        if(!set.has(letter)){
            set.add(letter);
            longestSubstring = Math.max(set.size, longestSubstring);
            right++;
        }else{
            set.delete(s[left]);
            left++;
        }
    }
    return longestSubstring;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // Output 3
console.log(lengthOfLongestSubstring("bbbbb")); // Output 1
console.log(lengthOfLongestSubstring("pwwkew")); // Output 3