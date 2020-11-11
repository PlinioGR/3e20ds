var n=5;
var p=2;
var x;
var d;
for(var i=0;i<n;p++){
    x=2;
    d=0;
    for(;x<=p;x++){
        if(p%x==0){
            d++;
        }
    }
    if(d==1){
        i++;
    }
}
console.log(p-1);