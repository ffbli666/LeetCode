const findDuplicate = require('../run2-slow-and-fast.js');
describe('287. Find the Duplicate Number', () => {
    test('[1,3,4,2,2] to equal 2', () => {
        expect(findDuplicate([1, 3, 4, 2, 2])).toBe(2);
    });
    test('[3,1,3,4,2] to equal 3', () => {
        expect(findDuplicate([3, 1, 3, 4, 2])).toBe(3);
    });
    test('[3,3,3,3,3] to equal 3', () => {
        expect(findDuplicate([3, 3, 3, 3, 3])).toBe(3);
    });
});
