function isIsomorphic(s: string, t: string): boolean {
    if(s.length !== t.length) return false;

    const mappingS = new Map<string, string>();
    const mappingT = new Map<string, string>();

    for(let i = 0; i < s.length; i ++){
        const alreadyMapped = mappingS.get(s[i])

        if(alreadyMapped == null) {
            if(!!mappingT.get(t[i])) return false;
            mappingT.set(t[i], s[i]);
            mappingS.set(s[i], t[i]);
        } else {
            if(alreadyMapped === t[i]) {
                // ok - do nothing
            } else {
                return false;
            }
        }
    }

    return true;
};