const Stack = require('./stack')

class Queue {
  constructor() {
    this._pushStack = new Stack()
    this._popStack = new Stack()
    this._length = 0
  }

  add(item) {
    this._pushStack.push(item)
    this._length = this._length + 1
  }

  remove() {
    if(this._length === 0) {
      return
    }

    if(this._popStack.size() === 0) {
      while(this._pushStack.size() > 0) {
        this._popStack.push(this._pushStack.pop())
      }
    }
    
    this._length = this._length - 1

    return this._popStack.pop()
  }

  peek() {
    if(this._popStack.size() === 0) {
      while(this._pushStack.size() > 0) {
        this._popStack.push(this._pushStack.pop())
      }
    }
    
    return this._popStack.peek()
  }

  isEmpty() {
    return this._length === 0
  }

}

const q = new Queue()
q.add(1)
q.add(2)
q.add(3)
console.log(q.isEmpty())
console.log(q.peek())
q.remove()
q.remove()
q.remove()
console.log(q.isEmpty())