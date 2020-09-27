/**
 * @param {number[][]} M
 * @return {number}
 */

// DFS,使用visited数组，记录已经访问节点，如果未访问，则对其进行DFS搜索
var findCircleNum = function(M) {
	const n = M.length
	const visited = new Array(n).fill(false)
	let count = 0

	for (let i = 0; i < n; i++) {
		if (!visited[i]) {
			count++
			dfs(M, visited, i)
		}
	}

	return count
};

function dfs(M, visited, i) {
	for (let j = 0; j < M.length; j++) {
		if (!visited[j] && M[i][j] === 1) {
			visited[j] = true
			dfs(M, visited, j)
		}
	}
}

/**
 * @param {number[][]} M
 * @return {number}
 */
// BFS
var findCircleNum = function(M) {
	const n = M.length
	const visited = new Array(n).fill(false)
	const queue = []
	let count = 0

	for (let i = 0; i < n; i++) {
		if (!visited[i]) {
			queue.push(i)

			while (queue.length > 0) {
				const s = queue.shift()

				visited[s] = true

				for (let j = 0; j < n; j++) {
					if (!visited[j] && M[s][j] === 1) {
						queue.push(j)
					}
				}
			}

			count++
		}
	}

	return count
};

// BFS,DFS时间复杂度为O(n2),空间复杂度为O(n)

/**
 * @param {number[][]} M
 * @return {number}
 */
// 将互为朋友的节点进行连接，最后返回连通量
import UnionFind from "./UnionFind";

var findCircleNum = function(M) {
	const n = M.length
	const uf = new UnionFind(n)

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (M[i][j] === 1) {
				uf.union(i, j)
			}
		}
	}

	return uf.count
};