/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    if (n === 1) {
        return 1;
    }
    const prefixMap = {};
    let prefixSum = 0;
    for (let i = 1; i < n; i++) {
        prefixSum += i;
        prefixMap[prefixSum] = i;
    }
    prefixSum = 0;
    for (let i = n; i > 1; i--) {
        prefixSum += i;
        const hit = prefixMap[prefixSum];
        if (hit !== undefined && i === hit) {
            return hit;
        }
    }
    return -1;
};
module.exports = pivotInteger;
//比1較慢，記憶體比較多