const sum = (x, y) => x + y
const multiply = (x, y) => x * y
const pipe = (fn1, fn2) => (arg1, arg2, arg3) => fn2(fn1(arg1, arg2), arg3)
const multiplyAndSum = pipe(multiply, sum)

console.log(multiplyAndSum(3, 4, 5))
