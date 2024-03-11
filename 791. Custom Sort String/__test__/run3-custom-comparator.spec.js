const customSortString = require('../run3-custom-comparator.js');
describe('791. Custom Sort String', () => {
    test('order = "cba", s = "abcd" to equal "cbad"', () => {
        expect(customSortString("cba", "abcd")).toBe("cbad");
    });
    test('order = "bcafg", s = "abcd" to equal "bcad"', () => {
        expect(customSortString("bcafg", "abcd")).toBe("bcad");
    });
    test('order = "kqep", s = "pekeq" to equal "kqeep"', () => {
        expect(customSortString("kqep", "pekeq")).toBe("kqeep");
    });
    test('order = "exv", s = "xwvee" to equal "eexvw"', () => {
        expect(customSortString("exv", "xwvee")).toBe("eexvw");
    });
});
