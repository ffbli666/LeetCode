/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    const map = {};
    let max = 0;
    let total = 0;

    nums.forEach((n) => {
        map[n] = (map[n] !== undefined) ? map[n] + 1 : 1;
        let frequency = map[n];
        if (frequency > max) {
            max = frequency;
            total = frequency;
            // If we find an element with the max frequency, add it to the total
        } else if (frequency === max) {
            total += frequency;
        }
    })
    return total;
};

module.exports = maxFrequencyElements;
