const convertToUrlFancy = (input) => {
  const trimmedInput = input.trim()

  return trimmedInput.split(' ').join('%20')
}

console.log(convertToUrlFancy('asdf asdf asdf'))
console.log(convertToUrlFancy(''))
console.log(convertToUrlFancy('asdf as df asdf'))
console.log(convertToUrlFancy('as df asd f as df'))

console.log('\nconvertToUrlIterative')

const convertToUrlIterative = (input) => {
  const trimmedInput = input.trim()
  let result = ''

  for(let index = 0; index < trimmedInput.length; index++) {
    if(trimmedInput[index] === ' ') {
      result += '%20'
    } else {
      result += trimmedInput[index]
    }
  }

  return result
}

console.log(convertToUrlIterative('asdf asdf asdf'))
console.log(convertToUrlIterative(''))
console.log(convertToUrlIterative('asdf as df asdf'))
console.log(convertToUrlIterative('as df asd f as df'))