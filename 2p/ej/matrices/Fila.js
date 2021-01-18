let m=[[1,2,3],[4,5,6],[7,8,9]];
class Fil {
    sacarFila(n,a){
        let f=[];
        for(let i=0; i<a.length; i++){
            f[i]=a[n-1][i];
        }
        return f;
    }
}

let Fila= new Fil();
console.table(m);
console.log('Obtener la fila 2');
console.log(Fila.sacarFila(2,m));