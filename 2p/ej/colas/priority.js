function Queue() { //Crear una cola
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
    this.count = count;
}
//Ingresar un elemento a la cola
function enqueue(element) {
    this.dataStore.push(element);
}
//Sacar un elemento de la cola
function dequeue() {
    return this.dataStore.shift();
}
//Examinar el elemento del frente
function front() {
    return this.dataStore[0];
}
//Examinar el elemento de hasta atrás
function back() {
    return this.dataStore[this.dataStore.length-1];
}
//Convertir la cola a una cadena
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    }
    return retStr;
}
//Analizar si una cola está vacía
function empty() {
    if (this.dataStore.length == 0) {
        return true;
    }
    else {
        return false;
    }
}
//Contador
function count() {
    return this.dataStore.length;
}

function Patient(name, code) {
    this.name = name;
    this.code = code;
}
function dequeue() {
    var priority = this.dataStore[0].code;
    for (var i = 1; i < this.dataStore.length; ++i) {
        if (this.dataStore[i].code < priority) {
            priority = i;
        }
    }
    return this.dataStore.splice(priority,1);
}
function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i].name + " codigo: "
            + this.dataStore[i].code + "\n";
    }
    return retStr;
}

var p = new Patient("Juan",5);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Rodrigo", 4);
ed.enqueue(p);
p = new Patient("Osvaldo", 6);
ed.enqueue(p);
p = new Patient("Alex", 1);
ed.enqueue(p);
p = new Patient("Julio", 1);
ed.enqueue(p);
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Paciente siendo tratado: " + seen[0].name);
console.log("Pacientes esperando: ")
console.log(ed.toString());
// another round
var seen = ed.dequeue();
console.log("Paciente siendo tratado: " + seen[0].name);
console.log("Pacientes esperando: ")
console.log(ed.toString());
var seen = ed.dequeue();
console.log("Paciente siendo tratado: " + seen[0].name);
console.log("Pacientes esperando: ")
console.log(ed.toString());