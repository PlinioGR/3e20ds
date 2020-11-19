var n=10;
var c={'Prueba':'prueba'}; 
var set=new Set();
var weak=new WeakSet();
set.add(n);
//weak.add(n); no es posible debido a que no es un objeto
set.add(c);
weak.add(c);
console.log(set.has(c));
console.log(weak.has(c));
c=null;
console.log(set); //mantiene el objeto
console.log(weak); //borra el objeto permanentemente