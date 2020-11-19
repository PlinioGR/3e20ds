var S=[31,1,4,2,32];
var c=[];
function combi(prefix, S){
    for(let i=0;i<S.length;i++){
        c.push(prefix+S[i]);
        combi(prefix+S[i],S.slice(i+1));
        }
    }
combi('',S);
console.log(c);
