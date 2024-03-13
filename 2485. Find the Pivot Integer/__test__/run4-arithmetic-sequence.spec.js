const pivotInteger = require('../run4-arithmetic-sequence.js');

describe('2485. Find the Pivot Integer', () => {
    test('8 to equal 6', () => {
        expect(pivotInteger(8)).toEqual(6);
    });
    test('1 to equal 1', () => {
        expect(pivotInteger(1)).toEqual(1);
    });
    test('4 to equal -1', () => {
        expect(pivotInteger(4)).toEqual(-1);
    });
    test('3 to equal -1', () => {
        expect(pivotInteger(3)).toEqual(-1);
    });
    test('15 to equal -1', () => {
        expect(pivotInteger(15)).toEqual(-1);
    });
});
