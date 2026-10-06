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


function invertTree(root: TreeNode | null): TreeNode | null {
    function invert(root: TreeNode | null): TreeNode | null {
           if(root == null) return;
    if(root.left == null && root.right == null) return;
    let tmp = root.left;
    root.left = root.right;
    root.right = tmp;
    invertTree(root.left);
    invertTree(root.right);
    }
    invert(root);
    return root;
};