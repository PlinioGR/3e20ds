var n=2;
var x;
var d;
for(var i=0;i<10;n++){
    x=2;
    d=0;
    for(;x<=n;x++){
        if(n%x==0){
            d++;
        }
    }
    if(d==1){
        console.log(n+"\n");
        i++;
    }
}
