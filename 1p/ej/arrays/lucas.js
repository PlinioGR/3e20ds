var l=[2,1];
console.log(l[0]+"\n");
console.log(l[1]+"\n");
var l1=l[0];
var l2=l[1];
n=2;

for(;n<10;n++){
    l[n]=l1+l2;
    console.log(l[n]+"\n");
    l1=l2;
    l2=l[n];   
}
