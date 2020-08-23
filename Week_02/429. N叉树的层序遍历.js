// 迭代
var levelOrder = function(root) {
  const res = [], queue = []

  if (root) queue.push(root)

  while (queue.length > 0) {
    let size = queue.length
    const level = []

    while (size > 0) {
      const curr = queue.shift()

      level.push(curr.val)

      for (const child of curr.children) {
        queue.push(child)
      }

      size--
    }

    res.push(level)
  }

  return res
};

// 递归
var levelOrder = function(root) {
  let res = []

  const helper = (node, level) => {
    if (res.length <= level) {
      res.push([])
    }

    res[level].push(node.val)

    for (const child of node.children) {
      helper(child, level + 1)
    }
  }

  if (root) helper(root, 0)

  return res
};
