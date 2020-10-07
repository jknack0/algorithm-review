const zeroMatrix = (matrix) => {
  const rowLength = matrix.length
  const columnLength = matrix[0].length
  let rows = new Set()
  let columns = new  Set()

  console.log(matrix)

  for(let row = 0; row < rowLength; row++) {
    for(let column = 0; column < columnLength; column++) {
      if(matrix[row][column] === 0) {
        rows.add(row)
        columns.add(column)
      }
    }
  }

  for(let row = 0; row < rowLength; row++) {
    for(let column = 0; column < columnLength; column++) {
      if(rows.has(row) || columns.has(column)) {
        matrix[row][column] = 0
      }
    }
  }

  return matrix
}

console.log(zeroMatrix([[1, 1, 3], [1, 0, 3], [1, 2, 3]]))
console.log(zeroMatrix([[1, 1, 3, 4], [1, 0, 3, 4], [1, 2, 3, 4] ,[1, 3, 3, 5], [1,2,3,5]]))
