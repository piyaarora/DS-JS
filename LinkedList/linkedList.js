class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    getSize() {
        return this.size;
    }

    isEmpty() {
        return this.size === 0
    }

    prepend(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let prev = this.head;
            while (prev.next) {
                prev = prev.next
            }
            prev.next = node;
            node.next = null;
        }
        this.size++
    }

    insert(value, index) {
        if (index < 0 || index > this.size) {
            console.log("invalid index");
            return;
        }
        else if (index === 0) {
            this.prepend(value);
        }
        else {
            let node = new Node(value)
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next; // move prev 
            }
            node.next = prev.next;
            prev.next = node
            this.size++
        }
    }

    removeFrom(index) {
        if (index < 0 || index > this.size) {
            console.log("invalid index")
            return
        }
        let removedNode;
        if (index === 0) {
            removedNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removedNode = prev.next;
            prev.next = removedNode.next;
            removedNode.next = null
        }
        this.size--
        return removedNode.value;
    }

    removeValue(value) {
        if (this.isEmpty()) {
            console.log("No node available");
            return null
        }
        if (this.head.value === value) {
            this.head = this.head.next;
            this.size--;
        }
        else {
            let prev = this.head
            while (prev.next && prev.next.value !== value) {
                prev = prev.next
            }
            if (prev.next) {
                let removedNode = prev.next;
                prev.next = removedNode.next
                this.size--;
                return value;
            }
            return null
        }
    }

    search(value) {
        if (this.isEmpty()) {
            return -1
        }
        let i = 0;
        let curr = this.head
        while (curr) {
            if (curr.value === value) {
                return i
            }
            curr = curr.next
            i++;
        }
        return -1;
    }

    reverse() {
        let curr = this.head;
        let prev = null;
        while (curr) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    print() {
        if (this.isEmpty()) {
            console.log(`List is empty`)
        } else {
            let curr = this.head;
            let str = '';
            while (curr) {
                str += `${curr.value} `;
                curr = curr.next;
            }
            console.log(str)
        }
    }
}

const list = new LinkedList();
console.log(list.getSize());
console.log(list.isEmpty());
list.prepend(10)
list.prepend(20)
list.prepend(30)
console.log(list.getSize());
list.print();
list.append(50)
list.print();
list.insert(25, 2)
list.insert(10, 0)
list.insert(10, -1)
list.print();
console.log("************")
list.removeFrom(0);
list.removeFrom(1);
list.print();
list.removeValue(25);
console.log("************")
list.print();
console.log("************")
console.log('search', list.search(20))
console.log('search', list.search(10))
console.log("************")
list.reverse()
list.print();


  // append = O(n)
  // prepend = O(1)
