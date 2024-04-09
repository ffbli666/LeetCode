/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
    let time = 0;
    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            time += Math.min(tickets[k], tickets[i]);
        } else {
            time += Math.min(tickets[k] - 1, tickets[i]);
        }
    }
    return time;
};
module.exports = timeRequiredToBuy;