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
    let stack = [];
    let curr = head;
    while (curr) {
        stack.push(curr.val);
        curr = curr.next;
    }
    while (head) {
        if (stack.pop() !== head.val) {
            return false;
        }
        head = head.next;
    }
    return true;
};

module.exports = isPalindrome;