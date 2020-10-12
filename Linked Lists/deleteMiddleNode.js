let head = require('./implement')

let middleNode = head.nextNode.nextNode.nextNode

const deleteMiddleNode = (node) => {
  console.log('\nThe node to be deleted is: ', node.value )
  node.value = node.nextNode.value
  node.nextNode = node.nextNode.nextNode
}

const showNodes = () => {
  let walker = head
  while(walker) {
    console.log(walker.value)
    walker = walker.nextNode
  }
}

(() => {
  console.log('Original nodes')
  showNodes()
  deleteMiddleNode(middleNode)
  console.log('\nAfter deleteion')
  showNodes()
})()