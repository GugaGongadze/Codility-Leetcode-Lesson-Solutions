function solution(U, L, C) {
  // write your code in JavaScript (Node.js 8.9.4)
  const columnsSum = C.reduce((a, b) => a + b, 0)
  if (U + L !== columnsSum) return 'IMPOSSIBLE'

  const firstRow = []
  const secondRow = []
  
  let leftInFirstRow = U
  let leftInSecondRow = L

  for (const el of C) {
    if (leftInFirstRow > 0 && leftInSecondRow > 0) {
      if (el === 2) {
        firstRow.push(1)
        secondRow.push(1)
        leftInFirstRow--
        leftInSecondRow--
      } else if (el === 1) {
        firstRow.push(1)
        secondRow.push(0)
        leftInFirstRow--
      } else {
        firstRow.push(0)
        secondRow.push(0)
      }
    } else if (leftInFirstRow > 0) {
      if (el === 2) return 'IMPOSSIBLE'
      if (el === 1) {
        firstRow.push(1)
        secondRow.push(0)
        leftInFirstRow--
      } else {
        firstRow.push(0)
        secondRow.push(0)
      }
    } else if (leftInSecondRow > 0) {
      if (el === 2) return 'IMPOSSIBLE'
      if (el === 1) {
        firstRow.push(0)
        secondRow.push(1)
        leftInSecondRow--
      } else {
        firstRow.push(0)
        secondRow.push(0)
      }
    } else {
      firstRow.push(0)
      secondRow.push(0)
    }
    
  }
  console.log('firstRow', firstRow.join(''))
  console.log('secondRow', secondRow.join(''))

  return firstRow.join('') + ',' + secondRow.join('')
}

solution(3, 2, [2, 1, 1, 0, 1])
