class Graph
{
    constructor(v)
    {
        this.vertices = v;
        this.edges = 0;
        this.adj = [];

        for (let i = 0; i < this.vertices; i++)
            this.adj[i] = [];
    }

    addEdge(v, w)
    {
        this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    removeEdge(source, destination)
    {
        this.adj[source] = this.adj[source].filter(vertex => vertex !== destination);
        this.adj[destination] = this.adj[destination].filter(vertex => vertex !== source);
    }

    removeVertex(vertex){
        while(this.adj[vertex]){
            const adjVertex=this.adj[vertex].pop();
            if(adjVertex===null || adjVertex===undefined){
                break;
            }
            this.removeEdge(vertex, adjVertex);
        }
        delete this.adj[vertex];
    }
}

g = new Graph(6);
g.addEdge(0,1);
g.addEdge(0,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.addEdge(3,5);
g.addEdge(4,2);
console.log('Original')
console.log(g);
g.removeVertex(2);
console.log('Despues de eliminar un vertice');
console.log(g);