/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    if (!head || !head.next) {
        return true;
    }
    let list = [];
    while (head) {
        list.push(head.val);
        head = head.next;
    }
    let left = 0;
    let right = list.length - 1;
    while (left < right) {
        if (list[left] !== list[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
};

module.exports = isPalindrome;