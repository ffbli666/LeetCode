/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    if (n === 1) {
        return 1;
    }
    let left = 1;
    let right = n;
    const totalSum = n * (n + 1) / 2; //sum of arithmetic sequence
    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        if (mid * mid < totalSum) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    if (left * left === totalSum) {
        return left;
    }
    return -1;
};
module.exports = pivotInteger;
//比1快