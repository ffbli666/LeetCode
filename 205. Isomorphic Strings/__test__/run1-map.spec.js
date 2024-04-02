const isIsomorphic = require('../run1-map.js');


describe('205. Isomorphic Strings', () => {
    test('s = "egg", t = "add" to equal true', () => {
        expect(isIsomorphic("egg", "add")).toBe(true);
    });
    test('s = "foo", t = "bar" to equal false', () => {
        expect(isIsomorphic("foo", "bar")).toBe(false);
    });
    test('s = "paper", t = "title" to equal true', () => {
        expect(isIsomorphic("paper", "title")).toBe(true);
    });
});


