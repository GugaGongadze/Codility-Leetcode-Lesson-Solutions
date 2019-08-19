function numberOfOccurrences(arr, int) {
  return arr.filter(el => el === int).length
}

console.log(numberOfOccurrences([2, 3, 4, 3, 2, 1], 3))
