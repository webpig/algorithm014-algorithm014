// 暴力解法
const rotate = function(nums, k) {
  let previous = 0

  // 旋转k次
  for (let i = 0; i < k; i++) {
    previous = nums[nums.length - 1]
    // 旋转操作
    for (let j = 0; j < nums.length; j++) {
      const temp = nums[j]
      nums[j] = previous
      previous = temp
    }
  }
}

/**
 * 先将整个数组反转，然后反转前k个，再反转后n - k个
 */
const rotate = function(nums, k) {
  k = k % nums.length
  reverse(nums, 0, nums.length - 1)
  reverse(nums, 0, k - 1)
  reverse(nums, k, nums.length - 1)

  function reverse(nums, start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]
      start++
      end--
    }
  }
}