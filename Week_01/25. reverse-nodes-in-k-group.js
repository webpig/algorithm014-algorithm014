// 递归
function reverse(a, b) {
  let prev = null
  let curr = a

  while (curr !== b) {
    const next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }

  return prev
}

const reverseKGroup = function(head, k) {
  let a = head
  let b = head

  // [a, b) 为前k个节点区间
  for (let i = 0; i < k; i++) {
    if (!b) return head
    b = b.next
  }

  const newHead = reverse(a, b)

  a.next = reverseKGroup(b, k)

  return newHead
}