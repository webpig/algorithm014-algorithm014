/**
 * @param {string} s
 * @return {number}
 */
// 单个字符为回文串，两个字符相等为回文串，多个字符如果首尾字符相等，并且去掉首尾字符也为回文串，则该字符串也是回文串
var countSubstrings = function(s) {
	let count = 0
	const len = s.length

	const dp = Array.from(new Array(len), () => new Array(len).fill(false))

	for (let j = 0; j < len; j++) {
		for (let i = 0; i <= j; i++) {
			if (i === j) {
				dp[i][j] = true
				count++
			} else if (j - i === 1 && s[i] === s[j]) {
				dp[i][j] = true
				count++
			} else if (j - i > 1 && s[i] === s[j] && dp[i + 1][j - 1]) {
				dp[i][j] = true
				count++
			}
		}
	}

	return count
};

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
	let count = 0
	for (let i = 0; i < s.length; i++) {
		helper(s, i, i)
		helper(s, i, i + 1)
	}
	return count

	function helper(s, low, high) {
		while(low >= 0 && high <= s.length && s[low] === s[high]) {
			count++
			low--
			high++
		}
	}
};