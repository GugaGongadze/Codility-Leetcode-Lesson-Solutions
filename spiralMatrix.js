/**
* @param {number[][]} matrix
* @return {number[]}
*/
var spiralOrder = function(matrix) {
  if (matrix.length === 0) return matrix
  let traversed = {}
  let spiral = []
  let dir = 'r'
  
  let row = 0
  let col = 0
  while (true) {
    const num = matrix[row][col]
    spiral.push(num)
    traversed[num] = true
    
    if (dir === 'r') {
      if (matrix[row][col + 1] === undefined) {
        if (matrix[row + 1] === undefined) {
          break
        } else {
          if (traversed[matrix[row + 1][col]] === true) break
          dir = 'b'
          row++
        }
      } else {
        if (traversed[matrix[row][col + 1]] === true) {
          if (traversed[matrix[row + 1][col]] === true) {
            break
          } else {
            dir = 'b'
            row++
          }
        } else {
          col++
        } 
      }
    } else if (dir === 'b') {
      if (matrix[row + 1] === undefined) {
        if (matrix[row][col - 1] === undefined) {
          break
        } else {
          if (traversed[matrix[row][col - 1]] === true) break
          dir = 'l'
          col--
        }
      } else {
        if (traversed[matrix[row + 1][col]] === true) {
          if (traversed[matrix[row][col - 1]] === true) {
            break
          } else {
            dir = 'l'
            col--
          }
        } else {
          row++
        }
      }
    } else if (dir === 'l') {
      if (matrix[row][col - 1] === undefined) {
        if (matrix[row - 1][col] === undefined) {
          break
        } else {
          if (traversed[matrix[row - 1][col]] === true) break
          dir = 'u'
          row--
        }
      } else {
        if (traversed[matrix[row][col - 1]] === true) {
          if (traversed[matrix[row - 1][col]] === true) {
            break
          } else {
            dir = 'u'
            row--
          }
        } else {
          col--
        }
      }
    } else {
      if (matrix[row - 1] === undefined) {
        if (matrix[row][col + 1] === undefined) {
          break
        } else {
          if (traversed[matrix[row][col + 1]] === true) break
          dir = 'r'
          col++
        }
      } else {
        if (traversed[matrix[row - 1][col]] === true) {
          if (traversed[matrix[row][col + 1]] === true) {
            break
          } else {
            dir = 'r'
            col++
          }
        } else {
          row--
        }
      }
    }
    
  }
  
  return spiral
};


spiralOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
])

