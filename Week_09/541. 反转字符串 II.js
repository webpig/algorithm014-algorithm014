/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
	const arr = s.split('')

	for (let i = 0; i < s.length; i += 2 * k) {
		let l = i, r = Math.min(i + k - 1, s.length - 1)
		reverse(arr, l, r)
	}

	return arr.join('')
};

function reverse (arr, l, r) {
	while (l <= r) {
		[arr[l], arr[r]] = [arr[r], arr[l]]
		l++
		r--
	}
}

