const { LinkedList } = require('./implement')

const isPalindrome = (list) => {
  let walker = list.head
  let letterStack = []
  
  while(walker) {
    letterStack.push(walker.value)
    walker = walker.nextNode
  }

  walker = list.head
  while(walker) {
    if(walker.value !== letterStack.pop()) {
      return false
    }

    walker = walker.nextNode
  }

  return true
}

(() => {
  const word = 'saippuakivikauppias'
  const wordList = new LinkedList()
  
  for(let letter of word) {
    wordList.insert(letter)
  }

  const result = isPalindrome(wordList)
  console.log(result)
})()