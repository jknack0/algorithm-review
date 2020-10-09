class Node {
  constructor(value, nextNode) {
    this.value = value
    this.nextNode = nextNode
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
                13, null
              )
            )
          )
        )
      )
    )
  ))

module.exports = head