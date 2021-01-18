class LinkedListNode {  //Clase de nodo
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

const head = Symbol("head");
class LinkedList { //clase de la lista enlazada, contiene diferentes métodos
    constructor() {
        this[head] = null;
    }
    //Agregar un elemento a la lista
    add(data) {
        const newNode = new LinkedListNode(data);

        if (this[head] === null) {
            this[head] = newNode;
        } else {
            let current = this[head];
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }
    //Acceder a un elemento de la lista
    get(index) {
            let current = this[head];
            let i = 0;
            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;
            }
            return current !== null ? current.data : undefined;
    }
    //Eliminar un elemento de la lista
    remove(index) {
        if (index === 0) {
            const data = this[head].data;
            this[head] = this[head].next;
            return data;
        }
        let current = this[head];
        let previous = null;
        let i = 0;
        while ((current !== null) && (i < index)) {
            previous = current;
            current = current.next;
            i++;
        }

        if (current !== null) {
            previous.next = current.next;
            return current.data;
        }
    }
    //método para poder iterar
    *values(){
        let current = this[head];
        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }
    [Symbol.iterator]() {
        return this.values();
    }
}

const list = new LinkedList();
list.add('a');
list.add('b');
list.add('c');
list.add('d');
console.log('Primer elemento de la lista:');
console.log(list.get(0));
list.remove(0);
console.log('Lista después de borrar el primer elemento:');
var ar=[...list.values()];
console.log(ar);
