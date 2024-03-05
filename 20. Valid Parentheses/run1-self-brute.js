/**
 * @param {string} s
 * @return {boolean}
 */
const left = {
    '(': ')',
    '{': '}',
    '[': ']',
};

var isValid = function (s) {
    if (!s || s.length <= 1) return false;
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (left[s[i]] !== undefined) {
            stack.push(left[s[i]]);
        }
        else if (stack.length == 0 || s[i] !== stack.pop()) {
            return false;
        }
    }
    return stack.length == 0;
};
module.exports = isValid;
