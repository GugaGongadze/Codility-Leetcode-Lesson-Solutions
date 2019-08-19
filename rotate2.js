/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  if (k !== 0) {
      let next = k % nums.length
      let tmp = nums[0]

      if (nums.length % 2 === 1 || (nums.length % 2 === 0 && k > nums.length / 2 && k % 2 === 1)) {
        for (let index = 0; index < nums.length; index++) {
          let nextVal = nums[next]
          nums[next] = tmp
          tmp = nextVal
  
          next = (next + k) % nums.length
        }
      } 
      else {
        for (let index = 0; index < k % nums.length; index++) {
          console.log("TCL: rotate -> k % nums.length", k % nums.length)
          for (let index = 0; index < nums.length / (k % nums.length); index++) {
            if (next === 0) continue
            let nextVal = nums[next]
            nums[next] = tmp
            tmp = nextVal
    
            next = (next + k) % nums.length
          }
        
          tmp = nums[index + 1]
          next = index + 1 + k % nums.length
        }
      }

  }
  
  console.log(nums)
};


// rotate([1,2,3,4], 2)
// rotate([1,2,3,4,5,6,7], 3)
// rotate([1,2,3,4,5,6,7], 0)
// rotate([1,2,3,4,5,6,7], 1)
// rotate([1,2,3,4,5,6], 3)
// rotate([1,2,3,4,5,6,7], 0)
// rotate([1,2], 3)
// rotate([-1,-100,3,99], 3)
rotate([1,2,3,4,5,6], 4)
