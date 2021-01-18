function circularLinkedList() {
    let Node = function(element) { //función de nodo
        this.element = element;
        this.next = null;
    }

    let length = 0;
    let head = null;
    //Acceder a un nodo
    this.get = function(index) {
        if(index >= 0 && index <= length){
            let node=head;
            for(let i=0; i<index && node!=null; i++){
                node=node.next;
            }
            return node;
        }
        return undefined;
    }

    //Agregar un nodo
    this.add = function(element){
        const node = new Node(element);
        let curr;
        if(head === null){
            head = node;
        }else{
            curr = this.get(length-1);
            curr.next = node;
        }
        node.next = head;
        length++;
    }
    //Eliminar un elemento
    this.remove = function (index) {
        if(index >= 0 && index < length){
            let curr = head;
            if(index === 0){
                if(length === 1){
                    head = undefined;
                }else{
                    const removed = head;
                    curr = this.get(length - 1);
                    head = head.next;
                    curr.next = head;
                    curr = removed;
                }
            }else{
                const prev = this.get(index - 1);
                curr = prev.next;
                prev.next = curr.next;
            }
            length--;
            return curr.element;
        }
        return undefined;
    }
//Convertir la lista en array
    this.toArray = function(){
        let arr=[], curr = head;
        const temp = head.element

        while(curr){
            if(temp === curr.next.element){
                arr.push(curr.element);
                break;
            }
            arr.push(curr.element);
            curr = curr.next;
        }
        return arr;
    };

}

let circular = new circularLinkedList();
circular.add('a');
circular.add('b');
circular.add('c');
circular.add('d');
console.log('Primer elemento de la lista:');
console.log(circular.get(0));
circular.remove(0);
console.log('Lista después de borrar el primer elemento:');
console.log(circular.toArray());
