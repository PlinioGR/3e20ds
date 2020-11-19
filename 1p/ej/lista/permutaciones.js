var S=[31,1,4,2,32];
function permutador (input) { 
    var set =[]; 
    function permutar (arr, data) { 
        var cur, memo = data || []; 
        for (var i = 0; i < arr.length; i++) { 
            cur = arr.splice(i, 1)[0]; 
            if (arr.length === 0) {
                set.push(memo.concat([cur]));
            } 
            permutar(arr.slice(), memo.concat([cur])); 
            arr.splice(i, 0, cur); 
            } 
            return set; 
    } 
        return permutar(input); 
}

console.log(permutador(S));