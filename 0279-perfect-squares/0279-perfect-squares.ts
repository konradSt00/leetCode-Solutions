function numSquares(n: number): number {
    if(Math.floor(Math.sqrt(n)) * Math.floor(Math.sqrt(n)) === n ) return 1;
        for(let a = 5 ; a >= 0 ; a--) {
        for(let b = 0 ; b < n; b ++){
            const result = Math.pow(4, a) * (8*b + 7)
            if(result === n) return 4;
            if(result > n) break;
        }
    }

    for(let i = 1 ; i < Math.sqrt(n) ; i++) {
        for(let j = 1 ; j < Math.sqrt(n); j ++){
            const pow2 = Math.pow(i, 2) + Math.pow(j, 2);
            if(pow2 > n) break;
            if(pow2 === n) return 2;
        }
    }

    return 3;
};