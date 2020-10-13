const { LinkedList, Node } = require('./implement')

const isIntersecting = (list1, list2) => {
  let walker1 = list1.head
  let walker2 = list2.head

  while(walker1) {
    while(walker2) {
      if(walker1 === walker2) {
        return true
      }

      walker2 = walker2.nextNode
    }
    walker2 = list2.head
    walker1 = walker1.nextNode
  }

  return false
}

(() => {
  let l1 = new LinkedList()
  l1.insert(15)
  l1.insert(5)
  l1.insert(21)

  let l2 = new LinkedList()
  l2.insert(51)
  l2.insert(8)
  l2.insert(12)
  
  let intersect = new LinkedList()
  intersect.insert(69)
  intersect.insert(420)

  l1.tail.nextNode = intersect.head
  l2.tail.nextNode = intersect.head

  console.log(isIntersecting(l1, l2))
})()