const minRemoveToMakeValid = require('../run1-brute.js');


describe('1249. Minimum Remove to Make Valid Parentheses', () => {
    test('s = "lee(t(c)o)de)" to equal "lee(t(c)o)de"', () => {
        expect(minRemoveToMakeValid("lee(t(c)o)de)")).toBe("lee(t(c)o)de");
    });
    test('s = "a)b(c)d" to equal ""', () => {
        expect(minRemoveToMakeValid("a)b(c)d")).toBe("ab(c)d");
    });
    test('s = "))((" to equal ""', () => {
        expect(minRemoveToMakeValid("))((")).toBe("");
    });
});
