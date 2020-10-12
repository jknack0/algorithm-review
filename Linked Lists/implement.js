class Node {
  constructor(value, nextNode) {
    this._value = value
    this._nextNode = nextNode ? nextNode : null
  }

  get value() {
    return this._value
  }

  get nextNode() {
    return this._nextNode
  }

  set nextNode(node) {
    this._nextNode = node
  } 
}

class LinkedList {
  constructor() {
    this.head = null
    this.tail = null
    this.length = 0
  }
}

// Deal with it
let head = new Node(
  1, new Node (
    5, new Node (
      13, new Node (
        2, new Node (
          1, new Node (
            5, new Node (
              5, new Node(
                13
              )
            )
          )
        )
      )
    )
  ))

module.exports = head