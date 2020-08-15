// 迭代解法
const mergeTwoLists = function(l1, l2) {
  const dummy = new ListNode(-1)
  let curr = dummy

  while (l1 && l2) {
    if (l1.val < l2.val) {
      curr.next = l1
      l1 = l1.next
    } else {
      curr.next = l2
      l2 = l2.next
    }

    curr = curr.next
  }

  curr.next = l1 ? l1 : l2

  return dummy.next
}

// 递归解法
const mergeTwoLists = function(l1, l2) {
  if (!l1) return l2
  if (!l2) return l1

  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}