function solution(A) {
  let currentMaxSum = -Infinity
  let maxSum = -Infinity

  for (const [index, number] of A.entries()) {
    if (index === 0) {
      maxSum = currentMaxSum = number
    } else {
      currentMaxSum = Math.max(currentMaxSum + number, number)
      maxSum = Math.max(maxSum, currentMaxSum)
    }
  }

  return maxSum
}

// console.log(solution([3, 2, -6, 4, 0]))
console.log(solution([1, 1]))
