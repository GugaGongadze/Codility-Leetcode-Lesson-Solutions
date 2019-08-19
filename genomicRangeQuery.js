const solution = (S, P, Q) => {
  const impactFactorChart = {
    A: 1,
    C: 2,
    G: 3,
    T: 4,
  }
  
  const transformed = S.split('').map(el => impactFactorChart[el])
  const prefixSums = (arr) => {
    const newArr = new Array(arr.length + 1).fill(0)
    for (let i = 1; i < arr.length + 1; i++) {
      newArr[i] = newArr[i - 1] + arr[i - 1]
    }
    return newArr
  }

  const countTotal = (arr, x, y) => arr[y + 1] - arr[x]

  const test = prefixSums(transformed)
  console.log(countTotal(test, 2, 4))
  

  // const impactFactors = []

  // for (const idx in P) {
  //   impactFactors.push(Math.min(...transformed.slice(P[idx], Q[idx] + 1)))
  // }

  // return impactFactors
}

const s = "GAGCCTA"
const p = [2, 5, 0]
const q = [4, 5, 6]

solution(s, p, q)
