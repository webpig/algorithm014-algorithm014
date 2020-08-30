/**
 * 在全排列的基础上去重，这里使用排序来去重，如果当前元素和上个元素相等，并且上个元素已经使用过了，那说明重复了
 */
var permuteUnique = function(nums) {
  const res = []

  nums.sort((a, b) => a - b)

  const dfs = (path, used) => {
    if (path.length === nums.length) {
      res.push([...path])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue

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