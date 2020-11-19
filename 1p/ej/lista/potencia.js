var S=[31,1,4,2,32];
function powerset(S){
    const maxIndex = S.length - 1; 
    let r = [ [] ];
    S.forEach(el => {
    r.forEach(set => {
        r.push([...set, el]);
        })
    })
    return r;
}  

console.log(powerset(S)); 