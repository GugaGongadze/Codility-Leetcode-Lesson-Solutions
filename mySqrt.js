/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x <= 1) return x

  let left = 1
  let right = x / 2
  let ans = 0

  while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2)
      if (mid * mid <= x) {
          left = mid + 1
          ans = mid
      } else {
          right = mid - 1
      }
  }
  return ans
};

console.log("TCL: mySqrt(100)", mySqrt(8))
console.log("TCL: mySqrt(100)", mySqrt(9))
console.log("TCL: mySqrt(100)", mySqrt(1785842024))
console.log("TCL: mySqrt(100)", mySqrt(100))
