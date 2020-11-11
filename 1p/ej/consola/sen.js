var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese cuantos números quiere que contenga la serie: ', (n) => {
    rl.question('Ingrese la base: ', (x) => {
        sen(n,x);
    
        rl.close();    
    });    
});

function sen(n,x){
var s;
var p=1;
var f;
for(var i=0;i<n;i++){
    f=p;
    for(var m=1;m<p;m++){
        f=f*n;
    }
    s=Math.pow(x,p)/f;
    if(i%2!=0){
        s=s*-1;
    }
    console.log(s);
    p=p+2;
}
}