function longestPalindrome(s: string): string {
    let results: string[][] = [...Array(s.length)].map((e, i) => Array(i + 1));
    let result  = '';
    for(let i = 0; i < s.length ; i ++) { // end
        for(let j = 0; j <= i ; j ++) { //start
            if(i == j) results[i][j] = s[i];
            else if(i - j == 1)  results[i][j] = s[i] === s[j] ? s[i] + s[i] : ''
            else results[i][j] = (s[i] === s[j] && results[i - 1][j + 1].length == i - j - 1) ? s[i] + results[i - 1][j + 1] + s[i] : results[i - 1][j + 1]
            if(result.length < results[i][j].length) result = results[i][j]
        }
    }
    return result;
};