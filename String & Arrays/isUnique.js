const isUniqueMap = (string) => {
  const characterMap = new Map()

  for(let char of string) {
    if(characterMap.get(char)) {
      return false
    } else {
      characterMap.set(char, 1)
    }
  }

  return true
}
console.log('isUniqueMap')
console.log(isUniqueMap('abcd'))
console.log(isUniqueMap('aba'))
console.log(isUniqueMap(''))
console.log('')

const isUnique = (string) => {
  for(let current = 0; current < string.length - 1; current++) {
    for(let compare = current + 1; compare < string.length; compare++) {
      if(string[current] === string[compare]) {
        return false
      }
    }
  }

  return true
}
console.log('isUnique')
console.log(isUniqueMap('abcdefghijklmnop'))
console.log(isUniqueMap('ababababababa'))
console.log(isUniqueMap('a'))