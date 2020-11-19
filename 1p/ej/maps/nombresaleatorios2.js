var nom = new Map();
var n=15;
for(var i=1;i<=n;i++){
    var x=rn();
    nom.set(i,'name'+x.toString());
}

console.log(nom);
    
function rn(){
    var r;
    r=Math.floor(Math.random() * (21 - 1)) + 1;    
    return r;
}