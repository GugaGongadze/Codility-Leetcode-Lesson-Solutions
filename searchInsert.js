/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
  const idx = Math.floor(nums.length / 2)
  
  if (nums[idx] === target) return idx
  if (nums.length === 0) return 1
  if (nums.length === 1 && nums[idx] !== target) return nums[idx] > target ? 0 : 1

  if (nums[idx] > target) return searchInsert(nums.slice(0, idx), target)

  return idx + searchInsert(nums.slice(idx), target)
};


console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))
console.log(searchInsert([1, 3, 5, 6], 0))
