var n=1;
for(var i=0;i<10;n++){
    if(n%2!=0){
        if(i%2==0){
            n=n*-1;
        }
        console.log(n+"\n");
        i++;
    }
    if(n<0){
        n=n*-1;
    }
}