/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const nums1Set = new Set(nums1);
    const ans = new Set();
    nums2.forEach((n) => {
        if (nums1Set.has(n)) {
            ans.add(n);
        }
    })

    return Array.from(ans);
};

module.exports = intersection;