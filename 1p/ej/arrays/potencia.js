var x=4;
var p=[];
for(var y=1;y<11;y++){
    p[y]=x+'^'+y+'='+Math.pow(x,y)+'\n';
    console.log(p[y]);
}