var isHappy = function(n) {

};
const n = 19
console.log(isHappy(n))



var inorderTraversal = function(root) {
    let number = []
    function inorder(root){
        inorder(root.left)
        number.push(root.value)
        inorder(root.right)
    }
    inorder(root)
};

const root = [1,null,2,3]
console.log(inorderTraversal(root))



