const reverseList = require('../run1-brute.js');

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

describe('206. Reverse Linked List', () => {
    test('head = [1,2,3,4,5] to equal [5,4,3,2,1]', () => {
        const node5 = new ListNode(5);
        const node4 = new ListNode(4, node5);
        const node3 = new ListNode(3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        expect(reverseList(node1)).toEqual(node5);
        expect(node5.next).toEqual(node4);
        expect(node4.next).toEqual(node3);
        expect(node3.next).toEqual(node2);
        expect(node2.next).toEqual(node1);
    });
    test('[1,2] to equal [2,1]', () => {
        const node2 = new ListNode(2);
        const node1 = new ListNode(1, node2);
        expect(reverseList(node1)).toEqual(node2);
        expect(node2.next).toEqual(node1);
    });
    test('[] to equal []', () => {
        expect(reverseList(null)).toEqual(null);
    });
});

