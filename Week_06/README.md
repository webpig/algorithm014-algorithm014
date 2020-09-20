### 学习笔记

动态规划适用于有重叠子问题和最优子结构性质的问题，在时间复杂度上一般都比朴素算法低。
它也是可以分为子问题，每次都是存储结果。便于求下个结果时直接查找。

维基百科链接：[动态规划](https://zh.wikipedia.org/wiki/%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92)

求解DP问题时关键在于能分析出DP方程，也就是递推公式，找到当前解和之前解的关系。
只要找到这种关系，那么就可以通过公式直接编写。另外就是注意初始状态以及最后要输出的结果。

#### 例题

[70. 爬楼梯](https://leetcode-cn.com/problems/climbing-stairs/description/)

这是一道经典的题目，有很多种解法，这里我们只说明动态规划的做法。

通过题目的意思以及实际情况，我们可以注意到：第i个台阶只能从第i-1或者第i-2个台阶过来，然后第i-1和第i-2以此类推。
这里我们就可以给出DP公式：dp[i] = dp[i - 1] + dp[i - 2]。代码如下：

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  const dp = new Array(n + 1).fill(0)
  dp[1] = 1
  dp[2] = 2

  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }

  return dp[n]
};
```

这里我们直接定义了一个dp数组，存储所有的结果，其实这里我们只需要保存上两次的结果即可。
而dp问题有的是可以降维的，也就是将二维数组优化成一维数组；或者是将一维数组优化成常数。
优化后的代码如下：

```js
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
  if (n <= 2) {
    return n
  }

  let prepre = 1
  let pre = 2

  for (let i = 3; i <= n; i++) {
    const temp = prepre + pre
    prepre = pre
    pre = temp
  }

  return pre
};
```

优化之后，空间复杂度就是O(1)了。

**打家劫舍问题系列：**

[198. 打家劫舍](https://leetcode-cn.com/problems/house-robber/)

[213. 打家劫舍 II](https://leetcode-cn.com/problems/house-robber-ii/)

第一个问题就是看前一个偷还是不偷，给出DP公式：dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1])，代码如下：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length
  if (len === 0) {
    return 0
  }
  const dp = []
  dp[0] = nums[0]
  dp[1] = Math.max(nums[0], nums[1])

  for (let i = 2; i < len; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i])
  }

  return dp[len - 1]
};
```

同样，这里也可以进行空间优化：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  const len = nums.length
  if (len === 0) {
    return 0
  }

  if (len === 1) {
    return nums[0]
  }

  let prepre = nums[0]
  let pre = Math.max(nums[0], nums[1])

  for (let i = 2; i < len; i++) {
     const curr = Math.max(pre, prepre + nums[i])
     prepre = pre
     pre = curr
  }

  return pre
};
```

第二题是有环的，说明第一家和最后一家不能都偷；这样我们可以将问题分成两个子问题：

1、不偷最后一家（第一家可能偷）

2、不偷第一家（最后一家可能偷）

代码如下：

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
var helper = function(nums) {
  const len = nums.length
  if (len === 0) {
    return 0
  }

  if (len === 1) {
    return nums[0]
  }

  let prepre = nums[0]
  let pre = Math.max(nums[0], nums[1])

  for (let i = 2; i < len; i++) {
     const curr = Math.max(pre, prepre + nums[i])
     prepre = pre
     pre = curr
  }

  return pre
};

var rob = function(nums) {
  const len = nums.length
  
  if (len === 0) {
    return 0
  }

  if (len === 1) {
    return nums[0]
  }

  return Math.max(helper(nums.slice(0, len - 1)), helper(nums.slice(1)))
};
```

**股票问题系列：**

股票问题关键因素：允许最大交易次数；我们可以用T[i][k]表示第i天最多进行k次交易的情况下可以获得的最大收益。

T[i][k][0]表示在第i天结束时，最多进行k次交易后持有0份股票的情况下可获得最大收益；

T[i][k][1]表示在第i天结束时，最多进行k次交易后持有1份股票的情况下可获得最大收益；

得出状态转移方程：

T[i][k][0] = max(T[i - 1][k][0], T[i - 1][k][1] + prices[i])
T[i][k][1] = max(T[i - 1][k][1], T[i - 1][k - 1][0] - prices[i])

参考链接：[股票问题系列通解（转载翻译）
](https://leetcode-cn.com/circle/article/qiAgHn/)