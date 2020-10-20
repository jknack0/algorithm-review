const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

const minimalTree = (nums, start = 0, end = nums.length - 1) => {
  if(start > end) {
    return null
  }

  let mid = Math.floor((start + end) / 2)
  let root = new TreeNode(nums[mid])

  root.left = minimalTree(nums, start, mid - 1)
  root.right = minimalTree(nums, mid + 1, end)

  return  root
}

const root = minimalTree(sortedArray)

const inOrderTraversal = (root) => {
  if(!root) return
  inOrderTraversal(root.left)
  console.log(root.val)
  inOrderTraversal(root.right)
}

module.exports = {
  root
}
