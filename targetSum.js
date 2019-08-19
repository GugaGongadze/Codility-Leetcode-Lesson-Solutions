/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
var findTargetSumWays = function(nums, S) {
  const memo = new Map()

  return calculate(nums, S, 0, memo)
};

const calculate = (nums, S, i, memo) => {
  if (i === nums.length) {
    if (S === 0) {
      return 1
    } else {
      return 0
    }
  } else {
    const key = [i, S]
    if (memo.has(key)) return memo.get(key)
    const plus = calculate(nums, S + nums[i], i + 1, memo)
    const minus = calculate(nums, S - nums[i], i + 1, memo)
    memo.set(key, plus + minus)

    return plus + minus
  }
}

console.log(findTargetSumWays([16,40,9,17,49,32,30,10,38,36,31,22,3,36,32,2,26,17,30,47], 49))
