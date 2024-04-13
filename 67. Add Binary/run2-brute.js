/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    i = a.length - 1;
    j = b.length - 1;
    let ans = [];
    let carry = 0;
    while (i >= 0 || j >= 0 || carry == 1) {
        if (i >= 0) {
            carry += parseInt(a.charAt(i--), 10);
        }
        if (j >= 0) {
            carry += parseInt(b.charAt(j--), 10);
        }
        ans.push(carry % 2);
        carry = Math.floor(carry / 2);
    }
    return ans.reverse().join('');
};
module.exports = addBinary;