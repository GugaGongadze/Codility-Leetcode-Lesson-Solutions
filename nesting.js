function solution(S) {
  let counter = 0
  for (const char of S) {
    if (char === '(') {
      counter++
    } else {
      counter--
    }
  }

  return counter
}

console.log(solution("(()(())())"))
console.log(solution("())"))
