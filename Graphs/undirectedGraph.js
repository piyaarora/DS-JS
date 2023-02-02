// Adjacency matrix
const matrix = [
    [0, 1, 0],
    [1, 0, 1],
    [0, 1, 0]
]

console.log(matrix[0][0])
console.log(matrix[0][1])
console.log('******************')

//Adjacency list
const adjList = {
    'A': ['B'],
    'B': ['A', 'C'],
    'C': ['B'],
}

console.log(adjList['A'])
console.log(adjList['B'])
console.log(adjList['C'])
console.log('******************')

//Add vertex and edge for undirected graph
class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = new Set()
        }
    }
    addEdges(vertex1, vertex2) {
        //check if vertices exists or not if not that add
        if (!this.adjacencyList[vertex1]) {
            this.addVertex(vertex1)
        }
        if (!this.adjacencyList[vertex2]) {
            this.addVertex(vertex2)
        }

        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    // helper method print adjacency list
    display() {
        for (let vertex in this.adjacencyList) {
            console.log(vertex + ' -> ', [...this.adjacencyList[vertex]])
        }
    }
    // to check if edge exists between two given vertices
    hasEdge(vertex1, vertex2) {
        return this.adjacencyList[vertex1].has(vertex2) && this.adjacencyList[vertex2].has(vertex1)
    }

    //delete edge
    removeEdge(vertex1, vertex2) {
        if (!this.hasEdge(vertex1, vertex2)) {
            console.log('Edge does not exist')
        }
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }

    //delete vertex
    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            return
        }
        for (let adjVertex of this.adjacencyList[vertex]) {
            this.removeEdge(vertex, adjVertex)
        }
        delete this.adjacencyList[vertex];
    }
}

const graph = new Graph();
graph.addVertex('A')
graph.addVertex('B')
graph.addVertex('C')

graph.addEdges('A', 'B')
graph.addEdges('B', 'C')

graph.display()
console.log('******************')

console.log(graph.hasEdge('A', 'C'))
console.log(graph.hasEdge('B', 'C'))

console.log('******************')
graph.removeEdge('A', 'C')
graph.removeEdge('A', 'B')
graph.display()

console.log('******************')
graph.removeVertex('B');
graph.display()

