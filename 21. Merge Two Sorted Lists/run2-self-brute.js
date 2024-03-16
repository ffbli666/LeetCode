/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }

    const list = [];
    while (list1 !== null || list2 !== null) {
        if (list1 !== null) {
            list.push(list1);
            list1 = list1.next;
        }
        if (list2 !== null) {
            list.push(list2);
            list2 = list2.next;
        }
    }
    list.sort((a, b) => a.val - b.val);
    for (let i = 1; i < list.length; i++) {
        list[i - 1].next = list[i];
    }
    list[list.length - 1].next = null;
    return list[0];
};

module.exports = mergeTwoLists;