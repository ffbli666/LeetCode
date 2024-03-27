const numSubarrayProductLessThanK = require('../run1-sliding-window.js');

describe('713. Subarray Product Less Than K', () => {
    test('nums = [10,5,2,6], k = 100 to equal 8', () => {
        expect(numSubarrayProductLessThanK([10, 5, 2, 6], 100)).toBe(8);
    });
    test('nums = [1,2,3], k = 0 to equal 0', () => {
        expect(numSubarrayProductLessThanK([1, 2, 3], 0)).toBe(0);
    });
});
