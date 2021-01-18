hanoi = function (s, d, e, n) {
    if (n <= 0) {
        return
    }
    hanoi(s, e, d, n - 1)
    console.log('El Disco '+n+' se mueve de '+s+' a '+d);
    hanoi(e, d, s, n - 1);
}

hanoi('s', 'd', 'e', 4);