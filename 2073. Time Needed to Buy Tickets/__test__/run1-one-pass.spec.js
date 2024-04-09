const timeRequiredToBuy = require('../run1-one-pass.js');


describe('2073. Time Needed to Buy Tickets', () => {
    test('tickets = [2,3,2], k = 2 to equal 6', () => {
        expect(timeRequiredToBuy([2, 3, 2], 2)).toBe(6);
    });
    test('tickets = [5,1,1,1], k = 0 to equal 8', () => {
        expect(timeRequiredToBuy([5, 1, 1, 1], 0)).toBe(8);
    });
    test('tickets = [84,49,5,24,70,77,87,8], k = 3 to equal 154', () => {
        expect(timeRequiredToBuy([84, 49, 5, 24, 70, 77, 87, 8], 3)).toBe(154);
    });
});
