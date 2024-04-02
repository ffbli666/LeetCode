/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    let objS = {}
    let objT = {}
    for (let i = 0; i < s.length; i++) {
        let cs = s[i];
        let ct = t[i];
        if (objS[cs] !== objT[ct]) {
            return false
        }
        objS[cs] = i + 1;
        objT[ct] = i + 1;
    }
    return true
};
module.exports = isIsomorphic;