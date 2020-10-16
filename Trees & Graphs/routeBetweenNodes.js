const g = require('./graph')
const directedGraph = require('./graph')
const Queue = require('../Stacks & Queues/queue')

const routeBetweenNodes = (start, end, graph) => {
  const visited = {}
  const traverseQueue = new Queue()

  traverseQueue.enqueue(start)
  
  while(!traverseQueue.isEmpty()) {
    let current = traverseQueue.dequeue().value
    let children = graph.childrenOf(current)

    visited[current] = true

    if(current === end) {
      return true
    }
    
    for(let child of children) {
      if(visited[child]) {
        continue
      }

      traverseQueue.enqueue(child)
    }
  }

  return false
}

console.log(routeBetweenNodes('d', 'c', directedGraph))
g.printGraph()