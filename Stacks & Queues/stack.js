class Stack{
  constructor() {
    this._data = []
    this._length = 0
  }

  pop() {
    if(this._length === 0) {
      return
    }

    this._length = this._length - 1

    return this._data.pop()
  }

  push(element) {
    this._data.push(element)
    this._length = this._length + 1
  }

  peek() {
    return this._data[this._length - 1]
  }

  size() {
    return this._length
  }

  isEmpty() {
    return this._length === 0
  }
}

module.exports = Stack
