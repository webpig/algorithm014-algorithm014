/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 直接转为m*n大小的有序数组，然后使用标准二分查找算法进行查找
var searchMatrix = function(matrix, target) {
	let m = matrix.length
	if (m === 0) {
		return false
	}
	let n = matrix[0].length
	let l = 0
	let r = m * n - 1

	while (l <= r) {
		const mid = l + Math.floor((r - l) / 2)
		const val = matrix[Math.floor(mid / n)][mid % n]

		if (val === target) {
			return true
		} else if (val < target) {
			l = mid + 1
		} else {
			r = mid - 1
		}
	}

	return false
};