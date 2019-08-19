function solution(a, b, k) {
  console.log("TCL: solution -> parseInt(b/k)", parseInt(b/k))
  console.log("TCL: solution -> parseInt(a/k)", parseInt(a/k))
  return parseInt(b/k) - parseInt(a/k) + (a % k ? 0 : 1);
}

console.log(solution(6, 11, 2))
