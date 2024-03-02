const isPalindrome = require('../run2-string-reverse.js');
describe('9. Palindrome Number', () => {
    test('121 to equal true', () => {
        expect(isPalindrome(121)).toBe(true);
    });
    test('-121 to equal false', () => {
        expect(isPalindrome(-121)).toBe(false);
    });
    test('10 to equal false', () => {
        expect(isPalindrome(10)).toBe(false);
    });
});
