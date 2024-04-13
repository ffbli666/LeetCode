/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let max = Math.max(a.length, b.length);
    a = a.padStart(max, '0');
    b = b.padStart(max, '0');
    let ans = [];
    let carry = 0;
    for (let i = max - 1; i >= 0; i--) {
        let Ca = a[i] === undefined ? 0 : parseInt(a[i], 10);
        let Cb = b[i] === undefined ? 0 : parseInt(b[i], 10);
        let sum = Ca + Cb + carry;
        if (sum >= 2) {
            carry = 1;
            sum = sum - 2;
        } else {
            carry = 0;
        }
        ans.push(sum);
    }
    if (carry == 1) {
        ans.push(1);
    }
    return ans.reverse().join('');
};
module.exports = addBinary;