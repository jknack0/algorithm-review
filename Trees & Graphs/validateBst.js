const {root} = require('./minimalTree')

const helper = (root, lower, upper) => {
  if(root === null) {
    return true
  }

  let value = root.val
  if(lower !== null && value <= lower) return false
  if(upper !== null && value >= upper) return false

  if(!helper(root.right, value, upper)) return false
  if(!helper(root.left, lower, value)) return false

  return true
}

const validateBst = (root) => {
  return helper(root, null, null)
}

(() => {
  console.log(validateBst(root))
})()