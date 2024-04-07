/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    const openBrackets = [];
    const asterisks = [];

    for (let i = 0; i < s.length; i++) {
        const ch = s[i];
        if (ch == '(') {
            openBrackets.push(i);
        } else if (ch == '*') {
            asterisks.push(i);
        } else {
            if (openBrackets.length > 0) {
                openBrackets.pop();
            } else if (asterisks.length > 0) {
                asterisks.pop();
            } else {
                return false;
            }
        }
    }

    while (openBrackets.length > 0 && asterisks.length > 0) {
        if (openBrackets[openBrackets.length - 1] > asterisks[asterisks.length - 1]) {
            return false;
        }
        openBrackets.pop();
        asterisks.pop();
    }

    return openBrackets.length === 0;
};
module.exports = checkValidString;