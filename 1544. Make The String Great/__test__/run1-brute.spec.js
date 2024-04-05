const makeGood = require('../run1-brute.js');


describe('1544. Make The String Great', () => {
    test('s = "leEeetcode" to equal "leetcode"', () => {
        expect(makeGood("leEeetcode")).toBe("leetcode");
    });
    test('s = "abBAcC" to equal ""', () => {
        expect(makeGood("abBAcC")).toBe("");
    });
    test('s = "s" to equal "s"', () => {
        expect(makeGood("s")).toBe("s");
    });
});
