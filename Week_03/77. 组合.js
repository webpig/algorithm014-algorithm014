/**
 * 回溯，找到所有解。
 * 找到结束条件：path的长度为n，即一个正确解
 * 从1-n遍历，比如[1, 2, 3, 4]，分别从1，2， 3， 4开始，然后递归，下探到下一层
 * 递归后需要撤销上一步操作，这样才能找到更多的解
 */
var combine = function(n, k) {
  const res = []

  const dfs = (path, start) => {
    if (path.length === k) {
      // path是数组，引用类型，这里需保存它的浅拷贝
      res.push([...path])
      return
    }

    // 加上start，会让下次搜索不会重复之前的值
    for (let i = start; i <= n; i++) {
      path.push(i)
      dfs(path, i + 1)
      path.pop()
    }
  }

  dfs([], 1)

  return res
};