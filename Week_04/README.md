### 学习笔记

#### BFS, DFS

BFS：广度优先搜索，向周围一层一层搜索，直到找到正确结果或者搜索完整个路径。

DFS：深度优先搜索，向一条路径一直搜索，直到没有路可走，然后向另一条路搜索，直接找到正确结果或者搜索完整个路径。

两者都是解决搜索问题，用于查找在多条路径中是否有正确的解。比如一棵树，需要查找一个值
。BFS会一层一层查找，直到找到节点；DFS则是延一条路一直搜索下去，没有找到再在其他路径上找。BFS用的是队列，DFS用的是栈，可以用递归和迭代来实现。

BFS模板：

```js
const bfs = (root) => {
  let result = [], queue = [root]
  while (queue.length > 0) {
    let level = [], n = queue.length
    for (let i = 0; i < n; i++) {
      let node = queue.pop()
      level.push(node.val) 
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push(level)
  }
  return result
};
```

DFS模板：

```js
// 递归写法
const visited = new Set()
const dfs = node => {
  if (visited.has(node)) return
  visited.add(node)
  dfs(node.left)
  dfs(node.right)
}

// 迭代写法
const visited = new Set()

const dfs = (root) => {
  let result = []
  let stack = [root]

  while (stack.length > 0) {
    const node = stack.pop()

    if (visited.has(node)) return
    visited.add(node)

    process(node)
    const nodes = generateRelatedNodes(node)
    stack.push(nodes)
  }

  return result
}
```

实战题目：

[22. 括号生成](https://leetcode-cn.com/problems/generate-parentheses/#/description)

[433. 最小基因变化](https://leetcode-cn.com/problems/minimum-genetic-mutation/)

第一题的思路我们可以用DFS来解，我们确定终止条件：所有的括号用完，即3个左括号，3个右括号；然后我们每次使用后都将括号的数量+1。直到找到所有结果。代码如下：

```js
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  const res = []

  const dfs = (left, right, str) => {
    if (left === n && right === n) {
      res.push(str)
    }

    if (left < n) {
      dfs(left + 1, right, str + '(')
    }

    if (left > right) {
      dfs(left, right + 1, str + ')')
    }
  }

  dfs(0, 0, '')

  return res
};
```

上面这题使用DFS解法非常合适，我们只要确定好边界，然后保存正确的结果即可。每次下探到下一层的实话，括号的数量相应增加。

第二题是一种类似求水波纹的最短路径问题，我们只要套BFS模板即可；
但是这道题我开始看不太懂，看题解也很难想明白。
后面去做单词接龙那道题，和这道题基本一样，最后是看了国际版的一个题解才懂的；通过代码基本能理解了。

思路：该题是要求每次只改变一个字符，而且每次改变的字符需要在基因库中。
比如abc，第一步我们改变一个字符：变成\*bc,a\*c,ab\*;然后保存合法的单词，即在基因库中的字符串。
然后在新的字符串组进行下一步，也是遍历字符串的所有位置，对每个字符串的该位置进行改变。
只要找到结果就返回，否则直到所有结果查找完，返回-1。代码如下：

```js
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
  const dict = new Set(bank)
  if (!dict.has(end)) {
    return -1
  }
  const strs = ['A', 'C', 'G', 'T']
  let queue = [start]
  let steps = 0

  while (queue.length > 0) {
    const next = []

    for (const w of queue) {
      if (w === end) {
        return steps
      }
    
      for (let i = 0; i < w.length; i++) {
        for (let j = 0; j < strs.length; j++) {
          const newWord = w.slice(0, i) + strs[j] + w.slice(i + 1)
    
          if (dict.has(newWord)) {
            next.push(newWord)
            dict.delete(newWord)
          }
        }
      }
    }

    queue = next
    steps++
  }

  return -1
};
```

功夫不负有心人，只要肯花时间琢磨，终究是会弄明白的。

#### 贪心算法

贪心算法是每次都找到最优解，局部最优，最后也是最优的；这类问题比较特殊，因为很少有这种每次最优，最终结果就是最优的情况。
毕竟决定因素太多，最后的结果往往是综合方面考虑的。

比如分发饼干一题，我们要先满足胃口小的，这样才能满足更多的人。

#### 二分查找

二分查找是一种很高效的查找方法，它能让时间复杂度达到O(logn)；
但是需要满足一些条件：

**单调有序的**

**存在上下界**

**能通过索引访问**

二分查找模板：

```js
let left = 0
let right = nums.length - 1

while (left <= right) {
  const mid = left + Math.floor((right - left) / 2)

  if (nums[mid] === val) {
    return mid
  } else if (nums[mid] < val) {
    left = mid + 1
  } else {
    right = mid - 1
  }
}
```

二分查找都是基于上面模板的变形，我们要找到单调有序性，然后确定边界。

[367. 有效的完全平方数](https://leetcode-cn.com/problems/valid-perfect-square/)

```js
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num < 2) return true

  let left = 2
  let right = Math.floor(num / 2)

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2)
    const val = mid * mid

    if (val === num) {
      return true
    } else if (val < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }

  return false
};
```

上面基本上和模板一样，这里我们找到一个单调序列，从2-num/2，在这之中不断查找，直接找到结果或者达到边界。

对于：**使用二分查找，寻找一个半有序数组 [4, 5, 6, 7, 0, 1, 2] 中间无序的地方**这道题的思考：

因为是要求无序的地方，那么我们只要判断元素的后一个小于它就行了。代码如下：

```js
var search = function (nums) {
  let l = 0
  let r = nums.length - 1

  while (l <= r) {
    const mid = l + Math.floor((r - l) / 2)

    if (nums[mid] < nums[mid - 1]) {
      return mid - 1
    } else if (nums[mid] > nums[mid + 1]) {
      return mid
    } else if (nums[l] <= nums[mid]) {
      l = mid + 1
    } else  {
      r = mid - 1
    }
  }

  return -1
}

console.log(search([4, 5, 6, 7, 0, 1, 2])) // 3
console.log(search([1, 3, 2])) // 1
console.log(search([1, 0, 2])) // 0
console.log(search([4, 5, 6, 7, 8, 0, 1, 2])) // 4
console.log(search([1])) // -1
console.log(search([2, 1])) // 0
console.log(search([3, 2, 1])) // 0
console.log(search([1, 2, 3])) // -1
```

如果存在则返回该下标，不存在则返回-1。
