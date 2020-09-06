// 贪心思路：先满足胃口小的，这样才能满足更多的小孩。我们可以利用排序将数组有序，方便比较。时间复杂度为O(nlogn),空间复杂度为O(1)
var findContentChildren = function(g, s) {
	let i = 0
	let j = 0

	g.sort((a, b) => a - b)
	s.sort((a, b) => a - b)

	while (i < g.length && j < s.length) {
		if (s[j] >= g[i]) {
			i++
		}

		j++
	}

	return i
};