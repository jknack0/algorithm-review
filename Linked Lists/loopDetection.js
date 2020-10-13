const { LinkedList } =  require('./implement')

const loopDetection = (list) => {
  let slowWalker = list.head
  let fastWalker = list.head
  let counter = 0

  while(fastWalker && fastWalker.nextNode && fastWalker.nextNode.nextNode) {
    slowWalker = slowWalker.nextNode
    fastWalker = fastWalker.nextNode.nextNode

    if(slowWalker === fastWalker) {
      slowWalker = list.head
      while(slowWalker !== fastWalker) {
        slowWalker = slowWalker.nextNode
        fastWalker = fastWalker.nextNode
      }

      return slowWalker
    }
  }

  return null
}

(() => {
  const list = new LinkedList()
  list.insert(1)
  list.insert(2)
  list.insert(3)
  list.insert(4)
  list.insert(5)
  list.insert(6)
  list.insert(7)
  list.tail.nextNode = list.head

  console.log(loopDetection(list))
})()