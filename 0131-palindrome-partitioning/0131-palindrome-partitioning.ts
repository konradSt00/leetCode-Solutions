function isPalindrome(s: string): boolean {
    if(s.length == 0) return false;
    if(s.length == 1) return true;
    for(let i = 0; i < Math.floor(s.length/2); i ++) {
        if(s[i] !== s[s.length - 1 - i]) return false;
    }
    return true;
}
function partition(s: string): string[][] {
    const results = [];
    function partitionRec(i: number, current: string, result: string[]){
        if(i - 1 == s.length && result.length > 0 && result.join('').length == s.length) results.push(result);
        else if( i - 1 == s.length) return;
        else {

            partitionRec(i + 1, current + s[i], result)

            isPalindrome(current) ? partitionRec(i + 1, s[i], [...result, current]) : partitionRec(i + 1, s[i], result) 

        }
    }
    partitionRec(1, s[0], []);
    return results;
};