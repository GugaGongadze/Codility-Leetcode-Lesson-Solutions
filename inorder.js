var inorderTraversal = function (root) {
  const result = []
  const stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()

    if (!node.left && !node.right) {
      result.push(node.val)
    } else if (node.left && !node.right) {
      const leftNode = node.left
      node.left = null
      stack.push(node)
      stack.push(leftNode)
    } else if (!node.left && node.right) {
      result.push(node.val)
      stack.push(node.right)
    } else {
      stack.push(node.right)
      const leftNode = node.left
      node.left = null
      node.right = null
      stack.push(node)
      stack.push(leftNode)
    }
  }

  console.log(result)
  return result
};

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}



const tree = new TreeNode(3)
tree.left = new TreeNode(1)
tree.right = new TreeNode(2)

inorderTraversal(tree)
