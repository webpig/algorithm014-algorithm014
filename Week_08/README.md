### 学习笔记

#### 位运算

常见的位运算：

n & (n - 1) 除去最低位的1

n & (-n) 得到最低位的1

n >> 1 向右移一位，/2向下取整

n & 1 可判断奇偶

n ^ n 0

例题：

[191. 位1的个数](https://leetcode-cn.com/problems/number-of-1-bits/)

代码如下：

```js
// 每次去掉最低位的1，直到n为0，只会循环1出现的次数。时间复杂度：O(1)，空间复杂度：O(1)
var hammingWeight = function(n) {
	let count = 0

	while (n !== 0) {
		n &= (n - 1)
		count++
	}

	return count
};
```

[231. 2的幂](https://leetcode-cn.com/problems/power-of-two/)

代码如下：

```js
var isPowerOfTwo = function(n) {
	return n > 0 && (n & (n - 1) === 0)
};
```

#### 布隆过滤器

用于判断是否存在，不存在是准备的，存在不一定准确。比较高效。用作中间一步缓存。

#### LRU Cache

最近最少使用，使用哈希表+双向链表实现。哈希表保存节点，可以实现O(1)访问任意节点，双向链表则保存了使用顺序。

#### 排序

比较类排序：通过比较来决定元素间的顺序，时间复杂度最低为O(nlogn)

非比较类顺序：不通过比较来决定顺序，线性时间

**冒泡排序**

依次比较相邻的元素，每次会让
```js

```

[排序算法总结](https://www.cnblogs.com/onepixel/p/7674659.html)




