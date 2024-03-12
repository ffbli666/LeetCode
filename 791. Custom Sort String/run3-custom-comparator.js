/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    const map = {};
    for (let i in order) {
        map[order[i]] = i;
    }
    return s.split('').sort((a, b) => {
        let afind = map[a] === undefined ? 99 : map[a];
        let bfind = map[b] === undefined ? 99 : map[b];
        return afind - bfind;
    }).join('');
};
module.exports = customSortString;
// 比1省記憶體,但比較慢
// 調整 map 有快一點