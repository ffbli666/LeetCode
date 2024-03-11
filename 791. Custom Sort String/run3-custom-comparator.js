/**
 * @param {string} order
 * @param {string} s
 * @return {string}
 */
var customSortString = function (order, s) {
    return s.split('').sort((a, b) => {
        let afind = order.indexOf(a) === -1 ? 99 : order.indexOf(a);
        let bfind = order.indexOf(b) === -1 ? 99 : order.indexOf(b);
        return afind - bfind;
    }).join('');
};
module.exports = customSortString;
// 比1省記憶體,但比較慢