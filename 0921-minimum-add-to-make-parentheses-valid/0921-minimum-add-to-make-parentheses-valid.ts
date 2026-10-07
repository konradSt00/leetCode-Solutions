function minAddToMakeValid(s: string): number {
    let result = 0;
    let last = null;
    if(s?.length > 0) {
        let left = 0, right = 0;
        for(let i = 0; i < s.length ; i ++) {
            if(s[i]=='(') {
                if(last == ')') {
                    result += right;
                    right = 0;
                }
                last = '(';
                left++;
            }
            if(s[i] == ')') {
                last = ')';
                if(left > 0) {
                    left --;
                } else {
                    right ++;
                }
            }
        }
        return result + left + right;
    }
    return 0;
};