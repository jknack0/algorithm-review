const { LinkedList, Node } = require('./implement')

const sumList = (input1, input2) => {
  let walker1 = input1.head
  let walker2 = input2.head
  const result = new LinkedList()
  let carry = 0

  while(walker1 || walker2 || carry) {
    value1 = walker1 ? walker1.value : 0
    value2 = walker2 ? walker2.value : 0
    total = value1 + value2
    
    result.insert((value1 + value2 + carry) % 10)
    carry = total >= 10

    if(walker1) walker1 = walker1.nextNode
    if(walker2) walker2 = walker2.nextNode
  }

  return result
}

(() => {
  const list1 = new LinkedList()
  list1.insert(5)
  list1.insert(6)
  list1.insert(8)

  const list2 = new LinkedList()
  list2.insert(5)
  list2.insert(6)

  console.log(sumList(list1, list2).toString())
})()
