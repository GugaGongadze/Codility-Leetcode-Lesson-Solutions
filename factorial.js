// factorial of n is factorial of n - 1 times n
const factorial = n => n === 1 ? 1 : factorial(n - 1) * n
