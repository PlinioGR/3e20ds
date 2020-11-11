console.log('Si son las 10am, ¿qué horas fueron hace 2500hrs?');
var h=10;
var n=-2500;
var f=-1*((h+n)-(Math.ceil((h+n)/24)*24));

if (f>12){
    f=f-12;
    console.log('Fueron las '+f+' pm');
}
else{
console.log('Fueron las '+f+' am');
}