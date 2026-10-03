function findK(s: number, e: number, nums: number[]): number {
    if(e - s <= 1) return nums[s] > nums[e] ? s : e;
    const sNum = nums[s];
    const eNum = nums[e];
    if(sNum < eNum) return s;
    const mid = Math.floor((s + e)/2);
    const midNum = nums[mid];

    if(sNum > midNum) return findK(s, mid, nums);
    if(midNum > eNum) return findK(mid, e, nums);
    return -1;
}

function binarySearch(arr: number[], target: number): number {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      low = mid + 1; // Discard the left half
    } else {
      high = mid - 1; // Discard the right half
    }
  }
  return -1; // Target not found
}

function search(nums: number[], target: number): number {
    if(nums[0] < nums[nums.length-1]) return binarySearch(nums, target)
    if(nums.length < 3) {
        for(let i = 0; i < 3; i ++) {
            if(nums[i] == target) return i;
        }
        return -1;
    }
    const k = findK(0, nums.length - 1, nums);

    if(nums[k] == target) return k;
    if(k == -1) return binarySearch(nums, target);
    else if(target <= nums[k] && target >= nums[0]) return binarySearch(nums.slice(0, k + 1), target);
    else if(target < nums[0]) {
        const result = binarySearch(nums.slice(k + 1, nums.length), target);
        return result > -1 ? result + k + 1 : -1;
    }
    return -1;
};