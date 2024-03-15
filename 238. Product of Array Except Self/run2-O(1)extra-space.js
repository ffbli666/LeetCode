/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    // prefix
    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    // suffix
    let product = 1;
    for (let i = n - 2; i >= 0; i--) {
        product = product * nums[i + 1];
        result[i] = result[i] * product;
    }

    return result;
};
module.exports = productExceptSelf;
