/**
* @param {number[][]} matrix
* @return {void} Do not return anything, modify matrix in-place instead.
*/
var rotate = function(matrix) {
  for (let idx = 0; idx < Math.round(matrix.length / 2); idx++) {
    const element = matrix[idx];
    console.log(element)
  }
};

console.log(rotate([
  [1,2],
  [3,4],
]))
