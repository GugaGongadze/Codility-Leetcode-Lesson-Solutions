const spreadArgs = (fn) => (args) => fn(...args)

const sum = (a, b, c, d) => a + b + c + d

const g = spreadArgs(sum)

console.log(g([1, 2, 3, 5]))
