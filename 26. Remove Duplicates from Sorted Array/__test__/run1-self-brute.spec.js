const removeDuplicates = require('../run1-self-brute.js');


describe('26. Remove Duplicates from Sorted Array', () => {
    test('nums = [1,1,2] to equal 2, nums = [1,2,_]', () => {
        const nums = [1, 1, 2];
        const actual = removeDuplicates(nums);
        const expected = 2;
        const expectedNums = [1, 2];
        expect(actual).toEqual(expected);
        for (let i = 0; i < expected; i++) {
            expect(nums[i]).toBe(expectedNums[i]);
        }

    });
    test('nums = [0,0,1,1,1,2,2,3,3,4] to equal 5, nums = [0,1,2,3,4,_,_,_,_,_]', () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
        const actual = removeDuplicates(nums);
        const expected = 5;
        const expectedNums = [0, 1, 2, 3, 4];
        expect(actual).toEqual(expected);
        for (let i = 0; i < expected; i++) {
            expect(nums[i]).toBe(expectedNums[i]);
        }
    });
});

