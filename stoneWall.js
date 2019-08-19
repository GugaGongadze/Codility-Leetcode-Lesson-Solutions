function solution(H) {
  let blocks = 0
  let stack = []
  
  for (const [index, currentElement] of H.entries()) {
    const lastElementInStack = stack[stack.length - 1]
    const previousElement = H[index - 1]
    if (blocks === 0) {
      blocks++
      stack.push(currentElement)
    } else if (currentElement > previousElement) {
      blocks++
      stack.push(currentElement - previousElement)
    } else if (currentElement < previousElement) {
      if ((previousElement - currentElement) < lastElementInStack) {
        stack.pop()
        if (stack.length === 0) {
          stack.push(currentElement)
        } else {
          stack.push(previousElement - currentElement)
        }
        blocks++
      } else if ((previousElement - currentElement) === lastElementInStack) {
        stack.pop()
      } else {
        let removedAmount = 0
        while (stack.length > 0 && (previousElement - currentElement) > removedAmount) {
          removedAmount += stack.pop()
        }

        if (stack.length === 0) {
          stack.push(currentElement)
          blocks++
        } else if (currentElement !== stack[stack.length - 1]) {
          stack.push(currentElement - stack[stack.length - 1])
          blocks++
        }
      }
    }
  }
  
  return blocks
}

console.log(solution([2, 5, 1, 4, 6, 7, 9, 10, 1]))
console.log(solution([8, 8, 5, 7, 9, 8, 7, 4, 8]))
