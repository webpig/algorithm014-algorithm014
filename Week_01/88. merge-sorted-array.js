// 双指针，从前往后
const merge = function(nums1, m, nums2, n) {
  let i = 0
  let i1 = 0
  let i2 = 0
  let arr = nums1.slice()

  while (i1 < m && i2 < n) {
    if (arr[i1] <= nums2[i2]) {
      nums1[i] = arr[i1]
      i1++
    } else {
      nums1[i] = nums2[i2]
      i2++
    }

    i++
  }

  if (i1 < m) nums1.splice(i1 + i2, m - i1, ...arr.slice(i1, m))
  if (i2 < n) nums1.splice(i1 + i2, n - i2, ...nums2.slice(i2))
}

// 双指针，从后向前
const merge = function(nums1, m, nums2, n) {
  let i = m + n - 1
  let i1 = m - 1
  let i2 = n - 1

  while (i2 >= 0) {
    nums1[i--] = nums1[i1] >= nums2[i2] ? nums1[i1--] : nums2[i2--]
  }
}