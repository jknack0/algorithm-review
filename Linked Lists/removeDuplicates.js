const { head } = require('./implement')

class Node {
  constructor(value, nextNode) {
    this.value = value
    this.nextNode = nextNode
  }
}

const removeDuplicates = (input) => {
  let currentNode = input
  let previousNode = new Node(null, currentNode)
  const valueMap = new Map()

  while(currentNode) {
    if(!valueMap.get(currentNode.value)) {
      valueMap.set(currentNode.value, 1)
      previousNode = currentNode
      currentNode = currentNode.nextNode
    } else {
      previousNode.nextNode = currentNode.nextNode
      currentNode = currentNode.nextNode
    }
  }

  console.log(valueMap)

  while(input) {
    console.log(input.value)
    input = input.nextNode
  }

  return 'removeDuplicates return'
}

console.log(removeDuplicates(head))