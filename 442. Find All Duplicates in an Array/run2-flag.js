/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicates = function(nums) {
    const ans = [];
    for (let i = 0; i < nums.length; i++) {
        const x = Math.abs(nums[i]);
        if (nums[x - 1] < 0) {
            ans.push(x);
        }
        nums[x - 1] *= -1;
    }
    return ans;
};

module.exports = findDuplicates;
/*
cool solutions
Because each element in nums appears once or twice.
 */
