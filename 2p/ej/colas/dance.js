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

function Bailarin(nombre,sexo) {
    this.nombre = nombre;
    this.sexo = sexo;
}

function Bailarines(h, m, nombres) {
    var nom = nombres;
    for (var i=0; i<nom.length; ++i) {
        var b = nom[i]; //Bailarín
        var sexo = b[0];
        var nombre = b[1];
        if (sexo == "M") {
            Mujeres.enqueue(new Bailarin(nombre, sexo));
        }
        else {
            Hombres.enqueue(new Bailarin(nombre, sexo));
        }
    }
}

function Bailar(h, m) {
    console.log("Los compañeros de baile son: \n");
    while (!m.empty() && !h.empty()) {
        M = m.dequeue();
        H = h.dequeue();
        console.log("La bailarina es: " + M.nombre+" y el bailarin es: " + H.nombre);
    }
    console.log();
}

var B = [['M','Valeria'],['H','Jorge'],['H','Roman'],['M','Fernanda'],['H','Alejandro'],['M','María'],['M','Ana'],
    ['H','Gonzalo'],['H','Carlos'],['H','Alan']]; //Bailarines
var Hombres = new Queue(); //hombres
var Mujeres = new Queue(); //mujeres
Bailarines(Hombres, Mujeres, B);
Bailar(Hombres, Mujeres);
if (Hombres.count() > 0) {
    console.log("Hay " + Hombres.count() +
        " hombres esperando para bailar.");
}
if (Mujeres.count() > 0) {
    console.log("Hay " + Mujeres.count() +
        " mujeres esperando para bailar.");
}