/**
* @param {string} s
* @return {number}
*/
var romanToInt = function(s) {
  let table = {
    'M': 1000,
    'D': 500,
    'C': 100,
    'L': 50,
    'X': 10,
    'V': 5,
    'I': 1
  }
  
  let converted = 0
  let idx = 0

  while (idx < s.length) {
    const letter = s[idx];
    const nextLetter = s[idx + 1]
    if (letter === 'C' && nextLetter !== undefined && (nextLetter === 'D' || nextLetter === 'M')) {
      converted += nextLetter === 'D' ? 400 : 900
      idx += 2
    } else if (letter === 'X' && nextLetter !== undefined && (nextLetter === 'L' || nextLetter === 'C')) {
      converted += nextLetter === 'L' ? 40 : 90
      idx += 2
    } else if (letter === 'I' && nextLetter !== undefined && (nextLetter === 'V' || nextLetter === 'X')) {
      converted += nextLetter === 'V' ? 4 : 9
      idx += 2
    } else {
      converted += table[letter]
      idx += 1
    }
  }
  
  return converted
};


romanToInt('MCMXCIV')
romanToInt('III')
