
/**
 * Definition for a binary tree node.
 * */
function TreeNode(val) {
    this.val = val;
     this.left = this.right = null;
}

function generateTree(arr) {
    let root = new TreeNode(arr[0]);
    let par = root;
    let child = 0;
    let waitLeft = true;
    let treeArr = [root];

    while(child < arr.length) {
        child ++;
        // if(arr[child] !== null) {
            const newTree = arr[child] !== null ? new TreeNode(arr[child]) : null;
            if(waitLeft) {
                waitLeft =false;
                par.left = newTree;
            } else {
                waitLeft=true;
                par.right = newTree;
                // 叶子挂满了移出去
                treeArr.shift();
                par = treeArr[0];
            }
            // 塞进来
            arr[child] !== null && treeArr.push(newTree);
        // }
    }
    // const node = setLeaf(0)
    console.log(arr)
    return root
}