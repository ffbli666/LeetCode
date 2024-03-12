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
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

var removeZeroSumSublists = function (head) {
    const newHead = new ListNode(0, head);
    const prefixMap = {
        '0': newHead
    };
    let prefixSum = 0;
    while (head !== null) {
        prefixSum += head.val;
        prefixMap[prefixSum] = head;
        head = head.next;
    }

    head = newHead;
    prefixSum = 0;
    while (head !== null) {
        prefixSum += head.val;
        head.next = prefixMap[prefixSum].next;
        head = head.next;
    }

    return newHead.next;
};

module.exports = removeZeroSumSublists;