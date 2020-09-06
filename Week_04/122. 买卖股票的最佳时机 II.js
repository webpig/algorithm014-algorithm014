// 贪心思路：只要收益为正就计入收益，最终收益为最大；可利用股票走势图辅助理解。时间复杂度为O(n),空间复杂度为O(1)
var maxProfit = function(prices) {
	let maxProfit = 0

	for (let i = 0; i < prices.length - 1; i++) {
		const profit = prices[i + 1] - prices[i]

		if (profit > 0) {
			maxProfit += profit
		}
	}

	return maxProfit
};