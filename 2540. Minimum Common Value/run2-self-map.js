/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function (nums1, nums2) {
    let map = {};
    nums1.forEach((n) => {
        map[n] = 1;
    });
    for (let i = 0; i < nums2.length; i++) {
        if (map[nums2[i]] === 1) {
            return nums2[i];
        }
    }
    return -1;
};

module.exports = getCommon;