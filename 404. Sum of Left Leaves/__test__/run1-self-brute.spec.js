const sumOfLeftLeaves = require('../run1-self-brute.js');
function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

describe('404. Sum of Left Leaves', () => {
    test('[3,9,20,null,null,15,7] to equal 24', () => {
        const node7 = new TreeNode(7);
        const node15 = new TreeNode(15);
        const node20 = new TreeNode(20, node15, node7);
        const node9 = new TreeNode(9);
        const root = new TreeNode(3, node9, node20);
        expect(sumOfLeftLeaves(root)).toBe(24);
    });
    test('[1] to equal 0', () => {
        const root = new TreeNode(1);
        expect(sumOfLeftLeaves(root)).toBe(0);
    });
});
