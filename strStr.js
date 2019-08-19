function strStr(haystack, needle) {
  if (needle.length === 0 || needle === haystack) return 0
  if (needle.length > haystack.length) return -1
  if (needle.length === haystack.length && needle !== haystack) return -1

  let right = left = 0
  let needleIdx = 0
  let matchIdx = -1

  while (left < haystack.length) {
    if (haystack[left] !== needle[needleIdx]) {
      right = ++left
      matchIdx = -1
    } else {
      matchIdx = matchIdx === -1 ? left : matchIdx
      right++
      needleIdx++

      while (true) {
        if (needleIdx === needle.length) {
          return matchIdx
        }

        if (haystack[right] === needle[needleIdx]) {
          right++
          needleIdx++
        } else {
          right = ++left
          matchIdx = -1
          needleIdx = 0
          break
        }
      }
    }
  }

  return matchIdx
}

console.log(strStr('hello', 'll'))
console.log(strStr('aaaaa', 'baa'))
console.log(strStr('a', 'a'))
console.log(strStr('mississippi', 'issip'))
