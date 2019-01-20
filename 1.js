function lesson1(A) {
  let largestSequenceSize = 0
  let lastSequenceSize = 0
  let sequenceStarted = false

  while (N !== 0) {
    if (N % 2 === 1 && !sequenceStarted) {
      sequenceStarted = true
    } else if (N % 2 === 1 && sequenceStarted) {
      if (lastSequenceSize > largestSequenceSize) {
        largestSequenceSize = lastSequenceSize
      }

      lastSequenceSize = 0
    } else if (N % 2 === 0 && sequenceStarted) {
      lastSequenceSize += 1
    }

    N = Math.floor(N / 2)
  }

  return Math.max(largestSequenceSize, lastSequenceSize)
}
