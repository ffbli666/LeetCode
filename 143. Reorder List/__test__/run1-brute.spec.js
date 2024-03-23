const reorderList = require('../run1-brute.js');

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

describe('143. Reorder List', () => {
    test('[1,2,3,4] to equal [1,4,2,3]', () => {
        const node4 = new ListNode(4);
        const node3 = new ListNode(3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        expect(reorderList(node1)).toEqual(node1);
        expect(node1.next).toEqual(node4);
        expect(node4.next).toEqual(node2);
        expect(node2.next).toEqual(node3);
    });
    test('[1,2,3,4,5] to equal [1,5,2,4,3]', () => {
        const node5 = new ListNode(5);
        const node4 = new ListNode(4, node5);
        const node3 = new ListNode(3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        expect(reorderList(node1)).toEqual(node1);
        expect(node1.next).toEqual(node5);
        expect(node5.next).toEqual(node2);
        expect(node2.next).toEqual(node4);
        expect(node4.next).toEqual(node3);
    });
});

