var n=5;
var l1=2;
var l2=1;
var l;
for(var i=2;i<n;i++){
    l=l1+l2;
    l1=l2;
    l2=l;   
}
console.log(l2);