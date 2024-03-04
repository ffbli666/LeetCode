const longestCommonPrefix = require('../run1-self-brute.js');
describe('14. Longest Common Prefix', () => {
    test('"flower","flow","flight" to equal fl', () => {
        expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl");
    });
    test('"dog","racecar","car" to equal ""', () => {
        expect(longestCommonPrefix(["dog","racecar","car"])).toBe("");
    });
});
