console.log('Si son las 10am, ¿qué horas serán en 345hrs?');
var h=10;
var n=345;
var f=(h+n)-(Math.floor((h+n)/24)*24);
if (f>12){
    f=f-12;
    console.log('Serán las '+f+' pm');
}
else{
console.log('Serán las '+f+' am');
}