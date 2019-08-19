var maxArea = function(height) {
  let maxHeight = 0
  let lo = 0
  let hi = height.length - 1

  while (lo < hi) {
    const sliceArea = Math.min(height[lo], height[hi]) * (hi - lo)
    if (sliceArea > maxHeight) {
      maxHeight = sliceArea
    }

    if (height[lo] > height[hi]) {
      hi--
    } else {
      lo++
    }
  }

  return maxHeight
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,2]))
