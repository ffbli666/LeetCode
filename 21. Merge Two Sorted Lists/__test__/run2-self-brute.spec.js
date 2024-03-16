const mergeTwoLists = require('../run2-self-brute.js');

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

describe('21. Merge Two Sorted Lists', () => {
    test('list1 = [1,2,4], list2 = [1,3,4] to equal [1,1,2,3,4,4]', () => {
        const node4 = new ListNode(4);
        const node2 = new ListNode(2, node4);
        const node1 = new ListNode(1, node2);
        const node2_4 = new ListNode(4);
        const node2_3 = new ListNode(3, node2_4);
        const node2_1 = new ListNode(1, node2_3);
        let ret = mergeTwoLists(node1, node2_1);
        const actual = [];
        while (ret !== null) {
            actual.push(ret.val);
            ret = ret.next;
        }
        const expected = [1, 1, 2, 3, 4, 4];
        expect(actual).toEqual(expected);
    });
    test('list1 = [], list2 = [] to equal []', () => {
        const node1 = new ListNode(1);
        expect(mergeTwoLists(null, null)).toEqual(null);
    });
    test('list1 = [], list2 = [0] to equal [0]', () => {
        const node0 = new ListNode(0);
        expect(mergeTwoLists(null, node0)).toEqual(node0);
        expect(node0.next).toEqual(null);
    });
    test('list1 = [-9,3], list2 = [5,7] to equal [-9,3,5,7]', () => {
        const node2 = new ListNode(3);
        const node1 = new ListNode(-9, node2);

        const node2_2 = new ListNode(7);
        const node2_1 = new ListNode(5, node2_2);
        let ret = mergeTwoLists(node1, node2_1);
        const actual = [];
        while (ret !== null) {
            actual.push(ret.val);
            ret = ret.next;
        }
        const expected = [-9, 3, 5, 7];
        expect(actual).toEqual(expected);
    });
    test('list1 = [-10,-10,-9,-4,1,6,6], list2 = [-7] to equal [-10,-10,-9,-7,-4,1,6,6]', () => {
        const node7 = new ListNode(6);
        const node6 = new ListNode(6, node7);
        const node5 = new ListNode(1, node6);
        const node4 = new ListNode(-4, node5);
        const node3 = new ListNode(-9, node4);
        const node2 = new ListNode(-10, node3);
        const node1 = new ListNode(-10, node2);

        const node2_1 = new ListNode(-7);
        let ret = mergeTwoLists(node1, node2_1);
        const actual = [];
        while (ret !== null) {
            actual.push(ret.val);
            ret = ret.next;
        }
        const expected = [-10, -10, -9, -7, -4, 1, 6, 6];
        expect(actual).toEqual(expected);
    });
});

