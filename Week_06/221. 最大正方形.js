/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
	let maxSide = 0
	const rows = matrix.length
	if (rows === 0) {
		return 0
	}
	const cols = matrix[0].length
	const dp = Array.from(new Array(rows), () => new Array(cols).fill(0))

	for (let i = 0; i < rows; i++) {
		dp[i][0] = +matrix[i][0]
		maxSide = Math.max(dp[i][0], maxSide)
	}

	for (let j = 0; j < cols; j++) {
		dp[0][j] = +matrix[0][j]
		maxSide = Math.max(dp[0][j], maxSide)
	}

	for (let i = 1; i < rows; i++) {
		for (let j = 1; j < cols; j++) {
			if (matrix[i][j] === '1') {
				dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
				maxSide = Math.max(maxSide, dp[i][j])
			}
		}
	}

	return maxSide * maxSide
};
