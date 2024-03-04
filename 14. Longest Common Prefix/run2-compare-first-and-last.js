/**
 * @param {number} x
 * @return {boolean}
 */

var longestCommonPrefix = function (strs) {
    if (!strs || strs.length <= 0) return "";
    let ans = "";
    strs.sort();
    let s1 = strs[0];
    let s2 = strs[strs.length - 1];
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            return ans;
        }
        ans += s1[i];
    }
    return ans;
};
module.exports = longestCommonPrefix;

// 有比較快