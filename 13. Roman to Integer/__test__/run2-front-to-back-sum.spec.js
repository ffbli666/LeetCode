const romanToInt = require('../run2-front-to-back-sum.js');
describe('13. Roman to Integer', () => {
    test('III to equal s', () => {
        expect(romanToInt('III')).toBe(3);
    });
    test('LVIII to equal false', () => {
        expect(romanToInt('LVIII')).toBe(58);
    });
    test('MCMXCIV to equal 1994', () => {
        expect(romanToInt('MCMXCIV')).toBe(1994);
    });
});
