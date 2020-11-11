var S=[3,1,4,2,3];
var r=0;
for(var i=0;i<5;i++){
    for(var j=i+1;j<5;j++){
        if(S[i]==S[j]){
            r++;
        }
    }
}
console.log("Existen "+r+" numeros repetidos");
