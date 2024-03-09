const getCommon = require('../run2-self-map.js');
describe('2864. Maximum Odd Binary Number', () => {
    test('nums1 = [1,2,3], nums2 = [2,4] to equal 2', () => {
        expect(getCommon([1, 2, 3], [2, 4])).toBe(2);
    });
    test('nums1 = [1,2,3,6], nums2 = [2,3,4,5] to equal 2', () => {
        expect(getCommon([1, 2, 3, 6], [2, 3, 4, 5])).toBe(2);
    });
});
