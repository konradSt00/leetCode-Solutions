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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let nPlusOneElementsBackNode = null;
    let current = head;
    for(let i = 0; i < n - 1; i ++) {
        if(current.next == null) return head;
        current = current.next;
    }
    if(current.next == null) return head.next;
    current = current.next;
    nPlusOneElementsBackNode = head;
    while(current.next !== null) {
        current = current.next;
        nPlusOneElementsBackNode = nPlusOneElementsBackNode.next;
    }
    nPlusOneElementsBackNode.next = nPlusOneElementsBackNode.next.next;
    return head;
};