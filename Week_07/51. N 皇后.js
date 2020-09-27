/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
	const colSet = new Set()
	const leftSet = new Set()
	const rightSet = new Set()
	const res = []

	const dfs = (path, row) => {
		if (row === n) {
			res.push([...path])
		}

		for (let col = 0; col < n; col++) {
			if (colSet.has(col) || leftSet.has(row - col) || rightSet.has(row + col)) {
				continue
			}

			path.push(col)
			colSet.add(col)
			leftSet.add(row - col)
			rightSet.add(row + col)

			dfs(path, row + 1)

			path.pop()
			colSet.delete(col)
			leftSet.delete(row - col)
			rightSet.delete(row + col)
		}
	}

	dfs([], 0)

	return res.map(item => {
		return item.map(i => '.'.repeat(i) + 'Q' + '.'.repeat(n - i - 1))
	})
};