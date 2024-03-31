/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    if (nums[0] >= target) {
        return 0;
    }
    if (nums[nums.length - 1] < target) {
        return nums.length;
    }

    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
        let mid = Math.floor((l + r) / 2);
        if (nums[mid] < target) {
            l = mid + 1;
        } else if (nums[mid] > target) {
            r = mid - 1;
        } else {
            return mid;
        }
    }
    return l;
};
module.exports = searchInsert;