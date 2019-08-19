/**
 * @param {number[]} cells
 * @param {number} N
 * @return {number[]}
 */
var prisonAfterNDays = function (cells, N) {
  let numberOfTimes = cells[0] === 1 || cells[cells.length - 1] === 1 ? N - 1 : N
  numberOfTimes = numberOfTimes > 17 ? numberOfTimes % 17 : numberOfTimes
  console.log("TCL: prisonAfterNDays -> numberOfTimes", numberOfTimes)

  // [0,0,1,1,1,1,1,0]
  let previous = cells.slice()
  const current = cells.slice()

  for (let i = 0; i < numberOfTimes; i++) {
    let idx = 0
    while (idx < cells.length) {
      const prevEl = previous[idx - 1]
      const nextEl = previous[idx + 1]
  
      if (prevEl === undefined || nextEl === undefined) {
        current[idx] = 0
      } else if (prevEl === nextEl) {
        current[idx] = 1
      } else {
        current[idx] = 0
      }  
      idx++
    }

    previous = current.slice()
  }
  

  return current
};

console.log(prisonAfterNDays([1,0,0,1,0,0,1,0], 1000000000))
