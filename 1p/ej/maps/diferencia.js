var n=5;
var x={prueba:'prueba'};
var obj={};
const map= new Map();
const weak= new WeakMap();
map.set(n,x);
//weak.set(n,x); no es posible debido a que n no es un objeto
map.set(obj,x);
weak.set(obj,x);
console.log(map.get(obj));
console.log(weak.get(obj));
x=null;
console.log(map); //mantiene el objeto
console.log(weak); //borra el objeto permanentemente