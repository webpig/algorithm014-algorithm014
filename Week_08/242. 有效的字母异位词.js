/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 分别统计s和t每个字符出现的次数，然后比对；时间复杂度：O(n)，空间复杂度：O(1)；最多26个字母
var isAnagram = function(s, t) {
	const obj = {}

	for (const c of s) {
		obj[c] = (obj[c] || 0) + 1
	}

	for (const c of t) {
		obj[c] = (obj[c] || 0) - 1
	}

	for (const key in obj) {
		if (obj[key] !== 0) {
			return false
		}
	}

	return true
};


// 优化，s和t长度不相等直接返回false，然后在同一循环中统计s和t每个字符的出现次数；
var isAnagram = function(s, t) {
	if (s.length !== t.length) {
		return false
	}

	const map = new Array(26).fill(0)

	for (let i = 0; i < s.length; i++) {
		map[s[i].charCodeAt() - 97]++
		map[t[i].charCodeAt() - 97]--
	}

	for (const val of map) {
		if (val !== 0) {
			return false
		}
	}

	return true
};
