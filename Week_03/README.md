## 学习笔记

### 递归

递归主要解决具有重复性的问题，子问题是独立的，它是一种编程技巧，一种具体实现。

**递归主要注意以下几点：**

**1、确定问题是重复性的，可以分为子问题，而且都是独立的。**
**2、找到终止条件，不然会无限循环，出现栈溢出问题。**

递归代码模板如下：

```js
function recursion(level, params) {
  // 结束条件
  if (level === MAX_LEVEL) {
    return
  }

  // 处理当前逻辑
  process(level, params)

  // 递归调用处理下层
  recursion(level + 1, params)

  // 清理
}
```

通过上面的模板代码可以看出，递归其实就是一层一层的向下，然后一层一层的上来。整个过程可以画成一颗状态树。在写递归的时候我们不能人肉递归，因为递归比较复杂，人脑想递归的过程会容易乱。这时候我们可以借助画状态树的方法来辅助思考理解；不过最好是能摆脱这些方法，直接思考递归的终止条件，递归函数以及输入输出。只要逻辑是正确的，就不需要再想具体过程了。

例题：

[二叉树的最大深度](https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/)

思路：我们发现树的结构其实就是递归的，而求整棵树的最大深度，我们可以先求左子树和右子树的深度，然后取较大值；而左子树和右子树的最大深度同样是这么求的。最后得出公式：二叉树的最大深度 = 左子树和右子树的较大深度 + 1；递归终止条件就是root为空了，此时深度为0；具体代码如下：

```js
const maxDepth = function(root) {
  if (!root) return 0
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1
}
```

其实我们只要能确定终止条件，发现问题的重复性，然后输入输出确定好，基本上就可以写出递归程序。但是这往往也是难点，还是需要多多刷题总结。

### 分治

分治是一种算法思想，具体实现通过递归。它是将问题求解分半，直到为1，不能再分解，之后又要做合并的操作。比如归并排序，pow(x, n)问题都可以用分治来解决。

### 回溯

回溯也是一种算法思想，其主要是处理找到所有解得问题，它是穷举所有可能的结果，复杂度较高，需要配合剪枝操作来优化。回溯主要是涉及到一个撤销的操作，不撤销上一步的操作找不到更多的解。

回溯可以解决组合、全排列、N皇后等问题。这里拿全排列问题举例：

[全排列](https://leetcode-cn.com/problems/permutations/)

```js
const permute = function(nums) {
  const res = []

  // path存储当前已选择的元素，used用于判断元素是否使用过，防止重复使用
  const dfs = (path, used) => {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue

      used[i] = true
      path.push(nums[i])

      // 递归到下一层，
      dfs(path, used)

      // 撤销选择，寻找更多解
      used[i] = false
      path.pop()
    }
  }

  dfs([], [])

  return res
};
```

回溯大致模板如下：

```js
const res = []

if (结束条件) {
  res.push(当前符合条件的选择)
  return
}

for 选择 of 选择列表
  添加选择
  递归添加后面的选择
  撤销选择
```

这周的学习总结完毕，还是要多多练习。