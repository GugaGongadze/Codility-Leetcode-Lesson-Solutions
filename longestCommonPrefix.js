/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) return ''
  if (strs.length === 1) return strs[0]

  let commonPrefix = ''

  for (let idx = 0; idx < strs.length; idx++) {
    const element = strs[idx];
    if (idx === 0) {
      commonPrefix = element
    } else {
      if (element[0] !== commonPrefix[0]) {
        return ''
      }
      
      let currPrefix = ''
      let j = 0
      while (j < commonPrefix.length) {
        if (commonPrefix[j] === element[j]) {
          currPrefix += element[j]
          j++
        } else {
          commonPrefix = currPrefix
          break
        }
      }
    }
  }

  return commonPrefix
};

longestCommonPrefix(["abb","abc"])
longestCommonPrefix(["a","a"])
longestCommonPrefix(["flower","flow","flight"])
longestCommonPrefix(["dog","racecar","car"])
