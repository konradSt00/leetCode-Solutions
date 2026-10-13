/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let ind1 = nums1.length - nums2.length - 1, ind2 = nums2.length - 1;
    for(let i = 0; i < nums1.length; i++) {
        if(ind2 < 0) return;
        if(nums1[ind1] >= nums2[ind2]) {
            nums1[nums1.length - 1 - i] = nums1[ind1];
            ind1--;
        } else {
            nums1[nums1.length - 1 - i] = nums2[ind2];
            ind2--;
        }
    }
};