const maxDepth = require('../run2-counter.js');


describe('1614. Maximum Nesting Depth of the Parentheses', () => {
    test('s = "(1+(2*3)+((8)/4))+1" to equal 3', () => {
        expect(maxDepth("(1+(2*3)+((8)/4))+1")).toBe(3);
    });
    test(' s = "(1)+((2))+(((3)))" to equal 3', () => {
        expect(maxDepth("(1)+((2))+(((3)))")).toBe(3);
    });
    test(' s = "8*((1*(5+6))*(8/6))" to equal 3', () => {
        expect(maxDepth("8*((1*(5+6))*(8/6))")).toBe(3);
    });
});
