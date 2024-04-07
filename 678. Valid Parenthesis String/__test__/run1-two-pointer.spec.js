const checkValidString = require('../run1-two-pointer.js');


describe('678. Valid Parenthesis String', () => {
    test('s = "()" to equal true', () => {
        expect(checkValidString("()")).toBe(true);
    });
    test('s = "(*)" to equal true', () => {
        expect(checkValidString("(*)")).toBe(true);
    });
    test('s = "(*))" to equal true', () => {
        expect(checkValidString("(*))")).toBe(true);
    });
});
