var n=5
var f;
for(var i=1;i<=n;i++){
    f=i;
    for(var x=i-1;x>1;x--){
        f=f*x;
    }    
}
console.log(f+"\n");