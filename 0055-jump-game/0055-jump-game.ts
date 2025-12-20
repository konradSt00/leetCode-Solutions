function canJump(nums: number[]): boolean {
    function jump(index: number) {
        if((index + nums[index]) > nums.length) return true;
        if(index > nums.length - 1) return false;
        if(index == nums.length - 1) return true;
        if(nums[index] == 0) return false;
        const maxJump = nums[index];
        nums[index] = 0;
        for(let i = 1; i <= Math.min(maxJump, nums.length); i++) {
            if(jump(index + i)) return true
        }
        return false
    }
    return jump(0);
};