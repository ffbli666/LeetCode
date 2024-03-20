/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
    let i = 0;
    const head = list1;
    let cut;
    while (list1 !== null) {
        if ((i + 1) === a) {
            cut = list1.next;
            list1.next = list2;

            break;
        }
        list1 = list1.next;
        i++;
    }
    while (list2.next !== null) {
        list2 = list2.next;
    }
    while (cut !== null) {
        cut = cut.next;
        i++;
        if (i === b) {
            break;
        }
    }
    list2.next = cut;
    return head;
};


module.exports = mergeInBetween;