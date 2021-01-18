function Node(data) { //clase de un nodo
    this.data = data;
    this.children = [];
}
//clase de un arbol
class Tree {
    constructor() {
        this.root = null;
    }
    //Agregar un nuevo nodo
    add(data, toNodeData)  {
        const node = new Node(data);
        const parent = toNodeData ? this.findBFS(toNodeData) : null;
        if(parent)
            parent.children.push(node);
        else
        if(!this.root)
            this.root = node;
        else
            return 'Intentó guardar nodo en root, root ya existe.'
    }
    //Encontrar BFS
    findBFS(data) {
        const queue = [this.root];
        let _node = null;
        this.traverseBFS((node) => {
            if (node.data == data)
                _node = node;
        })
        return _node;
    }

    traverseBFS(cb) {
        const queue = [this.root]
        if(cb)
            while(queue.length) {
                const node = queue.shift();
                cb(node)
                for(const child of node.children)
                    queue.push(child)
            }
    }
}

let tree = new Tree();

tree.add('Nodo1');
tree.add('Nodo2', 'Nodo1');
tree.add('Nodo3', 'Nodo1');
tree.add("Nodo4", "Nodo2");
tree.add("Nodo5", "Nodo2");
tree.add("Nodo6", "Nodo3");

tree.traverseBFS((node) => {console.log('Nodo actual: ', node)});