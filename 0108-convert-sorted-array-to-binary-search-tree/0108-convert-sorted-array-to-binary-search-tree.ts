/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function sortedArrayToBST(nums: number[]): TreeNode | null {
   const createBinary = (l: number, r: number, ) => {
    const middle = Math.floor((l + r)/2);
    const leftNode = middle - 1 >= l ? createBinary(l, middle - 1) : null;
    const rightNode = middle + 1 <= r ? createBinary(middle + 1, r) : null;
    let root: TreeNode = {
        val: nums[middle],
        left: leftNode,
        right: rightNode
    }
    return root;
}
    return createBinary(0, nums.length - 1);
};