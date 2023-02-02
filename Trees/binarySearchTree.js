class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value) {
        const newNode = new Node(value)
        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        // value is smaller than root we move the value to left
        if (newNode.value < root.value) {
            // Scenario 1 : check if left node is empty
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else if (newNode.value > root.value) {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    //search to check if value already exists after insertion
    search(root, value) {
        if (!root) {
            return false;
        } else {
            if (root.value === value) {
                return true
            }
            else if (value < root.value) {
                return this.search(root.left, value)
            }
            else if (value > root.value) {
                return this.search(root.right, value)
            }
        }
    }
    //traversal
    // preorder -> root - left - right
    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    // inorder -> left - root - right
    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    // postorder -> left - right - root
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }

    // breadth first search algo
    levelOrder() {
        let queue = [];
        queue.push(this.root);
        while (queue.length) {
            let curr = queue.shift();
            // console.log(curr)
            console.log(curr.value)
            if (curr.left) {
                queue.push(curr.left)
            }
            if (curr.right) {
                queue.push(curr.right)
            }
        }
    }

    min(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value)
    }

    deleteNode(root, value) {
        if (this.isEmpty()) {
            return root
        }
        //check for the value in the tree
        if (value < root.value) {
            root.left = this.deleteNode(root.left, value)
        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value)
        } else {
            // if it is a leaf node
            if (!root.left && !root.right) {
                return null
            }
            //has one child node
            if (!root.left) {
                return root.right
            } else if (!root.right) {
                return root.left
            }
            // has two child nodes
            root.value = this.min(root.right);
            root.right = this.deleteNode(root.right, root.value)
        }
        return root
    }
}


const bst = new BinarySearchTree()
console.log("Is tree empty?", bst.isEmpty());
bst.insert(10)
bst.insert(5)
bst.insert(15)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root, 10))
console.log(bst.search(bst.root, 5))
console.log(bst.search(bst.root, 15))
console.log(bst.search(bst.root, 25))

console.log("********* pre order ***********")
bst.preOrder(bst.root)
console.log("********* in order ***********")
bst.inOrder(bst.root)
console.log("******** post order ************")
bst.postOrder(bst.root)

console.log("********* level order ***********")
bst.levelOrder()

console.log("********* min ***********")
console.log(bst.min(bst.root))

console.log("********* max ***********")
console.log(bst.max(bst.root))

console.log("********* delt ***********")
bst.delete(10)
bst.levelOrder()
