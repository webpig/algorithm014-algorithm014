/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	const rows = grid.length
	if (rows === 0) {
		return 0
	}
	const cols = grid[0].length
	let count = 0

	// 向四周查找，直到遇到水或者超出边界
	const dfs = (grid, i, j) => {
		if (i < 0 || j < 0 || i > rows - 1 || j > cols - 1 || grid[i][j] === '0') {
			return
		}

		grid[i][j] = '0'

		dfs(grid, i + 1, j)
		dfs(grid, i - 1, j)
		dfs(grid, i, j + 1)
		dfs(grid, i, j - 1)
	}

	for (let i = 0; i < rows; i++) {
		for (let j = 0; j < cols; j++) {
			if (grid[i][j] === '1') {
				dfs(grid, i, j)
				count++
			}
		}
	}

	return count
};