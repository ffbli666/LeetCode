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
        let j = 0;
        while (j < needlelength && haystack[i + j] == needle[j])
            j++;
        if (j == needlelength) {
            return i;
        }
    }
    return -1;
};
module.exports = strStr;