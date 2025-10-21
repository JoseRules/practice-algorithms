/*
  11. Container With Most Water
  You are given an integer array height of length n. There are 
  n vertical lines drawn such that the two endpoints of the ith 
  line are (i, 0) and (i, height[i]).
  
  Find two lines that together with the x-axis form a container, 
  such that the container contains the most water.
  
  Return the maximum amount of water a container can store.
  
  Notice that you may not slant the container.
  
  Example 1:
  Input: height = [1,8,6,2,5,4,8,3,7]
  Output: 49

  8 |     *                   *
  7 |     *                   *       *
  6 |     *   *               *       *
  5 |     *   *       *       *       *
  4 |     *   *       *   *   *       *
  3 |     *   *       *   *   *   *   *
  2 |     *   *   *   *   *   *   *   *
  1 | *   *   *   *   *   *   *   *   *

  Explanation: The above vertical lines are represented by 
  array [1,8,6,2,5,4,8,3,7]. In this case, the max area of 
  water (distance between bars * length of shortest bar) the 
  container can contain is 49.

  Example 2:
  Input: height = [1,1]
  Output: 1
*/

function maxArea(height) {
    let left = 0, right = height.length-1;
    let maximum = 0;
    while(left < right){
        const distance = right - left;
        const volume = Math.min(height[right], height[left]) * distance;
        maximum = Math.max(maximum, volume);
        if(height[left] <= height[right]){
            left++;
        }else{
            right--;
        }
    }
    return maximum;
};

console.log("11. Container With Most Water");
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // 49
console.log(maxArea([1,1])); // 1