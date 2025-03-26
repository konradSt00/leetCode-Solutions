function lengthOfLongestSubstring(s: string): number {
    let lastOccurences: Map<string, number> = new Map(); 
    let maxLength = 0;
    let currentLength = 0;
    let currentStart = 0;
    for(let i = 0; i < s.length; i++) {

        if(lastOccurences.get(s[i]) == null || currentStart > (lastOccurences.get(s[i]) || 0)) {
            currentLength += 1;
        } else {
            if(currentLength > maxLength) maxLength = currentLength;
            currentLength = i - (lastOccurences.get(s[i]) || 0) 
            currentStart =  (lastOccurences.get(s[i]) || 0) + 1
        }
        lastOccurences.set(s[i], i);
    }
    return Math.max(maxLength, currentLength);
};