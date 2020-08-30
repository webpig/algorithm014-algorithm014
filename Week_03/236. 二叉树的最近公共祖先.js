/**
 * 如果p或者q为root，则root为最近公共祖先
 * 如果不是root，则递归查找出左子树和右子树的结果
 * 如果left和right都为空，返回null；如果都不为空，说明p和q分别在左右子树两侧，返回root
 * 如果left为空，则说明p，q都不在左子树中，直接返回right
 * 如果right为空，则说明p，q都不在右子树中，直接返回left
 */

var lowestCommonAncestor = function(root, p, q) {
  if (!root || root === p || root === q) return root

  const left = lowestCommonAncestor(root.left, p, q)
  const right = lowestCommonAncestor(root.right, p, q)

  if (left && right) return root
  if (!left) return right
  if (!right) return left
  
  return null
};

// 时间复杂度O(n),最多遍历n个节点；空间复杂度，最多存储n个节点。

/**
 * 先保存所有父节点，然后遍历p及父节点，标记访问过的父节点，再遍历q及父节点，遇到访问过的父节点，则该节点为最近公共祖先
 */

var lowestCommonAncestor = function(root, p, q) {
  const parent = new Map()
  const visited = new Set()

  const dfs = (root) => {
    if (root.left) {
      parent.set(root.left.val, root)
      dfs(root.left)
    }
    if (root.right) {
      parent.set(root.right.val, root)
      dfs(root.right)
    }
  }

  dfs(root)

  while (p) {
    visited.add(p.val)
    p = parent.get(p.val)
  }

  while (q) {
    if (visited.has(q.val)) {
      return q
    }
    q = parent.get(q.val)
  }

  return null
};

// 复杂度如上