class Graph {
  constructor (numberOfVertices) {
    this.numberOfVertices = numberOfVertices
    this.adjacencyList = new Map()
  }

  childrenOf(element) {
    return this.adjacencyList.get(element)
  }

  addVertex(element) {
    this.adjacencyList.set(element, [])
  }

  addDirectedEdge(start, end) {
    this.adjacencyList.get(start).push(end)
  }

  printGraph() {
    const keys = this.adjacencyList.keys()

    for(let key of keys) {
      const values = this.adjacencyList.get(key)
      console.log(`${key} -> ${values.join(' ')}`)
    }
  }
}

const g = new Graph()
g.addVertex('a')
g.addVertex('b')
g.addVertex('c')
g.addVertex('d')

g.addDirectedEdge('a', 'b')
g.addDirectedEdge('a', 'c')
g.addDirectedEdge('b', 'c')
g.addDirectedEdge('c', 'a')
g.addDirectedEdge('c', 'd')
g.addDirectedEdge('d', 'd')

module.exports = g