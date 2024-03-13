/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    if (n === 1) {
        return 1;
    }
    let left = 1;
    let leftSum = 1;
    let right = n;
    let rightSum = n;
    while (left < n && right > 1) {
        if (leftSum < rightSum) {
            left++;
            leftSum += left;
        }
        else if (leftSum > rightSum) {
            right--;
            rightSum += right;
        }
        else if (leftSum === rightSum) {
            if (left == right) {
                return left;
            }
            left++;
            leftSum += left;
            right--;
            rightSum += right;
        }
    }
    return -1;
};
module.exports = pivotInteger;