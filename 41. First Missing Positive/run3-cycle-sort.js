/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const size = nums.length;
    let i = 0;
    while (i < size) {
        const curr = nums[i];
        if (curr > 0 && curr <= size && curr !== nums[curr - 1]) {
            nums[i] = nums[curr - 1];
            nums[curr - 1] = curr;
        } else {
            i++;
        }
    }

    for (let i = 0; i < size; i++) {
        if (nums[i] != i + 1) {
            return i + 1;
        }
    }
    return size + 1;
};

module.exports = firstMissingPositive;