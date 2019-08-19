/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return false

  return isMirror(root.left, root.right)
};

function isMirror(leftNode, rightNode) {
  if (!leftNode && !rightNode) return true
  if (!leftNode || !rightNode) return false

  const outerPair = isMirror(left.left, right.right)
  const innerPair = isMirror(left.right, right.left)

  return outerPair && innerPair
}
