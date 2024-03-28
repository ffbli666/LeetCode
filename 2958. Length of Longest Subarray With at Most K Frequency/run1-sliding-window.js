/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
    let ans = 0;
    let start = -1;
    let frequencyMap = {};

    for (let end = 0; end < nums.length; end++) {
        let endNum = nums[end];
        frequencyMap[endNum] = frequencyMap[endNum] ? frequencyMap[endNum] + 1 : 1;
        while (frequencyMap[endNum] > k) {
            start++;
            frequencyMap[nums[start]]--;
        }
        ans = Math.max(ans, end - start);
    }
    return ans;
}
module.exports = maxSubarrayLength;