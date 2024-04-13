const addBinary = require('../run2-brute.js');


describe('67. Add Binary', () => {
    test('a = "11", b = "1" to equal "100"', () => {
        expect(addBinary("11", "1")).toBe("100");
    });
    test('a = "1010", b = "1011" to equal "10101"', () => {
        expect(addBinary("1010", "1011")).toBe("10101");
    });
});
