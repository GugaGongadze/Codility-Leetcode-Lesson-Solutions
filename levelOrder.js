/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  const levels = []

  populateLevels(levels, root, 0)
  
  return levels
}

function populateLevels(levels, node, level) {
  if (node) {
    if (levels[level] === undefined) {
      levels[level] = [node.val]
    } else {
      levels[level].push(node.val)
    }
  
    populateLevels(levels, node.left, level + 1)
    populateLevels(levels, node.right, level + 1)
  }
}

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)


levelOrder(tree)
