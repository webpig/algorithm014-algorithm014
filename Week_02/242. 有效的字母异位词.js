// 我们可以使用哈希表来记录字母出现的次数，如果是存在于s字符串中的则+1，t中的则-1，最后再判断哈希表中是否存在不为0的值
const isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  const map = new Map()

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.has(s[i]) ? map.get(s[i]) + 1 : 1)
    map.set(t[i], map.has(t[i]) ? map.get(t[i]) - 1 : -1)
  }

  for (const val of map.values()) {
    if (val !== 0) {
      return false
    }
  }

  return true
}

// 因为小写字母一共就26个，我们可以用size为26的数组来存储字母出现的次数，主要思路和上面一样
const isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  const map = Array(26).fill(0)

  for (let i = 0; i < s.length; i++) {
    map[s[i].charCodeAt() - 97]++
    map[t[i].charCodeAt() - 97]--
  }

  for (const val of map) {
    if (val !== 0) {
      return false
    }
  }

  return true
}

// 使用排序，复杂度较高
const isAnagram = function(s, t) {
  if (s.length !== t.length) return false

  return s.split('').sort().join() === t.split('').sort().join()
}