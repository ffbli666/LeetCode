const sortedSquares = require('../run1-self-brute.js');
describe('977. Squares of a Sorted Array', () => {
    test('[-4,-1,0,3,10] to equal [0,1,9,16,100]', () => {
        expect(sortedSquares([-4, -1, 0, 3, 10])).toEqual([0, 1, 9, 16, 100]);
    });
    test('[-7,-3,2,3,11] to equal [4,9,9,49,121]', () => {
        expect(sortedSquares([-7, -3, 2, 3, 11])).toEqual([4, 9, 9, 49, 121]);
    });
});
