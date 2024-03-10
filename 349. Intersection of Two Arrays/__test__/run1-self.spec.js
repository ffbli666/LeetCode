const intersection = require('../run1-self.js');
describe('2864. Maximum Odd Binary Number', () => {
    test('nums1 = [1,2,2,1], nums2 = [2,2] to equal [2]', () => {
        expect(intersection([1, 2, 2, 1], [2, 2])).toEqual([2]);
    });
    test('nums1 = [4,9,5], nums2 = [9,4,9,8,4] to equal [9,4]', () => {
        expect(intersection([4, 9, 5], [9, 4, 9, 8, 4])).toEqual([9, 4]);
    });
});
