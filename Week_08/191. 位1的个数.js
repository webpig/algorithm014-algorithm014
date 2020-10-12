/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 循环32次，每次判断最低位是否为1，然后右移一位继续判断。时间复杂度：O(1)，空间复杂度：O(1)
var hammingWeight = function(n) {
	let count = 0

	for (let i = 0; i < 32; i++) {
		if (n & 1 !== 0) {
			count++
		}
		n >>= 1
	}

	return count
};

// 每次去掉最低位的1，直到n为0，只会循环1出现的次数。时间复杂度：O(1)，空间复杂度：O(1)
var hammingWeight = function(n) {
	let count = 0

	while (n !== 0) {
		n &= (n - 1)
		count++
	}

	return count
};
