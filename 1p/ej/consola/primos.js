var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question('Ingrese cuantos números desea que contenga la serie: ', (max) => {
    prim(max);
    
    rl.close();    
   
});

function prim(max){
var n=2;
var x;
var d;
for(var i=0;i<max;n++){
    x=2;
    d=0;
    for(;x<=n;x++){
        if(n%x==0){
            d++;
        }
    }
    if(d==1){
        console.log(n);
        i++;
    }
}
}