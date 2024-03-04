/**
 * @param {number} x
 * @return {boolean}
 */

var longestCommonPrefix = function (strs) {
    if (!strs || strs.length <= 0) return "";
    let ans = "";
    for (let i = 0; i < strs[0].length; i++) {
        const char = strs[0][i];
        for (let j = 0; j < strs.length; j++) {
            if (char !== strs[j][i]) {
                return ans;
            }
        }
        ans += char;
    }
    return ans;
};
module.exports = longestCommonPrefix;
