// 递归
var inorderTraversal = function(root) {
  let res = []

  const dfs = (root) => {
    if (root) {
      dfs(root.left)
      res.push(root.val)
      dfs(root.right)
    }
  }

  dfs(root)

  return res
};

// 迭代
var inorderTraversal = function(root) {
  let stack = [], res = [], curr = root

  while (stack.length > 0 || curr) {
    while (curr) {
      stack.push(curr)
      curr = curr.left
    }

    curr = stack.pop()
    res.push(curr.val)
    curr = curr.right
  }

  return res
};

// 时间复杂度O(n)，n为树中节点的个数；空间复杂度，O(n)，同样n为树中节点的个数。
