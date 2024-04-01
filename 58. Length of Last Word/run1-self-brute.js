/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let string = s.split(' ');
    for (let i = string.length - 1; i >= 0; i--) {
        if (string[i].length > 0) {
            return string[i].length;
        }
    }
    return 0;
};
module.exports = lengthOfLastWord;