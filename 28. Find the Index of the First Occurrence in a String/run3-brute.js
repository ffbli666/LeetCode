/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    const haylength = haystack.length;
    const needlelength = needle.length;
    if (haylength < needlelength)
        return -1;

    for (let i = 0; i <= (haylength - needlelength); i++) {
        if (haylength.substring(i, i + needlelength) === needle) {
            return i;
        }
    }
    return -1;
};
module.exports = strStr;