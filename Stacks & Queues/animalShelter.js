const Queue = require('./queue')

// An animal shelter, which holds only dogs and cats, operates 
// on a strictly"first in, first out" basis. People must adopt 
// either the "oldest" (based on arrival time) of all animals 
// at the shelter, or they can select whether they would prefer
// a dog or a cat (and will receive the oldest animal of that
// type). They cannot select which specific animal they would
// like. Create the data structures to maintain this system
// and implement operations such as enqueue, dequeueAny, 
// dequeueDog, and dequeueCat. You may use the built-in 
// Linked List data structure.

class AnimalShelter {
  constructor() {
    this._catData = new Queue()
    this._dogData = new Queue()
  }

  enqueue(element) {
    if(element.type === 'dog') {
      this._dogData.enqueue(element)
    } else if (element.type === 'cat') {
      this._catData.enqueue(element)
    } else {
      return
    }
  }

  dequeue() {
    if(this._catData.isEmpty() && this._dogData.isEmpty()) {
      return 
    }

    if(!this._catData.isEmpty() && this._dogData.isEmpty()) {
      return this._catData.dequeue()
    }

    if(this._catData.isEmpty() && !this._dogData.isEmpty()) {
      return this._dogData.dequeue()
    }

    if(this._catData.peek().arrival > this._dogData.peek().arrival) {
      return this._catData.dequeue()
    } else {
      return this._dogData.dequeue()
    }

  }

  dequeueDog() {
    if(this._dogData.isEmpty()) {
      return 
    }

    return this._dogData.dequeue()
  }

  dequeueCat() {
    if(this._catData.isEmpty()) {
      return
    }

    return this._dogData.dequeue()
  }


}

class Animal {
  constructor(name, type, arrival) {
    this._name = name
    this._type = type
    this._arrival = arrival
  }

  get name() {
    return this._name
  }

  get type() {
    return this._type
  }

  get arrival() {
    return this._arrival
  }
}

const pet = new Animal('cooper', 'dog', new Date())
const pet2 = new Animal('dina', 'cat', new Date())

const shelter = new AnimalShelter()
shelter.enqueue(pet)
shelter.enqueue(pet2)
shelter.enqueue(pet)
shelter.enqueue(pet2)

console.log(shelter.dequeueCat())
console.log(shelter.dequeueCat())
console.log(shelter.dequeueCat())



