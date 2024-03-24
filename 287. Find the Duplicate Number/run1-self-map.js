/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        let curr = nums[i];
        if (!map[curr]) {
            map[curr] = 1;
        } else {
            map[curr] = map[curr] + 1;
            if (map[curr] >= 2) {
                return curr;
            }
        }
    }
};

module.exports = findDuplicate;
