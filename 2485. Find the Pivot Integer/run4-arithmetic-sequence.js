/**
 * @param {number} n
 * @return {number}
 */
/*
    totalSum=n*(n+1)/2 //sum of arithmetic sequence
    [1+2+...+x=x+...+n]
    e.g. 1+2+3+4+5+6 = 6+7+8
    x(x+1)/2 = (n-x+1)(x+n)/2
    (x+x^2)/2 =(nx-x^2+x+n^2-nx+n)/2
    (x+x^2)/2 =(n^2-x^2+x+n)/2
    x+x^2 =n^2-x^2+x+n
    2x^2 = n^2+n
    x=sqrt((n^2+n)/2);
 */
var pivotInteger = function (n) {
    if (n === 1) {
        return 1;
    }
    const sum = (n * (n + 1) / 2);
    const pivot = Math.sqrt(sum);
    if (Number.isInteger(pivot) && pivot * pivot === sum) {
        return pivot;
    }
    return -1;
};
module.exports = pivotInteger;
// 應該是最快