function traverse(grid, dict, row, col) {
  // add to dict if not there already
  if (!dict[row]) {
    dict[row] = []
  }
  
  if (!dict[row][col]) {
    dict[row][col] = true
  }
  
  // traverse left
  if (grid[row][col - 1] === '1' && !dict[row][col - 1]) {
    traverse(grid, dict, row, col - 1)
  }
  
  // traverse top
  if (!dict[row - 1]) {
    dict[row - 1] = []
  }
  if (grid[row - 1] && grid[row - 1][col] === '1' && dict[row - 1] && !dict[row - 1][col]) {
    traverse(grid, dict, row - 1, col)
  }
  
  // traverse right
  if (grid[row][col + 1] === '1' && !dict[row][col + 1]) {
    traverse(grid, dict, row, col + 1)
  }
  
  // traverse bot
  if (!dict[row + 1]) {
    dict[row + 1] = []
  } 
  if (grid[row + 1] && grid[row + 1][col] === '1' && dict[row + 1] && !dict[row + 1][col]) {
    traverse(grid, dict, row + 1, col)
  }
}

/**
* @param {character[][]} grid
* @return {number}
*/
var numIslands = function(grid) {
  if (grid.length === 0) return 0
  
  const gridHeight = grid.length
  const gridWidth = grid[0].length
  const dict = {}
  let isleCount = 0

  let row = 0
  let col = 0
  
  while (col !== gridWidth && row !== gridHeight) {
    const plot = grid[row][col]
    
    if (plot === '1' && (!dict[row] || dict[row] && !dict[row][col])) {
      isleCount++
      traverse(grid, dict, row, col)
    }
    
    if (col === gridWidth - 1) {
      row++
      col = 0
    } else {
      col++
    }
  }
  
  return isleCount
}



console.log(numIslands([
  ["1","0","1","1","0","1","1"]
]))

// console.log(numIslands([
//   ["1","0","1","1","1"],
//   ["1","0","1","0","1"],
//   ["1","1","1","0","1"]
// ]))
