const mergeInBetween = require('../run2-two-pointer.js');
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

describe('1669. Merge In Between Linked Lists', () => {
    test('list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002] to equal [10,1,13,1000000,1000001,1000002,5]', () => {
        const list1_6 = new ListNode(5);
        const list1_5 = new ListNode(9, list1_6);
        const list1_4 = new ListNode(6, list1_5);
        const list1_3 = new ListNode(13, list1_4);
        const list1_2 = new ListNode(1, list1_3);
        const list1_1 = new ListNode(10, list1_2);

        const list2_3 = new ListNode(1000002);
        const list2_2 = new ListNode(1000001, list2_3);
        const list2_1 = new ListNode(1000000, list2_2);

        let ret = mergeInBetween(list1_1, 3, 4, list2_1);
        const actual = [];
        while (ret !== null) {
            actual.push(ret.val);
            ret = ret.next;
        }
        const expected = [10, 1, 13, 1000000, 1000001, 1000002, 5];
        expect(actual).toEqual(expected);

    });
    test('list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004] to equal [0,1,1000000,1000001,1000002,1000003,1000004,6]', () => {
        const list1_7 = new ListNode(6);
        const list1_6 = new ListNode(5, list1_7);
        const list1_5 = new ListNode(4, list1_6);
        const list1_4 = new ListNode(3, list1_5);
        const list1_3 = new ListNode(2, list1_4);
        const list1_2 = new ListNode(1, list1_3);
        const list1_1 = new ListNode(0, list1_2);

        const list2_5 = new ListNode(1000004);
        const list2_4 = new ListNode(1000003, list2_5);
        const list2_3 = new ListNode(1000002, list2_4);
        const list2_2 = new ListNode(1000001, list2_3);
        const list2_1 = new ListNode(1000000, list2_2);

        let ret = mergeInBetween(list1_1, 2, 5, list2_1);
        const actual = [];
        while (ret !== null) {
            actual.push(ret.val);
            ret = ret.next;
        }
        const expected = [0,1,1000000,1000001,1000002,1000003,1000004,6];
        expect(actual).toEqual(expected);
    });
});

