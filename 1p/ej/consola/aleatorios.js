var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese cuantos numeros aleatorios quiere:', (n) => {
    rl.question('Defina el numero maximo del rango: ', (max) => {
        max++;
        rn(n,max);
        rl.close();
    });
});

function rn(n,max){
for(var i=0;i<n;i++){
    var r=Math.floor(Math.random() * (max - 1)) + 1;
    console.log(r);
    }
}