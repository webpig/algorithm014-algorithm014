/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
// 先将intervals按第一个元素从小到大排序，然后用prev记录上个需要比较的元素，curr为当前元素。通过prev[1]和curr[0]比较。
var merge = function(intervals) {
	if (intervals.length === 0) {
		return []
	}
	intervals.sort((a, b) => a[0] - b[0])
	let prev = intervals[0]
	const res = [prev]

	for (const curr of intervals) {
		if (curr[0] <= prev[1]) {
			prev[1] = Math.max(prev[1], curr[1])
		} else {
			res.push(curr)
			prev = curr
		}
	}

	return res
};
