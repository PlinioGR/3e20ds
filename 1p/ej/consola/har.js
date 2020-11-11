var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese cuantos numeros quiere que tenga la serie: ', (n) => {
        har(n);
    
        rl.close();       
});

function har(n){
var h;
var x=1;
for(var i=0;i<n;i++){
    h=1/x;
    console.log(h);
    x++;
}
}