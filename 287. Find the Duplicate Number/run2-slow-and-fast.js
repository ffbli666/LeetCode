/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
    let slow = nums[0];
    let fast = nums[0];

    // Find the intersection point of the two pointers
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Find the entrance of the cycle
    slow = nums[0];
    while (slow != fast) {
        slow = nums[slow];
        fast = nums[fast];
    }

    return slow;
};

module.exports = findDuplicate;
/*
cool solutions
the same with 141. linked list cycle
Floyd's tortoise and hare algorithm.

1.The key intuition behind this method is that if there's a cycle in the linked list, the fast and slow pointers will eventually meet.

2.We treat the array as a linked list, where the index represents the node and the value at that index represents the next node.

3.Using the fast-slow pointers technique, we traverse the linked list.

4.The slow pointer moves one step at a time while the fast pointer moves two steps at a time.

5.If there's a cycle in the linked list (indicating a duplicate number), the fast and slow pointers will eventually meet.

6.After identifying the meeting point, we reset the slow pointer to the start and move both pointers at the same pace until they meet again. The meeting point will be the duplicate number.

 */
