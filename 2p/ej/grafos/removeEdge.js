class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(v) {
        if (!this.adjacencyList[v]) {
            this.adjacencyList[v] = [];
        }
    }
    addEdge(s, d) {
        if (!this.adjacencyList[s]) {
            this.addVertex(s);
        }
        if (!this.adjacencyList[d]) {
            this.addVertex(d);
        }
        this.adjacencyList[s].push(d);
        this.adjacencyList[d].push(s);
        this.adjacencyList[d].push(s);
    }
    removeEdge(s, d){
        this.adjacencyList[s]=this.adjacencyList[s].filter(v => v !== d);
        this.adjacencyList[d]=this.adjacencyList[d].filter(v => v !== s);
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
g.addEdge('D','E');
g.addEdge('D','B');
console.log('Antes de eliminar un vertice: ');
console.log(g);
g.removeEdge('E','D');
console.log('Despues de elminar un vertice');
console.log(g);