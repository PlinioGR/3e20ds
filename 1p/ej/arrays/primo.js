var n=2;
var x=2;
var d=0;
var p=[];
for(var i=0;i<10;n++){
    for(;x<=n;x++){
        if(n%x==0){
            d++;
        }
    }
    if(d==1){
        p[i]=n;
        console.log(p[i]+"\n");
        i++;
    }
    d=0;
    x=2;
}