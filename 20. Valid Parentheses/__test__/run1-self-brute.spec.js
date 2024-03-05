const isValid = require('../run1-self-brute.js');
describe('20. Valid Parentheses', () => {
    test('"()" to equal true', () => {
        expect(isValid("()")).toBe(true);
    });
    test('"()[]{}" to equal true', () => {
        expect(isValid("()[]{}")).toBe(true);
    });
    test('"(]" to equal false', () => {
        expect(isValid("(]")).toBe(false);
    });
    test('"([{}])" to equal true', () => {
        expect(isValid("([{}])")).toBe(true);
    });
    test('"[" to equal false', () => {
        expect(isValid("[")).toBe(false);
    });
    test('"((" to equal false', () => {
        expect(isValid("((")).toBe(false);
    });
});
