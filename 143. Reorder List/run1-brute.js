/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        let nextTemp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};
var reorderList = function (head) {
    let fast = head;
    let slow = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let cut = slow.next;
    slow.next = null;

    let right = reverseList(cut);
    let left = head;
    while(left && right) {
        let leftNext = left.next;
        let rightNext = right.next;
        left.next = right;
        right.next = leftNext;
        left = leftNext;
        right = rightNext;
    }
    return head;
};

module.exports = reorderList;
