const isPalindrome = require('../run1-self-brute.js');
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

describe('234. Palindrome Linked List', () => {
    test('head = [1,2,2,1] to equal true', () => {
        //arrage
        const node4 = new ListNode(1);
        const node3 = new ListNode(2, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        //act
        const actual = isPalindrome(node1);
        //assert
        const expected = true;
        expect(actual).toBe(expected);
    });
    test('head = [1,2] to equal false', () => {
        //arrage
        const node2 = new ListNode(2);
        const node1 = new ListNode(1, node2);
        //act
        const actual = isPalindrome(node1);
        //assert
        const expected = false;
        expect(actual).toBe(expected);
    });
});

