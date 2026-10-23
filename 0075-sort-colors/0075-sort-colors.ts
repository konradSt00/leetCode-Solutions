/**
 Do not return anything, modify nums in-place instead.
 */

function sortColors(nums: number[]): void {
    const counter = [0, 0, 0]
     function findNext() {
    if(counter[0] > 0) return 0;
    else if(counter[1] > 0) return 1;
    else if(counter[2] > 0) return 2;
 }
    for(let i = 0; i < nums.length; i ++) {
        counter[nums[i]]++;
    }
    let current = findNext();

    for(let j = 0; j < nums.length; j++) {
        nums[j] = current;
        counter[current]--;
        if(0 == counter[current]) current = findNext()
    }
};