for(var i=0; i<10; i++){
    console.log(lucas(i));
}
function lucas(x){
    if(x==0){
        return 2;
    }
    if(x==1){
        return x;
    }
    if(x>1){
        return lucas(x-1) + lucas(x-2);
    }
}