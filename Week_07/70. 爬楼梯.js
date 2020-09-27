/**
 * @param {number} n
 * @return {number}
 */
// 用map存储已经计算过的结果，时间和空间复杂度均为O(n)，由于数据量比较大，AC不了；推荐DP解法。
var climbStairs = function(n) {
	const map = new Map()

	if (n <= 2) {
		return n
	}

	if (!map.has(n)) {
		map.set(n, climbStairs(n - 1) + climbStairs(n - 2))
	}

	return map.get(n)
};

/**
 * @param {number} n
 * @return {number}
 */
// DP解法，时间复杂度为O(n)，空间复杂度为O(1)
var climbStairs = function(n) {
	if (n <= 2) {
		return n
	}

	let prepre = 1
	let pre = 2

	for (let i = 3; i <= n; i++) {
		const curr = prepre + pre
		prepre = pre
		pre = curr
	}

	return pre
};