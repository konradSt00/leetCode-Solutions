function isPalindrome(x: number): boolean {
    const xString = x.toString()
    for(let i = 0; i < xString.length/2;i++) {
        if(xString[i] !== xString[xString.length-1-i]) return false
    }
    return true
};