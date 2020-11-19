var x=4;
var p=1;
var f;
var s;
for(var i=0;i<10;i++){
    f=factorial(p);
    s=Math.pow(x,p)/f;
    if(i%2!=0){
        s=s*-1;
    }
    console.log(s);
    p=p+2;
}

function factorial(n) {
    if (n<=1) return 1;
    return n* factorial(n-1);
}