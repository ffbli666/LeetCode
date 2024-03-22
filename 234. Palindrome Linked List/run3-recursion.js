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


let curr;

let solve = function (head) {
    if (!head) return true;
    ans = solve(head.next) && head.val == curr.val;
    curr = curr.next;
    return ans

}
var isPalindrome = function (head) {
    if (!head || !head.next) {
        return true;
    }
    curr = head;
    return solve(head);
};

module.exports = isPalindrome;

// cool solution