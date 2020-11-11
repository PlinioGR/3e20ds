var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese cuantos numeros quiere que tenga la serie: ', (n) => {
    rl.question('Ingrese la base de la que se obtendrá el logaritmo: ', (b) => {    
        ln(n,b);
    
        rl.close();     
    });      
});

function ln(n,b){
    var p=2;
    var ln;
    for(var i=1;i<n;i++){
        ln=Math.pow(b,p)/p;
        if(i%2!=0){
            ln=ln*-1;
        }
        console.log(ln);
        p++;
    }
}