function solution(A, B) {
  const stack = []

  for (const idx in B) {
    let lastIdx = stack[stack.length - 1]
    const currDir = B[idx]
    let lastElDir = B[lastIdx]
    if (lastElDir === 1 && currDir === 0) {
      while (true) {
        if (lastElDir === 1 && currDir === 0 && A[lastIdx] < A[idx]) {
          stack.pop()
          lastIdx = stack[stack.length - 1]
          lastElDir = B[lastIdx]
        } else {
          break
        }
      }
      if (stack.length === 0 || (B[stack[stack.length - 1]] === 0 && B[idx] === 0)) {
        stack.push(idx)
      }
    } else {
      stack.push(idx)
    }
  }

  return stack.length
}

console.log(solution([1, 3, 2, 4], [1, 0, 1, 0]))
// console.log(solution([5, 4, 3, 2, 1], [1, 1, 0, 1, 0]))
// console.log(solution([4, 3, 2, 1, 5], [0, 1, 0, 0, 0]))
// console.log(solution([4, 6, 3, 2, 1, 5], [0, 1, 1, 0, 0, 0]))
