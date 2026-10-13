function checkWithStartAt(haystack:string, needle:string, start: number) {
    for(let i = 0; i < needle.length; i++) {
        if(haystack[start + i] != needle[i]) return false;
    }
    return true;
}

function strStr(haystack: string, needle: string): number {
    if(needle.length > haystack.length) return -1;
    else if(needle === haystack) return 0;
    for(let start = 0; start < haystack.length - needle.length + 1; start++) {
        if(checkWithStartAt(haystack,needle,start)) return start;
    }
    return -1;
};