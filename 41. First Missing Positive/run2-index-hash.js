/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const size = nums.length;
    let contains1 = false;
    for (let i = 0; i < size; i++) {
        let curr = nums[i];
        if (curr === 1) {
            contains1 = true;
        }
        if (curr <= 0 || curr > size) {
            nums[i] = 1;
        }
    }

    if (!contains1) return 1;

    for (let i = 0; i < size; i++) {
        let curr = Math.abs(nums[i]);
        if (curr === size) {
            nums[0] = - Math.abs(nums[0]);
        } else {
            nums[curr] = - Math.abs(nums[curr]);
        }
    }

    for (let i = 1; i < size; i++) {
        if (nums[i] > 0) {
            return i;
        }
    }

    if (nums[0] > 0) {
        return size;
    }

    return size + 1;
};

module.exports = firstMissingPositive;