function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null
  const midIdx = Math.floor(nums.length / 2)
  const midNum = nums[midIdx]
  const node = new TreeNode(midNum)

  node.left = sortedArrayToBST(nums.slice(0, midIdx))
  node.right = sortedArrayToBST(nums.slice(midIdx + 1))

  return node
};

sortedArrayToBST([-10, -3, 0, 5, 9])
