/**
* @param {number} s
* @param {number[]} nums
* @return {number}
*/
var minSubArrayLen = function (s, nums) {
  if (nums.includes(s)) return 1
  if (nums.length < 2) return 0

  let left = 0
  let right = 1
  let currLen = nums[0]
  let currNums = 2
  let min = Infinity

  while (left < nums.length && right < nums.length) {
    if (nums[left] > s || nums[right] > s) return 1
    currLen += nums[right]
    if (currLen >= s) {
      min = Math.min(min, currNums)
      currLen = currLen - (nums[left] + nums[right])
      left++
      currNums -= 1
    } else {
      currNums++
      right++
    }
  }

  return min === Infinity ? 0 : min
};
