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

var middleNode = function (head) {
    if (head.next === null) {
        return head;
    }
    let count = 1;
    let go = head;
    while (go.next !== null) {
        go = go.next;
        count++;
    }
    let mid = Math.round(count / 2) + ((count % 2 !== 0) ? 0 : 1);
    for (let i = 1; i < mid; i++) {
        head = head.next;
    }
    return head;
};

module.exports = middleNode;
/*
    Tortoise and Hare Algorithm
*/