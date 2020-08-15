// 暴力解法
const twoSum = function(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}

// 两遍哈希
const twoSum = function(nums, target) {
  const map = new Map()

  // 建立哈希表
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], i)
  }

  for (let i = 0; i < nums.length; i++) {
    // 保存差值，通过差值来查找结果
    const diff = target - nums[i]

    // 不能等于元素本身
    if (map.has(diff) && map.get(diff) !== i) {
      return [i, map.get(diff)]
    }
  }
}

// 一遍哈希
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