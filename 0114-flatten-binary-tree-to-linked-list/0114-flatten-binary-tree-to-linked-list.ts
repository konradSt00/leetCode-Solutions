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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
    function flattenRec( root: TreeNode | null): TreeNode | undefined {
            if (root == null  ) return;
            if (!root.left && !root.right) return root;
            let tmp = root.right;
            const left = flattenRec(root.left);
            if(left) {
                root.right = root.left;
                left.right = tmp;
                root.left = null;
            }
            const right = flattenRec(root.right)
            return !!right ? right : left;
    }
    flattenRec(root);
};