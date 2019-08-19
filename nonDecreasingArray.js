function checkPossibility(nums) {
  const stack = []
  let alreadySkipped = false

  for (const num of nums) {
    if (stack.length === 0) {
      stack.push(num)
    } else if (num >= stack[stack.length - 1]) {
      stack.push(num)
    } else {
      if (alreadySkipped) {
        return false
      } else {
        if (stack.length === 1 || stack[stack.length - 2] <= num) {
          stack.pop()
          stack.push(num)
        }
        alreadySkipped = true
      }
    }
  }

  return true
}

console.log(checkPossibility([1,5,4,6,7,10,8,9]))
console.log(checkPossibility([2,3,3,2,4]))
console.log(checkPossibility([3,4,2,3]))
console.log(checkPossibility([-1,4,2,3]))
console.log(checkPossibility([4,2,3]))
console.log(checkPossibility([4,2,1]))
