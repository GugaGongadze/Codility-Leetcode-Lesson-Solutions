function solution(A, B, K) {
  let res = 0
  let lo = A
  let hi = B
  
  while (lo <= hi) {
    if (lo === hi && lo % K === 0) {
      res++
      lo++
      hi--
    } else if (lo % K === 0 && hi % K === 0) {
      res += 2
      lo += K
      hi -= K
    } else if (lo % K === 0 && hi % K !== 0) {
      res++
      lo += K
    } else if (lo % K !== 0 && hi % K === 0) {
      res++
      hi -= K
    } else {
      lo++
      hi--
    }
  }
  return res
}

console.log(solution(0, 2000000000, 1))
