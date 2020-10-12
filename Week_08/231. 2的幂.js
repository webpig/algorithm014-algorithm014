/**
 * @param {number} n
 * @return {boolean}
 */
// 2的幂次方，用二进制表示只有1个1，去掉最低位的1，判断为0即可。时间复杂度：O(1)，空间复杂度：O(1)
var isPowerOfTwo = function(n) {
	return n > 0 && (n & (n - 1)) === 0
};
