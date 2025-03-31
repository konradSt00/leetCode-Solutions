function reverse(x: number): number {
    if(x < -Math.pow(2, 31)) return 0;

    let result = 0;
    let xCopy = Math.abs(x);

    while(xCopy !== 0) {
        result *= 10;
        result += (xCopy % 10)
        xCopy = Math.floor(xCopy / 10)
    }
    if (result > 0x7FFFFFFF) return 0
    return x < 0 ? -1 * result : result;
};