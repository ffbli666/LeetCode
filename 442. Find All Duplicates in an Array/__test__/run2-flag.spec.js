const findDuplicates = require('../run2-flag.js');
describe('442. Find All Duplicates in an Array', () => {
    test('[4,3,2,7,8,2,3,1] to equal [2,3]', () => {
        expect(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1])).toEqual([2, 3]);
    });
    test('[1,1,2] to equal [1]', () => {
        expect(findDuplicates([1, 1, 2])).toEqual([1]);
    });
    test('[1] to equal 3', () => {
        expect(findDuplicates([1])).toEqual([]);
    });
});
