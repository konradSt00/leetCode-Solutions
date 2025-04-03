function longestCommonPrefix(strs: string[]): string {
    let result = ''
    if(strs.length == 0) return result;
    for(let signIndex = 0; true; signIndex ++) {
        if(strs[0].length <= signIndex) return result;
        const nextLetterToCheck = strs[0][signIndex];
        for(let strIndex = 0; strIndex < strs.length; strIndex++ ) {
            if(strs[strIndex].length < signIndex - 1 || strs[strIndex][signIndex] !== nextLetterToCheck) return result
        }
        result += nextLetterToCheck;
    }
};