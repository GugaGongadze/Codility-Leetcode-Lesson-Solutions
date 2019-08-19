var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums.length
  
  let lo = 1
  let hi = 2
  
  while (hi < nums.length - 1) {
    let loNum = nums[lo]
    let hiNum = nums[hi]
      if (loNum === hiNum) {
          hi++
      } else {
          if (nums[lo - 1] === loNum) {
              nums[lo] = hiNum 
              lo++
          }
          hi++
      }
  }
  console.log(nums)
};

removeDuplicates([0,0,1,1,1,2,2,3,3,4])
