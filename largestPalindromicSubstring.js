var longestPalindrome = function(s) {
  let longestSubstring = ''
  
  for (let idx in s) {
    const oddPalindrome = getPalindrome(s, Number(idx), Number(idx))
    if (oddPalindrome.length > longestSubstring.length) {
      longestSubstring = oddPalindrome
    }
    
    const evenPalindrome = getPalindrome(s, Number(idx), Number(idx) + 1)
    if (evenPalindrome.length > longestSubstring.length) {
      longestSubstring = evenPalindrome
    }
  }
  
  return longestSubstring
};

const getPalindrome = (str, lo, hi) => {
  while (lo >= 0 && hi < str.length && str[lo] === str[hi]) {
    lo--
    hi++
  }
  return str.slice(lo + 1, hi)
}

console.log(longestPalindrome('ababad'))

