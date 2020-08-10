/**
 * 双指针，i用于赋值，j用于遍历整个数组，
 * 如果nums[i] !== nums[j]，即遇到不重复的元素，则添加到数组中，i递增
 * 最后返回新数组的长度
 */
const removeDuplicates = function(nums) {
  if (nums.length === 0) return 0

  let i = 0

  for (let j = 0; j < nums.length; j++) {
    if (nums[i] !== nums[j]) {
      i++
      nums[i] = nums[j]
    }
  }

  return i + 1
}

/**
 * 统计重复次数，遇到不重复的直接在不重复的下标处赋值，即i - count
 * 最后返回新数组的长度
 */
const removeDuplicates = function(nums) {
  if (nums.length === 0) return 0

  let count = 0
  let len = nums.length

  for (let i = 1; i < len; i++) {
    if (nums[i] === nums[i - 1]) count++
    else nums[i - count] = nums[i]
  }

  return len - count
}
