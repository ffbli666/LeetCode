const productExceptSelf = require('../run2-O(1)extra-space.js');
describe('238. Product of Array Except Self', () => {
    test('[1,2,3,4] to equal [24,12,8,6]', () => {
        expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
    });
    test('[-1,1,0,-3,3] to equal [0,0,9,0,0]', () => {
        expect(productExceptSelf([-1, 1, 0, -3, 3]).map((n) => Math.abs(n))).toEqual([0, 0, 9, 0, 0]);
    });

});

