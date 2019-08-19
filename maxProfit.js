/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let test = 0
  let max = 0
  let min = Infinity
  let pointer = 1

  while (pointer < prices.length) {
    if (prices[pointer] > prices[pointer - 1]) {
      min = max - min >= prices[pointer] - prices[pointer - 1] ? min : Math.min(min, prices[pointer - 1])
      max = Math.max(max, prices[pointer])
    }

    pointer++
  }

  return min === Infinity ? 0 : max - min
};

maxProfit([2,1,2,0,1])
