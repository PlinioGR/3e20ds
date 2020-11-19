const nom = {};
for(var i=0;i<10;i++){
    var n=rn();
    nom[i]=('name'+n.toString());
}
console.log(nom);

function rn(){
    var r;
    r=Math.floor(Math.random() * (11 - 1)) + 1;    
    return r;
}