/*
  22. Generate Parentheses

  Given n pairs of parentheses, write a function to generate all 
  combinations of well-formed parentheses.

  Example 1:
  Input: n = 3
  Output: ["((()))","(()())","(())()","()(())","()()()"]

  Example 2:
  Input: n = 1
  Output: ["()"]
  
  Constraints:
  • 1 <= n <= 8
*/

function generateParenthesis(n) {
  const stack = [];
  const result = [];

  const backtrack = (open, close) => {
    if (open == close && open == n) {
      {
        result.push(stack.join(''));
      }
    }

    if (open < n) {
      stack.push('(');
      backtrack(open + 1, close);
      stack.pop();
    }

    if (close < open) {
      stack.push(')');
      backtrack(open, close + 1);
      stack.pop();
    }
  }

  backtrack(0, 0);

  return result;
}

console.log(generateParenthesis(3));//["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1));//["()"]