console.log('¿De un alfabeto de 10 símbolos cuantas palabras de 6 símbolos podemos generar?');
var n=10;
var r=6;
var p=fac(8)/fac(n-r);
console.log('Podemos generar '+p+' palabras');

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