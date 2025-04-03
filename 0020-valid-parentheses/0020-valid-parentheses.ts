function isValid(s: string): boolean {
    let stack: string[] = []
    for(let i = 0; i < s.length; i ++) {
        if(s[i] == '(' || s[i] == '[' || s[i] == '{') stack.push(s[i])
        else if (s[i] == ')' && stack[stack.length - 1] == '(') stack = stack.slice(0, stack.length - 1)
        else if (s[i] == '}' && stack[stack.length - 1] == '{') stack = stack.slice(0, stack.length - 1)
        else if (s[i] == ']' && stack[stack.length - 1] == '[') stack = stack.slice(0, stack.length - 1)
        else return false;
    }
    return stack.length === 0
};