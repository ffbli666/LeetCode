/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    if (k <= 0 || nums.length < 1) {
        return 0;
    }
    let maxElement = Math.max(...nums);
    let ans = 0;
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        if (nums[end] == maxElement) {
            k--;
        }
        while (!k) {
            if (nums[start] == maxElement) {
                k++;
            }
            start++;
        }
        ans += start;
    }
    return ans;
};
module.exports = countSubarrays;