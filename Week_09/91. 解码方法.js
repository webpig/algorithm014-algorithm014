/**
 * @param {string} s
 * @return {number}
 */
// 解码有效数字1-26。
// DP,dp[i]表示以i下标对应字符结尾的解码方法总数，
// 如果s[i] === '0',判断s[i - 1]是否合法，即是否为1或2；
// 如果s[i - 1] === '1' || s[i - 1] === '2', 则s[i] === s[i - 1],否则返回0，因为这两个数不能解码，整体也就不能解码

// 如果s[i] !== '0',判断s[i - 1]和s[i]组成的数是否在10-26区间，不包含10，20，是则dp[i] = dp[i - 1] + dp[i - 2]
// 否则dp[i] = dp[i - 2],因为必须带上后两位，整体解码方法并未增加
var numDecodings = function(s) {
	if (s[0] === '0') {
		return 0
	}

	const n = s.length
	const dp = new Array(n + 1).fill(0)

	dp[0] = 1
	dp[1] = 1

	for (let i = 2; i <= n; i++) {
		const a = +s.slice(i - 1, i)
		const b = +s.slice(i - 2, i)

		if (a >= 1 && a <= 9) {
			dp[i] += dp[i - 1]
		}

		if (b >= 10 && b <= 26) {
			dp[i] += dp[i - 2]
		}
	}

	return dp[n]
};
