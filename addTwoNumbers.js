function ListNode(val) {
  this.val = val;
  this.next = null;
}

// const a1 = new ListNode(2)
// a1.next = new ListNode(4)
// a1.next.next = new ListNode(3)

// const a2 = new ListNode(5)
// a2.next = new ListNode(6)
// a2.next.next = new ListNode(4)

// const a1 = new ListNode(1)
// a1.next = new ListNode(8)

// const a2 = new ListNode(0)

// const a1 = new ListNode(5)
// const a2 = new ListNode(5)

// const a1 = new ListNode(9)
// a1.next = new ListNode(8)

// const a2 = new ListNode(1)

const a1 = new ListNode(0)

const a2 = new ListNode(2)
a2.next = new ListNode(7)
a2.next.next = new ListNode(8)

const addTwoNumbers = (l1, l2) => {
  let resNode = new ListNode()
  let hasLeftover = false

  while (true) {
    let newVal = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + (hasLeftover ? 1 : 0)

    if (newVal / 10 >= 1) {
      newVal = newVal % 10
      hasLeftover = true
    } else {
      hasLeftover = false
    }
    const newNode = new ListNode(newVal)

    if (resNode.val === undefined || resNode.val === null) {
      resNode = newNode
    } else {
      let pre = resNode
      while (pre.next) {
        pre = pre.next
      }
      pre.next = newNode
    }

    if ((!l1 && !l2) || (l1 && !l1.next && !l2) || (l2 && !l1 && !l2.next) || (l1 && !l1.next && l2 &&  !l2.next)) {
      break
    } else {
      l2 = l2 ? l2.next : null
      l1 = l1 ? l1.next : null
    }
  }

  if (hasLeftover) {
    const leftoverNode = new ListNode(1)
    let pre = resNode
    while (pre.next) {
      pre = pre.next
    }
    pre.next = leftoverNode
  }
  
  console.log("TCL: addTwoNumbers -> resNode", resNode)
  return resNode
}


addTwoNumbers(a1, a2)

