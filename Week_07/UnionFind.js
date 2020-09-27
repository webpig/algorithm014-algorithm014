// 并查集
export default class UnionFind {
	constructor(n) {
		this.count = n
		this.parent = []

		for (let i = 0; i < n; i++) {
			this.parent[i] = i
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