function ListNode(val) {
    this.val = val;
    this.next = null;
}

const list1 = new ListNode(-9)
list1.next = new ListNode(3)

const list2 = new ListNode(5)
list2.next = new ListNode(7)

var mergeTwoLists = function (l1, l2) {
  if (!l1 && !l2) {
    return null
  }

  if (!l1 || (l1 && l2 && l1.val >= l2.val)) {
    const mergedNode = new ListNode(l2.val)
    l2 = l2.next
    mergedNode.next = mergeTwoLists(l1, l2)
    return mergedNode
  } else {
    const mergedNode = new ListNode(l1.val)
    l1 = l1.next
    mergedNode.next = mergeTwoLists(l1, l2)
    return mergedNode
  }
};

mergeTwoLists(list1, list2)
