/* Move Zeroes
Solution
Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Example:

Input: [0,1,0,3,12]
Output: [1,3,12,0,0]
Note:

You must do this in-place without making a copy of the array.
Minimize the total number of operations. */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    if(nums.length > 1) {
        var index = 0;
        for(var i = 0; i < nums.length; i++) {
            if(nums[i] != 0) {
                let temp = nums[i];
                nums[i] = nums[index];
                nums[index++] = temp;
            }
        }
    }
};