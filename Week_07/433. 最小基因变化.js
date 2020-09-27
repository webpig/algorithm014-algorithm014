/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
// BFS
var minMutation = function(start, end, bank) {
	const set = new Set(bank)
	if (!set.has(end)) {
		return -1
	}
	const chars = ['A', 'C', 'G','T']
	let queue = [start]
	let count = 0

	while (queue.length > 0) {
		const next = []

		for (const q of queue) {
			if (q === end) {
				return count
			}

			for (let i = 0; i < q.length; i++) {
				for (let j = 0; j < chars.length; j++) {
					if (q[i] !== chars[j]) {
						const newWord = q.slice(0, i) + chars[j] + q.slice(i + 1)
						if (set.has(newWord)) {
							next.push(newWord)
							set.delete(newWord)
						}
					}
				}
			}
		}

		queue = next
		count++
	}

	return -1
};

// 双向BFS
/**
 * @param {string} start
 * @param {string} end
 * @param {string[]} bank
 * @return {number}
 */
var minMutation = function(start, end, bank) {
	const set = new Set(bank)
	if (!set.has(end)) {
		return -1
	}
	const CHARS = ['A', 'C', 'G', 'T']
	let startSet = new Set([start])
	let endSet = new Set([end])
	let count = 0

	while (startSet.size > 0) {
		const nextSet = new Set()

		for (const word of startSet) {
			if (endSet.has(word)) {
				return count + 1
			}

			for (let i = 0; i < word.length; i++) {
				for (let j = 0; j < CHARS.length; j++) {
					if (word[i] !== CHARS[j]) {
						const newWord = word.slice(0, i) + CHARS[j] + word.slice(i + 1)
						if (endSet.has(newWord)) {
							return count + 1
						}
						if (set.has(newWord)) {
							nextSet.add(newWord)
							set.delete(newWord)
						}
					}
				}
			}
		}

		count++
		startSet = nextSet
		if (startSet.size > endSet.size) {
			[startSet, endSet] = [endSet, startSet]
		}
	}

	return -1
};