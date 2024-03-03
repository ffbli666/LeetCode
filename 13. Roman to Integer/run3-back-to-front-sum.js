/**
 * @param {string} s
 * @return {number}
 */

const wordToValue = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
}
var romanToInt = function (s) {
    let ans = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        if (4 * wordToValue[s[i]] < ans) {
            ans -= wordToValue[s[i]];
        } else {
            ans += wordToValue[s[i]];
        }
    }
    return ans;
};

module.exports = romanToInt;

// 比 run2-front-to-back-sum 慢