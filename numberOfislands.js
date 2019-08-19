/**
* @param {character[][]} grid
* @return {number}
*/

function hasLeft(grid, row, col) {
  return grid[row][col - 1] !== '0' && grid[row][col - 1] !== undefined
}

function hasTop(grid, row, col) {
  if (!grid[row - 1]) return false
  return grid[row - 1][col] !== '0' && grid[row - 1][col] !== undefined
}

function hasRight(grid, row, col) {
  return grid[row][col + 1] !== '0' && grid[row][col + 1] !== undefined
}

function hasBot(grid, row, col) {
  if (!grid[row + 1]) return false
  return grid[row + 1][col] !== '0' && grid[row + 1][col] !== undefined
}
function leftFound(grid, row, col) {
  if (!grid[row]) return false
  return grid[row][col - 1]
}
function topFound(grid, row, col) {
  if (!grid[row - 1]) return false
  return grid[row - 1][col]
}
function rightFound(grid, row, col) {
  if (!grid[row]) return false
  return grid[row][col + 1]
}
function botFound(grid, row, col) {
  if (!grid[row + 1]) return false
  return grid[row + 1][col]
}

var numIslands = function(grid) {
  let counter = 0
  const foundPlotIndices = []
  
  for (let i = 0; i < grid.length; i++) {
    const row = grid[i];
    for (let j = 0; j < row.length; j++) {
      const plot = row[j];
      if (plot === '1') {
        if (counter === 0) {
          foundPlotIndices[i] = [true]
          counter++
        }
        
        let currRow = i
        let currCol = j
        while (true) {
          if (hasLeft(grid, currRow, currCol) && !leftFound(foundPlotIndices, currRow, currCol)) {
            if (foundPlotIndices[currRow] === undefined) {
              foundPlotIndices[currRow] = []
            }
            foundPlotIndices[currRow][currCol - 1] = true
            currCol--
          } else if (hasTop(grid, currRow, currCol) && !topFound(foundPlotIndices, currRow, currCol)) {
            if (foundPlotIndices[currRow - 1] === undefined) {
              foundPlotIndices[currRow + 1] = []
            }
            foundPlotIndices[currRow - 1][currCol] = true
            currRow--
          } else if (hasRight(grid, currRow, currCol) && !rightFound(foundPlotIndices, currRow, currCol)) {
            if (foundPlotIndices[currRow] === undefined) {
              foundPlotIndices[currRow] = []
              counter++
            }
            foundPlotIndices[currRow][currCol + 1] = true
            currCol++
          } else if (hasBot(grid, currRow, currCol) && !botFound(foundPlotIndices, currRow, currCol)) {
            if (foundPlotIndices[currRow + 1] === undefined) {
              foundPlotIndices[currRow + 1] = []
            }
            foundPlotIndices[currRow + 1][currCol] = true
            currRow++
          } else {
            break
          }
        }
        
        if (!hasLeft(grid, currRow, currCol) && !hasTop(grid, currRow, currCol) && !hasRight(grid, currRow, currCol) && !hasBot(grid, currRow, currCol)) {
          if (foundPlotIndices[currRow] === undefined) {
            foundPlotIndices[currRow] = []  
          }
          foundPlotIndices[currRow][currCol] = true
          counter++
        }
      };
    }
    
  }
  return counter
} 
// console.log(numIslands([
//   ['1', '1', '1', '1', '0'],
//   ['1', '1', '0', '1', '0'],
//   ['1', '1', '0', '0', '0'],
//   ['0', '0', '0', '0', '0'],
// ]))

// console.log(numIslands([
//   ['1', '1', '0', '0', '0'],
//   ['1', '1', '0', '0', '0'],
//   ['0', '0', '1', '0', '0'],
//   ['0', '0', '0', '1', '1'],
// ]))

// console.log(numIslands([
//   ["1","1","1"],
//   ["0","1","0"],
//   ["1","1","1"]
// ]))

console.log(numIslands([
  ["1","0","1","1","0","1","1"]
]))

// console.log(numIslands([
//   ["1","0","1","1","1"],
//   ["1","0","1","0","1"],
//   ["1","1","1","0","1"]
// ]))
