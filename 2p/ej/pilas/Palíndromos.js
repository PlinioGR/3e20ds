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

function Palindromo(word) {
    var s = new Stack();
    for (var i = 0; i < word.length; ++i) {
        s.push(word[i]);
    }
    var rword = "";
    while (s.length() > 0) {
        rword += s.pop();
    }
    if (word == rword) {
        return palabra+" es un palindromo";
    }
    else {
        return palabra+" no es un palindromo";
    }
}

var palabra = "solos";
console.log(Palindromo(palabra));
palabra = "sopa";
console.log(Palindromo(palabra));
