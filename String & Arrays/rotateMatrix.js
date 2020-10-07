const rotateMatrix = (matrix) => {
  const length = matrix.length
  for(let row = 0; row < Math.floor(length / 2); row++) {
    for(let column = row; column < length - row - 1; column++) {
      let temp = matrix[row][column]
      matrix[row][column] = matrix[column][length - 1 - row]
      matrix[column][length - 1 - row] = matrix[length - 1 - row][length - 1 - column]
      matrix[length - 1 - row][length - 1 - column] = matrix[length - 1 - column][row]
      matrix[length - 1 - column][row] = temp
    }
  }

  return matrix
}

console.log(rotateMatrix([[1,2,3], [4,5,6], [7,8,9]]))
console.log(rotateMatrix([[1,1,1,1], [2,2,2,2], [3,3,3,3], [4,4,4,4]]))