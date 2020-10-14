class Queue {
  constructor() {
    this._head = undefined
    this._tail = undefined
    this._length = 0
  }

  enqueue(item) {
    if(this._head === undefined) {
      this._head = new QueueNode(item)
      this._tail = this._head
    } else {
      const newNode = new QueueNode(item)
      this._tail.next = newNode
      this._tail = newNode
    }

    this._length = this._length + 1
  }

  dequeue() {
    if(this._length === 0) {
      return
    }
    
    let data
    if(this._length === 1) {
      data = this._head
      this._head = undefined
      this._tail = undefined
    } else {
      data = this._head
      this._head = this._head.next
    }

    this._length = this._length - 1
    return data
  }

  peek() {
    return this._head.value
  }

  isEmpty() {
    return this._head === undefined
  }

  
}

class QueueNode {
    constructor(value, next) {
      this._value = value
      this._next = next ? next : null
    }

    get value() {
      return this._value
    }

    get next() {
      return this._next
    }

    set next(node) {
      this._next = node
    }
}

module.exports = Queue
