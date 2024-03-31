const searchInsert = require('../run2-self-binary-search.js');


describe('35. Search Insert Position', () => {
    test('nums = [1,3,5,6], target = 5 to equal 2', () => {
        expect(searchInsert([1, 3, 5, 6], 5)).toBe(2);
    });
    test('nums = [1,3,5,6], target = 2 to equal 1', () => {
        expect(searchInsert([1, 3, 5, 6], 2)).toBe(1);
    });
    test(' nums = [1,3,5,6], target = 7 to equal 4', () => {
        expect(searchInsert([1, 3, 5, 6], 7)).toBe(4);
    });
});


