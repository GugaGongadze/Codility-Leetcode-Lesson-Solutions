/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let iters = 0
    const stack = []
    let chars = []

    for (const char of s) {
      if (!isNaN(char)) {
        iters = iters * 10 + Number(char)
      } else if (char === '[') {
        stack.push(chars)
        stack.push(iters)
        chars = []
        iters = 0
      } else if (char === ']') {
        const num = stack.pop()
        const prevChars = stack.pop()
        let newChars = []
        for (let idx = 0; idx < num; idx++) {
          newChars = newChars.concat(chars)
        }
        chars = prevChars.concat(newChars)
      } else {
        chars.push(char)
      }
    }

   return chars.join('')
};


decodeString("3[a]2[bc]")
