function maxSubArray(nums: number[]) {
    let best = -100000, current = -100000;

    for(let i = 0; i<nums.length ; i ++) {
        current = Math.max(nums[i], current + nums[i]);
        best = Math.max(current, best)
    }
    return best;
}