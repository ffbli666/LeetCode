const strStr = require('../run2-brute.js');


describe('28. Find the Index of the First Occurrence in a String', () => {
    test('haystack = "sadbutsad", needle = "sad" to equal 0', () => {
        expect(strStr("sadbutsad", "sad")).toBe(0);
    });
    test('haystack = "leetcode", needle = "leeto" to equal -1', () => {
        expect(strStr("leetcode", "leeto")).toBe(-1);
    });
});


