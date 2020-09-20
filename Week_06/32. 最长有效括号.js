/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
	let max = 0
	const len = s.length
	const dp = new Array(len).fill(0)

	for (let i = 1; i < len; i++) {
		if (s[i] === ')') {
			if (s[i - 1] === '(') {
				dp[i] = (i >= 2 ? dp[i - 2] : 0) + 2
			} else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
				dp[i] = dp[i - 1] + ((i - dp[i - 1]) >= 2 ? dp[i - dp[i - 1] - 2] : 0) + 2
			}
		}
		max = Math.max(max, dp[i])
	}

	return max
};

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
	let max = 0
	const stack = []
	stack.push(-1)

	for (let i  = 0; i < s.length; i++) {
		if (s[i] === '(') {
			stack.push(i)
		} else {
			stack.pop()
			if (stack.length === 0) {
				stack.push(i)
			} else {
				max = Math.max(max, i - stack[stack.length - 1])
			}
		}
	}

	return max
};

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
	let left = 0
	let right = 0
	let maxLen = 0

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			left++
		} else {
			right++
		}
		if (left === right) {
			maxLen = Math.max(maxLen, 2 * right)
		} else if (right > left) {
			left = 0
			right = 0
		}
	}

	left = 0
	right = 0

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === '(') {
			left++
		} else {
			right++
		}
		if (left === right) {
			maxLen = Math.max(maxLen, 2 * left)
		} else if (left > right) {
			left = 0
			right = 0
		}
	}

	return maxLen
};