let head = require('./implement')

const partitionLinkedList = (head, x) => {
  let lessThanX = []
  let greaterThanX = []
  let walker = head

  while(walker) {
    if(walker.value < x) {
      lessThanX.push(walker)
    } else {
      greaterThanX.push(walker)
    }
    walker = walker.nextNode
  }

  let partitioned = greaterThanX.concat(lessThanX)
  let newHead = partitioned.pop()
  let newWalker = newHead

  while(partitioned.length > 0) {
    let currentNode = partitioned.pop()
    newWalker.nextNode = currentNode
    newWalker = newWalker.nextNode
  }

  newWalker.nextNode = null

  return newHead
}

const showNodes = (head) => {
  let walker = head
  while(walker) {
    console.log(walker.value)
    walker = walker.nextNode
  }
}

(() => {
  showNodes(head)
  console.log('')
  showNodes(partitionLinkedList(head, 5))
})()