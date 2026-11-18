function hammingDistance(x: number, y: number): number {
    let counter = 0;
    while(x > 0 || y > 0) {
        if(x%2 != y%2) counter++;
        x = Math.floor(x/2);
        y = Math.floor(y/2);
    }
    return counter;
};