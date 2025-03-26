/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const first = new ListNode(-1, null);
    sumNext(l1, l2, first, 0);
    return first.next
};

function sumNext(l1: ListNode | null, l2: ListNode | null, prev: ListNode, restPrev: number) {
    if(l1 == null && l2 == null && restPrev === 0) {
        //do nothing
    } else {
        const sumOnPosition = (l1?.val || 0) + (l2?.val || 0) + restPrev;
        const result = sumOnPosition % 10;
        const rest = Math.floor(sumOnPosition / 10);
        const currentNode = new ListNode(result, null);
        prev.next = currentNode;
        sumNext(l1?.next || null, l2?.next || null, currentNode, rest);
    }

}
