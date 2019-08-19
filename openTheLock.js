/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
var openLock = function (deadends, target) {
  const queue = [target]
  const mem = {
    [target]: 0
  }

  const getNeighbors = (lock) => {
    const neighbors = []
    const lockArr = lock.split('').map(slot => parseInt(slot))

    lockArr.forEach((slot, idx) => {
      const prev = lockArr.slice()
      const next = lockArr.slice()

      const prevEl = slot === 0 ? 9 : slot - 1
      const nextEl = slot === 9 ? 0 : slot + 1
      prev[idx] = prevEl
      next[idx] = nextEl

      neighbors.push(prev.join(''))
      neighbors.push(next.join(''))
    })

    return neighbors
  }

  while (queue.length > 0) {
    const slot = queue.shift()

    if (slot === '0000') {
      return mem[slot]
    } else {
      const neighbors = getNeighbors(slot)
      for (const neighbor of neighbors) {
        if (mem[neighbor] === undefined && !deadends.includes(neighbor)) {
          queue.push(neighbor)
          mem[neighbor] = mem[slot] + 1
        }
      }
    }
  }

  return -1
};

console.log(openLock(["0201", "0101", "0102", "1212", "2002"], "0202"))
console.log(openLock(["0000"], "8888"))
console.log(openLock(["0120","0201","0120","1001","2100"], "2202"))
console.log(openLock(["8888"], "0009"))
console.log(openLock(["8887", "8889", "8878", "8898", "8788", "8988", "7888", "9888"], "8888"))
