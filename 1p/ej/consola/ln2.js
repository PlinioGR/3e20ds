var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese cuantos numeros quiere que tenga la serie: ', (n) => {
    rl.question('Ingrese la base de la que se obtendrá el logaritmo: ', (b) => {
        ln(n);
    
        rl.close();    
    });    
});

function ln(n){
var h;
var x=1;
for(var i=0;i<n;i++){
    h=1/x;
    if(i%2!=0){
        h*=-1;
    }
    console.log(h);
    x++;
}
}