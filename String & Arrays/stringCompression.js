const stringCompression = (input) => {
  let result = ''
  let count = 1
  let currentCharacter = input[0]

  for(let index = 1; index < input.length; index++) {
    if(currentCharacter === input[index]) {
      count++
    } else {
      result += (currentCharacter + count)
      count = 1
      currentCharacter = input[index]
    }
  }

  result += (currentCharacter + count)

  if(result.length < input.length) {
    return result
  } else {
    return input
  }
}

console.log(stringCompression('aaabbbcccaaa'))
console.log(stringCompression('aaaccaaa'))
console.log(stringCompression('abca'))