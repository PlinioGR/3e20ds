var nom = new Map();
for(var i=1;i<11;i++){
    var n=rn();
    nom.set(i,'name'+n.toString());
}
console.log(nom);
  
function rn(){
    var r;
    r=Math.floor(Math.random() * (11 - 1)) + 1;    
    return r;
}