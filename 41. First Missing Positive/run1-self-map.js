/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const size = nums.length;
    const map = Array(size + 1).fill(0);
    for (let i = 0; i < size; i++) {
        if (nums[i] > 0 && nums[i] <= size) {
            map[nums[i]] = 1;
        }
    }
    for (let i = 1; i <= size; i++) {
        if (map[i] === 0) {
            return i;
        }
    }
    return size + 1;
};

module.exports = firstMissingPositive;