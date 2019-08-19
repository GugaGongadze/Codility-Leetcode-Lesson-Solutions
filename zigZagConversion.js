var convert = function(s, numRows) {
  if (numRows === 1) return s
  
  let convertedStr = ''
  
  for (let i = 0; i < numRows; i++) {
    const level = numRows - i
    const evenJump = level === 1 ? 0 : level * 2 - 3
    const oddJump = level === numRows ? 0 : (numRows - level + 1) * 2 - 3
    
    let isEven = true 
    let idx = i
    while (idx < s.length) {
      if ((isEven && evenJump !== 0) || (!isEven && oddJump !== 0)) {
        convertedStr += s[idx]
      }
      
      if (isEven && evenJump > 0) {
        idx += evenJump + 1
      } else if (!isEven && oddJump > 0) {
        idx += oddJump + 1
      }
      
      isEven = !isEven
    }
  }
  
  return convertedStr
};

// console.log(convert('PAYPALISHIRING', 5))
// console.log(convert('PAYPALISHIRING', 4))
// console.log(convert('PAYPALISHIRING', 3))
console.log(convert('A', 1))
