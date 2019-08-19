function solution(A) {
  let equiLeaderCount = 0
  const potentialLeader = getPotentialLeader(A)

  if (potentialLeader === null || !isLeader(A, potentialLeader)) {
    return equiLeaderCount
  }

  for (let index = 1; index < A.length; index++) {
    if (isLeader(A.slice(0, index), potentialLeader) && isLeader(A.slice(index), potentialLeader)) {
      equiLeaderCount++
    }
  }

  return equiLeaderCount
}

function getPotentialLeader(arr) {
  const stack = []
  for (const element of arr) {
    if (stack.length === 0) {
      stack.push(element)
    } else if (stack[stack.length - 1] !== element) {
      stack.pop()
    } else {
      stack.push(element)
    }
  }

  return stack.length > 0 ? stack[0] : null
}

function isLeader(arr, x) {
  let potentialLeaderOccurrence = 0

  for (const element of arr) {
    if (element === x) {
      potentialLeaderOccurrence++
    }
  }

  return potentialLeaderOccurrence > arr.length / 2 ? true : false
}

console.log(solution([4, 3, 4, 4, 4, 2]))
// console.log(solution([0, 0]))
