const palindromePermutation = (input) => {
  const inputWithNoSpaces = input.split(' ').join('')
  const characterMap = new Map()

  for (let letter of inputWithNoSpaces) {
    if(characterMap.get(letter)) {
      characterMap.set(letter, characterMap.get(letter) + 1)
    } else {
      characterMap.set(letter, 1)
    }
  }

  let numberOfOdd = 0

  for (let [key, value] of characterMap) {
    if(value % 2 === 0) {
      continue
    } else {
      numberOfOdd++
    }
  }

  return !(numberOfOdd > 1)
}

console.log(palindromePermutation('asdffdsa'))
console.log(palindromePermutation('asdfdsa'))
console.log(palindromePermutation('asfdsa'))
console.log(palindromePermutation('ab'))