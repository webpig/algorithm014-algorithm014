/**
 * @param {number[]} nums
 * @return {number}
 */
// DP
var lengthOfLIS = function(nums) {
	const n = nums.length
	const dp = new Array(n).fill(1)
	let res = 0

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] > nums[j]) {
				dp[i] = Math.max(dp[i], dp[j] + 1)
			}
		}
		res = Math.max(dp[i], res)
	}

	return res
};

// 二分查找
var lengthOfLIS = function(nums) {
	const n = nums.length
	const top = new Array(n)
	let piles = 0

	for (let i = 0; i < n; i++) {
		let poker = nums[i]

		let left = 0, right = piles
		while (left < right) {
			const mid = Math.floor((left + right) / 2)
			if (top[mid] < poker) {
				left = mid + 1
			} else {
				right = mid
			}
		}

		if (left === piles) piles++
		top[left] = poker
	}

	return piles
};
