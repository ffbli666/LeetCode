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
    for (let i = 0; i < s.length; i++) {
        if (wordToValue[s[i]] < wordToValue[s[i + 1]]) {
            ans -= wordToValue[s[i]];
        } else {
            ans += wordToValue[s[i]];
        }
    }
    return ans;
};

module.exports = romanToInt;
