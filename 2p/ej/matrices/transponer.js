let m=[[1,2,3],[4,5,6],[7,8,9]];
class matriz{
    sacarColumna(n,a){
        let c=[];
        for(let i=0; i<a.length; i++){
            c[i]=a[i][n-1];
        }
        return c;
    }

    transponer(m){
        let m2=[];
        for(let i=0; i<m.length; i++){
            m2[i]=this.sacarColumna(i+1, m);
        }
        return m2;
    }
}
console.log('Matriz original');
console.table(m);
console.log('Matriz transpuesta');
let mp= new matriz();
console.table(mp.transponer(m));