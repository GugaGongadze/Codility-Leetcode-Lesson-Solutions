function solution(A) {
  A.sort((a, b) => a - b)
  
  return Math.max(A[0] * A[1] * A[A.length - 1], A[A.length - 1] * A[A.length - 2] * A[A.length - 3])
}

console.log(solution([-20, -10, -2, 3, 4, 60]))
console.log(solution([-3, 1, 2, -2, 5, 6]))

