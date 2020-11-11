console.log('Si hoy es lunes, ¿qué dia será en 11 dias?');
var d=1;
var n=11;
var f=(d+n)-(Math.floor((d+n)/7)*7);
switch(f){
    case 1: console.log('lunes');
            break;
    case 2: console.log('martes');
            break;
    case 3: console.log('miércoles');
            break;
    case 4: console.log('jueves');
            break;
    case 5: console.log('viernes');
            break;
    case 6: console.log('sábado');
            break;
    case 7: console.log('domingo');
            break;
}