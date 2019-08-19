function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function buildTree(preorder, inorder) {
  return build(preorder.reverse(), inorder)
}

function build(preorder, inorder) {
  if (inorder.length === 0) return null

  const idx = inorder.indexOf(preorder.pop())
  const root = new TreeNode(inorder[idx])

  root.left = build(preorder, inorder.slice(0, idx))
  root.right = build(preorder, inorder.slice(idx + 1))
  
  return root
}

console.log(buildTree([3,9,20,15,7], [9,3,15,20,7]))
// console.log(buildTree([1, 2], [1, 2]))
