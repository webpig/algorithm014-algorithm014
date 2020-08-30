
/**
 * 和组合问题写法差不多，比如[1, 2, 3]，遍历该数组，分别以1，2，3开头，然后递归，找到排列后面的数字；
 * 这里需要注意不能重复，加个判断即可
 */
var permute = function(nums) {
  const res = []

  const dfs = (path) => {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (path.includes(nums[i])) continue

      path.push(nums[i])
      dfs(path)
      path.pop()
    }
  }

  dfs([])

  return res
};

// includes的时间复杂度是O(n)的，我们可以把判重操作用一个数组来标记，如果使用过则为true，否则为false
var permute = function(nums) {
  const res = []

  const dfs = (path, used) => {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue

      used[i] = true
      path.push(nums[i])

      dfs(path, used)

      used[i] = false
      path.pop()
    }
  }

  dfs([], [])

  return res
};

// 全排列的复杂度为n!级别的