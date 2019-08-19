/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  const triangle = []
  for (let idx = 0; idx < numRows; idx++) {
    if (idx === 0) {
      triangle[0] = [1]
    } else if (idx === 1) {
      triangle[1] = [1, 1]
    } else {
      triangle[idx] = [1]
      const lastRow = triangle[idx - 1]
      for (let j = 0; j < lastRow.length; j++) {
        const element = lastRow[j];
        const nextElement = lastRow[j + 1];
  
        if (element !== undefined && nextElement !== undefined) {
          triangle[idx].push(element + nextElement)
        }
      }
      triangle[idx].push(1)
    }
  }

  return triangle
};

generate(5)
