class Graph {
    constructor() {
        this.adjacencyList = {};
        this.o=0;
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
        this.s++;
    }
    addEdge(source, destination) {
        if (!this.adjacencyList[source]) {
            this.addVertex(source);
        }
        if (!this.adjacencyList[destination]) {
            this.addVertex(destination);
        }
        this.adjacencyList[source].push(destination);
        this.adjacencyList[destination].push(source);
        this.o++;
    }

    order(){
        return this.o;
    }
}
let a=['A','B','C','D','E'];
let g= new Graph();
for(let i=0;i<a.length;i++){
    g.addVertex(a[i]);
}
g.addEdge('A','C');
g.addEdge('A','D');
g.addEdge('B','C');
g.addEdge('C','D');
g.addEdge('C','B');
g.addEdge('D','E');
g.addEdge('D','B');
g.addEdge('D','A');
console.log(g.order());