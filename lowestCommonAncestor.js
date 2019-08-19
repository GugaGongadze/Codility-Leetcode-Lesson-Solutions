function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

const root = new TreeNode(3)
root.left = new TreeNode(5)
root.left.left = new TreeNode(6)
root.left.right = new TreeNode(2)
root.left.right.left = new TreeNode(7)
root.left.right.right = new TreeNode(4)
root.right = new TreeNode(1)
root.right.left = new TreeNode(0)
root.right.right = new TreeNode(8)

/**
* Definition for a binary tree node.
* function TreeNode(val) {
  *     this.val = val;
  *     this.left = this.right = null;
  * }
  */
  /**
  * @param {TreeNode} root
  * @param {TreeNode} p
  * @param {TreeNode} q
  * @return {TreeNode}
  */
  var lowestCommonAncestor = function(root, p, q) {
   if (root === null || root === p || root === q) return root

   const left = lowestCommonAncestor(root.left, p, q)
   const right = lowestCommonAncestor(root.right, p, q)

   return left === null ? right: right === null ? left : root
  };
  
console.log(lowestCommonAncestor(root, new TreeNode(7), new TreeNode(4)))
  