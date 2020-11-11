var x=4;
var p=1;
var f;
var s=[];
for(var i=0;i<10;i++){
    f=p;
    for(var j=1;j<p;j++){
        f=f*j;
    }
    s[i]=Math.pow(x,p)/f;
    if(i%2!=0){
        s[i]=s[i]*-1;
    }
    console.log(s[i]+'\n');
    p=p+2;
}