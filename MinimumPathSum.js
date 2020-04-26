/* Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum. */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    let h = grid.length-1;
    let w = grid[0].length-1;
    let sum = [];
    for(let i = 0; i <= h; i++) {
        sum[i] = [];
    }
    sum[0][0] = grid[0][0];
    for(let i = 1; i <= h; i++) {
        sum[i][0] = sum[i-1][0] + grid[i][0]; 
    }
    for(let j = 1; j <= w; j++) {
        sum[0][j] = sum[0][j-1] + grid[0][j];
    }
    for(let i = 1; i <= h; i++) {
        for(let j = 1; j <= w; j++) {
            if(sum[i-1][j] > sum[i][j-1]) {
                sum[i][j] = sum[i][j-1] + grid[i][j];
            } else {
                sum[i][j] = sum[i-1][j] + grid[i][j];
            }
        }
    }
    return sum[h][w];
};