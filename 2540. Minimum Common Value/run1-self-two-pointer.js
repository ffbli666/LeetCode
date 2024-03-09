/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let c1 = 0;
    let c2 = 0
    while (c1 < nums1.length && c2 < nums2.length) {
        if (nums1[c1] === nums2[c2]) {
            return nums1[c1];
        }
        else if (nums1[c1] > nums2[c2]) {
            c2++;
        }
        else {
            c1++;
        }
    }
    return -1;
};

module.exports = getCommon;
// 這個比較快,且記憶體比較少