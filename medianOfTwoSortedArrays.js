var findMedianSortedArrays = function(nums1, nums2) {
 const mergedNums = merge(nums1, nums2)
 return mergedNums.length % 2 === 0 ? ((mergedNums[mergedNums.length / 2] + mergedNums[mergedNums.length / 2 - 1]) / 2) : mergedNums[Math.floor(mergedNums.length / 2)]
};

const merge = (arr1, arr2) => {
  const mergedArr = []

  if (arr1.length === 0) {
    return arr2
  } else if (arr2.length === 0) {
    return arr1
  } else {
    let pointer1 = 0
    let pointer2 = 0
    
    while (true) {
      if (arr1[pointer1] === undefined && arr2[pointer2] === undefined) {
        break
      } else if (arr1[pointer1] < arr2[pointer2] || arr2[pointer2] === undefined){
        mergedArr.push(arr1[pointer1])
        pointer1++
      } else if (arr1[pointer1] >= arr2[pointer2] || arr1[pointer1] === undefined) {
        mergedArr.push(arr2[pointer2])
        pointer2++
      }
    }
  }

  return mergedArr
}

console.log(findMedianSortedArrays([], [3, 4]))
console.log(findMedianSortedArrays([1, 2], [3, 4]))
console.log(findMedianSortedArrays([1, 3, 5], [0, 2, 4, 6]))
