/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function(s) {
	let l = 0, r = s.length - 1

	while (l < r) {
		if (s[l] !== s[r]) {
			return isValid(s, l + 1, r) || isValid(s, l, r - 1)
		}
		l++
		r--
	}

	return true
};

function isValid(s, l, r) {
	while (l < r) {
		if (s[l] !== s[r]) {
			return false
		}
		l++
		r--
	}

	return true
}
