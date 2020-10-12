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
    this.head = undefined
    this.tail = undefined
    this.size = 0
  }

  insert(element) {
    if(this.head === undefined) {
      this.head = new Node(element)
      this.tail = this.head
    } else {
      this.tail.nextNode = new Node(element)
      this.tail = this.tail.nextNode
    }

    this.size = this.size + 1
  }

  delete(element) {
    if(this.head === undefined) {
      return
    }

    if(this.head.value === element) {
      this.head = this.head.nextNode
      this.size = this.length - 1
    } else {
      let walker = this.head

      while(walker.nextNode.value !== element && walker.value !== undefined) {
        walker = walker.nextNode
      }

      if(walker !== undefined) {
        walker.nextNode = walker.nextNode.nextNode
        this.size = this.size - 1

        if(walker.nextNode = undefined) {
          this.tail = walker
        }
      }
    }
  }

  toString() {
    const temp = [];
    let walker = this.head;

    while (walker) {
      temp.push(walker.value);
      walker = walker.nextNode;
    }

    return `[${temp.join(' ')}] (${this.size})`
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

module.exports = {
  LinkedList,
  Node
}