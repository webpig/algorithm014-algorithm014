/**
 * @param {character[][]} grid
 * @return {number}
 */
// DFS
var numIslands = function(grid) {
	const m = grid.length
	if (m === 0) {
		return grid
	}
	const n = grid[0].length
	const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

	const dfs = (i, j) => {
		if (i < 0 || i >= m || j < 0 || j >= n || grid[i][j] === '0') {
			return
		}

		grid[i][j] = '0'

		for (const [dx, dy] of dirs) {
			dfs(i + dx, j + dy)
		}
	}

	let count = 0

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === '1') {
				count++
				dfs(i, j)
			}
		}
	}

	return count
};

// BFS
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	const m = grid.length
	if (m === 0) {
		return grid
	}
	const n = grid[0].length
	const queue = []
	let count = 0
	const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === '1') {
				grid[i][j] = '0'
				queue.push([i, j])

				while (queue.length > 0) {
					const [x, y] = queue.shift()
					for (const [dx, dy] of dirs) {
						const newX = x + dx
						const newY = y + dy
						if (newX >= 0 && newX < m && newY >= 0 && newY < n && grid[newX][newY] === '1') {
							grid[newX][newY] = '0'
							queue.push([newX, newY])
						}
					}
				}

				count++
			}
		}
	}

	return count
};

// 并查集
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
	const m = grid.length
	if (m === 0) {
		return 0
	}
	const n = grid[0].length
	const dirs = [[1, 0], [0, 1]]
	const uf = new UnionFind(grid, m, n)

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (grid[i][j] === '1') {
				grid[i][j] = '0'
				for (const [dx, dy] of dirs) {
					const newX = i + dx
					const newY = j + dy
					if (newX < m && newY < n && grid[newX][newY] === '1') {
						uf.union(i * n + j, newX * n + newY)
					}
				}
			}
		}
	}

	return uf.count
};

class UnionFind {
	constructor(grid, m, n) {
		this.count = 0
		this.parent = new Array(m * n)

		// 进行改造，只有为1时才进行连通
		for (let i = 0; i < m; i++) {
			for (let j = 0; j < n; j++) {
				if (grid[i][j] === '1') {
					this.parent[i * n + j] = i * n + j
					this.count++
				}
			}
		}
	}

	find(p) {
		while (p !== this.parent[p]) {
			this.parent[p] = this.parent[this.parent[p]]
			p = this.parent[p]
		}
		return p
	}

	union(p, q) {
		const rootP = this.find(p)
		const rootQ = this.find(q)

		if (rootP === rootQ) {
			return
		}

		this.parent[rootP] = rootQ
		this.count--
	}
}