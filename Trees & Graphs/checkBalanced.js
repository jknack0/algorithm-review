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
  if(leftHeight === false) {
    return false
  }

  const rightHeight = getHeight(root.right)
  if(rightHeight === false) {
    return false
  }

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