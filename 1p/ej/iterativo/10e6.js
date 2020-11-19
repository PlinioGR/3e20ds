var inicio = new Date();
var n=[];
var e=Math.pow(10,6);
var inv=0;
var x=e-1;
for (let i=0; i<e; i++){
      n.push(rn(x)); 
    } 
var t;
for(let i=1; i<n.length; i++){
  t=n[i];
  let j=i-1;
  while(j>=0 && n[j]>t){
      n[j+1]=n[j];
      j--;
      inv++;
  }
  n[j+1]=t;
}
var f=new Date()-inicio;
console.log(n);
console.log('¿Cuántas inversiones requiere en promedio?: '+inv);
console.log('¿Cuánto tiempo requiere en promedio?: '+f/1000+' segundos');
function rn(x){
    var r;
    r=Math.floor(Math.random() * (x - 1)) + 1;    
    return r;
}   