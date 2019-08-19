function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var isBalanced = function (root) {
  if (!root) return true

  function depth(node) {
    if (!node) return 0

    return Math.max(depth(node.left), depth(node.right)) + 1
  }

  const leftDepth = depth(root.left)
  const rightDepth = depth(root.right)
  if (Math.abs(leftDepth - rightDepth) >= 2) return false

  return isBalanced(root.left) && isBalanced(root.right)
};


const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(3)
tree.left.left.left = new TreeNode(4)
tree.right = new TreeNode(2)
tree.right.right = new TreeNode(3)
tree.right.right.right = new TreeNode(4)


console.log("TCL: isBalanced(tree)", isBalanced(tree))
