const middleNode = require('../run1-brute.js');

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

describe('876. Middle of the Linked List', () => {
    test('[1,2,3,4,5] to equal [3,4,5]', () => {
        const node5 = new ListNode(5);
        const node4 = new ListNode(4, node5);
        const node3 = new ListNode(3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        expect(middleNode(node1)).toEqual(node3);
        expect(node3.next).toEqual(node4);
        expect(node4.next).toEqual(node5);
    });
    test('[1,2,3,4,5,6] to equal [4,5,6]', () => {
        const node6 = new ListNode(6);
        const node5 = new ListNode(5, node6);
        const node4 = new ListNode(4, node5);
        const node3 = new ListNode(3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        expect(middleNode(node1)).toEqual(node4);
        expect(node4.next).toEqual(node5);
        expect(node5.next).toEqual(node6);
    });
});

