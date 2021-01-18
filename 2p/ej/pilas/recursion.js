function Stack() { //función para crear una pila
        this.dataStore = [];
        this.top = 0;
        this.push = push;
        this.pop = pop;
        this.peek = peek;
        this.clear = clear;
        this.length = length;
}
//Agregar un nuevo elemento
function push(element) {
    this.dataStore[this.top++] = element;
}
//Retornar el elemento de hasta arriba de la pila
function peek() {
    return this.dataStore[this.top-1];
}
//Eliminar un elemento
function pop() {
    return this.dataStore[--this.top];
}
//Limpiar la pila
function clear() {
    this.top = 0;
}
//Cuántos elementos tiene la pila
function length() {
    return this.top;
}

function fact(n) { //Implementación de una función recursiva con una pila, para obtener el factorial de un numero
    var s = new Stack();
    while (n > 1) {
        s.push(n--);
    }
    var product = 1;
    while (s.length() > 0) {
        product *= s.pop();
    }
    return product;
}

console.log('El factorial de 6 = '+fact(6));