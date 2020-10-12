/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
// 时间复杂度：O(1)，空间复杂度：O(1)；因为循环次数是固定的
var reverseBits = function(n) {
	let ans = 0
	let i = 32

	while (i--) {
		// 向左移位，低位会变成高位
		ans *= 2
		// 加1还是加0
		ans += n & 1
		// 向右移位，继续处理下一位
		n >>= 1
	}

	return ans
};
