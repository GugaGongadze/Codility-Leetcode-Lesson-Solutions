function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTree(inorder, postorder) {
  if (inorder.length === 0 || postorder.length === 0) return null
  
  const root = new TreeNode(postorder.pop())
  const inorderIndex = inorder.indexOf(root.val)

  root.right = buildTree(inorder.slice(inorderIndex + 1), postorder)
  root.left = buildTree(inorder.slice(0, inorderIndex), postorder)

  return root
}

console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]))
