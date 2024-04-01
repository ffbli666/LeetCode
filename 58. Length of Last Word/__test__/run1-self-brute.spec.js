const lengthOfLastWord = require('../run1-self-brute.js');


describe('58. Length of Last Word', () => {
    test('"Hello World" to equal 5', () => {
        expect(lengthOfLastWord("Hello World")).toBe(5);
    });
    test('"   fly me   to   the moon  " to equal 4', () => {
        expect(lengthOfLastWord("   fly me   to   the moon  ")).toBe(4);
    });
    test('"luffy is still joyboy" to equal 6', () => {
        expect(lengthOfLastWord("luffy is still joyboy")).toBe(6);
    });
});


