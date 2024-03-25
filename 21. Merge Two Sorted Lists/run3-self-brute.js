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
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}
var mergeTwoLists = function (list1, list2) {
    if (list1 === null) {
        return list2;
    }
    if (list2 === null) {
        return list1;
    }
    let curr = new ListNode(0);
    let head = curr;
    while (list1 !== null || list2 !== null) {
        if (list1 === null) {
            curr.next = list2;
            list2 = list2.next;
        } else if (list2 === null) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            if (list1.val < list2.val) {
                curr.next = list1;
                list1 = list1.next;
            } else {
                curr.next = list2;
                list2 = list2.next;
            }
        }
        curr = curr.next;
    }
    return head.next;
};

module.exports = mergeTwoLists;