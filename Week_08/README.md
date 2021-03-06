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

依次比较相邻的元素，每次会让最大值/最小值排到顶部

```js
// 冒泡排序
function bubbleSort(arr) {
	const len = arr.length

	for (let i = 0; i < len - 1; i++) {
		for (let j = 0; j < len - 1 - i; j++) {
			if (arr[j] > arr[j + 1]) {
				[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
			}
		}
	}

	return arr
}

// 选择排序
function selectionSort(arr) {
	const len = arr.length
	let minIndex = 0

	for (let i = 0; i < len - 1; i++) {
		minIndex = i

		for (let j = i + 1; j < len; j++) {
			if (arr[j] < arr[minIndex]) {
				minIndex = j
			}
		}

		[arr[minIndex], arr[i]] = [arr[i], arr[minIndex]]
	}

	return arr
}

// 插入排序
function insertionSort(arr) {
	let preIndex = 0, curr = arr[0]

	for (let i = 1; i < arr.length; i++) {
		preIndex = i - 1
		curr = arr[i]

		while (preIndex >= 0 && arr[preIndex] > curr) {
			arr[preIndex + 1] = arr[preIndex]
			preIndex--
		}

		arr[preIndex + 1] = curr
	}

	return arr
}

// 希尔排序
function shellSort(arr) {
	const len = arr.length

	for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
		for (let i = gap; i < len; i++) {
			let j = i
			const curr = arr[i]

			while (j - gap >= 0 && curr < arr[j - gap]) {
				arr[j - gap] = arr[j]
				j = j - gap
			}

			arr[j] = curr
		}
	}

	return arr
}

// 堆排序
class Heap {
	constructor(compare) {
		this.compare = compare
		this.data = []
	}

	insert(element) {
		this.data.push(element)
		let index = this.data.length - 1
		const curr = this.data[index]

		while (index > 0) {
			const parentIndex = Math.floor((index - 1) / 2)
			const parent = this.data[parentIndex]

			if (this.compare(curr, parent) < 0) {
				this.data[index] = parent
				index = parentIndex
			} else {
				break
			}
		}

		this.data[index] = curr
	}

	extractMax() {
		if (this.data.length <= 1) {
			return this.data.pop()
		}

		const max = this.data[0]
		this.data[0] = this.data.pop()

		const len = this.data.length
		let index = 0
		const curr = this.data[index]

		while (true) {
			const leftIndex = index * 2 + 1, rightIndex = index * 2 + 2
			let leftChild = null, rightChild = null, swap = null

			if (leftIndex < len) {
				leftChild = this.data[leftIndex]
				if (this.compare(leftChild, curr) < 0) {
					swap = leftIndex
				}
			}

			if (rightIndex < len) {
				rightChild = this.data[rightIndex]
				if ((swap === null && this.compare(rightChild, curr) < 0) || (swap !== null && this.compare(rightChild, leftChild) < 0)) {
					swap = rightIndex
				}
			}

			if (swap === null) {
				break
			}

			this.data[index] = this.data[swap]
			index = swap
		}

		this.data[index] = curr

		return max
	}
}

function heapSort(arr) {
	const heap = new Heap((a, b) => a - b)

	for (let i = 0; i < arr.length; i++) {
		heap.insert(arr[i])
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i] = heap.extractMax()
	}

	return arr
}
```

[排序算法总结](https://www.cnblogs.com/onepixel/p/7674659.html)




