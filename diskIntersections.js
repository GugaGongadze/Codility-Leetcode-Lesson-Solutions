function solution(A) {
  const withIdxs = A.map((el, idx) => [el, idx])
  withIdxs.sort((a, b) => {
    if (a[0] < b[0]) {
      return 1
    }
    if (a[0] > b[0]) {
      return -1
    }
    if (a[0] === b[0]) {
      return a[1] > b[1] ? -1 : 1
    }
    return 0
  })

  let res = 0

  withIdxs.forEach(([rad, idx], i) => {
    let cursor = i + 1
    while (cursor < withIdxs.length) {
      const [compRad, compIdx] = withIdxs[cursor]
      if (rad + compRad >= Math.abs(idx - compIdx)) {
        res++
      }
      cursor++
    }
  })

  return res > 10000000 ? -1 : res
}

console.log(solution([0,1,1,1]))
