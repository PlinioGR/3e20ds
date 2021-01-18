class Graph {
    constructor() {
        this.adjacencyList = {};
        this.s=0;
    }
    addVertex(v) {
        if (!this.adjacencyList[v]) {
            this.adjacencyList[v] = [];
        }
        this.s++;
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
    }

    size(){
        return this.s;
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
console.log(g.size());
