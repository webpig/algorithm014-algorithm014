/**
 * @param {number} n
 * @return {string[][]}
 */
// 回溯，使用集合判断是否会被攻击。时间复杂度：O(n!)，空间复杂度：O(n)
var totalNQueens = function(n) {
	const colSet = new Set()
	const leftSet = new Set()
	const rightSet = new Set()
	let count = 0

	const dfs = (path, row) => {
		if (row === n) {
			count++
		}

		for (let col = 0; col < n; col++) {
			if (colSet.has(col) || leftSet.has(row - col) || rightSet.has(row + col)) {
				continue
			}

			path.push(col)
			colSet.add(col)
			leftSet.add(row - col)
			rightSet.add(row + col)

			dfs(path, row + 1, col)

			path.pop()
			colSet.delete(col)
			leftSet.delete(row - col)
			rightSet.delete(row + col)
		}
	}

	dfs([], 0)

	return count
};
