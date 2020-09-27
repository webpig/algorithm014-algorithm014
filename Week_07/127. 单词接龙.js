/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
// BFS
var ladderLength = function(beginWord, endWord, wordList) {
	const set = new Set(wordList)
	if (!set.has(endWord)) {
		return 0
	}
	let queue = [beginWord]
	let count = 1

	while (queue.length > 0) {
		const next = []

		for (const word of queue) {
			if (word === endWord) {
				return count
			}

			for (let i = 0; i < word.length; i++) {
				for (let j = 0; j < 26; j++) {
					const newWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1)

					if (set.has(newWord)) {
						next.push(newWord)
						set.delete(newWord)
					}
				}
			}
		}

		queue = next
		count++
	}

	return 0
};

// 双向BFS
/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
	const set = new Set(wordList)
	if (!set.has(endWord)) {
		return 0
	}
	let beginSet = new Set()
	beginSet.add(beginWord)
	let endSet = new Set()
	endSet.add(endWord)
	let count = 1

	while (beginSet.size > 0) {
		const nextSet = new Set()

		for (const word of beginSet) {
			for (let i = 0; i < word.length; i++) {
				for (let j = 0; j < 26; j++) {
					const s = String.fromCharCode(97 + j)

					if (s !== word[i]) {
						const newWord = word.slice(0, i) + s + word.slice(i + 1)
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

		beginSet = nextSet
		count++
		if (beginSet.size > endSet.size) {
			[beginSet, endSet] = [endSet, beginSet]
		}
	}

	return 0
};