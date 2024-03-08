/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    const map = {};
    nums.forEach((n) => {
        map[n] = (map[n] !== undefined) ? map[n] + 1 : 1;
    })
    const count = {}
    for (let key in map) {
        let val = map[key];
        count[val] = (count[val] !== undefined) ? count[val] + val : val;
    }
    const ans = Object.keys(count);
    return count[ans[ans.length - 1]];
};

module.exports = maxFrequencyElements;
