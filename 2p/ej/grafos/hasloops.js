class Graph
{
    constructor(v)
    {   this.vertices = v;
        this.edges = 0;
        this.adj = [];
        for (let i = 0; i < this.vertices; i++){
            this.adj[i] = [];
        }
    }

    addEdge(v, w)
    {   this.adj[v].push(w);
        this.adj[w].push(v);
        this.edges++;
    }

    showGraph()
    {   for (let i = 0; i < this.vertices; ++i)
        {   let putstr = "";
            putstr += (i + " -> ");
            for (let j = 0; j < this.vertices; ++j)
            {   if (this.adj[i][j] != undefined)
                {
                    putstr += (this.adj[i][j] + ' ');
                }
            }
            console.log(putstr);
        }
    }
    hasLoops(){
    for(let i=0; i<this.adj.length; i++) {
        for(let j=0; j<this.adj[j].length; j++) {
            let n=this.adj[i][j];
                if(n===this.adj[i][j+1] && n!=undefined)
                {   console.log("hasLoops = true");
                    return true;
                }
            }
        }
        console.log("hasLoops = false");
        return false;
    }
}

g = new Graph(6);
g.addEdge(0,2);
g.addEdge(0,3);
g.addEdge(1,2);
g.addEdge(3,4);
g.addEdge(3,2);
g.addEdge(5,2);
g.showGraph();
g.hasLoops();