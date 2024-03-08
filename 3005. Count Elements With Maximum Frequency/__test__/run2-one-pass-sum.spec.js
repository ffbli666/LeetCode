const maxFrequencyElements = require('../run2-one-pass-sum.js');
describe('3005. Count Elements With Maximum Frequency', () => {
    test('[1,2,2,3,1,4] to equal 4', () => {
        expect(maxFrequencyElements([1, 2, 2, 3, 1, 4])).toBe(4);
        /*
            The elements 1 and 2 have a frequency of 2 which is the maximum frequency in the array.
            So the number of elements in the array with maximum frequency is 4.
        */
    });
    test('[1,2,3,4,5] to equal 5', () => {
        expect(maxFrequencyElements([1, 2, 3, 4, 5])).toBe(5);
    });
});
