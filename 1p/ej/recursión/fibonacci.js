var n=10;
for(var i=0;i<n;i++){
    console.log(fibo(i));
}

function fibo(x){
 if(x<2){
   return x;
 }
 else{
   return fibo(x-1) + fibo(x-2);
 }
}