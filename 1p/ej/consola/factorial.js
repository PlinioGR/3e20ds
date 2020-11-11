var f;
var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese hasta que numero llegará la serie: ', (n) => {
        fac(n);
    
        rl.close();       
});

function fac(n){
for(var i=1;i<n;i++){
    f=i;
    for(var x=1;x<i;x++){
        f=f*x;
    }
    console.log(f);
    }
}