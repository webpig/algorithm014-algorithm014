/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	let position = nums.length - 1
	let steps = 0

	while (position > 0) {
		for (let i = 0; i < position; i++) {
			if (i + nums[i] >= position) {
				position = i
				steps++
				break
			}
		}
	}

	return steps
};

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
	let n = nums.length
	let end = 0
	let maxPosition = 0
	let steps = 0

	for (let i = 0; i < n - 1; i++) {
		maxPosition = Math.max(maxPosition, i + nums[i])
		if (i === end) {
			end = maxPosition
			steps++
		}
	}

	return steps
};
