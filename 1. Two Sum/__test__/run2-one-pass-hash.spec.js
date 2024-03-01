const twoSum = require('../run2-one-pass-hash');
describe('Two Sum', () => {
    test('[2, 7, 11, 15], target=9 to equal [0, 1]', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
    });
    test('[3, 2, 4], target=6 to equal [1, 2]', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
    });
    test('[3, 3], target=6 to equal [0, 1]', () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1]);
    });
    test('[3, 2, 3], target=6 to equal [0, 1]', () => {
        expect(twoSum([3, 2, 3], 6)).toEqual([0, 2]);
    });
});
