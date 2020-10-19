/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
	let res = ''
	let word = ''

	for (const c of s) {
		if (c === ' ') {
			res = res + word + ' '
			word = ''
		} else {
			word = c + word
		}
	}

	return res + word
};
