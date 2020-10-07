const oneAway = (input1, input2) => {
  if(Math.abs(input1.length - input2.length) > 1) {
    return false
  }

  if(Math.abs(input1.length - input2.length) === 1 && containsAllLetters(input1, input2) || containsAllLetters(input2, input1)){
    return true
  }

  const arrayFrom1 = input1.split('')
  const arrayFrom2 = input2.split('')
  let differences = 0

  for(let index = 0; index < arrayFrom2.length; index++) {
    if(arrayFrom1[index] === arrayFrom2[index]) {
      continue
    } else {
      differences++
    }
  }

  return differences === 1 ? true : false
}

const containsAllLetters = (input1, input2) => {
  const boolArray = input1.split('').map(letter => input2.includes(letter))
  return boolArray.every((element) => element ? true : false)
}

console.log(oneAway('', 'p'))
console.log(oneAway('pale', 'ple'))
console.log(oneAway('pales', 'pale'))
console.log(oneAway('bale', 'pale'))
console.log(oneAway('pale', 'bake'))
