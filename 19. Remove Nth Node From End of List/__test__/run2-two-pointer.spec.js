const removeNthFromEnd = require('../run2-two-pointer.js');

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

describe('19. Remove Nth Node From End of List', () => {
    test('head = [1,2,3,4,5], n = 2 to equal [1,2,3,5]', () => {
        const node5 = new ListNode(5);
        const node4 = new ListNode(4, node5);
        const node3 = new ListNode(3, node4);
        const node2 = new ListNode(2, node3);
        const node1 = new ListNode(1, node2);
        expect(removeNthFromEnd(node1, 2)).toEqual(node1);
        expect(node1.next).toEqual(node2);
        expect(node2.next).toEqual(node3);
        expect(node3.next).toEqual(node5);
    });
    test('head = [1], n = 1 to equal []', () => {
        const node1 = new ListNode(1);
        expect(removeNthFromEnd(node1, 1)).toEqual(null);
    });
    test('head = [1,2], n = 1 to equal [1]', () => {
        const node2 = new ListNode(2);
        const node1 = new ListNode(1, node2);
        expect(removeNthFromEnd(node1, 1)).toEqual(node1);
        expect(node1.next).toEqual(null);
    });
    test('head = [1,2], n = 2 to equal [1]', () => {
        const node2 = new ListNode(2);
        const node1 = new ListNode(1, node2);
        expect(removeNthFromEnd(node1, 2)).toEqual(node2);
    });
});

