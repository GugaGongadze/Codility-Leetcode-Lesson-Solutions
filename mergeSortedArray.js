/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let mergePointer = nums1.length - 1
  let nums1Pointer = m - 1
  let nums2Pointer = n - 1
  
  while (mergePointer >= 0) {
    const numFrom1 = nums1[nums1Pointer]
    const numFrom2 = nums2[nums2Pointer]
    
    if (numFrom1 > numFrom2 || numFrom2 === undefined) {
      nums1[mergePointer] = numFrom1
      nums1Pointer--
    } else {
      nums1[mergePointer] = numFrom2
      nums2Pointer--
    }
    
    mergePointer--
  }
};
