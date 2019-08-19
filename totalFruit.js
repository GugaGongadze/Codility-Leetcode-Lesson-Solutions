/**
 * @param {number[]} tree
 * @return {number}
 */
var totalFruit = function(tree) {
  let maxFruits = 0
  let currFruits = 1
  
  let lo = 0
  let hi = 1
  
  let firstFruit = tree[lo]
  let secondFruit
  
  while (hi < tree.length) {
    // 
    if (tree[hi] !== firstFruit) {
      if (secondFruit === undefined) {
        secondFruit = tree[hi]  
        hi++
        currFruits++
      } else {
        if (tree[hi] !== secondFruit) {
          maxFruits = Math.max(maxFruits, currFruits)
          lo++
          hi = lo + 1
          currFruits = 1
          firstFruit = tree[lo]
          secondFruit = undefined
          
        } else {
          hi++
          currFruits++
          
        }
       
      }
    } else {
      hi++
      currFruits++
    }
  }

return Math.max(maxFruits, currFruits)
};
console.log(totalFruit([3,3,3,1,2,1,1,2,3,3,4]))
console.log(totalFruit([3,3,3,1,2,1,1,1,3,3,3]))


// console.log(totalFruit([1,2,1]))
// console.log(totalFruit([0,1,2,2]))
// console.log(totalFruit([1,2,3,2,2]))
