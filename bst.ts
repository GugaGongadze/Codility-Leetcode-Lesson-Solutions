class BSTNode {
  val: number
  left: BSTNode
  right: BSTNode

  constructor(val: number) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  root: BSTNode

  constructor() {
    this.root = null;
  }

  insert(val: number): BSTNode {
    if (this.root === null) {
      this.root = new BSTNode(val)
      return this.root
    }

    return this.insertNode(this.root, val)
  }

  search(val: number): BSTNode | undefined {
    if (this.root === null) return undefined

    return this.searchNode(this.root, val)
  }

  private insertNode(node: BSTNode, val: number): BSTNode {
    if (node.val === val) return node
    if (node.val > val) {
      if (node.left === null) {
        node.left = new BSTNode(val)
        return node.left
      }
      return this.insertNode(node.left, val)
    } else {
      if (node.right === null) {
        node.right = new BSTNode(val)
        return node.right
      }
      return this.insertNode(node.right, val)
    }
  }

  private searchNode(node: BSTNode, val: number): BSTNode | undefined {
    if (node.val === val) return node
    if (node.left === null && node.right === null) return undefined

    const leftNodeSearch = node.left === null ? undefined : this.searchNode(node.left, val)
    if (leftNodeSearch !== undefined) return leftNodeSearch

    const rightNodeSearch = node.right === null ? undefined : this.searchNode(node.right, val)
    if (rightNodeSearch !== undefined) return rightNodeSearch

    return undefined
  }
}

function preOrder(node: BSTNode): number[] {
  let data: number[] = []
  data.push(node.val)

  if (node.left) {
    data = data.concat(preOrder(node.left))
  }

  if (node.right) {
    data = data.concat(preOrder(node.right))
  }

  return data
}

function postOrder(node: BSTNode): number[] {
  let data: number[] = []

  if (node.left) {
    data = data.concat(postOrder(node.left))
  }

  if (node.right) {
    data = data.concat(postOrder(node.right))
  }

  data.push(node.val)
  return data
}

function inOrder(node: BSTNode): number[] {
  let data: number[] = []

  if (node.left) {
    data = data.concat(inOrder(node.left))
  }

  data.push(node.val)

  if (node.right) {
    data = data.concat(inOrder(node.right))
  }

  return data
}

const tree = new BST()
tree.insert(5)
tree.insert(6)
tree.insert(7)
tree.insert(1)
tree.insert(2)
console.log(preOrder(tree.root))
console.log(postOrder(tree.root))
console.log(inOrder(tree.root))
