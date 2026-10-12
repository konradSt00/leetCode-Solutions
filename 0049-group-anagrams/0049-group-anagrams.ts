function generateKey(str: string): string {
    let letters: Map<string, number> = new Map<string, number>(), tmp, letter;
    for (let i = 0; i < str.length; i++) {
        letter = str[i]
        tmp = letters.get(letter);
        tmp != null ? letters.set(letter, tmp + 1) : letters.set(letter, 1);
    }
    let keys: string[] = [], result = '';
    letters.forEach((v, k) => keys.push(k));
    keys.sort();
    keys.forEach(k => result += `${letters.get(k)}${k}`)
    return result;
}

function groupAnagrams(strs: string[]): string[][] {
    let counters: Map<string, string[]> = new Map<string, string[]>(), key, tmp;
    for (let i = 0; i < strs.length; i++) {
        key = generateKey(strs[i]);
        tmp = counters.get(key);
        tmp != null ? tmp.push(strs[i]) : counters.set(key, [strs[i]]);
    }
    const result: string[][] = [];
    for (let [v, k] of counters.entries()) {
        result.push(k)
    }
    return result;
};