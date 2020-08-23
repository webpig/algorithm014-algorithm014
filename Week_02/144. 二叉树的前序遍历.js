// 递归
var preorderTraversal = function(root) {
  let res = []

  const dfs = (root) => {
    if (root) {
      res.push(root.val)
      dfs(root.left)
      dfs(root.right)
    }
  }

  dfs(root)

  return res
};

// 迭代，注意存放左右子节点的时候要逆序
var preorderTraversal = function(root) {
  let res = [], stack = []

  if (root) stack.push(root)

  while (stack.length > 0) {
    const curr = stack.pop()

    res.push(curr.val)

    if (curr.right) stack.push(curr.right)
    if (curr.left) stack.push(curr.left)
  }

  return res
};