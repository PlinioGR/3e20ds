var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un numero: ', (x) => {
    rl.question('Ingrese hasta que numero llegará la tabla', (n) => {
        pot(x,n);
    
        rl.close();    
    });    
});

function pot(x,n){
    var p;
    for(var y=1;y<=n;y++){
        p=Math.pow(x,y);
        console.log(x+'^'+y+'='+p);   
    }
}