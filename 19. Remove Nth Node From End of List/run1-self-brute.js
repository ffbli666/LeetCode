/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    if (head === null) {
        return null;
    }
    let first = head;
    let list = [];
    while (head !== null) {
        list.push(head);
        head = head.next;
    }
    if (list.length === 1 && n > 0) {
        return null;
    }
    let preNode = list[list.length - n - 1];
    if (!preNode) {
        return list[list.length - n + 1];
    }
    preNode.next = preNode.next.next;
    return first;
};

module.exports = removeNthFromEnd;