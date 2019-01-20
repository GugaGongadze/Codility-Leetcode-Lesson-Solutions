function lesson3(A, K) {
  for (let index = 0; index < K; index++) {
    const lastElement = A[A.length - 1]
    A = A.slice(0, A.length - 1)
    A.unshift(lastElement)
  }

  return A
}

lesson3([3, 8, 9, 7, 6], 3)
