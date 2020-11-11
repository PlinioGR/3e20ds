var n=5
var x=0;
var x2=1;
var f;
for(var i=2;i<n;i++){
    f=x+x2;
    x=x2;
    x2=f;
}
console.log(f+"\n");