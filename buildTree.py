class TreeNode:
    def __init__(self, x):
        self.val = x
        self.left = None
        self.right = None


def buildTree(inorder, postorder):
    map_inorder = {}
    for i, val in enumerate(inorder):
        map_inorder[val] = i

    def recur(low, high):
        if low > high:
            return None
        x = TreeNode(postorder.pop())
        mid = map_inorder[x.val]
        x.right = recur(mid+1, high)
        x.left = recur(low, mid-1)
        return x
    return recur(0, len(inorder)-1)


tree = buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])
print(tree.right.left.val)
