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
var minDiffInBST = function(root) {
    const INFINITY = Number.MAX_SAFE_INTEGER
    let minDifference = INFINITY
    let prevValue = -INFINITY

    inOrder(root)

    function inOrder(node){
        if(!node) return

        inOrder(node.left)

        if(prevValue !== -INFINITY){
            minDifference = Math.min(minDifference, Math.abs(node.val - prevValue))
        }

        prevValue = node.val

        inOrder(node.right)
    }
    return minDifference
};

const root = [4,2,6,1,3]
console.log(minDiffInBST(root))
