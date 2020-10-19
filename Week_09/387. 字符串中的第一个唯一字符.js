/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
	const counter = new Array(26).fill(0)

	for (const c of s) {
		counter[c.charCodeAt() - 97]++
	}

	for (let i = 0; i < s.length; i++) {
		if (counter[s[i].charCodeAt() - 97] === 1) {
			return i
		}
	}

	return -1
};
