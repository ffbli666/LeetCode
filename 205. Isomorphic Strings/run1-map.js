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
        if (objS[cs] && (objS[cs] !== ct)) {
            return false
        }
        objS[cs] = ct;
        if (objT[ct] && (objT[ct] !== cs)) {
            return false
        }
        objT[ct] = cs;
    }
    return true
};
module.exports = isIsomorphic;