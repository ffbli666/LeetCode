/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    const map = {}
    for (let i in s) {
        map[s[i]] = (map[s[i]] !== undefined) ? map[s[i]] + 1 : 1;
    }
    let ans = '';
    for (let i in order) {
        if (map[order[i]] > 0) {
            ans += order[i].repeat(map[order[i]]);
            map[order[i]] = 0;
        }
    }
    let nonOrder = '';
    for (let k in map) {
        if (map[k] > 0) {
            nonOrder += k.repeat(map[k]);
        }
    }
    return ans + nonOrder;
};
module.exports = customSortString;
// 以 s 為 map
// 跟1比較慢