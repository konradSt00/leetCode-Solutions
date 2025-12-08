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

function deleteDuplicates(head: ListNode | null): ListNode | null {
    if(head == null || head.next == null) return head;
    let current: ListNode | null = head.next; 
    let prevVal = head.val;
    let lastUnique = head;
    while(current !== null) {
        if(current.val !== prevVal) {
            lastUnique.next = current;
            lastUnique = current;
            prevVal = current.val;
        }
        current = current.next;
        if((prevVal == current?.val || current?.val == null) && current?.next == null) {
            lastUnique.next = null;
        }
    }
    return head;
};