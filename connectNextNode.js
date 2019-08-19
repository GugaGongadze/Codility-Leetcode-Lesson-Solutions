/**
 * Definition for a Node.
 * function Node(val,left,right,next) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 *    this.next = next;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (root) {
    connectNext(root.left, root.right)
  }
  return root
};

function connectNext(leftNode, rightNode) {
  if (leftNode && rightNode) {
    leftNode.next = rightNode
    connectNext(leftNode.left, leftNode.right)
    connectNext(rightNode.left, rightNode.right)
  }
  if (rightNode) {
    connectNext(leftNode.right, rightNode.left)
  }
}

connect(null)
// connect({"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":{"$id":"6","left":null,"next":null,"right":null,"val":6},"next":null,"right":{"$id":"7","left":null,"next":null,"right":null,"val":7},"val":3},"val":1})
