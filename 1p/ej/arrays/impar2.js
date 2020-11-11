var n=[];
var x=1;
for(var i=0;i<10;x++){
    if(x%2!=0){
        if(i%2==0){
            n[i]=x*-1;
        }
        else{
            n[i]=x;
        }
        console.log(n[i]+"\n");
        i++;
    }
}