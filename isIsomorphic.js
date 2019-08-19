/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const sMap = new Map()
  const tMap = new Map()

  for (let idx = 0; idx < s.length; idx++) {
    const char = s[idx]
    if (sMap.has(char)) {
      sMap.set(char, sMap.get(char).concat(idx))
    } else {
      sMap.set(char, [idx])
    }
  }

  for (let idx = 0; idx < t.length; idx++) {
    const char = t[idx]
    if (tMap.has(char)) {
      tMap.set(char, tMap.get(char).concat(idx))
    } else {
      tMap.set(char, [idx])
    }
  }

  return equals(Array.from(sMap.values()), Array.from(tMap.values()))
};

function equals(arr1, arr2) {
  if (!arr1 || !arr2 || arr1.length !== arr1.length) return false

  for (let idx = 0; idx < arr1.length; idx++) {
    const arr1El = arr1[idx]
    const arr2El = arr2[idx]

    if (typeof arr1El !== typeof arr2El) return false

    if (arr1El.length !== arr2El.length) return false
    if (typeof arr1El === 'number'){
      if(arr1El !== arr2El) return false
    } else {
      if (!equals(arr1El, arr2El)) return false
    }

  }

  return true
}


console.log(isIsomorphic("egg", "ass"))
