/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
	const arr = S.split('')

	let l = 0, r = S.length - 1

	while (l < r) {
		while (!isLetter(S[l]) && l < r) {
			l++
		}

		while (!isLetter(S[r]) && l < r) {
			r--
		}

		[arr[l], arr[r]] = [arr[r], arr[l]]
		l++
		r--
	}

	return arr.join('')
};

function isLetter(c) {
	return (c >= 'A' && c <= 'Z') || (c >= 'a' && c <= 'z')
}

// 栈
var reverseOnlyLetters = function(S) {
	const stack = []
	const res = []

	for (const c of S) {
		if (isLetter(c)) {
			stack.push(c)
		}
	}

	for (const c of S) {
		if (isLetter(c)) {
			res.push(stack.pop())
		} else {
			res.push(c)
		}
	}

	return res.join('')
};
