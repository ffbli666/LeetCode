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

var reverseList = function (head) {
    if (!head) {
        return null;
    }
    const list = [];
    while (head) {
        list.push(head);
        head = head.next;
    }

    let length = list.length;
    list[0].next = null;
    for (let i = 0; i < length - 1; i++) {
        list[i + 1].next = list[i];
    }

    return list[length - 1];
};

module.exports = reverseList;
