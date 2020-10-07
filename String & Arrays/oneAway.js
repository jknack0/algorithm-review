const oneAway = (input1, input2) => {
  if(Math.abs(input1.length - input2.length) > 1) {
    return false
  }

  if(Math.abs(input1.length - input2.length) === 1 && input1.includes(input2) || input2.includes(input1)){
    return true
  }

}

console.log(oneAway('pale', 'pl'))
console.log(oneAway('pale', 'ple'))
console.log(oneAway('pales', 'pale'))
console.log(oneAway('bale', 'pale'))
console.log(oneAway('pale', 'bake'))

console.log('asdf'.split('').map(letter => 'asdfgh'.includes(letter)))