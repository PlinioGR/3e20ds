const nom = {};
var n=20;
for(var i=0;i<n;i++){
    var x=rn();
    nom[i]=('name'+x.toString());
}
console.log(nom);
function rn(){
    var r;
    r=Math.floor(Math.random() * (11 - 1)) + 1;    
    return r;
}