/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

let dfs = (root, isLeft) => {
    if (root === null) {
        return 0;
    }
    if (root.left === null && root.right === null) {
        return isLeft ? root.val : 0;
    }
    return dfs(root.left, true) + dfs(root.right, false);
}

var sumOfLeftLeaves = function (root) {
    return dfs(root, false);
};
module.exports = sumOfLeftLeaves;