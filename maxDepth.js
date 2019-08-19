/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (root === null) return 0
  
  const leftChildDepth = maxDepth(root.left)
  const rightChildDepth = maxDepth(root.right)
  
  return Math.max(leftChildDepth, rightChildDepth) + 1
};
