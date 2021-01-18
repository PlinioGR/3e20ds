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
//Función para convertir un número a una base b
function mulBase(n, b) {
    var s = new Stack();
    do {
        s.push(n % b);
        n = Math.floor(n /= b);
    } while (n>0);
    var con = ""; //número convertido
    while (s.length()>0) {
        con += s.pop();
    }
    return con;
}

var n = 25;
var b = 3;
var n2 = mulBase(n, b);
console.log(n + " convertido a base " + b + " es " + n2);
