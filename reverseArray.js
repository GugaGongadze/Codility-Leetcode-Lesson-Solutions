function reverseArray(arr) {
  if (arr.length <= 1) return arr

  let lo = 0
  let hi = arr.length - 1

  while (lo < hi) {
    [arr[lo], arr[hi]] = [arr[hi], arr[lo]]

    lo++
    hi--
  }
}

reverseArray([1, 2, 3])
reverseArray([1, 2, 3, 4])

