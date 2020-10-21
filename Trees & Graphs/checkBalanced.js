// Implement a function to check if a binary tree is balanced. 
// For the purposes of this question, a balanced tree is defined 
// to be a tree such that the heights of the two subtrees of any
// node never differ by more than one.

const { root } = require('./minimalTree')

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const getHeight = (root) => {
  if(root === null) {
    return -1
  }

  const leftHeight = getHeight(root.left)
  const rightHeight = getHeight(root.right)

  if(Math.abs(leftHeight - rightHeight) > 1) {
    return false
  } else {
    return Math.max(getHeight(root.left), getHeight(root.right)) + 1
  }
}

const checkBalanced = (root) => {
  return getHeight(root) !== false
}

(() => {
  console.log(checkBalanced(root))

  const unbalanced = new TreeNode(1)
  unbalanced.left = new TreeNode(2)
  unbalanced.left.left = new TreeNode(3)
  console.log(checkBalanced(unbalanced))
})()