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
    const map = {};
    while (list1 !== null || list2 !== null) {
        if (list1 !== null) {
            const currList1 = list1;
            list1 = list1.next;
            if (map[currList1.val] === undefined) {
                currList1.next = null;
                map[currList1.val] = {
                    head: currList1,
                    tail: currList1,
                };
            } else {
                currList1.next = map[currList1.val].head;
            }
            map[currList1.val].head = currList1;
        }
        if (list2 !== null) {
            const currList2 = list2;
            list2 = list2.next;
            if (map[currList2.val] === undefined) {
                currList2.next = null;
                map[currList2.val] = {
                    head: currList2,
                    tail: currList2,
                };
            } else {
                currList2.next = map[currList2.val].head;
            }
            map[currList2.val].head = currList2;
        }
    }
    let head;
    let keys = Object.keys(map).sort((a, b) => a - b);
    for (let i = 0; i < keys.length; i++) {
        if (i === 0) {
            head = map[keys[i]].head;
        }
        else {
            map[keys[i - 1]].tail.next = map[keys[i]].head;
        }
    }
    return head;
};

module.exports = mergeTwoLists;