const hasCycle = require('../run2-hare-algorithm.js');

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

describe('141. Linked List Cycle', () => {
    test('[1,2,3,4,5] to equal [3,4,5]', () => {
        const node5 = new ListNode(5);
        const node4 = new ListNode(4, node5);
        const node3 = new ListNode(3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        expect(hasCycle(node1)).toEqual(node3);
    });
    test('[1,2,3,4,5,6] to equal [4,5,6]', () => {
        const node6 = new ListNode(6);
        const node5 = new ListNode(5, node6);
        const node4 = new ListNode(4, node5);
        const node3 = new ListNode(3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        expect(hasCycle(node1)).toEqual(node4);
    });
});

