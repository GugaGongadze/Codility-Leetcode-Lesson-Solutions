function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const queue = [root]
  const serialized = []

  while (queue.length > 0) {
    const node = queue.shift()

    if (node) {
      serialized.push(node.val)
  
      if (node.left) {
        queue.push(node.left)
      } else {
        queue.push(null)
      }
  
      if (node.right) {
        queue.push(node.right)
      } else{
        queue.push(null)
      }
    } else {
      serialized.push(null)
    }
  }

  return JSON.stringify(serialized)
};

const root = new TreeNode(-1)
root.left = new TreeNode(0)
root.right = new TreeNode(1)

/**
* Decodes your encoded data to tree.
*
* @param {string} data
* @return {TreeNode}
*/
var deserialize = function(data) {
  const serialized = JSON.parse(data)
  if (serialized[0] === null) return null

  const root = new TreeNode(serialized[0])
  populateChildren(root, serialized, 0)

  return root
};

function populateChildren(root, serialized, idx) {
  const leftChild = serialized[idx * 2 + 1]
  const rightChild = serialized[idx * 2 + 2]

  if (leftChild !== null && leftChild !== undefined) {
    root.left = new TreeNode(leftChild)
    populateChildren(root.left, serialized, idx * 2 + 1)
  } else if (leftChild === null) {
    root.left = leftChild
  }

  if (rightChild !== null && rightChild !== undefined) {
    root.right = new TreeNode(rightChild)
    populateChildren(root.right, serialized, idx * 2 + 2)
  } else if (rightChild === null) {
    root.right = rightChild
  }
}

deserialize('[5,2,3,null,null,2,4,3,1]')
