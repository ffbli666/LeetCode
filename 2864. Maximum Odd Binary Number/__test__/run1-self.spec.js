const maximumOddBinaryNumber = require('../run1-self.js');
describe('2864. Maximum Odd Binary Number', () => {
    test('010 to equal 001', () => {
        expect(maximumOddBinaryNumber('010')).toBe('001');
    });
    test('0101 to equal 1001', () => {
        expect(maximumOddBinaryNumber('0101')).toBe('1001');
    });
});
