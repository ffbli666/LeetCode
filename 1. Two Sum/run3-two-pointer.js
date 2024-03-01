/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
let twoSum = function (nums, target) {
    const numsIndex = nums.map((num, index) => [num, index]);
    numsIndex.sort((a, b) => a[0] - b[0]);
    let left = 0;
    let right = numsIndex.length - 1;
    while (left < right) {
        const leftNum = numsIndex[left];
        const rightNum = numsIndex[right];
        const sum = leftNum[0] + rightNum[0];
        if (sum === target) {
            return [leftNum[1], rightNum[1]];
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }
    return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 2, 3], 6));