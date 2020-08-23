// 递归，对子节点进行同样的遍历调用
var preorder = function(root) {
  const res = []

  const dfs = (root) => {
    if (root) {
      res.push(root.val)

      for (const child of root.children) {
        dfs(child)
      }
    }
  }

  dfs(root)

  return res
}

// 迭代，也就是手动用栈来实现
var preorder = function(root) {
  let stack = [], ans = []

  if (root) stack.push(root)

  while (stack.length > 0) {
    let size = stack.length

    while (size > 0) {
      const curr = stack.pop()

      ans.push(curr.val)

      for (let i = curr.children.length - 1; i >= 0; i--) {
        stack.push(curr.children[i])
      }

      size--
    }
  }

  return ans
}