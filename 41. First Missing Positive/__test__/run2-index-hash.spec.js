const firstMissingPositive = require('../run2-index-hash.js');


describe('41. First Missing Positive', () => {
    test('nums = [1,2,0] to equal 3', () => {
        expect(firstMissingPositive([1, 2, 0])).toBe(3);
    });
    test('[3,4,-1,1] to equal 2', () => {
        expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
    });
    test('[7,8,9,11,12] to equal 1', () => {
        expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
    });
    test('[1] to equal 2', () => {
        expect(firstMissingPositive([1])).toBe(2);
    });
});

