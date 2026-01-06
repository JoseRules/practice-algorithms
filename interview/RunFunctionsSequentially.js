/*
  Xira Challenge
  Run Functions Sequentially
  
  • Problem Description
  You are given an array of functions. Each function returns a 
  Promise when invoked.
  Your task is to implement a function called runSequentially 
  that executes these functions one after another, ensuring 
  that each function starts only after the previous one has 
  finished.
  The function should return a Promise that:
  - Resolves with an array containing the resolved values of each 
  function, in the same order they were executed.
  - Rejects immediately if any of the functions throws an error 
  or returns a rejected Promise.

  • Function Signature
  async function runSequentially(functions)

  • Input
  functions: An array of functions.

  - Each function takes no arguments.
  - Each function returns a Promise.

  • Output
  A Promise that resolves to an array of results from each 
  function executed sequentially.

  Constraints
  • 1 ≤ functions.length ≤ 100
  • Each function must return a valid Promise
  • Functions must be executed sequentially, not in parallel
*/

async function runSequentially(functions) {
  // Write your code here
  const result = [];
  for (let func of functions) {
    const res = await func();
    result.push(res);
  }
  return result;
}

let counter = 1;
function incrementCounterAsync() {
  return new Promise((resolve, reject) => {
    counter += 1;
    resolve(counter);
  });
}
let promise = runSequentially([incrementCounterAsync, incrementCounterAsync]);
if (promise) {
  promise.then(result => console.log(result))
    .catch(error => console.log("Error: " + error));
}