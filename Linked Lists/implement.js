class Node {
  constructor(value, nextNode) {
    this.value = value
    this.nextNode = nextNode
  }
}

let head = new Node(1, null)
let currentNode = head

for (let i = 0; i < 10; i++) {
  const newNode = new Node(i, null)
  currentNode.next = newNode
  currentNode = newNode
}

while(head.next) {
  console.log(head.value)
  head = head.next
}