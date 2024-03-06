const hasCycle = require('../run1-hare-algorithm.js');

function ListNode(val) {
    this.val = val;
    this.next = null;
 }

describe('141. Linked List Cycle', () => {
    //head = [3,2,0,-4], pos = 1
    test('head = [3,2,0,-4], pos = 1 to equal true', () => {
        const node0 = new ListNode(3);
        const node1 = new ListNode(2);
        const node2 = new ListNode(0);
        const node3 = new ListNode(-4);
        node0.next = node0;
        node1.next = node1;
        node2.next = node2;
        node3.next = node1;
        expect(hasCycle(node0)).toBe(true);
    });
    test('head = [1,2], pos = 0 to equal true', () => {
        const node0 = new ListNode(1);
        const node1 = new ListNode(2);
        node0.next = node0;
        node1.next = node0;
        expect(hasCycle(node0)).toBe(true);
    });
    test('head = [1], pos = -1 to equal false', () => {
        const node0 = new ListNode(1);
        expect(hasCycle(node0)).toBe(false);
    });
});

