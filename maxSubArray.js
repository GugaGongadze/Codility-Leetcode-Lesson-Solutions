/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let max = curr = nums[0]

  let pointer = 1

  while (pointer < nums.length) {
    curr = Math.max(curr + nums[pointer], nums[pointer])
    max = Math.max(max, curr)

    pointer++
  }

  return max
};



console.log("TCL: maxSubArray([-2,1,-3,4,-1,2,1,-5,4])", maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
