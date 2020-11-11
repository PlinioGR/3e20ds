var n=5;
var j=n-1;
var p=[];
for(var i=0;i<n;i++){
    p[i]=fac(j)/(fac(i)*fac(j-i));
}
p.forEach(element => {
    console.log(element);    
})
function fac(x){
    var f=x;
    if (f==0){
        f=1;
    }
    else{
    for(var i=x-1;i>0;i--){
        f=f*i;
        }
    }
    return f;
}
