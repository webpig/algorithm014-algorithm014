// 暴力解法
const trap = function(height) {
  let ans = 0
  
  for (let i = 1; i < height.length - 1; i++) {
    let leftMax = 0, rightMax = 0
    
    for (let j = i; j >= 0; j--) {
      leftMax = Math.max(leftMax, height[j])
    }
    
    for (let j = i; j < height.length; j++) {
      rightMax = Math.max(rightMax, height[j])
    }
    
    ans += Math.min(leftMax, rightMax) - height[i]
  }
  
  return ans
}

// 分别存储所有项的左边最大值和右边最大值，最后进行计算
const trap = function(height) {
  let ans = 0
  let leftMaxs = []
  let rightMaxs = []
  let len = height.length
  
  leftMaxs[0] = height[0]
  for (let i = 1; i < len; i++) {
    leftMaxs[i] = Math.max(height[i], leftMaxs[i - 1])
  }
  
  rightMaxs[len - 1] = height[len - 1]
  for (let i = len - 2; i >= 0; i--) {
    rightMaxs[i] = Math.max(height[i], rightMaxs[i + 1])
  }
  
  for (let i = 1; i < len - 1; i++) {
    ans += Math.min(leftMaxs[i], rightMaxs[i]) - height[i]
  }
  
  return ans
}

// 双指针
const trap = function(height) {
  let ans = 0
  let leftMax = 0, rightMax = 0
  let left = 0, right = height.length - 1

  while (left < right) {
    if (height[left] < height[right]) {
      height[left] >= leftMax
        ? leftMax = height[left]
        : ans += leftMax - height[left]
      left++
    } else {
      height[right] >= rightMax
        ? rightMax = height[right]
        : ans += rightMax - height[right]
      right--
    }
  }

  return ans
}

// 栈
const trap = function(height) {
  let ans = 0
  let stack = []
  let curr = 0

  while (curr < height.length) {
    while (stack.length > 0 && height[curr] > height[stack[stack.length - 1]]) {
      const top = stack.pop()
      const last = stack[stack.length - 1]

      if (stack.length === 0) break

      let distance = curr - last - 1
      let boundedHeight = Math.min(height[curr], height[last]) - height[top]

      ans += distance * boundedHeight
    }

    stack.push(curr++)
  }

  return ans
}