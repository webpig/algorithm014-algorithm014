/**
 * @param {string} s
 * @return {number}
 */
// 动态规划：要判断是否为有效括号，我们要看当前字符是否为')',
// 然后前个字符有两种情况：s[i - 1] === '(' 或者 s[i - 1] === ')'
// s[i - 1] === '(', dp[i] = dp[i - 2] + 2,因为多了一组有效括号
// s[i - 1] === ')', 这时候要看dp[i - dp[i - 1] - 1]是否为'('，如果是则dp[i] = dp[i - 1] + dp[i - dp[i - 1] - 2] + 2
var longestValidParentheses = function(s) {
	const n = s.length
	if (n === 0) {
		return 0
	}
	const dp = new Array(n).fill(0)
	let max = 0

	for (let i = 1; i < n; i++) {
		if (s[i] === ')') {
			if (s[i - 1] === '(') {
				dp[i] = (dp[i - 2] || 0) + 2
			} else if (i - dp[i - 1] > 0 && s[i - dp[i - 1] - 1] === '(') {
				dp[i] = dp[i - 1] + (dp[i - dp[i - 1] - 2] || 0) + 2
			}
		}
		max = Math.max(max, dp[i])
	}

	return max
};

// 栈，如果为'(',则将其下标入栈，否则弹出栈顶元素，
// 判断栈是否为空，为空则将当前下标入栈，作为最后一个不匹配的')'的下标，否则更新最大值，因为此时为当前下标最长有效括号
var longestValidParentheses = function(s) {
	let max = 0
	const stack = [-1]

	for (let i = 0; i < s.length; i++) {
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
