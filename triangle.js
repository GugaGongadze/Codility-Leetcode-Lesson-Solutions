function solution(A) {
  A.sort((a, b) => a - b)
  
  let one = 0
  let two = 1
  let three = 2

  while(three < A.length) {
    if (A[one] + A[two] > A[three] && A[one] + A[three] > A[two] && A[two] + A[three] > A[one]) {
      return 1
    }
    one++
    two++
    three++
  }
  return 0
}

console.log(solution([10, 2, 5, 1, 8, 20]))
console.log(solution([10, 50, 5, 1]))
