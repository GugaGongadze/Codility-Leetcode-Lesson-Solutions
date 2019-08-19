function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)

  let currentBatchSize = A[0]
  let currentBatch = A[0]
  let prevIdx = 1
  let idx = 1

  while (idx < A.length) {
    const seconds = A[idx];

    if (currentBatch === currentBatchSize) {
      currentBatch = 0
      idx++
    } else {
      if (currentBatch + seconds > currentBatchSize) {
        currentBatchSize = currentBatchSize + A[prevIdx]
        currentBatch = currentBatchSize
        idx = prevIdx + 1
        prevIdx = idx
      } else if (currentBatch + seconds === currentBatchSize) {
        currentBatch = 0
        idx = idx + 2
        if (idx === A.length) return false
      } else {
        currentBatch = currentBatch + seconds
        idx++
      }
    }
  }

  return currentBatch === 0
}

console.log(solution([1, 3, 4, 2, 2, 2, 1, 1, 2]))
console.log(solution([1, 1, 1, 1, 1]))
console.log(solution([1, 1, 1, 1, 1, 1]))

const a = new Array([1, 2] * 20000)
