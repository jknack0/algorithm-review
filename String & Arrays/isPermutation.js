const isPermutation = (string1, string2) => {
  if(string1.length !== string2.length) {
    return false
  }

  const sortedString1 = string1.split('').sort().join('')
  const sortedString2 = string2.split('').sort().join('')

  if(sortedString1 === sortedString2) {
    return true
  } else {
    return false
  }
}

console.log('isPermutation')
console.log(isPermutation('abv','vba'))
console.log(isPermutation('asdffdas','asdfasdf'))
console.log(isPermutation('abv','va'))
console.log(isPermutation('','vba'))
console.log(isPermutation('abc','cab'))


const isPermutationMap = (string1, string2) => {
  if(string1.length !== string2.length) {
    return false
  }

  let mapOfString1 = new Map()
  let mapOfString2 = new Map()

  for(let index = 0; index < string1.length; index++) {
    if(mapOfString1.get(string1[index])) {
      mapOfString1.set(string1[index], mapOfString1.get(string1[index]) + 1)
    } else {
      mapOfString1.set(string1[index], 1)
    }

    if(mapOfString2.get(string2[index])) {
      mapOfString2.set(string2[index], mapOfString2.get(string1[index]) + 1)
    } else {
      mapOfString2.set(string2[index], 1)
    }
  }

  if(mapOfString1.size !== mapOfString2.size) {
    return false
  }

  for(let [key, value] of mapOfString1) {
    if(mapOfString2.get(key) === value) {
      continue
    } else {
      return false
    }
  }

  return true
}

console.log('')
console.log('isPermutationMap')
console.log(isPermutationMap('abv','vba'))
console.log(isPermutationMap('asdffdas','asdfasdf'))
console.log(isPermutationMap('abv','va'))
console.log(isPermutationMap('','vba'))
console.log(isPermutationMap('abc','cab'))