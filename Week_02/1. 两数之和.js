// 暴力解法，直接两重循环，如果存在解则返回
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

// 使用哈希表：该问题可以转化为找target和每个元素的差值，我们把差值存储在哈希表里，优化查找时间
const twoSum = function(nums, target) {
  const map = new Map()

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]

    if (map.has(diff)) {
      return [i, map.get(diff)]
    }

    map.set(nums[i], i)
  }
}