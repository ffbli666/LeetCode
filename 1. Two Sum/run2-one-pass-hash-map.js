/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const curr = nums[i];
        const x = target - curr;
        if (map.has(x)) {
            return [map.get(x), i];
        }
        map.set(curr, i);
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 2, 3], 6));

//用 ｍap 沒有比較好