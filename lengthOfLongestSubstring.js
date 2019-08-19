function solution(s) {
  if(s.length < 2) return s.length

  let table = {}
  let maxSubstringLength = 0
  let currentSubstringLength = 0
  let indexOfLastRepeatingElement = 0

  for (let idx = 0; idx < s.length; idx++) {
    const letter = s[idx];
    const letterIndex = table[letter]


    if (letterIndex !== undefined && indexOfLastRepeatingElement <= letterIndex) {
      if (idx - letterIndex === 1) {
        table = {[letter]: idx}
        maxSubstringLength = Math.max(maxSubstringLength, currentSubstringLength)
        currentSubstringLength = 1
      } else {
        table[letter] = idx
        maxSubstringLength = Math.max(maxSubstringLength, currentSubstringLength)
        currentSubstringLength = idx - letterIndex
      }
      indexOfLastRepeatingElement = letterIndex
    } else {
      table[letter] = idx
      currentSubstringLength++
    }
  }

  return Math.max(maxSubstringLength, currentSubstringLength)
}

console.log(solution("dvdf"))
console.log(solution("abcabcbb"))
console.log(solution("pwwkew"))
console.log(solution("au"))
console.log(solution("abba"))
console.log(solution("wobgrovw"))
