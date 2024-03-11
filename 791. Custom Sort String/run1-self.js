/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    let nonOrder = '';
    const map = new Map(order.split('').map((s) => [s, 0]));
    for (let i in s) {
        if (map.has(s[i])) {
            map.set(s[i], map.get(s[i]) + 1);
        }
        else {
            nonOrder += s[i];
        }
    }
    let ans = '';
    map.forEach((value, key) => {
        if (value >= 1) {
            ans += key.repeat(value);
        }
    });
    return ans + nonOrder;
};
module.exports = customSortString;
// 以 order 為 map