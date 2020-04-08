/* Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example:

Input: [-2,1,-3,4,-1,2,1,-5,4],
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Follow up:

If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle. */
/**
 * @param {number[]} nums
 * @return {number}
 */
/* var maxSubArray = function(nums) {
    if(nums.length == 0) {
        return 0;
    }
    let sum = nums[0];
    let max = 0;
    nums.forEach(function(item) {
        max = Math.max(item, max + item);
        sum = Math.max(sum, max);
    });
    return sum;
}; */

var maxSubArray = function(nums) {
    var max = 0;
    return nums.reduce((sumValue, num) => {
        max = Math.max(num, max + num);
        return Math.max(sumValue, max);
    }, nums[0]);
}


console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]));