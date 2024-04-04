/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function (s) {
    let openBrackets = 0;
    let max = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            openBrackets++;
        } else if (s[i] === ')') {
            openBrackets--;
        }
        max = Math.max(max, openBrackets);
    }
    return max;
};
module.exports = maxDepth;