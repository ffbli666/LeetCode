/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const x = target - curr;
        if (map[x] !== undefined) {
            return [map[x], i];
        }
        map[curr] = i;
    }
    return [];
};

module.exports = twoSum;