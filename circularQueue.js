/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.queue = new Array(k)
    this.head = null
    this.tail = null
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.isFull()) return false

  if (this.isEmpty()) {
    this.head = this.tail = 0
  } else if (this.tail === this.queue.length - 1) {
    this.tail = 0
  } else {
    this.tail += 1
  }
  
  this.queue[this.tail] = value
  return true
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
  if (this.isEmpty()) return false

  this.queue[this.head] = undefined
  
  if (this.head === this.queue.length - 1) {
    this.head = 0
  } else {
    this.head += 1
  }

  if (this.head - this.tail === 1 || this.head === 0 && this.tail === this.queue.length - 1) {
    this.head = this.tail = null
  }

  return true
};

/**
 * Get the front item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
  if (this.isEmpty()) return -1
  return this.queue[this.head]
};

/**
 * Get the last item from the queue.
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
  if (this.isEmpty()) return -1
  return this.queue[this.tail]
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.head === null && this.tail === null
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
  if (this.isEmpty() || this.tail === this.head) return false
  if (this.tail > this.head) return this.tail === this.queue.length - 1 && this.head === 0
  if (this.tail < this.head) return this.head - this.tail === 1
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */


const queue = new MyCircularQueue(5)
queue.enQueue(2)
queue.enQueue(3)
queue.enQueue(4)
queue.enQueue(5)
queue.enQueue(6)
queue.deQueue()
queue.deQueue()
queue.deQueue()
queue.deQueue()
queue.deQueue()
queue.enQueue(4)

console.log("TCL: queue", queue)
