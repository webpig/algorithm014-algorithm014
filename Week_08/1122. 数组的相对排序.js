/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// 用哈希表记录arr2的元素以及对应的下标，然后arr1根据map进行排序。时间复杂度：O(nlogn)，空间复杂度O(n)
var relativeSortArray = function(arr1, arr2) {
	const map = new Map()

	for (let i = 0; i < arr2.length; i++) {
		map.set(arr2[i], i)
	}

	return arr1.sort((a, b) => {
		if (map.has(a) || map.has(b)) {
			return map.get(a) - map.get(b)
		} else {
			return a - b
		}
	})
};

// 先统计arr1元素的次数，下标为元素值；
// 然后遍历arr2，将元素填充到arr1；这里做到了arr2相对顺序；
// 最后将剩余元素填充到arr1中，根据下标，即对应的顺序
var relativeSortArray = function(arr1, arr2) {
	const count = new Array(1001).fill(0)

	for (const num1 of arr1) {
		count[num1]++
	}

	let i = 0
	for (const num2 of arr2) {
		while (count[num2] > 0) {
			arr1[i++] = num2
			count[num2]--
		}
	}

	for (let num1 = 0; num1 < count.length; num1++) {
		while (count[num1] > 0) {
			arr1[i++] = num1
			count[num1]--
		}
	}

	return arr1
};
