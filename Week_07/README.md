### 学习笔记

前缀树代码模板：

```js
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
		node.isEnd = true
	}

	search(word) {
		let node = this.root
		for (const c of word) {
			if (!node[c]) {
				return false
			}
			node = node[c]
		}
		return !!node.isEnd
	}

	startsWith(word) {
		let node = this.root
		for (const c of word) {
			if (!node[c]) {
				return false
			}
			node = node[c]
		}
		return true
	}
}
```

并查集代码模板：

```js
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
```

双向BFS代码模板：

```js
const beginSet = new Set()
const endSet = new Set()

while (beginSet.length > 0) {
  const nextSet = new Set()

  for (const val of beginSet) {
    if (endSet.has(val)) {
      return
    }
    
    // process
  }

  beginSet = nextSet
  if (beginSet.size > endSet.size) {
    [beginSet, endSet] = [endSet, beginSet]
  }
}
```