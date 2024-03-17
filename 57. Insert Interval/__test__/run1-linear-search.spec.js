const insert = require('../run1-linear-search.js');

describe('57. Insert Interval', () => {
    test('intervals = [[1,3],[6,9]], newInterval = [2,5] to equal [[1,5],[6,9]]', () => {
        expect(insert([[1, 3], [6, 9]], [2, 5])).toEqual([[1, 5], [6, 9]]);
    });
    test('intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8] to equal [[1,2],[3,10],[12,16]]', () => {
        expect(insert([[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], [4, 8])).toEqual([[1, 2], [3, 10], [12, 16]]);
    });
    test('intervals = [], newInterval = [5,7] to equal [[5,7]]', () => {
        expect(insert([], [5, 7])).toEqual([[5, 7]]);
    });
    test('intervals = [[1,5]], newInterval = [2,3] to equal [[1,5]]', () => {
        expect(insert([[1, 5]], [2, 3])).toEqual([[1, 5]]);
    });
    test('intervals = [[1,5]], newInterval = [2,7] to equal [[2,7]]', () => {
        expect(insert([[1, 5]], [2, 7])).toEqual([[1, 7]]);
    });
    test('intervals = [[1,5]], newInterval = [6,8] to equal [[1,5],[6,8]]', () => {
        expect(insert([[1, 5]], [6, 8])).toEqual([[1, 5], [6, 8]]);
    });
    test('intervals = [[1,5]], newInterval = [0,3] to equal [[0,5]]', () => {
        expect(insert([[1, 5]], [0, 3])).toEqual([[0, 5]]);
    });
    test('intervals = [[1,5]], newInterval = [0,0] to equal [[0,0],[1,5]]', () => {
        expect(insert([[1, 5]], [0, 0])).toEqual([[0, 0], [1, 5]]);
    });
    test('intervals = [[1,5]], newInterval = [0,6] to equal [[0, 6]]', () => {
        expect(insert([[1, 5]], [0, 6])).toEqual([[0, 6]]);
    });
    test('intervals = [[0,5],[9,12]], newInterval = [7,16] to equal [[0,5],[7,16]]', () => {
        expect(insert([[0, 5], [9, 12]], [7, 16])).toEqual([[0, 5], [7, 16]]);
    });
});
