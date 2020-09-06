// 直接模拟，优先收5元的，然后找钱优先找10元的，因为需要遍历账单，所以时间复杂度为O(n),空间复杂度为O(1)
var lemonadeChange = function(bills) {
	let ten = 0
	let five = 0

	for (const bill of bills) {
		if (bill === 5) {
			five++
		} else if (bill === 10 && five > 0) {
			ten++
			five--
		} else {
			if (ten > 0 && five > 0) {
				ten--
				five--
			} else if (five >= 3) {
				five -= 3
			} else {
				return false
			}
		}
	}

	return true
};