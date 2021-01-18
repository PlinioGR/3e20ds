class DoublyLinkedListNode { //clase del nodo
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

const head = Symbol("head");
const tail = Symbol("tail");

class DoublyLinkedList { //clase de la lista, contiene diferentes métodos
    constructor() {
        this[head] = null;
        this[tail] = null;
    }
    //Agregar un elemento a la lista
    add(data) {
        const newNode = new DoublyLinkedListNode(data);
        if (this[head] === null) {
            this[head] = newNode;
        } else {
            this[tail].next = newNode;
            newNode.prev = this[tail];
        }
        this[tail] = newNode;
    }
    //Acceder a un nodo
    get(index) {
            let current = this[head];
            let i = 0;
            while ((current !== null) && (i < index)) {
                current = current.next;
                i++;
            }
            return current !== null ? current.data : undefined;
    }
    //Eliminar un nodo
    remove(index) {
        if (index === 0) {
            const data = this[head].data;
            this[head] = this[head].next;

            if (this[head] === null) {
                this[tail] = null;
            } else {
                this[head].prev = null;
            }
            return data;
        }

        let current = this[head];
        let i = 0;

        while ((current !== null) && (i < index)) {
            current = current.next;
            i++;
        }

        if (current !== null) {
            current.prev.next = current.next;
            if (this[tail] === current) {
                this[tail] = current.prev;
            } else {
                current.next.prev = current.prev;
            }
            return current.data;
        }

        throw new RangeError(`Index ${index} no existe en la lista.`);
    }
    //método para poder iterar
    *values(){
        let current = this[head];
        while (current !== null) {
            yield current.data;
            current = current.next;
        }
    }
}

const doble = new DoublyLinkedList();
doble.add("x");
doble.add("y");
doble.add("z");
console.log('Primer elemento de la lista:');
console.log(doble.get(0));
doble.remove(0);
console.log('Lista después de borrar el primer elemento:');
var ar=[...doble.values()];
console.log(ar);
