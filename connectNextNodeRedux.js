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
    const queue = [[root, 0]]
    
    while (queue.length > 0) {
      const [node, level] = queue.shift()
      
      if (node) {
        // If queue contains another node
        if (queue[0]) {
          const [nextNode, nextNodeLevel] = queue[0]
          
          if (level < nextNodeLevel) {
            node.next = null
          } else {
            node.next = nextNode
          }
        }
        
        if (node.left) {
          queue.push([node.left, level + 1])
        }
        
        if (node.right) {
          queue.push([node.right, level + 1])
        }
      }
    }
    return root
  };
  
  // connect({"$id":"1","left":{"$id":"2","left":{"$id":"3","left":{"$id":"4","left":null,"next":null,"right":null,"val":7},"next":null,"right":null,"val":4},"next":null,"right":{"$id":"5","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"6","left":null,"next":null,"right":{"$id":"7","left":null,"next":null,"right":{"$id":"8","left":null,"next":null,"right":null,"val":8},"val":6},"val":3},"val":1})
  connect({"$id":"1","left":{"$id":"2","left":{"$id":"3","left":null,"next":null,"right":null,"val":4},"next":null,"right":{"$id":"4","left":null,"next":null,"right":null,"val":5},"val":2},"next":null,"right":{"$id":"5","left":null,"next":null,"right":{"$id":"6","left":null,"next":null,"right":null,"val":7},"val":3},"val":1})
  