/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const length = intervals.length;
    if (length === 0) {
        return [newInterval];
    }
    const ans = [];
    let i = 0;
    while (i < length && intervals[i][1] < newInterval[0]) {
        ans.push(intervals[i]);
        i++;
    }

    while (i < length && newInterval[1] >= intervals[i][0]) {
        newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
        newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
        i++;
    }
    ans.push(newInterval);

    while (i < length) {
        ans.push(intervals[i]);
        i++;
    }
    return ans;
};

module.exports = insert;