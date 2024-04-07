const checkValidString = require('../run2-two-stack.js');


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
