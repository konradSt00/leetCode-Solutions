/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     left: _Node | null
 *     right: _Node | null
 *     next: _Node | null
 *     constructor(val?: number, left?: _Node, right?: _Node, next?: _Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connectRecu(root: _Node | null) {
    if(!root || root?.left == null) return;
    root.left.next = root.right;
    let tmpL = root.left.right
    let tmpR = root.right.left
    while(tmpL && tmpR) {
        tmpL.next = tmpR;
        tmpL = tmpL.right;
        tmpR = tmpR.left;
    }
    if(root.left.right) {
        connectRecu(root.left);
        connectRecu(root.right);
    }
}


function connect(root: _Node | null): _Node | null {
    connectRecu(root);
    return root;
};