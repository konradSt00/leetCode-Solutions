function addDigits(num: number): number {
    if(num == 0) return 0;
    const mod = num % 9;
    return mod == 0 ? 9 : mod;
};