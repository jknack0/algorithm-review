const { root } = require('./minimalTree')
const { LinkedList } = require('../Linked Lists/implement')

const listOfDepths = (root, arr, depth) => {
  if(root === null) {
    return
  }

  if(depth === arr.length) {
    arr[depth] = new LinkedList()
  }

  arr[depth].insert(root.val)

  listOfDepths(root.left, arr, depth + 1)
  listOfDepths(root.right, arr, depth + 1)

  return arr
}

(() => {
  const dp = listOfDepths(root, arrayOfLists = [], 0)

  for(let val of dp) {
    console.log(val.toString())
  }
})()