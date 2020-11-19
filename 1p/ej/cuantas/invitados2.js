console.log('En una fiesta hay 3 invitados, si cada uno saluda a todos los demás, ¿cuantos saludos ocurrieron?');
var n=3;
var r=2;
var s=fac(n)/(fac(n-r)*fac(r));
console.log('Ocurrieron '+s+' saludos');

function fac(x){
    var f=x;
    if (f==0){
        f=1;
    }
    else{
    for(var i=x-1;i>0;i--){
        f=f*i;
        }
    }
    return f;
}