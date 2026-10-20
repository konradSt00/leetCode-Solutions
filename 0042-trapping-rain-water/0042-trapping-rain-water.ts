

function trap(height: number[]): number {
        const L = height.length

    if(L < 3) return 0;

    let maxR = [], maxL = [], result = 0;
    maxL[0] = -1;
    maxL[1] = height[0]
    maxR[L - 1] = -1;
    maxR[L - 2] = height[L - 1];
    for(let i = 2; i < height.length; i++) {
        maxL[i] = Math.max(maxL[i - 1], height[i - 1])
        maxR[L - i - 1] = Math.max(maxR[L - i ], height[L - i])
    }
    for(let i = 0; i < height.length; i++) {
        result += Math.max(0, Math.min(maxL[i], maxR[i]) - height[i])
    }
    return result;
};
