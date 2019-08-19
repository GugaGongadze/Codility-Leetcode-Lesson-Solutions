function solution(S) {
  if (S.length === 0) return 1

  function isPair(a, b) {
    if ((a === '(' && b === ')') || (a === '[' && b === ']') || (a === '{' && b === '}')) return true
    return false
  }

  const stack = []

  for (const el of S) {
    if (isPair(stack[stack.length - 1], el)) {
      stack.pop()
    } else {
      stack.push(el)
    }
  }

  return stack.length === 0 ? 1 : 0
}

console.log(solution("())"))
// console.log(solution("(()(())())"))
// console.log(solution("{[()()]}"))
// console.log(solution("([)()]"))
// console.log(solution("([]()]"))
