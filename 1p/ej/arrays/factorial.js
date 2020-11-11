var f=[];
var m;
for(var i=1;i<11;i++){
    m=i;
    for(var n=1;n<i;n++){
        m=m*n;
    }
    f[i]=m;
    console.log(f[i]+"\n");
}