/**
 * @param {number[][]} grid
 * @return {number}
 */
// 每次只能向下或者向右移动一步，则可以推出dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]，
// 而第一行和第一列只能是左边和上边过来，可以直接得到。后面的结果根据DP公式就可以得到。
// 时间复杂度O(mn)，m为grid的长度，n为子数组元素的个数；同理，空间复杂度也为O(mn)。
var minPathSum = function(grid) {
	const m = grid.length
	if (m === 0) {
		return 0
	}
	const n = grid[0].length
	const dp = Array.from(new Array(m), () => new Array(n).fill(0))

	dp[0][0] = grid[0][0]

	for (let i = 1; i < m; i++) {
		dp[i][0] = dp[i - 1][0] + grid[i][0]
	}

	for (let i = 1; i < n; i++) {
		dp[0][i] = dp[0][i - 1] + grid[0][i]
	}

	for (let i = 1; i < m; i++) {
		for (let j = 1; j < n; j++) {
			dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j]
		}
	}

	return dp[m - 1][n  -1]
};