var n=0;
var n2=1;
var f=[];
f[0]=n2;
console.log(f[0]+"\n");
for(var i=1;i<10;i++){
    f[i]=n+n2;
    console.log(f[i]+"\n");
    n=n2;
    n2=f[i];
}