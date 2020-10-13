const Stack = require('./stack')

class StackOfPlates{
  constructor(maxSize) {
    this._maxSize = maxSize
    this._stack = new Stack()
    this._stack.push(new Stack())
  }

  push(element) {
    if(this._stack.peek().size()  < this._maxSize) {
      this._stack.peek().push(element)
    } else {
      const newStack = new Stack()
      newStack.push(element)
      this._stack.push(newStack)
    }
  }

  pop() {
    let data 
    if(this._stack.peek().size() === 1) {
      data = this._stack.peek().pop()
      this._stack.pop()
    } else {
      data = this._stack.peek().pop()
    }

    return data
  }

  peek() {
    return this._stack.peek().peek()
  }
}

const plates = new StackOfPlates(5)
plates.push(1)
plates.push(1)
plates.push(3)
plates.push(4)
plates.push(5)
plates.push(1)
plates.pop()
plates.pop()
plates.pop()

console.log(plates.peek())


