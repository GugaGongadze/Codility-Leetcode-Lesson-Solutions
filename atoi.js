function myAtoi(str) {
  if (isNaN(parseInt(str))) {
    return 0
  } else if (parseInt(str) > 2 ** 31 - 1) {
    return 2 ** 31 - 1
  } else if (parseInt(str) < (-2) ** 31) {
    return (-2) ** 31
  } else {
    return parseInt(str)
  }
}
// console.log(myAtoi("-91283472332"))
// console.log(myAtoi("words and 987"))
// console.log(myAtoi("4193 with words"))
console.log(myAtoi("2147483648"))
