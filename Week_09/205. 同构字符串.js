/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 将字母映射到下标
var isIsomorphic = function(s, t) {
	const mapS = new Map()
	const mapT = new Map()

	for (let i = 0; i < s.length; i++) {
		if (mapS.get(s[i]) !== mapT.get(t[i])) {
			return false
		} else {
			if (!mapS.has(s[i])) {
				mapS.set(s[i], i)
			}

			if (!mapT.has(t[i])) {
				mapT.set(t[i], i)
			}
		}
	}

	return true
};

// 将s的字母映射到t的字母
var isIsomorphic = function(s, t) {
	return isIsomorphicHelper(s, t) && isIsomorphicHelper(t, s)
};

function isIsomorphicHelper(s, t) {
	const map = new Map()

	for (let i = 0; i < s.length; i++) {
		if (map.has(s[i])) {
			if (map.get(s[i]) !== t[i]) {
				return false
			}
		} else {
			map.set(s[i], t[i])
		}
	}

	return true
}
