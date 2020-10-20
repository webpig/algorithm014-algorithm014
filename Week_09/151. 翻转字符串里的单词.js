/**
 * @param {string} s
 * @return {string}
 */
// 使用正则表达式，将连续空格替换为单个空格
var reverseWords = function(s) {
	return s.trim().replace(/\s+/g, ' ').split(' ').reverse().join(' ')
	// return s.trim().split(/\s+/g).reverse().join(' ')
};

// 使用双端队列
var reverseWords = function(s) {
	let left = 0, right = s.length - 1
	const deque = []
	let word = ''

	while (s[left] === ' ') left++
	while (s[right] === ' ') right--

	while (left <= right) {
		const c = s[left]
		if (c === ' ' && word) {
			deque.unshift(word)
			word = ''
		} else if (c !== ' ') {
			word += c
		}
		left++
	}

	deque.unshift(word)

	return deque.join(' ')
};

// 不使用双端队列
var reverseWords = function(s) {
	let res = ''
	let word = ''
	s = s.trim()

	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] !== ' ') {
			word = s[i] + word
		} else if (s[i] === ' ' && word) {
			res += word + ' '
			word = ''
		}
	}

	return res + word
};
