console.log('¿De un alfabeto de 8 símbolos cuantas palabras de 8 símbolos podemos generar?');
var n=8;
var p=fac(8);
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