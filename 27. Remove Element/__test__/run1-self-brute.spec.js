const removeElement = require('../run1-self-brute.js');


describe('27. Remove Element', () => {
    test('[3,2,2,3], val = 3 to equal 2, nums = [2,2,_,_]', () => {
        const nums = [3, 2, 2, 3];
        const actual = removeElement(nums, 3);
        const expected = 2;
        const expectedNums = [2, 2];
        let newNums = nums.slice(0, expected).sort((a, b) => a - b);
        expect(actual).toEqual(expected);
        for (let i = 0; i < expected; i++) {
            expect(newNums[i]).toBe(expectedNums[i]);
        }

    });
    test('nums = [0,1,2,2,3,0,4,2], val = 2 to equal 5, nums = [0,1,4,0,3,_,_,_]', () => {
        const nums = [0, 1, 2, 2, 3, 0, 4, 2];
        const actual = removeElement(nums, 2);
        const expected = 5;
        const expectedNums = [0, 0, 1, 3, 4];
        let newNums = nums.slice(0, expected).sort((a, b) => a - b);
        expect(actual).toEqual(expected);
        for (let i = 0; i < expected; i++) {
            expect(newNums[i]).toBe(expectedNums[i]);
        }
    });
});

