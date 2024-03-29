const countSubarrays = require('../run1-sliding-window.js');

describe('2958. Length of Longest Subarray With at Most K Frequency', () => {
    test('nums = [1,3,2,3,3], k = 2 to equal 6', () => {
        expect(countSubarrays([1, 3, 2, 3, 3], 2)).toBe(6);
    });
    test('nums = [1,4,2,1], k = 3 to equal 0', () => {
        expect(countSubarrays([1, 4, 2, 1], 3)).toBe(0);
    });
});
