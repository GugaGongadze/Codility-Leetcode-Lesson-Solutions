var cloneGraph = function(node) {
  let map = {};
  return traverse(node);

   function traverse(node) {
       if (!node) return node;
       if (!map[node.val]) {
         map[node.val] = new Node(node.val);
         map[node.val].neighbors = node.neighbors.map(neighbor => traverse(neighbor));
       }
       return map[node.val];
   }
};

function Node(val,neighbors) {
  this.val = val;
  this.neighbors = neighbors;
};

const res = cloneGraph({"$id":"1","neighbors":[{"$id":"2","neighbors":[{"$ref":"1"},{"$id":"3","neighbors":[{"$ref":"2"},{"$id":"4","neighbors":[{"$ref":"3"},{"$ref":"1"}],"val":4}],"val":3}],"val":2},{"$ref":"4"}],"val":1})

console.log(res)
