// 本题主要是哈希键值得设计：使用排序后的字符串作为key
// 循环+排序，时间复杂度为O(nklogk)，n为strs的长度，k为strs中字符串的最大长度；空间复杂度为O(nk)
var groupAnagrams = function(strs) {
  const map = new Map()

  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort().join()

    if (map.has(key)) {
      const temp = map.get(key)
      temp.push(strs[i])
      map.set(key, temp)
    } else {
      map.set(key, [strs[i]])
    }
  }

  return [...map.values()]
};

// 对字母进行计数，然后拼接为字符串作为key
// 时间复杂度为O(nk)，n为strs的长度，k为strs中字符串的最大长度；空间复杂度和上面一样，O(nk)
var groupAnagrams = function(strs) {
  const map = new Map()

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i]
    const keyArr = Array(26).fill(0)

    for (let j = 0; j < str.length; j++) {
      keyArr[str[j].charCodeAt() - 97]++
    }

    const key = keyArr.join('')

    if (map.has(key)) {
      const temp = map.get(key)
      temp.push(str)
      map.set(key, temp)
    } else {
      map.set(key, [str])
    }
  }

  return [...map.values()]
};