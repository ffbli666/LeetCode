/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxSubarrayLength = function (nums, k) {
    let n = nums.length;
    let frequencyMap = {};
    let start = 0;
    let charsWithFreqOverK = 0;

    for (let end = 0; end < n; end++) {
        frequencyMap[nums[end]] = frequencyMap[nums[end]] ? frequencyMap[nums[end]] + 1 : 1;
        if (frequencyMap[nums[end]] == (k + 1)) {
            charsWithFreqOverK++;
        }
        if (charsWithFreqOverK > 0) {
            frequencyMap[nums[start]]--;
            if (frequencyMap[nums[start]] == k) {
                charsWithFreqOverK--;
            }
            start++;
        }
    }
    return n - start;
}
module.exports = maxSubarrayLength;