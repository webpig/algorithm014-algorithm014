/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

// DFS,找到边界上的O，然后进行上下左右方向搜索，将边界的O标记为A，最后将A复原为O，时间复杂度为O(mn),空间复杂度为O(mn),m，n分别为行数和列数
var solve = function(board) {
	const m = board.length
	if (m === 0) {
		return board
	}
	const n = board[0].length
	const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]

	const dfs = (i, j) => {
		if (i < 0 || j < 0 || i >= m || j >= n || board[i][j] !== 'O') {
			return
		}

		board[i][j] = '#'
		for (const [dx, dy] of dirs) {
			dfs(i + dx, j + dy)
		}
	}

	for (let i = 0; i < m; i++) {
		if (board[i][0] === 'O') {
			dfs(i, 0)
		}
		if (board[i][n - 1] === 'O') {
			dfs(i, n - 1)
		}
	}

	for (let j = 0; j < n; j++) {
		if (board[0][j] === 'O') {
			dfs(0, j)
		}
		if (board[m - 1][j] === 'O') {
			dfs(m - 1, j)
		}
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] === '#') {
				board[i][j] = 'O'
			} else if (board[i][j] === 'O') {
				board[i][j] = 'X'
			}
		}
	}
};

// BFS
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
	const m = board.length
	if (m === 0) {
		return
	}
	const n = board[0].length
	const dirs = [[1, 0], [-1, 0], [0, -1], [0, 1]]
	const queue = []

	for (let i = 0; i < m; i++) {
		if (board[i][0] === 'O') {
			queue.push([i, 0])
		}
		if (board[i][n - 1] === 'O') {
			queue.push([i, n - 1])
		}
	}

	for (let j = 1; j < n - 1; j++) {
		if (board[0][j] === 'O') {
			queue.push([0, j])
		}
		if (board[m - 1][j] === 'O') {
			queue.push([m - 1, j])
		}
	}

	while (queue.length > 0) {
		const size = queue.length

		for (let i = 0; i < size; i++) {
			const [x, y] = queue.shift()

			board[x][y] = '#'

			for (const [dx, dy] of dirs) {
				const newX = x + dx
				const newY = y + dy

				if (newX < 0 || newX >= m || newY < 0 || newY >= n || board[newX][newY] !== 'O') {
					continue
				}

				board[newX][newY] = '#'
				queue.push([newX, newY])
			}
		}
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] === '#') {
				board[i][j] = 'O'
			} else if (board[i][j] === 'O') {
				board[i][j] = 'X'
			}
		}
	}
};

// 并查集
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
import UnionFind from "./UnionFind";

var solve = function(board) {
	const m = board.length
	if (m === 0) {
		return
	}
	const n = board[0].length
	const uf = new UnionFind(m * n + 1)
	const dummy = m * n

	for (let i = 0; i < m; i++) {
		if (board[i][0] === 'O') {
			uf.union(i * n + 0, dummy)
		}
		if (board[i][n - 1] === 'O') {
			uf.union(i * n + n - 1, dummy)
		}
	}

	for (let i = 1; i < n - 1; i++) {
		if (board[0][i] === 'O') {
			uf.union(0 * n + i, dummy)
		}
		if (board[m - 1][i] === 'O') {
			uf.union((m - 1) * n + i, dummy)
		}
	}

	const dirs = [[1, 0], [0, 1]]
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] === 'O') {
				for (const [dx, dy] of dirs) {
					const newX = i + dx
					const newY = j + dy
					if (newX < m && newY < n && board[newX][newY] === 'O') {
						uf.union(i * n + j, newX * n + newY)
					}
				}
			}
		}
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (board[i][j] === 'O' && uf.find(i * n + j) !== uf.find(dummy)) {
				board[i][j] = 'X'
			}
		}
	}
};