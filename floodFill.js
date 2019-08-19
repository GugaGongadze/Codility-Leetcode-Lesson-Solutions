/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  if (image[sr] === undefined || image[sr][sc] === undefined || image[sr][sc] === newColor) return image
  
  const oldColor = image[sr][sc]
  const fillLocation = [sr, sc]
  const stack = [fillLocation]

  while (stack.length > 0) {
    const [row, col] = stack.pop()
    image[row][col] = newColor

    if (image[row - 1] !== undefined && image[row - 1][col] === oldColor) {
      stack.push([row - 1, col])
    }
    if (image[row + 1] !== undefined && image[row + 1][col] === oldColor) {
      stack.push([row + 1, col])
    }
    if (image[row][col - 1] !== undefined && image[row][col - 1] === oldColor) {
      stack.push([row, col - 1])
    }
    if (image[row][col + 1] !== undefined && image[row][col + 1] === oldColor) {
      stack.push([row, col + 1])
    }
  }

  console.log("TCL: floodFill -> image", image)
  return image
};

floodFill([
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 1],
], 1, 1, 2)
