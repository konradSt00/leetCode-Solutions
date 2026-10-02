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

function preorderTraversal(root: TreeNode | null): number[] {
    const result: Array<number> = [];
const traversal = (root: TreeNode) => {
    if(root == null) return;
    result.push(root.val);
    root.left && traversal(root.left);
    root.right && traversal(root.right);
}
traversal(root)
return result;
};