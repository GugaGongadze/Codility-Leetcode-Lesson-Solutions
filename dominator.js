function solution(A) {
  const stack = []
  for (const element of A) {
    if (stack.length === 0) {
      stack.push(element)
    } else if (stack[stack.length - 1] !== element) {
      stack.pop()
    } else {
      stack.push(element)
    }
  }

  if (stack.length === 0) {
    return -1
  }

  const potentialLeader = stack[0]
  let potentialLeaderPosition = 0
  let potentialLeaderOccurrence = 0

  for (const [index, element] of A.entries()) {

    if (element === potentialLeader) {
      potentialLeaderPosition = index
      potentialLeaderOccurrence++
    }
  }

  return potentialLeaderOccurrence > A.length / 2 ? potentialLeaderPosition : -1
}

console.log(solution([3, 4, 3, 4, 3, -1, 3, 3]))
