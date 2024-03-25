/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicates = function (nums) {
    if (nums.length <= 1) {
        return [];
    }
    const map = {};
    const ans = new Set();
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        if (!map[curr]) {
            map[curr] = 1;
        } else {
            map[curr] = map[curr] + 1;
            if (map[curr] >= 2) {
                ans.add(curr);
            }
        }
    }
    return [...ans];
};

module.exports = findDuplicates;
