/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    if (n === 1) return '1'
  
    let newStr = []
    const prevStr = countAndSay(n - 1)
    
    let counter = 0
    let currChar = prevStr[0]
    
    for (const char of prevStr) {
      if (char === currChar) {
        counter++
      } else {
        newStr.push(String(counter))
        counter = 1
        newStr.push(currChar)
        currChar = char
      }
    }

    newStr.push(String(counter))
    newStr.push(currChar)

    return newStr.join('')
};  

console.log(countAndSay(1))
console.log(countAndSay(2))
console.log(countAndSay(3))
console.log(countAndSay(4))
console.log(countAndSay(5))
console.log(countAndSay(6))
console.log(countAndSay(7))
console.log(countAndSay(8))
console.log(countAndSay(9))
console.log(countAndSay(10))
