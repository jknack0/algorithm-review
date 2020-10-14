const Stack = require('./stack')

// Write a program to sort a stack such that the smallest items are on the top. 
// You can use an additional temporary stack, but you may not copy the elements 
// into any other data structure (such as an array). The stack supports the 
// following operations: push, pop, peek, and isEmpty.

const sortStack = (stack) => {
  let temp
  const tempStack = new Stack()

  while(!stack.isEmpty()) {
    temp = stack.pop()

    while(!tempStack.isEmpty() && tempStack.peek() < temp) {
      stack.push(tempStack.pop())
    }

    tempStack.push(temp)
  }

  return tempStack
}

(() => {
  const unsortedStack = new Stack()
  unsortedStack.push(3)
  unsortedStack.push(2)
  unsortedStack.push(4)
  unsortedStack.push(1)
  unsortedStack.push(7)
  unsortedStack.push(5)
  unsortedStack.push(8)

  console.log(sortStack(unsortedStack)._data.join(' '))
})()