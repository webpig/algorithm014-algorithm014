/**
 * @param {string} s
 * @return {string}
 */
// 动态规划，dp[i][j]表示s[i - j]是否为回文串，如果s[i] === s[j]，则看dp[i + 1][j - 1]是否为回文串；然后每次记录最长回文子串信息。
var longestPalindrome = function(s) {
	const n = s.length
	if (n === 0) {
		return ''
	}
	const dp = Array.from(new Array(n), () => new Array(n).fill(false))
	let start = 0, maxLen = 1

	for (let j = 0; j < n; j++) {
		for (let i = 0; i <= j; i++) {
			dp[i][j] = s[i] === s[j] && (j - i < 2 || dp[i + 1][j - 1])
			if (dp[i][j] && j - i + 1 > maxLen) {
				start = i
				maxLen = j - i + 1
			}
		}
	}

	return s.slice(start, start + maxLen)
};

// 中心扩展法，以一个字符为中心或者以两个字符为中心向两边扩展，然后记录每次最大的回文子串
var longestPalindrome = function(s) {
	if (s.length === 0) {
		return ''
	}
	let start = 0, end = 0

	for (let i = 0; i < s.length; i++) {
		const len1 = expandAroundCenter(s, i, i)
		const len2 = expandAroundCenter(s, i, i + 1)
		const len = Math.max(len1, len2)

		if (len > end - start) {
			start = i - Math.floor((len - 1) / 2)
			end = start + len
		}
	}

	return s.slice(start, end)
};

function expandAroundCenter(s, l, r) {
	while (l >= 0 && r < s.length && s[l] === s[r]) {
		l--
		r++
	}

	return r - l - 1
}
