/**
 * @param {string} s
 * @return {number}
 */

const wordToValue = {
    'I': 1,
    'IV': 4,
    'IX': 9,
    'V': 5,
    'X': 10,
    'XL': 40,
    'XC': 90,
    'L': 50,
    'C': 100,
    'CD': 400,
    'CM': 900,
    'D': 500,
    'M': 1000
}
var romanToInt = function (s) {
    const wordToCount = {};
    let i = s.length - 1;
    while (i >= 0) {
        const oneChar = s[i];
        const doubleChar = s[i - 1] + oneChar ;
        let hit = undefined;
        if (wordToValue[doubleChar] !== undefined) {
            hit = doubleChar;
            i = i - 2;
        } else {
            hit = oneChar;
            i--;
        }
        wordToCount[hit] = (wordToCount[hit] === undefined) ? 1 : wordToCount[hit] = wordToCount[hit] + 1;
    }
    let ans = 0;
    for (const key in wordToCount) {
        ans = ans + wordToValue[key] * wordToCount[key];
    }
    return ans;
};

module.exports = romanToInt;