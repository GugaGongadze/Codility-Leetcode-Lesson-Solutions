function solution(A) {
  const prefixSums = (arr) => {
    const newArr = new Array(arr.length + 1).fill(0)
    for (let i = 1; i < arr.length + 1; i++) {
      newArr[i] = newArr[i - 1] + arr[i - 1]
    }
    return newArr
  }

  const countTotal = (arr, x, y) => arr[y + 1] - arr[x]
  const prefixed = prefixSums(A)

  let left = 0
  let right = 1

  let res = Infinity
  let lowestIdx = 0

  while (left < A.length) {
    if (left === A.length - 1) break
    let sliceCount = countTotal(prefixed, left, right)
    if (sliceCount / (right - left + 1) < res) {
      res = sliceCount / (right - left + 1)
      lowestIdx = left
    }
    if (right - left === 2) {
      left += 1
      right = left + 1
      continue
    }
    right++
  }

  return lowestIdx
}

console.log(solution([-3, -5, -8, -4, -10]))
