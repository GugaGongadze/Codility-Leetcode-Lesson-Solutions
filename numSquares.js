/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function(n) {
  if (n === 1 || Number.isInteger(Math.sqrt(n))) return 1
  let num = n
  let min = num

  while (num > 0) {
    if (num !== 1 && Number.isInteger(Math.sqrt(num))) {
      const remainder = n - num
      if (remainder === 0) {
        return 1
      } else {
        const remainderNumSquares = mem[remainder] || numSquares(remainder)
        mem[remainder] = remainderNumSquares
        min = Math.min(min, remainderNumSquares + 1)
      }
    }

    num--
  }
  
  mem[n] = min
  return min
};

const mem = {}


// console.log(numSquares(12))
// console.log(numSquares(13))
console.log(numSquares(138))

// 12
// 9 1 1 1
// 4 4 4

// 13
// 9 4
// 4 4 4 1

// 121 17
