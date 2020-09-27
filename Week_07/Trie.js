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