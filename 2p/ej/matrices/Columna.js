let m=[[1,2,3],[4,5,6],[7,8,9]];
class Col {
    sacarColumna(n,a){
        let c=[];
        for(let i=0; i<a.length; i++){
            c[i]=a[i][n-1];
        }
        return c;
    }
}

let Columna= new Col();
console.table(m);
console.log('Obtener la columna 2');
console.log(Columna.sacarColumna(2,m));
