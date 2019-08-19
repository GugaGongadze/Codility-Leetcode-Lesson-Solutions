function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}


var minDepth = function(root) {
  if (!root) return 0

  if (!root.left) return minDepth(root.right) + 1
  if (!root.right) return minDepth(root.left) + 1

  return Math.min(minDepth(root.left), minDepth(root.right)) + 1
};

const tree = new TreeNode(1)
tree.left = new TreeNode(2)
tree.left.left = new TreeNode(3)
tree.left.left.left = new TreeNode(4)
tree.right = new TreeNode(2)
// tree.right.right = new TreeNode(3)


console.log(minDepth(tree))

