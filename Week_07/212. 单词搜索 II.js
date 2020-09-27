/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
// 前缀树+DFS
class Trie {
	constructor() {
		this.root = {}
	}

	insert(word) {
		let node = this.root
		for (const c of word) {
			node[c] = node[c] || {}
			node = node[c]
		}
		node.word = word
	}
}

var findWords = function(board, words) {
	const m = board.length
	if (m === 0) {
		return []
	}
	const n = board[0].length
	const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1]]
	const res = []

	const dfs = (node, i, j) => {
		if (node.word) {
			res.push(node.word)
			node.word = ''
		}

		if (i < 0 || i >= m || j < 0 || j >= n) {
			return
		}

		const c = board[i][j]
		if (!node[c]) {
			return
		}

		board[i][j] = '#'

		for (const [dx, dy] of dirs) {
			dfs(node[c], i + dx, j + dy)
		}

		board[i][j] = c
	}

	const trie = new Trie()
	for (const word of words) {
		trie.insert(word)
	}

	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			dfs(trie.root, i, j)
		}
	}

	return res
};