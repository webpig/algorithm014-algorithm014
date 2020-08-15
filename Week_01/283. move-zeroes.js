// 两次循环，第一次放入所有非零元素，第二次补0
const moveZeroes = function(nums) {
  // j用来添加非零元素
  let j = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      j++
    }
  }

  for (let i = j; i < nums.length; i++) {
    nums[i] = 0
  }
}

const moveZeroes = function(nums) {
  // j用来添加非零元素
  let j = 0

  // i用来遍历数组
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i]
      // 在非零元素后面补零
      if (i !== j) {
        nums[i] = 0
      }

      j++
    }
  }
}

const moveZeroes = function(nums) {
  let j = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      // 直接交换，非零元素在左边，零在右边，j为慢指针，i为当前指针
      [nums[i], nums[j]] = [nums[j], nums[i]]
      j++
    }
  }
}


