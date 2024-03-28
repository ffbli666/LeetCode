const maxSubarrayLength = require('../run1-sliding-window.js');

describe('2958. Length of Longest Subarray With at Most K Frequency', () => {
    test('nums = [1,2,3,1,2,3,1,2], k = 2 to equal 6', () => {
        expect(maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2)).toBe(6);
    });
    test('nums = [1,2,1,2,1,2,1,2], k = 1 to equal 2', () => {
        expect(maxSubarrayLength([1, 2, 1, 2, 1, 2, 1, 2], 1)).toBe(2);
    });
    test('[5,5,5,5,5,5,5], k = 4 to equal 4', () => {
        expect(maxSubarrayLength([5, 5, 5, 5, 5, 5, 5], 4)).toBe(4);
    });
});
