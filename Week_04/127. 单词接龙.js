/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function(beginWord, endWord, wordList) {
	// 字典，用于判断单词是否存在库中
	const dict = new Set(wordList)
	// 单词不在库中，直接返回0
	if (!dict.has(endWord)) {
		return 0
	}
	let steps = 1
	let queue = [beginWord]

	while (queue.length > 0) {
		const next = []

		for (const w of queue) {
			if (w === endWord) {
				return steps
			}

			// 每次改变一个单词，找出所有情况
			for (let i = 0; i < w.length; i++) {
				for (let j = 0; j < 26; j++) {
					const w2 = w.slice(0, i) + String.fromCharCode(97 + j) + w.slice(i + 1)

					// 只存储库中有的单词，搜索到则删除，防止重复，陷入循环
					if (dict.has(w2)) {
						next.push(w2)
						dict.delete(w2)
					}
				}
			}
		}

		queue = next
		steps++
	}

	return 0
};

console.log(ladderLength('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']))