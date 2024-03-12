const removeZeroSumSublists = require('../run1-prefix-sum-hash-table.js');

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
describe('1171. Remove Zero Sum Consecutive Nodes from Linked List', () => {
    test('head = [1,2,-3,3,1] to equal [3,1]', () => {
        const node5 = new ListNode(1);
        const node4 = new ListNode(3, node5);
        const node3 = new ListNode(-3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        expect(removeZeroSumSublists(node1)).toEqual(node4);
        expect(node4.next).toEqual(node5);
    });
    test('head = [1,2,3,-3,4] to equal [1,2,4]', () => {
        const node5 = new ListNode(4);
        const node4 = new ListNode(-3, node5);
        const node3 = new ListNode(3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        expect(removeZeroSumSublists(node1)).toEqual(node1);
        expect(node1.next).toEqual(node2);
        expect(node2.next).toEqual(node5);
    });
    test('head = [1,2,3,-3,-2] to equal [1]', () => {
        const node5 = new ListNode(-2);
        const node4 = new ListNode(-3, node5);
        const node3 = new ListNode(3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        expect(removeZeroSumSublists(node1)).toEqual(node1);
        expect(node1.next).toEqual(null);
    });
});
