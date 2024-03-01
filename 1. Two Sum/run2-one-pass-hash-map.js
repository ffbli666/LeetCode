/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const x = target - curr;
        if (map.has(x)) {
            return [map.get(x), i];
        }
        map.set(curr, i);
    }
    return [];
};

module.exports = twoSum;
//用 ｍap 沒有比較好