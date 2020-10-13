const { head } = require('./implement')

const returnKthElement = (input, k) => {
  let listLength = 0
  let pointer = input
  
  while(pointer) {
    listLength++
    pointer = pointer.nextNode
  }

  if(k > listLength) {
    return 'Your K value is longer then the linked list! Try a smaller value.'
  }

  pointer = input
  for(let index = 0; index < listLength - k - 1; index++) {
    pointer = pointer.nextNode
  }

  return pointer.value
}

console.log(returnKthElement(head, 8))
