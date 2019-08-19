function solution(AX, AY, BX, BY) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (AX === BX) {
    return (BX - 1) + ',' + BY
  }

  if (AY === BY) {
    return BX + ',' + (BY - 1)
  }

  const vector = [BX - AX, BY - AY]
  const [x, y] = vector

  if (x % y === 0) {
    vector[0] = x / Math.abs(y)
    vector[1] = y / Math.abs(y)
  } else if (y % x === 0) {
    vector[0] = x / Math.abs(x)
    vector[1] = y / Math.abs(x)
  }

  const newPoint = `${BX + vector[1]},${BY + (-vector[0])}`
  return newPoint
}

console.log(solution(-1, 3, 3, 1))
console.log(solution(2, 2, 2, -3))
console.log(solution(2, -1, 3, 1))
